import Head from "next/head";
import AyurvedaHero from "../../components/ayurveda/AyurvedaHero";
import AyurvedaIntro from "../../components/ayurveda/AyurvedaIntro";
import ContentWithSidebar from "../../components/ayurveda/ContentWithSidebar";
import FinalCTA from "../../components/ayurveda/FinalCTA";
import MedicalDisclaimer from "../../components/ayurveda/MedicalDisclaimer";
import FAQ from "../../components/home/FAQ";
import RelatedPages from "../../components/ayurveda/RelatedPages";
import TreatmentLocation from "../../components/ayurveda/TreatmentLocation";
import {
  nonSurgicalFaceliftMeta,
  nonSurgicalFaceliftHero,
  nonSurgicalFaceliftQuickAnswer,
  nonSurgicalFaceliftWhatItMeans,
  nonSurgicalFaceliftWhyPersonalised,
  nonSurgicalFaceliftWhatItImproves,
  nonSurgicalFaceliftTreatmentOptions,
  nonSurgicalFaceliftAreas,
  nonSurgicalFaceliftConsultation,
  nonSurgicalFaceliftRecovery,
  nonSurgicalFaceliftResults,
  nonSurgicalFaceliftSafety,
  nonSurgicalFaceliftCombination,
  nonSurgicalFaceliftSessions,
  nonSurgicalFaceliftPricing,
  nonSurgicalFaceliftInsurance,
  nonSurgicalFaceliftBeforeAfter,
  nonSurgicalFaceliftSuitability,
  nonSurgicalFaceliftOutcomes,
  nonSurgicalFaceliftFAQ,
  nonSurgicalFaceliftLocation,
  nonSurgicalFaceliftCTA,
  nonSurgicalFaceliftRelatedPages,
} from "../../data/nonSurgicalFaceliftData";

const NonSurgicalFacelift = () => {
  return (
    <>
      <Head>
        <title>{nonSurgicalFaceliftMeta.title}</title>
        <meta name="description" content={nonSurgicalFaceliftMeta.description} />
        <link rel="canonical" href={nonSurgicalFaceliftMeta.canonical} />
        <meta property="og:title" content={nonSurgicalFaceliftMeta.ogTitle} />
        <meta property="og:description" content={nonSurgicalFaceliftMeta.ogDescription} />
        <meta property="og:url" content={nonSurgicalFaceliftMeta.ogUrl} />

        {/* 1. MedicalWebPage + MedicalProcedure (combined) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Non-Surgical Facelift in JVC | Vedara Care",
              "url": "https://www.vedaracare.com/treatments/non-surgical-facelift-jvc/",
              "description": "Non-Surgical Facelift in JVC at Vedara Care — DHA-licensed dermatology, personalised facial assessment, honest guidance in Dubai.",
              "inLanguage": "en",
              "lastReviewed": "2026-08-21",
              "reviewedBy": {
                "@type": "Person",
                "name": "[VERIFIED DERMATOLOGIST NAME]",
                "jobTitle": "Dermatologist",
                "url": "[VERIFIED DERMATOLOGIST PROFILE URL]"
              },
              "medicalAudience": {
                "@type": "MedicalAudience",
                "audienceType": "Patient"
              },
              "about": {
                "@type": "MedicalProcedure",
                "name": "Non-Surgical Facelift",
                "alternateName": ["Non-Surgical Facial Rejuvenation", "Liquid Facelift", "Non-Invasive Facelift"],
                "description": "A combination of non-invasive or minimally invasive treatments — such as radiofrequency skin tightening, collagen stimulation, and sometimes volume restoration — used to address selected signs of facial ageing, selected according to individual facial assessment to improve selected types of facial ageing.",
                "preparation": "Dermatology consultation including skin laxity assessment, volume distribution, medical history review, and identification of relevant treatment areas prior to any session.",
                "followup": "Follow-up assessment to review progress; number and type of sessions varies by individual treatment plan.",
                "status": "https://schema.org/ActiveActionStatus",
                "recognizingAuthority": {
                  "@type": "Organization",
                  "name": "Dubai Health Authority",
                  "alternateName": "DHA"
                }
              },
              "publisher": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic",
                "url": "https://www.vedaracare.com"
              }
            })
          }}
        />

        {/* 3. BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedaracare.com/" },
                { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.vedaracare.com/treatments/" },
                { "@type": "ListItem", "position": 3, "name": "Non-Surgical Facelift in JVC", "item": "https://www.vedaracare.com/treatments/non-surgical-facelift-jvc/" }
              ]
            })
          }}
        />

        {/* 4. MedicalClinic / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Vedara Care Polyclinic",
              "image": "https://www.vedaracare.com/images/vedara-care-jvc-dermatology-clinic-interior.webp",
              "url": "https://www.vedaracare.com/treatments/non-surgical-facelift-jvc/",
              "telephone": "+971555736312",
              "priceRange": "[VERIFY PRICE RANGE]",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop 4",
                "addressLocality": "Jumeirah Village Circle (JVC)",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[VERIFY LATITUDE]",
                "longitude": "[VERIFY LONGITUDE]"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:30",
                "closes": "23:30"
              },
              "medicalSpecialty": "Dermatology",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Dubai Health Authority (DHA) License",
                "recognizedBy": { "@type": "Organization", "name": "Dubai Health Authority" }
              },
              "sameAs": ["[VERIFIED FACEBOOK URL]", "[VERIFIED INSTAGRAM URL]", "[VERIFIED GOOGLE BUSINESS PROFILE URL]"]
            })
          }}
        />

        {/* 5. Person (Medical Reviewer) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "[VERIFIED DERMATOLOGIST NAME]",
              "jobTitle": "Dermatologist",
              "worksFor": { "@type": "MedicalOrganization", "name": "Vedara Care Polyclinic" },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "[VERIFIED QUALIFICATION, e.g. MD, Dermatology]",
                "recognizedBy": { "@type": "Organization", "name": "Dubai Health Authority" }
              },
              "knowsLanguage": ["[VERIFIED LANGUAGES]"],
              "url": "[VERIFIED DERMATOLOGIST PROFILE URL]"
            })
          }}
        />

        {/* 6. FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": nonSurgicalFaceliftFAQ.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
              }))
            })
          }}
        />
      </Head>

      {/* HERO */}
      <AyurvedaHero
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/dermatology-clinic-jvc", label: "Dermatology" },
          { label: "Non-Surgical Facelift in JVC" },
        ]}
        label={nonSurgicalFaceliftHero.label}
        title={nonSurgicalFaceliftHero.title}
        description={nonSurgicalFaceliftHero.description}
        image={nonSurgicalFaceliftHero.image}
        alt={nonSurgicalFaceliftHero.imageAlt}
        primaryCTA={nonSurgicalFaceliftHero.primaryCTA}
        primaryCTAHref={nonSurgicalFaceliftHero.primaryCTAHref}
        secondaryCTA={nonSurgicalFaceliftHero.secondaryCTA}
        secondaryCTAHref={nonSurgicalFaceliftHero.secondaryCTAHref}
        trustSignals={nonSurgicalFaceliftHero.trustSignals}
         floatingCard={{
          title: "Start With a Facial Assessment",
          subtitle: "Every face has different skin quality, contours, and signs of ageing. A proper assessment helps evaluate facial firmness, skin texture, areas of concern, and your aesthetic goals before recommending the most suitable non-surgical facelift approach."
        }}
      />

      {/* QUICK ANSWER */}
      <AyurvedaIntro
        label={nonSurgicalFaceliftQuickAnswer.label}
        title="Non-surgical Facelift at Vedara Care, in one paragraph."
        blockquote={nonSurgicalFaceliftQuickAnswer.paragraphs.join("<br/><br/>")}
      />

      {/* WHAT IT MEANS */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftWhatItMeans.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftWhatItMeans.title}
          </h2>
          {nonSurgicalFaceliftWhatItMeans.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
          ))}
          <ul className="space-y-3 mb-6">
            {nonSurgicalFaceliftWhatItMeans.treatmentCategories.map((item, i) => (
              <li key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{item.name}</strong> {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed italic border-l-4 border-[rgb(160,113,63)] pl-4">
            {nonSurgicalFaceliftWhatItMeans.closingNote}
          </p>
        </div>
      </div>

      {/* WHY PERSONALISED */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftWhyPersonalised.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftWhyPersonalised.title}
          </h2>
          <div className="space-y-6">
            {nonSurgicalFaceliftWhyPersonalised.points.map((point, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT IT CAN IMPROVE */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftWhatItImproves.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftWhatItImproves.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {nonSurgicalFaceliftWhatItImproves.changes.map((change, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#E5DFD3]">
                <h3 className="text-sm font-semibold text-[rgb(26,26,26)] mb-2">{change.name}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{change.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TREATMENT OPTIONS */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftTreatmentOptions.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftTreatmentOptions.title}
          </h2>
          <div className="space-y-6">
            {nonSurgicalFaceliftTreatmentOptions.options.map((option, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{option.name}</strong> {option.desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* AREAS */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftAreas.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftAreas.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {nonSurgicalFaceliftAreas.areas.map((area, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[#E5DFD3]">
                <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-3">{area.title}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONSULTATION + TREATMENT SESSION */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={nonSurgicalFaceliftConsultation.label}
        title={nonSurgicalFaceliftConsultation.title}
        contentSections={nonSurgicalFaceliftConsultation.steps.map((s) => ({
          subtitle: `${s.num} ${s.subtitle}`,
          description: s.description,
        }))}
        sidebar={{
          image: "/images/non-surgical-facelift-consultation-jvc.webp",
          altText: "Non-surgical facelift consultation at Vedara Care JVC",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right",
        }}
      />

      {/* RECOVERY + RESULTS — side by side */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftRecovery.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftRecovery.title}
            </h2>
            {nonSurgicalFaceliftRecovery.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <div className="space-y-4">
              {nonSurgicalFaceliftRecovery.phases.map((phase, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{phase.name}</strong> {phase.desc}
                </p>
              ))}
            </div>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4 italic">
              {nonSurgicalFaceliftRecovery.footer}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftResults.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftResults.title}
            </h2>
            {nonSurgicalFaceliftResults.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">{p}</p>
            ))}

            <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-4">
              {nonSurgicalFaceliftResults.whenResults.title}
            </h3>
            <div className="space-y-3 mb-4">
              {nonSurgicalFaceliftResults.whenResults.phases.map((phase, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{phase.name}</strong> {phase.desc}
                </p>
              ))}
            </div>
            <p className="text-sm italic text-[rgb(107,107,107)] leading-relaxed">
              {nonSurgicalFaceliftResults.whenResults.footer}
            </p>
          </div>
        </div>
      </div>

      {/* HOW LONG RESULTS LAST */}
      <div className="bg-white py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftResults.howLong.title}
          </h2>
          {nonSurgicalFaceliftResults.howLong.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </div>

      {/* BEFORE & AFTER */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftBeforeAfter.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftBeforeAfter.title}
            </h2>
            {nonSurgicalFaceliftBeforeAfter.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 mb-6 list-disc list-inside">
              {nonSurgicalFaceliftBeforeAfter.considerations.map((c, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
              ))}
            </ul>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {nonSurgicalFaceliftBeforeAfter.footer}
            </p>
          </div>
          <div className="relative h-[480px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3]">
            <img
              src="/images/non-surgical-1.webp"
              alt="Non-surgical after before results at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">

            </div>
          </div>
        </div>
      </div>

      {/* SUITABILITY + NOT ENOUGH — side by side */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftSuitability.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftSuitability.title}
            </h2>
            {nonSurgicalFaceliftSuitability.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 list-disc list-inside mb-4">
              {nonSurgicalFaceliftSuitability.criteria.map((c, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
              ))}
            </ul>
            <p className="text-sm italic text-[rgb(107,107,107)] leading-relaxed">
              {nonSurgicalFaceliftSuitability.footer}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              WHEN NON-SURGICAL MAY NOT BE ENOUGH
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftSuitability.notEnough.title}
            </h2>
            {nonSurgicalFaceliftSuitability.notEnough.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 list-disc list-inside mb-6">
              {nonSurgicalFaceliftSuitability.notEnough.criteria.map((c, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
              ))}
            </ul>
            <p className="text-sm italic text-[rgb(107,107,107)] leading-relaxed">
              {nonSurgicalFaceliftSuitability.notEnough.footer}
            </p>
          </div>
        </div>
      </div>

      {/* SAFETY */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftSafety.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftSafety.title}
            </h2>
            {nonSurgicalFaceliftSafety.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <div className="space-y-4">
              {nonSurgicalFaceliftSafety.effects.map((effect, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{effect.name}</strong> {effect.desc}
                </p>
              ))}
            </div>
          </div>
          <div className="relative h-[580px] lg:h-[680px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3]">
            <img
              src="/images/non-surgical-consultation-jvc.webp"
              alt="Non-surgical facelift safety consultation at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* DARKER SKIN TONES */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[480px] lg:h-[580px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3] order-2 lg:order-1">
            <img
              src="/images/non-surgical.webp"
              alt="Skin rejuvenation consultation for darker skin tones at Vedara Care JVC"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              DARKER SKIN TONES
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftSafety.darkerSkinTones.title}
            </h2>
            {nonSurgicalFaceliftSafety.darkerSkinTones.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* COMBINATION + SESSIONS */}
      <div className="bg-[#fafafa] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftCombination.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftCombination.title}
            </h2>
            {nonSurgicalFaceliftCombination.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 list-disc list-inside mb-6">
              {nonSurgicalFaceliftCombination.combinations.map((c, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
              ))}
            </ul>
            <p className="text-sm italic text-[rgb(107,107,107)] leading-relaxed">
              {nonSurgicalFaceliftCombination.footer}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftSessions.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftSessions.title}
            </h2>
            {nonSurgicalFaceliftSessions.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftPricing.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {nonSurgicalFaceliftPricing.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E5DFD3]">
                  {nonSurgicalFaceliftPricing.table[0].map((col, i) => (
                    <th key={i} className="text-left py-3 px-4 text-sm font-semibold text-[rgb(26,26,26)]">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nonSurgicalFaceliftPricing.table.slice(1).map((row, i) => (
                  <tr key={i} className="border-b border-[#E5DFD3]">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-4 text-sm text-[rgb(107,107,107)]">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[rgb(107,107,107)] mt-6 italic">{nonSurgicalFaceliftPricing.note}</p>
        </div>
      </div>

      {/* INSURANCE + OUTCOMES */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftInsurance.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftInsurance.title}
            </h2>
            {nonSurgicalFaceliftInsurance.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {nonSurgicalFaceliftOutcomes.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {nonSurgicalFaceliftOutcomes.title}
            </h2>
            {nonSurgicalFaceliftOutcomes.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      {/* <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nonSurgicalFaceliftFAQ.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-[rgb(26,26,26)]">
            Non-surgical facelift — common questions answered
          </h2>
          <div className="space-y-6">
            {nonSurgicalFaceliftFAQ.faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#E5DFD3] pb-6">
                <h3 className="text-base font-semibold text-[rgb(26,26,26)] mb-2">{faq.question}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}


      <FAQ {...nonSurgicalFaceliftFAQ} />


      {/* LOCATION */}
      <TreatmentLocation
        {...nonSurgicalFaceliftLocation}
        buttonText="Book a Non-Surgical Facelift Consultation"
        buttonHref="/book"
      />

      <MedicalDisclaimer text="This page is for informational purposes only and does not constitute medical advice. All treatments carry risks and benefits that should be discussed with a qualified healthcare professional. Results vary between individuals. Vedara Care Polyclinic is a DHA-licensed facility." />

      {/* FINAL CTA */}
      <FinalCTA
        title={nonSurgicalFaceliftCTA.title}
        description={nonSurgicalFaceliftCTA.description}
        button1Text={nonSurgicalFaceliftCTA.button1Text}
        button1TextHref={nonSurgicalFaceliftCTA.button1TextHref}
        button2Text={nonSurgicalFaceliftCTA.button2Text}
        button2TextHref={nonSurgicalFaceliftCTA.button2TextHref}
      />

      <RelatedPages {...nonSurgicalFaceliftRelatedPages} />
    </>
  );
};

export default NonSurgicalFacelift;
