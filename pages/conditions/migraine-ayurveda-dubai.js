import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import PositioningStatement from '../../components/ayurveda/PositioningStatement';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';

import {
  migraineHero,
  migraineIntro,
  migrainePatterns,
  migraineMechanism,
  migrainePillars,
  migraineBoundaries,
  migraineProtocol,
  migrainePositioning,
  migraineLocation,
  migrainePrograms,
  migraineFaqs,
  migraineCTA,
  migraineRelatedPages
} from '../../data/migraineData';

const PAGE = {
  url: 'https://vedaracare.ae/conditions/migraine-ayurveda-dubai/',
  title: 'Ayurvedic Treatment for Migraine in JVC, Dubai | Vedara Care',   // 60 characters
  description: 'Ayurvedic migraine care in JVC, Dubai: Shirodhara, Nasya and herbs alongside your neurologist, with a GP check and referral at the same clinic.',   // 143 characters
  image: 'https://vedaracare.ae/images/conditions/migraine-ayurveda-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/conditions/migraine-ayurveda-dubai/`;
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
      name: 'Ayurvedic Treatment for Migraine in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/conditions/migraine-ayurveda-dubai-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Migraine',
      alternateName: ['Ardhavabhedaka'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic treatment for migraine',
      alternateName: ['Ayurveda for migraine', 'Ardhavabhedaka treatment', 'Ayurvedic migraine care'],
      description: "Complementary Ayurvedic care for diagnosed migraine — Shirodhara, Nasya, prescribed herbs, routine and trigger management, and Panchakarma or Siravedha where suitable — alongside neurological care.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Migraine without aura', 'Migraine with aura', 'Chronic migraine', 'Menstrual migraine', 'Vestibular migraine'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Undiagnosed new or changed headache', 'Thunderclap headache', 'Headache with neurological symptoms', 'Headache with fever and neck stiffness'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Temporary nasal irritation after Nasya', 'Drowsiness after Shirodhara'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic treatment for migraine in JVC, Dubai',
      serviceType: 'Ayurvedic treatment for migraine',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic treatment for migraine in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: migraineFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const AyurvedaMigraine = () => {
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

      <AyurvedaHero {...migraineHero} />
      
      <AyurvedaIntro {...migraineIntro} bgColor="bg-white" />

      <TreatmentMechanism 
        {...migraineMechanism}
        bgColor="bg-[#F5F1EB]"
      />

      <ArthritisTypes 
        {...migrainePatterns}
        bgColor="bg-white"
        cardBg="bg-[#FAF7F2]"
      />

      <ArthritisPillars 
        {...migrainePillars}
        bgColor="bg-[#FAF7F2]"
      />

      <TreatmentProtocol 
        {...migraineProtocol}
        bgColor="bg-white"
      />

      <PositioningStatement 
        {...migrainePositioning}
        bgColor="bg-white"
        cardBg="bg-[#FAF7F2]"
      />

      <ClinicalBoundaries 
        {...migraineBoundaries}
        bgColor="bg-[#FAF7F2]"
      />

      <TreatmentReviews {...ayurvedaReviewsBlock()} />

      <TreatmentPrograms 
        {...migrainePrograms}
        bgColor="bg-white"
        defaultWhatsappMessage={migrainePrograms.defaultWhatsappMessage}
      />

      <FAQ {...migraineFaqs} bgColor="bg-[#F5F1EB]" />

      <FinalCTA 
        {...migraineCTA}
        bgColor="bg-[#FAF7F2]"
      />

      <TreatmentLocation 
        {...migraineLocation}
        bgColor="bg-white"
      />

      <RelatedPages 
        {...migraineRelatedPages}
        bgColor="bg-[#F5F1EB]"
      />
    </>
  );
};

export default AyurvedaMigraine;
