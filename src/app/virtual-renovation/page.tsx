"use client";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";

import { ServiceIcons } from "@/data/serviceIcons";
import { VirtualRennovationPackages } from "@/data/pricingPackages";
import SectionHeader from "@/components/ui/sectionHeader";
import Image from "next/image";
import heroImage2 from "@/../../public/images/614d398d1a34a3bb1ceff8b1_Second-floor-Masterbedroom-cam-1-1-1.png";

const WhatIsItSection = () => (
  <div className="z-[999] relative flex size-full max-w-[87.5rem] flex-col items-center sm:items-start justify-center gap-y-[2rem]">
    <div className="relative flex size-full max-w-[87.5rem] flex-col sm:flex-row items-start justify-between gap-[3rem] sm:gap-[3.75rem]">
      <div className="flex flex-col size-full items-center justify-center rounded-[1rem] overflow-hidden">
        <Image
          // data-speed={0.95}
          src={heroImage2}
          alt="hero-image"
          width={1200}
          height={600}
          className=""
          quality={80}
        />
      </div>
      <div className="relative flex size-full flex-col items-start justify-between gap-[1.5rem]">
        <SectionHeader
          heading="GROW WITH TECHNOLOGY"
          subheading="What is Virtual Renovation and Remodeling?"
          className="text-black"
        />
        <p
          className={`pn-regular-16
              max-w-[43.75rem]`}
        >
          Virtual renovation and remodeling allow you to reimagine the property
          and renovate it from top to bottom without the time and resource
          investment of a real-world renovation.
        </p>
        <p
          className={`pn-regular-16
              max-w-[43.75rem]`}
        >
          Our virtual renovation and remodeling process includes updates to
          structural elements such as flooring, walls, paint, kitchen remodels,
          drywall or ceiling updates, backyard improvements, and more.
        </p>
        <p
          className={`pn-regular-16
              max-w-[43.75rem]`}
        >
          We understand that preparing a property to appeal to different
          generations of buyers with varying tastes and design preferences can
          be challenging, and we&apos;re here to help!
        </p>
      </div>
    </div>
  </div>
);

const page = () => {
  return (
    <Page>
      <Body
        title="Visualize The Future of Real Estate Marketing"
        copy="Help buyers envision their dream home in your listing with our Virtual Renovation services."
        detailList={[
          {
            icon: ServiceIcons.priceTag,
            text: "Starting at Only $47.99 Per Image",
          },
          {
            icon: ServiceIcons.photos,
            text: "The Most Photo-Realistic & Affordable Virtual Renovation",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          {
            icon: ServiceIcons.timer,
            text: "24-48 Hour Turnaround Time",
          },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{
          label: "Place an order",
          href: "https://listings.virtualxposure.com/order",
        }}
        src="/videos/virtual-3d-tours.mp4"
        whatisitSection={<WhatIsItSection />}
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        pricing={VirtualRennovationPackages}
      />
    </Page>
  );
};

export default page;
