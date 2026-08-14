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
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import PhysiotherapyTechniques from '../../components/ayurveda/PhysiotherapyTechniques';

import {
  skinBoostersHero,
  skinBoostersIntro,
  skinBoostersAtAGlance,
  skinBoostersExplanation,
  skinBoostersGoals,
  skinBoostersHydrationVsQuality,
  skinBoostersHowItWorks,
  skinBoostersSummary1,
  skinBoostersIngredients,
  skinBoostersProductSelection,
  skinBoostersConcerns,
  skinBoostersSuitability,
  skinBoostersConsultation,
  skinBoostersAppointment,
  skinBoostersSensation,
  skinBoostersRecovery,
  skinBoostersResults,
  skinBoostersBeforeAfter,
  skinBoostersComparisonVsFillers,
  skinBoostersComparisonOther,
  skinBoostersCanReplaceFillers,
  skinBoostersCanReplaceSkincare,
  skinBoostersLocation,
  skinBoostersWhyJvc,
  skinBoostersSummary,
  skinBoostersFAQ,
  skinBoostersDCTA
} from '../../data/skinBoostersJvcData';

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
  rustLine: '#F5C6B8',
  rust: '#A24E3B',
  circle: '#C9A55A'
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
            {skinBoostersConcerns.title}
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: STONE, lineHeight: '1.7' }}>
            {skinBoostersConcerns.description}
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
              {current.title}
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

const SkinBoostersJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/skin-boosters-jvc/";
  const publishedDate = "2026-08-12T10:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const [compareTab, setCompareTab] = useState('mesotherapy');

  const comparisonData = [
    {
      treatment: "Skin Boosters",
      approach: "Injectable product within skin",
      goals: "Hydration, skin quality, texture",
      injection: "Yes",
      downtime: "Usually limited",
      volume: "Not primary",
    },
    {
      treatment: "Dermal Fillers",
      approach: "Injectable product for structure",
      goals: "Volume, contour, structural enhancement",
      injection: "Yes",
      downtime: "Varies, some swelling/bruising possible",
      volume: "Primary goal",
    },
    {
      treatment: "Mesotherapy",
      approach: "Multiple superficial injections",
      goals: "Hydration, skin quality, variable formulations",
      injection: "Yes",
      downtime: "Varies by formulation",
      volume: "Not a goal",
    },
    {
      treatment: "PRP",
      approach: "Patient's own blood concentrate injected",
      goals: "Skin quality, texture, overlap varies",
      injection: "Yes",
      downtime: "Some redness/swelling common",
      volume: "Not a goal",
    },
    {
      treatment: "HydraFacial",
      approach: "Non-invasive device facial",
      goals: "Cleansing, exfoliation, surface hydration",
      injection: "No",
      downtime: "Minimal to none",
      volume: "Not applicable",
    },
    {
      treatment: "Microneedling",
      approach: "Controlled micro-injuries",
      goals: "Texture, acne scars, skin renewal",
      injection: "No (needling only)",
      downtime: "Redness, sensitivity for days",
      volume: "Not a goal",
    },
    {
      treatment: "LED Light Therapy",
      approach: "Light-based, non-invasive",
      goals: "General skin quality, certain acne goals",
      injection: "No",
      downtime: "Minimal to none",
      volume: "Not applicable",
    },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Skin Boosters in JVC",
      "url": currentUrl,
      "description": "Dermatologist-led skin booster treatment for hydration, texture and skin quality, offered at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai.",
      "procedureType": "https://schema.org/PercutaneousProcedure",
      "bodyLocation": "Face",
      "provider": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "url": "https://vedaracare.ae"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Skin Boosters in JVC",
      "url": currentUrl,
      "description": "Dermatologist-led skin boosters in JVC, Dubai for hydration, texture and skin quality. Personalised assessment at Vedara Care Polyclinic.",
      "inLanguage": "en-AE",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vedara Care",
        "url": "https://vedaracare.ae"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments" },
        { "@type": "ListItem", "position": 3, "name": "Skin Boosters in JVC", "item": currentUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are skin boosters?",
          "acceptedAnswer": { "@type": "Answer", "text": "Skin boosters are injectable treatments aimed at improving skin quality — hydration, texture and overall appearance — rather than adding facial volume. Depending on the product and treatment plan, the formulation and injection approach can vary." }
        },
        {
          "@type": "Question",
          "name": "How do skin boosters work?",
          "acceptedAnswer": { "@type": "Answer", "text": "They are placed within the skin, distributing the product through the treated area to support hydration and skin-quality goals. Exact mechanisms vary by product and are discussed at consultation." }
        },
        {
          "@type": "Question",
          "name": "Are skin boosters the same as dermal fillers?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Skin boosters are generally associated with hydration and skin quality, while dermal fillers are commonly used for volume and contouring. Product characteristics do vary, so the distinction is discussed individually." }
        },
        {
          "@type": "Question",
          "name": "Are skin boosters injections?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Skin boosters are delivered by injection, typically as part of a professional treatment protocol following a consultation and skin assessment." }
        },
        {
          "@type": "Question",
          "name": "What ingredients are used in skin boosters?",
          "acceptedAnswer": { "@type": "Answer", "text": "Formulations vary by product. Hyaluronic acid is a common base ingredient in several skin-booster products, but not every product is identical, and other skin-supporting formulations exist." }
        },
        {
          "@type": "Question",
          "name": "Can skin boosters help dry skin?",
          "acceptedAnswer": { "@type": "Answer", "text": "They may be considered for skin that feels dry or dehydrated despite regular moisturiser use, as part of a broader skincare and treatment plan discussed at consultation." }
        },
        {
          "@type": "Question",
          "name": "Can skin boosters improve skin texture?",
          "acceptedAnswer": { "@type": "Answer", "text": "Improved-looking texture is a commonly discussed goal, though individual response varies and cannot be guaranteed." }
        },
        {
          "@type": "Question",
          "name": "Can skin boosters reduce the appearance of fine lines?",
          "acceptedAnswer": { "@type": "Answer", "text": "Hydration can influence how fine lines appear, and some products may have additional skin-quality effects. Deeper, more established wrinkles typically require a different treatment discussion." }
        },
        {
          "@type": "Question",
          "name": "Can skin boosters help dull-looking skin?",
          "acceptedAnswer": { "@type": "Answer", "text": "They may support improved radiance as part of an overall skin-quality plan, though lifestyle and skincare factors also play a role and pigmentation concerns require a separate discussion." }
        },
        {
          "@type": "Question",
          "name": "Are skin boosters suitable for sensitive skin?",
          "acceptedAnswer": { "@type": "Answer", "text": "Suitability depends on individual assessment, including any known allergies or skin sensitivities, which is why a consultation precedes any injectable treatment." }
        },
        {
          "@type": "Question",
          "name": "How long does a skin booster treatment take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Session length varies depending on the treatment area, product and number of areas addressed, and is best estimated once your treatment plan is confirmed." }
        },
        {
          "@type": "Question",
          "name": "Are skin boosters painful?",
          "acceptedAnswer": { "@type": "Answer", "text": "Patients commonly describe sensations such as pinching, pressure or mild stinging. Numbing may be used depending on the protocol, but a fully painless experience isn't guaranteed." }
        },
        {
          "@type": "Question",
          "name": "Is there downtime after skin booster injections?",
          "acceptedAnswer": { "@type": "Answer", "text": "Downtime is usually limited, though temporary effects such as redness, swelling or small injection-site marks can occur and vary by individual." }
        },
        {
          "@type": "Question",
          "name": "What side effects can occur?",
          "acceptedAnswer": { "@type": "Answer", "text": "Possible temporary effects include redness, swelling, bruising, tenderness and small raised injection points. Your clinician will discuss risks specific to your product and treatment plan." }
        },
        {
          "@type": "Question",
          "name": "When can I see skin booster results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Timing depends on the product, protocol, starting skin condition and individual response — there is no single universal timeframe." }
        },
        {
          "@type": "Question",
          "name": "How long do skin booster results last?",
          "acceptedAnswer": { "@type": "Answer", "text": "Duration varies by product, treatment area, skin condition, lifestyle and individual metabolism. As a general reference, several months per treatment is commonly discussed, with maintenance sessions typically recommended." }
        },
        {
          "@type": "Question",
          "name": "How many skin booster sessions may I need?",
          "acceptedAnswer": { "@type": "Answer", "text": "There is no fixed number — it depends on the product, your treatment goal, starting skin condition and response, usually with an initial short series followed by maintenance." }
        },
        {
          "@type": "Question",
          "name": "Can skin boosters treat acne scars?",
          "acceptedAnswer": { "@type": "Answer", "text": "Not automatically. Skin boosters aren't a scar-resurfacing treatment by default; acne scarring is typically addressed through other treatment approaches, discussed separately at consultation." }
        },
        {
          "@type": "Question",
          "name": "How much do skin boosters cost in JVC?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cost depends on the product, amount used, treatment areas, number of sessions and your individual plan. At Vedara Care, skin boosters within the skin rejuvenation programme start from AED 2,200 per treatment, confirmed after consultation." }
        },
        {
          "@type": "Question",
          "name": "Where can I get skin booster treatment in JVC?",
          "acceptedAnswer": { "@type": "Answer", "text": "Vedara Care Polyclinic, at Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC), Dubai, offers skin boosters as part of its DHA-licensed, dermatologist-led skin rejuvenation programme." }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
        "addressLocality": "Jumeirah Village Circle (JVC), Dubai",
        "addressCountry": "AE"
      },
      "medicalSpecialty": "Dermatology"
    }
  ];

  const suitabilityTypes = {
    bgColor: "bg-white",
    cardBg: "bg-[#FAF7F2]",
    label: "SUITABILITY",
    title: "Who May Consider Skin Boosters?",
    description: skinBoostersSuitability.introduction,
    types: [
      {
        number: "01",
        title: "Who May Consider Skin Boosters",
        description: "Explore when this injectable skin-quality treatment may be considered for your skin.",
        typicalSigns: skinBoostersSuitability.rightFor
      },
      {
        number: "02",
        title: "Who May Need to Postpone or Avoid Treatment",
        description: "Situations that commonly call for professional evaluation or a delay in injectable treatment.",
        typicalSigns: skinBoostersSuitability.notRightFor
      }
    ],
    footer: skinBoostersSuitability.footer,
    gridCols: "grid grid-cols-1 md:grid-cols-2 gap-6",
    borderPosition: "left"
  };

  const beforeBookingItems = [
    "Which skin-booster product will be used?",
    "What is the product intended to improve?",
    "Who will perform the injections?",
    "Is the product suitable for my specific skin concerns?",
    "What areas will be treated?",
    "How many sessions might I need?",
    "What should I expect during the procedure itself?",
    "Will numbing be used?",
    "What temporary side effects can occur?",
    "How long might swelling or redness last?",
    "What should I avoid after treatment?",
    "When might I start noticing changes?",
    "How long might results last?",
    "How much does the treatment cost?",
    "Are there alternatives that might suit my concern better?"
  ];

  const compareTabs = {
    mesotherapy: {
      label: "vs Mesotherapy",
      type: "prose",
      paragraphs: skinBoostersComparisonOther.vsMesotherapy.paragraphs
    },
    prp: {
      label: "vs PRP",
      type: "prose",
      paragraphs: skinBoostersComparisonOther.vsPRP.paragraphs
    },
    hydrafacial: {
      label: "vs HydraFacial",
      type: "prose",
      paragraphs: skinBoostersComparisonOther.vsHydraFacial.paragraphs
    },
    microneedling: {
      label: "vs Microneedling",
      type: "prose",
      paragraphs: skinBoostersComparisonOther.vsMicroneedling.paragraphs
    },
    led: {
      label: "vs LED Light Therapy",
      type: "prose",
      paragraphs: skinBoostersComparisonOther.vsLED.paragraphs
    }
  };

  const chooseClinicItems = [
    "A qualified medical professional performing the injection",
    "Transparency about which product is being used",
    "Confirmation the product is original and traceable",
    "Appropriate product storage and handling",
    "A proper consultation before treatment",
    "Review of your medical history",
    "Sterile injection technique",
    "Preparedness for managing an unexpected reaction",
    "Realistic expectations set in advance, not guaranteed outcomes",
    "Clear aftercare instructions",
    "Transparent pricing"
  ];

  const redFlagsItems = [
    "No proper consultation before treatment",
    "An unlabelled or unidentified injectable product",
    "Guaranteed results",
    "Unrealistic “permanent glow” or similar claims",
    "Pressure to buy large treatment packages upfront",
    "No explanation of which product is being used",
    "No discussion of your medical history",
    "Before-and-after images that look inconsistent or edited",
    "Unclear practitioner qualifications",
    "Prices that seem unusually low with no explanation"
  ];

  const relatedPagesData = {
    label: "EXPLORE MORE",
    title: "Related Dermatology Services",
    pages: [
      { title: "Skin Rejuvenation in JVC", href: "/treatments/skin-rejuvenation-jvc", description: "The broader dermatologist-led programme that includes Skin Boosters alongside chemical peels, microneedling, PRP and mesotherapy." },

      { title: "Chemical Peel in Dubai", href: "/treatments/chemical-peel-dubai", description: "A professional peel that may be considered for selected concerns such as uneven tone, pigmentation, and surface texture." },
      { title: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc", description: "Get a professional skin assessment and personalised treatment recommendations based on your individual concerns and goals" },
      { title: "Acne Scars Treatment  ", href: "/conditions/acne-scars-dubai", description: "For patients whose primary concern is acne scarring rather than general skin hydration." },
    ]
  };

  return (
    <>
      <Head>
        <title>{skinBoostersHero.seoTitle}</title>
        <meta name="description" content={skinBoostersHero.description} />
        <link rel="canonical" href={skinBoostersHero.canonicalUrl} />
        <link rel="alternate" hrefLang="en-AE" href={skinBoostersHero.canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={skinBoostersHero.canonicalUrl} />
        <meta property="og:title" content={skinBoostersHero.seoTitle} />
        <meta property="og:description" content={skinBoostersHero.description} />
        <meta property="og:image" content={`https://vedaracare.ae${skinBoostersHero.image}`} />
        <meta property="og:url" content={skinBoostersHero.canonicalUrl} />
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

      <AyurvedaHero {...skinBoostersHero} />

      <AyurvedaIntro {...skinBoostersIntro} />

      {/* At a Glance Table */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={skinBoostersAtAGlance.label}
            title={skinBoostersAtAGlance.title}
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
                {skinBoostersAtAGlance.rows.map((row, idx) => (
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
            {skinBoostersAtAGlance.footer}
          </p>
        </div>
      </section>

      {/* What Are Skin Boosters */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinBoostersExplanation.label}
        title={skinBoostersExplanation.title}
        contentSections={[
          {
            subtitle: skinBoostersExplanation.description,
            description: skinBoostersExplanation.content.join("\n\n")
          }
        ]}
        sidebar={{
          image: skinBoostersExplanation.image,
          altText: skinBoostersExplanation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={skinBoostersExplanation.caption}
      />

      {/* What Do Skin Boosters Aim to Improve */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={skinBoostersGoals.label}
            title={skinBoostersGoals.title}
            sub={skinBoostersGoals.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {skinBoostersGoals.points.map((pt, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-[#FAF7F2] shadow-sm border border-[#E5DFD3]">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 size={20} color={GOLD} className="shrink-0 mt-1" />
                  <p className="text-[14.5px] leading-relaxed text-[rgb(107,107,107)]">{pt}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-8 border-t border-[#E5DFD3] pt-6">
            {skinBoostersGoals.footer}
          </p>
        </div>
      </section>

      {/* Hydration vs Skin Quality */}
      <PhysiotherapyTechniques
        bgColor="bg-[#F5F0E8]"
        label={skinBoostersHydrationVsQuality.label}
        title={skinBoostersHydrationVsQuality.title}
        techniques={skinBoostersHydrationVsQuality.paragraphs.map((p, idx) => ({
          title: idx === 0 ? "Two terms, two different meanings" : idx === 1 ? "The practical difference" : "Why this matters for your consultation",
          description: p
        }))}
      />

      {/* How Skin Boosters Work */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={skinBoostersHowItWorks.label}
            title={skinBoostersHowItWorks.title}
            sub={skinBoostersHowItWorks.description}
          />
          <div className="grid md:grid-cols-1 gap-6 mt-10">
            {skinBoostersHowItWorks.points.map((pt, idx) => (
              <div key={idx} className="rounded-2xl p-6 bg-[#FAF7F2] shadow-sm border border-[#E5DFD3]">
                <div className="flex gap-3 items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1C1C14] text-white text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-[rgb(107,107,107)]">{pt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinBoostersIngredients.label}
        title={skinBoostersIngredients.title}
        contentSections={[
          {
            subtitle: "",
            description: skinBoostersIngredients.description
          },
          {
            subtitle: "",
            description: skinBoostersIngredients.note
          }
        ]}
        sidebar={{
          image: "/images/skin-clinic-products-consultation-jvc.jpg",
          altText: "Dermatologist reviewing skin booster products during consultation",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={skinBoostersIngredients.footer}
      />

      {/* Product Selection */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={skinBoostersProductSelection.label}
            title={skinBoostersProductSelection.title}
            sub={skinBoostersProductSelection.description}
          />
          <div className="rounded-2xl p-8 bg-white border border-[#E5DFD3] mt-10">
            <div className="grid md:grid-cols-2 gap-4">
              {skinBoostersProductSelection.items.map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-sm font-medium text-[rgb(26,26,26)]">
                  <CheckCircle2 size={16} color={GOLD} className="shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skin Concerns Deep Dive */}
      <SkinConcernsDeepDive concerns={skinBoostersConcerns.concernsList} />

      {/* Suitability */}
      <SciaticaTypes {...suitabilityTypes} />

      {/* Consultation */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={skinBoostersConsultation.label}
        title={skinBoostersConsultation.title}
        contentSections={[
          {
            subtitle: "",
            description: skinBoostersConsultation.description
          },
          {
            subtitle: "Key discussion points",
            description: skinBoostersConsultation.items.join("\n")
          }
        ]}
        sidebar={{
          image: "/images/dermatologist-consultation-assessment-jvc.jpg",
          altText: "Dermatologist conducting a skin assessment during consultation",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
      />

      {/* Treatment Steps */}
      <ContentWithSidebar
        bgColor="bg-white"
        label={skinBoostersAppointment.label}
        title={skinBoostersAppointment.title}
        contentSections={skinBoostersAppointment.steps.map(step => {
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
          image: skinBoostersAppointment.image,
          altText: skinBoostersAppointment.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
        footer={skinBoostersAppointment.footer}
      />

      {/* Sensation and Session Length */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label="TREATMENT EXPERIENCE"
        title={skinBoostersSensation.title}
        contentSections={[
          {
            subtitle: '',
            description: skinBoostersSensation.description
          },
          {
            subtitle: '',
            description: skinBoostersSensation.notes
          }
        ]}
        sidebar={{
          image: "/images/patient-receiving-injectable-skin-treatment.jpg",
          altText: "Skin booster injectable treatment setting",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
      />

      {/* Recovery & Aftercare */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow={skinBoostersRecovery.label}
            title={skinBoostersRecovery.title}
            sub={skinBoostersRecovery.description}
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl p-6 bg-white border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">General Aftercare Principles</h4>
              <div className="space-y-3">
                {skinBoostersRecovery.aftercarePrinciples.map((item, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-sm font-medium text-[rgb(26,26,26)]">
                    <CheckCircle2 size={16} color={GOLD} className="shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6 bg-[#FFF4F0] border border-[#F5C6B8]">
              <h4 className="text-lg font-serif mb-4 text-[rgb(26,26,26)]">Possible Temporary Restrictions</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                {skinBoostersRecovery.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Expectations */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="RESULTS & EXPECTATIONS" title="Realistic outcomes, timing and longevity" />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">{skinBoostersResults.title}</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{skinBoostersResults.description}</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">When Do Results Appear?</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{skinBoostersResults.timing}</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">How Long Do Results Last?</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{skinBoostersResults.longevity}</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#FAF7F2] border border-[#E5DFD3]">
              <h4 className="text-lg font-serif mb-2 text-[rgb(26,26,26)]">How Many Sessions May Be Needed?</h4>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">{skinBoostersResults.sessions}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Image checks */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="CLINICAL STANDARDS" title={skinBoostersBeforeAfter.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-8">
            {skinBoostersBeforeAfter.description}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {skinBoostersBeforeAfter.points.map((pt, idx) => (
              <div key={idx} className="rounded-xl p-5 bg-white border border-[#E5DFD3] flex gap-2.5 items-start">
                <CheckCircle2 size={16} color={GOLD} className="shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[rgb(26,26,26)]">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      {/* Skin Boosters vs Dermal Fillers Table */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="TREATMENT COMPARISON"
            title={skinBoostersComparisonVsFillers.title}
            sub="Skin boosters and dermal fillers are both injectable treatments, but they serve different purposes. Understanding the difference helps set the right expectations."
          />
          <div className="overflow-x-auto mt-10">
            <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm border border-[#E5DFD3] bg-white">
              <thead>
                <tr style={{ backgroundColor: '#1C1C14' }}>
                  <th className="text-left p-5 text-sm font-semibold text-white w-52">Feature</th>
                  <th className="text-left p-5 text-sm font-semibold text-white">Skin Boosters</th>
                  <th className="text-left p-5 text-sm font-semibold text-white">Dermal Fillers</th>
                </tr>
              </thead>
              <tbody>
                {skinBoostersComparisonVsFillers.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#E5DFD3]"
                    style={idx % 2 === 1 ? { backgroundColor: '#FAF7F2' } : {}}
                  >
                    <td className="p-5 text-sm font-medium" style={{ color: INK, verticalAlign: 'top' }}>{row.feature}</td>
                    <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7', verticalAlign: 'top' }}>{row.skinBoosters}</td>
                    <td className="p-5 text-sm" style={{ color: STONE, lineHeight: '1.7', verticalAlign: 'top' }}>{row.fillers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-8">
            {skinBoostersComparisonVsFillers.note}
          </p>
        </div>
      </section>

      {/* Multi-Treatment Comparison Grid */}
      <section className="py-16 md:py-28 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-5xl leading-tight mb-6"
              style={{
                fontFamily: "Fraunces, Georgia, serif",
                color: INK,
              }}
            >
              Skin Boosters vs Other Skin Options
            </h1>

            <p
              className="text-base md:text-lg leading-8"
              style={{ color: "#5F5A54" }}
            >
              Choosing between skin treatments usually comes down to which concern is the priority and whether an injectable approach is appropriate for you. The comparison below is a starting point, not a recommendation — the right choice depends on your specific skin and goals, best discussed during consultation.
            </p>
          </div>

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
                      Injection
                    </th>
                    <th
                      className="text-left px-6 py-5 text-sm font-semibold"
                      style={{ color: INK }}
                    >
                      Typical Downtime
                    </th>
                    <th
                      className="text-left px-6 py-5 text-sm font-semibold"
                      style={{ color: INK }}
                    >
                      Volume Focus
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr
                      key={item.treatment}
                      className={`border-t border-[#E6E0D8] ${index === 0 ? "bg-[#FBF8F3]" : "bg-white"
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
                        {item.injection}
                      </td>
                      <td
                        className="px-6 py-6 align-top text-sm"
                        style={{ color: "#5F5A54" }}
                      >
                        {item.downtime}
                      </td>
                      <td
                        className="px-6 py-6 align-top text-sm"
                        style={{ color: "#5F5A54" }}
                      >
                        {item.volume}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
                        Injection
                      </p>
                      <p className="text-sm text-[#5F5A54]">
                        {item.injection}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                        Volume Focus
                      </p>
                      <p className="text-sm text-[#5F5A54]">
                        {item.volume}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#E6E0D8]">
                    <p className="text-xs uppercase tracking-wider text-[#8A837B] mb-1">
                      Typical Downtime
                    </p>
                    <p className="text-sm text-[#5F5A54]">
                      {item.downtime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Detailed Comparison Tabs */}
      <section className="py-16" style={{ backgroundColor: COLORS.deep }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-xs tracking-[0.2em] uppercase mb-3 font-bold" style={{ color: '#1C1C14', opacity: 0.75 }}>
              HOW IT COMPARES
            </p>
            <h2 className="text-3xl md:text-4xl leading-tight font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1C1C14' }}>
              Side-by-side: skin boosters and alternatives
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
            <div className="space-y-4">
              {compareTabs[compareTab].paragraphs.map((p, i) => (
                <p key={i} className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can Replace Fillers & Skincare */}
      <section className="py-16 bg-white border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 bg-[#FAF7F2] border border-[#E5DFD3]">
            <h4 className="text-xl font-serif mb-4 text-[rgb(26,26,26)]">{skinBoostersCanReplaceFillers.title}</h4>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
              {skinBoostersCanReplaceFillers.description}
            </p>
          </div>
          <div className="rounded-2xl p-8 bg-[#F5F0E8] border border-[#E5DFD3]">
            <h4 className="text-xl font-serif mb-4 text-[rgb(26,26,26)]">{skinBoostersCanReplaceSkincare.title}</h4>
            <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
              {skinBoostersCanReplaceSkincare.description}
            </p>
          </div>
        </div>
      </section>

      {/* Choose a clinic + red flags */}
      <section className="py-16" style={{ backgroundColor: COLORS.sage }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <Eyebrow>How to Choose a Skin Boosters Clinic in JVC</Eyebrow>
            <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Worth checking before booking anywhere</h3>
            <p className="text-[13.5px] mb-5" style={{ color: COLORS.stone }}>
              A few practical points are worth checking before booking any injectable treatment:
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
                  <X size={16} color="#A24E3B" className="shrink-0 mt-0.5" />
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
          eyebrow="Before Booking Skin Boosters"
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

      {/* Location */}
      <TreatmentLocation
        title="Where Skin Boosters happen at Vedara Care JVC."
        address={skinBoostersLocation.address}
      />

      {/* Why JVC */}
      <ContentWithSidebar
        bgColor="bg-white"
        label="LOCAL ACCESSIBILITY"
        title={skinBoostersWhyJvc.title}
        contentSections={[
          {
            subtitle: "",
            description: skinBoostersWhyJvc.description
          }
        ]}
        sidebar={{
          image: skinBoostersWhyJvc.image,
          altText: skinBoostersWhyJvc.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
      />



      <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="SUMMARY" title={skinBoostersSummary1.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {skinBoostersSummary1.description}
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 bg-[#FAF7F2] border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="" title={skinBoostersSummary.title} />
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            {skinBoostersSummary.description}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <FAQ faqs={skinBoostersFAQ.faqs} />


      {/* Medical Disclaimer */}
      <MedicalDisclaimer text={skinBoostersDCTA.disclaimer} />

   {/* Final CTA */}
      <FinalCTA {...skinBoostersDCTA} />


      {/* Related Pages */}
      <RelatedPages {...relatedPagesData} />
    </>

  );
};

export default SkinBoostersJVC;
