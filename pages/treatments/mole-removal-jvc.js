import Head from "next/head";
import AyurvedaHero from "../../components/ayurveda/AyurvedaHero";
import AyurvedaIntro from "../../components/ayurveda/AyurvedaIntro";
import ContentWithSidebar from "../../components/ayurveda/ContentWithSidebar";
import FinalCTA from "../../components/ayurveda/FinalCTA";
import MedicalDisclaimer from "../../components/ayurveda/MedicalDisclaimer";
import RelatedPages from "../../components/ayurveda/RelatedPages";
import FAQ from "../../components/home/FAQ";
import TreatmentLocation from "../../components/ayurveda/TreatmentLocation";
import PricingSection from "../../components/ayurveda/PricingSection";
import {
  moleRemovalMeta,
  moleRemovalHero,
  moleRemovalQuickAnswer,
  moleRemovalWhatIs,
  moleRemovalWhenToAssess,
  moleRemovalWhyConsider,
  moleRemovalAssessmentFirst,
  moleRemovalTypes,
  moleRemovalMethods,
  moleRemovalLaserWarning,
  moleRemovalProcess,
  moleRemovalPreparation,
  moleRemovalSensation,
  moleRemovalRecovery,
  moleRemovalScarring,
  moleRemovalExpectations,
  moleRemovalBeforeAfterInfo,
  moleRemovalCandidates,
  moleRemovalInvestigation,
  moleRemovalSafety,
  moleRemovalDarkerSkin,
  moleRemovalFacial,
  moleRemovalCare,
  moleRemovalLaboratory,
  moleRemovalPricing,
  moleRemovalInsurance,
  moleRemovalOutcomes,
  moleRemovalDoctors,
  moleRemovalFAQ,
  moleRemovalLocation,
  moleRemovalCTA,
  moleRemovalRelatedPages
} from "../../data/moleRemovalJvcData";

const MoleRemovalJVC = () => {
  return (
    <>
      <Head>
        <title>{moleRemovalMeta.title}</title>
        <meta name="description" content={moleRemovalMeta.description} />
        <link rel="canonical" href={moleRemovalMeta.canonical} />
        <meta property="og:title" content={moleRemovalMeta.ogTitle} />
        <meta property="og:description" content={moleRemovalMeta.ogDescription} />
        <meta property="og:url" content={moleRemovalMeta.ogUrl} />

        {/* Schema based on requirements */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalWebPage",
                  "@id": "https://www.vedaracare.com/treatments/mole-removal-jvc/#webpage",
                  "url": "https://www.vedaracare.com/treatments/mole-removal-jvc/",
                  "name": "Mole Removal in JVC | Dermatologist-Led Care | Vedara Care",
                  "description": "Mole Removal in JVC at Vedara Care. DHA-licensed dermatologist assessment, safe removal techniques & aftercare in Dubai.",
                  "lastReviewed": "2026-08-01",
                  "reviewedBy": {
                    "@type": "Person",
                    "name": "[INSERT VERIFIED DERMATOLOGIST NAME]",
                    "jobTitle": "Dermatologist",
                    "worksFor": { "@id": "https://www.vedaracare.com/#organization" }
                  },
                  "about": {
                    "@type": "MedicalProcedure",
                    "name": "Mole Removal",
                    "alternateName": ["Mole Excision", "Nevus Removal", "Skin Lesion Removal"],
                    "procedureType": "https://schema.org/PercutaneousProcedure",
                    "bodyLocation": "Skin",
                    "preparation": "Consultation and dermatological assessment prior to treatment.",
                    "howPerformed": "Method determined following clinical assessment. [VERIFY BEFORE PUBLISHING]",
                    "followup": "Wound care guidance and, where applicable, a follow-up consultation.",
                    "risk": "Possible risks include bleeding, infection, scarring, pigment changes, and recurrence.",
                    "provider": { "@id": "https://www.vedaracare.com/#organization" }
                  },
                  "breadcrumb": { "@id": "https://www.vedaracare.com/treatments/mole-removal-jvc/#breadcrumb" },
                  "isPartOf": { "@id": "https://www.vedaracare.com/#website" }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.vedaracare.com/treatments/mole-removal-jvc/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedaracare.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.vedaracare.com/treatments/" },
                    { "@type": "ListItem", "position": 3, "name": "Mole Removal in JVC", "item": "https://www.vedaracare.com/treatments/mole-removal-jvc/" }
                  ]
                },
                {
                  "@type": ["MedicalClinic", "LocalBusiness"],
                  "@id": "https://www.vedaracare.com/#organization",
                  "name": "Vedara Care Polyclinic",
                  "url": "https://www.vedaracare.com/",
                  "telephone": "+971555736312",
                  "priceRange": "[VERIFY PRICE RANGE]",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
                    "addressLocality": "Jumeirah Village Circle (JVC)",
                    "addressRegion": "Dubai",
                    "addressCountry": "AE"
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:30",
                    "closes": "23:30"
                  },
                  "medicalSpecialty": "Dermatology",
                  "areaServed": ["Jumeirah Village Circle", "Jumeirah Village Triangle", "Al Barsha South", "Dubai Hills", "Sports City", "Arjan", "Dubai"]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.vedaracare.com/treatments/mole-removal-jvc/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is mole removal?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mole removal is a dermatological procedure to remove an unwanted or medically indicated mole from the skin, using a technique chosen following clinical assessment."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is mole removal painful?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most procedures are performed under local anaesthetic, which minimises discomfort during treatment."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can all moles be removed?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not automatically. Suitability for cosmetic removal is determined by a dermatologist during assessment."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Will mole removal leave a scar?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Any procedure that removes skin tissue carries the possibility of a mark or scar."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can laser be used to remove a mole?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Laser may be appropriate for certain lesions but is not suitable for every pigmented mole."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does mole removal cost in JVC?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Cost depends on lesion number, size, location, and technique. Confirm current pricing with the clinic directly."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I get a dermatologist to assess a mole in JVC?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Vedara Care Polyclinic offers dermatologist-led mole assessment and removal in Jumeirah Village Circle, Dubai."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      {/* HERO */}
      <AyurvedaHero
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/dermatology-clinic-jvc", label: "Dermatology" },
          { label: "Mole Removal in JVC" }
        ]}
        label={moleRemovalHero.label}
        title={moleRemovalHero.title}
        description={moleRemovalHero.description}
        image={moleRemovalHero.image}
        alt={moleRemovalHero.imageAlt}
        primaryCTA={moleRemovalHero.primaryCTA}
        primaryCTAHref={moleRemovalHero.primaryCTAHref}
        secondaryCTA={moleRemovalHero.secondaryCTA}
        secondaryCTAHref={moleRemovalHero.secondaryCTAHref}
        trustSignals={moleRemovalHero.trustSignals}
        floatingCard={{
          title: "Start With a Mole Assessment",
          subtitle: "Every mole is different. A professional dermatological assessment helps evaluate its size, shape, colour, location, and recent changes before deciding whether removal is appropriate and which treatment approach is most suitable."
        }}
      />
      {/* QUICK ANSWER */}
      <AyurvedaIntro
        label={moleRemovalQuickAnswer.label}
        title={moleRemovalQuickAnswer.title}
        blockquote={moleRemovalQuickAnswer.text}
      />

      {/* WHAT IS A MOLE */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {moleRemovalWhatIs.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {moleRemovalWhatIs.title}
          </h2>
          {moleRemovalWhatIs.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* WHEN TO ASSESS */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {moleRemovalWhenToAssess.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {moleRemovalWhenToAssess.title}
          </h2>
          {moleRemovalWhenToAssess.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {p}
            </p>
          ))}
          <div className="space-y-4 mb-8">
            {moleRemovalWhenToAssess.points.map((point, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
              </p>
            ))}
          </div>
          {moleRemovalWhenToAssess.footer.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* WHY CONSIDER REMOVAL */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={moleRemovalWhyConsider.label}
        title={moleRemovalWhyConsider.title}
        contentSections={moleRemovalWhyConsider.paragraphs.map((p) => ({
          subtitle: "",
          description: p,
        }))}
        sidebar={{
          image: "/images/mole-removal.webp",
          altText: "Mole removal assessment at Vedara Care JVC",
          width: "w-full",
          height: "h-[350px]",
          borderPosition: "left",
        }}
      />

      {/* ASSESSMENT FIRST */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {moleRemovalAssessmentFirst.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {moleRemovalAssessmentFirst.title}
          </h2>
          {moleRemovalAssessmentFirst.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
              {p}
            </p>
          ))}
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {moleRemovalAssessmentFirst.points.map((point, i) => (
              <li key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{point.name}:</strong> {point.desc}
              </li>
            ))}
          </ul>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed italic">
            {moleRemovalAssessmentFirst.footer}
          </p>
        </div>
      </div>

      {/* TYPES OF MOLES */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {moleRemovalTypes.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[rgb(26,26,26)]">
            {moleRemovalTypes.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {moleRemovalTypes.areas.map((area, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[#E5DFD3]">
                <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-4">{area.title}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic text-center">
            {moleRemovalTypes.footer}
          </p>
        </div>
      </div>

      {/* METHODS & LASER WARNING */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalMethods.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalMethods.title}
            </h2>
            {moleRemovalMethods.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
                {p}
              </p>
            ))}
            <div className="space-y-4">
              {moleRemovalMethods.points.map((point, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{point.name}:</strong> {point.desc}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border-l-4 border-[rgb(160,113,63)]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {moleRemovalLaserWarning.label}
              </p>
              <h2 className="text-2xl font-serif mb-6 text-[rgb(26,26,26)]">
                {moleRemovalLaserWarning.title}
              </h2>
              {moleRemovalLaserWarning.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TREATMENT PROCESS */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={moleRemovalProcess.label}
        title={moleRemovalProcess.title}
        contentSections={moleRemovalProcess.sections.map((s) => ({
          subtitle: s.subtitle,
          description: s.description,
        }))}
        sidebar={{
          image: "/images/mole-removal-procedure-room-jvc.webp",
          altText: "Mole removal procedure room at Vedara Care JVC",
          width: "w-full",
          height: "h-[480px]",
          borderPosition: "right",
        }}
      />

      {/* PREPARATION */}
      <div className="bg-[#FAF7F2] py-10 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalPreparation.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalPreparation.title}
            </h2>
            {moleRemovalPreparation.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {moleRemovalPreparation.points.map((point, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {moleRemovalPreparation.footer}
            </p>
          </div>
          <div className="relative h-[480px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3]">
            <img
              src="/images/mole.webp"
              alt="Mole removal preparation at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* SENSATION */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[280px] lg:h-[380px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3] order-2 lg:order-1">
            <img
              src="/images/mole-removal-jvc-dermatologist.webp"
              alt="What mole removal feels like at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalSensation.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalSensation.title}
            </h2>
            {moleRemovalSensation.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* RECOVERY & SCARRING */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalRecovery.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalRecovery.title}
            </h2>
            <div className="space-y-4">
              {moleRemovalRecovery.phases.map((phase, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{phase.name}</strong> {phase.desc}
                </p>
              ))}
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4 italic">
                {moleRemovalRecovery.footer}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalScarring.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalScarring.title}
            </h2>
            {moleRemovalScarring.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* EXPECTATIONS & BEFORE/AFTER */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalExpectations.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalExpectations.title}
            </h2>
            {moleRemovalExpectations.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalBeforeAfterInfo.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalBeforeAfterInfo.title}
            </h2>
            {moleRemovalBeforeAfterInfo.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* CANDIDATES & INVESTIGATION */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalCandidates.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalCandidates.title}
            </h2>
            {moleRemovalCandidates.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {moleRemovalCandidates.points.map((point, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {moleRemovalCandidates.footer}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalInvestigation.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalInvestigation.title}
            </h2>
            {moleRemovalInvestigation.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalSafety.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalSafety.title}
            </h2>
            {moleRemovalSafety.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {moleRemovalSafety.points.map((point, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{point.name}:</strong> {point.desc}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {moleRemovalSafety.footer}
            </p>
          </div>
          <div className="relative h-[480px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3]">
            <img
              src="/images/mole-removal-laser-hair-removal-jvc.webp"
              alt="Mole Removal Safety and Consultation at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* SKIN TONES */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[480px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3] order-2 lg:order-1">
            <img
              src="/images/mole-skin.webp"
              alt="Mole Removal for Darker Skin Tones at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalDarkerSkin.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalDarkerSkin.title}
            </h2>
            {moleRemovalDarkerSkin.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* FACIAL MOLES & AFTERCARE */}
      <div className="bg-[#faf7f2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalFacial.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalFacial.title}
            </h2>
            {moleRemovalFacial.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {moleRemovalCare.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {moleRemovalCare.title}
            </h2>
            {moleRemovalCare.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {moleRemovalCare.points.map((point, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {moleRemovalCare.footer}
            </p>
          </div>
        </div>
      </div>

      {/* LABORATORY */}
    <div className="bg-white py-16 md:py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* Content */}
    <div>
      <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
        {moleRemovalLaboratory.label}
      </p>

      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
        {moleRemovalLaboratory.title}
      </h2>

      {moleRemovalLaboratory.paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4"
        >
          {p}
        </p>
      ))}
    </div>

    {/* Image */}
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl">
        <img
          src="/images/mole-removal-laboratory.webp"
          alt="Mole removal laboratory assessment"
          className="w-full h-[350px] md:h-[450px] object-cover object-center"
        />
      </div>
    </div>

  </div>
</div>

      {/* PRICING */}
      <PricingSection
        bgcolor="bg-[#FAF7F2]"
        label={moleRemovalPricing.label}
        title={moleRemovalPricing.title}
        description=""
        pricingCards={[]}
        insuranceTitle=""
        insuranceDesc=""
        insurers={[]}
        tableData={moleRemovalPricing.table}
        tableNote={moleRemovalPricing.note}
      />



      {/* FAQ */}
      <FAQ {...moleRemovalFAQ} />

      {/* LOCATION */}
      <TreatmentLocation
        {...moleRemovalLocation}
        buttonText="Book a Mole Assessment"
        buttonHref="/book"
      />

      <MedicalDisclaimer text="This page is for informational purposes only and does not constitute medical advice. All treatments carry risks and benefits that should be discussed with a qualified healthcare professional. Results vary between individuals. Vedara Care Polyclinic is a DHA-licensed facility." />

      {/* FINAL CTA */}
      <FinalCTA
        title={moleRemovalCTA.title}
        description={moleRemovalCTA.description}
        button1Text={moleRemovalCTA.button1Text}
        button1TextHref={moleRemovalCTA.button1TextHref}
        button2Text={moleRemovalCTA.button2Text}
        button2TextHref={moleRemovalCTA.button2TextHref}
      />

      {/* RELATED PAGES */}
      <RelatedPages {...moleRemovalRelatedPages} />
    </>
  );
};

export default MoleRemovalJVC;
