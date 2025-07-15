import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "ashritha150kb@gmail.com",
    href: "mailto:ashritha150kb@gmail.com",
    color: "text-primary bg-primary/10"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 7330988675",
    href: "tel:+917330988675",
    color: "text-teal bg-teal/10"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/ashritha-k-6282b8210",
    color: "text-accent bg-accent/10"
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you're looking for a backend developer, need technical mentoring, 
                or want to collaborate on exciting projects, I'm always open to new opportunities 
                and meaningful conversations.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''} className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:shadow-medium hover:border-primary/30 transition-all duration-300 group">
                  <div className={`p-3 rounded-lg ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    <p className="text-lg font-medium text-charcoal group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>)}
            </div>

            {/* Quick Stats */}
            <div className="mt-12 p-6 bg-gradient-subtle rounded-lg border border-border">
              <h4 className="text-lg font-semibold text-charcoal mb-4">Quick Response</h4>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-teal" />
                <span>I typically respond within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up delay-200">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;