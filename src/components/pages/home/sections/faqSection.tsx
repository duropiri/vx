"use client"
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SectionProps {
  className?: string;
}

const FAQ = [
  {
    question: "What does Virtual Xposure do for real estate agents?",
    answer:
      "Virtual Xposure helps real estate professionals build their online presence by managing social media accounts, creating high-quality content, and driving engagement, allowing you to focus on closing deals.",
  },
  { question: "How does Virtual Xposure improve my social media?", answer: "" },
  { question: "What kind of content does Virtual Xposure create?", answer: "" },
  {
    question: "How quickly can I see results with Virtual Xposure?",
    answer: "",
  },
  {
    question: "How does Virtual Xposure collaborate with clients?",
    answer: "",
  },
];

function FAQSection({ className }: SectionProps) {
  return (
    <div className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-row items-start justify-between gap-[4.375rem]">
        <div
          className={`flex flex-col items-start gap-y-[0.75rem] max-w-[50%] min-w-[37ch]`}
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
        </div>

        <div
          className={`relative flex size-full flex-row items-center`}
        >
          <Accordion type="single" collapsible className="flex flex-col size-full gap-[0.5rem]">
            {FAQ.map((_, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="cursor-select-hover bg-white border-none rounded-[1rem] shadow-customShadow py-[1.5rem] px-[2rem]">
                <AccordionTrigger className="pn-regular-32 hover:no-underline">{_.question}</AccordionTrigger>
                <AccordionContent className="pn-regular-16">{_.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
