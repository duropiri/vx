"use client";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  // useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "@/utils/gsap";
import Header from "@/components/animations/NavigationMenu";
import { HeaderLinks } from "@/data/navLinks";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import logo from "@/../../public/assets/images/logo4.webp";

interface TemplateProps {
  children: ReactNode;
}

export const animatePageIn = () => {
  const banners = Array.from({ length: 9 }, (_, i) =>
    document.getElementById(`banner-${i + 1}`)
  );

  if (banners.every((banner) => banner)) {
    // Kill any existing animations
    banners.forEach((banner) => {
      if (banner) gsap.killTweensOf(banner);
    });

    const tl = gsap.timeline();

    // Initial state - ensure banners are visible and at the top
    tl.set(banners, {
      yPercent: 0,
      opacity: 1,
      visibility: "visible",
    });

    // Animate banners up
    tl.to(banners, {
      yPercent: 100,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: {
        each: 0.1,
        from: "start",
      },
      onComplete: () => {
        // Hide banners after animation
        gsap.set(banners, {
          visibility: "hidden",
        });
      },
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const banners = Array.from({ length: 9 }, (_, i) =>
    document.getElementById(`banner-${i + 1}`)
  );

  if (banners.every((banner) => banner)) {
    // Kill any existing animations
    banners.forEach((banner) => {
      if (banner) gsap.killTweensOf(banner);
    });

    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
      },
    });

    // Initial state - position banners above viewport
    tl.set(banners, {
      yPercent: -100,
      opacity: 1,
      visibility: "visible",
    });

    // Animate banners down
    tl.to(banners, {
      yPercent: 0,
      duration: 0.8,
      ease: "power2.inOut",
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
  } else {
    router.push(href);
  }
};

export const NavigationContext = React.createContext<{
  handleLinkClick: (href: string) => void;
}>({
  handleLinkClick: () => {},
});

export default function Template({ children }: TemplateProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminPage = pathname.startsWith("/admin");
  const [isInitialized, setIsInitialized] = useState(false);

  const handleLinkClick = useCallback(
    (href: string) => {
      animatePageOut(href, router);
    },
    [router]
  );

  useEffect(() => {
    // Set initial banner states
    const banners = Array.from({ length: 9 }, (_, i) =>
      document.getElementById(`banner-${i + 1}`)
    );

    banners.forEach((banner) => {
      if (banner) {
        gsap.set(banner, {
          yPercent: 0,
          opacity: 1,
          visibility: "visible",
        });
      }
    });

    // Short delay to ensure initial states are applied
    setTimeout(() => {
      setIsInitialized(true);
      animatePageIn();
    }, 100);
  }, []);

  return (
    <NavigationContext.Provider value={{ handleLinkClick }}>
      <div
        id="template"
        className={`${
          !isAdminPage && "cursor-none"
        } relative size-full bg-white`}
      >
        <div className="hidden md:block z-[99999]">
          <CustomCursor />
        </div>
        {!isAdminPage ? (
          <>
            <div
              id="banner-1"
              className="fixed left-0 h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-2"
              className="fixed left-[calc((100%/9)*1)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-3"
              className="fixed left-[calc((100%/9)*2)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-4"
              className="fixed left-[calc((100%/9)*3)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-5"
              className="fixed flex items-center justify-center left-[calc((100%/9)*4)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            >
              <div className="relative size-[10vw] sm:size-[3vw]">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  sizes="(max-width: 640px) 100vw, 1200px"
                  priority={false}
                  loading={false ? "eager" : "lazy"}
                  className="size-full animate-pulse"
                  quality={75}
                />
              </div>
            </div>
            <div
              id="banner-6"
              className="fixed left-[calc((100%/9)*5)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-7"
              className="fixed left-[calc((100%/9)*6)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-8"
              className="fixed left-[calc((100%/9)*7)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <div
              id="banner-9"
              className="fixed left-[calc((100%/9)*8)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
            />
            <SmoothScrolling>
              <Header className="absolute" navigation={HeaderLinks} />
              {children}
              <Footer />
            </SmoothScrolling>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    </NavigationContext.Provider>
  );
}
