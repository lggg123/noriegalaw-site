'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

const CaseEvaluationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => setIsOpen(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-2xl z-10 p-6 m-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Get a Free Case Evaluation
              </h2>
              <p className="mt-2 text-gray-600">
                Don&apos;t face legal challenges alone. Our experienced team is here to help.
              </p>
            </div>

            <div className="text-center mb-6">
              <Link href="/intake" className="text-indigo-600 hover:text-indigo-700">
                Want a more detailed evaluation? Try our Smart Intake Form →
              </Link>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Case Type</option>
                <option value="criminal">Criminal Defense</option>
                <option value="dui">DUI</option>
                <option value="drug">Drug Charges</option>
                <option value="domestic">Domestic Violence</option>
              </select>
              <textarea
                placeholder="Brief description of your case"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Request Evaluation
              </button>
            </form>

            <p className="mt-4 text-xs text-center text-gray-500">
              Free consultation. Confidential and secure.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseEvaluationPopup;