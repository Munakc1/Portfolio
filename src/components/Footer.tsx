import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            Made with <Heart className="text-red-500 fill-current" size={16} /> by{' '}
            <span className="font-semibold text-foreground">Muna K.C.</span> © 2025 |
            Built with{' '}
            <span className="text-primary font-medium">React</span>,{' '}
            <span className="text-primary font-medium">TypeScript</span>,{' '}
            <span className="text-primary font-medium">Tailwind CSS</span> &{' '}
            <span className="text-primary font-medium">Material UI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
