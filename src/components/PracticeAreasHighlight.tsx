"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Scale, Users, Gavel } from 'lucide-react';
import Link from 'next/link';

function PracticeAreasHighlight() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const practices = [
    {
      icon: Scale,
      title: "Criminal Defense",
      description: "Comprehensive defense for all criminal charges, from misdemeanors to serious felonies.",
      link: "/practice-areas/criminal-defense"
    },
    {
      icon: Shield,
      title: "DUI/DWI Defense",
      description: "Expert representation for driving under the influence charges with proven results.",
      link: "/practice-areas/dui-defense"
    },
    {
      icon: Users,
      title: "Domestic Violence",
      description: "Skilled defense against domestic violence allegations with compassionate support.",
      link: "/practice-areas/domestic-violence"
    },
    {
      icon: Gavel,
      title: "Drug Crimes",
      description: "Strategic defense for drug possession, distribution, and trafficking charges.",
      link: "/practice-areas/drug-crimes"
    },
    {
      icon: Shield,
      title: "Traffic Violations",
      description: "Protection against traffic tickets, license suspension, and driving violations.",
      link: "/practice-areas/traffic-violations"
    },
    {
      icon: Scale,
      title: "White Collar Crimes",
      description: "Defense against fraud, embezzlement, and other white collar criminal charges.",
      link: "/practice-areas/white-collar"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">Our Practice Areas</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            At Noriega Law, we specialize in these key practice areas, providing expert legal representation and guidance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 sm:p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className="bg-indigo-600/20 p-3 sm:p-4 rounded-lg w-14 sm:w-16 lg:w-18 h-14 sm:h-16 lg:h-18 mb-4 sm:mb-6 flex items-center justify-center">
                  <Icon size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">{practice.title}</h3>
                <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{practice.description}</p>
                <Link 
                  href={practice.link} 
                  className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition duration-300 text-sm sm:text-base"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default PracticeAreasHighlight;