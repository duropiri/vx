"use client";
import React, {
  ReactNode,
  Suspense,
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
// import Image from "next/image";
// import logo from "@/../../public/assets/images/logo4.webp";
import { useViewport } from "@/contexts/ViewportContext";
import ChatWidget from "@/components/ui/chatWidget";

interface TemplateProps {
  children: ReactNode;
}
export const animatePageIn = (isMobileView: boolean) => {
  return new Promise<void>((resolve) => {
    // Add timeout safety
    const timeout = setTimeout(() => {
      resolve(); // Resolve anyway after 2 seconds
    }, 2000);

    if (isMobileView) {
      const banners = document.querySelectorAll(".banner");
      banners.forEach((banner) => {
        gsap.set(banner, {
          visibility: "hidden",
          opacity: 0,
          yPercent: 0,
        });
      });
      clearTimeout(timeout);
      resolve();
      return;
    }

    const banners = document.querySelectorAll(".banner");
    if (banners.length) {
      gsap.killTweensOf(banners);

      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(timeout);
          resolve();
        },
        onInterrupt: () => {
          clearTimeout(timeout);
          resolve();
        },
      });

      tl.set(banners, {
        yPercent: 0,
        opacity: 1,
        visibility: "visible",
      });

      tl.to(banners, {
        yPercent: 100,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
          from: "start",
        },
        onComplete: () => {
          gsap.set(banners, {
            visibility: "hidden",
            opacity: 0,
          });
        },
      });
    } else {
      clearTimeout(timeout);
      resolve();
    }
  });
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  isMobileView: boolean
) => {
  return new Promise<void>((resolve) => {
    const timeout = setTimeout(() => {
      router.push(href);
      resolve();
    }, 2000); // Failsafe timeout

    if (isMobileView) {
      clearTimeout(timeout);
      const banners = document.querySelectorAll(".banner");
      banners.forEach((banner) => {
        gsap.set(banner, {
          visibility: "hidden",
          opacity: 0,
          yPercent: 0,
        });
      });
      router.push(href);
      resolve();
      return;
    }

    const banners = document.querySelectorAll(".banner");
    if (banners.length) {
      gsap.killTweensOf(banners);

      const tl = gsap.timeline({
        onComplete: () => {
          clearTimeout(timeout);
          router.push(href);
          resolve();
        },
        onInterrupt: () => {
          clearTimeout(timeout);
          router.push(href);
          resolve();
        },
      });

      tl.set(banners, {
        yPercent: -100,
        opacity: 1,
        visibility: "visible",
      });

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
      clearTimeout(timeout);
      router.push(href);
      resolve();
    }
  });
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
  const { isMobile, windowWidth } = useViewport();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const resetBanners = useCallback(() => {
    const banners = document.querySelectorAll(".banner");

    // Kill any existing animations
    gsap.killTweensOf(banners);

    // Reset all banners to initial state
    banners.forEach((banner) => {
      gsap.set(banner, {
        clearProps: "all",
        visibility: "hidden",
        opacity: 0,
        yPercent: isMobile ? 0 : -100,
      });
    });
  }, [isMobile, windowWidth]);

  const handleLinkClick = useCallback(
    async (href: string) => {
      if (isNavigating) return;
      try {
        setIsNavigating(true);
        await Promise.race([
          animatePageOut(href, router, isMobile),
          new Promise((resolve) => setTimeout(resolve, 2000)), // Timeout after 2s
        ]);
      } catch (error) {
        console.error("Navigation animation error:", error);
        router.push(href); // Fallback direct navigation
      } finally {
        setIsNavigating(false);
        resetBanners();
      }
    },
    [router, isNavigating, isMobile, resetBanners]
  );

  useEffect(() => {
    // Handle initial page load
    if (!isInitialized) {
      const initPage = async () => {
        setIsInitialized(true);
        await animatePageIn(isMobile);
      };
      initPage();
    }

    // Handle browser back/forward navigation
    const handlePopState = async () => {
      resetBanners();
      await animatePageIn(isMobile);
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState);
      // Kill all GSAP animations on unmount
      gsap.killTweensOf(".banner");
      resetBanners();
    };
  }, [isInitialized, resetBanners, windowWidth]);

  useEffect(() => {
    return () => {
      setIsNavigating(false);
      resetBanners();
    };
  }, [resetBanners, windowWidth]);

  // Reset animation state on route change
  useEffect(() => {
    if (isInitialized) {
      resetBanners();
    }
  }, [pathname, isInitialized, resetBanners, windowWidth]);

  useEffect(() => {
    const cleanup = () => {
      const banners = document.querySelectorAll(".banner");
      banners.forEach((banner) => {
        if (banner instanceof HTMLElement) {
          banner.style.visibility = "hidden";
          banner.style.opacity = "0";
        }
      });
      gsap.killTweensOf(".banner");
      setIsNavigating(false);
    };

    // Clean up on route change
    cleanup();

    return () => {
      cleanup();
    };
  }, [pathname, windowWidth]);

  return (
    <NavigationContext.Provider value={{ handleLinkClick }}>
      <div
        id="template"
        className={`${
          !isAdminPage && "cursor-default"
        } relative size-full bg-white`}
      >
        <div className="hidden md:block z-[99999]">
          <CustomCursor />
        </div>
        {!isAdminPage ? (
          <>
            {/* {!isMobile && (
              <>
                <div
                  id="banner-1"
                  className="banner fixed left-0 h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-2"
                  className="banner fixed left-[calc((100%/9)*1)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-3"
                  className="banner fixed left-[calc((100%/9)*2)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-4"
                  className="banner fixed left-[calc((100%/9)*3)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-5"
                  className="banner fixed flex items-center justify-center left-[calc((100%/9)*4)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
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
                  className="banner fixed left-[calc((100%/9)*5)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-7"
                  className="banner fixed left-[calc((100%/9)*6)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-8"
                  className="banner fixed left-[calc((100%/9)*7)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
                <div
                  id="banner-9"
                  className="banner fixed left-[calc((100%/9)*8)] h-[100dvh] bg-ash/[92] backdrop-blur-lg z-[999999999999] w-[calc(110%/9)] transform-gpu will-change-transform"
                  style={{ visibility: "hidden", opacity: 0 }}
                />
              </>
            )} */}
            <SmoothScrolling>
              <Header className="absolute" navigation={HeaderLinks} />
              {children}
              <Suspense fallback={null}>
                <ChatWidget />
              </Suspense>
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
