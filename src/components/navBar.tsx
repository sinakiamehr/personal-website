import React from "react";

const NavBar: React.FC = () => {
  const handleMobileLinkClick = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-[var(--foreground)] tracking-tight">SK</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <a href="#summary" className="nav-link text-[var(--secondary)] hover:text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--card-bg)] hover:shadow-[var(--shadow-light)] hover:scale-105 active:scale-95">Summary</a>
              <a href="#projects" className="nav-link text-[var(--secondary)] hover:text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--card-bg)] hover:shadow-[var(--shadow-light)] hover:scale-105 active:scale-95">Projects</a>
              <a href="#skills" className="nav-link text-[var(--secondary)] hover:text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--card-bg)] hover:shadow-[var(--shadow-light)] hover:scale-105 active:scale-95">Skills</a>
              <a href="#education" className="nav-link text-[var(--secondary)] hover:text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--card-bg)] hover:shadow-[var(--shadow-light)] hover:scale-105 active:scale-95">Education</a>
              <a href="#experience" className="nav-link text-[var(--secondary)] hover:text-[var(--foreground)] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--card-bg)] hover:shadow-[var(--shadow-light)] hover:scale-105 active:scale-95">Experience</a>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-3 rounded-full text-[var(--secondary)] hover:text-[var(--foreground)] hover:bg-[var(--card-bg)] focus:outline-none transition-all duration-200"
              title="Toggle navigation menu"
              aria-label="Toggle navigation menu"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className="hidden md:hidden" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-3 bg-[var(--card-bg)] border-t border-[var(--border)] rounded-b-2xl mx-4 mt-4 shadow-[var(--shadow-medium)] backdrop-filter backdrop-blur-sm">
            <a
              href="#summary"
              className="nav-link-mobile text-[var(--secondary)] hover:text-[var(--foreground)] block px-5 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--background)] hover:shadow-[var(--shadow-light)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleMobileLinkClick}
            >
              Summary
            </a>
            <a
              href="#projects"
              className="nav-link-mobile text-[var(--secondary)] hover:text-[var(--foreground)] block px-5 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--background)] hover:shadow-[var(--shadow-light)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleMobileLinkClick}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="nav-link-mobile text-[var(--secondary)] hover:text-[var(--foreground)] block px-5 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--background)] hover:shadow-[var(--shadow-light)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleMobileLinkClick}
            >
              Skills
            </a>
            <a
              href="#education"
              className="nav-link-mobile text-[var(--secondary)] hover:text-[var(--foreground)] block px-5 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--background)] hover:shadow-[var(--shadow-light)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleMobileLinkClick}
            >
              Education
            </a>
            <a
              href="#experience"
              className="nav-link-mobile text-[var(--secondary)] hover:text-[var(--foreground)] block px-5 py-3.5 rounded-xl text-base font-medium hover:bg-[var(--background)] hover:shadow-[var(--shadow-light)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={handleMobileLinkClick}
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;