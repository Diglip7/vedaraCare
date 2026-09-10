import React from 'react';
import Head from 'next/head';
import { emielSanchezData } from '../../data/doctorData';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

export default function EmielSanchezPage() {
  const currentDate = new Date().toISOString();

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vedaracare.ae/doctors/emiel-sanchez/#person",
      "name": "Emiel Sanchez",
      "url": "https://vedaracare.ae/doctors/emiel-sanchez/",
      "image": "https://vedaracare.ae/images/emiel-sanchez-receptionist.webp",
      "jobTitle": "Clinic Receptionist",
      "worksFor": { "@id": "https://vedaracare.ae/#organization" },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "BSc Medical Technology — College of Our Lady of Mt. Carmel, Philippines"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Registered Medical Technologist (RMT) — Professional Regulation Commission, Philippines"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "ASCPI Certified"
        }
      ],
      "knowsLanguage": [
        { "@type": "Language", "name": "English", "alternateName": "en" },
        { "@type": "Language", "name": "Filipino" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Front Desk & Reception Management", "Patient Communication & Customer Service", 
        "Patient Registration, Appointment Scheduling & Records Management",
        "Clinic Administrative Support", "Patient Follow-Up & Coordination",
        "Medical Terminology & Healthcare Knowledge"
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
      "employee": { "@id": "https://vedaracare.ae/doctors/emiel-sanchez/#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Emiel Sanchez — Clinic Receptionist | Vedara Care",
      "url": "https://vedaracare.ae/doctors/emiel-sanchez/",
      "about": { "@id": "https://vedaracare.ae/doctors/emiel-sanchez/#person" },
      "reviewedBy": {
        "@type": "MedicalOrganization",
        "name": "Vedara Care Medical Team"
      },
      "lastReviewed": currentDate
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Doctors & Team", "item": "https://vedaracare.ae/doctors/" },
        { "@type": "ListItem", "position": 3, "name": "Emiel Sanchez", "item": "https://vedaracare.ae/doctors/emiel-sanchez/" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Emiel Sanchez — Clinic Receptionist | Vedara Care</title>
        <meta name="description" content="Emiel Sanchez is our Clinic Receptionist and Patient Relations administrator at Vedara Care Polyclinic. She brings a Medical Technology background to ensure a seamless patient experience." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Emiel Sanchez — Clinic Receptionist | Vedara Care" />
        <meta property="og:description" content="Emiel Sanchez is our Clinic Receptionist and Patient Relations administrator at Vedara Care Polyclinic, JVC Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/images/emiel-sanchez-receptionist.webp" />
        <meta property="og:url" content="https://vedaracare.ae/doctors/emiel-sanchez/" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Emiel" />
        <meta property="profile:last_name" content="Sanchez" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emiel Sanchez — Clinic Receptionist | Vedara Care" />
        <meta name="twitter:description" content="Emiel Sanchez is our Clinic Receptionist and Patient Relations administrator at Vedara Care Polyclinic, JVC Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/emiel-sanchez-receptionist.webp" />

        <link rel="canonical" href="https://vedaracare.ae/doctors/emiel-sanchez/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/doctors/emiel-sanchez/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/doctors/emiel-sanchez/" />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={emielSanchezData} />
    </>
  );
}
