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
  nasyaTherapyHero,
  nasyaTherapyIntro,
  nasyaTherapyExplanation,
  nasyaTherapyPanchakarma,
  nasyaTherapyTypes,
  nasyaTherapyPreparation,
  nasyaTherapyConcerns,
  nasyaTherapyBenefits,
  nasyaTherapySuitability,
  nasyaTherapyConsultation,
  nasyaTherapyProtocol,
  nasyaTherapyExperience,
  nasyaTherapyLocation,
  nasyaTherapyWhyJvc,
  nasyaTherapyCTA,
  nasyaTherapyFAQ,
  nasyaTherapyRelatedPages,
} from "../../data/nasyaTherapyData";

const NasyaTherapyJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/nasya-therapy-jvc/";
  const publishedDate = "2026-08-13T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Nasya Therapy in JVC",
      "alternateName": ["Nasya", "Nasya Treatment", "Ayurvedic Nasal Therapy", "Nasya Panchakarma"],
      "url": "https://vedaracare.ae/treatments/nasya-therapy-jvc/",
      "description": "Nasya Therapy in JVC at Vedara Care Polyclinic is a traditional Ayurvedic nasal therapy in which a selected medicated oil or preparation is administered through the nasal passages under practitioner guidance. Suitable for selected head and sinus concerns following individual Ayurvedic assessment.",
      "procedureType": "Ayurveda",
      "bodyLocation": ["Nasal passages", "Head", "Neck", "Sinuses"],
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
      "name": "Nasya Therapy in JVC",
      "url": "https://vedaracare.ae/treatments/nasya-therapy-jvc/",
      "description": "Nasya Therapy in JVC at Vedara Care — traditional Ayurvedic nasal therapy for head and sinus concerns. Book a professional consultation in JVC, Dubai.",
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
          "name": "Nasya Therapy in JVC",
          "item": "https://vedaracare.ae/treatments/nasya-therapy-jvc/"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": nasyaTherapyFAQ.faqs.map(faq => ({
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
      "name": "Nasya",
      "alternateName": "Nasya Therapy",
      "sameAs": "https://en.wikipedia.org/wiki/Panchakarma"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Nasya Therapy in JVC — Traditional Ayurvedic Nasal Therapy Guide",
      "image": "https://vedaracare.ae/images/nasya-procedure-jvc-ayurveda.webp",
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
        { "@type": "MedicalProcedure", "name": "Nasya Therapy" },
        { "@type": "MedicalTherapy", "name": "Ayurvedic Nasal Therapy" }
      ],
      "mainEntityOfPage": currentUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Nasya Therapy in JVC",
      "url": "https://vedaracare.ae/treatments/nasya-therapy-jvc/",
      "description": "Nasya Therapy in JVC at Vedara Care Polyclinic — a traditional Ayurvedic nasal therapy involving the administration of a selected medicated preparation, offered as part of an individualized Ayurvedic consultation in Jumeirah Village Circle, Dubai.",
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      },
      "about": {
        "@type": "MedicalTherapy",
        "name": "Nasya",
        "description": "A traditional Ayurvedic therapy involving the administration of a selected medicated preparation through the nasal passages, traditionally associated with care of the head and neck region."
      },
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
          "addressLocality": "Jumeirah Village Circle (JVC)",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        },
        "url": "https://vedaracare.ae"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Nasya Therapy",
      "name": "Nasya Therapy in JVC",
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
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
      },
      "url": "https://vedaracare.ae/treatments/nasya-therapy-jvc/"
    }
  ];

  const suitabilityRightFor = nasyaTherapySuitability.rightFor;
  const suitabilityNotRight = [
    ...nasyaTherapySuitability.seekMedicalFirst.map(s => `Seek medical first: ${s}`),
    ...nasyaTherapySuitability.notAppropriate.map(s => `May postpone or avoid: ${s}`)
  ];

  return (
    <>
      <Head>
        <title>Nasya Therapy in JVC | Vedara Care Polyclinic</title>
        <meta name="description" content="Nasya Therapy in JVC at Vedara Care — traditional Ayurvedic nasal therapy for head and sinus concerns. Book a professional consultation in JVC, Dubai." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/nasya-therapy-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Nasya Therapy in JVC | Vedara Care Polyclinic" />
        <meta property="og:description" content="Nasya Therapy in JVC at Vedara Care — traditional Ayurvedic nasal therapy for head and sinus concerns. Book a professional consultation in JVC, Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/nasya-therapy-jvc-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:modified_time" content={modifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nasya Therapy in JVC | Vedara Care Polyclinic" />
        <meta name="twitter:description" content="Nasya Therapy in JVC at Vedara Care — traditional Ayurvedic nasal therapy for head and sinus concerns. Book a professional consultation in JVC, Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/nasya-therapy-jvc-dubai.jpg" />
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

      <AyurvedaHero {...nasyaTherapyHero} />

      <AyurvedaIntro {...nasyaTherapyIntro} />

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={nasyaTherapyExplanation.label}
        title={nasyaTherapyExplanation.title}
        description={nasyaTherapyExplanation.description}
        contentSections={nasyaTherapyExplanation.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: nasyaTherapyExplanation.image,
          altText: nasyaTherapyExplanation.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={nasyaTherapyExplanation.caption}
      />

      <ContentWithSidebar
        bgColor="bg-white"
        label={nasyaTherapyPanchakarma.label}
        title={nasyaTherapyPanchakarma.title}
        contentSections={nasyaTherapyPanchakarma.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: nasyaTherapyPanchakarma.image,
          altText: nasyaTherapyPanchakarma.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={nasyaTherapyPanchakarma.caption}
      />

      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nasyaTherapyTypes.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {nasyaTherapyTypes.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {nasyaTherapyTypes.description}
          </p>
          <div className="grid md:grid-cols-5 gap-8 mb-10 items-start">
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-[#E5DFD3] bg-white order-2 md:order-1">
              <img
                src="/images/practitioner-preparing-nasya-oil-jvc.jpg"
                alt="Ayurvedic practitioner preparing medicated oil for Nasya therapy"
                className="w-full h-[340px] object-cover"
              />
              <p className="text-xs italic text-[rgb(107,107,107)] px-5 py-3 leading-relaxed">
                The selected preparation is handled with care before administration.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5 order-1 md:order-2">
              {nasyaTherapyTypes.typesList.map((type, idx) => (
                <div key={idx} className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
                  <h3 className="text-lg font-serif mb-3 text-[rgb(26,26,26)]">{type.title}</h3>
                  <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {nasyaTherapyTypes.footer}
          </p>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {nasyaTherapyPreparation.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {nasyaTherapyPreparation.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {nasyaTherapyPreparation.description}
          </p>
          <div className="grid md:grid-cols-5 gap-8 mb-10 items-start">
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              {nasyaTherapyPreparation.points.map((point, i) => (
                <div key={i} className="rounded-2xl p-5 bg-[#FAF7F2] border border-[#E5DFD3] shadow-sm">
                  <div className="w-10 h-10 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: '#F5F0E8' }}>
                    <span className="text-[rgb(160,113,63)] font-serif text-sm">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-[#E5DFD3] bg-[#FAF7F2]">
              <img
                src="/images/nasya-treatment-preparation-vedara-care.jpg"
                alt="Preparation of an Ayurvedic Nasya treatment at Vedara Care Polyclinic"
                className="w-full h-[380px] object-cover"
              />
              <p className="text-xs italic text-[rgb(107,107,107)] px-5 py-3 leading-relaxed">
                Each preparation is selected individually based on assessment.
              </p>
            </div>
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {nasyaTherapyPreparation.footer}
          </p>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={nasyaTherapyConcerns.label}
        title={nasyaTherapyConcerns.title}
        description={nasyaTherapyConcerns.description}
        contentSections={nasyaTherapyConcerns.concernsList.map(c => ({
          subtitle: c.title,
          description: c.description
        }))}
        sidebar={{
          image: "/images/migraine-diary-review-consultation-vedara-jvc.webp",
          altText: "Ayurvedic practitioner assessing head and sinus concerns before Nasya treatment",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
      />

      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {nasyaTherapyBenefits.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {nasyaTherapyBenefits.description}
          </p>
          <div className="grid md:grid-cols-5 gap-5 mb-10">
            {nasyaTherapyBenefits.points.map((point, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white border border-[#E5DFD3] shadow-sm text-center">
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F5F0E8' }}>
                  <span className="text-[rgb(160,113,63)] font-serif text-sm">{i + 1}</span>
                </div>
                <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
            {nasyaTherapyBenefits.footer}
          </p>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            WHO MAY CONSIDER
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            Who May Consider Nasya?
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-10 max-w-3xl leading-relaxed">
            {nasyaTherapySuitability.introduction}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 bg-[#F5F0E8] border border-[#E5DFD3]">
              <h3 className="text-xl font-serif mb-5 text-[rgb(26,26,26)]">Patients who inquire about Nasya</h3>
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
              {nasyaTherapySuitability.seekMedicalFooter}
            </p>
            <p className="text-xs italic text-[rgb(130,90,40)] leading-relaxed">
              {nasyaTherapySuitability.notAppropriateFooter}
            </p>
          </div>
        </div>
      </div>

      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={nasyaTherapyConsultation.label}
        title={nasyaTherapyConsultation.title}
        description={nasyaTherapyConsultation.description}
        contentSections={[
          ...nasyaTherapyConsultation.points.map((p, i) => ({
            subtitle: `Point ${i + 1}`,
            description: p
          })),
          { subtitle: '', description: nasyaTherapyConsultation.footer }
        ]}
        sidebar={{
          image: "/images/nasya-therapy-consultation-jvc.jpg",
          altText: "Ayurvedic practitioner consulting a patient about Nasya Therapy in JVC",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "left"
        }}
        footer="Every Nasya treatment plan begins with an individual consultation."
      />

      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            TREATMENT PROTOCOL
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {nasyaTherapyProtocol.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {nasyaTherapyProtocol.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden border border-[#E5DFD3] bg-[#FAF7F2]">
              <img
                src="/images/nasya-treatment-setup-jvc.jpg"
                alt="Professional Nasya Ayurvedic treatment setup in JVC"
                className="w-full h-[300px] object-cover"
              />
              <p className="text-xs italic text-[rgb(107,107,107)] px-5 py-3 leading-relaxed">
                A calm, professional setting for Nasya therapy.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#E5DFD3] bg-[#FAF7F2]">
              <img
                src="/images/ayurvedic-head-face-preparation-nasya.jpg"
                alt="Ayurvedic head and face preparation before Nasya therapy"
                className="w-full h-[300px] object-cover"
              />
              <p className="text-xs italic text-[rgb(107,107,107)] px-5 py-3 leading-relaxed">
                Some protocols include gentle preparatory steps before treatment.
              </p>
            </div>
          </div>
          <div className="space-y-5 mb-10">
            {nasyaTherapyProtocol.steps.map((step, idx) => (
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
            {nasyaTherapyProtocol.footer}
          </p>
        </div>
      </div>

      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-4">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                PATIENT EXPERIENCE
              </p>
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
                {nasyaTherapyExperience.sensation.title}
              </h3>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
                {nasyaTherapyExperience.sensation.description}
              </p>
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-[#E5DFD3] bg-white">
              <img
                src="/images/patient-receiving-nasya-therapy-dubai.jpg"
                alt="Patient receiving supervised Nasya Ayurvedic therapy in Dubai"
                className="w-full h-[320px] object-cover"
              />
              <p className="text-xs italic text-[rgb(107,107,107)] px-5 py-3 leading-relaxed">
                Nasya is always carried out under practitioner supervision.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {nasyaTherapyExperience.pain.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
              {nasyaTherapyExperience.pain.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {nasyaTherapyExperience.duration.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl">
              {nasyaTherapyExperience.duration.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {nasyaTherapyExperience.recovery.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
              {nasyaTherapyExperience.recovery.description}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-[#E5DFD3] bg-white">
              <img
                src="/images/nasya-aftercare-consultation-jvc.jpg"
                alt="Post-treatment consultation following Nasya therapy in JVC"
                className="w-full h-[320px] object-cover"
              />
              <p className="text-xs italic text-[rgb(107,107,107)] px-5 py-3 leading-relaxed">
                Aftercare guidance is discussed after every session.
              </p>
            </div>
            <div className="md:col-span-3 space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
                {nasyaTherapyExperience.aftercare.title}
              </h3>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed max-w-3xl whitespace-pre-line">
                {nasyaTherapyExperience.aftercare.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <FAQ
        bgColor="bg-[#F5F0E8]"
        label="FAQ"
        title="Frequently Asked Questions About Nasya Therapy"
        description="Answers to common questions about Nasya, suitability, treatment protocol, aftercare, and availability in JVC, Dubai."
        faqs={nasyaTherapyFAQ.faqs}
        buttonText="Book Consultation"
        buttonHref="/book"
        sidebarLinks={[
          { text: "Ayurveda Clinic in JVC", href: "/ayurveda-clinic-jvc" },
          { text: "Panchakarma Treatment in Dubai", href: "/treatments/panchakarma-dubai" },
          { text: "Shirodhara in Dubai", href: "/treatments/shirodhara-dubai" },
          { text: "Migraine Ayurveda in Dubai", href: "/conditions/migraine-ayurveda-dubai" }
        ]}
      />

      <TreatmentLocation
        {...nasyaTherapyLocation}
      />

      <ContentWithSidebar
        bgColor="bg-white"
        label="LOCAL ACCESSIBILITY"
        title={nasyaTherapyWhyJvc.title}
        contentSections={[
          { subtitle: '', description: nasyaTherapyWhyJvc.description }
        ]}
        sidebar={{
          image: "/images/vedara-care-ayurveda-environment-jvc.jpg",
          altText: "Vedara Care Polyclinic Ayurveda treatment environment in Jumeirah Village Circle",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer="Vedara Care Polyclinic, Jumeirah Village Circle, Dubai."
      />

     
      <MedicalDisclaimer text={nasyaTherapyCTA.disclaimer} />

      <FinalCTA
        title={nasyaTherapyCTA.title}
        description={nasyaTherapyCTA.description}
        address={nasyaTherapyCTA.address}
        button1Text={nasyaTherapyCTA.button1Text}
        button1TextHref={nasyaTherapyCTA.button1TextHref}
        button2Text={nasyaTherapyCTA.button2Text}
        button2TextHref={nasyaTherapyCTA.button2TextHref}
      />

      <RelatedPages {...nasyaTherapyRelatedPages} />
    </>
  );
};

export default NasyaTherapyJVC;
