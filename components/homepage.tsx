"use client"

import Image, { StaticImageData } from 'next/image';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

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
      title: "AI SaaS Platform",
      description: "A comprehensive AI SaaS platform with features like conversation, image, video, music, and code generation.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "Stripe"],
      imageUrl: "/jobcenterimage.png", 
      githubUrl: "https://github.com/Bendako/next-ai-saas",
      liveUrl: "https://next-ai-saas-two.vercel.app/"
    },
    {
      title: "Discord Clone",
      description: "A real-time communication platform mirroring Discord's core functionalities.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Socket.io", "Prisma"],
      imageUrl: "/jobcenterimage.png",
      githubUrl: "https://github.com/Bendako/next-discord-clone",
      liveUrl: "https://next-discord-clone-production-a563.up.railway.app/"
    },
    {
      title: "Spotify Clone",
      description: "A music streaming service clone that replicates Spotify's user experience.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
      imageUrl: "/jobcenterimage.png",
      githubUrl: "https://github.com/Bendako/next-spotify-clone",
      liveUrl: "https://next-spotify-clone-swart.vercel.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution built with Next.js and TypeScript",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
      imageUrl: "/jobcenterimage.png",
      githubUrl: "https://github.com/username/project",
      liveUrl: "https://project-demo.com"
    },
    {
      title: "next-clerk-convex-starter-mcp",
      description: "A bash script that automates creating a fully configured Next.js app with TypeScript, Tailwind CSS, Convex, and Clerk",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Convex", "Clerk", "Shell"],
      imageUrl: "/jobcenterimage.png",
      githubUrl: "https://github.com/Bendako/next-starter-script",
      liveUrl: "https://github.com/Bendako/next-starter-script"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/600x400';
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
  );
};

export default ProjectsSection;