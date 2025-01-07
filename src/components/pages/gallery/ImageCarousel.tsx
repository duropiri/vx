// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap, ScrollTrigger } from "@/utils/gsap";
// import Image from "next/image";

// interface ImageCarouselProps {
//   images: string[];
// }

// const ImageCarousel = ({ images }: ImageCarouselProps) => {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [activeImage, setActiveImage] = useState<string | null>(
//     images[0] || null
//   );
//   const [holeCount, setHoleCount] = useState(0);

//   const checkAndUpdateActiveItem = () => {
//     if (!carouselRef.current) return;

//     const items = carouselRef.current.querySelectorAll(".carousel-item");
//     items.forEach((item) => {
//       const rect = item.getBoundingClientRect();
//       if (rect.left >= 0 && rect.left < 10) {
//         const img = item.querySelector("img");
//         if (img?.src !== activeImage) {
//           setActiveImage(img?.src || null);
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     if (!carouselRef.current || !containerRef.current || !wrapperRef.current)
//       return;

//     // Calculate number of holes needed based on the images container width
//     const imagesContainer =
//       carouselRef.current.querySelector(".images-container");
//     if (imagesContainer) {
//       const containerWidth = imagesContainer.scrollWidth;
//       const holeWidth = 6; // 1.5 * 4 (size of hole)
//       const holeCount = Math.ceil(containerWidth / holeWidth);
//       setHoleCount(holeCount);
//     }

//     const carousel = carouselRef.current;
//     const totalWidth = carousel.scrollWidth;

//     ScrollTrigger.create({
//       trigger: wrapperRef.current,
//       start: "top top",
//       end: "bottom bottom",
//       pin: containerRef.current,
//       markers: true,
//       scrub: 1,
//       onUpdate: (self) => {
//         gsap.set(carousel, {
//           x: -totalWidth * self.progress,
//         });
//         checkAndUpdateActiveItem();
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   const createHoles = () => (
//     <div className="flex gap-1">
//       {[...Array(holeCount)].map((_, index) => (
//         <div key={`hole-${index}`} className="bg-white size-1.5 shrink-0" />
//       ))}
//     </div>
//   );

//   return (
//     <div ref={wrapperRef} className="relative h-[300vh] w-full overflow-hidden">
//       <div
//         ref={containerRef}
//         className="top-0 size-full h-screen flex items-center justify-center bg-background"
//       >
//         <div className="relative size-full flex flex-col justify-between max-w-[100vw] pt-[6rem] overflow-hidden">
//           <div
//             className="relative flex py-1 bg-ash will-change-transform
//               after:z-10 after:absolute after:top-0 after:left-0 after:h-full after:w-4 
//               after:bg-gradient-to-r after:from-ash after:to-transparent
//               before:z-10 before:absolute before:top-0 before:right-0 before:h-full before:w-4 
//               before:bg-gradient-to-l before:from-ash before:to-transparent"
//           >
//             <div ref={carouselRef} className="flex flex-col gap-1">
//               {/* Top holes */}
//               {createHoles()}

//               {/*  Images */}
//               <div className="flex gap-1 images-container">
//                 {images.map((src, index) => {
//                   // Convert string path to URL object for proper handling
//                   const imageUrl = src.startsWith("http")
//                     ? src
//                     : `/${src.startsWith("/") ? src.slice(1) : src}`;

//                   return (
//                     <div
//                       key={`image-${index}`}
//                       className="relative w-16 h-20 carousel-item shrink-0"
//                     >
//                       <Image
//                         src={imageUrl}
//                         alt={`Carousel item ${index + 1}`}
//                         // width={64} // Matches w-16
//                         // height={80} // Matches h-20
//                         layout="fill"
//                         className="object-cover"
//                         quality={75}
//                         loading={index < 4 ? "eager" : "lazy"}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Bottom holes */}
//               {createHoles()}
//             </div>
//           </div>

//           {/* Active image preview */}
//           <div className="relative flex w-96 max-w-full h-[450px] max-h-[80vh] mb-8">
//             {activeImage && (
//               <Image
//                 src={
//                   activeImage.startsWith("http")
//                     ? activeImage
//                     : `/${
//                         activeImage.startsWith("/")
//                           ? activeImage.slice(1)
//                           : activeImage
//                       }`
//                 }
//                 alt="Active preview image"
//                 // width={384} // Matches w-96
//                 // height={450} // Matches height specification
//                 layout="fill"
//                 className="object-cover"
//                 priority
//                 quality={90}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
