import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import Physician from '../../components/ayurveda/Physician';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import PanchakarmaPhases from '../../components/ayurveda/PanchakarmaPhases';
import ClassicalTherapies from '../../components/ayurveda/ClassicalTherapies';
import DailyTimeline from '../../components/ayurveda/DailyTimeline';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';

import {
  panchakarmaDubaiHero,
  panchakarmaDubaiIntro,
  panchakarmaDubaiFoundation,
  panchakarmaDubaiPhysician,
  panchakarmaDubaiApplications,
  panchakarmaDubaiProtocol,
  panchakarmaDubaiPrograms,
  panchakarmaDubaiActions,
  panchakarmaDubaiDaily,
  panchakarmaDubaiFaqs,
  panchakarmaDubaiLocation,
  panchakarmaDubaiCTA,
  panchakarmaDubaiJvcPlanning
} from '../../data/panchakarmaDubaiData';

const PAGE = {
  url: 'https://vedaracare.ae/treatments/panchakarma-dubai/',
  title: 'Panchakarma Treatment in Dubai, JVC | 7–21 Days | Vedara',   // 56 characters
  description: 'Panchakarma treatment in Dubai at our JVC clinic near Circle Mall: all five classical actions, 7, 14 and 21-day plans, led by a DHA-licensed Ayurvedic doctor.',   // 158 characters
  image: 'https://vedaracare.ae/images/panchakarma-dubai-hero.webp',
  published: '2026-05-01T08:00:00+04:00',
  reviewed: '2026-11-10',   // the day Dr. Zainab signs off this version
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/panchakarma-dubai/`;
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
      name: 'Panchakarma Treatment in Dubai, JVC | 7–21 Days | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#procedure` },
      mainEntity: { '@id': `${URL}#procedure` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/panchakarma-dubai-hero.webp`,
      datePublished: '2026-05-01',
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#procedure`,
      name: 'Panchakarma',
      alternateName: ['Pancha Karma', 'Panchakarma treatment', 'Ayurvedic detoxification programme'],
      description: "Ayurveda's classical five-action cleansing programme of preparation, main actions (Vamana, Virechana, Basti, Nasya, Raktamokshana) and recovery, over 7, 14 or 21 days.",
      sameAs: 'https://en.wikipedia.org/wiki/Panchakarma',
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Chronic back pain', 'PCOS', 'Chronic stress and burnout', 'Migraine', 'Digestive disorders', 'Skin conditions', 'Recovery after illness']
        .map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Pregnancy', 'Acute infection', 'Severe heart conditions', 'Active cancer treatment', 'Acute mental health crisis', 'Young children']
        .map((name) => ({ '@type': 'MedicalContraindication', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Panchakarma in JVC, Dubai',
      serviceType: 'Panchakarma',
      provider: { '@id': ORG_ID },
      areaServed: ['Jumeirah Village Circle (JVC)', 'Jumeirah Village Triangle (JVT)', 'Al Barsha South', 'Arjan', 'Dubai Sports City', 'Motor City', 'Dubai']
        .map((name) => ({ '@type': 'Place', name })),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/book/` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurvedic Treatment in Dubai', item: `${SITE_URL}/ayurveda-dubai/` },
        { '@type': 'ListItem', position: 3, name: 'Panchakarma in Dubai', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: panchakarmaDubaiFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PanchakarmaDubai = () => {
  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE.url} />
        <link rel="alternate" hrefLang="en-AE" href={PAGE.url} />
        <link rel="alternate" hrefLang="x-default" href={PAGE.url} />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content={PAGE.url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content={PAGE.image} />
        <meta property="article:published_time" content={PAGE.published} />
        <meta property="article:modified_time" content={`${PAGE.reviewed}T09:00:00+04:00`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <meta name="twitter:image" content={PAGE.image} />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {/* Preload Hero Image */}
        <link rel="preload" as="image" href={PAGE.image} />
      </Head>

      <AyurvedaHero {...panchakarmaDubaiHero} />
      
      <AyurvedaIntro {...panchakarmaDubaiIntro} />

      <TreatmentMechanism {...panchakarmaDubaiFoundation} />

      <ClassicalTherapies 
        {...panchakarmaDubaiActions}
      />

      <PanchakarmaPhases 
        {...panchakarmaDubaiProtocol}
        bgColor="bg-[#FAF6EF]"
      />
        
      <TreatmentPrograms 
        {...panchakarmaDubaiPrograms}
        bgColor="bg-white"
        carouselBgColor="bg-[#FAF6EF]"
        buttonBg="rgb(31, 69, 56)"
      />

      <ClinicalBoundaries 
        {...panchakarmaDubaiApplications} 
        bgColor="bg-[#F0E9DD]"
      />

      <DailyTimeline 
        {...panchakarmaDubaiDaily}
      />

      <ContentWithSidebar bgColor="bg-[#FAF7F2]" {...panchakarmaDubaiJvcPlanning} />

      <Physician {...panchakarmaDubaiPhysician} />

      <TreatmentReviews {...ayurvedaReviewsBlock()} />

      <FAQ 
        {...panchakarmaDubaiFaqs}
        bgColor="bg-[#F0E9DD]"
        label="PANCHAKARMA QUESTIONS"
        title="Panchakarma: your questions answered."
        description="Answers reviewed by Dr. Zainab Sheikh."
        buttonText="Ask the Panchakarma Team"
      />

      <TreatmentLocation 
        {...panchakarmaDubaiLocation} 
        bgColor="bg-white"
      />

      <FinalCTA 
        {...panchakarmaDubaiCTA}
        bgColor="bg-[#FAF6EF]"
      />
    </>
  );
};

export default PanchakarmaDubai;
