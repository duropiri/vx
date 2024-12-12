// components/sections/CTASection.tsx
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HoverWrapper } from "@/components/animations/RevealLinks";
import { ServiceIcons } from "@/data/serviceIcons";

// Dynamically import heavy components
const LetterRevealOnScroll = dynamic(
  () => import("@/components/animations/LetterRevealOnScroll"),
  {
    ssr: false,
  }
);

const FlipLink = dynamic(
  () =>
    import("@/components/animations/RevealLinks").then((mod) => mod.FlipLink),
  {
    ssr: false,
  }
);

interface CTAProps {
  className?: string;
  full?: boolean;
  heading?: string;
  description?: string;
  ctaButtons?: Array<{
    text: string;
    href: string;
    variant: "transparent" | "gold";
  }>;
}

// Memoize static content
const ArrowImage = React.memo(
  ({ variant }: { variant: "white" | "default" }) => (
    <Image
      alt="arrow"
      src={`/assets/svgs/arrow-redirect-cta${
        variant === "white" ? "-white" : ""
      }.svg`}
      width={24}
      height={24}
      className="text-white group-hover:rotate-45 transition-all duration-300"
      quality={75}
    />
  )
);

ArrowImage.displayName = "ArrowImage";

const CTASection = ({
  className = "",
  heading = "90 Day 2X Money Back Guarantee",
  description = "To take it one step further, we also believe in what we do, and we back that up with a 2X Money Back Satisfaction Guarantee. Yes, that means if you try us out and you're not willing to swim through shark-infested waters just to continue using our services, we'll double your money. We even give you 90 days to think about it. I know right, finally… a service that puts their money where their mouth is.",
  ctaButtons = [
    {
      text: "See More",
      href: "/",
      variant: "transparent",
    },
    {
      text: "Book Now",
      href: "https://listings.virtualxposure.com/order",
      variant: "gold",
    },
  ],
}: CTAProps) => {
  return (
    <div className={`section-container ${className}`}>
      <div className="flex flex-col items-center justify-center w-full bg-ash rounded-[1rem] px-[2.5rem] py-[2.5rem] gap-y-[1rem] lg:gap-y-[2rem] text-white text-center">
        <LetterRevealOnScroll className="relative">
          <h1 className="pn-regular-40">{heading}</h1>
        </LetterRevealOnScroll>

        <p className="pn-regular-16 text-center">
          {description.split("double your money").map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-goldenbrown underline pn-bold-16">
                  we&apos;ll double your money
                </span>
              )}
            </React.Fragment>
          ))}
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[1rem] my-[0.625rem]">
          {ctaButtons.map((button, index) => (
            <HoverWrapper
              key={index}
              href={button.href}
              className={`button pn-regular-16 group/cta cursor-select-hover w-full lg:w-auto shadow-customShadow shadow-white/5 hover/cta:shadow-goldenrod/5 ${
                button.variant === "gold" ? "gold !border-none text-ash" : "!border-white !bg-transparent hover/cta:!bg-white hover/cta:!text-ash"
              }`}
            >
              <FlipLink className="font-semibold">{button.text}</FlipLink>
              <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                {ServiceIcons.arrow}
              </div>
            </HoverWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
