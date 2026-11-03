import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  skinHero,
  skinIntro,
  skinMechanism,
  skinConditions,
  skinTherapies,
  skinBoundaries,
  skinProtocol,
  skinFaqs,
  skinLocation,
  skinCTA,
  skinRelatedPages
} from '../../data/skinAyurvedaData';

const FAQS = skinFaqs;

const PAGE = {
  url: 'https://vedaracare.ae/conditions/skin-ayurveda-dubai/',
  title: 'Ayurvedic Treatment for Skin Diseases in JVC, Dubai | Vedara',   // 60 characters
  description: 'Ayurvedic skin treatment in JVC, Dubai: eczema, psoriasis, acne, pigmentation, vitiligo and more, with Panchakarma, leech therapy and herbs. DHA-licensed.',   // 154 characters
  image: 'https://vedaracare.ae/images/skin-ayurveda-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/conditions/skin-ayurveda-dubai/`;
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
      name: 'Ayurvedic Treatment for Skin Diseases in JVC, Dubai | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/skin-ayurveda-dubai-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Chronic skin diseases',
      alternateName: ['Eczema', 'Psoriasis', 'Kushtha'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic treatment for skin diseases',
      alternateName: ['Ayurvedic skin treatment', 'Kushtha Chikitsa', 'Ayurveda for eczema', 'Ayurveda for psoriasis', 'Leech therapy (Jalaukavacharana)'],
      description: "Ayurvedic treatment for chronic skin conditions combining diet, prescribed herbs, external applications, Panchakarma and Raktamokshana including leech therapy.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Eczema', 'Psoriasis', 'Acne', 'Melasma', 'Urticaria', 'Vitiligo', 'Rosacea', 'Seborrhoeic dermatitis'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Bleeding disorders (leech therapy)', 'Anticoagulant use (leech therapy)', 'Anaemia (leech therapy)', 'Pregnancy (Panchakarma and leech therapy)'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Skin irritation from external applications', 'Photosensitivity with some herbs', 'Minor bleeding after leech therapy'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic treatment for skin diseases in JVC, Dubai',
      serviceType: 'Ayurvedic treatment for skin diseases',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic treatment for skin diseases in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: FAQS.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const SkinAyurvedaDubai = () => {
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

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      {/* Render order: */}
      <AyurvedaHero {...skinHero} />
      <AyurvedaIntro {...skinIntro} />
      <TreatmentMechanism {...skinMechanism} />
      <TreatmentOils {...skinConditions} />
      <TreatmentOils {...skinTherapies} />
      <ClinicalBoundaries {...skinBoundaries} />
      <TreatmentProtocol {...skinProtocol} />
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      <FAQ {...skinFaqs} />
      <TreatmentLocation {...skinLocation} />
      <FinalCTA {...skinCTA} />
      <RelatedPages {...skinRelatedPages} />
    </>
  );
};

export default SkinAyurvedaDubai;
