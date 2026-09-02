import Head from "next/head";
import AyurvedaHero from "../../components/ayurveda/AyurvedaHero";
import AyurvedaIntro from "../../components/ayurveda/AyurvedaIntro";
import ContentWithSidebar from "../../components/ayurveda/ContentWithSidebar";
import FAQ from "../../components/home/FAQ";
import TreatmentLocation from "../../components/ayurveda/TreatmentLocation";
import FinalCTA from "../../components/ayurveda/FinalCTA";
import MedicalDisclaimer from "../../components/ayurveda/MedicalDisclaimer";
import RelatedPages from "../../components/ayurveda/RelatedPages";

import {
  pigmentationHero,
  pigmentationIntro,
  pigmentationTypes,
  pigmentationDiagnosis,
  pigmentationProcess,
  pigmentationRecovery,
  pigmentationBeforeAfter,
  pigmentationSuitability,
  pigmentationLimitations,
  pigmentationSideEffects,
  pigmentationCombinations,
  pigmentationSessionsNeeded,
  pigmentationResultsTimeline,
  pigmentationPricing,
  pigmentationInsurance,
  pigmentationResults,
  pigmentationSpecialists,
  pigmentationFAQ,
  pigmentationLocation,
  pigmentationAssessment,
  pigmentationRelatedPages,
  pigmentationCTA
} from "../../data/laserPigmentationData";

const LaserPigmentationRemoval = () => {
  return (
    <>
      <Head>
        <title>Laser Pigmentation Removal in JVC | Vedara Care</title>
        <meta name="description" content="Laser pigmentation removal in JVC at Vedara Care. Dermatologist-led assessment for dark spots, sun damage and uneven tone. Book a consultation in Dubai." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/laser-pigmentation-removal-jvc" />
        <meta property="og:title" content="Laser Pigmentation Removal in JVC | Vedara Care" />
        <meta property="og:description" content="Laser pigmentation removal in JVC at Vedara Care. Dermatologist-led assessment for dark spots, sun damage and uneven tone. Book a consultation in Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/laser-pigmentation-removal-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/laser-pigmentation-removal-jvc" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laser Pigmentation Removal in JVC | Vedara Care" />
        <meta name="twitter:description" content="Laser pigmentation removal in JVC at Vedara Care. Dermatologist-led assessment for dark spots, sun damage and uneven tone. Book a consultation in Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/laser-pigmentation-removal-jvc.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalWebPage", "MedicalProcedure"],
              "name": "Laser Pigmentation Removal in JVC | Vedara Care",
              "url": "https://www.vedaracare.com/treatments/laser-pigmentation-removal-jvc",
              "description": "Laser pigmentation removal in JVC at Vedara Care. Dermatologist-led assessment for dark spots, sun damage and uneven tone.",
              "reviewedBy": {
                "@type": "Person",
                "name": "[VERIFIED DERMATOLOGIST NAME]",
                "jobTitle": "Consultant Dermatologist",
                "worksFor": {
                  "@type": "MedicalClinic",
                  "name": "Vedara Care Polyclinic"
                }
              },
              "lastReviewed": "2026-08",
              "audience": {
                "@type": "Patient"
              },
              "about": {
                "@type": "MedicalProcedure",
                "name": "Laser Pigmentation Removal",
                "procedureType": "https://schema.org/NoninvasiveProcedure",
                "bodyLocation": "Skin",
                "howPerformed": "A dermatologist assesses the pigmentation type and skin type before selecting an appropriate laser or light-based device to target excess pigment, which the body then clears gradually.",
                "preparation": "Sun avoidance, pigmentation history review and a dermatologist assessment to confirm suitability before treatment.",
                "followup": "Sun protection, gentle skincare and a scheduled follow-up review as advised by the treating clinician.",
                "provider": {
                  "@type": "MedicalClinic",
                  "name": "Vedara Care Polyclinic",
                  "url": "https://www.vedaracare.com"
                }
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": pigmentationFAQ.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.vedaracare.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Treatments",
                  "item": "https://www.vedaracare.com/treatments"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Laser Pigmentation Removal in JVC",
                  "item": "https://www.vedaracare.com/treatments/laser-pigmentation-removal-jvc"
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Vedara Care Polyclinic",
              "image": "https://www.vedaracare.com/images/vedara-care-jvc-clinic-exterior.webp",
              "url": "https://www.vedaracare.com",
              "telephone": "+971555736312",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop-4",
                "addressLocality": "Jumeirah Village Circle (JVC)",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[VERIFY]",
                "longitude": "[VERIFY]"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "08:30",
                "closes": "23:30"
              },
              "medicalSpecialty": "Dermatology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Vedara Care Dermatology - Laser Pigmentation Removal"
              }
            })
          }}
        />
      </Head>

      <AyurvedaHero {...pigmentationHero} />

      <AyurvedaIntro {...pigmentationIntro} />

      {/* Types of Pigmentation */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block ">
            {pigmentationTypes.label}
          </p>
          <h2 className="text-3xl md:text-4xl mt-5 font-serif mb-6 text-[rgb(26,26,26)]">
            {pigmentationTypes.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {pigmentationTypes.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {pigmentationTypes.typesList.map((item, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
                <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">{item.subtitle}</p>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6 whitespace-pre-line">{item.description}</p>
                <div className="bg-white p-4 rounded-xl border border-[#E5DFD3]">
                  <p className="text-sm font-medium text-[rgb(26,26,26)]">{item.expectation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagnosis First */}
      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={pigmentationDiagnosis.label}
        title={pigmentationDiagnosis.title}
        contentSections={pigmentationDiagnosis.sections.map(s => ({
          subtitle: s.subtitle,
          description: s.description
        }))}
        sidebar={{
          image: "/images/dermatologist-pigmentation-assessment-dubai.webp",
          altText: "Dermatologist assessing pigmentation type before treatment",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
        footer={pigmentationDiagnosis.quote}
      />

      {/* Treatment Process */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pigmentationProcess.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[rgb(26,26,26)]">
            {pigmentationProcess.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              {pigmentationProcess.steps.map((step, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#C9A55A]" />
                  <h3 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{step.step}</h3>
                  <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <img
                src="/images/laser-pigmentation-treatment-session-jvc.webp"
                alt="Laser device used during pigmentation treatment session"
                className="w-full rounded-2xl border border-[#E5DFD3]"
              />

            </div>
          </div>
        </div>
      </div>

      {/* Recovery */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={pigmentationRecovery.label}
        title={pigmentationRecovery.title}
        contentSections={pigmentationRecovery.timeline.map(t => ({
          subtitle: t.phase,
          description: t.description
        }))}
        sidebar={{
          image: "/images/post-laser-pigmentation-aftercare-jvc.webp",
          altText: "Aftercare guidance following pigmentation laser treatment",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
        footer={pigmentationRecovery.footer}
      />

      {/* Before and After */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pigmentationBeforeAfter.label}
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pigmentationBeforeAfter.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {pigmentationBeforeAfter.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base text-[rgb(107,107,107)] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <div>
              <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E5DFD3] h-[300px]">
                <img
                  src="/images/laser.webp"
                  alt="Laser pigmentation treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suitability */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pigmentationSuitability.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {pigmentationSuitability.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] mb-6 leading-relaxed">
              {pigmentationSuitability.description}
            </p>
            <ul className="space-y-3 mb-8">
              {pigmentationSuitability.suitableFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[rgb(107,107,107)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A55A] mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-white rounded-2xl p-8 border border-[#E5DFD3] mt-8 md:mt-16">
              <p className="text-base font-semibold text-[rgb(26,26,26)] mb-6">
                {pigmentationSuitability.notSuitableTitle}
              </p>
              <ul className="space-y-3">
                {pigmentationSuitability.notSuitableFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[rgb(107,107,107)]">
                    <span className="text-[rgb(160,113,63)] mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Boundaries */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pigmentationLimitations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pigmentationLimitations.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-8 max-w-3xl leading-relaxed">
            {pigmentationLimitations.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {pigmentationLimitations.limitations.map((limit, i) => (
              <div key={i} className="rounded-xl py-5 px-5 bg-[#FAF7F2] border border-[#E5DFD3] flex items-start gap-3">
                <span className="text-[rgb(160,113,63)] mt-0.5 text-lg leading-none">×</span>
                <div>
                  <span className="font-semibold text-[rgb(26,26,26)] text-sm">{limit.concern}</span>
                  {limit.explanation && <span className="text-sm text-[rgb(107,107,107)] leading-relaxed"> — {limit.explanation}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {pigmentationLimitations.footer}
          </p>
        </div>
      </div>

      {/* Safety */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={pigmentationSideEffects.label}
        title={pigmentationSideEffects.title}
        contentSections={[
          { subtitle: '', description: pigmentationSideEffects.description },
          ...pigmentationSideEffects.temporaryEffects.map(e => ({
            subtitle: '',
            description: `• ${e}`
          }))
        ]}
        sidebar={{
          image: "/images/vedara-care-dermatology-treatment-room-jvc.webp",
          altText: "Dermatology treatment room at Vedara Care Polyclinic",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
        footer={`${pigmentationSideEffects.rareEffectsIntro}\n\n${pigmentationSideEffects.safetyNote}`}
      />

      {/* Combinations */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pigmentationCombinations.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pigmentationCombinations.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-8 max-w-3xl leading-relaxed">
            {pigmentationCombinations.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {pigmentationCombinations.combinations.map((item, i) => (
              <div key={i} className="rounded-xl py-5 px-5 bg-[#FAF7F2] border border-[#E5DFD3] flex items-start gap-3">
                <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {pigmentationCombinations.footer}
          </p>
        </div>
      </div>

      {/* Sessions Needed & Timeline */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pigmentationSessionsNeeded.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {pigmentationSessionsNeeded.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] mb-6 leading-relaxed">
              {pigmentationSessionsNeeded.description}
            </p>
            <ul className="space-y-3 mb-8">
              {pigmentationSessionsNeeded.factors.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[rgb(107,107,107)]">
                  <span className="text-[rgb(160,113,63)] mt-0.5">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {pigmentationSessionsNeeded.footer}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pigmentationResultsTimeline.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {pigmentationResultsTimeline.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] mb-6 leading-relaxed">
              {pigmentationResultsTimeline.description}
            </p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pigmentationPricing.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pigmentationPricing.title}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[#E5DFD3] mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: '#F5F0E8' }}>
                  {pigmentationPricing.pricingTable.columns.map((c, i) => (
                    <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pigmentationPricing.pricingTable.rows.map((row, ri) => (
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
            {pigmentationPricing.footer}
          </p>
        </div>
      </div>



      {/* Specialists */}
      {/* <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pigmentationSpecialists.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[rgb(26,26,26)]">
            {pigmentationSpecialists.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pigmentationSpecialists.doctors.map((doc, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3] shadow-sm">
                <h3 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">{doc.name}</h3>
                <div className="space-y-2 text-sm text-[rgb(107,107,107)]">
                  <p><span className="font-medium text-[rgb(26,26,26)]">Data shown as:</span> {doc.title}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Qualification:</span> {doc.specialty}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">DHA License:</span> {doc.dhaLicense}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Pigmentation expertise:</span> {doc.subspecialty}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Languages:</span> {doc.languages}</p>
                  <p><span className="font-medium text-[rgb(26,26,26)]">Profile:</span> {doc.profileLink}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed mt-6">
            {pigmentationSpecialists.footer}
          </p>
        </div>
      </div> */}

      {/* FAQ */}
      <FAQ
        bgColor="bg-[#F5F0E8]"
        label="FAQ"
        title="What Patients Ask Before Booking Laser Pigmentation Removal in JVC"
        description="Answers to common questions about laser pigmentation removal, suitability, recovery, and results in Dubai."
        faqs={pigmentationFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={pigmentationRelatedPages.pages.slice(0, 4).map(p => ({
          text: p.title,
          href: p.href
        }))}
      />


      {/* Assessment section */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pigmentationAssessment.title}
          </h2>
          {pigmentationAssessment.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {p}
            </p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/book" className="px-8 py-4 bg-[#1A1A1A] text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
              Book a Dermatology Consultation
            </a>
            <a href="https://wa.me/971555736312" className="px-8 py-4 bg-white border border-[#E5DFD3] text-[#1A1A1A] text-sm font-semibold rounded-lg hover:bg-[#F5F0E8] transition-colors">
              WhatsApp Vedara Care
            </a>
          </div>
        </div>
      </section>

      <TreatmentLocation
        bgColor="bg-white"
        label="GET IN TOUCH"
        title="Book a Pigmentation Consultation at Vedara Care Polyclinic"
        address="Al Barsha South Fourth, Binghatti Azure, Shop 4, JVC, Dubai, UAE"
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Laser Pigmentation Removal at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Sunday", time: "9:00 AM – 10:00 PM" }
        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle Mall, accessible from Sheikh Mohammed Bin Zayed Road and Al Khail Road"
        ]}
        buttonText="Book a Consultation"
      />

      <MedicalDisclaimer text={pigmentationCTA.disclaimer || "This page is for informational purposes only and does not constitute medical advice. All treatments carry risks and benefits that should be discussed with a qualified healthcare professional. Results vary between individuals. Vedara Care Polyclinic is a DHA-licensed facility."} />

      <FinalCTA
        title={pigmentationCTA.title}
        description={pigmentationCTA.description}
        address={pigmentationCTA.address}
        button1Text={pigmentationCTA.button1Text}
        button1TextHref={pigmentationCTA.button1TextHref}
        button2Text={pigmentationCTA.button2Text}
        button2TextHref={pigmentationCTA.button2TextHref}
      />

      <RelatedPages {...pigmentationRelatedPages} />
    </>
  );
};

export default LaserPigmentationRemoval;
