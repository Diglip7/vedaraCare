import Head from 'next/head';
import { SITE, SCHEMA_ADDRESS } from '../lib/site';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../components/ayurveda/TreatmentMechanism';
import ClinicalApplications from '../components/ayurveda/ClinicalApplications';
import PracticalGuidance from '../components/ayurveda/PracticalGuidance';
import HubLocation from '../components/ayurveda/HubLocation';
import NextSteps from '../components/ayurveda/NextSteps';
import AboutVedara from '../components/ayurveda/AboutVedara';
import PricingSection from '../components/ayurveda/PricingSection';
import Therapies from '../components/ayurveda/Therapies';
import Reviews from '../components/home/Reviews';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import Physician from '../components/ayurveda/Physician';
import ConsultationProcess from '../components/ayurveda/ConsultationProcess';
import { ayurvedaReviewsBlock } from '../data/googleReviews';
import {
  dubaiHubHero,
  dubaiHubIntro,
  dubaiHubBasics,
  dubaiHubApplications,
  dubaiHubGuidance,
  dubaiHubLocationDetails,
  dubaiHubNextSteps,
  dubaiHubTherapies,
  dubaiHubFaqs,
  dubaiHubCTA,
  ayurvedaPhysician
} from '../data/ayurvedaData';

const SITE_URL = SITE.url;                          // 'https://vedaracare.ae'
const URL = `${SITE_URL}/ayurveda-dubai/`;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = '2026-11-01';                      // same date as PAGE.reviewed; change only when Dr. Zainab re-reviews
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

const PAGE = {
  url: URL,
  title: 'Ayurvedic Clinic & Treatment in Dubai, JVC | Vedara Care',   // 56 characters
  description: 'Ayurvedic clinic and treatment in JVC, Dubai, near Circle Mall: Panchakarma, Shirodhara, Abhyanga and classical therapies with a DHA-licensed BAMS, MD doctor.',   // 158 characters
  image: `${SITE_URL}/images/ayurveda-dubai-hero.webp`,
  reviewed: REVIEWED,   // set to the day Dr. Zainab signs off this version; never new Date()
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': ORG_ID,
      name: SITE.name,
      legalName: SITE.legalName,
      url: `${SITE_URL}/`,
      telephone: SITE.phone,
      email: SITE.email,
      image: `${SITE_URL}/images/ayurveda-dubai-hero.webp`,
      address: SCHEMA_ADDRESS,
      geo: { '@type': 'GeoCoordinates', latitude: 25.0683417, longitude: 55.2120945 },
      hasMap: SITE.mapsUrl,
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00', closes: '22:00',
      }],
      medicalSpecialty: ['Ayurveda', 'Physiotherapy', 'Dermatology'],
      areaServed: ['Jumeirah Village Circle (JVC)', 'Jumeirah Village Triangle (JVT)', 'Al Barsha South', 'Arjan',
        'Dubai Production City', 'Dubai Sports City', 'Motor City', 'Al Barsha', 'Dubai']
        .map((name) => ({ '@type': 'Place', name })),
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license',
        name: 'DHA Healthcare Facility Licence', identifier: SITE.facilityLicence },
      sameAs: [SITE.mapsUrl, ...SITE.sameAs],
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Ayurvedic Clinic & Treatment in Dubai, JVC | Vedara Care',
      description: 'Ayurvedic clinic and treatment in JVC, Dubai, near Circle Mall, with a DHA-licensed BAMS, MD (Ayurveda) doctor.',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#faq` },
      specialty: 'Ayurveda',
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/ayurveda-dubai-hero.webp`,
      datePublished: '2026-05-25',
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'Physician',
      '@id': ZAINAB_ID,
      name: 'Dr. Zainab Sheikh',
      url: `${SITE_URL}/doctors/dr-zainab-ayurveda/`,
      image: `${SITE_URL}/images/dr-zainab-ayurveda-jvc.webp`,
      medicalSpecialty: 'Ayurveda',
      knowsLanguage: ['en', 'ml', 'hi'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MD (Ayurveda)' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Professional Licence',
          identifier: '20918133', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } },
      ],
      worksFor: { '@id': ORG_ID },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Ayurveda',
      alternateName: ['Ayurvedic treatment', 'Ayurvedic medicine'],
      sameAs: ['https://en.wikipedia.org/wiki/Ayurveda'],
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
    },
    {
      '@type': 'ItemList',
      '@id': `${URL}#therapies`,
      name: 'Ayurvedic treatments at Vedara Care, JVC',
      itemListElement: dubaiHubTherapies.items.map((t, i) => ({
        '@type': 'ListItem', position: i + 1, name: t.title, url: `${SITE_URL}${t.link}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurvedic Treatment in Dubai', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: dubaiHubFaqs.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) },
      })),
    },
  ],
};

const AyurvedaDubai = () => {
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
        <meta property="article:published_time" content="2026-05-25T09:00:00+04:00" />
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

      <AyurvedaHero {...dubaiHubHero} />
      <AyurvedaIntro {...dubaiHubIntro} />
      <TreatmentMechanism {...dubaiHubBasics} />
      <Therapies {...dubaiHubTherapies} />
      <Physician {...ayurvedaPhysician} />
      <ConsultationProcess />
      <ClinicalApplications {...dubaiHubApplications} />
      <PracticalGuidance {...dubaiHubGuidance} />
      <PricingSection
        label="PRICING"
        title="How much does Ayurvedic treatment cost in Dubai?"
        description="The cost depends on your condition, the therapies prescribed and how many sessions you need. A back-pain plan of a few Kativasti sessions costs very differently from a 21-day Panchakarma. After your consultation, Dr. Zainab gives you a written plan and the total cost before treatment starts. For current prices, message us on WhatsApp; we usually reply within 15 minutes during clinic hours."
        pricingCards={[]}
        insuranceTitle="DOES INSURANCE COVER AYURVEDA IN DUBAI?"
        insuranceDesc="Some UAE health insurance plans reimburse Ayurvedic treatment at a DHA-licensed facility; many do not. Vedara Care does not bill insurers directly. You pay at the clinic, and we give you the itemised invoice, prescription and medical report your insurer needs for a reimbursement claim. We provide these documents for patients insured with:"
      />
      <AboutVedara
        description="Vedara Care Polyclinic is a DHA-licensed holistic healthcare clinic in JVC, Dubai, near Circle Mall, with Ayurveda at its centre. Our Ayurveda department, led by Dr. Zainab Sheikh (BAMS, MD Ayurveda), practises classical Ayurveda — pulse diagnosis, dosha assessment, Panchakarma and constitution-based treatment — alongside physiotherapy and dermatology."
        stats={[
          { value: "2509266", label: "DHA facility licence" },
          { value: "15+", label: "Classical Ayurvedic therapies" },
          { value: "7 days", label: "Open 9am to 10pm" }
        ]}
        primaryCTA="Visit our Ayurveda clinic in JVC"
      />
      <HubLocation {...dubaiHubLocationDetails} />
      <Reviews {...ayurvedaReviewsBlock()} />


      <FAQ {...dubaiHubFaqs} />
      <NextSteps {...dubaiHubNextSteps} />
      <CTA {...dubaiHubCTA} />
      <RelatedPages
        label="RELATED READING"
        title="Related reading on Ayurveda"
        linkText="Explore the journal"
        linkHref="/blog/"
        columns={3}
        pages={[
          { title: "What is Panchakarma?", description: "What the five actions are, who needs them and how long they take.", href: "/blog/what-is-panchakarma/" },
          { title: "Is Ayurveda effective for back pain?", description: "An honest look at the evidence.", href: "/blog/ayurveda-for-back-pain-evidence/" },
          { title: "Ayurveda clinic in JVC", description: "Visiting us, parking and opening hours.", href: "/ayurveda-clinic-jvc/" }
        ]}
      />
    </>
  );
};

export default AyurvedaDubai;
