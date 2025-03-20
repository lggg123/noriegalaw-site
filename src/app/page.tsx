"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'; // Import Link from next/link

// NavigationBar function declaration
function NavigationBar() {
  return (
    <nav className="bg-slate-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-white font-bold text-xl">Noriega Law</a>
        </Link>
        <div>
          <Link href="/about" passHref>
            <a className="text-white mx-2">About</a>
          </Link>
          <Link href="#services" passHref>
            <a className="text-white mx-2">Services</a>
          </Link>
          <Link href="#contact" passHref>
            <a className="text-white mx-2">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

// AboutSection function declaration
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
    <section id="about" className="py-16 bg-[url('/images/scales-of-justice-bg.jpg')] bg-cover bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-70 before:z-0 relative">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            About Us
          </h2>
          
          {/* Introduction Card */}
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-12 border border-slate-700/50">
            <p className="text-xl text-slate-300 mb-6">
              Welcome to Noriega Law! We are dedicated to providing exceptional legal services to our clients. With over 20 years of experience in criminal defense, Attorney Chris Noriega has earned a reputation for excellence.
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-bold rounded-lg shadow-lg hover:from-slate-600 hover:to-slate-500 transition duration-300"
                onClick={() => window.location.href='tel:626-336-8080'}
              >
                Call for FREE Consultation: 626-336-8080
              </motion.button>
            </div>
          </div>
          
          {/* Attorney Timeline */}
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Attorney Chris Noriega&apos;s Journey</h3>
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-12 border border-slate-700/50">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-600"></div>
              
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
                    <div className="bg-slate-100 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 p-4 rounded-lg shadow border border-slate-600/50">
                      <span className="text-sm text-slate-400">{info.period}</span>
                      <h4 className="text-lg font-bold text-white mb-2">{info.title}</h4>
                      <p className="text-slate-300">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Community Involvement */}
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Community Involvement</h3>
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 mb-12 border border-slate-700/50">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-slate-300">
                When not in court, Chris frequently participates in outreach programs to help at-risk youth and young adults. He has been an invited guest speaker with the Los Angeles Sheriff&apos;s Department and other community organizations.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-slate-300">
                Chris also regularly participates in continuing legal education courses to keep current with the latest cases, defense strategies, and tactics that directly impact his clients&apos; success.
              </p>
            </motion.div>
          </div>
          
          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-slate-700/50 text-center">
            <p className="text-xl text-slate-300 mb-6">
              At Noriega Law, we believe in building strong relationships with our clients, offering personalized solutions, and delivering results. Your success is our priority.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-bold rounded-lg shadow-lg hover:from-slate-600 hover:to-slate-500 transition duration-300"
            >
              <a href="tel:626-336-8080" className="text-white no-underline">
                Schedule Your FREE Consultation Today
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Page function declaration
function Page() {
  return (
    <div>
      <NavigationBar />
      <AboutSection />
    </div>
  );
}

export default Page;