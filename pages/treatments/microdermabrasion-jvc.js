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
  microdermabrasionHero,
  microdermabrasionIntro,
  microdermabrasionExplanation,
  microdermabrasionHowItWorks,
  microdermabrasionTypes,
  microdermabrasionAppointment,
  microdermabrasionSensation,
  microdermabrasionConcerns,
  microdermabrasionSuitability,
  microdermabrasionSkinTypes,
  microdermabrasionGender,
  microdermabrasionResults,
  microdermabrasionRecovery,
  microdermabrasionSideEffects,
  microdermabrasionComparisons,
  microdermabrasionBeforeAfter,
  microdermabrasionCost,
  microdermabrasionChoosingClinic,
  microdermabrasionWhyJvc,
  microdermabrasionLocation,
  microdermabrasionSummary,
  microdermabrasionFAQ,
  microdermabrasionCTA,
  microdermabrasionRelatedPages
} from '../../data/microdermabrasionData';

const MicrodermabrasionJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/microdermabrasion-jvc/";
  const publishedDate = "2026-08-14T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Microdermabrasion Treatment in JVC",
      "url": currentUrl,
      "description": "Professional microdermabrasion treatment in Jumeirah Village Circle (JVC), Dubai, offered at Vedara Care Polyclinic. Non-invasive skin exfoliation for smoother, fresher-looking skin.",
      "inLanguage": "en-AE",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae"
      },
      "about": {
        "@type": "MedicalProcedure",
        "name": "Microdermabrasion",
        "procedureType": "https://schema.org/NoninvasiveProcedure"
      },
      "mainEntityOfPage": currentUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Microdermabrasion Treatment",
      "name": "Microdermabrasion Treatment in JVC",
      "url": currentUrl,
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae",
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
          "name": "Dermatology Clinic in JVC",
          "item": "https://vedaracare.ae/dermatology-clinic-jvc/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Microdermabrasion Treatment in JVC",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": microdermabrasionFAQ.faqs.map(faq => ({
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
        <title>{microdermabrasionHero.title}</title>
        <meta name="description" content={microdermabrasionHero.description} />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content={microdermabrasionHero.title} />
        <meta property="og:description" content={microdermabrasionHero.description} />
        <meta property="og:image" content={`https://vedaracare.ae${microdermabrasionHero.image}`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={microdermabrasionHero.title} />
        <meta name="twitter:description" content={microdermabrasionHero.description} />
        <meta name="twitter:image" content={`https://vedaracare.ae${microdermabrasionHero.image}`} />
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
      <AyurvedaHero {...microdermabrasionHero} />

      {/* Intro Section */}
      <AyurvedaIntro {...microdermabrasionIntro} />

      {/* Section 1: Microdermabrasion Explained Simply */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={microdermabrasionExplanation.label}
        title={microdermabrasionExplanation.title}
        description={microdermabrasionExplanation.description}
        contentSections={microdermabrasionExplanation.content.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: microdermabrasionExplanation.image,
          altText: microdermabrasionExplanation.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={microdermabrasionExplanation.caption}
      />

      {/* Section 2: How Microdermabrasion Works */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={microdermabrasionHowItWorks.label}
        title={microdermabrasionHowItWorks.title}
        description={microdermabrasionHowItWorks.description}
        contentSections={microdermabrasionHowItWorks.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: microdermabrasionHowItWorks.image,
          altText: microdermabrasionHowItWorks.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "left"
        }}
        footer={microdermabrasionHowItWorks.caption}
      />

      {/* Section 3: Types of Microdermabrasion */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {microdermabrasionTypes.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {microdermabrasionTypes.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-8 max-w-4xl">
            {microdermabrasionTypes.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {microdermabrasionTypes.list.map((type, idx) => (
              <div key={idx} className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
                <h3 className="text-xl font-serif mb-4 text-[rgb(26,26,26)]">{type.title}</h3>
                <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {microdermabrasionTypes.footer}
          </p>
        </div>
      </div>

      {/* Section 4: What Happens During Your Appointment */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={microdermabrasionAppointment.label}
        title={microdermabrasionAppointment.title}
        description={microdermabrasionAppointment.description}
        contentSections={microdermabrasionAppointment.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: microdermabrasionAppointment.image,
          altText: microdermabrasionAppointment.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={microdermabrasionAppointment.caption}
      />

      {/* Section 5: What Does Microdermabrasion Feel Like */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 bg-white border border-[#E5DFD3]">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {microdermabrasionSensation.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
            {microdermabrasionSensation.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
            {microdermabrasionSensation.description}
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {microdermabrasionSensation.notes}
          </p>
        </div>
      </div>

      {/* Section 6: Skin Concerns Microdermabrasion May Help */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {microdermabrasionConcerns.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {microdermabrasionConcerns.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-8 max-w-4xl">
            {microdermabrasionConcerns.description}
          </p>

          <div className="space-y-8">
            {microdermabrasionConcerns.list.slice(0, 4).map((c, i) => (
              <div key={i} className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
                <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">{c.title}</h3>
                <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
                  {c.description}
                </p>
              </div>
            ))}

            {/* Mild Congestion & Acne-Prone Skin with Link */}
            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {microdermabrasionConcerns.list[4].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line mb-4">
                {microdermabrasionConcerns.list[4].description}
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                Patients with more significant or persistent acne concerns may be better served starting with a dedicated <Link href="/conditions/acne-treatment-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">acne treatment</Link> plan.
              </p>
            </div>

            {/* Acne Scars with Link */}
            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {microdermabrasionConcerns.list[5].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line mb-4">
                {microdermabrasionConcerns.list[5].description}
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                For a closer look at scar-focused options, see our dedicated <Link href="/conditions/acne-scars-dubai" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">acne scars treatment</Link> page.
              </p>
            </div>

            {/* Pigmentation & Fine Lines with Link */}
            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {microdermabrasionConcerns.list[6].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line mb-4">
                {microdermabrasionConcerns.list[6].description}
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                Our <Link href="/conditions/pigmentation-treatment-dubai" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">pigmentation treatment</Link> page covers options built specifically for that concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Suitability — Who May Benefit & Avoid */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Who May Benefit */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                SUITABILITY
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Benefit?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                {microdermabrasionSuitability.introduction}
              </p>
              <ul className="space-y-3 mb-6">
                {microdermabrasionSuitability.rightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who May Need to Avoid */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                IMPORTANT CONSIDERATIONS
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Need to Avoid or Postpone?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                There are situations where microdermabrasion is not advisable, or should be postponed:
              </p>
              <ul className="space-y-3 mb-6">
                {microdermabrasionSuitability.notRightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#B69769' }}>!</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {microdermabrasionSuitability.footer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Microdermabrasion for Different Skin Types */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {microdermabrasionSkinTypes.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {microdermabrasionSkinTypes.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-8 max-w-4xl">
            {microdermabrasionSkinTypes.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microdermabrasionSkinTypes.types.map((type, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
                <h3 className="text-lg font-serif mb-3 text-[rgb(26,26,26)]">{type.name}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  {type.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 9: Microdermabrasion for Men & Women */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              FOR MEN
            </p>
            <h2 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
              Microdermabrasion for Men
            </h2>
            <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
              {microdermabrasionGender.menText}
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              FOR WOMEN
            </p>
            <h2 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
              Microdermabrasion for Women
            </h2>
            <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
              {microdermabrasionGender.womenText}
            </p>
          </div>
        </div>
      </div>

      {/* Section 10: Microdermabrasion Results & Recovery */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Results Summary */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {microdermabrasionResults.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {microdermabrasionResults.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
              {microdermabrasionResults.summary}
            </p>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
              {microdermabrasionResults.timing}
            </p>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
              {microdermabrasionResults.sessions}
            </p>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {microdermabrasionResults.frequency}
            </p>
          </div>

          {/* Recovery & Aftercare */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {microdermabrasionRecovery.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {microdermabrasionRecovery.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {microdermabrasionRecovery.description}
            </p>
            <ul className="space-y-3 mb-6">
              {microdermabrasionRecovery.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {microdermabrasionRecovery.footer}
            </p>
          </div>

          {/* Side Effects & Safety */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {microdermabrasionSideEffects.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {microdermabrasionSideEffects.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
              {microdermabrasionSideEffects.description}
            </p>
          </div>
        </div>
      </div>

      {/* Section 11: Comparisons */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {microdermabrasionComparisons.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {microdermabrasionComparisons.title}
          </h2>

          {/* Comparison Table: Microdermabrasion vs HydraFacial */}
          <div className="mb-12">
            <h3 className="text-xl font-serif mb-5 text-[rgb(26,26,26)]">
              {microdermabrasionComparisons.tableHeader}
            </h3>
            <div className="overflow-hidden rounded-2xl border border-[#E5DFD3]">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: '#F5F0E8' }}>
                    {microdermabrasionComparisons.columns.map((c, i) => (
                      <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {microdermabrasionComparisons.rows.map((row, ri) => (
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
              {microdermabrasionComparisons.footer}
            </p>
          </div>

          {/* Prose Comparisons */}
          <div className="space-y-8 mb-6">
            {/* Microdermabrasion vs Chemical Peel */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {microdermabrasionComparisons.comparisons[0].name}
              </h3>
              {microdermabrasionComparisons.comparisons[0].paragraphs.map((p, pi) => (
                <p key={pi} className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4">
                Our <Link href="/treatments/chemical-peel-dubai" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">chemical peel</Link> page covers that treatment in more detail.
              </p>
            </div>

            {/* Microdermabrasion vs Microneedling */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {microdermabrasionComparisons.comparisons[1].name}
              </h3>
              {microdermabrasionComparisons.comparisons[1].paragraphs.map((p, pi) => (
                <p key={pi} className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>

            {/* Microdermabrasion vs Regular Facial */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {microdermabrasionComparisons.comparisons[2].name}
              </h3>
              {microdermabrasionComparisons.comparisons[2].paragraphs.map((p, pi) => (
                <p key={pi} className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 12: Clinical Standards, Cost & Clinic Selection */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Before & After Standards */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {microdermabrasionBeforeAfter.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {microdermabrasionBeforeAfter.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {microdermabrasionBeforeAfter.description}
            </p>
          </div>

          {/* Cost */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {microdermabrasionCost.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {microdermabrasionCost.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {microdermabrasionCost.description}
            </p>
          </div>

          {/* How to Choose a Clinic */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {microdermabrasionChoosingClinic.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {microdermabrasionChoosingClinic.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {microdermabrasionChoosingClinic.description}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {microdermabrasionChoosingClinic.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)] text-[#DC2626]">Red Flags to Watch For</h4>
            <ul className="space-y-2 mb-6">
              {microdermabrasionChoosingClinic.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#DC2626' }}>!</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {microdermabrasionChoosingClinic.footer}
            </p>
          </div>
        </div>
      </div>

      {/* Section 13: Local Accessibility & Location */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={microdermabrasionWhyJvc.label}
        title={microdermabrasionWhyJvc.title}
        contentSections={[
          { subtitle: '', description: microdermabrasionWhyJvc.description }
        ]}
        sidebar={{
          image: microdermabrasionWhyJvc.image,
          altText: microdermabrasionWhyJvc.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={microdermabrasionWhyJvc.caption}
      />

      {/* Microdermabrasion at Vedara Care with Links */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            OUR LOCATION
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
            {microdermabrasionLocation.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
            Vedara Care Polyclinic operates from Jumeirah Village Circle, offering skin treatment services within a broader, professional healthcare environment rather than a purely aesthetic setting. Consultations are approached with patient-focused, individualized assessment — looking at your specific skin condition, concerns and goals before any treatment is recommended.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
            Every microdermabrasion appointment at Vedara Care begins with a genuine skin assessment, because suitability and treatment intensity depend entirely on the individual in front of us, not a fixed protocol applied to everyone. For patients whose concerns extend beyond what surface exfoliation can address, our team can also discuss related options available through our broader <Link href="/dermatology-clinic-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">dermatology clinic in JVC</Link> and <Link href="/skin-clinic-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">skin clinic in JVC</Link> services.
          </p>
        </div>
      </div>

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 bg-white border border-[#E5DFD3]">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {microdermabrasionSummary.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
            {microdermabrasionSummary.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {microdermabrasionSummary.description}
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ
        bgColor="bg-white"
        label="FAQ"
        title="Frequently Asked Questions About Microdermabrasion"
        description="Answers to common questions about microdermabrasion treatment, skin types, acne, acne scars, pigmentation, downtime, safety, and cost in JVC, Dubai."
        faqs={microdermabrasionFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc" },
          { text: "Skin Clinic in JVC", href: "/skin-clinic-jvc" },
          { text: "Chemical Peel in Dubai", href: "/treatments/chemical-peel-dubai" }
        ]}
      />

      <TreatmentLocation
        bgColor="bg-[#FAF7F2]"
        label="GET IN TOUCH"
        title="Book a Microdermabrasion Consultation at Vedara Care Polyclinic"
        address="Vedara Care Polyclinic is located at Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC), Dubai, UAE."
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Microdermabrasion treatment at your JVC clinic in Dubai."
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

      <MedicalDisclaimer text={microdermabrasionCTA.disclaimer} />

      <FinalCTA
        title={microdermabrasionCTA.title}
        description={microdermabrasionCTA.description}
        address={microdermabrasionCTA.address}
        button1Text={microdermabrasionCTA.button1Text}
        button1TextHref={microdermabrasionCTA.button1TextHref}
        button2Text={microdermabrasionCTA.button2Text}
        button2TextHref={microdermabrasionCTA.button2TextHref}
      />

      <RelatedPages {...microdermabrasionRelatedPages} />
    </>
  );
};

export default MicrodermabrasionJVC;
