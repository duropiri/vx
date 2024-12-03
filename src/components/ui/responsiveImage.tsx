import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import { StaticImageData } from 'next/image';

interface ResponsiveImageProps extends Omit<ImageProps, 'src'> {
  src: string | StaticImageData;
  width?: number;
  height?: number;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  src,
  alt,
  width = 1080,
  height = 1080,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default ResponsiveImage;