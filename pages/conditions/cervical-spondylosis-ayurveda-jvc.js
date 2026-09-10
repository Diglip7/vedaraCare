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
import FinalCTA from '../../components/ayurveda/FinalCTA';

import TeamSectionGrid from '../../components/ayurveda/TeamSectionGrid';
import {
  cervicalJvcHero,
  cervicalJvcIntro,
  cervicalJvcMechanism,
  cervicalJvcTypes,
  cervicalJvcApproaches,
  cervicalJvcReviews,
  cervicalJvcPricing,
  cervicalJvcFaqs,
  cervicalJvcLocation,
  cervicalJvcCTA,
  cervicalJvcTeam,

  cervicalJvcRelatedArticles
} from '../../data/cervicalSpondylosisAyurvedaJvcData';

const CervicalSpondylosisAyurvedaJvc = () => {

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/#cervical-spondylosis-ayurveda-care",
      "name": "Vedara Care Cervical Spondylosis Ayurvedic Treatment JVC",
      "alternateName": ["Vedara Cervical Spondylosis Ayurveda JVC", "Ayurvedic Greeva Sandhigata Vata Care JVC Dubai", "Vedara Cervical Degenerative Care"],
      "url": "https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic Ayurvedic cervical spondylosis sustained management at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Classical Greeva Sandhigata Vata tradition. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Neethu delivering constitutional approach through Griva Basti flagship cervical therapy, Nasya (classically emphasised for cervical spondylosis), Shiroabhyanga, Panchakarma programmes with Nasya integration, Abhyanga, Elakizhi, Trayodashang Guggulu (herbal medicine specifically emphasised in classical texts for cervical spondylosis), and sustained partnership approach. Coordinated with modern medical care and physiotherapy.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 400 - AED 45,000",
      "address": { "@type": "PostalAddress", "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE", "postalCode": "" },
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
      "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Cervical Spondylosis Care", "Greeva Sandhigata Vata Care", "Integrative Medicine", "Traditional Medicine", "Pain Management"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Ayurvedic Cervical Spondylosis Consultation" },
        { "@type": "MedicalProcedure", "name": "Griva Basti for Cervical Spondylosis" },
        { "@type": "MedicalProcedure", "name": "Nasya Nasal Medication for Cervical Spondylosis" },
        { "@type": "MedicalProcedure", "name": "Shiroabhyanga Head Massage" },
        { "@type": "MedicalProcedure", "name": "Panchakarma with Nasya Integration for Cervical Spondylosis" },
        { "@type": "MedicalProcedure", "name": "Abhyanga Oil Massage" },
        { "@type": "MedicalProcedure", "name": "Elakizhi Herbal Leaf Pouch Therapy" },
        { "@type": "MedicalProcedure", "name": "Trayodashang Guggulu Prescription for Cervical Spondylosis" },
        { "@type": "MedicalProcedure", "name": "Constitutional Assessment (Prakriti and Vikriti)" },
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
        { "@type": "MedicalProcedure", "name": "Comprehensive Cervical Spondylosis Sustained Management Programme" },
        { "@type": "MedicalProcedure", "name": "Screen-Related Earlier-Onset Cervical Spondylosis Programme" },
        { "@type": "MedicalProcedure", "name": "Cervical Spondylosis with Radiculopathy Coordinated Care" },
        { "@type": "MedicalProcedure", "name": "Post-Surgical Continuing Spondylosis Supportive Care" },
        { "@type": "MedicalProcedure", "name": "Older Patient Gentle Cervical Spondylosis Programme" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1200", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "lastReviewed": "2026-09-07"
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Cervical Spondylosis Without Myelopathy or Radiculopathy",
        "alternateName": ["Cervical Spondylosis", "Cervical Osteoarthritis", "Greeva Sandhigata Vata"],
        "code": { "@type": "MedicalCode", "code": "M47.812", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalTherapy", "name": "Classical Ayurvedic Greeva Sandhigata Vata Treatment" },
          { "@type": "MedicalTherapy", "name": "Griva Basti Series" },
          { "@type": "MedicalTherapy", "name": "Nasya Nasal Medication" },
          { "@type": "MedicalTherapy", "name": "Trayodashang Guggulu" },
          { "@type": "MedicalTherapy", "name": "Panchakarma with Nasya Integration" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Cervical Spondylosis with Myelopathy",
        "alternateName": ["Cervical Spondylotic Myelopathy"],
        "code": { "@type": "MedicalCode", "code": "M47.12", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalTherapy", "name": "Immediate Specialist Referral" },
          { "@type": "MedicalTherapy", "name": "Supportive Ayurvedic Care Only with Specialist Coordination" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Cervical Spondylosis with Radiculopathy",
        "alternateName": ["Cervical Radiculopathy"],
        "code": { "@type": "MedicalCode", "code": "M47.22", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalTherapy", "name": "Coordinated Ayurvedic Care with Neurological Assessment" },
          { "@type": "MedicalTherapy", "name": "Trayodashang Guggulu Emphasis for Radicular Presentations" }
        ]
      },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervical Disc Degeneration", "code": { "@type": "MedicalCode", "code": "M50.30", "codingSystem": "ICD-10" } },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervical Intervertebral Disc Displacement", "code": { "@type": "MedicalCode", "code": "M50.20", "codingSystem": "ICD-10" } },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervicalgia", "code": { "@type": "MedicalCode", "code": "M54.2", "codingSystem": "ICD-10" } },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervicogenic Headache", "code": { "@type": "MedicalCode", "code": "G44.86", "codingSystem": "ICD-10" } }
    ],
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Griva Basti for Cervical Spondylosis",
        "alternateName": ["Ayurvedic Cervical Spondylosis Therapy", "Griva Vasti"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Warm medicated oil retained on cervical region (back of neck) within a dough dam (typically black gram flour) for 25-40 minutes providing sustained localised therapeutic contact allowing deep tissue penetration of medicated oils into cervical region — particularly valuable for cervical spondylosis providing sustained therapeutic contact for degenerated cervical structures",
        "bodyLocation": { "@type": "AnatomicalStructure", "name": "Cervical Region" },
        "preparation": "Constitutional assessment identifies appropriate oil selection — Ksheerabala for Vata, Mahanarayana for chronic musculoskeletal, Dhanwantharam thailam for specific presentations",
        "indication": [
          { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
          { "@type": "MedicalCondition", "name": "Greeva Sandhigata Vata" },
          { "@type": "MedicalCondition", "name": "Cervicalgia" },
          { "@type": "MedicalCondition", "name": "Cervical Stiffness" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Nasya for Cervical Spondylosis",
        "alternateName": ["Ayurvedic Nasal Medication for Cervical Spondylosis"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Medicated oils or preparations administered through nostrils under trained supervision — classically emphasised in Ayurveda specifically for cervical spondylosis and cervical conditions with head involvement; traditional Ayurvedic understanding recognises nasal pathway as therapeutic route particularly valuable for degenerative cervical conditions",
        "bodyLocation": { "@type": "AnatomicalStructure", "name": "Head and Neck Region" },
        "indication": [
          { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
          { "@type": "MedicalCondition", "name": "Cervicogenic Headache from Cervical Spondylosis" },
          { "@type": "MedicalCondition", "name": "Cervical Spondylosis with Head Involvement" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Shiroabhyanga",
        "alternateName": ["Ayurvedic Head Massage"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Traditional Ayurvedic head massage with medicated oils particularly valuable for cervical spondylosis presentations with head involvement including cervicogenic headache patterns"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Panchakarma with Nasya Integration for Cervical Spondylosis",
        "alternateName": ["Ayurvedic Detoxification for Cervical Spondylosis"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Traditional five-action Ayurvedic detoxification with particular emphasis on Nasya integration for cervical spondylosis — multi-phase authentic protocol providing constitutional reset"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Elakizhi for Cervical Region",
        "alternateName": ["Herbal Leaf Pouch Therapy for Cervical Spondylosis"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Warm herbal poultices applied to cervical region providing localised therapeutic warmth and herbal delivery"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Trayodashang Guggulu Prescription",
        "alternateName": ["Ayurvedic Herbal Medicine Specifically for Cervical Spondylosis"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Compound Ayurvedic herbal preparation containing thirteen ingredients including Guggul specifically emphasised in classical Ayurvedic texts for cervical spondylosis and Sandhigata Vata presentations — prescribed by qualified Ayurvedic doctors matched to individual constitutional presentation with careful coordination with modern medications"
      }
    ],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Cervical Spondylosis Ayurvedic Treatment at JVC", "item": "https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cervicalJvcFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Cervical Spondylosis Ayurvedic Treatment at Our JVC Clinic Dubai — Classical Greeva Sandhigata Vata Care",
      "url": "https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/",
      "about": [
        { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
        { "@type": "MedicalCondition", "name": "Greeva Sandhigata Vata" },
        { "@type": "MedicalCondition", "name": "Cervical Spondylosis with Radiculopathy" },
        { "@type": "MedicalCondition", "name": "Cervical Disc Degeneration" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "lastReviewed": "[ISO date]",
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
      "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Cervical Spondylosis Care", "Greeva Sandhigata Vata Care"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Cervical Spondylosis Ayurvedic Treatment",
        "Greeva Sandhigata Vata Classical Ayurveda",
        "Sandhigata Vata",
        "Manyastambha",
        "Cervical Spondylosis Without Myelopathy or Radiculopathy",
        "Cervical Spondylosis with Radiculopathy",
        "Cervical Spondylosis with Myelopathy Screening",
        "Cervical Disc Degeneration",
        "Cervical Disc Displacement",
        "Cervicogenic Headache from Cervical Spondylosis",
        "Screen-Related Earlier-Onset Cervical Spondylosis",
        "Older Patient Cervical Spondylosis Care",
        "Griva Basti for Cervical Spondylosis",
        "Nasya for Cervical Spondylosis",
        "Shiroabhyanga",
        "Panchakarma with Nasya Integration",
        "Abhyanga",
        "Elakizhi",
        "Trayodashang Guggulu for Cervical Spondylosis",
        "Yogaraj Guggulu",
        "Mahayogaraj Guggulu",
        "Rasnasaptakam Kwatham",
        "Ashtavargam Kwatham",
        "Balaristam",
        "Dhanwantharam Capsules",
        "Cervical Myelopathy Screening",
        "Hoffman Sign, Lhermitte Sign",
        "Sustained Management Partnership for Progressive Conditions",
        "Ergonomic Counselling for Cervical Spondylosis",
        "Nadi Pareeksha",
        "Prakriti Assessment"
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
      "sameAs": ["https://www.facebook.com/[handle]", "https://www.instagram.com/[handle]", "https://www.linkedin.com/company/[handle]", "https://www.google.com/maps/place/[place_id]"],
      "contactPoint": { "@type": "ContactPoint", "telephone": "[Phone]", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"] }
    }
  ];

  return (
    <>
      <Head>
        <title>Cervical Spondylosis Ayurveda JVC | Greeva Sandhigata Vata | Vedara Care Dubai</title>
        <meta name="description" content="Authentic Ayurvedic cervical spondylosis treatment at our JVC clinic Dubai. Classical Greeva Sandhigata Vata care. Female DHA-licensed doctor. Griva Basti, Nasya, Trayodashang Guggulu. Multi-language." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Cervical Spondylosis Ayurvedic Treatment at Our JVC Clinic Dubai — Classical Greeva Sandhigata Vata Care | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurvedic cervical spondylosis management at Vedara Care JVC clinic, walking distance from Circle Mall. Classical Greeva Sandhigata Vata tradition. Female DHA-licensed BAMS Ayurvedic doctor Dr. Neethu. Griva Basti flagship therapy, Nasya (classically emphasised), Trayodashang Guggulu, Panchakarma. Sustained partnership approach. Multi-language." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/cervical-spondylosis-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/cervical-spondylosis-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cervical Spondylosis Ayurveda JVC | Greeva Sandhigata Vata | Vedara" />
        <meta name="twitter:description" content="DHA-licensed classical Ayurvedic Greeva Sandhigata Vata care at JVC. Female doctor. Griva Basti, Nasya." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/cervical-spondylosis-ayurveda-jvc.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...cervicalJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...cervicalJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-[#F0EBE3]"
          data={cervicalJvcMechanism}
        />

        {/* Section 4: SciaticaTypes — Conditions Addressed */}
        <SciaticaTypes
          {...cervicalJvcTypes}
          label={cervicalJvcTypes.label}
          bgColor={cervicalJvcTypes.bgColor}
          title={cervicalJvcTypes.title}
          types={cervicalJvcTypes.types}
          description={cervicalJvcTypes.description}
          footer={cervicalJvcTypes.footer}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          typicalSignsLabel="Approach"
        />


        {/* Section 5: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={cervicalJvcApproaches.bgColor}
          label={cervicalJvcApproaches.label}
          title={cervicalJvcApproaches.title}
          description={cervicalJvcApproaches.intro}
          contentSections={cervicalJvcApproaches.contentSections}
          sidebar={cervicalJvcApproaches.sidebar}
        />

        {/* Section 6: Journey / Phases */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C79A5D", fontWeight: 700, textTransform: "uppercase", marginBottom: "16px" }}>Your Journey</p>
              <h2 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "var(--charcoal)", marginBottom: "16px" }}>What comprehensive Ayurvedic cervical spondylosis sustained management looks like</h2>
              <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "720px", margin: "0px auto", lineHeight: 1.7 }}>Realistic understanding of the sustained management approach helps set appropriate expectations for progressive degenerative condition.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", marginBottom: "56px" }}>
              <div style={{ background: "#F5F0EB", borderRadius: "8px", padding: "28px", borderTop: "4px solid var(--gold)", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase" }}>Phase 1</span>
                  <span style={{ fontSize: "11px", color: "var(--caption)", background: "var(--soft-sand)", padding: "3px 8px", borderRadius: "2px", letterSpacing: "0.04em" }}>Weeks 1–2</span>
                </div>
                <h4 className="font-display" style={{ fontSize: "18px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "12px", lineHeight: 1.3 }}>Comprehensive Assessment &amp; Foundation</h4>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--muted)" }}>90-minute initial consultation with Dr. Neethu: detailed cervical spondylosis history, Nadi Pareeksha, Prakriti and Vikriti assessment, Greeva Sandhigata Vata pattern identification, imaging review, medication review including chronic NSAIDs, cervical myelopathy screening (Hoffman sign, Lhermitte sign, hyperreflexia). Personalised sustained management plan. First Griva Basti session may begin. Trayodashang Guggulu and herbal medicines prescribed.</p>
                <div className="hide-mobile" style={{ position: "absolute", right: "-13px", top: "50%", transform: "translateY(-50%)", width: "24px", height: "24px", background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <span style={{ color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: 700 }}>›</span>
                </div>
              </div>
              <div style={{ background: "#F5F0EB", borderRadius: "8px", padding: "28px", borderTop: "4px solid var(--gold)", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase" }}>Phase 2</span>
                  <span style={{ fontSize: "11px", color: "var(--caption)", background: "var(--soft-sand)", padding: "3px 8px", borderRadius: "2px", letterSpacing: "0.04em" }}>Weeks 2–8</span>
                </div>
                <h4 className="font-display" style={{ fontSize: "18px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "12px", lineHeight: 1.3 }}>Active Treatment Intensive</h4>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--muted)" }}>Regular treatment sessions building sustained cervical spondylosis improvement. Griva Basti series (7–14 sessions), Nasya series integration, Shiroabhyanga, Abhyanga, Elakizhi, sustained Trayodashang Guggulu programme. Panchakarma with Nasya integration may begin. Initial improvements often visible: reduced pain intensity, improved morning stiffness, better cervical range of motion, improved sleep, reduced NSAID requirement in some cases.</p>
                <div className="hide-mobile" style={{ position: "absolute", right: "-13px", top: "50%", transform: "translateY(-50%)", width: "24px", height: "24px", background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <span style={{ color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: 700 }}>›</span>
                </div>
              </div>
              <div style={{ background: "#F5F0EB", borderRadius: "8px", padding: "28px", borderTop: "4px solid var(--gold)", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase" }}>Phase 3</span>
                  <span style={{ fontSize: "11px", color: "var(--caption)", background: "var(--soft-sand)", padding: "3px 8px", borderRadius: "2px", letterSpacing: "0.04em" }}>Weeks 8–16</span>
                </div>
                <h4 className="font-display" style={{ fontSize: "18px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "12px", lineHeight: 1.3 }}>Consolidation &amp; Transition to Maintenance</h4>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--muted)" }}>Continued treatments at reducing frequency transitioning toward sustained maintenance. Substantial improvement typically apparent — sustained pain reduction, improved functional capacity, better postural patterns. Trayodashang Guggulu programme continues. Transition planning for sustained maintenance approach appropriate to progressive degenerative nature.</p>
                <div className="hide-mobile" style={{ position: "absolute", right: "-13px", top: "50%", transform: "translateY(-50%)", width: "24px", height: "24px", background: "var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <span style={{ color: "rgb(255, 255, 255)", fontSize: "12px", fontWeight: 700 }}>›</span>
                </div>
              </div>
              <div style={{ background: "#F5F0EB", borderRadius: "8px", padding: "28px", borderTop: "4px solid var(--gold)", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase" }}>Phase 4</span>
                  <span style={{ fontSize: "11px", color: "var(--caption)", background: "var(--soft-sand)", padding: "3px 8px", borderRadius: "2px", letterSpacing: "0.04em" }}>Month 4+</span>
                </div>
                <h4 className="font-display" style={{ fontSize: "18px", fontWeight: 500, color: "var(--charcoal)", marginBottom: "12px", lineHeight: 1.3 }}>Sustained Maintenance &amp; Long-Term Partnership</h4>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--muted)" }}>Transitioned to sustained wellness partnership. Periodic Griva Basti maintenance (typically monthly to quarterly), sustained herbal medicine programme, seasonal Panchakarma intensifications — particularly winter months when Vata aggravation is typical. Ongoing partnership with Dr. Neethu monitoring progression and adjusting approach as cervical spondylosis progresses.</p>
              </div>
            </div>
            <div style={{ maxWidth: "720px", margin: "0px auto", textAlign: "center" }}>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--charcoal)", marginBottom: "24px" }}>Sustained partnership approach is essential for cervical spondylosis given progressive degenerative nature. Individual variation substantial based on severity, progression, constitutional factors, adherence to lifestyle recommendations, and comorbidities.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", textAlign: "left" }}>
                <div style={{ background: "#F5F0EB", borderRadius: "8px", padding: "20px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "rgb(45, 106, 79)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>What Ayurvedic care can achieve</p>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(45, 106, 79)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Substantial reduction in pain intensity and stiffness</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(45, 106, 79)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Improved cervical range of motion</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(45, 106, 79)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Improved functional capacity and sleep quality</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(45, 106, 79)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Reduced chronic NSAID/gabapentinoid dependence with medical coordination</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(45, 106, 79)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Sustained management appropriate for progressive condition</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(45, 106, 79)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Effective coordination with modern medical care</span>
                  </div>
                </div>
                <div style={{ background: "#F5F0EB", borderRadius: "8px", padding: "20px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "rgb(192, 57, 43)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "12px" }}>What Ayurvedic approach cannot achieve</p>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(192, 57, 43)", flexShrink: 0, marginTop: "1px" }}>✗</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Reversal of structural degenerative changes on imaging</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(192, 57, 43)", flexShrink: 0, marginTop: "1px" }}>✗</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Substitute for surgical assessment with myelopathy or severe radiculopathy</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(192, 57, 43)", flexShrink: 0, marginTop: "1px" }}>✗</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Guarantee of pain-free outcomes</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(192, 57, 43)", flexShrink: 0, marginTop: "1px" }}>✗</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Complete halt of progression</span>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: "rgb(192, 57, 43)", flexShrink: 0, marginTop: "1px" }}>✗</span>
                    <span style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.5 }}>Primary treatment for cervical myelopathy signs — these require immediate specialist evaluation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reviews */}
        <TreatmentReviews
          {...cervicalJvcReviews} />

        {/* Section 8: Team */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgb(200, 168, 127)",
              fontWeight: 600,
              marginBottom: "16px",
              textAlign: "center"
            }}>
              {cervicalJvcTeam.eyebrow}
            </p>
            <h2 style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "rgb(31, 31, 31)",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
              textAlign: "center"
            }}>
              {cervicalJvcTeam.title}
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "16px",
              color: "rgb(85, 85, 85)",
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 56px",
              lineHeight: 1.7
            }}>
              {cervicalJvcTeam.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cervicalJvcTeam.teamMembers.map((member, idx) => (
                <div key={idx} style={{
                  background: "#fff",
                  border: "1px solid #EAE3D5",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                    background: "rgb(230, 225, 218)"
                  }}>
                    <img
                      alt={member.alt || member.name}
                      src={member.image}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <div style={{ padding: "32px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "10px",
                      color: "rgb(200, 168, 127)",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "12px"
                    }}>
                      {member.tags}
                    </p>
                    <h4 style={{
                      fontFamily: "Fraunces, serif",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "rgb(31, 31, 31)",
                      marginBottom: "8px"
                    }}>
                      {member.name}
                    </h4>
                    <div style={{ marginBottom: "20px" }}>
                      {member.role.split(/<\/?br\s*\/?>/i).map((part, i) => (
                        <p key={i} style={{
                          fontFamily: "var(--font-sans), sans-serif",
                          fontSize: i === 0 ? "15px" : "11px",
                          color: i === 0 ? "rgb(100, 100, 100)" : "rgb(200, 168, 127)",
                          fontWeight: i === 0 ? 400 : 600,
                          letterSpacing: i === 0 ? "normal" : "0.05em",
                          textTransform: i === 0 ? "none" : "uppercase",
                          marginTop: i > 0 ? "6px" : "0",
                          marginBottom: "0"
                        }}>
                          {part.trim()}
                        </p>
                      ))}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "rgb(85, 85, 85)"
                    }}

                      dangerouslySetInnerHTML={{ __html: member.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Pricing */}
        <PostnatalPricingTableImage data={cervicalJvcPricing} />

        {/* Section 10: FAQ */}
        <FAQ
          {...cervicalJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...cervicalJvcLocation} />

        {/* Section 12: Final CTA */}
        <FinalCTA
          {...cervicalJvcCTA}
          bgColor="bg-[white]"
        />

        {/* Section 13: Related Pages */}
        <section id="related" style={{ background: "rgb(245, 240, 232)", padding: "80px 0px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto", padding: "0px 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "16px", textAlign: "left" }}>Explore Further</p>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px" }}>Related pages for musculoskeletal care</h2>
              </div>
              <a href="/conditions/" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgb(85, 85, 85)", textDecoration: "none", borderBottom: "1px solid rgb(200, 168, 127)" }}>Browse all conditions →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
              <a href="/doctors/dr-neethu-ayurveda/" style={{ textDecoration: "none", background: "rgb(255, 255, 255)", borderRadius: "8px", padding: "28px", borderTop: "4px solid rgb(200, 168, 127)", display: "block", transition: "box-shadow 200ms", boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Dr. Neethu — Ayurvedic Doctor</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "rgb(85, 85, 85)", margin: "0px 0px 16px" }}>Female DHA-licensed BAMS practitioner with substantial musculoskeletal expertise including specific Gridhrasi capability.</p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(200, 168, 127)", fontWeight: 500 }}>Read more →</span>
              </a>
              <a href="/conditions/back-pain-ayurveda-jvc/" style={{ textDecoration: "none", background: "rgb(255, 255, 255)", borderRadius: "8px", padding: "28px", borderTop: "4px solid rgb(200, 168, 127)", display: "block", transition: "box-shadow 200ms", boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Back Pain Ayurvedic Care JVC</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "rgb(85, 85, 85)", margin: "0px 0px 16px" }}>Related condition — musculoskeletal continuity. Back pain and sciatica commonly intersect with integrated care approach.</p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(200, 168, 127)", fontWeight: 500 }}>Read more →</span>
              </a>
              <a href="/conditions/sciatica-treatment-jvc/" style={{ textDecoration: "none", background: "rgb(255, 255, 255)", borderRadius: "8px", padding: "28px", borderTop: "4px solid rgb(200, 168, 127)", display: "block", transition: "box-shadow 200ms", boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Sciatica Physiotherapy Care JVC</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "rgb(85, 85, 85)", margin: "0px 0px 16px" }}>Complementary physiotherapy approach available at same JVC clinic for integrated care including nerve gliding techniques.</p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(200, 168, 127)", fontWeight: 500 }}></span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(200, 168, 127)", fontWeight: 500 }}>Read more →</span>
              </a>
              <a href="/treatments/panchakarma-dubai/" style={{ textDecoration: "none", background: "rgb(255, 255, 255)", borderRadius: "8px", padding: "28px", borderTop: "4px solid rgb(200, 168, 127)", display: "block", transition: "box-shadow 200ms", boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Panchakarma Detoxification Dubai</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.65, color: "rgb(85, 85, 85)", margin: "0px 0px 16px" }}>Detailed information on Panchakarma programmes with Basti emphasis for chronic Gridhrasi constitutional reset.</p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(200, 168, 127)", fontWeight: 500 }}>Read more →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 14: Related Articles */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: "var(--gold)", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px" }}>Explore Further</p>
              <h2 className="font-display" style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 500, color: "var(--charcoal)" }}>Related cervical spondylosis and musculoskeletal wellness content</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
              <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <div style={{ height: "160px", background: "var(--soft-sand)", overflow: "hidden" }}>
                  <img alt="Understanding Greeva Sandhigata Vata in Classical Ayurveda" src="/images/cervical.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "var(--gold)", fontWeight: 700, color: "var(--charcoal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Classical Tradition</p>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "16px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.5, marginBottom: "12px" }}>Understanding Greeva Sandhigata Vata in Classical Ayurveda</h4>
                  <a href="#" className="gold-link" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>Read article →</a>
                </div>
              </div>
              <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <div style={{ height: "160px", background: "var(--soft-sand)", overflow: "hidden" }}>
                  <img alt="Ergonomic Setup for Cervical Spondylosis Prevention in Dubai" src="/images/ergonomics.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "var(--gold)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Lifestyle &amp; Prevention</p>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "16px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.5, marginBottom: "12px" }}>Ergonomic Setup for Cervical Spondylosis Prevention in Dubai</h4>
                  <a href="#" className="gold-link" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>Read article →</a>
                </div>
              </div>
              <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <div style={{ height: "160px", background: "var(--soft-sand)", overflow: "hidden" }}>
                  <img alt="Sleep Posture for Cervical Spondylosis — Pillow and Position Guide" src="/images/sleep-posture.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "var(--gold)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Self-Care</p>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "16px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.5, marginBottom: "12px" }}>Sleep Posture for Cervical Spondylosis — Pillow and Position Guide</h4>
                  <a href="#" className="gold-link" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>Read article →</a>
                </div>
              </div>
              <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <div style={{ height: "160px", background: "var(--soft-sand)", overflow: "hidden" }}>
                  <img alt="Trayodashang Guggulu — What the Classical Texts Say About Cervical Spondylosis" src="/images/trayodashang-guggulu.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "var(--gold)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Herbal Medicine</p>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "16px", fontWeight: 500, color: "var(--charcoal)", lineHeight: 1.5, marginBottom: "12px" }}>Trayodashang Guggulu — What the Classical Texts Say About Cervical Spondylosis</h4>
                  <a href="#" className="gold-link" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>Read article →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default CervicalSpondylosisAyurvedaJvc;
