'use client';
import Image from "next/image";
import { useEffect } from 'react';
import { initializeAnimations } from '@/utils/animations';

export default function Home() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)] p-8">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Profile Section */}
        <section className="profile-section flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold">Sina Kiamehr</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Full Stack Developer</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {/* personal website link */}
                <a href="https://your-website.com" className="hover:underline">[Personal Website to be set]</a>
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

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="project-card border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src="/project-preview.jpg"
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
                    href="https://github.com/yourusername/project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-foreground text-background rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    View Code
                  </a>
                  {/* link to deployement */}
                  <a
                    href="https://project-demo.com"
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
