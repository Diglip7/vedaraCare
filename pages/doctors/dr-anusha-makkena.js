import React from 'react';
import Head from 'next/head';
import { drAnushaMakkenaTemplate } from '../../data/doctorData';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

export default function DrAnushaMakkenaPage() {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-anusha-makkena/#physician",
      "name": "Dr. Anusha Makkena",
      "honorificPrefix": "Dr.",
      "url": "https://vedaracare.ae/doctors/dr-anusha-makkena/",
      "image": "https://vedaracare.ae/images/default-avatar.png",
      "jobTitle": "General Practitioner & Aesthetic Medicine Physician",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" },
      "medicalSpecialty": [
        "General Practice", "Aesthetic Medicine", "Skin Rejuvenation",
        "Anti-Ageing Procedures", "Primary Care"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "MBBS — Katuri Medical College"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "MS ENT — NTR University of Health Sciences"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Fellowship",
          "name": "Fellowship in Facial Aesthetics — IATAM, India"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Masterclass in Aesthetic Medicine — University of Sharjah"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "A4M Advanced Injector Certification"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "MOH Licensed General Practitioner",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Ministry of Health (UAE)"
          }
        }
      ],
      "knowsLanguage": [
        { "@type": "Language", "name": "English", "alternateName": "en" },
        { "@type": "Language", "name": "Telugu" },
        { "@type": "Language", "name": "Hindi" },
        { "@type": "Language", "name": "Arabic" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "General Medicine", "Preventive Healthcare", "Botulinum Toxin Treatments",
        "Dermal Fillers", "Skin Boosters", "Mesotherapy", "Biostimulatory Treatments",
        "PRP/GFC Skin Rejuvenation", "Chemical Peels", "Laser Skin Rejuvenation",
        "Acne Management", "Post-Acne Scar Management", "Pigmentation Management",
        "Skin Rejuvenation", "Non-Surgical Facial Rejuvenation", "Anti-Ageing Treatments",
        "Individualised Aesthetic Treatment Planning"
      ],
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
      "employee": { "@id": "https://vedaracare.ae/doctors/dr-anusha-makkena/#physician" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Dr. Anusha Makkena — Aesthetic Medicine Physician | Vedara Care",
      "url": "https://vedaracare.ae/doctors/dr-anusha-makkena/",
      "about": { "@id": "https://vedaracare.ae/doctors/dr-anusha-makkena/#physician" },
      "reviewedBy": {
        "@type": "MedicalOrganization",
        "name": "Vedara Care Medical Team"
      },
      "lastReviewed": currentDate,
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Doctors & Team", "item": "https://vedaracare.ae/doctors/" },
        { "@type": "ListItem", "position": 3, "name": "Dr. Anusha Makkena", "item": "https://vedaracare.ae/doctors/dr-anusha-makkena/" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Dr. Anusha Makkena — Aesthetic Medicine Physician | Vedara Care</title>
        <meta name="description" content="Dr. Anusha Makkena, MBBS, MS ENT, is a General Practitioner and Aesthetic Medicine Physician specialising in injectables, skin rejuvenation, fillers, Botox, PRP/GFC, peels and laser treatments." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Dr. Anusha Makkena — Aesthetic Medicine Physician | Vedara Care" />
        <meta property="og:description" content="Dr. Anusha Makkena, MBBS, MS ENT, is a General Practitioner and Aesthetic Medicine Physician focused on safe, individualized and natural-looking aesthetic treatments, injectables, skin rejuvenation and general medical care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/dr-anusha-makkena-aesthetic-medicine.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/doctors/dr-anusha-makkena/" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Anusha" />
        <meta property="profile:last_name" content="Makkena" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Anusha Makkena — Aesthetic Medicine Physician | Vedara Care" />
        <meta name="twitter:description" content="MBBS, MS ENT General Practitioner and Aesthetic Medicine Physician specialising in personalized injectables, skin rejuvenation and minimally invasive aesthetic treatments." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/dr-anusha-makkena-aesthetic-medicine.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/doctors/dr-anusha-makkena/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/doctors/dr-anusha-makkena/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/doctors/dr-anusha-makkena/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/doctors/dr-anusha-makkena/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={drAnushaMakkenaTemplate} />
    </>
  );
}
