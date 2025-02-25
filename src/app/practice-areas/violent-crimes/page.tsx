// src/app/practice-areas/violent-crimes/page.tsx
import { NextSeo } from 'next-seo';
import { 
  getPracticeAreaSchema, 
  getFAQSchema, 
  getBreadcrumbSchema 
} from '@/lib/attorney';

export default function ViolentCrimesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://yourdomain.com' },
    { name: 'Practice Areas', url: 'https://yourdomain.com/practice-areas' },
    { name: 'Violent Crimes Defense', url: 'https://yourdomain.com/practice-areas/violent-crimes' }
  ];

  return (
    <>
      <NextSeo
        title="Violent Crimes Defense Attorney | Experienced Criminal Defense"
        description="Aggressive defense for violent crime charges including attempted murder, assault with GBI, and related offenses. Experienced criminal defense attorney."
        openGraph={{
          title: 'Violent Crimes Defense Attorney',
          description: 'Strategic defense for serious violent crime charges.',
          url: 'https://yourdomain.com/practice-areas/violent-crimes',
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getPracticeAreaSchema('Violent Crimes'),
            getBreadcrumbSchema(breadcrumbItems),
            getFAQSchema()
          ])
        }}
      />
      <main>
        <h1>Violent Crimes Defense Attorney</h1>
        {/* Page content */}
      </main>
    </>
  );
}