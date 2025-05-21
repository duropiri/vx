"use client";
import React, {
  ReactNode,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/animations/NavigationMenu";
import { HeaderLinks } from "@/data/navLinks";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useViewport } from "@/contexts/ViewportContext";
import ChatWidget from "@/components/ui/chatWidget";

interface TemplateProps {
  children: ReactNode;
}
export const animatePageIn = async (isMobileView: boolean): Promise<void> => {
};

export const animatePageOut = async (
  href: string,
  router: AppRouterInstance,
  isMobileView: boolean
): Promise<void> => {
  router.push(href);
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
  }, []);

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
        <div className="hidden lg:block z-[99999]">
          <CustomCursor />
        </div>
        {!isAdminPage ? (
          <>
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
