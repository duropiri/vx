"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/pages/listing-media/sections/heroSection";
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import CTASection from "@/components/pages/services/sections/ctaSection";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import { useScroll } from "framer-motion";
import { HeaderLinks, NavdockLinks } from "@/data/navLinks";
import ChatWidget from "@/components/ui/chatWidget";
import TestimonialsSection from "@/components/pages/sections/testimonialsSection";
import { listingMediaFAQ } from "@/data/faq";
import WhyUsSection from "@/components/pages/services/sections/whyUsSection";
import CopySection from "@/components/pages/sections/copySection";
import Image from "next/image";
import SectionHeader from "@/components/ui/sectionHeader";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import Link from "next/link";
import arrowRedirect from "@/../../public/svgs/arrow-redirect-cta.svg";
import arrowRedirectWhite from "@/../../public/svgs/arrow-redirect-cta-white.svg";

import virtual3dtours from "@/../../public/images/virtual-3d-tours.webp";
import hdrphotography from "@/../../public/images/hdr-photography.webp";
import rmsmeasurements from "@/../../public/images/rms-measurements.webp";
import virtualstaging from "@/../../public/images/virtual-staging.webp";
import hdrdronephotography from "@/../../public/images/hdr-drone-photography.webp";
import schematicfloorplans from "@/../../public/images/schematic-floor-plans.webp";
import customgraphicdesign from "@/../../public/images/custom-graphic-design.webp";
import highproductionvideotours from "@/../../public/images/high-production-video-tours.webp";
import socialmediacontentcreation from "@/../../public/images/social-media-content-creation.webp";
import brochuredesign from "@/../../public/images/brochure-design.webp";
import logodesign from "@/../../public/images/logo-design.webp";
import logoanimation from "@/../../public/images/logo-animation.webp";
import BasicSection from "@/components/pages/sections/basicSection";

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
    title: "Real Estate Videography",
    description:
      "Dynamic property videos that tell your listing's unique story. From aerial drone shots to interior walk-throughs, our professional videography services combine cinematic techniques with strategic storytelling to create compelling content that captures viewer attention and drives inquiries.",
    image: highproductionvideotours,
    href: "/real-estate-videography",
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
      className={`relative group flex size-full lg:h-[40rem] max-w-[--section-width] flex-col sm:flex-row ${
        isRight ? "justify-start" : "justify-end"
      } items-end gap-[3rem] sm:gap-0`}
    >
      {/* Background Image */}
      <div className="relative sm:absolute top-0 left-0 flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden bg-ash pointer-events-none">
        <div data-speed={0.95} data-media-wrapper className="size-full">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="w-full h-[125%] scale-125 -translate-y-[10%] group-hover:scale-110 opacity-100 group-hover:opacity-50 transition-all duration-500 object-cover"
            quality={80}
          />
        </div>
      </div>
      {/* Inverted Border Radius: Outside */}
      {!isRight && (
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 left-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4`}
          />
        </div>
      )}

      {/* Body */}
      <div
        className={`relative flex flex-col items-${
          isRight ? "start" : "end"
        } size-auto justify-end max-h-full sm:max-h-[80%] sm:max-w-[90%] md:max-w-auto`}
      >
        {/* Inverted Border Radius: Inside Left */}
        {isRight ? (
          <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
            <div
              className={`absolute top-0 right-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4`}
            />
          </div>
        ) : (
          <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
            <div
              className={`absolute top-0 left-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-l-4`}
            />
          </div>
        )}

        {/* Copy */}
        <div
          className={`${
            themeClasses.text
          } relative flex size-full flex-col items-start justify-start gap-[1.5rem] p-0 sm:p-[2rem] ${
            themeClasses.bg
          } backdrop-blur-sm transition-all duration-500 rounded-t${
            isRight ? "r" : "l"
          }-[1rem]`}
        >
          {/* Header */}
          <SectionHeader subheading={title} className={themeClasses.text} />
          {/* Body */}
          <p className="pn-regular-16 max-w-[43.75rem]">{description}</p>
          {/* CTA */}
          {darkTheme ? (
            <div className="flex justify-center sm:justify-start w-full h-[3.313rem] mt-[1rem] sm:mt-[2rem]">
              <HoverWrapper
                className={`button group/cta cursor-select-hover !bg-transparent ${themeClasses.button} w-full lg:w-auto shadow-none ${themeClasses.shadow} hover:shadow-goldenrod/5`}
              >
                <Link
                  href={href}
                  className="flex size-full items-center gap-[1rem]"
                  passHref
                >
                  <FlipLink className="font-semibold">Learn More</FlipLink>
                  <Image
                    alt="arrow"
                    src={themeClasses.arrow}
                    className={`${themeClasses.text} group-hover/cta:rotate-45 transition-all duration-300`}
                    quality={80}
                  />
                </Link>
              </HoverWrapper>
            </div>
          ) : (
            <div className="flex justify-center sm:justify-start w-full h-[3.313rem] mt-[1rem] sm:mt-[2rem]">
              <div className="flex flex-col sm:flex-row gap-[1rem]">
                <motion.div
                  className={`button group/cta !p-0 h-full cursor-select-hover !bg-transparent shadow-none shadow-ash/5 hover:shadow-goldenrod/5 w-full`}
                  // style={{
                  //   background:
                  //     "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                  //   backgroundSize: "300% 100%",
                  // }}
                  // animate={{
                  //   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  // }}
                  // transition={{
                  //   duration: 2,
                  //   ease: "linear",
                  //   repeat: Infinity,
                  // }}
                >
                  <HoverWrapper className="flex size-full items-center px-[1.5rem] py-[0.5rem]">
                    <Link
                      href={href}
                      className="flex size-full items-center gap-[1rem]"
                      passHref
                    >
                      <FlipLink className={`flex items-center w-full`}>
                        Learn More
                      </FlipLink>

                      <Image
                        alt="arrow"
                        src={themeClasses.arrow}
                        className={`${themeClasses.text} group-hover/cta:rotate-45 transition-all duration-300`}
                        quality={80}
                      />
                    </Link>
                  </HoverWrapper>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isRight && (
        <div className="relative hidden sm:flex flex-col items-start justify-start w-[1rem] h-[1rem] overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 right-0 flex flex-col ${themeClasses.bg} backdrop-blur-sm transition-all duration-500 size-[5rem] inv-rad inv-rad-t-r-4`}
          />
        </div>
      )}
    </div>
  );
};

const ServicesSection = () => (
  <div className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <SectionHeader
      center
      heading="Our Services"
      subheading="Our Unlimited Services Include"
      className="text-black"
    />
    <motion.div className="z-[999] relative flex sm:grid size-full max-w-[--section-width] flex-col sm:grid-cols-2 lg:grid-cols-3 items-center sm:items-start justify-center gap-[3rem] sm:gap-[2rem]">
      {services.map((service, index) => (
        <motion.div
          key={index + 2}
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{
            // once: true, // Only animate once
            amount: 0.3, // Trigger when 30% of element is in view
            margin: "50px", // Start animation 50px before element enters viewport
          }}
          transition={{
            delay: 0.1,
            // staggerChildren: 1,
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <ServiceCard
            key={service.title}
            {...service}
            isRight={index % 1 !== 0}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

function Body() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const triggerSection = sectionRefs.current[1]; // Only section at index 1 will be the trigger
    // const heroSection = sectionRefs.current[0];

    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

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
    };

    loadGSAP();
  }, []);

  return (
    <>
      <ChatWidget />
      <HeroSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="min-w-[100vw] min-h-[100vh]"
        navigation={NavdockLinks}
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
      />
      <SocialProofSection
        id="socialProof1"
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
        subheading="Trusted By The Best"
        body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
      />
      <BasicSection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
        className={``}
        content={<ServicesSection />}
      />

      <CopySection
        originalColor="#EFE6CF"
        transitionColor="#FFFFFF"
        className="z-10 min-w-[100vw]"
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[3] = el;
        }}
        copy={
          <>
            The gold standard in real estate
            <span className="text-goldenbrown">media</span>&
            <span className="text-goldenbrown">marketing</span>
          </>
        }
      />

      <div ref={container} className="relative h-full bg-white min-w-[100vw]">
        {/* Why Us? */}
        <WhyUsSection
          scrollYProgress={scrollYProgress}
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
              <span className="text-goldenbrown italic">reinvented</span>
              themselves and their businesses towards a
              <span className="text-goldenbrown">
                more substantial online presence
              </span>
            </>
          }
        />
      </div>

      <SocialProofSection full className="bg-white z-10" />
      {/* CTA */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
          // once: true, // Only animate once
          amount: 0.3, // Trigger when 30% of element is in view
          margin: "50px", // Start animation 50px before element enters viewport
        }}
        transition={{
          delay: 0.1,
          // staggerChildren: 1,
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <CTASection className="bg-white z-10" />
      </motion.div>

      {/* Testimonials */}
      <TestimonialsSection className="bg-white z-10 relative" />

      {/* Case Studies? */}
      {/* Contact */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{
          // once: true, // Only animate once
          amount: 0.3, // Trigger when 30% of element is in view
          margin: "50px", // Start animation 50px before element enters viewport
        }}
        transition={{
          delay: 0.1,
          // staggerChildren: 1,
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <ContactSection className="bg-white z-10" />
      </motion.div>
      {/* FAQ */}
      <FAQSection faq={listingMediaFAQ} vertical className="bg-white z-10" />
    </>
  );
}

export default Body;
