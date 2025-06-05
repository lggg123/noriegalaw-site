import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Darker overlay for better contrast */}
        <Image
          src="/images/law-office.jpeg"
          alt="Law Office Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Back to Homepage Button */}
        <div className="mb-8 text-center">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-white">Contact Us</h1>
          <p className="text-lg text-gray-300 text-center mb-8">
            Schedule a confidential consultation with our experienced legal team.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Office</h2>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <span className="font-medium mr-2 text-white">Address:</span>
                  <span>201 N 1st St<br />La Puente, CA 91744</span>
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="font-medium mr-2 text-white">Phone:</span>
                  <span>(626)-336-8080</span>
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="font-medium mr-2 text-white">Email:</span>
                  <span>noriegalaw@gmail.com</span>
                </p>
                <p className="flex items-center text-gray-300">
                  <span className="font-medium mr-2 text-white">Hours:</span>
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}