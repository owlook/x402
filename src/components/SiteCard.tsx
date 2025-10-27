import { ExternalLink, Star, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface SiteCardProps {
  name: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  logo?: string;
  rating?: number;
  recommended?: boolean;
  index: number;
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-${i}`} className="h-4 w-4 fill-amber-400 text-amber-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative h-4 w-4">
        <Star className="h-4 w-4 text-amber-400 absolute" />
        <div className="overflow-hidden absolute w-1/2 h-full">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        </div>
      </div>
    );
  }

  return <div className="flex gap-0.5">{stars}</div>;
};

export const SiteCard = ({ name, url, description, category, tags, logo, rating, recommended, index }: SiteCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary hover:glow-orange transition-all duration-300 cursor-pointer group">
          <CardHeader className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {logo ? (
                  <img src={logo} alt={name} className="w-10 h-10 rounded-lg" />
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {name}
                    </CardTitle>
                    {recommended && (
                      <ThumbsUp className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                    {rating && rating > 0 && <StarRating rating={rating} />}
                  </div>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>
          {tags.length > 0 && (
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      </a>
    </motion.div>
  );
};
