import React from 'react';
import Head from 'next/head';
import { arfahOwaisPageData } from '../../data/arfahOwaisData';
import AestheticianPageTemplate from '../../components/aesthetician/AestheticianPageTemplate';

export default function ArfahOwaisAestheticianJVC() {
  const currentDate = new Date().toISOString();
  const canonicalUrl = 'https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/';

  // ================================================================
  // SCHEMA MARKUP — 8 BLOCKS (AI GEO OPTIMISED)
  // ================================================================

  // Schema 1 — Person (Primary Entity Anchor)
  const schema1Person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person",
    "name": "Arfah Owais",
    "givenName": "Arfah",
    "familyName": "Owais",
    "jobTitle": "DHA-Licensed Aesthetician",
    "gender": "Female",
    "description": "Arfah Owais is a DHA-licensed aesthetician at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai. She holds a CIBTAC-UK diploma from the Confederation of International Beauty Therapy and Cosmetology, NCLC certification, and PMU certification, with 8+ years of hands-on clinical experience. Her practice focuses on advanced facial rejuvenation and skin renewal, regenerative treatments delivered under physician supervision, advanced device-based treatments, and corrective skin treatments.",
    "url": canonicalUrl,
    "image": "https://vedaracare.ae/images/arfah-owais-portrait.webp",
    "worksFor": { "@id": "https://vedaracare.ae/#organization" },
    "workLocation": {
      "@type": "MedicalClinic",
      "name": "Vedara Care Polyclinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Binghatti Azure, Al Barsha South Fourth",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      }
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "DHA (Dubai Health Authority) Licensed Aesthetician",
        "credentialCategory": "license",
        "recognizedBy": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority (DHA)" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "CIBTAC Diploma",
        "credentialCategory": "diploma",
        "recognizedBy": { "@type": "Organization", "name": "Confederation of International Beauty Therapy and Cosmetology (CIBTAC), United Kingdom" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "NCLC Certification",
        "credentialCategory": "certification",
        "recognizedBy": { "@type": "Organization", "name": "Nail and Cosmetology Licensing Certification" }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "PMU (Permanent Makeup) Certification",
        "credentialCategory": "certification"
      }
    ],
    "knowsAbout": [
      "Advanced Aesthetic and Skin Rejuvenation",
      "Advanced Facial Rejuvenation and Skin Renewal",
      "HydraFacial Treatment",
      "Oxy-Geneo Facial Treatment",
      "Microdermabrasion and Controlled Skin Resurfacing",
      "Dermaplaning and Skin Resurfacing",
      "Exosome Skin Rejuvenation and Regeneration",
      "Mesotherapy and Skin Revitalization",
      "PRP (Platelet-Rich Plasma) Facial Treatment",
      "Customized Anti-Aging and Skin-Firming Protocols",
      "HIFU (High-Intensity Focused Ultrasound) for Skin Lifting and Tightening",
      "Radiofrequency (RF) Skin Tightening",
      "RF Microneedling for Skin Resurfacing and Rejuvenation",
      "Carbon Laser Peel",
      "Laser Skin Rejuvenation and Laser Toning",
      "Pigmentation and Uneven Skin Tone Management",
      "Melasma Management",
      "Skin Brightening and Complexion Refinement",
      "Acne Scar Treatments",
      "Pore and Skin Texture Refinement",
      "Skin Firmness and Early Signs of Aging Management",
      "Comprehensive Skin Analysis",
      "Personalized Treatment Planning",
      "Customized Facial Protocols",
      "Pre and Post Treatment Skincare Guidance",
      "PMU (Permanent Makeup)",
      "DHA Compliance and Clinical Governance"
    ],
    "knowsLanguage": ["English", "Arabic", "Hindi", "Urdu"],
    "yearsOfExperience": "8+"
  };

  // Schema 2 — ProfilePage
  const schema2ProfilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#profilepage",
    "mainEntity": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
    "name": "Arfah Owais — DHA Licensed Aesthetician at Vedara Care JVC Dubai",
    "url": canonicalUrl,
    "description": "Profile page for Arfah Owais, DHA-licensed aesthetician at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai. Credentials, expertise areas, treatments practised, consultation approach, patient testimonials, pricing, and FAQs.",
    "inLanguage": "en-AE",
    "isPartOf": { "@id": "https://vedaracare.ae/#website" },
    "about": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
    "audience": { "@type": "Audience", "audienceType": "Prospective patients seeking aesthetic and skin treatments in JVC Dubai" },
    "dateModified": currentDate
  };

  // Schema 3 — MedicalBusiness (Aesthetic Services Vertical)
  const schema3MedicalBusiness = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#aesthetic-business",
    "name": "Vedara Care Aesthetic Services — Arfah Owais Practice",
    "alternateName": ["Vedara Care Beauty Therapy JVC", "Vedara Care Aesthetician JVC"],
    "url": canonicalUrl,
    "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
    "description": "Aesthetic and skin treatment services at Vedara Care Polyclinic delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience. Advanced facial rejuvenation, regenerative treatments (under physician supervision), advanced device-based treatments (HIFU, RF microneedling, carbon laser peel, laser rejuvenation), corrective skin treatments (pigmentation and melasma management, acne scar treatment, skin brightening, pore and texture refinement, early signs of aging).",
    "telephone": "+971555736312",
    "priceRange": "AED 300 - AED 15,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Binghatti Azure, Al Barsha South Fourth",
      "addressLocality": "Jumeirah Village Circle",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "hasMap": "https://maps.google.com/?q=Vedara+Care+Polyclinic+JVC",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "09:00", "closes": "22:00" }
    ],
    "areaServed": [
      { "@type": "Place", "name": "Jumeirah Village Circle" },
      { "@type": "Place", "name": "Circle Mall JVC Vicinity" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "Place", "name": "Jumeirah Village Triangle" },
      { "@type": "Place", "name": "Al Barsha" },
      { "@type": "Place", "name": "Al Barsha South" },
      { "@type": "Place", "name": "Dubai Sports City" },
      { "@type": "Place", "name": "Motor City" },
      { "@type": "Place", "name": "Arjan" },
      { "@type": "Place", "name": "Dubai Hills Estate" },
      { "@type": "Place", "name": "Dubai Marina" },
      { "@type": "Place", "name": "Downtown Dubai" },
      { "@type": "Place", "name": "Business Bay" },
      { "@type": "Place", "name": "Palm Jumeirah" },
      { "@type": "Place", "name": "Jumeirah Lake Towers" },
      { "@type": "Place", "name": "Emirates Hills" },
      { "@type": "Place", "name": "Arabian Ranches" },
      { "@type": "Place", "name": "Mirdif" }
    ],
    "medicalSpecialty": ["Beauty Therapy", "Aesthetic Medicine", "Skin Care", "Cosmetology"],
    "isAcceptingNewPatients": true,
    "practitioner": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
    "availableService": [
      { "@type": "Service", "name": "Comprehensive Skin Analysis and Personalized Treatment Planning Consultation" },
      { "@type": "Service", "name": "HydraFacial" },
      { "@type": "Service", "name": "Oxy-Geneo Facial" },
      { "@type": "Service", "name": "Microdermabrasion" },
      { "@type": "Service", "name": "Dermaplaning" },
      { "@type": "Service", "name": "Advanced Facial Rejuvenation" },
      { "@type": "Service", "name": "Customized Anti-Aging and Skin-Firming Protocol" },
      { "@type": "Service", "name": "Exosome Skin Rejuvenation (Physician-Supervised)" },
      { "@type": "Service", "name": "PRP Facial Treatment (Physician-Supervised)" },
      { "@type": "Service", "name": "Mesotherapy (Physician-Supervised)" },
      { "@type": "Service", "name": "HIFU Skin Lifting and Tightening" },
      { "@type": "Service", "name": "RF Skin Tightening" },
      { "@type": "Service", "name": "RF Microneedling" },
      { "@type": "Service", "name": "Carbon Laser Peel" },
      { "@type": "Service", "name": "Laser Skin Rejuvenation and Toning" },
      { "@type": "Service", "name": "Pigmentation and Melasma Management" },
      { "@type": "Service", "name": "Acne Scar Treatment" },
      { "@type": "Service", "name": "Skin Brightening and Complexion Refinement" },
      { "@type": "Service", "name": "Pore and Skin Texture Refinement" },
      { "@type": "Service", "name": "Early Signs of Aging Prevention Programme" }
    ],
    "memberOf": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "850", "bestRating": "5", "worstRating": "1" },
    "lastReviewed": currentDate
  };

  // Schema 4 — Service Entities (Treatment Catalogue)
  const schema4Services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Comprehensive Skin Analysis and Personalized Treatment Planning Consultation",
      "serviceType": "Aesthetic Consultation and Assessment",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "areaServed": { "@type": "City", "name": "Dubai" },
      "description": "45-60 minute comprehensive aesthetic consultation with Arfah Owais at Vedara Care JVC including skin type and condition assessment, sensitivity evaluation, textural analysis, pigmentation patterns assessment, elasticity and hydration evaluation, skin history review, current concerns discussion, personalised treatment plan development, written plan provision, and honest pricing framing."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HydraFacial Multi-Step Medical-Grade Facial",
      "serviceType": "Advanced Facial Treatment",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "Multi-step medical-grade facial including deep cleansing, exfoliation, extraction of pore impurities, and infusion of hydrating and antioxidant serums. Suitable for nearly all skin types. Visible results after single session; cumulative benefit with programme. 45-60 minute duration. No downtime."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HIFU High-Intensity Focused Ultrasound Skin Lifting and Tightening",
      "serviceType": "Advanced Device-Based Aesthetic Treatment",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "High-intensity focused ultrasound treatment reaching deep skin structure to stimulate collagen and provide non-surgical lifting effect on jawline, mid-face, brow, and neck areas. Results build gradually over 3-6 months as new collagen forms. Popular with 40s-50s demographic seeking non-surgical lifting."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Carbon Laser Peel (Hollywood Peel)",
      "serviceType": "Advanced Device-Based Aesthetic Treatment",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "Carbon paste applied to skin then laser-activated to exfoliate surface, tighten pores, brighten skin, and reduce oiliness. Same-day glow typical. Cumulative improvement with programme of 3-6 sessions. No downtime. Popular pre-event treatment."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "RF Microneedling for Skin Resurfacing and Rejuvenation",
      "serviceType": "Advanced Device-Based Aesthetic Treatment",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "Combined radiofrequency energy with controlled microneedling for skin resurfacing, remodelling, and acne scar treatment. Versatile modern aesthetic technology. Programme typically 3-4 sessions. Popular for substantial improvement without laser downtime."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pigmentation and Melasma Management Programme",
      "serviceType": "Corrective Skin Treatment Programme",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "Multi-modal programme approach for pigmentation and melasma including comprehensive skin analysis (Wood's lamp assessment where indicated), sequenced treatment protocol (typically laser plus topical plus home-care), and realistic timeline framing over months. Melasma cases requiring medical management coordinated with on-site dermatologist."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Acne Scar Treatment Programme",
      "serviceType": "Corrective Skin Treatment Programme",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "Programme approach combining RF microneedling, laser modalities, and targeted topical protocols for atrophic (icepick, boxcar, rolling) acne scarring. Realistic framing of substantial improvement over sustained programme. Coordination with dermatologist for active acne requiring medical management before scar work."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Exosome Skin Rejuvenation (Physician-Supervised)",
      "serviceType": "Advanced Regenerative Aesthetic Treatment",
      "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "description": "Cellular-signalling molecules (exosomes) for skin regeneration and repair. Physician-supervised delivery per DHA framework — Arfah handles skin analysis, protocol planning, and aftercare while the clinic dermatologist handles the injection component."
    }
  ];

  // Schema 5 — BreadcrumbList
  const schema5Breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Our Team", "item": "https://vedaracare.ae/team/" },
      { "@type": "ListItem", "position": 3, "name": "Arfah Owais — Aesthetician at JVC", "item": canonicalUrl }
    ]
  };

  // Schema 6 — FAQPage
  const schema6FAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (arfahOwaisPageData.faqs?.faqs || []).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // Schema 7 — WebPage
  const schema7WebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#webpage",
    "name": "Arfah Owais — DHA Licensed Aesthetician at Vedara Care JVC Dubai",
    "url": canonicalUrl,
    "about": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
    "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
    "audience": { "@type": "Audience", "audienceType": "Prospective patients" },
    "specialty": [
      { "@type": "MedicalSpecialty", "name": "Beauty Therapy" },
      { "@type": "MedicalSpecialty", "name": "Aesthetic Medicine" },
      { "@type": "MedicalSpecialty", "name": "Cosmetology" }
    ],
    "inLanguage": "en-AE",
    "dateModified": currentDate,
    "primaryImageOfPage": { "@type": "ImageObject", "url": "https://vedaracare.ae/team/arfah-owais-portrait.jpg" }
  };

  // Schema 8 — Organization
  const schema8Organization = {
    "@context": "https://schema.org",
    "@id": "https://vedaracare.ae/#organization",
    "@type": ["Organization", "MedicalOrganization"],
    "name": "Vedara Care Polyclinic",
    "url": "https://vedaracare.ae/",
    "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
    "sameAs": [
      "https://www.facebook.com/[handle]",
      "https://www.instagram.com/[handle]",
      "https://www.linkedin.com/company/[handle]",
      "https://www.google.com/maps/place/[place_id]"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-55-573-6312",
      "contactType": "Customer Service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
    },
    "employee": [
      { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" }
    ],
    "medicalSpecialty": [
      "Physiotherapy",
      "Physiotherapy and Rehabilitation",
      "Ayurvedic Medicine",
      "Beauty Therapy",
      "Dermatology",
      "General Practice",
      "Nursing"
    ]
  };

  const allSchemas = [
    schema1Person,
    schema2ProfilePage,
    schema3MedicalBusiness,
    ...schema4Services,
    schema5Breadcrumb,
    schema6FAQ,
    schema7WebPage,
    schema8Organization
  ];

  return (
    <>
      <Head>
        {/* ===== META TITLE & DESCRIPTION ===== */}
        <title>Arfah Owais — DHA Licensed Aesthetician JVC | CIBTAC-UK | Vedara Care Dubai</title>
        <meta
          name="description"
          content="Meet Arfah Owais, DHA-licensed aesthetician at Vedara Care JVC Dubai. CIBTAC-UK diploma, NCLC & PMU certified, 8+ years experience. HydraFacial, HIFU, Carbon Laser Peel, pigmentation and acne scar treatments. Female practitioner. Multi-language."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        {/* ===== OPEN GRAPH ===== */}
        <meta property="og:title" content="Arfah Owais — DHA Licensed Aesthetician at Vedara Care JVC Dubai | CIBTAC-UK Diploma" />
        <meta property="og:description" content="Meet Arfah Owais, DHA-licensed aesthetician at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall. CIBTAC-UK diploma, NCLC and PMU certified, 8+ years of clinical experience. Advanced facial rejuvenation (HydraFacial, Oxy-Geneo, dermaplaning), regenerative treatments under physician supervision (exosome, PRP, mesotherapy), advanced device-based treatments (HIFU, RF microneedling, carbon laser peel, laser rejuvenation), corrective skin treatments (pigmentation and melasma management, acne scar treatment, skin brightening). Female practitioner. Multi-language (Arabic, English, Hindi, Urdu). Comprehensive skin analysis and personalised treatment planning." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/arfah-owais-aesthetician-jvc.jpg" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_AE" />
        <meta property="profile:first_name" content="Arfah" />
        <meta property="profile:last_name" content="Owais" />

        {/* ===== TWITTER CARD ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arfah Owais — DHA Licensed Aesthetician JVC | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed aesthetician at Vedara Care JVC. CIBTAC-UK diploma. 8+ years experience. HydraFacial, HIFU, pigmentation, acne scars." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/arfah-owais-aesthetician-jvc.jpg" />

        {/* ===== CANONICAL & HREFLANG ===== */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-AE" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/team/arfah-owais-aesthetician-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        {/* ===== 8 SCHEMA BLOCKS ===== */}
        {allSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AestheticianPageTemplate data={arfahOwaisPageData} />
    </>
  );
}
