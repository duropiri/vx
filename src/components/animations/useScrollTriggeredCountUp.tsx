import { useEffect, useRef, useState } from "react";

interface CountUpRef {
  start: () => void;
  reset: () => void;
  update: (newEnd: number) => void;
}

interface UseScrollTriggeredCountUpReturn {
  start: boolean;
  countUpRef: React.RefObject<CountUpRef>;
}

const useScrollTriggeredCountUp = (
ref: React.RefObject<HTMLElement>, p0: number,
  // end: number,
  // duration = 2000
): UseScrollTriggeredCountUpReturn => {
  const [start, setStart] = useState(false);
  const countUpRef = useRef<CountUpRef | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStart(true);
          if (countUpRef.current) {
            countUpRef.current.start();
          }
        } else {
          setStart(false);
          if (countUpRef.current) {
            countUpRef.current.reset();
          }
        }
      },
      { threshold: 0.7 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return { start, countUpRef };
};

export default useScrollTriggeredCountUp;
