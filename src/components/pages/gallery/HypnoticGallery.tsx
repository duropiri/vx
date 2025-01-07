// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap, ScrollToPlugin, CustomEase, Flip } from "@/utils/gsap";
// gsap.registerPlugin(Flip, CustomEase, ScrollToPlugin);

// interface GalleryProps {
//   images: string[];
// }

// type LayoutType = "layout-1-gallery" | "layout-2-gallery" | "layout-3-gallery";

// const HypnoticGallery: React.FC<GalleryProps> = ({ images }) => {
//   const [activeLayout, setActiveLayout] =
//     useState<LayoutType>("layout-1-gallery");
//   const [isClient, setIsClient] = useState(false);

//   const galleryRef = useRef<HTMLDivElement>(null);
//   const imgPreviewsRef = useRef<HTMLDivElement>(null);
//   const minimapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setIsClient(true);

//     const initGSAP = async () => {
//       CustomEase.create(
//         "hop",
//         "M0,0 C0.028,0.528 0.129,0.74 0.27,0.852 0.415,0.967 0.499,1 1,1"
//       );
//     };

//     initGSAP();
//   }, []);

//   const handleLayoutSwitch = async (newLayout: LayoutType) => {
//     if (newLayout === activeLayout || !isClient) return;

//     if (
//       activeLayout === "layout-2-gallery" &&
//       document.documentElement.scrollTop > 0
//     ) {
//       gsap.to(document.documentElement, {
//         scrollTo: { y: 0 },
//         duration: 0.5,
//         ease: "power3.out",
//         onComplete: () => {
//           // Call the asynchronous handler without returning a promise
//           switchLayoutHandler(newLayout).catch((error) => {
//             console.error("Error switching layout:", error);
//           });
//         },
//       });
//     } else {
//       switchLayoutHandler(newLayout);
//     }

//     async function switchLayoutHandler(newLayout: LayoutType) {
//       if (!galleryRef.current) return;

//       const state = Flip.getState(galleryRef.current.querySelectorAll(".img"));

//       galleryRef.current.classList.remove(activeLayout);
//       galleryRef.current.classList.add(newLayout);

//       let staggerValue = 0.025;
//       if (
//         (activeLayout === "layout-1-gallery" &&
//           newLayout === "layout-2-gallery") ||
//         (activeLayout === "layout-3-gallery" &&
//           newLayout === "layout-2-gallery")
//       ) {
//         staggerValue = 0;
//       }

//       Flip.from(state, {
//         duration: 1.5,
//         ease: "hop",
//         stagger: staggerValue,
//       });

//       setActiveLayout(newLayout);

//       if (
//         newLayout === "layout-2-gallery" &&
//         imgPreviewsRef.current &&
//         minimapRef.current
//       ) {
//         gsap.to([imgPreviewsRef.current, minimapRef.current], {
//           autoAlpha: 1,
//           duration: 0.3,
//           delay: 0.5,
//         });
//       } else if (imgPreviewsRef.current && minimapRef.current) {
//         gsap.to([imgPreviewsRef.current, minimapRef.current], {
//           autoAlpha: 0,
//           duration: 0.3,
//         });
//         if (galleryRef.current) {
//           gsap.set(galleryRef.current, { clearProps: "y" });
//           gsap.set(minimapRef.current, { clearProps: "y" });
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     if (!isClient) return;

//     const handleScroll = async () => {
//       if (activeLayout !== "layout-2-gallery") return;

//       if (!imgPreviewsRef.current || !galleryRef.current || !minimapRef.current)
//         return;

//       const imgPreviewsHeight = imgPreviewsRef.current.scrollHeight;
//       const galleryHeight = galleryRef.current.scrollHeight;
//       const scrollY = document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;

//       const scrollFraction = scrollY / (imgPreviewsHeight - windowHeight);
//       const galleryTranslateY =
//         -scrollFraction * (galleryHeight - windowHeight) * 1.525;
//       const minimapTranslateY =
//         scrollFraction *
//         (windowHeight - minimapRef.current.offsetHeight) *
//         0.425;

//       gsap.to(galleryRef.current, {
//         y: galleryTranslateY,
//         ease: "none",
//         duration: 0.1,
//       });

//       gsap.to(minimapRef.current, {
//         y: minimapTranslateY,
//         ease: "none",
//         duration: 0.1,
//       });
//     };

//     if (activeLayout === "layout-2-gallery") {
//       document.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }

//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [activeLayout, isClient]);

//   // Helper function for gallery container classes
//   const getGalleryContainerClasses = (activeLayout: string) => {
//     if (activeLayout === "layout-1-gallery") {
//       return "relative size-full translate-x-0  grid grid-cols-6";
//     } else if (activeLayout === "layout-2-gallery") {
//       return "pt-[0.5em] fixed top-[25%] left-[10%] translate-x-0";
//     } else if (activeLayout === "layout-3-gallery") {
//       return "relative size-full translate-x-0";
//     } else {
//       return "";
//     }
//   };

//   const getImgContainerClasses = (activeLayout: string) => {
//     if (activeLayout === "layout-1-gallery") {
//       return "relative size-full translate-x-0";
//     } else if (activeLayout === "layout-2-gallery") {
//       return "w-[75px] h-[100px] mb-[1em]";
//     } else if (activeLayout === "layout-3-gallery") {
//       return "absolute top-[4em] right-[4em] w-[300px] h-[400px]";
//     } else {
//       return "";
//     }
//   };

//   const getPreviewContainerClasses = (activeLayout: string) => {
//     if (activeLayout === "layout-1-gallery") {
//       return "pointer-events-none";
//     } else if (activeLayout === "layout-2-gallery") {
//       return "";
//     } else if (activeLayout === "layout-3-gallery") {
//       return "pointer-events-none";
//     } else {
//       return "";
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen w-full bg-red-500">
//       <nav
//         id="nav"
//         className="fixed bg-white/50 bottom-0 left-0 w-full px-8 py-3 flex z-20"
//       >
//         {["01", "02", "03"].map((item, index) => (
//           <div key={item} className="flex flex-1 justify-end">
//             <p
//               className={`uppercase text-sm font-medium py-4 px-1 cursor-pointer ${
//                 `layout-${index + 1}-gallery` === activeLayout
//                   ? "text-blue-600"
//                   : ""
//               }`}
//               onClick={() =>
//                 handleLayoutSwitch(`layout-${index + 1}-gallery` as LayoutType)
//               }
//             >
//               {item}
//             </p>
//           </div>
//         ))}
//       </nav>

//       <div id="gallery_parent" className="flex size-full pt-16">
//         <div
//           ref={galleryRef}
//           className={`gallery ${activeLayout} ${getGalleryContainerClasses(
//             activeLayout
//           )}`}
//         >
//           {images.slice(0, 14).map((src, index) => (
//             <div
//               key={index}
//               className={`img ${getImgContainerClasses(activeLayout)}`}
//               id={`img${index + 1}`}
//             >
//               <img src={src} alt="" className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div
//         id="preview"
//         ref={imgPreviewsRef}
//         className={`img-previews absolute top-1/4 left-1/2 -translate-x-1/2 w-[30%] opacity-0 z-10 ${getPreviewContainerClasses(activeLayout)}`}
//       >
//         {images.slice(0, 14).map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt=""
//             className="w-[600px] h-[700px] py-4 object-cover"
//           />
//         ))}
//       </div>

//       <div
//         id="minimap"
//         ref={minimapRef}
//         className="minimap fixed top-1/4 left-[12.5%] -translate-x-1/2 w-[140px] h-[90px] border border-black rounded-sm z-20 invisible opacity-0"
//       />
//     </div>
//   );
// };

// export default HypnoticGallery;
