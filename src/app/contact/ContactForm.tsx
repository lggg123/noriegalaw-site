'use client';

import { trackLeadConversion } from '@/lib/analytics';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    caseType: '',
    practiceArea: '',
    urgency: 'normal' as 'normal' | 'soon' | 'urgent'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '', 
          caseType: '',
          practiceArea: '',
          urgency: 'normal'
        });

        // Track the conversion
        trackLeadConversion({
          type: 'form',
          source: 'contact_form',
          metadata: {
            formType: 'contact',
            caseType: formData.caseType,
          }
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const practiceAreas = [
    'Criminal Defense',
    'DUI/DWI',
    'Traffic Violations',
    'Domestic Violence',
    'Drug Crimes',
    'Theft Crimes',
    'Assault & Battery',
    'White Collar Crimes',
    'Juvenile Defense',
    'Appeals',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        />
      </div>

      <div>
        <label htmlFor="caseType" className="block text-sm font-medium text-white">
          Type of Case
        </label>
        <select
          id="caseType"
          value={formData.caseType}
          onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        >
          <option value="">Select a case type</option>
          <option value="criminal">Criminal Law</option>
          <option value="civil">Civil Law</option>
          <option value="family">Family Law</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="practiceArea" className="block text-sm font-medium text-white">
          Practice Area
        </label>
        <select
          id="practiceArea"
          value={formData.practiceArea}
          onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        >
          <option value="">Select a practice area</option>
          {practiceAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="urgency" className="block text-sm font-medium text-white">
          Urgency
        </label>
        <select
          id="urgency"
          value={formData.urgency}
          onChange={(e) => setFormData({ ...formData, urgency: e.target.value as 'normal' | 'soon' | 'urgent' })}
          className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
          required
        >
          <option value="normal">Normal</option>
          <option value="soon">Soon</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors disabled:bg-blue-400"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Thank you for your message. We&apos;ll be in touch with you shortly!</p>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-center">There was an error sending your message. Please try again.</p>
      )}
    </form>
  );
}