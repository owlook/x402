import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { SiteCard } from "@/components/SiteCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import sitesData from "../../data/sites.json";

interface Site {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  logo?: string;
  rating?: number;
  recommended?: boolean;
}

const ITEMS_PER_PAGE = 12;

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  const sites: Site[] = sitesData;

  // Check for donation success message
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const success = params.get("success");
    const message = params.get("message");

    if (success === "true" && message) {
      toast({
        title: "Donation Successful! 🎉",
        description: decodeURIComponent(message),
        duration: 10000,
      });

      // Clean up URL parameters
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [toast]);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    return Array.from(new Set(sites.map((site) => site.category))).sort();
  }, [sites]);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    sites.forEach((site) => {
      site.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [sites]);

  // Filter sites
  const filteredSites = useMemo(() => {
    return sites.filter((site) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || site.category === selectedCategory;

      // Tags filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => site.tags?.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [sites, searchQuery, selectedCategory, selectedTags]);

  // Pagination
  const totalPages = Math.ceil(filteredSites.length / ITEMS_PER_PAGE);
  const paginatedSites = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSites.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredSites, currentPage]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient">
            x402 Payment Protocol Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated tools, APIs, and resources for the x402 open payment standard.
            Enable programmatic payments over HTTP with crypto-native efficiency.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Filters */}
        <div className="mb-12">
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="text-primary font-semibold">
              {filteredSites.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}
            </span>
            {" - "}
            <span className="text-primary font-semibold">
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredSites.length)}
            </span>{" "}
            of <span className="font-semibold">{filteredSites.length}</span> resources
          </p>
        </div>

        {/* Sites Grid */}
        {paginatedSites.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedSites.map((site, index) => (
                <SiteCard key={site.url} {...site} index={index} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => setCurrentPage(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No resources found matching your criteria.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
