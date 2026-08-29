import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
// import { SciaticaTreatment } from '../components/ayurveda/SciaticaSections';
import DetoxTwoImageSection from '../components/ayurveda/DetoxTwoImageSection';
import DetoxCategories from '../components/ayurveda/DetoxCategories';
import DetoxProtocolElements from '../components/ayurveda/DetoxProtocolElements';
import DetoxJourney from '../components/ayurveda/DetoxJourney';
import DetoxReviews from '../components/ayurveda/DetoxReviews';
import DetoxPricingSection from '../components/ayurveda/DetoxPricingSection';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import {
  detoxHero,
  detoxIntro,
  detoxMechanism,
  detoxReviews,
  detoxFaqs,
  detoxFinalCTA,
  detoxRelatedPages,
  detoxCategoriesData,
  detoxProtocolData,
  detoxJourneyData,
  detoxProgramsData,
  detoxLocation,
  detoxRelatedArticles
} from '../data/detox';

const DetoxTreatment = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/detox-treatment/#detox",
      "name": "Vedara Care Ayurvedic Detox & Panchakarma",
      "alternateName": ["Vedara Care Detox Dubai", "Vedara Detox JVC"],
      "url": "https://vedaracare.ae/detox-treatment/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic Ayurvedic detox and classical Panchakarma at Vedara Care Polyclinic, Binghatti Azure, Shop 4, Jumeirah Village Circle (JVC), Dubai. Supervised by DHA-licensed Ayurvedic doctors delivering traditional Purvakarma, Pradhanakarma, and Paschatkarma protocols. Open Monday to Sunday 9:00AM to 10:00PM.",
      "telephone": "+971 55 573 6312",
      "email": "  ing@vedaracare.ae",
      "priceRange": "AED 350 - AED 13,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Binghatti Azure, Shop 4, Jumeirah Village Circle (JVC)",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Circle Mall" },
        { "@type": "Place", "name": "FIVE Jumeirah Village" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Business Bay" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" }
      ],
      "medicalSpecialty": [
        "Ayurvedic Medicine",
        "Detoxification",
        "Panchakarma",
        "Holistic Health"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Classical Panchakarma" },
        { "@type": "MedicalProcedure", "name": "Digestive & Gut Detox" },
        { "@type": "MedicalProcedure", "name": "Liver & Metabolic Support" },
        { "@type": "MedicalProcedure", "name": "Skin-Focused Detox" },
        { "@type": "MedicalProcedure", "name": "Stress & Burnout Reset" },
        { "@type": "MedicalProcedure", "name": "Abhyanga Massage" },
        { "@type": "MedicalProcedure", "name": "Shirodhara Therapy" },
        { "@type": "MedicalProcedure", "name": "Virechana Purgation" },
        { "@type": "MedicalProcedure", "name": "Nasya Nasal Treatment" },
        { "@type": "MedicalProcedure", "name": "Basti Enema Therapy" }
      ],
      "medicalCondition": [
        { "@type": "MedicalCondition", "name": "IBS & Bloating" },
        { "@type": "MedicalCondition", "name": "Chronic fatigue" },
        { "@type": "MedicalCondition", "name": "Eczema & Acne" },
        { "@type": "MedicalCondition", "name": "Stress & Burnout" },
        { "@type": "MedicalCondition", "name": "PCOS" },
        { "@type": "MedicalCondition", "name": "Chronic back pain" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Detox & Panchakarma Dubai",
      "provider": { "@id": "https://vedaracare.ae/detox-treatment/#detox" },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Ayurvedic Detox and Panchakarma Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Ayurvedic Detox Programs",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Ayurvedic Consultation",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Comprehensive assessment with DHA-licensed Ayurvedic doctor at our JVC clinic"
          },
          {
            "@type": "Offer",
            "name": "7-Day Detox Reset",
            "priceCurrency": "AED",
            "price": "3800",
            "description": "7-day Ayurvedic detox program including consultations and daily clinic therapies"
          },
          {
            "@type": "Offer",
            "name": "14-Day Classical Cleanse",
            "priceCurrency": "AED",
            "price": "7500",
            "description": "14-day comprehensive Ayurvedic Panchakarma program"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/detox-treatment/#webpage",
      "name": "Ayurvedic Detox & Panchakarma in Dubai",
      "url": "https://vedaracare.ae/detox-treatment/",
      "about": { "@id": "https://vedaracare.ae/detox-treatment/#detox" },
      "audience": {
        "@type": "PatientAudience",
        "geographicArea": { "@type": "City", "name": "Dubai, United Arab Emirates" }
      },
      "lastReviewed": currentDate,
      "reviewedBy": {
        "@type": "Physician",
        "name": "Lead Ayurvedic Doctor",
        "hasCredential": "BAMS, MD (Ayurveda), DHA-Licensed"
      },
      "primaryImageOfPage": "https://vedaracare.ae/images/panchakarma-dubai-hero.webp"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": "https://vedaracare.ae/logo.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Ayurvedic Detox in Dubai", "item": "https://vedaracare.ae/detox-treatment/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": detoxFaqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <Head>
        <title>Ayurvedic Detox & Panchakarma Dubai | DHA-Licensed doctors | Vedara Care JVC</title>
        <meta name="description" content="Authentic Ayurvedic detox and traditional Panchakarma in Dubai at our DHA-licensed JVC clinic. Doctor-led gut detox, liver support, skin purify, stress reset programs." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content="Ayurvedic Detox & Panchakarma Dubai — Vedara Care JVC" />
        <meta property="og:description" content="Authentic three-phase Ayurvedic detoxification protocols at our Jumeirah Village Circle clinic. Custom gut, skin, liver, and stress reset programs supervised by BAMS doctors." />
        <meta property="og:image" content="https://vedaracare.ae/images/panchakarma-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/detox-treatment/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/detox-treatment/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/detox-treatment/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/detox-treatment/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/detox-treatment/" />

        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>


      <div className="detox-content">
        {/* Section 1 - Hero */}
        <AyurvedaHero {...detoxHero} />

        {/* Section 2 - Intro */}
        <AyurvedaIntro {...detoxIntro} />




        <DetoxTwoImageSection {...detoxMechanism} />

        {/* Section 5 - Detox Categories (Screenshot 1) */}
        <DetoxCategories {...detoxCategoriesData} />

        {/* Section 6 - Panchakarma Protocol (Screenshot 2) */}
        <DetoxProtocolElements {...detoxProtocolData} />

        {/* Section 7 - Detox Journey (Screenshot 3) */}
        <DetoxJourney {...detoxJourneyData} />

        {/* Section 9 - Reviews */}
        <DetoxReviews {...detoxReviews} />
        {/* Section 11 - Pricing */}
        <DetoxPricingSection {...detoxProgramsData} />
        {/* Section 10 - FAQ */}
        <FAQ {...detoxFaqs} />

        {/* Section 12 - Location */}
        <TreatmentLocation {...detoxLocation} />
        {/* Section 13 - Final Call to Action */}
        <FinalCTA {...detoxFinalCTA} />
        <section style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '96px', paddingBottom: '96px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <div>
              <p style={{ color: 'rgb(200, 168, 127)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'left' }}>EXPLORE FURTHER</p>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '32px', color: 'rgb(31,31,31)', letterSpacing: '-0.02em' }}>Related treatments and services.</h2>
            </div>
            <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgb(200, 168, 127)', textDecoration: 'underline', textUnderlineOffset: '4px', whiteSpace: 'nowrap' }}>Browse all treatments →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {detoxRelatedArticles.articles.map((article, idx) => (
              <a key={idx} href={article.href} className="treatment-card" style={{ textDecoration: 'none', background: 'rgb(255,255,255)', borderRadius: '8px', overflow: 'hidden', display: 'block', borderTop: '4px solid rgb(200, 168, 127)' }}>
                <img alt={article.tag} src={article.image} style={{ width: '100%', height: '160px', objectFit: 'cover', background: 'rgb(240,235,227)', display: 'block' }} />
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, fontSize: '18px', color: 'rgb(31,31,31)', marginBottom: '8px', lineHeight: 1.3 }}>{article.tag}</h4>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgb(85,85,85)', lineHeight: 1.6 }}>{article.description}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgb(200,168,127)', marginTop: '12px', fontWeight: 500 }}>Learn more →</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        {/* Section 15 - End */}
      </div>
    </>
  );
};

export default DetoxTreatment;
