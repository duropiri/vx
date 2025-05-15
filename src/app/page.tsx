// app/page.tsx
import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Virtual Xposure | Real Estate Photography Edmonton',
  description: 'Virtual Xposure - Edmonton Real Estate Photography & Videography: Sell Your Listings in DAYS, Not WEEKS. Expert property photos, 3D tours, video walk-throughs, and virtual staging starting at $149.99. Increase engagement and close deals faster.',
  keywords: 'Edmonton real estate photography, property videography, 3D virtual tours, virtual staging, listing photography, Virtual Xposure',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Virtual Xposure | Real Estate Photography Edmonton',
    description: 'Virtual Xposure - Edmonton Real Estate Photography & Videography: Sell Your Listings in DAYS, Not WEEKS. Expert property photos, 3D tours, video walk-throughs, and virtual staging starting at $149.99. Increase engagement and close deals faster.',
  },
};
import Page from "@/components/layout/page";
import Body from "@/components/pages/home/body";

export default function Home() {
  return (
    <Page>
      <Body />
    </Page>
  );
}
