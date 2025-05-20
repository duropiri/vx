"use client";
import React, { forwardRef, useEffect, useRef, useState, MutableRefObject } from "react";

function useOnScreen<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      options
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options]);
  return { ref, visible };
}

interface FadeInUpProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index?: number;
  className?: string;
  delay?: number;
  duration?: number;
  margin?: string;
  id?: string;
  // key?: string | number;
  once?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onHover?: any;
  onTap?: any;
}

const FadeInUp = forwardRef<HTMLDivElement, FadeInUpProps>(
  (
    {
      children,
      index = 0,
      className = "",
      delay = 0.1,
      duration = 0.5,
      margin = "50px",
      id,
      // key,
      once = true,
      onClick,
      onHover,
      onTap,
      ...props
    },
    ref
  ) => {
    const { ref: innerRef, visible } = useOnScreen<HTMLDivElement>({ rootMargin: `0px 0px -${margin} 0px` });

    const setRefs = (node: HTMLDivElement | null) => {
      innerRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    const classes = [
      className,
      "fadeInUp",
      visible ? "visible" : ""
    ].filter(Boolean).join(" ");

    return (
      <>
        <style>{`
          .fadeInUp {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity ${duration}s ease-out ${delay * (index + 2)}s,
                        transform ${duration}s ease-out ${delay * (index + 2)}s;
          }
          .visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
        <div id={id} ref={setRefs} className={classes} onClick={onClick} {...props}>
          {children}
        </div>
      </>
    );
  }
);

FadeInUp.displayName = "FadeInUp";

export default FadeInUp;