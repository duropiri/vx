"use client";
import { useContext } from "react";
import { NavigationContext } from "@/app/template";
import Link from "next/link";

export const TransitionLink = ({ href, children, target = "", rel = "", ...props }) => {
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
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
};
