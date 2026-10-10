import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import OutcomeRanges from '../../components/ayurveda/OutcomeRanges';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import KneeTreatmentApproach from '../../components/ayurveda/KneeTreatmentApproach';
// import { PostSurgeryTeam } from '../../components/ayurveda/PostSurgeryComponents';
import { physioReviewsBlock } from '../../data/googleReviews';
import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocationCustom from '../../components/ayurveda/TreatmentLocationCustom';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  kneePainPhysioHero,
  kneePainPhysioIntro,
  kneePainMechanism1,
  kneePainInjuryTypes,
  kneePainWithoutSurgery,
  kneePainArthritis,
  kneePainActivityTypes,
  kneePainOutcomes,
  kneePainReviews,
  kneePainTeam,

  kneePainFaqs,
  kneePainLocation,
  kneePainCTA,
  kneePainRelatedPages,
  kneePainTreatmentApproach
} from '../../data/kneePainPhysioJvcData';

const KneePainPhysioDubai = () => {
  const currentUrl = "https://vedaracare.ae/conditions/knee-pain-physiotherapy-dubai/";
  const publishedDate = "2024-05-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const PAGE = {
    path: '/conditions/knee-pain-physiotherapy-dubai/',
    title: "Knee Pain Physiotherapy & Treatment in Dubai | JVC Clinic | Vedara",   // 66 characters
    description: "Knee pain treatment without surgery at our JVC clinic, Dubai: runner's knee, meniscus, ligament injuries and knee arthritis, with a DHA-licensed physio.",   // 152 characters
  };

  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/conditions/knee-pain-physiotherapy-dubai/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';   // change only when Hafsina actually reviews the page
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const conditions = [
    { name: 'Knee pain' },
    { name: 'Patellofemoral pain syndrome', alternateName: ["Runner's knee"] },
    { name: 'Meniscus tear' }, { name: 'Anterior cruciate ligament injury', alternateName: ['ACL injury'] },
    { name: 'Medial collateral ligament injury', alternateName: ['MCL injury'] },
    { name: 'Knee osteoarthritis', alternateName: ['Knee arthritis'] },
    { name: 'Patellar tendinopathy', alternateName: ["Jumper's knee"] }, { name: 'Iliotibial band syndrome' },
  ].map((x) => ({ '@type': 'MedicalCondition', ...x }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: conditions, mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` } },
      { '@type': 'Service', '@id': `${URL}#service`, name: 'Knee pain physiotherapy', serviceType: 'Physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
      { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Knee pain', 'Sports knee injuries', 'Knee osteoarthritis', 'Gait analysis', 'Shockwave therapy'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
      { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: 'Knee Pain Physiotherapy', item: URL } ] },
      { '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: kneePainFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href="https://vedaracare.ae/conditions/knee-pain-physiotherapy-dubai/" />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/conditions/knee-pain-physiotherapy-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/knee-pain-physiotherapy-dubai-hero.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>


      <AyurvedaHero 
        {...kneePainPhysioHero}
        primaryCTATrackingEvent="generate_lead"
        secondaryCTATrackingEvent="click_whatsapp"
      />
      
      <AyurvedaIntro 
        {...kneePainPhysioIntro}
      />
      
      <TreatmentMechanism
        bgColor="bg-[#F8F4EE]"
        label="UNDERSTANDING KNEE PAIN"
        title="Why knee pain is so common — and so often misunderstood."
        description="Knee pain has many distinct causes that look similar at first but require different treatment. Understanding what is actually happening matters enormously."
        content={[
          "The knee is one of the most complex joints in the body — bearing weight, allowing both stability and substantial range of motion, integrating ligaments, tendons, cartilage, menisci, and bone structures that must work together precisely. When something disrupts this complex system, pain results. But the cause of that disruption varies enormously between patients with seemingly similar symptoms.",
          "<strong>The same symptoms, different causes</strong><br/>Front of knee pain when going down stairs could indicate patellofemoral pain syndrome, patellar tendinopathy, fat pad irritation, or early knee osteoarthritis. Accurate diagnosis is foundational — generic 'knee exercises' produce mediocre outcomes when the underlying cause is not addressed.",
          "<strong>Why imaging often misleads</strong><br/>MRI findings frequently mislead patients about knee pain. Research consistently shows that meniscus tears, cartilage changes, and other abnormalities appear on imaging in many people without any knee pain at all — 30–50% of pain-free volunteers have visible meniscus findings on MRI. Effective treatment addresses dynamic factors, not just imaging findings.",
          "<strong>The Dubai active population factor</strong><br/>Dubai has an unusually active expat population — running clubs, gym culture, padel explosion, recreational sports across communities. Our patient population reflects this — most knee pain we see is in active people who want to return to their activities.",
          "<strong>The age factor</strong><br/>Knee pain affects all ages but in different patterns. Adolescents present with growth-related conditions (Osgood-Schlatter). Adults aged 25–45 most commonly have overuse injuries and tendinopathies. Adults 45–65 increasingly present with degenerative changes. Treatment approach calibrates to age, activity demands, and life stage.",
          "<strong>Why most knee pain responds to physiotherapy</strong><br/>The vast majority of knee pain has dynamic components — movement patterns, muscle balance, biomechanics, training load — that respond to appropriate physiotherapy. Even conditions with clear structural components (meniscus tears, partial ligament injuries, osteoarthritis) typically have substantial dynamic factors. Most patients can avoid surgery with appropriate conservative care."
        ]}
        quote="The knee that has an MRI finding does not always have pain. The knee that has pain does not always have an imaging finding. Treatment must address what is actually happening — not just what shows up on a scan."
        image={kneePainMechanism1.image}
        alt={kneePainMechanism1.alt}
        imageLeft={false}
        showStats={false}
      />

      <SportsInjuryTypes 
        {...kneePainInjuryTypes}
        bgColor="rgb(255, 255, 255)"
        description={kneePainInjuryTypes.description}
        variant="condition"
      />

      <div id="without-surgery">
        <TreatmentMechanism 
          {...kneePainWithoutSurgery}
          bgColor="bg-[#F8F4EE]"
        />
      </div>

      <div id="knee-arthritis">
        <TreatmentMechanism 
          {...kneePainArthritis}
          bgColor="bg-white"
          imageLeft={true}
        />
      </div>

      <SportsInjuryTypes 
        {...kneePainActivityTypes}
        bgColor="rgb(248, 244, 238)"
        description={kneePainActivityTypes.description}
        variant="activity"
        lgColumns={3}
     
      />

      <KneeTreatmentApproach
        {...kneePainTreatmentApproach}
      />

      <OutcomeRanges 
        label="RECOVERY TIMELINES"
        title="Recovery timelines by knee condition."
        {...kneePainOutcomes}
      />

      <TreatmentReviews {...physioReviewsBlock()} />

      <PhysiotherapyTeam 
      bgColor="bg-[#F8F4EE]"
      cardColor="bg-white"
      {...kneePainTeam} />




      <FAQ {...kneePainFaqs} />

      <TreatmentLocationCustom 
        bgColor={kneePainLocation.bgColor}
        label={kneePainLocation.label}
        title={kneePainLocation.title}
        address1="Vedara Care Polyclinic"
        address2={kneePainLocation.address}
        // addressNote="Next to Circle Mall · 3 min from FIVE Jumeirah Village Hotel"
        clinicHours={[
          { label: "Monday - Sunday", time: "9:00AM to 10:00PM" },
         
        ]}
        contactPhone={kneePainLocation.phone}
        description={kneePainLocation.description}
        buttonText={kneePainLocation.buttonText}
        buttonHref={kneePainLocation.buttonLink}
        mapEmbed={kneePainLocation.mapEmbed}
        locationMarkers={[
          { name: "Circle Mall", distance: "5 min walk" },
          { name: "FIVE JV Hotel", distance: "3 min drive" },
          { name: "JSS School", distance: "5 min drive" }
        ]} 
      />

      <FinalCTA 
        {...kneePainCTA}
        title="Most knee pain responds to the right treatment."
        primaryCTATrackingEvent="generate_lead"
        secondaryCTATrackingEvent="click_whatsapp"
      />

      <RelatedPages {...kneePainRelatedPages} />
      {/* Mobile Sticky Booking Bar */}
      <div className="md:hidden fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between items-center pb-safe">
        <div>
          <div className="text-xs font-semibold text-[#C4A962] tracking-wider uppercase mb-1">Assessment</div>
        </div>
        <div className="flex gap-2">
          <a
            href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20knee%20pain%20physiotherapy."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-4 py-3 rounded-md text-sm font-medium flex items-center justify-center transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20book%20a%20knee%20pain%20assessment."
            className="bg-[#1A1A1A] text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-[#333333] transition-colors text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
};

export default KneePainPhysioDubai;
