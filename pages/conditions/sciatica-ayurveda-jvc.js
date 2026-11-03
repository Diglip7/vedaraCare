import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentIntegration from '../../components/ayurveda/TreatmentIntegration';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  sciaticaHero,
  sciaticaIntro,
  sciaticaMechanism,
  sciaticaRedFlags,
  sciaticaTherapies,
  sciaticaProtocol,
  sciaticaIntegration,
  sciaticaFaqs,
  sciaticaLocation,
  sciaticaFinalCTA,
  sciaticaRelatedPages
} from '../../data/sciaticaAyurvedaJvcData';

const FAQS = sciaticaFaqs;

const PAGE = {
  url: 'https://vedaracare.ae/conditions/sciatica-ayurveda-jvc/',
  title: 'Ayurvedic Treatment for Sciatica in JVC, Dubai | Vedara Care',   // 60 characters
  description: 'Ayurvedic treatment for sciatica (Gridhrasi) in JVC, Dubai: Kati Vasti, Basti, Kizhi and herbs, with physiotherapy at the same clinic. DHA-licensed doctor.',   // 155 characters
  image: 'https://vedaracare.ae/images/sciatica-ayurveda-jvc-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/conditions/sciatica-ayurveda-jvc/`;
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
      name: 'Ayurvedic Treatment for Sciatica in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/sciatica-ayurveda-jvc-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Sciatica',
      alternateName: ['Gridhrasi', 'Lumbar radiculopathy'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic treatment for sciatica',
      alternateName: ['Gridhrasi treatment', 'Sciatica Ayurvedic treatment', 'Ayurveda for sciatica'],
      description: "An Ayurvedic treatment plan for sciatica (Gridhrasi) combining Kati Vasti, Basti, Elakizhi, Abhyanga with steam, Agnikarma and prescribed herbs, coordinated with physiotherapy.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Sciatica', 'Lumbar radiculopathy', 'Disc-related leg pain', 'Piriformis syndrome'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Cauda equina syndrome', 'Progressive neurological deficit', 'Suspected spinal infection or tumour', 'Recent spinal surgery without clearance'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Mild skin irritation', 'Temporary soreness'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic treatment for sciatica in JVC, Dubai',
      serviceType: 'Ayurvedic treatment for sciatica',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic treatment for sciatica in JVC', item: URL },
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

const SciaticaAyurvedaJvc = () => {
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
      <AyurvedaHero {...sciaticaHero} />
      <AyurvedaIntro {...sciaticaIntro} />
      <TreatmentMechanism {...sciaticaMechanism} />
      <ClinicalBoundaries {...sciaticaRedFlags} />
      <TreatmentOils {...sciaticaTherapies} />
      <TreatmentProtocol {...sciaticaProtocol} />
      <TreatmentIntegration {...sciaticaIntegration} />
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      <FAQ {...sciaticaFaqs} />
      <TreatmentLocation {...sciaticaLocation} />
      <FinalCTA {...sciaticaFinalCTA} />
      <RelatedPages {...sciaticaRelatedPages} />
    </>
  );
};

export default SciaticaAyurvedaJvc;
