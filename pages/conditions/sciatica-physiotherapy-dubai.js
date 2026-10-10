import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import { physioReviewsBlock } from '../../data/googleReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import { SciaticaTypes, SciaticaEmergency, SciaticaPricing, SciaticaTreatment, SciaticaTimeline } from '../../components/ayurveda/SciaticaSections';
import {
  sciaticaPhysioHero,
  sciaticaPhysioIntro,
  sciaticaPhysioFaqs,
  sciaticaPhysioLocation,
  sciaticaPhysioCTA,
  sciaticaPhysioRelatedPages,
  sciaticaPhysioTeam,
  sciaticaPhysioTypes,
  sciaticaPhysioEmergency,
  sciaticaPiriformis,
  sciaticaPhysioTreatment,
  sciaticaExercises,
  sciaticaPhysioInfo,
  sciaticaPhysioTimeline
} from '../../data/sciaticaPhysiotherapyData';

const SITE = 'https://vedaracare.ae';
const URL = `${SITE}/conditions/sciatica-physiotherapy-dubai/`;
const ORG_ID = `${SITE}/#organization`;
const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
const REVIEWED = '2026-10-15';
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

const PAGE = {
  path: '/conditions/sciatica-physiotherapy-dubai/',
  title: "Sciatica Treatment in Dubai | Physiotherapy in JVC | Vedara Care",
  description: "Sciatica and piriformis syndrome physiotherapy at our JVC clinic, Dubai. Most sciatica improves without surgery. Same-day appointments, in-house GP.",
};

const conditions = [
  { name: 'Sciatica', alternateName: ['Sciatic nerve pain', 'Lumbar radiculopathy'] },
  { name: 'Piriformis syndrome' },
  { name: 'Herniated disc', alternateName: ['Slipped disc'] },
  { name: 'Lumbar spinal stenosis' },
  { name: 'Sacroiliac joint dysfunction' },
].map((x) => ({ '@type': 'MedicalCondition', ...x }));

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
      inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
      about: conditions, mainEntity: { '@id': `${URL}#service` },
      reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
      breadcrumb: { '@id': `${URL}#breadcrumb` } },
    { '@type': 'Service', '@id': `${URL}#service`, name: 'Sciatica physiotherapy', serviceType: 'Physiotherapy',
      provider: { '@id': ORG_ID },
      areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
        servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
    { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
      url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
      knowsAbout: ['Sciatica', 'Piriformis syndrome', 'Nerve mobilisation', 'Dry needling', 'Spinal manipulation'],
      knowsLanguage: ['English', 'Hindi', 'Malayalam'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
          identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
    { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
      { '@type': 'ListItem', position: 3, name: 'Sciatica Treatment', item: URL } ] },
    { '@type': 'FAQPage', '@id': `${URL}#faq`,
      mainEntity: sciaticaPhysioFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
  ],
};

const SciaticaPhysiotherapyDubai = () => {
  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href={`https://vedaracare.ae${PAGE.path}`} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content={`https://vedaracare.ae${PAGE.path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/sciatica-physiotherapy-dubai-hero.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="alternate" href={`https://vedaracare.ae${PAGE.path}`} hrefLang="en-AE" />
        <link rel="alternate" href={`https://vedaracare.ae${PAGE.path}`} hrefLang="x-default" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      
      
      <div className="sciatica-physiotherapy-page">
        <AyurvedaHero
          {...sciaticaPhysioHero}
          bgColor='bg-[#F8F5EE]'
          primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'sciatica_physiotherapy' }}
          secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
        />
        <AyurvedaIntro {...sciaticaPhysioIntro} />
         <SciaticaTreatment data={sciaticaPhysioInfo} showBorderLeft={false} rightContentStyle="list" bgColor='bg-[#F0EBE3]' />
        <SciaticaTypes {...sciaticaPhysioTypes} />
        <SciaticaEmergency data={sciaticaPhysioEmergency} />
        <div id="piriformis">
          <SciaticaTreatment data={{ treatment: { ...sciaticaPiriformis, label: sciaticaPiriformis.label, title: sciaticaPiriformis.title, steps: sciaticaPiriformis.content.map((c, i) => ({ title: "", description: c })) }, rightContent: { image: sciaticaPiriformis.image, alt: sciaticaPiriformis.alt } }} />
        </div>
        <SciaticaTreatment data={sciaticaPhysioTreatment} />
        <div id="exercises">
          <SciaticaTreatment data={{ treatment: { ...sciaticaExercises, label: sciaticaExercises.label, title: sciaticaExercises.title, steps: sciaticaExercises.content.map((c, i) => ({ title: "", description: c })) }, rightContent: { image: sciaticaExercises.image, alt: sciaticaExercises.alt } }} />
        </div>
        <SciaticaTimeline data={sciaticaPhysioTimeline} />
        <TreatmentReviews {...physioReviewsBlock('What patients say about physiotherapy with Hafsina K K')} />
        <PhysiotherapyTeam {...sciaticaPhysioTeam} />
        <FAQ {...sciaticaPhysioFaqs} 
        bgColor='bg-[#F2EDE5]'/>
        <TreatmentLocation {...sciaticaPhysioLocation} />
        <FinalCTA
          {...sciaticaPhysioCTA}
          primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'sciatica_physiotherapy' }}
          secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
        />
        <RelatedPages {...sciaticaPhysioRelatedPages} />
      </div>
    </>
  );
};

export default SciaticaPhysiotherapyDubai;
