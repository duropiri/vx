"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/sectionHeader";

interface SectionProps {
  className?: string;
}

const FAQ = [
  {
    question: "What does Virtual Xposure do for real estate agents?",
    answer:
      "Virtual Xposure helps real estate professionals build their online presence by managing social media accounts, creating high-quality content, and driving engagement, allowing you to focus on closing deals.",
  },
  {
    question: "How does Virtual Xposure improve my social media?",
    answer:
      "We improve your social media by developing a tailored strategy that resonates with your target audience. From crafting compelling posts to engaging visuals, we ensure your content stands out and attracts attention, helping you grow a loyal following and generate leads.",
  },
  {
    question: "What kind of content does Virtual Xposure create?",
    answer:
      "Virtual Xposure specializes in creating visually stunning and informative content, including property showcases, client testimonials, market insights, and lifestyle-related posts. Our content not only showcases your listings but also builds your brand's credibility and trust with your audience.",
  },
  {
    question: "How quickly can I see results with Virtual Xposure?",
    answer:
      "While every market and audience is different, most clients start seeing increased engagement and improved social media metrics within the first 30-60 days. Long-term growth, including lead generation and brand recognition, typically follows as the strategy takes hold.",
  },
  {
    question: "How does Virtual Xposure collaborate with clients?",
    answer:
      "We take a collaborative approach by maintaining regular communication through meetings, feedback sessions, and progress updates. This ensures our strategy aligns with your business goals and that we're consistently adjusting to meet your needs.",
  },
];

function FAQSection({ className }: SectionProps) {
  return (
    <div className={`section-container !flex-row ${className}`}>
      <div className="relative flex flex-col lg:flex-row size-full max-w-[87.5rem] items-start justify-between gap-[4.375rem]">
        {/* Header */}
        <SectionHeader
          small
          heading="Got Questions?"
          subheading="Frequently Asked Questions"
          body={
            <>
              If you have any further questions, please don't hesitate to reach
              out to our{" "}
              <span className="pn-bold-16 text-goldenbrown">
                customer support
              </span>{" "}
              team for assistance.
            </>
          }
        />
        {/* <div
          className={`flex flex-col items-center lg:items-start justify-center lg:justify-start gap-y-[0.75rem] min-w-[37ch] text-center lg:text-start`}
        >
          <span className="inline-block pn-semibold-16 uppercase bg-goldenbrown/25 text-ash px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
            Got Question?
          </span>
          <h2 className="pn-semibold-48 text-ash leading-snug max-w-[15ch]">
            Frequently Asked Questions
          </h2>
          <p className="pn-regular-16 max-w-[37ch]">
            If you have any further questions, please don't hesitate to reach
            out to our{" "}
            <span className="pn-bold-16 text-goldenbrown">
              customer support
            </span>{" "}
            team for assistance.
          </p>
        </div> */}
        {/* <div
          className={`flex flex-col items-center justify-center lg:items-start w-full gap-y-[0.75rem] lg:max-w-[50%] min-w-[37ch]`}
        >
          <span className="inline-block pn-semibold-16 uppercase bg-goldenbrown/25 text-ash px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
            Got Question?
          </span>
          <h2 className="pn-semibold-48 capitalize text-ash text-center lg:text-start">
            Frequently Asked Questions
          </h2>
          <p className="pn-regular-16 max-w-[43.75rem] text-center lg:text-start">
            If you have any further questions, please don't hesitate to reach
            out to our{" "}
            <span className="pn-bold-16 text-goldenbrown">
              customer support
            </span>{" "}
            team for assistance.
          </p>
        </div> */}

        <div className={`relative flex size-full flex-row items-center`}>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col size-full gap-[0.5rem]"
          >
            {FAQ.map((_, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="cursor-select-hover bg-white border-none rounded-[1rem] shadow-customShadow py-[1.5rem] px-[2rem]"
              >
                <AccordionTrigger className="pn-regular-32 hover:no-underline">
                  {_.question}
                </AccordionTrigger>
                <AccordionContent className="pn-regular-16">
                  {_.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
