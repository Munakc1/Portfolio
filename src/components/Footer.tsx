import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1.5">
            Made with <Heart className="text-destructive fill-current" size={14} /> by
            <span className="font-semibold text-foreground">Muna K.C.</span> © 2025
          </p>
          <p className="text-muted-foreground text-xs">
            Built with <span className="text-primary font-medium">React</span> · <span className="text-primary font-medium">TypeScript</span> · <span className="text-primary font-medium">Tailwind CSS</span> · <span className="text-primary font-medium">Material UI</span>
          </p>
          <div className="flex gap-3">
            <a href="https://github.com/Munakc1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/muna-k-c-0739a9283" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
