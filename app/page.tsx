"use client"

import Image, { StaticImageData } from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import  imagePlaceholer  from "./image-placeholder.webp";
import HeroSection from '@/components/HeroSection';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string | StaticImageData;
  githubUrl: string;
  liveUrl: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: imagePlaceholer,
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "TailwindCSS", "Redux"],
      imageUrl: imagePlaceholer,
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and TailwindCSS",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      imageUrl: imagePlaceholer,
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with MDX support and dynamic routing",
      technologies: ["Next.js", "MDX", "TailwindCSS", "Prisma"],
      imageUrl: imagePlaceholer,
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather dashboard with interactive maps and forecasts",
      technologies: ["React", "OpenWeather API", "TailwindCSS", "ChartJS"],
      imageUrl: imagePlaceholer,
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
  ];

  // const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  //   const target = e.currentTarget;
  //   target.onerror = null; // Prevent infinite loop
  //   target.src = 'https://placehold.co/600x400?text=Project+Image';
  // };

  return (
    <>
      <HeroSection />
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={`${project.title}-${index}`} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={project.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-t-lg"
                      priority={index < 2}
                      quality={75}
                      // onError={handleImageError}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
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
                      className="inline-flex items-center"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
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
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;