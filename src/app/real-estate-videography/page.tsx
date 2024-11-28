import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";

import { ServiceIcons } from "@/data/serviceIcons";
import { RealEstateVideographyPackages } from "@/data/pricingPackages";

// interface SectionProps {
//   title: string;
//   copy: string;
//   detailList?: DetailItem[];
//   cta: CTA;
//   src: string;
// }

// interface CTA {
//   label: string;
//   href: string;
// }

// interface DetailItem {
//   icon: any;
//   text: string;
// }

const page = () => {
  return (
    <Page>
      <Body
        title="Best In Industry Real Estate Videography"
        copy="Capture buyers' attention with stunning visuals highlighting every detail of your property. Choose the Gold Standard in Real Estate Marketing, because results matter."
        detailList={[
          {
            icon: ServiceIcons.infinity,
            text: "Completely Unlimited - Pay one flat rate, and get everything you need to knock your next listing out of the park.",
          },
          {
            icon: ServiceIcons.thumb,
            text: "Results Oriented - Helping you to achieve a higher sales price; sell your listings faster, and provide stand-out results for your clients.",
          },
          {
            icon: ServiceIcons.timer,
            text: "48 Hour Turnaround - Time is money. Launch your listing within two days after our scheduled appointment.",
          },
          {
            icon: ServiceIcons.guarantee,
            text: "2X Money Back Guarantee - If you're not completely blown away, we'll double your investment in our services.",
          },
        ]}
        cta={{ label: "Order Now", href: "/appointment-booking" }}
        src="/videos/real-estate-videography.mp4"
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        pricing={RealEstateVideographyPackages}
      />
    </Page>
  );
};

export default page;
