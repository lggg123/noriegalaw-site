import ContactForm from './ContactForm';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/law-office.jpg"
          alt="Law Office Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Schedule a confidential consultation with our experienced legal team.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Address:</span>
                  <span>123 Legal Street, Suite 100<br />Los Angeles, CA 90001</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Phone:</span>
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <span>contact@noriegalaw.com</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">Hours:</span>
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