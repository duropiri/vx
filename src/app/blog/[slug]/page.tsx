import { Metadata } from "next";
import { baseMetadata } from "@/lib/metadata";
import dynamic from "next/dynamic";
import Page from "@/components/layout/services/page";
import Body from "@/components/pages/blog/body";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/contentful";
import Link from "next/link";
import ContentfulImage from "@/components/ui/contentfulImage";
import RichTextRenderer from '@/components/ui/richTextRenderer';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  return {
    ...baseMetadata,
    title: `${post.title} | Virtual Xposure Blog`,
    description: post.excerpt,
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${post.title} | Virtual Xposure Blog`,
      description: post.excerpt,
      images: post.featuredImage ? [{
        url: post.featuredImage,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : baseMetadata.openGraph.images,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);
  const relatedPosts = await getBlogPosts({ limit: 3 });

  return (
    <Page>
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div className="prose max-w-none">
          <RichTextRenderer content={post.content} />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <ContentfulImage
                      src={post.featuredImage}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </Page>
  );
}