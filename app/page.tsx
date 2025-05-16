"use client";

import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutmeSection';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/homepage';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutMeSection />
      <TechStack />
      <ProjectsSection /> 
    </div>
  );
}