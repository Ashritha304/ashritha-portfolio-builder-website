import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Instructor",
      company: "NxtWave",
      period: "Present",
      location: "Remote",
      type: "Full-time",
      responsibilities: [
        "Teaching Python full-stack development to aspiring developers",
        "Conducting hands-on coding sessions and workshops",
        "Mentoring students through complex project builds",
        "Developing curriculum content for backend development courses",
        "Providing technical guidance and career mentorship"
      ],
      current: true,
    },
    {
      title: "Trainee Software Engineer",
      company: "Maxxton India Limited",
      period: "Mar 2022 - Jun 2023",
      location: "India",
      type: "Full-time",
      responsibilities: [
        "Built and optimized RESTful APIs using Java and Spring Boot",
        "Collaborated in Agile development teams using Scrum methodology",
        "Utilized version control and project management tools (Bitbucket, Jira)",
        "Performed API testing and debugging using Postman",
        "Participated in code reviews and maintained coding standards",
        "Worked on database integration with MySQL and Oracle"
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-light">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My journey in software development, from trainee engineer to instructor, 
            building both technical skills and mentoring capabilities.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`border-l-4 hover:shadow-medium transition-all duration-300 animate-slide-up ${
                exp.current 
                  ? 'border-l-teal bg-teal/5' 
                  : 'border-l-primary bg-background'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal">{exp.title}</h3>
                        <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.current 
                          ? 'bg-teal/10 text-teal' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  {exp.current && (
                    <div className="lg:ml-8">
                      <span className="inline-block px-4 py-2 bg-teal text-white rounded-full text-sm font-medium">
                        Current Role
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-charcoal mb-4">Key Responsibilities:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;