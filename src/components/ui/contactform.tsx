import Script from "next/script";
import React from "react";

const contactform = () => {
  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/5BiXeCAT1TEN3Dh90jr2"
        style={{
          display: "none",
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "4px",
        }}
        id="polite-slide-in-right-5BiXeCAT1TEN3Dh90jr2"
        data-layout="{'id':'POLITE_SLIDE_IN','minimizedTitle':'','isLeftAligned':false,'isRightAligned':true,'allowMinimize':false}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Optin Claim"
        data-height="543"
        data-layout-iframe-id="polite-slide-in-right-5BiXeCAT1TEN3Dh90jr2"
        data-form-id="5BiXeCAT1TEN3Dh90jr2"
        title="Optin Claim"
      ></iframe>
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("Script loaded correctly");
        }}
      ></Script>
    </div>
  );
};

export default contactform;
