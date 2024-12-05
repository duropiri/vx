"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  // AnimatePresence,
  motion,
} from "framer-motion";
// import Inner from "@/components/layout/transitions/inner";
import { usePathname } from "next/navigation";
import Header from "@/components/animations/NavigationMenu";
import { HeaderLinks } from "@/data/navLinks";
import Footer from "@/components/Footer";
// import StickyFooter from "@/components/animations/StickyFooter";
import CustomCursor from "@/components/animations/CustomCursor";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import {
  slide,
  // perspective,
  // opacity,
  exitSlide,
} from "@/components/layout/transitions/transitions";
// import ChatWidget from "@/components/ui/chatWidget";

const MOBILE_BREAKPOINT = 1024;

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);


  const handleAnimationComplete = () => {
    setIsVisible(false); // Set isVisible to false after the animation completes
  };

  const isAdminPage = pathname.startsWith("/admin");

  return (
    <div
      id="template"
      className={`${!isAdminPage && "cursor-none"} relative size-full bg-white`}
    >
      <div className="hidden md:block z-[99999]">
        <CustomCursor />
      </div>
      <motion.div
        className="w-full h-full fixed left-0 top-0 bg-ash cursor-wait"
        variants={slide}
        initial={slide.initial}
        exit={slide.exit}
        animate={slide.enter}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ zIndex: 99999999999999 }}
      />
      {/* <motion.div
        variants={perspective}
        initial={perspective.initial}
        exit={perspective.exit}
        animate={perspective.enter}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      > */}
      {/* <motion.div
          className=""
          variants={opacity}
          initial={opacity.initial}
          exit={opacity.exit}
          animate={opacity.enter}
          transition={{
            duration: 0.4,
          }}
        > */}
      {!isAdminPage ? (
        <>
          {isVisible && (
            <motion.div
              className="w-full h-full fixed left-0 top-0 bg-ash cursor-wait"
              variants={exitSlide}
              initial={exitSlide.initial}
              exit={exitSlide.exit}
              animate={exitSlide.enter}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={handleAnimationComplete} // Call handleAnimationComplete when the animation is done
              style={{ zIndex: 99999999999999 }}
            />
          )}
          <SmoothScrolling>
            <Header className="absolute" navigation={HeaderLinks} />
            {children}
            {/* <StickyFooter className="relative z-0" marginBottom={10}> */}
            {/* <ChatWidget /> */}
            <Footer />
          </SmoothScrolling>
          {/* </StickyFooter> */}
        </>
      ) : (
        <>{children}</>
      )}
      {/* </motion.div> */}
      {/* </motion.div> */}
    </div>
  );
};

export default Template;
