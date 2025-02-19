// lib/contentful.js
import { createClient } from "contentful";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text content from Contentful
  featuredImage: string;
  author: {
    name: string;
    bio: string;
    photo: string;
  };
  publishDate: string;
  tags: string[];
}

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

interface GetBlogPostsOptions {
  limit?: number;
  skip?: number;
}

export async function getBlogPosts({ 
  limit = 6, 
  skip = 0 
}: GetBlogPostsOptions = {}): Promise<BlogPost[]> {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-fields.publishDate",
    limit,
    skip,
  });

  return entries.items.map(transformContentfulPost);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const entries = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error(`Blog post with slug "${slug}" not found`);
  }

  return transformContentfulPost(entries.items[0]);
}

function transformContentfulPost(item: any): BlogPost {
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    featuredImage: item.fields.featuredImage?.fields.file.url || '',
    author: {
      name: item.fields.author.fields.name,
      bio: item.fields.author.fields.bio,
      photo: item.fields.author.fields.photo.fields.file.url
    },
    publishDate: item.fields.publishDate,
    tags: item.fields.tags || []
  };
}

// Add this utility function
export const contentfulLoader = ({ 
  src, 
  width, 
  quality 
}: { 
  src: string; 
  width: number; 
  quality?: number 
}) => {
  return `${src}?w=${width}&q=${quality || 75}&fm=webp&fit=fill`;
};

// Add URL generator for static images
export const contentfulImageUrl = (
  src: string,
  width: number,
  quality = 75
) => {
  return `${src}?w=${width}&q=${quality}&fm=webp&fit=fill`;
};
