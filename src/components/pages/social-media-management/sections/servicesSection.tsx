import React from "react";
import dynamic from "next/dynamic";

const Dynamic = {
  DataDrivenBento: dynamic(
    () =>
      import(
        "@/components/pages/social-media-management/sections/servicesSection/DataDrivenBento"
      ),
    {
      loading: () => <div className="min-h-[31.25rem]" />,
    }
  ),

  ContentCreationBento: dynamic(
    () =>
      import(
        "@/components/pages/social-media-management/sections/servicesSection/ContentCreationBento"
      ),
    {
      loading: () => <div className="min-h-[31.25rem]" />,
    }
  ),

  CollaborationBento: dynamic(
    () =>
      import(
        "@/components/pages/social-media-management/sections/servicesSection/CollaborationBento"
      ),
    {
      loading: () => <div className="min-h-[31.25rem]" />,
    }
  ),

  GrowthBento: dynamic(
    () =>
      import(
        "@/components/pages/social-media-management/sections/servicesSection/GrowthBento"
      ),
    {
      loading: () => <div className="min-h-[31.25rem]" />,
    }
  ),

  ScalabilityBento: dynamic(
    () =>
      import(
        "@/components/pages/social-media-management/sections/servicesSection/ScalabilityBento"
      ),
    {
      loading: () => <div className="min-h-[31.25rem]" />,
    }
  ),
};

import SectionHeader from "@/components/ui/sectionHeader";
// import DataDrivenBento from "@/components/pages/social-media-management/sections/servicesSection/DataDrivenBento";
// import ContentCreationBento from "@/components/pages/social-media-management/sections/servicesSection/ContentCreationBento";
// import CollaborationBento from "@/components/pages/social-media-management/sections/servicesSection/CollaborationBento";
// import GrowthBento from "@/components/pages/social-media-management/sections/servicesSection/GrowthBento";
// import ScalabilityBento from "@/components/pages/social-media-management/sections/servicesSection/ScalabilityBento";

interface SectionProps {
  className?: string;
}

function ServicesSection({ className }: SectionProps) {
  return (
    <div
      id="services"
      className={`section-container !pt-[6rem] xl:!pt-[3.125rem] !flex-row ${className} bg-white`}
    >
      <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          noCenter
          heading="Our Services"
          subheading="Here's what we do for our clients"
          noBodyAnimation
          body="At Virtual Xposure, we specialize in building your brand's
      digital presence, empowering realtors to thrive in today's
      competitive online marketplace. Our services cover everything from
      content creation to full-scale social media management, all backed
      by data-driven strategies to ensure results that matter."
        />

        <div className="relative flex flex-col w-full justify-start items-start gap-[1.875rem]">
          {/* xl: Upper Bentos (3) lg: Upper Bentos (2) */}
          <div className="relative flex flex-col xl:flex-row w-full xl:h-[31.25rem] justify-start items-start gap-[1.875rem]">
            <div className="flex flex-col lg:flex-row items-center justify-start w-full lg:h-[31.25rem] gap-[1.875rem] xl:contents">
              {/* Bento 1 */}
              <Dynamic.DataDrivenBento />
              {/* Bento 3 */}
              <Dynamic.CollaborationBento />
            </div>
            {/* Bento 2 */}
            <div className="flex size-full xl:contents">
              <Dynamic.ContentCreationBento />
            </div>
          </div>

          {/* xl: Lower Bentos (2) lg: Lower Bentos (1) */}
          <div className="flex flex-col xl:flex-row w-full xl:h-[31.25rem] justify-start items-start gap-[1.875rem]">
            {/* Bento 4 */}
            <Dynamic.GrowthBento />

            {/* Bento 5 */}
            <Dynamic.ScalabilityBento />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
