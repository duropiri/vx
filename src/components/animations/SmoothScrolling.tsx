"use client";
import { ReactLenis } from "lenis/react";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
}

export default function SmoothScrolling({
  children,
  className = "",
}: AnimationProps) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 0.75 }} className={className}>
      {children}
    </ReactLenis>
  );
}
