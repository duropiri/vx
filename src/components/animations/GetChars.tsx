import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useViewport } from '@/contexts/ViewportContext';

interface AnimatedTextProps {
  text: string;
  className?: string;
  onComplete?: () => void;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  onComplete,
  delay = 0
}) => {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const { windowWidth } = useViewport();

  useEffect(() => {
    const elements = charsRef.current.filter(Boolean);

    const tl = gsap.timeline({
      onComplete: onComplete,
      delay: delay
    });

    // Set initial state
    gsap.set(elements, { 
      y: 100,
      opacity: 0
    });

    // First fade in the letters
    tl.to(elements, {
      opacity: 1,
      duration: 0.4,
      stagger: {
        amount: 0.3,
        from: "start"
      },
      ease: "none"
    })
    // Then move them up
    .to(elements, {
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.3,
        from: "start"
      },
      ease: "power2.out"
    }, "<0.1"); // Start slightly after the fade begins

    return () => {
      tl.kill();
    };
  }, [text, onComplete, delay, windowWidth]);

  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) {
              charsRef.current[i] = el;
            }
          }}
          style={{ 
            display: 'inline-block',
            whiteSpace: char === " " ? "pre" : "normal",
            opacity: 0 // Ensure characters are initially invisible
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};