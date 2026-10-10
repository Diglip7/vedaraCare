import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import SportsInjuryMechanism from '../../components/ayurveda/SportsInjuryMechanism';
import SportsProtocols from '../../components/ayurveda/SportsProtocols';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import PhysiotherapyIntegration from '../../components/ayurveda/PhysiotherapyIntegration';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import SportsPhysiotherapyLocation from '../../components/ayurveda/SportsPhysiotherapyLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { physioReviewsBlock } from '../../data/googleReviews';
import {
  sportsPhysiotherapyHero,
  sportsPhysiotherapyIntro,
  sportsPhysiotherapyConditions,
  sportsPhysiotherapyMechanism,
  sportsPhysiotherapyModalities,
  sportsPhysiotherapyOutcomes,
  sportsPhysiotherapyTeam,
  sportsPhysiotherapyReviews,
  sportsPhysiotherapyFaqs,
  sportsPhysiotherapyLocation,
  sportsPhysiotherapyFinalCTA,
  sportsPhysiotherapyRelatedPages,
  sportsPhysiotherapyInjuryTypes,
  sportsPadelSection
} from '../../data/sportsPhysiotherapyData';

const PAGE = {
  path: '/physiotherapy/sports-injury-jvc/',
  title: "Sports Injury Physio in JVC, Dubai | Padel, Running, Gym | Vedara",
  description: "Sports physio at our JVC clinic, Dubai: padel, running, gym and football injuries. Shockwave, dry needling, video gait analysis and return-to-sport testing.",
};

const SportsInjuryJvc = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/physiotherapy/sports-injury-jvc/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const conditions = [
    'Sports injury', 'Lateral epicondylitis', 'Ankle sprain', 'Hamstring strain', 'Calf strain',
    'Patellofemoral pain syndrome', 'Achilles tendinopathy', 'Medial tibial stress syndrome',
    'Rotator cuff tendinopathy', 'Iliotibial band syndrome',
  ].map((name) => ({ '@type': 'MedicalCondition', name }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL,
        name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: conditions, mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` },
      },
      {
        '@type': 'Service', '@id': `${URL}#service`,
        name: 'Sports injury physiotherapy', serviceType: 'Sports physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
        availableChannel: {
          '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' }
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
        '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Sports physiotherapy', 'Return-to-sport testing', 'Dry needling', 'Shockwave therapy', 'Gait analysis'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          {
            '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' }
          },
        ],
      },
      {
        '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
          { '@type': 'ListItem', position: 3, name: 'Sports Injury Physiotherapy', item: URL },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: sportsPhysiotherapyFaqs.faqs.map((f) => ({
          '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) }
        })),
      },
    ],
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
        <meta property="og:image" content="https://vedaracare.ae/images/sports-injury-physiotherapy-jvc-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/sports-injury-jvc/" />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <div className="sports-physiotherapy-content">
        {/* H1: Section 1 - Hero */}
        <AyurvedaHero {...sportsPhysiotherapyHero} />

        {/* H2: Sports injury physiotherapy at our JVC clinic, in one paragraph. [Quick Answer Box] */}
        <AyurvedaIntro {...sportsPhysiotherapyIntro} />

        {/* H2: Specific sport-injury protocols at our JVC clinic. */}
        <SportsProtocols />



        {/* H2: Specific injury types we treat at our JVC clinic. */}
        <SportsInjuryTypes {...sportsPhysiotherapyInjuryTypes} />

        {/* H2: How sports injury physiotherapy actually works at our JVC clinic. */}
        <SportsInjuryMechanism />

        {/* H2: Evidence-based sports physiotherapy techniques. */}
        <SportsPhysiotherapyModalities {...sportsPhysiotherapyModalities} />

        {/* H2: Same-day appointments for acute sports injuries. */}
        <PhysiotherapyIntegration />

        {/* H2: What return-to-sport looks like by injury type. */}
        <OutcomeRanges {...sportsPhysiotherapyOutcomes} />

        {/* H2: Sports physiotherapy specialists at our JVC clinic. */}
        <PhysiotherapyTeam {...sportsPhysiotherapyTeam} />


        {/* H2: Real return-to-sport outcomes from JVC patients. */}
        <TreatmentReviews {...physioReviewsBlock()} />

        {/* H2: What sports patients ask before booking. [FAQ block] */}
        <FAQ {...sportsPhysiotherapyFaqs} />

        {/* H2: Where sports physiotherapy happens at Vedara Care JVC. */}
        <SportsPhysiotherapyLocation data={sportsPhysiotherapyLocation} />

        {/* H2: Acute injury or chronic pattern — start with a proper assessment. */}
        <FinalCTA {...sportsPhysiotherapyFinalCTA} />

        {/* Related Pages */}
        <RelatedPages {...sportsPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default SportsInjuryJvc;
