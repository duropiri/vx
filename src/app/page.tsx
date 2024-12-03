// app/page.tsx
import { Metadata } from 'next';
import { baseMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Virtual Xposure | Meet the Gold Standard in Real Estate Marketing',
  description: 'Virtual Xposure delivers cutting-edge digital marketing solutions...',
  keywords: 'Virtual Xposure, real estate marketing...',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Virtual Xposure | Meet the Gold Standard in Real Estate Marketing',
    description: 'Virtual Xposure delivers cutting-edge digital marketing solutions...',
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
