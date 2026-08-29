import Head from "next/head";
import AyurvedaHero from "../../components/ayurveda/AyurvedaHero";
import ContentWithSidebar from "../../components/ayurveda/ContentWithSidebar";
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FinalCTA from "../../components/ayurveda/FinalCTA";
import MedicalDisclaimer from "../../components/ayurveda/MedicalDisclaimer";
import RelatedPages from "../../components/ayurveda/RelatedPages";
import FAQ from "../../components/home/FAQ";
import TreatmentLocation from "../../components/ayurveda/TreatmentLocation";
import PricingSection from "../../components/ayurveda/PricingSection";
import {
  skinTighteningTreatmentMeta,
  skinTighteningTreatmentHero,
  skinTighteningTreatmentQuickAnswer,
  skinTighteningTreatmentUnderstanding,
  skinTighteningTreatmentAreas,
  skinTighteningTreatmentApproach,
  skinTighteningTreatmentHowItWorks,
  skinTighteningTreatmentSession,
  skinTighteningTreatmentRecovery,
  skinTighteningTreatmentResults,
  skinTighteningTreatmentBeforeAfter,
  skinTighteningTreatmentSuitability,
  skinTighteningTreatmentCombination,
  skinTighteningTreatmentSessions,
  skinTighteningTreatmentPricing,
  skinTighteningTreatmentInsurance,
  skinTighteningTreatmentOutcomes,
  skinTighteningTreatmentFAQ,
  skinTighteningTreatmentLocation,
  skinTighteningTreatmentCTA,
  skinTighteningTreatmentRelatedPages,
} from "../../data/skinTighteningTreatmentData";

const SkinTighteningTreatment = () => {
  return (
    <>
      <Head>
        <title>{skinTighteningTreatmentMeta.title}</title>
        <meta name="description" content={skinTighteningTreatmentMeta.description} />
        <link rel="canonical" href={skinTighteningTreatmentMeta.canonical} />
        <meta property="og:title" content={skinTighteningTreatmentMeta.ogTitle} />
        <meta property="og:description" content={skinTighteningTreatmentMeta.ogDescription} />
        <meta property="og:url" content={skinTighteningTreatmentMeta.ogUrl} />

        {/* 1. MedicalWebPage + MedicalProcedure (combined) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Skin Tightening Treatment in JVC | Vedara Care",
              "url": "https://www.vedaracare.com/treatments/skin-tightening-treatment-jvc/",
              "description": "Skin tightening treatment in JVC at Vedara Care — DHA-licensed dermatology, personalised skin assessment, and treatment options.",
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
                "name": "Skin Tightening Treatment",
                "alternateName": ["Non-Surgical Skin Tightening", "RF Skin Tightening", "Laser Skin Tightening"],
                "description": "Controlled energy-based technology (radiofrequency, laser, or ultrasound) is used to heat targeted skin layers, stimulating collagen remodelling and gradually improving the appearance of skin laxity in patients with mild-to-moderate skin laxity.",
                "preparation": "Dermatology consultation including skin laxity assessment, skin type, pigmentation risk assessment, and medical history review, prior to any sessions.",
                "followup": "Follow-up assessment to review progress; number of sessions varies by individual case.",
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
                { "@type": "ListItem", "position": 3, "name": "Skin Tightening Treatment in JVC", "item": "https://www.vedaracare.com/treatments/skin-tightening-treatment-jvc/" }
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
              "image": "https://www.vedaracare.com/images/vedara-care-jvc-clinic-interior.webp",
              "url": "https://www.vedaracare.com/treatments/skin-tightening-treatment-jvc/",
              "telephone": "+971555736312",
              "priceRange": "[VERIFY PRICE RANGE]",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
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
              "department": {
                "@type": "MedicalClinic",
                "name": "Dermatology Department, Vedara Care Polyclinic",
                "medicalSpecialty": "Dermatology"
              },
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
              "mainEntity": skinTighteningTreatmentFAQ.faqs.map((faq) => ({
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
          { label: "Skin Tightening Treatment in JVC" },
        ]}
        label={skinTighteningTreatmentHero.label}
        title={skinTighteningTreatmentHero.title}
        description={skinTighteningTreatmentHero.description}
        image={skinTighteningTreatmentHero.image}
        alt={skinTighteningTreatmentHero.imageAlt}
        primaryCTA={skinTighteningTreatmentHero.primaryCTA}
        primaryCTAHref={skinTighteningTreatmentHero.primaryCTAHref}
        secondaryCTA={skinTighteningTreatmentHero.secondaryCTA}
        secondaryCTAHref={skinTighteningTreatmentHero.secondaryCTAHref}
        trustSignals={skinTighteningTreatmentHero.trustSignals}
        floatingCard={{
          title: "Start With a Skin Assessment",
          subtitle: "Skin laxity varies from person to person. A proper assessment helps evaluate your skin firmness, texture, treatment area, and overall concerns before recommending the most appropriate skin tightening approach."
        }}
      />

      {/* QUICK ANSWER */}
      <AyurvedaIntro {...skinTighteningTreatmentQuickAnswer} />

      {/* UNDERSTANDING SKIN LAXITY */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTreatmentUnderstanding.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentUnderstanding.title}
            </h2>
            {skinTighteningTreatmentUnderstanding.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-3 mb-6">
              {skinTighteningTreatmentUnderstanding.factors.map((f, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{f.name}</strong> {f.desc}
                </li>
              ))}
            </ul>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {skinTighteningTreatmentUnderstanding.closingParagraph}
            </p>
          </div>
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3]">
            <img
              src="/images/skincare-jvc.webp"
              alt="Skin laxity understanding and assessment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* AREAS WE ASSESS */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {skinTighteningTreatmentAreas.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[rgb(26,26,26)]">
            {skinTighteningTreatmentAreas.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skinTighteningTreatmentAreas.areas.map((area, i) => (
              <div key={i} className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
                <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-3">{area.title}</h3>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* THE APPROACH */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {skinTighteningTreatmentApproach.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {skinTighteningTreatmentApproach.title}
          </h2>
          <div className="space-y-6">
            {skinTighteningTreatmentApproach.points.map((point, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
              </p>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white border border-[#E5DFD3] rounded-2xl italic text-[rgb(107,107,107)]">
            {skinTighteningTreatmentApproach.quote}
          </div>
        </div>
      </div>

      {/* HOW SKIN TIGHTENING WORKS + WHICH TECHNOLOGY */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* SECTION 1: How It Works */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                {skinTighteningTreatmentHowItWorks.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
                {skinTighteningTreatmentHowItWorks.title}
              </h2>
              {skinTighteningTreatmentHowItWorks.paragraphs.map((p, i) => (
                <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">{p}</p>
              ))}
            </div>
            <div className="relative h-[600px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-[#E5DFD3]">
              <img
                src="/images/skin-tighten-jvc.webp"
                alt="How skin tightening treatment works"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SECTION 2: Which Technology */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] lg:h-[600px] w-full rounded-xl overflow-hidden shadow-lg border border-[#E5DFD3]">
              <img
                src="/images/skincare-tight-jvc2.webp"
                alt="Skin tightening technologies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
                {skinTighteningTreatmentHowItWorks.technologies.title}
              </h2>
              <div className="space-y-6">
                {skinTighteningTreatmentHowItWorks.technologies.items.map((item, i) => (
                  <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                    <strong className="text-[rgb(26,26,26)]">{item.name}</strong> {item.desc}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TREATMENT SESSION */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinTighteningTreatmentSession.label}
        title={skinTighteningTreatmentSession.title}
        contentSections={skinTighteningTreatmentSession.sections.map((s) => ({
          subtitle: s.subtitle,
          description: s.description,
        }))}
        sidebar={{
          image: "/images/skin-tightening-treatment-session-jvc.webp",
          altText: "Skin tightening treatment session at Vedara Care JVC",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right",
        }}
      />

      {/* RECOVERY & RESULTS — side by side */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTreatmentRecovery.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentRecovery.title}
            </h2>
            <div className="space-y-4">
              {skinTighteningTreatmentRecovery.phases.map((phase, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{phase.name}</strong> {phase.desc}
                </p>
              ))}
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4 italic">
                {skinTighteningTreatmentRecovery.footer}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTreatmentResults.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentResults.title}
            </h2>
            {skinTighteningTreatmentResults.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* BEFORE & AFTER */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {skinTighteningTreatmentBeforeAfter.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {skinTighteningTreatmentBeforeAfter.title}
          </h2>
          {skinTighteningTreatmentBeforeAfter.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
          ))}
          <ul className="space-y-2 mb-6 list-disc list-inside">
            {skinTighteningTreatmentBeforeAfter.considerations.map((c, i) => (
              <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
            ))}
          </ul>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
            {skinTighteningTreatmentBeforeAfter.footer}
          </p>
        </div>
      </div>

      {/* WHO MAY BENEFIT + NOT SUITABLE — side by side */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTreatmentSuitability.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentSuitability.title}
            </h2>
            {skinTighteningTreatmentSuitability.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 list-disc list-inside">
              {skinTighteningTreatmentSuitability.criteria.map((c, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              NOT SUITABLE
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentSuitability.notSuitable.title}
            </h2>
            {skinTighteningTreatmentSuitability.notSuitable.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="space-y-2 list-disc list-inside mb-6">
              {skinTighteningTreatmentSuitability.notSuitable.criteria.map((c, i) => (
                <li key={i} className="text-sm text-[rgb(107,107,107)]">{c}</li>
              ))}
            </ul>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {skinTighteningTreatmentSuitability.notSuitable.footer}
            </p>
          </div>
        </div>
      </div>

      {/* COMBINATION + SESSIONS — side by side */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">

          {/* Treatment Combination Box */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[rgba(160,113,63,0.12)]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTreatmentCombination.label}
            </p>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentCombination.title}
            </h2>

            {skinTighteningTreatmentCombination.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}

            <ul className="space-y-2 list-disc list-inside mb-6">
              {skinTighteningTreatmentCombination.treatments.map((t, i) => (
                <li
                  key={i}
                  className="text-sm text-[rgb(107,107,107)]"
                >
                  {t}
                </li>
              ))}
            </ul>

            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed italic">
              {skinTighteningTreatmentCombination.footer}
            </p>
          </div>

          {/* Treatment Sessions Box */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[rgba(160,113,63,0.12)]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTreatmentSessions.label}
            </p>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTreatmentSessions.title}
            </h2>

            {skinTighteningTreatmentSessions.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}
          </div>

        </div>
      </div>

      {/* PRICING */}
      <PricingSection
        bgcolor={skinTighteningTreatmentPricing.bgcolor}
        label={skinTighteningTreatmentPricing.label}
        title={skinTighteningTreatmentPricing.title}
        description=""
        pricingCards={[]}
        insuranceTitle=""
        insuranceDesc=""
        insurers={[]}
        tableData={skinTighteningTreatmentPricing.table}
        tableNote={skinTighteningTreatmentPricing.note}
      />



      {/* FAQ */}
      <FAQ {...skinTighteningTreatmentFAQ} />

      {/* LOCATION */}
      <TreatmentLocation
        {...skinTighteningTreatmentLocation}
        buttonText="Book a Skin Tightening Consultation"
        buttonHref="/book"
      />

      <MedicalDisclaimer text="This page is for informational purposes only and does not constitute medical advice. All treatments carry risks and benefits that should be discussed with a qualified healthcare professional. Results vary between individuals. Vedara Care Polyclinic is a DHA-licensed facility." />

      {/* FINAL CTA */}
      <FinalCTA
        title={skinTighteningTreatmentCTA.title}
        description={skinTighteningTreatmentCTA.description}
        button1Text={skinTighteningTreatmentCTA.button1Text}
        button1TextHref={skinTighteningTreatmentCTA.button1TextHref}
        button2Text={skinTighteningTreatmentCTA.button2Text}
        button2TextHref={skinTighteningTreatmentCTA.button2TextHref}
      />

      <RelatedPages {...skinTighteningTreatmentRelatedPages} />
    </>
  );
};

export default SkinTighteningTreatment;
