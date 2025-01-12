import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";

import SectionHeader from "@/components/ui/sectionHeader";

import { ServiceIcons } from "@/data/serviceIcons";
import Image from "next/image";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import floorplanImage from "@/../../public/assets/images/5-VX-Metric-Schematic-Floor-Plan-2-1536x970.webp";
import threedimensionalfloorplanImage from "@/../../public/assets/images/7957402_3d-floor-plan-design-in-exterior-rendering-studio.webp";
import siteplanImage from "@/../../public/assets/images/RoomSketcher-Site-Plan-Software-3D-Site-Plan.webp";
import FadeInUp from "@/components/animations/FadeInUp";
import { TransitionLink } from "@/components/TransitionLink";
import Link from "next/link";

export const BenefitsSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      noAnimation
      noCenter
      heading="3D Floor Plans"
      subheading="Why are they worth it?"
      className="text-black"
    />
    <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 mt-[2.5rem] sm:mt-[5rem]">
        {[
          {
            icon: ServiceIcons.eye,
            heading: "Better Visualization",
            body: "With the use of 3D Floor Plans, your listings will attract more buyers and fetch higher selling prices.",
          },
          {
            icon: ServiceIcons.rocket,
            heading: "Skyrocket Interest",
            body: "Statistics show that home buyers are more likely to choose listings with 3D Floor Plans, leading to faster sales.",
          },
          {
            icon: ServiceIcons.click,
            heading: "Boost CTR",
            body: "Our interactive floor plans make your listings more engaging, increasing click-through rates.",
          },
          {
            icon: ServiceIcons.moneybag,
            heading: "Sell Faster",
            body: "Let buyers visualize their future home with ease and stand out in a crowded market.",
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
                <div className="flex flex-col p-[1rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white text-goldenbrown shadow-ash/5 shadow-customShadow">
                  {item.icon}
                </div>
                <h1 className="text-goldenbrown pn-semibold-32">
                  {item.heading}
                </h1>
                <p className="pn-regular-16">{item.body}</p>
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
              className="button !bg-goldenbrown text-white !border-none pn-regular-16 h-full !bg-transparent shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-full"
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

export const WhatIsItSection1 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem] sm:gap-y-[6rem]">
    <SectionHeader
      noAnimation
      noCenter
      largeText
      subheading="2D Schematic Floor Plan"
      className="text-black"
    />
    <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center justify-center gap-[3rem] sm:gap-[3.75rem]">
      <div className="z-[999] relative flex size-full flex-col items-center sm:items-start justify-center gap-y-[2rem]">
        <SectionHeader
          noCenter
          noAnimation
          subheading="Showcase your home layout in detail."
          noBodyAnimation
          body="The 3D basic floor plan is the best kind of virtual property tour, which shows the home to a potential buyer in greater detail. From demonstrating the flooring transitions to the door swings directions, a 3D basic floor plan will effectively exhibit a home or property and help attract potential buyers to make a decision easier."
          className="text-black"
        />
        <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              Verified RMS Measurements
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              Accurate to RECA Standards
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              24 Hour Turnaround
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              SSL Encrypted Checkout
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              2X Money Back Guarantee
            </p>
          </li>
        </ul>
      </div>
      <div className="relative flex flex-col size-full aspect-[4/3] items-start justify-center rounded-[1rem]">
        <Image
          // speed={1-0.95}
          src={floorplanImage}
          alt="floorplan-image"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          loading={false ? "eager" : "lazy"}
          className="w-full h-full object-contain pointer-events-none"
          quality={75}
        />
      </div>
    </div>
  </div>
);

export const WhatIsItSection2 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem] sm:gap-y-[6rem]">
    <SectionHeader
      noAnimation
      noCenter
      subheading="3D Premium Floor Plan"
      className="text-white"
    />
    <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center justify-center gap-[3rem] sm:gap-[3.75rem]">
      <div className="relative flex flex-col size-full aspect-[4/3] items-start justify-center rounded-[1rem]">
        <Image
          // speed={1-0.95}
          src={threedimensionalfloorplanImage}
          alt="3d-floorplan-image"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          loading={false ? "eager" : "lazy"}
          className="w-full h-full object-contain pointer-events-none"
          quality={75}
        />
      </div>
      <div className="z-[999] relative flex size-full flex-col items-center sm:items-start justify-center gap-y-[2rem]">
        <SectionHeader
          noCenter
          noAnimation
          subheading="Transform your listing with a custom 3D Rendered Floor Plan, as prospective buyers watch their dream home come to life."
          noBodyAnimation
          body="The 3D Floor Plan enables real estate marketers and architects to present floor plans to clients with remarkable detail. By incorporating elements like cabinets, flooring, bathroom fixtures, paint colors, wall tiles, and various interior finishes, potential buyers gain a comprehensive view of the home or property."
          className="text-white"
        />
        <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-20 text-white/80 group-hover:text-white">
              Custom 3D Floor Plan
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-20 text-white/80 group-hover:text-white">
              Unlimited Revisions
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-20 text-white/80 group-hover:text-white">
              48 Hour Turnaround
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-20 text-white/80 group-hover:text-white">
              SSL Encrypted Checkout
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-20 text-white/80 group-hover:text-white">
              2X Money Back Guarantee
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const WhatIsItSection3 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem] sm:gap-y-[6rem]">
    <SectionHeader
      noAnimation
      noCenter
      subheading="Add-on: Exclusive Site plan"
      className="text-black"
    />
    <div className="relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center justify-center gap-[3rem] sm:gap-[3.75rem]">
      <div className="z-[999] relative flex size-full flex-col items-center sm:items-start justify-center gap-y-[2rem]">
        <SectionHeader
          noCenter
          noAnimation
          subheading="Showcase the landscaping & the exterior elements of your listing."
          noBodyAnimation
          body="A site plan complements your floor plan by providing potential buyers with a comprehensive view of the property and its surroundings. It highlights external features like landscaping, pools, lot sizes, and multiple dwellings, offering a complete picture of the entire property."
          className="text-black"
        />
        <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              Custom Site Plan
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              48 Hour Turnaround
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              Unlimited Revisions
            </p>
          </li>
          <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
            <p className="pn-regular-16 text-black/80 group-hover:text-black">
              2X Money Back Guarantee
            </p>
          </li>
        </ul>
      </div>
      <div className="relative flex flex-col size-full aspect-[4/3] items-start justify-center rounded-[1rem]">
        <Image
          // speed={1-0.95}
          src={siteplanImage}
          alt="siteplan-image"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          loading={false ? "eager" : "lazy"}
          className="w-full h-full object-contain pointer-events-none"
          quality={75}
        />
      </div>
    </div>
  </div>
);
