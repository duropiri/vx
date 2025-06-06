"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const SupportForm = dynamic(() =>
  Promise.resolve(() => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);

    return (
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/0QEsQagx3S4w0ajMS2Zl"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "0px",
        }}
        id="inline-0QEsQagx3S4w0ajMS2Zl"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Support Ticket Form"
        data-height="809"
        data-layout-iframe-id="inline-0QEsQagx3S4w0ajMS2Zl"
        data-form-id="0QEsQagx3S4w0ajMS2Zl"
        title="Support Ticket Form"
        className="cursor-none-hover"
      />
    );
  }),
  { ssr: false }
);

export default SupportForm;