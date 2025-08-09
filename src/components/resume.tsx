import React from "react";

const Resume: React.FC = () => {
    return (
        <section id="resume" className="w-full">
            <div className="text-center max-w-6xl mx-auto pt-20 -mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-12 tracking-tight">Resume</h2>
                <div className="space-y-8">
                {/* Education Section */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 hover:shadow-[var(--shadow-light)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">Education</h3>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">Harvard University</h4>
                    <p className="text-[var(--secondary)] font-medium mb-1">Bachelor of Arts in Chemistry and Chemical Biology</p>
                    <p className="text-[var(--secondary)] font-medium mb-1">Minor in Computer Science</p>
                    <p className="text-sm text-[var(--muted)] font-medium mb-4">2018 – 2022</p>
                  </div>
                </div>
        
                {/* Professional Experience Section */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 hover:shadow-[var(--shadow-light)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">Professional Experience</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {/* LA Shoulder & Elbow Surgery */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">LA Shoulder & Elbow Surgery</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Research Assitant</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2025 – Present</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Architected and deployed a HIPAA-compliant cloud infrastructure on AWS using CDK, supporting 500+ patient records with 99.9% uptime.</li>
                        <li>Developed a comprehensive patient management system with automated appointment scheduling, reducing administrative overhead by 40%.</li>
                        <li>Implemented AI-powered diagnostic assistance tools using machine learning models, improving diagnostic accuracy by 25%.</li>
                        <li>Built secure data pipelines for patient information processing, ensuring full HIPAA compliance and data encryption at rest and in transit.</li>
                        <li>Created automated backup and disaster recovery systems, achieving RTO of &lt;4 hours and RPO of &lt;1 hour.</li>
                      </ul>
                    </div>
          
                    {/* Kossoris Search */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">Kossoris Search</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Marketing Coordinator</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2024 – 2025</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Designed and implemented scalable cloud architecture solutions for executive search operations, handling 1000+ candidate profiles.</li>
                        <li>Built automated candidate matching algorithms using Python and machine learning, improving placement success rate by 35%.</li>
                        <li>Developed RESTful APIs and microservices architecture, reducing system response time by 50%.</li>
                        <li>Implemented comprehensive data analytics dashboards using modern visualization tools, providing real-time insights to stakeholders.</li>
                        <li>Established CI/CD pipelines and automated testing frameworks, reducing deployment time by 60%.</li>
                      </ul>
                    </div>
          
                    {/* Clarivate Analytics */}
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">Clarivate Analytics</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Associate, Market Access Pricing & Reimbursement</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2022 – 2023</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Conducted primary and secondary research initiatives for top pharmaceutical clients including Novartis and Johnson & Johnson.</li>
                        <li>Built and analyzed complex datasets using Python and SQL to develop evidence-based strategies across therapeutic areas including oncology, rare diseases, and mental health.</li>
                        <li>Synthesized research into actionable business insights for pharmaceutical market access, service evaluations, and payer-provider landscape assessments.</li>
                        <li>Managed cross-functional coordination with clients, vendors, and internal teams to ensure project alignment.</li>
                        <li>Developed detailed PowerPoint reports and dashboards communicating findings to stakeholders.</li>
                      </ul>
                      
                      <h5 className="text-md font-semibold text-[var(--foreground)] mt-4 mb-2">Key Projects</h5>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Novartis Oncology: Led secondary research for a comprehensive breast cancer market access assessment. Presented strategic recommendations to support launch of a new department.</li>
                        <li>Johnson & Johnson: Directed research for value proposition optimization of multiple myeloma stem cell therapy. Ran advisory boards and contributed insights supporting label expansion.</li>
                        <li>Mental Health in LATAM: Analyzed over 1,000 assets for investment prioritization. Created a custom scoring model and highlighted the top 20 therapeutics.</li>
                        <li>DARPA Genetics Research: Built a scoring model for 1,000+ genetic markers; delivered a top-20 gene shortlist for advanced research use.</li>
                        <li>Rare Disease – Myasthenia Gravis: Reviewed 100 years of literature, identified key demographic trends, and built a dynamic dashboard for client reporting.</li>
                      </ul>
                    </div>
          
                    {/* Harvard Research Assistant */}
                    <div className="border-l-4 border-red-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">Harvard Department of Chemistry and Chemical Biology</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Research Assistant</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2020 – 2022</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Designed and executed experiments exploring microbiome and xenobiotic interactions, focusing on metabolism of catechols (e.g. dopamine).</li>
                        <li>Handled and analyzed over 300 biological samples weekly (human and animal feces, bacterial cultures).</li>
                        <li>Delivered multiple scientific presentations and contributed to peer-reviewed publications.</li>
                        <li>Operated advanced laboratory equipment including NMRs, HPLC, LC-MS, and employed complex culturing techniques.</li>
                      </ul>
                    </div>
          
                    {/* USC Research Assistant */}
                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">USC School of Pharmacy</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Research Assistant</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2016 – 2018</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Participated in a cross-disciplinary study exploring the microbiome's influence on alcohol consumption using in vivo mouse models.</li>
                        <li>Designed and maintained experiments, recorded weekly data on over 100 mice including vitals, consumption, and behavior.</li>
                        <li>Conducted dissections and performed immunohistochemistry (IHC) on tissues.</li>
                        <li>Quantified data using ImageJ, GraphPad, and Adobe tools, and delivered findings in symposium presentations and internal meetings.</li>
                      </ul>
                    </div>
                  </div>
                </div>
        
                {/* Shadowing & INTERNSHIPS Section */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 hover:shadow-[var(--shadow-light)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">Shadowing & Internships</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-red-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">Sharim MD Inc.</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Medical Intern</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2020</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Shadowed Dr. Homayoun Sharim in internal medicine and cardiology.</li>
                        <li>Observed and participated in procedures including venous ablation and ultrasound-guided sclerotherapy.</li>
                        <li>Drafted patient progress notes, pre-op clearances, and medical supply orders.</li>
                      </ul>
                    </div>
          
                    <div className="border-l-4 border-pink-500 pl-6">
                      <h4 className="text-lg font-semibold text-[var(--foreground)] mb-1">Caspian Medical Clinic</h4>
                      <p className="text-[var(--secondary)] font-medium mb-1">Clinical Shadowing</p>
                      <p className="text-sm text-[var(--muted)] font-medium mb-4">2020</p>
                      <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                        <li>Shadowed Dr. Max Ghannadi; gained hands-on experience in patient interaction and diagnostic processes.</li>
                      </ul>
                    </div>
                  </div>
                </div>
        
                {/* Fellowships & Honors Section */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 hover:shadow-[var(--shadow-light)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">Fellowships & Honors</h3>
                  </div>
                  <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                    <li>Microbial Sciences Initiative Fellowship (2019) – One of five awardees for interdisciplinary microbial research.</li>
                    <li>Harvard College Research Program Fellow (Spring 2019, Summer 2019) – Funded independent research initiatives.</li>
                  </ul>
                </div>
        
                {/* Publications Section */}
                <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl p-8 hover:shadow-[var(--shadow-light)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">Publications</h3>
                  </div>
                  <ul className="list-disc list-inside text-[var(--secondary)] space-y-2 ml-4">
                    <li>Minwoo Bae et al. (Co-author). Metatranscriptomics-guided discovery and characterization of a polyphenol-metabolizing gut microbial enzyme. 2024.</li>
                    <li>Sina Kiamehr. Characterization of Microbial Hydrocaffeic Acid Dehydroxylase from Gordonibacter pamelaeae. Bachelor's Thesis, Harvard College. 2022.</li>
                    <li>Chip Le et al. (Co-author). Emerging Chemical Diversity and Potential Applications of Enzymes in the DMSO Reductase Superfamily. 2022.</li>
                    <li>Sina Kiamehr. Exploring Catechol Dehydroxylation in Microbes by Characterizing Hydrocaffeic Acid Dehydroxylase from Gordonibacter pamelaeae. 2022.</li>
                    <li>Vayu Maini Rekdal et al. (Co-author). A widely distributed metalloenzyme class enables gut microbial metabolism of host- and diet-derived catechols. eLife Sciences, 2019.</li>
                  </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;