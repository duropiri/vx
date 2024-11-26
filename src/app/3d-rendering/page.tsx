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
        title="3D Rendering"
        copy="Use 3D rendering to showcase your unbuilt property to potential tenants, buyers, and stakeholders while it’s still in the concept phase."
        detailList={[
          {
            icon: ServiceIcons.transaction,
            text: "Photo-Realistic & Affordable 3D Rendering Services",
          },
          {
            icon: ServiceIcons.clock,
            text: "7 Day Turnaround Time",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          {
            icon: ServiceIcons.guarantee,
            text: "2X Money Back Guarantee",
          },
        ]}
        cta={{ label: "Order Now", href: "/appointment-booking" }}
        src="/videos/"
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
      />
    </Page>
  );
};

export default page;
