import { Metadata } from 'next'

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: 'Criminal Defense Attorney in La Puente | Law Offices of Chris Noriega',
    template: '%s | Law Offices of Chris Noriega',
  },
  description: 'Former Marine & experienced criminal defense attorney in La Puente, CA. Aggressive representation for DUI, drug charges, violent crimes & more. Available 24/7. Call (626) 336-8080 for a free consultation.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noriegalawcriminaldefense.com',
    siteName: 'Law Offices of Chris Noriega',
    images: [
      {
        url: 'https://noriegalawcriminaldefense.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Law Offices of Chris Noriega - Criminal Defense Attorney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@NoriegaLaw',
    creator: '@NoriegaLaw',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  keywords: [
    'criminal defense attorney',
    'La Puente lawyer',
    'DUI defense',
    'drug charges',
    'violent crimes defense',
    'criminal lawyer',
    'Los Angeles County',
    'Chris Noriega attorney',
    'former marine lawyer',
    'Spanish speaking attorney'
  ],
}

export const getPageMetadata = (path: string): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    '/': {
      title: 'Top-Rated Criminal Defense Attorney in La Puente | Free Consultation',
      description: 'Former Marine & experienced criminal defense lawyer serving La Puente & Los Angeles County. Available 24/7 for immediate legal help. Call (626) 336-8080 for free consultation.',
    },
    '/practice-areas': {
      title: 'Practice Areas | Criminal Defense, DUI, Drug Charges & More',
      description: 'Comprehensive criminal defense services in La Puente. DUI defense, drug charges, violent crimes, white collar crimes & juvenile cases. Free case evaluation available.',
    },
    '/about': {
      title: 'About Attorney Chris Noriega | Former Marine & Criminal Defense Lawyer',
      description: 'Meet Chris Noriega - Former Marine, experienced criminal defense attorney serving La Puente & Los Angeles County. Bilingual representation with proven success record.',
    },
    '/contact': {
      title: 'Contact Us | Free Criminal Defense Consultation | Available 24/7',
      description: 'Contact the Law Offices of Chris Noriega for immediate legal help. Free consultations available 24/7. Call (626) 336-8080 or schedule online. Serving La Puente & surrounding areas.',
    },
    '/practice-areas/criminal-defense': {
      title: 'Criminal Defense Attorney La Puente | Aggressive Legal Representation',
      description: 'Expert criminal defense representation in La Puente. Fighting for your rights in felony & misdemeanor cases. Available 24/7. Free consultation (626) 336-8080.',
    },
    '/practice-areas/dui-defense': {
      title: 'DUI Defense Lawyer La Puente | Fight Your DUI Charges',
      description: 'Experienced DUI defense attorney in La Puente. Protecting your rights & license. First-time & repeat DUI cases. Free consultation available 24/7.',
    },
  }

  return {
    ...DEFAULT_METADATA,
    ...pageMetadata[path],
  }
}