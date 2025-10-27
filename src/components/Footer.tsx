import { Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for the x402 community
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com/yourusername/x402"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              Open Source on GitHub
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Open payment protocol resource directory. Submit PRs to add new sites.
        </p>
      </div>
    </footer>
  );
};
