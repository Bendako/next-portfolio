import React from 'react';

const AboutMeSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-muted-foreground">
              I&apos;m a passionate full-stack developer with expertise in building modern, scalable, and user-friendly web applications. 
              I enjoy turning complex problems into elegant solutions and I&apos;m always eager to learn new technologies.
            </p>
            <p className="text-muted-foreground">
              My current focus is on the Next.js, React and Node.js ecosystem, but I&apos;m proficient in a variety of technologies as highlighted in my tech stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;