import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";

import { ServiceIcons } from "@/data/serviceIcons";

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
        title="Visualize The Future of Real Estate Marketing"
        copy="Help buyers envision their dream home in your listing with our Virtual Renovation services."
        detailList={[
          {
            icon: ServiceIcons.priceTag,
            text: "Starting at Only $47.99 Per Image",
          },
          {
            icon: ServiceIcons.photos,
            text: "The Most Photo-Realistic & Affordable Virtual Renovation",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          {
            icon: ServiceIcons.timer,
            text: "24-48 Hour Turnaround Time",
          },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{ label: "Place an order", href: "/appointment-booking" }}
        src="/videos/virtual-3d-tours.mp4"
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
      />
    </Page>
  );
};

export default page;
