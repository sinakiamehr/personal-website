import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Profile section animation - immediate visibility
  gsap.fromTo('.profile-section', 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out'
    }
  );

  // Social links animation - immediate visibility with stagger
  gsap.fromTo('.social-links a', 
    {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      delay: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    }
  );

  // Resume sections animations
  const resumeSections = [
    '.summary-section',
    '.skills-section',
    '.education-section',
    '.experience-section',
    '.shadowing-section',
    '.honors-section',
    '.publications-section'
  ];

  resumeSections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate list items within sections
    gsap.from(`${section} li`, {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Projects animation - ensure immediate visibility
  gsap.fromTo('.project-card', 
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};