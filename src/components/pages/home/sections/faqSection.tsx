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
            <AnimatePresence>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
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
                      <AccordionTrigger className="pn-regular-32 !text-[1.714rem] lg:!text-[2rem] text-start hover:no-underline  py-[2.5rem] px-[2rem]">
                        {_.question}
                      </AccordionTrigger>
                      <AccordionContent className="pn-regular-16 pb-[2.5rem] px-[2rem]">
                        <div className="w-full h-[1px] bg-ash/10 mb-[2.5rem]"/>
                        {_.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
