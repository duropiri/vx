import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const useScrollTriggeredCountUp = (
  ref: React.RefObject<HTMLElement>,
  end: number,
  duration = 2000
) => {
  const [start, setStart] = useState(false);
  const countUpRef = useRef<CountUp | null>(null);

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