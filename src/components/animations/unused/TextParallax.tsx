"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

interface AnimationProps {
  className?: string;
  phrases?: PhraseDetails[];
}

export interface PhraseDetails {
  items: PhraseItem[];
  direction?: string;
  left?: string;
}

export interface PhraseItem {
  text: string;
  src: string;
}

export default function TextParallax({
  className,
  phrases = [],
}: AnimationProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={`overflow-hidden ${className}`}>
      <div className="h-[100vh]"></div>
      <div ref={container}>
        {phrases.map((phrase, index) => (
          <Slide
            key={index}
            items={phrase.items}
            direction={phrase.direction}
            left={phrase.left}
            progress={scrollYProgress}
          />
        ))}
      </div>
      <div className="h-[100vh]"></div>
    </main>
  );
}

interface SlideProps {
  items: PhraseItem[];
  direction?: string;
  left?: string;
  progress: any;
}

const Slide: React.FC<SlideProps> = ({
  items,
  direction = "right",
  left,
  progress,
}) => {
  const translateDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * translateDirection, -150 * translateDirection]
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap"
    >
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-5 items-center">
          {items.map((item, index) => (
            <Phrase key={index} text={item.text} src={item.src} />
          ))}
        </div>
      ))}
    </motion.div>
  );
};

interface PhraseProps {
  text: string;
  src: string;
}

const Phrase: React.FC<PhraseProps> = ({ text, src }) => {
  return (
    <div className="flex px-5 gap-5 items-center">
      <p className="text-[7.5vw]">{text}</p>
      <span className="relative h-[7.5vw] w-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image
          style={{ objectFit: "cover" }}
          src={src || "image"}
          alt="image"
          fill
          placeholder="blur"
          quality={75}
        />
      </span>
    </div>
  );
};

// Example phrases array
// const phrases = [
//     {
//       items: [
//         { text: "empathetic", src: "/assets/images/1.webp" },
//         { text: "useful", src: "/assets/images/2.webp" },
//         { text: "intuitive", src: "/assets/images/3.webp" },
//       ],
//       direction: "left",
//       left: "-40%",
//     },
//     {
//       items: [
//         { text: "empathetic", src: "/assets/images/4.webp" },
//         { text: "useful", src: "/assets/images/5.webp" },
//         { text: "intuitive", src: "/assets/images/6.webp" },
//       ],
//       direction: "right",
//       left: "-25%",
//     },
//     {
//       items: [
//         { text: "empathetic", src: "/assets/images/7.webp" },
//         { text: "useful", src: "/assets/images/8.webp" },
//         { text: "intuitive", src: "/assets/images/9.webp" },
//       ],
//       direction: "left",
//       left: "-70%",
//     },
//   ];
