import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import PostnatalComponents from '../../components/ayurveda/PostnatalComponents';
import ManualTherapySession, { ManualTherapyTechniques } from '../../components/ayurveda/ManualTherapySession';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  manualTherapyHero,
  manualTherapyIntro,
  manualTherapyWhatIs,
  manualTherapyConditions,
  manualTherapySession,
  manualTherapyTeam,
  manualTherapyReviews,
  manualTherapyFaqs,
  manualTherapyLocation,
  manualTherapyFinalCTA,
  manualTherapyRelatedPages,
  manualTherapyTechniques
} from '../../data/manualTherapyDubaiData';

const PAGE = {
  path: '/treatments/manual-therapy-dubai/',
  title: "Manual Therapy in JVC, Dubai | Hands-On Physiotherapy | Vedara",   // 62 characters
  description: "Manual therapy at our JVC clinic near Circle Mall, Dubai: joint mobilisation and manipulation, soft-tissue and nerve techniques by a DHA-licensed physio.",   // 153 characters
};

const ManualTherapyDubai = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/treatments/manual-therapy-dubai/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';   // fixed; change only when Hafsina actually reviews the page
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: { '@type': 'MedicalTherapy', name: 'Manual therapy', alternateName: ['Hands-on physiotherapy', 'Joint mobilisation', 'Manipulative therapy'] },
        mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` } },
      { '@type': 'Service', '@id': `${URL}#service`, name: 'Manual therapy', serviceType: 'Physiotherapy',
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
        knowsAbout: ['Manual therapy', 'Joint mobilisation', 'Spinal manipulation', 'Mobilisation with movement', 'IASTM', 'Dry needling', 'Biomechanical cupping'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
      { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: 'Manual Therapy', item: URL } ] },
      { '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: manualTherapyFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/manual-therapy-dubai-hero.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <meta name="twitter:image" content="https://vedaracare.ae/images/manual-therapy-dubai-hero.webp" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/treatments/manual-therapy-dubai/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <main>
        <AyurvedaHero
          {...manualTherapyHero}
          primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'manual_therapy' }}
          secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
        />
        <AyurvedaIntro {...manualTherapyIntro} />
        <SciaticaTreatment 
          data={manualTherapyWhatIs.data} 
          bgColor={manualTherapyWhatIs.bgColor}
          showBorderLeft={false}
          rightContentStyle="tagsBox"/>

         <PostnatalComponents 
          bgColor={manualTherapyConditions.bgColor}
          cardBg={manualTherapyConditions.cardBg}
          label={manualTherapyConditions.label}
          title={manualTherapyConditions.title}
          description={manualTherapyConditions.description}
          items={manualTherapyConditions.items}
          footerNote={manualTherapyConditions.footerNote}
          row1Columns="lg:grid-cols-3"
          row2Columns="lg:grid-cols-3"
          row1Count={3}/>

        <ManualTherapySession 
          bgColor={manualTherapySession.bgColor}
          label={manualTherapySession.label}
          title={manualTherapySession.title}
          subtitle={manualTherapySession.subtitle}
          sections={manualTherapySession.sections}
          safetyCard={manualTherapySession.safetyCard}/>

        <ManualTherapyTechniques 
          bgColor={manualTherapyTechniques.bgColor}
          label={manualTherapyTechniques.label}
          title={manualTherapyTechniques.title}
          subtitle={manualTherapyTechniques.subtitle}
          techniques={manualTherapyTechniques.techniques}
          footerNote={manualTherapyTechniques.footerNote}/>

        <PhysiotherapyTeam 
          label={manualTherapyTeam.label}
          title={manualTherapyTeam.title}
          description={manualTherapyTeam.description}
          members={manualTherapyTeam.members}
          bgColor={manualTherapyTeam.bgColor}
        />

        <TreatmentReviews {...manualTherapyReviews} />
        <FAQ {...manualTherapyFaqs} />
        <TreatmentLocation {...manualTherapyLocation} />
        <FinalCTA
          {...manualTherapyFinalCTA}
          primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'manual_therapy' }}
          secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
        />
        <RelatedPages {...manualTherapyRelatedPages} />
      </main>
    </>
  );
};

export default ManualTherapyDubai;
