import Head from 'next/head';
import React from 'react';
import { hafsinaKK } from '../../data/doctorData';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

const HafsinaKKPage = () => {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician",
      "name": "Hafsina K K",
      "honorificPrefix": "",
      "url": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/",
      "image": "https://vedaracare.ae/images/default-avatar.png",
      "jobTitle": "DHA Licensed Physiotherapist",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" },
      "medicalSpecialty": [
        "Physiotherapy", "Orthopedic Rehabilitation", "Neurological Rehabilitation",
        "Sports Rehabilitation", "Women's Health Rehabilitation"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "Bachelor of Physiotherapy (2010–2015)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "DHA Licensed Physiotherapist",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Dry Needling Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Biomechanical Cupping Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "IASTM Certification (Instrument-Assisted Soft Tissue Mobilization)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Antenatal/Postnatal Fitness Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "AHA BLS (Basic Life Support) Certified"
        }
      ],
      "knowsLanguage": [
        { "@type": "Language", "name": "English", "alternateName": "en" },
        { "@type": "Language", "name": "Malayalam" },
        { "@type": "Language", "name": "Hindi" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Orthopedic Rehabilitation", "Neurological Rehabilitation", "Sports Injury Rehabilitation",
        "Women's Health Rehabilitation", "Dry Needling", "Biomechanical Cupping", "IASTM",
        "Antenatal Fitness", "Postnatal Fitness", "Musculoskeletal Rehabilitation",
        "Functional Mobility", "Manual Therapy"
      ],
      "isAcceptingNewPatients": true,
      "availableAtOrFrom": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic JVC",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop-4",
          "addressLocality": "Jumeirah Village Circle",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Business Bay" },
        { "@type": "Place", "name": "Al Barsha" },
        { "@type": "Place", "name": "Dubai Hills Estate" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization", "MedicalClinic"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "employee": { "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Hafsina K K — DHA Licensed Physiotherapist in Dubai | Vedara Care",
      "url": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/",
      "about": { "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician" },
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
        "name": "Physiotherapy"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Doctors & Team", "item": "https://vedaracare.ae/doctors/" },
        { "@type": "ListItem", "position": 3, "name": "Hafsina K K", "item": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": hafsinaKK.faqs.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#person",
      "name": "Hafsina K K",
      "jobTitle": "DHA Licensed Physiotherapist",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "MedicalOrganization"],
      "@id": "https://vedaracare.ae/#contact-organization",
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
        <title>Hafsina K K — DHA Licensed Physiotherapist in Dubai | Vedara Care</title>
        <meta name="description" content="Hafsina K K is a DHA Licensed Physiotherapist with 7+ years of experience in orthopedic, neurological, sports and women's health rehabilitation across India and the UAE." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Hafsina K K — DHA Licensed Physiotherapist | Vedara Care" />
        <meta property="og:description" content="Hafsina K K is a DHA Licensed Physiotherapist with 7+ years of rehabilitation experience across orthopedics, neurology, sports and women's health in India and the UAE." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/hafsina-kk-physiotherapist.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Hafsina" />
        <meta property="profile:last_name" content="K K" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hafsina K K — DHA Licensed Physiotherapist | Vedara Care" />
        <meta name="twitter:description" content="DHA Licensed Physiotherapist with 7+ years of experience in orthopedic, neurological, sports and women's health rehabilitation." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/hafsina-kk-physiotherapist.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/doctors/hafsina-kk-physiotherapist/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={hafsinaKK} />
    </>
  );
};

export default HafsinaKKPage;
