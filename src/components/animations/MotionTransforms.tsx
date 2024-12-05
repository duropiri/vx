"use client";
import { motion, MotionValue } from "framer-motion";
import React, { forwardRef } from "react";

interface MotionTransformsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  key?: string | number;
  scale?: MotionValue<number>;
  rotate?: MotionValue<number>;
  blur?: MotionValue<string>;
}

const MotionTransforms = forwardRef<HTMLDivElement, MotionTransformsProps>(
  (
    {
      children,
      className = "",
      id,
      key,
      scale,
      rotate,
      blur,
      //   ...props
    },
    ref
  ) => {
    return (
      <motion.div
        id={id}
        ref={ref}
        key={key}
        className={className}
        style={{ scale, rotate, filter: blur }}
        // {...props}
      >
        <>{children}</>
      </motion.div>
    );
  }
);

MotionTransforms.displayName = "MotionTransforms";

export default MotionTransforms;
