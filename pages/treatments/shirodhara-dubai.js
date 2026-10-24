import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentBenefits from '../../components/ayurveda/TreatmentBenefits';
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
  shirodharaHero, 
  shirodharaIntro, 
  shirodharaMechanism, 
  shirodharaBenefits,
  shirodharaProtocol, 
  shirodharaOils,
  shirodharaApplications,
  shirodharaSafety,
  shirodharaPrograms,
  shirodharaFaqs,
  shirodharaTreatmentLocation,
  shirodharaFinalCTA,
  shirodharaRelatedPages
} from '../../data/shirodharaData';

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/shirodhara-dubai/`;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = '2026-11-01';                 // same as PAGE.reviewed
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
      '@type': 'MedicalWebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Shirodhara Treatment & Massage in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#procedure` },
      mainEntity: { '@id': `${URL}#procedure` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/shirodhara-dubai-hero.webp`,
      datePublished: '2026-05-23',
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#procedure`,
      name: 'Shirodhara',
      alternateName: ['Shirodhara treatment', 'Shirodhara massage', 'Ayurvedic oil stream therapy'],
      description: 'A classical Ayurvedic therapy in which a continuous stream of warm medicated oil is poured across the forehead, used for stress, anxiety, poor sleep and headaches.',
      sameAs: 'https://en.wikipedia.org/wiki/Shirodhara',
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      bodyLocation: 'Forehead',
      indication: ['Stress', 'Anxiety', 'Insomnia', 'Tension headache', 'Migraine']
        .map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['First trimester of pregnancy', 'Migraine attack in progress', 'Fever or acute illness',
        'Scalp infection or open scalp wound', 'Recent eye surgery', 'Serious head injury without medical clearance']
        .map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Temporary drowsiness', 'Heavy feeling in the head', 'Skin irritation from the oil (rare)']
        .map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Shirodhara in JVC, Dubai',
      serviceType: 'Shirodhara',
      provider: { '@id': ORG_ID },
      areaServed: ['Jumeirah Village Circle (JVC)', 'Jumeirah Village Triangle (JVT)', 'Al Barsha South', 'Arjan', 'Dubai']
        .map((name) => ({ '@type': 'Place', name })),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/book/`,
        servicePhone: { '@type': 'ContactPoint', telephone: SITE.phone, contactType: 'appointments' } },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurvedic Treatment in Dubai', item: `${SITE_URL}/ayurveda-dubai/` },
        { '@type': 'ListItem', position: 3, name: 'Shirodhara in JVC, Dubai', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: shirodharaFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PAGE = {
  url: 'https://vedaracare.ae/treatments/shirodhara-dubai/',
  title: 'Shirodhara Treatment & Massage in JVC, Dubai | Vedara Care',   // 58 characters
  description: 'Shirodhara treatment in JVC, Dubai, near Circle Mall: warm medicated oil therapy for stress, sleep and headaches, prescribed by a DHA-licensed doctor.',   // 150 characters
  image: 'https://vedaracare.ae/images/shirodhara-dubai-hero.webp',
  reviewed: '2026-11-01',   // the day Dr. Zainab signs off this version; never new Date()
};

const ShirodharaDubai = () => {
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
        <meta property="article:published_time" content="2026-05-23T09:00:00+04:00" />
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
      
      {/* Section 1 - Hero with Image 1 */}
      <AyurvedaHero {...shirodharaHero} />
      
      {/* Section 2 - Intro with Images 1 & 2 */}
      <AyurvedaIntro {...shirodharaIntro} />
      
      {/* Section 3 - Mechanism with Image 3 */}
      <TreatmentMechanism {...shirodharaMechanism} />
      
      {/* Section 4 - Benefits */}
      <TreatmentBenefits {...shirodharaBenefits} />
      
      {/* Section 5 - Protocol with Image 4 */}
      <TreatmentProtocol {...shirodharaProtocol} />
      
      {/* Section 6 - Oils with Image 5 */}
      <TreatmentOils {...shirodharaOils} />
      
      {/* Section 7 - Applications with Image 1 */}
      <TreatmentApplications {...shirodharaApplications} />
      
      {/* Section 8 - Safety */}
      <ClinicalBoundaries {...shirodharaSafety} />
      
      {/* Section 9 - Programs with Image 2 */}
      <TreatmentPrograms {...shirodharaPrograms} />
      
      {/* Section 10 - Reviews with Image 3 */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      
      {/* Section 11 - FAQ with Image 4 */}
      <FAQ {...shirodharaFaqs} />
      
      {/* Section 12 - Location with Image 5 */}
      <TreatmentLocation {...shirodharaTreatmentLocation} />
      
      {/* Section 13 - Final CTA */}
      <FinalCTA {...shirodharaFinalCTA} />
      
      {/* Section 14 - Related Pages */}
      <RelatedPages {...shirodharaRelatedPages} />
    </>
  );
};

export default ShirodharaDubai;
