"use client";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

interface FadeInUpProps extends React.HTMLAttributes<HTMLDivElement> {
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
  whileHover?: any;
  whileTap?: any;
}

const FadeInUp = forwardRef<HTMLDivElement, FadeInUpProps>(
  (
    {
      children,
      index = 0,
      className = "",
      delay = 0.1,
      duration = 0.5,
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: once,
          amount: amount,
          margin: margin,
        }}
        transition={{
          delay: (index + 2) * delay,
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

FadeInUp.displayName = "FadeInUp";

export default FadeInUp;
