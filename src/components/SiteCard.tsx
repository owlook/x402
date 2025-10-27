import { ExternalLink } from "lucide-react";
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
  index: number;
}

export const SiteCard = ({ name, url, description, category, tags, logo, index }: SiteCardProps) => {
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
                <div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {name}
                  </CardTitle>
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {category}
                  </Badge>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
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
