import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const setupScrollAnimation = (
  container: HTMLElement,
  contentRef: HTMLElement | null
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom center",
      scrub: 1,
    },
  });

  if (contentRef) {
    tl.to(contentRef, {
      scale: 0.5,
      rotation: -45,
      filter: "blur(2.5px)",
      duration: 1,
      ease: "none",
    });
  }

  return tl;
};

export const setupColorAnimation = (
  triggerSection: HTMLElement,
  sections: Array<HTMLElement | null>
) => {
  const updateColors = (change: boolean) => {
    sections.forEach((section) => {
      if (!section) return;

      const originalColor = section.dataset.originalColor;
      const transitionColor = section.dataset.transitionColor;

      if (!originalColor || !transitionColor) return;

      const newColor = change ? transitionColor : originalColor;

      gsap.to(section, {
        backgroundColor: newColor,
        duration: 0.5,
        ease: "power1.inOut",
      });

      // Update gradients
      section
        .querySelectorAll(".bg-gradient-to-b, .bg-gradient-to-t")
        .forEach((el) => {
          gsap.to(el, {
            "--tw-gradient-from": `${newColor} var(--tw-gradient-from-position)`,
            duration: 0.5,
            ease: "power1.inOut",
          });
        });
    });
  };

  return ScrollTrigger.create({
    trigger: triggerSection,
    start: "top-=400px top",
    end: "bottom top",
    onEnter: () => updateColors(true),
    onLeaveBack: () => updateColors(false),
  });
};
