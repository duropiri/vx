import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import ContentfulImage from './contentfulImage';


const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      return (
        <div className="my-8">
          <ContentfulImage
            src={`${file.url}`}
            alt={description || title}
            width={file.details?.image?.width || 600} // default width
            height={file.details?.image?.height || 400} // default height
            className="rounded-lg"
          />
          {description && (
            <p className="text-center text-sm text-gray-500 mt-2">
              {description}
            </p>
          )}
        </div>
      );
    },
    // Updated hyperlink renderer:
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      // If the hyperlink's URL is a Zapier hydrate URL, simply return its children unwrapped.
      if (node.data.uri && node.data.uri.startsWith("https://zapier.com/engine/hydrate/")) {
        return children;
      }
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

interface RichTextRendererProps {
  content: any;
  className?: string;
}

export default function RichTextRenderer({ content, className }: RichTextRendererProps) {
  return (
    <div className={`prose ${className}`}>
      {documentToReactComponents(content, renderOptions)}
    </div>
  );
} 