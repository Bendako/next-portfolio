"use client"

// // types.ts
// interface Skill {
//     name: string;
//     icon: React.ReactNode;
//     proficiency: number;
//   }
  
//   interface Project {
//     title: string;
//     description: string;
//     technologies: string[];
//     imageUrl: string;
//     githubUrl: string;
//     liveUrl: string;
//   }
  
//   // components/HeroSection.tsx
//   import { ArrowRight } from 'lucide-react';
//   import { Button } from '@/components/ui/button';
  
//   const HeroSection = () => {
//     const handleExploreClick = () => {
//       document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//     };
  
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-background to-background/95">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
//               Full-Stack Developer & UI/UX Enthusiast
//             </h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-8">
//               Building beautiful, accessible, and performant web applications
//             </p>
//             <Button
//               onClick={handleExploreClick}
//               className="group"
//               size="lg"
//               aria-label="Explore my work"
//             >
//               Explore My Work
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   // components/AboutSection.tsx
//   const AboutSection = () => {
//     return (
//       <section id="about" className="py-20 bg-muted/30">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
//             <div className="prose prose-lg dark:prose-invert mx-auto">
//               <p className="text-muted-foreground">
//                 I&apos;m a passionate developer with expertise in building modern web applications.
//                 With a strong foundation in React, Next.js, and TypeScript, I create
//                 performant and accessible solutions that solve real-world problems.
//               </p>
//               <p className="text-muted-foreground">
//                 My approach combines technical excellence with user-centered design,
//                 ensuring that every project I work on delivers exceptional value and
//                 user experience.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   // components/SkillsSection.tsx
//   import { Card, CardContent } from '@/components/ui/card';
//   import { 
//     SiReact, 
//     SiNextdotjs, 
//     SiTypescript, 
//     SiTailwindcss 
//   } from 'react-icons/si';
  
//   const SkillsSection = () => {
//     const skills: Skill[] = [
//       { name: 'React', icon: <SiReact className="h-8 w-8" />, proficiency: 90 },
//       { name: 'Next.js', icon: <SiNextdotjs className="h-8 w-8" />, proficiency: 85 },
//       { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8" />, proficiency: 88 },
//       { name: 'TailwindCSS', icon: <SiTailwindcss className="h-8 w-8" />, proficiency: 92 },
//     ];
  
//     return (
//       <section className="py-20">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {skills.map((skill) => (
//               <Card key={skill.name} className="group hover:shadow-lg transition-shadow">
//                 <CardContent className="p-6">
//                   <div className="flex flex-col items-center">
//                     <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
//                       {skill.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
//                     <div className="w-full bg-muted rounded-full h-2">
//                       <div
//                         className="bg-primary rounded-full h-2 transition-all duration-500"
//                         style={{ width: `${skill.proficiency}%` }}
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   // components/ProjectsSection.tsx
//   import { CardHeader, CardFooter } from '@/components/ui/card';
//   import { Github, ExternalLink } from 'lucide-react';
  
//   const ProjectsSection = () => {
//     const projects: Project[] = [
//       {
//         title: "E-Commerce Platform",
//         description: "A full-featured e-commerce solution built with Next.js and TypeScript",
//         technologies: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
//         imageUrl: "/api/placeholder/600/400",
//         githubUrl: "https://github.com/username/project",
//         liveUrl: "https://project-demo.com"
//       },
//       // Add more projects as needed
//     ];
  
//     return (
//       <section className="py-20 bg-muted/30">
//         <div className="container px-4 mx-auto">
//           <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((project) => (
//               <Card key={project.title} className="overflow-hidden">
//                 <CardHeader>
//                   <img
//                     src={project.imageUrl}
//                     alt={project.title}
//                     className="w-full h-48 object-cover rounded-t-lg"
//                   />
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                   <p className="text-muted-foreground mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="p-6 pt-0 flex gap-4">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="gap-2"
//                     asChild
//                   >
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`View ${project.title} source code on GitHub`}
//                     >
//                       <Github className="h-4 w-4" />
//                       Code
//                     </a>
//                   </Button>
//                   <Button
//                     size="sm"
//                     className="gap-2"
//                     asChild
//                   >
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`Visit ${project.title} live demo`}
//                     >
//                       <ExternalLink className="h-4 w-4" />
//                       Live Demo
//                     </a>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   // components/ContactSection.tsx
//   import { Input } from '@/components/ui/input';
//   import { Textarea } from '@/components/ui/textarea';
  
//   const ContactSection = () => {
//     const handleSubmit = async (data: any) => {
//       // Implement form submission logic
//       console.log(data);
//     };
  
//     return (
//       <section className="py-20">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <Input
//                   type="text"
//                   placeholder="Your Name"
//                   aria-label="Your Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Your Email"
//                   aria-label="Your Email"
//                   required
//                 />
//               </div>
//               <div>
//                 <Textarea
//                   placeholder="Your Message"
//                   aria-label="Your Message"
//                   rows={6}
//                   required
//                 />
//               </div>
//               <Button type="submit" className="w-full">
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   // pages/index.tsx
//   const HomePage = () => {
//     return (
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <SkillsSection />
//         <ProjectsSection />
//         <ContactSection />
//       </main>
//     );
//   };
  
//   export default HomePage;

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
    // Add more projects as needed
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = '/api/placeholder/600/400';
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
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