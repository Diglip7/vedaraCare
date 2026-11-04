import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import ArthritisPillars from '../../components/ayurveda/ArthritisPillars';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentIntegration from '../../components/ayurveda/TreatmentIntegration';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import FAQ from '../../components/home/FAQ';
import CTA from '../../components/home/CTA';

import {
  arthritisHero,
  arthritisIntro,
  arthritisBoundaries,
  arthritisTypesData,
  arthritisPillars,
  arthritisEvidence,
  arthritisIntegration,
  arthritisFaqs,
  arthritisLocation,
  arthritisCTA,
  arthritisRelatedPages,
} from '../../data/arthritisData';

const PAGE = {
  url: 'https://vedaracare.ae/conditions/arthritis-ayurveda-dubai/',
  title: 'Ayurvedic Treatment for Arthritis in JVC, Dubai | Vedara',   // 56 characters
  description: 'Ayurvedic arthritis and joint pain care in JVC, Dubai: Janu Basti, Kizhi, herbs and Panchakarma alongside your rheumatologist, with GP tests on site.',   // 149 characters
  image: 'https://vedaracare.ae/images/arthritis-ayurveda-dubai-hero.webp',
  reviewed: '2026-11-10',
};

const SITE_URL = SITE.url;
const URL = PAGE.url;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = PAGE.reviewed;
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
      name: 'Ayurvedic Treatment for Arthritis in JVC, Dubai | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#condition` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/arthritis-ayurveda-dubai-hero.webp`,
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalCondition',
      '@id': `${URL}#condition`,
      name: 'Arthritis',
      alternateName: ['Osteoarthritis', 'Sandhivata', 'Amavata'],
      possibleTreatment: { '@id': `${URL}#therapy` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurvedic treatment for arthritis',
      alternateName: ['Ayurveda for arthritis', 'Ayurvedic treatment for joint pain', 'Sandhivata treatment', 'Amavata treatment'],
      description: "Ayurvedic care for arthritis and joint pain — local oil therapies, herbal bundles, monitored herbs, diet and Panchakarma where needed — alongside rheumatology, with GP tests and physiotherapy at the same clinic.",
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Osteoarthritis', 'Knee osteoarthritis', 'Rheumatoid arthritis (supportive)', 'Gout (between flares)', 'Psoriatic arthritis (supportive)', 'Ankylosing spondylitis (supportive)'].map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Acute hot swollen joint before assessment', 'Stopping DMARDs or biologics', 'Herbs without liver monitoring when indicated'].map((name) => ({ '@type': 'MedicalContraindication', name })),
      adverseOutcome: ['Temporary liver-enzyme rise with some herbs', 'Skin irritation from oils'].map((name) => ({ '@type': 'MedicalEntity', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Ayurvedic treatment for arthritis in JVC, Dubai',
      serviceType: 'Ayurvedic treatment for arthritis',
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
        { '@type': 'ListItem', position: 3, name: 'Ayurvedic treatment for arthritis in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: arthritisFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const AyurvedaArthritis = () => {
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <AyurvedaHero {...arthritisHero} />
      <AyurvedaIntro {...arthritisIntro} />
      <ArthritisTypes 
        {...arthritisTypesData}
        bgColor="bg-[#FAF8F3]"
      />
      <ClinicalBoundaries 
        {...arthritisBoundaries}
        bgColor="bg-white"
      />
      <ArthritisPillars 
        {...arthritisPillars}
        bgColor="bg-[#F5F1E8]"
      />
      <TreatmentMechanism {...arthritisEvidence} />
      <TreatmentIntegration {...arthritisIntegration} />

      <TreatmentReviews {...ayurvedaReviewsBlock()} />

      <FAQ {...arthritisFaqs} />

      <TreatmentLocation {...arthritisLocation} />

      <CTA {...arthritisCTA} />

      <RelatedPages 
        {...arthritisRelatedPages}
        bgColor="bg-white"
      />
    </>
  );
};

export default AyurvedaArthritis;
