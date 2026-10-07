import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PediatricAgeGroups from '../../components/ayurveda/PediatricAgeGroups';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import PediatricWhatToExpect from '../../components/ayurveda/PediatricWhatToExpect';
import PhysiotherapyInsurance from '../../components/ayurveda/PhysiotherapyInsurance';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  pediatricPhysiotherapyHero,
  pediatricPhysiotherapyIntro,
  pediatricPhysiotherapyAgeGroups,
  pediatricPhysiotherapySportsInjuryTypes,
  pediatricPhysiotherapyMechanism,
  pediatricPhysiotherapyInsurance,
  pediatricPhysiotherapyMechanism2,
  pediatricPhysiotherapyWhatToExpect,
  pediatricPhysiotherapyReviews,
  pediatricPhysiotherapyTeam,
  pediatricPhysiotherapyFaqs,
  pediatricPhysiotherapyLocation,
  pediatricPhysiotherapyFinalCTA,
  pediatricPhysiotherapyRelatedPages,
  pediatricPhysiotherapyPricing,
  pediatricPhysiotherapyChecklist,
  pediatricPhysiotherapyGrowthPain
} from '../../data/pediatricPhysiotherapyData';

const SITE = 'https://vedaracare.ae';
const URL = `${SITE}/physiotherapy/pediatric-dubai/`;
const ORG_ID = `${SITE}/#organization`;
const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
const REVIEWED = '2026-10-15';   // change only when Hafsina actually reviews the page
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

const conditions = [
  'Osgood-Schlatter disease', "Sever's disease", 'Sports injuries in children', 'Scoliosis',
  'Flat feet', 'Toe walking', 'Joint hypermobility', 'Developmental coordination disorder',
  'Cerebral palsy', 'Fracture rehabilitation', 'Developmental delay', 'Gait abnormality',
].map((name) => ({ '@type': 'MedicalCondition', name }));

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Pediatric Physiotherapy in Dubai | Kids Physio in JVC | Vedara',
      description: 'Physiotherapy for children aged 5+ and teens at our JVC clinic, Dubai: sports and growth injuries, posture, scoliosis, developmental and neuro conditions.',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE}/#website` },
      publisher: { '@id': ORG_ID },
      about: conditions,
      audience: { '@type': 'PeopleAudience', suggestedMinAge: 5, suggestedMaxAge: 18 },
      mainEntity: { '@id': `${URL}#service` },
      reviewedBy: { '@id': HAFSINA_ID },
      lastReviewed: REVIEWED,
      dateModified: REVIEWED,
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Paediatric physiotherapy',
      serviceType: 'Paediatric physiotherapy',
      provider: { '@id': ORG_ID },
      audience: { '@type': 'PeopleAudience', suggestedMinAge: 5, suggestedMaxAge: 18 },
      areaServed: [
        { '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' },
        { '@type': 'City', name: 'Dubai' },
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE}/book/`,
        servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.7',
        reviewCount: '23',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Person',
      '@id': HAFSINA_ID,
      name: 'Hafsina K K',
      jobTitle: 'Physiotherapist',
      gender: 'Female',
      url: `${SITE}/doctors/hafsina-kk-physiotherapist/`,
      worksFor: { '@id': ORG_ID },
      knowsAbout: ['Paediatric physiotherapy', 'Sports injury rehabilitation', 'Neurological rehabilitation'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
        {
          '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
          identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' }
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: 'Paediatric Physiotherapy', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: pediatricPhysiotherapyFaqs.faqs.map((f) => ({
        '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) },
      })),
    },
  ],
};

const PediatricDubai = () => {

  const PAGE = {
    path: '/physiotherapy/pediatric-dubai/',
    title: "Pediatric Physiotherapy in Dubai | Kids Physio in JVC | Vedara",
    description: "Physiotherapy for children aged 5+ and teens at our JVC clinic, Dubai: sports and growth injuries, posture, scoliosis, developmental and neuro conditions.",
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:image" content="https://vedaracare.ae/images/pediatric-physiotherapy-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <div className="pediatric-physiotherapy-content">
        <AyurvedaHero {...pediatricPhysiotherapyHero} />
        <AyurvedaIntro {...pediatricPhysiotherapyIntro} />
        <PediatricAgeGroups {...pediatricPhysiotherapyAgeGroups} />

        <SportsInjuryTypes {...pediatricPhysiotherapySportsInjuryTypes} />

        <div id="does-my-child-need-physiotherapy">
          <PhysiotherapyMechanism {...pediatricPhysiotherapyChecklist} bgColor="bg-[#FFFFFF]" />
        </div>

        <div id="growth-pain">
          <PhysiotherapyMechanism {...pediatricPhysiotherapyGrowthPain} bgColor="bg-[#F8F6F1]" />
        </div>

        <PhysiotherapyMechanism{...pediatricPhysiotherapyMechanism2}
          bgColor="bg-[#F8F6F1]" />
        {/* <PhysiotherapyMechanism /> */}
        <PediatricWhatToExpect {...pediatricPhysiotherapyWhatToExpect} />
        <PhysiotherapyInsurance {...pediatricPhysiotherapyInsurance} />
        <PhysiotherapyMechanism {...pediatricPhysiotherapyMechanism} />

        <TreatmentReviews {...pediatricPhysiotherapyReviews} />
        <PhysiotherapyTeam {...pediatricPhysiotherapyTeam} />
        <FAQ {...pediatricPhysiotherapyFaqs}
          bgColor="bg-[#F5F1E8]" />
        <TreatmentLocation {...pediatricPhysiotherapyLocation}
          bgColor="bg-[#FFFFFF]"
          buttonColor="bg-[#1A4D2E]"
        />
        <FinalCTA {...pediatricPhysiotherapyFinalCTA} />
        <RelatedPages {...pediatricPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default PediatricDubai;
