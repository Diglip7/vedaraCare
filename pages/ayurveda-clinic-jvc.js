import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../lib/site';
import { ayurvedaReviewsBlock } from '../data/googleReviews';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import Physician from '../components/ayurveda/Physician';
import TreatmentProtocol from '../components/ayurveda/TreatmentProtocol';
import TreatmentOils from '../components/ayurveda/TreatmentOils';
import ClinicalBoundaries from '../components/ayurveda/ClinicalBoundaries';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';

import { ayurvedaPhysician } from '../data/ayurvedaData';
import {
  jvcHero,
  jvcIntro,
  jvcFirstVisit,
  jvcTherapies,
  jvcConditions,
  jvcWhy,
  jvcFaqs,
  jvcLocation,
  jvcFinalCTA,
  jvcRelatedPages
} from '../data/ayurvedaClinicJvcData';

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/ayurveda-clinic-jvc/`;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = '2026-11-10';
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

const PAGE = {
  url: URL,
  title: 'Ayurveda Clinic in JVC, Dubai, near Circle Mall | Vedara',
  description: 'Ayurveda clinic in JVC, Dubai, near Circle Mall: consultations with Dr. Zainab Sheikh (BAMS, MD), same-gender therapists, open daily 9am-10pm. Parking.',
  image: `${SITE_URL}/images/ayurveda-clinic-jvc-hero.webp`,
  reviewed: REVIEWED,
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': ORG_ID,                                   // shared clinic node — identical to the other pages
      name: SITE.name,
      url: `${SITE_URL}/`,
      telephone: SITE.phone,
      email: 'booking@vedaracare.ae',
      address: SCHEMA_ADDRESS,
      geo: { '@type': 'GeoCoordinates', latitude: 25.0683417, longitude: 55.2120945 },
      hasMap: SITE.mapsUrl,
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '09:00',
        closes: '22:00'
      }],
      medicalSpecialty: ['Ayurveda', 'Physiotherapy', 'Dermatology'],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'DHA Healthcare Facility Licence',
        identifier: SITE.facilityLicence
      },
      department: { '@id': `${URL}#ayurveda` },
    },
    {
      '@type': 'MedicalClinic',
      '@id': `${URL}#ayurveda`,
      name: 'Vedara Care Ayurveda Clinic, JVC',
      url: URL,
      parentOrganization: { '@id': ORG_ID },
      medicalSpecialty: 'Ayurveda',
      address: SCHEMA_ADDRESS,
      telephone: SITE.phone,
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '09:00',
        closes: '22:00'
      }],
      areaServed: [
        'Jumeirah Village Circle (JVC)',
        'Jumeirah Village Triangle (JVT)',
        'Al Barsha South',
        'Arjan',
        'Dubai Production City',
        'Dubai Sports City',
        'Motor City'
      ].map((name) => ({ '@type': 'Place', name })),
      employee: { '@id': ZAINAB_ID },
      availableService: [
        'Ayurvedic consultation',
        'Abhyanga',
        'Shirodhara',
        'Kizhi',
        'Njavarakizhi',
        'Pizhichil',
        'Kati Vasti',
        'Janu Basti',
        'Nasya',
        'Basti',
        'Udvartana',
        'Panchakarma',
        'Rasayana'
      ].map((name) => ({ '@type': 'MedicalTherapy', name })),
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
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Ayurveda Clinic in JVC, Dubai, near Circle Mall | Vedara',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${URL}#ayurveda` },
      mainEntity: { '@id': `${URL}#ayurveda` },
      primaryImageOfPage: `${SITE_URL}/images/ayurveda-clinic-jvc-hero.webp`,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurvedic Treatment in Dubai', item: `${SITE_URL}/ayurveda-dubai/` },
        { '@type': 'ListItem', position: 3, name: 'Ayurveda Clinic in JVC', item: URL }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: jvcFaqs.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) }
      }))
    },
  ],
};

const AyurvedaClinicJVC = () => {
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
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content={PAGE.image} />
        <meta property="article:published_time" content="2026-05-25T09:00:00+04:00" />
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

      <AyurvedaHero {...jvcHero} />
      <AyurvedaIntro {...jvcIntro} />
      <Physician {...ayurvedaPhysician} label="YOUR AYURVEDIC DOCTOR IN JVC" />
      <TreatmentProtocol {...jvcFirstVisit} />
      <TreatmentOils {...jvcTherapies} />
      <TreatmentOils {...jvcConditions} />
      <ClinicalBoundaries {...jvcWhy} />
      <TreatmentReviews {...ayurvedaReviewsBlock()} />
      <FAQ {...jvcFaqs} />
      <TreatmentLocation {...jvcLocation} />
      <FinalCTA {...jvcFinalCTA} />
      <RelatedPages {...jvcRelatedPages} />
    </>
  );
};

export default AyurvedaClinicJVC;
