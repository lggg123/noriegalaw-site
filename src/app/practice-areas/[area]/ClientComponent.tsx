"use client";

import React from 'react';
import Link from 'next/link';

// Define types for our practice area data (need to repeat these in the client component)
type DefenseStrategy = {
  title: string;
  description: string;
};

type PracticeArea = {
  id: string;
  title: string;
  icon: string;
  description: string;
  defenseStrategies: DefenseStrategy[];
  slug: string;
};

// Props for the client component
type ClientComponentProps = {
  practiceArea: PracticeArea;
  allPracticeAreas: PracticeArea[]; // Add this to receive all practice areas
};

const ClientComponent: React.FC<ClientComponentProps> = ({ practiceArea, allPracticeAreas }) => {
  // Rest of your component code...
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <Link href="/practice-areas" className="text-blue-600 hover:text-blue-800">
          ← Back to all practice areas
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{practiceArea.title}</h1>
        <p className="text-lg">{practiceArea.description}</p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Defense Strategies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {practiceArea.defenseStrategies.map((strategy, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-3">{strategy.title}</h3>
              <p>{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Other Practice Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {allPracticeAreas
            .filter(area => area.slug !== practiceArea.slug)
            .slice(0, 3)
            .map(area => (
              <Link href={`/practice-areas/${area.slug}`} key={area.id}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-medium mb-3">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description.substring(0, 120)}...</p>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Schedule a Consultation</h2>
        <p className="mb-4">
          Get expert legal advice for your {practiceArea.title.toLowerCase()} case. Our experienced attorneys are ready to help.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;