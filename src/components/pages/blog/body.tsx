// @/components/pages/services/body.tsx
"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import {
  BlogPost,
  client,
  contentfulLoader,
  getBlogPosts,
} from "@/lib/contentful";
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
import Image from "next/image";
import { FlipLink, HoverWrapper } from "@/components/animations/RevealLinks";

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

  // Add a state variable for the total number of posts
  const [totalCount, setTotalCount] = useState<number | null>(null);

  // On mount, fetch the total number of blog posts from Contentful
  useEffect(() => {
    async function fetchTotalCount() {
      const entries = await client.getEntries({
        content_type: "blogPost",
        limit: 1, // only need one item, the response includes a "total" property
      });
      setTotalCount(entries.total);
    }
    fetchTotalCount();
  }, []);

  // Updated handleLoadMore that checks against the totalCount
  const handleLoadMore = useCallback(async () => {
    if (!loadMorePosts || !hasMore) return;

    setIsLoading(true);
    try {
      const newPosts = await loadMorePosts();
      const updatedPosts = [...currentPosts, ...newPosts];
      setCurrentPosts(updatedPosts);
      setCurrentPage((prev) => prev + 1);

      // Use the totalCount from Contentful to determine if more posts can be loaded
      if (totalCount !== null) {
        setHasMore(updatedPosts.length < totalCount);
      } else {
        // Fallback in case totalCount is not available
        setHasMore(newPosts.length > 0);
      }
    } finally {
      setIsLoading(false);
    }
  }, [loadMorePosts, hasMore, currentPosts, totalCount]);

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
              <div className="grid grid-cols-1 gap-[1rem]">
                {currentPosts.map((post, index) => (
                  <ScaleInVisible
                    key={post.slug}
                    className="relative flex flex-col bg-ash shadow-customShadow group cursor-select-hover rounded-[1rem] overflow-hidden"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex flex-col size-full group"
                    >
                      <div
                        className={`relative flex ${
                          index % 2 == 0 ? "flex-row" : "flex-row-reverse"
                        } size-full max-h-[17.5rem]`}
                      >
                        {/* Featured Image */}
                        <div className="relative size-full flex flex-col items-center justify-center aspect-[1.2/1] overflow-hidden">
                          {/* Blur overlay */}
                          <ContentfulImage
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="absolute size-full inset-0 blur-md brightness-75 group-hover:brightness-50 transition-all duration-500"
                            aria-hidden="true"
                          />
                          <ContentfulImage
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="z-10 group-hover:scale-90 transition-transform duration-500 object-contain rounded-[1rem]"
                            priority={false}
                          />
                        </div>
                        {/* Card Details */}
                        <div className="p-6 flex flex-col size-full justify-between text-white">
                          <div className="flex flex-col items-start justify-start">
                            {/* Title */}
                            <h2 className="pn-semibold-24 mb-2 group-hover:text-goldenbrown transition-colors">
                              {post.title}
                            </h2>
                            {/* Publish Date */}
                            <div className="flex gap-[1rem] items-center pn-regular-14 text-white/60">
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
                            {/* Excerpt */}
                            <p className="pn-regular-16 line-clamp-3 mt-4">
                              {post.excerpt}
                            </p>
                          </div>
                          <a
                            href={`/blog/${post.slug}`}
                            className="flex gap-[1rem] items-center pn-regular-20 text-goldenbrown mt-4"
                          >
                            Read More{" "}
                            <div className="aspect-square w-[1.5rem] group-hover:rotate-45 transition-transform">
                              {ServiceIcons.arrow}
                            </div>
                          </a>
                        </div>
                      </div>
                    </Link>
                  </ScaleInVisible>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="text-center mt-[2rem] flex flex-col items-center justify-center">
                  <HoverWrapper
                    onClick={handleLoadMore}
                    className={`button pn-regular-16 group/cta cursor-select-hover w-full lg:w-auto shadow-customShadow shadow-white/5 hover/cta:shadow-goldenrod/5 !bg-goldenbrown !border-none text-white ${
                      isLoading && "cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <FlipLink className="font-semibold">
                      {isLoading ? "Loading..." : "Load More Posts"}
                    </FlipLink>
                    <div className="size-5 group-hover/cta:rotate-45 transition-transform duration-300">
                      {ServiceIcons.arrow}
                    </div>
                  </HoverWrapper>
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
