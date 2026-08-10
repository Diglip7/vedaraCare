import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../components/ayurveda/ContentWithSidebar';
import { SciaticaTreatment, SciaticaTypes } from '../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import {
  carbonLaserPeelHero,
  carbonLaserPeelIntro,
  carbonLaserPeelHowItWorks,
  carbonLaserPeelFormulations,
  carbonLaserPeelSelection,
  carbonLaserPeelSkinTypes,
  carbonLaserPeelRealisticExpectations,
  carbonLaserPeelAftercareAndSafety,
  carbonLaserPeelPatientVoices,
  carbonLaserPeelTeam,
  carbonLaserPeelProviderChoice,
  carbonLaserPeelPricing,
  carbonLaserPeelFAQ,
  carbonLaserPeelLocation,
  carbonLaserPeelCTA,
  carbonLaserPeelRelatedPages
} from '../data/carbonlaserpeel';

const CarbonLaserPeelPage = () => {
  const currentUrl = "https://vedaracare.ae/carbon-laser-peel-jvc";
  const publishedDate = "2026-08-10T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://vedaracare.ae/carbon-laser-peel-jvc",
      "url": "https://vedaracare.ae/carbon-laser-peel-jvc",
      "name": "Carbon Laser Peel in JVC: Treatment, Benefits, Results & Cost",
      "description": "Carbon Laser Peel in JVC at Vedara Care Polyclinic — a low-downtime treatment for oily skin, congestion and dull texture. Book a skin assessment.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://vedaracare.ae",
        "name": "Update Vedara Care"
      },
      "mainEntityOfPage": "https://vedaracare.ae/carbon-laser-peel-jvc",
      "about": {
        "@type": "MedicalProcedure",
        "name": "Carbon Laser Peel",
        "procedureType": "https://schema.org/NoninvasiveProcedure",
        "bodyLocation": "Face"
      },
      "provider": {
        "@id": "https://vedaracare.ae/carbon-laser-peel-jvc#clinic"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Carbon Laser Peel",
      "serviceType": "Cosmetic laser skin treatment",
      "areaServed": {
        "@type": "Place",
        "name": "Jumeirah Village Circle (JVC), Dubai"
      },
      "provider": {
        "@id": "https://vedaracare.ae/carbon-laser-peel-jvc#clinic"
      },
      "url": "https://vedaracare.ae/carbon-laser-peel-jvc"
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
          "name": "Skin Treatments",
          "item": "https://vedaracare.ae/skin-clinic-jvc"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Carbon Laser Peel in JVC",
          "item": "https://vedaracare.ae/carbon-laser-peel-jvc"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": carbonLaserPeelFAQ.faqs.map((faq) => ({
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
      "@type": "MedicalClinic",
      "@id": "https://vedaracare.ae/carbon-laser-peel-jvc#clinic",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/carbon-laser-peel-jvc",
      "medicalSpecialty": "Dermatology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
        "addressLocality": "Jumeirah Village Circle (JVC)",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": [
        "Jumeirah Village Circle",
        "Al Barsha South",
        "Jumeirah Village Triangle",
        "Dubai Sports City",
        "Motor City"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Carbon Laser Peel in JVC | Treatment & Results</title>
        <meta name="description" content="Carbon Laser Peel in JVC at Vedara Care Polyclinic — a low-downtime treatment for oily skin, congestion and dull texture. Book a skin assessment." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Carbon Laser Peel in JVC | Treatment & Results" />
        <meta property="og:description" content="Carbon Laser Peel in JVC at Vedara Care Polyclinic — a low-downtime treatment for oily skin, congestion and dull texture. Book a skin assessment." />
        <meta property="og:image" content="https://vedaracare.ae/images/carbon-laser-peel-consultation-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carbon Laser Peel in JVC | Treatment & Results" />
        <meta name="twitter:description" content="Carbon Laser Peel in JVC at Vedara Care Polyclinic — a low-downtime treatment for oily skin, congestion and dull texture." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/carbon-laser-peel-consultation-jvc.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <AyurvedaHero
        {...carbonLaserPeelHero}
      />

      <AyurvedaIntro
        {...carbonLaserPeelIntro}
      />

      <SciaticaTreatment
        data={carbonLaserPeelHowItWorks}
        showBorderLeft={false}
        rightContentStyle="peelDepthAndFitzpatrick"
        bgColor="bg-[#F0EBE3]"
      />

      <SciaticaTypes
        {...carbonLaserPeelFormulations}
      />

      <ContentWithSidebar
        bgColor={carbonLaserPeelSelection.bgColor}
        label={carbonLaserPeelSelection.label}
        title={carbonLaserPeelSelection.title}
        description={carbonLaserPeelSelection.description}
        contentSections={carbonLaserPeelSelection.contentSections}
        sidebar={carbonLaserPeelSelection.sidebar}
      />

      <SciaticaTypes
        bgColor={carbonLaserPeelSkinTypes.bgColor}
        cardBg={carbonLaserPeelSkinTypes.cardBg}
        label={carbonLaserPeelSkinTypes.label}
        title={carbonLaserPeelSkinTypes.title}
        description={carbonLaserPeelSkinTypes.description}
        types={carbonLaserPeelSkinTypes.types}
        footer={carbonLaserPeelSkinTypes.footer}
        gridCols={carbonLaserPeelSkinTypes.gridCols}
        borderPosition={carbonLaserPeelSkinTypes.borderPosition}
      />

      <ContentWithSidebar
        bgColor={carbonLaserPeelRealisticExpectations.bgColor}
        cardBg={carbonLaserPeelRealisticExpectations.cardBg}
        label={carbonLaserPeelRealisticExpectations.label}
        title={carbonLaserPeelRealisticExpectations.title}
        intro={carbonLaserPeelRealisticExpectations.intro}
        phases={carbonLaserPeelRealisticExpectations.phases}
        footerNote={carbonLaserPeelRealisticExpectations.footerNote}
        bottomContent={carbonLaserPeelRealisticExpectations.bottomContent}
      />

      <ContentWithSidebar
        bgColor={carbonLaserPeelAftercareAndSafety.bgColor}
        label={carbonLaserPeelAftercareAndSafety.label}
        title={carbonLaserPeelAftercareAndSafety.title}
        contentSections={carbonLaserPeelAftercareAndSafety.contentSections}
        sidebar={carbonLaserPeelAftercareAndSafety.sidebar}
      />

      <TreatmentReviews
        {...carbonLaserPeelPatientVoices}
        bgColor={carbonLaserPeelPatientVoices.bgColor}
      />

      <PhysiotherapyTeam
        bgColor={carbonLaserPeelTeam.bgColor}
        label={carbonLaserPeelTeam.label}
        title={carbonLaserPeelTeam.title}
        description={carbonLaserPeelTeam.description}
        members={carbonLaserPeelTeam.team}
        gridColumns="lg:grid-cols-3 max-w-lg mx-auto"
        memberButtonText="Book skin assessment"
      />

      <ContentWithSidebar
        bgColor={carbonLaserPeelProviderChoice.bgColor}
        label={carbonLaserPeelProviderChoice.label}
        title={carbonLaserPeelProviderChoice.title}
        contentSections={carbonLaserPeelProviderChoice.contentSections}
        sidebar={carbonLaserPeelProviderChoice.sidebar}
      />

      <ContentWithSidebar
        bgColor={carbonLaserPeelPricing.bgColor}
        label={carbonLaserPeelPricing.label}
        title={carbonLaserPeelPricing.title}
        services={carbonLaserPeelPricing.services}
        insuranceText={carbonLaserPeelPricing.insuranceText}
        insurances={carbonLaserPeelPricing.insurances}
      />

      <FAQ
        bgColor={carbonLaserPeelFAQ.bgColor}
        label={carbonLaserPeelFAQ.label}
        title={carbonLaserPeelFAQ.title}
        description={carbonLaserPeelFAQ.description}
        faqs={carbonLaserPeelFAQ.faqs}
        buttonText={carbonLaserPeelFAQ.buttonText}
        buttonHref={carbonLaserPeelFAQ.buttonHref}
        sidebarLinks={carbonLaserPeelFAQ.sidebarLinks}
      />

      <TreatmentLocation
        bgColor={carbonLaserPeelLocation.bgColor}
        label={carbonLaserPeelLocation.label}
        title={carbonLaserPeelLocation.title}
        address={carbonLaserPeelLocation.address}
        phone={carbonLaserPeelLocation.phone}
        email={carbonLaserPeelLocation.email}
        whatsapp={carbonLaserPeelLocation.whatsapp}
        whatsappMessage={carbonLaserPeelLocation.whatsappMessage}
        hours={carbonLaserPeelLocation.hours}
        landmarks={carbonLaserPeelLocation.landmarks}
        description={carbonLaserPeelLocation.description}
        buttonText={carbonLaserPeelLocation.buttonText}
      />

      {/* Visible Medical Disclaimer on UI */}
      <section className="bg-white py-12 px-6 border-t border-[#E5DFD3]/40">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs tracking-[0.2em] uppercase text-[#A0A0A0] font-sans font-bold">
            MEDICAL DISCLAIMER
          </p>
          <p className="text-xs text-gray-500 font-sans leading-relaxed max-w-2xl mx-auto">
            This page provides general information about Carbon Laser Peel and does not constitute medical advice. Suitability for this treatment varies from person to person, and results differ between individuals — nothing on this page should be read as a guarantee of outcome. A professional skin assessment is recommended before undergoing treatment. Cosmetic treatments such as Carbon Laser Peel do not replace appropriate medical dermatology care, and patients with persistent, painful, or concerning skin problems should seek a full professional evaluation rather than relying on a cosmetic treatment alone.
          </p>
        </div>
      </section>

      <FinalCTA
        {...carbonLaserPeelCTA}
      />

      <RelatedPages
        {...carbonLaserPeelRelatedPages}
      />
    </>
  );
};

export default CarbonLaserPeelPage;
