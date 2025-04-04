import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Profile section animation
  gsap.from('.profile-section', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: '.profile-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Social links animation
  gsap.from('.social-links a', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.social-links',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });

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

  // Projects animation
  gsap.from('.project-card', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  });
};