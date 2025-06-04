// src/components/MdxContent.tsx
import { ReactNode } from 'react';

interface MdxContentProps {
  children: ReactNode;
}

export default function MdxContent({ children }: MdxContentProps) {
  return (
    <div className="prose prose-lg max-w-none 
      prose-headings:text-slate-100 
      prose-h1:text-2xl prose-h1:font-bold prose-h1:text-blue-200 prose-h1:border-b prose-h1:border-indigo-500 prose-h1:pb-2
      prose-h2:text-xl prose-h2:font-semibold prose-h2:text-indigo-200 prose-h2:mt-8 prose-h2:mb-4
      prose-h3:text-lg prose-h3:font-medium prose-h3:text-purple-200 prose-h3:mt-6 prose-h3:mb-3
      prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-4
      prose-strong:text-yellow-300 prose-strong:font-semibold
      prose-em:text-blue-300 prose-em:italic
      prose-ul:text-gray-200 prose-ul:space-y-2
      prose-ol:text-gray-200 prose-ol:space-y-2
      prose-li:text-gray-200 prose-li:leading-relaxed
      prose-a:text-indigo-400 prose-a:hover:text-indigo-300 prose-a:underline
      prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-slate-800/50 prose-blockquote:p-4 prose-blockquote:italic prose-blockquote:text-blue-100
      prose-code:text-green-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded
      ">
      <div dangerouslySetInnerHTML={{ __html: children as string }} />
    </div>
  );
}