"use client";
import React from "react";

interface FlipLinkProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  id?: string;
}

export const HoverWrapper = ({
  children,
  className,
  href,
  id,
  ...rest
}: FlipLinkProps) => {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} id={id} className={`hover-wrapper ${className}`} {...rest}>
      {children}
      <style jsx>{`
        :global(.hover-wrapper:hover .flip-link .flip-text.top) {
          transform: translateY(-100%);
        }
        :global(.hover-wrapper:hover .flip-link .flip-text.bottom) {
          transform: translateY(0%);
        }
      `}</style>
    </Tag>
  );
};

export const FlipLink = ({
  children,
  className = "",
  href,
  id,
  ...rest
}: FlipLinkProps) => {
  const Tag = href ? "a" : "div";

  // Capture the plain string so we can expose it once for accessibility
  const rawText = React.Children.toArray(children)
    .filter((child) => typeof child === "string")
    .join("") as string;

  return (
    <Tag
      href={href}
      id={id}
      className={`flip-link ${className}`}
      role="text"
      aria-label={rawText}
      {...rest}
    >
      {/* Hide animated clones from screen readers and common scrapers */}
      <span className="flip-text top" aria-hidden="true">
        {children}
      </span>
      <span
        className="flip-text bottom pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </span>
      <style>{`
        .flip-link {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        .flip-text {
          display: block;
          transition: transform 0.2s ease-in-out;
          backface-visibility: hidden;
        }
        .flip-text.top {
          transform: translateY(0%);
        }
        .flip-text.bottom {
          position: absolute;
          inset: 0;
          transform: translateY(100%);
        }
        .flip-link:hover .flip-text.top {
          transform: translateY(-100%);
        }
        .flip-link:hover .flip-text.bottom {
          transform: translateY(0%);
        }
      `}</style>
    </Tag>
  );
};