'use client';
import Image from "next/image";
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
      
      <main className="max-w-4xl mx-auto space-y-12 p-8 pt-4">
        
        {/* Profile Section */}
        <ProfileSection />

        {/* Social Links */}
        <SocialLinks />

        {/* Summary Section */}
        <Summary />

        {/* Technical Skills Section */}
        <TechnicalSkills />
        
        {/* Resume Section */}
        <Resume />

        {/* Projects Section */}
        <ProjectCards />
        
      </main>
    </div>
  );
}
