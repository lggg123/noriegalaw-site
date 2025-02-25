// src/lib/schema/criminal-defense.ts
import { WithContext, FAQPage, LegalService } from 'schema-dts';

// Enhanced Practice Area Descriptions
export const practiceAreaDetails = {
  'Violent Crimes': {
    description: `Experienced defense representation for serious violent crime charges including:
      - Attempted murder and assault with great bodily injury (GBI)
      - Armed robbery and carjacking
      - Gang-related violent offenses
      - Domestic violence and restraining order violations`,
    faqs: [
      {
        question: "What constitutes 'great bodily injury' (GBI) in California?",
        answer: "Great bodily injury refers to significant physical injury beyond minor harm. It can enhance sentences significantly. Each case requires detailed analysis of medical evidence and circumstances."
      },
      {
        question: "How are gang enhancements handled in violent crime cases?",
        answer: "Gang enhancements can significantly increase penalties. Defense strategies include challenging gang expertise testimony, examining predicate acts, and contesting gang membership evidence."
      }
    ]
  },
  'Sexual Offenses': {
    description: `Strategic defense for cases involving:
      - Sexual assault allegations
      - Child molestation charges
      - False imprisonment
      - Date rape accusations`,
    faqs: [
      {
        question: "What should I do if falsely accused of sexual assault?",
        answer: "Immediately seek legal representation. Don't speak to investigators without an attorney present. Preserve all communication records and potential alibi evidence."
      },
      {
        question: "How long do I have to register as a sex offender if convicted?",
        answer: "Registration requirements vary based on the offense. Some require lifetime registration, others have tiered requirements. Legal defense may focus on avoiding registration requirements."
      }
    ]
  },
  'Drug Crimes': {
    description: `Comprehensive defense for narcotics charges including:
      - Possession with intent to sell
      - Drug trafficking
      - Manufacturing
      - Prescription drug violations`,
    faqs: [
      {
        question: "Can police search my car for drugs without a warrant?",
        answer: "Vehicle searches require probable cause. We examine search legality, challenge probable cause determinations, and file suppression motions when appropriate."
      },
      {
        question: "What's the difference between possession and possession with intent to sell?",
        answer: "Intent to sell charges consider factors like quantity, packaging, presence of scales/money. Simple possession may qualify for treatment programs instead of jail."
      }
    ]
  }
};

// Jurisdiction Coverage Schema
export const getJurisdictionSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  areaServed: [
    {
      '@type': 'State',
      name: 'California'
    },
    {
      '@type': 'County',
      name: 'Los Angeles County'
    },
    {
      '@type': 'County',
      name: 'Orange County'
    }
  ],
  availableChannel: [
    {
      '@type': 'ServiceChannel',
      serviceLocation: {
        '@type': 'Place',
        name: 'Los Angeles Superior Court'
      }
    },
    {
      '@type': 'ServiceChannel',
      serviceLocation: {
        '@type': 'Place',
        name: 'Orange County Superior Court'
      }
    }
  ]
});

// Case Results Schema (Ethically Compliant)
export const getCaseResultsSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Criminal Defense Case Outcomes',
  description: 'Representative examples of case outcomes. Past results do not guarantee future outcomes.',
  creator: {
    '@type': 'Attorney',
    name: 'Attorney Noriega'
  },
  temporalCoverage: '2020/2024',
  spatialCoverage: 'California',
  // Using generic outcomes to maintain privacy
  sampleType: [
    'Felony charges reduced to misdemeanors',
    'Cases dismissed after successful suppression motions',
    'Alternative sentencing arrangements achieved',
    'Charges reduced through plea negotiations',
    'Not guilty verdicts at trial'
  ]
});

// Combined FAQ Schema for All Practice Areas
export const getEnhancedFAQSchema = (): WithContext<FAQPage> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // General Criminal Defense FAQs
    {
      '@type': 'Question',
      name: 'What are my rights if arrested?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have the right to remain silent, the right to an attorney, and the right to refuse searches without a warrant. Exercise these rights and contact an attorney immediately.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can you start working on my case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide immediate response for criminal cases, including weekend and after-hours availability for urgent situations like arrests or police questioning.'
      }
    },
    ...Object.values(practiceAreaDetails).flatMap(area => 
      area.faqs.map(faq => ({
        '@type': 'Question' as const,
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer' as const,
          text: faq.answer
        }
      }))
    )
  ]
});
