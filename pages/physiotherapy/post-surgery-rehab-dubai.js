import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import TreatmentProtocol from '../../components/ayurveda/Protocols';
import FAQ from '../../components/home/FAQ';
import {
  SurgicalProcedures,
  HomePhysiotherapy,
  PostSurgeryTeam,
  InsuranceCoverage,
  WhereWeWork
} from '../../components/ayurveda/PostSurgeryComponents';
import {
  postSurgeryRehabHero,
  postSurgeryRehabIntro,
  postSurgeryRehabMechanism,
  postSurgeryRehabFinalCTA,
  postSurgeryRehabRelatedPages,
  postSurgeryRehabReviews,
  homePhysiotherapyData,
  postSurgeryTeamData,
  insuranceCoverageData,
  whereWeWorkData,
  surgicalProceduresData,
  rehabilitationPhasesData,
  postSurgeryFAQData,
  postSurgeryAclSection,
  postSurgeryPrehabSection,
  postSurgeryChecklist
} from '../../data/postSurgeryRehabData';

const PostSurgeryRehabDubai = () => {
  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/physiotherapy/post-surgery-rehab-dubai/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';   // change only when Hafsina actually reviews the page
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const procedures = [
    'Total knee replacement', 'Total hip replacement', 'ACL reconstruction', 'Meniscus repair',
    'Rotator cuff repair', 'Shoulder replacement', 'Spinal fusion', 'Discectomy', 'Hip arthroscopy',
    'Fracture fixation', 'Mastectomy', 'Bariatric surgery',
  ].map((name) => ({ '@type': 'MedicalProcedure', name }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: 'Post-Surgery Physiotherapy in Dubai | Rehab & Prehab in JVC | Vedara',
        description: "Pre- and post-surgery physiotherapy at our JVC clinic, Dubai: knee and hip replacement, ACL, shoulder, spine and fracture rehab, following your surgeon's plan.",
        inLanguage: 'en-AE',
        isPartOf: { '@id': `${SITE}/#website` },
        publisher: { '@id': ORG_ID },
        about: procedures,
        mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID },
        lastReviewed: REVIEWED,
        dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${URL}#service`,
        name: 'Post-surgery physiotherapy and prehab',
        serviceType: 'Post-operative rehabilitation',
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
        '@type': 'Person',
        '@id': HAFSINA_ID,
        name: 'Hafsina K K',
        jobTitle: 'Physiotherapist',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`,
        worksFor: { '@id': ORG_ID },
        knowsAbout: ['Post-operative rehabilitation', 'Prehabilitation', 'ACL rehabilitation', 'Return-to-sport testing', 'Orthopaedic rehabilitation'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          {
            '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' }
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
          { '@type': 'ListItem', position: 3, name: 'Post-Surgery Physiotherapy', item: URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${URL}#faq`,
        mainEntity: postSurgeryFAQData.faqs.map((f) => ({
          '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) },
        })),
      },
    ],
  };

  const PAGE = {
    path: '/physiotherapy/post-surgery-rehab-dubai/',
    title: "Post-Surgery Physiotherapy in Dubai | Rehab & Prehab in JVC | Vedara",
    description: "Pre- and post-surgery physiotherapy at our JVC clinic, Dubai: knee and hip replacement, ACL, shoulder, spine and fracture rehab, following your surgeon's plan.",
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href={PAGE.path ? `https://vedaracare.ae${PAGE.path}` : "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/"} />
        <link rel="alternate" hreflang="en-AE" href={PAGE.path ? `https://vedaracare.ae${PAGE.path}` : "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/"} />
        <link rel="alternate" hreflang="x-default" href={PAGE.path ? `https://vedaracare.ae${PAGE.path}` : "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/"} />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content={PAGE.path ? `https://vedaracare.ae${PAGE.path}` : "https://vedaracare.ae/physiotherapy/post-surgery-rehab-dubai/"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/post-surgery-rehabilitation-dubai-hero.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <meta name="twitter:image" content="https://vedaracare.ae/images/post-surgery-rehabilitation-dubai-hero.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main>
        {/* 1. Hero */}
        <AyurvedaHero {...postSurgeryRehabHero} />

        {/* 2. Intro */}
        <AyurvedaIntro {...postSurgeryRehabIntro} />

        {/* 3. Surgical Procedures We Rehabilitate */}
        <SurgicalProcedures {...surgicalProceduresData} />

        <div id={postSurgeryAclSection.id} className="scroll-mt-24"><PhysiotherapyMechanism {...postSurgeryAclSection} /></div>
        <div id={postSurgeryPrehabSection.id} className="scroll-mt-24"><PhysiotherapyMechanism {...postSurgeryPrehabSection} /></div>
        <div id={postSurgeryChecklist.id} className="scroll-mt-24"><PhysiotherapyMechanism {...postSurgeryChecklist} /></div>

        {/* 4. Mechanism (Surgeon Coordination) */}
        <PhysiotherapyMechanism {...postSurgeryRehabMechanism} />

        {/* 5. Five Phases of Post-Surgical Rehabilitation */}
        <TreatmentProtocol {...rehabilitationPhasesData} />

        {/* 6. Home Physiotherapy */}
        <HomePhysiotherapy data={homePhysiotherapyData} />


        {/* 13. Patient Reviews */}
        <TreatmentReviews {...postSurgeryRehabReviews} />

        {/* 9. The Team */}
        <PostSurgeryTeam data={postSurgeryTeamData} />

        {/* 10. Insurance Coverage */}
        <InsuranceCoverage data={insuranceCoverageData} />

        {/* 11. FAQ */}
        <FAQ {...postSurgeryFAQData} />

        {/* 12. Where We Work */}
        <WhereWeWork data={whereWeWorkData} />

        {/* 8. Final CTA (Ready to start?) */}
        <FinalCTA {...postSurgeryRehabFinalCTA} />

        {/* 12. Related Pages */}
        <RelatedPages {...postSurgeryRehabRelatedPages} />

      </main>
    </>
  );
};

export default PostSurgeryRehabDubai;
