import Page from "@/components/layout/page";
import Body from "@/components/pages/faq/body";
import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Frequently Asked Questions | Virtual Xposure Real Estate Marketing",
  description: "Get answers to common questions about our real estate marketing services, pricing, turnaround times, and guarantees. Learn how Virtual Xposure helps agents sell properties faster with professional media solutions.",
  keywords: "real estate FAQ, Virtual Xposure questions, marketing service FAQs, photography pricing questions, virtual staging FAQ, 3D tour questions, real estate marketing guarantees, service turnaround times",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Frequently Asked Questions | Virtual Xposure Real Estate Marketing",
    description: "Get answers to common questions about our real estate marketing services, pricing, turnaround times, and guarantees. Learn how Virtual Xposure helps agents sell properties faster with professional media solutions.",
  },
};
