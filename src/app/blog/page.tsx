/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";

import Page from "@/components/layout/services/page";
import Body from "@/components/pages/blog/body";
import { getBlogPosts } from "@/lib/contentful";


export const metadata: Metadata = {
  ...baseMetadata,
  title: "Real Estate Marketing Blog | Expert Insights & Strategies | Virtual Xposure",
  description: "Stay ahead with Virtual Xposure's real estate marketing blog. Get expert tips on property photography, virtual staging, social media strategies, and cutting-edge marketing techniques to sell listings faster.",
  keywords: "real estate blog, property marketing tips, realtor content strategy, real estate photography tips, virtual staging ideas, social media for realtors, real estate SEO, property marketing trends, real estate lead generation",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Real Estate Marketing Blog | Expert Insights & Strategies | Virtual Xposure",
    description: "Stay ahead with Virtual Xposure's real estate marketing blog. Get expert tips on property photography, virtual staging, social media strategies, and cutting-edge marketing techniques to sell listings faster.",
  },
};

const page = async () => {
  const initialPosts = await getBlogPosts({ limit: 6 });

  return (
    <Page>
      <Body 
        posts={initialPosts}
        title="Real Estate Marketing Insights & News"
        copy="Explore actionable strategies and industry insights through our expert-curated blog. Discover the latest trends in property photography, virtual staging, digital marketing, and innovative technologies transforming real estate sales."
        cta={{
          label: "View All Services",
          href: "/services",
        }}
        src="/assets/portfolio/images/interior/Virtual_Xposure_-_Interior_Image_-_(8).webp"
        loadMorePosts={async () => {
          'use server';
          return getBlogPosts({ limit: 6, skip: initialPosts.length });
        }}
      />
    </Page>
  );
};

export default page;
