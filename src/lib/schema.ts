// src/lib/schema.ts
import { Organization, WithContext, Article } from 'schema-dts';

export const getLawFirmSchema = (): WithContext<Organization> => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Legal Firm Name',
  description: 'Expert legal services providing comprehensive representation in corporate, family, and civil rights law.',
  url: 'https://yourdomain.com',
  logo: 'https://yourdomain.com/logo.png',
  sameAs: [
    'https://www.facebook.com/legalfirm',
    'https://www.linkedin.com/company/legalfirm',
    'https://twitter.com/legalfirm'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Legal Street',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7128',
    longitude: '-74.0060'
  },
  telephone: '+1-555-123-4567',
  email: 'contact@legalfirm.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060'
    },
    geoRadius: '50000'
  }
});

export const getLegalServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Legal Service',
  ...service,
  provider: {
    '@type': 'LegalService',
    name: 'Legal Firm Name'
  }
});

export const getBlogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}): WithContext<Article> => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  image: post.imageUrl,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: {
    '@type': 'Person',
    name: post.authorName
  },
  publisher: {
    '@type': 'Organization',
    name: 'Legal Firm Name',
    logo: {
      '@type': 'ImageObject',
      url: 'https://yourdomain.com/logo.png'
    }
  }
});