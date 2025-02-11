"use client"

import Image from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: "/api/placeholder/600/400",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: "/api/placeholder/600/400",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: "/api/placeholder/600/400",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: "/api/placeholder/600/400",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: "/api/placeholder/600/400",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    // Add more projects as needed
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = '/api/placeholder/600/400';
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-t-lg"
                    priority={false}
                    quality={75}
                    onError={handleImageError}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;