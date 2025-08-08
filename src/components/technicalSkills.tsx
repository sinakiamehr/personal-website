import React from "react";

const TechnicalSkills: React.FC = () => {
    return (
        <section id="skills" className="skills-section pt-20 -mt-20">
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-12 tracking-tight">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-[var(--shadow-light)] border border-[var(--border)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[var(--accent)] bg-opacity-10 mr-4">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">Languages</h3>
                </div>
                <p className="text-[var(--secondary)] text-left">JavaScript, Python, SQL, HTML5, CSS3</p>
              </div>
              
              <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-[var(--shadow-light)] border border-[var(--border)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[var(--accent)] bg-opacity-10 mr-4">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">Libraries/Frameworks</h3>
                </div>
                <p className="text-[var(--secondary)] text-left">React, D3.js, Bootstrap</p>
              </div>
              
              <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-[var(--shadow-light)] border border-[var(--border)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[var(--accent)] bg-opacity-10 mr-4">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">Tools</h3>
                </div>
                <p className="text-[var(--secondary)] text-left">Git, GitHub, Tableau, ImageJ, GraphPad, Adobe Illustrator, LC-MS, HPLC</p>
              </div>
              
              <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-[var(--shadow-light)] border border-[var(--border)] hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-[var(--accent)] bg-opacity-10 mr-4">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">Certifications</h3>
                </div>
                <ul className="space-y-2 text-[var(--secondary)] text-left">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    FreeCodeCamp – Responsive Web Design Certification
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    FreeCodeCamp – JavaScript Algorithms and Data Structures
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    FreeCodeCamp – Front End Development Libraries
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    FreeCodeCamp – Data Visualization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
};

export default TechnicalSkills;