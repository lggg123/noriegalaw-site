import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import CallToAction from '@/components/CallToAction';
import PracticeAreaStats from '@/components/PracticeAreaStats';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { practiceAreaDetails } from '@/lib/criminal-defense';

export const metadata: Metadata = {
  title: 'Violent Crimes Defense Attorney | Criminal Defense Expert',
  description: 'Expert legal defense for violent crime charges. Our experienced attorneys provide aggressive representation and protect your rights.',
};

export default function ViolentCrimesPage() {
  const areaDetails = practiceAreaDetails['Violent Crimes'];

  if (!areaDetails) {
    return <div>Practice area details not found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Violent Crimes Defense</h1>
        <p className="text-xl mb-6">{areaDetails.description}</p>
        <CallToAction variant="primary" />
      </div>

      <PracticeAreaStats />

      {/* Main Content and FAQ Section */}
      <div className="grid md:grid-cols-2 gap-12 my-12">
        <section className="prose lg:prose-xl">
          <h2>Why Choose Us for Your Violent Crimes Defense?</h2>
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
          Discuss Your Violent Crimes Case With Us
        </h2>
        <ContactForm practiceArea="Violent Crimes" />
      </section>
    </main>
  );
}