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
  ledLightTherapyHero,
  ledLightTherapyIntro,
  ledLightTherapyExplanation,
  ledLightTherapyHowItWorks,
  ledLightTherapyWavelengths,
  ledLightTherapyConcerns,
  ledLightTherapySuitability,
  ledLightTherapyPhotosensitivity,
  ledLightTherapyAppointment,
  ledLightTherapySensation,
  ledLightTherapyDowntime,
  ledLightTherapyAftercare,
  ledLightTherapyResultsTime,
  ledLightTherapySessionsNeeded,
  ledLightTherapyExpectations,
  ledLightTherapyBeforeAfter,
  ledLightTherapyCombination,
  ledLightTherapyComparisons,
  ledLightTherapyGender,
  ledLightTherapyCost,
  ledLightTherapyChoosingClinic,
  ledLightTherapyWhyJvc,
  ledLightTherapyLocation,
  ledLightTherapySummary,
  ledLightTherapyFAQ,
  ledLightTherapyCTA,
  ledLightTherapyRelatedPages
} from '../../data/ledLightTherapyData';

const LEDLightTherapyJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/led-light-therapy-jvc/";
  const publishedDate = "2026-08-14T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "LED Light Therapy",
      "url": currentUrl,
      "description": "LED Light Therapy is a non-invasive skincare treatment that uses specific wavelengths of light, such as blue and red light, to support skin concerns including acne-prone skin, visible redness and general skin maintenance.",
      "procedureType": "https://schema.org/NoninvasiveProcedure",
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
          "addressLocality": "Jumeirah Village Circle (JVC), Dubai",
          "addressCountry": "AE"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "LED Light Therapy in JVC",
      "url": currentUrl,
      "description": "Considering LED Light Therapy in JVC? Learn how blue and red light wavelengths are used in professional skincare, and what to expect at Vedara Care Polyclinic.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae"
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
          "item": "https://vedaracare.ae/dermatology-clinic-jvc"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "LED Light Therapy in JVC",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": ledLightTherapyFAQ.faqs.map(faq => ({
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
    }
  ];

  return (
    <>
      <Head>
        <title>{ledLightTherapyHero.title}</title>
        <meta name="description" content={ledLightTherapyHero.description} />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content={ledLightTherapyHero.title} />
        <meta property="og:description" content={ledLightTherapyHero.description} />
        <meta property="og:image" content={`https://vedaracare.ae${ledLightTherapyHero.image}`} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ledLightTherapyHero.title} />
        <meta name="twitter:description" content={ledLightTherapyHero.description} />
        <meta name="twitter:image" content={`https://vedaracare.ae${ledLightTherapyHero.image}`} />
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
      <AyurvedaHero {...ledLightTherapyHero} />

      {/* Intro Section */}
      <AyurvedaIntro {...ledLightTherapyIntro} />

      {/* Section 1: What Is LED Light Therapy */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={ledLightTherapyExplanation.label}
        title={ledLightTherapyExplanation.title}
        description={ledLightTherapyExplanation.description}
        contentSections={ledLightTherapyExplanation.content.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: ledLightTherapyExplanation.image,
          altText: ledLightTherapyExplanation.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={ledLightTherapyExplanation.caption}
      />

      {/* Section 2: How Does LED Light Therapy Work */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {ledLightTherapyHowItWorks.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {ledLightTherapyHowItWorks.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6 max-w-4xl">
            {ledLightTherapyHowItWorks.description}
          </p>
          <div className="space-y-4 text-base text-[rgb(107,107,107)] leading-relaxed max-w-4xl">
            {ledLightTherapyHowItWorks.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Why Wavelength Matters */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {ledLightTherapyWavelengths.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {ledLightTherapyWavelengths.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {ledLightTherapyWavelengths.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ledLightTherapyWavelengths.list.slice(0, 2).map((item, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
                <img src={item.image} alt={item.alt} className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm" />
                {item.caption && (
                  <p className="text-xs italic text-[rgb(107,107,107)] mb-4 leading-relaxed">
                    {item.caption}
                  </p>
                )}
                <h4 className="text-xl font-serif mb-2 text-[rgb(26,26,26)]">{item.name}</h4>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3] mb-12">
            <h4 className="text-xl font-serif mb-2 text-[rgb(26,26,26)]">{ledLightTherapyWavelengths.list[2].name}</h4>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{ledLightTherapyWavelengths.list[2].description}</p>
          </div>

          {/* Comparison Table */}
          <div className="mb-8">
            <h4 className="text-lg font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyWavelengths.comparisonTable.header}
            </h4>
            <div className="overflow-hidden rounded-2xl border border-[#E5DFD3]">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: '#F5F0E8' }}>
                    {ledLightTherapyWavelengths.comparisonTable.columns.map((c, i) => (
                      <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ledLightTherapyWavelengths.comparisonTable.rows.map((row, ri) => (
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
              {ledLightTherapyWavelengths.comparisonTable.footer}
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Skin Concerns Addressed */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {ledLightTherapyConcerns.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {ledLightTherapyConcerns.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-8 max-w-4xl">
            {ledLightTherapyConcerns.description}
          </p>
          <div className="space-y-8">
            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {ledLightTherapyConcerns.concernsList[0].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line mb-4">
                {ledLightTherapyConcerns.concernsList[0].description}
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                If active inflammatory acne is present, we would generally recommend it be reviewed as part of our <Link href="/conditions/acne-treatment-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Acne Treatment</Link> service before deciding whether LED therapy has a role to play. For patients dealing with the after-effects of acne, our <Link href="/conditions/acne-scars-dubai" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Acne Scars Treatment</Link> page covers options aimed specifically at textural changes left behind once breakouts have settled.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {ledLightTherapyConcerns.concernsList[1].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
                {ledLightTherapyConcerns.concernsList[1].description}
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {ledLightTherapyConcerns.concernsList[2].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line mb-4">
                {ledLightTherapyConcerns.concernsList[2].description}
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                Patients dealing with pigmentation concerns are better served starting with a proper assessment through our <Link href="/dermatology-clinic-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Dermatology Clinic in JVC</Link>, where a more targeted treatment plan can be discussed.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {ledLightTherapyConcerns.concernsList[3].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line mb-4">
                {ledLightTherapyConcerns.concernsList[3].description}
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                For patients looking for a broader rejuvenation approach, it can be worth discussing how LED therapy compares with our dedicated <Link href="/treatments/skin-rejuvenation-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Skin Rejuvenation</Link> service during a consultation.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h3 className="text-2xl font-serif mb-4 text-[rgb(26,26,26)]">
                {ledLightTherapyConcerns.concernsList[4].title}
              </h3>
              <p className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
                {ledLightTherapyConcerns.concernsList[4].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Suitability & Medical Assessment */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Who May Consider */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                SUITABILITY
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Consider LED Light Therapy?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                {ledLightTherapySuitability.introduction}
              </p>
              <ul className="space-y-3 mb-6">
                {ledLightTherapySuitability.rightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {ledLightTherapySuitability.rightForFooter}
              </p>
            </div>

            {/* Who May Need a Medical Assessment First */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                IMPORTANT CONSIDERATIONS
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Need a Medical Assessment First?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                There are situations where seeing a qualified professional before considering LED therapy is especially important:
              </p>
              <ul className="space-y-3 mb-6">
                {ledLightTherapySuitability.notRightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#B69769' }}>!</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                If any of the above apply to you, the right first step is a consultation — either at our <Link href="/skin-clinic-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Skin Clinic in JVC</Link> or <Link href="/dermatology-clinic-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Dermatology Clinic in JVC</Link> — rather than booking LED therapy directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Photosensitivity and Safety Considerations */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {ledLightTherapyPhotosensitivity.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
            {ledLightTherapyPhotosensitivity.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
            {ledLightTherapyPhotosensitivity.description}
          </p>
          {ledLightTherapyPhotosensitivity.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Section 7: What Happens During a Session */}
      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={ledLightTherapyAppointment.label}
        title={ledLightTherapyAppointment.title}
        description={ledLightTherapyAppointment.description}
        contentSections={ledLightTherapyAppointment.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: ledLightTherapyAppointment.image,
          altText: ledLightTherapyAppointment.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={ledLightTherapyAppointment.caption}
      />

      {/* Section 8: Sensation */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={ledLightTherapySensation.label}
        title={ledLightTherapySensation.title}
        contentSections={[
          { subtitle: '', description: ledLightTherapySensation.description }
        ]}
        sidebar={{
          image: ledLightTherapySensation.image,
          altText: ledLightTherapySensation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={ledLightTherapySensation.caption}
      />

      {/* Section 9: Downtime & Aftercare */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Downtime */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyDowntime.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyDowntime.title}
            </h2>
            {ledLightTherapyDowntime.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* Aftercare */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyAftercare.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyAftercare.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {ledLightTherapyAftercare.description}
            </p>
            <ul className="space-y-3 mb-6">
              {ledLightTherapyAftercare.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyAftercare.footer}
            </p>
          </div>
        </div>
      </div>

      {/* Section 10: Results & Sessions Expectations */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Results Timeline */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {ledLightTherapyResultsTime.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyResultsTime.description}
            </p>
          </div>

          {/* Sessions Needed */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {ledLightTherapySessionsNeeded.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {ledLightTherapySessionsNeeded.description}
            </p>
            <ul className="space-y-3 mb-6">
              {ledLightTherapySessionsNeeded.factors.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>•</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapySessionsNeeded.footer}
            </p>
          </div>

          {/* Realistic Expectations */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {ledLightTherapyExpectations.title}
            </h3>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
              {ledLightTherapyExpectations.supportText}
            </p>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
              {ledLightTherapyExpectations.notAddressText}
            </p>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyExpectations.variationText}
            </p>
          </div>
        </div>
      </div>

      {/* Section 11: Clinical Standards & Combination Plans */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyBeforeAfter.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyBeforeAfter.title}
            </h2>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyBeforeAfter.description}
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyCombination.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyCombination.title}
            </h2>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyCombination.description}
            </p>
          </div>
        </div>
      </div>

      {/* Section 12: Comparison Table & Treatment Comparisons */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {ledLightTherapyComparisons.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {ledLightTherapyComparisons.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {ledLightTherapyComparisons.description}
          </p>

          {/* Comparison Table */}
          <div className="mb-16">
            <h4 className="text-lg font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyComparisons.comparisonTable.header}
            </h4>
            <div className="overflow-hidden rounded-2xl border border-[#E5DFD3]">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: '#F5F0E8' }}>
                    {ledLightTherapyComparisons.comparisonTable.columns.map((c, i) => (
                      <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ledLightTherapyComparisons.comparisonTable.rows.map((row, ri) => (
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
              {ledLightTherapyComparisons.comparisonTable.footer}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="space-y-8 mb-8">
            {ledLightTherapyComparisons.comparisons.map((c, idx) => (
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

          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed max-w-4xl">
            A dermatology assessment through our <Link href="/treatments/chemical-peel-dubai" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Chemical Peel</Link> or <Link href="/treatments/skin-rejuvenation-jvc" className="text-[rgb(160,113,63)] underline font-semibold hover:opacity-80">Skin Rejuvenation</Link> services can help clarify which approach fits your goals.
          </p>
        </div>
      </div>

      {/* Section 13: Gender, Cost & Choosing a Clinic */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Gender */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyGender.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {ledLightTherapyGender.title}
            </h2>
            {ledLightTherapyGender.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* Cost */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyCost.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {ledLightTherapyCost.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6 max-w-3xl">
              {ledLightTherapyCost.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {ledLightTherapyCost.factors.map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-[#FAF7F2] border border-[#E5DFD3] text-sm text-[rgb(26,26,26)] flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyCost.footer}
            </p>
          </div>

          {/* How to Choose a Clinic */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {ledLightTherapyChoosingClinic.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {ledLightTherapyChoosingClinic.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {ledLightTherapyChoosingClinic.description}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {ledLightTherapyChoosingClinic.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">Questions to Ask Before Booking</h4>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {ledLightTherapyChoosingClinic.questionsToAsk.map((q, i) => (
                <div key={i} className="rounded-xl p-4 bg-[#FAF7F2] border border-[#E5DFD3] text-sm text-[rgb(26,26,26)] flex gap-3 items-center">
                  <span className="text-[rgb(160,113,63)] font-bold">?</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)] text-[#DC2626]">Red Flags to Watch For</h4>
            <ul className="space-y-2 mb-6">
              {ledLightTherapyChoosingClinic.redFlags.map((flag, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#DC2626' }}>!</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {ledLightTherapyChoosingClinic.footer}
            </p>
          </div>
        </div>
      </div>

      {/* Location Sections */}
      <ContentWithSidebar
        bgColor="bg-white"
        label="LOCAL ACCESSIBILITY"
        title={ledLightTherapyWhyJvc.title}
        contentSections={[
          { subtitle: '', description: ledLightTherapyWhyJvc.description }
        ]}
        sidebar={{
          image: ledLightTherapyWhyJvc.image,
          altText: ledLightTherapyWhyJvc.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={ledLightTherapyWhyJvc.caption}
      />

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label="OUR LOCATION"
        title={ledLightTherapyLocation.title}
        contentSections={[
          { subtitle: '', description: ledLightTherapyLocation.address }
        ]}
        sidebar={{
          image: ledLightTherapyLocation.image,
          altText: ledLightTherapyLocation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={ledLightTherapyLocation.caption}
      />

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {ledLightTherapySummary.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
            {ledLightTherapySummary.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {ledLightTherapySummary.description}
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ
        bgColor="bg-white"
        label="FAQ"
        title="Frequently Asked Questions About LED Light Therapy"
        description="Answers to common questions about LED Light Therapy, wavelengths, acne support, redness reduction, downtime, safety, and cost in JVC, Dubai."
        faqs={ledLightTherapyFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc" },
          { text: "Skin Clinic in JVC", href: "/skin-clinic-jvc" },
          { text: "Acne Treatment in JVC", href: "/conditions/acne-treatment-jvc" },
          { text: "Skin Rejuvenation in JVC", href: "/treatments/skin-rejuvenation-jvc" }
        ]}
      />

      <TreatmentLocation
        bgColor="bg-[#FAF7F2]"
        label="GET IN TOUCH"
        title="Book an LED Light Therapy Consultation at Vedara Care Polyclinic"
        address="For patients across JVC and wider Dubai researching non-invasive light-based skincare options, LED Light Therapy is offered at Vedara Care Polyclinic following an individual skin assessment by qualified professionals, delivered locally in JVC without needing to travel elsewhere in Dubai."
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about LED Light Therapy at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Sunday", time: "9:00 AM – 10:00 PM" },
        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle roundabout, accessible from Hessa Street and Al Khail Road"
        ]}
        buttonText="Book a Consultation"
      />

      <MedicalDisclaimer text={ledLightTherapyCTA.disclaimer} />

      <FinalCTA
        title={ledLightTherapyCTA.title}
        description={ledLightTherapyCTA.description}
        address={ledLightTherapyCTA.address}
        button1Text={ledLightTherapyCTA.button1Text}
        button1TextHref={ledLightTherapyCTA.button1TextHref}
        button2Text={ledLightTherapyCTA.button2Text}
        button2TextHref={ledLightTherapyCTA.button2TextHref}
      />

      <RelatedPages {...ledLightTherapyRelatedPages} />
    </>
  );
};

export default LEDLightTherapyJVC;
