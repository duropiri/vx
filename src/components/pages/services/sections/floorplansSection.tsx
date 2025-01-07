"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { TransitionLink } from "@/components/TransitionLink";
import SectionHeader from "@/components/ui/sectionHeader";
import { ServiceIcons } from "@/data/serviceIcons";
import Image from "next/image";
import floorplanImage from "@/../../public/assets/images/5-VX-Metric-Schematic-Floor-Plan-2-1536x970.webp";

const FloorplansSection = () => {
  // const iGuideUrl = "https://youriguide.com/11408_167a_ave_edmonton_ab";
  const iGuideUrl =
    "https://youriguide.com/embed/1505_sesame_st_toronto_on?unbranded=1&nomenu=1&autostart=1&bgcolor=FFFFFF";

  return (
    <div
      id="floorplans"
      className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem] xl:gap-y-[6rem] "
    >
      <SectionHeader
        center
        noAnimation
        heading="3D Virtual Tour (iGuide)"
        subheading="iGUIDE 3D Tours, Measurements & Floor Plans"
        className="text-black"
      />
      <div className="relative sm:hidden flex size-full aspect-video overflow-hidden shadow-customShadow cursor-none-hover cursor-auto w-[100vw]">
        <iframe
          src={iGuideUrl}
          title="iGuide 3D Tour"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="relative flex size-full max-w-[--section-width] flex-col-reverse xl:flex-row items-center justify-center gap-[3rem] xl:gap-[3.75rem] px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow">
        <div className="z-[999] relative flex size-full flex-col items-center xl:items-start justify-center gap-y-[2rem]">
          <SectionHeader
            noAnimation
            noBodyAnimation
            subheading="Showcase your home layout in detail."
            body="The 3D basic floor plan is the best kind of virtual property tour, which shows the home to a potential buyer in greater detail. From demonstrating the flooring transitions to the door swings directions, a 3D basic floor plan will effectively exhibit a home or property and help attract potential buyers to make a decision easier."
            className="text-black"
          />
          <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                Verified RMS Measurements
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                Accurate to RECA Standards
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                24 Hour Turnaround
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                SSL Encrypted Checkout
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                2X Money Back Guarantee
              </p>
            </li>
          </ul>
        </div>
        <div className="relative hidden sm:flex size-full aspect-video rounded-[1rem] overflow-hidden shadow-customShadow cursor-none-hover cursor-auto">
          <iframe
            src={iGuideUrl}
            title="iGuide 3D Tour"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="relative flex size-full max-w-[--section-width] flex-col-reverse xl:flex-row-reverse items-center justify-center gap-[3rem] xl:gap-[3.75rem] px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow">
        <div className="z-[999] relative flex size-full flex-col items-center xl:items-start justify-center gap-y-[2rem]">
          <SectionHeader
            noAnimation
            noBodyAnimation
            subheading="2D Floorplans with Dimensions"
            body="Offer your clients an exceptional experience with detailed two-dimensional floorplans. This feature provides buyers with a bird's-eye view of the property, allowing them to visualize each room's layout and flow, making it easier to see how the space aligns with their dream home vision."
            className="text-black"
          />
          <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                Verified RMS Measurements
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                Accurate to RECA Standards
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                24 Hour Turnaround
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                SSL Encrypted Checkout
              </p>
            </li>
            <li className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]">
              <p className="pn-regular-16 text-black/80 group-hover:text-black">
                2X Money Back Guarantee
              </p>
            </li>
          </ul>
        </div>
        <div className="relative flex size-full aspect-video overflow-hidden cursor-none-hover cursor-auto">
          <Image
            // speed={1-0.95}
            src={floorplanImage}
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
      {/* CTA */}
      {false && (
        <div className="flex justify-center w-full">
          <div className="flex flex-col sm:flex-row gap-[1rem]">
            <HoverWrapper className="group/cta cursor-select-hover">
              <TransitionLink
                href="/case-studies/gallery"
                className="button gold pn-regular-16 pn-regular-16 h-full !bg-transparent shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-fit"
                passHref
              >
                <FlipLink className={`flex items-center w-fit`}>
                  See More
                </FlipLink>

                <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                  {ServiceIcons.arrow}
                </div>
              </TransitionLink>
            </HoverWrapper>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorplansSection;
