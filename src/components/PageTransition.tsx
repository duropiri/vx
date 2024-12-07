// components/PageTransition.tsx
"use client";
import { useRef, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import gsap from "gsap";
import { usePreloader } from "@/contexts/PreloaderContext";

const FrozenRoute = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isAnimating, finishAnimation } = usePreloader();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => finishAnimation(),
    });

    if (overlayRef.current) {
      // Page transition animation
      tl.fromTo(
        overlayRef.current,
        {
          y: "100%",
          display: "block",
        },
        {
          y: "0%",
          duration: 0.6,
          ease: "power4.inOut",
        }
      ).to(overlayRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.inOut",
        delay: 0.1,
      });
    }
  }, [pathname, finishAnimation]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[99999] bg-ash pointer-events-none transform"
        style={{ display: "none" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
      <FrozenRoute>{children}</FrozenRoute>
    </>
  );
};

export default PageTransition;
