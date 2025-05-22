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
  const sloganRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
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

    const leftChars = Array.from(textRef.current.querySelectorAll(".char"));
    const rightChars = sloganRef.current
      ? Array.from(sloganRef.current.querySelectorAll(".char"))
      : [];
    if (leftChars.length === 0 && rightChars.length === 0) return;

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
          .to(
            imageRef.current,
            {
              opacity: 0,
              duration: 0.3333,
              ease: "power1.inOut",
            },
            "<" // ensure alignment with next tween
          )
          // fade out the slogan container
          .to(
            sloganRef.current,
            {
              opacity: 0,
              duration: 0.3333,
              ease: "power1.inOut",
            },
            "<"
          )
          // hide slogan characters in sync with logo
          .to(
            dividerRef.current,
            {
              height: 0,
              opacity: 0,          // fade out alongside shrink
              duration: 0.3333,
              ease: "power2.in",
            },
            "-=0.3333"
          )
          // fade out the loader counter
          .to(
            counterRef.current,
            {
              opacity: 0,
              duration: 0.3333,
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            ".splash-screen",
            {
              clipPath: "inset(0% 0% 100% 0%)",
              duration: 0.3333,
              ease: "power4.inOut",
            },
            "-=0.167"
          );
      },
    });

    mainTimeline.from(counterRef.current, {
      opacity: 0,
      duration: 0.3333,
      ease: "power1.out",
    });

    mainTimeline
      // animate left text first
      .fromTo(
        leftChars,
        {
          // y: 25,
          opacity: 0,
          immediateRender: true,
        },
        {
          // y: 0,
          opacity: 1,
          duration: 0.6667,
          ease: "power4.out",
          stagger: 0.0067,
        }
      )
      // then animate slogan characters
      .fromTo(
        rightChars,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6667,
          ease: "power4.out",
          stagger: 0.0067,
        },
        "-=0.3333" // overlap the last half-second of the left animation
      )
      // grow divider from 0 to full height
      .fromTo(
        dividerRef.current,
        { height: 0 },
        { height: 96, duration: 1.3334, ease: "power2.out" },
        "<"
      )
      // left text leaves before logo enters
      .to(
        leftChars,
        {
          // y: -25,
          opacity: 0,
          duration: 0.3333,
          ease: "power1.inOut",
          stagger: 0.0067,
        },
        "+=0.1334"
      ) // small delay after divider grow
      .fromTo(
        imageRef.current,
        {
          // scale: 0,
          opacity: 0,
          immediateRender: true,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6667,
          ease: "power4.inOut",
        }
      );

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
        className="cursor-none-hover fixed inset-0 overflow-hidden z-[99999999] flex flex-col items-center justify-center h-[100dvh] bg-white cursor-wait splash-screen text-ash max-w-[100vw]"
        style={{ zIndex: 99999999999999 }}
      >
        <div className="scale-75 sm:scale-100 relative z-10 select-none pointer-events-none flex flex-row items-center justify-center w-full splash-content">
          {/* LEFT: existing text + logo */}
          <div className="relative flex flex-col items-center justify-center h-full">
            <div
              className="pn-semibold-24 gold-text flex flex-col relative uppercase overflow-hidden"
              ref={textRef}
            >
              <div className="flex flex-row items-start justify-end">
                {"Virtual".split("").map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className="char inline-block"
                    style={{
                      opacity: 0,
                      // transform: "translateY(25px)"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <div className="flex flex-row items-start justify-end">
                {"Xposure".split("").map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className="char inline-block text-goldenbrown"
                    style={{
                      opacity: 0,
                      // transform: "translateY(25px)"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="absolute inset-0 flex items-center justify-end opacity-0 z-10 overflow-hidden"
              ref={imageRef}
            >
              <Image
                src={logo}
                alt="Loading"
                className="w-[7rem]"
                priority
                loading="eager"
                placeholder="blur"
                quality={80}
              />
            </div>
          </div>

          {/* DIVIDER */}
          <div
            className="mx-4 sm:mx-8 w-[2px] rounded-full bg-ash"
            style={{ height: 0 }}
            ref={dividerRef}
          />

          {/* RIGHT: slogan */}
          <div
            className="flex flex-col items-start justify-start pn-regular-32 relative uppercase overflow-hidden"
            ref={sloganRef}
          >
            <div className="flex flex-row items-start justify-start">
              {"Sell Your Listings".split("").map((char, index) => (
                <span
                  key={`slogan-${index}`}
                  className="char inline-block"
                  style={{ opacity: 0, transform: "translateY(25px)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="flex flex-row items-start justify-start">
              {"in Days, Not Weeks".split("").map((char, index) => (
                <span
                  key={`slogan-${index}`}
                  className="char inline-block"
                  style={{ opacity: 0, transform: "translateY(25px)" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Loader counter remains unchanged below as-is */}
        <div
          className="absolute flex flex-col items-center justify-center bottom-0 w-full text-start"
          ref={counterRef}
        >
          <div className="pn-regular-24 mr-[1rem] mb-[1.5rem] text-black">
            {loadingPercentage}%
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
