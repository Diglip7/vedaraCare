import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { PostSurgeryTeam } from '../../components/ayurveda/PostSurgeryComponents';
import { physioReviewsBlock } from '../../data/googleReviews';
import { NeckPainShouldYouSee, NeckPainPhases } from '../../components/ayurveda/NeckPainCustomSections';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import SportsPhysiotherapyLocation from '../../components/ayurveda/SportsPhysiotherapyLocation';
// import HomePhysioSingleImageSection from '../../components/ayurveda/HomePhysioSingleImageSection';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import {
  neckPainPhysioHero,
  neckPainPhysioIntro,
  neckPainConditions,
  neckPainShouldYouSee,
  neckPainHowTreat,
  neckPainPhases,
  neckPainModalities,
  neckPainReviews,
  neckPainTeam,

  neckPainFaqs,
  neckPainLocation,
  neckPainCTA,
  neckPainRelatedPages,
  neckPainWhyEpidemic,
  neckPainExercises,
  neckPainSleepDesk
} from '../../data/neckPainPhysioJvcData';

const NeckPainPhysioJvc = () => {
  const currentUrl = "https://vedaracare.ae/conditions/neck-pain-physiotherapy-jvc/";
  const publishedDate = "2024-05-01T08:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/conditions/neck-pain-physiotherapy-jvc/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const PAGE = {
    path: '/conditions/neck-pain-physiotherapy-jvc/',
    title: "Neck Pain Physiotherapy in JVC, Dubai | Tech Neck, Stiff Neck | Vedara",
    description: "Neck pain physiotherapy at our JVC clinic, Dubai: tech neck, stiff neck, cervical spondylosis, pinched nerves and neck headaches. Same-day appointments.",
  };

  const conditions = [
    { name: 'Neck pain', alternateName: ['Stiff neck'] },
    { name: 'Forward head posture', alternateName: ['Tech neck', 'Text neck'] },
    { name: 'Cervical spondylosis', alternateName: ['Neck arthritis', 'Cervical osteoarthritis'] },
    { name: 'Cervical radiculopathy', alternateName: ['Pinched nerve in the neck'] },
    { name: 'Cervicogenic headache' },
  ].map((x) => ({ '@type': 'MedicalCondition', ...x }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: conditions, mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` } },
      { '@type': 'Service', '@id': `${URL}#service`, name: 'Neck pain physiotherapy', serviceType: 'Physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
      { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Neck pain', 'Tech neck', 'Cervical spondylosis', 'Dry needling', 'Spinal manipulation'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
      { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: 'Neck Pain Physiotherapy', item: URL } ] },
      { '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: neckPainFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />

        <link rel="canonical" href="https://vedaracare.ae/conditions/neck-pain-physiotherapy-jvc/" />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/conditions/neck-pain-physiotherapy-jvc/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/neck-pain-physiotherapy-jvc-hero.webp" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <link rel="preload" as="image" href="https://vedaracare.ae/images/neck-pain-physiotherapy-jvc-hero.jpg" />
      </Head>

      <AyurvedaHero
        {...neckPainPhysioHero}
        primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'neck_pain_physiotherapy' }}
        secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
      />
      <AyurvedaIntro {...neckPainPhysioIntro} />

      <TreatmentMechanism
        bgColor={neckPainWhyEpidemic.bgColor}
        label={neckPainWhyEpidemic.label}
        title={neckPainWhyEpidemic.title}
        description={neckPainWhyEpidemic.description}
        content={neckPainWhyEpidemic.content}
        quote={neckPainWhyEpidemic.quote}
        image={neckPainWhyEpidemic.image}
        alt={neckPainWhyEpidemic.alt}
        imageLeft={neckPainWhyEpidemic.imageLeft}
        showStats={neckPainWhyEpidemic.showStats}
      />

      <PhysiotherapySpecializations
        bgColor={neckPainConditions.bgColor}
        label={neckPainConditions.label}
        title={neckPainConditions.title}
        description={neckPainConditions.description}
        types={neckPainConditions.types}
        footer={neckPainConditions.footer}
      />

      <NeckPainShouldYouSee {...neckPainShouldYouSee} />

      <TreatmentMechanism
        bgColor={neckPainHowTreat.bgColor}
        label={neckPainHowTreat.label}
        title={neckPainHowTreat.title}
        content={neckPainHowTreat.content}
        quote={neckPainHowTreat.quote}
        image={neckPainHowTreat.image}
        alt={neckPainHowTreat.alt}
      />

      <TreatmentMechanism {...neckPainExercises} />
      <TreatmentMechanism {...neckPainSleepDesk} />

      <NeckPainPhases {...neckPainPhases} />

      <SportsPhysiotherapyModalities
        label={neckPainModalities.label}
        title={neckPainModalities.title}
        modalities={neckPainModalities.modalities}
      />

      <TreatmentReviews {...physioReviewsBlock()} />

      <PostSurgeryTeam data={neckPainTeam} />


      <FAQ {...neckPainFaqs} />

      <SportsPhysiotherapyLocation data={neckPainLocation} />

      <FinalCTA
        {...neckPainCTA}
        primaryCTATrackingEvent={{ event: 'generate_lead', lead_type: 'booking_click', service: 'neck_pain_physiotherapy' }}
        secondaryCTATrackingEvent={{ event: 'click_whatsapp' }}
      />

      <RelatedPages {...neckPainRelatedPages} />
    </>
  );
};

export default NeckPainPhysioJvc;
