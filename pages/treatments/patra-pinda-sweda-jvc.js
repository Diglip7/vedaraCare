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
  patraPindaSwedaHero,
  patraPindaSwedaIntro,
  patraPindaSwedaExplanation,
  patraPindaSwedaBolusHow,
  patraPindaSwedaBolusInside,
  patraPindaSwedaConcerns,
  patraPindaSwedaComparisons,
  patraPindaSwedaProtocol,
  patraPindaSwedaExperience,
  patraPindaSwedaSuitability,
  patraPindaSwedaHeatSafety,
  patraPindaSwedaRedFlags,
  patraPindaSwedaPanchakarma,
  patraPindaSwedaDosha,
  patraPindaSwedaCost,
  patraPindaSwedaWhyJvcList,
  patraPindaSwedaWhyVedara,
  patraPindaSwedaRelatedConditions,
  // beforeBookingItems,
  patraPindaSwedaFAQ,
  patraPindaSwedaLocation,
  patraPindaSwedaWhyJvc,
  patraPindaSwedaCTA,
  patraPindaSwedaRelatedPages,
} from "../../data/patraPindaSwedaData";

const PatraPindaSwedaJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/patra-pinda-sweda-jvc/";
  const publishedDate = "2026-08-13T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Patra Pinda Sweda Therapy in JVC",
      "url": currentUrl,
      "description": "Patra Pinda Sweda Therapy in JVC at Vedara Care Polyclinic — a traditional Ayurvedic fomentation therapy using warm herbal boluses, offered as part of an individualized Ayurvedic consultation in Jumeirah Village Circle, Dubai.",
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "about": {
        "@type": "MedicalTherapy",
        "name": "Patra Pinda Sweda",
        "alternateName": ["Patra Pinda Swedana", "Ela Kizhi", "Patra Potli Sweda"],
        "description": "A traditional Ayurvedic fomentation therapy in which warm herbal boluses, prepared from selected leaves and herbs, are applied to the body to create a controlled warming effect."
      },
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
          "addressLocality": "Jumeirah Village Circle (JVC)",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "url": "https://vedaracare.ae"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Patra Pinda Sweda Therapy",
      "name": "Patra Pinda Sweda Therapy in JVC",
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
          "addressLocality": "Jumeirah Village Circle (JVC)",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "Jumeirah Village Circle, Dubai"
      },
      "url": currentUrl
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
          "name": "Treatments",
          "item": "https://vedaracare.ae/treatments/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Patra Pinda Sweda Therapy in JVC",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": patraPindaSwedaFAQ.faqs.map(faq => ({
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
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae",
      "telephone": "+971555736312",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
        "addressLocality": "Jumeirah Village Circle (JVC), Dubai",
        "addressCountry": "AE"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Patra Pinda Sweda Therapy in JVC",
      "alternateName": ["Patra Pinda Sweda", "Patra Pinda Swedana", "Ela Kizhi", "Patra Potli Sweda"],
      "url": currentUrl,
      "description": "Patra Pinda Sweda Therapy in JVC at Vedara Care Polyclinic is a traditional Ayurvedic herbal bolus fomentation therapy in which warm cloth bundles filled with selected leaves and herbs are gently applied to the body.",
      "procedureType": "Ayurveda",
      "bodyLocation": ["Muscles", "Joints", "Back", "Shoulder", "Neck", "Knee"],
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae"
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Patra Pinda Sweda Therapy in JVC | Vedara Care</title>
        <meta name="description" content="Patra Pinda Sweda Therapy in JVC at Vedara Care — traditional Ayurvedic herbal bolus therapy for stiffness and pain. Book a personalized consultation in JVC." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/patra-pinda-sweda-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Patra Pinda Sweda Therapy in JVC | Vedara Care" />
        <meta property="og:description" content="Patra Pinda Sweda Therapy in JVC at Vedara Care — traditional Ayurvedic herbal bolus therapy for stiffness and pain. Book a personalized consultation in JVC." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/patra-pinda-sweda-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patra Pinda Sweda Therapy in JVC | Vedara Care" />
        <meta name="twitter:description" content="Patra Pinda Sweda Therapy in JVC at Vedara Care — traditional Ayurvedic herbal bolus therapy for stiffness and pain. Book a personalized consultation in JVC." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/patra-pinda-sweda-jvc-dubai.jpg" />
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

      {/* Hero Section */}
      <AyurvedaHero {...patraPindaSwedaHero} />

      {/* Quick Answer Section */}
      <AyurvedaIntro {...patraPindaSwedaIntro} />

      {/* Section 1: What Is Patra Pinda Sweda */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={patraPindaSwedaExplanation.label}
        title={patraPindaSwedaExplanation.title}
        description={patraPindaSwedaExplanation.description}
        contentSections={patraPindaSwedaExplanation.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: patraPindaSwedaExplanation.image,
          altText: patraPindaSwedaExplanation.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={patraPindaSwedaExplanation.caption}
      />

      {/* Section 2: How Does the Herbal Bolus Work? */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={patraPindaSwedaBolusHow.label}
        title={patraPindaSwedaBolusHow.title}
        description={patraPindaSwedaBolusHow.description}
        contentSections={patraPindaSwedaBolusHow.steps.map((step, i) => ({
          subtitle: `Step ${i + 1}`,
          description: step
        }))}
        sidebar={{
          image: patraPindaSwedaBolusHow.image,
          altText: patraPindaSwedaBolusHow.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "left"
        }}
        footer={patraPindaSwedaBolusHow.caption}
      />

      {/* Section 3: What Is Inside a Patra Pinda Bolus? */}
      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={patraPindaSwedaBolusInside.label}
        title={patraPindaSwedaBolusInside.title}
        description={patraPindaSwedaBolusInside.description}
        contentSections={patraPindaSwedaBolusInside.points.map((pt, i) => ({
          subtitle: `Factor ${i + 1}`,
          description: pt
        }))}
        sidebar={{
          image: patraPindaSwedaBolusInside.image,
          altText: patraPindaSwedaBolusInside.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={patraPindaSwedaBolusInside.caption}
      />

      {/* Section 4-10: Indications & Concerns */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={patraPindaSwedaConcerns.label}
        title={patraPindaSwedaConcerns.title}
        description={patraPindaSwedaConcerns.description}
        contentSections={patraPindaSwedaConcerns.concernsList.map(c => ({
          subtitle: c.title,
          description: c.description
        }))}
        sidebar={{
          image: "/images/patra-pinda-sweda-shoulder-treatment-jvc.jpg",
          altText: "Practitioner performing Patra Pinda Sweda therapy on a patient’s shoulder",
          width: "w-full",
          height: "h-[550px]",
          borderPosition: "left"
        }}
        footer="Patra Pinda Sweda may be considered for selected shoulder, back, neck, and joint concerns."
      />

      {/* Section 11-15: Comparisons */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {patraPindaSwedaComparisons.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {patraPindaSwedaComparisons.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {patraPindaSwedaComparisons.description}
          </p>

          {/* Comparison Table */}
          {patraPindaSwedaComparisons.comparisonTable && (
            <div className="mb-16">
              <h4 className="text-lg font-serif mb-5 text-[rgb(26,26,26)]">
                {patraPindaSwedaComparisons.comparisonTable.header}
              </h4>
              <div className="overflow-hidden rounded-2xl border border-[#E5DFD3]">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#F5F0E8' }}>
                      {patraPindaSwedaComparisons.comparisonTable.columns.map((c, i) => (
                        <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {patraPindaSwedaComparisons.comparisonTable.rows.map((row, ri) => (
                      <tr key={ri} className="border-b last:border-0 border-[#E5DFD3]" style={{ backgroundColor: ri % 2 ? '#FAF7F2' : '#FFFFFF' }}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-5 py-4 text-[rgb(107,107,107)] align-top font-sans">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[rgb(107,107,107)] mt-4 leading-relaxed italic">
                {patraPindaSwedaComparisons.comparisonTable.footer}
              </p>
            </div>
          )}

          {/* Comparison Cards */}
          <div className="space-y-8">
            {patraPindaSwedaComparisons.comparisons.map((c, idx) => (
              <div key={idx} className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
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

      {/* Section 16: How Patra Pinda Sweda Is Performed */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={patraPindaSwedaProtocol.label}
        title={patraPindaSwedaProtocol.title}
        description={patraPindaSwedaProtocol.description}
        contentSections={patraPindaSwedaProtocol.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: patraPindaSwedaProtocol.image,
          altText: patraPindaSwedaProtocol.alt,
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
        footer={patraPindaSwedaProtocol.caption}
      />

      {/* Section 17-22: Experience, Duration, Sessions, Recovery & Aftercare */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* What Does Patra Pinda Sweda Feel Like */}
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-3 uppercase">
              PATIENT EXPERIENCE
            </p>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {patraPindaSwedaExperience.sensation.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
              {patraPindaSwedaExperience.sensation.description}
            </p>
          </div>

          {/* Does Patra Pinda Sweda Hurt */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {patraPindaSwedaExperience.pain.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
              {patraPindaSwedaExperience.pain.description}
            </p>
          </div>

          {/* How Long Does a Session Take */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {patraPindaSwedaExperience.duration.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {patraPindaSwedaExperience.duration.description}
            </p>
          </div>

          {/* How Many Sessions May Be Needed */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {patraPindaSwedaExperience.sessions.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {patraPindaSwedaExperience.sessions.description}
            </p>
            <ul className="space-y-3 mb-6">
              {patraPindaSwedaExperience.sessions.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {patraPindaSwedaExperience.sessions.footer}
            </p>
          </div>

          {/* Recovery */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {patraPindaSwedaExperience.recovery.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {patraPindaSwedaExperience.recovery.description}
            </p>
            <ul className="space-y-3 mb-6">
              {patraPindaSwedaExperience.recovery.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>•</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {patraPindaSwedaExperience.recovery.footer}
            </p>
          </div>

          {/* Aftercare */}
          <ContentWithSidebar
            bgColor="bg-white"
            label="POST-TREATMENT"
            title={patraPindaSwedaExperience.aftercare.title}
            description={patraPindaSwedaExperience.aftercare.description}
            contentSections={patraPindaSwedaExperience.aftercare.points.map((pt, i) => ({
              subtitle: `Guidance ${i + 1}`,
              description: pt
            }))}
            sidebar={{
              image: patraPindaSwedaExperience.aftercare.image,
              altText: patraPindaSwedaExperience.aftercare.alt,
              width: "w-full",
              height: "h-[400px]",
              borderPosition: "left"
            }}
            footer={patraPindaSwedaExperience.aftercare.caption}
          />
        </div>
      </div>

      {/* Section 23-24: Who May Consider vs Who May Not Be Suitable */}
      <section className="bg-[#FEFDFC] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Who May Consider Patra Pinda Sweda */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                SUITABILITY
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Consider Patra Pinda Sweda?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                {patraPindaSwedaSuitability.introduction}
              </p>
              <ul className="space-y-3 mb-6">
                {patraPindaSwedaSuitability.rightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {patraPindaSwedaSuitability.rightForFooter}
              </p>
            </div>

            {/* Who May Not Be Suitable */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                IMPORTANT CONSIDERATIONS
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Not Be Suitable?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                There are situations where Patra Pinda Sweda may need to be avoided, postponed, or modified, depending on individual clinical assessment. These can include:
              </p>
              <ul className="space-y-3 mb-6">
                {patraPindaSwedaSuitability.notRightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#B69769' }}>!</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {patraPindaSwedaSuitability.notRightForFooter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 25-26: Heat Safety & When Pain Needs Medical Attention */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={patraPindaSwedaHeatSafety.label}
        title={patraPindaSwedaHeatSafety.title}
        description={patraPindaSwedaHeatSafety.description}
        contentSections={patraPindaSwedaHeatSafety.risks.map((risk, i) => ({
          subtitle: `Risk ${i + 1}`,
          description: risk
        }))}
        sidebar={{
          image: patraPindaSwedaHeatSafety.image,
          altText: patraPindaSwedaHeatSafety.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={patraPindaSwedaHeatSafety.caption}
      />

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 bg-[#FFF8F0] border border-[#F0DFBE]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {patraPindaSwedaRedFlags.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {patraPindaSwedaRedFlags.title}
            </h2>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
              {patraPindaSwedaRedFlags.description}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {patraPindaSwedaRedFlags.warningSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#DC2626' }}>!</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(130,90,40)] leading-relaxed">
              {patraPindaSwedaRedFlags.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Section 27-28: Panchakarma & Dosha Assessment */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {patraPindaSwedaPanchakarma.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {patraPindaSwedaPanchakarma.title}
            </h2>
            {patraPindaSwedaPanchakarma.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {patraPindaSwedaDosha.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {patraPindaSwedaDosha.title}
            </h2>
            {patraPindaSwedaDosha.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Section 29-31: Cost, Why JVC, Why Vedara Care */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Cost */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {patraPindaSwedaCost.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {patraPindaSwedaCost.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6 max-w-3xl">
              {patraPindaSwedaCost.description}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {patraPindaSwedaCost.factors.map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-[#FAF7F2] border border-[#E5DFD3] text-sm text-[rgb(26,26,26)] flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {patraPindaSwedaCost.footer}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Why Choose Patra Pinda Sweda in JVC? */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {patraPindaSwedaWhyJvcList.label}
              </p>
              <h3 className="text-2xl font-serif mb-5 text-[rgb(26,26,26)]">
                {patraPindaSwedaWhyJvcList.title}
              </h3>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                {patraPindaSwedaWhyJvcList.description}
              </p>
              <ul className="space-y-3 mb-6">
                {patraPindaSwedaWhyJvcList.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {patraPindaSwedaWhyJvcList.footer}
              </p>
            </div>

            {/* Why Choose Vedara Care Polyclinic? */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {patraPindaSwedaWhyVedara.label}
              </p>
              <h3 className="text-2xl font-serif mb-5 text-[rgb(26,26,26)]">
                {patraPindaSwedaWhyVedara.title}
              </h3>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6 whitespace-pre-line">
                {patraPindaSwedaWhyVedara.description}
              </p>
              <ul className="space-y-3 mb-6">
                {patraPindaSwedaWhyVedara.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {patraPindaSwedaWhyVedara.footer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Questions to Ask Before Booking */}
      {/* <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-3 uppercase">
            BEFORE BOOKING PATRA PINDA SWEDA
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[rgb(26,26,26)]">
            Questions to Ask Before Booking
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            It’s worth going into a consultation with a short list of your own questions:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {beforeBookingItems.map((q, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 text-[13.5px] leading-relaxed flex gap-3 bg-[#FAF7F2] border border-[#E5DFD3] text-[rgb(26,26,26)]"
            >
              <span className="shrink-0 mt-0.5 text-[rgb(160,113,63)] font-bold">?</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* FAQ Section */}
      <FAQ
        bgColor="bg-white"
        label="FAQ"
        title="Frequently Asked Questions About Patra Pinda Sweda"
        description="Answers to common questions about Patra Pinda Sweda, suitability, herbal bolus formulation, protocol, aftercare, recovery and cost in JVC, Dubai."
        faqs={patraPindaSwedaFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Ayurveda Clinic in JVC", href: "/ayurveda-clinic-jvc" },
          { text: "Abhyanga in Dubai", href: "/treatments/abhyanga-dubai" },
          { text: "Janu Basti Treatment in JVC", href: "/treatments/janu-basti-jvc" },
          { text: "Physiotherapy in JVC", href: "/physiotherapy-jvc" }
        ]}
      />

      {/* PART 5 — RELATED CONDITIONS AND TREATMENTS Section */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {patraPindaSwedaRelatedConditions.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {patraPindaSwedaRelatedConditions.title}
          </h2>
          <div className="space-y-4 text-base text-[rgb(107,107,107)] leading-relaxed max-w-4xl">
            <p>
              Stiffness and pain can have many different underlying causes, and Patra Pinda Sweda Therapy in JVC is only one possible part of a broader, individualized Ayurvedic care plan. Because the right treatment depends heavily on what’s actually causing your symptoms, we’d encourage a proper Ayurvedic consultation before assuming this particular therapy is the right fit.
            </p>
            <p>
              If your concern is specifically knee-related, our <Link href="/treatments/janu-basti-jvc" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Janu Basti Treatment in JVC</Link> page covers a different, knee-specific Ayurvedic therapy. For head, sinus, or neck-related concerns, our <Link href="/treatments/nasya-therapy-jvc" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Nasya Therapy in JVC</Link> page may be more directly relevant. If you’re interested in broader Ayurvedic oil massage, our <Link href="/treatments/abhyanga-dubai" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Abhyanga in JVC</Link> page explains that therapy in more detail, and our <Link href="/treatments/panchakarma-jvc" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Panchakarma in JVC</Link> page covers the wider classical Ayurvedic framework that Patra Pinda Sweda can sometimes form part of.
            </p>
            <p>
              For musculoskeletal concerns with a stronger functional or rehabilitation component — such as building strength or restoring movement after injury — our <Link href="/physiotherapy-jvc" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Physiotherapy in JVC</Link> service may be a more directly relevant starting point, either instead of or alongside Ayurvedic therapy. You can also explore our full range of services on our <Link href="/ayurveda-clinic-jvc" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Ayurveda Treatment in JVC</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* Location Sections */}
      <ContentWithSidebar
        bgColor="bg-white"
        label="OUR LOCATION"
        title={patraPindaSwedaLocation.title}
        contentSections={[
          { subtitle: '', description: patraPindaSwedaLocation.address }
        ]}
        sidebar={{
          image: patraPindaSwedaLocation.image,
          altText: patraPindaSwedaLocation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={patraPindaSwedaLocation.caption}
      />

      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label="LOCAL ACCESSIBILITY"
        title={patraPindaSwedaWhyJvc.title}
        contentSections={[
          { subtitle: '', description: patraPindaSwedaWhyJvc.description }
        ]}
        sidebar={{
          image: patraPindaSwedaWhyJvc.image,
          altText: patraPindaSwedaWhyJvc.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={patraPindaSwedaWhyJvc.caption}
      />

      <TreatmentLocation
        bgColor="bg-[#FAF7F2]"
        label="GET IN TOUCH"
        title="Book a Patra Pinda Sweda Therapy Consultation at Vedara Care Polyclinic"
        address="For patients across JVC and wider Dubai researching traditional Ayurvedic herbal fomentation options, Patra Pinda Sweda (Ela Kizhi / Patra Potli Sweda) is one part of the broader approach available at Vedara Care Polyclinic. Whether your interest is stiffness, localized discomfort, frozen shoulder, back or neck-related concerns, or general musculoskeletal tension, the starting point is the same: a proper assessment to confirm whether this therapy is the right fit for your specific case, delivered locally in JVC without needing to travel elsewhere in Dubai."
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Patra Pinda Sweda Therapy at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Saturday", time: "9:00 AM – 9:00 PM" },
          { day: "Sunday", time: "By appointment" }
        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle roundabout, accessible from Hessa Street and Al Khail Road"
        ]}
        buttonText="Book a Consultation"
      />

      <MedicalDisclaimer text={patraPindaSwedaCTA.disclaimer} />

      <FinalCTA
        title={patraPindaSwedaCTA.title}
        description={patraPindaSwedaCTA.description}
        address={patraPindaSwedaCTA.address}
        button1Text={patraPindaSwedaCTA.button1Text}
        button1TextHref={patraPindaSwedaCTA.button1TextHref}
        button2Text={patraPindaSwedaCTA.button2Text}
        button2TextHref={patraPindaSwedaCTA.button2TextHref}
      />

      <RelatedPages {...patraPindaSwedaRelatedPages} />
    </>
  );
};

export default PatraPindaSwedaJVC;
