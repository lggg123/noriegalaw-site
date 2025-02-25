// src/lib/schema/attorney.ts
import { WithContext, Attorney, FAQPage } from 'schema-dts';

export const getAttorneySchema = (): WithContext<Attorney> => ({
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Attorney Noriega',
  description: 'Experienced criminal defense attorney handling serious felonies, violent crimes, drug offenses, and DUI cases.',
  url: 'https://yourdomain.com',
  image: 'https://yourdomain.com/attorney-noriega.jpg',
  telephone: '+1-555-123-4567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Legal Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US'
  },
  areaServed: {
    '@type': 'State',
    name: 'California'
  },
  knowsAbout: [
    'Criminal Defense',
    'Violent Crimes Defense',
    'Sexual Assault Defense',
    'Drug Crime Defense',
    'DUI Defense',
    'Domestic Violence Defense',
    'Gang-Related Cases',
    'Property Crimes',
    'White Collar Crime'
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'State Bar License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'State Bar of California'
    }
  }
});

// Practice area specific schema
export const getPracticeAreaSchema = (areaName: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: `${areaName} Defense`,
  provider: getAttorneySchema(),
  serviceType: 'Criminal Defense',
  description: getPracticeAreaDescription(areaName),
  url: `https://yourdomain.com/practice-areas/${areaName.toLowerCase().replace(' ', '-')}`,
});

// Helper function for practice area descriptions
const getPracticeAreaDescription = (area: string): string => {
  const descriptions: Record<string, string> = {
    'Violent Crimes': 'Experienced defense for attempted murder, assault with great bodily injury (GBI), and other violent crime charges.',
    'Sexual Offenses': 'Strategic defense representation in cases involving sexual assault and related charges.',
    'Drug Crimes': 'Comprehensive defense for drug possession, distribution, and intent to sell charges.',
    'DUI': 'Aggressive DUI defense protecting your rights and driving privileges.',
    'Domestic Violence': 'Thoughtful representation in domestic violence cases with focus on both legal defense and family impact.',
    'Gang Cases': 'Specialized defense for gang-related charges with deep understanding of gang enhancements and laws.',
    'Property Crimes': 'Expert defense for burglary, robbery, grand theft, and embezzlement charges.',
  };
  return descriptions[area] || 'Expert criminal defense representation';
};

// FAQ Schema
export const getFAQSchema = (): WithContext<FAQPage> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do if I\'ve been arrested?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exercise your right to remain silent and immediately request an attorney. Do not discuss your case with anyone but your lawyer.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can you take my case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide immediate response for criminal cases and can begin working on your defense right away. Available 24/7 for emergency situations.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle serious felony cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Attorney Noriega has extensive experience handling serious felony cases including attempted murder, sexual assault, and gang-related charges.'
      }
    },
  ]
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Review Schema (following legal ethics guidelines)
export const getReviewSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewAspect: 'Criminal Defense Services',
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1'
  },
  author: {
    '@type': 'Person',
    name: 'Anonymous Client'
  },
  reviewBody: 'Attorney Noriega provided excellent representation. Professional, knowledgeable, and dedicated to my case.',
  publisher: {
    '@type': 'Organization',
    name: 'Law Offices of Attorney Noriega'
  }
});