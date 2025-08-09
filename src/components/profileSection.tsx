import React from "react";
import Image from "next/image";

const ProfileSection: React.FC = () => {

    return (
        <section className="profile-section text-center animate-fade-in-up bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-0">
          {/* image div */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-[var(--border)] ring-opacity-50">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* top name+bio section  */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--foreground)] tracking-tight leading-none">
                Sina Kiamehr
              </h1>
              <p className="text-xl sm:text-2xl text-[var(--secondary)] font-medium">
                Full Stack Developer
              </p>
            </div>
            
            {/* personal links section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-4">
              <a 
                href="mailto:sinakiamehr7@gmail.com" 
                className="flex items-center gap-3 text-[var(--secondary)] hover:text-[var(--accent)] transition-colors duration-200 group"
              >
                <div className="p-2 rounded-full bg-[var(--card-bg)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200 shadow-[var(--shadow-light)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">sinakiamehr7@gmail.com</span>
              </a>
              
              <a 
                href="/Sina_Resume_t_8.8.25.pdf" 
                download 
                className="flex items-center gap-3 text-[var(--secondary)] hover:text-[var(--accent)] transition-colors duration-200 group"
              >
                <div className="p-2 rounded-full bg-[var(--card-bg)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200 shadow-[var(--shadow-light)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-medium">Download Resume</span>
              </a>
            </div>
          </div>
        </section>
    );
};

export default ProfileSection;