import React from "react";
import GsapMagnetic from "../animations/GsapMagnetic";
import { FlipLink, HoverWrapper } from "../animations/RevealLinks";
import { motion } from "framer-motion";

function CircleCTA() {
  return (
    <GsapMagnetic speed={0.5} className="z-[100]">
      <motion.div
        // data-speed={1.1}
        className="select-none cursor-select-hover relative size-[7.5rem] mx-auto bg-goldenbrown shadow-customShadow shadow-ash/5 rounded-full border-[0.125rem] border-ash opacity-100 lg:opacity-50 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
          backgroundSize: "300% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Circular Text */}
        <svg
          className="animate-spin-slow inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" //Radius of 30, diameter of 60
              fill="none"
            />
          </defs>
          <text
            className="pn-regular-16 !text-[1.125rem] xl:!text-[1.125rem] [@media(min-width:1440px)]:!text-[1rem]"
            fontSize="4.5"
            fill="currentColor"
            letterSpacing="0.1"
          >
            <textPath href="#circlePath" startOffset="0%">
              • SEE MORE • SEE MORE
            </textPath>
          </text>
        </svg>

        <HoverWrapper
          href="#socialProof1"
          className="absolute inset-0 flex items-center justify-center"
        >
          <FlipLink className="">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.98019 19.8699V1.01367M9.98019 19.8699L18.465 11.385M9.98019 19.8699L1.49445 11.385"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </FlipLink>
        </HoverWrapper>
      </motion.div>
    </GsapMagnetic>
  );
}

export default CircleCTA;
