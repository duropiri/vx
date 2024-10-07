"use client";
import SectionHeader from "@/components/ui/sectionHeader";
import React from "react";

interface SectionProps {
  className?: string;
}

function ContactSection({ className }: SectionProps) {
  return (
    <div id="contact" className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[3.75rem]">
        {/* Header */}
        <SectionHeader
          center
          heading="Contact"
          subheading={
            <>
              Book Your{" "}
              <span className="text-goldenbrown uppercase underline underline-offset-4">
                Free
              </span>{" "}
              Consultation With Us Today!
            </>
          }
        />

        <div className="cursor-none-hover w-full h-[100rem] 2xl:h-[44rem] overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/RQmRIEsklAtDwDvOoC3q"
            style={{ width: "100%", border: "none", overflow: "visible" }}
            scrolling="no"
            id="zIDoL2aZcFRCtxiFBaoP_1728040058508"
            className="cursor-none-hover flex bg-transparent -mt-[1rem] 2xl:-mt-[4rem]"
          ></iframe>
          <br />
          <script
            src="https://link.msgsndr.com/js/form_embed.js"
            type="text/javascript"
          ></script>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
