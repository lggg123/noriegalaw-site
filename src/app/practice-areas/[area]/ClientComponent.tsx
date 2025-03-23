// src/app/practice-areas/[area]/ClientComponent.tsx
"use client"; // This directive marks the file as a client component

import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

// Function to render icon based on name
const getIcon = (iconName: string) => {
  return (
    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white">
      {iconName === 'scales' && <span className="text-xl">⚖️</span>}
      {iconName === 'gavel' && <span className="text-xl">🔨</span>}
      {iconName === 'pills' && <span className="text-xl">💊</span>}
      {iconName === 'car' && <span className="text-xl">🚗</span>}
      {iconName === 'briefcase' && <span className="text-xl">💼</span>}
      {iconName === 'home' && <span className="text-xl">🏠</span>}
    </div>
  );
};

const ClientComponent = ({ practiceArea }: { practiceArea: PracticeArea }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header Banner */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/images/courthouse.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{practiceArea.title}</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Strategic defense strategies tailored to your specific situation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <div className="flex items-center text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/practice-areas" className="hover:text-blue-700">Practice Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-700 font-medium">{practiceArea.title}</span>
          </div>
        </div>

        {/* Practice Area Details */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-700 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
              {getIcon(practiceArea.icon)}
              <span className="ml-4">{practiceArea.title}</span>
            </h2>
            <p className="text-blue-100 mt-4">{practiceArea.description}</p>
          </div>
          
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Our Defense Strategies for {practiceArea.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {practiceArea.defenseStrategies.map((strategy, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-slate-800 mb-2">{strategy.title}</h4>
                  <p className="text-slate-600">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-slate-50 p-6 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-1">Facing {practiceArea.title.toLowerCase()} charges? Get experienced defense now.</h4>
                <p className="text-slate-600">Schedule your free consultation to discuss your case in detail.</p>
              </div>
              <a 
                href="tel:6263368080" 
                className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:px-8"
              >
                Call 626-336-8080
              </a>
            </div>
          </div>
        </div>

        {/* Additional Content Section - This would be specific to the practice area */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Us for Your {practiceArea.title} Case</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <p className="text-slate-600 mb-4">
              Defending against {practiceArea.title.toLowerCase()} charges requires a deep understanding of both the legal framework and the practical realities of the criminal justice system. At Noriega Law, we combine our extensive experience with a personalized approach to ensure the best possible outcome for your case.
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">Our Approach to {practiceArea.title} Cases:</h3>
            
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Thorough investigation of all evidence and circumstances surrounding your case</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Identification of procedural errors and constitutional violations</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Exploration of all available defense strategies specific to your situation</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Aggressive negotiation for favorable plea deals when appropriate</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Prepared trial strategy if your case requires courtroom litigation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Practice Areas */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {practiceAreas
              .filter(area => area.slug !== practiceArea.slug)
              .slice(0, 3)
              .map(area => (
                <Link href={`/practice-areas/${area.slug}`} key={area.id}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                    {getIcon(area.icon)}
                    <h3 className="font-bold text-slate-800 mt-4 mb-2">{area.title}</h3>
                    <p className="text-slate-600 text-sm">{area.description.substring(0, 100)}...</p>
                    <span className="mt-4 text-blue-700 font-medium">Learn More →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-blue-700 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Face {practiceArea.title} Charges Alone</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get experienced defense from an attorney who understands the system from every angle.
          </p>
          <a 
            href="tel:6263368080" 
            className="inline-block bg-white text-blue-700 font-bold text-xl px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Call 626-336-8080 for a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;