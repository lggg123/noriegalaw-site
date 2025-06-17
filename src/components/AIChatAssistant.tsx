'use client'

import { useState, useEffect } from 'react';
import { trackLeadConversion } from '@/lib/analytics';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const MAX_RETRIES = 3;
const retry = async <T,>(fn: () => Promise<T>, retriesLeft: number): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retriesLeft === 0) throw error;
    return retry(fn, retriesLeft - 1);
  }
};

const ClientOnlyMistral = () => {
  const [mounted, setMounted] = useState(false);
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
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Add this conditional return to use the mounted variable
  if (!mounted) {
    return null;
  }

  const handleSendMessage = async () => {
    if (isLoading || !inputMessage.trim()) return;

    setIsLoading(true);
    setError(null);
    
    const newMessage: ChatMessage = {
      role: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    try {
      const response = await retry(() => fetch('/api/legal-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage]
        }),
      }), MAX_RETRIES);
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      
      const messageContent = Array.isArray(content) 
        ? content.map(chunk => {
            if ('text' in chunk) {
              return chunk.text;
            } 
            return '';
          }).join('')
        : content || 'No response received';

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: messageContent
      };

      setMessages(prev => [...prev, assistantMessage]);

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
      className="bg-indigo-600 text-white p-4 rounded-full shadow-lg border border-white hover:bg-indigo-700 text-sm sm:text-base transition-transform"
    >
      {isOpen ? 'Close Chat' : 'Get Legal Help'}
    </button>
      
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 lg:w-[420px] bg-white rounded-lg shadow-xl">
          <div className="p-4 sm:p-6 border-b flex justify-between items-center bg-gradient-to-r from-indigo-600 to-blue-600">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center">
              Legal Assistant
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="h-80 sm:h-96 overflow-y-auto p-4 sm:p-6 space-y-4">
            {error && (
              <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-200">
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}
            
            {/* Add initial greeting if no messages */}
            {messages.filter(m => m.role !== 'system').length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700">Hello! I&apos;m here to help with your legal questions.</p>
                <p className="text-xs text-gray-500 mt-1">Ask me about criminal defense, DUI cases, or general legal matters.</p>
              </div>
            )}
            
            {/* Only show non-system messages in UI */}
            {messages.filter(m => m.role !== 'system').map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user' 
                    ? 'ml-auto bg-gradient-to-r from-indigo-600 to-blue-600 text-white' 
                    : 'mr-auto bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border border-gray-300'
                } max-w-[80%] rounded-lg p-3 shadow-sm`}
              >
                <div className="text-sm leading-relaxed">
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="mr-auto bg-gray-100 max-w-[80%] rounded-lg p-3 border border-gray-300">
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-6 border-t bg-gray-50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your legal question..."
                className="flex-1 p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading}
                className="px-4 sm:px-6 py-3 sm:py-4 text-white rounded-lg transition-colors text-sm sm:text-base font-medium"
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

// Use this as your exported component
const AIChatAssistant = () => {
  return <ClientOnlyMistral />;
};

export default AIChatAssistant;