
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-12 md:py-16">
      <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-6 border-4 border-primary shadow-lg">
        <AvatarImage src="https://placehold.co/200x200.png" alt="John Doe" data-ai-hint="profile person" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-2">
        John Doe
      </h1>
      <p className="text-xl md:text-2xl text-foreground mb-4">
        Software Developer & Tech Enthusiast
      </p>
      <p className="max-w-xl text-muted-foreground">
        Welcome to my personal hub! I specialize in creating modern and responsive web applications. Explore my projects and feel free to get in touch.
      </p>
    </section>
  );
};

export default HeroSection;
