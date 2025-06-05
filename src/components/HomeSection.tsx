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
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-indigo-400">Dedicated</span> Legal Defense <br />
            For Your Peace of Mind
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-10 max-w-4xl mx-auto">
            With over 20 years of experience, we fight for your rights and achieve the best possible outcome for your case.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="tel:626-336-8080"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 lg:py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition duration-300 flex items-center justify-center text-lg lg:text-xl"
            >
              <Phone size={24} className="mr-2" />
              <span>FREE Consultation</span>
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 lg:py-5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg shadow-lg transition duration-300 flex items-center justify-center text-lg lg:text-xl"
            >
              <span>Our Services</span>
              <ArrowRight size={24} className="ml-2" />
            </motion.a>
          </div>
          
          {/* Credentials - Better responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold text-xl sm:text-2xl lg:text-3xl">20+</p>
              <p className="text-white text-sm sm:text-base lg:text-lg">Years Experience</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold text-xl sm:text-2xl lg:text-3xl">1000+</p>
              <p className="text-white text-sm sm:text-base lg:text-lg">Cases Won</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold text-xl sm:text-2xl lg:text-3xl">24/7</p>
              <p className="text-white text-sm sm:text-base lg:text-lg">Availability</p>
            </div>
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700/50">
              <p className="text-indigo-300 font-bold text-xl sm:text-2xl lg:text-3xl">Free</p>
              <p className="text-white text-sm sm:text-base lg:text-lg">Consultation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HomeSection;