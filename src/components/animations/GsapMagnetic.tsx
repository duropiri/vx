import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";

interface GsapMagneticProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function GsapMagnetic({
  children,
  speed = 2,
  className = "",
}: GsapMagneticProps): JSX.Element {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: speed,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: speed,
      ease: "power3.out",
    });

    const moveHandler = (e: MouseEvent): void => {
      const { clientX, clientY } = e;
      if (!magnetic.current) return;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const leaveOrClickHandler = (): void => {
      setTimeout(() => {
        xTo(0);
        yTo(0);
      }, 100);
    };

    if (magnetic.current) {
      magnetic.current.addEventListener("mousemove", moveHandler);
      magnetic.current.addEventListener("mouseleave", leaveOrClickHandler);
      magnetic.current.addEventListener("click", leaveOrClickHandler);
    }

    return () => {
      if (magnetic.current) {
        magnetic.current.removeEventListener("mousemove", moveHandler);
        magnetic.current.removeEventListener("mouseleave", leaveOrClickHandler);
        magnetic.current.removeEventListener("click", leaveOrClickHandler);
      }
    };
  }, [speed]);

  return (
    <div ref={magnetic} className={className}>
      {children}
    </div>
  );
}
