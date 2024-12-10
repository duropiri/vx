// @/components/pages/social-media-management/groups/footerGroup.tsx
import React from 'react';
import SocialProofSection from "@/components/pages/sections/socialProofSection";
import CTASection from "@/components/pages/social-media-management/sections/ctaSection";
import FAQSection from "@/components/pages/sections/faqSection";
import ContactSection from "@/components/pages/sections/contactSection";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

const FooterGroup: React.FC = () => {
  return (
    <>
      <SocialProofSection full className="bg-white z-10 min-h-[60vh]" />
      <ScaleInVisible>
        <CTASection className="bg-white z-10 min-h-[50vh]" />
      </ScaleInVisible>
      <FAQSection className="bg-white z-10 min-h-[60vh]" />
      <ScaleInVisible>
        <ContactSection className="bg-white z-10 min-h-[100vh]" />
      </ScaleInVisible>
    </>
  );
};

export default FooterGroup;