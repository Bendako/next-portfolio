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
      title: "Jobs Center",
      description: "A comprehensive job tracking application for managing job applications, interviews, and career opportunities with an intuitive interface.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "Vercel"],
      imageUrl: "/jobcenterimage.png",
      githubUrl: "https://github.com/Bendako/jobs-center",
      liveUrl: "https://jobs-center.vercel.app/"
    },
    {
      title: "Next.js Starter CLI",
      description: "A powerful bash script that automates creating professional Next.js applications with TypeScript, Tailwind CSS, Convex database, and Clerk authentication. Features MCP server integration for Claude Desktop.",
      technologies: ["Shell", "JavaScript", "Next.js", "TypeScript", "Convex", "Clerk"],
      imageUrl: "/jobcenterimage.png",
      githubUrl: "https://github.com/Bendako/next-starter-script",
      liveUrl: "https://github.com/Bendako/next-starter-script"
    },
    {
      title: "Next.js Starter MCP Landing",
      description: "Professional marketing landing page for the Next.js Starter MCP tool. Features modern design, interactive demos, and comprehensive documentation to showcase the CLI automation capabilities.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
      imageUrl: "/next-mcp-landingpage.png",
      githubUrl: "https://github.com/Bendako/next-starter-mcp-landing-page",
      liveUrl: "https://next-starter-mcp-landing-page.vercel.app/"
    },
    {
      title: "LetterBlast",
      description: "An innovative 3D educational game where players practice English by shooting floating letters to form words. Features multiple difficulty levels, engaging 3D gameplay, and cross-platform support for learning through interactive entertainment.",
      technologies: ["Next.js", "TypeScript", "Three.js", "TailwindCSS", "React"],
      imageUrl: "/letter-blast-game.png",
      githubUrl: "https://github.com/Bendako/LetterBlast",
      liveUrl: "https://letter-blast.vercel.app/"
    },
    {
      title: "React Quiz App",
      description: "An interactive quiz application built with React featuring multiple categories, difficulty levels, and question types. Users can customize their quiz experience with options for number of questions (1-50), category selection (sports, entertainment, etc.), and difficulty settings.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      imageUrl: "/quiz-game.png",
      githubUrl: "https://github.com/Bendako/react-quiz-app",
      liveUrl: "https://react-quiz-app-iota.vercel.app/"
    },
    {
      title: "Expense Tracker App",
      description: "A comprehensive personal finance management application for tracking income and expenses. Features real-time balance calculation, transaction history, and an intuitive interface for adding and managing financial transactions with clear income/expense categorization.",
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      imageUrl: "/expense-tracker-app.png",
      githubUrl: "https://github.com/Bendako/Expense-Tracker-App",
      liveUrl: "https://expense-tracker-app-react.vercel.app/"
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
              {project.title !== "Next.js Starter CLI" && (
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
              )}
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
              <CardFooter className={`p-6 pt-0 flex gap-4 ${project.title === "Next.js Starter CLI" ? "justify-center" : ""}`}>
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
                {project.title !== "Next.js Starter CLI" && (
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
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;