import { Metadata } from 'next'

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: 'The Law Offices of Chris Noriega',
    template: '%s | The Law Offices of Chris Noriega',
  },
  description: 'Attorney Noriega provides trusted legal counsel and aggressive representation for criminal cases, including violent crimes, sex crimes, theft, DUIs, drug offenses, and gang-related allegations. With extensive experience in cases like attempted murder, assault, sexual assault, burglary, and more, he delivers strong defense strategies to protect your rights and freedom.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'The Law Offices of Chris Noriega',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Law Offices of Chris Noriega',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@legalfirm',
    creator: '@legalfirm',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['legal services', 'law firm', 'attorney', 'lawyer', 'criminal defense', 'DUI defense', 'violent crimes'],
}

export const getPageMetadata = (path: string): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    '/': {
      title: 'Professional Legal Services',
      description: 'Expert legal representation you can trust. Specialized in criminal defense law.',
    },
    '/practice-areas': {
      title: 'Practice Areas',
      description: 'Comprehensive criminal defense services including violent crimes, DUI, drug offenses, and more.',
    },
    '/about': {
      title: 'About Us',
      description: 'Learn about Attorney Noriega and our commitment to excellence in criminal defense.',
    },
    '/contact': {
      title: 'Contact Us',
      description: 'Get in touch with our legal team for a consultation. Available 24/7 for criminal defense emergencies.',
    },
  }

  return {
    ...DEFAULT_METADATA,
    ...pageMetadata[path],
  }
}