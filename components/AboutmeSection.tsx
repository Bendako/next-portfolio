import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, GithubIcon, LinkedinIcon, Download } from 'lucide-react';

const AboutSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:bendk1994@gmail.com';
  };

  const handleResumeDownload = () => {
    // Implement resume download logic
    console.log('Downloading resume...');
  };

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              With over 5 years of experience in frontend development, I specialize
              in building responsive, accessible, and performant web applications
              using React, Next.js, and modern web technologies.
            </p>
            <p>
              I&apos;m passionate about creating intuitive user interfaces that solve
              real-world problems. My approach combines clean code practices with
              creative design solutions to deliver exceptional user experiences.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through
              technical writing and mentoring.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'UI/UX Design'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={handleContactClick}
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              onClick={handleResumeDownload}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;