import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange,
  tags,
  selectedTags,
  onTagToggle,
}: FilterBarProps) => {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedCategory === "All" ? "default" : "outline"}
          onClick={() => onCategoryChange("All")}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          <span className="text-sm text-muted-foreground mr-2">Filter by tags:</span>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </motion.div>
      )}
    </div>
  );
};
