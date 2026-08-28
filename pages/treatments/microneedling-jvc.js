import { useState } from 'react';
import Head from 'next/head';
import {
  HandMetal, Sparkle, Gauge, CalendarClock, ClipboardList, Repeat,
  Droplets, SprayCan, Check, ShieldAlert, ImageIcon, Wallet,
  CheckCircle2, AlertTriangle, Compass, Users2, MapPinned, HelpCircle,
  X, Info
} from 'lucide-react';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  microneedlingHero,
  microneedlingIntro,
  microneedlingHowItWorks,
  microneedlingExplanation,
  microneedlingAppointment,
  microneedlingSensation,
  microneedlingConcerns,
  microneedlingSuitability,
  microneedlingSkinTypes,
  microneedlingLocation,
  microneedlingFAQ,
  microneedlingCTA,
  microneedlingSchema
} from '../../data/microneedlingData';

// ─── Design tokens ───────────────────────────────────────────────────────────
const GOLD = '#C9A55A';
const INK = 'rgb(26,26,26)';
const STONE = 'rgb(107,107,107)';
const SAGE = '#F0EBE3';

// Unified COLORS object matching the user's styling exactly
const COLORS = {
  gold: GOLD,
  goldSoft: '#D9C39B',
  ink: INK,
  stone: STONE,
  sage: SAGE,
  circle: '#0f0f0eff',
  deep: '#f8f7f6ff',
  card: '#FFFFFF',
  line: '#E5DFD3',
  rustBg: '#FFF4F0',
  rustLine: '#F5C6B8',
};

// ─── Inline helper components ────────────────────────────────────────────────
function SectionHeading({ eyebrow, title, sub, center }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
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

function Eyebrow({ children }) {
  return (
    <p className="text-xs tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
      {children}
    </p>
  );
}

function IconBadge({ Icon, tone }) {
  const color = tone === 'rust' ? '#C0392B' : GOLD;
  return (
    <div
      className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
      style={{ background: tone === 'rust' ? '#F5C6B8' : '#F0EBE3' }}
    >
      <Icon size={20} color={color} />
    </div>
  );
}

// Depth gauge component
function DepthGauge({ label, depth, note }) {
  const pct = Math.min(Math.max(depth, 0), 100);
  const matched = depth <= 40;
  return (
    <div>
      <p className="text-xs tracking-[0.15em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>{label}</p>
      <div className="relative h-3 rounded-full overflow-hidden mb-2" style={{ background: '#E5DFD3' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: matched ? `linear-gradient(90deg,${GOLD},#B8963E)` : '#888' }}
        />
      </div>
      <div className="flex justify-between text-xs mb-3" style={{ color: STONE }}>
        <span>Surface</span><span>Deep</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: matched ? GOLD : STONE, fontWeight: matched ? 600 : 400 }}>
        {note}
      </p>
    </div>
  );
}

function SkinConcernsDeepDive({ concerns }) {
  const [active, setActive] = useState(0);

  const depths = [40, 25, 30, 20, 35, 25, 12];
  const current = concerns[active] || concerns[0];
  const depth = depths[active] ?? 25;
  const matched = depth <= 40;

  return (
    <section style={{ padding: '96px 24px', background: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: GOLD }}>
            SKIN CONCERNS
          </div>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
            Skin Concerns Microneedling May Help Address
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: STONE, lineHeight: '1.7' }}>
            Microneedling reaches the dermal layer, prompting the skin's own biological repair process.
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
          <div className="md:col-span-3">
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
              {current.title}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: STONE, lineHeight: '1.75' }}>
              {current.description}
            </p>
          </div>
          <div className="md:col-span-2 rounded-2xl p-6" style={{ backgroundColor: SAGE }}>
            <DepthGauge
              label={current.title}
              depth={depth}
              note={
                matched
                  ? 'Reaches deep enough to trigger dermal repair — a good match.'
                  : 'This concern lies beyond the depth microneedling reaches.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Concern by concern deep dive data matching user-provided text exactly
const deepDives = {
  scars: {
    tab: 'Acne Scars',
    paragraphs: [
      "This is one of the most common reasons patients seek out microneedling, and it's also a section where precision matters more than optimism.",
      "\"Acne scars\" is not one single thing. Superficial texture irregularities and post-acne marks are relatively shallow changes in the skin's surface, and these tend to respond more readily to treatments that work at a superficial-to-moderate depth. True atrophic scarring — a genuine loss of tissue beneath the skin's surface — is a different, deeper structural change, and it comes in recognizable patterns: ice-pick scars (narrow, deep, and pitted), rolling scars (broad depressions with a rolling, uneven surface), and boxcar-type scars (wider depressions with more defined edges).",
      "Microneedling does not work equally well across all of these. Rolling scars, which involve tethering beneath the skin's surface, often respond better to microneedling than deep ice-pick scars, which may need a different or combined approach — sometimes involving techniques delivered alongside microneedling, sometimes requiring an entirely different treatment path. This page cannot tell you which category your scarring falls into; that's genuinely a job for a professional assessment, not a self-diagnosis based on a description in an article. If your primary concern is scarring, our dedicated acne scars treatment page covers the broader range of approaches available."
    ],
    flags: [
      { ok: true, text: 'Rolling scars respond well to microneedling' },
      { ok: false, text: 'Deep ice-pick scars often need a different or combined approach' },
      { ok: false, text: 'Not suitable for self-diagnosis of scar type' }
    ],
    gauges: [
      { label: 'Dermal Micro-channels', depth: 40, note: 'Reaches deep enough to trigger collagen synthesis' }
    ]
  },
  texture: {
    tab: 'Skin Texture',
    paragraphs: [
      "Rough or uneven texture — skin that looks fine from a distance but feels or photographs less smoothly than you'd like — is one of the concerns microneedling is generally considered for. The gradual remodelling process it triggers can, over a course of sessions, be associated with a smoother-feeling, more even surface for some patients.",
      "As with everything on this page, individual response varies considerably. Some patients notice a meaningful change in texture after a series of sessions; others see a more modest improvement. Setting realistic expectations at the outset — rather than assuming a dramatic transformation — tends to make the experience more satisfying regardless of the degree of change."
    ],
    flags: [
      { ok: true, text: 'Smoothes rough or uneven skin texture' },
      { ok: true, text: 'Prompts gradual tissue remodelling' },
      { ok: false, text: 'Requires patience — results build over a course of sessions' }
    ],
    gauges: [
      { label: 'Surface Texture', depth: 25, note: 'Outer layer is gradually remodelled and smoothed' }
    ]
  },
  finelines: {
    tab: 'Fine Lines',
    paragraphs: [
      "Fine, superficial lines are sometimes influenced by changes in skin texture and structural proteins, which is part of why microneedling gets mentioned in this context. Any improvement here tends to be gradual, tied to the same collagen-related remodelling process discussed earlier, rather than an immediate smoothing effect.",
      "It's worth being clear about what this treatment is not: it is not equivalent to injectable treatments, which work through entirely different mechanisms to address volume or muscle movement, and it is not a substitute for surgical procedures addressing more advanced signs of ageing. For fine, texture-related lines, it may be a reasonable option to discuss; for deeper, more established lines, other approaches are more likely to be recommended."
    ],
    flags: [
      { ok: true, text: 'Helps soften very fine superficial micro-lines' },
      { ok: false, text: 'Not a substitute for injectables or surgical procedures' }
    ],
    gauges: [
      { label: 'Superficial Fine Lines', depth: 30, note: 'Works on texture-related lines' }
    ]
  },
  pores: {
    tab: 'Enlarged Pores',
    paragraphs: [
      "Pores can look more prominent for a few different reasons — oil production, skin texture immediately surrounding the pore, and structural factors related to the skin itself. Because microneedling works on skin texture broadly, some patients notice their pores appear less prominent after a course of treatment, simply because the surrounding skin surface looks smoother.",
      "It's worth being upfront about something often oversold elsewhere: pores are structural features of the skin, and they cannot be permanently \"closed.\" What can change is how they appear, depending on the condition of the skin around them. Framing this honestly matters, because expecting a permanent structural change will lead to disappointment regardless of which treatment is chosen."
    ],
    flags: [
      { ok: true, text: 'Smoother surrounding skin surface makes pores look smaller' },
      { ok: false, text: 'Pores are structural and cannot be permanently closed' }
    ],
    gauges: [
      { label: 'Pore Appearance', depth: 20, note: 'Refines surrounding skin texture' }
    ]
  },
  tone: {
    tab: 'Complexion Tone',
    paragraphs: [
      "An uneven-looking complexion can stem from texture, tone, or a combination of both, and the distinction matters for treatment planning. Microneedling primarily works on texture and overall skin renewal, rather than being a targeted pigmentation treatment.",
      "If tone — patches of skin that look darker or lighter than the surrounding area — is your main concern, it's important to know that pigmentation has several different underlying causes, and not all of them respond the same way to the same treatment. A professional assessment can help clarify what's actually driving the unevenness you're seeing before deciding on an approach."
    ],
    flags: [
      { ok: true, text: 'Improves texture-driven complexion unevenness' },
      { ok: false, text: 'Not a primary targeted treatment for pigmentation' }
    ],
    gauges: [
      { label: 'Pigmentation Level', depth: 35, note: 'Melanocytes lie below the exfoliation layer' }
    ]
  },
  rejuvenation: {
    tab: 'Skin Rejuvenation',
    paragraphs: [
      "Used more broadly, microneedling is sometimes considered as part of an overall skin rejuvenation approach — addressing fine lines, general texture, and overall skin appearance together rather than one isolated concern. The improvement here, as with the more specific concerns above, tends to build gradually across a course of sessions rather than happening all at once.",
      "We'll avoid the \"turn back the clock\" language that's common in aesthetic marketing, because it sets an expectation the treatment can't reliably meet. What microneedling can realistically offer is a gradual, cumulative improvement in skin texture and appearance for suitable candidates — not a reversal of the skin's age."
    ],
    flags: [
      { ok: true, text: 'Gradual cumulative skin quality improvements' },
      { ok: false, text: 'Cannot reverse skin age or turn back the clock' }
    ],
    gauges: [
      { label: 'Skin Quality', depth: 25, note: 'Gradual stimulation of structural proteins' }
    ]
  }
};

function ConcernByConcernSection() {
  const [activeDeep, setActiveDeep] = useState('scars');
  const activeDD = deepDives[activeDeep] || deepDives['scars'];

  return (
    <section style={{ padding: "96px 24px", backgroundColor: COLORS.deep }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase mb-3 font-bold" style={{ color: '#1C1C14', opacity: 0.75 }}>
            CONCERN BY CONCERN
          </p>
          <h2 className="text-3xl md:text-4xl leading-tight font-serif mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", color: '#1C1C14' }}>
            The full picture — each concern, in detail
          </h2>
          <p className="text-sm leading-relaxed font-medium" style={{ color: '#1C1C14', opacity: 0.85 }}>
            Every claim below is measured against the same fact: microneedling only reaches the dermal layer via mechanical micro-channels.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {Object.entries(deepDives).map(([key, d]) => {
            const isActive = activeDeep === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveDeep(key)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border transition-all"
                style={{
                  borderColor: isActive ? "#1C1C14" : "rgba(28, 28, 20, 0.3)",
                  backgroundColor: isActive ? "#1C1C14" : "rgba(255, 255, 255, 0.3)",
                  color: isActive ? "#FFFFFF" : "#1C1C14",
                  cursor: "pointer"
                }}
              >
                {d.tab}
              </button>
            );
          })}
        </div>

        {activeDD && (
          <div
            key={activeDeep}
            className="rounded-2xl p-8 md:p-10 grid md:grid-cols-5 gap-10 shadow-lg"
            style={{ backgroundColor: COLORS.card }}
          >
            <div className="md:col-span-3 space-y-4">
              <h3 className="text-2xl mb-2 font-serif" style={{ fontFamily: "Fraunces, Georgia, serif", color: INK }}>
                Microneedling for {activeDD.tab}
              </h3>
              {activeDD.paragraphs?.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed" style={{ color: STONE }}>
                  {p}
                </p>
              ))}
              {activeDD.flags?.length > 0 && (
                <div className="pt-2 space-y-2">
                  {activeDD.flags.map((f, i) => (
                    <div key={`${f.text}-${i}`} className="flex items-start gap-2.5 text-sm font-medium" style={{ color: INK }}>
                      {f.ok ? (
                        <Check size={16} color="#1C1C14" className="shrink-0 mt-0.5" />
                      ) : (
                        <X size={16} color="#A24E3B" className="shrink-0 mt-0.5" />
                      )}
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-2 rounded-2xl p-6 space-y-6" style={{ backgroundColor: SAGE }}>
              {activeDD.gauges?.map((g, i) => (
                <DepthGauge key={i} label={g.label} depth={g.depth} note={g.note} />
              ))}
              <div className="flex gap-2 items-start pt-2 text-[12px]" style={{ color: STONE, borderTop: `1px solid ${COLORS.line}` }}>
                <Info size={14} className="shrink-0 mt-0.5" />
                <span>Bars are illustrative, not to scale — meant to compare mechanisms, not diagnose your skin.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const MicroneedlingTreatment = () => {
  const [audience, setAudience] = useState('men');
  const [compareTab, setCompareTab] = useState('hydrafacial');

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

  const compareTabs = {
    hydrafacial: { label: 'vs HydraFacial', type: 'table' },
    peel: {
      label: 'vs Chemical Peel',
      type: 'prose',
      paragraphs: [
        "The core difference is mechanism: microneedling creates controlled physical micro-injuries to trigger the skin's repair response, while a chemical peel uses an acid-based solution to exfoliate the skin's surface, working at a depth determined by the acid and concentration chosen.",
        "This affects what each treatment tends to be used for. Chemical peels are generally more associated with surface-level concerns — dullness, superficial pigmentation, mild texture issues — while microneedling is more often considered for concerns that involve deeper texture remodelling, such as certain types of acne scarring.",
        "Recovery also differs: chemical peels can involve visible peeling over several days depending on depth, while microneedling recovery tends to center more on redness and sensitivity rather than peeling. Individual suitability for either — or for using both as part of a broader plan — depends on your specific skin and concern, and is best discussed directly with a treating professional. Our chemical peel page covers that treatment separately in more detail."
      ],
    },
    laser: {
      label: 'vs Laser Resurfacing',
      type: 'prose',
      paragraphs: [
        "These treatments work through fundamentally different mechanisms. Microneedling uses mechanical micro-injury to trigger a repair response, while laser skin resurfacing uses light energy, with different laser types working at different depths and through different effects on the skin, ranging from more superficial to more aggressive, ablative approaches.",
        "Treatment depth, and therefore what each is generally used for, can differ considerably depending on the specific laser involved — some laser treatments are considered for more established texture or pigmentation concerns, while microneedling tends to be considered for a gradual, more conservative remodelling approach.",
        "Recovery expectations also vary significantly by laser type, with some lasers involving considerably more downtime than typical microneedling. Neither is universally superior; patient selection depends on the specific concern, skin type, and how much downtime is acceptable, which is a conversation best had directly with a treating professional during consultation."
      ],
    }
  };

  const aftercareItems = [
    "Cleansing gently rather than using harsh or exfoliating products",
    "Applying appropriate moisturizer to support the skin as it recovers",
    "Protecting the treated area diligently from sun exposure",
    "Avoiding anything that could unnecessarily irritate the skin while it's still settling",
    "Holding off on aggressive exfoliation until your provider confirms it's appropriate to resume",
    "Following the specific instructions given by your treating professional, since these may vary based on your session",
    "Avoiding picking or scratching at the skin during the recovery period"
  ];

  const chooseClinicItems = [
    "Treatment is performed or directly overseen by qualified healthcare professionals",
    "The equipment used is appropriate and well-maintained",
    "Sterile, single-use needle cartridges and safe treatment practices are standard",
    "A genuine skin assessment happens before any treatment is agreed",
    "The treatment plan is customized to your skin rather than applied uniformly",
    "Risks are clearly explained rather than glossed over",
    "Expectations set during consultation are realistic rather than exaggerated",
    "Clear aftercare guidance is provided after your session",
    "Pricing is transparent rather than vague",
    "Genuine patient reviews are available where the clinic offers them"
  ];

  const beforeBookingItems = [
    "Is microneedling actually suitable for my specific skin concern?",
    "Who will be performing the treatment, and what is their training?",
    "What results are realistic for someone with my skin and concern?",
    "How many sessions might reasonably be recommended?",
    "What kind of recovery should I expect afterward?",
    "What aftercare will I need to follow?",
    "What are the possible side effects for someone with my skin?",
    "Are there alternative treatments that might suit my concern better?",
    "What exactly is included in the quoted cost?",
    "What should I avoid, and for how long, before and after treatment?"
  ];

  const currentUrl = "https://vedaracare.ae/treatments/microneedling-jvc/";
  const publishedDate = "2026-08-11T10:00:00+04:00";
  const modifiedDate = new Date().toISOString();

  const schemas = [
    microneedlingSchema.webPage,
    microneedlingSchema.service,
    microneedlingSchema.breadcrumb,
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": microneedlingFAQ.faqs.map((faq) => ({
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
      "@type": "Article",
      "headline": "Microneedling in JVC",
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Physician",
        "name": "Dermatology Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedara Care Polyclinic"
      },
      "about": [
        { "@type": "MedicalProcedure", "name": "Microneedling" }
      ],
      "mainEntityOfPage": currentUrl
    }
  ];

  const aftercareSection = {
    bgColor: "bg-[#FAF7F2]",
    label: "RECOVERY & AFTERCARE",
    title: "Microneedling Recovery & Aftercare",
    contentSections: [
      {
        subtitle: "What to Expect During Recovery",
        description: "Recovery tends to move through a few general phases. Immediately after treatment, skin typically looks and feels similar to a mild sunburn — redness, warmth, and mild sensitivity are expected and normal. In the first day or two, redness and warmth generally begin to settle, though some tightness, mild swelling, or dryness can persist."
      },
      {
        subtitle: "Safety & Side Effects",
        description: "Temporary effects are a normal, expected part of the microneedling process rather than a sign that something has gone wrong. These commonly include redness, sensitivity, mild swelling, warmth, tightness, dryness, and temporary irritation in the treated area, typically settling within a few days."
      }
    ],
    sidebar: {
      label: "AFTERCARE CHECKLIST",
      title: "Practical Steps for Post-Treatment Care",
      features: aftercareItems,
      note: "This is general guidance rather than a prescription — always follow whatever specific instructions you're given after your own session.",
      buttonText: "Book Consultation",
      buttonHref: "/book"
    }
  };

  const suitabilityTypes = {
    bgColor: "bg-white",
    cardBg: "bg-[#FAF7F2]",
    label: "SUITABILITY",
    title: "Is Microneedling Right for Your Skin?",
    description: microneedlingSuitability.introduction,
    types: [
      {
        number: "01",
        title: "Who May Consider Microneedling",
        description: "Microneedling tends to suit patients looking to target texture, scarring or surface irregularities.",
        typicalSigns: microneedlingSuitability.rightFor
      },
      {
        number: "02",
        title: "When It May Not Be Appropriate",
        description: "Situations where microneedling should be postponed, avoided or specifically evaluated by a professional.",
        typicalSigns: microneedlingSuitability.notRightFor
      }
    ],
    footer: microneedlingSuitability.footer,
    gridCols: "grid grid-cols-1 md:grid-cols-2 gap-6",
    borderPosition: "left"
  };

  const skinTypesData = {
    bgColor: "bg-[#F5F0E8]",
    cardBg: "bg-white",
    label: "SKIN TYPES",
    title: "Microneedling for Different Skin Types",
    description: microneedlingSkinTypes.description,
    types: microneedlingSkinTypes.types.map((t, idx) => ({
      number: idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`,
      title: t.name,
      description: t.notes
    })),
    gridCols: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    borderPosition: "left"
  };

  const relatedPagesData = {
    label: "EXPLORE MORE",
    title: "Related Dermatology Services",
    pages: [
      { title: "Chemical Peel in Dubai", href: "/treatments/chemical-peel-dubai", description: "A professional peel that may be considered for selected concerns involving pigmentation, uneven tone, and surface texture." },
      { title: "Skin Rejuvenation in JVC", href: "/treatments/skin-rejuvenation-jvc", description: "Personalised skin treatments designed to address overall skin quality, texture, hydration, and appearance." },
      { title: "Microdermabrasion in JVC", href: "/treatments/microdermabrasion-jvc", description: "A gentle, non-invasive exfoliation option for removing surface buildup and supporting smoother-looking skin." },
      { title: "LED Light Therapy in JVC", href: "/treatments/led-light-therapy-jvc", description: "A light-based treatment that may be incorporated into selected skincare and rejuvenation programs." },
      { title: "Oxygen Facial in JVC", href: "/treatments/oxygen-facial-jvc", description: "A refreshing facial treatment focused on supporting skin hydration and a healthier-looking glow." },
      { title: "Dermatology Clinic in JVC", href: "/dermatology-clinic-jvc", description: "Discuss your skin concerns with our dermatology team and receive treatment recommendations based on your individual needs." },

    ]
  };

  return (
    <>
      <Head>
        <title>Microneedling in JVC | Vedara Care Polyclinic</title>
        <meta name="description" content="Microneedling in JVC at Vedara Care Polyclinic — collagen induction therapy for texture, scarring and fine lines. Book an assessment-led consultation." />
        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />
        <meta property="og:title" content="Microneedling in JVC | Vedara Care Polyclinic" />
        <meta property="og:description" content="Microneedling in JVC at Vedara Care Polyclinic — collagen induction therapy for texture, scarring and fine lines." />
        <meta property="og:image" content="https://vedaracare.ae/images/microneedling-consultation-vedara-care-jvc.jpg" />
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
        {...microneedlingHero}
      />

      <AyurvedaIntro
        {...microneedlingIntro}
      />

      <SciaticaTreatment
        data={microneedlingHowItWorks}
        showBorderLeft={false}
        rightContentStyle="peelDepthAndFitzpatrick"
        bgColor="bg-[#FAF7F2]"
      />

      {/* Explanation section */}
      <ContentWithSidebar
        bgColor="bg-[#F5F0E8]"
        label={microneedlingExplanation.label}
        title={microneedlingExplanation.title}
        contentSections={[
          {
            subtitle: microneedlingExplanation.description,
            description: microneedlingExplanation.content.join("\n\n")
          }
        ]}
        sidebar={{
          image: microneedlingExplanation.image,
          altText: microneedlingExplanation.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
      />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2
            className="sc-display text-3xl md:text-4xl mb-8"
            style={{ color: INK }}
          >
            What Happens Before the Needling Starts?
          </h2>

          {/* Content */}
          <p
            className="text-[15px] leading-relaxed mb-5"
            style={{ color: STONE }}
          >
            A responsible microneedling appointment doesn't start with the device —
            it starts with a conversation.
          </p>

          <p
            className="text-[15px] leading-relaxed mb-5"
            style={{ color: STONE }}
          >
            During consultation, the treating professional will typically discuss
            your specific concerns and what you're hoping the treatment will achieve,
            take a relevant medical and cosmetic history (including any previous
            treatments, skin conditions, or medications that might affect suitability),
            assess your skin directly to judge its current condition and identify
            which areas may benefit from treatment, and talk through realistic
            expectations — including what microneedling is unlikely to change.
          </p>

          <p
            className="text-[15px] leading-relaxed"
            style={{ color: STONE }}
          >
            This step matters more than it might seem. Microneedling is not
            appropriate for every skin, every scar type, or every stage of a skin
            concern, and a proper assessment is how that gets determined rather than
            assumed. Skin preparation — such as cleansing and, where relevant,
            discussing any products to pause beforehand — is also typically covered
            at this stage.
          </p>
        </div>
      </section>


      {/* Appointment Details */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label={microneedlingAppointment.label}
        title={microneedlingAppointment.title}
        contentSections={microneedlingAppointment.steps.map(step => {
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
          image: microneedlingAppointment.image,
          altText: microneedlingAppointment.alt,
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "right"
        }}
        footer={microneedlingAppointment.footer}
      />

      {/* Sensation */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label="WHAT DOES IT FEEL LIKE?"
        title={microneedlingSensation.title}
        contentSections={[
          {
            subtitle: '',
            description: microneedlingSensation.description
          },
          {
            subtitle: '',
            description: microneedlingSensation.notes
          }
        ]}
        sidebar={{
          image: "/images/microneedling-sensation-jvc.webp",
          altText: "Microneedling Sensation",
          width: "w-full",
          height: "h-[400px]",
          borderPosition: "left"
        }}
      />

      {/* Skin Concerns — interactive tabs + depth gauge */}
      <SkinConcernsDeepDive concerns={microneedlingConcerns.concernsList} />

      {/* Concern By Concern — full detail tabs */}
      <ConcernByConcernSection />

      {/* Suitability */}
      <SciaticaTypes
        {...suitabilityTypes}
      />

      <SciaticaTypes
        {...skinTypesData}
      />

      {/* Gender specific section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 ">
        <SectionHeading eyebrow="Who It's For" title="Microneedling for men and women" />
        <div className="flex gap-2 mb-8">
          {[
            { key: "men", label: "For Men" },
            { key: "women", label: "For Women" },
          ].map((item) => {
            const isActive = audience === item.key;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setAudience(item.key)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C14",
                  borderColor: isActive ? "#1C1C14" : "#E5E1DA",
                  opacity: isActive ? 1 : 0.55,
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {audience === "men" ? (
          <div key="men" className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-4 space-y-4 text-[15px] leading-relaxed" style={{ color: COLORS.stone }}>
              <p>
                Men often come to microneedling for acne scarring left over from years earlier, general texture concerns, or early fine lines. Regular shaving is a relevant factor worth mentioning during consultation, since recently shaved or irritated skin may need a short interval before treatment, and shaving itself can be a source of ongoing minor skin stress worth discussing as part of an overall plan. Beyond these practical considerations, the treatment itself and its expected recovery aren't fundamentally different based on gender — suitability still comes down to the individual skin being assessed.
              </p>
            </div>
          </div>
        ) : (
          <div key="women" className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-4 space-y-4 text-[15px] leading-relaxed" style={{ color: COLORS.stone }}>
              <p>
                For many women, microneedling comes up in the context of acne scarring, texture concerns, fine lines, or a broader interest in skin rejuvenation, often alongside an established skincare routine. Treatment goals vary considerably from patient to patient, and there isn't a strong basis for making specific hormonal claims about how microneedling performs differently across women, so this section focuses on the practical concerns patients most often raise rather than speculative physiological claims.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Results & Spacing Details */}
      <section className="py-16" style={{ backgroundColor: COLORS.sage }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Results" title="Patience and progressive results" />
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="rounded-2xl p-7" style={{ backgroundColor: COLORS.card }}>
              <IconBadge Icon={Gauge} />
              <h4 className="text-lg font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Results — Why Patience Matters</h4>
              <p className="text-[14.5px] leading-relaxed mb-3" style={{ color: COLORS.stone }}>
                Microneedling results are not primarily an immediate surface effect. Because the treatment relies on the skin's own repair and remodelling process, the visible outcome tends to develop progressively over time rather than appearing right away.
              </p>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
                In the very early period after treatment, your skin is more likely to look red, slightly swollen, or simply \"treated\" rather than improved — that's the expected appearance immediately afterward, not a preview of the final result.
              </p>
            </div>
            <div className="rounded-2xl p-7" style={{ backgroundColor: COLORS.card }}>
              <IconBadge Icon={CalendarClock} />
              <h4 className="text-lg font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>When Can You Expect to See Results?</h4>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
                There's no single, universal timeline that applies to every patient. Rather than promising a specific number of days or weeks, the more honest approach is this: initial changes are often noticed at some point in the weeks following treatment, with continued, gradual improvement over the following months as the skin's remodelling process continues — particularly across a course of sessions rather than a single one.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-7" style={{ backgroundColor: COLORS.card }}>
              <IconBadge Icon={ClipboardList} />
              <h4 className="text-lg font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>How Many Sessions May Be Needed?</h4>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
                There's no universal number of sessions that applies to everyone. The number that may be recommended depends on factors including the severity of the concern being addressed (acne scarring, for instance, often needs more sessions than general texture refinement), your skin's texture and condition, your specific treatment goals, and how your skin responds to initial sessions.
              </p>
            </div>
            <div className="rounded-2xl p-7" style={{ backgroundColor: COLORS.card }}>
              <IconBadge Icon={Repeat} />
              <h4 className="text-lg font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>How Long Should Sessions Be Spaced?</h4>
              <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
                Spacing between sessions exists for a real reason: the skin needs adequate time to complete its repair and remodelling process before it's reasonably needled again. Spacing is generally reviewed and adjusted based on treatment intensity, recovery, and your overall treatment plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery / Aftercare / Safety */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionHeading
          eyebrow="Recovery, Aftercare & Safety"
          title="What to expect once you leave"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Recovery Timeline */}
          <div className="md:col-span-1 rounded-2xl p-6" style={{ backgroundColor: COLORS.sage }}>
            <IconBadge Icon={Droplets} />
            <h4 className="text-lg font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
              Recovery Timeline
            </h4>
            <p className="text-[14px] leading-relaxed mb-3" style={{ color: COLORS.stone }}>
              Immediately after treatment, skin typically looks and feels similar to a mild sunburn — redness, warmth, and mild sensitivity are expected.
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: COLORS.stone }}>
              Over the following day or two, redness and warmth generally begin to settle, though some tightness, mild swelling, or dryness can persist. Peeling or dryness may or may not occur.
            </p>
          </div>

          {/* Aftercare */}
          <div className="md:col-span-1 rounded-2xl p-6" style={{ backgroundColor: COLORS.sage }}>
            <IconBadge Icon={SprayCan} />
            <h4 className="text-lg font-serif mt-4 mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
              Aftercare & Avoid list
            </h4>
            <p className="text-[13px] mb-4" style={{ color: COLORS.stone }}>
              Avoid excessive sun exposure, aggressive exfoliation (scrubs, additional peels or devices), picking at the skin as it heals, harsh active skincare ingredients immediately after treatment, unnecessary heat exposure (saunas or hot showers), and heavy sweating or swimming.
            </p>
            <ul className="space-y-2.5">
              {aftercareItems.slice(0, 4).map((a) => (
                <li key={a} className="flex gap-2.5 text-[13px] leading-snug" style={{ color: COLORS.ink }}>
                  <Check size={15} color="#1C1C14" className="shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Side Effects & Risks */}
          <div className="md:col-span-1 rounded-2xl p-6" style={{ backgroundColor: COLORS.sage }}>
            <IconBadge Icon={ShieldAlert} />
            <h4 className="text-lg font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
              Side Effects & Risks
            </h4>
            <p className="text-[14px] leading-relaxed mb-3" style={{ color: COLORS.stone }}>
              Temporary effects include redness, sensitivity, mild swelling, warmth, tightness, and dryness.
            </p>
            <p className="text-[14px] leading-relaxed" style={{ color: COLORS.stone }}>
              Improperly performed treatment, inappropriate settings, or poor aftercare can increase the risk of complications or post-inflammatory hyperpigmentation (PIH). Professional assessment and diligent sun protection are essential to manage these considerations.
            </p>
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

      {/* Before/After + Cost */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-7" style={{ border: `1px solid ${COLORS.line}` }}>
          <IconBadge Icon={ImageIcon} />
          <h3 className="text-xl font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Microneedling Before and After</h3>
          <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
            If a clinic shares before-and-after photography, there are some basic standards worth expecting. Photos should be taken under consistent lighting and from a consistent camera angle, so that any visible change reflects the treatment rather than differences in photography. They should be genuine, unedited patient photographs, taken with informed consent, and presented alongside an honest account of the time elapsed between the two images.
          </p>
        </div>
        <div className="rounded-2xl p-7" style={{ border: `1px solid ${COLORS.line}` }}>
          <IconBadge Icon={Wallet} />
          <h3 className="text-xl font-serif mt-4 mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Microneedling Cost in JVC</h3>
          <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
            Pricing for microneedling depends on several factors: the treatment area involved, the specific protocol used, the nature and severity of the skin concern being addressed, the number of sessions likely to be recommended, whether any additional treatments are combined with it, and your individual requirements as assessed during consultation.
          </p>
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
          <div className="rounded-2xl p-7 h-fit" style={{ backgroundColor: COLORS.rustBg, border: `1px solid ${COLORS.rustLine}` }}>
            <IconBadge Icon={AlertTriangle} tone="rust" />
            <h3 className="text-xl font-serif mt-4 mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Red Flags</h3>
            <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.ink }}>
              Be cautious of any provider who guarantees specific results before assessing your skin, promises "permanent" removal of acne scars, offers to treat you with no consultation at all, is unclear or evasive about practitioner qualifications, shows visibly poor hygiene practices, uses unclear or unbranded equipment without explanation, presents before-and-after images that look edited or staged, pressures you toward large package purchases, or doesn't discuss risks or aftercare at all.
            </p>
          </div>
        </div>
      </section>

      {/* Why local + At Vedara Care */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <IconBadge Icon={Compass} />
          <h3 className="text-xl font-serif mt-4 mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Why Convenience Matters for JVC Patients</h3>
          <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
            For people living or working in Jumeirah Village Circle, having access to microneedling within the same community avoids the friction of scheduling appointments across the city — particularly relevant given that microneedling is often delivered as a course of sessions rather than a single visit. The same convenience applies to patients based in nearby Al Barsha South, Jumeirah Village Triangle, Dubai Sports City, Motor City, and other neighboring communities.
          </p>
        </div>
        <div>
          <IconBadge Icon={Users2} />
          <h3 className="text-xl font-serif mt-4 mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>Microneedling at Vedara Care Polyclinic</h3>
          <p className="text-[14.5px] leading-relaxed mb-3" style={{ color: COLORS.stone }}>
            Vedara Care Polyclinic operates from Jumeirah Village Circle as a professional healthcare setting offering skin treatment services, including microneedling, alongside broader dermatology care. Every microneedling consultation begins with an individual skin assessment and a patient-focused conversation about your goals.
          </p>
          <p className="text-[14.5px] leading-relaxed" style={{ color: COLORS.stone }}>
            For concerns that extend beyond what microneedling alone can address, our team can also discuss the wider range of options available through our dermatology clinic in JVC and skin clinic in JVC services, including our dedicated page on microdermabrasion for patients whose concerns are more surface-level than structural.
          </p>
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

      {/* Treatment Description Footer */}
      <section className="py-16" style={{ backgroundColor: COLORS.sage }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>Microneedling in Jumeirah Village Circle, Dubai</Eyebrow>
          <h2 className="text-2xl md:text-3xl mb-5 leading-tight font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif', color: INK }}>
            An assessment-led approach to collagen induction
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: COLORS.stone }}>
            Microneedling at Vedara Care brings a considered, assessment-led approach to collagen induction therapy for patients across Jumeirah Village Circle and the wider Dubai area. For patients whose concerns genuinely fit what this treatment can offer — texture, certain types of scarring, gradual rejuvenation — it's one option worth discussing during a proper consultation, delivered within a professional healthcare setting in JVC rather than a purely aesthetic one.
          </p>
        </div>
      </section>

      <ContentWithSidebar
        {...aftercareSection}
      />

      <TreatmentLocation
        title="Where Microneedling happens at Vedara Care JVC."
        address={microneedlingLocation.address}
      />

      <FAQ
        {...microneedlingFAQ}
      />

      <FinalCTA
        {...microneedlingCTA}
      />

      <RelatedPages
        {...relatedPagesData}
      />
    </>
  );
};

export default MicroneedlingTreatment;
