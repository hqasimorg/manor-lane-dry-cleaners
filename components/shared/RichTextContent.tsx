import { PortableText } from "@portabletext/react";

interface RichTextContentProps {
  content: any[];
}

export function RichTextContent({ content }: RichTextContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-neutral-black prose-p:text-neutral-dark-grey prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-neutral-black">
      <PortableText value={content} />
    </div>
  );
}
