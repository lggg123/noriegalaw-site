// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { getLawFirmSchema } from '@/lib/schema';
import { Metadata, Viewport } from 'next'
import { DEFAULT_METADATA } from '@/lib/seo-config'
import './globals.css'
import Script from 'next/script';
import AIChatAssistant from '@/components/AIChatAssistant';
import Footer from '@/components/Footer';
import CaseEvaluationPopup from '@/components/CaseEvaluationPopup';

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
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <AIChatAssistant />
        <Footer />
        <CaseEvaluationPopup />
      </body>
    </html>
  );
}