import Head from 'next/head';
import React from 'react';
import { drZainab } from '../../data/doctorData';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

const DrZainabPage = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vedaracare.ae/doctors/dr-zainab-ayurveda#person",
      "name": "Dr. Zainab Sheikh",
      "honorificPrefix": "Dr.",
      "jobTitle": "Ayurveda Practitioner",
      "url": "https://vedaracare.ae/doctors/dr-zainab-ayurveda",
      "image": "https://vedaracare.ae/images/dr-zainab-ayurveda-jvc.webp",
      "gender": "Female",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" },
      "knowsLanguage": [{ "@type": "Language", "name": "English", "alternateName": "en" }],
      "knowsAbout": ["Ayurveda", "Nadi Parikshan", "Prakriti Parikshan & personalised plans", "Pain management, sciatica & low back pain", "Migraine & headache", "PCOS & hormonal imbalance", "Musculoskeletal disorders", "Cervical spondylosis", "Joint & muscle pain", "Stress", "Digestive & metabolic", "Hair fall", "Women's wellness", "General wellness"],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "name": "DHA professional licence 20918133",
          "recognizedBy": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority" }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certificate",
          "name": "Certified Hijama (Cupping) Practitioner"
        }
      ],
      "areaServed": ["Jumeirah Village Circle", "Jumeirah Village Triangle", "Al Barsha South", "Arjan", "Dubai Sports City", "Motor City"]
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
      "employee": { "@id": "https://vedaracare.ae/doctors/dr-zainab-ayurveda#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Dr. Zainab — Ayurvedic Doctor at Our JVC Clinic Dubai",
      "url": "https://vedaracare.ae/doctors/dr-zainab-ayurveda/",
      "about": { "@id": "https://vedaracare.ae/doctors/dr-zainab-ayurveda#person" },
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
        {"@type": "ListItem", "position": 4, "name": "Dr. Zainab — Ayurvedic Doctor at JVC", "item": "https://vedaracare.ae/doctors/dr-zainab-ayurveda/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": drZainab.faqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vedaracare.ae/doctors/dr-zainab-ayurveda#person",
      "name": "Dr. Zainab Sheikh",
      "jobTitle": "Ayurveda Practitioner",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ayurvedic Consultations with Dr. Zainab at JVC Dubai",
      "provider": { "@id": "https://vedaracare.ae/doctors/dr-zainab-ayurveda#person" },
      "areaServed": [
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "City", "name": "Dubai"}
      ],
      "serviceType": "Ayurvedic Medical Consultation",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Consultation Services with Dr. Zainab",
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
        <title>Dr. Zainab Sheikh — DHA Licensed Ayurveda Practitioner in JVC, Dubai | Vedara Care</title>
        <meta name="description" content="Dr. Zainab Sheikh is a DHA-licensed Ayurveda practitioner (licence 20918133) at Vedara Care Polyclinic, Jumeirah Village Circle, with 4.5 years of clinical experience. Book on WhatsApp." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Dr. Zainab — Ayurvedic Doctor at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Dr. Zainab is a DHA-licensed BAMS-qualified Ayurvedic doctor at Vedara Care Polyclinic, JVC Dubai. Authentic Nadi Pareeksha, Panchakarma, women's health (PCOS), musculoskeletal, skin, hair, stress, and postnatal Ayurvedic care. Serving JVC, Marina, Downtown, Business Bay, all Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/dr-zainab-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/doctors/dr-zainab-ayurveda/" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Zainab" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Zainab — Ayurvedic Doctor JVC Dubai | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed BAMS Ayurvedic doctor at our JVC clinic. 11 expertise areas. Female doctor available." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/dr-zainab-ayurveda-jvc.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/doctors/dr-zainab-ayurveda/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/doctors/dr-zainab-ayurveda/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/doctors/dr-zainab-ayurveda/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={drZainab} />
    </>
  );
};

export default DrZainabPage;
