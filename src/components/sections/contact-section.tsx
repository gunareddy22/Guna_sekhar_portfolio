
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-16">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
        Get In Touch
      </h2>
      <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
      </p>
      
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-2xl text-primary">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
            <Mail className="h-8 w-8 text-accent" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a href="mailto:john.doe@example.com" className="text-foreground hover:text-primary hover:underline">
                john.doe@example.com
              </a>
            </div>
          </div>
          <Separator />
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
            <Linkedin className="h-8 w-8 text-accent" />
            <div>
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:underline">
                linkedin.com/in/johndoe
              </a>
            </div>
          </div>
          <Separator />
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
            <Github className="h-8 w-8 text-accent" />
            <div>
              <h3 className="font-semibold text-lg">GitHub</h3>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:underline">
                github.com/johndoe
              </a>
            </div>
          </div>
          <Separator />
           <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
            <Phone className="h-8 w-8 text-accent" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a href="tel:+1234567890" className="text-foreground hover:text-primary hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
