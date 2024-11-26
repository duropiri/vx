"use client";
import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";

interface FlipLinkProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  outside?: string;
  inside?: string;
  id?: string;
}

// Create a context for hover state
const HoverContext = createContext(false);

// HoverWrapper component
export const HoverWrapper = ({ children, className, href, id }: FlipLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <HoverContext.Provider value={isHovered}>
      {children}
    </HoverContext.Provider>
  );

  const commonProps = {
    className,
    id,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return href ? (
    <a href={href} {...commonProps}>
      {content}
    </a>
  ) : (
    <div {...commonProps}>{content}</div>
  );
};

// Modified FlipLink component
export const FlipLink = ({
  children,
  className = "",
  outside = "200",
  inside = "0",
}: FlipLinkProps) => {
  const isHovered = useContext(HoverContext);

  return (
    <motion.div
      animate={isHovered ? "hovered" : "initial"}
      className={`relative block overflow-hidden ${className}`}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: `-${outside}%` },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: `${outside}%` },
          hovered: { y: `${inside}%` },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};