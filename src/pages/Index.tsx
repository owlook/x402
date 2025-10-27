import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { SiteCard } from "@/components/SiteCard";
import sitesData from "../../data/sites.json";

interface Site {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  logo?: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const sites: Site[] = sitesData;

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
            Explore Bitcoin Universe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of Bitcoin tools, wallets, explorers, and resources.
            Community-maintained and open source.
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
            Showing <span className="text-primary font-semibold">{filteredSites.length}</span> of{" "}
            <span className="font-semibold">{sites.length}</span> resources
          </p>
        </div>

        {/* Sites Grid */}
        {filteredSites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSites.map((site, index) => (
              <SiteCard key={site.url} {...site} index={index} />
            ))}
          </div>
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
