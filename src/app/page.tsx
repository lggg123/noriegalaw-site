'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CallToAction from '@/components/CallToAction'
import FAQAccordion from '@/components/FAQAccordion'
import PracticeAreaStats from '@/components/PracticeAreaStats'
import ChatWidget from '@/components/ChatWidget'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import { getLawFirmSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'What is the process for a violent crimes defense?',
    answer: 'The process involves gathering evidence, consulting with legal experts, and preparing a strong defense strategy.'
  },
  {
    question: 'How long does a violent crimes case take to resolve?',
    answer: 'The duration can vary widely depending on the complexity of the case and the court schedule.'
  }
];

const testimonials = [
  {
    id: 1,
    name: "John D.",
    text: "Exceptional defense strategy that helped resolve my case.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah M.",
    text: "Professional and understanding throughout the entire process.",
    rating: 5
  },
  // Add more testimonials as needed
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div className="min-h-screen bg-[url('/images/scales-of-justice-bg.jpg')] bg-cover bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-70 before:z-0 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLawFirmSchema()),
        }}
      />
      <main className="container mx-auto p-4 relative z-10">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 text-white rounded-xl shadow-2xl backdrop-blur-sm border border-slate-700/50">
          <div className="px-6 py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-50 via-white to-slate-100">
                Expert Legal Defense When You Need It Most
              </h1>
              <p className="text-xl mb-10 text-slate-300">
                We provide top-notch legal services for various practice areas, 
                including violent crimes defense.
              </p>
              <CallToAction variant="primary" />
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <motion.section 
          ref={ref}
          className="container mx-auto px-4 py-24 mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              What Our Clients Say
            </h2>
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-10 border border-slate-700/50">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </motion.section>

       {/* FAQ Section */}
        <motion.section
          className="container mx-auto px-4 py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Frequently Asked Questions
            </h2>
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-10 border border-slate-700/50">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Our Track Record
            </h2>
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-10 border border-slate-700/50">
              <PracticeAreaStats />
            </div>
          </div>
        </section>

        {/* Chat Widget */}
        <div className="fixed bottom-8 right-8 z-50">
          <ChatWidget />
        </div>
      </main>
    </div>
  )
}
