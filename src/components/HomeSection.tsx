"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, ArrowRight } from 'lucide-react';

function HomeSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/images/courthouse.jpg')] bg-cover bg-center"
        style={{ filter: 'brightness(0.4)' }}
      />
      
      {/* Content */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 relative z-10 pt-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-indigo-400">Dedicated</span> Legal Defense <br />
            For Your Peace of Mind
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-10">
            With over 20 years of experience, we fight for your rights and achieve the best possible outcome for your case.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:626-336-8080"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              <span>FREE Consultation</span>
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg shadow-lg transition duration-300 flex items-center justify-center"
            >
              <span>Our Services</span>
              <ArrowRight size={20} className="ml-2" />
            </motion.a>
          </div>
          
          {/* Credentials */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold">20+</p>
              <p className="text-white text-sm">Years Experience</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold">1000+</p>
              <p className="text-white text-sm">Cases Won</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold">24/7</p>
              <p className="text-white text-sm">Availability</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold">Free</p>
              <p className="text-white text-sm">Consultation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeSection;