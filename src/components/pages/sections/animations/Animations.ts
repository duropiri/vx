import { gsap, ScrollTrigger } from "@/utils/gsap";

// Cache selector results to avoid repeated DOM queries
const getGradientElements = (section: HTMLElement) => 
  Array.from(section.querySelectorAll<HTMLElement>(".bg-gradient-to-b, .bg-gradient-to-t"));

// Memoize color transitions for performance
const colorTransitionCache = new Map<string, GSAPTween>();

export const setupScrollAnimation = (
  container: HTMLElement,
  contentRef: HTMLElement | null
) => {
  // Kill any existing ScrollTriggers for this container
  ScrollTrigger.getAll()
    .filter(st => st.vars.trigger === container)
    .forEach(st => st.kill());

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom center",
      scrub: 1,
      // Add markers only in development
      markers: process.env.NODE_ENV === 'development',
      // Optimize performance
      fastScrollEnd: true,
      preventOverlaps: true,
      invalidateOnRefresh: true,
    },
  });

  if (contentRef) {
    // Use will-change for better performance
    contentRef.style.willChange = "transform, filter";
    
    tl.to(contentRef, {
      scale: 0.5,
      rotation: 0,
      filter: "blur(2.5px)",
      duration: 1,
      ease: "none",
      // Optimize transform animations
      force3D: true,
      // Clear will-change after animation
      onComplete: () => {
        contentRef.style.willChange = "auto";
      },
    });
  }

  return tl;
};

export const setupColorAnimation = (
  triggerSection: HTMLElement,
  sections: Array<HTMLElement | null>
) => {
  // Filter out null sections early
  const validSections = sections.filter((section): section is HTMLElement => 
    section !== null && 
    section.dataset.originalColor !== undefined && 
    section.dataset.transitionColor !== undefined
  );

  // Pre-cache gradient elements for each section
  const sectionGradients = new Map(
    validSections.map(section => [
      section,
      getGradientElements(section)
    ])
  );

  const updateColors = (change: boolean) => {
    validSections.forEach((section) => {
      const originalColor = section.dataset.originalColor!;
      const transitionColor = section.dataset.transitionColor!;
      const newColor = change ? transitionColor : originalColor;
      
      // Create unique key for this color transition
      const cacheKey = `${section.id}-${newColor}`;
      
      // Kill existing transition if any
      colorTransitionCache.get(cacheKey)?.kill();

      // Add will-change for better performance
      section.style.willChange = "background-color";
      
      // Create and cache new transition
      const colorTween = gsap.to(section, {
        backgroundColor: newColor,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          section.style.willChange = "auto";
          colorTransitionCache.delete(cacheKey);
        },
      });
      
      colorTransitionCache.set(cacheKey, colorTween);

      // Update gradients
      const gradients = sectionGradients.get(section);
      if (gradients?.length) {
        gsap.to(gradients, {
          "--tw-gradient-from": `${newColor} var(--tw-gradient-from-position)`,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    });
  };

  // Kill existing ScrollTrigger for this section
  ScrollTrigger.getAll()
    .filter(st => st.vars.trigger === triggerSection)
    .forEach(st => st.kill());

  return ScrollTrigger.create({
    trigger: triggerSection,
    start: "top-=400px top",
    end: "bottom top",
    onEnter: () => updateColors(true),
    onLeaveBack: () => updateColors(false),
    // Optimize performance
    fastScrollEnd: true,
    preventOverlaps: true,
    invalidateOnRefresh: true,
  });
};

// Cleanup utility
export const cleanupGSAPAnimations = () => {
  ScrollTrigger.getAll().forEach(st => st.kill());
  colorTransitionCache.forEach(tween => tween.kill());
  colorTransitionCache.clear();
};