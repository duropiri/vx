import { ServiceIcons } from "@/data/serviceIcons";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import whatisitImage from "@/../../public/assets/portfolio/images/interior/Virtual_Xposure_-_Interior_Image_-_(61).webp";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import FadeInUp from "@/components/animations/FadeInUp";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import { TransitionLink } from "@/components/TransitionLink";
import Link from "next/link";

export const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <div className="relative group flex size-full sm:pt-[5rem] max-w-[--section-width] flex-col-reverse sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          className="size-full min-h-[30vh] pointer-events-none"
        >
          <Image
            src={whatisitImage}
            alt="what-is-it-image"
            fill
            sizes="(max-width: 640px) 100vw, 1200px"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="w-full h-[125%] scale-125 -translate-y-[10%] sm:group-hover:scale-110 opacity-100 sm:group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={75}
          />
        </ParallaxSection>
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
            noCenter
            noAnimation
            heading="GROW WITH TECHNOLOGY"
            subheading="What is 3D Rendering?"
            className="text-black"
          />
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            3D rendering is the process of creating 3D models into 3D
            representations. These renderings are created using sophisticated
            computer software which precisely simulates real-world textures,
            lightings, and physics.
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            3D renderings enable homeowners and renovators to get a clear
            picture of how their renovation project or new construction will
            look before they even begin to break the ground or tear down a wall.
          </p>
          {/* </LetterRevealOnScroll> */}
        </div>
      </div>
    </div>
  </div>
);

export const BenefitsSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      noAnimation
      noCenter
      heading="Benefits"
      subheading="Why do you need Virtual Staging?"
      className="text-black"
    />
    <div className="relative flex size-full flex-col items-center justify-center gap-[3rem] sm:gap-[3.75rem]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1rem] sm:gap-12 mt-[2.5rem] sm:mt-[5rem]">
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
          <FadeInUp
            key={index + 2}
            className="flex flex-col items-center justify-center gap-[0.625rem] mb-[0.625rem]"
          >
            <div className="cursor-select-hover group flex flex-grow flex-col items-center p-4 hover:-translate-y-1 transition-all duration-200 w-full self-stretch">
              <div
                className={`flex flex-col items-center text-center justify-start gap-[2rem]`}
              >
                <div className="flex flex-col p-[1rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white text-ash/80 group-hover:text-goldenbrown shadow-ash/5 shadow-customShadow transition-all duration-300">
                  {item.icon}
                </div>
                <h1 className="text-black/80 group-hover:text-black pn-semibold-20 transition-all duration-300">
                  {item.heading}
                </h1>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
      {/* CTA */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col sm:flex-row gap-[1rem]">
          <HoverWrapper className="group/cta cursor-select-hover">
            <Link
              href="https://listings.virtualxposure.com/order"
              className="button gold pn-regular-16 flex size-full items-center shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-full"
              passHref
            >
              <FlipLink className={`flex items-center w-fit`}>
                Place An Order
              </FlipLink>

              <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                {ServiceIcons.arrow}
              </div>
            </Link>
          </HoverWrapper>
        </div>
      </div>
    </div>
  </div>
);
