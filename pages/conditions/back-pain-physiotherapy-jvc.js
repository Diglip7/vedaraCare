import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import { BackPainTreatmentPhases, BackPainIntegratedCare } from '../../components/ayurveda/BackPainAcuteAndPricing';
import SportsPhysiotherapyModalities from '../../components/ayurveda/SportsPhysiotherapyModalities';
import BackPainAcuteAndPricing from '../../components/ayurveda/BackPainAcuteAndPricing';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  backPainPhysioHero,
  backPainPhysioIntro,
  backPainPhysioConditions,
  backPainSlippedDisc,
  backPainDeskWork,
  backPainPhysioMechanism,
  backPainPhysioPhases,
  backPainPhysioModalities,
  backPainPhysioIntegratedCare,
  backPainPhysioAcuteAndPricing,
  backPainPhysioReviews,
  backPainPhysioTeam,
  backPainPhysioFaqs,
  backPainPhysioLocation,
  backPainPhysioCTA,
  backPainPhysioRelatedPages
} from '../../data/backPainPhysioJvcData';

const SITE = 'https://vedaracare.ae';
const URL = `${SITE}/conditions/back-pain-physiotherapy-jvc/`;
const ORG_ID = `${SITE}/#organization`;
const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
const REVIEWED = '2026-10-15';
const strip = (s) => String(s).replace(/<[^>]+>/g, '');

const conditions = [
  { name: 'Low back pain', alternateName: ['Lower back pain', 'Lumbago', 'Lumbar pain'] },
  { name: 'Herniated disc', alternateName: ['Slipped disc', 'Disc bulge'] },
  { name: 'Facet joint syndrome' }, { name: 'Lumbar spondylosis' }, { name: 'Upper back pain' },
  { name: 'Postural back pain' },
].map((x) => ({ '@type': 'MedicalCondition', ...x }));

const BackPainPhysioJvc = () => {
  const PAGE = {
    path: '/conditions/back-pain-physiotherapy-jvc/',
    title: "Back Pain Physiotherapy in JVC, Dubai | Lower Back & Disc | Vedara",
    description: "Lower back, upper back and slipped disc physiotherapy at our JVC clinic, Dubai. Same-day appointments for severe pain. DHA-licensed physiotherapist.",
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: conditions, mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` } },
      { '@type': 'Service', '@id': `${URL}#service`, name: 'Back pain physiotherapy', serviceType: 'Physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
        availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' } } },
      { '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist', gender: 'Female',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Back pain', 'Spinal mobilisation', 'Spinal manipulation', 'Directional preference exercises', 'Dry needling'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' } } ] },
      { '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
        { '@type': 'ListItem', position: 3, name: 'Back Pain Physiotherapy', item: URL } ] },
      { '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: backPainPhysioFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) } })) },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link rel="canonical" href="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" hrefLang="en-AE" />
        <link rel="alternate" href="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" hrefLang="x-default" />

        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/conditions/back-pain-physiotherapy-jvc/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/back-pain-physiotherapy-jvc-hero.webp" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <div className="back-pain-physiotherapy-page">
        <AyurvedaHero {...backPainPhysioHero}
          bgColor='bg-[#F8F5EE]'
        />
        <AyurvedaIntro {...backPainPhysioIntro} />
        <PhysiotherapySpecializations
          bgColor={backPainPhysioConditions.bgColor}
          label={backPainPhysioConditions.label}
          title={backPainPhysioConditions.title}
          description={backPainPhysioConditions.description}
          types={backPainPhysioConditions.types}
          footer={backPainPhysioConditions.footer}
        />
        <div id="slipped-disc">
          <PhysiotherapyMechanism
            label={backPainSlippedDisc.label}
            title={backPainSlippedDisc.title}
            content={backPainSlippedDisc.content}
            image={backPainSlippedDisc.image}
            alt={backPainSlippedDisc.alt}
          />
        </div>
        <div id="desk-work">
          <PhysiotherapyMechanism
            label={backPainDeskWork.label}
            title={backPainDeskWork.title}
            content={backPainDeskWork.content}
            image={backPainDeskWork.image}
            alt={backPainDeskWork.alt}
          />
        </div>
        <PhysiotherapyMechanism
          bgColor={backPainPhysioMechanism.bgColor}
          label={backPainPhysioMechanism.label}
          title={backPainPhysioMechanism.title}
          content={backPainPhysioMechanism.content}
          quote={backPainPhysioMechanism.quote}
          image={backPainPhysioMechanism.image}
          alt={backPainPhysioMechanism.alt}
        />
        <BackPainTreatmentPhases
          bgColor={backPainPhysioPhases.bgColor}
          label={backPainPhysioPhases.label}
          title={backPainPhysioPhases.title}
          description={backPainPhysioPhases.description}
          phases={backPainPhysioPhases.phases}
          footer={backPainPhysioPhases.footer}
        />
        <SportsPhysiotherapyModalities
          label={backPainPhysioModalities.label}
          title={backPainPhysioModalities.title}
          modalities={backPainPhysioModalities.modalities}
        />
        <BackPainAcuteAndPricing data={backPainPhysioAcuteAndPricing} />
        <TreatmentReviews {...backPainPhysioReviews}
          bgColor='bg-[#1C3D2E]'
          isDarkText={false}
          cardBgColor="rgba(255,255,255,0.05)"
        />
        <PhysiotherapyTeam {...backPainPhysioTeam} />
        <FAQ {...backPainPhysioFaqs}
          bgColor='bg-[#F2EDE5]' />
        <TreatmentLocation {...backPainPhysioLocation} />
        <BackPainIntegratedCare
          bgColor={backPainPhysioIntegratedCare.bgColor}
          label={backPainPhysioIntegratedCare.label}
          title={backPainPhysioIntegratedCare.title}
          paragraph1={backPainPhysioIntegratedCare.paragraph1}
          paragraph2={backPainPhysioIntegratedCare.paragraph2}
          noteTitle={backPainPhysioIntegratedCare.noteTitle}
          noteDescription={backPainPhysioIntegratedCare.noteDescription}
          linkText={backPainPhysioIntegratedCare.linkText}
        />
        <FinalCTA {...backPainPhysioCTA} />
        <RelatedPages {...backPainPhysioRelatedPages} />
      </div>
    </>
  );
};

export default BackPainPhysioJvc;
