import Head from "next/head";
import AyurvedaHero from "../../components/ayurveda/AyurvedaHero";
import AyurvedaIntro from "../../components/ayurveda/AyurvedaIntro";
import ContentWithSidebar from "../../components/ayurveda/ContentWithSidebar";
import FinalCTA from "../../components/ayurveda/FinalCTA";
import MedicalDisclaimer from "../../components/ayurveda/MedicalDisclaimer";
import FAQ from "../../components/home/FAQ";
import PricingSection from "../../components/ayurveda/PricingSection";
import RelatedPages from "../../components/ayurveda/RelatedPages";
import TreatmentLocation from "../../components/ayurveda/TreatmentLocation";
import {
  skinTighteningMeta,
  skinTighteningHero,
  skinTighteningQuickAnswer,
  skinTighteningUnderstanding,
  skinTighteningAreas,
  skinTighteningApproach,
  skinTighteningHowItWorks,
  skinTighteningProcess,
  skinTighteningRecovery,
  skinTighteningResults,
  skinTighteningWhoMayBenefit,
  skinTighteningWhenNot,
  skinTighteningSafetyEffects,
  skinTighteningSkinType,
  skinTighteningCombination,
  skinTighteningSessions,
  skinTighteningTimeline,
  skinTighteningFAQ,
  skinTighteningPricing,
  skinTighteningInsurance,
  skinTighteningLocation,
  skinTighteningCTA,
  skinTighteningRelatedPages,
} from "../../data/laserSkinTighteningData";

const LaserSkinTightening = () => {
  return (
    <>
      <Head>
        <title>{skinTighteningMeta.title}</title>
        <meta name="description" content={skinTighteningMeta.description} />
        <link rel="canonical" href={skinTighteningMeta.canonical} />
        <meta property="og:title" content={skinTighteningMeta.ogTitle} />
        <meta property="og:description" content={skinTighteningMeta.ogDescription} />
        <meta property="og:url" content={skinTighteningMeta.ogUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Laser Skin Tightening in JVC | Vedara Care Dermatology",
              "url": "https://www.vedaracare.com/treatments/laser-skin-tightening-jvc/",
              "description": "Laser skin tightening in JVC at Vedara Care. DHA-licensed dermatology team offering personalised skin firming treatment in Dubai.",
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
                "name": "Laser Skin Tightening"
              },
              "publisher": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic",
                "url": "https://www.vedaracare.com"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Laser Skin Tightening",
              "alternateName": ["Laser Skin Firming", "Non-Surgical Skin Tightening"],
              "description": "A non-surgical dermatology procedure using controlled laser energy to heat targeted skin layers, stimulating collagen remodelling and gradually improving skin firmness and texture.",
              "procedureType": "https://schema.org/NoninvasiveProcedure",
              "bodyLocation": "Face, Jawline, Neck, Cheeks",
              "howPerformed": "Controlled laser energy is delivered to targeted skin layers, triggering a healing response that stimulates new collagen production and remodelling over time.",
              "preparation": "Includes medical history review, skin laxity assessment, skin type evaluation, and pigmentation risk assessment during an in-person consultation.",
              "followup": "Aftercare guidance including sun protection and skincare instructions, with follow-up to monitor collagen remodelling progress.",
              "status": "https://schema.org/ActiveActionStatus",
              "recognizingAuthority": {
                "@type": "Organization",
                "name": "Dubai Health Authority",
                "alternateName": "DHA"
              },
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic",
                "url": "https://www.vedaracare.com"
              }
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
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vedaracare.com/" },
                { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.vedaracare.com/treatments/" },
                { "@type": "ListItem", "position": 3, "name": "Laser Skin Tightening in JVC", "item": "https://www.vedaracare.com/treatments/laser-skin-tightening-jvc/" }
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
              "image": "https://www.vedaracare.com/images/vedara-care-jvc-clinic-interior.webp",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[VERIFY LATITUDE]",
                "longitude": "[VERIFY LONGITUDE]"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
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
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Dubai Health Authority"
                }
              },
              "sameAs": [
                "[VERIFIED FACEBOOK URL]",
                "[VERIFIED INSTAGRAM URL]",
                "[VERIFIED GOOGLE BUSINESS PROFILE URL]"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "[VERIFIED DERMATOLOGIST NAME]",
              "jobTitle": "Dermatologist",
              "worksFor": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "[VERIFIED QUALIFICATION]",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Dubai Health Authority"
                }
              },
              "knowsLanguage": ["[VERIFIED LANGUAGES]"],
              "url": "[VERIFIED DERMATOLOGIST PROFILE URL]"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": skinTighteningFAQ.faqs.map((faq) => ({
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
      </Head>

      {/* HERO */}
      <AyurvedaHero
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/dermatology-clinic-jvc", label: "Dermatology" },
          { label: "Laser Skin Tightening in JVC" }
        ]}
        label={skinTighteningHero.label}
        title={skinTighteningHero.title}
        description={skinTighteningHero.description}
        image={skinTighteningHero.image}
        alt={skinTighteningHero.imageAlt}
        primaryCTA={skinTighteningHero.primaryCTA}
        primaryCTAHref={skinTighteningHero.primaryCTAHref}
        secondaryCTA={skinTighteningHero.secondaryCTA}
        secondaryCTAHref={skinTighteningHero.secondaryCTAHref}
        trustSignals={skinTighteningHero.trustSignals}
       floatingCard={{
          title: "Start With a Skin Tightening Assessment",
          subtitle: "Every person's skin responds differently to treatment. A professional dermatological assessment helps evaluate skin laxity, texture, treatment goals, and suitability before deciding whether laser skin tightening is appropriate and which treatment approach may be most suitable."  }}
      />

      {/* QUICK ANSWER */}
      <AyurvedaIntro
        label={skinTighteningQuickAnswer.label}
        title={skinTighteningQuickAnswer.title}
        blockquote={skinTighteningQuickAnswer.text}
      />

      {/* UNDERSTANDING SKIN LAXITY */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {skinTighteningUnderstanding.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {skinTighteningUnderstanding.title}
          </h2>
          {skinTighteningUnderstanding.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* AREAS WE ASSESS */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {skinTighteningAreas.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[rgb(26,26,26)]">
            {skinTighteningAreas.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skinTighteningAreas.areas.map((area, i) => (
              <div key={i} className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
                <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">{area.title}</h3>
                {area.subtitle && (
                  <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">{area.subtitle}</p>
                )}
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
            {skinTighteningApproach.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
            {skinTighteningApproach.title}
          </h2>
          <div className="space-y-6">
            {skinTighteningApproach.points.map((point, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">{point.name}</strong> {point.desc}
              </p>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white border border-[#E5DFD3] rounded-2xl italic text-[rgb(107,107,107)]">
            {skinTighteningApproach.quote}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS + LASER TECHNOLOGY */}
    <div className="bg-white py-16 md:py-20 px-6">

  {/* How It Works - Content Left / Image Right */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-20 md:mb-28">

    {/* Content */}
    <div>
      <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
        {skinTighteningHowItWorks.label}
      </p>

      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
        {skinTighteningHowItWorks.title}
      </h2>

      {skinTighteningHowItWorks.paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6"
        >
          {p}
        </p>
      ))}
    </div>

    {/* Image Right */}
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl">
        <img
          src="/images/skin-tightening-how-it-works.jpg.webp"
          alt="How skin tightening treatment works"
          className="w-full h-[350px] md:h-[450px] object-cover object-center"
        />
      </div>
    </div>

  </div>


  {/* Technology - Image Left / Content Right */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* Image Left */}
    <div className="w-full md:order-1">
      <div className="overflow-hidden rounded-2xl">
        <img
          src="/images/skin-tightening-technology.webp"
          alt="Skin tightening treatment technology"
          className="w-full h-[350px] md:h-[450px] object-cover object-center"
        />
      </div>
    </div>

    {/* Content Right */}
    <div className="md:order-2">
      <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
        {skinTighteningHowItWorks.technology.label}
      </p>

      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
        {skinTighteningHowItWorks.technology.title}
      </h2>

      {skinTighteningHowItWorks.technology.paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6"
        >
          {p}
        </p>
      ))}
    </div>

  </div>

</div>

      {/* TREATMENT PROCESS */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinTighteningProcess.label}
        title={skinTighteningProcess.title}
        contentSections={skinTighteningProcess.sections.map((s) => ({
          subtitle: s.subtitle,
          description: s.description,
        }))}
        sidebar={{
          image: "/images/laser-skin-treatment.webp",
          altText: "Laser skin tightening treatment session at Vedara Care JVC",
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
              {skinTighteningRecovery.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningRecovery.title}
            </h2>
            <div className="space-y-4">
              {skinTighteningRecovery.phases.map((phase, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{phase.name}</strong> {phase.desc}
                </p>
              ))}
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4 italic">
                {skinTighteningRecovery.footer}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningResults.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningResults.title}
            </h2>
            <div className="space-y-4">
              {skinTighteningResults.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHEN LASER MAY NOT BE BEST + WHO MAY BENEFIT — side by side */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningWhoMayBenefit.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningWhoMayBenefit.title}
            </h2>
            {skinTighteningWhoMayBenefit.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningWhenNot.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningWhenNot.title}
            </h2>
            {skinTighteningWhenNot.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY & SIDE EFFECTS */}
      <div className="bg-white py-16 md:py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    {/* Content */}
    <div>
      <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
        {skinTighteningSafetyEffects.label}
      </p>

      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
        {skinTighteningSafetyEffects.title}
      </h2>

      {skinTighteningSafetyEffects.paragraphs.map((p, i) => (
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
          src="/images/skin-tightening.webp"
          alt="Skin tightening treatment"
          className="w-full h-[450px] md:h-[550px] object-cover object-center"
        />
      </div>
    </div>

  </div>
</div>

      {/* SKIN TYPE & PIGMENTATION + COMBINATION TREATMENTS — side by side */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningSkinType.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningSkinType.title}
            </h2>
            {skinTighteningSkinType.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningCombination.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningCombination.title}
            </h2>
            {skinTighteningCombination.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* NUMBER OF SESSIONS + RESULTS TIMELINE — side by side */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningSessions.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningSessions.title}
            </h2>
            {skinTighteningSessions.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {skinTighteningTimeline.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-6 text-[rgb(26,26,26)]">
              {skinTighteningTimeline.title}
            </h2>
            <div className="space-y-4">
              {skinTighteningTimeline.phases.map((phase, i) => (
                <p key={i} className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                  <strong className="text-[rgb(26,26,26)]">{phase.name}</strong> {phase.desc}
                </p>
              ))}
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4 italic">
                {skinTighteningTimeline.footer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <PricingSection
        bgcolor="bg-[#FAF7F2]"
        label={skinTighteningPricing.label}
        title={skinTighteningPricing.title}
        description=""
        pricingCards={[]}
        insuranceTitle=""
        insuranceDesc=""
        insurers={[]}
        tableData={skinTighteningPricing.table}
        tableNote={skinTighteningPricing.note}
      />
      
      {/* FAQ */}
      <FAQ {...skinTighteningFAQ} />

      {/* LOCATION */}
      <TreatmentLocation
        {...skinTighteningLocation}
        buttonText="Book a Laser Skin Tightening Consultation"
        buttonHref="/book"
      />

      <MedicalDisclaimer text="This page is for informational purposes only and does not constitute medical advice. All treatments carry risks and benefits that should be discussed with a qualified healthcare professional. Results vary between individuals. Vedara Care Polyclinic is a DHA-licensed facility." />

      {/* FINAL CTA */}
      <FinalCTA
        title={skinTighteningCTA.title}
        description={skinTighteningCTA.description}
        button1Text={skinTighteningCTA.button1Text}
        button1TextHref={skinTighteningCTA.button1TextHref}
        button2Text={skinTighteningCTA.button2Text}
        button2TextHref={skinTighteningCTA.button2TextHref}
      />

      <RelatedPages {...skinTighteningRelatedPages} />
    </>
  );
};

export default LaserSkinTightening;
