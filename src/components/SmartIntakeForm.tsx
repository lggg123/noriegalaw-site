'use client'

import { useState } from 'react';
import { Mistral } from '@mistralai/mistralai';
import { trackLeadConversion } from '@/lib/analytics';
import Link from 'next/link';

interface FormData {
  name: string;
  phone: string;
  email: string;
  caseType: string;
  description: string;
}

const SmartIntakeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    description: ''
  });
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const analyzeCase = async (description: string): Promise<string> => {
    const client = new Mistral({
      apiKey: process.env.MISTRAL_API_KEY
    });

    const response = await client.chat.complete({
      model: 'mistral-large-latest',
      messages: [
        {
          role: 'system' as const,
          content: `You are a legal intake specialist. Analyze case descriptions and provide:
          1. Case type classification
          2. Estimated complexity (Low/Medium/High)
          3. Key legal considerations
          4. Recommended next steps`
        },
        {
          role: 'user' as const,
          content: description
        }
      ]
    });

    const content = response.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error('Invalid response from AI model');
    }

    // Handle both string and ContentChunk[] responses
    if (Array.isArray(content)) {
        return content
          .filter((chunk): chunk is { type: 'text'; text: string } => chunk.type === 'text')
          .map(chunk => chunk.text)
          .join('');
    }

    return content;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAnalysis(''); // Clear previous analysis

    try {
      const analysisResult = await analyzeCase(formData.description);
      setAnalysis(analysisResult);

      // Only track conversion if we got a valid analysis
      if (analysisResult) {
        trackLeadConversion({
          type: 'form',
          source: 'smart_intake',
          metadata: {
            caseType: formData.caseType,
            complexity: analysisResult.includes('High') ? 'high' : 
                       analysisResult.includes('Medium') ? 'medium' : 'low'
          }
        });
      }
    } catch (error) {
      console.error('Analysis error:', error);
      // Consider showing error to user
      setAnalysis('Failed to analyze case. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Smart Case Evaluation</h2>
        <Link 
          href="/"
          className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Case Type
          </label>
          <select
            value={formData.caseType}
            onChange={(e) => setFormData({...formData, caseType: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            required
          >
            <option value="">Select case type</option>
            <option value="criminal">Criminal Defense</option>
            <option value="dui">DUI</option>
            <option value="drug">Drug Charges</option>
            <option value="domestic">Domestic Violence</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Case Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-md text-white font-medium ${
            isLoading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isLoading ? 'Analyzing...' : 'Get Free Case Analysis'}
        </button>
      </form>

      {analysis && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Case Analysis:</h3>
          <div className="whitespace-pre-line text-gray-700">
            {analysis}
          </div>
        </div>
      )}

      {analysis && (
        <div className="mt-6 text-center">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default SmartIntakeForm;