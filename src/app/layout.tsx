// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { getLawFirmSchema } from '@/lib/schema';
import { Metadata, Viewport } from 'next'
import { DEFAULT_METADATA } from '@/lib/seo-config'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = DEFAULT_METADATA

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLawFirmSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}