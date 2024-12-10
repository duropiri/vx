import GsapMagnetic from "@/components/animations/GsapMagnetic";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";
import React from "react";

import ScaleInVisible from "@/components/animations/ScaleInVisible";

const ScalabilityBento = () => {
  return (
    <ScaleInVisible className="group flex relative size-full h-auto max-h-[31.25rem] lg:h-full">
      <div className="flex flex-col px-[1.5rem] py-[2rem] bg-transparent rounded-[1.875rem] outline-charcoal/50 outline-dashed justify-center items-center gap-[2.75rem] overflow-hidden hover:outline-goldenrod hover:bg-goldenrod/10 transition-all duration-500 size-full">
        {/* Content */}
        <div className="flex flex-col justify-center items-center gap-[2.75rem] text-center text-ash">
          {/* Header */}
          <div className="pn-bold-40">
            <span className="group-hover:text-charcoalNavy transition-all duration-500">
              Optimized
            </span>{" "}
            for <br />
            <span className="group-hover:text-goldenbrown transition-all duration-500 group-hover:text-[3.25rem]">
              Scalability
            </span>
          </div>
          {/* Body */}
          <div className="pn-regular-16 max-w-[40ch]">
            <span className="pn-semibold-20 italic">
              Adapt as your business grows.
            </span>
            <br />
            We provide scalable marketing solutions to support your expanding
            real estate brand.
          </div>
        </div>
        {/* CTA */}
        <GsapMagnetic speed={0.5}>
          <div className="h-[60px] flex-col justify-center items-center flex">
            <HoverWrapper
              href="/"
              className="button pn-regular-16 cursor-select-hover !rounded-full !bg-transparent !border-charcoal/50 group-hover:!border-goldenbrown group-hover:text-goldenbrown xl:w-[18.75rem]"
            >
              <FlipLink className="pn-semibold-16 leading-[1rem]">
                Get Started
              </FlipLink>
            </HoverWrapper>
          </div>
        </GsapMagnetic>
      </div>
    </ScaleInVisible>
  );
};

export default ScalabilityBento;
