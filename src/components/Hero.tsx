import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portraitImage from '@/assets/ashritha-portrait.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-subtle">
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Hello,
                <br />
                <span className="text-primary">I'm Ashritha</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Software Developer Instructor | Java Backend Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Building scalable backend systems and guiding future developers with passion for clean code and innovative solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Students Mentored
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large bg-gradient-primary p-2">
                <img
                  src={portraitImage}
                  alt="Ashritha Kodipunjula"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;