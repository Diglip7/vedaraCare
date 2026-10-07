import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import ArthritisTypes from '../../components/ayurveda/ArthritisTypes';
import TreatmentProtocol from '../../components/ayurveda/Protocols';

import PostnatalLocation from '../../components/ayurveda/PostnatalLocation';
import {
  HomePhysiotherapy,
  PostSurgeryTeam,
  InsuranceCoverage,
} from '../../components/ayurveda/PostSurgeryComponents';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  neurologicalDubaiHero,
  neurologicalDubaiIntro,
  neurologicalDubaiMechanism,
  neurologicalConditionsData,
  neurologicalParkinsons,
  neurologicalNeuropathy,
  neurologicalPhasesData,
  neurologicalHomePhysiotherapyData,
  neurologicalDubaiMechanism2,
  neurologicalDubaiReviews,
  neurologicalTeamData,
  neurologicalInsuranceCoverageData,
  neurologicalDubaiFAQData,
  neurologicalDubaiFinalCTA,
  neurologicalDubaiRelatedPages,
  neurologicalDubaiLocationData
} from '../../data/neurologicalDubaiData';

const NeurologicalDubai = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/physiotherapy/neurological-dubai/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';   // change only when Hafsina actually reviews the page
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const conditions = [
    'Parkinson disease', 'Peripheral neuropathy', 'Multiple sclerosis', 'Traumatic brain injury',
    'Spinal cord injury', 'Motor neurone disease', 'Guillain-Barre syndrome', "Bell's palsy",
    'Functional neurological disorder', 'Cerebral palsy',
  ].map((name) => ({ '@type': 'MedicalCondition', name }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: "Neurological Physiotherapy Dubai | Parkinson's & Neuropathy | Vedara",
        description: "Neuro physiotherapy at our JVC clinic, Dubai: Parkinson's, neuropathy, MS, brain and spinal cord injury. One-to-one care from a DHA-licensed physiotherapist.",
        inLanguage: 'en-AE',
        isPartOf: { '@id': `${SITE}/#website` },
        publisher: { '@id': ORG_ID },
        about: conditions,
        mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID },
        lastReviewed: REVIEWED,
        dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Neurological physiotherapy',
        serviceType: 'Neurological physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' },
          { '@type': 'City', name: 'Dubai' },
        ],
        audience: { '@type': 'PeopleAudience', suggestedMinAge: 18 },
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
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`,
        worksFor: { '@id': ORG_ID },
        knowsAbout: ['Neurological rehabilitation', "Parkinson's disease physiotherapy", 'Balance and falls prevention', 'Electrical stimulation'],
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
          { '@type': 'ListItem', position: 3, name: 'Neurological Physiotherapy', item: URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: neurologicalDubaiFAQData.faqs.map((f) => ({
          '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) },
        })),
      },
    ],
  };

  const PAGE = {
    path: '/physiotherapy/neurological-dubai/',
    title: "Neurological Physiotherapy Dubai | Parkinson's & Neuropathy | Vedara",
    description: "Neuro physiotherapy at our JVC clinic, Dubai: Parkinson's, neuropathy, MS, brain and spinal cord injury. One-to-one care from a DHA-licensed physiotherapist.",
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/neurological-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/neurological-physiotherapy-dubai-hero.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <AyurvedaHero {...neurologicalDubaiHero} />

        {/* Intro Section */}
        <AyurvedaIntro {...neurologicalDubaiIntro} />


        {/* Condition-Specific Protocols - Using ArthritisTypes Component */}
        <ArthritisTypes
          {...neurologicalConditionsData}
          bgColor="bg-[#FAF8F3]"
          cardBg="bg-white"
        />

        {/* Parkinson's Section */}
        <section id="parkinsons">
          <PhysiotherapyMechanism {...neurologicalParkinsons} />
        </section>

        {/* Neuropathy Section */}
        <section id="neuropathy">
          <PhysiotherapyMechanism {...neurologicalNeuropathy} bgColor="bg-white" />
        </section>

        {/* Mechanism Section */}
        <PhysiotherapyMechanism {...neurologicalDubaiMechanism} />

        {/* Treatment Phases - Using Protocols Component */}
        <TreatmentProtocol {...neurologicalPhasesData} />

        {/* Home Physiotherapy - Using PostSurgeryComponents HomePhysiotherapy */}
        <HomePhysiotherapy data={neurologicalHomePhysiotherapyData} />
        <PhysiotherapyMechanism {...neurologicalDubaiMechanism2} />
        {/* Insurance Coverage */}
        <InsuranceCoverage data={neurologicalInsuranceCoverageData}
          bgColor="bg-[#FFFFFF]"
        />

        {/* Patient Reviews */}
        {/* Patient Reviews */}
        <TreatmentReviews {...neurologicalDubaiReviews} />

        {/* The Team */}
        <PostSurgeryTeam data={neurologicalTeamData} />

        {/* FAQ Section */}
        <FAQ {...neurologicalDubaiFAQData} />

        {/* Location Section */}
        <PostnatalLocation {...neurologicalDubaiLocationData} />

        {/* Final CTA */}
        <FinalCTA {...neurologicalDubaiFinalCTA} />

        {/* Related Pages */}
        <RelatedPages {...neurologicalDubaiRelatedPages} />
      </main>
    </>
  );
};

export default NeurologicalDubai;
