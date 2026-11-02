﻿﻿﻿﻿﻿﻿import React from 'react';
import Head from 'next/head';
import { ayurvedaReviewsBlock } from '../../data/googleReviews';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import ClinicalBoundaries from '../../components/ayurveda/ClinicalBoundaries';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { SITE, SCHEMA_ADDRESS } from '../../lib/site';

import {
  rasayanaJvcHero,
  rasayanaJvcIntro,
  rasayanaJvcMechanism,
  rasayanaJvcTypes,
  rasayanaJvcApproaches,
  rasayanaJvcJourney,
  rasayanaJvcSafety,
  rasayanaJvcPricing,
  rasayanaJvcFaqs,
  rasayanaJvcLocation,
  rasayanaJvcCTA,
  rasayanaJvcTeam,
  rasayanaJvcRelatedPages
} from '../../data/rasayanaAyurvedaJvcData';

const SITE_URL = SITE.url;
const URL = `${SITE_URL}/treatments/rasayana-ayurveda-jvc/`;
const ORG_ID = `${SITE_URL}/#organization`;
const ZAINAB_ID = `${SITE_URL}/doctors/dr-zainab-ayurveda/#physician`;
const REVIEWED = '2026-11-10';                 // same as PAGE.reviewed
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MedicalClinic', 'LocalBusiness'],
      '@id': ORG_ID,
      name: SITE.name,
      url: `${SITE_URL}/`,
      telephone: SITE.phone,
      address: SCHEMA_ADDRESS,
      geo: { '@type': 'GeoCoordinates', latitude: 25.0683417, longitude: 55.2120945 },
      hasMap: SITE.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '22:00' }],
      medicalSpecialty: ['Ayurveda', 'Physiotherapy', 'Dermatology'],
      hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license',
        name: 'DHA Healthcare Facility Licence', identifier: SITE.facilityLicence },
    },
    {
      '@type': 'Physician',
      '@id': ZAINAB_ID,
      name: 'Dr. Zainab Sheikh',
      url: `${SITE_URL}/doctors/dr-zainab-ayurveda/`,
      medicalSpecialty: 'Ayurveda',
      knowsLanguage: ['en', 'ml', 'hi'],
      worksFor: { '@id': ORG_ID },
    },
    {
      '@type': 'MedicalWebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'Rasayana Ayurvedic Rejuvenation in JVC, Dubai | Vedara Care',
      inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': ORG_ID },
      about: { '@id': `${URL}#therapy` },
      mainEntity: { '@id': `${URL}#therapy` },
      audience: { '@type': 'PatientAudience' },
      primaryImageOfPage: `${SITE_URL}/images/rasayana-ayurveda-jvc-hero.webp`,
      dateModified: REVIEWED,
      lastReviewed: REVIEWED,
      reviewedBy: { '@id': ZAINAB_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'MedicalTherapy',
      '@id': `${URL}#therapy`,
      name: 'Rasayana',
      alternateName: ['Ayurvedic rejuvenation', 'Rasayana therapy', 'Kayakalpa', 'Rasayana Chikitsa'],
      description: 'The branch of classical Ayurveda devoted to rejuvenation and healthy ageing, using herbal preparations, diet, daily routine and supportive therapies planned by an Ayurvedic doctor.',
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Ayurveda' },
      indication: ['Healthy ageing', 'Fatigue', 'Recovery after illness', 'Stress', 'Poor sleep']
        .map((name) => ({ '@type': 'MedicalIndication', name })),
      contraindication: ['Pregnancy without medical advice', 'Liver disease without medical advice', 'Diabetes (sugar-containing preparations)']
        .map((name) => ({ '@type': 'MedicalContraindication', name })),
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'Rasayana (Ayurvedic rejuvenation) in JVC, Dubai',
      serviceType: 'Rasayana',
      provider: { '@id': ORG_ID },
      areaServed: ['Jumeirah Village Circle (JVC)', 'Jumeirah Village Triangle (JVT)', 'Al Barsha South', 'Arjan', 'Dubai']
        .map((name) => ({ '@type': 'Place', name })),
      availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${SITE_URL}/book/` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Ayurvedic Treatment in Dubai', item: `${SITE_URL}/ayurveda-dubai/` },
        { '@type': 'ListItem', position: 3, name: 'Rasayana in JVC', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      mainEntity: rasayanaJvcFaqs.faqs.map((f) => ({ '@type': 'Question', name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: stripTags(f.answer) } })),
    },
  ],
};

const PAGE = {
  url: 'https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/',
  title: 'Rasayana Ayurvedic Rejuvenation in JVC, Dubai | Vedara Care',
  description: 'Rasayana (Ayurvedic rejuvenation) in JVC, Dubai, near Circle Mall: consultation, prescription, follow-ups and therapies for energy, sleep and healthy ageing.',
  image: 'https://vedaracare.ae/images/rasayana-ayurveda-jvc-hero.webp',
  reviewed: '2026-11-10',
};

const RasayanaAyurvedaJvc = () => {

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE.url} />
        <link rel="alternate" hrefLang="en-AE" href={PAGE.url} />
        <link rel="alternate" hrefLang="x-default" href={PAGE.url} />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content={PAGE.url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:image" content={PAGE.image} />
        <meta property="article:modified_time" content={`${PAGE.reviewed}T09:00:00+04:00`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE.title} />
        <meta name="twitter:description" content={PAGE.description} />
        <meta name="twitter:image" content={PAGE.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <>
        {/* Section 1: Hero */}
        <AyurvedaHero {...rasayanaJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...rasayanaJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-[#F0EBE3]"
          data={rasayanaJvcMechanism}
          showscetion={true}
        />

        {/* Section 4: SciaticaTypes — Conditions Addressed */}
        <SciaticaTypes
          {...rasayanaJvcTypes}
          label={rasayanaJvcTypes.label}
          bgColor={rasayanaJvcTypes.bgColor}
          title={rasayanaJvcTypes.title}
          types={rasayanaJvcTypes.types}
          description={rasayanaJvcTypes.description}
          footer={rasayanaJvcTypes.footer}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          typicalSignsLabel="Approach"
        />

        {/* Section 5: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={rasayanaJvcApproaches.bgColor}
          label={rasayanaJvcApproaches.label}
          title={rasayanaJvcApproaches.title}
          description={rasayanaJvcApproaches.intro}
          contentSections={rasayanaJvcApproaches.contentSections}
          sidebar={rasayanaJvcApproaches.sidebar}
        />

        {/* Section 6: Journey / Phases */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 0px" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-xs font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "rgb(200, 168, 127)" }}>{rasayanaJvcJourney.label}</div>
              <h2 className="font-display font-medium mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "rgb(31, 31, 31)" }}>{rasayanaJvcJourney.title}</h2>
            </div>
            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-8 visible">
              {rasayanaJvcJourney.phases.map((item, idx) => (
                <div key={idx} className="p-7 flex flex-col gap-4" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                  <div className="text-2xl" style={{ color: "rgb(200, 168, 127)" }}>
                    {idx === 0 ? "◎" : idx === 1 ? "◑" : idx === 2 ? "●" : "✦"}
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.1em] uppercase font-medium mb-1" style={{ color: "rgb(200, 168, 127)" }}>{item.phase}</div>
                    <h3 className="font-display font-medium leading-[1.3]" style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }}>{item.title}</h3>
                  </div>
                  <p className="text-sm leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 grid lg:grid-cols-2 gap-8">
              <div className="p-8" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", border: "1px solid rgba(200, 168, 127, 0.2)" }}>
                <div className="text-xs font-medium tracking-[0.1em] uppercase mb-4" style={{ color: "rgb(200, 168, 127)" }}>What classical Rasayana can achieve</div>
                <div className="flex flex-col gap-2">
                  {rasayanaJvcJourney.canHelp.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}>
                      <span className="mt-0.5 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                <div className="text-xs font-medium tracking-[0.1em] uppercase mb-4" style={{ color: "rgb(119, 119, 119)" }}>What Rasayana does not promise</div>
                <div className="flex flex-col gap-2">
                  {rasayanaJvcJourney.cannotPromise.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}>
                      <span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>
                      {item}
                    </div>
                  ))}
                </div>
                {rasayanaJvcJourney.note && (
                  <p className="text-sm leading-[1.7] mt-6 pt-5" style={{ color: "rgb(85, 85, 85)", borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
                    {rasayanaJvcJourney.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Safety and medicines */}
        <ClinicalBoundaries {...rasayanaJvcSafety} />

        {/* Section 8: Reviews */}
        <TreatmentReviews {...ayurvedaReviewsBlock()} />

        {/* Section 9: Team */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 0px" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-xs font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "rgb(200, 168, 127)" }}>The Team</div>
              <h2 className="font-display font-medium mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "rgb(31, 31, 31)" }}>Your Rasayana doctor in JVC.</h2>
              <p className="max-w-2xl mx-auto leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>Rasayana at Vedara Care is planned by our DHA-licensed Ayurvedic doctor and supported by same-gender therapists.</p>
            </div>
            <div className="fade-in grid lg:grid-cols-2 gap-8 visible">
              <div className="p-8 flex gap-6" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", border: "1px solid rgba(200, 168, 127, 0.2)" }}>
                <div className="flex-shrink-0">
                  <div className="overflow-hidden" style={{ width: "88px", height: "88px", borderRadius: "50%", background: "rgb(232, 224, 212)" }}>
                    <img alt="Dr. Zainab Sheikh, DHA-Licensed Ayurvedic Doctor" className="w-full h-full object-cover" src="/images/dr-zainab-ayurveda-jvc.webp" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs tracking-[0.1em] uppercase font-medium" style={{ color: "rgb(200, 168, 127)" }}>Lead Ayurvedic Doctor</div>
                  <h3 className="font-display font-medium text-xl" style={{ color: "rgb(31, 31, 31)" }}>Dr. Zainab Sheikh</h3>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>BAMS, MD (Ayurveda) · DHA licence 20918133. Leads Ayurveda at Vedara Care, including Rasayana, Panchakarma and pulse diagnosis. Speaks English, Malayalam and Hindi.</p>
                  <a href="/doctors/dr-zainab-ayurveda/" className="text-sm font-medium mt-1" style={{ color: "rgb(200, 168, 127)" }}>View Dr. Zainab's full profile →</a>
                </div>
              </div>
              <div className="grid grid-rows-3 gap-4">
                <div className="p-5" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-sm mb-2" style={{ color: "rgb(31, 31, 31)" }}>Ayurvedic Therapy Team</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Same-gender therapists (men treated by men, women by women) give the supportive therapies under the doctor's supervision.</p>
                </div>
                <div className="p-5" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-sm mb-2" style={{ color: "rgb(31, 31, 31)" }}>Coordination with Modern Medical Care</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Comprehensive medication review before Rasayana initiation. Coordination with treating doctors for patients on chronic medications. Sustained monitoring during Rasayana programmes.</p>
                </div>
                <div className="p-5" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-sm mb-2" style={{ color: "rgb(31, 31, 31)" }}>Multi-Disciplinary Team Integration</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>When useful, Rasayana is coordinated with our GP, physiotherapy and dermatology teams at the same JVC clinic.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Pricing */}
        <PostnatalPricingTableImage data={rasayanaJvcPricing} />

        {/* Section 11: FAQ */}
        <FAQ
          {...rasayanaJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 12: Location */}
        <TreatmentLocation {...rasayanaJvcLocation} />

        {/* Section 13: Final CTA */}
        <FinalCTA
          {...rasayanaJvcCTA}
          bgColor="bg-[white]"
        />

        {/* Section 14: Related Pages */}
        <RelatedPages {...rasayanaJvcRelatedPages} />
      </>
    </>
  );
};

export default RasayanaAyurvedaJvc;
