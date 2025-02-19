"use client";
import Image from "next/image";
import { contentfulLoader } from "@/lib/contentful";

interface ContentfulImageProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

const ContentfulImage = (props: ContentfulImageProps) => {
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
