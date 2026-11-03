import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import TreatmentLocationCustom from '../../components/ayurveda/TreatmentLocationCustom';
import {
  ayurvedaIbsHero,
  ayurvedaIbsIntro,
  ayurvedaIbsRedFlags,
  ayurvedaIbsMechanism1,
  ayurvedaIbsPillars,
  ayurvedaIbsArthritisTypes,
  ayurvedaIbsPrograms,
  ayurvedaIbsFaqs,
  ayurvedaIbsFinalCTA,
  ayurvedaIbsRelatedPages,
  ayurvedaIbsTreatmentLocationCustom,
} from '../../data/ayurvedaIbs';

const PAGE = {
  url: 'https://vedaracare.ae/conditions/ibs-ayurveda-dubai/',
  title: 'Ayurvedic Treatment for IBS & Digestion, JVC Dubai | Vedara',   // 59 characters
  description: 'Ayurvedic care for IBS, acidity, gastritis, bloating and constipation in JVC, Dubai, with a GP for basic tests and referral at the same clinic.',   // 143 characters
  image: 'https://vedaracare.ae/images/ibs-ayurveda-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/conditions/ibs-ayurveda-dubai/`;
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
      name: 'Ayurvedic Treatment for IBS & Digestion, JVC Dubai | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/ibs-ayurveda-dubai-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Irritable bowel syndrome',
      alternateName: ['IBS', 'Grahani'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic treatment for IBS and digestive problems',
      alternateName: ['Ayurveda for IBS', 'Grahani treatment', 'Ayurvedic treatment for acidity', 'Ayurvedic treatment for gastritis', 'Ayurvedic treatment for constipation'],
      description: "Ayurvedic management of IBS and digestive problems through diet, digestion-focused herbs, routine and stress care, with Panchakarma only where needed; GP tests and referral at the same clinic.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Irritable bowel syndrome', 'Functional dyspepsia', 'Gastritis', 'Acid reflux', 'Chronic constipation', 'Bloating'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Rectal bleeding before assessment', 'Unexplained weight loss before assessment', 'Inflammatory bowel disease flare'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Digestive upset from herbs', 'Herb-medicine interactions if unsupervised'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic treatment for IBS and digestive problems in JVC, Dubai',
      serviceType: 'Ayurvedic treatment for IBS and digestive problems',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic treatment for IBS and digestive problems in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: ayurvedaIbsFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const AyurvedaIbsDubai = () => {
  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={PAGE.url} />
        <link rel="alternate" hrefLang="en-AE" href={PAGE.url} />
        <link rel="alternate" hrefLang="x-default" href={PAGE.url} />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content={PAGE.url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content={PAGE.image} />
        <meta property="article:published_time" content={`${PAGE.reviewed}T09:00:00+04:00`} />
        <meta property="article:modified_time" content={`${PAGE.reviewed}T09:00:00+04:00`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <meta name="twitter:image" content={PAGE.image} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Section 1: Hero */}
      <AyurvedaHero {...ayurvedaIbsHero} />

      {/* Section 2: Intro */}
      <AyurvedaIntro {...ayurvedaIbsIntro} />

      {/* Section 2b: Red Flags */}
      <ClinicalBoundaries {...ayurvedaIbsRedFlags} />

      {/* Section 3: History & Framework */}
      <TreatmentMechanism {...ayurvedaIbsMechanism1} />

      {/* Section 4: Condition Phenotypes */}
      <ArthritisTypes 
        {...ayurvedaIbsArthritisTypes} 
        bgColor="bg-white"
        cardBg="bg-[#FAF7F2]" 
      />

      {/* Section 5: Treatment Pillars */}
      <ArthritisPillars {...ayurvedaIbsPillars} />

      {/* Section 6: Treatment Programs */}
      <TreatmentPrograms 
        {...ayurvedaIbsPrograms}
        bgColor="bg-white"
        cardBg="bg-[#FFFFFF]"
        buttonBg="#C9A55B"
        buttonText="Book Assessment"
      />

      {/* Section 7: Reviews */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />

      {/* Section 8: FAQ */}
      <FAQ {...ayurvedaIbsFaqs} />

      {/* Section 9: Treatment Location */}
      <TreatmentLocationCustom {...ayurvedaIbsTreatmentLocationCustom} />

      {/* Section 10: Final CTA */}
      <FinalCTA {...ayurvedaIbsFinalCTA} />

      {/* Section 11: Related Pages */}
      <RelatedPages {...ayurvedaIbsRelatedPages} />
    </>
  );
};

export default AyurvedaIbsDubai;
