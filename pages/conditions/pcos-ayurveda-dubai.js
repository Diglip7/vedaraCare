import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import ConditionPhenotypes from '../../components/ayurveda/ConditionPhenotypes';
import TreatmentBenefits from '../../components/ayurveda/TreatmentBenefits';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import ConditionSymptoms from '../../components/ayurveda/ConditionSymptoms';
import ConditionFertility from '../../components/ayurveda/ConditionFertility';
import ConditionBoundaries from '../../components/ayurveda/ConditionBoundaries';
import TreatmentPrograms from '../../components/ayurveda/TreatmentPrograms';
import FAQ from '../../components/home/FAQ';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import { 
  pcosHero, 
  pcosIntro, 
  pcosMechanism, 
  pcosPhenotypes, 
  pcosBenefits,
  pcosProtocol,
  pcosSymptoms,
  pcosFertility,
  pcosBoundaries,
  pcosPrograms,
  pcosFaqs,
  pcosTreatmentLocation,
  pcosFinalCTA,
  pcosRelatedPages
} from '../../data/pcosData';

const PAGE = {
  url: 'https://vedaracare.ae/conditions/pcos-ayurveda-dubai/',
  title: 'Ayurvedic Treatment for PCOS & PCOD in JVC, Dubai | Vedara',   // 58 characters
  description: 'Ayurvedic PCOS and PCOD care in JVC, Dubai: herbs, diet, Panchakarma and Basti with a female Ayurvedic doctor, plus GP blood tests and scan referral.',   // 149 characters
  image: 'https://vedaracare.ae/images/pcos-ayurveda-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/conditions/pcos-ayurveda-dubai/`;
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
      name: 'Ayurvedic Treatment for PCOS & PCOD in JVC, Dubai | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/pcos-ayurveda-dubai-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Polycystic ovary syndrome',
      alternateName: ['PCOS', 'PCOD'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic care for PCOS',
      alternateName: ['Ayurvedic treatment for PCOS', 'Ayurvedic treatment for PCOD', 'Ayurveda for polycystic ovary syndrome'],
      description: "Supportive Ayurvedic care for PCOS — diet, routine, prescribed herbs and, where suitable, Panchakarma or Basti — alongside gynaecological care, with GP tests at the same clinic.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Polycystic ovary syndrome', 'Irregular periods', 'Insulin resistance', 'Hormonal acne'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Pregnancy (herbs reviewed)', 'Abnormal bleeding before gynaecological assessment'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Digestive upset from herbs', 'Herb-medicine interactions if unsupervised'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic care for PCOS in JVC, Dubai',
      serviceType: 'Ayurvedic care for PCOS',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic care for PCOS in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: pcosFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PcosAyurvedaDubai = () => {
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
      <AyurvedaHero {...pcosHero} />
      
      {/* Section 2 - Intro */}
      <AyurvedaIntro {...pcosIntro} />
      
      {/* Section 3 - Mechanism */}
      <TreatmentMechanism {...pcosMechanism} />
      
      {/* Section 4 - Phenotypes */}
      <ConditionPhenotypes {...pcosPhenotypes} />
      
      {/* Section 5 - Benefits (Four Pillars) */}
      <TreatmentBenefits {...pcosBenefits} />
      
      {/* Section 6 - Protocol */}
      <TreatmentProtocol {...pcosProtocol} />
      
      {/* Section 7 - Symptoms */}
      <ConditionSymptoms {...pcosSymptoms} />
      
      {/* Section 8 - Fertility */}
      <ConditionFertility {...pcosFertility} />
      
      {/* Section 9 - Boundaries */}
      <ConditionBoundaries {...pcosBoundaries} />
      
      {/* Section 10 - Programmes */}
      <TreatmentPrograms {...pcosPrograms} />
      
      {/* Section 11 - Reviews */}
      <TreatmentReviews {...ayurvedaReviewsBlock()} />

      {/* Section 12 - FAQ */}
      <FAQ {...pcosFaqs} />
      
      {/* Section 13 - Location */}
      <TreatmentLocation {...pcosTreatmentLocation} />
      
      {/* Section 14 - Final CTA */}
      <FinalCTA {...pcosFinalCTA} />
      
      {/* Section 15 - Related Pages */}
      <RelatedPages {...pcosRelatedPages} />
    </>
  );
};

export default PcosAyurvedaDubai;
