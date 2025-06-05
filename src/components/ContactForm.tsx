"use client";

import { trackLeadConversion } from '@/lib/analytics';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  practiceArea?: string;
}

// Define the interface for your form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  caseType: string;
  practiceArea: string;
  urgency: 'normal' | 'soon' | 'urgent';
}

export default function ContactForm({ practiceArea }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    caseType: '',
    practiceArea: '',
    urgency: 'normal'
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
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
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
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

  // Display status message to the user
  const renderStatusMessage = () => {
    if (status === 'success') {
      return (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
        >
          <CheckCircle className="text-green-600 mr-3" size={20} />
          <div>
            <p className="text-green-800 font-medium">Message sent successfully!</p>
            <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
          </div>
        </motion.div>
      );
    }

    if (status === 'error') {
      return (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
        >
          <AlertCircle className="text-red-600 mr-3" size={20} />
          <div>
            <p className="text-red-800 font-medium">Error sending message</p>
            <p className="text-red-700 text-sm">{errorMessage}</p>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 sm:px-8 py-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get Your Free Consultation</h2>
          <p className="text-indigo-100">Fill out the form below and we'll contact you within 24 hours</p>
        </div>

        {/* Form */}
        <div className="px-6 sm:px-8 py-8">
          {renderStatusMessage()}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg p-3 sm:p-4"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg p-3 sm:p-4"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg p-3 sm:p-4"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(626) 336-8080"
              />
            </div>

            {/* Case Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="practiceArea" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Practice Area
                </label>
                <select
                  id="practiceArea"
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg p-3 sm:p-4"
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                >
                  <option value="">Select a practice area</option>
                  {practiceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  How Soon Do You Need Help?
                </label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    urgency: e.target.value as 'normal' | 'soon' | 'urgent' 
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                >
                  <option value="normal">Within a few days</option>
                  <option value="soon">Within 24 hours</option>
                  <option value="urgent">URGENT - Same day</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="caseType" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Brief Case Description
              </label>
              <input
                type="text"
                id="caseType"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg p-3 sm:p-4"
                value={formData.caseType}
                onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                placeholder="e.g., DUI arrest, assault charges, traffic ticket"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Detailed Message *
              </label>
              <textarea
                id="message"
                rows={6}
                required
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base sm:text-lg p-3 sm:p-4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please provide details about your case, including dates, charges, court information, and any specific questions you have..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base sm:text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Phone className="text-indigo-600 mr-3" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Call Now</p>
                  <a href="tel:626-336-8080" className="text-indigo-600 font-bold text-lg hover:text-indigo-800">
                    626-336-8080
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-indigo-600 mr-3" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <a href="mailto:chris@noriegalaw.com" className="text-indigo-600 hover:text-indigo-800">
                    chris@noriegalaw.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}