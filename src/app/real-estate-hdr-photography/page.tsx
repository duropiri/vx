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
        title="Real Estate HDR Photography"
        copy="Imagine a data-driven, results-oriented team of marketing nerds completely obsessed with ensuring your listings go from AVAILABLE -> PENDING -> SOLD. That's us. Choose the Gold Standard in Real Estate Marketing, because results matter."
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
            text: "24 Hour Turnaround - Time is money. Launch your listing within one day after the photos have been taken.",
          },
          {
            icon: ServiceIcons.guarantee,
            text: "2X Money Back Guarantee - If you're not completely blown away, we'll double your investment in our services.",
          },
        ]}
        cta={{
          label: "Order Now",
          href: "https://listings.virtualxposure.com/order-forms/018e5ff1-0bc6-707e-9947-bc385f21a938",
        }}
        src="/images/real-estate-hdr-photography.jpg"
        whyusSection
        socialproofSection
        ctaSection
        testimonialsSection
      />
    </Page>
  );
};

export default page;
