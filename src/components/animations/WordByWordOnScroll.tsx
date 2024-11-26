"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  lineStyles?: LineStyles;
  start?: number;
  end?: number;
  scrollProgress?: MotionValue<number>;
}

interface LineStyles {
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  gap?: string | number;
  height?: string | number;
  width?: string | number;
  marginBetween?: string | number;
  lineHeight?: string | number;
  whitespace?: string | number;
}

interface ProcessedWord {
  text: string;
  className: string;
}

export default function WordByWordOnScroll({
  children,
  className = "",
  shadow,
  lineStyles,
  start = 90,
  end = 25,
  scrollProgress,
}: AnimationProps) {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = scrollProgress
    ? { scrollYProgress: scrollProgress }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    : useScroll({
        target: element,
        offset: [`start ${start}%`, `start ${end}%`],
      });

  const processChildren = (children: React.ReactNode): ProcessedWord[] => {
    if (typeof children === "string") {
      return children.split(" ").map((word) => ({
        text: word,
        className: "",
      }));
    }

    if (React.isValidElement(children)) {
      const childrenArray = React.Children.toArray(children.props.children);
      return childrenArray.reduce<ProcessedWord[]>((acc, child) => {
        if (typeof child === "string") {
          const words = child.split(" ").map((word) => ({
            text: word,
            className: children.props.className || "",
          }));
          return [...acc, ...words];
        } else if (React.isValidElement(child)) {
          const processedChild = processChildren(child);
          return [...acc, ...processedChild];
        }
        return acc;
      }, []);
    }

    return [];
  };

  const words = processChildren(children);

  return (
    <p className={`${className} flex flex-wrap leading-normal justify-center`} ref={element}>
      {words.map((word, i) => {
        const start = i / (words.length * 1.3);
        const end = start + 1 / (words.length * 1.3);
        return (
          <Word
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
            shadow={shadow}
            lineStyles={lineStyles}
            isFirst={i === 0}
            isLast={i === words.length - 1}
            className={word.className}
          >
            {word.text}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  shadow?: boolean;
  lineStyles?: LineStyles;
  isFirst: boolean;
  isLast: boolean;
  className?: string;
}

const Word = ({
  children,
  range,
  progress,
  shadow,
  lineStyles,
  isFirst,
  isLast,
  className,
}: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  const wordContent = (
    <span className={className}>
      {children}
    </span>
  );

  if (shadow) {
    return (
      <span
        className={lineStyles ? "" : styles.word}
        style={{
          marginTop: lineStyles?.marginTop ?? "0",
          marginBottom: lineStyles?.marginBottom ?? "0",
          marginRight: lineStyles?.marginRight ?? "0",
          marginLeft:
            lineStyles?.marginBetween && !(isFirst || isLast)
              ? lineStyles.marginBetween
              : lineStyles?.marginLeft ?? "0",
          height: lineStyles?.height ?? "auto",
          width: lineStyles?.width ?? "auto",
        }}
      >
        <span className={styles.shadow}>{wordContent}</span>
        <motion.span style={{ opacity }}>{wordContent}</motion.span>
      </span>
    );
  }

  return (
    <motion.span
      style={{
        opacity: opacity,
        marginTop: lineStyles?.lineHeight,
        marginRight: lineStyles?.whitespace,
      }}
      className={`${!lineStyles ? styles.word : ""}`}
    >
      {wordContent}
    </motion.span>
  );
};

const styles = {
  word: "mr-[1ch] mt-[1ch] relative",
  shadow: "absolute opacity-10",
};