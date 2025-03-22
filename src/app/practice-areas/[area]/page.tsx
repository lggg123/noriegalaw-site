import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Define types for our practice area data
type DefenseStrategy = {
  title: string;
  description: string;
};

type PracticeArea = {
  id: string;
  title: string;
  icon: string;
  description: string;
  defenseStrategies: DefenseStrategy[];
  slug: string;
};

// Our practice areas data - you might want to move this to a separate file
// and import it in both pages for DRY principles
const practiceAreas: PracticeArea[] = [
  {
    id: 'felonies',
    title: 'Felony Defense',
    icon: 'scales',
    slug: 'criminal-defense',
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
    slug: 'misdemeanor-defense',
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
    slug: 'drug-offenses',
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
    slug: 'dui-defense',
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
    slug: 'white-collar-crimes',
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
    slug: 'domestic-violence',
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

// Function to render icon based on name
const getIcon = (iconName: string) => {
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

const PracticeAreaPage = ({ params }: { params: { area: string } }) => {
  const router = useRouter();

  const practiceArea = practiceAreas.find(area => area.slug === params.area);

  if (!practiceArea) return <div>Practice area not found</div>;

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header Banner */}
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/images/courthouse.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{practiceArea.title}</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Strategic defense strategies tailored to your specific situation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <div className="flex items-center text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/practice-areas" className="hover:text-blue-700">Practice Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-700 font-medium">{practiceArea.title}</span>
          </div>
        </div>

        {/* Practice Area Details */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-700 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
              {getIcon(practiceArea.icon)}
              <span className="ml-4">{practiceArea.title}</span>
            </h2>
            <p className="text-blue-100 mt-4">{practiceArea.description}</p>
          </div>
          
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              Our Defense Strategies for {practiceArea.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {practiceArea.defenseStrategies.map((strategy, index) => (
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
                <h4 className="text-lg font-bold text-slate-800 mb-1">Facing {practiceArea.title.toLowerCase()} charges? Get experienced defense now.</h4>
                <p className="text-slate-600">Schedule your free consultation to discuss your case in detail.</p>
              </div>
              <a 
                href="tel:6263368080" 
                className="mt-4 md:mt-0 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:px-8"
              >
                Call 626-336-8080
              </a>
            </div>
          </div>
        </div>

        {/* Additional Content Section - This would be specific to the practice area */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Us for Your {practiceArea.title} Case</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
            <p className="text-slate-600 mb-4">
              Defending against {practiceArea.title.toLowerCase()} charges requires a deep understanding of both the legal framework and the practical realities of the criminal justice system. At Noriega Law, we combine our extensive experience with a personalized approach to ensure the best possible outcome for your case.
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">Our Approach to {practiceArea.title} Cases:</h3>
            
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Thorough investigation of all evidence and circumstances surrounding your case</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Identification of procedural errors and constitutional violations</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Exploration of all available defense strategies specific to your situation</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Aggressive negotiation for favorable plea deals when appropriate</span>
              </li>
              <li className="flex">
                <span className="text-blue-700 mr-2">•</span>
                <span className="text-slate-600">Prepared trial strategy if your case requires courtroom litigation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Related Practice Areas */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Related Practice Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {practiceAreas
              .filter(area => area.slug !== practiceArea.slug)
              .slice(0, 3)
              .map(area => (
                <Link href={`/practice-areas/${area.slug}`} key={area.id}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center">
                    {getIcon(area.icon)}
                    <h3 className="font-bold text-slate-800 mt-4 mb-2">{area.title}</h3>
                    <p className="text-slate-600 text-sm">{area.description.substring(0, 100)}...</p>
                    <span className="mt-4 text-blue-700 font-medium">Learn More →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-blue-700 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Face {practiceArea.title} Charges Alone</h2>
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
};

export async function generateStaticParams() {
  return practiceAreas.map(area => ({
    area: area.slug,
  }));
}

export default PracticeAreaPage;