import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ConditionPhenotypes from '../../components/ayurveda/ConditionPhenotypes';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TherapyGrid from '../../components/ayurveda/TherapyGrid';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import ConditionSymptoms from '../../components/ayurveda/ConditionSymptoms';
import ConditionBoundaries from '../../components/ayurveda/ConditionBoundaries';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  hairLossHero,
  hairLossIntro,
  hairLossPhenotypes,
  hairLossMechanism1,
  hairLossMechanism2,
  hairLossTherapies,
  hairLossOils,
  hairLossProtocol,
  hairLossSymptoms,
  hairLossBoundaries,
  hairLossPrograms,
  hairLossFaqs,
  hairLossTreatmentLocation,
  hairLossFinalCTA,
  hairLossRelatedPages
} from '../../data/hairLossData';

const PAGE = {
  url: 'https://vedaracare.ae/conditions/hair-loss-ayurveda-dubai/',
  title: 'Ayurvedic Hair Loss & Scalp Treatment, JVC Dubai | Vedara',   // 57 characters
  description: 'Ayurvedic hair loss and scalp care in JVC, Dubai: Nasya, scalp oils such as Bhringraj, herbs and diet, with GP blood tests to find the cause.',   // 141 characters
  image: 'https://vedaracare.ae/images/hair-loss-ayurveda-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = PAGE.url;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = PAGE.reviewed;
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
      name: PAGE.title,
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: PAGE.image,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Hair loss',
      alternateName: ['Alopecia', 'Khalitya'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic treatment for hair loss and scalp problems',
      alternateName: ['Ayurveda for hair loss', 'Khalitya treatment', 'Ayurvedic hair treatment', 'Ayurvedic scalp treatment'],
      description: "Ayurvedic care for hair loss and scalp problems — Nasya, medicated scalp oils, Shiro Abhyanga, Takradhara, prescribed herbs and diet, with Panchakarma only where needed — after GP blood tests to find the cause.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Androgenetic alopecia', 'Telogen effluvium', 'Postpartum hair loss', 'Alopecia areata', 'Dandruff', 'Seborrhoeic dermatitis'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Infected or inflamed scalp (oils)', 'Scarring alopecia before medical assessment'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Scalp irritation from oils', 'Herb-medicine interactions if unsupervised'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic treatment for hair loss and scalp problems in JVC, Dubai',
      serviceType: 'Ayurvedic treatment for hair loss and scalp problems',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic treatment for hair loss and scalp problems in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: hairLossFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const HairLossAyurvedaDubai = () => {
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
      <AyurvedaHero {...hairLossHero} />

      {/* Section 2: Intro */}
      <AyurvedaIntro {...hairLossIntro} />

      {/* Section 3: Condition Phenotypes */}
      <ConditionPhenotypes {...hairLossPhenotypes} />

      {/* Section 4: Treatment Mechanism (Four Levels) */}
      <TreatmentMechanism {...hairLossMechanism1} />

      {/* Section 5: Therapy Grid */}
      <TherapyGrid {...hairLossTherapies} />

      {/* Section 6: Ayurvedic Hair Oils */}
      <TreatmentOils {...hairLossOils} />

      {/* Section 7: Treatment Protocol */}
      <TreatmentProtocol {...hairLossProtocol} />

      {/* Section 8: Condition Symptoms (Realistic Outcomes) */}
      <ConditionSymptoms {...hairLossSymptoms} />

      {/* Section 9: Treatment Mechanism (Why Most Fail) */}
      <TreatmentMechanism {...hairLossMechanism2} />

      {/* Section 10: Condition Boundaries */}
      <ConditionBoundaries {...hairLossBoundaries} />

      {/* Section 11: Treatment Programs */}
      <TreatmentPrograms {...hairLossPrograms} />

      {/* Section 12: FAQ */}
      <FAQ {...hairLossFaqs} />

      {/* Section 13: Treatment Location */}
      <TreatmentLocation {...hairLossTreatmentLocation} />

      {/* Section 14: Final CTA */}
      <FinalCTA {...hairLossFinalCTA} />

      {/* Section 15: Related Pages */}
      <RelatedPages {...hairLossRelatedPages} />
    </>
  );
};

export default HairLossAyurvedaDubai;
