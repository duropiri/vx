import Image from "next/image";
import SectionHeader from "@/components/ui/sectionHeader";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import service1 from "@/../../public/assets/images/pexels-romanp-17845.jpg";
import service2 from "@/../../public/assets/images/pexels-hngstrm-2250136.jpg";
import service3 from "@/../../public/assets/images/pexels-karolina-grabowska-5904063.jpg";
import arrowRedirectWhite from "@/../../public/assets/svgs/arrow-redirect-cta-white.svg";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import { TransitionLink } from "@/components/TransitionLink";
import { ServiceIcons } from "@/data/serviceIcons";

export const WhatIsItSection1 = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col sm:flex-row items-center sm:items-start justify-center gap-[3rem] sm:gap-[3.75rem]">
    <div className="relative group flex size-full sm:pt-[5rem] max-w-[--section-width] flex-col-reverse sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full min-h-[30vh] pointer-events-none"
        >
          <Image
            src={service1}
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
            noAnimation
            subheading="Logo Design & Animation"
            className="text-black"
          />
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            A visual identification of your real estate service. Bring your
            personal branding to another level with our custom logo design
            services.
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Take it one step further with our logo animation services, and
            seamlessly integrate your branding into social media content and
            video production.
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* CTA */}
          <div className="flex justify-center sm:justify-start w-full mt-[1rem] sm:mt-[2rem]">
            <div className="flex flex-col sm:flex-row gap-[1rem]">
              <HoverWrapper className="">
                <TransitionLink
                  href="https://listings.virtualxposure.com/order"
                  className="group/cta button gold pn-regular-16 flex size-full items-center shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-full  cursor-select-hover"
                  passHref
                >
                  <FlipLink className={`flex items-center w-fit`}>
                    Book a FREE Consultation
                  </FlipLink>

                  <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                    {ServiceIcons.arrow}
                  </div>
                </TransitionLink>
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
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full min-h-[30vh] pointer-events-none"
        >
          <Image
            src={service2}
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

      <div className="relative flex flex-col items-start h-full justify-end max-h-full sm:max-h-[80%] sm:max-w-[40%]">
        {/* Inverted Border Radius */}
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 flex flex-col bg-ash backdrop-blur-lg transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4 " />
        </div>
        <div className="relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 sm:p-[2rem] bg-ash backdrop-blur-lg transition-all duration-500 rounded-tr-[1rem] text-white">
          <SectionHeader
            noAnimation
            subheading="Brochure Design"
            className="text-white"
          />
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Perfect for advertising high-end residential and commercial
            properties, provide your prospective customers with a sophisticated
            yet timelessly designed brochure to advertise your listing.
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Since the information on there is often limited, it should be unique
            and engaging. Luckily for you, we specialize in quality content, so
            we&apos;ll make sure your brochure does not end up in the trash!
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* CTA */}
          <div className="flex justify-center sm:justify-start w-full mt-[1rem] sm:mt-[2rem]">
            <div className="flex flex-col sm:flex-row gap-[1rem]">
              <HoverWrapper
                href="https://listings.virtualxposure.com/order"
                className="button pn-regular-16 group/cta cursor-select-hover !bg-transparent !border-white w-full lg:w-auto shadow-customShadow shadow-white/5 hover:shadow-goldenrod/5 hover:!bg-white hover:!text-ash"
              >
                <FlipLink className="font-semibold">
                  Book a FREE Consultation
                </FlipLink>
                <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                  {ServiceIcons.arrow}
                </div>
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
    <div className="relative group flex size-full sm:pt-[5rem] max-w-[--section-width] flex-col-reverse sm:flex-row items-end justify-end gap-[3rem] sm:gap-0">
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full min-h-[30vh] pointer-events-none"
        >
          <Image
            src={service3}
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
            noAnimation
            subheading="Custom Graphic Design"
            className="text-black"
          />
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Having quality graphics is an industry-standard in our ever-changing
            world, filled with creatives and visual learners. It is no longer
            enough to have generic graphics; you need to ensure that your
            graphics are purely customized to your brand. Our team of
            specialists will ensure that you achieve all this and more!
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className={`pn-regular-16 max-w-[43.75rem]`}>
            Book a FREE consultation with us today, and we&apos;ll see how we
            can make your real estate business stand out, a cut above the rest.
          </p>
          {/* </LetterRevealOnScroll> */}
          {/* CTA */}
          <div className="flex justify-center sm:justify-start w-full mt-[1rem] sm:mt-[2rem]">
            <div className="flex flex-col sm:flex-row gap-[1rem]">
              <HoverWrapper className="">
                <TransitionLink
                  href="https://listings.virtualxposure.com/order"
                  className="group/cta button gold pn-regular-16 flex size-full items-center shadow-customShadow shadow-ash/5 hover:shadow-goldenrod/5 w-full  cursor-select-hover"
                  passHref
                >
                  <FlipLink className={`flex items-center w-fit`}>
                    Book a FREE Consultation
                  </FlipLink>

                  <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                    {ServiceIcons.arrow}
                  </div>
                </TransitionLink>
              </HoverWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
