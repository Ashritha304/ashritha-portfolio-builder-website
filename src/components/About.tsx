import { GraduationCap, Code2, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "MTech in Computer Science & Engineering",
      institution: "Kakatiya University College of Engineering and Technology",
      year: "2025 (Expected)",
      icon: GraduationCap,
    },
    {
      degree: "BTech in Information Technology",
      institution: "Kakatiya University College of Engineering and Technology",
      year: "2022",
      icon: GraduationCap,
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "VMR Polytechnic",
      year: "2019",
      icon: GraduationCap,
    },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Backend Development",
      description: "Specialized in Java & Spring Boot with hands-on API development experience",
    },
    {
      icon: Users,
      title: "Teaching & Mentoring",
      description: "Guiding students in Python full-stack development at NxtWave",
    },
    {
      icon: Target,
      title: "Agile Practices",
      description: "Experienced in collaborative development using modern tools and methodologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio & Highlights */}
          <div className="space-y-8 animate-slide-up">
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Currently working as a <span className="text-primary font-semibold">Software Developer Instructor at NxtWave</span>, 
                guiding students in backend development with Python and related technologies. 
              </p>
              <p className="text-lg leading-relaxed">
                As an entry-level <span className="text-primary font-semibold">Java Backend Developer</span> with 1+ year of 
                hands-on experience in building RESTful APIs using Java and Spring Boot. Skilled in Agile, debugging, 
                Bitbucket, Jira, and Postman, with a strong drive to contribute to real-world scalable applications.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="animate-slide-up delay-200">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Educational Background</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border border-border hover:shadow-medium transition-all duration-300 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-teal" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-charcoal mb-1">
                          {item.degree}
                        </h4>
                        <p className="text-muted-foreground mb-2">{item.institution}</p>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;