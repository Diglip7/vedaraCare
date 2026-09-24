import React from 'react';
import Head from 'next/head';
import FAQ from '../../components/home/FAQ';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import {
  MesotherapyAtAGlance,
  MesotherapyWhyChoose,
  MesotherapyEvidence,
  MesotherapyUnderstanding,
  MesotherapyDesignedFor,
  MesotherapyProtocol,
  MesotherapyCadence,
  MesotherapyJourneys,
  MesotherapyPractitioner,
  MesotherapyInvestment,
  MesotherapyRelated,
  MesotherapyOffPage
} from '../../components/treatments/MesotherapyComponents';
import {
  mesotherapySEO,
  mesotherapyHero,
  mesotherapyIntro,
  mesotherapyAtAGlance,
  mesotherapyWhyChoose,
  mesotherapyEvidence,
  mesotherapyUnderstanding,
  mesotherapyDesignedFor,
  mesotherapyProtocol,
  mesotherapyCadence,
  mesotherapyJourneys,
  mesotherapyPractitioner,
  mesotherapyInvestment,
  schema1,
  schema2,
  schema3,
  schema4,
  schema5,
  schema6,
  schema7,
  schema8,
  mesotherapyFAQs
} from '../../data/mesotherapyData';

// Placeholder generic components for the remaining sections
import { TreatmentClusterGrid, ClinicLocation } from '../../components/treatments/SharedTreatmentComponents';
import FinalCTA from '../../components/ayurveda/FinalCTA';

const MesotherapySkinRevitalizationJVC = () => {
  return (
    <>
      <Head>
        <title>{mesotherapySEO.title}</title>
        <meta name="description" content={mesotherapySEO.description} />
        <link rel="canonical" href={mesotherapySEO.canonical} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <meta property="og:title" content={mesotherapySEO.ogTitle} />
        <meta property="og:description" content={mesotherapySEO.ogDescription} />
        <meta property="og:type" content={mesotherapySEO.ogType} />
        <meta property="og:image" content={mesotherapySEO.ogImage} />
        <meta property="og:url" content={mesotherapySEO.ogUrl} />
        <meta property="og:site_name" content="Vedara Care Polyclinic" />

        <meta name="twitter:card" content={mesotherapySEO.twitterCard || "summary_large_image"} />
        <meta name="twitter:title" content={mesotherapySEO.twitterTitle} />
        <meta name="twitter:description" content={mesotherapySEO.twitterDescription} />
        <meta name="twitter:image" content={mesotherapySEO.twitterImage} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema6) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema7) }} />
        {schema8.map((s, idx) => (
          <script key={`schema8-${idx}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
      </Head>

      {/* Section 1 - Hero */}
      <AyurvedaHero {...mesotherapyHero} />

      {/* Section 2 - Intro */}
      <AyurvedaIntro
        bgColor="[#F0EBE3]"
        {...mesotherapyIntro}
      />

      {/* Section 3 - At a Glance */}
      <MesotherapyAtAGlance data={mesotherapyAtAGlance} />

      {/* Section 4 - Why Choose */}
      <MesotherapyWhyChoose data={mesotherapyWhyChoose} />

      {/* Section 5 - Evidence Base */}
      <MesotherapyEvidence data={mesotherapyEvidence} />

      {/* Section 6 - Understanding Mesotherapy */}
      <MesotherapyUnderstanding data={mesotherapyUnderstanding} />

      {/* Section 7 - Designed For */}
      <MesotherapyDesignedFor data={mesotherapyDesignedFor} />

      {/* Section 8 - Protocol */}
      <MesotherapyProtocol data={mesotherapyProtocol} />

      {/* Section 9 - Cadence */}
      <MesotherapyCadence data={mesotherapyCadence} />

      {/* Section 10 - Journeys */}
      <MesotherapyJourneys data={mesotherapyJourneys} />

      {/* Section 11 - Practitioner Team */}
      <MesotherapyPractitioner data={mesotherapyPractitioner} />

      {/* Section 12 - Investment */}
      <MesotherapyInvestment data={mesotherapyInvestment} />

      <FAQ faqs={mesotherapyFAQs} />

      <ClinicLocation />

      <FinalCTA
        bgColor="bg-[#F0EBE3]"
        title="Book Your Mesotherapy Consultation with Medical Director at Vedara Care JVC"
        description="Everything on this page — the physician-primary framework, formulation transparency, integrated aesthetic team support, transparent pricing, and case narratives — comes together at consultation."
        button1Text="Book Consultation at JVC"
        button1TextHref="/book"
        button2Text="Whatsapp Us"
        button2TextHref="https://wa.me/971555736312"
        footer="✓
DHA-Licensed Consultant Dermatologist
✓
Formulation transparency
✓
Female aesthetician support
✓
Arabic · English · Hindi · Urdu
✓
JVC location — near Circle Mall
✓
Consultation-first framework"
      />

      <MesotherapyRelated />

      <MesotherapyOffPage />

    </>
  );
};

export default MesotherapySkinRevitalizationJVC;
