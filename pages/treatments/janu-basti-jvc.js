import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  januHero,
  januIntro,
  januMechanism,
  januProtocol,
  januOils,
  januApplications,
  januSafety,
  januPrograms,
  januFaqs,
  januLocation,
  januFinalCTA,
  januRelatedPages
} from '../../data/januBastiData';

const FAQS = januFaqs;

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/janu-basti-jvc/`;
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
      name: 'Janu Basti (Janu Vasti) Knee Treatment, JVC Dubai | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/janu-basti-warm-oil-therapy-knee-ayurveda-jvc.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Janu Basti',
      alternateName: ['Janu Vasti', 'Janu Basthi', 'Ayurvedic knee treatment', 'Ayurvedic oil pooling therapy for the knee'],
      description: "A classical Ayurvedic therapy in which warm medicated oil is held over the knee inside a dough ring, used for knee pain, stiffness and osteoarthritis.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Knee osteoarthritis', 'Knee stiffness', 'Age-related knee pain', 'Recovery after sports strain', 'Rheumatoid arthritis (outside a flare)'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Hot, red, swollen knee', 'Acute injury with severe swelling', 'Fever', 'Broken skin or infection on the knee', 'Suspected deep vein thrombosis', 'Fresh surgical wound'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Skin warmth or redness', 'Mild next-day stiffness', 'Skin irritation'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Janu Basti in JVC, Dubai',
      serviceType: 'Janu Basti',
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
        { '@type': 'ListItem', position: 3, name: 'Janu Basti in JVC', item: URL },
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
  url: 'https://vedaracare.ae/treatments/janu-basti-jvc/',
  title: 'Janu Basti (Janu Vasti) Knee Treatment, JVC Dubai | Vedara',   // 58 characters
  description: 'Janu Basti (Janu Vasti) in JVC, Dubai, near Circle Mall: warm medicated oil held on the knee for knee pain and osteoarthritis, by a DHA-licensed doctor.',   // 152 characters
  image: 'https://vedaracare.ae/images/janu-basti-warm-oil-therapy-knee-ayurveda-jvc.webp',
  reviewed: '2026-11-10',
};

const JanuBastiJvc = () => {
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
      <AyurvedaHero {...januHero} />
      <AyurvedaIntro {...januIntro} />
      <TreatmentMechanism {...januMechanism} />
      <TreatmentProtocol {...januProtocol} />
      <TreatmentOils {...januOils} />
      <TreatmentApplications {...januApplications} />
      <ClinicalBoundaries {...januSafety} />
      <TreatmentPrograms {...januPrograms} />
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      <FAQ {...januFaqs} />
      <TreatmentLocation {...januLocation} />
      <FinalCTA {...januFinalCTA} />
      <RelatedPages {...januRelatedPages} />
    </>
  );
};

export default JanuBastiJvc;
