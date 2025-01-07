"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/utils/gsap";

// Types remain the same...
interface FloatingGalleryProps {
  images: string[];
  title?: string;
  subtitle?: string;
  easing?: number;
  speed?: number;
}

interface PlaneImage {
  src: string;
  position: {
    left: string;
    top: string;
  };
}

interface PlaneConfig {
  brightness: string;
  images: PlaneImage[];
  speedMultiplier: number;
}

// Configuration
const IMAGES_PER_PLANE = 6;

const generatePositions = (count: number) => {
  const positions = [];

  // Define the boundaries for image placement (percentage)
  // Leave space for parallax movement
  const bounds = {
    minX: 15, // Minimum left position
    maxX: 65, // Maximum left position
    minY: 15, // Minimum top position
    maxY: 65, // Maximum top position
  };

  // Calculate grid
  const cols = 3;
  const rows = Math.ceil(count / cols);

  // Calculate step sizes
  const stepX = (bounds.maxX - bounds.minX) / (cols - 1);
  const stepY = (bounds.maxY - bounds.minY) / (rows - 1);

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;

    // Calculate base positions
    const baseX = bounds.minX + col * stepX;
    const baseY = bounds.minY + row * stepY;

    // Add small random offset
    const randomX = (Math.random() - 0.5) * 10; // ±5% offset
    const randomY = (Math.random() - 0.5) * 10;

    positions.push({
      left: `${Math.max(bounds.minX, Math.min(bounds.maxX, baseX + randomX))}%`,
      top: `${Math.max(bounds.minY, Math.min(bounds.maxY, baseY + randomY))}%`,
    });
  }

  // Shuffle to avoid regular patterns while maintaining bounds
  return positions.sort(() => Math.random() - 0.5);
};

const positionConfigs = [
  generatePositions(IMAGES_PER_PLANE),
  generatePositions(IMAGES_PER_PLANE),
  generatePositions(IMAGES_PER_PLANE),
];

const brightnessLevels = [
  "brightness-100",
  "brightness-[80%]",
  "brightness-[70%]",
];
const blurLevels = ["blur-0", "blur-[2px]", "blur-[1px]"];
const speedMultipliers = [1, 0.5, 0.25];
// Image dimensions
const IMAGE_DIMENSIONS = {
  width: 300,
  height: 200,
};

// Utilities
const lerp = (start: number, target: number, amount: number): number =>
  start * (1 - amount) + target * amount;

const createPlaneConfigs = (imagePaths: string[] = []): PlaneConfig[] => {
  if (!imagePaths || imagePaths.length === 0) return [];

  let currentImageIndex = 0;

  return positionConfigs.map((positions, planeIndex) => {
    const planeImages = positions.map((position) => {
      const imagePath = imagePaths[currentImageIndex % imagePaths.length];
      currentImageIndex++;

      return {
        src: imagePath,
        position,
      };
    });

    return {
      brightness: brightnessLevels[planeIndex],
      images: planeImages,
      speedMultiplier: speedMultipliers[planeIndex],
    };
  });
};

// Component
const FloatingGallery: React.FC<FloatingGalleryProps> = ({
  images = [],
  title = "Floating Images Gallery",
  subtitle = "Next.js and GSAP",
  easing = 0.08,
  speed = 0.01,
}) => {
  const planeRefs = [useRef(null), useRef(null), useRef(null)];
  const planesConfig = createPlaneConfigs(images);

  // Rest of the component remains the same...
  const animationState = useRef({
    requestAnimationFrameId: null as number | null,
    xForce: 0,
    yForce: 0,
  });

  const animate = () => {
    const { xForce, yForce } = animationState.current;

    animationState.current.xForce = lerp(xForce, 0, easing);
    animationState.current.yForce = lerp(yForce, 0, easing);

    planeRefs.forEach((ref, index) => {
      if (ref.current && planesConfig[index]) {
        gsap.set(ref.current, {
          x: `+=${xForce * planesConfig[index].speedMultiplier}`,
          y: `+=${yForce * planesConfig[index].speedMultiplier}`,
        });
      }
    });

    if (Math.abs(animationState.current.xForce) < 0.01)
      animationState.current.xForce = 0;
    if (Math.abs(animationState.current.yForce) < 0.01)
      animationState.current.yForce = 0;

    if (
      animationState.current.xForce !== 0 ||
      animationState.current.yForce !== 0
    ) {
      animationState.current.requestAnimationFrameId =
        requestAnimationFrame(animate);
    } else {
      if (animationState.current.requestAnimationFrameId) {
        cancelAnimationFrame(animationState.current.requestAnimationFrameId);
        animationState.current.requestAnimationFrameId = null;
      }
    }
  };

  const manageMouseMove = (e: React.MouseEvent) => {
    if (planesConfig.length === 0) return;

    const { movementX, movementY } = e;
    animationState.current.xForce += movementX * speed;
    animationState.current.yForce += movementY * speed;

    if (animationState.current.requestAnimationFrameId === null) {
      animationState.current.requestAnimationFrameId =
        requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    return () => {
      if (animationState.current.requestAnimationFrameId) {
        cancelAnimationFrame(animationState.current.requestAnimationFrameId);
      }
    };
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <main
      onMouseMove={manageMouseMove}
      className="h-screen w-full relative overflow-hidden"
    >
      {planesConfig.map((plane, planeIndex) => (
        <div
          key={planeIndex}
          ref={planeRefs[planeIndex]}
          className={`w-full h-full absolute ${plane.brightness}`}
          style={{
            // Ensure all planes can receive pointer events
            pointerEvents: "none",
            // Reverse z-index so back planes don't block front planes
            zIndex: planesConfig.length - planeIndex,
          }}
        >
          {plane.images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              className={`absolute transition-all duration-300 ${blurLevels[planeIndex]} hover:blur-0`}
              style={{
                left: image.position.left,
                top: image.position.top,
                pointerEvents: "auto", // Re-enable pointer events for images
                zIndex: 1,
              }}
            >
              <Image
                src={image.src}
                alt="gallery image"
                width={IMAGE_DIMENSIONS.width}
                height={IMAGE_DIMENSIONS.height}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      ))}

      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 text-lg z-50">
        <h1 className="font-normal text-white m-0 text-center">{title}</h1>
        <p className="text-gray-500 m-0 text-center mt-2.5">{subtitle}</p>
      </div>
    </main>
  );
};

export default FloatingGallery;
