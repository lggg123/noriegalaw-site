'use client'

import { useState } from 'react';
import { Mistral } from '@mistralai/mistralai';
import { trackLeadConversion } from '@/lib/analytics';

// Update ChatMessage type to include system role
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ContentChunk {
  text: string;
  // Add other properties if needed
}

const systemPrompt = {
    role: 'system',
    content: `You are a helpful legal assistant for the Law Offices of Chris Noriega. 
    You specialize in criminal defense, DUI cases, and related legal matters.
    Always encourage users to schedule a consultation for specific legal advice.
    Phone: (626)-336-8080`
  };

const MAX_RETRIES = 3;
const retry = async (fn: () => Promise<any>, retriesLeft: number): Promise<any> => {
  try {
    return await fn();
  } catch (error) {
    if (retriesLeft === 0) throw error;
    return retry(fn, retriesLeft - 1);
  }
};

const AIChatAssistant = () => {
  // Initialize messages state with system prompt
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'system',
      content: `You are a helpful legal assistant for the Law Offices of Chris Noriega. 
      You specialize in criminal defense, DUI cases, and related legal matters.
      Always encourage users to schedule a consultation for specific legal advice.
      Phone: (626)-336-8080`
    }
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (isLoading || !inputMessage.trim()) return;

    setIsLoading(true);
    setError(null);
    
    const newMessage: ChatMessage = {
      role: 'user',
      content: inputMessage
    };

    // Add only user message to visible messages
    setMessages(prev => [...prev.slice(1), newMessage]); // Remove system prompt from UI
    setInputMessage('');

    try {
      const client = new Mistral({
        apiKey: process.env.NEXT_PUBLIC_MISTRAL_API_KEY
      });

      // Include system prompt in API call
      const response = await retry(() => client.chat.complete({
        model: 'mistral-large-latest',
        messages: [...messages, newMessage] // This now includes system prompt
      }), MAX_RETRIES);

      const content = response.choices?.[0]?.message?.content;
      
      // Handle different content types
      const messageContent = Array.isArray(content) 
        ? content.map(chunk => chunk.text).join('')  // Handle ContentChunk[]
        : content || 'No response received';  // Handle string or undefined

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: messageContent
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Track chat interaction
      trackLeadConversion({
        type: 'chat',
        source: 'ai_assistant',
        metadata: {
          messageCount: messages.length + 1
        }
      });
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An unknown error occurred';
      
      console.error('Chat error:', errorMessage);
      setError(errorMessage);
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700"
      >
        {isOpen ? 'Close Chat' : 'Get Legal Help'}
      </button>
      
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">Legal Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            {/* Only show non-system messages in UI */}
            {messages.filter(m => m.role !== 'system').map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user' 
                    ? 'ml-auto bg-indigo-600 text-white' 
                    : 'mr-auto bg-gray-200 text-gray-800'
                } max-w-[80%] rounded-lg p-3`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-indigo-600"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className={`px-4 py-2 text-white rounded-lg ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatAssistant;