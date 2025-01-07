"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";

interface ImageGalleryProps {
  images: string[];
  totalRows?: number;
  imagesPerRow?: number;
}

interface GalleryImage {
  src: string;
  height: number;
  id: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  totalRows = 20,
  imagesPerRow = 60,
}) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const dragLayerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [galleryImages, setGalleryImages] = useState<HTMLDivElement[]>([]);

  // Animation state
  const animationState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });

  const getRandomHeight = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (!galleryRef.current) return;

    const totalImages = Math.min(totalRows * imagesPerRow, images.length);
    const imageElements: HTMLDivElement[] = [];

    for (let i = 0; i < totalImages; i++) {
      const imgDiv = document.createElement("div");
      imgDiv.className =
        "transform scale-0 opacity-0 pointer-events-none origin-center";
      imgDiv.style.width = `calc((100% - ${
        (imagesPerRow - 1) * 0.25
      }rem) / ${imagesPerRow})`;
      imgDiv.style.height = `${getRandomHeight(30, 40)}px`;

      const imgElement = document.createElement("img");
      imgElement.src = images[i % images.length];
      imgElement.className = "w-full h-full object-cover select-none";
      imgDiv.appendChild(imgElement);

      galleryRef.current.appendChild(imgDiv);
      imageElements.push(imgDiv);
    }

    setGalleryImages(imageElements);

    gsap.to(imageElements, {
      scale: 1,
      delay: 1,
      opacity: 1,
      duration: 0.5,
      stagger: {
        amount: 1.5,
        grid: [totalRows, imagesPerRow],
        from: "random",
      },
      ease: "power1.out",
    });

    return () => {
      imageElements.forEach((el) => el.remove());
    };
  }, [images, totalRows, imagesPerRow]);

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const state = animationState.current;
      if (
        state.isDragging ||
        Math.abs(state.targetX - state.currentX) > 0.01 ||
        Math.abs(state.targetY - state.currentY) > 0.01
      ) {
        state.currentX = lerp(state.currentX, state.targetX, 0.075);
        state.currentY = lerp(state.currentY, state.targetY, 0.075);

        if (galleryRef.current) {
          galleryRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0)`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isZoomed) return;

    const state = animationState.current;
    state.isDragging = true;
    dragLayerRef.current?.classList.add("active");

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;

    state.startX = pageX;
    state.startY = pageY;

    if (galleryRef.current) {
      const transform = window.getComputedStyle(galleryRef.current).transform;
      const matrix = new DOMMatrix(transform);
      state.initialX = matrix.m41;
      state.initialY = matrix.m42;
      state.currentX = state.initialX;
      state.currentY = state.initialY;
      state.targetX = state.initialX;
      state.targetY = state.initialY;
    }
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!animationState.current.isDragging) return;
    e.preventDefault();

    const state = animationState.current;
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;

    const deltaX = pageX - state.startX;
    const deltaY = pageY - state.startY;

    state.targetX = state.initialX + deltaX;
    state.targetY = state.initialY + deltaY;
  };

  const handleDragEnd = () => {
    animationState.current.isDragging = false;
    dragLayerRef.current?.classList.remove("active");
  };

  useEffect(() => {
    const dragLayer = dragLayerRef.current;
    if (!dragLayer) return;

    const handleMove = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const handleEnd = () => handleDragEnd();

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, []);

  const handleZoomOut = () => {
    if (!isZoomed) return;
    setIsZoomed(false);

    if (dragLayerRef.current) {
      dragLayerRef.current.style.display = "none";
    }

    if (galleryRef.current) {
      const currentTransform = window.getComputedStyle(
        galleryRef.current
      ).transform;
      gsap.set(galleryRef.current, { clearProps: "transform" });

      const tl = gsap.timeline({
        defaults: {
          duration: 2.5,
          ease: "power4.inOut",
        },
      });

      tl.fromTo(
        galleryRef.current,
        { transform: currentTransform },
        { x: 0, y: 0 }
      ).to(galleryImages, { scale: 1, x: 0, y: 0 }, 0);

      const state = animationState.current;
      state.currentX = 0;
      state.currentY = 0;
      state.targetX = 0;
      state.targetY = 0;
      state.isDragging = false;
    }
  };

  const handleZoomIn = () => {
    if (isZoomed) return;
    setIsZoomed(true);

    if (dragLayerRef.current) {
      dragLayerRef.current.style.display = "block";
    }

    galleryImages.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distX = (rect.left + rect.width / 2 - centerX) / 100;
      const distY = (rect.top + rect.height / 2 - centerY) / 100;

      gsap.to(img, {
        x: distX * 1200,
        y: distY * 600,
        scale: 5,
        duration: 2.5,
        ease: "power4.inOut",
      });
    });
  };

  return (
    <div className="relative size-full h-screen bg-red-500 overflow-hidden">
      {/* Controls */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 px-1 flex gap-1 bg-goldenbrown border border-white/[0.125] backdrop-blur-xl rounded-lg z-10">
        <button
          onClick={handleZoomOut}
          className={`p-2 transition-opacity duration-500 ${
            !isZoomed ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="stroke-white"
          >
            <path d="M7.5 14c3.5899 0 6.5-2.9101 6.5-6.5C14 3.91015 11.0899 1 7.5 1 3.91015 1 1 3.91015 1 7.5 1 11.0899 3.91015 14 7.5 14Z" />
            <path d="M10 7.5H5" strokeMiterlimit="10" />
            <path d="M16.9 17 12 12.2" />
          </svg>
        </button>
        <button
          onClick={handleZoomIn}
          className={`p-2 transition-opacity duration-500 ${
            isZoomed ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="stroke-white"
          >
            <path d="M7.5 14c3.5899 0 6.5-2.9101 6.5-6.5C14 3.91015 11.0899 1 7.5 1 3.91015 1 1 3.91015 1 7.5 1 11.0899 3.91015 14 7.5 14Z" />
            <path d="M10 7.5H5M7.5 10V5" strokeMiterlimit="10" />
            <path d="M16.9 17 12 12.2" />
          </svg>
        </button>
      </div>

      <div
        ref={dragLayerRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        className="absolute inset-0 hidden touch-none z-[1]"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full overflow-visible bg-green-500 border border-blue-500">
        <div
          ref={galleryRef}
          className="relative w-full h-full flex flex-wrap justify-center items-start gap-1 p-1 origin-center will-change-transform"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
