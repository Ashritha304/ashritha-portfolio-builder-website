import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Ashritha Kodipunjula</h3>
            <p className="text-gray-medium">
              Software Developer Instructor & Java Backend Developer
            </p>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-gray-medium flex items-center justify-center space-x-2">
              <span>© {currentYear} Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Ashritha</span>
            </p>
          </div>

          {/* Right - Quick Links */}
          <div className="flex justify-end">
            <div className="flex space-x-6">
              <a 
                href="mailto:ashritha150kb@gmail.com"
                className="text-gray-medium hover:text-white transition-colors"
              >
                Email
              </a>
              <a 
                href="https://linkedin.com/in/ashritha-k-6282b8210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-medium hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-medium/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-medium text-sm mb-4 md:mb-0">
            Building scalable backend systems and guiding future developers.
          </p>
          <p className="text-xs text-gray-medium">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute bottom-6 right-6 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full shadow-large"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};

export default Footer;