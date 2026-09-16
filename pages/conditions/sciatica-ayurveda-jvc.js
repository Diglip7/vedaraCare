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
  sciaticaJvcHero,
  sciaticaJvcIntro,
  sciaticaJvcMechanism,
  sciaticaJvcTypes,
  sciaticaJvcApproaches,
  sciaticaJvcReviews,
  sciaticaJvcPricing,
  sciaticaJvcFaqs,
  sciaticaJvcLocation,
  sciaticaJvcCTA,
  sciaticaJvcTeam,

  sciaticaJvcRelatedArticles
} from '../../data/sciaticaAyurvedaJvcData';

const SciaticaAyurvedaJvc = () => {

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/#sciatica-ayurveda-care",
      "name": "Vedara Care Sciatica Ayurvedic Treatment JVC",
      "alternateName": ["Vedara Sciatica Ayurveda JVC", "Ayurvedic Gridhrasi Care JVC Dubai", "Vedara Basti Treatment for Sciatica"],
      "url": "https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic Ayurvedic sciatica management at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Classical Gridhrasi tradition. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Ansiya delivering constitutional approach through Basti flagship classical therapy for Gridhrasi, Kativasti with lower body extension, Panchakarma programmes with Basti emphasis (Yoga Basti, Kala Basti, Karma Basti protocols), Abhyanga, Elakizhi, Pizhichil, herbal medicines, and lifestyle counselling. Coordinated with modern medical care and physiotherapy.",
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
      "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Sciatica Treatment", "Gridhrasi Care", "Integrative Medicine", "Traditional Medicine", "Pain Management"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Ayurvedic Sciatica Consultation" },
        { "@type": "MedicalProcedure", "name": "Basti Medicated Enema Therapy for Gridhrasi" },
        { "@type": "MedicalProcedure", "name": "Anuvasana Vasti Oil-Based Enema" },
        { "@type": "MedicalProcedure", "name": "Kashaya Vasti Decoction Enema" },
        { "@type": "MedicalProcedure", "name": "Yoga Basti 8-Day Protocol" },
        { "@type": "MedicalProcedure", "name": "Kala Basti 16-Day Protocol" },
        { "@type": "MedicalProcedure", "name": "Karma Basti 30-Day Protocol for Chronic Gridhrasi" },
        { "@type": "MedicalProcedure", "name": "Kativasti with Lower Body Extension" },
        { "@type": "MedicalProcedure", "name": "Panchakarma with Basti Emphasis for Sciatica" },
        { "@type": "MedicalProcedure", "name": "Abhyanga with Lower Body Attention" },
        { "@type": "MedicalProcedure", "name": "Elakizhi Herbal Leaf Pouch Therapy Lower Body" },
        { "@type": "MedicalProcedure", "name": "Pizhichil for Chronic Sciatica" },
        { "@type": "MedicalProcedure", "name": "Ayurvedic Radicular Pain Herbal Medicine" },
        { "@type": "MedicalProcedure", "name": "Pregnancy-Safe Sciatica Support" },
        { "@type": "MedicalProcedure", "name": "Post-Surgical Continuing Sciatica Care" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "850", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-07"
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Sciatica",
        "alternateName": ["Sciatic Neuritis", "Sciatic Nerve Pain", "Gridhrasi"],
        "code": { "@type": "MedicalCode", "code": "M54.30", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalTherapy", "name": "Classical Ayurvedic Gridhrasi Treatment" },
          { "@type": "MedicalTherapy", "name": "Basti Medicated Enema Therapy" },
          { "@type": "MedicalTherapy", "name": "Kativasti with Lower Body Extension" },
          { "@type": "MedicalTherapy", "name": "Panchakarma with Basti Emphasis" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Lumbar Radiculopathy",
        "alternateName": ["Lumbar Nerve Root Compression"],
        "code": { "@type": "MedicalCode", "code": "M54.16", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalTherapy", "name": "Comprehensive Ayurvedic Radicular Care" },
          { "@type": "MedicalTherapy", "name": "Basti Series" },
          { "@type": "MedicalTherapy", "name": "Trayodashang Guggulu" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        "name": "Lumbar Intervertebral Disc Displacement with Radiculopathy",
        "alternateName": ["Lumbar Disc Herniation with Sciatica"],
        "code": { "@type": "MedicalCode", "code": "M51.17", "codingSystem": "ICD-10" },
        "possibleTreatment": [
          { "@type": "MedicalTherapy", "name": "Coordinated Ayurvedic Supportive Care" },
          { "@type": "MedicalTherapy", "name": "Careful Basti Application" }
        ]
      },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Sciatica", "code": { "@type": "MedicalCode", "code": "M54.30", "codingSystem": "ICD-10" } },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Piriformis Syndrome", "code": { "@type": "MedicalCode", "code": "G57.00", "codingSystem": "ICD-10" } },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Pregnancy-Related Sciatica", "code": { "@type": "MedicalCode", "code": "O99.89", "codingSystem": "ICD-10" } },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Post-Laminectomy Syndrome", "code": { "@type": "MedicalCode", "code": "M96.1", "codingSystem": "ICD-10" } }
    ],
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Basti for Gridhrasi",
        "alternateName": ["Ayurvedic Medicated Enema Therapy", "Vasti", "Basti Karma"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Classical Ayurvedic medicated enema therapy providing systemic Vata pacification. Multiple variations: Anuvasana Vasti (oil-based enema), Kashaya Vasti (decoction-based enema), Yoga Basti (8-day structured protocol combining oil and decoction Basti), Kala Basti (16-day protocol), Karma Basti (30-day protocol for chronic Gridhrasi). Requires trained practitioner delivery given specific technique requirements",
        "preparation": "Constitutional assessment and Gridhrasi type identification (Vataja versus Vata-Kaphaja), red flag screening, appropriate preparation with Snehapana (internal oleation) and Swedana (sudation)",
        "indication": [
          { "@type": "MedicalCondition", "name": "Sciatica" },
          { "@type": "MedicalCondition", "name": "Lumbar Radiculopathy" },
          { "@type": "MedicalCondition", "name": "Chronic Sciatica" },
          { "@type": "MedicalCondition", "name": "Piriformis Syndrome" }
        ],
        "contraindication": "Pregnancy, acute infections, severe cardiovascular conditions"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Kativasti with Lower Body Extension",
        "alternateName": ["Ayurvedic Back Pain Therapy for Sciatica", "Kati Basti with Lower Body Massage"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Warm medicated oil retained on lower back within a dough dam for 30-45 minutes followed by extended Abhyanga to affected leg including buttock, thigh, calf, and foot regions along sciatic distribution",
        "bodyLocation": { "@type": "AnatomicalStructure", "name": "Lower Back and Lower Body" },
        "preparation": "Constitutional assessment identifies appropriate oil selection — Ksheerabala for Vata, Mahanarayana for chronic musculoskeletal conditions, Dhanwantharam thailam for specific presentations",
        "indication": [
          { "@type": "MedicalCondition", "name": "Sciatica" },
          { "@type": "MedicalCondition", "name": "Lumbar Radiculopathy" },
          { "@type": "MedicalCondition", "name": "Chronic Sciatica" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Yoga Basti Protocol",
        "alternateName": ["8-Day Structured Basti Programme"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Classical 8-day structured Basti protocol alternating Anuvasana Vasti (oil) and Kashaya Vasti (decoction) — traditional programme for Gridhrasi"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Kala Basti Protocol",
        "alternateName": ["16-Day Structured Basti Programme"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Classical 16-day structured Basti protocol for chronic Gridhrasi and Vata-related conditions"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Karma Basti Protocol",
        "alternateName": ["30-Day Intensive Basti Programme"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Classical 30-day intensive Basti protocol for chronic longstanding Gridhrasi presentations"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Panchakarma with Basti Emphasis for Sciatica",
        "alternateName": ["Ayurvedic Detoxification for Gridhrasi"],
        "procedureType": "Ayurvedic Therapeutic Procedure",
        "howPerformed": "Traditional five-action Ayurvedic detoxification with particular emphasis on Basti therapy for Gridhrasi — multi-phase authentic protocol",
        "indication": [
          { "@type": "MedicalCondition", "name": "Chronic Sciatica" },
          { "@type": "MedicalCondition", "name": "Lumbar Radiculopathy" }
        ]
      }
    ],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Sciatica Ayurvedic Treatment at JVC", "item": "https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": sciaticaJvcFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Sciatica Ayurvedic Treatment at Our JVC Clinic Dubai — Classical Gridhrasi Care",
      "url": "https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/",
      "about": [
        { "@type": "MedicalCondition", "name": "Sciatica", "code": { "@type": "MedicalCode", "code": "M54.30", "codingSystem": "ICD-10" } },
        { "@type": "MedicalCondition", "name": "Gridhrasi" },
        { "@type": "MedicalCondition", "name": "Lumbar Radiculopathy", "code": { "@type": "MedicalCode", "code": "M54.16", "codingSystem": "ICD-10" } },
        { "@type": "MedicalCondition", "name": "Lumbar Disc Displacement with Radiculopathy", "code": { "@type": "MedicalCode", "code": "M51.17", "codingSystem": "ICD-10" } },
        { "@type": "MedicalSpecialty", "name": "Ayurveda" }
      ],
      "mentions": [
        { "@type": "MedicalCondition", "name": "Chronic Sciatica" },
        { "@type": "MedicalCondition", "name": "Piriformis Syndrome" },
        { "@type": "MedicalCondition", "name": "Pregnancy-Related Sciatica" },
        { "@type": "MedicalCondition", "name": "Post-Laminectomy Syndrome" },
        { "@type": "MedicalSpecialty", "name": "Musculoskeletal Medicine" },
        { "@type": "MedicalSpecialty", "name": "Integrative Medicine" },
        { "@type": "MedicalSpecialty", "name": "Pain Management" },
        { "@type": "MedicalProcedure", "name": "Basti" },
        { "@type": "MedicalProcedure", "name": "Anuvasana Vasti" },
        { "@type": "MedicalProcedure", "name": "Kashaya Vasti" },
        { "@type": "MedicalProcedure", "name": "Yoga Basti" },
        { "@type": "MedicalProcedure", "name": "Kala Basti" },
        { "@type": "MedicalProcedure", "name": "Karma Basti" },
        { "@type": "MedicalProcedure", "name": "Kativasti with Lower Body Extension" },
        { "@type": "MedicalProcedure", "name": "Panchakarma with Basti Emphasis" },
        { "@type": "MedicalProcedure", "name": "Elakizhi" },
        { "@type": "MedicalProcedure", "name": "Pizhichil" },
        { "@type": "MedicalProcedure", "name": "Abhyanga" },
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
        { "@type": "MedicalTherapy", "name": "Ksheerabala Oil" },
        { "@type": "MedicalTherapy", "name": "Mahanarayana Oil" },
        { "@type": "MedicalTherapy", "name": "Dhanwantharam Thailam" },
        { "@type": "MedicalTherapy", "name": "Rasnadi Kwatham" },
        { "@type": "MedicalTherapy", "name": "Trayodashang Guggulu" },
        { "@type": "MedicalEntity", "name": "Vata Dosha" },
        { "@type": "Place", "name": "Jumeirah Village Circle (JVC)" },
        { "@type": "City", "name": "Dubai" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-07",
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "medicalAudience": "Patient",
      "specialty": { "@type": "MedicalSpecialty", "name": "Ayurveda" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician",
      "name": "Dr. Ansiya",
      "url": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/",
      "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Sciatica Treatment", "Gridhrasi Care"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Sciatica Ayurvedic Treatment",
        "Gridhrasi Classical Ayurveda",
        "Vataja Gridhrasi",
        "Vata-Kaphaja Gridhrasi",
        "Chronic Sciatica",
        "Lumbar Radiculopathy",
        "Disc-Related Sciatica",
        "Piriformis Syndrome",
        "Pregnancy-Safe Sciatica Care",
        "Basti Therapy for Gridhrasi",
        "Anuvasana Vasti",
        "Kashaya Vasti",
        "Yoga Basti Protocol",
        "Kala Basti Protocol",
        "Karma Basti Protocol",
        "Kativasti with Lower Body Extension",
        "Panchakarma for Gridhrasi",
        "Abhyanga",
        "Elakizhi",
        "Pizhichil",
        "Ayurvedic Radicular Pain Herbal Medicine",
        "Rasnadi Kwatham",
        "Trayodashang Guggulu",
        "Guggul Preparations for Radicular",
        "Sciatica Red Flag Recognition",
        "Cauda Equina Screening",
        "Straight-Leg Raise Assessment",
        "Nadi Pareeksha"
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
      "sameAs": [
        "https://www.facebook.com/[handle]",
        "https://www.instagram.com/[handle]",
        "https://www.linkedin.com/company/[handle]",
        "https://www.google.com/maps/place/[place_id]"
      ],
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
        <title>Sciatica Ayurveda JVC | Gridhrasi Basti Treatment | Vedara Care Dubai</title>
        <meta name="description" content="Authentic Ayurvedic sciatica treatment at our JVC clinic Dubai. Classical Gridhrasi care. Female DHA-licensed doctor. Basti, Kativasti, herbal medicines. Multi-language." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/" />
        <meta property="og:title" content="Sciatica Ayurvedic Treatment at Our JVC Clinic Dubai — Classical Gridhrasi Care | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurvedic sciatica management at Vedara Care JVC clinic, walking distance from Circle Mall. Classical Gridhrasi tradition. Female DHA-licensed BAMS Ayurvedic doctor Dr. Ansiya. Basti flagship therapy, Kativasti with lower body extension, Panchakarma, herbal medicines. Multi-language." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/sciatica-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sciatica Ayurveda JVC | Gridhrasi Basti | Vedara" />
        <meta name="twitter:description" content="DHA-licensed classical Ayurvedic Gridhrasi care at JVC. Female doctor. Basti, Kativasti." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/sciatica-ayurveda-jvc.jpg" />
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
        <AyurvedaHero {...sciaticaJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...sciaticaJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-white"
          data={sciaticaJvcMechanism}
        />

        {/* Section 4: SciaticaTypes — Conditions Addressed */}
        <SciaticaTypes
          {...sciaticaJvcTypes}
          label={sciaticaJvcTypes.label}
          bgColor={sciaticaJvcTypes.bgColor}
          title={sciaticaJvcTypes.title}
          types={sciaticaJvcTypes.types}
          description={sciaticaJvcTypes.description}
          footer={sciaticaJvcTypes.footer}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          typicalSignsLabel="Approach"
        />


        {/* Section 5: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={sciaticaJvcApproaches.bgColor}
          label={sciaticaJvcApproaches.label}
          title={sciaticaJvcApproaches.title}
          description={sciaticaJvcApproaches.intro}
          contentSections={sciaticaJvcApproaches.contentSections}
          sidebar={sciaticaJvcApproaches.sidebar}
        />

        {/* Section 6: Journey / Phases */}
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
              Your Journey
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
              What comprehensive Ayurvedic sciatica care journey looks like at our JVC clinic.
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "16px",
              color: "rgb(85, 85, 85)",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 56px",
              lineHeight: 1.7
            }}>
              Realistic understanding of timeline helps set appropriate expectations for meaningful outcomes.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "56px"
            }}>
              {[
                {
                  phase: "Phase 1 · Week 1",
                  title: "Assessment & Foundation",
                  body: "Comprehensive 90-minute initial consultation with Dr. Ansiya identifying sciatica pattern, Gridhrasi type, constitutional factors, functional impact, and current medications. Sciatica red flag screening including cauda equina and neurological screening. Personalised treatment plan design. First Kativasti session may begin. Initial herbal medicines prescribed."
                },
                {
                  phase: "Phase 2 · Weeks 2–4",
                  title: "Active Treatment Intensive",
                  body: "Regular sessions building sustained improvement. Kativasti series with lower body extension (weekly or twice-weekly), Basti protocol initiation (Yoga Basti 8-day or Kala Basti 16-day as part of a <a href=\"/treatments/panchakarma-dubai/\" style=\"color: #C9A55A; text-decoration: underline;\">Panchakarma</a> programme), Abhyanga integration, Elakizhi, and <a href=\"/conditions/sciatica-treatment-jvc/\" style=\"color: #C9A55A; text-decoration: underline;\">physiotherapy</a> for nerve gliding when indicated. Initial improvements often visible — reduced radiating pain intensity, improved function, better sleep."
                },
                {
                  phase: "Phase 3 · Weeks 4–8",
                  title: "Sustained Improvement",
                  body: "Continued treatments at reducing frequency. Substantial improvement typically apparent — sustained radiating pain reduction, improved functional capacity, better postural patterns, sustained lifestyle changes becoming habits. Additional Basti protocols may be initiated for chronic cases."
                },
                {
                  phase: "Phase 4 · Month 2+",
                  title: "Long-Term Partnership",
                  body: "Transitioned to sustained wellness partnership with periodic Kativasti maintenance, periodic Basti maintenance for chronic conditions, ongoing lifestyle practices, and seasonal adjustments. Chronic conditions benefit from sustained partnership approach. Long-term partnership supporting sustained sciatica management."
                }
              ].map((item, i) => (
                <div key={i} style={{
                  background: "rgb(245, 240, 232)",
                  borderRadius: "8px",
                  padding: "28px",
                  borderTop: "4px solid rgb(200, 168, 127)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 24px"
                }}>
                  <p style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "11px",
                    color: "rgb(200, 168, 127)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "4px"
                  }}>{item.phase}</p>
                  <h4 style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(31, 31, 31)",
                    marginBottom: "12px"
                  }}>{item.title}</h4>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "rgb(85, 85, 85)",
                      textAlign: "left"
                    }}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              ))}
            </div>

            <div style={{
              background: "rgb(240, 235, 227)",
              borderRadius: "8px",
              padding: "32px",
              maxWidth: "900px",
              margin: "0 auto"
            }}>
              <h3 style={{
                fontFamily: "Fraunces, serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "rgb(31, 31, 31)",
                marginBottom: "24px"
              }}>
                Realistic outcomes — what to expect
              </h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px"
              }}>
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgb(200, 168, 127)",
                    marginBottom: "16px"
                  }}>
                    WHAT AYURVEDIC CARE CAN ACHIEVE
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {[
                      "Substantial radiating pain reduction",
                      "Improved functional capacity",
                      "Better sleep quality",
                      "Reduced gabapentinoid dependence (coordinated)",
                      "Sustained chronic condition management",
                      "Improved postural patterns"
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "14px",
                        color: "rgb(85, 85, 85)",
                        marginBottom: "12px",
                        lineHeight: 1.5
                      }}>
                        <span style={{ color: "rgb(200, 168, 127)" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgb(211, 47, 47)",
                    marginBottom: "16px"
                  }}>
                    IMPORTANT LIMITATIONS
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {[
                      "Cannot reverse significant structural disc pathology",
                      "Not substitute for surgical assessment of red flags",
                      "Cannot guarantee pain-free outcomes",
                      "Red flag symptoms require immediate specialist evaluation",
                      "Cauda equina syndrome is surgical emergency"
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "14px",
                        color: "rgb(85, 85, 85)",
                        marginBottom: "12px",
                        lineHeight: 1.5
                      }}>
                        <span style={{ color: "rgb(211, 47, 47)", fontWeight: "bold" }}>!</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reviews */}
        <TreatmentReviews
          {...sciaticaJvcReviews} />

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
              {sciaticaJvcTeam.eyebrow}
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
              {sciaticaJvcTeam.title}
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
              {sciaticaJvcTeam.intro}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
              {sciaticaJvcTeam.teamMembers.map((member, idx) => (
                <div key={idx} style={{
                  background: "rgb(245, 240, 232)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{
                    width: "100%",
                    height: "240px",
                    overflow: "hidden",
                    background: "rgb(230, 225, 218)"
                  }}>
                    <img
                      alt={member.alt || member.name}
                      src={member.image}
                      style={{ width: "100%", height: "200%", objectFit: "cover", objectPosition: "bottom" }}
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
                    <p style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "14px",
                      color: "rgb(119, 119, 119)",
                      marginBottom: "20px"
                    }}>
                      {member.role}
                    </p>
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
        <PostnatalPricingTableImage data={sciaticaJvcPricing} />

        {/* Section 10: FAQ */}
        <FAQ
          {...sciaticaJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...sciaticaJvcLocation} />

        {/* Section 12: Final CTA */}
        <FinalCTA
          {...sciaticaJvcCTA}
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
              <a href="/doctors/dr-ansiya-ayurveda/" style={{ textDecoration: "none", background: "rgb(255, 255, 255)", borderRadius: "8px", padding: "28px", borderTop: "4px solid rgb(200, 168, 127)", display: "block", transition: "box-shadow 200ms", boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Dr. Ansiya — Ayurvedic Doctor</h4>
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
        <section style={{ background: "rgb(255, 255, 255)", padding: "80px 0px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto", padding: "0px 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "16px", textAlign: "left" }}>Explore Further</p>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px" }}>Related sciatica and musculoskeletal wellness content</h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms", boxShadow: "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Classical Ayurveda</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Understanding Gridhrasi: Sciatica in classical Ayurvedic texts</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>August 2026</p>
              </a>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms", boxShadow: "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Workplace Wellness</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Ergonomic setup for sciatica prevention in Dubai's office environment</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>July 2026</p>
              </a>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms", boxShadow: "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Self-Care</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Sitting posture modifications for chronic sciatica sufferers</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>June 2026</p>
              </a>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Chronic Pain</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Managing chronic sciatica sustainably: the Ayurvedic approach</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>May 2026</p>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default SciaticaAyurvedaJvc;
