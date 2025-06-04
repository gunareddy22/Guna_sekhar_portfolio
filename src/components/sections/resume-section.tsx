
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-12 md:py-16">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
        My Resume
      </h2>
      <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
        Here you can find a summary of my professional experience, skills, and education. Feel free to download a copy for your records.
      </p>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-center text-2xl text-primary">View & Download</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground">
            My resume provides a detailed look into my qualifications and the projects I've contributed to. 
            Click the button below to download the PDF version.
          </p>
          {/* Ensure resume.pdf is in the public folder */}
          <a href="/resume.pdf" download="John_Doe_Resume.pdf">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            Note: Please ensure you have a `resume.pdf` file in your `public` folder for the download to work.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default ResumeSection;
