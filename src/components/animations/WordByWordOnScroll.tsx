"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";
import { useViewport } from "@/contexts/ViewportContext";
gsap.registerPlugin(ScrollTrigger);


interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
  lineStyles?: LineStyles;
  start?: number;
  end?: number;
  scrollProgress?: number;
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
  originalNode?: React.ReactNode;
}

export default function WordByWordOnScroll({
  children,
  className = "",
  shadow,
  lineStyles,
  scrollProgress,
}: AnimationProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const setWordRef = useCallback(
    (index: number) => (el: HTMLSpanElement | null) => {
      wordsRef.current[index] = el;
    },
    []
  );

  const processChildren = (children: React.ReactNode): ProcessedWord[] => {
    if (typeof children === "string") {
      return children.split(/\s+/).map((word) => ({
        text: word,
        className: "",
      }));
    }

    if (React.isValidElement(children)) {
      const processChild = (child: React.ReactNode): ProcessedWord[] => {
        if (typeof child === "string") {
          return child
            .split(/\s+/)
            .filter(Boolean)
            .map((word) => ({
              text: word,
              className: children.props.className || "",
            }));
        }

        if (React.isValidElement(child)) {
          // If the child is a styled span, preserve it as a unit
          if (child.props.className?.includes("text-")) {
            return [
              {
                text: "",
                className: child.props.className || "",
                originalNode: child,
              },
            ];
          }

          // Process child's children
          const childrenArray = React.Children.toArray(child.props.children);
          return childrenArray.flatMap((subChild) => processChild(subChild));
        }

        return [];
      };

      const childrenArray = React.Children.toArray(children.props.children);
      return childrenArray.flatMap((child) => processChild(child));
    }

    return [];
  };

  const words = processChildren(children);
  const { windowWidth } = useViewport();

  useEffect(() => {
    const wordElements = wordsRef.current.filter(Boolean);
    const totalWords = wordElements.length;
    if (!totalWords) return;

    // Create one timeline for all words
    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(wordElements, { opacity: 0 });

      // Distribute words across the scroll range
      wordElements.forEach((word, index) => {
        if (!word) return;

        const start = index / totalWords;
        const end = start + 1 / totalWords;
        const opacity = gsap.utils.clamp(
          0,
          1,
          gsap.utils.mapRange(start, end, 0, 1, scrollProgress || 0)
        );

        // Use one single set call with advanced properties
        word.style.opacity = opacity.toString();
      });
    });

    return () => ctx.revert();
  }, [scrollProgress, windowWidth]);

  return (
    <p
      className={`${className} inline-flex flex-wrap leading-normal justify-center items-baseline`}
      ref={containerRef}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <Word
            ref={setWordRef(i)}
            shadow={shadow}
            lineStyles={lineStyles}
            isFirst={i === 0}
            isLast={i === words.length - 1}
            className={word.className}
            originalNode={word.originalNode}
          >
            {word.text}
          </Word>
          {!word.originalNode && " "}
        </React.Fragment>
      ))}
    </p>
  );
}

interface WordProps {
  children: string;
  shadow?: boolean;
  lineStyles?: LineStyles;
  isFirst: boolean;
  isLast: boolean;
  className?: string;
  originalNode?: React.ReactNode;
}

const Word = React.forwardRef<HTMLSpanElement, WordProps>(
  (
    { children, shadow, lineStyles, isFirst, isLast, className, originalNode },
    ref
  ) => {
    const wordContent = originalNode || (
      <span className={className}>{children}</span>
    );

    if (shadow) {
      return (
        <span
          className={`inline-flex ${lineStyles ? "" : styles.word}`}
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
            position: "relative",
          }}
        >
          <span className={styles.shadow}>{wordContent}</span>
          <span ref={ref} style={{ opacity: 0 }}>
            {wordContent}
          </span>
        </span>
      );
    }

    return (
      <span
        ref={ref}
        style={{
          marginTop: lineStyles?.lineHeight,
          marginRight: lineStyles?.whitespace || "0",
          opacity: 0,
          display: "inline-flex",
        }}
        className={`${!lineStyles ? styles.word : ""}`}
      >
        {wordContent}
      </span>
    );
  }
);

Word.displayName = "Word";

const styles = {
  word: "relative",
  shadow: "absolute opacity-10",
};
