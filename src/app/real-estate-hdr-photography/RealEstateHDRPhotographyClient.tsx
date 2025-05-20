import { ServiceIcons } from "@/data/serviceIcons";
import SectionHeader from "@/components/ui/sectionHeader";
// import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import Image from "next/image";
import whatisitImage from "@/../../public/assets/portfolio/images/exterior/Virtual_Xposure_-_Exterior_Image_-_(13).webp";
import unlimitedImage from "@/../../public/assets/images/6685889-copy-1-e1670628501382-584x1024.webp";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";

export const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      noAnimation
      noCenter
      heading="Why"
      subheading="Why does the quality of your photos matter?"
      className="text-black"
    />
    <div className="relative group flex size-full xl:h-fit max-w-[--section-width] flex-col xl:flex-row items-end justify-start gap-[3rem] sm:gap-[3.75rem] rounded-[1rem] overflow-hidden">
      <div className="absolute top-0 left-0 flex flex-col size-full items-center justify-center bg-ash pointer-events-none">
        <ParallaxSection
          // speed={1-0.95}
          speed={1 - 0.95}
          className="size-full"
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
      <div className="bg-gradient-to-r from-ash/50 from-[60%] flex size-full flex-col xl:flex-row items-end justify-between h-fit sm:max-w-[50%] pr-[10%] z-10">
        <ul
          // speed={1-1.02}
          className="flex flex-col grow basis-0 gap-[1.5rem] p-[1.5rem]"
        >
          {[
            {
              icon: ServiceIcons.house,
              text: (
                <>
                  Homes with professional photography sell on average for{" "}
                  <span className="text-goldenbrown">9% more money</span>
                </>
              ),
            },
            {
              icon: ServiceIcons.moneybag,
              text: (
                <>
                  The average ROI on professional real estate photography is{" "}
                  <span className="text-goldenbrown">approx 826%</span>
                </>
              ),
            },
            {
              icon: ServiceIcons.calendar,
              text: (
                <>
                  Homes listed with more than 20 photos{" "}
                  <span className="text-goldenbrown">
                    spend 32 days less on
                  </span>{" "}
                  the market
                </>
              ),
            },

            {
              icon: ServiceIcons.satisfiedcustomer,
              text: (
                <>
                  Clients feel{" "}
                  <span className="text-goldenbrown">43% more satisfied</span>{" "}
                  with their REALTOR with professional photos
                </>
              ),
            },
            {
              icon: ServiceIcons.magnifyingglass,
              text: (
                <>
                  <span className="text-goldenbrown">
                    50% of all new home searches
                  </span>{" "}
                  for real estate start online.
                </>
              ),
            },
            {
              icon: ServiceIcons.camerashutter,
              text: (
                <>
                  Professional photos result in{" "}
                  <span className="text-goldenbrown">
                    1,200% increase in social shares
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <li
              key={index}
              className="group cursor-select-hover hover:-translate-y-[0.5rem] transition-all flex flex-row items-center justify-start w-full gap-x-[1rem] text-white text-start"
            >
              <div className="flex flex-col p-[1rem] size-[3rem] items-center justify-center rounded-full bg-ash border-goldenbrown border">
                <div className="size-[1.5rem] text-goldenbrown/80 group-hover:text-goldenbrown">
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="pn-regular-16">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul
          // speed={1-1.08}
          className="flex flex-col grow basis-0 gap-[1.5rem] p-[1.5rem]"
        >
          {[
            {
              icon: ServiceIcons.satisfiedcustomer,
              text: (
                <>
                  Clients feel{" "}
                  <span className="text-goldenbrown">43% more satisfied</span>{" "}
                  with their REALTOR with professional photos
                </>
              ),
            },
            {
              icon: ServiceIcons.magnifyingglass,
              text: (
                <>
                  <span className="text-goldenbrown">
                    50% of all new home searches
                  </span>{" "}
                  for real estate start online.
                </>
              ),
            },
            {
              icon: ServiceIcons.camerashutter,
              text: (
                <>
                  Professional photos result in{" "}
                  <span className="text-goldenbrown">
                    1,200% increase in social shares
                  </span>
                </>
              ),
            },
          ].map((item, index) => (
            <li
              key={index}
              className="group cursor-select-hover hover:-translate-y-[0.5rem] transition-all flex flex-row items-center justify-start w-full gap-x-[1rem] text-white text-start"
            >
              <div className="flex flex-col p-[1rem] size-[3rem] items-center justify-center rounded-full border-goldenbrown border">
                <div className="size-[1.5rem] text-goldenbrown/80 group-hover:text-goldenbrown">
                  {item.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="pn-regular-16">{item.text}</p>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  </div>
);

export const StepsLeftSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      noCenter
      noAnimation
      heading="MORE EFFECTIVE MARKETING. LARGER COMMISSIONS."
      subheading={`3 reasons why Drone Photography is CRUCIAL For Your Success in ${new Date().getFullYear()}…`}
      noBodyAnimation
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

export const StepsRightSection = () => (
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
        className="group cursor-select-hover hover:-translate-y-[0.5rem] transition-all flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full bg-ash rounded-[1rem] p-[1.5rem] gap-y-[2rem] gap-x-[1rem] xl:gap-x-[2rem] text-white text-center sm:text-start"
      >
        <div className="aspect-square flex flex-col p-[2rem] w-[5rem] h-[5rem] items-center justify-center rounded-full bg-white">
          <h1 className="text-goldenbrown pn-semibold-32">{index + 1}</h1>
        </div>
        <div className="flex flex-col gap-y-[1rem]">
          <h1 className="pn-semibold-24 capitalize">{item.heading}</h1>

          <p className="pn-regular-16">{item.body}</p>
        </div>
      </li>
    ))}
  </ul>
);

export const UnlimitedLeftSection = () => (
  <div className="z-[999] relative flex size-full flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      noCenter
      noAnimation
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
  <div className="relative flex size-full flex-col sm:flex-row items-start justify-center gap-[3rem] sm:gap-[3.75rem] h-[50vh] overflow-hidden rounded-[1rem]">
    {/* Gradient */}
    <div className="absolute left-0 top-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-t from-transparent to-white to-85% pointer-events-none rounded-t-[1.875rem] z-10" />
    <div className="relative flex flex-col size-full aspect-[73/128] items-center justify-center hover:scale-110 mt-[5rem] transition-all cursor-select-hover w-[25rem] scale-150">
      <ParallaxSection
        speed={-0.1}
        className="w-[80vw] sm:w-[30vw] aspect-[73/128]"
      >
        <Image
          src={unlimitedImage}
          alt="unlimited-image"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          loading={false ? "eager" : "lazy"}
          className=""
          quality={75}
        />
      </ParallaxSection>
    </div>
    {/* Gradient */}
    <div className="absolute left-0 bottom-0 flex flex-col w-full h-[7.5rem] origin-top-left bg-gradient-to-b from-transparent to-white to-85% pointer-events-none rounded-b-[1.875rem] z-10" />
  </div>
);

export const detailList = [
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
    text: "24 Hour Turnaround - Time is money. Launch your listing within one day after the photos have been taken.",
  },
  {
    icon: ServiceIcons.guarantee,
    text: "2X Money Back Guarantee - If you're not completely blown away, we'll double your investment in our services.",
  },
];
