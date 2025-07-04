"use client";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import { TransitionLink } from "@/components/TransitionLink";
// import { useEffect, useRef } from "react";
import SectionHeader from "@/components/ui/sectionHeader";
import { ServiceIcons } from "@/data/serviceIcons";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { ReactCompareSlider } from "react-compare-slider";
// import { gsap, ScrollTrigger } from "@/utils/gsap";
// gsap.registerPlugin(ScrollTrigger);

const VirtualSection = ({
  renovation = true,
  objremoval = true,
  staging = true,
  image1 = null,
  image2 = null,
}) => {
  // const pathname = usePathname();
  // const isHomePage = pathname === "/";

  const commonFeatures = [
    { id: 1, text: "Professional editing by experienced designers" },
    { id: 2, text: "Quick 24-hour turnaround time" },
    { id: 3, text: "Secure, encrypted file handling" },
    { id: 4, text: "Satisfaction guaranteed" },
    { id: 5, text: "High-resolution, print-ready images" },
    { id: 6, text: "MLS and RECA compliant results" },
  ];

  const services = [
    staging && {
      id: 3,
      title: "Virtual Staging",
      description:
        "Showcase your property's full potential without the expense of physical staging. Our virtual staging service digitally furnishes empty spaces with designer-curated furniture and décor, helping buyers envision the lifestyle your property offers. From modern minimalist to cozy traditional, we can style your space to appeal to your target market—at a fraction of the cost of traditional staging.",
      beforeImage: "/assets/portfolio/virtual-staging-images/DEMO_ (15).webp",
      afterImage: "/assets/portfolio/virtual-staging-images/DEMO_ (16).webp",
      features: commonFeatures,
      reversed: false,
    },
    objremoval && {
      id: 2,
      title: "Object Removal",
      description:
        "Clean, professional photos start with a clutter-free space. Our advanced digital decluttering service removes distracting items, personal belongings, and temporary fixtures from your listing photos. We help present your property in its best light by digitally clearing spaces to highlight their true potential. Perfect for occupied homes or properties mid-move.",
      beforeImage: "/assets/portfolio/virtual-renovation-images/DEMO_ (5).webp",
      afterImage: "/assets/portfolio/virtual-renovation-images/DEMO_ (6).webp",
      features: commonFeatures,
      reversed: true,
    },
    renovation && {
      id: 1,
      title: "Virtual Renovation",
      description:
        "Transform your space without the mess. Our virtual renovation previews bathroom remodels, kitchen updates, and whole-home makeovers through realistic before-and-after renderings. Experiment with designs, finishes, and fixtures to plan your ideal look - all without lifting a hammer.",
      beforeImage:
        "/assets/portfolio/virtual-renovation-images/DEMO_ (12).webp",
      afterImage: "/assets/portfolio/virtual-renovation-images/DEMO_ (11).webp",
      features: commonFeatures,
      reversed: false,
    },
  ].filter(Boolean); // Remove falsy values

  const CompareSlider = ({ service }) => (
    <div className="relative w-full">
      {/* Ghost image to establish height */}
      <Image
        src={image1 || service.beforeImage}
        alt=""
        width={800}
        height={533}
        className="w-full h-auto opacity-0 pointer-events-none"
        quality={0}
      />
      <div className="absolute inset-0">
        <ReactCompareSlider
          className="cursor-none-hover cursor-default overflow-hidden w-full h-full"
          itemOne={
            <div
              className={`relative w-full h-full before:absolute ${
                service.reversed
                  ? "before:bottom-0 md:before:right-0 before:bg-gradient-to-t md:before:bg-gradient-to-l before:h-[2rem] before:w-full md:before:h-full md:before:w-[4rem]"
                  : "before:bottom-0 md:before:left-0 before:bg-gradient-to-t md:before:bg-gradient-to-r before:h-[2rem] before:w-full md:before:h-full md:before:w-[4rem]"
              } [@media(min-width:1281px)]:before:from-white before:to-transparent before:pointer-events-none before:z-10`}
            >
              <Image
                src={image1 || service.beforeImage}
                alt="before-image"
                fill
                className="object-cover w-full h-full pointer-events-none"
                quality={75}
              />
              <span
                className={`absolute bottom-[1rem] ${
                  !service.reversed ? "left-[1rem] md:left-[3rem]" : "left-[1rem]"
                } subheading pn-semibold-16 bg-charcoal text-white opacity-80`}
              >
                Before
              </span>
            </div>
          }
          itemTwo={
            <div className="relative w-full h-full">
              <Image
                src={image2 || service.afterImage}
                alt="after-image"
                fill
                className="object-cover w-full h-full pointer-events-none"
                quality={75}
              />
              <span
                className={`absolute bottom-[1rem] ${
                  service.reversed ? "right-[1rem] md:right-[3rem]" : "right-[1rem]"
                } subheading pn-semibold-16 bg-ash text-goldenrod opacity-80`}
              >
                <span className="gold-text">After</span>
              </span>
            </div>
          }
        />
      </div>
    </div>
  );

  const ServiceFeatures = ({ features }) => (
    <ul className="custom-bullet-list gold grid grid-cols-2 md:grid-cols-1 grid-rows-3 items-start gap-[1rem] w-full overflow-y-auto">
      {features.map((feature, index) => (
        <li
          key={"service-" + index}
          className="list group flex items-center text-start gap-[1rem] [@media(min-width:1281px)]:gap-[0.5rem]"
        >
          <p className="inline-block !text-[1rem] md:!text-[1.25rem] pn-regular-20 text-black/80 group-hover:text-black">
            {feature.text}
          </p>
        </li>
      ))}
    </ul>
  );

  const ServiceSection = ({ service, className = "" }) => (
    <div
      className={`${className} flex flex-col-reverse ${
        service.reversed ? "[@media(min-width:1281px)]:flex-row-reverse" : "[@media(min-width:1281px)]:flex-row"
      } size-full items-stretch justify-between bg-white md:rounded-[1rem] shadow-customShadow overflow-hidden`}
    >
      <div className="z-10 relative size-full h-auto [@media(min-width:1281px)]:max-w-[50%] flex flex-col items-center [@media(min-width:1281px)]:items-start justify-start gap-y-[2rem] p-[1rem] pb-[1.5rem] sm:px-[1.5rem] sm:py-[2rem]">
        <SectionHeader
          noCenter
          noAnimation
          subheading={service.title}
          noBodyAnimation
          body={service.description}
          className="text-black"
        />
        <ServiceFeatures features={service.features} />
      </div>
      <div className="relative flex flex-col flex-1 w-full h-full min-h-0">
        <CompareSlider service={service} />
      </div>
    </div>
  );

  return (
    <div
      id="virtual"
      className="z-10 relative flex size-full max-w-[--section-width] flex-col items-center [@media(min-width:1281px)]:items-start justify-start 1gap-y-[2rem] [@media(min-width:1281px)]:1gap-y-[6rem]"
    >
      <SectionHeader
        noAnimation
        noCenter
        heading="Virtual Enhancements"
        subheading="Virtual Enhancements On-Demand"
        className="header text-black [@media((min-width:1281px)_and_(min-height:801px))]:sticky top-[8rem] h-[7rem] mb-[2rem] md:mb-[3rem]"
      />
      <div className="relative flex w-[100vw] md:w-full md:max-w-[--section-width] flex-col items-center justify-center gap-[1.5rem] [@media(min-width:1281px)]:gap-[3.75rem]">
        {services.map((service, index) => (
          <ServiceSection
            key={"services-" + index}
            service={service}
            className="cards [@media((min-width:1281px)_and_(min-height:801px))]:sticky top-[17rem] md:top-[18rem] " // Adjust `top` to match header height
          />
        ))}
      </div>
      {/* CTA */}
      {false && (
        <div className="flex justify-center w-full mt-[2rem] [@media(min-width:1281px)]:mt-[6rem]">
          <div className="flex flex-col sm:flex-row gap-[1rem]">
            <HoverWrapper className="group/cta cursor-select-hover">
              <TransitionLink
                href="/case-studies/gallery"
                className="button !bg-goldenbrown text-white !border-none pn-regular-16 h-full shadow-customShadow shadow-ash/5 group-hover/cta:shadow-goldenrod/5 w-fit"
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

export default VirtualSection;