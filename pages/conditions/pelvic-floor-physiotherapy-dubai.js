import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PelvicFloorAssessment from '../../components/ayurveda/PelvicFloorAssessment';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import { physioReviewsBlock } from '../../data/googleReviews';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import {
  pelvicFloorHero,
  pelvicFloorIntro,
  pelvicFloorTypes,
  pelvicFloorSciaticaSection1,
  pelvicFloorSciaticaSection2,
  pelvicFloorMechanism3,
  pelvicFloorReviews,
  pelvicFloorTeam,
  pelvicFloorAssessment,
  pelvicFloorPostnatalSection,
  pelvicFloorFaqs,
  pelvicFloorLocation,
  pelvicFloorCTA,
  pelvicFloorRelatedPages,
  pelvicFloorProlapse,
  pelvicFloorDiastasis,
  pelvicFloorExercises
} from '../../data/pelvicFloorData';

const PelvicFloorDubai = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/conditions/pelvic-floor-physiotherapy-dubai/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const conditions = [
    { name: 'Pelvic floor dysfunction' },
    { name: 'Stress urinary incontinence', alternateName: ['Bladder leakage'] },
    { name: 'Overactive bladder', alternateName: ['Urinary urgency'] },
    { name: 'Pelvic organ prolapse' },
    { name: 'Chronic pelvic pain' },
    { name: 'Dyspareunia', alternateName: ['Painful intercourse'] },
    { name: 'Vaginismus' },
    { name: 'Diastasis recti', alternateName: ['Abdominal separation'] },
    { name: 'Pelvic girdle pain', alternateName: ['Symphysis pubis dysfunction'] },
  ].map((x) => ({ '@type': 'MedicalCondition', ...x }));

  const PAGE = {
    path: '/conditions/pelvic-floor-physiotherapy-dubai/',
    title: "Pelvic Floor & Women's Health Physiotherapy Dubai | Female Physio JVC",
    description: "Pelvic floor and women's health physiotherapy with a female physiotherapist in JVC, Dubai: incontinence, prolapse, pelvic pain, pregnancy and postnatal care.",
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: conditions, mainEntity: { '@id': `${URL}#service` },
        audience: { '@type': 'PeopleAudience', suggestedGender: 'female' },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` } },
      { '@type': 'Service', '@id': `${URL}#service`, name: "Pelvic floor and women's health physiotherapy",
        serviceType: 'Pelvic floor physiotherapy', provider: { '@id': ORG_ID },
        audience: { '@type': 'PeopleAudience', suggestedGender: 'female' },
        areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
        hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Services',
          itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Postnatal Recovery Check' } }] },
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
      { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist', gender: 'Female',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Pelvic floor physiotherapy', "Women's health physiotherapy", 'Antenatal and postnatal fitness', 'Diastasis recti'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certificate', name: 'Antenatal and Postnatal Fitness' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
      { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: "Pelvic Floor & Women's Health Physiotherapy", item: URL } ] },
      { '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: pelvicFloorFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href="https://vedaracare.ae/conditions/pelvic-floor-physiotherapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href={URL} />
        <link rel="alternate" hreflang="x-default" href={URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:image" content="https://vedaracare.ae/images/pelvic-floor-physiotherapy-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/pelvic-floor-physiotherapy-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <AyurvedaHero
        {...pelvicFloorHero}
        primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'pelvic_floor_physiotherapy' }}
        secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
      />

      <AyurvedaIntro
        {...pelvicFloorIntro}
      />

      <SciaticaTreatment
        data={pelvicFloorSciaticaSection1}
        showBorderLeft={false}
        rightContentStyle="keyStatistics"
        bgColor="bg-[#FAF8F5]"
        showStepNumbers={false}
      />

      <SportsInjuryTypes
        {...pelvicFloorTypes}
        variant="condition"
        lgColumns={4}
      />

      <div id="prolapse">
        <TreatmentMechanism {...pelvicFloorProlapse} bgColor="bg-[#FAF8F5]" />
      </div>

      <div id="diastasis-recti">
        <TreatmentMechanism {...pelvicFloorDiastasis} bgColor="bg-white" imageLeft={true} />
      </div>

      <div id="exercises">
        <TreatmentMechanism {...pelvicFloorExercises} bgColor="bg-[#FAF8F5]" />
      </div>


      <PelvicFloorAssessment data={pelvicFloorAssessment} />


      <SciaticaTreatment
        data={pelvicFloorSciaticaSection2}
        showBorderLeft={false}
        bgColor="bg-white"
        showStepNumbers={false}
        rightContentStyle="treatmentModalities"
      />

      <PelvicFloorAssessment data={pelvicFloorPostnatalSection} />

      <PhysiotherapyTeam
        bgColor="bg-[#F8F4EE]"
        cardColor="bg-white"
        {...pelvicFloorTeam}
      />

      <TreatmentReviews {...pelvicFloorReviews} />

      <TreatmentMechanism
        bgColor={pelvicFloorMechanism3.bgColor}
        label={pelvicFloorMechanism3.label}
        title={pelvicFloorMechanism3.title}
        description={pelvicFloorMechanism3.description}
        content={pelvicFloorMechanism3.content}
        coordinationApproach={pelvicFloorMechanism3.coordinationApproach}
      />

      <FAQ {...pelvicFloorFaqs} />

      <TreatmentLocation
        {...pelvicFloorLocation}
      />

      <FinalCTA
        {...pelvicFloorCTA}
        primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'pelvic_floor_physiotherapy' }}
        secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
      />

      <RelatedPages
        bgColor={pelvicFloorRelatedPages.bgColor}
        {...pelvicFloorRelatedPages} />
    </>
  );
};

export default PelvicFloorDubai;
