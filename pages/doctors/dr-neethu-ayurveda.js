import Head from 'next/head';
import React from 'react';
import { drNeethu } from '../../data/doctorData';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

const DrNeethuPage = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician",
      "name": "Dr. Neethu",
      "honorificPrefix": "Dr.",
      "url": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/",
      "image": "https://vedaracare.ae/images/default-avatar.png",
      "jobTitle": "Ayurvedic Doctor",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" },
      "medicalSpecialty": [
        "Ayurveda", "Ayurvedic Medicine", "Traditional Medicine",
        "Integrative Medicine", "Preventive Medicine"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "BAMS (Bachelor of Ayurvedic Medicine and Surgery)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "DHA-Licensed Ayurvedic Doctor",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        }
      ],
      "knowsLanguage": [
        {"@type": "Language", "name": "English", "alternateName": "en"},
        {"@type": "Language", "name": "Malayalam"},
        {"@type": "Language", "name": "Hindi"}
      ],
      "gender": "Female",
      "knowsAbout": [
        "Nadi Pareeksha", "Prakriti Assessment", "Ayurvedic Constitution Assessment",
        "Panchakarma", "Ayurvedic Detoxification", "Ayurvedic Rejuvenation", "Rasayana",
        "PCOS Ayurvedic Management", "Women's Health Ayurveda", "Musculoskeletal Ayurveda",
        "Back Pain Ayurvedic Management", "Neck Pain Ayurvedic Management",
        "Sciatica Ayurvedic Management", "Cervical Spondylosis", "Lumbar Spondylosis",
        "Joint Disorders", "Eczema Ayurvedic Management", "Psoriasis Ayurvedic Management",
        "Hair and Scalp Disorders", "Stress Management Ayurveda", "Anxiety Ayurvedic Care",
        "Sleep Disorders Ayurveda", "Weight Management Ayurveda", "Postnatal Ayurvedic Care",
        "Diet and Lifestyle Counselling", "Ayurvedic Herbal Medicine"
      ],
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Nadi Pareeksha Consultation"},
        {"@type": "MedicalProcedure", "name": "Prakriti Assessment"},
        {"@type": "MedicalProcedure", "name": "Ayurvedic Initial Consultation"},
        {"@type": "MedicalProcedure", "name": "Panchakarma Programme Consultation"},
        {"@type": "MedicalProcedure", "name": "PCOS Ayurvedic Management"},
        {"@type": "MedicalProcedure", "name": "Postnatal Ayurvedic Care"},
        {"@type": "MedicalProcedure", "name": "Musculoskeletal Ayurvedic Management"},
        {"@type": "MedicalProcedure", "name": "Skin Condition Ayurvedic Management"},
        {"@type": "MedicalProcedure", "name": "Hair Loss Ayurvedic Management"},
        {"@type": "MedicalProcedure", "name": "Stress Management Ayurvedic Consultation"},
        {"@type": "MedicalProcedure", "name": "Weight Management Ayurvedic Programme"},
        {"@type": "MedicalProcedure", "name": "Ayurvedic Rejuvenation (Rasayana)"},
        {"@type": "MedicalProcedure", "name": "Diet and Lifestyle Counselling"}
      ],
      "hospitalAffiliation": { "@id": "https://vedaracare.ae/#organization" },
      "isAcceptingNewPatients": true,
      "availableAtOrFrom": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic JVC",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jumeirah Village Circle",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Business Bay"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Al Barsha"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Jumeirah Lake Towers"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization", "MedicalClinic"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"},
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "employee": { "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Dr. Neethu — Ayurvedic Doctor at Our JVC Clinic Dubai",
      "url": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/",
      "about": { "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "reviewedBy": {
        "@type": "MedicalOrganization",
        "name": "Vedara Care Medical Team"
      },
      "lastReviewed": currentDate,
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "medicalAudience": "Patient",
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Ayurveda"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "About", "item": "https://vedaracare.ae/about/"},
        {"@type": "ListItem", "position": 3, "name": "Our Doctors", "item": "https://vedaracare.ae/doctors/"},
        {"@type": "ListItem", "position": 4, "name": "Dr. Neethu — Ayurvedic Doctor at JVC", "item": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": drNeethu.faqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#person",
      "name": "Dr. Neethu",
      "jobTitle": "Ayurvedic Doctor",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Consultations with Dr. Neethu at JVC Dubai",
      "provider": { "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"}
      ],
      "serviceType": "Ayurvedic Medical Consultation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Consultation Services with Dr. Neethu",
        "itemListElement": [
          {"@type": "Offer", "name": "Initial Consultation (Nadi Pareeksha + Prakriti Assessment + Treatment Plan)", "priceCurrency": "AED", "price": "350"},
          {"@type": "Offer", "name": "Follow-up Consultation", "priceCurrency": "AED", "price": "250"},
          {"@type": "Offer", "name": "Extended Follow-up (Complex Cases)", "priceCurrency": "AED", "price": "350"},
          {"@type": "Offer", "name": "Panchakarma Programme Consultation", "priceCurrency": "AED", "price": "350"},
          {"@type": "Offer", "name": "Postnatal Ayurvedic Initial Consultation", "priceCurrency": "AED", "price": "350"},
          {"@type": "Offer", "name": "WhatsApp Consultation Follow-up (Existing Patients)", "priceCurrency": "AED", "price": "150"}
        ]
      }
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
        "telephone": "+971-55-573-6312",
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"]
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Dr. Neethu — Ayurvedic Doctor in JVC, Dubai | BAMS | Vedara Care</title>
        <meta name="description" content="Dr. Neethu, DHA-licensed BAMS Ayurvedic doctor at our JVC clinic. Nadi Pareeksha, Panchakarma, PCOS, musculoskeletal, skin, hair, stress, postnatal care. Female doctor available." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Dr. Neethu — Ayurvedic Doctor at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Dr. Neethu is a DHA-licensed BAMS-qualified Ayurvedic doctor at Vedara Care Polyclinic, JVC Dubai. Authentic Nadi Pareeksha, Panchakarma, women's health (PCOS), musculoskeletal, skin, hair, stress, and postnatal Ayurvedic care. Serving JVC, Marina, Downtown, Business Bay, all Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/dr-neethu-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/doctors/dr-neethu-ayurveda/" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Neethu" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Neethu — Ayurvedic Doctor JVC Dubai | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed BAMS Ayurvedic doctor at our JVC clinic. 11 expertise areas. Female doctor available." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/dr-neethu-ayurveda-jvc.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/doctors/dr-neethu-ayurveda/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/doctors/dr-neethu-ayurveda/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/doctors/dr-neethu-ayurveda/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/doctors/dr-neethu-ayurveda/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={drNeethu} />
    </>
  );
};

export default DrNeethuPage;
