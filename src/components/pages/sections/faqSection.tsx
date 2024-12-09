"use client";
import React, { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/sectionHeader";


interface SectionProps {
  className?: string;
  vertical?: boolean;
  faq?: FAQProps[];
  noAnimation?: boolean;
}

interface FAQProps {
  question: string;
  answer: string;
}

import { FAQ } from "@/data/faq";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

function FAQSection({
  className,
  vertical = false,
  faq = FAQ,
  noAnimation = false,
}: SectionProps) {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: false, amount: 0.2 });
  // const controls = useAnimation();

  // React.useEffect(() => {
  //   if (isInView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [isInView, controls]);

  return (
    <div id="faqs" className={`${className} section-container !flex-row`}>
      <div
        className={`relative flex flex-col ${
          vertical ? "items-center" : "lg:flex-row items-start"
        } size-full max-w-[--section-width] justify-between gap-[4.375rem]`}
      >
        {/* Header */}
        <SectionHeader
          noAnimation={noAnimation}
          center={vertical}
          small={!vertical}
          heading="Got Questions?"
          subheading="Frequently Asked Questions"
          noBodyAnimation
          body={
            <>
              If you have any further questions, please don&apos;t hesitate to
              reach out to our{" "}
              <span className="pn-bold-16 text-goldenbrown">
                customer support
              </span>{" "}
              team for assistance.
            </>
          }
        />

        <div
          ref={ref}
          className={`relative flex size-full flex-row items-center`}
        >
          <Accordion.Root
            type="single"
            collapsible
            className="flex flex-col size-full gap-[0.5rem]"
          >
            {faq.map((_, index) => (
              <ScaleInVisible key={index}>
                <Accordion.Item
                  value={`item-${index}`}
                  className="cursor-select-hover bg-white border-none rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125]"
                >
                  <Accordion.Header>
                    <AccordionTrigger className="pn-regular-24 text-start hover:no-underline gap-[1rem] py-[2.5rem] px-[2rem]">
                      {_.question}
                    </AccordionTrigger>
                  </Accordion.Header>
                  <AccordionContent className="pn-regular-16 pb-[2.5rem] px-[2rem]">
                    <div className="w-full h-[0.055rem] bg-ash/10 mb-[2.5rem]" />
                    {_.answer}
                  </AccordionContent>
                </Accordion.Item>
              </ScaleInVisible>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
