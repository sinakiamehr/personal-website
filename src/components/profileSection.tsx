import React from "react";
import Image from "next/image";

const ProfileSection: React.FC = () => {

    return (
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
                <a href="/Sina Resume Tech 3.26.25.pdf" download className="hover:underline">Sina&apos;s Resume</a>
              </p>
            </div>
          </div>
        </section>
    );
};

export default ProfileSection;