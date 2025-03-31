// app/page.tsx
import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Virtual Xposure | Real Estate Photography Edmonton',
  description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $149.99 -- The #1 All-In-One Solution for your real estate photography and videography needs...',
  keywords: 'Virtual Xposure, real estate marketing...',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Virtual Xposure | Real Estate Photography Edmonton',
    description: 'Sell Your Listings In DAYS, Not WEEKS - For Only $149.99 -- The #1 All-In-One Solution for your real estate photography and videography needs...',
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
