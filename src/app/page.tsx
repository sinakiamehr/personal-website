'use client';
import Image from "next/image";
import { useEffect } from 'react';
import { initializeAnimations } from '@/utils/animations';

export default function Home() {
  useEffect(() => {
    initializeAnimations();
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">SK</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#summary" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Summary</a>
                <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                <a href="#education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Education</a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Experience</a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              </div>
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#summary" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Summary</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Education</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto space-y-12 p-8 pt-4">
        {/* Profile Section */}
        <section className="profile-section flex flex-col md:flex-row items-center gap-8">
          {/* image div */}
          <div className="w-48 h-48 relative rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* top name+bio section  */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold">Sina Kiamehr</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Full Stack Developer</p>
            {/* personal links section */}
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {/* email link */}
                <a href="mailto:sinakiamehr7@gmail.com" className="hover:underline">sinakiamehr7@gmail.com</a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {/* personal website link */}
                <a href="/Sina Resume Tech 3.26.25.pdf" download className="hover:underline">Sina's Resume</a>
              </p>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="social-links flex justify-center md:justify-start gap-6">
          {/* github link */}
          <a href="https://github.com/sinakiamehr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" />
            </svg>
          </a>
          {/* linkedin Link */}
          <a href="https://linkedin.com/in/sina-kiamehr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          
        </section>
        {/* Summary Section */}
        <section id="summary" className="summary-section pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Harvard-educated researcher and analyst with strong experience in data-driven problem solving, scientific research, and technical
            analysis. Recently completed multiple web development certifications including Responsive Web Design, JavaScript Algorithms,
            Front-End Libraries, and Data Visualization from FreeCodeCamp. Proven ability to work across technical and business teams to
            extract insights, visualize complex data, and build user-focused applications. Skilled in Python, JavaScript, SQL, React, and D3.js.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="skills-section pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Languages</h3>
              <p className="text-gray-600 dark:text-gray-300">JavaScript, Python, SQL, HTML5, CSS3</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Libraries/Frameworks</h3>
              <p className="text-gray-600 dark:text-gray-300">React, D3.js, Bootstrap</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">Git, GitHub, Tableau, ImageJ, GraphPad, Adobe Illustrator, LC-MS, HPLC</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>FreeCodeCamp – Responsive Web Design Certification</li>
                <li>FreeCodeCamp – JavaScript Algorithms and Data Structures</li>
                <li>FreeCodeCamp – Front End Development Libraries</li>
                <li>FreeCodeCamp – Data Visualization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="education-section pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Harvard University</h3>
            <p className="text-gray-600 dark:text-gray-300">
              B.S. in Chemistry and Physical Biology; Secondary in Computer Science
              <br />
              <span className="text-sm">2018 – 2022</span>
            </p>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="experience-section pt-16 -mt-16">
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          
          {/* Clarivate Analytics */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Clarivate Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Associate, Market Access Pricing & Reimbursement</strong>
              <br />
              <span className="text-sm">2022 – 2023</span>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Conducted primary and secondary research initiatives for top pharmaceutical clients including Novartis and Johnson & Johnson.</li>
              <li>Built and analyzed complex datasets using Python and SQL to develop evidence-based strategies across therapeutic areas including oncology, rare diseases, and mental health.</li>
              <li>Synthesized research into actionable business insights for pharmaceutical market access, service evaluations, and payer-provider landscape assessments.</li>
              <li>Managed cross-functional coordination with clients, vendors, and internal teams to ensure project alignment.</li>
              <li>Developed detailed PowerPoint reports and dashboards communicating findings to stakeholders.</li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Key Projects</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Novartis Oncology: Led secondary research for a comprehensive breast cancer market access assessment. Presented strategic recommendations to support launch of a new department.</li>
              <li>Johnson & Johnson: Directed research for value proposition optimization of multiple myeloma stem cell therapy. Ran advisory boards and contributed insights supporting label expansion.</li>
              <li>Mental Health in LATAM: Analyzed over 1,000 assets for investment prioritization. Created a custom scoring model and highlighted the top 20 therapeutics.</li>
              <li>DARPA Genetics Research: Built a scoring model for 1,000+ genetic markers; delivered a top-20 gene shortlist for advanced research use.</li>
              <li>Rare Disease – Myasthenia Gravis: Reviewed 100 years of literature, identified key demographic trends, and built a dynamic dashboard for client reporting.</li>
            </ul>
          </div>

          {/* Harvard Research Assistant */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Harvard Department of Chemistry and Chemical Biology</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Research Assistant</strong>
              <br />
              <span className="text-sm">2020 – 2022</span>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Designed and executed experiments exploring microbiome and xenobiotic interactions, focusing on metabolism of catechols (e.g. dopamine).</li>
              <li>Handled and analyzed over 300 biological samples weekly (human and animal feces, bacterial cultures).</li>
              <li>Delivered multiple scientific presentations and contributed to peer-reviewed publications.</li>
              <li>Operated advanced laboratory equipment including NMRs, HPLC, LC-MS, and employed complex culturing techniques.</li>
            </ul>
          </div>

          {/* USC Research Assistant */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold">USC School of Pharmacy</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Research Assistant</strong>
              <br />
              <span className="text-sm">2016 – 2018</span>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Participated in a cross-disciplinary study exploring the microbiome's influence on alcohol consumption using in vivo mouse models.</li>
              <li>Designed and maintained experiments, recorded weekly data on over 100 mice including vitals, consumption, and behavior.</li>
              <li>Conducted dissections and performed immunohistochemistry (IHC) on tissues.</li>
              <li>Quantified data using ImageJ, GraphPad, and Adobe tools, and delivered findings in symposium presentations and internal meetings.</li>
            </ul>
          </div>
        </section>

        {/* Shadowing Experience Section */}
        <section className="shadowing-section">
          <h2 className="text-2xl font-bold mb-4">Shadowing Experience</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Sharim MD Inc.</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Medical Intern</strong>
              <br />
              <span className="text-sm">2020</span>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Shadowed Dr. Homayoun Sharim in internal medicine and cardiology.</li>
              <li>Observed and participated in procedures including venous ablation and ultrasound-guided sclerotherapy.</li>
              <li>Drafted patient progress notes, pre-op clearances, and medical supply orders.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">Caspian Medical Clinic</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Clinical Shadowing</strong>
              <br />
              <span className="text-sm">2020</span>
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Shadowed Dr. Max Ghannadi; gained hands-on experience in patient interaction and diagnostic processes.</li>
            </ul>
          </div>
        </section>

        {/* Fellowships & Honors Section */}
        <section className="honors-section">
          <h2 className="text-2xl font-bold mb-4">Fellowships & Honors</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Microbial Sciences Initiative Fellowship (2019) – One of five awardees for interdisciplinary microbial research.</li>
            <li>Harvard College Research Program Fellow (Spring 2019, Summer 2019) – Funded independent research initiatives.</li>
          </ul>
        </section>

        {/* Publications Section */}
        <section className="publications-section">
          <h2 className="text-2xl font-bold mb-4">Publications</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Minwoo Bae et al. (Co-author). Metatranscriptomics-guided discovery and characterization of a polyphenol-metabolizing gut microbial enzyme. 2024.</li>
            <li>Sina Kiamehr. Characterization of Microbial Hydrocaffeic Acid Dehydroxylase from Gordonibacter pamelaeae. Bachelor's Thesis, Harvard College. 2022.</li>
            <li>Chip Le et al. (Co-author). Emerging Chemical Diversity and Potential Applications of Enzymes in the DMSO Reductase Superfamily. 2022.</li>
            <li>Sina Kiamehr. Exploring Catechol Dehydroxylation in Microbes by Characterizing Hydrocaffeic Acid Dehydroxylase from Gordonibacter pamelaeae. 2022.</li>
            <li>Vayu Maini Rekdal et al. (Co-author). A widely distributed metalloenzyme class enables gut microbial metabolism of host- and diet-derived catechols. eLife Sciences, 2019.</li>
          </ul>
        </section>
        {/* Projects Section */}
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
                  className="object-cover"
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
          </div>
        </section>
      </main>
    </div>
  );
}
