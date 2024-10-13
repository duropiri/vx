"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  lineStyles?: LineStyles;
  start?: number; // Percentage of the viewport where the animation should start
  end?: number; // Percentage of the viewport where the animation should end
}

interface LineStyles {
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  gap?: string | number; // Renamed for more intuitive meaning
  height?: string | number;
  width?: string | number;
}

export default function WordByWordOnScroll({
  children,
  className = "",
  shadow,
  lineStyles,
  start = 90,
  end = 25,
}: AnimationProps) {
  const element = useRef<HTMLParagraphElement>(null);
  // Convert start and end to a percentage string format required by Framer Motion
  const { scrollYProgress } = useScroll({
    target: element,
    // offset: ["start end", "start start"], // start animation once in view, complete animation at top of view
    offset: [`start ${start}%`, `start ${end}%`],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(e));
  // }, []);

  const words = typeof children === "string" ? children.split(" ") : [children];
  return (
    <p className={className + " flex flex-wrap leading-4"} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // console.log([start, end]);
        return (
          <Word
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
            shadow={shadow}
            lineStyles={lineStyles}
            isFirst={i === 0}
            isLast={i === words.length - 1}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
  shadow,
  lineStyles,
  isFirst,
  isLast,
}: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  if (shadow) {
    return (
      <span
        className={lineStyles ? "" : styles.word} // Simplified conditional class application
        style={{
          marginTop: lineStyles?.marginTop ?? "0", // Default values for margins
          marginBottom: lineStyles?.marginBottom ?? "0",
          marginRight: lineStyles?.marginRight ?? "0",
          marginLeft:
            lineStyles?.marginBetween && !(isFirst || isLast) // Check for marginBetween and first/last item
              ? lineStyles.marginBetween
              : lineStyles?.marginLeft ?? "0", // Fallback to marginLeft or 0
          height: lineStyles?.height ?? "auto", // Default to "auto" if height is undefined
          width: lineStyles?.width ?? "auto", // Default to "auto" for width
        }}
      >
        <span className={styles.shadow}>{children}</span>
        <motion.span style={{ opacity }}>{children}</motion.span>
      </span>
    );
  } else {
    return (
      // Without Shadow
      <motion.span
        style={{
          opacity: opacity,
          marginTop: lineStyles?.lineHeight,
          marginRight: lineStyles?.whitespace,
        }}
        className={!lineStyles ? styles.word : ""}
      >
        {children}
      </motion.span>
    );
  }
};

const styles = {
  word: "mr-[1ch] mt-[1ch] relative", // Adjust mr and mt if character spacing is ugly
  shadow: "absolute opacity-10",
};
