"use client";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { motion } from "framer-motion";
import { ServiceIcons } from "@/data/serviceIcons";
import { ThreeDimensionalRenderingPackages } from "@/data/pricingPackages";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import heroImage2 from "@/../../public/images/614d398d1a34a3bb1ceff8b1_Second-floor-Masterbedroom-cam-1-1-1.webp";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Link from "next/link";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";
import { useEffect } from "react";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";

export const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <div className="relative group flex size-full pt-[5rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <div data-speed={0.95} data-media-wrapper className="size-full">
          <Image
            src={heroImage2}
            alt="hero-image"
            width={1200}
            height={600}
            className="w-full h-[125%] scale-125 -translate-y-[10%] group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={80}
          />
        </div>
      </div>
      {/* Inverted Border Radius */}
      <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4 " />
      </div>
      <div className="relative flex flex-col items-end h-full justify-end max-h-full sm:max-h-[80%] sm:max-w-[40%]">
        {/* Inverted Border Radius */}
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 flex flex-col bg-white backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4 " />
        </div>
        <div className="relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 sm:p-[2rem] bg-white backdrop-blur-lg transition-all duration-500 rounded-tl-[1rem]">
          <SectionHeader
            heading="GROW WITH TECHNOLOGY"
            subheading="What is 3D Rendering?"
            className="text-black"
          />
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              3D rendering is the process of creating 3D models into 3D
              representations. These renderings are created using sophisticated
              computer software which precisely simulates real-world textures,
              lightings, and physics.
            </p>
          </LetterRevealOnScroll>
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              3D renderings enable homeowners and renovators to get a clear
              picture of how their renovation project or new construction will
              look before they even begin to break the ground or tear down a
              wall.
            </p>
          </LetterRevealOnScroll>
        </div>
      </div>
    </div>
  </div>
);

export const BenefitsSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      center
      heading="Benefits"
      subheading="Why do you need Virtual Staging?"
      className="text-black"
    />
    <div className="relative flex size-full flex-col items-center justify-center gap-[3rem] sm:gap-[3.75rem]">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1rem] sm:gap-12 mt-[2.5rem] sm:mt-[5rem]">
        {[
          {
            icon: ServiceIcons.lightbulb,
            heading: "A better understanding of your overall project",
          },
          {
            icon: ServiceIcons.bullseye,
            heading: "Improved precision and accuracy of presentations",
          },
          {
            icon: ServiceIcons.satisfiedcustomer,
            heading: "Ability to attract a large range of new clients",
          },
          {
            icon: ServiceIcons.trophy,
            heading: "Improved ability to compete in the market",
          },
          {
            icon: ServiceIcons.moneybag,
            heading: "Reduced operating and production costs",
          },
          {
            icon: ServiceIcons.growth,
            heading: "Improved quality of marketing",
          },
        ].map((item, index) => (
          <motion.div
            key={index + 2}
            className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true, // Only animate once
              amount: 0.3, // Trigger when 30% of element is in view
              margin: "50px", // Start animation 50px before element enters viewport
            }}
            transition={{
              delay: (index + 2) * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="cursor-select-hover group flex flex-grow flex-col items-center p-4 hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
              <div
                className={`flex flex-col items-center text-center justify-start gap-[2rem]`}
              >
                <div className="flex flex-col p-[1rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white text-ash/80 group-hover:text-goldenbrown shadow-ash/5 shadow-customShadow transition-all duration-300">
                  {item.icon}
                </div>
                <h1 className="text-black/80 group-hover:text-black pn-semibold-24 transition-all duration-300">
                  {item.heading}
                </h1>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* CTA */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-[1rem]">
            <HoverWrapper className="">
              <Link
                href="https://listings.virtualxposure.com/order"
                className="group button gold pn-regular-22 flex size-full items-center shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-full  cursor-select-hover"
                passHref
              >
                <FlipLink className={`flex items-center w-fit`}>
                  Place An Order
                </FlipLink>

                <Image
                  alt="arrow"
                  src={arrowRedirect}
                  className="text-ash group-hover:rotate-45 transition-all duration-300"
                  quality={10}
                />
              </Link>
            </HoverWrapper>
        </div>
      </div>
    </div>
  </div>
);