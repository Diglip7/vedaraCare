import React from 'react';
import Head from 'next/head';
import { arfahOwaisTemplate } from '../../data/doctorData';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

export default function ArfahOwaisPage() {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/arfah-owais/#physician",
      "name": "Arfah Owais",
      "url": "https://vedaracare.ae/doctors/arfah-owais/",
      "image": "https://vedaracare.ae/images/arfah-owais-aesthetician.webp",
      "jobTitle": "Aesthetician",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" },
      "medicalSpecialty": [
        "Aesthetic Skincare", "Facial Therapy", "Skin Rejuvenation",
        "Microdermabrasion", "HIFU"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Diploma",
          "name": "CIBTAC-UK Diploma"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "DHA Licensed Aesthetician",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority (DHA)"
          }
        }
      ],
      "knowsLanguage": [
        { "@type": "Language", "name": "English", "alternateName": "en" }
      ],
      "gender": "Female",
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
      }
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
      "employee": { "@id": "https://vedaracare.ae/doctors/arfah-owais/#physician" }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Aesthetician Arfah Owais | Vedara Care",
      "url": "https://vedaracare.ae/doctors/arfah-owais/",
      "about": { "@id": "https://vedaracare.ae/doctors/arfah-owais/#physician" },
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
        { "@type": "ListItem", "position": 3, "name": "Aesthetician Arfah Owais", "item": "https://vedaracare.ae/doctors/arfah-owais/" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Aesthetician Arfah Owais | Vedara Care</title>
        <meta name="description" content="Aesthetician Arfah Owais is a DHA Licensed Aesthetician with 8+ years of experience in advanced facial therapy and skin rejuvenation." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://vedaracare.ae/doctors/arfah-owais/" />
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={arfahOwaisTemplate} />
    </>
  );
}
