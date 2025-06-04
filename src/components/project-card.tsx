
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  projectUrl: string;
  tags?: string[];
};

const ProjectCard = ({ title, description, imageUrl, imageHint = "project technology", projectUrl, tags }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" data-ai-hint={imageHint} />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map(tag => (
              <span key={tag} className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full mr-2 mb-2">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
