import SectionHeader from "@/components/ui/sectionHeader";
import { motion, MotionValue } from "framer-motion";
import React from "react";
import { WhyUsItems } from "@/data/whyUsItems";

interface SectionProps {
  className?: string;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
}

function WhyUsSection({ className }: SectionProps) {
  return (
    <div
      id="services"
      className={`section-container !flex-col ${className} bg-white`}
    >
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading="Why Us?"
          subheading="Why Choose Virtual Xposure?"
          body="We deliver excellence at every level, combining cutting-edge technology with unmatched customer service. Our proven track record and comprehensive solutions ensure your success, backed by industry-leading guarantees and lightning-fast delivery."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mt-[5rem]">
          {WhyUsItems.map((item, index) => (
            <motion.div
              key={index + 4}
              className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true, // Only animate once
                amount: 0.3, // Trigger when 30% of element is in view
                margin: "50px", // Start animation 50px before element enters viewport
              }}
              transition={{
                delay: (index + 4) * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="cursor-select-hover group flex flex-grow flex-col items-center p-4 hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
                <div className="flex flex-col items-center justify-center gap-[2rem]">
                  <div className="transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:filter-none group-hover:grayscale-0 text-goldenbrown size-[4rem]">
                    {item.icon}
                  </div>
                  <div className="w-full text-center pn-semibold-22 text-black/50 group-hover:text-black transition-all duration-300 !leading-[1.3rem]">
                    {item.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUsSection;
