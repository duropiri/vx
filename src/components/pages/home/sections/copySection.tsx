"use client";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface SectionProps {
  className?: string;
  copy?: React.ReactNode;
  scrollYProgress?: MotionValue<number>; // Proper type for scrollYProgress
}

function CopySection({ className, copy, scrollYProgress }: SectionProps) {
  const scale = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [0.8, 1])
    : undefined;
  const rotate = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [5, 0])
    : undefined;

  return (
    <motion.div
      // style={{ scale, rotate }}
      className={`section-container flex ${className} relative`}
    >
      <div className="flex flex-col items-start gap-y-[0.75rem] pn-regular-96 uppercase py-[5rem]">
        <LetterRevealOnScroll end="bottom 80%" className="relative">
          <h2 className="text-center text-ash max-w-[28ch]">{copy}</h2>
        </LetterRevealOnScroll>
      </div>
    </motion.div>
  );
}

export default CopySection;
