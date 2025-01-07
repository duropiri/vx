// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap, Draggable } from "@/utils/gsap";

// interface HorizontalScrollProps {
//   images: string[];
// }

// const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ images }) => {
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!timelineRef.current || !scrollerRef.current || !containerRef.current)
//       return;

//     const timeline = timelineRef.current;
//     const scroller = scrollerRef.current;
//     const container = containerRef.current;
//     const timelineWidth = timeline.offsetWidth;
//     const scrollerWidth = scroller.offsetWidth;
//     const gap = parseInt(window.getComputedStyle(document.body).fontSize);

//     const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

//     // Create timeline markers
//     for (let i = 0; i < 50; i++) {
//       const marker = document.createElement("div");
//       marker.className = "h-full w-px bg-ash";
//       timeline.appendChild(marker);
//     }

//     Draggable.create(scroller, {
//       type: "x",
//       bounds: {
//         minX: gap,
//         maxX: timelineWidth - scrollerWidth - gap,
//       },
//       onDrag: function (this: any) {
//         let progress = (this.x - gap) / maxDragX;
//         let containerX = -400 * (timelineWidth / 100) * progress;
//         gsap.to(container, {
//           x: containerX,
//           duration: 1,
//           ease: "power3.out",
//         });
//       },
//     });
//   }, []);

//   return (
//     <div className="relative overflow-hidden flex-1 w-full h-full text-ash">
//       <div
//         ref={containerRef}
//         className="absolute top-0 left-0 w-[500vw] h-[90vh] flex"
//       >
//         <section className="relative w-screen h-full pt-24 px-8 flex justify-between">
//           <h1 className="w-1/2 font-normal text-4xl uppercase">
//             Beyond the Veil, Threads Woven from the Shadows of Tomorrow is
//             launching soon
//           </h1>
//           <p className="w-2/5 text-base">
//             In a world frayed at the edges, our garments emerge as relics of a
//             darker future, meticulously crafted to withstand the relentless
//             passage of time. Each piece is a testament to survival, an
//             amalgamation of rugged functionality and stark beauty. Embrace the
//             abyss with our latest collection, where fashion transcends mere
//             aesthetics and becomes a fortress.
//             <br />
//             <br />
//             Our designs whisper tales of a forgotten society, echoing through
//             the threads of each garment. Dive into the depths of desolation with
//             us; adorn yourself in the remnants of a world where every stitch
//             counts and each fabric tells a story of resilience. Join us in
//             wearing the armor of the foregone, forging ahead into the dystopian
//             night.
//           </p>
//         </section>

//         <section className="relative w-screen h-full pt-24 px-8 flex gap-8">
//           <div className="flex-2">
//             <img
//               src={images[0]}
//               alt={images[0]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-1">
//             <img
//               src={images[1]}
//               alt={images[1]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-1">
//             <img
//               src={images[2]}
//               alt={images[2]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </section>

//         <section className="relative w-screen h-full pt-24 px-8 flex gap-8">
//           <div className="flex-1">
//             <img
//               src={images[3]}
//               alt={images[3]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-2">
//             <img
//               src={images[4]}
//               alt={images[4]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-1">
//             <img
//               src={images[5]}
//               alt={images[5]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </section>

//         <section className="relative w-screen h-full pt-24 px-8 flex justify-between">
//           <h1 className="w-1/2 font-normal text-4xl uppercase">
//             Echoes of Rebellion, Couture Crafted for the Last Stand
//           </h1>
//           <p className="w-2/5 text-base">
//             In the shadows of crumbling skyscrapers and forgotten streets, our
//             fashion emerges as a beacon of defiance. Each piece in our
//             collection is forged in the fires of rebellion, designed for the
//             brave souls who dare to stand against the tide of conformity.
//             <br />
//             <br />
//             Join the resistance styled in the essence of upheaval. Our creations
//             are not just worn; they are wielded—each fabric, each seam imbued
//             with the power of resilience. As the world edges closer to the
//             precipice, clad yourself in our designs and become an icon of the
//             revolution.
//           </p>
//         </section>

//         <section className="relative w-screen h-full pt-24 px-8 flex gap-8">
//           <div className="flex-1">
//             <img
//               src={images[6]}
//               alt={images[6]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-2">
//             <img
//               src={images[7]}
//               alt={images[7]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-1">
//             <img
//               src={images[8]}
//               alt={images[8]}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </section>
//       </div>

//       <div
//         ref={timelineRef}
//         className="absolute bottom-0 left-0 w-full h-[10vh] py-9 px-4 flex justify-around"
//       >
//         <div
//           ref={scrollerRef}
//           className="absolute top-1/2 left-0 -translate-y-1/2 bg-goldenbrown cursor-pointer cursor-select-hover"
//         >
//           <p className="text-xs uppercase">
//             [<span className="px-12">Drag</span>]
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;
