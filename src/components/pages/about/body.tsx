/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import FAQSection from "@/components/pages/sections/faqSection";
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";
import Image from "next/image";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import heroImage1 from "@/../../public/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(1).webp";
import heroImage2 from "@/../../public/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(2).webp";
import heroImage3 from "@/../../public/assets/portfolio/images/aerial drone/Virtual_Xposure_-_Aerial_Drone_Image_-_(3).webp";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import Basic2ColumnSection from "../sections/basic2ColumnSection";
import SectionHeader from "@/components/ui/sectionHeader";

function Body() {
  return (
    <>
      <BasicHeroSection
        heading="Our Story"
        subheading="Where We Come From"
        content={
          <>
            <div className="flex flex-col items-start justify-between gap-[1rem] text-start pn-regular-16 sm:mb-[2rem]">
              <p className="">
                The new digital age of real estate has officially begun,
                bringing it&apos;s own set of unique challenges. In an era where
                costly delays, poor communication, and ineffective marketing
                could crucify your real estate biz, the question we all wonder
                remains:{" "}
                <span className="font-semibold">is there a better way?</span>
              </p>
              <p className="">
                <span className="font-semibold">
                  Introducing The Next Step in Real Estate Media & Marketing.
                </span>{" "}
                We are a group of curious, innovative and like-minded people,
                now stepping up to fill the gap in the industry with the highest
                level of convenience, reliability, quality and consistency.
              </p>
            </div>
            {/* Images */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-y-[2rem] w-full sm:h-[50vh] my-[2rem] sm:my-[4rem]">
              <div className="hidden sm:contents aspect-[4/3]">
                <div className="relative w-full max-w-[1/3] rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group shadow-customShadow">
                  {/* Blur overlay */}
                  <Image
                    src={heroImage1}
                    alt="hero-image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading={true ? "eager" : "lazy"}
                    quality={25}
                    className="absolute inset-0 backdrop-blur-xl blur-md bg-black/20"
                    aria-hidden="true"
                  />
                  <ParallaxSection
                    isHero
                    speed={1 - 1.05}
                    className="relative size-full"
                  >
                    <Image
                      src={heroImage1}
                      alt="hero-image"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={true}
                      loading={true ? "eager" : "lazy"}
                      className="cursor-select-hover group-hover:scale-[1.3] transition-all object-contain pointer-events-none scale-125"
                      quality={75}
                    />
                  </ParallaxSection>
                </div>
                <div className="relative w-full sm:!scale-110 z-10 rounded-[1rem] overflow-hidden aspect-[4/3] group cursor-select-hover shadow-customShadow">
                  {/* Blur overlay */}
                  <Image
                    src={heroImage2}
                    alt="hero-image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading={true ? "eager" : "lazy"}
                    quality={25}
                    className="absolute inset-0 backdrop-blur-xl blur-md bg-black/20"
                    aria-hidden="true"
                  />
                  <ParallaxSection
                    isHero
                    speed={1 - 1.1}
                    className="relative size-full"
                  >
                    <Image
                      src={heroImage2}
                      alt="hero-image"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={true}
                      loading={true ? "eager" : "lazy"}
                      className="group-hover:scale-[1.3] transition-all object-contain pointer-events-none scale-125"
                      quality={75}
                    />
                  </ParallaxSection>
                </div>
                <div className="relative w-full max-w-[1/3] rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group shadow-customShadow">
                  {/* Blur overlay */}
                  <Image
                    src={heroImage3}
                    alt="hero-image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading={true ? "eager" : "lazy"}
                    quality={25}
                    className="absolute inset-0 backdrop-blur-xl blur-md bg-black/20"
                    aria-hidden="true"
                  />
                  <ParallaxSection
                    isHero
                    speed={1 - 1.05}
                    className="relative size-full"
                  >
                    <Image
                      src={heroImage3}
                      alt="hero-image"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={true}
                      loading={true ? "eager" : "lazy"}
                      className="cursor-select-hover group-hover:scale-[1.3] transition-all object-contain pointer-events-none scale-125"
                      quality={75}
                    />
                  </ParallaxSection>
                </div>
              </div>
              <div className="sm:hidden contents aspect-[4/3]">
                <div className="relative flex size-full max-w-[1/3] rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group">
                  <Image
                    src={heroImage1}
                    alt="hero-image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading={true ? "eager" : "lazy"}
                    className="cursor-select-hover group-hover:scale-110 transition-all pointer-events-none"
                    quality={75}
                  />
                </div>
                <div className="relative flex size-full sm:max-w-[40%] sm:scale-150 z-10 rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group">
                  <Image
                    src={heroImage2}
                    alt="hero-image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading={true ? "eager" : "lazy"}
                    className="cursor-select-hover group-hover:scale-110 transition-all pointer-events-none"
                    quality={75}
                  />
                </div>
                <div className="relative flex size-full max-w-[1/3] rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group">
                  <Image
                    src={heroImage3}
                    alt="hero-image"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading={true ? "eager" : "lazy"}
                    className="cursor-select-hover group-hover:scale-110 transition-all pointer-events-none"
                    quality={75}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem] text-start pn-regular-16 z-10 bg-white/50 backdrop-blur-xl sm:mt-[2rem]">
              <p className="">
                Our research identified service gaps in the industry we can fill
                with our media and marketing superpowers. We also realized
                putting a cap on our services was folly. This led us to our
                UNLIMITED policy. Here at VX, we believe certain things should
                not be restricted. Freedom of speech, funky hairstyles, and HDR
                drone photography are some of them. Virtual Xposure is all about
                transparency with every aspect of our business, and{" "}
                <span className="font-semibold">
                  we back that up by providing up-front, flat rates on each of
                  our packages.
                </span>{" "}
                That means you&apos;ll never have any BS overcharges for
                additional square footage, or for us to come back and take more
                photos of your listing. The way we see it, a few extra photos
                should not determine whether or not your listing gets infront of
                the right eyes.
              </p>
              <p>
                To take it one step further, we also believe in what we do, and
                we back that up with a 2X Money Back “Get Killed By A Shark”
                Satisfaction Guarantee.{" "}
                <span className="font-semibold">
                  Satisfaction Guarantee. Yes, that means if you try us out and
                  you&apos;re not willing to swim through shark infested waters
                  just to continue using our service, we&apos;ll double your
                  money. Satisfaction Guarantee.{" "}
                </span>{" "}
                We&apos;re not crazy, well… maybe a little. Here&apos;s the good
                part though… the reason we&apos;re able to do this is because,
                more than just media professionals, we&apos;re expert marketers
                as well. Taking everything from an analytical point of view, we
                don&apos;t just take nice photos, we take EFFECTIVE photos. With
                us, be assured we&apos;ll be always asking the right
                questions…the ones we actually all care about… such as: how do
                we achieve a higher sales price or rental income for our
                clients? Or… how to we ACTUALLY bring your business to the next
                level? Taking pretty photos is great don&apos;t get us wrong,
                but we take it one step further.{" "}
                <span className="font-semibold">
                  get us wrong, but we take it one step further. This is truly
                  why we&apos;re able to make an impact for our clients, and one
                  of the many reasons why we have the lowest client churn rate
                  in the industry. get us wrong, but we take it one step
                  further.{" "}
                </span>{" "}
                Simply put, we&apos;re not anything like your regular
                copy-and-paste photography service.
              </p>
              <p>
                Our team consists of experienced photographers, videographers,
                marketing professionals, and an editing team with 10+ years in
                the business. All our photos are professionally edited in
                post-production, and our videos are stabilized to ensure quality
                that looks as good on paper as it does on screen. We take time
                to properly understand our client&apos;s needs and preferences
                before each project, allowing us to create something special
                that accurately captures their vision. In addition to this,
                we&apos;ve worked with many different clients throughout our
                time in the industry, ranging from luxury home builders and
                architects to small family-owned businesses.{" "}
                <span className="font-semibold">
                  small family-owned businesses. Each project is treated with
                  respect and care, resulting in stunning visuals that will make
                  a lasting impression on prospective buyers or tenants. small
                  family-owned businesses.{" "}
                </span>
              </p>
              <p>
                It&apos;s a scary place to be, on the cutting edge of things,
                but it&apos;s also exhilarating.{" "}
                <span className="font-semibold">
                  it&apos;s also exhilarating. We love what we do, we value
                  excellence, and we really enjoy being the first to do things
                  differently. it&apos;s also exhilarating.{" "}
                </span>
                And that is where we come from.
              </p>
            </div>
          </>
        }
      />
      <Basic2ColumnSection
        className=""
        leftContent={
          <div className="flex flex-col items-start justify-between gap-[1rem] text-start pn-regular-16 sm:mb-[2rem]">
            <SectionHeader
              noCenter
              noAnimation
              heading=""
              subheading="Our Competitive Advantage"
              className="text-black"
            />
            <div className="flex flex-col items-start justify-between gap-[1rem] text-start pn-regular-16 sm:mb-[2rem]">
              <p className="">
                <span className="font-semibold">
                  For a second, just imagine this:
                </span>{" "}
                you have an entire team of industry-leading professionals
                completely obsessed with your exact needs and wants.{" "}
                <span className="font-semibold">Check.</span>
              </p>
              <p className="">
                You aren&apos;t limited by the size of the property and
                don&apos;t have to worry about petty cancellation fees or
                overcharges. <span className="font-semibold">Check.</span>
              </p>
              <p className="">
                You have access to a wide array of services, ranging from RMS
                Measurements, Virtual Tours and Photography to Virtual Staging
                and even Brochure/Logo Design.{" "}
                <span className="font-semibold">Check.</span>
              </p>
              <p className="">
                And suppose such a service is offered at a fraction of the price
                of leading competitors and comes with a quick turnaround, backed
                by a 2X Money Back Satisfaction Guarantee.{" "}
                <span className="font-semibold">Check.</span>
              </p>
              <p className="">
                <span className="font-semibold">
                  We are quite proud of our competitive advantage because it all
                  comes down to the epic talent that works here every day.
                </span>
              </p>
              <p className="">
                In addition to this, our service is driven by passion and
                capability, so when we start talking about our competitive
                advantage, we really can go on and on. Rest assured, if you come
                to us with a project, we will see it done well, and you will be
                glad you came to us.
              </p>
            </div>
          </div>
        }
        rightContentClassName="sm:max-w-[33%]"
        rightContent={
          <>
            <div
              className={`hidden sm:flex relative size-full rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group shadow-customShadow`}
            >
              {/* Blur overlay */}
              <Image
                src={heroImage3}
                alt="hero-image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={true}
                loading={true ? "eager" : "lazy"}
                quality={25}
                className="absolute inset-0 backdrop-blur-xl blur-md bg-black/20"
                aria-hidden="true"
              />

              <ParallaxSection
                isHero
                speed={1 - 1.05}
                className="relative size-full"
              >
                <Image
                  src={heroImage3}
                  alt="hero-image"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={true}
                  loading={true ? "eager" : "lazy"}
                  className="cursor-select-hover group-hover:scale-[1.3] transition-all object-contain pointer-events-none scale-125"
                  quality={75}
                />
              </ParallaxSection>
            </div>
            <div className="sm:hidden relative flex size-full max-w-[1/3] rounded-[1rem] overflow-hidden aspect-[4/3] cursor-select-hover group">
              <Image
                src={heroImage3}
                alt="hero-image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={true}
                loading={true ? "eager" : "lazy"}
                className="cursor-select-hover group-hover:scale-110 transition-all pointer-events-none"
                quality={75}
              />
            </div>
          </>
        }
      />
      <TestimonialsSection
        noCarousel
        noAnimation
        className="!bg-white/20 backdrop-blur-sm"
      />
      <FAQSection vertical className="bg-white z-10" />
      {/* <ContactSection className="bg-white z-10" /> */}
    </>
  );
}

export default Body;
