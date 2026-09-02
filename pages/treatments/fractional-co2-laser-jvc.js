import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  co2LaserHero,
  co2LaserIntro,
  co2LaserSkinConcerns,
  co2LaserPersonalised,
  co2LaserSession,
  co2LaserRecovery,
  co2LaserBeforeAfter,
  co2LaserSuitability,
  co2LaserLimitations,
  co2LaserSideEffects,
  co2LaserCombinations,
  co2LaserSessionsNeeded,
  co2LaserPricing,
  co2LaserInsurance,
  co2LaserResults,
  co2LaserSpecialists,
  co2LaserFAQ,
  co2LaserLocation,
  co2LaserWhyJvc,
  co2LaserCTA,
  co2LaserRelatedPages,
  co2LaserAssessment,
} from "../../data/fractionalCO2LaserData";

const FractionalCO2Laser = () => {
  const currentUrl = "https://vedaracare.ae/treatments/fractional-co2-laser-jvc/";
  const publishedDate = "2026-08-21T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Fractional CO2 Laser Treatment",
      "url": currentUrl,
      "description": "Fractional CO2 laser is a form of laser skin resurfacing that treats the skin in a grid-like pattern, commonly used for acne scarring, textural concerns, sun damage, and certain types of surgical or trauma-related scarring.",
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
      "name": "Fractional CO2 Laser in JVC",
      "url": currentUrl,
      "description": "Fractional CO2 laser in JVC at Vedara Care Polyclinic. Dermatology-led skin resurfacing for acne scars, texture and fine lines. Book a consultation to learn more.",
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
          "name": "Fractional CO2 Laser in JVC",
          "item": currentUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": co2LaserFAQ.faqs.map(faq => ({
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
        <title>Fractional CO2 Laser in JVC | Vedara Care Dubai</title>
        <meta name="description" content="Fractional CO2 laser in JVC at Vedara Care Polyclinic. Dermatology-led skin resurfacing for acne scars, texture and fine lines. Book a consultation to learn more." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/fractional-co2-laser-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Fractional CO2 Laser in JVC | Vedara Care Dubai" />
        <meta property="og:description" content="Fractional CO2 laser in JVC at Vedara Care Polyclinic. Dermatology-led skin resurfacing for acne scars, texture and fine lines. Book a consultation." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/fractional-co2-laser-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fractional CO2 Laser in JVC | Vedara Care Dubai" />
        <meta name="twitter:description" content="Fractional CO2 laser in JVC at Vedara Care Polyclinic. Dermatology-led skin resurfacing for acne scars, texture and fine lines." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/fractional-co2-laser-jvc-dubai.jpg" />
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

      {/* Section 2: Hero */}
      <AyurvedaHero {...co2LaserHero} />

      {/* Section 3: Quick Answer */}
      <AyurvedaIntro {...co2LaserIntro} />

      {/* Section 4: Skin Concerns We May Treat */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserSkinConcerns.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserSkinConcerns.title}
          </h2>
          <div className="space-y-8">
            {co2LaserSkinConcerns.concernsList.map((concern, idx) => (
              <div key={idx} className="rounded-2xl p-6 md:p-8 bg-white border border-[#E5DFD3]">
                <h3 className="text-xl font-serif mb-3 text-[rgb(26,26,26)]">{concern.title}</h3>
                <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-3">
                  {concern.description}
                </p>
                {concern.expectation && (
                  <p className="text-sm italic text-[rgb(160,113,63)] leading-relaxed">
                    {concern.expectation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Personalised Treatment */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={co2LaserPersonalised.label}
        title={co2LaserPersonalised.title}
        contentSections={co2LaserPersonalised.sections.map(s => ({
          subtitle: s.subtitle,
          description: s.description
        }))}
        sidebar={{
          image: "/images/pre-treatment-skin-prep-dubai.webp",
          altText: "Skin preparation before laser resurfacing at Vedara Care",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
      />

      {/* Section 6: What Happens During a Session */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserSession.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[rgb(26,26,26)]">
            {co2LaserSession.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {co2LaserSession.steps.map((step, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E5DFD3] shadow-sm">
                <div className="w-11 h-11 rounded-full mb-5 flex items-center justify-center text-white font-serif text-base" style={{ backgroundColor: '#C9A55A' }}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-serif mb-3 text-[rgb(26,26,26)]">{step.step}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 7: Recovery */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={co2LaserRecovery.label}
        title={co2LaserRecovery.title}
        contentSections={[
          { subtitle: '', description: co2LaserRecovery.description },
          ...co2LaserRecovery.timeline.map(t => ({
            subtitle: t.phase,
            description: t.description
          }))
        ]}
        sidebar={{
          image: "/images/laser-resurfacing-aftercare-jvc.webp",
          altText: "Aftercare guidance following fractional laser resurfacing",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
        footer={co2LaserRecovery.footer}
      />

      {/* Section 8: Before and After */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserBeforeAfter.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserBeforeAfter.title}
          </h2>
          {co2LaserBeforeAfter.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4 max-w-3xl">
              {p}
            </p>
          ))}

        </div>
      </div>

      {/* Section 9 & 10: Suitability */}
      <section className="bg-[#FEFDFC] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Who May Be Suitable */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {co2LaserSuitability.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                {co2LaserSuitability.title}
              </h2>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
                {co2LaserSuitability.description}
              </p>
              <ul className="space-y-2">
                {co2LaserSuitability.suitableFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who May Not Be Suitable */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                IMPORTANT CONSIDERATIONS
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Not Be Suitable?
              </h2>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
                {co2LaserSuitability.notSuitableTitle}
              </p>
              <ul className="space-y-2">
                {co2LaserSuitability.notSuitableFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white bg-[rgb(107,107,107)]">✕</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed mt-6">
                {co2LaserSuitability.footer}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 10: Limitations */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserLimitations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserLimitations.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {co2LaserLimitations.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {co2LaserLimitations.limitations.map((item, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
                <h3 className="text-lg font-serif mb-3 text-[rgb(26,26,26)]">{item.concern}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 11: Side Effects */}
      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={co2LaserSideEffects.label}
        title={co2LaserSideEffects.title}
        contentSections={[
          { subtitle: '', description: co2LaserSideEffects.description },
          {
            subtitle: 'Temporary effects',
            description: co2LaserSideEffects.temporaryEffects.join(' · ')
          },
          {
            subtitle: 'Less common complications',
            description: co2LaserSideEffects.rareEffectsIntro
          },
          {
            subtitle: 'Safety note',
            description: co2LaserSideEffects.safetyNote
          }
        ]}
        sidebar={{
          image: "/images/fractional-co2-laser-safety-considerations-jvc.webp",
          altText: "Fractional CO2 laser side effects and safety considerations",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
      />

      {/* Section 12: Combinations */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserCombinations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserCombinations.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-8 max-w-3xl leading-relaxed">
            {co2LaserCombinations.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {co2LaserCombinations.combinations.map((item, i) => (
              <div key={i} className="rounded-xl py-5 px-5 bg-[#FAF7F2] border border-[#E5DFD3] flex items-start gap-3">
                <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {co2LaserCombinations.footer}
          </p>
        </div>
      </div>

      {/* Section 13: Sessions Needed */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={co2LaserSessionsNeeded.label}
        title={co2LaserSessionsNeeded.title}
        contentSections={[
          { subtitle: '', description: co2LaserSessionsNeeded.description },
          ...co2LaserSessionsNeeded.factors.map((f, i) => ({
            subtitle: '',
            description: `• ${f}`
          }))
        ]}
        sidebar={{
          image: "/images/co2-laser-treatment-session-jvc.webp",
          altText: "Dermatologist performing laser skin resurfacing treatment at JVC clinic",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={co2LaserSessionsNeeded.footer}
      />

      {/* Section 14: Pricing */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserPricing.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserPricing.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-8 max-w-3xl leading-relaxed">
            {co2LaserPricing.description}
          </p>
          <div className="overflow-hidden rounded-2xl border border-[#E5DFD3] mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#F5F0E8' }}>
                  {co2LaserPricing.pricingTable.columns.map((c, i) => (
                    <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {co2LaserPricing.pricingTable.rows.map((row, ri) => (
                  <tr key={ri} className="border-b last:border-0 border-[#E5DFD3]" style={{ backgroundColor: ri % 2 ? '#FAF7F2' : '#FFFFFF' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-5 py-4 text-[rgb(107,107,107)] align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {co2LaserPricing.footer}
          </p>
        </div>
      </div>

      {/* Section 15: Insurance */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserInsurance.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserInsurance.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4 max-w-3xl">
            {co2LaserInsurance.description}
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4 max-w-3xl">
            {co2LaserInsurance.additionalInfo}
          </p>
          <p className="text-sm italic text-[rgb(107,107,107)] leading-relaxed">
            {co2LaserInsurance.footer}
          </p>
        </div>
      </div>

      {/* Section 16: Results */}
      {/* <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserResults.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserResults.title}
          </h2>
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3] max-w-2xl mx-auto">
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
              {co2LaserResults.testimonialPlaceholder}
            </p>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
              {co2LaserResults.photographyPlaceholder}
            </p>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {co2LaserResults.note}
            </p>
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed mt-6">
            {co2LaserResults.disclaimer}
          </p>
        </div>
      </div> */}

      {/* Section 17: Specialists */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {co2LaserSpecialists.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[rgb(26,26,26)]">
            {co2LaserSpecialists.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {co2LaserSpecialists.doctors.map((doc, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E5DFD3] shadow-sm">
                <h3 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">{doc.name}</h3>
                <div className="space-y-2 text-sm text-[rgb(107,107,107)]">
                  <p><span className="font-medium text-[rgb(26,26,26)]">Data shown as:</span> {doc.title}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Specialty:</span> {doc.specialty}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">DHA License:</span> {doc.dhaLicense}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Subspecialty:</span> {doc.subspecialty}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Languages:</span> {doc.languages}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Profile:</span> {doc.profileLink}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed mt-6">
            {co2LaserSpecialists.footer}
          </p>
        </div>
      </div>

      {/* Section 18: FAQ */}
      <FAQ
        bgColor="bg-white"
        label="FAQ"
        title="What Patients Ask Before Booking Fractional CO2 Laser in JVC"
        description="Answers to common questions about Fractional CO2 Laser treatment, suitability, recovery, results and cost in Dubai."
        faqs={co2LaserFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "RF Microneedling in JVC", href: "/treatments/rf-microneedling-jvc" },
          { text: "Microneedling in JVC", href: "/treatments/microneedling-jvc" },
          { text: "Carbon Laser Peel in JVC", href: "/treatments/carbon-laser-peel-jvc" },
          { text: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc" }
        ]}
      />



      {/* Section 20: Start With a Professional Skin Assessment */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {co2LaserAssessment.title}
          </h2>
          {co2LaserAssessment.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {p}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/book" className="px-8 py-4 bg-[#1A1A1A] text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
              Book a Dermatology Consultation
            </a>
            <a href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20Fractional%20CO2%20Laser%20Treatment%20at%20your%20JVC%20clinic." className="px-8 py-4 bg-white border border-[#E5DFD3] text-[#1A1A1A] text-sm font-semibold rounded-lg hover:bg-[#F5F0E8] transition-colors">
              WhatsApp Vedara Care
            </a>
          </div>
        </div>
      </section>

      <TreatmentLocation
        bgColor="bg-[#FFFFF]"
        label="GET IN TOUCH"
        title="Book a Fractional CO2 Laser Consultation at Vedara Care Polyclinic"
        address={co2LaserCTA.address}
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Fractional CO2 Laser Treatment at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Sunday", time: "9:00 AM – 10:00 PM" }
        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle roundabout, accessible from Hessa Street and Al Khail Road"
        ]}
        buttonText="Book a Consultation"
      />
      <section className="bg-[#F8F9FA] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">LOCAL ACCESSIBILITY</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">{co2LaserWhyJvc.title}</h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{co2LaserWhyJvc.description}</p>
          <p className="text-sm italic text-[rgb(107,107,107)]">{co2LaserWhyJvc.caption}</p>
        </div>
      </section>

      {/* <MedicalDisclaimer text={co2LaserCTA.disclaimer} /> */}

      {/* <FinalCTA
        bgColor='white'
        title={co2LaserCTA.title}
        description={co2LaserCTA.description}
        address={co2LaserCTA.address}
        button1Text={co2LaserCTA.button1Text}
        button1TextHref={co2LaserCTA.button1TextHref}
        button2Text={co2LaserCTA.button2Text}
        button2TextHref={co2LaserCTA.button2TextHref}
      /> */}

      <RelatedPages {...co2LaserRelatedPages} />
    </>
  );
};

export default FractionalCO2Laser;
