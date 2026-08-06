import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment } from '../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../components/ayurveda/ContentWithSidebar';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import {
  wellnessHero,
  wellnessIntro,
  wellnessPhilosophy,
  wellnessPillars,
  wellnessIntegratedApproach,
  wellnessJourney,
  wellnessOutcomes,
  wellnessTeam,
  wellnessProgramsData,
  wellnessFaqs,
  wellnessLocation,
  wellnessCTA,
  wellnessFourPillarsExplore,
  wellnessRelatedArticles,
  wellnessSchemaFaqs
} from '../data/wellnessClinicJvcData';

const WellnessClinicJVC = () => {
  const currentUrl = "https://vedaracare.ae/wellness-clinic-jvc/";
  const phone = "+971 55 573 6312";
  const addressStreet = "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle";
  const latitude = "25.0683";
  const longitude = "55.2072";
  const isoDate = "2026-08-04T12:00:00Z";

  const schemas = [
    // Schema 1 — MedicalBusiness with JVC-Enhanced areaServed
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/wellness-clinic-jvc/#wellness",
      "name": "Vedara Care Wellness Clinic JVC",
      "alternateName": ["Vedara Wellness JVC", "JVC Integrated Wellness Clinic", "Vedara JVC Wellness Destination", "Wellness Clinic Near Circle Mall JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "JVC's integrated wellness destination in Jumeirah Village Circle, Dubai — walking distance from Circle Mall. DHA-licensed practitioners delivering Ayurveda, physiotherapy, dermatology, and home healthcare for JVC residents, families, and professionals.",
      "telephone": phone,
      "priceRange": "AED 300 - AED 50,000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": addressStreet,
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE",
        "postalCode": "00000"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "21:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "18:00" }
      ],
      "areaServed": [
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Circle Mall JVC Vicinity" },
        { "@type": "Place", "name": "JVC Districts 1-18" },
        { "@type": "Place", "name": "Reem Community JVC" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" },
        { "@type": "Place", "name": "Palm Jumeirah" },
        { "@type": "Place", "name": "Mirdif" }
      ],
      "medicalSpecialty": ["Ayurveda", "Physiotherapy", "Dermatology", "Home Healthcare", "Integrative Medicine", "Preventive Medicine", "Wellness"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Wellness Consultation" },
        { "@type": "MedicalProcedure", "name": "Ayurvedic Panchakarma" },
        { "@type": "MedicalProcedure", "name": "Physiotherapy" },
        { "@type": "MedicalProcedure", "name": "Medical Dermatology" },
        { "@type": "MedicalProcedure", "name": "Aesthetic Dermatology" },
        { "@type": "MedicalProcedure", "name": "Home Healthcare" },
        { "@type": "MedicalProcedure", "name": "JVC Family Wellness Programme" },
        { "@type": "MedicalProcedure", "name": "JVC Corporate Wellness Programme" },
        { "@type": "MedicalProcedure", "name": "Preventive Health Assessment" },
        { "@type": "MedicalProcedure", "name": "Integrated Wellness Assessment" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5", "worstRating": "1" }
    },
    // Schema 2 — Place with JVC Landmark Reference
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Vedara Care JVC Wellness Clinic",
      "description": "Integrated wellness clinic in Jumeirah Village Circle (JVC), Dubai, walking distance from Circle Mall",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": addressStreet,
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "containedInPlace": {
        "@type": "Place",
        "name": "Jumeirah Village Circle",
        "containedInPlace": { "@type": "City", "name": "Dubai" }
      },
      "nearbyAttraction": [
        { "@type": "Place", "name": "Circle Mall", "address": { "@type": "PostalAddress", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE" } },
        { "@type": "Place", "name": "FIVE Jumeirah Village Hotel", "address": { "@type": "PostalAddress", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE" } },
        { "@type": "Place", "name": "JSS Private School", "address": { "@type": "PostalAddress", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE" } }
      ]
    },
    // Schema 3 — MedicalOrganization with Departments
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Vedara Care JVC Multi-Specialty Wellness Clinic",
      "url": currentUrl,
      "location": {
        "@type": "Place",
        "address": { "@type": "PostalAddress", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai" }
      },
      "department": [
        { "@type": "MedicalOrganization", "name": "Ayurveda Department at JVC", "url": "https://vedaracare.ae/ayurveda-clinic-jvc/", "medicalSpecialty": "Ayurveda" },
        { "@type": "MedicalOrganization", "name": "Physiotherapy Department at JVC", "url": "https://vedaracare.ae/physiotherapy-jvc/", "medicalSpecialty": "Physiotherapy" },
        { "@type": "MedicalOrganization", "name": "Dermatology Department at JVC", "url": "https://vedaracare.ae/dermatology-clinic-jvc/", "medicalSpecialty": "Dermatology" },
        { "@type": "MedicalOrganization", "name": "Home Healthcare Department from JVC", "url": "https://vedaracare.ae/home-healthcare-jvc/", "medicalSpecialty": "Home Healthcare" }
      ]
    },
    // Schema 4 — BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Wellness Clinic in JVC (Near Circle Mall)", "item": currentUrl }
      ]
    },
    // Schema 5 — FAQPage (Dynamically mapped from data file)
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": wellnessSchemaFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    // Schema 6 — MedicalScholarlyArticle
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "JVC Integrated Wellness Clinic — Ayurveda, Physiotherapy, Dermatology Guide for JVC Community",
      "image": "https://vedaracare.ae/images/wellness-clinic-jvc-hero.jpg",
      "datePublished": isoDate,
      "dateModified": isoDate,
      "author": { "@type": "Physician", "name": "Dr. Priya Nair", "url": "https://vedaracare.ae/about/" },
      "publisher": { "@type": "Organization", "name": "Vedara Care Polyclinic", "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" } },
      "about": [
        { "@type": "MedicalSpecialty", "name": "Wellness" },
        { "@type": "MedicalSpecialty", "name": "Integrative Medicine" },
        { "@type": "MedicalSpecialty", "name": "Preventive Medicine" }
      ],
      "mainEntityOfPage": currentUrl
    },
    // Schema 7 — Multi-Specialty Team
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Vedara Care JVC Multi-Specialty Wellness Team",
      "member": [
        { "@type": "Physician", "medicalSpecialty": "Ayurveda", "hasCredential": "DHA-Licensed" },
        { "@type": "Physician", "medicalSpecialty": "Physiotherapy", "hasCredential": "DHA-Licensed" },
        { "@type": "Physician", "medicalSpecialty": "Dermatology", "hasCredential": "DHA-Licensed" },
        { "@type": "Physician", "medicalSpecialty": "General Practice", "hasCredential": "DHA-Licensed" }
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Urdu"]
    },
    // Schema 8 — Organization
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
      "sameAs": [
        "https://www.facebook.com/VedaraCare",
        "https://www.instagram.com/vedaracare/",
        "https://www.linkedin.com/company/vedara-care/",
        "https://maps.app.goo.gl/xiJgqsvRqAJ3pC8f6"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": phone,
        "contactType": "Customer Service",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"]
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Wellness Clinic in JVC | Integrated Ayurveda, Physio | Vedara Care</title>
        <meta name="description" content="JVC's integrated wellness destination — walking distance from Circle Mall. DHA-licensed practitioners across Ayurveda, physiotherapy, dermatology, home healthcare. JVC family and corporate wellness. Multi-language." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/wellness-clinic-jvc/" />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        {/* OG & Twitter Tags */}
        <meta property="og:title" content="Wellness Clinic in JVC — JVC's Integrated Wellness Destination | Vedara" />
        <meta property="og:description" content="JVC's integrated wellness destination in Jumeirah Village Circle — walking distance from Circle Mall. DHA-licensed practitioners across Ayurveda, physiotherapy, dermatology, and home healthcare serving JVC families, professionals, and residents. Multi-disciplinary coordination. Family and corporate wellness programmes." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/wellness-clinic-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wellness Clinic in JVC — JVC's Wellness Destination | Vedara" />
        <meta name="twitter:description" content="JVC's DHA-licensed integrated wellness clinic with Ayurveda, physiotherapy, dermatology, home healthcare." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/wellness-clinic-jvc.jpg" />

        {/* Structured JSON-LD schemas */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      {/* 1. Hero Section */}
      <AyurvedaHero {...wellnessHero} />
      
      {/* 2. Quick Answer Section */}
      <AyurvedaIntro {...wellnessIntro} />

      {/* 3. Our Philosophy / Integrated Wellness Section */}
      <SciaticaTreatment
        data={wellnessPhilosophy}
        showBorderLeft={false}
        rightContentStyle="imageOnly"
        bgColor="bg-[#F0EBE3]"
      />

      {/* 4. Four Integrated Wellness Pillars Grid */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#C9A84C' }}>
              {wellnessPillars.label}
            </div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontWeight: 500 }}>
              {wellnessPillars.title}
            </h2>
            <p className="text-base mt-4 mb-8" style={{ color: 'rgb(107,107,107)', lineHeight: '1.7', maxWidth: '800px', margin: '16px auto 0 auto' }}>
              {wellnessPillars.description}
            </p>
          </div>

          {/* Pillars Image - Premium Banner Placement */}
          <div className="max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-sm aspect-[21/9] max-h-[350px] border border-[#E5DFD3]/30">
            <img
              src="/images/jvc-wellness-service-pillars-vedara.webp"
              alt="Ayurveda wellness Panchakarma at JVC clinic Vedara Care"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessPillars.items.map((pillar, index) => (
              <div key={index} className="bg-[#F5F0E8] rounded-xl p-8 border border-[#E5DFD3]/40 flex flex-col justify-between hover:shadow-md transition-all duration-300 min-h-[480px]">
                <div>
                  <div className="text-4xl text-[#C9A55A] font-serif mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                    {pillar.number}
                  </div>
                  <h3 className="text-xl font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1A1A1A', fontWeight: 500 }}>
                    {pillar.number}. {pillar.title}
                  </h3>
                  <p className="text-[#6B6B6B] mb-5 leading-relaxed text-[14px]">
                    {pillar.description}
                  </p>

                  {/* Badges / Key Services */}
                  <div className="mb-6">
                    <p className="text-xs tracking-[0.15em] uppercase text-[#C4A962] mb-3 font-semibold">KEY SERVICES</p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-white border border-[#E5DFD3]/60 px-3 py-1.5 rounded-md text-[13px] text-gray-700 font-sans shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs leading-relaxed mb-4 border-t border-[#E5DFD3]/60 pt-4" style={{ color: '#C8A87F', fontStyle: 'italic' }}>
                    {pillar.footer}
                  </p>
                  <Link href={pillar.linkHref} className="text-[#C8A87F] hover:underline text-sm font-sans inline-flex items-center gap-1.5 transition-colors">
                    {pillar.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How JVC Wellness Services Work Together */}
      <ContentWithSidebar {...wellnessIntegratedApproach} />

      {/* 6. Wellness Journey */}
      <ContentWithSidebar {...wellnessJourney} />

      {/* 7. Real Wellness Outcomes (TreatmentReviews) */}
      <TreatmentReviews {...wellnessOutcomes} />

      {/* 8. The Team Section */}
      <PhysiotherapyTeam {...wellnessTeam} memberButtonText="Meet the Team" />

      {/* 9. Integrated Wellness Programmes (Pricing / Insurance) */}
      <section className="bg-[#FAF8F5] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#C9A84C' }}>
              {wellnessProgramsData.label}
            </span>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: '#1A1A1A' }}>
              {wellnessProgramsData.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start">
            {/* Left Column: Programmes */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                JVC Wellness Programmes
              </h3>
              <div className="space-y-4">
                {wellnessProgramsData.programs.map((program, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-[#E5DFD3]/40 shadow-sm flex flex-col justify-between gap-2">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-[17px] font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                        {program.name}
                      </h4>
                      <span className="text-xs font-sans font-semibold text-[#C9A55A] shrink-0">
                        {program.price}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed font-sans mt-2">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Individual Pricing & Insurance */}
            <div className="space-y-8">
              {/* Individual Service Pricing Links */}
              <div className="bg-white rounded-xl p-8 border border-[#E5DFD3]/40 shadow-sm space-y-4">
                <h3 className="text-lg font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                  {wellnessProgramsData.pricingLinks.title}
                </h3>
                <p className="text-sm text-gray-500 font-sans">
                  {wellnessProgramsData.pricingLinks.intro}
                </p>
                <div className="divide-y divide-[#E5DFD3]/60">
                  {wellnessProgramsData.pricingLinks.links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="flex justify-between items-center py-3 text-sm text-[#1A1A1A] hover:text-[#C9A55A] transition-colors group">
                      <span>{link.text}</span>
                      <span className="text-gray-400 group-hover:text-[#C9A55A] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Insurance Info */}
              <div className="bg-white rounded-xl p-8 border border-[#E5DFD3]/40 shadow-sm space-y-5">
                <h3 className="text-lg font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                  {wellnessProgramsData.insurance.title}
                </h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">
                  {wellnessProgramsData.insurance.description}
                </p>
                <div>
                  <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] text-[#8C8C8C] mb-3">DIRECT BILLING PARTNERS</p>
                  <div className="flex flex-wrap gap-2">
                    {wellnessProgramsData.insurance.insurers.map((insurer, idx) => (
                      <span key={idx} className="bg-[#FAF8F5] border border-[#E5DFD3]/60 px-3 py-1.5 rounded-md text-[12px] text-gray-700 font-sans shadow-sm font-semibold">
                        {insurer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <FAQ {...wellnessFaqs} />

      {/* 11. Location Map Section */}
      <TreatmentLocation {...wellnessLocation} />

      {/* 12. Final Call to Action (FinalCTA) */}
      <FinalCTA {...wellnessCTA} />

      {/* 13. Explore Services (reusing RelatedPages component for the last second section) */}
      <RelatedPages {...wellnessFourPillarsExplore} />

      {/* 14. Related JVC Wellness Content (custom grid-with-images layout for the last section) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgb(184, 145, 90)' }}>
              {wellnessRelatedArticles.label}
            </p>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontWeight: 500 }}>
              {wellnessRelatedArticles.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessRelatedArticles.articles.map((article, index) => (
              <div key={index} className="flex flex-col rounded-xl overflow-hidden border border-[#E5DFD3]/40 hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow bg-[#FAF8F5]">
                  <div className="space-y-3">
                    <span className="text-[11px] font-sans font-bold tracking-[0.15em] text-[#C9A55A] uppercase block">
                      {article.tag}
                    </span>
                    <h3 className="text-[16px] font-serif text-[#1A1A1A] leading-snug" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {article.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-auto">
                    <Link href={article.href} className="text-xs font-semibold uppercase tracking-[0.1em] hover:underline inline-flex items-center gap-1" style={{ color: 'rgb(184, 145, 90)' }}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WellnessClinicJVC;
