'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. An attorney will respond shortly.",
        sender: 'bot'
      }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full p-5 shadow-2xl border border-slate-700/50 backdrop-blur-sm"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-20 right-0 w-96 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50"
          >
            <div className="h-96 p-6 flex flex-col">
              <div className="text-white font-semibold text-xl mb-4 border-b border-slate-700/50 pb-3">
                Legal Assistance Chat
              </div>
              <div className="flex-1 overflow-y-auto mb-4 pr-2 custom-scrollbar">
                {messages.length === 0 && (
                  <div className="text-slate-400 text-center py-6">
                    How can we help with your legal needs today?
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-3 rounded-lg ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white' 
                        : 'bg-gradient-to-r from-slate-800 to-slate-700 text-slate-200 border border-slate-600/30'
                    }`}>
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
                  placeholder="Type your message..."
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-4 py-2 rounded-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}