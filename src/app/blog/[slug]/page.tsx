// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import Page from "@/components/layout/services/page";
import {
  contentfulLoader,
  getBlogPostBySlug,
  getBlogPosts,
} from "@/lib/contentful";
import Link from "next/link";
import ContentfulImage from "@/components/ui/contentfulImage";
import RichTextRenderer from "@/components/ui/richTextRenderer";
import { ServiceIcons } from "@/data/serviceIcons";
import Image from "next/image";
import SectionHeader from "@/components/ui/sectionHeader";
import BasicHeroSection from "@/components/pages/sections/basicHeroSection";
import ScaleInVisible from "@/components/animations/ScaleInVisible";
import HeroSection from "@/components/pages/services/sections/heroSection";
import BasicSection from "@/components/pages/sections/basicSection";
import { ParallaxSection } from "@/components/animations/SmoothScrolling";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  return {
    ...baseMetadata,
    title: `Virtual Xposure Blog | ${post.title}`,
    description: post.excerpt,
    openGraph: {
      ...baseMetadata.openGraph,
      title: `Virtual Xposure Blog | ${post.title}`,
      description: post.excerpt,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : baseMetadata.openGraph.images,
    },
  };
}

function transformContent(node: any): any {
  if (Array.isArray(node)) {
    return node.map(transformContent);
  }
  if (node && typeof node === 'object') {
    if (node.nodeType === 'text' && typeof node.value === 'string') {
      const trimmed = node.value.trim();
      if (trimmed.startsWith("https://zapier.com/engine/hydrate/")) {
        // Return a node indicating an embedded asset
        return {
          nodeType: 'embedded-asset-block',
          data: {
            target: {
              fields: {
                file: { url: trimmed },
                title: 'Hydrated Image'
              },
            },
          },
          content: [],
        };
      }
    }
    if (node.content) {
      return { ...node, content: transformContent(node.content) };
    }
  }
  return node;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  const relatedPosts = await getBlogPosts({ limit: 3 });

   // Apply the transformation to post.content
   const transformedContent = transformContent(post.content);

  return (
    <Page>
      {/* Hero */}
      <div
        // ref={heroRef}
        className="w-full z-0 bg-ash"
      >
        <HeroSection
          title={post.title}
          titleClassName="text-white"
          medium={false}
          copy={
            <>
              {/* Publish Date */}
              <div className="flex gap-[1rem] items-center pn-regular-40 text-white/60">
                <div className="aspect-square w-[2rem]">
                  {ServiceIcons.calendar}
                </div>
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </>
          }
          //   detailList={detailList}
          cta={{ label: "Back to Blog Posts", href: "/blog" }}
          src={
            <ParallaxSection
              isHero
              speed={0.7}
              data-media-wrapper
              className="absolute flex size-full h-[120%] pointer-events-none"
            >
              <ContentfulImage
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover blur-md opacity-20 sm:opacity-60"
                quality={75}
                priority={false}
              />
            </ParallaxSection>
          }
        />
      </div>
      {/* Spacer div that matches hero height */}
      {/* <div style={{ height: 0 }} /> */}
      <div className="relative -mt-[4rem] z-[99] rounded-t-3xl overflow-hidden bg-white">
        {/* Header & Date */}
        <BasicSection
          //   heading="Our Story"
          className="!gap-[0.5rem]"
          contentClassName="!items-start"
          content={
            <div className="flex flex-col items-start size-full gap-[3rem]">
              {/* Content */}
              <RichTextRenderer
                className="size-full relative
              font-[var(--proxima-nova)]
              
              [&_p]:mb-[1rem]
              [&_p]:text-[1.25rem]
              
              [&_h2]:font-semibold
              [&_h2]:sm:text-[3rem]
              [&_h2]:text-[2.5rem]
              [&_h2]:mt-[2.5rem]
              [&_h2]:mb-[1.25rem]
              
              [&_h3]:text-[2rem]
              [&_h3]:mt-[2rem]
              [&_h3]:mb-[1rem]
              
              [&_table]:my-[2rem]
              [&_table]:flex
              
              [&_tbody]:w-full
              
              [&_tr]:grid
              [&_tr]:grid-cols-2
              [&_tr]:w-full
              [&_tr]:items-start
              
              [&_td]:relative
              [&_td]:h-full
              [&_td]:border
              [&_td]:align-top
              [&_td]:p-[1rem]
              [&_td]:sm:p-[1.25rem]
              [&_td>p]:text-[1.5rem]
              [&_td>p]:sticky
              [&_td>p]:top-0
              
              [&_a]:text-goldenbrown
              [&_a]:cursor-select-hover
              
              [&_div]:flex
              [&_div]:flex-col
              [&_div]:items-center
              [&_div]:justify-center
              [&_div]:overflow-hidden
              
              [&_img]:rounded-[1rem]
              [&_img]:sm:max-w-[50%]
              [&_img]:pointer-events-none
              "
                content={transformedContent}
              />
            </div>
          }
        />
      </div>

      {/* Related Posts */}
      <section className="section-container">
        <SectionHeader
          noCenter
          noAnimation
          subheading="Related Posts"
          className="text-black mb-8"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <ScaleInVisible
              key={post.slug}
              className="relative flex flex-col shadow-customShadow group cursor-select-hover rounded-[1rem] overflow-hidden"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col size-full group"
              >
                <div className="relative flex flex-col size-full">
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
                  <div className="p-6 bg-white flex flex-col min-h-[40%] justify-between">
                    <div className="flex flex-col items-start justify-start">
                      {/* Title */}
                      <h2 className="pn-semibold-24 mb-2 group-hover:text-goldenbrown transition-colors">
                        {post.title}
                      </h2>
                      {/* Publish Date */}
                      <div className="flex gap-[1rem] items-center pn-regular-14 text-ash/60">
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
      </section>
    </Page>
  );
}
