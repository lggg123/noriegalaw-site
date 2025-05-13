// src/components/MdxContent.tsx
import { ReactNode } from 'react';

interface MdxContentProps {
  children: ReactNode;
}

export default function MdxContent({ children }: MdxContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      {children}
    </div>
  );
}