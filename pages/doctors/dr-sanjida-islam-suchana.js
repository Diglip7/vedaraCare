import Head from 'next/head';
import React from 'react';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';
import { drSanjida } from '../../data/doctorData';

const DrSanjidaPage = () => {
  const currentDate = new Date().toISOString();
  const profileUrl = "https://vedaracare.ae/doctors/dr-sanjida-islam-suchana";
  const ogImageUrl = "https://vedaracare.ae/images/dr-sanjida-islam-suchana-gp-dubai.webp";

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${profileUrl}/#physician`,
      "name": "Dr. Sanjida Islam Suchana",
      "url": profileUrl,
      "image": ogImageUrl,
      "jobTitle": "DHA Licensed General Practitioner",
      "worksFor": {
        "@id": "https://vedaracare.ae/#organization"
      },
      "medicalSpecialty": [
        "General Practice",
        "Primary Care",
        "Clinical Dermatology",
        "Women's Health"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "MBBS",
          "educationalLevel": "Bachelor of Medicine, Bachelor of Surgery"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Diploma",
          "name": "Professional Diploma in Dermatology",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Royal College of Physicians of Ireland"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "DHA Licensed General Practitioner",
          "identifier": "[DHA License Number - To be confirmed]",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Dubai Health Authority"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "BMDC Licensed Physician",
          "identifier": "[BMDC Registration Number - To be confirmed]",
          "recognizedBy": {
            "@type": "GovernmentOrganization",
            "name": "Bangladesh Medical & Dental Council"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Advanced Cardiovascular Life Support (ACLS)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certification",
          "name": "Basic Life Support (BLS)"
        }
      ],
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "en"
        },
        {
          "@type": "Language",
          "name": "Hindi/Urdu"
        },
        {
          "@type": "Language",
          "name": "Bengali"
        }
      ],
      "knowsAbout": [
        "General Practice",
        "Primary Care",
        "Clinical Dermatology",
        "Acne",
        "Eczema",
        "Fungal Skin Infections",
        "Dermatitis",
        "Chronic Disease Management",
        "Diabetes",
        "Hypertension",
        "Dyslipidemia",
        "Asthma",
        "COPD",
        "Women's Health",
        "Infertility Counselling",
        "Fertility Care Coordination",
        "Patient Counselling",
        "Clinical Assessment"
      ],
      "isAcceptingNewPatients": true
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": [
        "Organization",
        "MedicalOrganization",
        "MedicalClinic"
      ],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vedaracare.ae/logo.png"
      },
      "employee": {
        "@id": `${profileUrl}/#physician`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Dr. Sanjida Islam Suchana — DHA Licensed General Practitioner",
      "url": profileUrl,
      "about": {
        "@id": `${profileUrl}/#physician`
      },
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "main"
      },
      "reviewedBy": {
        "@type": "MedicalOrganization",
        "name": "Vedara Care Medical Team"
      },
      "lastReviewed": currentDate,
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "medicalAudience": "Patient"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vedaracare.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://vedaracare.ae/about/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Our Doctors",
          "item": "https://vedaracare.ae/doctors/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dr. Sanjida Islam Suchana — DHA Licensed General Practitioner",
          "item": profileUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Dr. Sanjida Islam Suchana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Sanjida Islam Suchana is a DHA Licensed General Practitioner at Vedara Care Polyclinic in JVC, Dubai, with documented clinical experience in primary care, clinical dermatology, chronic disease management and women's health."
          }
        },
        {
          "@type": "Question",
          "name": "Is Dr. Sanjida Islam Suchana DHA licensed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Sanjida Islam Suchana is identified as a DHA Licensed General Practitioner."
          }
        },
        {
          "@type": "Question",
          "name": "What is Dr. Sanjida Islam Suchana's qualification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Sanjida holds an MBBS from Anwer Khan Modern Medical College & Hospital in Bangladesh and a Professional Diploma in Dermatology from the Royal College of Physicians of Ireland."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida have dermatology training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Sanjida holds a Professional Diploma in Dermatology from the Royal College of Physicians of Ireland and has documented clinical experience in common dermatological conditions."
          }
        },
        {
          "@type": "Question",
          "name": "What skin conditions does Dr. Sanjida treat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her documented clinical experience includes acne, eczema, fungal skin infections and dermatitis. Treatment suitability depends on individual clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What chronic conditions does Dr. Sanjida manage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her documented clinical experience includes diabetes, hypertension, dyslipidemia, asthma and COPD."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida provide women's health consultations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Women's health is one of Dr. Sanjida's documented areas of clinical experience."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida provide infertility counselling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Infertility counselling is included in her documented professional experience."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida provide fertility treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her profile describes experience in fertility-related care and treatment coordination. The exact fertility services personally provided should be confirmed with the clinic."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida perform IUI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The supplied profile references IUI and fertility treatment coordination. Whether Dr. Sanjida personally performs IUI should be confirmed with the clinic."
          }
        },
        {
          "@type": "Question",
          "name": "What languages does Dr. Sanjida speak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Sanjida's listed languages are English, Hindi/Urdu and Bengali."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications does Dr. Sanjida have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her listed professional certifications include ACLS and BLS through the American Safety & Health Institute, along with a Professional Diploma in Dermatology from the Royal College of Physicians of Ireland."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida provide chronic disease follow-up?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Her documented experience includes management and follow-up of chronic conditions such as diabetes, hypertension, dyslipidemia, asthma and COPD."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Sanjida review medical investigations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clinical assessment and investigation interpretation are included among her documented areas of professional experience."
          }
        },
        {
          "@type": "Question",
          "name": "Where does Dr. Sanjida practice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Sanjida practices at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai."
          }
        },
        {
          "@type": "Question",
          "name": "What is Dr. Sanjida's clinical approach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Her profile reflects an individualized clinical approach based on patient assessment, relevant investigation review, clear communication, treatment planning and appropriate follow-up."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a consultation with Dr. Sanjida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients can contact Vedara Care through the clinic's current appointment, telephone or WhatsApp booking channels."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${profileUrl}/#person`,
      "name": "Dr. Sanjida Islam Suchana",
      "jobTitle": "DHA Licensed General Practitioner",
      "worksFor": {
        "@id": "https://vedaracare.ae/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "General Practice Consultation with Dr. Sanjida Islam Suchana",
      "provider": {
        "@id": `${profileUrl}/#physician`
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai"
        }
      ],
      "serviceType": "General Practice and Primary Care"
    }
  ];

  const doctorProfile = drSanjida;

  return (
    <>
      <Head>
        <title>Dr. Sanjida Islam Suchana — DHA Licensed GP in Dubai | Vedara Care</title>
        <meta name="description" content="Dr. Sanjida Islam Suchana is a DHA Licensed General Practitioner with experience in primary care, clinical dermatology, chronic disease management and women's health across the UAE and Bangladesh." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <meta property="og:title" content="Dr. Sanjida Islam Suchana — DHA Licensed General Practitioner | Vedara Care" />
        <meta property="og:description" content="Dr. Sanjida Islam Suchana is a DHA Licensed General Practitioner with experience in primary care, clinical dermatology, chronic disease management and women's health." />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content={profileUrl} />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Sanjida" />
        <meta property="profile:last_name" content="Islam Suchana" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Sanjida Islam Suchana — DHA Licensed General Practitioner | Vedara Care" />
        <meta name="twitter:description" content="DHA Licensed General Practitioner with experience in primary care, clinical dermatology, chronic disease management and women's health." />
        <meta name="twitter:image" content={ogImageUrl} />

        <link rel="canonical" href={profileUrl} />
        <link rel="alternate" hrefLang="en-AE" href={profileUrl} />
        <link rel="alternate" hrefLang="x-default" href={profileUrl} />

        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <DoctorPageTemplate doctor={doctorProfile} />
    </>
  );
};

export default DrSanjidaPage;
