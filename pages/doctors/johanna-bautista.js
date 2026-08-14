import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function JohannaBautistaPage() {
  const [openFaq, setOpenFaq] = useState(null);

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
    heroStats: 'Patient Care & Operations Specialist',
    features: [
      'Filipino — Trained in Patient-Centered Front Desk Care',
      'Fluent in English & Tagalog',
      'Background in Aesthetic & Wellness Clinic Operations',
      'Appointment Coordination Across Multiple Doctors'
    ],
    profileSummaryHeading: 'Warm, organized, and always one step ahead.',
    profileSummaryP1: 'Johanna Dianne U. Bautista is a Receptionist at Vedara Care in Jumeirah Village Circle, Dubai, where she manages the front desk, coordinates appointments, and supports patients from their very first inquiry through to their visit. A graduate of Lyceum of the Philippines University – Batangas with a degree in Medical Laboratory Science, she combines a clinical understanding of patient needs with genuine hospitality — a combination that sets her apart from a typical front-desk role.',
    profileSummaryP2: 'She has prior experience in an aesthetic and wellness clinic setting, giving her a working knowledge of aesthetic and beauty treatments that helps her guide clients accurately from the moment they walk in or call.',
    profileUpdated: 'Profile last updated August 2026',
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
    ],
    otherTeam: [
      {
        name: 'Dr. Priya Nair',
        specialty: 'Senior Ayurvedic Physician',
        focus: 'Chronic Pain, PCOS, Migraine',
        image: '/images/dr-priya-nair-ayurvedic-physician-jvc-dubai.webp',
        alt: 'Dr. Priya Nair at Vedara Care JVC',
        url: '/doctors/dr-priya-nair-ayurveda'
      },
      {
        name: 'Dr. Neethu Karatt',
        specialty: 'BAMS | Ayurveda Practitioner',
        focus: 'Neurological Rehab, Musculoskeletal Care',
        image: '/images/dr-neetu-karatt-bams-jvc-dubai.webp',
        alt: 'Dr. Neethu Karatt at Vedara Care JVC',
        url: '/doctors/dr-neethu-karatt-bams'
      },
      {
        name: 'Dr. Anusha Makkena',
        specialty: 'MBBS, MS ENT | General Practitioner',
        focus: 'Aesthetic Medicine & ENT Consultations',
        image: '/images/dr-anusha-makkena-ent-jvc-dubai.webp',
        alt: 'Dr. Anusha Makkena at Vedara Care JVC',
        url: '/doctors/dr-anusha-makkena'
      },
      {
        name: 'Hafsina K K',
        specialty: 'DHA Licensed Physiotherapist',
        focus: 'Orthopedic & Neurological Rehabilitation',
        image: '/images/dr-layla-al-rashid-dermatologist-jvc-dubai.webp',
        alt: 'Hafsina K K at Vedara Care JVC',
        url: '/doctors/hafsina-kk-physiotherapist'
      }
    ]
  };

  const pageUrl = 'https://vedaracare.ae/doctors/johanna-bautista/';

  return (
    <>
      <Head>
        <title>{staff.fullName} — Front Desk Receptionist | Vedara Care</title>
        <meta
          name="description"
          content="Johanna Dianne U. Bautista is the welcoming front-desk receptionist at Vedara Care, JVC. Fluent in English & Tagalog, coordinating appointments and supporting patients."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={`${staff.fullName} — Front Desk Receptionist | Vedara Care`} />
        <meta
          property="og:description"
          content="Front desk receptionist at Vedara Care, JVC – multilingual, experienced in patient coordination and clinic operations."
        />
        <meta property="og:image" content="https://vedaracare.ae/images/johanna-bautista.jpeg" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${staff.fullName} — Front Desk Receptionist | Vedara Care`} />
        <meta
          name="twitter:description"
          content="Front desk receptionist at Vedara Care, JVC – multilingual, experienced in patient coordination and clinic operations."
        />
        <meta name="twitter:image" content="https://vedaracare.ae/images/johanna-bautista.jpeg" />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" hrefLang="en-AE" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': `${pageUrl}#person`,
              name: staff.fullName,
              givenName: staff.firstName,
              familyName: staff.lastName,
              jobTitle: 'Front Desk Receptionist',
              image: 'https://vedaracare.ae/images/johanna-bautista.jpeg',
              url: pageUrl,
              worksFor: {
                '@type': 'MedicalClinic',
                '@id': 'https://vedaracare.ae/#organization',
                name: 'Vedara Care Polyclinic'
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Lyceum of the Philippines University – Batangas'
              },
              knowsLanguage: ['English', 'Tagalog'],
              description:
                'Johanna Dianne U. Bautista is the front desk receptionist and patient care specialist at Vedara Care Polyclinic in JVC, Dubai.'
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              mainEntity: { '@id': `${pageUrl}#person` },
              dateModified: '2026-08-14T00:00:00Z',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vedaracare.ae/' },
                  { '@type': 'ListItem', position: 2, name: 'Doctors & Team', item: 'https://vedaracare.ae/doctors/' },
                  { '@type': 'ListItem', position: 3, name: staff.fullName, item: pageUrl }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: staff.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer
                }
              }))
            })
          }}
        />
      </Head>

      <main className="pt-9">
        {/* Breadcrumb & Hero Section */}
        <section className="py-0" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
          <div className="bg-white border-b" style={{ borderColor: 'rgb(229, 223, 211)' }}>
            <div
              className="max-w-[1280px] mx-auto px-6 h-12 flex items-center gap-2"
              style={{ fontSize: '13px', color: 'rgb(107, 107, 107)' }}
            >
              <Link href="/" className="hover:opacity-70 transition-opacity">
                Home
              </Link>
              <span className="opacity-35">/</span>
              <Link href="/doctors" className="hover:opacity-70 transition-opacity">
                Doctors & Team
              </Link>
              <span className="opacity-35">/</span>
              <span style={{ color: 'rgb(26, 26, 26)' }}>{staff.name}</span>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
              {/* Image Column */}
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div
                  className="relative rounded-[8px] overflow-hidden shadow-md"
                  style={{ aspectRatio: '4 / 5', backgroundColor: 'rgb(228, 216, 200)' }}
                >
                  <img
                    src={staff.image}
                    alt={staff.fullName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/default-avatar.png';
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 m-4 p-4 rounded-[8px]"
                    style={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      boxShadow: 'rgba(0, 0, 0, 0.13) 0px 4px 28px'
                    }}
                  >
                    <p
                      className="text-[11px] font-bold tracking-[0.13em] uppercase mb-1"
                      style={{ color: 'rgb(201, 169, 97)' }}
                    >
                      {staff.heroBadge}
                    </p>
                    <p className="text-[13px] font-medium" style={{ color: 'rgb(26, 26, 26)' }}>
                      {staff.heroStats}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="md:w-[55%] flex flex-col gap-6">
                <div>
                  <p
                    className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-3"
                    style={{ color: 'rgb(201, 169, 97)' }}
                  >
                    {staff.heroBadge}
                  </p>
                  <h1
                    className="mb-3"
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: 'clamp(36px, 4.5vw, 54px)',
                      fontWeight: '500',
                      color: 'rgb(26, 26, 26)',
                      lineHeight: '1.08'
                    }}
                  >
                    {staff.name}
                  </h1>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: '19px',
                      fontStyle: 'italic',
                      color: 'rgb(201, 169, 97)',
                      fontWeight: '400'
                    }}
                  >
                    {staff.title}
                  </p>
                  <p
                    className="leading-[1.8]"
                    style={{ fontSize: '16px', color: 'rgb(107, 107, 107)', maxWidth: '520px' }}
                  >
                    {staff.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                    style={{ background: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    Book an Appointment
                  </Link>
                  <a
                    href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20appointments%20and%20treatments."
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                    style={{ background: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t"
                  style={{ borderColor: 'rgb(229, 223, 211)' }}
                >
                  {staff.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-[13.5px]"
                      style={{ color: 'rgb(74, 74, 74)' }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(201, 169, 97)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Summary */}
        <section className="bg-white py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span
                  className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-3"
                  style={{ color: 'rgb(201, 169, 97)' }}
                >
                  PROFILE SUMMARY
                </span>
                <h2
                  className="font-medium text-[#1A1A1A] leading-[1.2]"
                  style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '38px' }}
                >
                  {staff.profileSummaryHeading}
                </h2>
              </div>

              <div className="border-l-2 border-[#C9A961] pl-8 space-y-4">
                <p className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed">
                  {staff.profileSummaryP1}
                </p>
                <p className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed">
                  {staff.profileSummaryP2}
                </p>
                <p className="text-[13px] font-sans text-[#8C8C8C] italic pt-2">
                  {staff.profileUpdated}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Background & Education */}
        <section className="py-20" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-14">
              <span
                className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-3"
                style={{ color: 'rgb(201, 169, 97)' }}
              >
                BACKGROUND & EDUCATION
              </span>
              <h2
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: '38px',
                  fontWeight: '500',
                  color: 'rgb(26, 26, 26)',
                  lineHeight: '1.2',
                  marginBottom: '12px'
                }}
              >
                Where her care comes from.
              </h2>
              <p className="text-[15px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
                We believe patients deserve to know who is coordinating their care — not just the doctors, but the team supporting them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Education */}
              <div
                className="rounded-[8px] p-8"
                style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <div
                  className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgb(250, 246, 239)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: 'rgb(26, 26, 26)',
                    marginBottom: '20px'
                  }}
                >
                  Education
                </h3>
                <ul className="space-y-4">
                  {staff.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'rgb(201, 169, 97)' }}
                      ></div>
                      <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div
                className="rounded-[8px] p-8"
                style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <div
                  className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgb(250, 246, 239)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: 'rgb(26, 26, 26)',
                    marginBottom: '20px'
                  }}
                >
                  Languages
                </h3>
                <ul className="space-y-4">
                  {staff.languages.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'rgb(201, 169, 97)' }}
                      ></div>
                      <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Experience */}
              <div
                className="rounded-[8px] p-8"
                style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <div
                  className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgb(250, 246, 239)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: 'rgb(26, 26, 26)',
                    marginBottom: '20px'
                  }}
                >
                  Relevant Experience
                </h3>
                <ul className="space-y-4">
                  {staff.experience.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: 'rgb(201, 169, 97)' }}
                      ></div>
                      <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What Johanna is Known For (Strengths Grid) */}
        <section className="bg-white py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-14">
              <span
                className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-3"
                style={{ color: 'rgb(201, 169, 97)' }}
              >
                CLINICAL & ADMINISTRATIVE FOCUS
              </span>
              <h2
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: '38px',
                  fontWeight: '500',
                  color: 'rgb(26, 26, 26)',
                  lineHeight: '1.2',
                  marginBottom: '12px'
                }}
              >
                What Johanna is known for.
              </h2>
              <p className="text-[15px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
                Every great patient-care professional has areas where she genuinely excels. At Vedara Care, Johanna is known for creating a warm, organized, and seamless experience for patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staff.strengths.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-[8px] border flex flex-col justify-between"
                  style={{ backgroundColor: 'rgb(250, 246, 239)', border: '1px solid rgb(229, 223, 211)' }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Fraunces, Georgia, serif',
                        fontSize: '20px',
                        fontWeight: '500',
                        color: 'rgb(26, 26, 26)',
                        lineHeight: '1.25',
                        marginBottom: '14px'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] font-sans leading-relaxed text-[#4A4A4A] mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: 'rgb(229, 223, 211)' }}>
                    <p className="text-[11px] font-bold tracking-[0.08em] uppercase" style={{ color: 'rgb(201, 169, 97)' }}>
                      CORE STRENGTH: <span style={{ color: 'rgb(31, 69, 56)' }}>{item.coreStrength}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect When You Call or Visit (Process Steps) */}
        <section className="py-20" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-14">
              <span
                className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-3"
                style={{ color: 'rgb(201, 169, 97)' }}
              >
                PATIENT EXPERIENCE
              </span>
              <h2
                style={{
                  fontFamily: 'Fraunces, Georgia, serif',
                  fontSize: '38px',
                  fontWeight: '500',
                  color: 'rgb(26, 26, 26)',
                  lineHeight: '1.2'
                }}
              >
                A front-desk experience built around you.
              </h2>
              <p className="mt-4 text-[16px] font-sans max-w-[650px] mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
                What to expect when you call, WhatsApp, or walk into Vedara Care Polyclinic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {staff.steps.map((step, index) => (
                <div key={index} className="relative bg-white p-6 rounded-[8px] border" style={{ borderColor: 'rgb(229, 223, 211)' }}>
                  <div className="text-[52px] font-serif font-medium mb-2" style={{ color: 'rgba(201, 169, 97, 0.35)' }}>
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: '18px',
                      fontWeight: '500',
                      color: 'rgb(26, 26, 26)',
                      marginBottom: '12px'
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-sans leading-relaxed" style={{ color: 'rgb(74, 74, 74)' }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact Information */}
        <section className="bg-white py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="rounded-[12px] p-8 md:p-12 border" style={{ backgroundColor: 'rgb(250, 246, 239)', borderColor: 'rgb(229, 223, 211)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[13px] font-semibold tracking-[0.14em] uppercase block mb-3" style={{ color: 'rgb(201, 169, 97)' }}>
                    REACH THE FRONT DESK
                  </span>
                  <h2
                    className="mb-4"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '34px', fontWeight: '500', color: 'rgb(26, 26, 26)' }}
                  >
                    Get in touch with Johanna.
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#555] mb-6">
                    Have questions about appointment availability, doctor schedules, or treatment procedures? Johanna and the front desk team are here to assist.
                  </p>

                  <div className="space-y-3 mb-8">
                    <p className="text-[14.5px] text-[#222]">
                      <strong>Address:</strong> Vedara Care Polyclinic, Al Barsha South Fourth, Binghatti Azure, Shop-4, JVC, Dubai, UAE
                    </p>
                    <p className="text-[14.5px] text-[#222]">
                      <strong>Phone:</strong> +971 55 573 6312
                    </p>
                    <p className="text-[14.5px] text-[#222]">
                      <strong>Email:</strong> booking@vedaracare.ae
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-[14px] font-medium transition-opacity hover:opacity-90"
                      style={{ background: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}
                    >
                      Book an Appointment
                    </Link>
                    <a
                      href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20speak%20with%20the%20front%20desk."
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-[14px] font-medium transition-opacity hover:opacity-90"
                      style={{ background: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-[8px] border" style={{ borderColor: 'rgb(229, 223, 211)' }}>
                  <h3
                    className="mb-4"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', fontWeight: '500', color: 'rgb(26, 26, 26)' }}
                  >
                    Nearby Landmarks & Access
                  </h3>
                  <ul className="space-y-3 text-[14px] text-[#555]">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></span>
                      Next to Circle Mall (2 min walk)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></span>
                      3 min from FIVE Jumeirah Village Hotel
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></span>
                      5 min from JSS Private School
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></span>
                      Free covered parking available for patients
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20" style={{ background: 'rgb(240, 233, 221)' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-[38%] md:sticky md:top-24 md:self-start">
                <p
                  className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4"
                  style={{ color: 'rgb(201, 169, 97)' }}
                >
                  QUESTIONS, ANSWERED
                </p>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: '500',
                    color: 'rgb(26, 26, 26)'
                  }}
                >
                  What patients ask before their visit.
                </h2>
                <p className="text-[15px] leading-[1.78] mb-8" style={{ color: 'rgb(107, 107, 107)' }}>
                  Honest answers to the most common questions about reaching the front desk. Not here? WhatsApp us — typically replied to in under 15 minutes.
                </p>
                <a
                  href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20have%20a%20question%20about%20my%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                  style={{ background: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  Ask the Team
                </a>
              </div>

              <div className="md:w-[62%]" style={{ borderTop: '1px solid rgb(229, 223, 211)' }}>
                {staff.faqs.map((faq, index) => (
                  <div key={index} style={{ borderBottom: '1px solid rgb(229, 223, 211)' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-start justify-between gap-4 text-left py-5 cursor-pointer focus:outline-none"
                    >
                      <span className="text-[15px] font-medium leading-snug" style={{ color: 'rgb(26, 26, 26)' }}>
                        {faq.question}
                      </span>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: 'rgb(201, 169, 97)' }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: openFaq === index ? 'rotate(45deg)' : 'none',
                            transition: 'transform 200ms ease'
                          }}
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </span>
                    </button>
                    <div
                      className="overflow-hidden"
                      style={{
                        maxHeight: openFaq === index ? '500px' : '0px',
                        transition: 'max-height 250ms ease-out'
                      }}
                    >
                      <p className="pb-5 text-[14.5px] leading-[1.78]" style={{ color: 'rgb(107, 107, 107)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the rest of the clinic / team */}
        <section className="bg-white py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p
                  className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-3"
                  style={{ color: 'rgb(201, 169, 97)' }}
                >
                  OUR TEAM
                </p>
                <h2
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: '500',
                    color: 'rgb(26, 26, 26)'
                  }}
                >
                  Meet the clinical team.
                </h2>
              </div>
              <Link
                href="/doctors"
                className="text-[14px] font-medium flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: 'rgb(201, 169, 97)' }}
              >
                View all team members
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {staff.otherTeam.map((doc, index) => (
                <Link
                  key={index}
                  href={doc.url}
                  className="rounded-[8px] overflow-hidden cursor-pointer group"
                  style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: '4 / 3', background: 'rgb(228, 216, 200)' }}>
                    <img
                      src={doc.image}
                      alt={doc.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = '/images/default-avatar.png';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p
                      className="font-semibold text-[15px] mb-1"
                      style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}
                    >
                      {doc.name}
                    </p>
                    <p className="text-[12.5px] mb-0.5" style={{ color: 'rgb(31, 69, 56)' }}>
                      {doc.specialty}
                    </p>
                    <p className="text-[12px]" style={{ color: 'rgb(107, 107, 107)' }}>
                      {doc.focus}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
