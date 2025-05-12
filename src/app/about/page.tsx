import React from 'react';
import Link from 'next/link';

function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-[url('/images/scales-of-justice-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 to-indigo-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="flex justify-end mb-6">
          <Link 
            href="/"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center"
          >
            ← Back to Home
          </Link>
        </div>
        
        {/* Title with decorative element */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-12 h-1 bg-blue-600 mr-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Us</h2>
          <div className="w-12 h-1 bg-blue-600 ml-6"></div>
        </div>

        {/* Main content in a card-like container */}
        <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          {/* Attorney intro with side decoration */}
          <div className="flex flex-col md:flex-row mb-12">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                    CN
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Since 2003
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-blue-500 mb-4">Attorney Chris Noriega</h3>
              <p className="text-white text-lg leading-relaxed mb-4">
                Welcome to Noriega Law! We are dedicated to providing exceptional legal services to our clients.
                Attorney Chris Noriega&apos;s journey into the law began shortly after he graduated from high school in 1980 
                and enlisted in the United States Marine Corps.
              </p>
              <div className="flex items-center space-x-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-200">
                  <span className="mr-1.5">✓</span> Criminal Defense Expert
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-200">
                  <span className="mr-1.5">✓</span> Former Marine
                </span>
              </div>
            </div>
          </div>

          {/* Timeline-style biography */}
          <div className="space-y-12 mb-12">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <h4 className="text-blue-400 font-bold text-xl mb-2">Military Service & Early Career</h4>
              <p className="text-white">
                While a Marine at Camp Pendleton, Chris ultimately was Honorably Discharged from the Marine Corps as a 
                Non-Commissioned Officer (E-4) in 1986. Shortly after his discharge, Chris acquired ownership of 
                Noriega Bail Bonds, a business he ran both as a bail agent and bounty hunter. As a result, Chris became 
                intimately familiar with the criminal justice system.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <h4 className="text-blue-400 font-bold text-xl mb-2">Legal Education</h4>
              <p className="text-white">
                In 1999, Chris enrolled at Western State University College of Law, the oldest law school in Orange County. 
                While attending law school, Chris was on the Honor Roll and earned the prestigious Witkin Award for Academic Excellence.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <h4 className="text-blue-400 font-bold text-xl mb-2">Legal Practice</h4>
              <p className="text-white">
                Attorney Chris Noriega established the Law Offices of Chris Noriega not long after earning his law degree in 2003. 
                Due to his 20-plus years working in the criminal justice system as a bail agent and bounty hunter, 
                Chris has successfully handled just about every type of criminal case imaginable, from low-level misdemeanors 
                to hardcore felony cases with possible life sentences.
              </p>
            </div>
          </div>

          {/* Expertise & Commitment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-slate-700 bg-opacity-50">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Professional Expertise</h4>
              <p className="text-white">
                Chris&apos;s sole focus on criminal defense has resulted in a proven track record that has earned the respect of 
                both prosecutors and judges, as well as his peers in the criminal defense bar. He is an expert in post-arrest 
                representation and provides effective legal representation at the pre-arrest/pre-complaint stage of a police investigation.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-slate-700 bg-opacity-50">
              <h4 className="text-xl font-bold text-blue-400 mb-4">Community Commitment</h4>
              <p className="text-white">
                When Chris is not in court, he frequently participates in various outreach programs to help at-risk youth and young adults. 
                He has been an invited guest speaker on multiple occasions with the Los Angeles Sheriff&apos;s Department and other community organizations.
              </p>
            </div>
          </div>

          {/* Professional statement */}
          <div className="text-center mb-8">
            <p className="text-white text-lg mb-6">
              Chris also regularly participates in continuing legal education courses to keep current with the latest cases, 
              defense strategies, and tactics that have a direct impact on his clients&apos; cases. He is committed to using his 
              knowledge and decades of experience as a criminal defense attorney to help you with your case.
            </p>
            <p className="text-white text-lg">
              At Noriega Law, we believe in building strong relationships with our clients, offering personalized solutions, 
              and delivering results. Your success is our priority.
            </p>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-white font-bold text-xl mb-2">Ready to discuss your case?</p>
              <p className="text-white mb-4">Call for a FREE in-office consultation with Attorney Chris Noriega</p>
              <a 
                href="tel:6263368080" 
                className="inline-block bg-white text-blue-700 font-bold text-xl px-6 py-3 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                626-336-8080
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;