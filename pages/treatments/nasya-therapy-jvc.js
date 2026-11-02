import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  nasyaHero,
  nasyaIntro,
  nasyaMechanism,
  nasyaTypes,
  nasyaProtocol,
  nasyaApplications,
  nasyaSafety,
  nasyaFaqs,
  nasyaLocation,
  nasyaFinalCTA,
  nasyaRelatedPages
} from '../../data/nasyaTherapyData';

const FAQS = nasyaFaqs;

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/nasya-therapy-jvc/`;
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
      name: 'Nasya (Nasyam) Therapy in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/nasya-therapy-jvc.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Nasya',
      alternateName: ['Nasyam', 'Nasya Karma', 'Nasya therapy', 'Anu Thailam Nasya', 'Ayurvedic nasal therapy', 'Marsha Nasya', 'Pratimarsha Nasya', 'Pradhamana Nasya'],
      description: "A classical Ayurvedic therapy in which a medicated oil, herbal juice or powder is given through the nose after a face massage and steam; one of the five actions of Panchakarma.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Chronic sinusitis', 'Allergic rhinitis', 'Migraine', 'Headache', 'Cervical spondylosis', 'Hair fall', 'Poor sleep'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Fever', 'Acute infection', 'Pregnancy', 'Recent nose or sinus surgery', 'Frequent nosebleeds', 'Children under 7'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Sneezing', 'Runny nose', 'Watery eyes', 'Mild headache'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Nasya in JVC, Dubai',
      serviceType: 'Nasya',
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
        { '@type': 'ListItem', position: 3, name: 'Nasya in JVC', item: URL },
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

const PAGE = {
  url: 'https://vedaracare.ae/treatments/nasya-therapy-jvc/',
  title: 'Nasya (Nasyam) Therapy in JVC, Dubai | Vedara Care',   // 50 characters
  description: 'Nasya (Nasyam) therapy in JVC, Dubai, near Circle Mall: nasal oil therapy with Anu Thailam and other classical oils, given in clinic by a DHA-licensed doctor.',   // 158 characters
  image: 'https://vedaracare.ae/images/nasya-therapy-jvc.webp',
  reviewed: '2026-11-10',
};

const NasyaTherapyJvc = () => {
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
      <AyurvedaHero {...nasyaHero} />
      <AyurvedaIntro {...nasyaIntro} />
      <TreatmentMechanism {...nasyaMechanism} />
      <TreatmentOils {...nasyaTypes} />
      <TreatmentProtocol {...nasyaProtocol} />
      <TreatmentApplications {...nasyaApplications} />
      <ClinicalBoundaries {...nasyaSafety} />
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      <FAQ {...nasyaFaqs} />
      <TreatmentLocation {...nasyaLocation} />
      <FinalCTA {...nasyaFinalCTA} />
      <RelatedPages {...nasyaRelatedPages} />
    </>
  );
};

export default NasyaTherapyJvc;
