import Page from "@/components/layout/services/page";
import Body from "@/components/pages/services/body";

import { ServiceIcons } from "@/data/serviceIcons";
import { VirtualStagingPackages } from "@/data/pricingPackages";

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
        title="Virtual Staging at $25 CAD"
        copy="With us, quality virtual staging doesn't have to break the bank. For only $25, you can get the best virtual staging results without compromising on quality."
        detailList={[
          {
            icon: ServiceIcons.timer,
            text: "24-Hour Turnaround Time",
          },
          {
            icon: ServiceIcons.guarantee,
            text: "100% Satisfaction Guarantee",
          },
          { icon: ServiceIcons.thumb, text: "Top Tier Quality" },
          {
            icon: ServiceIcons.infinity,
            text: "Unlimited Revisions",
          },
        ]}
        cta={{ label: "Place an order", href: "/appointment-booking" }}
        src="/videos/"
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
        pricing={VirtualStagingPackages}
      />
    </Page>
  );
};

export default page;
