import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import AyurvedicTeam from '../../components/ayurveda/AyurvedicTeam';
import FAQ from '../../components/home/FAQ';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import { Check } from "lucide-react";
import {
  insomniaJvcHero,
  insomniaJvcIntro,
  insomniaJvcMechanism,
  insomniaJvcConditions,
  insomniaJvcApproaches,
  insomniaTeam,
  insomniaFaqs,
  insomniaJvcLocation,
  insomniaCTA,
  insomniaJvcRelatedPages,
  insomniaJvcRelatedArticles,
  insomniaJvcReviews
} from '../../data/insomniaAyurvedaJvcData';

const InsomniaAyurvedaJvc = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/#insomnia-care",
      "name": "Vedara Care Insomnia Ayurvedic Treatment JVC",
      "alternateName": ["Vedara Insomnia Ayurveda JVC", "Ayurvedic Sleep Restoration JVC Dubai", "Vedara Sleep Ayurvedic Care"],
      "url": "https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic Ayurvedic insomnia and sleep treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Neethu delivering comprehensive sleep restoration through Shirodhara, Padabhyanga, Nasya, Abhyanga, sleep-supporting herbal medicines, and sleep hygiene counselling. Coordinated with modern sleep medicine.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 400 - AED 20,000",
      "address": { "@type": "PostalAddress", "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE", "postalCode": "00000" },
      "geo": { "@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.207223" },
      "hasMap": "https://maps.google.com/?q=Vedara+Care+Polyclinic+JVC",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "21:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "18:00" }
      ],
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Circle Mall JVC Vicinity" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Business Bay" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Jumeirah Lake Towers" },
        { "@type": "Place", "name": "Emirates Hills" },
        { "@type": "Place", "name": "Arabian Ranches" },
        { "@type": "Place", "name": "Mirdif" }
      ],
      "medicalSpecialty": ["Ayurveda", "Sleep Medicine", "Insomnia Treatment", "Integrative Medicine", "Traditional Medicine", "Mental Wellness"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Ayurvedic Insomnia Consultation" },
        { "@type": "MedicalProcedure", "name": "Shirodhara for Sleep" },
        { "@type": "MedicalProcedure", "name": "Padabhyanga Foot Massage" },
        { "@type": "MedicalProcedure", "name": "Nasya Therapy for Sleep" },
        { "@type": "MedicalProcedure", "name": "Abhyanga Oil Massage" },
        { "@type": "MedicalProcedure", "name": "Ayurvedic Sleep Herbal Medicine Prescription" },
        { "@type": "MedicalProcedure", "name": "Constitutional Sleep Assessment" },
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
        { "@type": "MedicalProcedure", "name": "Comprehensive Sleep Restoration Programme" },
        { "@type": "MedicalProcedure", "name": "Jet Lag Support Programme" },
        { "@type": "MedicalProcedure", "name": "Shift Worker Sleep Support Programme" },
        { "@type": "MedicalProcedure", "name": "Ramadan Sleep Pattern Guidance" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "850", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "lastReviewed": "2026-08-20"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Chronic Primary Insomnia",
      "alternateName": ["Primary Insomnia", "Chronic Insomnia Disorder"],
      "code": { "@type": "MedicalCode", "code": "F51.0", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ayurvedic Sleep Restoration" },
        { "@type": "MedicalTherapy", "name": "Shirodhara" },
        { "@type": "MedicalTherapy", "name": "Padabhyanga" },
        { "@type": "MedicalTherapy", "name": "Constitutional Ayurvedic Care" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Sleep-Onset Insomnia",
      "alternateName": ["Initial Insomnia", "Sleep Initiation Disorder"],
      "code": { "@type": "MedicalCode", "code": "F51.01", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ayurvedic Sleep-Onset Treatment" },
        { "@type": "MedicalTherapy", "name": "Shirodhara" },
        { "@type": "MedicalTherapy", "name": "Ashwagandha and Jatamansi Herbal Medicine" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Sleep-Maintenance Insomnia",
      "alternateName": ["Middle Insomnia", "Sleep Maintenance Disorder"],
      "code": { "@type": "MedicalCode", "code": "F51.02", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ayurvedic Sleep Maintenance Treatment" },
        { "@type": "MedicalTherapy", "name": "Shirodhara with Cooling Oils" },
        { "@type": "MedicalTherapy", "name": "Constitution-Matched Herbal Medicines" }
      ]
    },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Non-Restorative Sleep", "code": { "@type": "MedicalCode", "code": "G47.00", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Adjustment Insomnia", "code": { "@type": "MedicalCode", "code": "F51.02", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Circadian Rhythm Sleep Disorder", "code": { "@type": "MedicalCode", "code": "G47.20", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Jet Lag Disorder", "code": { "@type": "MedicalCode", "code": "G47.25", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Shift Work Sleep Disorder", "code": { "@type": "MedicalCode", "code": "G47.26", "codingSystem": "ICD-10" } },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Shirodhara for Sleep",
      "alternateName": ["Shirodhara Sleep Therapy", "Ayurvedic Oil Flow Sleep Treatment"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Continuous warm medicated oil flow across forehead for sleep quality improvement and insomnia treatment",
      "bodyLocation": { "@type": "AnatomicalStructure", "name": "Forehead" },
      "preparation": "Constitutional assessment identifies appropriate oil selection — Ksheerabala for Vata, Chandanadi for Pitta",
      "indication": [
        { "@type": "MedicalCondition", "name": "Chronic Primary Insomnia" },
        { "@type": "MedicalCondition", "name": "Sleep-Onset Insomnia" },
        { "@type": "MedicalCondition", "name": "Sleep-Maintenance Insomnia" },
        { "@type": "MedicalCondition", "name": "Stress-Related Insomnia" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Padabhyanga",
      "alternateName": ["Ayurvedic Foot Massage", "Padabhyanga Sleep Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Systematic foot massage with warm medicated oils targeting marma points affecting sleep-wake regulation",
      "bodyLocation": { "@type": "AnatomicalStructure", "name": "Feet" },
      "indication": [
        { "@type": "MedicalCondition", "name": "Chronic Primary Insomnia" },
        { "@type": "MedicalCondition", "name": "Sleep-Onset Insomnia" },
        { "@type": "MedicalCondition", "name": "Age-Related Sleep Changes" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Nasya Therapy for Sleep",
      "alternateName": ["Nasal Administration Sleep Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Medicated oil administration through nasal passages for nervous system support affecting sleep"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Abhyanga",
      "alternateName": ["Ayurvedic Oil Massage"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Systematic full-body oil massage supporting nervous system relaxation and sleep quality"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Insomnia Ayurvedic Treatment at JVC", "item": "https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can Ayurveda help with insomnia?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Ayurveda has addressed sleep concerns for over three thousand years, developing sophisticated multi-modal approach combining constitutional assessment, therapies particularly Shirodhara and Padabhyanga, herbal medicines, and sleep hygiene guidance. Substantial documented effectiveness for chronic primary insomnia, sleep-onset difficulties, sleep maintenance concerns, stress-related sleep disruption, hormonal sleep changes, and jet lag. Coordinated with modern sleep medicine when sleep apnea or severe sleep disorders suspected." } },
        { "@type": "Question", "name": "What is Shirodhara and why is it effective for sleep?", "acceptedAnswer": { "@type": "Answer", "text": "Shirodhara is continuous warm oil flow across forehead — flagship Ayurvedic therapy documented for sleep quality improvement. Produces profound nervous system calming, documented cortisol reduction, sustained sleep quality improvement effects. Different oils selected for different constitutional presentations. Series of 7-14 sessions typical for meaningful sleep restoration outcomes." } },
        { "@type": "Question", "name": "What is Padabhyanga and how does it help sleep?", "acceptedAnswer": { "@type": "Answer", "text": "Padabhyanga is systematic foot massage with warm medicated oils specifically effective for sleep concerns based on traditional Ayurvedic understanding of marma points on feet affecting sleep-wake regulation. Delivered as professional therapy series; patients can also adapt simple version for daily bedtime home practice supporting sustained sleep hygiene." } },
        { "@type": "Question", "name": "What Ayurvedic herbs help with sleep?", "acceptedAnswer": { "@type": "Answer", "text": "Common Ayurvedic herbs for sleep include Ashwagandha (Withania somnifera) for stress-related sleep, Jatamansi (Nardostachys jatamansi) for sleep onset difficulty, Brahmi (Bacopa monnieri) for mental relaxation, Tagara (Valeriana wallichii) with documented sleep effects, and classical compound preparations. Prescribed by qualified Ayurvedic doctors matched to individual constitution." } },
        { "@type": "Question", "name": "Can Ayurveda replace sleep medication?", "acceptedAnswer": { "@type": "Answer", "text": "Depends on situation and clinical judgement. Many patients with primary insomnia successfully transition from sleep medications to Ayurvedic approach with medical coordination. Severe insomnia disorders, suspected sleep apnea, and specific medical conditions may require continued modern medical management. Discussion with prescribing doctor essential before medication changes." } },
        { "@type": "Question", "name": "What if I suspect sleep apnea?", "acceptedAnswer": { "@type": "Answer", "text": "Suspected sleep apnea requires sleep specialist referral for sleep study evaluation — we do not attempt to treat sleep apnea with Ayurvedic approach alone. Signs warranting sleep specialist evaluation: loud snoring, witnessed pauses in breathing during sleep, daytime sleepiness disproportionate to sleep duration, morning headaches. Consultation includes screening; referral to modern sleep specialist provided when appropriate." } },
        { "@type": "Question", "name": "Where in Dubai is your clinic?", "acceptedAnswer": { "@type": "Answer", "text": "DHA-licensed clinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Accessible from Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif." } },
        { "@type": "Question", "name": "Do you have female Ayurvedic doctor for sleep concerns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Dr. Neethu is female DHA-licensed BAMS-qualified Ayurvedic doctor with substantial sleep concern expertise particularly important for hormonal sleep disruption (perimenopausal, menstrual-related, postpartum) and cultural preferences for same-gender consultation." } },
        { "@type": "Question", "name": "How long does Ayurvedic sleep treatment take?", "acceptedAnswer": { "@type": "Answer", "text": "Timeline varies substantially by presentation. Some patients experience initial sleep improvement within 2-3 weeks. Substantial sustained improvement typically 6-8 weeks with committed programme. Chronic long-duration insomnia typically requires longer restoration journey. Long-term sleep hygiene is ongoing partnership rather than time-limited treatment." } },
        { "@type": "Question", "name": "Do you offer sleep support during Ramadan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Ramadan sleep pattern guidance available for Muslim patients. Ayurvedic approach supports sustained wellness within Ramadan practice — dietary timing at Suhoor and Iftar supporting sleep quality during limited sleep window, appropriate practices, herbal support consistent with fasting, cultural respect throughout guidance." } },
        { "@type": "Question", "name": "What about jet lag and travel-related sleep concerns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — jet lag support programmes available for Dubai's substantial international travel demographic. Constitutional assessment, targeted Shirodhara series, herbal circadian support, sleep hygiene protocol for travel and post-travel recovery, timing guidance for eastbound and westbound travel patterns." } },
        { "@type": "Question", "name": "What about shift work sleep concerns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — shift work sleep support available for Dubai's substantial hospitality, healthcare, security, and aviation demographics. Constitutional assessment, sleep support matched to shift patterns, herbal medicines supporting alternative sleep times, sleep environment optimisation for daytime sleep, sustainable approach for shift workers." } },
        { "@type": "Question", "name": "What about menopausal or hormonal sleep concerns?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — hormonal sleep concerns among Dubai's substantial female demographic addressed with specialised approach. Female practitioner (Dr. Neethu) available. Constitutional assessment addressing hormonal factors, targeted herbal medicines for hormonal sleep support, coordinated care with gynaecological assessment when relevant." } },
        { "@type": "Question", "name": "Can I do Ayurvedic treatment while on sleep medications?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — coordination essential. All current medications reviewed during consultation. Ayurvedic herbs selected for compatibility with your sleep medications. Any medication reduction discussed with your prescribing doctor as appropriate. We do not recommend abrupt sleep medication cessation — coordinated tapering with prescribing doctor when appropriate." } },
        { "@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": { "@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Ayurvedic tradition), Urdu across our team." } },
        { "@type": "Question", "name": "Is Ayurvedic sleep treatment covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Typically self-pay as wellness/complementary care. Some elements may be covered with medical justification for chronic insomnia disorder or sleep concerns with underlying medical condition. Direct billing with seven major insurers for covered elements." } },
        { "@type": "Question", "name": "Can I do Ayurvedic sleep treatment as complete beginner?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — no prior Ayurvedic experience required. Comprehensive initial consultation includes education about Ayurvedic sleep principles, treatment approaches, expected experience, realistic outcomes. Patient education central to informed engagement throughout programme." } },
        { "@type": "Question", "name": "What about children and sleep concerns?", "acceptedAnswer": { "@type": "Answer", "text": "Pediatric Ayurvedic sleep support available for adolescents and older children with age-appropriate approaches. Gentler protocols. Consultation identifies whether Ayurvedic approach suitable for child's situation. Some pediatric sleep concerns require pediatric sleep specialist assessment as primary approach." } },
        { "@type": "Question", "name": "How is sleep care at Vedara different from other Ayurveda clinics in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "DHA-licensed BAMS-qualified doctors including female practitioner Dr. Neethu. Comprehensive constitutional and sleep assessment including sleep apnea screening. Multi-modal approach. Coordinated with modern sleep medicine when appropriate. Integrated with stress and anxiety care given substantial overlap. Multi-language capability. Cultural competence including Ramadan considerations." } },
        { "@type": "Question", "name": "How do I book sleep consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Three ways: WhatsApp specifying sleep consultation ideally with Dr. Neethu; call 9AM-9PM seven days a week; book online. Please bring: description of sleep concerns and duration, current sleep patterns, current medications including sleep medications, previous sleep management approaches, sleep environment description, insurance card if applicable, cultural preferences, specific questions and goals." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Insomnia Ayurvedic Treatment at Our JVC Clinic Dubai",
      "url": "https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/",
      "about": [
        { "@type": "MedicalCondition", "name": "Chronic Primary Insomnia" },
        { "@type": "MedicalCondition", "name": "Sleep-Onset Insomnia" },
        { "@type": "MedicalCondition", "name": "Sleep-Maintenance Insomnia" },
        { "@type": "MedicalCondition", "name": "Non-Restorative Sleep" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "lastReviewed": "2026-08-20",
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "medicalAudience": "Patient",
      "specialty": { "@type": "MedicalSpecialty", "name": "Ayurveda" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician",
      "name": "Dr. Neethu",
      "url": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/",
      "medicalSpecialty": ["Ayurveda", "Sleep Medicine", "Insomnia Treatment"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Insomnia Ayurvedic Treatment",
        "Chronic Primary Insomnia",
        "Sleep-Onset Insomnia",
        "Sleep-Maintenance Insomnia",
        "Shirodhara Therapy",
        "Padabhyanga Foot Massage",
        "Nasya Therapy",
        "Abhyanga",
        "Ayurvedic Sleep Herbal Medicine",
        "Hormonal Sleep Disruption",
        "Jet Lag Ayurvedic Care",
        "Shift Work Sleep Care",
        "Ramadan Sleep Guidance",
        "Nadi Pareeksha",
        "Prakriti Assessment",
        "Constitutional Sleep Assessment",
        "Sleep Hygiene Counselling"
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
      "sameAs": ["https://www.facebook.com/vedaracare", "https://www.instagram.com/vedaracare", "https://www.linkedin.com/company/vedaracare", "https://www.google.com/maps/place/Vedara+Care+Polyclinic"],
      "contactPoint": { "@type": "ContactPoint", "telephone": "+971 55 573 6312", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"] }
    }
  ];

  return (
    <>
      <Head>
        <title>Insomnia Ayurveda JVC | Sleep Restoration | Vedara Care Dubai</title>
        <meta name="description" content="Authentic Ayurvedic insomnia and sleep treatment at our JVC clinic Dubai. Female DHA-licensed doctor. Shirodhara, Padabhyanga, herbal medicines. Multi-language. Coordinated with modern sleep medicine." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/insomnia-ayurveda-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/" />

        <meta property="og:title" content="Insomnia Ayurvedic Treatment at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurvedic sleep restoration at Vedara Care JVC clinic, walking distance from Circle Mall. Female DHA-licensed BAMS Ayurvedic doctor Dr. Neethu. Shirodhara, Padabhyanga, Nasya, Abhyanga, sleep-supporting herbal medicines. Multi-language. Coordinated with modern sleep medicine." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/insomnia-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/insomnia-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insomnia Ayurveda JVC | Sleep Restoration | Vedara" />
        <meta name="twitter:description" content="DHA-licensed authentic Ayurvedic sleep restoration at JVC. Female doctor. Shirodhara, Padabhyanga." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/insomnia-ayurveda-jvc.jpg" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        <AyurvedaHero {...insomniaJvcHero} />

        <AyurvedaIntro {...insomniaJvcIntro} bgColor="bg-white" />



        <SciaticaTreatment
          data={insomniaJvcMechanism}
          showBorderLeft={false}
          rightContentStyle="imageOnly"
          bgColor="bg-[#F0EBE3]"
        />


        <SportsInjuryTypes
          bgColor={insomniaJvcConditions.bgColor}
          cardBgColor="#F5F0E8"
          title={insomniaJvcConditions.title}
          label={insomniaJvcConditions.label}
          description={insomniaJvcConditions.description}
          footer={insomniaJvcConditions.footerNote}
          items={insomniaJvcConditions.items || insomniaJvcConditions.types || []}
          lgColumns={4}
        />

        <ContentWithSidebar {...insomniaJvcApproaches} />


        {/* The Journey Section */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 32px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", fontWeight: 600, marginBottom: "16px" }}>
                YOUR JOURNEY
              </p>
              <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, color: "rgb(31, 31, 31)", marginBottom: "20px", letterSpacing: "-0.015em" }}>
                What comprehensive Ayurvedic sleep restoration journey looks like at our JVC clinic.
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgb(110, 110, 110)", fontSize: "16px", lineHeight: 1.55, marginBottom: "24px" }}>
                Realistic understanding of timeline helps set appropriate expectations for meaningful sleep quality outcomes.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
              {[
                { phase: "Phase 1", title: "Assessment & Foundation", time: "Week 1", desc: "Comprehensive 90-minute initial consultation with Dr. Neethu identifying your sleep patterns, constitutional factors, life context, previous sleep management approaches, current medications, and treatment goals. Sleep apnea screening. Personalised treatment plan design. First treatments may begin. Foundation sleep hygiene recommendations initiated. Initial herbal medicines prescribed if appropriate." },
                { phase: "Phase 2", title: "Active Treatment Intensive", time: "Weeks 2–4", desc: "Regular treatment sessions building sustained sleep improvement. Shirodhara series (twice weekly typical), Padabhyanga integration, possible Nasya and Abhyanga, herbal medicine adjustments based on response, dietary and sleep hygiene implementation. Initial sleep improvements often visible — easier sleep onset, better sleep continuity, more restorative sleep quality." },
                { phase: "Phase 3", title: "Sleep Quality Consolidation", time: "Weeks 4-8", desc: "Continued treatments at reducing frequency, herbal medicine maintenance and adjustment, sleep hygiene practices becoming sustained habits. Substantial sleep improvement typically apparent — reliable sleep onset, sustained continuity, restorative quality, improved daytime function. Sleep medication reduction discussed with prescribing doctor as appropriate." },
                { phase: "Phase 4", title: "Long-Term Sleep Hygiene Partnership", time: "Month 2+", desc: "Transitioned to sustained sleep hygiene partnership with periodic treatments, ongoing lifestyle practices, seasonal adjustments as needed. Some patients continue monthly maintenance Shirodhara; others transition to quarterly programme with intensification during high-stress periods or travel." }
              ].map((item, idx) => (
                <div key={idx} style={{ background: "rgb(245, 240, 232)", padding: "28px", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "4px" }}>{item.phase}</p>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "19px", color: "rgb(31, 31, 31)", marginBottom: "4px" }}>{item.title}</h4>
                  <p style={{ fontSize: "13px", color: "rgb(119, 119, 119)", marginBottom: "16px", fontStyle: "italic" }}>{item.time}</p>
                  <p style={{ fontSize: "15px", color: "rgb(85, 85, 85)", lineHeight: 1.7 }}>{item.desc}</p>

                </div>

              ))}
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "48px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: "rgb(85, 85, 85)", marginBottom: "32px", textAlign: "left" }}>
                Individual variation is substantial based on insomnia severity and duration, constitutional factors, treatment adherence, life circumstances, and personal response. Some patients experience substantial early improvement; others benefit more from sustained programme continuation. Chronic long-duration insomnia typically requires a longer restoration journey than acute recent sleep concerns.
              </p>

              <div style={{ background: "rgb(240, 235, 227)", borderRadius: "8px", padding: "32px", borderLeft: "4px solid rgb(200, 168, 127)", textAlign: "left" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(31, 31, 31)", marginBottom: "20px" }}>
                  IMPORTANT — REALISTIC FRAMING
                </p>
                <p style={{ fontSize: "15px", color: "rgb(85, 85, 85)", lineHeight: 1.7, marginBottom: "20px" }}>
                  <span style={{ fontWeight: 600, color: "rgb(60, 60, 60)" }}>Ayurvedic sleep restoration can achieve:</span> Substantial improvement in sleep quality; easier sleep onset; better sleep continuity; more restorative sleep experience; improved daytime function; reduced dependence on sleep medications with appropriate medical coordination.
                </p>
                <p style={{ fontSize: "15px", color: "rgb(85, 85, 85)", lineHeight: 1.7 }}>
                  <span style={{ fontWeight: 600, color: "rgb(60, 60, 60)" }}>What Ayurvedic approach cannot achieve:</span> Instant transformation of chronic long-duration insomnia; substitute for sleep specialist assessment when sleep apnea is suspected — which requires a sleep study; treatment appropriate for all patients — some sleep concerns require modern medical primary care. <span style={{ fontStyle: "italic", color: "rgb(119, 119, 119)" }}>Suspected sleep apnea requires sleep specialist referral — we do not attempt to treat sleep apnea with Ayurvedic approach alone.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <TreatmentReviews {...insomniaJvcReviews} useKneeStyle={true} />

        <AyurvedicTeam {...insomniaTeam} />

        {/* Pricing Section */}
        <section id="pricing" style={{ background: "rgb(245, 240, 232)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ color: "rgb(200, 168, 127)", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                Transparent Pricing
              </p>
              <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.2, color: "rgb(31, 31, 31)", letterSpacing: "-0.02em", maxWidth: "640px", margin: "0 auto" }}>
                Insomnia Ayurvedic care consultation and treatment pricing at our JVC clinic.
              </h2>
            </div>

            <div style={{ background: "rgb(255, 255, 255)", borderRadius: "8px", overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 24px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgb(240, 235, 227)" }}>
                    {["Service", "Duration", "Price"].map((h) => (
                      <th key={h} style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", padding: "18px 24px", textAlign: "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Initial insomnia consultation with Dr. Neethu (Nadi Pareeksha + Prakriti + sleep history + treatment plan)", duration: "90 min", price: "AED [X]", alt: false },
                    { service: "Follow-up consultation", duration: "30–45 min", price: "AED [X]", alt: true },
                    { service: "Individual Shirodhara session", duration: "60–75 min", price: "AED [X]", alt: false },
                    { service: "Shirodhara package (7 sessions)", duration: "3–4 weeks", price: "From AED [X]", alt: true },
                    { service: "Shirodhara package (14 sessions)", duration: "6–7 weeks", price: "From AED [X]", alt: false },
                    { service: "Individual Padabhyanga foot massage", duration: "45–60 min", price: "AED [X]", alt: true },
                    { service: "Padabhyanga package (7 sessions)", duration: "2–3 weeks", price: "From AED [X]", alt: false },
                    { service: "Individual Nasya therapy session", duration: "45–60 min", price: "AED [X]", alt: true },
                    { service: "Individual Abhyanga session", duration: "75–90 min", price: "AED [X]", alt: false },
                    { service: "Comprehensive 4-week sleep restoration intensive", duration: "4 weeks", price: "From AED [X]", alt: true },
                    { service: "Comprehensive 8-week sleep restoration programme", duration: "8 weeks", price: "From AED [X]", alt: false },
                    { service: "Sleep & stress combined programme", duration: "6–8 weeks", price: "From AED [X]", alt: true },
                    { service: "Jet lag support programme", duration: "Bespoke", price: "From AED [X]", alt: false },
                    { service: "Shift worker sleep support programme", duration: "Bespoke", price: "From AED [X]", alt: true },
                    { service: "Corporate sleep & stress wellness programme", duration: "Bespoke", price: "Consultation required", alt: false },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < 14 ? "1px solid rgb(240, 235, 227)" : "none", background: row.alt ? "rgba(250, 247, 242, 0.5)" : "rgb(255, 255, 255)" }}>
                      <td style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgb(31, 31, 31)", padding: "16px 24px", lineHeight: 1.5 }}>{row.service}</td>
                      <td style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", padding: "16px 24px", whiteSpace: "nowrap" }}>{row.duration}</td>
                      <td style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "rgb(200, 168, 127)", padding: "16px 24px", whiteSpace: "nowrap" }}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgb(119, 119, 119)", maxWidth: "880px", margin: "24px auto 0", textAlign: "center" }}>
              Insomnia Ayurvedic treatment typically self-pay as wellness/complementary care. Direct-billing with Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, MetLife for covered elements. WhatsApp insurance card for coverage discussion. Serving patients from across Dubai — Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif, JVC, JVT.
            </p>
          </div>
        </section>



        <FAQ {...insomniaFaqs} />

        <TreatmentLocation {...insomniaJvcLocation} />

        <FinalCTA {...insomniaCTA} />

        <RelatedPages {...insomniaJvcRelatedPages} />

        {/* Related Articles Component based on the screenshot text */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3 text-[rgb(184,145,90)]">
                {insomniaJvcRelatedArticles.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-[rgb(26,26,26)] font-medium">
                {insomniaJvcRelatedArticles.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {insomniaJvcRelatedArticles.articles.map((article, idx) => (
                <div key={idx} className="flex flex-col">
                  <p className="text-[10px] font-bold tracking-[0.1em] text-[rgb(153,153,153)] mb-3">
                    {article.category}
                  </p>
                  <Link href={article.link}>
                    <h3 className="font-serif text-[17px] leading-snug mb-3 hover:text-[rgb(200,168,127)] transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-[12px] text-[rgb(153,153,153)] mt-auto">
                    {article.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default InsomniaAyurvedaJvc;
