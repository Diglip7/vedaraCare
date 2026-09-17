import React from 'react';
import Head from 'next/head';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';
import { johannaBautistaData } from '../../data/doctorData';

export default function JohannaBautistaPage() {
  const pageUrl = 'https://vedaracare.ae/doctors/johanna-bautista/';

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${pageUrl}#person`,
      "name": "Johanna Dianne U. Bautista",
      "jobTitle": "Receptionist",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae/"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Lyceum of the Philippines University – Batangas"
      },
      "knowsLanguage": [
        "English",
        "Tagalog"
      ],
      "knowsAbout": [
        "Patient and Client Relations",
        "Appointment and Schedule Management",
        "Reception and Front Desk Operations",
        "Communication and Customer Service",
        "Aesthetic and Wellness Services",
        "Multitasking and Problem Solving"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "employee": {
        "@id": `${pageUrl}#person`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "name": "Johanna Dianne U. Bautista — Receptionist at Vedara Care JVC",
      "url": pageUrl,
      "mainEntity": {
        "@id": `${pageUrl}#person`
      },
      "about": {
        "@id": `${pageUrl}#person`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": johannaBautistaData.faqs.faqs.map(faq => ({
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
        <title>Johanna Dianne U. Bautista — Front Desk Receptionist | Vedara Care</title>
        <meta name="description" content="Johanna Dianne U. Bautista is the welcoming front-desk receptionist at Vedara Care, JVC. Fluent in English & Tagalog, coordinating appointments and supporting patients." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Johanna Dianne U. Bautista — Front Desk Receptionist | Vedara Care" />
        <meta property="og:description" content="Front desk receptionist at Vedara Care, JVC – multilingual, experienced in patient coordination and clinic operations." />
        <meta property="og:image" content="https://vedaracare.ae/images/johanna-bautista.jpeg" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Johanna Dianne U. Bautista — Front Desk Receptionist | Vedara Care" />
        <meta name="twitter:description" content="Front desk receptionist at Vedara Care, JVC – multilingual, experienced in patient coordination and clinic operations." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/johanna-bautista.jpeg" />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={johannaBautistaData} />
    </>
  );
}
