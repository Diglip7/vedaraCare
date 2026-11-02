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
  bastiHero, 
  bastiIntro, 
  bastiMechanism, 
  bastiTypes, 
  bastiProtocol, 
  bastiApplications, 
  bastiSafety,
  bastiFaqs, 
  bastiLocation, 
  bastiFinalCTA, 
  bastiRelatedPages 
} from '../../data/bastiJvcData';

const FAQS = bastiFaqs;

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/basti-jvc/`;
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
      name: 'Basti Treatment in JVC, Dubai | Ayurvedic Basti | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/basti-treatment-room-panchakarma-dubai.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Basti',
      alternateName: ['Vasti', 'Basti treatment', 'Basti therapy', 'Ayurvedic enema therapy', 'Anuvasana Basti', 'Niruha Basti', 'Kashaya Basti', 'Matra Basti', 'Uttara Basti'],
      description: "A classical Ayurvedic therapy in which medicated oil or herbal decoction is given as an enema; one of the five actions of Panchakarma.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Chronic lower back pain', 'Sciatica', 'Joint stiffness', 'Constipation', 'Irritable bowel syndrome'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Active rectal bleeding', 'Painful piles or fissures', 'Inflammatory bowel disease flare', 'Severe diarrhoea', 'Fever', 'Recent abdominal or rectal surgery', 'Suspected bowel obstruction', 'Pregnancy'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Abdominal cramping', 'Loose stools', 'Tiredness', 'Local irritation'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Basti in JVC, Dubai',
      serviceType: 'Basti',
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
        { '@type': 'ListItem', position: 3, name: 'Basti in JVC', item: URL },
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
  url: 'https://vedaracare.ae/treatments/basti-jvc/',
  title: 'Basti Treatment in JVC, Dubai | Ayurvedic Basti | Vedara',   // 56 characters
  description: 'Basti treatment in JVC, Dubai, near Circle Mall: Anuvasana, Niruha, Matra and Uttara Basti, prescribed and supervised by a DHA-licensed Ayurvedic doctor.',   // 153 characters
  image: 'https://vedaracare.ae/images/basti-treatment-room-panchakarma-dubai.webp',
  reviewed: '2026-11-10',
};

const BastiJvc = () => {
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
      
      {/* Section 1 - Hero */}
      <AyurvedaHero {...bastiHero} />
      
      {/* Section 2 - Intro */}
      <AyurvedaIntro {...bastiIntro} />
      
      {/* Section 3 - Mechanism */}
      <TreatmentMechanism {...bastiMechanism} />
      
      {/* Section 4 - Types */}
      <TreatmentOils {...bastiTypes} />
      
      {/* Section 5 - Protocol */}
      <TreatmentProtocol {...bastiProtocol} />
      
      {/* Section 6 - Applications */}
      <TreatmentApplications {...bastiApplications} />
      
      {/* Section 7 - Safety */}
      <ClinicalBoundaries {...bastiSafety} />
      
      {/* Section 8 - Reviews */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      
      {/* Section 9 - FAQ */}
      <FAQ {...bastiFaqs} />
      
      {/* Section 10 - Location */}
      <TreatmentLocation {...bastiLocation} />
      
      {/* Section 11 - Final CTA */}
      <FinalCTA {...bastiFinalCTA} />
      
      {/* Section 12 - Related Pages */}
      <RelatedPages {...bastiRelatedPages} />
    </>
  );
};

export default BastiJvc;
