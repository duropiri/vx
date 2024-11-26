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
        title="Graphic Design"
        copy="Transform your branding, by creating visual concepts to communicate ideas that inspire, inform, and captivate consumers. From logo design and animation to social media content creation, brochures and flyers, our team has you covered."
        cta={{
          label: "Book a FREE Consultation",
          href: "/appointment-booking",
        }}
        src="/images/graphic-design.jpg"
        whyusSection
      />
    </Page>
  );
};

export default page;
