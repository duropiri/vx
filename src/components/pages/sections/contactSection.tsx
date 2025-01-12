import ResponsiveIframe from "@/components/ResponsiveIframe";
import SectionHeader from "@/components/ui/sectionHeader";
import React from "react";

interface SectionProps {
  className?: string;
}

/**
 * Renders the Contact section of the page.
 *
 * This component displays a header with a dynamic "Free" text animation and an iframe for calendar booking.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 * @returns {React.JSX.Element} The rendered Contact section.
 */
function ContactSection({ className }: SectionProps): React.JSX.Element {
  // Add client-side only mounting state

  // Define static iframe styles to ensure consistency
  const iframeStyles = {
    width: "100%",
    height: "100%",
    border: "none",
    overflow: "visible",
  } as const;

  return (
    <div id="contact" className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[--section-width] flex-col items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]">
        <SectionHeader
          noCenter
          heading="Contact"
          subheading={
            <>
              Book Your{" "}
              <span className="text-goldenbrown uppercase underline">Free</span>{" "}
              Consultation With Us Today!
            </>
          }
        />

        <div className="cursor-none-hover size-full overflow-hidden">
          <iframe
            title="calendar booking"
            src="https://api.leadconnectorhq.com/widget/booking/RQmRIEsklAtDwDvOoC3q"
            style={iframeStyles}
            scrolling="no"
            id="zIDoL2aZcFRCtxiFBaoP_1728040058508"
            className="cursor-none-hover flex bg-transparent min-h-[calc(80rem)] xl:min-h-[calc(70rem)] xl:-mt-[3.55rem] xl:-mb-[0.85rem] [@media(min-width:2560px)]:min-h-[calc(50.55rem)] [@media(min-width:2560px)]:-mt-[2.65rem] [@media(min-width:2560px)]:-mb-[0.65rem]"
            loading="lazy"
          />
          {/* <ResponsiveIframe
            title="calendar booking"
            src="https://api.leadconnectorhq.com/widget/booking/RQmRIEsklAtDwDvOoC3q"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
