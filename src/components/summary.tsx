import React from "react";

const Summary: React.FC = () => {
    return (
        <section id="summary" className="summary-section pt-20 -mt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-8 tracking-tight">About Me</h2>
            <div className="bg-[var(--card-bg)] rounded-3xl p-8 sm:p-12 shadow-[var(--shadow-light)] border border-[var(--border)]">
              <p className="text-lg sm:text-xl text-[var(--secondary)] leading-relaxed">
                Harvard-educated researcher and analyst with strong experience in data-driven problem solving, scientific research, and technical
                analysis. Recently completed multiple web development certifications including Responsive Web Design, JavaScript Algorithms,
                Front-End Libraries, and Data Visualization from FreeCodeCamp. Proven ability to work across technical and business teams to
                extract insights, visualize complex data, and build user-focused applications. Skilled in Python, JavaScript, SQL, React, and D3.js.
              </p>
            </div>
          </div>
        </section>
    );
};

export default Summary;