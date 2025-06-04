
"use client";

import HeroSection from "@/components/hero-section";
import NavigationButtons from "@/components/navigation-buttons";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import ResumeSection from "@/components/sections/resume-section";
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 lg:p-12 bg-background text-foreground">
      <div className="w-full max-w-5xl space-y-8">
        <HeroSection />
        <NavigationButtons />
        <Separator className="my-6 md:my-8" />
        <ResumeSection />
        <Separator className="my-6 md:my-8" />
        <ProjectsSection />
        <Separator className="my-6 md:my-8" />
        <ContactSection />
      </div>
    </main>
  );
}
