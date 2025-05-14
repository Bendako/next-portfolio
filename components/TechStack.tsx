import React from 'react';
import { FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 className="w-12 h-12" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-12 h-12" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="w-12 h-12" /> },
  { name: 'TypeScript', icon: <TbBrandTypescript className="w-12 h-12" /> },
  { name: 'React', icon: <FaReact className="w-12 h-12" /> },
  { name: 'Next.js', icon: <TbBrandNextjs className="w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" /> },
  { name: 'Express.js', icon: <SiExpress className="w-12 h-12" /> },
  { name: 'Python', icon: <FaPython className="w-12 h-12" /> },
];

const TechStack = () => {
  return (
    <section className="py-12 bg-background" id="tech-stack">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Tech I Know</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-8 justify-items-center">
          {technologies.map((tech) => (
            <div 
              key={tech.name} 
              className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-muted/50"
              title={tech.name}
            >
              <div className="text-primary mb-3 transition-transform duration-300 ease-in-out group-hover:scale-110">
                {tech.icon}
              </div>
              <p className="text-sm text-center text-muted-foreground">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 