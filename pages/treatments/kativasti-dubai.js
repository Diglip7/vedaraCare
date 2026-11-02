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
import TreatmentIntegration from '../../components/ayurveda/TreatmentIntegration';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  kativastiHero,
  kativastiIntro,
  kativastiMechanism,
  kativastiProtocol,
  kativastiOils,
  kativastiApplications,
  kativastiOtherVasti,
  kativastiSafety,
  kativastiIntegration,
  kativastiPrograms,
  kativastiFaqs,
  kativastiTreatmentLocation,
  kativastiFinalCTA,
  kativastiRelatedPages
} from '../../data/kativastiData';

const FAQS = kativastiFaqs;

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/kativasti-dubai/`;
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
      name: 'Kati Vasti (Kativasti) for Back Pain in JVC, Dubai | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/kativasti-dubai-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Kati Vasti',
      alternateName: ['Kativasti', 'Kati Basti', 'Katibasti', 'Kati Vasti treatment', 'Ayurvedic oil pooling therapy for the lower back'],
      description: "A classical Ayurvedic therapy in which warm medicated oil is held over the lower back inside a dough ring, used for chronic lower back pain, stiffness and sciatica.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Chronic lower back pain', 'Sciatica', 'Lumbar disc bulge', 'Lumbar spondylosis', 'Sacroiliac joint pain', 'Postpartum back pain', 'Muscle spasm'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Disc herniation with neurological deficit', 'Cauda equina symptoms', 'Suspected spinal infection or tumour', 'Recent spinal surgery', 'Pregnancy', 'Broken skin or infection on the lower back'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Skin warmth or redness', 'Mild next-day stiffness', 'Skin irritation'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Kati Vasti in JVC, Dubai',
      serviceType: 'Kati Vasti',
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
        { '@type': 'ListItem', position: 3, name: 'Kati Vasti in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: kativastiFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PAGE = {
  url: 'https://vedaracare.ae/treatments/kativasti-dubai/',
  title: 'Kati Vasti (Kativasti) for Back Pain in JVC, Dubai | Vedara',   // 59 characters
  description: 'Kati Vasti (Kativasti) in JVC, Dubai, near Circle Mall: warm medicated oil held on the lower back for back pain and sciatica, by a DHA-licensed doctor.',   // 151 characters
  image: 'https://vedaracare.ae/images/kativasti-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const KativastiDubai = () => {
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
      <AyurvedaHero {...kativastiHero} imageContainerClassName={kativastiHero.imageContainerClassName} />
      <AyurvedaIntro {...kativastiIntro} />
      <TreatmentMechanism {...kativastiMechanism} />
      <TreatmentProtocol {...kativastiProtocol} />
      <TreatmentOils {...kativastiOils} />
      <TreatmentApplications {...kativastiApplications} />
      <TreatmentOils {...kativastiOtherVasti} />
      <ClinicalBoundaries {...kativastiSafety} />
      <TreatmentIntegration {...kativastiIntegration} />
      <TreatmentPrograms {...kativastiPrograms} />
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      <FAQ {...kativastiFaqs} />
      <TreatmentLocation {...kativastiTreatmentLocation} />
      <FinalCTA {...kativastiFinalCTA} />
      <RelatedPages {...kativastiRelatedPages} />
    </>
  );
};

export default KativastiDubai;
