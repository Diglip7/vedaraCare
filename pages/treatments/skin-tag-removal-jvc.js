import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  skinTagRemovalHero,
  skinTagRemovalIntro,
  skinTagWhatIs,
  skinTagLocations,
  skinTagReasons,
  skinTagDiagnosis,
  skinTagWhenToSeeDoctor,
  skinTagMethods,
  skinTagHomeRemoval,
  skinTagProcedure,
  skinTagAssessmentFactors,
  skinTagPain,
  skinTagRecovery,
  skinTagScar,
  skinTagExpectations,
  skinTagSafety,
  skinTagCost,
  skinTagFAQ,
  skinTagLocation,
  skinTagCTA,
  skinTagRelatedPages
} from "../../data/skinTagRemovalData";

const SkinTagRemovalJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/skin-tag-removal-jvc";
  const publishedDate = "2026-08-21T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "telephone": "+971555736312",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
        "addressLocality": "Jumeirah Village Circle (JVC)",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "medicalSpecialty": "Dermatology"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Skin Tag Removal in JVC",
      "url": currentUrl,
      "description": "Skin Tag Removal in JVC at Vedara Care Polyclinic. Dermatologist-led assessment and removal in Dubai, with honest guidance on recovery and results.",
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "main"
      },
      "medicalAudience": {
        "@type": "Patient"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Skin Tag Removal",
      "procedureType": "Dermatological Procedure",
      "bodyLocation": ["Neck", "Underarm", "Eyelid", "Groin", "Skin Folds"],
      "howPerformed": "Removal techniques (such as snip excision, electrocautery, or cryotherapy) selected by a dermatologist following individual assessment of the lesion's size, location, and characteristics.",
      "preparation": "Dermatologist-led assessment to confirm the lesion is a benign skin tag before treatment.",
      "followup": "Aftercare guidance specific to the technique used, with follow-up if required.",
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic"
      }
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
          "name": "Dermatology",
          "item": "https://vedaracare.ae/treatments/dermatology-jvc"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Skin Tag Removal in JVC",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": skinTagFAQ.faqs.map(faq => ({
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
        <title>Skin Tag Removal in JVC | Vedara Care Dermatology</title>
        <meta name="description" content="Skin Tag Removal in JVC at Vedara Care Polyclinic. Dermatologist-led assessment and removal in Dubai, with honest guidance on recovery and results." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Skin Tag Removal in JVC | Vedara Care Dermatology" />
        <meta property="og:description" content="Skin Tag Removal in JVC at Vedara Care Polyclinic. Dermatologist-led assessment and removal in Dubai, with honest guidance on recovery and results." />
        <meta property="og:image" content="https://vedaracare.ae/images/skin-tag-assessment-jvc-dermatologist.webp" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skin Tag Removal in JVC | Vedara Care Dermatology" />
        <meta name="twitter:description" content="Skin Tag Removal in JVC at Vedara Care Polyclinic. Dermatologist-led assessment and removal in Dubai, with honest guidance on recovery and results." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/skin-tag-assessment-jvc-dermatologist.webp" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero {...skinTagRemovalHero} />

      <AyurvedaIntro {...skinTagRemovalIntro} />

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinTagWhatIs.label}
        title={skinTagWhatIs.title}
        description={skinTagWhatIs.description}
        contentSections={skinTagWhatIs.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: skinTagWhatIs.image,
          altText: skinTagWhatIs.alt,
          width: "w-full",
          height: "h-[550px]",
          borderPosition: "right"
        }}
        footer={skinTagWhatIs.caption}
      />

      <ContentWithSidebar
        bgColor="bg-white"
        label={skinTagLocations.label}
        title={skinTagLocations.title}
        description={skinTagLocations.description}
        contentSections={skinTagLocations.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: skinTagLocations.image,
          altText: skinTagLocations.alt,
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
        footer={skinTagLocations.caption}
      />

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTagReasons.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {skinTagReasons.title}
            </h2>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
              {skinTagReasons.description}
            </p>
            <ul className="space-y-3 mb-6">
              {skinTagReasons.factors.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {skinTagReasons.footer}
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTagDiagnosis.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {skinTagDiagnosis.title}
            </h2>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
              {skinTagDiagnosis.description}
            </p>
            <ul className="space-y-3 mb-6">
              {skinTagDiagnosis.factors.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#B69769' }}>!</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {skinTagDiagnosis.footer}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {skinTagMethods.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6  text-[rgb(26,26,26)]">
            {skinTagMethods.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {skinTagMethods.description}
          </p>

          <div className="space-y-8">
            {skinTagMethods.comparisons.map((c, idx) => (
              <div key={idx} className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
                <h3 className="text-xl font-serif mb-4 text-[rgb(26,26,26)]">{c.name}</h3>
                {c.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinTagProcedure.label}
        title={skinTagProcedure.title}
        description={skinTagProcedure.description}
        contentSections={skinTagProcedure.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: skinTagProcedure.image,
          altText: skinTagProcedure.alt,
          width: "w-full",
          height: "h-[380px] lg:h-[480px]",
          borderPosition: "right"
        }}
        footer={skinTagProcedure.caption}
      />

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {skinTagPain.title}
            </h3>
            {skinTagPain.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {skinTagRecovery.title}
            </h3>
            {skinTagRecovery.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {skinTagScar.title}
            </h3>
            {skinTagScar.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      <FAQ
        bgColor="bg-[#FAF7F2]"
        label="FAQ"
        title="Frequently Asked Questions"
        description="Answers to common questions about skin tag removal, recovery, safety and cost in JVC, Dubai."
        faqs={skinTagFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Dermatology in JVC", href: "/dermatology-clinic-jvc" },
          { text: "Mole Removal", href: "/treatments/mole-removal-jvc" },
          // { text: "Laser Treatments", href: "/treatments/laser-hair-removal-jvc" }
        ]}
      />


      <TreatmentLocation
        bgColor="bg-[#FAF7F2]"
        label="GET IN TOUCH"
        title={skinTagCTA.title}
        address={skinTagCTA.description}
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Skin Tag Removal at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Sunday", time: "9:00 AM – 10:00 PM" }
        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle roundabout"
        ]}
        buttonText={skinTagCTA.button1Text}
      />

      <MedicalDisclaimer text={skinTagCTA.disclaimer} />

      <FinalCTA
        title={skinTagCTA.title}
        description={skinTagCTA.description}
        address={skinTagCTA.address}
        button1Text={skinTagCTA.button1Text}
        button1TextHref={skinTagCTA.button1TextHref}
        button2Text={skinTagCTA.button2Text}
        button2TextHref={skinTagCTA.button2TextHref}
      />

      <RelatedPages {...skinTagRelatedPages} />
    </>
  );
};

export default SkinTagRemovalJVC;
