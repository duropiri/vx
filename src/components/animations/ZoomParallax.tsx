"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase)

interface AnimationProps {
  children?: React.ReactNode;
  className?: string;
  media: Media[];
  id?: string;
  onStepChange: (step: number) => void; // New prop to notify ProblemSection
}

interface Media {
  src: string;
  alt: string;
  type: string;
  top?: string | null;
  left?: string | null;
  width?: string | null;
  height?: string | null;
  fit?: string;
}

export default function ZoomParallax({
  className = "",
  media,
  id,
  onStepChange, // Pass this as a prop
}: AnimationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set a breakpoint for mobile
    };

    // Initial setup
    handleResize();

    // Event listeners for scroll and resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerRef = useRef(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  // Variables for animation control
  const scaleGrowthRate = 10;
  //   const translationGrowthRate = 700;
  const animationDuration = 1;
  const staggerDelay = 0.6;
  const fullOpacityPoint = 0.5; // Percentage of the animation duration when the image reaches full opacity
  const initialOpacityFirstImage = 0.6; // Starting opacity for the first image
  const initialOpacityOtherImages = 0; // Starting opacity for the rest of the images

  // Function to calculate the translation growth rate based on the viewport width
  const getTranslationGrowthRate = () => {
    // if (window.innerWidth >= 2560) {
    //   return 500; // 700 works well for larger screens
    // } else if (window.innerWidth >= 1920) {
    //   return 250; // 500 works well for 1920p screens
    // } else {
    //   return 50; // Smaller value for smaller screens
    // }
    return 0;
  };

  useEffect(() => {
    const container = containerRef.current;
    const elements = elementsRef.current;

    if (!container) return;

    elements.forEach((el, index) => {
      const isLastElement = index === media.length - 1;
      const direction = index % 2 === 0 ? 1 : -1;
      const translationGrowthRate = getTranslationGrowthRate(); // Get dynamic growth rate

      // Calculate initial values for smooth entry
      const initialScale = 0.2;
      const initialX = direction * 50; // Start slightly off-screen in the opposite direction

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: `top+=${index * window.innerHeight * staggerDelay} top`,
          end: `+=${window.innerHeight}`,
          scrub: true,
          markers: false,
          onEnter: () => {
            // Only use onEnter for the first image
            if (index === 0) {
              onStepChange(index + 1);
              // console.log(`Animation started at Image ${index + 1}`);
            }
          },
          onEnterBack: () => {
            // onEnterBack always sets the step as the current image
            onStepChange(index + 1);
            // console.log(`Image ${index + 1} entered backwards`);
          },
          onLeave: () => {
            // Use onLeave to set the step for subsequent images
            if (index !== media.length - 1) {
              onStepChange(index + 2); // Trigger the next step
              // console.log(`Image ${index + 2} entered`);
            } else {
              // console.log(`Animation stopped at Image ${media.length}`);
            }
          },
        },
      });

      // Set initial state for opacity based on index
      const initialOpacity =
        index === 0 ? initialOpacityFirstImage : initialOpacityOtherImages;

      // Set initial state
      gsap.set(el, {
        opacity: initialOpacity,
        scale: initialScale,
        x: initialX,
        zIndex: media.length - index,
      });

      // Combined animation for smooth entry and continuous motion
      tl.to(el, {
        opacity: 1, // Opacity fade-in
        duration: animationDuration * fullOpacityPoint, // Reach full opacity before the rest of the animation ends
        ease: "power1.in",
      });

      // Scale and horizontal translation
      if (isLastElement) {
        // Special animation for the last element
        tl.to(
          el,
          {
            scale: isMobile ? 2 : 1, // Scale to normal size
            x: 0, // Center the element
            duration: animationDuration,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.46,0 0.756,0.021 0.835,0.14 0.909,0.252 0.884,0.4 1,1 "
            ),
          },
          0
        );
      } else {
        tl.to(
          el,
          {
            scale: scaleGrowthRate,
            x: direction * translationGrowthRate,
            duration: animationDuration,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.46,0 0.756,0.021 0.835,0.14 0.909,0.252 0.884,0.4 1,1 "
            ),
          },
          0 // Start at the same time as opacity
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scaleGrowthRate,
    // translationGrowthRate,
    animationDuration,
    staggerDelay,
    fullOpacityPoint,
    initialOpacityFirstImage,
    initialOpacityOtherImages,
    media.length,
    onStepChange, // Add this dependency to trigger the change
  ]);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`${className} ${styles.container}`}
      style={{ height: `${media.length * 100 - media.length * 10}vh` }}
    >
      <div className={styles.sticky}>
        {media.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              elementsRef.current[index] = el!;
            }}
            className={styles.element}
          >
            {item.type === "image" && (
              <div
                style={{
                  top: item.top || "0%",
                  left:
                    isMobile && index === media.length - 1
                      ? "0%"
                      : item.left || "0%",
                  // width: "25vw",
                }}
                className={`${styles.imageContainer} aspect-square w-[30vw] lg:w-[25vw]`}
              >
                <Image
                  src={item.src}
                  fill
                  alt={item.alt}
                  objectFit={item.fit || "contain"}
                  sizes="(max-width: 640px) 600px, (max-width: 1024px) 600px, 600px" // Adjust these sizes based on your layout
                  // placeholder="blur"
                  quality={80}
                />
              </div>
            )}
            {item.type === "video" && (
              <div
                style={{
                  top: item.top || "0%",
                  left: item.left || "0%",
                  width: item.width || "25vw",
                  height: item.height || "25vh",
                }}
                className={styles.imageContainer}
              >
                <video
                  src={item.src}
                  autoPlay={true}
                  controls={false}
                  loop
                  muted
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: "w-full relative",
  sticky: "sticky top-0 h-[100vh] w-full overflow-hidden",
  element: "w-full h-full absolute top-0 flex items-center justify-center",
  imageContainer: "relative",
};
