// @/components/pages/services/body.tsx
"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { BlogPost, client, getBlogPosts } from "@/lib/contentful";
import Link from "next/link";
import ContentfulImage from "@/components/ui/contentfulImage";
import ScaleInVisible from "@/components/animations/ScaleInVisible";

// above-thefold static components
import HeroSection from "@/components/pages/services/sections/heroSection";
// import PricingSection from "@/components/pages/sections/pricingSection";

const Dynamic = {
  SocialProofSection: dynamic(
    () => import("@/components/pages/sections/socialProofSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
      ssr: false,
    }
  ),

  CTASection: dynamic(() => import("@/components/pages/sections/ctaSection"), {
    loading: () => <div className="min-h-[45vh]" />,
    ssr: false,
  }),

  FAQSection: dynamic(() => import("@/components/pages/sections/faqSection"), {
    loading: () => <div className="min-h-[60vh]" />,
    ssr: false,
  }),

  ContactSection: dynamic(
    () => import("@/components/pages/sections/contactSection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
      ssr: false,
    }
  ),

  TestimonialsSection: dynamic(
    () => import("@/components/pages/sections/testimonialsSection"),
    {
      loading: () => <div className="min-h-[110vh]" />,
      ssr: false,
    }
  ),

  BasicSection: dynamic(
    () => import("@/components/pages/sections/basicSection"),
    {
      loading: () => <div className="min-h-[220vh]" />,
      ssr: false,
    }
  ),

  PricingSection: dynamic(
    () => import("@/components/pages/sections/pricingSection"),
    {
      loading: () => <div className="min-h-[220vh]" />,
      ssr: false,
    }
  ),

  Basic2ColumnSection: dynamic(
    () => import("@/components/pages/sections/basic2ColumnSection"),
    {
      loading: () => <div className="min-h-[60vh]" />,
      ssr: false,
    }
  ),

  FloorplansSection: dynamic(
    () => import("@/components/pages/services/sections/floorplansSection"),
    {
      loading: () => <div className="min-h-[80vh]" />,
      ssr: false,
    }
  ),

  PhotographySection: dynamic(
    () => import("@/components/pages/services/sections/photographySection"),
    {
      loading: () => <div className="min-h-[100vh]" />,
      ssr: false,
    }
  ),

  VirtualSection: dynamic(
    () => import("@/components/pages/services/sections/virtualSection"),
    {
      loading: () => <div className="min-h-[180vh]" />,
      ssr: false,
    }
  ),
};

// Complex components
import WhyUsSection from "@/components/pages/sections/whyUsSection";
import {
  setupColorAnimation,
  cleanupGSAPAnimations,
} from "@/components/pages/sections/animations/Animations";

// Data
import { listingMediaFAQ } from "@/data/faq";
import VirtualSection from "@/components/pages/services/sections/virtualSection";
import { useViewport } from "@/contexts/ViewportContext";
import { FAQProps } from "@/components/pages/sections/faqSection";
import { PricingPackages } from "@/components/pages/sections/pricingSection";
import BasicSection from "@/components/pages/sections/basicSection";
import { ServiceIcons } from "@/data/serviceIcons";

interface SectionProps {
  title: string;
  copy: string;
  detailList?: DetailItem[];
  cta: CTA;
  src: string;

  whyusSection?: boolean;
  socialproofSection?: boolean;
  ctaSection?: boolean;
  testimonialsSection?: boolean;
  pricing?: PricingPackages;
  faq?: FAQProps[];

  whatisitSection?: React.ReactElement | React.ReactElement[];
  benefitsSection?: React.ReactElement;
  stepsSection?: React.ReactElement[];
  unlimitedSection?: React.ReactElement[];
  advantageSection?: React.ReactElement;

  staging?: boolean;
  renovation?: boolean;
  photography?: boolean;
  floorplan?: boolean;

  posts?: BlogPost[];
  loadMorePosts?: () => Promise<BlogPost[]>;
}

interface CTA {
  label: string;
  href: string;
}

interface DetailItem {
  icon: React.ReactNode; // This allows for SVG or component icons
  text: string;
}

function Body({
  title,
  copy,
  detailList,
  cta,
  src,
  whatisitSection,
  benefitsSection,
  advantageSection,
  // whyusSection,
  stepsSection,
  // socialproofSection,
  // ctaSection,
  unlimitedSection,
  // testimonialsSection,
  pricing,
  faq,
  staging,
  renovation,
  photography,
  floorplan,
  posts,
  loadMorePosts,
}: SectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  // const contentRef = useRef<HTMLDivElement>(null);
  const { windowWidth } = useViewport();
  const [currentPosts, setCurrentPosts] = useState(posts || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!container.current) return;

    // const scrollAnimation = setupScrollAnimation(
    //   container.current,
    //   contentRef.current
    // );

    const triggerSection = sectionRefs.current[1];
    if (triggerSection) {
      setupColorAnimation(triggerSection, sectionRefs.current as HTMLElement[]);
    }

    return () => {
      cleanupGSAPAnimations();
    };
  }, [windowWidth]);

  const handleLoadMore = useCallback(async () => {
    if (!loadMorePosts || !hasMore) return;

    setIsLoading(true);
    try {
      const newPosts = await loadMorePosts();
      setCurrentPosts((prev) => [...prev, ...newPosts]);
      setCurrentPage((prev) => prev + 1);
      setHasMore(newPosts.length > 0);
    } finally {
      setIsLoading(false);
    }
  }, [loadMorePosts, hasMore]);

  return (
    <>
      {/* <ChatWidget /> */}
      {/* Hero */}
      <div
        // ref={heroRef}
        className="w-full z-0 bg-ash"
      >
        <HeroSection
          title={title}
          copy={copy}
          detailList={detailList}
          cta={{ label: cta.label, href: cta.href }}
          src={src}
          // className="fixed inset-0 w-full"
        />
      </div>
      {/* Spacer div that matches hero height */}
      {/* <div style={{ height: 0 }} /> */}
      <div className="relative -mt-[4rem] z-[99] rounded-t-3xl overflow-hidden bg-white">
        <BasicSection
          className=""
          content={
            <>
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]">
                {currentPosts.map((post) => (
                  <ScaleInVisible key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <article className="relative group cursor-select-hover rounded-[1rem] overflow-hidden flex flex-col">
                        {/* Featured Image */}
                        <div className="relative aspect-square">
                          <ContentfulImage
                            src={post.featuredImage}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="object-cover"
                            priority={false}
                          />
                        </div>
                        <div className="p-6">
                          {/* Title */}
                          <h2 className="pn-semibold-24 mb-2 group-hover:text-goldenbrown transition-colors">
                            {post.title}
                          </h2>
                          {/* Excerpt */}
                          <p className="pn-regular-16 line-clamp-3">
                            {post.excerpt}
                          </p>
                          {/* Publish Date */}
                          <div className="mt-4 flex gap-[1rem] items-center pn-regular-14 text-ash/60">
                            <div className="aspect-square w-[1rem]">
                              {ServiceIcons.calendar}
                            </div>
                            <time dateTime={post.publishDate}>
                              {new Date(post.publishDate).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </time>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </ScaleInVisible>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center">
                  <button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "Loading..." : "Load More Posts"}
                  </button>
                </div>
              )}
            </>
          }
        />
      </div>
      <div
        ref={container}
        className="relative size-full bg-white max-w-[100vw]"
      >
        {/* Social Proof */}
        <Dynamic.SocialProofSection
          subheading="Trusted By The Best"
          body="The VX team have built a strong reputation in the real estate industry and earned the trust of many respected names in the business. From major developers to high-end boutique brokers, we have a wide range of clients who rely on us to get the job done right every time."
          className="bg-white z-10 relative"
        />
      </div>
      {/* CTA */}
      <div className="bg-white z-10">
        <ScaleInVisible>
          <Dynamic.CTASection className="bg-white z-10" />
        </ScaleInVisible>
      </div>

      {/* Testimonials */}
      <Dynamic.TestimonialsSection
        noCarousel
        className="bg-white z-10 relative"
      />

      {/* Case Studies? */}
      {photography && (
        <Dynamic.BasicSection
          content={<Dynamic.PhotographySection dark={false} />}
        />
      )}

      {/* Contact */}
      {/* <div className="bg-white z-10">
        <ScaleInVisible>
          <Dynamic.ContactSection className="bg-white z-10" />
        </ScaleInVisible>
      </div> */}
      {/* FAQ */}
      <Dynamic.FAQSection
        faq={faq || listingMediaFAQ}
        vertical
        className="bg-white z-10"
      />
    </>
  );
}

export default Body;
