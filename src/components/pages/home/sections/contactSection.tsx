import React from "react";

interface SectionProps {
  className?: string;
}

function ContactSection({ className }: SectionProps) {
  return (
    <div id="contact" className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[3.75rem]">
        <div
          className={`flex flex-col items-center justify-center w-full gap-y-[0.75rem]`}
        >
          <span className="inline-block pn-semibold-16 uppercase bg-goldenbrown/25 text-ash px-[0.625rem] py-[0.5rem] rounded-[0.75rem]">
            Contact
          </span>
          <h2 className="pn-semibold-48 capitalize text-ash leading-snug">
            Book Your{" "}
            <span className="text-goldenbrown uppercase underline underline-offset-4">
              Free
            </span>{" "}
            Consultation With Us Today!
          </h2>
        </div>
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/RQmRIEsklAtDwDvOoC3q"
          style={{ width: "100%", border: "none", overflow: "hidden" }}
          scrolling="no"
          id="zIDoL2aZcFRCtxiFBaoP_1728040058508"
          className="cursor-none-hover bg-transparent rounded-[1.5rem]"
        ></iframe>
        <br />
        <script
          src="https://link.msgsndr.com/js/form_embed.js"
          type="text/javascript"
        ></script>
      </div>
    </div>
  );
}

export default ContactSection;
