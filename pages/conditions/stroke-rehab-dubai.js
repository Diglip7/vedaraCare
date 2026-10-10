import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FAQ from '../../components/home/FAQ';
import { SciaticaTypes, SciaticaTreatment, SciaticaEmergency } from '../../components/ayurveda/SciaticaSections';
import CareSettings, { StrokePhases, CoordinatedCare } from '../../components/ayurveda/CareSettings';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import { physioReviewsBlock } from '../../data/googleReviews';
import {
  strokeRehabHero,
  strokeRehabIntro,
  strokeEmergency,
  strokeRehabRecovery,
  strokeRehabCareSettings,
  strokeRehabTreatment,
  strokeRehabTypes,
  strokeComplications,
  strokeRehabPhases,
  strokeRehabCoordinatedCare,
  strokeRehabReviews,
  strokeRehabLocation,
  strokeRehabTeam,
  strokeRehabFaqs,
  strokeRehabCTA,
  strokeRehabRelatedPages
} from '../../data/strokeRehabData';

const SITE = 'https://vedaracare.ae';
const URL = `${SITE}/conditions/stroke-rehab-dubai/`;
const ORG_ID = `${SITE}/#organization`;
const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
const REVIEWED = '2026-10-15';   // fixed; change only when Hafsina actually reviews the page
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

const PAGE = {
  title: 'Stroke Rehabilitation in Dubai | Post-Stroke Physio in JVC | Vedara',
  description: 'Outpatient stroke rehabilitation at our JVC clinic, Dubai: walking, balance, arm and hand recovery with a DHA-licensed physiotherapist. Families welcome.'
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
      inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
      about: [
        { '@type': 'MedicalCondition', name: 'Stroke', alternateName: ['Cerebrovascular accident', 'CVA'] },
        { '@type': 'MedicalCondition', name: 'Hemiplegia', alternateName: ['One-sided weakness'] },
        { '@type': 'MedicalCondition', name: 'Post-stroke spasticity' },
      ],
      mainEntity: { '@id': `${URL}#service` },
      reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
      breadcrumb: { '@id': `${URL}#breadcrumb` } },
    { '@type': 'Service', '@id': `${URL}#service`, name: 'Outpatient stroke rehabilitation', serviceType: 'Stroke rehabilitation physiotherapy',
      provider: { '@id': ORG_ID },
      areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
        servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
    { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
      url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
      knowsAbout: ['Stroke rehabilitation', 'Neurological rehabilitation', 'Gait and balance training', 'Electrical stimulation'],
      knowsLanguage: ['English', 'Hindi', 'Malayalam'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
          identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
    { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
      { '@type': 'ListItem', position: 3, name: 'Stroke Rehabilitation', item: URL } ] },
    { '@type': 'FAQPage', '@id': `${URL}#faq`,
      mainEntity: strokeRehabFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
  ],
};

const StrokeRehabDubai = () => {
  return (
    <>
      <Head>
        <title>Stroke Rehabilitation in Dubai | Post-Stroke Physio in JVC | Vedara</title>
        <meta name="description" content="Outpatient stroke rehabilitation at our JVC clinic, Dubai: walking, balance, arm and hand recovery with a DHA-licensed physiotherapist. Families welcome." />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content="Stroke Rehabilitation in Dubai | Post-Stroke Physio in JVC | Vedara" />
        <meta property="og:description" content="Outpatient stroke rehabilitation at our JVC clinic, Dubai: walking, balance, arm and hand recovery with a DHA-licensed physiotherapist. Families welcome." />
        <meta property="og:image" content="https://vedaracare.ae/images/stroke-rehab-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/stroke-rehab-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" hreflang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/stroke-rehab-dubai/" hreflang="x-default" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <div className="stroke-rehabilitation-page">
        <AyurvedaHero {...strokeRehabHero} bgColor="bg-[#F8F5EE]" />
        <AyurvedaIntro {...strokeRehabIntro} />
        <div id="stroke-warning-signs">
          <SciaticaEmergency data={strokeEmergency} />
        </div>
        <SciaticaTreatment data={strokeRehabRecovery} showBorderLeft={false} rightContentStyle="simpleBox" bgColor="bg-[#F5F0E8]" />
        <SciaticaTypes {...strokeRehabTypes} typicalSignsLabel="TYPICAL IMPAIRMENT PATTERNS:" />
        <StrokePhases {...strokeRehabPhases} />
        <SciaticaTreatment data={strokeRehabTreatment} showBorderLeft={false} rightContentStyle="bulletList" bgColor="bg-white" showStepNumbers={false} />
        <CareSettings {...strokeRehabCareSettings} />
        <TreatmentReviews {...physioReviewsBlock()} />
        <PhysiotherapyTeam {...strokeRehabTeam} />
        <CoordinatedCare {...strokeRehabCoordinatedCare} />
        <FAQ {...strokeRehabFaqs} />
        <TreatmentLocation {...strokeRehabLocation} />
        <FinalCTA {...strokeRehabCTA} />
        <RelatedPages {...strokeRehabRelatedPages} />
      </div>
    </>
  );
};

export default StrokeRehabDubai;
