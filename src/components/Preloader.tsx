import React, { useEffect, useState, useRef } from "react";
import { usePreloader } from "@/contexts/PreloaderContext";
import Image from "next/image";
import logo from "@/assets/images/logo-black-black.webp";

interface PreloaderProps {
  finishLoading: () => void;
  finishAnimation: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
  finishLoading,
  finishAnimation,
}) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const { isAnimating } = usePreloader();
  const duration = 4000;
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  // const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLoadingPercentage = (percentage: number) => {
      setLoadingPercentage(percentage);
      // console.log(`Loading percentage updated to: ${percentage}`);
    };

    const handleWindowLoad = () => {
      // console.log("Window loaded, updating loading percentage to 100");
      updateLoadingPercentage(100);
      finishLoading();
    };

    // Check if the window is already loaded
    if (document.readyState === "complete") {
      // console.log("Document ready state is complete, handling window load immediately");
      handleWindowLoad();
    } else {
      // console.log("Adding load event listener");
      window.addEventListener("load", handleWindowLoad);
    }

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev < 99) {
          // console.log(`Incrementing loading percentage to: ${prev + 1}`);
          return prev + 1; // Increase percentage up to 99%
        }
        return prev;
      });
    }, 20); // Increase percentage every 20ms

    return () => {
      // console.log("Cleaning up load event listener and interval");
      window.removeEventListener("load", handleWindowLoad);
      clearInterval(interval);
    };
  }, [finishLoading]);

  // useEffect(() => {
  //   if (isAnimating) {
  //     document.body.classList.add("no-scroll");
  //     document.body.style.height = "100vh";
  //     document.body.style.overflowY = "hidden";
  //     document.body.style.overflowX = "hidden";
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //     document.body.style.height = "auto";
  //     document.body.style.overflowY = "visible";
  //     document.body.style.overflowX = "hidden";
  //   }

  //   return () => {
  //     document.body.classList.remove("no-scroll");
  //     document.body.style.height = "auto";
  //     document.body.style.overflowY = "visible";
  //     document.body.style.overflowX = "hidden";
  //   };
  // }, [isAnimating]);

  useEffect(() => {
    if (loadingPercentage === 100) {
      // console.log("Loading complete, starting exit animation");
      const timer = setTimeout(() => {
        // console.log("Exit animation complete, finishing animation");
        finishAnimation();
      }, duration); // Delay to match animation duration

      return () => clearTimeout(timer); // Clean up timer if component unmounts
    }
  }, [loadingPercentage, finishAnimation]);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");

      if (loadingPercentage === 100) {
        if (textRef.current && imageRef.current) {
          const chars = textRef.current.querySelectorAll(".char");

          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onComplete: () => {
              // Start the final animation to reveal the site
              gsap.to(imageRef.current, {
                scale: 0,
                opacity: 0,
                duration: duration / 1000 / 5,
                ease: "power1.inOut",
              });
              gsap.to(".splash-screen", {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: duration / 1000 / 4,
                ease: "power4.inOut",
                onComplete: () => {
                  setTimeout(finishAnimation, duration);
                },
              });
            },
          });

          tl.fromTo(
            chars,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: duration / 1000 / ((duration / 1000) * 4),
              ease: "power4.out",
              stagger: 0.075,
            }
          )
            .to(chars, {
              y: -25,
              opacity: 0,
              duration: duration / 1000 / ((duration / 1000) * 2),
              ease: "power4.in",
            })
            .fromTo(
              imageRef.current,
              { scale: 0, opacity: 0 },
              {
                scale: 1.1,
                opacity: 1,
                duration: duration / 1000 / ((duration / 1000) * 2),
                ease: "power1.inOut",
              }
            )
            .to(imageRef.current, {
              scale: 0.95, // Pulsate smaller
              duration: duration / 1000 / 15,
              ease: "power1.inOut",
            })
            .to(imageRef.current, {
              scale: 1.05, // Pulsate larger again
              duration: duration / 1000 / 15,
              ease: "power1.inOut",
            })
            .to(imageRef.current, {
              scale: 1, // Return to original size
              duration: duration / 1000 / 15,
              ease: "power1.inOut",
            });
        }
      } else {
        gsap.to(".splash-screen", {
          clipPath: "inset(0% 0% 0% 0%)",
        });
      }
    };

    loadGSAP();
  }, [loadingPercentage, finishAnimation, duration]);

  return (
    <div
      className="fixed inset-0 overflow-hidden z-[99999999] flex flex-col items-center justify-center h-[100dvh] bg-white cursor-wait splash-screen text-ash max-w-[100vw]"
      style={{ zIndex: 99999999999999 }}
    >
      <div className="relative z-10 select-none pointer-events-none flex flex-col items-center justify-center size-full splash-content">
        <div
          className="pn-regular-28 relative text-lg sm:text-2xl uppercase overflow-hidden"
          ref={textRef}
        >
          {"Virtual Xposure".split("").map((char, index) => (
            <span key={index} className="char inline-block">
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
            priority
            placeholder="blur"
            quality={80}
          />
        </div>

        <div className="absolute bottom-0 left-[1.5rem] text-start">
          <div className="pn-regular-28 mr-[1rem] mb-[1.5rem] mix-blend-difference">
            {loadingPercentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
