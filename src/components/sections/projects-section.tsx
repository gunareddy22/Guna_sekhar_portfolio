
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with admin panel, payment integration, and user accounts.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    projectUrl: "#",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool to help teams organize and track their work effectively.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "productivity app",
    projectUrl: "#",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Personal Blog Engine",
    description: "A lightweight and fast blogging platform built with a static site generator for performance.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "writing code",
    projectUrl: "#",
    tags: ["Next.js", "Markdown", "Vercel"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 md:py-16">
      <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
        My Projects
      </h2>
      <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've worked on. Each project showcases my skills in various technologies and my passion for development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
