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
        title="RMS Measurements & Schematic Floor Plans"
        copy="With us, quality virtual staging doesn't have to break the bank. For only $25, you can get the best virtual staging results without compromising on quality."
        detailList={[
          {
            icon: ServiceIcons.timer,
            text: "24-Hour Turnaround Time",
          },
          {
            icon: ServiceIcons.thumb,
            text: "Top Tier Quality",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{ label: "Book Now", href: "/appointment-booking" }}
        src="/images/rms-measurements-schematic-floor-plans.png"
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
      />
    </Page>
  );
};

export default page;