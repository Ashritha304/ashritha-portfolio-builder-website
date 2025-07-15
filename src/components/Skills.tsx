import { Code, Database, Globe, Wrench, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "Python", "C"],
    color: "text-primary bg-primary/10"
  }, {
    title: "Frameworks & Libraries",
    icon: Globe,
    skills: ["Spring Boot", "Flask"],
    color: "text-teal bg-teal/10"
  }, {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Oracle"],
    color: "text-navy bg-navy/10"
  }, {
    title: "Frontend Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript"],
    color: "text-accent bg-accent/10"
  }, {
    title: "Development Tools",
    icon: Wrench,
    skills: ["Git", "Postman", "Jira", "Bitbucket"],
    color: "text-charcoal bg-charcoal/10"
  }, {
    title: "Practices & Methodologies",
    icon: Users,
    skills: ["Agile", "Debugging", "Code Reviews"],
    color: "text-primary bg-primary/10"
  }];
  const technicalProficiencies = [{
    skill: "Java & Spring Boot",
    level: 85
  }, {
    skill: "Python Development",
    level: 90
  }, {
    skill: "RESTful API Design",
    level: 80
  }, {
    skill: "Database Management",
    level: 75
  }, {
    skill: "Teaching & Mentoring",
    level: 95
  }, {
    skill: "Agile Methodologies",
    level: 85
  }];
  return <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and methodologies 
            that drive my development and teaching capabilities.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => <Card key={index} className="border border-border hover:shadow-medium transition-all duration-300 hover:border-primary/30 animate-scale-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold text-charcoal">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                      {skill}
                    </span>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Technical Proficiencies */}
        <div className="animate-slide-up">
          
          
        </div>

        {/* Key Strengths */}
        <div className="mt-16 text-center animate-fade-in" style={{
        animationDelay: '800ms'
      }}>
          <h3 className="text-2xl font-bold text-charcoal mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Problem-solving mindset with analytical approach", "Strong communication skills for teaching and collaboration", "Continuous learning and adaptation to new technologies"].map((strength, index) => <div key={index} className="flex items-start space-x-3 p-4">
                <CheckCircle className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-left">{strength}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;