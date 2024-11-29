"use client";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";
import { motion } from "framer-motion";
import { ServiceIcons } from "@/data/serviceIcons";
import { RealEstateVideographyPackages } from "@/data/pricingPackages";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/ui/sectionHeader";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import OpacityOnScroll from "@/components/animations/OpacityOnScroll";
import unlimitedImage from "@/../../public/images/6685889-copy-1-e1670628501382-584x1024.png";

const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[87.5rem] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      center
      heading="Why"
      subheading="Why is Real Estate Video Effective?"
      body="In today’s world of short attention spans, standing out in the crowded real estate market requires a fresh approach. Consider creating engaging real estate videos to give clients a realistic feel for the property and capture their interest in a unique way."
      className="text-black"
    />
    <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1rem] sm:gap-12 mt-[2.5rem] sm:mt-[5rem]">
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
      <div className="flex justify-center w-full h-[3.313rem]">
        <div className="flex flex-col sm:flex-row gap-[1rem]">
          <motion.div
            className={`button group !p-0 h-full cursor-select-hover !bg-transparent shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-full`}
            style={{
              background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <HoverWrapper className="flex size-full items-center px-[1.5rem] py-[0.5rem]">
              <Link
                href="https://listings.virtualxposure.com/order"
                className="flex size-full items-center gap-[1rem]"
                passHref
              >
                <FlipLink className={`flex items-center w-full`}>
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
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

const StepsLeftSection = () => (
  <div className="z-[999] relative flex size-full max-w-[87.5rem] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      heading="MORE EFFECTIVE MARKETING. LARGER COMMISSIONS."
      subheading="3 reasons why Drone Photography is CRUCIAL For Your Success in 2023…"
      body="The good news is… we include it at no additional cost in all of our packages, so rest assured your listing will get in front of the right eyes regardless of your budget."
      className="text-black"
    />
    <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem]">
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Sell your listings <span className="text-goldenbrown">68%</span>{" "}
          faster than your competitors
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          <span className="text-goldenbrown">83%</span> of sellers would prefer
          your service over the competition
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Increase your number of listings by up to{" "}
          <span className="text-goldenbrown">73%</span>
        </p>
      </li>
      <li className="list group flex flex-row items-center text-start gap-[1rem] sm:gap-[0.5rem]">
        <p className="pn-regular-16 text-black/80 group-hover:text-black">
          Experience deal closing increases as high as{" "}
          <span className="text-goldenbrown">68%</span>
        </p>
      </li>
    </ul>
  </div>
);

const StepsRightSection = () => (
  <ul className="flex flex-col items-start space-y-[1rem]">
    {[
      {
        heading: "Sell Faster",
        body: (
          <>
            Listings with drone photography and or/videography sell{" "}
            <span className="text-goldenbrown">68%</span> faster on average than
            those that do not.
          </>
        ),
      },
      {
        heading: "Appeal to more home buyers",
        body: (
          <>
            <span className="text-goldenbrown">83%</span> of home sellers prefer
            to work with and agent using drone services.
          </>
        ),
      },
      {
        heading: "Close More Deals",
        body: (
          <>
            Listing agents who use drones for real estate could see an increase
            in listing as high as <span className="text-goldenbrown">73%</span>{" "}
            and deal closing increases as high as{" "}
            <span className="text-goldenbrown">68%</span>.
          </>
        ),
      },
    ].map((item, index) => (
      <li
        key={index}
        className="group cursor-select-hover hover:-translate-y-[0.5rem] transition-all flex flex-row items-center justify-start w-full bg-ash rounded-[1rem] p-[1.5rem] gap-x-[1rem] lg:gap-x-[2rem] text-white text-start"
      >
        <div className="flex flex-col p-[2rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white">
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

const UnlimitedLeftSection = () => (
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

const UnlimitedRightSection = () => (
  <div className="relative flex size-full flex-col sm:flex-row items-start justify-center gap-[3rem] sm:gap-[3.75rem] max-h-[40vh] overflow-hidden rounded-[1.875rem]">
    {/* Gradient */}
    <div className="absolute left-0 top-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-t from-transparent to-white to-85% pointer-events-none rounded-t-[1.875rem] z-10" />
    <div className="flex flex-col size-full items-center justify-center hover:scale-110 mt-[5rem] transition-all cursor-select-hover w-[25rem]">
      <Image
        data-speed={1.2}
        src={unlimitedImage}
        alt="unlimited-image"
        width={1200}
        height={600}
        className=""
        quality={80}
      />
    </div>
    {/* Gradient */}
    <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem] z-10" />
  </div>
);

const page = () => {
  return (
    <Page>
      <Body
        title="Best In Industry Real Estate Videography"
        copy="Capture buyers' attention with stunning visuals highlighting every detail of your property. Choose the Gold Standard in Real Estate Marketing, because results matter."
        detailList={[
          {
            icon: ServiceIcons.infinity,
            text: "Completely Unlimited - Pay one flat rate, and get everything you need to knock your next listing out of the park.",
          },
          {
            icon: ServiceIcons.thumb,
            text: "Results Oriented - Helping you to achieve a higher sales price; sell your listings faster, and provide stand-out results for your clients.",
          },
          {
            icon: ServiceIcons.timer,
            text: "48 Hour Turnaround - Time is money. Launch your listing within two days after our scheduled appointment.",
          },
          {
            icon: ServiceIcons.guarantee,
            text: "2X Money Back Guarantee - If you're not completely blown away, we'll double your investment in our services.",
          },
        ]}
        cta={{ label: "Order Now", href: "https://listings.virtualxposure.com/order" }}
        src="/videos/real-estate-videography.mp4"
        whatisitSection={<WhatIsItSection />}
        whyusSection
        stepsSection={[<StepsLeftSection />, <StepsRightSection />]}
        socialproofSection
        ctaSection
        unlimitedSection={[<UnlimitedLeftSection />, <UnlimitedRightSection />]}
        testimonialsSection
        pricing={RealEstateVideographyPackages}
      />
    </Page>
  );
};

export default page;
