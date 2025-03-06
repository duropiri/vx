"use client";
import Image from "next/image";
import { contentfulLoader } from "@/lib/contentful";

interface ContentfulImageProps {
  src: string | null;
  width?: number;
  height?: number;
  quality?: number;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

const ContentfulImage = (props: ContentfulImageProps) => {
  // If src is null, don't render the image
  if (!props.src) {
    return null;
  }
  
  return <Image loader={contentfulLoader} {...props} src={props.src} />;
};

export default ContentfulImage;
