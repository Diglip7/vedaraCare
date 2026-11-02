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
  udvartanaHero, 
  udvartanaIntro, 
  udvartanaMechanism, 
  udvartanaTypes, 
  udvartanaProtocol, 
  udvartanaApplications, 
  udvartanaSafety, 
  udvartanaFaqs, 
  udvartanaLocation, 
  udvartanaFinalCTA, 
  udvartanaRelatedPages 
} from '../../data/udvartanaJvcData';

const FAQS = udvartanaFaqs;

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/udvartana-jvc/`;
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
      name: 'Udvartana (Udwarthanam) Massage in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/udvartana-herbal-powder-massage-vedara-jvc.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Udvartana',
      alternateName: ['Udwarthanam', 'Udvartanam', 'Udvartana massage', 'Ayurvedic herbal powder massage', 'Rukshana Udvartana', 'Snigdha Udvartana'],
      description: "A classical Ayurvedic massage with warm herbal powders rubbed firmly upwards over the body, used for heaviness and as support in weight management.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Weight management support', 'Heaviness', 'Sluggish circulation'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Broken or infected skin', 'Skin rash or eczema flare', 'Fever', 'Pregnancy', 'Recent surgery', 'Very low body weight'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Skin redness', 'Dry skin', 'Mild soreness', 'Skin irritation'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Udvartana in JVC, Dubai',
      serviceType: 'Udvartana',
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
        { '@type': 'ListItem', position: 3, name: 'Udvartana in JVC', item: URL },
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
  url: 'https://vedaracare.ae/treatments/udvartana-jvc/',
  title: 'Udvartana (Udwarthanam) Massage in JVC, Dubai | Vedara Care',   // 59 characters
  description: 'Udvartana (Udwarthanam) herbal powder massage in JVC, Dubai, near Circle Mall: prescribed by a DHA-licensed Ayurvedic doctor, with same-gender therapists.',   // 154 characters
  image: 'https://vedaracare.ae/images/udvartana-herbal-powder-massage-vedara-jvc.webp',
  reviewed: '2026-11-10',
};

const UdvartanaJvc = () => {
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
      <AyurvedaHero {...udvartanaHero} />
      
      {/* Section 2 - Intro */}
      <AyurvedaIntro {...udvartanaIntro} />
      
      {/* Section 3 - Mechanism */}
      <TreatmentMechanism {...udvartanaMechanism} />
      
      {/* Section 4 - Types */}
      <div id="types">
        <TreatmentOils {...udvartanaTypes} />
      </div>
      
      {/* Section 5 - Protocol */}
      <TreatmentProtocol {...udvartanaProtocol} />
      
      {/* Section 6 - Applications */}
      <TreatmentApplications {...udvartanaApplications} />
      
      {/* Section 7 - Safety */}
      <ClinicalBoundaries {...udvartanaSafety} />
      
      {/* Section 8 - Reviews */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      
      {/* Section 9 - FAQ */}
      <FAQ {...udvartanaFaqs} />
      
      {/* Section 10 - Location */}
      <TreatmentLocation {...udvartanaLocation} />
      
      {/* Section 11 - Final CTA */}
      <FinalCTA {...udvartanaFinalCTA} />
      
      {/* Section 12 - Related Pages */}
      <RelatedPages {...udvartanaRelatedPages} />
    </>
  );
};

export default UdvartanaJvc;
