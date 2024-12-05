"use client";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import React, { forwardRef } from "react";

interface ScaleInVisibleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  index?: number;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  margin?: string;
  id?: string;
  key?: string | number;
  once?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  whileHover?: VariantLabels | TargetAndTransition | undefined;
  whileTap?: VariantLabels | TargetAndTransition | undefined;
}

const ScaleInVisible = forwardRef<HTMLDivElement, ScaleInVisibleProps>(
  (
    {
      children,
      className = "",
      delay = 0.1,
      duration = 0.2,
      amount = 0.3,
      margin = "50px",
      id,
      key,
      once = true,
      onClick,
      whileHover,
      whileTap,
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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
          once: once,
          amount: amount,
          margin: margin,
        }}
        transition={{
          delay: delay,
          // staggerChildren: 1,
          duration: duration,
          ease: "easeOut",
        }}
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
        // {...props}
      >
        <>{children}</>
      </motion.div>
    );
  }
);

ScaleInVisible.displayName = "ScaleInVisible";

export default ScaleInVisible;
