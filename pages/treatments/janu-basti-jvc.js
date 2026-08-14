import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  januBastiHero,
  januBastiIntro,
  januBastiExplanation,
  januBastiProtocol,
  januBastiWarmOil,
  januBastiConcerns,
  januBastiBenefits,
  januBastiSuitability,
  januBastiConsultation,
  januBastiExperience,
  januBastiSessions,
  januBastiResults,
  januBastiVsPhysiotherapy,
  januBastiLocation,
  januBastiWhyJvc,
  januBastiCTA,
  januBastiFAQ,
  januBastiRelatedPages,
} from "../../data/januBastiData";

const JanuBastiTreatment = () => {
  const currentUrl = "https://vedaracare.ae/ayurveda/janu-basti-jvc/";
  const publishedDate = "2026-08-13T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Janu Basti Treatment in JVC",
      "alternateName": ["Janu Vasti", "Janu Basti", "Ayurvedic Knee Therapy", "Knee Oil Retention Therapy"],
      "url": "https://vedaracare.ae/ayurveda/janu-basti-jvc/",
      "description": "Janu Basti Treatment in JVC at Vedara Care Polyclinic is a traditional Ayurvedic knee therapy in which warm herbal oil is retained around the knee joint within a custom-formed boundary. Suitable for selected knee concerns following individual Ayurvedic assessment.",
      "procedureType": "Ayurveda",
      "bodyLocation": ["Knee joint", "Knee", "Patellofemoral region"],
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
        "name": "Jumeirah Village Circle, Dubai, UAE"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Janu Basti Treatment in JVC",
      "url": "https://vedaracare.ae/ayurveda/janu-basti-jvc/",
      "description": "Janu Basti Treatment in JVC at Vedara Care — traditional Ayurvedic knee therapy. Personalized consultation available in Jumeirah Village Circle, Dubai.",
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
          "name": "Ayurvedic Treatment in Dubai",
          "item": "https://vedaracare.ae/ayurveda-dubai/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Janu Basti Treatment in JVC",
          "item": "https://vedaracare.ae/ayurveda/janu-basti-jvc/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": januBastiFAQ.faqs.map(faq => ({
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
      "@type": "MedicalTherapy",
      "name": "Janu Basti",
      "alternateName": "Janu Vasti",
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Janu Basti Treatment in JVC — Traditional Ayurvedic Knee Therapy Guide",
      "image": "https://vedaracare.ae/images/janu-basti-knee-therapy-consultation-vedara-care-jvc.jpg",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Ayurveda Consultant"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalProcedure", "name": "Janu Basti Treatment" },
        { "@type": "MedicalTherapy", "name": "Ayurvedic Knee Therapy" }
      ],
      "mainEntityOfPage": currentUrl
    }
  ];

  const suitabilityRightFor = januBastiSuitability.rightFor;
  const suitabilityNotRight = [
    ...januBastiSuitability.seekMedicalFirst.map(s => `Seek medical first: ${s}`),
    ...januBastiSuitability.notAppropriate.map(s => `May postpone or avoid: ${s}`)
  ];

  return (
    <>
      <Head>
        <title>Janu Basti Treatment in JVC | Vedara Care Polyclinic</title>
        <meta name="description" content="Janu Basti Treatment in JVC at Vedara Care — traditional Ayurvedic knee therapy. Personalized consultation available in Jumeirah Village Circle, Dubai." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/ayurveda/janu-basti-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Janu Basti Treatment in JVC | Vedara Care Polyclinic" />
        <meta property="og:description" content="Janu Basti Treatment in JVC at Vedara Care — traditional Ayurvedic knee therapy. Personalized consultation available in Jumeirah Village Circle, Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/janu-basti-treatment-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Janu Basti Treatment in JVC | Vedara Care Polyclinic" />
        <meta name="twitter:description" content="Janu Basti Treatment in JVC at Vedara Care — traditional Ayurvedic knee therapy. Personalized consultation available in Jumeirah Village Circle, Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/janu-basti-treatment-jvc-dubai.jpg" />
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

      <AyurvedaHero {...januBastiHero} />

      <AyurvedaIntro {...januBastiIntro} />

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={januBastiExplanation.label}
        title={januBastiExplanation.title}
        description={januBastiExplanation.description}
        contentSections={januBastiExplanation.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: januBastiExplanation.image,
          altText: januBastiExplanation.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={januBastiExplanation.caption}
      />

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            TREATMENT PROTOCOL
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {januBastiProtocol.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {januBastiProtocol.description}
          </p>
          <div className="space-y-5 mb-10">
            {januBastiProtocol.steps.map((step, idx) => (
              <div key={idx} className="flex gap-5 items-start rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
                <div className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-white font-serif text-base" style={{ backgroundColor: '#C9A55A' }}>
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{step.title}</h3>
                  <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {januBastiProtocol.footer}
          </p>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={januBastiWarmOil.label}
        title={januBastiWarmOil.title}
        contentSections={januBastiWarmOil.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: "/images/traditional-ayurvedic-warm-oil-preparation-vedara.jpg",
          altText: "Traditional Ayurvedic warm oil preparation used in Janu Basti knee therapy",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
      />

      <ContentWithSidebar
        bgColor="bg-white"
        label={januBastiConcerns.label}
        title={januBastiConcerns.title}
        description={januBastiConcerns.description}
        contentSections={januBastiConcerns.concernsList.map(c => ({
          subtitle: c.title,
          description: c.description
        }))}
        sidebar={{
          image: "/images/knee-concerns-ayurvedic-assessment-jvc.jpg",
          altText: "Ayurvedic practitioner assessing knee concerns before Janu Basti treatment",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
      />

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {januBastiBenefits.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {januBastiBenefits.description}
          </p>
          <div className="grid md:grid-cols-5 gap-5 mb-10">
            {januBastiBenefits.points.map((point, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white border border-[#E5DFD3] shadow-sm text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F5F0E8' }}>
                  <span className="text-[rgb(160,113,63)] font-serif text-sm">{i + 1}</span>
                </div>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {januBastiBenefits.footer}
          </p>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            WHO MAY CONSIDER
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            Who May Consider Janu Basti?
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {januBastiSuitability.introduction}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 bg-[#F5F0E8] border border-[#E5DFD3]">
              <h3 className="text-xl font-serif mb-5 text-[rgb(26,26,26)]">Patients who inquire about Janu Basti</h3>
              <ul className="space-y-3">
                {suitabilityRightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 bg-white border border-[#E8D5C0]">
              <h3 className="text-xl font-serif mb-5 text-[rgb(26,26,26)]">Situations requiring medical assessment first or where treatment may be avoided</h3>
              <ul className="space-y-3">
                {suitabilityNotRight.slice(0, 10).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#B69769' }}>!</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-2xl p-6 bg-[#FFF8F0] border border-[#F0DFBE]">
            <p className="text-sm text-[rgb(130,90,40)] leading-relaxed mb-4">
              {januBastiSuitability.seekMedicalFooter}
            </p>
            <p className="text-xs italic text-[rgb(130,90,40)] leading-relaxed">
              {januBastiSuitability.notAppropriateFooter}
            </p>
          </div>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={januBastiConsultation.label}
        title={januBastiConsultation.title}
        description={januBastiConsultation.description}
        contentSections={[
          ...januBastiConsultation.points.map((p, i) => ({
            subtitle: `Point ${i + 1}`,
            description: p
          })),
          { subtitle: '', description: januBastiConsultation.footer }
        ]}
        sidebar={{
          image: "/images/ayurvedic-knee-assessment-vedara-care-jvc.jpg",
          altText: "Ayurvedic consultation and knee assessment for Janu Basti treatment at Vedara Care",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
      />

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              PATIENT EXPERIENCE
            </p>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {januBastiExperience.sensation.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
              {januBastiExperience.sensation.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {januBastiExperience.duration.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {januBastiExperience.duration.description}
            </p>
          </div>

          <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {januBastiExperience.recovery.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
              {januBastiExperience.recovery.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {januBastiExperience.aftercare.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
              {januBastiExperience.aftercare.description}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              TREATMENT COURSE
            </p>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {januBastiSessions.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] mb-8 leading-relaxed max-w-3xl">
              {januBastiSessions.description}
            </p>
            <div className="grid md:grid-cols-7 gap-4 mb-8">
              {januBastiSessions.points.map((point, i) => (
                <div key={i} className="rounded-xl p-4 bg-white border border-[#E5DFD3]">
                  <div className="w-8 h-8 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: '#F5F0E8' }}>
                    <span className="text-[rgb(160,113,63)] font-serif text-xs">{i + 1}</span>
                  </div>
                  <p className="text-xs text-[rgb(107,107,107)] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {januBastiSessions.footer}
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3] shadow-sm">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {januBastiResults.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {januBastiResults.description}
            </p>
          </div>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-white"
        label={januBastiVsPhysiotherapy.label}
        title={januBastiVsPhysiotherapy.title}
        description={januBastiVsPhysiotherapy.description}
        contentSections={[
          {
            subtitle: 'Physiotherapy focuses on',
            description: januBastiVsPhysiotherapy.physiotherapyPoints.join('\n\n')
          },
          {
            subtitle: '',
            description: januBastiVsPhysiotherapy.januBastiDescription
          },
          {
            subtitle: '',
            description: januBastiVsPhysiotherapy.footer
          }
        ]}
        sidebar={{
          image: "/images/janu-basti-vs-physiotherapy-knee-approach-jvc.jpg",
          altText: "Side-by-side concept of Janu Basti Ayurvedic therapy versus physiotherapy rehabilitation for knee concerns",
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
      />

      <FAQ
        bgColor="bg-[#F5F0E8]"
        label="FAQ"
        title="Frequently Asked Questions About Janu Basti"
        description="Answers to common questions about Janu Basti (Janu Vasti), suitability, treatment protocol, aftercare, results and availability in JVC, Dubai."
        faqs={januBastiFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Ayurveda Clinic in JVC", href: "/ayurveda-clinic-jvc" },
          { text: "Kativasti Treatment in Dubai", href: "/treatments/kativasti-dubai" },
          { text: "Physiotherapy in JVC", href: "/physiotherapy-jvc" },
          { text: "Knee Pain Physiotherapy Dubai", href: "/conditions/knee-pain-physiotherapy-dubai" }
        ]}
      />

      <TreatmentLocation
        {...januBastiLocation}

      />

      <ContentWithSidebar
        bgColor="bg-white"
        label="LOCAL ACCESSIBILITY"
        title={januBastiWhyJvc.title}
        contentSections={[
          { subtitle: '', description: januBastiWhyJvc.description }
        ]}
        sidebar={{
          image: januBastiWhyJvc.image,
          altText: januBastiWhyJvc.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={januBastiWhyJvc.caption}
      />

      {/* <TreatmentLocation
        bgColor="bg-[#F5F0E8]"
        label="GET IN TOUCH"
        title="Book a Janu Basti Consultation at Vedara Care Polyclinic"
        address="For patients across JVC and wider Dubai researching traditional Ayurvedic knee care options, Janu Basti is one part of the broader approach available at Vedara Care Polyclinic. Whether your interest is localized knee discomfort, stiffness, mobility support or age-related knee concerns, the starting point is the same: a proper assessment to confirm whether this therapy is the right fit for your specific case, delivered locally in JVC without needing to travel elsewhere in Dubai."
        phone="+971555736312"
        email="info@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to inquire about Janu Basti Treatment at your JVC clinic in Dubai."
        hours={[
          { day: "Monday - Saturday", time: "9:00 AM – 9:00 PM" },
          { day: "Sunday", time: "By appointment" }
        ]}
        landmarks={[
          "Binghatti Azure building, Al Barsha South Fourth",
          "Near JVC Circle roundabout, accessible from Hessa Street and Al Khail Road"
        ]}
        buttonText="Book a Consultation"
      /> */}

      <MedicalDisclaimer text={januBastiCTA.disclaimer} />

      <FinalCTA
        title={januBastiCTA.title}
        description={januBastiCTA.description}
        address={januBastiCTA.address}
        button1Text={januBastiCTA.button1Text}
        button1TextHref={januBastiCTA.button1TextHref}
        button2Text={januBastiCTA.button2Text}
        button2TextHref={januBastiCTA.button2TextHref}
      />

      <RelatedPages {...januBastiRelatedPages} />
    </>
  );
};

export default JanuBastiTreatment;
