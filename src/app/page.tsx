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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLawFirmSchema()),
        }}
      />
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white rounded-lg shadow-xl">
          <div className="px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Expert Legal Defense When You Need It Most
              </h1>
              <p className="text-xl mb-8 text-slate-300">
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
          className="container mx-auto px-4 py-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              What Our Clients Say
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </div>
        </motion.section>

       {/* FAQ Section */}
        <motion.section
          className="container mx-auto px-4 py-20 bg-slate-50"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Our Track Record
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
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
