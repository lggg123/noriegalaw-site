import { practiceAreas } from './[area]/page';
import Link from 'next/link';

export default function PracticeAreasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Practice Areas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practiceAreas.map((area) => (
          <Link 
            href={`/practice-areas/${area.slug}`} 
            key={area.id}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{area.title}</h2>
            <p className="text-gray-600">{area.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}