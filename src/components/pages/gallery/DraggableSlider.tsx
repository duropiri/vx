// "use client";
// import React, { useEffect, useRef, useState, useCallback } from "react";

// interface DraggableSliderProps {
//   images: string[];
//   count?: number;
// }

// const lerp = (f0: number, f1: number, t: number) => (1 - t) * f0 + t * f1;
// const clamp = (val: number, min: number, max: number) =>
//   Math.max(min, Math.min(val, max));

// const DraggableSlider: React.FC<DraggableSliderProps> = ({
//   images,
//   count = null,
// }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const progressBarRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [sliderState, setSliderState] = useState({
//     progress: 0,
//     x: 0,
//     oldX: 0,
//     speed: 0,
//     maxScroll: 0,
//     wrapWidth: 0,
//   });

//   const handleResize = useCallback(() => {
//     if (!wrapperRef.current || !sliderRef.current) return;
//     const itemWidth = sliderRef.current.clientWidth * 0.4;
//     const wrapWidth = itemWidth * (count || images.length);
//     const maxScroll = wrapWidth - sliderRef.current.clientWidth;

//     setSliderState((prev) => ({
//       ...prev,
//       wrapWidth,
//       maxScroll,
//       progress: clamp(prev.progress, 0, maxScroll),
//     }));
//   }, [images.length]);

//   const handleWheel = useCallback((e: WheelEvent) => {
//     e.preventDefault();
//     setSliderState((prev) => ({
//       ...prev,
//       progress: clamp(prev.progress + e.deltaY, 0, prev.maxScroll),
//     }));
//   }, []);

//   const handleTouchStart = useCallback(
//     (e: React.MouseEvent | React.TouchEvent) => {
//       e.preventDefault();
//       setIsDragging(true);
//       const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
//       setStartX(clientX);
//     },
//     []
//   );

//   const handleTouchMove = useCallback(
//     (e: MouseEvent | TouchEvent) => {
//       if (!isDragging) return;
//       const clientX =
//         "touches" in e
//           ? (e as TouchEvent).touches[0].clientX
//           : (e as MouseEvent).clientX;

//       setSliderState((prev) => ({
//         ...prev,
//         progress: clamp(
//           prev.progress + (startX - clientX) * 2.5,
//           0,
//           prev.maxScroll
//         ),
//       }));
//       setStartX(clientX);
//     },
//     [isDragging, startX]
//   );

//   const handleTouchEnd = useCallback(() => {
//     setIsDragging(false);
//   }, []);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [handleResize, handleWheel]);

//   useEffect(() => {
//     if (isDragging) {
//       window.addEventListener("mousemove", handleTouchMove);
//       window.addEventListener("touchmove", handleTouchMove);
//       window.addEventListener("mouseup", handleTouchEnd);
//       window.addEventListener("touchend", handleTouchEnd);
//       document.body.addEventListener("mouseleave", handleTouchEnd);

//       return () => {
//         window.removeEventListener("mousemove", handleTouchMove);
//         window.removeEventListener("touchmove", handleTouchMove);
//         window.removeEventListener("mouseup", handleTouchEnd);
//         window.removeEventListener("touchend", handleTouchEnd);
//         document.body.removeEventListener("mouseleave", handleTouchEnd);
//       };
//     }
//   }, [isDragging, handleTouchMove, handleTouchEnd]);

//   useEffect(() => {
//     let animationFrameId: number;

//     const animate = () => {
//       setSliderState((prev) => {
//         const x = lerp(prev.x, prev.progress, 0.1);
//         const playrate = x / prev.maxScroll;
//         const speed = Math.min(100, prev.oldX - x);

//         if (wrapperRef.current) {
//           wrapperRef.current.style.transform = `translateX(${-x}px)`;
//         }
//         if (progressBarRef.current) {
//           progressBarRef.current.style.transform = `scaleX(${
//             0.03 + playrate
//           })`;
//         }

//         return {
//           ...prev,
//           x,
//           oldX: x,
//           speed,
//         };
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => {
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative size-full overflow-hidden flex flex-1 justify-center items-center">
//       <div
//         ref={sliderRef}
//         className={`w-full ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
//         onMouseDown={handleTouchStart}
//         onTouchStart={handleTouchStart}
//       >
//         <div ref={wrapperRef} className="whitespace-nowrap">
//           {images.slice(0, count || images.length).map((src, index) => (
//             <div key={index} className="inline-block w-[40vw] p-[3vw]">
//               <figure className="relative pb-[50%] overflow-hidden">
//                 <img
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="absolute w-full h-full object-cover"
//                   style={{
//                     transform: `scaleX(${
//                       1 + Math.abs(sliderState.speed) * 0.004
//                     })`,
//                   }}
//                 />
//               </figure>
//             </div>
//           ))}
//         </div>

//         <div className="absolute bottom-0 left-0 w-[20vw] h-0.5 m-8 bg-ash/10">
//           <div
//             ref={progressBarRef}
//             className="absolute w-full h-full bg-goldenbrown/80 transform-gpu origin-left"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DraggableSlider;
