import React, { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/sectionHeader";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";

interface SectionProps {
  className?: string;
}

import { FAQ } from "@/data/faq";

function FAQSection({ className }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          <Accordion
            type="single"
            collapsible
            className="flex flex-col size-full gap-[0.5rem]"
          >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                whileInView="visible"
                className="flex flex-col size-full gap-[0.5rem]"
              >
                {FAQ.map((_, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="cursor-select-hover bg-white border-none rounded-[1rem] shadow-customShadow transition-all duration-300 hover:shadow-goldenbrown/25 hover:scale-[1.0125]"
                    >
                      <AccordionTrigger className="pn-regular-32 !text-[1.714rem] lg:!text-[2rem] text-start hover:no-underline gap-[1rem] py-[2.5rem] px-[2rem]">
                        {_.question}
                      </AccordionTrigger>
                      <AccordionContent className="pn-regular-16 pb-[2.5rem] px-[2rem]">
                        <div className="w-full h-[0.055rem] bg-ash/10 mb-[2.5rem]" />
                        {_.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </motion.div>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;