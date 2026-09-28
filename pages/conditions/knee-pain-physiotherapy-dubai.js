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

import FAQ from '../../components/home/FAQ';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocationCustom from '../../components/ayurveda/TreatmentLocationCustom';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  kneePainPhysioHero,
  kneePainPhysioIntro,
  kneePainMechanism1,
  kneePainConditions,
  kneePainInjuryTypes,
  kneePainActivityTypes,
  kneePainMechanism2,
  kneePainOutcomes,
  kneePainReviews,
  kneePainTeam,
  kneePainPricing,
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

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": `${currentUrl}#knee-pain-physio`,
      "name": "Vedara Care Knee Pain Physiotherapy",
      "alternateName": ["Vedara Knee Physio Dubai", "Vedara Care Knee Rehabilitation JVC"],
      "url": currentUrl,
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Evidence-based specialist knee pain physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai, delivered by a DHA-licensed physiotherapist.",
      "telephone": "+971555736312",
      "priceRange": "AED 350 - AED 9,800",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC)",
        "addressLocality": "Dubai", "addressRegion": "Dubai", "addressCountry": "AE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.207223" },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "22:00" }
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"}, {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"}, {"@type": "Place", "name": "Al Barsha South"}
      ],
      "medicalSpecialty": ["Knee Pain Physiotherapy", "Physiotherapy", "Sports Medicine", "Orthopaedic Rehabilitation"],
      "isAcceptingNewPatients": true,
      "employee": { "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician" },
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Knee Pain Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Patellofemoral Pain Treatment"},
        {"@type": "MedicalProcedure", "name": "Meniscus Injury Conservative Treatment"},
        {"@type": "MedicalProcedure", "name": "ACL Rehabilitation"},
        {"@type": "MedicalProcedure", "name": "Knee Osteoarthritis Management"},
        {"@type": "MedicalProcedure", "name": "Running Gait Analysis"},
        {"@type": "MedicalProcedure", "name": "Dry Needling"},
        {"@type": "MedicalProcedure", "name": "Manual Therapy"}
      ],
      "memberOf": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "reviewCount": "15", "bestRating": "5", "worstRating": "1" }
    },
    {
      "@context": "https://schema.org", "@graph": [
        { "@type": "MedicalCondition", "name": "Patellofemoral Pain Syndrome", "alternateName": ["Runner's Knee"], "code": {"@type": "MedicalCode", "code": "M22.2", "codingSystem": "ICD-10"} },
        { "@type": "MedicalCondition", "name": "Meniscus Tear", "code": {"@type": "MedicalCode", "code": "S83.2", "codingSystem": "ICD-10"} },
        { "@type": "MedicalCondition", "name": "Anterior Cruciate Ligament Injury", "code": {"@type": "MedicalCode", "code": "S83.5", "codingSystem": "ICD-10"} },
        { "@type": "MedicalCondition", "name": "Iliotibial Band Syndrome", "code": {"@type": "MedicalCode", "code": "M76.3", "codingSystem": "ICD-10"} },
        { "@type": "MedicalCondition", "name": "Patellar Tendinopathy", "code": {"@type": "MedicalCode", "code": "M76.5", "codingSystem": "ICD-10"} },
        { "@type": "MedicalCondition", "name": "Knee Osteoarthritis", "code": {"@type": "MedicalCode", "code": "M17", "codingSystem": "ICD-10"} },
        { "@type": "MedicalCondition", "name": "Osgood-Schlatter Disease", "code": {"@type": "MedicalCode", "code": "M92.5", "codingSystem": "ICD-10"} }
      ]
    },
    {
      "@context": "https://schema.org", "@type": "Service",
      "name": "Knee Pain Physiotherapy Services in JVC, Dubai",
      "provider": {"@id": `${currentUrl}#knee-pain-physio`},
      "areaServed": [{"@type": "Place", "name": "Jumeirah Village Circle"}, {"@type": "City", "name": "Dubai"}],
      "hasOfferCatalog": {
        "@type": "OfferCatalog", "name": "Knee Pain Physiotherapy Services",
        "itemListElement": [
          {"@type": "Offer", "name": "Initial Knee Pain Assessment", "priceCurrency": "AED", "price": "350"},
          {"@type": "Offer", "name": "Running Gait Analysis", "priceCurrency": "AED", "price": "450"},
          {"@type": "Offer", "name": "Acute Knee Injury Package", "priceCurrency": "AED", "price": "1800"},
          {"@type": "Offer", "name": "Chronic Knee Pain Programme", "priceCurrency": "AED", "price": "2800"},
          {"@type": "Offer", "name": "ACL Rehabilitation Programme", "priceCurrency": "AED", "price": "9800"}
        ]
      }
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Knee Pain Physiotherapy in JVC", "item": currentUrl}
      ]
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": kneePainFaqs.faqs.map(faq => ({
        "@type": "Question", "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org", "@type": "MedicalWebPage",
      "headline": "Knee Pain Physiotherapy in JVC, Dubai — Complete Treatment Guide",
      "image": "https://vedaracare.ae/og-images/knee-pain-physiotherapy-dubai.jpg",
      "datePublished": "2026-05-01", "dateModified": modifiedDate,
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician" },
      "publisher": { "@type": "Organization", "name": "Vedara Care Polyclinic" },
      "about": [{"@type": "MedicalCondition", "name": "Knee Pain"}, {"@type": "MedicalCondition", "name": "Knee Osteoarthritis"}],
      "mainEntityOfPage": currentUrl
    }
  ];

  return (
    <>
      <Head>
        <title>Knee Pain Physiotherapy in JVC, Dubai | Vedara Care</title>
        <meta name="description" content="Specialist knee pain physiotherapy at our JVC clinic, Dubai — runner's knee, meniscus injuries, ACL recovery, osteoarthritis. Most knee pain responds without surgery. Book a same-week assessment." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hreflang="en-AE" href={currentUrl} />
        <link rel="alternate" hreflang="x-default" href={currentUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="Knee Pain Physiotherapy in Dubai — Evidence-Based Specialist Care | Vedara JVC" />
        <meta property="og:description" content="Most knee pain responds to appropriate physiotherapy without requiring surgery. DPT-qualified specialists at our Jumeirah Village Circle clinic for runner's knee, meniscus injuries, ACL recovery, knee osteoarthritis, patellar tendinopathy, and the full range of knee conditions." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/knee-pain-physiotherapy-dubai.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
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

      <TreatmentReviews 
        bgColor="bg-white"
        cardBgColor="rgb(248, 244, 238)"
        statsBgColor="rgb(24, 76, 58)"
        label="PATIENT STORIES"
        title="Real knee pain recoveries."
        {...kneePainReviews}
        useKneeStyle={true}
      />

      <PhysiotherapyTeam 
      bgColor="bg-[#F8F4EE]"
      cardColor="bg-white"
      {...kneePainTeam} />

      <div className={`bg-white py-24 px-6 ${kneePainPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4 text-[#C9A84C]">
              {kneePainPricing.label}
            </div>
            <h2 className="text-4xl font-serif text-[#1A1A1A]">
              {kneePainPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {kneePainPricing.services.map((service, index) => (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <p className="text-sm font-sans text-[#1A1A1A]">
                  {service.name}
                </p>
                <p className="font-serif text-[#C9A84C]">
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center mb-8 font-sans text-[#6B6B6B] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: kneePainPricing.insuranceText }} />
          <div className="flex flex-wrap justify-center gap-3">
            {kneePainPricing.insurances && kneePainPricing.insurances.map((insurer, index) => (
              <span key={index} className="bg-[#FAF8F5] px-4 py-2 rounded-full text-xs border border-[#E5DFD3] text-[#6B6B6B]">
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </div>

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
          <div className="font-medium text-[#1A1A1A] text-sm">AED 350</div>
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
