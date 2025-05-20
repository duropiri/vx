"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/utils/gsap";
import logo from "@/../../public/assets/images/logo-black-black.webp";
import { useViewport } from "@/contexts/ViewportContext";

interface PreloaderProps {
  finishLoading: () => void;
  finishAnimation: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
  finishLoading,
  finishAnimation,
}) => {
  const { windowWidth } = useViewport();
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  // const duration = 5000;
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationCompleted = useRef(false);

  useEffect(() => {
    const updateLoadingPercentage = (percentage: number) => {
      setLoadingPercentage(percentage);
    };

    const handleWindowLoad = () => {
      updateLoadingPercentage(100);
      finishLoading();
    };

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 99) {
          return prev + 1;
        }
        return prev;
      });
    }, 20);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
      clearInterval(interval);
    };
  }, [finishLoading, windowWidth]);

  useEffect(() => {
    if (!textRef.current || !imageRef.current) return;
    if (loadingPercentage !== 100 || animationCompleted.current) return;

    const chars = Array.from(textRef.current.querySelectorAll(".char"));
    if (chars.length === 0) return;

    animationCompleted.current = true;

    const mainTimeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        const exitTimeline = gsap.timeline({
          onComplete: () => {
            finishAnimation();
          },
        });

        exitTimeline
          .to(imageRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          })
          .to(
            ".splash-screen",
            {
              clipPath: "inset(0% 0% 100% 0%)",
              duration: 0.5,
              ease: "power4.inOut",
            },
            "-=0.25"
          );
      },
    });

    mainTimeline
      .fromTo(
        chars,
        { y: 25, opacity: 0, immediateRender: true },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power4.out",
          stagger: 0.05,
        }
      )
      .to(chars, {
        y: -25,
        opacity: 0,
        duration: 0.375,
        ease: "power4.in",
      })
      .fromTo(
        imageRef.current,
        { scale: 0, opacity: 0, immediateRender: true },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
        }
      );
    // .to(imageRef.current, {
    //   clipPath: "inset(0% 0% 100% 0%)",
    //   duration: 2,
    //   ease: "power1.inOut",
    // })
    // .to(imageRef.current, {
    //   scale: 1,
    //   duration: 0.1,
    //   ease: "power1.inOut",
    // })

    return () => {
      mainTimeline.kill();
    };
  }, [loadingPercentage, finishAnimation, windowWidth]);

  return (
    <>
      <noscript>
        <style>{`.splash-screen { display: none !important; }`}</style>
      </noscript>
      <div
        className="fixed inset-0 overflow-hidden z-[99999999] flex flex-col items-center justify-center h-[100dvh] bg-white cursor-wait splash-screen text-ash max-w-[100vw]"
        style={{ zIndex: 99999999999999 }}
      >
        <div className="relative z-10 select-none pointer-events-none flex flex-col items-center justify-center size-full splash-content">
          <div
            className="pn-regular-24 relative text-lg sm:text-2xl uppercase overflow-hidden"
            ref={textRef}
          >
            {"Virtual Xposure".split("").map((char, index) => (
              <span
                key={`char-${index}`}
                className="char inline-block"
                style={{
                  opacity: 0,
                  transform: "translateY(25px)",
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 mix-blend-difference z-10"
            ref={imageRef}
          >
            <Image
              src={logo}
              alt="Loading"
              className="w-[9.375rem] h-auto mix-blend-difference"
              priority={true}
              loading={true ? "eager" : "lazy"}
              placeholder="blur"
              quality={75}
            />
          </div>

          <div className="absolute bottom-0 left-[1.5rem] text-start">
            <div className="pn-regular-24 mr-[1rem] mb-[1.5rem] mix-blend-difference">
              {loadingPercentage}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;