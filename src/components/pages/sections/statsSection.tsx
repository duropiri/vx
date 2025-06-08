import ScrollingBanner from "@/components/animations/ScrollingBanner";
import React, { forwardRef, RefObject } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { HomePageStats } from "@/data/stats";
import scrollingText from "@/../../public/assets/svgs/vx-scrolling-text.svg";

interface Stat {
  value: number;
  unit: string;
  description: string;
  source?: string;
}

interface SectionProps {
  className?: string;
  scrollProgress?: number;
  stats?: Stat[];
  shrinkSize?: number;
  rotationAmount?: number;
  ref?: RefObject<HTMLDivElement>;
}

/**
 * Renders a section displaying statistics with animated counters and scrolling effects.
 *
 * This component uses gsap for animations and react-intersection-observer
 * to trigger animations when the section comes into view.
 *
 * @param {object} props - The component props
 * @param {string} [props.className] - Optional CSS classes to apply to the component
 * @returns {React.JSX.Element} A React component representing the stats section
 */
const StatsSection = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      className,
      // scrollProgress,
      stats = HomePageStats,
      // shrinkSize = 0,
      // rotationAmount = -45,
    },
    ref
  ) => {
    const isLongFormat = stats.length >= 4; // Use 2x2 grid for 4 stats, else use single row
    // Helper function to chunk array into pairs
    const getPairs = (arr: Stat[]): Stat[][] => {
      const pairs: Stat[][] = [];
      for (let i = 0; i < arr.length; i += 2) {
        pairs.push(arr.slice(i, i + 2));
      }
      return pairs;
    };

    const { ref: countUpRef, inView } = useInView({
      triggerOnce: false, // Trigger the animation only once
      threshold: 0.005, // Trigger when 5% of the element is visible
    });

    // const sectionRef = useRef<HTMLDivElement>(null);
    // const scale =
    //   scrollYProgress && useTransform(scrollYProgress, [0, 1], [1, shrinkSize]);

    // const rotate = scrollYProgress && useTransform(scrollYProgress, [0, 1], [0, rotationAmount]);

    // const blur = scrollYProgress && useTransform(
    //   scrollYProgress,
    //   [0, 1],
    //   ["blur(0px)", "blur(2.5px)"] // Use actual blur values with units
    // );

    return (
      <div
        // ref={ref}
        className={`sticky top-[5rem] section-container !flex-row ${className} bg-ash relative overflow-hidden`}
      >
        <div>
          {/* Background SVGs */}
          <div className="absolute pointer-events-none left-0 top-1/2 -translate-y-1/2 flex flex-col w-[100vw] text-goldenbrown/5 gap-y-[6.25rem] py-[6.25rem]">
            <ScrollingBanner
              baseVelocity={25}
              child="flex flex-row items-center gap-x-[6.25rem]"
            >
              <div
                style={{
                  height: "104px",
                  width: "1881px",
                  backgroundColor: "currentColor",
                  WebkitMaskImage: `url(${scrollingText.src})`,
                  maskImage: `url(${scrollingText.src})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  // other mask properties as needed
                }}
              />
            </ScrollingBanner>
            <ScrollingBanner
              baseVelocity={-25}
              child="flex flex-row items-center gap-x-[6.25rem]"
            >
              <div
                style={{
                  height: "104px",
                  width: "1881px",
                  backgroundColor: "currentColor",
                  WebkitMaskImage: `url(${scrollingText.src})`,
                  maskImage: `url(${scrollingText.src})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  // other mask properties as needed
                }}
              />
            </ScrollingBanner>
            <ScrollingBanner
              baseVelocity={25}
              child="flex flex-row items-center gap-x-[6.25rem]"
            >
              <div
                style={{
                  height: "104px",
                  width: "1881px",
                  backgroundColor: "currentColor",
                  WebkitMaskImage: `url(${scrollingText.src})`,
                  maskImage: `url(${scrollingText.src})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  // other mask properties as needed
                }}
              />
            </ScrollingBanner>
          </div>
          <div ref={ref}>
            <div
              ref={countUpRef}
              className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-y-[1.5rem] text-white"
            >
              <div
                className={`${
                  isLongFormat
                    ? "flex flex-col gap-y-[3.125rem]"
                    : "grid grid-cols-1 md:grid-cols-3 gap-[6rem]"
                } w-full`}
              >
                {isLongFormat
                  ? // Two column layout for 4+ stats
                    getPairs(stats).map((pair, pairIndex) => (
                      <div
                        key={pairIndex}
                        className="flex flex-row size-full h-full items-start justify-between gap-x-[3.125rem]"
                      >
                        {pair.map((stat, index) => (
                          <div
                            key={`${pairIndex}-${index}`}
                            className="flex flex-col self-stretch w-full items-start justify-start pb-[0.75rem] gap-[0.75rem] border-b border-white"
                          >
                            <div className="flex flex-col size-full items-start justify-start gap-[0.75rem]">
                              <p className="pn-regular-40">
                                {inView ? (
                                  <CountUp end={stat.value} duration={2} />
                                ) : (
                                  0
                                )}
                                {stat.unit}
                              </p>
                              <p className="pn-regular-16">
                                {stat.description}
                              </p>
                            </div>
                            {stat.source && (
                              <p className="pn-regular-14">{stat.source}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ))
                  : // Single row grid for 3 or fewer stats
                    stats.map((stat, index) => (
                      <div
                        key={index}
                        className="flex flex-col self-stretch items-start justify-start pb-3 gap-3 border-b border-white"
                      >
                        <div className="flex flex-col w-full items-start justify-start gap-3">
                          <p className="pn-regular-40">
                            {inView ? (
                              <CountUp end={stat.value} duration={2} />
                            ) : (
                              0
                            )}
                            {stat.unit}
                          </p>
                          <p className="pn-regular-16">{stat.description}</p>
                        </div>
                        {stat.source && (
                          <p className="pn-regular-14">{stat.source}</p>
                        )}
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

StatsSection.displayName = "StatsSection";
export default StatsSection;
