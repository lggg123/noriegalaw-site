"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import HomeSection from '../components/HomeSection';
import PracticeAreasHighlight from '../components/PracticeAreasHighlight';
import GoogleReviews from '../components/GoogleReviews';
import AIChatAssistant from '@/components/AIChatAssistant';
import BlogSection from '@/components/BlogSection';

const NoriegaLogo = ({ className = “”, showText = true, size = “md” }) => {
const sizes = {
sm: { icon: “w-6 h-6”, text: “text-sm” },
md: { icon: “w-8 h-8”, text: “text-lg” },
lg: { icon: “w-10 h-10”, text: “text-xl” },
xl: { icon: “w-12 h-12”, text: “text-2xl” }
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

// Link component placeholder (replace with your actual Link component)
const Link = ({ href, children, className, onClick }) => (
<a href={href} className={className} onClick={onClick}>
{children}
</a>
);

function NavigationBar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
<nav className="bg-slate-800 p-4 fixed w-full top-0 z-50 shadow-md">
<div className="container mx-auto max-w-7xl">
<div className="flex justify-between items-center min-h-[56px]">
{/* Logo - Always visible with responsive sizing */}
<Link 
href="/" 
className="flex-shrink-0 py-2 hover:opacity-80 transition-opacity duration-300"
>
<NoriegaLogo
size=“sm”
className=“sm:hidden” // Mobile: icon + text, small
showText={true}
/>
<NoriegaLogo
size=“md”
className=“hidden sm:flex lg:hidden” // Tablet: medium size
showText={true}
/>
<NoriegaLogo
size=“lg”
className=“hidden lg:flex xl:hidden” // Large: larger size
showText={true}
/>
<NoriegaLogo
size=“xl”
className=“hidden xl:flex” // Extra large: biggest size
showText={true}
/>
</Link>
      {/* Desktop Navigation - show on larger screens with better breakpoints */}
      <div className="hidden xl:flex space-x-6 2xl:space-x-8 items-center">
        <Link 
          href="/about" 
          className="text-white hover:text-slate-300 transition duration-300 text-base lg:text-lg whitespace-nowrap"
        >
          About
        </Link>
        <Link 
          href="#services" 
          className="text-white hover:text-slate-300 transition duration-300 text-base lg:text-lg whitespace-nowrap"
        >
          Services
        </Link>
        <Link 
          href="/intake" 
          className="text-white hover:text-slate-300 transition duration-300 text-base lg:text-lg whitespace-nowrap"
        >
          Free Case Evaluation
        </Link>
        <Link 
          href="/practice-areas" 
          className="text-white hover:text-slate-300 transition duration-300 text-base lg:text-lg whitespace-nowrap"
        >
          Practice Areas
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-slate-300 transition duration-300 text-base lg:text-lg whitespace-nowrap"
        >
          Contact
        </Link>
        <a 
          href="tel:626-336-8080" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 lg:px-6 py-3 rounded-lg transition duration-300 flex items-center text-base lg:text-lg whitespace-nowrap flex-shrink-0"
        >
          <Phone size={18} className="mr-2" />
          <span className="hidden lg:inline">626-336-8080</span>
          <span className="lg:hidden">Call</span>
        </a>
      </div>

      {/* Tablet Navigation - show on medium to large screens */}
      <div className="hidden lg:flex xl:hidden space-x-4 items-center">
        <Link 
          href="/about" 
          className="text-white hover:text-slate-300 transition duration-300 text-sm whitespace-nowrap"
        >
          About
        </Link>
        <Link 
          href="#services" 
          className="text-white hover:text-slate-300 transition duration-300 text-sm whitespace-nowrap"
        >
          Services
        </Link>
        <Link 
          href="/practice-areas" 
          className="text-white hover:text-slate-300 transition duration-300 text-sm whitespace-nowrap"
        >
          Practice
        </Link>
        <Link 
          href="/contact" 
          className="text-white hover:text-slate-300 transition duration-300 text-sm whitespace-nowrap"
        >
          Contact
        </Link>
        <a 
          href="tel:626-336-8080" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center text-sm whitespace-nowrap"
        >
          <Phone size={16} className="mr-1" />
          <span>Call</span>
        </a>
      </div>

      {/* Mobile Menu Button - show on smaller screens */}
      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div 
        className="lg:hidden mt-4 pb-2 animate-in slide-in-from-top-2 duration-300"
      >
        <div className="flex flex-col space-y-4">
          <Link 
            href="/about" 
            className="text-white hover:text-slate-300 transition duration-300 py-3 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#services" 
            className="text-white hover:text-slate-300 transition duration-300 py-3 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/practice-areas" 
            className="text-white hover:text-slate-300 transition duration-300 py-3 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Practice Areas
          </Link>
          <Link 
            href="#contact" 
            className="text-white hover:text-slate-300 transition duration-300 py-3 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="tel:626-336-8080" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <Phone size={16} className="mr-2" />
            <span>626-336-8080</span>
          </a>
        </div>
      </div>
    )}
  </div>
</nav>

function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const attorneyInfo = [
    {
      period: "1980-1986",
      title: "United States Marine Corps",
      description: "Chris Noriega began his journey shortly after high school when he enlisted in the USMC and was Honorably Discharged as a Non-Commissioned Officer (E-4)."
    },
    {
      period: "1986-1999",
      title: "Noriega Bail Bonds",
      description: "After discharge, Chris acquired ownership of Noriega Bail Bonds, gaining intimate familiarity with the criminal justice system as both a bail agent and bounty hunter."
    },
    {
      period: "1999-2003",
      title: "Western State University College of Law",
      description: "While attending law school, Chris was on the Honor Roll and earned the prestigious Witkin Award for Academic Excellence."
    },
    {
      period: "2003-Present",
      title: "Law Offices of Chris Noriega",
      description: "Established after earning his law degree, Chris has successfully handled virtually every type of criminal case from misdemeanors to felonies with potential life sentences."
    }
  ];

  return (
    <section id="about" className="pt-24 pb-16 bg-[url('/images/scales-of-justice-bg.jpg')] bg-cover bg-fixed relative">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction Card */}
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 mb-12 border border-slate-700/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">About Noriega Law</h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-6">
              Welcome to Noriega Law! We are dedicated to providing exceptional legal services to our clients. With over 20 years of experience in criminal defense, Attorney Chris Noriega has earned a reputation for excellence.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="tel:626-336-8080"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition duration-300 flex items-center"
              >
                <Phone size={18} className="mr-2" />
                <span>FREE Consultation: 626-336-8080</span>
              </motion.a>
            </div>
          </div>
          
          {/* Attorney Timeline */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">Attorney Chris Noriega&apos;s Journey</h3>
          
          {/* Mobile Timeline */}
          <div className="md:hidden bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 mb-12 border border-slate-700/50">
            {attorneyInfo.map((info, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="mb-8 last:mb-0 relative pl-8 border-l-2 border-indigo-500"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
                <span className="text-sm text-indigo-300 font-semibold">{info.period}</span>
                <h4 className="text-lg font-bold text-white my-1">{info.title}</h4>
                <p className="text-slate-300">{info.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-12 border border-slate-700/50">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600/70"></div>
              
              {/* Timeline Items */}
              {attorneyInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`flex mb-12 last:mb-0 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2"></div>
                  <div className="z-10 flex items-center justify-center">
                    <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-slate-700/90 to-slate-800/90' : 'from-slate-800/90 to-slate-700/90'} p-5 rounded-lg shadow border border-slate-600/50 hover:border-indigo-500/50 transition duration-300`}>
                      <span className="text-sm text-indigo-300 font-semibold">{info.period}</span>
                      <h4 className="text-lg font-bold text-white my-1">{info.title}</h4>
                      <p className="text-slate-300">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Community Involvement */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">Community Involvement</h3>
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 mb-12 border border-slate-700/50">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6 md:mb-0"
              >
                <div className="bg-slate-800/70 rounded-lg p-5 h-full border border-slate-700/50 hover:border-indigo-500/50 transition duration-300">
                  <h4 className="text-lg font-bold text-white mb-3">Outreach Programs</h4>
                  <p className="text-slate-300">
                    When not in court, Chris frequently participates in outreach programs to help at-risk youth and young adults. He has been an invited guest speaker with the Los Angeles Sheriff&apos;s Department and other community organizations.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-slate-800/70 rounded-lg p-5 h-full border border-slate-700/50 hover:border-indigo-500/50 transition duration-300">
                  <h4 className="text-lg font-bold text-white mb-3">Continuing Education</h4>
                  <p className="text-slate-300">
                    Chris also regularly participates in continuing legal education courses to keep current with the latest cases, defense strategies, and tactics that directly impact his clients&apos; success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 border border-slate-700/50 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Your Success Is Our Priority</h3>
            <p className="text-lg text-slate-300 mb-6">
              At Noriega Law, we believe in building strong relationships with our clients, offering personalized solutions, and delivering results.
            </p>
            <motion.a
              href="tel:626-336-8080"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition duration-300"
            >
              Schedule Your FREE Consultation Today
              <ChevronRight size={18} className="ml-2" />
            </motion.a>
          </div>
          
          {/* Floating Mobile CTA Button */}
          <div className="md:hidden fixed bottom-6 right-6 z-40">
            <motion.a
              href="tel:626-336-8080"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl"
            >
              <Phone size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-slate-900">
      <NavigationBar />
      <HomeSection />
      <PracticeAreasHighlight />
      <AboutSection />
      <BlogSection />
      <GoogleReviews />
      <AIChatAssistant />
    </div>
  );
}

export default Page;