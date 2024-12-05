// utils/gsap.ts
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/all';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP once at the app level
export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CustomEase);
};