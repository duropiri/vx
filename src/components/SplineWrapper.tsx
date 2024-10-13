// "use client";
// import Spline from '@splinetool/react-spline/next';
// import { Application } from '@splinetool/runtime';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// interface SplineEvents extends Application {
//   addEventListener: (event: string, callback: (e: any) => void) => void;
//   removeEventListener: (event: string, callback: (e: any) => void) => void;
//   emitEvent: (event: string, data?: any) => void;
// }

// interface SplineWrapperProps {
//   className?: string;
// }

// function SplineWrapper({ className = "" }: SplineWrapperProps) {
//   const splineRef = useRef<SplineEvents>();
//   const containerRef = useRef<HTMLDivElement>(null);

//   function onLoad(spline: Application) {
//     splineRef.current = spline as SplineEvents;
    
//     // Listen for any custom events your Spline scene might emit
//     splineRef.current.addEventListener('mouseDown', (e) => {
//       console.log('Spline mouse down:', e);
//     });
//   }

//   useEffect(() => {
//     if (!splineRef.current || !containerRef.current) return;

//     const scrollTrigger = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: 'top top',
//       end: '+=300%',
//       onUpdate: (self) => {
//         // Emit a custom event with the scroll progress
//         splineRef.current?.emitEvent('scrollProgress', {
//           progress: self.progress
//         });
//       },
//       scrub: true,
//       markers: false
//     });

//     return () => {
//       scrollTrigger.kill();
//       // Clean up event listeners
//       if (splineRef.current) {
//         // Remove any event listeners here
//       }
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className={`w-full h-full ${className}`}>
//       <Spline
//         scene="https://prod.spline.design/o9sxwPXSeBvqiwPc/scene.splinecode" 
//         onLoad={onLoad}
//       />
//     </div>
//   );
// }

// export default SplineWrapper;
