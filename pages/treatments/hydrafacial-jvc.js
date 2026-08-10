import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import HydraFacialBenefits from '../../components/ayurveda/HydraFacialBenefits';
// import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
// import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
// import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
// import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  hydrafacialHero,
  hydrafacialIntro,
  hydrafacialHowItWorks,
  hydrafacialBenefits,
  hydrafacialSkinTypes,
  hydrafacialForConcerns,
  hydrafacialRealisticExpectations,
  hydrafacialPatientVoices,
  // hydrafacialTeam,
  hydrafacialPricing,
  hydrafacialFAQ,
  hydrafacialLocation,
  // hydrafacialCTA,
  hydrafacialRelatedPages
} from '../../data/hydrafacial';

const HydraFacialTreatment = () => {
  const currentUrl = "https://vedaracare.ae/treatments/hydrafacial-jvc/";
  const publishedDate = "2026-08-10T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#hydrafacial`,
      "name": "Vedara Care HydraFacial Treatment JVC",
      "alternateName": ["Vedara HydraFacial JVC", "Vedara HydraFacial Dubai", "Vedara Hydradermabrasion JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Specialist HydraFacial treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. DHA-licensed consultant dermatologists delivering skin-type-adjusted HydraFacial protocols across all Fitzpatrick skin types, with particular expertise for Fitzpatrick IV-VI.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 500 - AED 3000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 23, District 12",
        "addressLocality": "Jumeirah Village Circle",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
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
      "medicalSpecialty": ["Dermatology", "Aesthetic Dermatology", "HydraFacial Treatment", "Cosmetic Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "HydraFacial" },
        { "@type": "MedicalProcedure", "name": "HydraFacial Classic" },
        { "@type": "MedicalProcedure", "name": "HydraFacial Deluxe" },
        { "@type": "MedicalProcedure", "name": "HydraFacial for Oily Skin" },
        { "@type": "MedicalProcedure", "name": "HydraFacial for Sensitive Skin" },
        { "@type": "MedicalProcedure", "name": "HydraFacial for Darker Skin Types" },
        { "@type": "MedicalProcedure", "name": "Pre-Event HydraFacial" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "800",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalProcedure",
          "name": "HydraFacial",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "Multi-step device-assisted facial combining cleansing, gentle exfoliation, controlled low-pressure suction extraction of pore debris, and targeted hydrating serum application. Protocol adjusted per patient skin type and concerns."
        },
        {
          "@type": "MedicalProcedure",
          "name": "HydraFacial Skin Assessment",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "Clinician review of skin type, concerns, sensitivities, recent procedures, and medications to determine whether HydraFacial is appropriate and how protocol should be modified."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HydraFacial Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#hydrafacial` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "HydraFacial Skin Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HydraFacial Services",
        "itemListElement": hydrafacialPricing.services.map((service, index) => ({
          "@type": "Offer",
          "name": service.name,
          "priceCurrency": "AED"
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "HydraFacial in JVC Dubai", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": hydrafacialFAQ.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "HydraFacial at JVC Dubai — Skin-Type-Adjusted Protocols Guide",
      "image": "https://vedaracare.ae/images/skin-consultation-vedara-jvc.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Consultant Dermatologist"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalProcedure", "name": "HydraFacial" },
        { "@type": "MedicalProcedure", "name": "Hydradermabrasion" }
      ],
      "mainEntityOfPage": currentUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic"
    },
    {
      "@context": "https://schema.org",
      "@type": "ComparisonTable",
      "name": "HydraFacial vs Traditional Facial",
      "about": "Feature comparison between HydraFacial device-assisted facial and traditional manual facial",
      "hasPart": [
        {
          "@type": "Table",
          "name": "Treatment Approach Comparison",
          "description": "Structured comparison of HydraFacial versus Traditional Facial across cleansing, exfoliation, extraction, hydration, customisation, and assessment dimensions."
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>HydraFacial in JVC, Dubai | Skin-Type-Adjusted Protocols | Vedara Care</title>
        <meta name="description" content="Specialist HydraFacial treatment at our JVC clinic, Dubai. DHA-licensed consultant dermatologists. Skin-type-adjusted protocols across all Fitzpatrick skin types. Structured cleansing, exfoliation, extraction, and hydration. Walking distance from Circle Mall." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/hydrafacial-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="HydraFacial in JVC, Dubai — Skin-Type-Adjusted Protocols | Vedara Care" />
        <meta property="og:description" content="Specialist HydraFacial treatment at our Jumeirah Village Circle clinic, Dubai. DHA-licensed consultant dermatologists delivering structured multi-step HydraFacial protocols: cleansing, gentle exfoliation, controlled extraction, and targeted hydrating serums, all adjusted to patient skin type and concerns. Particular expertise for Fitzpatrick IV–VI skin types where conservative protocol adjustment prevents irritation and post-inflammatory hyperpigmentation." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/hydrafacial-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HydraFacial in JVC, Dubai — Skin-Type-Adjusted | Vedara Care" />
        <meta name="twitter:description" content="DHA-licensed consultant dermatologists delivering skin-type-adjusted HydraFacial protocols across all Fitzpatrick skin types." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/hydrafacial-jvc-dubai.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <AyurvedaHero
        {...hydrafacialHero}
      />

      <AyurvedaIntro
        {...hydrafacialIntro}
      />

      <SciaticaTreatment
        data={hydrafacialHowItWorks}
        showBorderLeft={false}
        rightContentStyle="peelDepthAndFitzpatrick"
        bgColor="bg-[#FAF7F2]"
      />

      {/* <PhysiotherapySpecializations
        bgColor="bg-[#FAF7F2]"
        cardBg="bg-white"
        cardBorder="border-l-4 border-[#C9A55A]"
        label="HOW IT WORKS"
        title="How Does HydraFacial Work?"
        description="While the exact sequence can vary by provider and by what a patient's skin needs, a typical HydraFacial session follows a broadly similar structure."
        types={[
          { number: "01", title: "Skin assessment", description: "Before anything touches your face, a clinician looks at your skin type, current concerns, and any sensitivities, and decides whether HydraFacial is appropriate that day or whether the protocol needs adjusting." },
          { number: "02", title: "Cleansing", description: "The skin is cleaned to remove makeup, sunscreen, and surface oil, creating a clean base for the following steps." },
          { number: "03", title: "Exfoliation", description: "A gentle exfoliating step helps lift dead skin cells from the surface, which is part of what gives HydraFacial its reputation for leaving skin feeling smoother almost immediately." },
          { number: "04", title: "Extraction", description: "Using a controlled, low-pressure suction technique, the treatment draws out debris sitting in pores — this is the step most associated with visibly clearer-looking pores after treatment." },
          { number: "05", title: "Hydration", description: "Serums are applied to replenish moisture, often chosen based on the patient's specific skin concerns, whether that's dehydration, dullness, or general maintenance." },
          { number: "06", title: "Customised additions", description: "Depending on the clinic and the patient's needs, additional steps or targeted serums may be layered in." },
          { number: "07", title: "Aftercare guidance", description: "Patients are typically told how to care for their skin over the following day or two, including what to avoid." },
        ]}
        footer="It's a fairly logical, low-drama process — which is part of the appeal for people who want visible results without an elaborate recovery plan."
      /> */}

      <HydraFacialBenefits
        {...hydrafacialBenefits}
      />
      <SciaticaTypes
        {...hydrafacialSkinTypes}
      />
      <ContentWithSidebar
        bgColor={hydrafacialForConcerns.bgColor}
        label={hydrafacialForConcerns.label}
        title={hydrafacialForConcerns.title}
        description={hydrafacialForConcerns.description}
        contentSections={hydrafacialForConcerns.contentSections}
        sidebar={hydrafacialForConcerns.sidebar}
      />

      <ContentWithSidebar
        bgColor={hydrafacialRealisticExpectations.bgColor}
        cardBg={hydrafacialRealisticExpectations.cardBg}
        label={hydrafacialRealisticExpectations.label}
        title={hydrafacialRealisticExpectations.title}
        intro={hydrafacialRealisticExpectations.intro}
        phases={hydrafacialRealisticExpectations.phases}
        footerNote={hydrafacialRealisticExpectations.footerNote}
        bottomContent={hydrafacialRealisticExpectations.bottomContent}
      />

      {/* <TreatmentReviews
        bgColor={hydrafacialPatientVoices.bgColor}
        cardBgColor={hydrafacialPatientVoices.cardBg}
        statsBgColor="transparent"
        label={hydrafacialPatientVoices.label}
        title={hydrafacialPatientVoices.title}
        items={hydrafacialPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={hydrafacialPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      /> */}

      {/* <PhysiotherapyTeam
        bgColor={hydrafacialTeam.bgColor}
        label={hydrafacialTeam.label}
        title={hydrafacialTeam.title}
        description={hydrafacialTeam.description}
        team={hydrafacialTeam.team}
        gridColumns={hydrafacialTeam.gridColumns}
      /> */}



      <FAQ
        bgColor={hydrafacialFAQ.bgColor}
        label={hydrafacialFAQ.label}
        title={hydrafacialFAQ.title}
        description={hydrafacialFAQ.description}
        faqs={hydrafacialFAQ.faqs}
        buttonText={hydrafacialFAQ.buttonText}
        buttonHref={hydrafacialFAQ.buttonHref}
        sidebarLinks={hydrafacialFAQ.sidebarLinks}
      />

      <TreatmentLocation
        bgColor={hydrafacialLocation.bgColor}
        label={hydrafacialLocation.label}
        title={hydrafacialLocation.title}
        address={hydrafacialLocation.address}
        phone={hydrafacialLocation.phone}
        email={hydrafacialLocation.email}
        whatsapp={hydrafacialLocation.whatsapp}
        whatsappMessage={hydrafacialLocation.whatsappMessage}
        hours={hydrafacialLocation.hours}
        landmarks={hydrafacialLocation.landmarks}
        description={hydrafacialLocation.description}
        buttonText={hydrafacialLocation.buttonText}
      />

      {/* <FinalCTA
        {...hydrafacialCTA}
      /> */}

      <RelatedPages
        {...hydrafacialRelatedPages}
      />
    </>
  );
};

export default HydraFacialTreatment;
