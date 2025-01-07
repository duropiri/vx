// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useLenis } from "lenis/react";
// import * as THREE from "three";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import dynamic from "next/dynamic";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// interface Image {
//   url: string;
//   title: string;
// }

// interface ThreeSliderProps {
//   images: string[];
// }

// // Scene component that handles all Three.js logic
// const Scene = ({ images }: ThreeSliderProps) => {
//   const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
//   const { camera, gl } = useThree();
//   const textureRef = useRef<THREE.CanvasTexture | null>(null);
//   const scrollProgress = useRef(0);

//   useEffect(() => {
//     const loadImages = async () => {
//       const loadedImgs = await Promise.all(
//         images.map((img) => {
//           return new Promise<HTMLImageElement>((resolve, reject) => {
//             const image = new Image();
//             image.onload = () => resolve(image);
//             image.onerror = reject;
//             image.src = img;
//           });
//         })
//       );
//       setLoadedImages(loadedImgs);
//     };

//     loadImages();
//   }, [images]);

//   useEffect(() => {
//     if (loadedImages.length === 0) return;

//     // Texture setup
//     const textureCanvas = document.createElement("canvas");
//     const ctx = textureCanvas.getContext("2d", {
//       alpha: false,
//       willReadFrequently: false,
//     });
//     if (!ctx) return;

//     textureCanvas.width = 2048;
//     textureCanvas.height = 8192;

//     const texture = new THREE.CanvasTexture(textureCanvas);
//     textureRef.current = texture;

//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
//     texture.minFilter = THREE.LinearFilter;
//     texture.magFilter = THREE.LinearFilter;
//     texture.anisotropy = Math.min(4, gl.capabilities.getMaxAnisotropy());

//     // Camera setup
//     camera.position.set(
//       17.5 * Math.sin(THREE.MathUtils.degToRad(20)),
//       5,
//       17.5 * Math.cos(THREE.MathUtils.degToRad(20))
//     );
//     camera.lookAt(0, -2, 0);
//     camera.rotation.z = THREE.MathUtils.degToRad(-5);

//     return () => {
//       texture.dispose();
//     };
//   }, [loadedImages, camera, gl]);

//   const updateTexture = (offset = 0) => {
//     if (!textureRef.current) return;

//     const textureCanvas = textureRef.current.image;
//     const ctx = textureCanvas.getContext("2d", {
//       alpha: false,
//       willReadFrequently: false,
//     });
//     if (!ctx) return;

//     const totalSlides = images.length;
//     const slideHeight = 15;
//     const gap = 0.5;
//     const cycleHeight = totalSlides * (slideHeight + gap);

//     ctx.fillStyle = "#000";
//     ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

//     const fontSize = 180;
//     ctx.font = `500 ${fontSize}px Inter`;
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";

//     const extraSlides = 2;

//     for (let i = -extraSlides; i < totalSlides + extraSlides; i++) {
//       let slideY = -i * (slideHeight + gap);
//       slideY += offset * cycleHeight;

//       const textureY = (slideY / cycleHeight) * textureCanvas.height;
//       let wrappedY = textureY % textureCanvas.height;
//       if (wrappedY < 0) wrappedY += textureCanvas.height;

//       let slideIndex = ((-i % totalSlides) + totalSlides) % totalSlides;

//       const slideRect = {
//         x: textureCanvas.width * 0.05,
//         y: wrappedY,
//         width: textureCanvas.width * 0.9,
//         height: (slideHeight / cycleHeight) * textureCanvas.height,
//       };

//       const img = loadedImages[slideIndex];
//       if (img) {
//         const imgAspect = img.width / img.height;
//         const rectAspect = slideRect.width / slideRect.height;

//         let drawWidth, drawHeight, drawX, drawY;

//         if (imgAspect > rectAspect) {
//           drawHeight = slideRect.height;
//           drawWidth = drawHeight * imgAspect;
//           drawX = slideRect.x + (slideRect.width - drawWidth) / 2;
//           drawY = slideRect.y;
//         } else {
//           drawWidth = slideRect.width;
//           drawHeight = drawWidth / imgAspect;
//           drawX = slideRect.x;
//           drawY = slideRect.y + (slideRect.height - drawHeight) / 2;
//         }

//         ctx.save();
//         ctx.beginPath();
//         ctx.roundRect(
//           slideRect.x,
//           slideRect.y,
//           slideRect.width,
//           slideRect.height
//         );
//         ctx.clip();
//         ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
//         ctx.restore();

//         ctx.fillStyle = "white";
//         ctx.fillText(
//           images[slideIndex],
//           textureCanvas.width / 2,
//           wrappedY + slideRect.height / 2
//         );
//       }
//     }

//     textureRef.current.needsUpdate = true;
//   };

//   // Use Lenis scroll
//   useLenis(({ scroll, limit }) => {
//     scrollProgress.current = scroll / limit;
//     updateTexture(-scrollProgress.current);
//   });

//   // Curved plane geometry
//   const generateGeometry = () => {
//     const geometry = new THREE.PlaneGeometry(20, 75, 200, 200);
//     const positions = geometry.attributes.position.array;
//     const curvature = 35;

//     for (let i = 0; i < positions.length; i += 3) {
//       const y = positions[i + 1];
//       const distanceFromCenter = Math.abs(y / (75 / 2));
//       positions[i + 2] = Math.pow(distanceFromCenter, 2) * curvature;
//     }
//     geometry.computeVertexNormals();
//     return geometry;
//   };

//   return (
//     <mesh rotation-x={THREE.MathUtils.degToRad(-20)} rotation-y={THREE.MathUtils.degToRad(20)}>
//       <primitive object={generateGeometry()} attach="geometry" />
//       <meshBasicMaterial side={THREE.DoubleSide} map={textureRef.current} />
//     </mesh>
//   );
// };

// // Dynamic import of Three.js canvas
// const ThreeCanvas = dynamic(
//   () =>
//     Promise.resolve(({ images }: ThreeSliderProps) => (
//       <Canvas
//         gl={{
//           antialias: true,
//           powerPreference: "high-performance",
//         }}
//         camera={{
//           fov: 45,
//           near: 0.1,
//           far: 1000,
//         }}
//       >
//         <Scene images={images} />
//       </Canvas>
//     )),
//   { ssr: false }
// );

// const ThreeSlider: React.FC<ThreeSliderProps> = ({ images }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const trigger = ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: "top top",
//       end: "bottom bottom",
//       scrub: 1,
//     });

//     return () => {
//       trigger.kill();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative w-full h-[1000vh] bg-black text-white font-inter">
//       <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-20">
//         <div className="space-y-1">
//           <p className="text-sm opacity-100">Codegrid</p>
//           <p className="text-sm opacity-50">YouTube Channel</p>
//         </div>
//         <div className="flex gap-8">
//           <p className="text-sm opacity-50">Index</p>
//           <p className="text-sm opacity-50">About</p>
//         </div>
//       </nav>

//       <footer className="fixed bottom-0 w-full p-8 flex justify-between items-center z-20">
//         <p className="text-sm opacity-50">Experiment 0410</p>
//         <p className="text-sm opacity-50">&copy; 2024</p>
//       </footer>

//       <div className="fixed w-full h-screen overflow-hidden">
//         <ThreeCanvas images={images} />
//       </div>

//       <div className="fixed top-0 left-0 w-full h-screen bg-radial-gradient z-10" />
//     </div>
//   );
// };

// export default ThreeSlider;