// src/app/practice-areas/[area]/page.tsx
import React, { Suspense } from 'react';
import { NextSeo } from 'next-seo';
import {
  practiceAreaDetails,
  getJurisdictionSchema,
  getCaseResultsSchema,
  getEnhancedFAQSchema
} from '@/lib/criminal-defense';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import CallToAction from '@/components/CallToAction';
import PracticeAreaStats from '@/components/PracticeAreaStats';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

type Props = {
  params: Promise<{ area: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function PracticeAreaPage({ params }: Props) {
  const resolvedParams = await params;
  const areaKey = resolvedParams.area.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const areaDetails = practiceAreaDetails[areaKey as keyof typeof practiceAreaDetails];
  const schemas = [getJurisdictionSchema(), getCaseResultsSchema(), getEnhancedFAQSchema()];

  return (
    <>
      <NextSeo
        title={`${areaKey} Defense Attorney | Criminal Defense Expert`}
        description={areaDetails.description.slice(0, 160)}
        openGraph={{
          title: `${areaKey} Criminal Defense`,
          description: areaDetails.description.slice(0, 160),
          url: `https://yourdomain.com/practice-areas/${resolvedParams.area}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas)
        }}
      />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">{areaKey} Defense</h1>
          <p className="text-xl mb-6">{areaDetails.description}</p>
          <CallToAction variant="primary" />
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <PracticeAreaStats />
          {/* Main Content and FAQ Section */}
          <div className="grid md:grid-cols-2 gap-12 my-12">
            <section className="prose lg:prose-xl">
              <h2>Why Choose Us for Your {areaKey} Defense?</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                {areaDetails.description}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <FAQAccordion faqs={areaDetails.faqs} />
            </section>
          </div>
          {/* Contact Form Section */}
          <section className="bg-slate-100 rounded-lg p-8 my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Discuss Your {areaKey} Case With Us
            </h2>
            <ContactForm practiceArea={areaKey} />
          </section>
        </Suspense>
      </main>
    </>
  );
}

