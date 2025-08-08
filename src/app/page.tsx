'use client';
import { useEffect } from 'react';
import { initializeAnimations } from '@/utils/animations';

// importing components
import  NavBar from "@/components/navBar";
import  ProfileSection from "@/components/profileSection";
import SocialLinks from "@/components/soicalLinks";
import Summary from "@/components/summary";
import TechnicalSkills from "@/components/technicalSkills";
import Resume from "@/components/resume";
import ProjectCards from "@/components/projectCards";

export default function Home() {
  
  
  useEffect(() => {
    initializeAnimations();
  }, []);

  
  
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      
      {/* Navigation Bar */}
      <NavBar />
      
      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <ProfileSection />
          <div className="mt-12">
            <SocialLinks />
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-24 pb-24">
          {/* Summary Section */}
          <Summary />

          {/* Projects Section */}          
          <ProjectCards />

          {/* Technical Skills Section */}
          <TechnicalSkills />
          
          {/* Resume Section */}
          <Resume />
        </div>

        
        
      </main>
    </div>
  );
}
