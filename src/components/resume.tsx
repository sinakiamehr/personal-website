import React from "react";

const Resume: React.FC = () => {
    return (
        <div className="resume">
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
                </div>
    );
};

export default Resume;