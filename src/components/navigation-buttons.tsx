
"use client";

import { Button } from "@/components/ui/button";
import { FileText, FolderKanban, Mail } from "lucide-react";

const NavigationButtons = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex justify-center space-x-3 md:space-x-4 py-6">
      <Button
        variant="default"
        size="lg"
        className="shadow-md"
        onClick={() => scrollToSection('resume')}
      >
        <FileText className="mr-2 h-5 w-5" />
        Resume
      </Button>
      <Button
        variant="default"
        size="lg"
        className="shadow-md"
        onClick={() => scrollToSection('projects')}
      >
        <FolderKanban className="mr-2 h-5 w-5" />
        Projects
      </Button>
      <Button
        variant="default"
        size="lg"
        className="shadow-md"
        onClick={() => scrollToSection('contact')}
      >
        <Mail className="mr-2 h-5 w-5" />
        Contact
      </Button>
    </nav>
  );
};

export default NavigationButtons;
