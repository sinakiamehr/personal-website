import React from "react";

const TechnicalSkills: React.FC = () => {
    return (
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
    );
};

export default TechnicalSkills;