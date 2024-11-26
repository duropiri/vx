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
        title="Virtual 3D Tours"
        copy="Showcase your property like never before with a Virtual 3D Tour! Highlight every aspect of the space, offering your audience an accurate and immersive experience that reveals the property's true character."
        detailList={[
          {
            icon: ServiceIcons.transaction,
            text: "Quick & Easy, No Additional Time Committment Required",
          },
          {
            icon: ServiceIcons.share,
            text: "Easily Share Over Social Media",
          },
          { icon: ServiceIcons.infinity, text: "Unlimited Revisions" },
          { icon: ServiceIcons.guarantee, text: "2X Money Back Guarantee" },
        ]}
        cta={{ label: "Book Now", href: "/appointment-booking" }}
        src="/videos/virtual-3d-tours.mp4"
        whyusSection
      />
    </Page>
  );
};

export default page;
