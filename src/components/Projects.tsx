import { Folder, ExternalLink, Github, Calendar, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-light">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcase of projects and contributions coming soon. This space will feature 
            my development work, teaching materials, and open-source contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Coming Soon Card */}
          <Card className="border-2 border-dashed border-primary/30 bg-background/50 hover:shadow-medium transition-all duration-300 animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Folder className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-charcoal mb-4">Projects Coming Soon</h3>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
                  I'm currently working on exciting projects that showcase my backend development skills, 
                  teaching methodologies, and contributions to open-source communities. Stay tuned for updates!
                </p>
              </div>

              {/* Planned Project Types */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Github,
                    title: "Backend APIs",
                    description: "RESTful services built with Java & Spring Boot"
                  },
                  {
                    icon: Calendar,
                    title: "Teaching Materials",
                    description: "Educational resources and coding tutorials"
                  },
                  {
                    icon: ExternalLink,
                    title: "Open Source",
                    description: "Contributions to community projects"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-charcoal mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Want to collaborate or learn more about my ongoing work?
                </p>
                <Button 
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Plus className="mr-2" size={20} />
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Future Project Placeholder */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 opacity-50">
            {[1, 2].map((index) => (
              <Card key={index} className="border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-muted rounded"></div>
                    <div className="h-4 bg-muted rounded w-32"></div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;