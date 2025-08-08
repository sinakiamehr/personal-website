import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { gsap } from "gsap";

const ProjectCards: React.FC = () => {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const projectCardsRef = useRef<HTMLDivElement>(null);
  
  
  const toggleProjects = () => {
    if (projectCardsRef.current) {
      if (isProjectsVisible) {
        // Collapse animation
        gsap.to(projectCardsRef.current, { height: 0, duration: 0.5, overflow: 'hidden' });
      } else {
        // Expand animation
        gsap.to(projectCardsRef.current, { height: 'auto', duration: 0.5, overflow: 'visible' });
      }
    }
    setIsProjectsVisible(!isProjectsVisible);
  };  

  //resseting git push to test vercel deployement
// // State to track which website previews have failed to load
// const [previewErrors, setPreviewErrors] = useState<{[key: string]: boolean}>({}); 
// // Handler for iframe loading errors
// const handleIframeError = (link: string) => {
//   setPreviewErrors(prev => ({ ...prev, [link]: true }));
// };


  return (
        <section id="projects" className="w-full">
          <div className="text-center max-w-6xl mx-auto pt-20 -mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-12 tracking-tight">Featured Projects</h2>
            <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/choropleth_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">U.S.A. Education Choropleth</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Choropleth application, features an interactive choropleth map that visualizes the percentage
                   of U.S. adults with a bachelor's degree or higher, categorized by county. Utilizing color variations,
                    the map effectively represents educational attainment levels across different regions, providing a clear and insightful geographic
                     distribution of higher education in the United States.</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/choropleth-us-education-map"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://choropleth-us-education-map.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/treemap_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Treemap VideoGame Sales</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Treemap application, features an interactive treemap diagram visualizing the top 100
                   best-selling video games, grouped by their respective gaming platforms. This visualization provides insights into the distribution of popular
                    video game titles across various platforms, aiding in the analysis of sales trends within the gaming industry.​</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/treemap-diagram-videogame-sales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://treemap-diagram-videogame-sales.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/timer_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Timer Clock</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">
                  Timer application, features an interactive clock that counts up to a set time. Built using React, 
                  the clock allows users to set a specific time and displays the current time in real-time.​The break time 
                  features also allows user to set session/rest cycling to emulate a pomodoro timer.
                  </p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/timer-clock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://timer-clock-delta.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/calculator_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Calculator</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Calculator application, designed to emulate a real life Calculator. User can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The Application supports whole numbers as well as decimal numbers</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://calculator-pi-one-92.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
            
           
            </div>
            
            {/* More Projects Button */}
            <div className="text-center mt-12">
              <button
                onClick={toggleProjects}
                className="px-8 py-4 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-200 hover:scale-105 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium"
              >
                {isProjectsVisible ? 'Hide Projects' : 'Show More Projects'}
              </button>
            </div>
            
            {/* Collapsible Projects Grid */}
            <div ref={projectCardsRef} style={{ height: 0, overflow: 'hidden' }} className="mt-8">
              <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/heatmap_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Global Temperature Heatmap</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Heatmap application, displays an interactive heat map chart visualizing global temperature
                   variations from 1753 to 2015. It uses color gradients to represent temperature differences over time, offering a compelling way to explore climate
                    change trends and long-term shifts in global temperatures.​</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/heatmap-temp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://heatmap-temp.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/scatterplot_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Cycling Scatterplot</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Scatterplot application, features an interactive scatter plot graph that visualizes
                   the 35 fastest times up Alpe d&apos;Huez in professional bicycle racing. It highlights instances of doping among cyclists, offering insights into
                    performance trends and the impact of doping in the sport.​</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/scatterplot-cycling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://scatterplot-cycling.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/gdp_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">U.S. GDP Bar Chart</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Bar Chart application, features an interactive bar chart visualizing the United States&apos; 
                  Gross Domestic Product (GDP) over time. Built using D3.js, the chart allows users to hover over individual bars to view specific quarterly GDP data, 
                  providing a clear and detailed representation of the nation&apos;s economic growth.​</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/us-gdp-d3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://us-gdp-d3.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/Markdown_previewer_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Markdown Previewer</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Markdown Previewer application, designed to convert Markdown syntax into real-time HTML output. This tool allows users to input Markdown text and immediately view the rendered HTML, facilitating the writing and editing process for Markdown documents.</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/markdown-previewerV1.0.2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://markdown-previewer-v1-0-2.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/drumMachine_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Drum Machine</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">Drum Machine application, designed to behave as a real life Drum Machine.
                   User can click on any displayed key or press the appropriate key on the keyboard in order to produce a sound.</p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/Drum-Machine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://drum-machine-livid-five.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>


            {/* Projects Section */}
            <div className="project-card bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <div className="aspect-video relative w-full h-[250px] bg-gradient-to-br from-[var(--background)] to-[var(--border)]">
                <Image
                  src="/mediaPlayer_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">Media Player</h3>
                <p className="text-[var(--secondary)] mb-6 leading-relaxed flex-grow">
                  ​The Linear Media Player is a web-based application designed for seamless playback of
                  audio and video content. It offers an intuitive interface that allows users to easily manage and enjoy
                  their media collections directly from their browser.
                </p>
                <div className="flex gap-3 mt-auto">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/media-player"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
                    </svg>
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://media-player-psi-vert.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            
              </div>
            </div>
          </div>
      
        </section>
    );

};

export default ProjectCards;





// {projects.map((project) => (
//   <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
//     {/* Website link header section */}
//     <div className="p-4 border-b dark:border-gray-700">
//       <a
//         href={project.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-600 dark:text-blue-400 hover:underline break-all"
//       >
//         {project.link}
//       </a>
//     </div>
//     {/* Preview container with fixed height */}
//     <div className="relative w-full h-[400px]">
//       {/* Conditional rendering: Show iframe if no error, fallback message if error */}
//       {!previewErrors[project.link] ? (
//         <iframe
//           src={project.link}
//           className="w-full h-full"
//           onError={() => handleIframeError(project.link)}
//           sandbox="allow-scripts allow-same-origin"
//         />
//       ) : (
//         <div className="w-full h-full flex items-center justify-center">
//           <p className="text-gray-600 dark:text-gray-300">Error loading preview</p>
//         </div>
//       )}
//     </div>
//     {/* Project description section */}
//     <div className="p-4">
//       <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
//     </div>
//   </div>
// );
// )
// ))}
{/* <div key="1" className="border rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            {/* Website link header section */}
          //   <div className="p-4 border-b dark:border-gray-700">
          //     <a
          //       href="https://choropleth-us-education-map.vercel.app"
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="text-blue-600 dark:text-blue-400 hover:underline break-all"
          //     >
          //       "https://choropleth-us-education-map.vercel.app"
          //     </a>
          //   </div>
          //   {/* Preview container with fixed height */}
          //   <div className="relative w-full h-[400px]">
          //     {/* Conditional rendering: Show iframe if no error, fallback message if error */}
          //     {!previewErrors["https://choropleth-us-education-map.vercel.app"] ? (
          //       <iframe
          //         src={"https://choropleth-us-education-map.vercel.app"}
          //         className="w-full h-full"
          //         onError={() => handleIframeError("https://choropleth-us-education-map.vercel.app")}
          //         sandbox="allow-scripts allow-same-origin"
          //       />
          //     ) : (
          //       // Error fallback message
          //       <div className="w-full h-full flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
          //         <p className="text-gray-500 dark:text-gray-400 text-center">
          //           Preview unavailable due to website restrictions.
          //           <br />
          //           Please visit the website directly.
          //         </p>
          //       </div>
          //     )}
          //   </div>
          // </div>