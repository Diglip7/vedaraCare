import { useState } from 'react';
import Head from 'next/head';
import { CheckCircle2,HelpCircle, X } from 'lucide-react';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PhysiotherapyTechniques from '../../components/ayurveda/PhysiotherapyTechniques';
import {
  rfMicroneedlingHero,
  rfMicroneedlingIntro,
  rfMicroneedlingExplanation,
  rfMicroneedlingEnergyAction,
  rfMicroneedlingConcerns,
  rfMicroneedlingSuitability,
  rfMicroneedlingSkinTypes,
  rfMicroneedlingAppointment,
  rfMicroneedlingSensation,
  rfMicroneedlingDowntime,
  rfMicroneedlingRecoveryGuide,
  rfMicroneedlingAftercare,
  rfMicroneedlingWhatToAvoid,
  rfMicroneedlingResultsTime,
  rfMicroneedlingResultsLast,
  rfMicroneedlingSessionsNeeded,
  rfMicroneedlingExpectations,
  rfMicroneedlingBeforeAfter,
  rfMicroneedlingLocation,
  rfMicroneedlingWhyJvc,
  rfMicroneedlingSummary,
  rfMicroneedlingFAQ,
  rfMicroneedlingDCTA,
  rfMicroneedlingCTA
} from '../../data/rfMicroneedlingData';

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
  deep: '#f3eeeaff',
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
              RF Microneedling for {current.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: STONE, lineHeight: '1.75' }}>
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const RFMicroneedlingJVC = () => {

  const currentUrl = "https://vedaracare.ae/treatments/rf-microneedling-jvc/";
  const publishedDate = "2026-08-11T10:00:00+04:00";
  const modifiedDate = new Date().toISOString();
 const [compareTab, setCompareTab] = useState('hydrafacial');
const comparisonData = [
  {
    treatment: "RF Microneedling",
    approach: "Needling + RF energy",
    goals: "Texture, scars, firmness",
    exfoliation: "Limited",
    remodelling: "Yes",
    tightening: "Yes",
  },
  {
    treatment: "Traditional Microneedling",
    approach: "Controlled needling",
    goals: "Texture, scars",
    exfoliation: "Limited",
    remodelling: "Yes",
    tightening: "Less focused",
  },
  {
    treatment: "Chemical Peel",
    approach: "Chemical exfoliation",
    goals: "Surface texture, pigmentation",
    exfoliation: "Yes",
    remodelling: "Varies",
    tightening: "Not primary",
  },
  {
    treatment: "Laser Resurfacing",
    approach: "Laser energy",
    goals: "Texture, pigmentation, resurfacing",
    exfoliation: "Device-dependent",
    remodelling: "Yes",
    tightening: "Device-dependent",
  },
  {
    treatment: "Hydrating / refresh facials",
    approach: "Cleansing, exfoliation, hydration",
    goals: "Surface refresh, hydration",
    exfoliation: "Yes",
    remodelling: "Not primary",
    tightening: "Not primary",
  },
];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": `${currentUrl}#rfmicroneedling`,
      "name": "Vedara Care RF Microneedling Treatment JVC",
      "alternateName": ["Vedara RF Microneedling JVC", "Vedara RF Microneedling Dubai", "RF Microneedling Polyclinic JVC"],
      "url": currentUrl,
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "RF microneedling in JVC combines needling with radiofrequency energy for skin texture, acne-scar appearance and firmness. Offered at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 800 - AED 3500",
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
      "medicalSpecialty": ["Dermatology", "Aesthetic Dermatology", "RF Microneedling", "Cosmetic Dermatology"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "RF Microneedling" },
        { "@type": "MedicalProcedure", "name": "RF Microneedling for Acne Scars" },
        { "@type": "MedicalProcedure", "name": "RF Microneedling for Skin Tightening" },
        { "@type": "MedicalProcedure", "name": "RF Microneedling for Skin Texture" },
        { "@type": "MedicalProcedure", "name": "RF Microneedling for Fine Lines" }
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
          "name": "RF Microneedling",
          "procedureType": "https://schema.org/PercutaneousProcedure",
          "bodyLocation": "Skin",
          "howPerformed": "Controlled fine needles create micro-injuries in the skin while radiofrequency energy is delivered through or around the needles to add a thermal stimulus. Needle depth and energy settings adjusted per patient skin type, concern, and treating practitioner assessment."
        },
        {
          "@type": "MedicalProcedure",
          "name": "RF Microneedling Skin Assessment",
          "procedureType": "https://schema.org/NoninvasiveProcedure",
          "howPerformed": "Clinician review of skin condition, scar type, skin sensitivity, medical history, recent procedures, and medications to determine whether RF microneedling is appropriate and how protocol should be set."
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "RF Microneedling Treatment Services in JVC Dubai",
      "provider": { "@id": `${currentUrl}#rfmicroneedling` },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "Place", "name": "United Arab Emirates" }
      ],
      "serviceType": "RF Microneedling Skin Treatment",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "RF Microneedling Services",
        "itemListElement": [
          { "@type": "Offer", "name": "RF Microneedling Consultation", "priceCurrency": "AED" },
          { "@type": "Offer", "name": "RF Microneedling Single Session", "priceCurrency": "AED" },
          { "@type": "Offer", "name": "RF Microneedling Course Package", "priceCurrency": "AED" }
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
        { "@type": "ListItem", "position": 3, "name": "RF Microneedling in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": rfMicroneedlingFAQ.faqs.map(faq => ({
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
      "headline": "RF Microneedling at JVC Dubai — Needling + Radiofrequency Skin Remodelling Guide",
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
        { "@type": "MedicalProcedure", "name": "RF Microneedling" },
        { "@type": "MedicalProcedure", "name": "Microneedling with Radiofrequency" }
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
      "name": "RF Microneedling vs Traditional Microneedling",
      "about": "Feature comparison between RF Microneedling (needling + radiofrequency heat) and Traditional Microneedling (needle-induced micro-injury only) across mechanism, treatment goal, tightening focus, recovery, and session planning dimensions.",
      "hasPart": [
        {
          "@type": "Table",
          "name": "Treatment Approach Comparison",
          "description": "Structured comparison of RF Microneedling versus Traditional Microneedling across primary mechanism, main treatment goal, tightening focus, typical recovery, and session planning dimensions."
        }
      ]
    }
  ];
  const suitabilityTypes = {
    bgColor: "bg-white",
    cardBg: "bg-[#FAF7F2]",
    label: "SUITABILITY",
    title: "Who May Consider RF Microneedling?",
    description: rfMicroneedlingSuitability.introduction,
    types: [
      {
        number: "01",
        title: "Who May Consider RF Microneedling",
        description: "Explore when this treatment may be considered for your skin.",
        typicalSigns: rfMicroneedlingSuitability.rightFor
      },
      {
        number: "02",
        title: "Who May Need to Postpone or Avoid Treatment",
        description: "Situations that commonly call for professional evaluation or a delay in treatment.",
        typicalSigns: rfMicroneedlingSuitability.notRightFor
      }
    ],
    footer: rfMicroneedlingSuitability.footer,
    gridCols: "grid grid-cols-1 md:grid-cols-2 gap-6",
    borderPosition: "left"
  };

const beforeBookingItems = [
  "Is RF microneedling appropriate for my specific skin concern?",
  "Who will actually perform the treatment, and what is their training?",
  "What result is realistic for my concern, specifically — not in general terms?",
  "How many sessions might reasonably be needed, and why?",
  "What recovery should I expect, and for how long?",
  "What aftercare will I need to follow?",
  "What are the potential side effects for someone with my skin?",
  "Are there alternative treatments I should consider instead, or alongside this one?",
  "What exactly is included in the quoted treatment cost?",
  "What should I avoid before and after the procedure?"
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
      "Facials focused on cleansing, exfoliation, and hydration serve a different purpose than RF microneedling. They're generally aimed at a surface-level refresh and are not designed to remodel deeper tissue or address structural concerns like acne scarring or laxity. If your primary goal is an immediate glow with no downtime, a hydrating facial may be a more relevant conversation. If the concern is more structural, RF microneedling addresses a different layer of the problem."   ],
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



  const skinTypesData = {
    bgColor: "bg-[#F5F0E8]",
    cardBg: "bg-white",
    label: "SKIN TYPES",
    title: "Sensitive Skin and Different Skin Types",
    description: rfMicroneedlingSkinTypes.description,
    types: rfMicroneedlingSkinTypes.types.map((t, idx) => ({
      number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
      title: t.name,
      description: t.notes
    })),
    footer: rfMicroneedlingSkinTypes.footer,
    gridCols: "grid grid-cols-1 md:grid-cols-2 gap-6",
    borderPosition: "left"
  };
 const chooseClinicItems = [
  "Qualified professionals performing or supervising the treatment",
  "Appropriate, well-maintained equipment",
  "Clear hygiene and infection-control practices",
  "An individual skin assessment before any treatment is agreed",
  "A clear explanation of how the treatment works, in plain language",
  "Realistic expectations set from the outset, without guaranteed-results language",
  "An honest discussion of risks and possible side effects",
  "Written or verbal aftercare instructions you can actually follow",
  "Transparent pricing with no pressure to commit to large packages upfront",
  "Genuine, verifiable patient information rather than generic stock content"
];
const redFlagsItems = [
  "Promises guaranteed results",
  "Claims permanent removal of acne scarring",
  "Advertises the treatment as “zero risk”",
  "Skips a proper consultation before booking you in",
  "Can't or won't tell you who is performing the treatment",
  "Shows unclear or questionable hygiene standards",
  "Uses before-and-after photographs that look edited, inconsistent, or unverifiable",
  "Pressures you into buying large treatment packages on the spot",
  "Doesn't discuss risks at all",
  "Sends you home with no aftercare guidance"
];
const hydraRows = [
    ['Main approach', 'Controlled physical micro-injuries to trigger skin repair', 'Multi-step device combining cleansing, exfoliation and extraction with fluid infusion'],
    ['Exfoliation', 'Not the primary focus — channels made directly', 'Combined physical and gentle solution-based exfoliation'],
    ['Extraction', 'Not typically a built-in step', 'Vacuum-based extraction is a core part of the process'],
    ['Hydration', 'Applied separately after treatment, if used at all', 'Infused into the skin as part of the same session'],
    ['Treatment focus', 'Deeper texture remodelling and acne scars', 'Combined cleansing, exfoliation, extraction and hydration'],
    ['Skin texture', 'May improve over time through dermal remodelling', 'May improve through combined exfoliation and hydration'],
    ['Congestion', 'Not for active inflammatory acne or cysts', 'Extraction step may more directly address visible congestion'],
    ['Recovery considerations', 'Redness and sensitivity similar to mild sunburn', 'Generally minimal, though individual response varies'],
    ['Customization', 'Adjustable needle depth and treatment intensity', 'Multiple interchangeable steps allow broader customization'],
  ];

  const relatedPagesData = {
    label: "EXPLORE MORE",
    title: "Related Dermatology Services",
    pages: [
      { title: "Chemical Peel in Dubai", href: "/treatments/chemical-peel-dubai", description: "A professional peel that may be considered for selected pigmentation, uneven tone, and surface-texture concerns." },
      { title: "Skin Rejuvenation in JVC", href: "/treatments/skin-rejuvenation-jvc", description: "Personalised treatments focused on improving overall skin texture, tone, hydration, and appearance." },
      { title: "Microneedling in JVC", href: "/treatments/microneedling-jvc", description: "A minimally invasive treatment that uses controlled micro-injuries to support the skin’s natural repair and collagen response." },
      { title: "LED Light Therapy in JVC", href: "/treatments/led-light-therapy-jvc", description: "A gentle light-based treatment that may be incorporated into selected skin-rejuvenation plans." },
      { title: "Oxygen Facial in JVC", href: "/treatments/oxygen-facial-jvc", description: "A refreshing facial option designed to support hydration and a healthier-looking complexion." },

      { title: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc", description: "Discuss your skin concerns with our dermatology team for a professional assessment and personalized treatment recommendations. personalized" },
    ]
  };

  return (
    <>
      <Head>
        <title>{rfMicroneedlingHero.title}</title>
        <meta name="description" content={rfMicroneedlingHero.description} />
        <link rel="canonical" href={rfMicroneedlingHero.canonicalUrl} />
        <link rel="alternate" hrefLang="en-AE" href={rfMicroneedlingHero.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={rfMicroneedlingHero.canonicalUrl} />
        <meta property="og:title" content={rfMicroneedlingHero.title} />
        <meta property="og:description" content={rfMicroneedlingHero.description} />
        <meta property="og:image" content={`https://vedaracare.ae${rfMicroneedlingHero.image}`} />
        <meta property="og:url" content={rfMicroneedlingHero.canonicalUrl} />
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

      <AyurvedaHero {...rfMicroneedlingHero} />

      <AyurvedaIntro {...rfMicroneedlingIntro} />

      {/* Two-Part Technology Explanation */}
      {/* <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={rfMicroneedlingExplanation.label}
        title={rfMicroneedlingExplanation.title}
        contentSections={[
          {
            subtitle: rfMicroneedlingExplanation.description,
            description: rfMicroneedlingExplanation.content.join("\n\n")
          }
        ]}
        sidebar={{
          image: rfMicroneedlingExplanation.image,
          altText: rfMicroneedlingExplanation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={rfMicroneedlingExplanation.caption}
      /> */}


      <PhysiotherapyTechniques {...rfMicroneedlingExplanation} />

 {/* What Does RF Energy Actually Do? */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={rfMicroneedlingEnergyAction.label}
            title={rfMicroneedlingEnergyAction.title}
            sub={rfMicroneedlingEnergyAction.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {rfMicroneedlingEnergyAction.points.map((pt, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-white shadow-sm border border-[#E5DFD3]">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 size={20} color={GOLD} className="shrink-0 mt-1" />
                  <p className="text-[14.5px] leading-relaxed text-[rgb(107,107,107)]">{pt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns Deep Dive (interactive tabs) */}
      <SkinConcernsDeepDive concerns={rfMicroneedlingConcerns.concernsList} />

      {/* Suitability & Postpone lists */}
      <SciaticaTypes {...suitabilityTypes} />

      {/* Skin Types and Sensitivity */}
      <SciaticaTypes {...skinTypesData} />

      {/* Appointment Steps */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={rfMicroneedlingAppointment.label}
        title={rfMicroneedlingAppointment.title}
        contentSections={rfMicroneedlingAppointment.steps.map(step => {
          const colonIdx = step.indexOf(' — ');
          if (colonIdx !== -1) {
            return {
              subtitle: step.slice(0, colonIdx),
              description: step.slice(colonIdx + 3)
            };
          }
          return { subtitle: '', description: step };
        })}
        sidebar={{
          image: rfMicroneedlingAppointment.image,
          altText: rfMicroneedlingAppointment.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={rfMicroneedlingAppointment.footer}
      />

      {/* Sensation and comfort */}
      <ContentWithSidebar
        bgColor="bg-white"
        label="TREATMENT EXPERIENCE"
        title={rfMicroneedlingSensation.title}
        contentSections={[
          {
            subtitle: '',
            description: rfMicroneedlingSensation.description
          },
          {
            subtitle: '',
            description: rfMicroneedlingSensation.notes
          }
        ]}
        sidebar={{
          image: "/images/rf-microneedling-procedure-vedara-care.jpg",
          altText: "RF Microneedling sensation setting",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
      />

      {/* Downtime & Recovery Guide */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={rfMicroneedlingRecoveryGuide.label}
            title={rfMicroneedlingRecoveryGuide.title}
            sub={rfMicroneedlingDowntime.description}
          />
          <div className="grid md:grid-cols-5 gap-10 items-center mt-10">
            <div className="md:col-span-3 space-y-6">
              {rfMicroneedlingRecoveryGuide.steps.map((step, idx) => {
                const colonIdx = step.indexOf(' — ');
                const title = colonIdx !== -1 ? step.slice(0, colonIdx) : `Step ${idx + 1}`;
                const desc = colonIdx !== -1 ? step.slice(colonIdx + 3) : step;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1C1C14] text-white text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg font-serif text-[rgb(26,26,26)]">{title}</h4>
                      <p className="text-sm mt-1 text-[rgb(107,107,107)] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="md:col-span-2">
              <img
                src={rfMicroneedlingRecoveryGuide.image}
                alt={rfMicroneedlingRecoveryGuide.alt}
                className="w-full rounded-2xl shadow-md border border-[#E5DFD3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare & What to Avoid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="AFTERCARE GUIDANCE" title={rfMicroneedlingAftercare.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-10">
            {rfMicroneedlingAftercare.description}
          </p>

          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">{rfMicroneedlingWhatToAvoid.title}</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {rfMicroneedlingWhatToAvoid.items.map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-sm font-medium text-[rgb(26,26,26)]">
                  <X size={16} color="#A24E3B" className="shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[rgb(107,107,107)] mt-6 border-t border-[#E5DFD3] pt-4">
              {rfMicroneedlingWhatToAvoid.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Results Expectations (Progressive timeline, duration, session details) */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="RESULTS TIMELINE" title="Patience and progressive results" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{rfMicroneedlingResultsTime.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{rfMicroneedlingResultsTime.description}</p>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{rfMicroneedlingResultsLast.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{rfMicroneedlingResultsLast.description}</p>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{rfMicroneedlingSessionsNeeded.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{rfMicroneedlingSessionsNeeded.description}</p>
            </div>
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{rfMicroneedlingExpectations.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{rfMicroneedlingExpectations.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Image checks */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="CLINICAL STANDARDS" title={rfMicroneedlingBeforeAfter.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {rfMicroneedlingBeforeAfter.description}
          </p>
        </div>
      </section>

      {/* RF Microneedling vs Ordinary Microneedling */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="TREATMENT COMPARISON"
            title="RF Microneedling vs Ordinary Microneedling"
            sub="It's tempting to think of RF microneedling as simply a stronger version of traditional microneedling. That isn't quite accurate, and the difference matters when deciding which treatment fits a particular concern."
          />
          <div className="overflow-x-auto mt-10">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm border border-[#E5DFD3] bg-white">
              <thead>
                <tr style={{ backgroundColor: '#1C1C14' }}>
                  <th className="text-left p-5 text-sm font-semibold text-white">Factor</th>
                  <th className="text-left p-5 text-sm font-semibold text-white">Traditional Microneedling</th>
                  <th className="text-left p-5 text-sm font-semibold text-white">RF Microneedling</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5DFD3]">
                  <td className="p-5 text-sm font-medium" style={{ color: INK }}>Primary mechanism</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Needle-induced micro-injury</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Needle-induced micro-injury + radiofrequency heat</td>
                </tr>
                <tr className="border-b border-[#E5DFD3]" style={{ backgroundColor: '#FAF7F2' }}>
                  <td className="p-5 text-sm font-medium" style={{ color: INK }}>Main treatment goal</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Texture, mild scarring, product absorption</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Texture, scarring, and skin firmness</td>
                </tr>
                <tr className="border-b border-[#E5DFD3]">
                  <td className="p-5 text-sm font-medium" style={{ color: INK }}>Tightening focus</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Limited, indirect</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>A more direct goal, though still gradual</td>
                </tr>
                <tr className="border-b border-[#E5DFD3]" style={{ backgroundColor: '#FAF7F2' }}>
                  <td className="p-5 text-sm font-medium" style={{ color: INK }}>Typical recovery</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Redness for 24–48 hours in many cases</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>Can involve slightly more warmth, depending on settings</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm font-medium" style={{ color: INK }}>Session planning</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>A series is often discussed</td>
                  <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7' }}>A series is often discussed, spaced for tissue response</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-8">
            Neither option is universally “better.” A practitioner&rsquo;s recommendation usually comes down to whether the primary concern is closer to texture and mild scarring alone (where standard microneedling may be sufficient) or texture plus a firmness component (where the added radiofrequency element is more often discussed).
          </p>
        </div>
      </section>

   <section className="py-16 md:py-28 bg-[#F7F4EF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          
          <h1
            className="text-3xl md:text-5xl leading-tight mb-6"
            style={{
              fontFamily: "Fraunces, Georgia, serif",
              color: INK,
            }}
          >
            RF Microneedling vs Other Options
          </h1>

          <p
            className="text-base md:text-lg leading-8"
            style={{ color: "#5F5A54" }}
          >
            Choosing between skin treatments usually comes down to which
            concern is the priority. The comparison below is a starting point,
            not a recommendation — the right choice depends on your specific
            skin and goals, best discussed during consultation.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-[#DED8D0] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#EEE9E2]">
                  <th
                    className="text-left px-6 py-5 text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    Treatment
                  </th>

                  <th
                    className="text-left px-6 py-5 text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    Main Approach
                  </th>

                  <th
                    className="text-left px-6 py-5 text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    Common Goals
                  </th>

                  <th
                    className="text-left px-6 py-5 text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    Surface Exfoliation
                  </th>

                  <th
                    className="text-left px-6 py-5 text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    Skin Remodelling
                  </th>

                  <th
                    className="text-left px-6 py-5 text-sm font-semibold"
                    style={{ color: INK }}
                  >
                    Tightening Focus
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={item.treatment}
                    className={`border-t border-[#E6E0D8] ${
                      index === 0 ? "bg-[#FBF8F3]" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-6 align-top">
                      <div
                        className="font-medium leading-6"
                        style={{
                          color: index === 0 ? COLORS.rust : INK,
                        }}
                      >
                        {item.treatment}
                      </div>
                    </td>

                    <td
                      className="px-6 py-6 align-top text-sm leading-6"
                      style={{ color: "#5F5A54" }}
                    >
                      {item.approach}
                    </td>

                    <td
                      className="px-6 py-6 align-top text-sm leading-6"
                      style={{ color: "#5F5A54" }}
                    >
                      {item.goals}
                    </td>

                    <td
                      className="px-6 py-6 align-top text-sm"
                      style={{ color: "#5F5A54" }}
                    >
                      {item.exfoliation}
                    </td>

                    <td
                      className="px-6 py-6 align-top text-sm"
                      style={{ color: "#5F5A54" }}
                    >
                      {item.remodelling}
                    </td>

                    <td
                      className="px-6 py-6 align-top text-sm"
                      style={{ color: "#5F5A54" }}
                    >
                      {item.tightening}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-5">
          {comparisonData.map((item, index) => (
            <div
              key={item.treatment}
              className="rounded-2xl border border-[#DED8D0] bg-white p-6"
            >
              <h3
                className="text-xl mb-5"
                style={{
                  fontFamily: "Fraunces, Georgia, serif",
                  color: index === 0 ? COLORS.rust : INK,
                }}
              >
                {item.treatment}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                    Main Approach
                  </p>
                  <p className="text-sm leading-6 text-[#5F5A54]">
                    {item.approach}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                    Common Goals
                  </p>
                  <p className="text-sm leading-6 text-[#5F5A54]">
                    {item.goals}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                      Surface Exfoliation
                    </p>
                    <p className="text-sm text-[#5F5A54]">
                      {item.exfoliation}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                      Skin Remodelling
                    </p>
                    <p className="text-sm text-[#5F5A54]">
                      {item.remodelling}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E6E0D8]">
                  <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                    Tightening Focus
                  </p>
                  <p className="text-sm text-[#5F5A54]">
                    {item.tightening}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


        {/* Comparisons */}
      <section className="py-16" style={{ backgroundColor: COLORS.deep }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs tracking-[0.2em] uppercase mb-3 font-bold" style={{ color: '#1C1C14', opacity: 0.75 }}>
              HOW IT COMPARES
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1C1C14' }}>
              Microneedling, set beside the alternatives
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {Object.entries(compareTabs).map(([key, c]) => {
              const isActive = compareTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCompareTab(key)}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all"
                  style={{
                    borderColor: isActive ? "#1C1C14" : "rgba(28, 28, 20, 0.3)",
                    backgroundColor: isActive ? "#1C1C14" : "rgba(255, 255, 255, 0.3)",
                    color: isActive ? "#FFFFFF" : "#1C1C14",
                    cursor: "pointer"
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl p-8 shadow-lg" style={{ backgroundColor: COLORS.card }} key={compareTab}>
            {compareTabs[compareTab].type === "table" ? (
              <>
                <div className="grid grid-cols-3 gap-2 pb-3 mb-2 border-b text-xs font-semibold uppercase tracking-wide" style={{ borderColor: COLORS.line, color: COLORS.gold }}>
                  <span>Treatment Feature</span>
                  <span>Microneedling</span>
                  <span>HydraFacial</span>
                </div>
                <div className="divide-y" style={{ borderColor: COLORS.line }}>
                  {hydraRows.map(([feature, a, b]) => (
                    <div key={feature} className="grid grid-cols-3 gap-2 py-3.5 text-[13.5px]" style={{ borderColor: COLORS.line }}>
                      <span className="font-semibold" style={{ color: COLORS.ink }}>{feature}</span>
                      <span style={{ color: COLORS.stone }}>{a}</span>
                      <span style={{ color: COLORS.stone }}>{b}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[13.5px] leading-relaxed mt-6 pt-6 border-t" style={{ color: COLORS.stone, borderColor: COLORS.line }}>
                  Neither treatment is universally better — they work through different
                  mechanisms and may suit different concerns or preferences. A treating
                  professional can help you decide which approach fits your skin.
                </p>
              </>
            ) : (
              <div className="space-y-4">
                {compareTabs[compareTab].paragraphs.map((p, i) => (
                  <p key={i} className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
                    {p}
                  </p>
                ))}
              </div>
            )}
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

      {/* Location / Exterior details */}
      {/* <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label="OUR LOCATION"
        title={rfMicroneedlingLocation.title}
        contentSections={[
          {
            subtitle: "",
            description: rfMicroneedlingLocation.address
          }
        ]}
        sidebar={{
          image: rfMicroneedlingLocation.image,
          altText: rfMicroneedlingLocation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
      /> */}

      <TreatmentLocation
        title="Where RF Microneedling happens at Vedara Care JVC."
        address={rfMicroneedlingLocation.address}
      />


       {/* Why JVC */}
      <ContentWithSidebar
        bgColor="bg-white"
        label="LOCAL ACCESSIBILITY"
        title={rfMicroneedlingWhyJvc.title}
        contentSections={[
          {
            subtitle: "",
            description: rfMicroneedlingWhyJvc.description
          }
        ]}
        sidebar={{
          image: rfMicroneedlingWhyJvc.image,
          altText: rfMicroneedlingWhyJvc.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
      />

      {/* Summary */}
      {/* <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="SUMMARY" title={rfMicroneedlingSummary.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {rfMicroneedlingSummary.description}
          </p>
        </div>
      </section> */}

      {/* FAQs */}
      <FAQ faqs={rfMicroneedlingFAQ.faqs} />
  <MedicalDisclaimer text={rfMicroneedlingCTA.disclaimer} />
      <FinalCTA {...rfMicroneedlingDCTA} />

      {/* Medical Disclaimer */}
    

      <RelatedPages {...relatedPagesData} />
    </>
  );
};

export default RFMicroneedlingJVC;
