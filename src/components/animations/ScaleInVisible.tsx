"use client";
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from "react";

interface ScaleInVisibleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  margin?: string;
  id?: string;
  // key?: string | number;
  once?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  hoverScale?: number;
  tapScale?: number;
}

// Hook to detect if element is visible in viewport
function useOnScreen<T extends Element>(options?: IntersectionObserverInit) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line
  }, [ref, options]);
  return { ref, visible };
}

const ScaleInVisible = forwardRef<HTMLDivElement, ScaleInVisibleProps>(
  (
    {
      children,
      className = "",
      delay = 0.1,
      duration = 0.2,
      // amount = 0.3,
      margin = "50px",
      id,
      // key,
      once = true,
      onClick,
      hoverScale,
      tapScale,
    },
    ref
  ) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const actualRef =
      (ref as MutableRefObject<HTMLDivElement>) || elementRef;
    // IntersectionObserver rootMargin: negative bottom margin triggers earlier
    const { ref: innerRef, visible } = useOnScreen<HTMLDivElement>({
      rootMargin: `0px 0px -${margin} 0px`,
    });
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    useEffect(() => {
      if (visible) {
        setHasBeenVisible(true);
      }
    }, [visible]);
    const actualVisible = once ? hasBeenVisible : visible;

    // initial style
    const initialOpacity = actualVisible ? 1 : 0;
    const initialScale = actualVisible ? 1 : 0.9;

    // For hover/tap, we modify transform directly on the element
    return (
      <div
        id={id}
        ref={(el) => {
          if (el) {
            actualRef.current = el;
            innerRef.current = el;
          }
        }}
        className={className}
        onClick={onClick}
        onMouseEnter={() => {
          if (hoverScale && actualRef.current) {
            actualRef.current.style.transition = "transform 0.2s";
            actualRef.current.style.transform = `scale(${hoverScale})`;
          }
        }}
        onMouseLeave={() => {
          if (hoverScale && actualRef.current) {
            actualRef.current.style.transition = "transform 0.2s";
            actualRef.current.style.transform = `scale(${actualVisible ? 1 : 0.9})`;
          }
        }}
        onMouseDown={() => {
          if (tapScale && actualRef.current) {
            actualRef.current.style.transition = "transform 0.1s";
            actualRef.current.style.transform = `scale(${tapScale})`;
          }
        }}
        onMouseUp={() => {
          if (tapScale && actualRef.current) {
            actualRef.current.style.transition = "transform 0.1s";
            actualRef.current.style.transform = `scale(${
              hoverScale || (actualVisible ? 1 : 0.9)
            })`;
          }
        }}
        style={{
          opacity: initialOpacity,
          transform: `scale(${initialScale})`,
          transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        }}
      >
        {children}
      </div>
    );
  }
);

ScaleInVisible.displayName = "ScaleInVisible";

export default ScaleInVisible;