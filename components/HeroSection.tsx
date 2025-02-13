import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


type HeroSectionProps = {
  name?: string;
  title?: string;
  description?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  resumePath?: string;
};

const HeroSection = ({
  name = "Ben Dako",
  title = "Full Stack Developer",
  description = "I build things, automate shit",
  githubUrl = "https://github.com/Bendako",
  linkedinUrl = "https://www.linkedin.com/in/bendako/",
  resumePath = "@/public/ben-dako-cv.pdf"
}: HeroSectionProps) => {
  const { toast } = useToast();


  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = useCallback(async () => {
    try {
      const response = await fetch('/ben-dako-cv.pdf');
      
      if (!response.ok) {
        throw new Error('Failed to download resume');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.href = url;
      link.download = 'ben-dako-cv.pdf';
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "Resume downloaded successfully!",
        duration: 3000,
      });
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again later.",
        variant: "destructive",
      });
    }
  }, [toast]);


  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.p 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="text-lg font-medium text-primary"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1 
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              {name}
            </motion.h1>

            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-muted-foreground"
            >
              {title}
            </motion.p>

            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {description}
            </motion.p>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                className="gap-2"
                onClick={handleScrollToProjects}
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                asChild
              >
                <a
                  href={resumePath}
                  download
                  onClick={handleDownloadResume}
                  aria-label="Download Resume"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-4 pt-8"
            >
              <Button
                variant="ghost"
                size="icon"
                aria-label="Visit GitHub Profile"
                asChild
              >
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Visit LinkedIn Profile"
                asChild
              >
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          aria-label="Scroll to Projects"
          onClick={handleScrollToProjects}
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;