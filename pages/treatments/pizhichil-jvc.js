import Head from 'next/head';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import {
  pizhichilHero,
  pizhichilIntro,
  pizhichilWhatIs,
  pizhichilTerminology,
  pizhichilUsedDuring,
  pizhichilWhyWarmOil,
  pizhichilFeelLike,
  pizhichilHowPerformed,
    pizhichilConcerns,
  pizhichilDoshaAndPanchakarma,
  pizhichilComparisons,
  pizhichilSuitability,
  pizhichilHeatSafety,
  pizhichilPracticalGuidance,
  pizhichilCost,
    pizhichilWhyVedara,
  pizhichilRelatedConditions,
  pizhichilFAQ,
    pizhichilCTA,
  pizhichilRelatedPages,
} from "../../data/pizhichilJvcData";

const PAGE = {
  url: 'https://vedaracare.ae/treatments/pizhichil-jvc/',      // trailing slash
  title: 'Pizhichil Treatment in JVC, Dubai | Oil Bath | Vedara Care',   // 58 characters
  description: 'Pizhichil (Ayurvedic warm oil bath) in JVC, Dubai, near Circle Mall: doctor-prescribed oils, same-gender therapists, for stiffness, joint pain and recovery.',   // 156 characters
  image: 'https://vedaracare.ae/images/patient-receiving-pizhichil-oil-therapy-jvc.webp',
  published: '2026-08-14T08:00:00+04:00',
  reviewed: '2026-11-10',   // the day Dr. Zainab signs off this version
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/pizhichil-jvc/`;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = '2026-11-10';
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': ORG_ID,
      name: SITE.name,
      url: `${SITE_URL}/`,
      telephone: SITE.phone,
      email: 'booking@vedaracare.ae',
      address: SCHEMA_ADDRESS,
      geo: { '@type': 'GeoCoordinates', latitude: 25.0683417, longitude: 55.2120945 },
      hasMap: SITE.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '22:00' }],
      medicalSpecialty: ['Ayurveda', 'Physiotherapy', 'Dermatology'],
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license',
        name: 'DHA Healthcare Facility Licence', identifier: SITE.facilityLicence },
    },
    {
      '@type': 'Physician',
      '@id': ZAINAB_ID,
      name: 'Dr. Zainab Sheikh',
      url: `${SITE_URL}/doctors/dr-zainab-ayurveda/`,
      medicalSpecialty: 'Ayurveda',
      knowsLanguage: ['en', 'ml', 'hi'],
      worksFor: { '@id': ORG_ID },
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Pizhichil Treatment in JVC, Dubai | Oil Bath | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/patient-receiving-pizhichil-oil-therapy-jvc.webp`,
      datePublished: '2026-08-14',
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Pizhichil',
      alternateName: ['Sarvanga Dhara', 'Kaya Seka', 'Taila Dhara', 'Ayurvedic oil bath', 'Pizhichil treatment'],
      description: 'A classical Kerala Ayurvedic therapy in which warm medicated oil is poured over the body in a steady stream while it is gently massaged in.',
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Muscle stiffness', 'Joint stiffness', 'Back and neck tension', 'Weakness after illness']
        .map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Fever', 'Acute infection', 'Open wounds or skin infection', 'Acute injury', 'Active inflammation',
        'Reduced sensation to heat', 'Certain cardiovascular conditions', 'Uncontrolled medical conditions', 'Pregnancy without medical clearance']
        .map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Burns if overheated', 'Skin irritation', 'Dizziness'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Pizhichil in JVC, Dubai',
      serviceType: 'Pizhichil',
      provider: { '@id': ORG_ID },
      areaServed: ['Jumeirah Village Circle (JVC)', 'Jumeirah Village Triangle (JVT)', 'Al Barsha South', 'Arjan', 'Dubai']
        .map((name) => ({ '@type': 'Place', name })),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/book/` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurvedic Treatment in Dubai', item: `${SITE_URL}/ayurveda-dubai/` },
        { '@type': 'ListItem', position: 3, name: 'Pizhichil in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: pizhichilFAQ.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PizhichilJVC = () => {
  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE.url} />
        <link rel="alternate" hrefLang="en-AE" href={PAGE.url} />
        <link rel="alternate" hrefLang="x-default" href={PAGE.url} />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content={PAGE.url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content={PAGE.image} />
        <meta property="article:published_time" content={PAGE.published} />
        <meta property="article:modified_time" content={`${PAGE.reviewed}T09:00:00+04:00`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <meta name="twitter:image" content={PAGE.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      {/* Hero Section */}
      <AyurvedaHero {...pizhichilHero} />

      {/* Quick Answer Section */}
      <AyurvedaIntro {...pizhichilIntro} />

      {/* Section 1: What Is Pizhichil? */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={pizhichilWhatIs.label}
        title={pizhichilWhatIs.title}
        description={pizhichilWhatIs.description}
        contentSections={pizhichilWhatIs.paragraphs.map(p => ({ subtitle: '', description: p }))}
        sidebar={{
          image: pizhichilWhatIs.image,
          altText: pizhichilWhatIs.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={pizhichilWhatIs.caption}
      />

      {/* Section 2: Terminology - Pizhichil vs Sarvanga Dhara */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pizhichilTerminology.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
            {pizhichilTerminology.title}
          </h2>
          {pizhichilTerminology.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-sm md:text-base text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      </div>

      {/* Section 3: Which Oils Are Used During Pizhichil? */}
      <section className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-3 uppercase">
              {pizhichilUsedDuring.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(26,26,26)]">
              {pizhichilUsedDuring.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-8 items-center">
            <div className="space-y-4">
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                {pizhichilUsedDuring.description}
              </p>
              <p className="text-xs text-[rgb(107,107,107)] italic pt-2">
                {pizhichilUsedDuring.caption}
              </p>
            </div>

            <div className="w-full rounded-xl overflow-hidden h-[300px] md:h-[320px] shadow-sm">
              <img
                src={pizhichilUsedDuring.image}
                alt={pizhichilUsedDuring.alt}
                width={1080}
                height={1080}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Is Warm Oil Used? */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pizhichilWhyWarmOil.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pizhichilWhyWarmOil.title}
          </h2>
          <div className="space-y-4 text-base text-[rgb(107,107,107)] leading-relaxed max-w-4xl">
            {pizhichilWhyWarmOil.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: What Does Pizhichil Feel Like? */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={pizhichilFeelLike.label}
        title={pizhichilFeelLike.title}
        contentSections={[
          { subtitle: '', description: pizhichilFeelLike.description },
          { subtitle: '', description: pizhichilFeelLike.footer }
        ]}
        sidebar={{
          image: pizhichilFeelLike.image,
          altText: pizhichilFeelLike.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={pizhichilFeelLike.caption}
      />

      {/* Section 6: How Is Pizhichil Performed? */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={pizhichilHowPerformed.label}
        title={pizhichilHowPerformed.title}
        description={pizhichilHowPerformed.description}
        contentSections={pizhichilHowPerformed.steps.map(step => ({
          subtitle: step.title,
          description: step.description
        }))}
        sidebar={{
          image: pizhichilHowPerformed.image,
          altText: pizhichilHowPerformed.alt,
          width: "w-full",
          height: "h-[420px]",
          borderPosition: "right"
        }}
        footer={pizhichilHowPerformed.caption}
      />

      

      {/* Section 8-12: Indications & Concerns */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={pizhichilConcerns.label}
        title={pizhichilConcerns.title}
        description={pizhichilConcerns.description}
        contentSections={pizhichilConcerns.concernsList.map(c => ({
          subtitle: c.title,
          description: c.description
        }))}
        sidebar={{
          image: "/images/patient-receiving-pizhichil-oil-therapy-jvc.webp",
          altText: "Pizhichil for stiffness and recovery at Vedara Care, JVC Dubai",
          width: "w-full",
          height: "h-[550px]",
          borderPosition: "left"
        }}
        footer="Pizhichil may be explored for muscle stiffness, joint stiffness, back & neck discomfort, and relaxation."
      />

      {/* Section 13-14: Dosha Assessment & Panchakarma */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pizhichilDoshaAndPanchakarma.dosha.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {pizhichilDoshaAndPanchakarma.dosha.title}
            </h2>
            {pizhichilDoshaAndPanchakarma.dosha.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pizhichilDoshaAndPanchakarma.panchakarma.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
              {pizhichilDoshaAndPanchakarma.panchakarma.title}
            </h2>
            {pizhichilDoshaAndPanchakarma.panchakarma.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4 last:mb-0"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section 15: Comparisons */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pizhichilComparisons.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6  text-[rgb(26,26,26)]">
            {pizhichilComparisons.title}
          </h2>
          <p className="text-base text-[rgb(107,107,107)] mb-12 max-w-3xl leading-relaxed">
            {pizhichilComparisons.description}
          </p>

          {/* Comparison Table */}
          {pizhichilComparisons.comparisonTable && (
            <div className="mb-16">
              <h4 className="text-lg font-serif mb-5 text-[rgb(26,26,26)]">
                {pizhichilComparisons.comparisonTable.header}
              </h4>
              <div className="overflow-hidden rounded-2xl border border-[#E5DFD3]">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ backgroundColor: '#F5F0E8' }}>
                      {pizhichilComparisons.comparisonTable.columns.map((c, i) => (
                        <th key={i} className="px-5 py-4 text-left font-semibold text-[rgb(26,26,26)] border-b border-[#E5DFD3]">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {pizhichilComparisons.comparisonTable.rows.map((row, ri) => (
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
                {pizhichilComparisons.comparisonTable.footer}
              </p>
            </div>
          )}

          {/* Comparison Cards */}
          <div className="space-y-8">
            {pizhichilComparisons.comparisons.map((c, idx) => (
              <div key={idx} className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
                <h3 className="text-xl font-serif mb-4 text-[rgb(26,26,26)]">{c.name}</h3>
                {c.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 16-17: Suitability & Contraindications */}
      <section className="bg-[#FEFDFC] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Who May Consider Pizhichil */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                SUITABILITY
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who May Consider Pizhichil?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                {pizhichilSuitability.introduction}
              </p>
              <ul className="space-y-3 mb-6">
                {pizhichilSuitability.rightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {pizhichilSuitability.rightForFooter}
              </p>
            </div>

            {/* Who Should Avoid or Delay Pizhichil */}
            <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
              <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
                CONTRAINDICATIONS
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-5 text-[rgb(26,26,26)]">
                Who Should Avoid or Delay Pizhichil?
              </h2>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-6">
                Certain situations may mean that Pizhichil needs to be postponed, modified, or cleared by a doctor before proceeding. These can include:
              </p>
              <ul className="space-y-3 mb-6">
                {pizhichilSuitability.notRightFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#B69769' }}>!</span>
                    <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
                {pizhichilSuitability.notRightForFooter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: Heat and Burn Safety */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={pizhichilHeatSafety.label}
        title={pizhichilHeatSafety.title}
        description={pizhichilHeatSafety.description}
        contentSections={pizhichilHeatSafety.risks.map((risk, i) => ({
          subtitle: `Risk Factor ${i + 1}`,
          description: risk
        }))}
        sidebar={{
          image: pizhichilHeatSafety.image,
          altText: pizhichilHeatSafety.alt,
          width: "w-full",
          height: "h-[450px]",
          borderPosition: "right"
        }}
        footer={pizhichilHeatSafety.caption}
      />

      {/* Section 19-22: Preparation, Aftercare, Recovery & Sessions */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Preparation */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {pizhichilPracticalGuidance.preparation.title}
            </h3>
            {pizhichilPracticalGuidance.preparation.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* Aftercare */}
          <ContentWithSidebar
            bgColor="bg-[#F5F0E8]"
            label="POST-TREATMENT"
            title={pizhichilPracticalGuidance.aftercare.title}
            description={pizhichilPracticalGuidance.aftercare.paragraphs[0]}
            contentSections={[
              { subtitle: 'Guidance', description: pizhichilPracticalGuidance.aftercare.paragraphs[1] }
            ]}
            sidebar={{
              image: pizhichilPracticalGuidance.aftercare.image,
              altText: pizhichilPracticalGuidance.aftercare.alt,
              width: "w-full",
              height: "h-[300px]",
              borderPosition: "left"
            }}
            footer={pizhichilPracticalGuidance.aftercare.caption}
          />

          {/* Recovery */}
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {pizhichilPracticalGuidance.recovery.title}
            </h3>
            {pizhichilPracticalGuidance.recovery.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-[rgb(107,107,107)] leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          {/* Sessions & Duration */}
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[rgb(26,26,26)]">
              {pizhichilPracticalGuidance.sessionsAndDuration.title}
            </h3>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
              {pizhichilPracticalGuidance.sessionsAndDuration.sessionsText}
            </p>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
              {pizhichilPracticalGuidance.sessionsAndDuration.durationText}
            </p>
          </div>
        </div>
      </div>

      {/* Section 24: Cost of Pizhichil in Dubai */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pizhichilCost.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              {pizhichilCost.title}
            </h2>
            <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6 max-w-3xl">
              {pizhichilCost.description}
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {pizhichilCost.factors.map((f, i) => (
                <div key={i} className="rounded-xl p-4 bg-[#FAF7F2] border border-[#E5DFD3] text-sm text-[rgb(26,26,26)] flex gap-3 items-center">
                  <span className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-[rgb(107,107,107)] leading-relaxed">
              {pizhichilCost.footer}
            </p>
          </div>
        </div>
      </div>

      {/* Section 25: Why Vedara Care */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              {pizhichilWhyVedara.label}
            </p>
            <h3 className="text-2xl font-serif mb-5 text-[rgb(26,26,26)]">
              {pizhichilWhyVedara.title}
            </h3>
            <ul className="space-y-3 mb-6">
              {pizhichilWhyVedara.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#C9A55A' }}>✓</span>
                  <span className="text-sm text-[rgb(107,107,107)] leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />

        <FAQ
        bgColor="bg-white"
        label={pizhichilFAQ.label}
        title={pizhichilFAQ.title}
        description="Answers reviewed by Dr. Zainab Sheikh."
        faqs={pizhichilFAQ.faqs}
        buttonText="Book a consultation"
        buttonHref="/book/"
        sidebarLinks={[
          { text: "Abhyanga", href: "/treatments/abhyanga-dubai/" },
          { text: "Shirodhara", href: "/treatments/shirodhara-dubai/" },
          { text: "Kizhi (Elakizhi)", href: "/treatments/patra-pinda-sweda-jvc/" },
          { text: "Panchakarma", href: "/treatments/panchakarma-dubai/" }
        ]}
      />

      {/* PART 5 — RELATED CONDITIONS AND TREATMENTS Section */}
      <section className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            {pizhichilRelatedConditions.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            {pizhichilRelatedConditions.title}
          </h2>
          <div className="space-y-4 text-base text-[rgb(107,107,107)] leading-relaxed max-w-4xl">
            <p>
              Pizhichil is rarely considered in isolation. Depending on your concerns, an Ayurvedic practitioner may discuss it alongside other therapies or as part of a broader treatment plan. If you are exploring Ayurveda more generally, the <Link href="/ayurveda-clinic-jvc/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Ayurveda Clinic in JVC</Link> page offers a wider overview of the services available, while <Link href="/ayurveda-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Ayurveda in Dubai</Link> covers the practice across the city more broadly.
            </p>
            <p>
              For patients interested in a more comprehensive, multi-step Ayurvedic approach, <Link href="/treatments/panchakarma-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Panchakarma</Link> describes a structured programme that may, in some cases, include therapies similar to Pizhichil. Those specifically curious about massage-based Ayurvedic care can read about <Link href="/treatments/abhyanga-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Abhyanga</Link>, while <Link href="/treatments/shirodhara-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Shirodhara</Link> explains the related but distinct head-focused pouring therapy. Patients weighing warmth-based options may also want to compare <Link href="/treatments/njavarakizhi-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Njavarakizhi</Link>, which uses herbal boluses rather than poured liquid, or <Link href="/treatments/kativasti-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Kativasti</Link>, a localized oil-retention therapy often considered for lower back concerns.
            </p>
            <p>
              If your primary concern is a specific condition rather than a specific therapy, it may be more useful to start with a condition page. These include <Link href="/conditions/back-pain-ayurveda-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Back Pain (Ayurveda)</Link>, <Link href="/conditions/back-pain-physiotherapy-jvc/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Back Pain (Physiotherapy)</Link>, <Link href="/conditions/arthritis-ayurveda-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Arthritis (Ayurveda)</Link>, and <Link href="/conditions/frozen-shoulder-dubai/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Frozen Shoulder</Link>. Where a condition is primarily musculoskeletal and involves movement, strength or functional limitation, <Link href="/physiotherapy-jvc/" className="text-[rgb(160,113,63)] underline font-medium hover:opacity-80 font-semibold">Physiotherapy in JVC</Link> is a separate, evidence-based service that may be more directly appropriate, either instead of or alongside Ayurvedic care.
            </p>
          </div>
        </div>
      </section>

      <TreatmentLocation
        bgColor="bg-[#FAF7F2]"
        label="VISIT US"
        title="Pizhichil in JVC, near Circle Mall."
        address="Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai"
        phone="+971555736312"
        email="booking@vedaracare.ae"
        whatsapp="+971555736312"
        whatsappMessage="Hello Vedara Care, I would like to ask about Pizhichil at your JVC clinic."
        hours={[{ day: "Monday - Sunday", time: "9:00 AM - 10:00 PM" }]}
        landmarks={["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"]}
        description="Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City."
        distances={[]}
        buttonText="Book a Pizhichil consultation"
        buttonHref="/book/"
      />

      <MedicalDisclaimer text={pizhichilCTA.disclaimer} />

      <FinalCTA
        title={pizhichilCTA.title}
        description={pizhichilCTA.description}
        address={pizhichilCTA.address}
        button1Text={pizhichilCTA.button1Text}
        button1TextHref={pizhichilCTA.button1TextHref}
        button2Text={pizhichilCTA.button2Text}
        button2TextHref={pizhichilCTA.button2TextHref}
      />

      <RelatedPages {...pizhichilRelatedPages} />
    </>
  );
};

export default PizhichilJVC;
