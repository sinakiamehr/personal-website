import React from "react";
import Image from "next/image";

const ProjectCards: React.FC = () => {
    return (
        <section id="projects">
          <h2 className="text-2xl font-bold mb-6 pt-16 -mt-16">Featured Projects</h2>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/Markdown_previewer_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Mardown Previewer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Markdown Previewer application, designed to convert Markdown syntax into real-time HTML output. This tool allows users to input Markdown text and immediately view the rendered HTML, facilitating the writing and editing process for Markdown documents.</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/markdown-previewerV1.0.2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://markdown-previewer-v1-0-2.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-current rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/calculator_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Calculator application, designed to emulate a real life Calculator. User can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The Application supports whole numbers as well as decimal numbers</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://calculator-pi-one-92.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-current rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/drumMachine_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Drum Machine</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Drum Machine application, designed to behave as a real life Drum Machine. User can click on any displayed key or press the appropriate key on the keyboard in order to produce a sound.</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/Drum-Machine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://drum-machine-livid-five.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-current rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/calculator_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Calculator</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Calculator application, designed to emulate a real life Calculator. User can perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The Application supports whole numbers as well as decimal numbers</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://calculator-pi-one-92.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-current rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/drumMachine_img.jpg"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Choropleth Visualization of US Education Attainment</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Drum Machine application, designed to behave as a real life Drum Machine. User can click on any displayed key or press the appropriate key on the keyboard in order to produce a sound.</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/choropleth-us-education-map"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://choropleth-us-education-map.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-current rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );

};

export default ProjectCards;