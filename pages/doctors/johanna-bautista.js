import React from 'react';
import Head from 'next/head';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';

export default function JohannaBautistaPage() {
  const staff = {
    name: 'Johanna Dianne U. Bautista',
    firstName: 'Johanna',
    lastName: 'Bautista',
    fullName: 'Johanna Dianne U. Bautista',
    slug: 'johanna-bautista',
    heroBadge: 'FRONT DESK RECEPTIONIST — VEDARA CARE, JVC',
    title: 'BS Medical Laboratory Science — Patient Care & Front Desk Specialist',
    designation: 'Front Desk Receptionist',
    bio: 'Johanna is the welcoming face of Vedara Care, often the very first point of contact for patients and clients. With a background in medical laboratory science and hands-on experience in an aesthetic and wellness clinic environment, she brings both technical understanding and genuine warmth to every interaction — ensuring the front desk runs smoothly while every visitor feels cared for.',
    image: '/images/johanna-bautista.jpeg',
    // heroStats: 'Patient Care & Operations Specialist',
    features: [
      'Filipino — Trained in Patient-Centered Front Desk Care',
      'Fluent in English & Tagalog',
      'Background in Aesthetic & Wellness Clinic Operations',
      'Appointment Coordination Across Multiple Doctors'
    ],
    profileSummaryHeading: 'Warm, organized, and always one step ahead.',
    profileSummaryP1: 'Johanna Dianne U. Bautista is a Receptionist at Vedara Care in Jumeirah Village Circle, Dubai, where she manages the front desk, coordinates appointments, and supports patients from their very first inquiry through to their visit. A graduate of Lyceum of the Philippines University – Batangas with a degree in Medical Laboratory Science, she combines a clinical understanding of patient needs with genuine hospitality — a combination that sets her apart from a typical front-desk role.',
    profileSummaryP2: 'She has prior experience in an aesthetic and wellness clinic setting, giving her a working knowledge of aesthetic and beauty treatments that helps her guide clients accurately from the moment they walk in or call.',
    // profileUpdated: 'Profile last updated August 2026',
    education: [
      'BS Medical Laboratory Science — Lyceum of the Philippines University, Batangas'
    ],
    languages: ['English (Fluent)', 'Tagalog (Fluent)'],
    experience: [
      'Front Desk & Reception, Aesthetic and Wellness Clinic Environment',
      'Patient Coordination & Client Communication'
    ],
    strengths: [
      {
        title: 'Patient & Client Relations',
        description: 'Delivering friendly, professional, and personalized support to every patient and visitor — from their first phone call to their in-clinic visit. Her patient-centered approach reflects her background in medical laboratory science and experience in an aesthetic and wellness clinic environment.',
        coreStrength: 'Patient-centered communication'
      },
      {
        title: 'Appointment & Schedule Management',
        description: 'With experience coordinating appointments across multiple doctors, Johanna helps manage bookings, confirmations, cancellations, and scheduling efficiently so patients are seen without unnecessary delays.',
        coreStrength: 'Multi-doctor appointment coordination'
      },
      {
        title: 'Reception & Front Desk Operations',
        description: 'Keeping the daily rhythm of the clinic smooth — ensuring the waiting area, check-in process, patient flow, and handoffs to clinical staff all run without friction.',
        coreStrength: 'Smooth front-desk coordination'
      },
      {
        title: 'Communication & Customer Service',
        description: 'Clear, respectful, and professional communication with patients, doctors, and staff while managing multiple requests and helping patients understand the next steps in their visit.',
        coreStrength: 'English & Tagalog communication'
      },
      {
        title: 'Aesthetic & Wellness Services Guidance',
        description: 'Helping clients understand the aesthetic, beauty, and wellness treatments available at the clinic, drawing on real experience in an aesthetic and wellness clinic setting to provide initial guidance and connect clients with the right clinician.',
        coreStrength: 'Aesthetic & wellness service knowledge'
      },
      {
        title: 'Multitasking & Problem Solving',
        description: 'Managing several responsibilities at once — inquiries, walk-ins, phone calls, and administrative tasks — with a calm, organized, and steady professionalism as a reliable point of contact throughout the patient journey.',
        coreStrength: 'Calm, organized problem solving'
      }
    ],
    steps: [
      {
        num: '01',
        title: 'A Warm First Contact',
        description: 'Whether by phone, WhatsApp, or in person, Johanna makes sure your first interaction with the clinic feels personal, not transactional.'
      },
      {
        num: '02',
        title: 'Clear Guidance on Appointments & Services',
        description: "She'll help you find the right appointment slot and the right doctor, and can answer initial questions about treatments offered at the clinic."
      },
      {
        num: '03',
        title: 'Smooth Check-In',
        description: "On the day of your visit, Johanna manages your check-in at the Vedara Care front desk so you're seen on time, with any paperwork or details sorted in advance where possible."
      },
      {
        num: '04',
        title: 'A Reliable Point of Contact Throughout',
        description: "From rescheduling to follow-up questions, Johanna stays your point of contact for anything administrative — so your doctor's time stays focused on your care."
      }
    ],
    faqs: [
      {
        question: 'Who do I speak to first when I arrive or call?',
        answer: 'Johanna, our front desk receptionist, is your first point of contact for appointments, general inquiries, and check-in at Vedara Care.'
      },
      {
        question: 'Can Johanna help me choose the right doctor or treatment?',
        answer: 'She can give you initial guidance on the services and treatments offered at the clinic, especially aesthetic and wellness options, and will connect you with the right clinician for anything requiring clinical judgment.'
      },
      {
        question: 'What languages does Johanna speak?',
        answer: 'English and Tagalog, fluently.'
      },
      {
        question: 'Can I reschedule or cancel through the front desk?',
        answer: 'Yes. Johanna manages all appointment bookings, confirmations, and cancellations — just call, WhatsApp, or ask at reception.'
      },
      {
        question: 'Does the front desk handle insurance questions?',
        answer: 'Johanna can help direct general insurance and billing questions to the right person, though detailed coverage confirmations are typically handled by the billing team. WhatsApp us a photo of your insurance card and we will confirm your specific coverage before you book.'
      },
      {
        question: 'How do I reach the front desk directly?',
        answer: 'Call, WhatsApp, or email using our contact details (+971 55 573 6312 / booking@vedaracare.ae), or simply ask for Johanna when you visit the JVC clinic.'
      }
    ]
  };

  const pageUrl = 'https://vedaracare.ae/doctors/johanna-bautista/';

  const staffTemplate = {
    firstName: staff.firstName,
    name: staff.name,
    heroBadge: staff.heroBadge,
    heroStats: staff.heroStats,
    pageTitle: staff.title,
    image: staff.image,
    alt: staff.fullName,
    bio: staff.bio,
    primaryCtaHref: '/book',
    secondaryCtaHref: 'https://wa.me/971555736312',
    primaryCtaText: 'Book an Appointment',
    secondaryCtaText: 'Chat on WhatsApp',
    trustSignals: staff.features,
    floatingCard: {
      title: 'FRONT DESK EXCELLENCE',
      subtitle: staff.features[0]
    },
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Doctors & Team", href: "/doctors/" },
      { label: staff.name }
    ],
    aboutLabel: "PROFILE SUMMARY",
    aboutH2: staff.profileSummaryHeading,
    about: staff.profileSummaryP1,
    aboutFooter: staff.profileUpdated,
    summaryLabel: "PROFILE SUMMARY",
    summaryTitle: staff.profileSummaryHeading,
    summaryParagraph1: staff.profileSummaryP2,
    description: [],
    specialtiesList: staff.strengths.map((s, i) => ({
      number: String(i + 1).padStart(2, '0'),
      title: s.title,
      description: s.description,
      related: s.coreStrength
    })),
    specialtiesBgColor: "#FFFFFF",
    specialtiesCardBg: "#FBF7F1",
    specialtiesLabel: "CLINICAL & ADMINISTRATIVE FOCUS",
    specialtiesTitle: "What Johanna is known for.",
    specialtiesSubtitle: "Every great patient-care professional has areas where she genuinely excels. At Vedara Care, Johanna is known for creating a warm, organized, and seamless experience for patients.",
    credentialsTitle: "Where her care comes from.",
    credentialsSubtitle: "We believe patients deserve to know who is coordinating their care — not just the doctors, but the team supporting them.",
    education: staff.education,
    languagesSpoken: staff.languages,
    certifications: staff.experience,
    consultation: {
      label: "PATIENT EXPERIENCE",
      title: "A front-desk experience built around you.",
      description: "What to expect when you call, WhatsApp, or walk into Vedara Care Polyclinic.",
      phases: staff.steps.map((s) => ({
        phase: s.num,
        time: '',
        title: s.title,
        description: s.description
      }))
    },
    location: {
      bgColor: "bg-white",
      label: "REACH THE FRONT DESK",
      title: "Get in touch with Johanna.",
      address: "Vedara Care Polyclinic, Al Barsha South Fourth, Binghatti Azure, Shop-4, JVC, Dubai, UAE",
      phone: "+971 55 573 6312",
      email: "booking@vedaracare.ae",
      hours: "",
      landmarks: [
        "Next to Circle Mall (2 min walk)",
        "3 min from FIVE Jumeirah Village Hotel",
        "5 min from JSS Private School"
      ],
      description: "Have questions about appointment availability, doctor schedules, or treatment procedures? Johanna and the front desk team are here to assist.",
      buttonText: "Book an Appointment",
      buttonHref: "/book"
    },
    faqs: {
      label: "FREQUENTLY ASKED",
      title: "Common questions about our front desk.",
      description: "Find out how Johanna can help you during your visit.",
      buttonText: "Ask Johanna",
      buttonHref: "https://wa.me/971555736312",
      faqs: staff.faqs
    }
  };

  return (
    <>
      <Head>
        <title>{staff.fullName} — Front Desk Receptionist | Vedara Care</title>
        <meta name="description" content="Johanna Dianne U. Bautista is the welcoming front-desk receptionist at Vedara Care, JVC. Fluent in English & Tagalog, coordinating appointments and supporting patients." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={`${staff.fullName} — Front Desk Receptionist | Vedara Care`} />
        <meta property="og:description" content="Front desk receptionist at Vedara Care, JVC – multilingual, experienced in patient coordination and clinic operations." />
        <meta property="og:image" content="https://vedaracare.ae/images/johanna-bautista.jpeg" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${staff.fullName} — Front Desk Receptionist | Vedara Care`} />
        <meta name="twitter:description" content="Front desk receptionist at Vedara Care, JVC – multilingual, experienced in patient coordination and clinic operations." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/johanna-bautista.jpeg" />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": "https://vedaracare.ae/#organization",
            "name": "Vedara Care Polyclinic",
            "url": "https://vedaracare.ae/",
            "employee": {
              "@id": `${pageUrl}#person`
            }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Johanna Dianne U. Bautista?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Johanna Dianne U. Bautista is a Receptionist at Vedara Care in Jumeirah Village Circle, Dubai. She supports patient relations, appointment coordination, front-desk operations and client communication."
                }
              },
              {
                "@type": "Question",
                "name": "What languages does Johanna speak?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Johanna speaks English and Tagalog."
                }
              },
              {
                "@type": "Question",
                "name": "Can Johanna help with appointment bookings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Johanna manages appointment bookings, confirmations and cancellations and coordinates schedules with doctors."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Vedara Care located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vedara Care Polyclinic is listed at Al Barsha South Fourth, Binghatti Azure, Shop-4, Jumeirah Village Circle, Dubai, UAE."
                }
              }
            ]
          })
        }} />
      </Head>
      <DoctorPageTemplate doctor={staffTemplate} />
    </>
  );
}
