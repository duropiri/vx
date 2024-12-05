import { ServiceIcons } from "@/data/serviceIcons";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/sectionHeader";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import unlimitedImage from "@/../../public/assets/images/6685889-copy-1-e1670628501382-584x1024.webp";
import FadeInUp from "@/components/animations/FadeInUp";

export const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      center
      heading="Why"
      subheading="Why is Real Estate Video Effective?"
      body="In today’s world of short attention spans, standing out in the crowded real estate market requires a fresh approach. Consider creating engaging real estate videos to give clients a realistic feel for the property and capture their interest in a unique way."
      className="text-black"
    />
    <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 mt-[2.5rem] sm:mt-[5rem]">
        {[
          {
            icon: ServiceIcons.eye,
            heading: "Enhance the visibility of the listing in less time",
          },
          {
            icon: ServiceIcons.rocket,
            heading: "Build a strong personal brand",
          },
          {
            icon: ServiceIcons.click,
            heading: "Generate top-quality leads",
          },
          {
            icon: ServiceIcons.moneybag,
            heading: "Attract a young audience",
          },
        ].map((item, index) => (
          <FadeInUp
            once={false}
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
                <h1 className="text-black/80 group-hover:text-black pn-semibold-24 transition-all duration-300">
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
          <HoverWrapper className="">
            <Link
              href="https://listings.virtualxposure.com/order"
              className="button gold pn-regular-22 group h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-full"
              passHref
            >
              <FlipLink className={`flex items-center w-fit`}>
                Place An Order
              </FlipLink>

              <Image
                alt="arrow"
                src={arrowRedirect}
                className="text-ash group-hover:rotate-45 transition-all duration-300"
                quality={75}
              />
            </Link>
          </HoverWrapper>
        </div>
      </div>
    </div>
  </div>
);

export const StepsLeftSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      heading="MORE EFFECTIVE MARKETING. LARGER COMMISSIONS."
      subheading="3 reasons why Drone Photography is CRUCIAL For Your Success in 2023…"
      body="The good news is… we include it at no additional cost in all of our packages, so rest assured your listing will get in front of the right eyes regardless of your budget."
      className="text-black"
    />
    <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem]">
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Sell your listings{" "}
          <span className="text-goldenbrown gold-text">68%</span> faster than
          your competitors
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          <span className="text-goldenbrown gold-text">83%</span> of sellers
          would prefer your service over the competition
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Increase your number of listings by up to{" "}
          <span className="text-goldenbrown gold-text">73%</span>
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Experience deal closing increases as high as{" "}
          <span className="text-goldenbrown gold-text">68%</span>
        </p>
      </li>
    </ul>
  </div>
);

export const StepsRightSection = () => (
  <ul className="flex flex-col items-start space-y-[1rem]">
    {[
      {
        heading: "Sell Faster",
        body: (
          <>
            Listings with drone photography and or/videography sell{" "}
            <span className="text-goldenbrown gold-text">68%</span> faster on
            average than those that do not.
          </>
        ),
      },
      {
        heading: "Appeal to more home buyers",
        body: (
          <>
            <span className="text-goldenbrown gold-text">83%</span> of home
            sellers prefer to work with and agent using drone services.
          </>
        ),
      },
      {
        heading: "Close More Deals",
        body: (
          <>
            Listing agents who use drones for real estate could see an increase
            in listing as high as{" "}
            <span className="text-goldenbrown gold-text">73%</span> and deal
            closing increases as high as{" "}
            <span className="text-goldenbrown gold-text">68%</span>.
          </>
        ),
      },
    ].map((item, index) => (
      <li
        key={index}
        className="group cursor-select-hover hover:-translate-y-[0.5rem] transition-all flex flex-row items-center justify-start w-full bg-ash rounded-[1rem] p-[1.5rem] gap-x-[1rem] lg:gap-x-[2rem] text-white text-start"
      >
        <div className="aspect-square flex flex-col p-[2rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white">
          <h1 className="text-goldenbrown pn-semibold-48">{index + 1}</h1>
        </div>
        <div className="flex flex-col gap-y-[1rem]">
          <LetterRevealOnScroll className="relative">
            <h1 className="pn-semibold-24 capitalize">{item.heading}</h1>
          </LetterRevealOnScroll>
          <OpacityOnScroll start={100} end={90}>
            <p className="pn-regular-16">{item.body}</p>
          </OpacityOnScroll>
        </div>
      </li>
    ))}
  </ul>
);

export const UnlimitedLeftSection = () => (
  <div className="z-[999] relative flex size-full flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      heading="DON'T WORRY ABOUT GOING OVER BUDGET."
      subheading="Simply, unlimited."
      className="text-black"
    />
    <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Unlimited SQ FT
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Unlimited HDR Photography
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Unlimited Aerial Drone Photography
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Unlimited Video Footage
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Unlimited Revisions
        </p>
      </li>
    </ul>
  </div>
);

export const UnlimitedRightSection = () => (
  <div className="relative flex size-full flex-col sm:flex-row items-start justify-center gap-[3rem] sm:gap-[3.75rem] max-h-[40vh] overflow-hidden rounded-[1.875rem]">
    {/* Gradient */}
    <div className="absolute left-0 top-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-t from-transparent to-white to-85% pointer-events-none rounded-t-[1.875rem] z-10" />
    <div className="flex flex-col size-full items-center justify-center hover:scale-110 mt-[5rem] transition-all cursor-select-hover w-[25rem]">
      <Image
        data-speed={1.2}
        src={unlimitedImage}
        alt="unlimited-image"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={false}
        loading={false ? "eager" : "lazy"}
        className=""
        quality={75}
      />
    </div>
    {/* Gradient */}
    <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem] z-10" />
  </div>
);
