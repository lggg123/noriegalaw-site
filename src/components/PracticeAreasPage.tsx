import React, { useState } from 'react';

function PracticeAreasPage() {
  const [activeTab, setActiveTab] = useState('felonies');
  
  const practiceAreas = [
    {
      id: 'felonies',
      title: 'Felony Defense',
      icon: 'scales',
      description: 'Experienced representation for serious felony charges including violent crimes, drug trafficking, and other offenses that carry significant penalties.',
      defenseStrategies: [
        {
          title: 'Challenging Evidence Collection',
          description: 'We scrutinize search and seizure procedures to identify Fourth Amendment violations that could lead to evidence suppression.'
        },
        {
          title: 'Self-Defense Claims',
          description: 'For assault or violent crime charges, we establish legitimate self-defense claims when supported by evidence and circumstances.'
        },
        {
          title: 'Mental State Defenses',
          description: 'We evaluate whether diminished capacity or inability to form criminal intent may provide a viable defense strategy.'
        },
        {
          title: 'Mistaken Identity',
          description: 'We challenge eyewitness testimony and identification procedures that may have led to false accusations.'
        }
      ]
    },
    {
      id: 'misdemeanors',
      title: 'Misdemeanor Defense',
      icon: 'gavel',
      description: 'Strategic defense for misdemeanor charges including DUI, petty theft, simple assault, and other offenses with potential jail time up to one year.',
      defenseStrategies: [
        {
          title: 'Diversion Programs',
          description: 'We pursue alternatives to traditional prosecution like diversion programs for eligible first-time or non-violent offenders.'
        },
        {
          title: 'Procedural Errors',
          description: 'We identify police or prosecution errors in procedure, documentation, or evidence handling that could result in dismissal.'
        },
        {
          title: 'Negotiated Pleas',
          description: 'When appropriate, we negotiate for reduced charges or penalties that minimize consequences to your record and future.'
        },
        {
          title: 'Constitutional Rights Violations',
          description: 'We examine whether your Miranda rights were properly administered and respected during arrest and questioning.'
        }
      ]
    },
    {
      id: 'drugs',
      title: 'Drug Offenses',
      icon: 'pills',
      description: 'Dedicated defense for charges ranging from simple possession to trafficking, with focus on rehabilitation options and penalty reduction.',
      defenseStrategies: [
        {
          title: 'Search Warrant Challenges',
          description: 'We scrutinize search warrant validity and execution, often revealing procedural flaws that can lead to case dismissal.'
        },
        {
          title: 'Medical Necessity',
          description: 'For applicable cases, we establish legitimate medical use defenses supported by proper documentation and expert testimony.'
        },
        {
          title: 'Substance Testing Errors',
          description: 'We investigate potential lab errors, contamination issues, or improper handling that may have compromised test results.'
        },
        {
          title: 'Rehabilitation Alternatives',
          description: 'We advocate for treatment programs and rehabilitation options as alternatives to incarceration for eligible clients.'
        }
      ]
    },
    {
      id: 'dui',
      title: 'DUI Defense',
      icon: 'car',
      description: 'Specialized defense strategies for driving under the influence cases, challenging field sobriety tests, breathalyzer results, and police procedures.',
      defenseStrategies: [
        {
          title: 'Breath/Blood Test Challenges',
          description: 'We question calibration, maintenance, and administration of testing equipment and procedures to identify potential inaccuracies.'
        },
        {
          title: 'Field Sobriety Test Evaluation',
          description: 'We analyze proper administration of field sobriety tests and identify conditions that may have affected performance unrelated to intoxication.'
        },
        {
          title: 'Traffic Stop Legality',
          description: 'We examine whether police had reasonable suspicion for the initial traffic stop that led to your DUI investigation.'
        },
        {
          title: 'Rising BAC Defense',
          description: 'We utilize the scientific principle that blood alcohol concentration rises over time to challenge test results taken after driving.'
        }
      ]
    },
    {
      id: 'whitecollar',
      title: 'White Collar Defense',
      icon: 'briefcase',
      description: 'Strategic representation for fraud, embezzlement, identity theft, and other financial or business-related criminal allegations.',
      defenseStrategies: [
        {
          title: 'Intent Challenges',
          description: 'We establish lack of criminal intent for actions that may have resulted from misunderstanding, mistake, or negligence rather than fraud.'
        },
        {
          title: 'Document Analysis',
          description: 'We carefully analyze financial records and documentation to identify inconsistencies in the prosecution\'s case.'
        },
        {
          title: 'Expert Testimony',
          description: 'We engage financial and industry experts to provide context and alternative explanations for allegedly criminal transactions.'
        },
        {
          title: 'Restitution Negotiations',
          description: 'When appropriate, we negotiate restitution arrangements that can lead to reduced charges or sentencing considerations.'
        }
      ]
    },
    {
      id: 'domestic',
      title: 'Domestic Violence',
      icon: 'home',
      description: 'Thoughtful defense for domestic violence allegations, navigating both criminal proceedings and restraining order hearings with discretion.',
      defenseStrategies: [
        {
          title: 'False Accusation Defense',
          description: 'We investigate motives for false accusations that may arise during contentious divorce or custody disputes.'
        },
        {
          title: 'Self-Defense Claims',
          description: 'We establish legitimate self-defense actions when evidence supports that force was used to protect oneself from harm.'
        },
        {
          title: 'Witness Credibility Evaluation',
          description: 'We examine inconsistencies in witness statements and testimony that may undermine the prosecution\'s case.'
        },
        {
          title: 'Anger Management Alternatives',
          description: 'We advocate for counseling and anger management programs as alternatives to traditional prosecution for eligible cases.'
        }
      ]
    }
  ];

  // Mock icons - in a real implementation, you would import actual icons
  const getIcon = (iconName) => {
    return (
      <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white">
        {iconName === 'scales' && <span className="text-xl">⚖️</span>}
        {iconName === 'gavel' && <span className="text-xl">🔨</span>}
        {iconName === 'pills' && <span className="text-xl">💊</span>}
        {iconName === 'car' && <span className="text-xl">🚗</span>}
        {iconName === 'briefcase' && <span className="text-xl">💼</span>}
        {iconName === 'home' && <span className="text-xl">🏠</span>}
      </div>
    );
  };

  const activeArea = practiceAreas.find(area => area.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header Banner */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/images/courthouse.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Criminal Defense Practice Areas</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Strategic defense strategies built on decades of criminal law experience
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Proven Defense Strategies</h2>
          <p className="text-lg text-slate-600 mb-4">
            At Noriega Law, we understand that being accused of a crime can be overwhelming. Our approach combines decades of experience in the criminal justice system with cutting-edge defense strategies tailored to your specific situation.
          </p>
          <p className="text-lg text-slate-600">
            While each case is unique, there are established legal principles and defense strategies that may apply to your situation. Attorney Chris Noriega&apos;s extensive background as both a bail bondsman and criminal defense attorney provides insights that can make a critical difference in your case outcome.
          </p>
        </div>

        {/* Practice Areas Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {practiceAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`p-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center text-center ${
                activeTab === area.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-blue-50'
              }`}
            >
              {getIcon(area.icon)}
              <span className="mt-2 font-medium">{area.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Practice Area Details */}
        {activeArea && (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-blue-700 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{activeArea.title}</h2>
              <p className="text-blue-100">{activeArea.description}</p>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                Potential Defense Strategies
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {activeArea.defenseStrategies.map((strategy, index) => (
                  <div key={index} className="bg-slate-50 p-5 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-slate-800 mb-2">{strategy.title}</h4>
                    <p className="text-slate-600">{strategy.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-slate-50 p-6 border-t border-slate-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Facing charges? Get experienced defense now.</h4>
                  <p className="text-slate-600">Schedule your free consultation to discuss your case in detail.</p>
                </div>
                <a 
                  href="tel:6263368080" 
                  className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-3 md:text-lg md:px-8"
                >
                  Call 626-336-8080
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Legal Process Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Understanding Your Rights</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Common Legal Defenses</h3>
              <p className="text-slate-600 mb-6">
                Criminal law recognizes several established defenses that may apply depending on your case circumstances:
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-slate-800">Constitutional Violations:</span>
                    <span className="text-slate-600"> Protection against illegal searches, seizures, and violations of your Miranda rights.</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-slate-800">Affirmative Defenses:</span>
                    <span className="text-slate-600"> Self-defense, defense of others, necessity, duress, and entrapment may justify otherwise criminal actions.</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-slate-800">Procedural Defenses:</span>
                    <span className="text-slate-600"> Statute of limitations, double jeopardy protection, and other procedural safeguards.</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-blue-700 font-bold mr-2">•</span>
                  <div>
                    <span className="font-medium text-slate-800">Innocence Defenses:</span>
                    <span className="text-slate-600"> Alibi evidence, mistaken identity, and lack of criminal intent.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">The Criminal Defense Process</h3>
              <p className="text-slate-600 mb-6">
                Understanding the criminal defense process can help you navigate this challenging time with greater confidence:
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-800">Investigation Phase</h4>
                    <p className="text-slate-600">We conduct a thorough investigation, gathering evidence, interviewing witnesses, and reviewing police reports.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-800">Pre-Trial Proceedings</h4>
                    <p className="text-slate-600">This includes arraignment, bail hearings, preliminary hearings, and motion filings to suppress evidence or dismiss charges.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-800">Plea Negotiations</h4>
                    <p className="text-slate-600">When advantageous, we negotiate with prosecutors for reduced charges, alternative sentencing, or case dismissal.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-800">Trial Defense</h4>
                    <p className="text-slate-600">If your case goes to trial, we provide aggressive representation, challenging the prosecution&apos;s evidence and presenting your defense.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">5</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-slate-800">Post-Conviction Options</h4>
                    <p className="text-slate-600">If needed, we pursue appeals, expungements, and record sealing to protect your future opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>
              <p className="text-slate-600 mb-4 pt-4">
                Attorney Noriega fought tirelessly to get my DUI charges reduced after identifying issues with the field sobriety test administration. His knowledge of the law made all the difference.
              </p>
              <p className="font-medium text-slate-800">- Michael R., Los Angeles</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>
              <p className="text-slate-600 mb-4 pt-4">
                Facing felony drug charges was terrifying. Mr. Noriega identified a Fourth Amendment violation that led to all evidence being suppressed and my case dismissed.
              </p>
              <p className="font-medium text-slate-800">- Sarah T., Pasadena</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">"</span>
              </div>
              <p className="text-slate-600 mb-4 pt-4">
                I was wrongfully accused of domestic violence during my divorce. Attorney Noriega thoroughly investigated and exposed the false allegations, saving my reputation and freedom.
              </p>
              <p className="font-medium text-slate-800">- Daniel K., West Covina</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Face Criminal Charges Alone</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get experienced defense from an attorney who understands the system from every angle.
          </p>
          <a 
            href="tel:6263368080" 
            className="inline-block bg-white text-blue-700 font-bold text-xl px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Call 626-336-8080 for a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

export default PracticeAreasPage;