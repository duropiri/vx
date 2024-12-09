"use client";
import { useContext } from "react";
import { NavigationContext } from "@/app/template";
import Link from "next/link";

export const TransitionLink = ({ href, children, ...props }) => {
  const { handleLinkClick } = useContext(NavigationContext);

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        handleLinkClick(href);
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
