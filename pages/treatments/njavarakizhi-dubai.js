import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentProtocol from '../../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../../components/ayurveda/TreatmentOils';
import TreatmentApplications from '../../components/ayurveda/TreatmentApplications';
import TreatmentBenefits from '../../components/ayurveda/TreatmentBenefits';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import Physician from '../../components/ayurveda/Physician';
import { ayurvedaPhysician } from '../../data/ayurvedaData';
import { 
  njavarakizhiHero, 
  njavarakizhiIntro, 
  njavarakizhiMechanism,
  njavarakizhiProtocol,
  njavarakizhiOils,
  njavarakizhiApplications,
  njavarakizhiBenefits,
  njavarakizhiPrograms,
  njavarakizhiFaqs,
  njavarakizhiTreatmentLocation,
  njavarakizhiFinalCTA,
  njavarakizhiRelatedPages
} from '../../data/njavarakizhiData';

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/njavarakizhi-dubai/`;
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
      name: 'Njavarakizhi (Njavara Kizhi) in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      primaryImageOfPage: `${SITE_URL}/images/njavarakizhi-dubai-hero.webp`,
      datePublished: '2026-05-01',
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Njavarakizhi',
      alternateName: ['Njavara Kizhi', 'Navarakizhi', 'Shashtika Shali Pinda Sweda', 'Rice bolus massage', 'Njavara rice potli massage'],
      description: 'A classical Kerala Ayurvedic therapy in which warm bundles of Njavara rice cooked in milk and herbs are massaged over the body; nourishing, used for weakness and recovery.',
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Muscle weakness', 'Recovery after illness', 'Age-related muscle loss', 'Joint stiffness', 'Support after stroke', "Bell's palsy support"]
        .map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Fever', 'Acute infection', 'Active inflammation', 'Open wounds or skin infection', 'Pregnancy', 'Severe heart conditions without clearance']
        .map((name) => ({ '@type': 'MedicalContraindication', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Njavarakizhi in JVC, Dubai',
      serviceType: 'Njavarakizhi',
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
        { '@type': 'ListItem', position: 3, name: 'Njavarakizhi in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: njavarakizhiFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PAGE = {
  url: 'https://vedaracare.ae/treatments/njavarakizhi-dubai/',
  title: 'Njavarakizhi (Njavara Kizhi) in JVC, Dubai | Vedara Care',   // 56 characters
  description: 'Njavarakizhi (Njavara Kizhi) in JVC, Dubai, near Circle Mall: warm Kerala rice-bolus therapy for weakness, recovery and stiffness, by a DHA-licensed doctor.',   // 156 characters
  image: 'https://vedaracare.ae/images/njavarakizhi-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const NjavarakizhiDubai = () => {
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
        <meta property="article:published_time" content="2026-05-01T09:00:00+04:00" />
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
      <AyurvedaHero {...njavarakizhiHero} />
      
      {/* Section 2 - Intro */}
      <AyurvedaIntro {...njavarakizhiIntro} />
      
      {/* Section 3 - Mechanism */}
      <TreatmentMechanism {...njavarakizhiMechanism} />
      
      {/* Section 4 - Protocol */}
      <TreatmentProtocol {...njavarakizhiProtocol} />
      
      {/* Section 5 - Oils/Kashayams */}
      <TreatmentOils {...njavarakizhiOils} />
      
      {/* Section 6 - Applications */}
      <TreatmentApplications {...njavarakizhiApplications} />
      
      {/* Section 7 - Benefits */}
      <TreatmentBenefits {...njavarakizhiBenefits} />
      
      {/* Section 8 - Programmes */}
      <TreatmentPrograms {...njavarakizhiPrograms} 
        buttonBg="#C9A55B"
        buttonText="Book Assessment"
      />
      
      {/* Doctor Trust Block */}
      <Physician {...ayurvedaPhysician} />
      
      {/* Section 10 - Reviews */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      
      {/* Section 11 - FAQ */}
      <FAQ {...njavarakizhiFaqs} />
      
      {/* Section 12 - Location */}
      <TreatmentLocation {...njavarakizhiTreatmentLocation} />
      
      {/* Section 13 - Final CTA */}
      <FinalCTA {...njavarakizhiFinalCTA} />
      
      {/* Section 14 - Related Pages */}
      <RelatedPages {...njavarakizhiRelatedPages} />
    </>
  );
};

export default NjavarakizhiDubai;
