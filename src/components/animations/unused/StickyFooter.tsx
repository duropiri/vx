import React from "react";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  marginBottom?: string | number;
}

export default function StickyFooter({
  children,
  className,
  marginBottom = "40",
}: AnimationProps) {
  return (
    <div className={`${className} mt-[-100svh]`}>
      <div
        aria-hidden="true"
        className="h-svh relative pointer-events-none"
      ></div>
      <section id="footer" className={`sticky bottom-[-${marginBottom}%] py-0`}>
        {children}
      </section>
    </div>
  );
}
