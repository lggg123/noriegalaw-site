"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import HomeSection from '../components/HomeSection';
import PracticeAreasHighlight from '../components/PracticeAreasHighlight';
import GoogleReviews from '../components/GoogleReviews';
import AIChatAssistant from '@/components/AIChatAssistant';
import BlogSection from '@/components/BlogSection';

const NoriegaLogo = ({ className = "", showText = true, size = "md" }) => {
  const sizes = {
    sm: { icon: "w-6 h-6", text: "text-sm" },
    md: { icon: "w-8 h-8", text: "text-lg" },
    lg: { icon: "w-10 h-10", text: "text-xl" },
    xl: { icon: "w-12 h-12", text: "text-2xl" }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizes[size].icon} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Scales of Justice */}
          <path 
            d="M50 15 L50 85 M35 25 L65 25" 
            stroke="white" 
            strokeWidth="3" 
            fill="none"
          />
          <circle 
            cx="35" 
            cy="25" 
            r="15" 
            stroke="white" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          />
          <circle 
            cx="65" 
            cy="25" 
            r="15" 
            stroke="white" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          />
          <path 
            d="M45 80 L55 80 L52.5 85 Z" 
            fill="white"
          />
          {/* Shield element */}
          <path 
            d="M50 5 L42 10 L42 20 L50 25 L58 20 L58 10 Z" 
            fill="white" 
            opacity="0.9"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-bold leading-tight ${sizes[size].text}`}>
            NORIEGA LAW
          </span>
          <span className="text-slate-300 text-xs uppercase tracking-wider hidden sm:block">
            Criminal Defense
          </span>
        </div>
      )}
    </div>
  );
};

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 p-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center min-h-[56px]">
          {/* Logo - Always visible with responsive sizing */}
          <Link 
            href="/" 
            className="flex-shrink-0 transition-transform hover:scale-105"
          >
            <NoriegaLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/practice-areas" className="text-white hover:text-blue-400 transition-colors">
              Practice Areas
            </Link>
            <Link href="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Call Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Call Button - Always visible */}
            <a 
              href="tel:+16263368080" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-slate-700"
          >
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                href="/" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/practice-areas" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      
      {/* Main Content */}
      <main className="pt-20">
        <HomeSection />
        <PracticeAreasHighlight />
        <GoogleReviews />
        <BlogSection />
      </main>

      {/* AI Chat Assistant */}
      <AIChatAssistant />
    </div>
  );
}