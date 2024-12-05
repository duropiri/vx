/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";
import Image from "next/image";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import heroImage1 from "@/../../public/assets/images/virtual-xposure-aerial-drone-image-3-1652931128668-1024x683.webp";
import heroImage2 from "@/../../public/assets/images/Virtual-Xposure-Exterior-Image-16-min-scaled-1024x576.webp";
import heroImage3 from "@/../../public/assets/images/Virtual-Xposure-Exterior-Image-8-min-768x512.webp";

function Body() {
  // GSAP Animations
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect
      const effectElements = gsap.utils.toArray("[data-speed]");
      (effectElements as HTMLElement[]).forEach((el: HTMLElement) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onRefresh: (self) => {
                const start = Math.max(0, self.start); // ensure no negative values
                const distance = self.end - start;
                const end = start + distance / speed;
                (self as any).setPositions(start, end);
                if (self.animation) {
                  // Check if self.animation is defined
                  (self as any).animation.vars.y = (end - start) * (1 - speed);
                  self.animation
                    .invalidate()
                    .progress(1)
                    .progress(self.progress);
                }
              },
            },
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <>
      <BasicHeroSection
        heading="Our Story"
        subheading="Where We Come From"
        content={
          <>
            <div className="flex flex-col sm:flex-row items-start justify-between gap-[2rem] sm:gap-[10rem] text-start pn-regular-16 mb-[3rem] sm:mb-[8rem]">
              <p className="max-w-[50ch]">
                The new digital age of real estate has officially begun,
                bringing it&apos;s own set of unique challenges. In an era where
                costly delays, poor communication, and ineffective marketing
                could crucify your real estate biz, the question we all wonder
                remains:{" "}
                <span className="font-semibold">is there a better way?</span>
              </p>
              <p className="max-w-[50ch]">
                <span className="font-semibold">
                  Introducing The Next Step in Real Estate Media & Marketing.
                </span>{" "}
                We are a group of curious, innovative and like-minded people,
                now stepping up to fill the gap in the industry with the highest
                level of convenience, reliability, quality and consistency.
              </p>
            </div>
            {/* Images */}
            <div className="flex flex-col sm:flex-row items-center justify-center mb-[3rem] sm:mb-[16rem] sm:mt-[5rem] gap-y-[2rem]">
              <div className="hidden sm:contents">
                <div
                  data-speed={1.1}
                  className="max-w-[1/3] translate-y-[1rem] rounded-[1rem] overflow-hidden"
                >
                  <Image
                    src={heroImage1}
                    alt="hero-image"
                    width={1200}
                    height={600}
                    className="cursor-select-hover hover:scale-110 transition-all point"
                    quality={80}
                  />
                </div>
                <div
                  data-speed={0.9}
                  className="sm:max-w-[40%] sm:scale-150 z-10 rounded-[1rem] overflow-hidden"
                >
                  <Image
                    src={heroImage2}
                    alt="hero-image"
                    width={1200}
                    height={600}
                    className="cursor-select-hover hover:scale-110 transition-all"
                    quality={80}
                  />
                </div>
                <div
                  data-speed={1.2}
                  className="max-w-[1/3] translate-y-[1rem] rounded-[1rem] overflow-hidden"
                >
                  <Image
                    src={heroImage3}
                    alt="hero-image"
                    width={1200}
                    height={600}
                    className="cursor-select-hover hover:scale-110 transition-all"
                    quality={80}
                  />
                </div>
              </div>
              <div className="sm:hidden contents">
                <div className="max-w-[1/3] rounded-[1rem] overflow-hidden">
                  <Image
                    src={heroImage1}
                    alt="hero-image"
                    width={1200}
                    height={600}
                    className="cursor-select-hover hover:scale-110 transition-all"
                    quality={80}
                  />
                </div>
                <div className="sm:max-w-[40%] sm:scale-150 z-10">
                  <Image
                    src={heroImage2}
                    alt="hero-image"
                    width={1200}
                    height={600}
                    className="cursor-select-hover hover:scale-110 transition-all"
                    quality={80}
                  />
                </div>
                <div className="max-w-[1/3]">
                  <Image
                    src={heroImage3}
                    alt="hero-image"
                    width={1200}
                    height={600}
                    className="cursor-select-hover hover:scale-110 transition-all"
                    quality={80}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem] text-start pn-regular-16 z-10 bg-white/50 backdrop-blur-xl">
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
      <TestimonialsSection className="!bg-white/20 backdrop-blur-sm" />
      <FAQSection vertical className="bg-white z-10" />
      <ContactSection className="bg-white z-10" />
    </>
  );
}

export default Body;
