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
  jaluproHero,
  jaluproIntro,
  jaluproExplanation,
  jaluproHowItWorks,
  jaluproFormulations,
  jaluproConcerns,
  jaluproTreatmentAreas,
  jaluproSuitability,
  jaluproConsultation,
  jaluproAppointment,
  jaluproSensation,
  jaluproTiming,
  jaluproDowntime,
  jaluproAftercare,
  jaluproResultsTime,
  jaluproResults,
  jaluproLongevity,
  jaluproSessions,
  jaluproBeforeAfter,
  jaluproComparison,
  jaluproPricing,
  jaluproClinicChoice,
  jaluproLocation,
  jaluproWhyJvc,
  jaluproSummary,
  jaluproCTA,
  jaluproFAQ,
  jaluproRelatedPages,
} from "../../data/jaluproData";

const JaluproTreatment = () => {
  const currentUrl = "https://vedaracare.ae/treatments/jalupro-treatment-jvc/";
  const publishedDate = "2026-08-13T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Jalupro Treatment",
      "url": "https://vedaracare.ae/treatments/jalupro-treatment-jvc/",
      "description": "Jalupro Treatment is a family of injectable aesthetic treatments combining amino acids and hyaluronic acid, generally associated with skin hydration, biorevitalisation and skin quality rather than facial volume. Formulation, treatment areas and results depend on individual clinical assessment.",
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
      "name": "Jalupro Treatment in JVC",
      "url": "https://vedaracare.ae/treatments/jalupro-treatment-jvc/",
      "description": "Considering Jalupro Treatment in JVC? Learn how this amino-acid and hyaluronic acid injectable works, who it may suit, and book a consultation.",
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
          "name": "Jalupro Treatment in JVC",
          "item": "https://vedaracare.ae/treatments/jalupro-treatment-jvc/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": jaluproFAQ.faqs.map(faq => ({
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
      "@type": "ComparisonTable",
      "name": "Jalupro vs Profhilo",
      "about": "Side-by-side comparison between Jalupro (amino acid + hyaluronic acid injectable range) and Profhilo (product-specific skin hydration and bio-remodelling injectable) across formulation, focus, treatment area and planning dimensions.",
      "hasPart": jaluproComparison.comparisonTable.rows.map((row, i) => ({
        "@type": "Table",
        "name": `Jalupro vs Profhilo comparison — row ${i + 1}`,
        "about": `${row[0]}: ${row[1]} vs ${row[2]}`
      }))
    }
  ];

  const beforeBookingItems = [
    "Which Jalupro formulation is recommended for me? Should be based on your assessed skin, not a default product.",
    "Why is Jalupro suitable for my particular concern?",
    "What areas can be treated with the selected formulation?",
    "What results should I realistically expect?",
    "How many sessions might I need?",
    "How long may results last?",
    "What temporary side effects can occur?",
    "How much recovery time should I expect?",
    "What should I avoid before and after treatment?",
    "Who will perform my treatment?",
    "How can I verify the product being used?",
    "What alternatives may suit me?",
    "Can Jalupro be combined with another treatment?",
    "What is the current treatment cost?",
    "When should I contact the clinic with post-treatment concerns?"
  ];

  return (
    <>
      <Head>
        <title>Jalupro Treatment in JVC | Vedara Care Polyclinic</title>
        <meta name="description" content="Considering Jalupro Treatment in JVC? Learn how this amino-acid and hyaluronic acid injectable works, who it may suit, and book a consultation." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/jalupro-treatment-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Jalupro Treatment in JVC | Vedara Care Polyclinic" />
        <meta property="og:description" content="Considering Jalupro Treatment in JVC? Learn how this amino-acid and hyaluronic acid injectable works, who it may suit, and book a consultation at Vedara Care Polyclinic in JVC, Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/jalupro-treatment-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jalupro Treatment in JVC | Vedara Care Polyclinic" />
        <meta name="twitter:description" content="Considering Jalupro Treatment in JVC? Learn how this amino-acid and hyaluronic acid injectable works, who it may suit, and book a consultation at Vedara Care Polyclinic." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/jalupro-treatment-jvc-dubai.jpg" />
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

      <AyurvedaHero {...jaluproHero} />

      <AyurvedaIntro {...jaluproIntro} />

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={jaluproExplanation.label}
        title={jaluproExplanation.title}
        contentSections={[
          { subtitle: '', description: jaluproExplanation.description },
          ...jaluproExplanation.content.map(c => ({ subtitle: '', description: c }))
        ]}
        sidebar={{
          image: jaluproExplanation.image,
          altText: jaluproExplanation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={jaluproExplanation.caption}
      />

      <ContentWithSidebar
        bgColor="bg-white"
        label={jaluproHowItWorks.label}
        title={jaluproHowItWorks.title}
        contentSections={[
          { subtitle: '', description: jaluproHowItWorks.description },
          ...jaluproHowItWorks.points.map((p, i) => ({
            subtitle: `Point ${i + 1}`,
            description: p
          }))
        ]}
        sidebar={{
          image: "/images/hyaluronic-acid-amino-acid-injectable-mechanism.jpg",
          altText: "Amino acid and hyaluronic acid skin-quality injectable mechanism concept",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
      />

      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            PRODUCT RANGE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {jaluproFormulations.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {jaluproFormulations.description}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {jaluproFormulations.formulations.map((f, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E5DFD3] shadow-sm">
                <div className="w-11 h-11 rounded-full mb-5 flex items-center justify-center text-white font-serif text-base" style={{ backgroundColor: '#C9A55A' }}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-serif mb-3 text-[rgb(26,26,26)]">{f.name}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {jaluproFormulations.footer}
          </p>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-white"
        label={jaluproConcerns.label}
        title={jaluproConcerns.title}
        description={jaluproConcerns.description}
        contentSections={jaluproConcerns.concernsList.map(c => ({
          subtitle: c.title,
          description: c.description
        }))}
        sidebar={{
          image: "/images/skin-concerns-hydration-dullness-fine-lines-jalupro.jpg",
          altText: "Hydration, dullness, fine lines and skin-quality concerns commonly associated with Jalupro treatment discussions",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
      />

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {jaluproTreatmentAreas.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {jaluproTreatmentAreas.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-8 max-w-3xl leading-relaxed">
            {jaluproTreatmentAreas.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {["Face", "Neck", "Décolletage", "Hands"].map((area, i) => (
              <div key={i} className="rounded-xl py-6 px-4 text-center bg-white border border-[#E5DFD3]">
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F5F0E8' }}>
                  <span className="text-[rgb(160,113,63)] font-serif text-lg">{i + 1}</span>
                </div>
                <p className="text-sm font-medium text-[rgb(26,26,26)]">{area}</p>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {jaluproTreatmentAreas.note}
          </p>
        </div>
      </div>


      <section className="bg-[#FEFDFC] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Who May Consider Jalupro */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                SUITABILITY
              </p>

              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Consider Jalupro?
              </h2>

              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                Patients may look into Jalupro Treatment in JVC for improved skin
                hydration, better-looking skin quality and texture, a reduction in
                how noticeable certain fine lines appear, improvement in a dull
                complexion, addressing early signs of skin ageing, or a non-surgical
                approach to rejuvenation. Interest in these goals doesn’t
                automatically make someone an ideal candidate — that requires a
                proper clinical assessment.
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

              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                Situations where Jalupro may need to be postponed, avoided, or
                medically reviewed first can include, but are not limited to:
                active infection near the treatment area, open wounds or significant
                inflammation, relevant known allergies, certain bleeding or clotting
                conditions, medications affecting bruising or healing, pregnancy or
                breastfeeding where clinical advice is required, and other relevant
                medical conditions. This list is not exhaustive — only a qualified
                clinician can determine suitability.
              </p>
            </div>

          </div>
        </div>
      </section>


      <ContentWithSidebar
        bgColor="bg-white"
        label="PRE-TREATMENT ASSESSMENT"
        title={jaluproConsultation.title}
        contentSections={[
          { subtitle: '', description: jaluproConsultation.description }
        ]}
        sidebar={{
          image: "/images/skin-assessment-clinical-consultation-jalupro-dubai.jpg",
          altText: "Clinical skin assessment and consultation before injectable Jalupro treatment",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
      />

      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={jaluproAppointment.label}
        title={jaluproAppointment.title}
        description={jaluproAppointment.description}
        contentSections={jaluproAppointment.steps.map((step, idx) => {
          const parts = step.split(': ');
          return {
            subtitle: `Step ${idx + 1} — ${parts[0]}`,
            description: parts.slice(1).join(': ') || ''
          };
        })}
        sidebar={{
          image: jaluproAppointment.image,
          altText: jaluproAppointment.alt,
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
        footer={jaluproAppointment.footer}
      />

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproSensation.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproSensation.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproTiming.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproTiming.description}
            </p>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-3 uppercase">
              {jaluproDowntime.label}
            </p>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproDowntime.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {jaluproDowntime.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproAftercare.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproAftercare.description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-3 uppercase">
              EXPECTATIONS
            </p>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproResultsTime.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproResultsTime.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproResults.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproResults.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproLongevity.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproLongevity.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproSessions.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {jaluproSessions.description}
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {jaluproBeforeAfter.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {jaluproBeforeAfter.description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {jaluproComparison.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {jaluproComparison.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {jaluproComparison.intro}
          </p>

          {jaluproComparison.comparisonTable && (
            <div className="mb-16">
              <h4 className="text-lg font-serif mb-5 text-[rgb(26,26,26)]">
                {jaluproComparison.comparisonTable.header}
              </h4>
              <div className="overflow-hidden rounded-2xl border border-[#E5DFD3]">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#F5F0E8' }}>
                      {jaluproComparison.comparisonTable.columns.map((c, i) => (
                        <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {jaluproComparison.comparisonTable.rows.map((row, ri) => (
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
              <p className="text-xs text-[rgb(107,107,107)] mt-4 leading-relaxed">
                {jaluproComparison.comparisonTable.footer}
              </p>
            </div>
          )}

          <div className="space-y-10">
            {jaluproComparison.comparisons.map((c, idx) => (
              <div key={idx} className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
                <h4 className="text-xl font-serif mb-4 text-[rgb(26,26,26)]">{c.name}</h4>
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

      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {jaluproPricing.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
                {jaluproPricing.title}
              </h2>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
                {jaluproPricing.description}
              </p>
              <p className="text-sm italic text-[rgb(107,107,107)] leading-relaxed">
                {jaluproPricing.footer}
              </p>
            </div>
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3] shadow-sm">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {jaluproClinicChoice.label}
              </p>
              <h3 className="text-2xl font-serif mb-6 text-[rgb(26,26,26)]">
                {jaluproClinicChoice.title}
              </h3>
              <ul className="space-y-3">
                {jaluproClinicChoice.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed mt-6">
                {jaluproClinicChoice.footer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before booking */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-3 uppercase">
            Before Booking Jalupro
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[rgb(26,26,26)]">
            Questions to Ask Before Booking
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            It's worth going into a consultation with a short list of your own questions:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {beforeBookingItems.map((q) => (
            <div
              key={q}
              className="rounded-xl p-5 text-[13.5px] leading-relaxed flex gap-3 bg-[#FAF7F2] border border-[#E5DFD3] text-[rgb(26,26,26)]"
            >
              <span className="shrink-0 mt-0.5 text-[rgb(160,113,63)] font-bold">?</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </section>

      <FAQ
        bgColor="bg-white"
        label="FAQ"
        title="Frequently Asked Questions About Jalupro"
        description="Answers to common questions about Jalupro Treatment, formulations, suitability, results, recovery and cost in Dubai."
        faqs={jaluproFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Profhilo Treatment in JVC", href: "/treatments/profhilo-treatment-jvc" },
          { text: "Skin Boosters in JVC", href: "/treatments/skin-boosters-jvc" },
          { text: "HydraFacial in JVC", href: "/treatments/hydrafacial-jvc" },
          { text: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc" }
        ]}
      />

      <section className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">OUR LOCATION</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">{jaluproLocation.title}</h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{jaluproLocation.address}</p>
          <p className="text-sm italic text-[rgb(107,107,107)]">{jaluproLocation.caption}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">LOCAL ACCESSIBILITY</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">{jaluproWhyJvc.title}</h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{jaluproWhyJvc.description}</p>
          <p className="text-sm italic text-[rgb(107,107,107)]">{jaluproWhyJvc.caption}</p>
        </div>
      </section>

      <TreatmentLocation
        bgColor="bg-[#FAF7F2]"
        label="GET IN TOUCH"
        title="Book a Jalupro Consultation at Vedara Care Polyclinic"
        address={jaluproSummary.description}
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Jalupro Treatment at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Sunday", time: "9:00 AM – 10:00 PM" },

        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle roundabout, accessible from Hessa Street and Al Khail Road"
        ]}
        buttonText="Book a Consultation"
      />

      <MedicalDisclaimer text={jaluproCTA.disclaimer} />

      <FinalCTA
        title={jaluproCTA.title}
        description={jaluproCTA.description}
        address={jaluproCTA.address}
        button1Text={jaluproCTA.button1Text}
        button1TextHref={jaluproCTA.button1TextHref}
        button2Text={jaluproCTA.button2Text}
        button2TextHref={jaluproCTA.button2TextHref}
      />

      <RelatedPages {...jaluproRelatedPages} />
    </>
  );
};

export default JaluproTreatment;