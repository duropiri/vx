import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/page";
import Body from "@/components/pages/listing-media/body";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Professional Real Estate Listing Media Services | Virtual Xposure",
  description: "Transform your property listings with professional HDR photography, 3D tours, virtual staging, drone footage, and more. Complete listing media packages with 48-hour turnaround and Fast‑Track MLS Guarantee.",
  keywords: "real estate listing media, property photography, 3D virtual tours, real estate videos, drone photography, virtual staging, property marketing media, listing photography, real estate marketing assets, professional listing content",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Professional Real Estate Listing Media Services | Virtual Xposure",
    description: "Transform your property listings with professional HDR photography, 3D tours, virtual staging, drone footage, and more. Complete listing media packages with 48-hour turnaround and Fast‑Track MLS Guarantee.",
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
