// utils/gsap.ts
import gsap from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import MotionPathPlugin from "gsap/dist/MotionPathPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Flip from "gsap/dist/Flip";
import Draggable from "gsap/Draggable";

let isInitialized = false;

// Initialize GSAP once at the app level
export const initGSAP = () => {
  if (isInitialized) return;

  if (typeof window !== "undefined") {
    gsap.registerPlugin(
      ScrollTrigger,
      MotionPathPlugin,
      CustomEase,
      ScrollToPlugin,
      Flip,
      Draggable
    );
    isInitialized = true;
  }
};

// Utility to safely create GSAP animations
export const createGSAPAnimation = (
  animation: () => gsap.core.Timeline | gsap.core.Tween
) => {
  if (typeof window === "undefined") return null;

  try {
    return animation();
  } catch (error) {
    console.error("GSAP Animation Error:", error);
    return null;
  }
};

// Utility to safely kill GSAP animations and ScrollTriggers
export const killGSAPAnimation = (
  animation: gsap.core.Timeline | gsap.core.Tween | null
) => {
  if (!animation) return;

  try {
    animation.kill();

    // If it's a Timeline, kill all nested tweens
    if (animation instanceof gsap.core.Timeline) {
      animation.clear();
    }
  } catch (error) {
    console.error("Error killing GSAP animation:", error);
  }
};

// Clean up all ScrollTriggers for a specific component
export const cleanupScrollTriggers = (componentId?: string) => {
  if (typeof window === "undefined") return;

  try {
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      if (!componentId || trigger.vars.id?.startsWith(componentId)) {
        trigger.kill();
      }
    });
  } catch (error) {
    console.error("Error cleaning up ScrollTriggers:", error);
  }
};

// Initialize GSAP by default
initGSAP();

// Export everything needed for GSAP
export {
  gsap,
  ScrollTrigger,
  CustomEase,
  MotionPathPlugin,
  ScrollToPlugin,
  Flip,
  Draggable,
};
