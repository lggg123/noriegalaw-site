import { practiceAreas } from './[area]/page';
import Link from 'next/link';
import Image from 'next/image';

export default function PracticeAreasPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/law-library.jpg" // You'll need to add this image to your public/images folder
          alt="Law Library Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back to Homepage Button */}
        <div className="mb-8 text-center">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Practice Areas
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Dedicated legal representation across multiple practice areas, providing experienced and strategic defense for our clients.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => (
            <Link 
              href={`/practice-areas/${area.slug}`} 
              key={area.id}
              className="group bg-slate-800/95 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-700 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {area.title}
              </h2>
              <p className="text-gray-300">
                {area.description}
              </p>
              <div className="mt-4 text-blue-400 group-hover:text-blue-300 font-medium">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}