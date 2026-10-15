import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import TennisElbowRecoveryTimeline from '../../components/ayurveda/TennisElbowRecoveryTimeline';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import {
  tennisElbowHero,
  tennisElbowIntro,
  tennisElbowTypes,
  tennisElbowRecoveryTimeline,
  tennisElbowReviews,
  tennisElbowTeam,
  tennisElbowFaqs,
  tennisElbowSciaticaSection2,
  tennisElbowShockwave,
  tennisElbowExercises,
  tennisElbowLocation,
  tennisElbowCTA,
  tennisElbowRelatedPages,
  tennisElbowSciaticaSection1,
  tennisElbowSciaticaSection3
} from '../../data/tennisElbowData';


const TennisElbowDubai = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/conditions/tennis-elbow-dubai/`;
  const currentUrl = URL;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';   // fixed; change only when Hafsina actually reviews the page
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const PAGE = {
    path: '/conditions/tennis-elbow-dubai/',
    title: "Tennis Elbow Treatment in JVC, Dubai | Physiotherapy | Vedara",   // 61 characters
    description: "Tennis elbow and elbow pain physiotherapy at our JVC clinic near Circle Mall, Dubai: loading exercises, shockwave and dry needling. Same-day appointments.",   // 154 characters
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: [
          { '@type': 'MedicalCondition', name: 'Lateral epicondylitis', alternateName: ['Tennis elbow', 'Lateral epicondylalgia', 'Padel elbow'],
            possibleTreatment: [
              { '@type': 'MedicalTherapy', name: 'Eccentric and isometric loading exercise' },
              { '@type': 'MedicalTherapy', name: 'Extracorporeal shockwave therapy' },   // delete if shockwave is not confirmed
              { '@type': 'MedicalTherapy', name: 'Dry needling' } ] },
          { '@type': 'MedicalCondition', name: 'Medial epicondylitis', alternateName: ["Golfer's elbow"] },   // delete if not confirmed
        ],
        mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` } },
      { '@type': 'Service', '@id': `${URL}#service`, name: 'Tennis elbow physiotherapy', serviceType: 'Physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' },
          { '@type': 'Place', name: 'Jumeirah Village Triangle (JVT), Dubai' },
          { '@type': 'Place', name: 'Al Barsha South, Dubai' },
          { '@type': 'City', name: 'Dubai' } ],
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
      { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Tennis elbow', 'Tendinopathy rehabilitation', 'Dry needling', 'Shockwave therapy'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
      { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: 'Tennis Elbow Treatment', item: URL } ] },
      { '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: tennisElbowFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href="https://vedaracare.ae/conditions/tennis-elbow-dubai/" />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/conditions/tennis-elbow-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/tennis-elbow-dubai-hero.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <AyurvedaHero
        {...tennisElbowHero}
        primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'tennis_elbow_treatment' }}
        secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
      />

      <AyurvedaIntro
        {...tennisElbowIntro}
      />

      <SciaticaTreatment
        data={tennisElbowSciaticaSection1}
        showBorderLeft={false}
        rightContentStyle="keyAnatomy"
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
      />

      <SportsInjuryTypes
        {...tennisElbowTypes}
        bgColor="rgb(255, 255, 255)"
        description={tennisElbowTypes.description}
        variant="condition"
        lgColumns={4}
      />

      <SciaticaTreatment
        data={tennisElbowSciaticaSection2}
        showBorderLeft={false}
        rightContentStyle="keyFact"
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
      />

      <div id="shockwave" className="scroll-mt-24">
        <TreatmentMechanism
          {...tennisElbowShockwave}
          bgColor="bg-white"
        />
      </div>

      <div id="exercises" className="scroll-mt-24">
        <TreatmentMechanism
          {...tennisElbowExercises}
          bgColor="bg-[#F5F1E8]"
        />
      </div>

      <TennisElbowRecoveryTimeline
        {...tennisElbowRecoveryTimeline}
      />

      <SciaticaTreatment
        data={tennisElbowSciaticaSection3}
        showBorderLeft={false}
        bgColor="bg-[#F5F1E8]"
        showStepNumbers={false}
        showComparison={true}
      />

      <TreatmentReviews {...tennisElbowReviews} />

      <PhysiotherapyTeam
        bgColor="bg-[#F8F4EE]"
        cardColor="bg-white"
        {...tennisElbowTeam}
      />

      <FAQ {...tennisElbowFaqs} />

      <TreatmentLocation
        {...tennisElbowLocation}
      />

      <FinalCTA
        {...tennisElbowCTA}
        primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'tennis_elbow_treatment' }}
        secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
      />

      <RelatedPages {...tennisElbowRelatedPages} />
    </>
  );
};


export default TennisElbowDubai;
