import SectionHeader from "@/components/ui/sectionHeader";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  className?: string;
}

function ContactSection({ className }: SectionProps) {
  return (
    <div id="contact" className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] lg:gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading="Contact"
          subheading={
            <>
              Book Your{" "}
              <span className="text-goldenbrown underline underline-offset-4">
                <motion.span
                  className="text-goldenbrown uppercase"
                  style={{
                    background:
                      "linear-gradient(90deg, #C5A05E, #FDD98A, #C5A05E)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  Free
                </motion.span>
              </span>{" "}
              Consultation With Us Today!
            </>
          }
        />

        <div className="cursor-none-hover w-full h-full min-h-[calc(66rem_+_64px)] xl:min-h-[44rem] overflow-hidden">
          <iframe
            title="calendar booking"
            src="https://api.leadconnectorhq.com/widget/booking/RQmRIEsklAtDwDvOoC3q"
            style={{
              width: "100%",
              height: "100%",
              // minHeight: "calc(44rem + 64px)",
              border: "none",
              overflow: "visible",
            }}
            scrolling="no"
            id="zIDoL2aZcFRCtxiFBaoP_1728040058508"
            className="cursor-none-hover flex bg-transparent min-h-[calc(66rem_+_64px)] xl:min-h-[calc(44rem_+_64px)] 2xl:-mt-[4rem]"
            loading="lazy" // Lazy load the iframe
          ></iframe>
          <script
            src="https://link.msgsndr.com/js/form_embed.js"
            type="text/javascript"
            defer // Defer loading of the script
          ></script>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
