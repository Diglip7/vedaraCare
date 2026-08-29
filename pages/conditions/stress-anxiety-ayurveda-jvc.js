import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { Check, X } from "lucide-react";
import {
  stressJvcHero,
  stressJvcIntro,
  stressJvcMechanism,
  stressJvcComponents,
  stressJvcReviews,
  stressJvcPricing,
  stressJvcApproaches,
  stressJvcFaqs,
  stressJvcLocation,
  stressJvcCTA,
  stressAnxietyTeam,
  stressJvcRelatedPages,
  stressJvcRelatedArticles
} from '../../data/stressAnxietyJvcData';

const {
  eyebrow,
  title,
  intro,
  leadDoctor = {},
  supportingCards = [],
} = stressAnxietyTeam;

const {
  image,
  alt,
  label,
  name,
  description,
  tags = [],
  linkText,
  link,
} = leadDoctor;
const StressAnxietyAyurvedaJvc = () => {

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#stress-anxiety-care",
      "name": "Vedara Care Stress & Anxiety Ayurvedic Treatment JVC",
      "alternateName": ["Vedara Stress Ayurveda JVC", "Ayurvedic Stress Management JVC Dubai"],
      "url": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Authentic Ayurvedic stress and anxiety treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Neethu delivering comprehensive stress management through Shirodhara, Nasya, Abhyanga, herbal medicines, and personalised lifestyle counselling. Coordinated with modern mental health care.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 400 - AED 25,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {"@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.207223"},
      "hasMap": "https://maps.google.com/?q=Vedara+Care+Polyclinic+JVC",
      "openingHoursSpecification": [
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "08:30", "closes": "23:30"},
        {"@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "08:30", "closes": "23:30"}
      ],
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Circle Mall JVC Vicinity"},
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Business Bay"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Jumeirah Lake Towers"},
        {"@type": "Place", "name": "Emirates Hills"},
        {"@type": "Place", "name": "Arabian Ranches"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": ["Ayurveda", "Stress Management", "Anxiety Management", "Integrative Medicine", "Mental Wellness", "Traditional Medicine"],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Ayurvedic Stress Management Consultation"},
        {"@type": "MedicalProcedure", "name": "Shirodhara Therapy"},
        {"@type": "MedicalProcedure", "name": "Nasya Therapy"},
        {"@type": "MedicalProcedure", "name": "Abhyanga Oil Massage"},
        {"@type": "MedicalProcedure", "name": "Ayurvedic Herbal Medicine Prescription"},
        {"@type": "MedicalProcedure", "name": "Constitutional Assessment (Prakriti and Vikriti)"},
        {"@type": "MedicalProcedure", "name": "Nadi Pareeksha"},
        {"@type": "MedicalProcedure", "name": "Comprehensive Stress Management Programme"},
        {"@type": "MedicalProcedure", "name": "Burnout Recovery Programme"},
        {"@type": "MedicalProcedure", "name": "Pre-Event Stress Support Programme"},
        {"@type": "MedicalProcedure", "name": "Corporate Stress Management Programme"}
      ],
      "memberOf": {"@type": "Organization", "name": "Dubai Health Authority"},
      "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1200", "bestRating": "5", "worstRating": "1"},
      "reviewedBy": {"@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician"},
      "lastReviewed": "2026-08-20"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#chronic-stress",
      "name": "Chronic Stress",
      "alternateName": ["Chronic Stress Disorder", "Chronic Work Stress"],
      "code": {"@type": "MedicalCode", "code": "F43.9", "codingSystem": "ICD-10"},
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Ayurvedic Stress Management"},
        {"@type": "MedicalTherapy", "name": "Shirodhara"},
        {"@type": "MedicalTherapy", "name": "Constitutional Ayurvedic Care"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#gad",
      "name": "Generalised Anxiety Disorder",
      "alternateName": ["GAD", "Generalized Anxiety"],
      "code": {"@type": "MedicalCode", "code": "F41.1", "codingSystem": "ICD-10"},
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Ayurvedic Anxiety Management"},
        {"@type": "MedicalTherapy", "name": "Shirodhara"},
        {"@type": "MedicalTherapy", "name": "Ayurvedic Herbal Medicines"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#burnout",
      "name": "Burnout Syndrome",
      "alternateName": ["Occupational Burnout", "Professional Burnout"],
      "code": {"@type": "MedicalCode", "code": "Z73.0", "codingSystem": "ICD-10"},
      "possibleTreatment": [
        {"@type": "MedicalTherapy", "name": "Ayurvedic Burnout Recovery Programme"},
        {"@type": "MedicalTherapy", "name": "Panchakarma"},
        {"@type": "MedicalTherapy", "name": "Rasayana Rejuvenation"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#stress-insomnia",
      "name": "Stress-Related Insomnia",
      "code": {"@type": "MedicalCode", "code": "F51.0", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#panic",
      "name": "Panic Disorder",
      "code": {"@type": "MedicalCode", "code": "F41.0", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#ptsd",
      "name": "Post-Traumatic Stress Response",
      "code": {"@type": "MedicalCode", "code": "F43.1", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#adjustment",
      "name": "Adjustment Disorder",
      "code": {"@type": "MedicalCode", "code": "F43.2", "codingSystem": "ICD-10"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#shirodhara",
      "name": "Shirodhara",
      "alternateName": ["Shirodhara Therapy", "Ayurvedic Oil Flow Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Continuous warm medicated oil flow across forehead for stress and anxiety management",
      "bodyLocation": {"@type": "AnatomicalStructure", "name": "Forehead"},
      "preparation": "Constitutional assessment identifies appropriate oil selection",
      "indication": [
        {"@type": "MedicalCondition", "name": "Chronic Stress"},
        {"@type": "MedicalCondition", "name": "Anxiety"},
        {"@type": "MedicalCondition", "name": "Sleep Concerns"},
        {"@type": "MedicalCondition", "name": "Burnout"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#nasya",
      "name": "Nasya Therapy",
      "alternateName": ["Nasal Administration Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Medicated oil administration through nasal passages for nervous system support"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#abhyanga",
      "name": "Abhyanga",
      "alternateName": ["Ayurvedic Oil Massage"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Systematic full-body oil massage supporting nervous system and lymphatic function"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Stress & Anxiety Ayurvedic Treatment at JVC", "item": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Can Ayurveda help with stress and anxiety?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — Ayurveda has addressed stress and anxiety-like conditions for over three thousand years, developing sophisticated multi-modal approach combining constitutional assessment, therapies (particularly Shirodhara), herbal medicines, and lifestyle guidance. Substantial documented effectiveness for chronic work stress, generalised anxiety, sleep concerns from stress, burnout, and related conditions."}},
        {"@type": "Question", "name": "What is Shirodhara and why is it used for stress?", "acceptedAnswer": {"@type": "Answer", "text": "Shirodhara is continuous warm oil flow across forehead — flagship Ayurvedic therapy for stress and anxiety. Produces profound nervous system calming, documented cortisol reduction, sleep quality improvement, sustained calming effects. Series of 7-14 sessions typical for meaningful outcomes."}},
        {"@type": "Question", "name": "How is Ayurvedic stress management different from spa relaxation?", "acceptedAnswer": {"@type": "Answer", "text": "Authentic Ayurvedic stress management is medical care delivered by DHA-licensed BAMS-qualified Ayurvedic doctors with comprehensive assessment, personalised multi-modal treatment, ongoing monitoring, and coordination with modern medical care. Spa treatments provide temporary relaxation without medical foundation."}},
        {"@type": "Question", "name": "Where in Dubai is your clinic?", "acceptedAnswer": {"@type": "Answer", "text": "DHA-licensed clinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Accessible from Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif."}},
        {"@type": "Question", "name": "Do you have female Ayurvedic doctor for stress management?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — Dr. Neethu is female DHA-licensed BAMS-qualified Ayurvedic doctor with substantial stress and anxiety management expertise. Female practitioner particularly important for many stress patients discussing personal circumstances."}},
        {"@type": "Question", "name": "Can Ayurveda replace anti-anxiety medication?", "acceptedAnswer": {"@type": "Answer", "text": "Not universally. Many patients with mild-to-moderate stress and anxiety successfully manage with Ayurvedic approach as primary care. Severe anxiety disorders, panic disorder, PTSD typically require modern specialist care; Ayurveda supports alongside rather than replaces."}},
        {"@type": "Question", "name": "What Ayurvedic herbs help with stress and anxiety?", "acceptedAnswer": {"@type": "Answer", "text": "Common Ayurvedic herbs include Brahmi (Bacopa monnieri) supporting cognitive function and reducing anxiety, Ashwagandha (Withania somnifera) supporting stress response and reducing cortisol, Jatamansi (Nardostachys jatamansi) with calming nervous system effects, Shankhpushpi (Convolvulus pluricaulis) supporting mental clarity. Prescribed by qualified Ayurvedic doctors matched to individual constitution."}},
        {"@type": "Question", "name": "How long does Ayurvedic stress treatment take?", "acceptedAnswer": {"@type": "Answer", "text": "Timeline varies. Some patients experience initial improvement within 2-3 weeks of intensive programme. Substantial sustained improvement typically 6-12 weeks. Long-term stress management is ongoing partnership rather than time-limited treatment."}},
        {"@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": {"@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Ayurvedic tradition), Urdu across our team."}},
        {"@type": "Question", "name": "Is Ayurvedic stress treatment covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "Typically self-pay as wellness/complementary care. Some elements may be covered with medical justification. Direct billing with seven major insurers for covered elements."}},
        {"@type": "Question", "name": "Can I do Ayurvedic treatment while on anti-anxiety medication?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — coordination essential. All current medications reviewed during consultation. Ayurvedic herbs selected for compatibility. Modern medical care continues alongside Ayurvedic approach. Complementary integration."}},
        {"@type": "Question", "name": "What if I have severe depression or suicidal thoughts?", "acceptedAnswer": {"@type": "Answer", "text": "Severe mental health concerns require modern specialist care — psychiatrist or psychologist. If experiencing suicidal thoughts, contact modern mental health emergency services immediately. Ayurvedic approach supports alongside modern specialist care but should not substitute for specialist attention in severe conditions."}},
        {"@type": "Question", "name": "What is corporate stress management programme?", "acceptedAnswer": {"@type": "Answer", "text": "Organisation-level programmes for Dubai-based businesses supporting employee stress management. Includes individual consultations, group education sessions, therapy sessions at JVC clinic or on-site at employer premises."}},
        {"@type": "Question", "name": "Do you offer stress management during pregnancy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — pregnancy-safe Ayurvedic stress support available. Comprehensive consultation identifies appropriate pregnancy-safe approach coordinated with obstetric care."}},
        {"@type": "Question", "name": "What about pre-event anxiety like for wedding or exam?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — pre-event stress support programmes with time-bounded intensive approach. Typically 3-6 weeks leading up to event with intensive Shirodhara series, calming herbal medicines, breath practices, personalised event-day guidance."}},
        {"@type": "Question", "name": "How is stress from Dubai lifestyle specifically addressed?", "acceptedAnswer": {"@type": "Answer", "text": "Ayurvedic approach recognises Dubai's specific stress factors: high-pressure professional environment, expatriate isolation, cultural adjustment, long working hours, cost-of-living pressure, extreme climate effects. Lifestyle counselling accommodates these realities with practical sustainable recommendations."}},
        {"@type": "Question", "name": "Can I do Ayurvedic stress treatment as complete beginner?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — no prior Ayurvedic experience required. Comprehensive initial consultation includes education about Ayurvedic principles, treatment approaches, expected experience, realistic outcomes."}},
        {"@type": "Question", "name": "What about children and stress?", "acceptedAnswer": {"@type": "Answer", "text": "Pediatric Ayurvedic stress support available for adolescents with age-appropriate approaches. Gentler protocols, family-integrated approach where appropriate."}},
        {"@type": "Question", "name": "How is stress management at Vedara different from other Ayurveda clinics in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "DHA-licensed BAMS-qualified doctors including female practitioner Dr. Neethu. Comprehensive constitutional assessment. Multi-modal approach. Coordinated with modern mental health care. Integrated with dermatology, physiotherapy, home healthcare at same JVC clinic. Multi-language capability."}},
        {"@type": "Question", "name": "How do I book stress management consultation?", "acceptedAnswer": {"@type": "Answer", "text": "Three ways: WhatsApp specifying stress management consultation ideally with Dr. Neethu; call 9AM-9PM seven days a week; book online. Please bring: description of stress and anxiety concerns, current medications, previous approaches, insurance card if applicable, cultural preferences, specific questions and goals."}}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/#webpage",
      "name": "Stress and Anxiety Ayurvedic Treatment at Our JVC Clinic Dubai",
      "url": "https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/",
      "about": [
        {"@type": "MedicalCondition", "name": "Chronic Stress"},
        {"@type": "MedicalCondition", "name": "Generalised Anxiety"},
        {"@type": "MedicalCondition", "name": "Burnout Syndrome"}
      ],
      "mainContentOfPage": {"@type": "WebPageElement", "cssSelector": "main"},
      "reviewedBy": {"@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician"},
      "lastReviewed": "2026-08-20",
      "audience": {"@type": "MedicalAudience", "audienceType": "Patient"},
      "medicalAudience": "Patient",
      "specialty": {"@type": "MedicalSpecialty", "name": "Ayurveda"}
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician",
      "name": "Dr. Neethu",
      "url": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/",
      "image": "https://vedaracare.ae/og-images/dr-neethu.jpg",
      "medicalSpecialty": ["Ayurveda", "Stress Management", "Anxiety Management"],
      "hasCredential": [
        {"@type": "EducationalOccupationalCredential", "name": "BAMS"},
        {"@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor"}
      ],
      "gender": "Female",
      "knowsAbout": [
        "Stress Management Ayurveda",
        "Anxiety Ayurvedic Care",
        "Shirodhara Therapy",
        "Nasya Therapy",
        "Abhyanga",
        "Burnout Recovery",
        "Chronic Stress Management",
        "Sleep Disorders Ayurveda",
        "Nadi Pareeksha",
        "Prakriti Assessment",
        "Ayurvedic Herbal Medicine",
        "Expatriate Wellness"
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"},
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 55 573 6312",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"]
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Stress & Anxiety Ayurveda JVC | Female Doctor | Vedara Care Dubai</title>
        <meta name="description" content="Authentic Ayurvedic stress and anxiety treatment at our JVC clinic Dubai. Female DHA-licensed doctor. Shirodhara, herbal medicines, personalised care. Multi-language. Coordinated with modern mental health." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/stress-anxiety-ayurveda-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/" />
        <meta property="og:title" content="Stress & Anxiety Ayurvedic Treatment at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurvedic stress and anxiety care at Vedara Care JVC clinic, walking distance from Circle Mall. Female DHA-licensed BAMS Ayurvedic doctor Dr. Neethu. Shirodhara, Nasya, Abhyanga, herbal medicines. Multi-language. Coordinated with modern mental health care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/stress-anxiety-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/stress-anxiety-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stress & Anxiety Ayurveda JVC | Female Doctor | Vedara" />
        <meta name="twitter:description" content="DHA-licensed authentic Ayurvedic stress management at JVC. Female doctor. Multi-language." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/stress-anxiety-ayurveda-jvc.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...stressJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...stressJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / What We Are Treating */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          // rightContentStyle="tags"
          bgColor="bg-white"
          data={stressJvcMechanism}

        />

        {/* Section 4: PostnatalComponents — The Four Pillars */}

        <SciaticaTypes
          bgColor={stressJvcComponents.bgColor}
          title={stressJvcComponents.title}
          types={stressJvcComponents.types}
          description={stressJvcComponents.description}
          items={stressJvcComponents.items}
          footerNote={stressJvcComponents.footerNote}
          row1Columns={stressJvcComponents.row1Columns}
          row2Columns={stressJvcComponents.row2Columns}
          row1Count={stressJvcComponents.row1Count}
        />

        {/* Section 5: ManualTherapySession — What To Expect */}
        {/* <ManualTherapySession
          bgColor={stressJvcSession.bgColor}
          cardColor={stressJvcSession.cardColor}
          label={stressJvcSession.label}
          title={stressJvcSession.title}
          subtitle={stressJvcSession.subtitle}
          sections={stressJvcSession.sections}
          safetyCard={stressJvcSession.safetyCard}
        /> */}


        <ContentWithSidebar
          bgColor={stressJvcApproaches.bgColor}
          label={stressJvcApproaches.label}
          title={stressJvcApproaches.title}
          contentSections={stressJvcApproaches.contentSections}
          sidebar={stressJvcApproaches.sidebar}
        />

        <section
          style={{
            background: "rgb(255, 255, 255)",
            padding: "96px 32px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            {/* Header */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgb(200, 168, 127)",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Your Journey
              </p>

              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.15,
                  color: "rgb(31, 31, 31)",
                  marginBottom: "20px",
                  letterSpacing: "-0.015em",
                }}
              >
                What comprehensive Ayurvedic stress management journey looks like at our JVC clinic.
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: "rgb(85, 85, 85)",
                  maxWidth: "640px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Realistic understanding of timeline helps set appropriate expectations.
              </p>
            </div>

            {/* Four Phases */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "24px",
                marginBottom: "48px",
              }}
            >
              {/* Phase 1 */}
              <div
                style={{
                  background: "rgb(245, 240, 232)",
                  padding: "28px",
                  borderRadius: "8px",
                  borderTop: "4px solid rgb(200, 168, 127)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "4px",
                  }}
                >
                  Phase 1
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "19px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "4px",
                  }}
                >
                  Assessment & Foundation
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    color: "rgb(119, 119, 119)",
                    marginBottom: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Week 1
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Comprehensive 90-minute initial consultation with Dr. Neethu
                  identifying your stress patterns, constitutional factors, life
                  context, previous approaches, and treatment goals. Personalised
                  treatment plan design. First treatments may begin. Foundation
                  lifestyle recommendations initiated. Initial herbal medicines
                  prescribed if appropriate.
                </p>
              </div>

              {/* Phase 2 */}
              <div
                style={{
                  background: "rgb(245, 240, 232)",
                  padding: "28px",
                  borderRadius: "8px",
                  borderTop: "4px solid rgb(200, 168, 127)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "4px",
                  }}
                >
                  Phase 2
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "19px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "4px",
                  }}
                >
                  Active Treatment Intensive
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    color: "rgb(119, 119, 119)",
                    marginBottom: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Weeks 2–6
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Regular treatment sessions building sustained calming response.
                  Shirodhara series (twice weekly to daily depending on programme
                  intensity), possible Nasya and Abhyanga integration, herbal medicine
                  adjustments based on response. Initial improvements often visible —
                  better sleep, reduced physical tension, calmer baseline state.
                </p>
              </div>

              {/* Phase 3 */}
              <div
                style={{
                  background: "rgb(245, 240, 232)",
                  padding: "28px",
                  borderRadius: "8px",
                  borderTop: "4px solid rgb(200, 168, 127)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "4px",
                  }}
                >
                  Phase 3
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "19px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "4px",
                  }}
                >
                  Sustained Improvement and Integration
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    color: "rgb(119, 119, 119)",
                    marginBottom: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Weeks 6–12
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Continued treatments at reducing frequency, herbal medicine
                  maintenance, lifestyle practices becoming sustained habits and
                  integrated into daily life. Substantial improvement typically
                  apparent — reduced stress reactivity, better sleep quality,
                  improved emotional regulation, better physical wellbeing.
                </p>
              </div>

              {/* Phase 4 */}
              <div
                style={{
                  background: "rgb(245, 240, 232)",
                  padding: "28px",
                  borderRadius: "8px",
                  borderTop: "4px solid rgb(200, 168, 127)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "4px",
                  }}
                >
                  Phase 4
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "19px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "4px",
                  }}
                >
                  Long-Term Wellness Partnership
                </h4>

                <p
                  style={{
                    fontSize: "13px",
                    color: "rgb(119, 119, 119)",
                    marginBottom: "16px",
                    fontStyle: "italic",
                  }}
                >
                  Month 3+
                </p>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Transitioned to sustained wellness partnership with periodic
                  treatments, ongoing lifestyle practices, seasonal adjustments as
                  life circumstances evolve. Some patients continue monthly
                  maintenance Shirodhara; others transition to quarterly programmes
                  with intensification during high-stress periods.
                </p>
              </div>
            </div>

            {/* Variation + Outcomes */}
            <div
              style={{
                maxWidth: "720px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: 1.75,
                  color: "rgb(85, 85, 85)",
                  marginBottom: "32px",
                }}
              >
                Individual variation is substantial based on stress severity,
                constitutional factors, treatment adherence, life circumstances, and
                personal response. Some patients experience substantial early
                improvement; others benefit more from sustained programme continuation.
              </p>

              {/* Outcome Box */}
              <div
                style={{
                  background: "rgb(240, 235, 227)",
                  borderRadius: "8px",
                  padding: "32px",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px",
                  }}
                >
                  {/* Can Achieve */}
                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        color: "rgb(200, 168, 127)",
                        marginBottom: "12px",
                      }}
                    >
                      Can Achieve
                    </p>

                    {[
                      "Substantial reduction in stress reactivity",
                      "Improved sleep quality",
                      "Better emotional regulation",
                      "Reduced physical tension symptoms",
                      "Improved digestive function",
                      "Culturally acceptable non-pharmaceutical approach",
                      "Effective coordination with modern care",
                    ].map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <Check
                          size={18}
                          strokeWidth={1.8}
                          style={{
                            flexShrink: 0,
                            marginTop: "2px",
                            color: "rgb(200, 168, 127)",
                            background: "rgba(200, 168, 127, 0.15)",
                            borderRadius: "50%",
                            padding: "2px",
                          }}
                        />

                        <span
                          style={{
                            fontSize: "13px",
                            color: "rgb(85, 85, 85)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Cannot Achieve */}
                  <div>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                        color: "rgb(119, 119, 119)",
                        marginBottom: "12px",
                      }}
                    >
                      Cannot Achieve
                    </p>

                    {[
                      "Instant transformation from lifetime patterns",
                      "Permanent results without continued practice",
                      "Substitute for specialist care in severe mental health conditions",
                      "Rapid change without lifestyle engagement",
                      "Treatment appropriate for all patients",
                    ].map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <X
                          size={18}
                          strokeWidth={1.8}
                          style={{
                            flexShrink: 0,
                            marginTop: "2px",
                            color: "rgb(119, 119, 119)",
                            background: "rgba(119, 119, 119, 0.13)",
                            borderRadius: "50%",
                            padding: "2px",
                          }}
                        />

                        <span
                          style={{
                            fontSize: "13px",
                            color: "rgb(119, 119, 119)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}

                    {/* Important Note */}
                    <div
                      style={{
                        marginTop: "16px",
                        paddingTop: "16px",
                        borderTop: "1px solid rgb(240, 235, 227)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgb(192, 57, 43)",
                          lineHeight: 1.6,
                        }}
                      >
                        <strong>Important:</strong> Severe mental health concerns
                        require modern specialist care. We support alongside rather
                        than substitute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 7: Reviews */}
        <TreatmentReviews
          {...stressJvcReviews} />

        <section
          style={{
            background: "rgb(255, 255, 255)",
            padding: "96px 32px",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
            }}
          >
            {/* Header */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgb(200, 168, 127)",
                  fontWeight: 600,
                  marginBottom: "16px",
                  textAlign: "center",
                }}
              >
                The Team
              </p>

              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.15,
                  color: "rgb(31, 31, 31)",
                  marginBottom: "20px",
                  letterSpacing: "-0.015em",
                }}
              >
                Ayurvedic doctors for stress and anxiety care at our JVC clinic serving Dubai.
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: "rgb(85, 85, 85)",
                  maxWidth: "720px",
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                DHA-licensed BAMS-qualified Ayurvedic doctors with substantial stress
                management expertise. Female practitioner (Dr. Neethu) available.
                Multi-language including Arabic, English, Hindi, Malayalam, Urdu.
              </p>
            </div>

            {/* Team Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {/* Lead Doctor */}
              <div
                style={{
                  gridColumn: "span 2",
                  background: "rgb(245, 240, 232)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                {/* Doctor Image */}
                <img
                  src=""
                  alt="Dr. Neethu, Lead Ayurvedic Doctor at Vedara Care JVC clinic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    minHeight: "320px",
                  }}
                />

                {/* Doctor Content */}
                <div
                  style={{
                    padding: "40px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "rgb(200, 168, 127)",
                      fontWeight: 600,
                      marginBottom: "16px",
                      textAlign: "left",
                    }}
                  >
                    Lead Ayurvedic Doctor
                  </p>

                  <h3
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: "28px",
                      fontWeight: 500,
                      color: "rgb(31, 31, 31)",
                      marginBottom: "16px",
                    }}
                  >
                    Dr. Neethu
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgb(85, 85, 85)",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                    }}
                  >
                    DHA-licensed BAMS-qualified Ayurvedic Doctor with substantial
                    stress and anxiety management expertise. Female practitioner
                    providing comprehensive constitutional assessment, personalised
                    treatment planning, and sustained partnership approach. Cultural
                    competence across Dubai's diverse community. Specialised expertise
                    across all stress and anxiety presentations from chronic work
                    stress to burnout recovery.
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "24px",
                    }}
                  >
                    {[
                      "DHA-Licensed",
                      "BAMS Qualified",
                      "Female Practitioner",
                      "Malayalam Speaker",
                      "Stress Specialist",
                    ].map((tag, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: "11px",
                          background: "rgba(200, 168, 127, 0.133)",
                          color: "rgb(200, 168, 127)",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Profile Link */}
                  <Link
                    href="/doctors/dr-neethu-ayurveda/"
                    style={{
                      fontSize: "14px",
                      color: "rgb(200, 168, 127)",
                      textDecoration: "none",
                      fontWeight: 600,
                      borderBottom: "1px solid rgb(200, 168, 127)",
                      paddingBottom: "2px",
                    }}
                  >
                    View full profile →
                  </Link>
                </div>
              </div>

              {/* Ayurvedic Therapy Team */}
              <div
                style={{
                  background: "rgb(240, 235, 227)",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "16px",
                  }}
                >
                  ◈
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "12px",
                  }}
                >
                  Ayurvedic Therapy Team
                </h4>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Trained female and male therapists delivering therapeutic components
                  including Shirodhara, Nasya, Abhyanga under doctor supervision.
                  Cultural sensitivity. Multi-language capability.
                </p>
              </div>

              {/* Modern Mental Health Coordination */}
              <div
                style={{
                  background: "rgb(240, 235, 227)",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "16px",
                  }}
                >
                  ◇
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "12px",
                  }}
                >
                  Modern Mental Health Coordination
                </h4>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  Our approach coordinates with modern mental health specialists when
                  the clinical situation warrants. Complementary integration serving
                  patient wellbeing. Referral pathways to psychologists and
                  psychiatrists when appropriate.
                </p>
              </div>

              {/* Multi-Disciplinary Team */}
              <div
                style={{
                  background: "rgb(240, 235, 227)",
                  borderRadius: "8px",
                  padding: "32px",
                }}
              >
                <p
                  style={{
                    fontSize: "28px",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "16px",
                  }}
                >
                  ◆
                </p>

                <h4
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "rgb(31, 31, 31)",
                    marginBottom: "12px",
                  }}
                >
                  Multi-Disciplinary Team
                </h4>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(85, 85, 85)",
                    lineHeight: 1.7,
                  }}
                >
                  When stress management benefits from physiotherapy for physical
                  tension, dermatology for stress-related skin concerns, or home
                  healthcare for comprehensive support — coordinated multi-disciplinary
                  care at same JVC clinic.
                </p>
              </div>
            </div>
          </div>
        </section>



        <PostnatalPricingTableImage data={stressJvcPricing} />


        {/* Section 10: FAQ */}
        <FAQ
          {...stressJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...stressJvcLocation} />

        {/* Section 12: Medical Disclaimer */}
        <MedicalDisclaimer
          text="Ayurvedic stress and anxiety care at Vedara Care JVC clinic is complementary wellness support delivered under DHA-licensed BAMS-qualified Ayurvedic supervision. It is not a substitute for modern psychiatric or psychological care in severe mental health conditions including severe depression, suicidal ideation, severe anxiety disorders, or active psychosis. All patients with severe concerns are referred to qualified modern mental health specialists. Ayurvedic support is provided alongside modern specialist care when clinically appropriate. Individual outcomes vary based on severity, constitutional factors, treatment adherence, and life circumstances. Nothing on this page constitutes a medical diagnosis or guarantee of outcome."
        />

        {/* Section 13: Final CTA */}
        <FinalCTA
          {...stressJvcCTA}
          bgColor="bg-[#F6F1E9]"
        />

        {/* Section 14: Related Pages */}
        <RelatedPages {...stressJvcRelatedPages} />

        {/* Section 15: Related Articles (image grid) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgb(184, 145, 90)' }}>
                {stressJvcRelatedArticles.label}
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontWeight: 500 }}>
                {stressJvcRelatedArticles.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stressJvcRelatedArticles.articles.map((article, index) => (
                <div key={index} className="flex flex-col rounded-xl overflow-hidden border border-[#E5DFD3]/40 hover:shadow-md transition-all duration-300">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow bg-[#FAF8F5]">
                    <div className="space-y-3">

                      <h3 className="text-[16px] font-serif text-[#1A1A1A] leading-snug" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">
                        {article.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-auto">
                      <Link href={article.href} className="text-xs font-semibold uppercase tracking-[0.1em] hover:underline inline-flex items-center gap-1" style={{ color: 'rgb(184, 145, 90)' }}>
                        Learn more →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>



      </main>
    </>
  );
};

export default StressAnxietyAyurvedaJvc;
