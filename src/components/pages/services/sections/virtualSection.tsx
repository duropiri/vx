"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";

import {
  ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider";

const VirtualSection = ({
  renovation = true,
  objremoval = true,
  staging = true,
  image1 = null,
  image2 = null,
}) => {
  const commonFeatures = [
    { id: 1, text: "Professional editing by experienced designers" },
    { id: 2, text: "Quick 24-hour turnaround time" },
    { id: 3, text: "Secure, encrypted file handling" },
    { id: 4, text: "Satisfaction guaranteed" },
    { id: 5, text: "High-resolution, print-ready images" },
    { id: 6, text: "MLS and RECA compliant results" },
  ];

  const services = [
    renovation && {
      id: 1,
      title: "Virtual Renovation",
      description:
        "Transform your space without the mess. Our virtual renovation service helps you visualize potential upgrades and modernizations to your property with stunning before-and-after previews. Perfect for planning bathroom remodels, kitchen updates, or whole-home makeovers. Our advanced digital tools allow you to experiment with different styles, colors, and fixtures to create your ideal look—all without lifting a hammer.",
      beforeImage: "/assets/portfolio/virtual renovation images/DEMO_(1).webp",
      afterImage: "/assets/portfolio/virtual renovation images/DEMO_(2).webp",
      features: commonFeatures,
      reversed: false,
    },
    objremoval && {
      id: 2,
      title: "Object Removal",
      description:
        "Clean, professional photos start with a clutter-free space. Our advanced digital decluttering service removes distracting items, personal belongings, and temporary fixtures from your listing photos. We help present your property in its best light by digitally clearing spaces to highlight their true potential. Perfect for occupied homes or properties mid-move.",
      beforeImage: "/assets/portfolio/virtual renovation images/DEMO_(5).webp",
      afterImage: "/assets/portfolio/virtual renovation images/DEMO_(6).webp",
      features: commonFeatures,
      reversed: true,
    },
    staging && {
      id: 3,
      title: "Virtual Staging",
      description:
        "Showcase your property's full potential without the expense of physical staging. Our virtual staging service digitally furnishes empty spaces with designer-curated furniture and décor, helping buyers envision the lifestyle your property offers. From modern minimalist to cozy traditional, we can style your space to appeal to your target market—at a fraction of the cost of traditional staging.",
      beforeImage: "/assets/portfolio/virtual staging images/DEMO_(19).webp",
      afterImage: "/assets/portfolio/virtual staging images/DEMO_(20).webp",
      features: commonFeatures,
      reversed: false,
    },
  ].filter(Boolean); // Remove falsy values

  const CompareSlider = ({ beforeImage, afterImage }) => (
    <ReactCompareSlider
      className="cursor-none-hover cursor-default rounded-[1rem] overflow-hidden shadow-customShadow size-full"
      itemOne={
        <div className="relative flex size-full">
          <Image
            src={image1 || beforeImage}
            alt="before-image"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="size-full object-cover pointer-events-none aspect-[3/2]"
            quality={75}
          />
          <span className="absolute bottom-[1rem] left-[1rem] subheading pn-semibold-16 bg-charcoal text-white opacity-80">
            Before
          </span>
        </div>
      }
      itemTwo={
        <div className="relative flex size-full">
          <Image
            src={image2 || afterImage}
            alt="after-image"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={false}
            loading={false ? "eager" : "lazy"}
            className="size-full object-cover pointer-events-none aspect-[3/2]"
            quality={75}
          />
          <span className="absolute bottom-[1rem] right-[1rem] subheading pn-semibold-16 bg-ash text-goldenrod opacity-80">
            <span className="gold-text">After</span>
          </span>
        </div>
      }
    />
  );

  const ServiceFeatures = ({ features }) => (
    <ul className="custom-bullet-list gold flex flex-col items-start space-y-[1rem] w-full">
      {features.map((feature, index) => (
        <li
          key={"service-" + index}
          className="list group flex flex-row items-center text-start gap-[1rem] xl:gap-[0.5rem]"
        >
          <p className="pn-regular-16 text-black/80 group-hover:text-black">
            {feature.text}
          </p>
        </li>
      ))}
    </ul>
  );

  const ServiceSection = ({ service }) => (
    <div
      className={`flex flex-col-reverse ${
        service.reversed ? "xl:flex-row-reverse" : "xl:flex-row"
      } size-full items-center justify-between gap-[3rem] xl:gap-[3.75rem] px-[1.5rem] py-[2rem] bg-white rounded-[1.875rem] shadow-customShadow`}
    >
      <div className="z-[999] relative flex size-full flex-col items-center xl:items-start justify-center gap-y-[2rem]">
        <SectionHeader
          noAnimation
          subheading={service.title}
          noBodyAnimation
          body={service.description}
          className="text-black"
        />
        <ServiceFeatures features={service.features} />
      </div>
      <div className="relative flex flex-col aspect-video size-full items-start justify-center rounded-[1rem]">
        <CompareSlider
          beforeImage={service.beforeImage}
          afterImage={service.afterImage}
        />
      </div>
    </div>
  );

  return (
    <div
      id="virtual"
      className="z-[999] relative flex size-full max-w-[--section-width] flex-col items-center xl:items-start justify-center gap-y-[2rem] xl:gap-y-[6rem]"
    >
      <SectionHeader
        noAnimation
        center
        heading="Virtual Enhancements"
        subheading="Virtual Enhancements On-Demand"
        className="text-black"
      />
      <div className="relative flex size-full max-w-[--section-width] flex-col items-center justify-center gap-[1.5rem] xl:gap-[3.75rem]">
        {services.map((service, index) => (
          <ServiceSection key={"services-" + index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default VirtualSection;
