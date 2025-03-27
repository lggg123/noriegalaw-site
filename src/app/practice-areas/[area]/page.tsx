import ClientComponent from './ClientComponent';

// Our practice areas data
const practiceAreas = [
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

export default function Page({ params }: { params: { area: string } }) {
  const practiceArea = practiceAreas.find(area => area.slug === params.area);

  if (!practiceArea) {
    return <div>Practice area not found</div>;
  }
  
  return <ClientComponent practiceArea={practiceArea} allPracticeAreas={practiceAreas} />;
}

// Generate static params
export async function generateStaticParams() {
  return practiceAreas.map(area => ({
    area: area.slug,
  }));
}