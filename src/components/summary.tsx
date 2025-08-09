import React from "react";

const Summary: React.FC = () => {
    return (
        <section id="summary" className="summary-section pt-20 -mt-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-8 tracking-tight">About Me</h2>
            <div className="bg-[var(--card-bg)] rounded-3xl p-8 sm:p-12 shadow-[var(--shadow-light)] border border-[var(--border)]">
              <p className="text-lg sm:text-xl text-[var(--secondary)] leading-relaxed">
                Harvard-educated software engineer and healthcare technology consultant with expertise in cloud architecture, AI/ML integration, 
                and HIPAA-compliant systems. Recently designed and deployed an enterprise Clinical Registry Automation System on AWS, implementing serverless-first
                architecture, AI-powered clinical note processing, and secure, scalable data infrastructure. Experienced in cloud-based AI (Amazon Bedrock) and 
                local AI deployment (Ollama) for secure, offline workflows. Proven record of reducing infrastructure costs by 60–80% while improving performance and compliance.
                 Skilled at bridging technical and business teams to deliver innovative solutions in healthcare, life sciences, and data analytics. Proficient in Python, AWS CDK, DynamoDB, API Gateway, Step Functions, SQL, and relational/NoSQL database design.
              </p>
            </div>
          </div>
        </section>
    );
};

export default Summary;