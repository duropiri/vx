import React, {
  forwardRef,
  RefObject,
  // useEffect,
  // useRef
} from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  slide?: boolean;
  delay?: number;
  duration?: number;
  xOverflow?: boolean;
  yOverflow?: boolean;
  ref?: RefObject<HTMLDivElement>;
  once?: boolean;
  className?: string;
}

export const Reveal = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      // width = "fit-content",
      // slide = true,
      // delay = 0,
      // duration = 0.25,
      // xOverflow = true,
      // yOverflow = true,
      // once = false,
      // className = "",
    },
    ref
  ) => {
    // const animationRef = useRef(null);
    // const isInView = useInView(animationRef, { once: once });

    // // const [firstTimeInView, setFirstTimeInView] = useState(true);

    // const mainControls = useAnimation();
    // const slideControls = useAnimation();

    // useEffect(() => {
    //   if (isInView) {
    //     mainControls.start("visible");
    //     slideControls.start("visible");

    //     // if (firstTimeInView) {
    //     //   // Set firstTimeInView to false after the first animation trigger
    //     //   setFirstTimeInView(false);
    //     // }
    //   } else {
    //     mainControls.start("hidden");
    //     slideControls.start("hidden");
    //   }
    // }, [isInView, mainControls, slideControls]);

    return (
      // <div ref={ref} className={className}>
      //   <div
      //     ref={animationRef}
      //     style={{
      //       position: "relative",
      //       width,
      //       overflowX: `${xOverflow ? "hidden" : "visible"}`,
      //       overflowY: `${yOverflow ? "hidden" : "visible"}`,
      //     }}
      //     className="h-full"
      //   >
      //     <motion.div
      //       variants={{
      //         hidden: { opacity: 0, y: 75 },
      //         visible: { opacity: 1, y: 0 },
      //       }}
      //       initial="hidden"
      //       animate={mainControls}
      //       // Reset delay to 0.25 if it's not the first time in view
      //       transition={{
      //         duration: duration,
      //         delay: delay,
      //       }}
      //       className="h-full"
      //     >
      //       {children}
      //     </motion.div>
      //     {slide && (
      //       <motion.div
      //         variants={{
      //           hidden: { left: 0 },
      //           visible: { left: "100%" },
      //         }}
      //         initial="hidden"
      //         animate={slideControls}
      //         transition={{ duration: 0.25, ease: "easeIn" }}
      //         style={{
      //           position: "absolute",
      //           top: 4,
      //           bottom: 4,
      //           left: 0,
      //           right: 0,
      //           background: "var(--goldenbrown)",
      //           zIndex: 20,
      //         }}
      //       />
      //     )}
      //   </div>
      // </div>
      <div ref={ref}>{children}</div>
    );
  }
);

Reveal.displayName = "Reveal";
