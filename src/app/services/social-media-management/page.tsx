import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import Body from "@/components/pages/social-media-management/body";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Real Estate Social Media Management | Virtual Xposure",
  description: "Elevate your real estate brand with professional social media management. Custom content creation, strategic posting, engagement optimization, and lead generation for realtors. Let us handle your social media while you focus on selling.",
  keywords: "real estate social media, realtor social media management, property marketing social media, real estate content creation, social media strategy, realtor social media content, real estate marketing, social media for realtors",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Real Estate Social Media Management | Virtual Xposure",
    description: "Elevate your real estate brand with professional social media management. Custom content creation, strategic posting, engagement optimization, and lead generation for realtors. Let us handle your social media while you focus on selling.",
  },
};

const page = () => {
  return (
    <Page>
      <Body />
    </Page>
  );
};

export default page;
