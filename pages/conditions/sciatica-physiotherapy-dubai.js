import { useState, useEffect } from 'react';
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import { SciaticaTypes, SciaticaEmergency, SciaticaPricing, SciaticaTreatment, SciaticaTimeline } from '../../components/ayurveda/SciaticaSections';
import {
  sciaticaPhysioHero,
  sciaticaPhysioIntro,
  sciaticaPhysioFaqs,
  sciaticaPhysioLocation,
  sciaticaPhysioCTA,
  sciaticaPhysioRelatedPages,
  sciaticaPhysioReviews,
  sciaticaPhysioTeam,
  sciaticaPhysioTypes,
  sciaticaPhysioEmergency,
  sciaticaPhysioPricing,
  sciaticaPhysioTreatment,
  sciaticaPhysioInfo,
  sciaticaPhysioTimeline
} from '../../data/sciaticaPhysiotherapyData';

const SciaticaPhysiotherapyDubai = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    setCurrentDate(new Date().toISOString());
  }, []);

  const schemaData = currentDate ? JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/#sciatica-physio",
      "name": "Vedara Care Sciatica Physiotherapy",
      "alternateName": ["Vedara Sciatica Physio Dubai"],
      "url": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Specialist sciatica physiotherapy at our JVC clinic, Dubai. Most sciatica resolves without surgery. Disc herniation, piriformis syndrome, spinal stenosis, pregnancy sciatica. Same-week appointments. Walking distance from Circle Mall.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 350 - AED 15,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC)",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "employee": {"@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": [
        "Physiotherapy",
        "Physical Therapy",
        "Manual Therapy",
        "Spinal Rehabilitation"
      ],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Sciatica Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Nerve Mobilisation"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Piriformis Syndrome Treatment"}
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "15",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Sciatica",
          "alternateName": ["Lumbar Radiculopathy", "Sciatic Nerve Pain"],
          "code": {"@type": "MedicalCode", "code": "M54.3", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Targeted Exercise"},
            {"@type": "MedicalProcedure", "name": "Nerve Mobilisation"},
            {"@type": "MedicalProcedure", "name": "Manual Therapy"},
            {"@type": "MedicalProcedure", "name": "Dry Needling"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Lumbar Disc Herniation",
          "alternateName": ["Herniated Disc", "Slipped Disc"],
          "code": {"@type": "MedicalCode", "code": "M51.2", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Piriformis Syndrome",
          "code": {"@type": "MedicalCode", "code": "G57.0", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Spinal Stenosis",
          "code": {"@type": "MedicalCode", "code": "M48.06", "codingSystem": "ICD-10"}
        },
        {
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          "name": "Foraminal Stenosis"
        },
        {
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          "name": "Pregnancy-Related Sciatica"
        },
        {
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          "name": "Cauda Equina Syndrome",
          "alternateName": ["CES"],
          "code": {"@type": "MedicalCode", "code": "G83.4", "codingSystem": "ICD-10"}
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sciatica Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/#sciatica-physio"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "United Arab Emirates"}
      ],
      "serviceType": "Sciatica Physiotherapy Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sciatica Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Sciatica Assessment",
            "priceCurrency": "AED",
            "price": "350",
            "description": "60-minute comprehensive sciatica assessment"
          },
          {
            "@type": "Offer",
            "name": "Same-Week Priority Sciatica Appointment",
            "priceCurrency": "AED",
            "price": "275",
            "description": "Same-week appointment for severe sciatica presentations"
          },
          {
            "@type": "Offer",
            "name": "Acute Sciatica Package",
            "priceCurrency": "AED",
            "price": "2200",
            "description": "10-session structured programme for acute sciatica over 6-8 weeks"
          },
          {
            "@type": "Offer",
            "name": "Chronic Sciatica Programme",
            "priceCurrency": "AED",
            "price": "3400",
            "description": "16-session structured programme for chronic sciatica over 8-12 weeks"
          },
          {
            "@type": "Offer",
            "name": "Pregnancy Sciatica Programme",
            "priceCurrency": "AED",
            "price": "1350",
            "description": "6-session pregnancy-appropriate sciatica programme"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Sciatica Physiotherapy in Dubai", "item": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": sciaticaPhysioFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "headline": "Physiotherapy for Sciatica in Dubai — Complete Treatment Guide",
      "image": "https://vedaracare.ae/images/sciatica-physiotherapy-dubai-hero.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@type": "Person",
        "name": "Hafsina K K",
        "url": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        {"@type": "MedicalCondition", "name": "Sciatica"},
        {"@type": "MedicalCondition", "name": "Disc Herniation"},
        {"@type": "MedicalCondition", "name": "Piriformis Syndrome"}
      ],
      "mainEntityOfPage": "https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/"
    },
    ...sciaticaPhysioTeam.members.map(member => ({
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": member.name,
      "url": `https://vedaracare.ae${member.link || ''}`,
      "image": member.image || "",
      "medicalSpecialty": ["Physiotherapy", "Spinal Rehabilitation", "Manual Therapy"],
      "hasCredential": ["DHA-Licensed", "Dry Needling Certified"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    }))
  ]) : '';
  
  return (
    <>
      <Head>
        <title>Sciatica Physiotherapy in JVC, Dubai | Vedara Care</title>
        <meta name="description" content="Specialist sciatica physiotherapy at our JVC clinic, Dubai. Most sciatica resolves without surgery. Disc herniation, piriformis syndrome, spinal stenosis, pregnancy sciatica. Same-week appointments. Walking distance from Circle Mall." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Sciatica Physiotherapy in JVC, Dubai | Vedara Care" />
        <meta property="og:description" content="Specialist sciatica physiotherapy at our JVC clinic, Dubai. Most sciatica resolves without surgery. Disc herniation, piriformis syndrome, spinal stenosis, pregnancy sciatica. Same-week appointments. Walking distance from Circle Mall." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/sciatica-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="canonical" href="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" hrefLang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/sciatica-physiotherapy-dubai/" hrefLang="x-default" />
      </Head>
      
      {currentDate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaData }}
        />
      )}
      
      <div className="sciatica-physiotherapy-page">
        <AyurvedaHero
          {...sciaticaPhysioHero}
          bgColor='bg-[#F8F5EE]'
          primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'sciatica_physiotherapy' }}
          secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
        />
        <AyurvedaIntro {...sciaticaPhysioIntro} />
         <SciaticaTreatment data={sciaticaPhysioInfo} showBorderLeft={false} rightContentStyle="list" bgColor='bg-[#F0EBE3]' />
        <SciaticaTypes {...sciaticaPhysioTypes} />
        <SciaticaEmergency data={sciaticaPhysioEmergency} />
        <SciaticaTreatment data={sciaticaPhysioTreatment} />
        <SciaticaTimeline data={sciaticaPhysioTimeline} />
        <TreatmentReviews {...sciaticaPhysioReviews} />
        <PhysiotherapyTeam {...sciaticaPhysioTeam} />
         <SciaticaPricing {...sciaticaPhysioPricing} />
        <FAQ {...sciaticaPhysioFaqs} 
        bgColor='bg-[#F2EDE5]'/>
        <TreatmentLocation {...sciaticaPhysioLocation} />
        <FinalCTA
          {...sciaticaPhysioCTA}
          primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'sciatica_physiotherapy' }}
          secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
        />
        <RelatedPages {...sciaticaPhysioRelatedPages} />
      </div>
    </>
  );
};

export default SciaticaPhysiotherapyDubai;
