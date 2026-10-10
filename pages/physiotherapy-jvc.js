import Head from 'next/head';
import AyurvedaHero from '../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../components/ayurveda/AyurvedaIntro';
import PhysiotherapyTechniques from '../components/ayurveda/PhysiotherapyTechniques';
import PhysiotherapySpecializations from '../components/ayurveda/PhysiotherapySpecializations';
import TreatmentProtocolNew from '../components/ayurveda/TreatmentProtocolNew';
import IntegrationSection from '../components/ayurveda/IntegrationSection';
import Therapies2 from '../components/ayurveda/Therapies2';
import PhysiotherapyTeam from '../components/ayurveda/PhysiotherapyTeam';
import PhysiotherapyImageCards from '../components/ayurveda/PhysiotherapyImageCards';
import PhysiotherapyInsurance from '../components/ayurveda/PhysiotherapyInsurance';
import TreatmentReviews from '../components/ayurveda/TreatmentReviews';
import FAQ from '../components/home/FAQ';
import TreatmentLocation from '../components/ayurveda/TreatmentLocation';
import FinalCTA from '../components/ayurveda/FinalCTA';
import RelatedPages from '../components/ayurveda/RelatedPages';
import PhysiotherapyConditions from '../components/ayurveda/PhysiotherapyConditions';
import PhysiotherapyTwoImage from '../components/ayurveda/PhysiotherapyTwoImage';
import {
  physiotherapyJvcHero,
  physiotherapyJvcIntro,
  physiotherapyJvcSpecializations,
  physiotherapyJvcMechanism,
  physiotherapyJvcChoosing,
  physiotherapyJvcProtocol,
  physiotherapyJvcHomeHealthcareNew,
  physiotherapyJvcTeam,
  physiotherapyJvcImageCards,
  physiotherapyJvcInsurance,
  physiotherapyJvcReviews,
  physiotherapyJvcFaqs,
  physiotherapyJvcAreas,
  physiotherapyJvcLocation,
  physiotherapyJvcFinalCTA,
  physiotherapyJvcRelatedPages,
  physiotherapyConditions,
  physiotherapyTwoImage
} from '../data/physiotherapyJvcData';

const PhysiotherapyJvc = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/physiotherapy-jvc/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`; // existing ID, keep it
  const REVIEWED = '2026-10-15'; // change only when Hafsina actually reviews this page

  const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalClinic', 'LocalBusiness'],
        '@id': ORG_ID,
        name: 'Vedara Care Polyclinic',
        url: `${SITE}/`,
        telephone: '+971555736312',
        image: `${SITE}/images/physiotherapy-jvc-hero.webp`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle (JVC)',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 25.0683417, longitude: 55.2120945 },
        hasMap: 'https://maps.google.com/maps?cid=16711954996415388530',
        sameAs: ['https://maps.google.com/maps?cid=16711954996415388530'],
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00', closes: '22:00',
        }],
        medicalSpecialty: ['Physiotherapy', 'Ayurveda', 'Dermatology'],
        isAcceptingNewPatients: true,
      },
      {
        '@type': 'MedicalWebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: 'Physiotherapy in JVC, Dubai | DHA-Licensed Physiotherapist | Vedara',
        description: 'DHA-licensed physiotherapy at our JVC clinic near Circle Mall, Dubai. Back, neck and knee pain, sports injuries, post-surgery rehab and pelvic floor care.',
        inLanguage: 'en-AE',
        isPartOf: { '@id': `${SITE}/#website` },
        publisher: { '@id': ORG_ID },
        about: { '@id': `${URL}#service` },
        mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID },
        lastReviewed: REVIEWED,
        dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Physiotherapy in JVC, Dubai',
        serviceType: 'Physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [
          { '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' },
          { '@type': 'City', name: 'Dubai' },
        ],
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
        '@type': 'ItemList',
        '@id': `${URL}#services`,
        name: 'Physiotherapy services at Vedara Care JVC',
        itemListElement: [
          ['Back pain physiotherapy', '/conditions/back-pain-physiotherapy-jvc/'],
          ['Neck pain physiotherapy', '/conditions/neck-pain-physiotherapy-jvc/'],
          ['Shoulder pain physiotherapy', '/conditions/shoulder-pain-physiotherapy-dubai/'],
          ['Knee pain physiotherapy', '/conditions/knee-pain-physiotherapy-dubai/'],
          ['Sciatica physiotherapy', '/conditions/sciatica-physiotherapy-dubai/'],
          ['Sports injury physiotherapy', '/physiotherapy/sports-injury-jvc/'],
          ['Post-surgery rehabilitation', '/physiotherapy/post-surgery-rehab-dubai/'],
          ['Neurological physiotherapy', '/physiotherapy/neurological-dubai/'],
          ['Pelvic floor physiotherapy', '/conditions/pelvic-floor-physiotherapy-dubai/'],
          ['Paediatric physiotherapy', '/physiotherapy/pediatric-dubai/'],
          ['Manual therapy', '/treatments/manual-therapy-dubai/'],
        ].map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, url: `${SITE}${path}` })),
      },
      {
        '@type': 'Person',
        '@id': HAFSINA_ID,
        name: 'Hafsina K K',
        jobTitle: 'Physiotherapist',
        gender: 'Female',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`,
        worksFor: { '@id': ORG_ID },
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          {
            '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' }
          },
        ],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: physiotherapyJvcFaqs.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) },
        })),
      },
    ],
  };

  const PAGE = {
    path: '/physiotherapy-jvc/',
    title: 'Physiotherapy in JVC, Dubai | DHA-Licensed Physiotherapist | Vedara',
    description: 'DHA-licensed physiotherapy at our JVC clinic near Circle Mall, Dubai. Back, neck and knee pain, sports injuries, post-surgery rehab and pelvic floor care.',
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
        <meta property="og:image" content="https://vedaracare.ae/images/physiotherapy-jvc-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy-jvc/" />

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>
      <div className="physiotherapy-content">
        {/* Section 1 - Hero */}
        <AyurvedaHero {...physiotherapyJvcHero} />

        {/* Section 2 - Intro */}
        <AyurvedaIntro {...physiotherapyJvcIntro} />

        {/* Section 3 - Specializations with commonConditions */}
        <PhysiotherapySpecializations {...physiotherapyJvcSpecializations} />

        {/* Section 4 - Mechanism with Image */}
        <PhysiotherapyTechniques {...physiotherapyJvcMechanism} />

        {/* Section 4.5 - Choosing a Physiotherapist */}
        <PhysiotherapyTechniques {...physiotherapyJvcChoosing} bgColor="bg-[#FAF8F5]" />

        {/* Section 5 - Treatment Protocol */}
        <TreatmentProtocolNew {...physiotherapyJvcProtocol} />

        {/* Section 6 - Home Healthcare (with different UI) */}
        <IntegrationSection
          {...physiotherapyJvcHomeHealthcareNew}

          primaryButtonHref="https://wa.me/971555736312?text=Hi,%20please%20notify%20me%20when%20home%20physiotherapy%20launches"
          secondaryButtonHref="/ayurveda-clinic-jvc"
        />

        {/* Section 7 - Therapies/Modalities */}
        <Therapies2 />

        {/* Section 8 - Team */}
        <PhysiotherapyTeam {...physiotherapyJvcTeam} />

        {/* Section 9 - Image Cards */}
        {/* <PhysiotherapyImageCards {...physiotherapyJvcImageCards} /> */}

        {/* Section 10 - Insurance */}
        <PhysiotherapyInsurance {...physiotherapyJvcInsurance} />

        {/* Section 12 - Reviews */}
        <TreatmentReviews {...physiotherapyJvcReviews} />

        <PhysiotherapyConditions {...physiotherapyConditions} />
        <PhysiotherapyTwoImage {...physiotherapyTwoImage} />

        {/* Section 13 - FAQ */}
        <FAQ {...physiotherapyJvcFaqs} />

        {/* Section 13.5 - Areas We Serve */}
        <AyurvedaIntro
          bgColor="bg-[#FAF8F5]"
          label={physiotherapyJvcAreas.label}
          title={physiotherapyJvcAreas.title}
          blockquote={physiotherapyJvcAreas.text}
          footer={`<a href="${physiotherapyJvcAreas.cta.href}" target="_blank" rel="noopener noreferrer" class="inline-block mt-4 px-8 py-3 bg-[#1A1A1A] text-white text-sm font-semibold tracking-wider hover:bg-[#C9A961] transition-colors rounded">${physiotherapyJvcAreas.cta.text}</a>`}
        />

        {/* Section 14 - Location */}
        <TreatmentLocation {...physiotherapyJvcLocation} />

        {/* Section 15 - Final CTA */}
        <FinalCTA {...physiotherapyJvcFinalCTA} />

        {/* Section 16 - Related Pages */}
        <RelatedPages {...physiotherapyJvcRelatedPages} />
      </div>
    </>
  );
};

export default PhysiotherapyJvc;
