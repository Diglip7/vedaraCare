import { useState } from 'react';
import Head from 'next/head';
import { CheckCircle2, HelpCircle, X } from 'lucide-react';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import {
  oxygenFacialHero,
  oxygenFacialIntro,
  oxygenFacialAtAGlance,
  oxygenFacialExplanation,
  oxygenFacialWhatMakesDifferent,
  oxygenFacialWhatHappensDuring,
  oxygenFacialComponentMeaning,
  oxygenFacialConsultationSection,
  oxygenFacialConcerns,
  oxygenFacialSuitability,
  oxygenFacialAppointment,
  oxygenFacialSensation,
  oxygenFacialDowntime,
  oxygenFacialRecovery,
  oxygenFacialAftercare,
  oxygenFacialWhatToAvoid,
  oxygenFacialResults,
  oxygenFacialResultsDuration,
  oxygenFacialEventNotes,
  oxygenFacialFAQ,
  oxygenFacialCTA
} from '../../data/oxygenFacialData';

// ─── Design tokens ───────────────────────────────────────────────────────────
const GOLD = '#C9A55A';
const INK = 'rgb(26,26,26)';
const STONE = 'rgb(107,107,107)';
const SAGE = '#F0EBE3';

const COLORS = {
  gold: GOLD,
  goldSoft: '#D9C39B',
  ink: INK,
  stone: STONE,
  sage: SAGE,
  deep: '#1C1C14',
  card: '#FFFFFF',
  line: '#E5DFD3',
  rustBg: '#FFF4F0',
  rustLine: '#F5C6B8'
};
function Eyebrow({ children }) {
  return (
    <p className="text-xs tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, sub, center }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-serif" style={{ color: INK }}>
        {title}
      </h2>
      {sub && (
        <p className="text-base mt-3" style={{ color: STONE, lineHeight: '1.7' }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function SkinConcernsDeepDive({ concerns }) {
  const [active, setActive] = useState(0);
  const current = concerns[active] || concerns[0];

  return (
    <section style={{ padding: '96px 24px', background: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
            SKIN CONCERNS
          </div>
          <h2 className="text-3xl md:text-4xl font-serif" style={{ color: INK }}>
            Which Skin Concerns May Be Addressed?
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: STONE, lineHeight: '1.7' }}>
            None of these outcomes is guaranteed — how much a given concern improves depends on its severity, the individual&rsquo;s skin, and the treatment plan agreed during consultation.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b" style={{ borderColor: '#E5DFD3' }}>
          {concerns.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className="px-4 py-3 text-sm font-medium border-b-2 transition-colors"
              style={{
                borderColor: active === i ? GOLD : 'transparent',
                color: active === i ? INK : STONE,
                background: 'transparent',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div key={active} className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-5">
            <h3 className="text-2xl mb-4 font-serif" style={{ color: INK }}>
              Oxygen Facial for {current.title}
            </h3>
            <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: STONE, lineHeight: '1.75' }}>
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const OxygenFacialJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/oxygen-facial-jvc/";
  const today = new Date();
  const modifiedDate = today.toISOString().split('T')[0];
  const publishedDate = "2026-08-12";
  const [compareTab, setCompareTab] = useState('hydrafacial');
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#oxygenfacial`,
      "name": "Vedara Care Oxygen Facial Treatment JVC",
      "alternateName": ["Vedara Oxygen Facial JVC", "Oxygen Facial Polyclinic JVC", "Vedara Oxygen Facial Dubai"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Curious about an Oxygen Facial in JVC? A clear, honest guide to what the treatment involves, realistic results, and what to ask before booking at Vedara Care Polyclinic in Jumeirah Village Circle, Dubai.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 500 - AED 2500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
        "addressLocality": "Jumeirah Village Circle (JVC)",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.2072235"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:30",
          "closes": "23:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:30",
          "closes": "23:30"
        }
      ],
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "Jumeirah Village Circle" },
        { "@type": "Place", "name": "Jumeirah Village Triangle" },
        { "@type": "Place", "name": "Al Barsha South" },
        { "@type": "Place", "name": "Dubai Sports City" },
        { "@type": "Place", "name": "Motor City" },
        { "@type": "Place", "name": "Arjan" },
        { "@type": "Place", "name": "Dubai Hills Estate" },
        { "@type": "Place", "name": "Dubai Marina" },
        { "@type": "Place", "name": "Downtown Dubai" }
      ],
      "medicalSpecialty": ["Dermatology", "Aesthetic Dermatology", "Cosmetic Facial Treatments", "Oxygen Facial"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Oxygen Facial" },
        { "@type": "MedicalProcedure", "name": "Oxygen Facial for Hydration" },
        { "@type": "MedicalProcedure", "name": "Oxygen Facial for Dull-Looking Skin" }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "680",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalProcedure",
          "name": "Oxygen Facial",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "bodyLocation": "Skin",
          "howPerformed": "Cleansing, hydration-focused products, and an oxygen-related step applied to facial skin; exact protocol, products and equipment vary by provider. A surface-level cosmetic treatment focused on hydration and refreshed appearance rather than structural skin changes."
        },
        {
          "@type": "MedicalProcedure",
          "name": "Oxygen Facial Skin Assessment",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "Clinician review of current skin condition, sensitivities, treatment goals, skincare routine, medical history, and recent cosmetic procedures to confirm Oxygen Facial suitability before any treatment."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Oxygen Facial Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#oxygenfacial` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "Oxygen Facial Cosmetic Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Oxygen Facial Services",
        "itemListElement": [
          { "@type": "Offer", "name": "Oxygen Facial Consultation", "priceCurrency": "AED" },
          { "@type": "Offer", "name": "Oxygen Facial Single Session", "priceCurrency": "AED" },
          { "@type": "Offer", "name": "Oxygen Facial Maintenance Sessions", "priceCurrency": "AED" }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "Oxygen Facial in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": oxygenFacialFAQ.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Oxygen Facial at JVC Dubai — Hydration-Focused Non-Invasive Cosmetic Facial Guide",
      "image": "https://vedaracare.ae/images/skin-consultation-vedara-jvc.webp",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Consultant Dermatologist"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalProcedure", "name": "Oxygen Facial" },
        { "@type": "MedicalProcedure", "name": "Cosmetic Hydration Facial" }
      ],
      "mainEntityOfPage": currentUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://vedaracare.ae/#organization",
      "name": "Vedara Care Polyclinic"
    },
    {
      "@context": "https://schema.org",
      "@type": "ComparisonTable",
      "name": "Oxygen Facial Quick-Reference Summary",
      "about": "At-a-glance reference table covering Oxygen Facial treatment type, common goals, downtime, suitability, expected results and consultation guidance to help patients understand the general scope of the treatment before booking.",
      "hasPart": [
        {
          "@type": "Table",
          "name": "Oxygen Facial at a Glance",
          "description": "Summary rows covering Treatment type, Common goals, Downtime, Suitable for, Results, and Consultation dimensions."
        }
      ]
    }
  ];
  const redFlagsItems = [
    "Be cautious of any clinic that promises guaranteed 'glass skin' permanent hydration, a permanent glow, instant acne cures, permanent wrinkle removal, or zero-risk treatment with no possible reaction. Be equally cautious of providers who skip a proper consultation, can't clearly explain their equipment or products, use before-and-after photos that look edited or inconsistent, or apply pressure to buy a package of sessions before you've even had one. A responsible provider explains both what the treatment can do and what it can't."
  ];


  const suitabilityTypes = {
    bgColor: "bg-white",
    cardBg: "bg-[#FAF7F2]",
    label: "SUITABILITY",
    title: "Who May Consider an Oxygen Facial?",
    description: oxygenFacialSuitability.introduction,
    types: [
      {
        number: "01",
        title: "Who May Consider an Oxygen Facial",
        description: "General reasons patients look into this treatment.",
        typicalSigns: oxygenFacialSuitability.rightFor
      },
      {
        number: "02",
        title: "Who Should Discuss Their Skin Condition First",
        description: "Situations where seeking a qualified professional is especially important.",
        typicalSigns: oxygenFacialSuitability.notRightFor
      }
    ],
    footer: oxygenFacialSuitability.footer,
    gridCols: "grid grid-cols-1 md:grid-cols-2 gap-6",
    borderPosition: "left"
  };

  const chooseClinicItems = [
    "Are treatments delivered by properly trained staff?",
    "Can the clinic clearly explain what their specific protocol involves?",
    "Is the equipment appropriate and well-maintained?",
    "Are hygiene standards visible and appropriate?",
    "Are the products being used explained transparently?",
    "Is a real skin assessment carried out before treatment begins?",
    "Are expectations set realistically, without exaggerated promises?",
    "Is aftercare guidance actually provided, not just assumed?",
    "Is pricing explained transparently once your plan is clear?",
    "Does the clinic avoid pressuring you into buying a package upfront?"
  ];

  const compareTabs = {
    traditionalMicroneedling: {
      label: "vs Traditional Microneedling",
      type: "prose",
      paragraphs: [
        "The core difference is the addition of radiofrequency heat to the needling process. Traditional microneedling relies on mechanical injury alone, which works well for many texture and mild-scarring concerns. RF microneedling adds a thermal element aimed more directly at firmness and remodelling, which is why it's more often discussed when mild laxity is part of the concern alongside texture. Recovery can be broadly similar, though RF treatment sometimes involves slightly more warmth in the hours after a session, depending on settings."
      ],
    },

    hydrafacial: {
      label: "vs Hydrating or Refresh-Style Facials",
      type: "prose",
      paragraphs: [
        "Facials focused on cleansing, exfoliation, and hydration serve a different purpose than RF microneedling. They're generally aimed at a surface-level refresh and are not designed to remodel deeper tissue or address structural concerns like acne scarring or laxity. If your primary goal is an immediate glow with no downtime, a hydrating facial may be a more relevant conversation. If the concern is more structural, RF microneedling addresses a different layer of the problem."],
    },

    peel: {
      label: "vs Chemical Peel",
      type: "prose",
      paragraphs: [
        "Chemical peels work through controlled chemical exfoliation of the skin's surface, making them a strong option for surface-level texture and some pigmentation concerns. RF microneedling reaches beneath the surface via needling and thermal energy, making it more relevant when the goal includes deeper texture remodelling, scarring, or mild firmness rather than surface renewal alone. The two approaches are sometimes used at different points in a longer-term skin plan rather than treated as competing options."
      ],
    },

    laser: {
      label: "vs Laser Resurfacing",
      type: "prose",
      paragraphs: [
        "Laser treatments use light energy rather than mechanical needling, and different laser platforms are designed for different concerns — some target pigmentation, others focus on resurfacing texture. Depth of effect and downtime vary considerably between laser types, so a direct comparison depends heavily on which specific laser is being discussed. Neither approach is universally safer or more effective — the right option depends on the concern, the skin type, and what the treating practitioner recommends after assessment."
      ],
    },
  };


  const beforeBookingItems = [
    "What type of Oxygen Facial protocol do you actually provide?",
    "What equipment is used during the treatment?",
    "What products are applied to my skin?",
    "Is oxygen genuinely delivered during the treatment, and how?",
    "What specific skin concern is this treatment intended to address for me?",
    "Is this treatment suitable for my skin type?",
    "Will any exfoliation be performed as part of my session?",
    "How long does the treatment usually take?",
    "Can I return to my normal activities immediately afterward?",
    "What aftercare should I follow after my session?",
    "How much does the treatment cost?",
    "Are there other treatments that may be more appropriate for my specific concern?"
  ];


  const relatedPagesData = {
    label: "EXPLORE MORE",
    title: "Related Services",
    pages: [{ title: "Chemical Peel in Dubai", href: "https://vedaracare.ae/treatments/chemical-peel-dubai", description: "A professional peel that may be considered for selected concerns such as uneven tone, pigmentation, and surface texture." },
    { title: "Skin Rejuvenation in JVC", href: "https://vedaracare.ae/treatments/skin-rejuvenation-jvc", description: "Personalised skin treatments designed to support smoother texture, improved hydration, and a refreshed overall appearance." },
    { title: "Microdermabrasion in JVC", href: "/treatments/microdermabrasion-jvc", description: "A gentle exfoliation treatment that removes surface buildup and may help leave the skin feeling smoother and fresher." },
    { title: "LED Light Therapy in JVC", href: "/treatments/led-light-therapy-jvc", description: "A non-invasive light-based option that may complement selected skincare and skin-rejuvenation programs." },
    { title: "HydraFacial in JVC", href: "/hydrafacial-jvc", description: "A multi-step facial combining cleansing, exfoliation, extraction, and hydration for a refreshed-looking complexion." },
    { title: "Dermatology Clinic in JVC", href: "https://vedaracare.ae/dermatology-clinic-jvc", description: "Get a professional skin assessment and personalised treatment recommendations based on your individual concerns and goals." },


    ]
  };

  return (
    <>
      <Head>
        <title>{oxygenFacialHero.seoTitle}</title>
        <meta name="description" content={oxygenFacialHero.description} />
        <link rel="canonical" href={oxygenFacialHero.canonicalUrl} />
        <link rel="alternate" hrefLang="en-AE" href={oxygenFacialHero.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={oxygenFacialHero.canonicalUrl} />
        <meta property="og:title" content={oxygenFacialHero.seoTitle} />
        <meta property="og:description" content={oxygenFacialHero.description} />
        <meta property="og:image" content={`https://vedaracare.ae${oxygenFacialHero.image}`} />
        <meta property="og:url" content={oxygenFacialHero.canonicalUrl} />
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

      <AyurvedaHero {...oxygenFacialHero} />

      <AyurvedaIntro {...oxygenFacialIntro} />

      {/* At a Glance Table */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={oxygenFacialAtAGlance.label}
            title={oxygenFacialAtAGlance.title}
          />
          <div className="overflow-x-auto mt-10">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm border border-[#E5DFD3] bg-white">
              <thead>
                <tr style={{ backgroundColor: '#1C1C14' }}>
                  <th className="text-left p-5 text-sm font-semibold text-white w-64">Question</th>
                  <th className="text-left p-5 text-sm font-semibold text-white">Answer</th>
                </tr>
              </thead>
              <tbody>
                {oxygenFacialAtAGlance.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#E5DFD3]"
                    style={idx % 2 === 1 ? { backgroundColor: '#FAF7F2' } : {}}
                  >
                    <td className="p-5 text-sm font-medium" style={{ color: INK, verticalAlign: 'top' }}>{row.question}</td>
                    <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7', verticalAlign: 'top' }}>{row.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-6">
            {oxygenFacialAtAGlance.footer}
          </p>
        </div>
      </section>

      {/* Explanation of Oxygen Facial */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={oxygenFacialExplanation.label}
        title={oxygenFacialExplanation.title}
        contentSections={[
          {
            subtitle: oxygenFacialExplanation.description,
            description: oxygenFacialExplanation.content.join("\n\n")
          }
        ]}
        sidebar={{
          image: oxygenFacialExplanation.image,
          altText: oxygenFacialExplanation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={oxygenFacialExplanation.caption}
      />

      {/* What Makes It Different */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={oxygenFacialWhatMakesDifferent.label}
            title={oxygenFacialWhatMakesDifferent.title}
          />
          <div className="space-y-5">
            {oxygenFacialWhatMakesDifferent.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-[rgb(107,107,107)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens During Treatment */}
      <section className="py-16 bg-[#F5F0E8] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={oxygenFacialWhatHappensDuring.label}
            title={oxygenFacialWhatHappensDuring.title}
            sub={oxygenFacialWhatHappensDuring.description}
          />
          <ul className="space-y-3 mt-8">
            {oxygenFacialWhatHappensDuring.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCircle2 size={18} color={GOLD} className="shrink-0 mt-0.5" />
                <span className="text-base leading-relaxed" style={{ color: STONE }}>{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-8 border-t border-[#E5DFD3] pt-6">
            {oxygenFacialWhatHappensDuring.footer}
          </p>
        </div>
      </section>

      {/* The Oxygen Component Meaning */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={oxygenFacialComponentMeaning.label}
            title={oxygenFacialComponentMeaning.title}
            sub={oxygenFacialComponentMeaning.description}
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {oxygenFacialComponentMeaning.points.map((pt, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-[#FAF7F2] shadow-sm border border-[#E5DFD3]">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 size={20} color={GOLD} className="shrink-0 mt-1" />
                  <p className="text-[14.5px] leading-relaxed text-[rgb(107,107,107)]">{pt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns Deep Dive (interactive tabs - 10 tabs now) */}
      <SkinConcernsDeepDive concerns={oxygenFacialConcerns.concernsList} />

      {/* Event note - Before Events */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="SPECIAL OCCASIONS" title={oxygenFacialEventNotes.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed whitespace-pre-line">
            {oxygenFacialEventNotes.description}
          </p>
        </div>
      </section>

      {/* Suitability */}
      <SciaticaTypes {...suitabilityTypes} />

      {/* The Oxygen Facial Consultation */}
      <section className="py-16 bg-[#F5F0E8] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={oxygenFacialConsultationSection.label}
            title={oxygenFacialConsultationSection.title}
          />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {oxygenFacialConsultationSection.description}
          </p>
        </div>
      </section>

      {/* Appointment Steps */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={oxygenFacialAppointment.label}
        title={oxygenFacialAppointment.title}
        sub=""
        contentSections={oxygenFacialAppointment.steps.map(step => {
          const colonIdx = step.indexOf(': ');
          if (colonIdx !== -1) {
            return {
              subtitle: step.slice(0, colonIdx),
              description: step.slice(colonIdx + 2)
            };
          }
          return { subtitle: '', description: step };
        })}
        sidebar={{
          image: oxygenFacialAppointment.image,
          altText: oxygenFacialAppointment.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={oxygenFacialAppointment.description}
      />

      {/* Sensation and comfort */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label="TREATMENT EXPERIENCE"
        title={oxygenFacialSensation.title}
        contentSections={[
          {
            subtitle: '',
            description: oxygenFacialSensation.description
          },
          {
            subtitle: '',
            description: oxygenFacialSensation.notes
          }
        ]}
        sidebar={{
          image: oxygenFacialSensation.image,
          altText: oxygenFacialSensation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
      />

      {/* Downtime */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="DOWNTIME" title={oxygenFacialDowntime.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {oxygenFacialDowntime.description}
          </p>
        </div>
      </section>

      {/* Recovery - standalone section */}
      <section className="py-16 bg-[#F5F0E8] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="RECOVERY" title={oxygenFacialRecovery.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {oxygenFacialRecovery.description}
          </p>
        </div>
      </section>

      {/* Aftercare - standalone section + Avoid */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="AFTERCARE" title={oxygenFacialAftercare.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-8">
            {oxygenFacialAftercare.description}
          </p>

          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">{oxygenFacialWhatToAvoid.title}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {oxygenFacialWhatToAvoid.items.map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-sm font-medium text-[rgb(26,26,26)]">
                  <X size={16} color="#A24E3B" className="shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[rgb(107,107,107)] mt-6 border-t border-[#E5DFD3] pt-4">
              {oxygenFacialWhatToAvoid.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Results + Duration (2 columns - removed Frequency since not in user content) */}
      <section className="py-16 bg-[#F5F0E8] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="RESULTS & LONGEVITY" title="Realistic results and how long they may last" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{oxygenFacialResults.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{oxygenFacialResults.description}</p>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{oxygenFacialResultsDuration.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{oxygenFacialResultsDuration.description}</p>
            </div>
          </div>
        </div>
      </section>




      {/* Choose a clinic + red flags */}
      <section className="py-16" style={{ backgroundColor: COLORS.sage }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <Eyebrow>How to Choose a Microneedling Clinic in JVC</Eyebrow>
            <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Worth checking before booking anywhere</h3>
            <p className="text-[13.5px] mb-5" style={{ color: COLORS.stone }}>
              A few practical points are worth checking before booking anywhere:
            </p>
            <ul className="space-y-2.5">
              {chooseClinicItems.map((a) => (
                <li key={a} className="flex gap-2.5 text-[14px]" style={{ color: COLORS.ink }}>
                  <CheckCircle2 size={17} color={COLORS.circle} className="shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-7 h-fit"
            style={{
              backgroundColor: COLORS.rustBg,
              border: `1px solid ${COLORS.rustLine}`,
            }}
          >
            <h3
              className="text-xl font-serif mt-4 mb-3"
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                color: INK,
              }}
            >
              Red Flags
            </h3>

            <p className="mb-4">
              Be cautious of any provider, in JVC or elsewhere, who:
            </p>

            <ul className="space-y-3">
              {redFlagsItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Before booking */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading
          eyebrow="Before Booking Microneedling"
          title="Questions to Ask Before Booking"
          sub="It's worth going into a consultation with a short list of your own questions:"
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {beforeBookingItems.map((q) => (
            <div key={q} className="rounded-xl p-5 text-[13.5px] leading-relaxed flex gap-2" style={{ backgroundColor: COLORS.card, border: `1px solid ${COLORS.line}`, color: COLORS.ink }}>
              <HelpCircle size={16} color={COLORS.gold} className="shrink-0 mt-0.5" />
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQ faqs={oxygenFacialFAQ} />

      <MedicalDisclaimer text={oxygenFacialCTA.disclaimer} />
      <FinalCTA
        {...oxygenFacialCTA}
      />

      {/* Medical Disclaimer */}


      <RelatedPages {...relatedPagesData} />
    </>
  );
};

export default OxygenFacialJVC;
