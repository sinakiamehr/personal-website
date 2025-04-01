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
                  src="/drumMachine_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Drum Machine</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Drum Machine application, designed to behave as a real life Drum Machine.
                   User can click on any displayed key or press the appropriate key on the keyboard in order to produce a sound.</p>
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
                  src="/choropleth_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">U.S.A.  Education Choropleth</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Choropleth application, features an interactive choropleth map that visualizes the percentage
                   of U.S. adults with a bachelor&apos;s degree or higher, categorized by county. Utilizing color variations,
                    the map effectively represents educational attainment levels across different regions, providing a clear and insightful geographic
                     distribution of higher education in the United States.</p>
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
            {/* Projects Section */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/treemap_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Treemap VideoGame Sales</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Treemap application, features an interactive treemap diagram visualizing the top 100
                   best-selling video games, grouped by their respective gaming platforms. This visualization provides insights into the distribution of popular
                    video game titles across various platforms, aiding in the analysis of sales trends within the gaming industry.​</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/treemap-diagram-videogame-sales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://treemap-diagram-videogame-sales.vercel.app"
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
                  src="/heatmap_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Global Temperature Heatmap</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Heatmap application, displays an interactive heat map chart visualizing global temperature
                   variations from 1753 to 2015. It uses color gradients to represent temperature differences over time, offering a compelling way to explore climate
                    change trends and long-term shifts in global temperatures.​</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/heatmap-temp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://heatmap-temp.vercel.app"
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
                  src="/scatterplot_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Cycling Scatterplot</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Scatterplot application, features an interactive scatter plot graph that visualizes
                   the 35 fastest times up Alpe d&apos;Huez in professional bicycle racing. It highlights instances of doping among cyclists, offering insights into
                    performance trends and the impact of doping in the sport.​</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/scatterplot-cycling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://scatterplot-cycling.vercel.app"
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
                  src="/gdp_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">U.S. GDP Bar Chart</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Bar Chart application, features an interactive bar chart visualizing the United States&apos; 
                  Gross Domestic Product (GDP) over time. Built using D3.js, the chart allows users to hover over individual bars to view specific quarterly GDP data, 
                  providing a clear and detailed representation of the nation&apos;s economic growth.​</p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/us-gdp-d3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://us-gdp-d3.vercel.app"
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
                  src="/timer_img.JPG"
                  alt="Project preview"
                  fill
                  className="object-cover max-w-full h-auto object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Timer Clock</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Timer application, features an interactive clock that counts up to a set time. Built using React, 
                  the clock allows users to set a specific time and displays the current time in real-time.​The break time 
                  features also allows user to set session/rest cycling to emulate a pomodoro timer.
                  </p>
                <div className="flex gap-2">
                  {/* link to Repo */}
                  <a
                    href="https://github.com/sinakiamehr/timer-clock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://timer-clock-delta.vercel.app"
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