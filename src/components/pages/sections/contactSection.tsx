import SectionHeader from "@/components/ui/sectionHeader";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Load the external script only after mounting
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  // Define static iframe styles to ensure consistency
  const iframeStyles = {
    width: "100%",
    height: "100%",
    border: "none",
    overflow: "visible",
  } as const;

  return (
    <div id="contact" className={`section-container !flex-row ${className}`}>
      <div className="relative flex size-full max-w-[87.5rem] flex-col items-start justify-between gap-[1.5rem] sm:gap-[3.75rem]">
        <SectionHeader
          center
          heading="Contact"
          subheading={
            <>
              Book Your{" "}
              <span className="text-goldenbrown underline underline-offset-2">
                {isMounted && ( // Only render motion animation on client
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
                )}
                {!isMounted && (
                  <span className="text-goldenbrown uppercase">Free</span>
                )}
              </span>{" "}
              Consultation With Us Today!
            </>
          }
        />

        <div className="cursor-none-hover size-full overflow-hidden">
          <iframe
            title="calendar booking"
            src="https://api.leadconnectorhq.com/widget/booking/NDLBHv1lTmnnLYqtDI3k"
            style={iframeStyles}
            scrolling="no"
            id="zIDoL2aZcFRCtxiFBaoP_1728040058508"
            className="cursor-none-hover flex bg-transparent min-h-[calc(55rem)] xl:min-h-[calc(60.45rem)] xl:-mt-[3.55rem] xl:-mb-[0.85rem] [@media(min-width:2560px)]:min-h-[calc(50.55rem)] [@media(min-width:2560px)]:-mt-[2.65rem] [@media(min-width:2560px)]:-mb-[0.65rem]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;