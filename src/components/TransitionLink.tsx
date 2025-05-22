/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useContext, ReactNode } from "react";
import { NavigationContext } from "@/app/template";
import Link from "next/link";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any; // allow other anchor props
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
  target,
  rel,
  ...props
}) => {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <Link
      href={href}
      onClick={(e) => {
        // allow default for new-tab or modified clicks
        if (target === "_blank" || e.ctrlKey || e.metaKey || e.shiftKey) {
          return;
        }
        e.preventDefault();
        handleLinkClick(href);
      }}
      target={target || undefined}
      rel={rel || undefined}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
