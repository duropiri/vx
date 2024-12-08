"use client";
import React, { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/pages/listing-media/sections/heroSection";
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import CTASection from "@/components/pages/services/sections/ctaSection";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import { LMSNavdockLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import { listingMediaFAQ } from "@/data/faq";
import WhyUsSection from "@/components/pages/services/sections/whyUsSection";
import CopySection from "@/components/pages/sections/copySection";
import Image from "next/image";
import SectionHeader from "@/components/ui/sectionHeader";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import arrowRedirect from "@/../../public/assets/svgs/arrow-redirect-cta.svg";
import arrowRedirectWhite from "@/../../public/assets/svgs/arrow-redirect-cta-white.svg";

import virtual3dtours from "@/../../public/assets/images/virtual-3d-tours.webp";
import hdrphotography from "@/../../public/assets/images/hdr-photography.webp";
import rmsmeasurements from "@/../../public/assets/images/rms-measurements.webp";
import virtualstaging from "@/../../public/assets/images/virtual-staging.webp";
import customgraphicdesign from "@/../../public/assets/images/custom-graphic-design.webp";
import highproductionvideotours from "@/../../public/assets/images/high-production-video-tours.webp";
import socialmediacontentcreation from "@/../../public/assets/images/social-media-content-creation.webp";
import brochuredesign from "@/../../public/assets/images/brochure-design.webp";
import logodesign from "@/../../public/assets/images/logo-design.webp";
import BasicSection from "@/components/pages/sections/basicSection";
import LetterRevealOnScroll from "@/components/animations/LetterRevealOnScroll";
import PricingSection from "../sections/pricingSection";

import { RealEstateVideographyPackages } from "@/data/pricingPackages";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";
import { TransitionLink } from "@/components/TransitionLink";

const services = [
  {
    title: "Virtual 3D Tours",
    description:
      "Experience properties like never before with immersive, interactive 3D walkthroughs. Our virtual tours allow potential buyers to explore every corner of a property at their own pace, providing a realistic and engaging experience that saves time and increases engagement.",
    image: virtual3dtours,
    href: "/virtual-3d-tours",
    darkTheme: false,
  },
  {
    title: "HDR Photography",
    description:
      "Professional HDR photography that captures the true essence of your property. By blending multiple exposures, we create stunning images that showcase both bright and shadowed areas perfectly, ensuring your property stands out with rich, true-to-life colors and exceptional detail.",
    image: hdrphotography,
    href: "/real-estate-hdr-photography",
    darkTheme: false,
  },
  {
    title: "RMS Measurements",
    description:
      "Precise property measurements and detailed floor plans that comply with RECA and ANSI standards. Our accurate documentation helps buyers understand space dimensions and layout, while ensuring you meet all regulatory requirements for property listings.",
    image: rmsmeasurements,
    href: "/rms-measurements-schematic-floor-plans",
    darkTheme: false,
  },
  {
    title: "Virtual Staging",
    description:
      "Transform empty spaces into beautifully furnished environments with our virtual staging service. Using advanced digital technology, we create realistic, professionally designed interiors that help buyers envision the full potential of any property, at a fraction of the cost of traditional staging.",
    image: virtualstaging,
    href: "/virtual-staging",
    darkTheme: false,
  },
  {
    title: "Real Estate Videography",
    description:
      "Dynamic property videos that tell your listing's unique story. From aerial drone shots to interior walk-throughs, our professional videography services combine cinematic techniques with strategic storytelling to create compelling content that captures viewer attention and drives inquiries.",
    image: highproductionvideotours,
    href: "/real-estate-videography",
    darkTheme: false,
  },
  {
    title: "Virtual Renovation",
    description:
      "Visualize property improvements without lifting a hammer. Our virtual renovation service digitally transforms outdated spaces into modern, appealing environments, helping buyers see the potential in any property while providing cost-effective marketing solutions for sellers.",
    image: socialmediacontentcreation,
    href: "/virtual-renovation",
    darkTheme: false,
  },
  {
    title: "3D Rendering",
    description:
      "Bring architectural plans and property concepts to life with photorealistic 3D renderings. Perfect for pre-construction marketing, our high-quality visualizations help clients understand spatial relationships and design features before they're built, accelerating the decision-making process.",
    image: logodesign,
    href: "/3d-rendering",
    darkTheme: false,
  },
  {
    title: "Graphic Design",
    description:
      "Stand out in the real estate market with professional graphic design services. From property brochures and marketing materials to social media content and brand identity, we create compelling visual assets that enhance your property's presentation and strengthen your marketing strategy.",
    image: customgraphicdesign,
    href: "/graphic-design",
    darkTheme: false,
  },
  {
    title: "Brochure Design",
    description:
      "Perfect for advertising high-end residential and commercial properties, provide your prospective customers with a sophisticated yet timelessly designed brochure to advertise your listing.",
    image: brochuredesign,
    href: "/graphic-design",
    darkTheme: false,
  },
];

const ServiceCard = ({
  title,
  description,
  image,
  href,
  darkTheme,
  isRight,
}) => {
  const themeClasses = darkTheme
    ? {
        bg: "bg-ash/50 group-hover:bg-ash",
        text: "text-white",
        button: "!border-white",
        arrow: arrowRedirectWhite,
        shadow: "shadow-white/5",
      }
    : {
        bg: "bg-white group-hover:bg-white",
        text: "text-black",
        button: "",
        arrow: arrowRedirect,
        shadow: "shadow-ash/5",
      };

  return (
    <div
      className={`relative group flex size-full xl:h-[40rem] max-w-[--section-width] flex-col xl:flex-row ${
        isRight ? "justify-start" : "justify-end"
      } items-end gap-[3rem] xl:gap-0`}
    >
      {/* Background Image */}
      <div className="relative aspect-video xl:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash">
        <ParallaxSection
          speed={1 - 0.95}
          data-media-wrapper
          className="size-full pointer-events-none"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="w-full h-[125%] scale-125 -translate-y-[10%] sm:group-hover:scale-110 opacity-100 sm:group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={75}
          />
        </ParallaxSection>
      </div>
      {/* Inverted Border Radius: Outside */}
      {!isRight && (
        <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 left-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4`}
          />
        </div>
      )}

      {/* Body */}
      <div
        className={`relative flex flex-col items-${
          isRight ? "start" : "end"
        } size-auto justify-end max-h-full xl:max-h-[80%] xl:max-w-[90%] xl:max-w-auto`}
      >
        {/* Inverted Border Radius: Inside Left */}
        {isRight ? (
          <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
            <div
              className={`absolute top-0 right-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4`}
            />
          </div>
        ) : (
          <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
            <div
              className={`absolute top-0 left-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4`}
            />
          </div>
        )}

        {/* Copy */}
        <div
          className={`${
            themeClasses.text
          } relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 xl:p-[2rem] ${
            themeClasses.bg
          } backdrop-blur-sm transition-all duration-500 rounded-t${
            isRight ? "r" : "l"
          }-[1rem]`}
        >
          {/* Header */}
          <SectionHeader subheading={title} className={themeClasses.text} />
          {/* Body */}
          {/* <LetterRevealOnScroll end="bottom 90%"> */}
          <p className="pn-regular-16 max-w-[43.75rem]">{description}</p>
          {/* </LetterRevealOnScroll> */}
          {/* CTA */}
          {darkTheme ? (
            <div className="flex justify-center xl:justify-start w-full">
              <HoverWrapper className={``}>
                <TransitionLink
                  href={href}
                  className="button pn-regular-16 group/cta cursor-select-hover !bg-transparent ${themeClasses.button} w-full xl:w-auto shadow-none ${themeClasses.shadow} hover:shadow-goldenrod/5"
                  passHref
                >
                  <FlipLink className="font-semibold">Learn More</FlipLink>
                  <Image
                    alt="arrow"
                    src={themeClasses.arrow}
                    className={`${themeClasses.text} group-hover/cta:rotate-45 transition-all duration-300`}
                    quality={75}
                  />
                </TransitionLink>
              </HoverWrapper>
            </div>
          ) : (
            <div className="flex justify-center xl:justify-start w-full">
              <div className="flex flex-col xl:flex-row gap-[1rem]">
                <HoverWrapper className="">
                  <TransitionLink
                    href={href}
                    className="button pn-regular-16 group/cta h-full cursor-select-hover !bg-transparent shadow-none shadow-ash/5 hover:shadow-goldenrod/5 w-full"
                    passHref
                  >
                    <FlipLink className={`flex items-center w-fit`}>
                      Learn More
                    </FlipLink>

                    <Image
                      alt="arrow"
                      src={themeClasses.arrow}
                      className={`${themeClasses.text} group-hover/cta:rotate-45 transition-all duration-300`}
                      quality={75}
                    />
                  </TransitionLink>
                </HoverWrapper>
              </div>
            </div>
          )}
        </div>
      </div>
      {isRight && (
        <div className="relative hidden xl:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 right-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4`}
          />
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => (
  <div className="z-10 relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      center
      heading="Our Services"
      subheading="Our Unlimited Services Include"
      className="text-black"
    />
    <div className="z-10 relative flex md:grid size-full max-w-[--section-width] flex-col md:grid-cols-2 xl:grid-cols-3 items-center md:items-start justify-center gap-[3rem] xl:gap-[2rem]">
      {services.map((service, index) => (
        <ScaleInVisible
          key={index + 2}
          className="flex flex-col items-center justify-center"
        >
          <ServiceCard
            key={service.title}
            {...service}
            isRight={index % 1 !== 0}
          />
        </ScaleInVisible>
      ))}
    </div>
  </div>
);

function Body() {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // const { scrollYProgress } = useScroll({
  //   target: container,

  //   offset: ["start start", "end end"],
  // });
  const scrollAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    scrollAnimationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const newProgress = self.progress;
          // Remove references to scrollAnimationRef.current as a prop or state
          // Instead, animate the WhyUsSection content element directly:
          gsap.to(contentRef.current, {
            scale: gsap.utils.interpolate(1, 0.5, newProgress),
            rotation: gsap.utils.interpolate(0, -45, newProgress),
            filter: `blur(${gsap.utils.interpolate(0, 2.5, newProgress)}px)`,
            duration: 0,
            overwrite: "auto",
          });
        },
      },
    });

    // Color Change Animation
    const triggerSection = sectionRefs.current[1]; // Only section at index 1 will be the trigger

    if (triggerSection) {
      const updateColors = (change: boolean) => {
        sectionRefs.current.forEach((section) => {
          if (section) {
            const originalColor = section.dataset.originalColor;
            const transitionColor = section.dataset.transitionColor;

            if (!originalColor || !transitionColor) {
              console.warn(
                "Original or transition color not set for section:",
                section
              );
              return;
            }

            const newColor = change ? transitionColor : originalColor;

            // Animate background color for each section
            gsap.to(section, {
              backgroundColor: newColor,
              duration: 0.5,
              ease: "power1.inOut",
            });

            // Update the color state of the ColorChangeSection component
            const sectionComponent = section as unknown as {
              setColor: (color: string) => void;
            };
            if (sectionComponent.setColor) {
              sectionComponent.setColor(newColor);
            }

            // Animate gradient colors
            const gradientElements = section.querySelectorAll(
              ".bg-gradient-to-b, .bg-gradient-to-t"
            ) as NodeListOf<HTMLElement>;
            gradientElements.forEach((el) => {
              gsap.to(el, {
                "--tw-gradient-from": `${newColor} var(--tw-gradient-from-position)`,
                duration: 0.5,
                ease: "power1.inOut",
              });
            });
          }
        });
      };

      // Create ScrollTrigger for the section at index 1 only
      ScrollTrigger.create({
        trigger: triggerSection,
        start: "top-=400px top",
        end: "bottom top",
        onEnter: () => updateColors(true),
        onLeaveBack: () => updateColors(false),
        // markers: true, // Remove in production
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <ChatWidget />
      <HeroSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="min-w-[100vw] min-h-[100vh]"
        navigation={LMSNavdockLinks}
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
      />
      <PricingSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
        noSwitch
        className="bg-white z-10"
        pricingPackages={RealEstateVideographyPackages}
      />
      <SocialProofSection
        id="socialProof1"
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
        subheading="Trusted By The Best"
        body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
      />
      <BasicSection
        id="services"
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[3] = el;
        }}
        className={``}
        content={<ServicesSection />}
      />

      <CopySection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[4] = el;
        }}
        copy={
          <>
            The gold standard in real estate
            <span className="text-goldenbrown gold-text">media</span>&
            <span className="text-goldenbrown gold-text">marketing</span>
          </>
        }
      />

      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        {/* Why Us? */}
        <WhyUsSection
          // scrollProgress={scrollAnimationRef.current}
          ref={contentRef}
          shrinkSize={0.75}
          rotationAmount={-20}
          className="z-0"
        />

        {/* Who is it for? */}
        {/* Styles? */}
        <CopySection
          className="bg-white z-10"
          copy={
            <>
              The best real estate professionals have
              <br />
              <span className="text-goldenbrown italic gold-text">
                reinvented
              </span>
              themselves and their businesses towards a
              <span className="text-goldenbrown gold-text text-nowrap">
                more substantial
              </span>
              <span className="text-goldenbrown gold-text text-nowrap">
                online presence
              </span>
            </>
          }
        />
      </div>

      <SocialProofSection full className="bg-white z-10" />
      {/* CTA */}
      <ScaleInVisible className="flex flex-col items-center justify-center">
        <CTASection className="bg-white z-10" />
      </ScaleInVisible>

      {/* Testimonials */}
      <TestimonialsSection className="bg-white z-10 relative" />

      {/* Case Studies? */}
      {/* Contact */}
      <ScaleInVisible className="flex flex-col items-center justify-center">
        <ContactSection className="bg-white z-10" />
      </ScaleInVisible>
      {/* FAQ */}
      <FAQSection faq={listingMediaFAQ} vertical className="bg-white z-10" />
    </>
  );
}

export default Body;
