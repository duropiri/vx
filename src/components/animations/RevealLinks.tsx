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
      <style>{`
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
  return (
    <Tag
      href={href}
      id={id}
      className={`flip-link ${className}`}
      {...rest}
    >
      <div className="flip-text top">{children}</div>
      <div className="flip-text bottom">{children}</div>
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