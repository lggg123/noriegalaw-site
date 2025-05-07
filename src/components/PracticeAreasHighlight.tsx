"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, ArrowRight, Shield, Gavel, Scale, FileText, Briefcase, Users } from 'lucide-react';

function PracticeAreasHighlight() {
  const practices = [
    {
      title: "Criminal Defense",
      description: "Aggressive defense for all criminal charges from misdemeanors to serious felonies.",
      icon: Shield,
      link: "/practice-areas/criminal-defense"
    },
    {
      title: "DUI Defense",
      description: "Expert representation for DUI cases with strategies to minimize or eliminate penalties.",
      icon: Gavel,
      link: "/practice-areas/dui-defense"
    },
    {
      title: "Drug Offenses",
      description: "Comprehensive defense strategies for drug possession, sale, and manufacturing charges.",
      icon: FileText,
      link: "/practice-areas/drug-offenses"
    },
    {
      title: "Violent Crimes",
      description: "Experienced defense for assault, battery, and other violent crime allegations.",
      icon: Scale,
      link: "/practice-areas/violent-crimes"
    },
    {
      title: "White Collar Crimes",
      description: "Strategic defense for fraud, embezzlement, and other financial crime accusations.",
      icon: Briefcase,
      link: "/practice-areas/white-collar-crimes"
    },
    {
      title: "Juvenile Offenses",
      description: "Compassionate representation for minors facing criminal charges in the juvenile system.",
      icon: Users,
      link: "/practice-areas/juvenile-offenses"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Practice Areas</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            At Noriega Law, we specialize in these key practice areas, providing expert legal representation and guidance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300"
              >
                <div className="bg-indigo-600/20 p-3 rounded-lg w-14 h-14 mb-4 flex items-center justify-center">
                  <Icon size={28} className="text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{practice.title}</h3>
                <p className="text-slate-300 mb-4">{practice.description}</p>
                <Link 
                  href={practice.link} 
                  className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition duration-300"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="tel:626-336-8080"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition duration-300 flex items-center"
          >
            <Phone size={20} className="mr-2" />
            <span>Schedule Your FREE Consultation: 626-336-8080</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default PracticeAreasHighlight;