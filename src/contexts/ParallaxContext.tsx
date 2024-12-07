// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from "react";
// import { useViewport } from "./ViewportContext";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// // contexts/ParallaxContext.tsx
// export function ParallaxProvider({ children }) {
//   const { isMobile } = useViewport();

//   useEffect(() => {
//     // Wait for DOM content to be loaded
//     const initParallax = () => {
//       if (!isMobile) {
//         // Refresh ScrollTrigger to recognize new elements
//         ScrollTrigger.refresh();

//         const elements = gsap.utils.toArray("[data-speed]") as HTMLElement[];
//         console.log("Found elements:", elements.length); // Debug

//         elements.forEach((el) => {
//           const speed = parseFloat(el.getAttribute("data-speed") || "0");
//           gsap.fromTo(
//             el,
//             { y: 0 },
//             {
//               y: 0,
//               ease: "none",
//               scrollTrigger: {
//                 trigger: el,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true,
//                 markers: false, // Debug
//                 onRefresh: (self) => {
//                   const start = Math.max(0, self.start);
//                   const distance = self.end - start;
//                   const end = start + distance / speed;
//                   (self as any).setPositions(start, end);
//                   if (self.animation) {
//                     (self as any).animation.vars.y =
//                       (end - start) * (1 - speed);
//                     self.animation
//                       .invalidate()
//                       .progress(1)
//                       .progress(self.progress);
//                   }
//                 },
//               },
//             }
//           );
//         });
//       }
//     };

//     // Run after a slight delay to ensure DOM is ready
//     const timer = setTimeout(initParallax, 100);

//     return () => {
//       clearTimeout(timer);
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, [isMobile]);

//   return children;
// }
