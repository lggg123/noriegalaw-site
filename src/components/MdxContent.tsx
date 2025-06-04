// src/components/MdxContent.tsx
import { ReactNode } from 'react';

interface MdxContentProps {
  children: ReactNode;
}

export default function MdxContent({ children }: MdxContentProps) {
  return (
    <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300">
      <div dangerouslySetInnerHTML={{ __html: children as string }} />
    </div>
  );
}