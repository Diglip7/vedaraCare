import Head from 'next/head';
import React from 'react';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

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

  const doctorProfile = {
    firstName: "Dr. Sanjida",
    name: "Dr. Sanjida Islam Suchana",
    heroBadge: "DHA Licensed General Practitioner",
    heroStats: "General Practice | Clinical Dermatology | Women's Health",
    pageTitle: "Dr. Sanjida Islam Suchana — DHA Licensed General Practitioner in Dubai",
    image: "/images/dr-sanjida-islam-suchana-gp-dubai.webp",
    alt: "Dr. Sanjida Islam Suchana DHA Licensed General Practitioner Dubai",
    bio: "Dr. Sanjida Islam Suchana is a DHA Licensed General Practitioner at Vedara Care Polyclinic in JVC, Dubai, with clinical experience in primary care, clinical dermatology, chronic disease management and women's health. She combines detailed clinical assessment, investigation review and individualized treatment planning to help patients understand their healthcare needs.",
    primaryCtaHref: "/book",
    secondaryCtaHref: "https://wa.me/971555736312",
    primaryCtaText: "Book Consultation with Dr. Sanjida",
    secondaryCtaText: "WhatsApp Us",
    trustSignals: [
      "DHA Licensed General Practitioner",
      "MBBS & Diploma in Dermatology",
      "Experience across UAE & Bangladesh",
      "Primary Care & Chronic Disease Management"
    ],
    floatingCard: {
      title: "GENERAL PRACTICE & CLINICAL CARE",
      subtitle: "Experienced in primary healthcare and dermatology"
    },
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about/" },
      { label: "Our Doctors", href: "/doctors/" },
      { label: "Dr. Sanjida Islam Suchana — DHA Licensed General Practitioner", href: profileUrl }
    ],
    aboutLabel: "ABOUT DR. SANJIDA ISLAM SUCHANA",
    aboutH2: "About Dr. Sanjida Islam Suchana",
    about: "Dr. Sanjida Islam Suchana is a DHA Licensed General Practitioner at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai, with clinical experience in primary healthcare, clinical dermatology, chronic disease management and women's health. Her professional background includes an MBBS from Anwer Khan Modern Medical College & Hospital, Bangladesh, together with a Professional Diploma in Dermatology from the Royal College of Physicians of Ireland (RCPI).",
    aboutFooter: "Reviewed by Dr. Sanjida Islam Suchana, MBBS, DHA Licensed General Practitioner",
    summaryLabel: "HER APPROACH",
    summaryTitle: "Dr. Sanjida Islam Suchana's approach to general practice and clinical care",
    summaryParagraph1: "Dr. Sanjida begins consultations by understanding the patient's symptoms, medical history, lifestyle factors and reason for seeking care. Each consultation is approached according to the patient's individual presentation, with appropriate examination and investigation review where clinically indicated.",
    description: [
      { title: "Primary care and general medicine", content: "Her general practice experience includes assessment and management of common acute and chronic medical concerns." },
      { title: "Clinical dermatology", content: "Her additional professional training in dermatology supports her clinical focus on common skin conditions within the scope of general practice." },
      { title: "Chronic disease management", content: "Her documented experience includes conditions such as diabetes, hypertension, dyslipidemia, asthma and COPD." },
      { title: "Women's health", content: "Women's health and fertility-related counselling are among her documented areas of clinical experience." },
      { title: "Clear patient communication", content: "Dr. Sanjida aims to explain clinical findings, investigation results and treatment recommendations clearly so patients understand their care." },
      { title: "Follow-up and coordinated care", content: "Where ongoing monitoring, additional investigation or specialist care is required, appropriate follow-up or coordination can be recommended." }
    ],
    specialtiesList: [
      {
        number: "01",
        title: "General Practice & Primary Care",
        description: "Dr. Sanjida has experience in general practice and primary healthcare, assessing and managing a wide range of common outpatient medical concerns.",
        related: "Primary care consultations"
      },
      {
        number: "02",
        title: "Clinical Dermatology & Skin Health",
        description: "Her additional Professional Diploma in Dermatology supports her clinical dermatology focus, including assessment and management of common skin concerns.",
        related: "Acne, eczema, dermatitis"
      },
      {
        number: "03",
        title: "Acute & Chronic Disease Management",
        description: "Her documented clinical experience includes management of common acute concerns and chronic conditions such as diabetes, hypertension, dyslipidemia, asthma and COPD.",
        related: "Chronic disease follow-up"
      },
      {
        number: "04",
        title: "Women's Health",
        description: "Women's health is one of Dr. Sanjida's documented clinical areas, including counselling and assessment of relevant women's health concerns.",
        related: "General women's health concerns"
      },
      {
        number: "05",
        title: "Fertility & Infertility Counselling",
        description: "Dr. Sanjida has experience in infertility counselling and fertility-related care coordination.",
        related: "Fertility counselling"
      },
      {
        number: "06",
        title: "Patient Counselling & Treatment Planning",
        description: "She focuses on explaining clinical findings and developing treatment plans according to the patient's condition and individual healthcare needs.",
        related: "Treatment planning"
      },
      {
        number: "07",
        title: "Clinical Assessment & Investigation Interpretation",
        description: "Her clinical approach includes detailed history taking, physical assessment and review of relevant diagnostic investigations to support clinical decision-making.",
        related: "Investigation review"
      }
    ],
    specialtiesBgColor: "#FFFFFF",
    specialtiesCardBg: "#FBF7F1",
    specialtiesLabel: "DOCUMENTED CLINICAL EXPERTISE",
    specialtiesTitle: "Dr. Sanjida Islam Suchana's documented areas of clinical expertise",
    specialtiesSubtitle: "Her clinical experience includes primary care, clinical dermatology, chronic disease management and women's health.",
    credentialsTitle: "Dr. Sanjida Islam Suchana's qualifications, licenses, certifications and professional background",
    credentialsSubtitle: "Dr. Sanjida's professional experience includes clinical healthcare work across the UAE and Bangladesh.",
    education: [
      "MBBS — Anwer Khan Modern Medical College & Hospital, Bangladesh",
      "Professional Diploma in Dermatology — Royal College of Physicians of Ireland (RCPI), Ireland"
    ],
    languagesSpoken: [
      "English (Fluent)",
      "Hindi/Urdu (Fluent)",
      "Bengali (Fluent)"
    ],
    certifications: [
      "DHA Licensed General Practitioner",
      "Bangladesh Medical & Dental Council (BMDC) Licensed Physician",
      "Certified in Advanced Cardiovascular Life Support (ACLS) (ASHI)",
      "Certified in Basic Life Support (BLS) (ASHI)"
    ],
    consultation: {
      label: "WHAT TO EXPECT",
      title: "What to expect during a consultation with Dr. Sanjida Islam Suchana",
      description: "Dr. Sanjida provides an individualized clinical assessment and management plan.",
      phases: [
        {
          phase: "01",
          time: "",
          title: "Initial Clinical Assessment",
          description: "The consultation begins with understanding the patient's symptoms, medical history, current concerns and relevant lifestyle factors."
        },
        {
          phase: "02",
          time: "",
          title: "Clinical Evaluation and Investigation Review",
          description: "Where appropriate, Dr. Sanjida may review existing diagnostic investigations or recommend additional investigations based on the patient's clinical presentation."
        },
        {
          phase: "03",
          time: "",
          title: "Individualised Treatment Planning",
          description: "Following clinical assessment, an individualized management plan can be developed, which may involve medical management, lifestyle guidance, or monitoring."
        },
        {
          phase: "04",
          time: "",
          title: "Follow-up and Progress Review",
          description: "Patients with ongoing medical or chronic conditions may require follow-up. The management plan can be reviewed according to the patient's clinical needs."
        }
      ]
    },
    location: {
      bgColor: "bg-white",
      label: "CLINIC LOCATION",
      title: "Consult with Dr. Sanjida Islam Suchana",
      address: "Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai, UAE",
      phone: "+971 55 573 6312",
      email: "booking@vedaracare.ae",
      hours: "",
      landmarks: [
        "Primary care and general medicine",
        "Clinical dermatology",
        "Women's health and fertility counselling"
      ],
      description: "Patients can book through the clinic's current appointment, telephone or WhatsApp booking channels.",
      buttonText: "Book Consultation with Dr. Sanjida",
      buttonHref: "/book"
    },
    faqs: {
      label: "FREQUENTLY ASKED QUESTIONS",
      title: "What patients ask about consulting Dr. Sanjida Islam Suchana",
      description: "Common questions about her clinical focus and practice in Dubai.",
      buttonText: "WhatsApp Us",
      buttonHref: "https://wa.me/971555736312",
      faqs: schemaMarkup.find(s => s['@type'] === 'FAQPage').mainEntity.map(faq => ({
        question: faq.name,
        answer: faq.acceptedAnswer.text
      }))
    }
  };

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
