"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/sectionHeader";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import service1 from "@/../../public/assets/images/service_2.webp";
import service2 from "@/../../public/assets/images/print-design-northumberland-min.webp";
import service3 from "@/../../public/assets/images/service_2-1.webp";
import arrowRedirectWhite from "@/../../public/assets/svgs/arrow-redirect-cta-white.svg";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";

export const WhatIsItSection1 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center sm:items-start justify-center gap-[3rem] sm:gap-[3.75rem]">
    <div className="relative group flex size-full pt-[5rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <div data-speed={0.95} data-media-wrapper className="size-full">
          <Image
            src={service1}
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
            subheading="Logo Design & Animation"
            className="text-black"
          />
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              A visual identification of your real estate service. Bring your
              personal branding to another level with our custom logo design
              services.
            </p>
          </LetterRevealOnScroll>
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Take it one step further with our logo animation services, and
              seamlessly integrate your branding into social media content and
              video production.
            </p>
          </LetterRevealOnScroll>
          {/* CTA */}
          <div className="flex justify-center sm:justify-start w-full mt-[1rem] sm:mt-[2rem]">
            <div className="flex flex-col sm:flex-row gap-[1rem]">
              <HoverWrapper className="">
                <Link
                  href="https://listings.virtualxposure.com/order"
                  className="group button gold pn-regular-22 flex size-full items-center shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-full  cursor-select-hover"
                  passHref
                >
                  <FlipLink className={`flex items-center w-fit`}>
                    Book a FREE Consultation
                  </FlipLink>

                  <Image
                    alt="arrow"
                    src={arrowRedirect}
                    className="text-ash group-hover/cta:rotate-45 transition-all duration-300"
                    quality={10}
                  />
                </Link>
              </HoverWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WhatIsItSection2 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col sm:flex-row-reverse items-center sm:items-start justify-center gap-[3rem] sm:gap-[3.75rem]">
    <div className="relative group flex size-full xl:h-[40rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-start gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <div data-speed={0.95} data-media-wrapper className="size-full">
          <Image
            src={service2}
            alt="hero-image"
            width={1200}
            height={600}
            className="w-full h-[125%] scale-125 -translate-y-[10%] group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={80}
          />
        </div>
      </div>

      <div className="relative flex flex-col items-start h-full justify-end max-h-full sm:max-h-[80%] sm:max-w-[40%]">
        {/* Inverted Border Radius */}
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 flex flex-col bg-ash backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4 " />
        </div>
        <div className="relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 sm:p-[2rem] bg-ash backdrop-blur-lg transition-all duration-500 rounded-tr-[1rem] text-white">
          <SectionHeader subheading="Brochure Design" className="text-white" />
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Perfect for advertising high-end residential and commercial
              properties, provide your prospective customers with a
              sophisticated yet timelessly designed brochure to advertise your
              listing.
            </p>
          </LetterRevealOnScroll>
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Since the information on there is often limited, it should be
              unique and engaging. Luckily for you, we specialize in quality
              content, so we&apos;ll make sure your brochure does not end up in
              the trash!
            </p>
          </LetterRevealOnScroll>
          {/* CTA */}
          <div className="flex justify-center sm:justify-start w-full mt-[1rem] sm:mt-[2rem]">
            <div className="flex flex-col sm:flex-row gap-[1rem]">
              <HoverWrapper
                href="https://listings.virtualxposure.com/order"
                className="button pn-regular-22 group/cta cursor-select-hover !bg-transparent !border-white w-full lg:w-auto shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5"
              >
                <FlipLink className="font-semibold">
                  Book a FREE Consultation
                </FlipLink>
                <Image
                  alt="arrow"
                  src={arrowRedirectWhite}
                  className="text-white group-hover/cta:rotate-45 transition-all duration-300"
                  quality={80}
                />
              </HoverWrapper>
            </div>
          </div>
        </div>
      </div>

      {/* Inverted Border Radius */}
      <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 flex flex-col bg-ash backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4 " />
      </div>
    </div>
  </div>
);

export const WhatIsItSection3 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center sm:items-start justify-center gap-[3rem] sm:gap-[3.75rem]">
    <div className="relative group flex size-full pt-[5rem] max-w-[--section-width] flex-col sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <div data-speed={0.95} data-media-wrapper className="size-full">
          <Image
            src={service3}
            alt="service3"
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
            subheading="Custom Graphic Design"
            className="text-black"
          />
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Having quality graphics is an industry-standard in our
              ever-changing world, filled with creatives and visual learners. It
              is no longer enough to have generic graphics; you need to ensure
              that your graphics are purely customized to your brand. Our team
              of specialists will ensure that you achieve all this and more!
            </p>
          </LetterRevealOnScroll>
          <LetterRevealOnScroll end="bottom 90%">
            <p className={`pn-regular-16 max-w-[43.75rem]`}>
              Book a FREE consultation with us today, and we&apos;ll see how we
              can make your real estate business stand out, a cut above the
              rest.
            </p>
          </LetterRevealOnScroll>
          {/* CTA */}
          <div className="flex justify-center sm:justify-start w-full mt-[1rem] sm:mt-[2rem]">
            <div className="flex flex-col sm:flex-row gap-[1rem]">
              <HoverWrapper className="">
                <Link
                  href="https://listings.virtualxposure.com/order"
                  className="group button gold pn-regular-22 flex size-full items-center shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 hover:scale-110 w-full  cursor-select-hover"
                  passHref
                >
                  <FlipLink className={`flex items-center w-fit`}>
                    Book a FREE Consultation
                  </FlipLink>

                  <Image
                    alt="arrow"
                    src={arrowRedirect}
                    className="text-ash group-hover/cta:rotate-45 transition-all duration-300"
                    quality={10}
                  />
                </Link>
              </HoverWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
