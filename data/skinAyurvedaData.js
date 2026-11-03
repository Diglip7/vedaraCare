// data/skinAyurvedaData.js (replace the whole file)
export const skinHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Skin Conditions (Ayurveda)", active: true }
  ],
  label: "AYURVEDA FOR SKIN · JVC, DUBAI · DHA FACILITY LICENCE 2509266",
  title: "Ayurvedic treatment for skin diseases in JVC, Dubai — eczema, psoriasis, acne, pigmentation and more.",
  description: "Ayurveda treats skin from the inside and outside: diet and digestion, Panchakarma, leech therapy where suitable, prescribed herbs and external applications, planned by Dr. Zainab Sheikh (BAMS, MD Ayurveda) at our clinic near Circle Mall, JVC.",
  primaryCTA: "Book a skin consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20skin%20treatment.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Panchakarma and leech therapy", "Near Circle Mall, JVC"],
  floatingCard: { title: "INSIDE AND OUTSIDE", subtitle: "Skin treated through digestion, diet and herbs as well as what goes on the skin." },
  image: "/images/skin-ayurveda-dubai-hero.webp",
  alt: "Ayurvedic skin consultation at Vedara Care, JVC Dubai"
};

export const skinIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurveda for skin, in one paragraph.",
  blockquote: "Ayurvedic treatment for skin diseases treats the skin from the inside and the outside: in Ayurveda, chronic conditions such as eczema, psoriasis, acne, pigmentation, hives and vitiligo are linked to digestion, diet, stress and 'blood' (Rakta). A plan usually combines diet changes, prescribed herbs such as Manjistha or Neem, external pastes and oils, and for long-standing conditions Panchakarma (often Virechana) or Raktamokshana, including leech therapy. Research is mostly small studies and case reports, so results vary and we do not promise a set outcome, and you should not stop prescribed skin medicines on your own. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, care starts with a 45 to 60 minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and therapies are given by a same-gender therapist. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const skinMechanism = {                             // rendered with TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "HOW AYURVEDA SEES SKIN",
  title: "Why Ayurveda treats skin from the inside.",
  content: [
    "Ayurveda groups most chronic skin diseases as Kushtha and links them to Pitta and Kapha, weak digestion (Agni) and impure 'blood' (Rakta). That is why treatment starts with diet and digestion, not only with what goes on the skin.",
    "Long-standing conditions often need cleansing (Shodhana) such as Virechana or Raktamokshana, followed by calming medicines (Shamana) and external applications. Stress and sleep are part of the plan, because they often trigger flares.",
    "What does the research say? Studies are small: open trials and case reports in psoriasis, for example, report improvement with Vamana, Virechana, herbs and a strict diet. We use this to set realistic expectations, not to promise results."
  ],
  sources: "Sources: <a href='https://www.wisdomlib.org/uploads/journals/ayu/volume-33-2-2012-apr-jun/AYU-33-224.pdf' target='_blank' rel='noopener'>Shodhana and Shamana in psoriasis, open trial (AYU 2012)</a> · <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC11994298/' target='_blank' rel='noopener'>Ayurvedic management of psoriasis, case report (PMC 2025)</a>",
  image: "/images/psoriasis-immune-pathway-illustration.webp",
  alt: "Illustration of how chronic skin inflammation develops"
};

export const skinConditions = {                            // rendered with TreatmentOils
  label: "SKIN CONDITIONS WE TREAT",
  title: "Ayurvedic treatment for your skin condition.",
  description: "Each condition has its own plan; Dr. Zainab confirms it at the consultation.",
  oils: [
    { name: "Eczema (Vicharchika)", description: "Itchy, dry, inflamed skin", content: "Diet, calming herbs, soothing oils and pastes; Panchakarma for long-standing eczema.", indication: "itch, flares, sleep" },
    { name: "Psoriasis (Ekakushtha / Kitibha)", description: "Scaly plaques, including scalp", content: "Virechana, herbs, strict diet, Takradhara for the scalp.", indication: "plaques, scaling, scalp" },
    { name: "Acne (Yuvana Pidaka)", description: "Spots and breakouts", content: "Diet, cooling herbs, face packs (Mukha lepa); hormonal factors considered.", indication: "breakouts, oily skin" },
    { name: "Pigmentation and melasma (Vyanga)", description: "Dark patches, including postpartum melasma", content: "Internal herbs, face packs, sun protection advice. If linked to childbirth, see <a href='/conditions/postnatal-ayurveda-dubai/'>postnatal care</a>.", indication: "uneven tone, melasma" },
    { name: "Urticaria / hives (Sheetapitta)", description: "Itchy welts", content: "Diet, trigger avoidance, calming herbs.", indication: "recurring hives" },
    { name: "Vitiligo (Shvitra)", description: "Loss of skin colour", content: "Long-term herbal plan with careful sun exposure advice.", indication: "white patches" },
    { name: "Rosacea", description: "Facial redness and flushing", content: "Cooling diet and herbs, gentle external care.", indication: "redness, flushing" },
    { name: "Dandruff and seborrhoeic dermatitis", description: "Scalp flaking and itching", content: "Medicated oils, Takradhara, diet.", indication: "flaky, itchy scalp" },
    { name: "Chronic itching and very dry skin", description: "Persistent itch", content: "Oils, diet and herbs after checking for a medical cause.", indication: "dryness, itch" }
  ],
  footer: "Hair fall has its own page: <a href='/conditions/hair-loss-ayurveda-dubai/'>Ayurveda for hair loss</a>."
};

export const skinTherapies = {                             // rendered with TreatmentOils
  label: "HOW WE TREAT SKIN",
  title: "The Ayurvedic treatments in a skin plan.",
  description: "Chosen for your condition and reviewed as you go.",
  oils: [
    { name: "<a href='/treatments/panchakarma-dubai/'>Panchakarma</a>", description: "Vamana or Virechana", content: "Classical cleansing for long-standing eczema, psoriasis and acne.", indication: "chronic conditions" },
    { name: "Leech therapy (Jalaukavacharana)", description: "A form of Raktamokshana", content: "Medical-grade, single-use leeches applied briefly to selected patches, with strict hygiene.", indication: "stubborn localised patches, after assessment" },
    { name: "Prescribed herbs", description: "Bought at a pharmacy", content: "For example Manjistha, Neem, Guduchi or Khadira, checked against your other medicines.", indication: "most plans" },
    { name: "External applications", description: "Lepa, oils, Takradhara", content: "Herbal pastes, medicated oils, and Takradhara (medicated buttermilk) for the scalp.", indication: "local symptoms" },
    { name: "Diet and routine", description: "Every plan", content: "Foods that commonly trigger your condition, regular meals, sleep and stress care.", indication: "every plan" }
  ],
  footer: "Therapies are given by a same-gender therapist in a private room."
};

export const skinBoundaries = {                            // rendered with ClinicalBoundaries
  label: "SAFETY",
  title: "When to see a doctor first, and safety notes.",
  leftCard: {
    label: "SEE A DOCTOR PROMPTLY",
    title: "Get medical care first for:",
    useWarningIcon: true,
    items: ["A changing, bleeding or new unusual mole", "A fast-spreading, painful rash or skin infection with fever", "Swelling of the lips, face or throat, or difficulty breathing (call 999)", "Widespread blistering or peeling skin"]
  },
  rightCard: {
    label: "SAFETY NOTES",
    title: "Good to know:",
    items: [
      { text: "Do not stop prescribed skin medicines on your own", icon: "check" },
      { text: "Leech therapy is not used with bleeding problems, blood thinners, anaemia or pregnancy", icon: "check" },
      { text: "Some herbs (e.g. Bakuchi) make skin sensitive to sun", icon: "check" },
      { text: "All herbs are checked against your other medicines", icon: "check" }
    ]
  },
  footer: ""
};

export const skinProtocol = {                              // rendered with TreatmentProtocol
  label: "HOW IT WORKS",
  title: "Your skin plan, step by step.",
  description: "",
  phases: [
    { time: "Step 1", title: "Consultation", content: "A 45-60 minute consultation with Dr. Zainab: your skin history, triggers, diet, medicines and photos of past flares." },
    { time: "Step 2", title: "Your plan", content: "Diet, herbs, external applications and any therapies, written down for you." },
    { time: "Step 3", title: "Treatment", content: "Panchakarma or leech therapy if needed, with regular reviews." },
    { time: "Step 4", title: "Review", content: "Progress photos and adjustments; plan length depends on the condition." }
  ],
  footer: ""
};

export const skinFaqs = {
  bgColor: "bg-[#FFFFFF]",
  label: "SKIN QUESTIONS",
  sidebarLinks: [
    { text: "Panchakarma", href: "/treatments/panchakarma-dubai/" },
    { text: "Ayurveda for hair loss", href: "/conditions/hair-loss-ayurveda-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Ayurveda for skin: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20skin%20treatment.",
  faqs: [
    {
      question: "Can Ayurveda treat skin diseases?",
      answer: "Ayurveda can help many chronic skin conditions — eczema, psoriasis, acne, pigmentation, hives and others — by treating digestion, diet, stress and the skin together, with Panchakarma, herbs and external applications. Results vary and take time, and research is mostly small studies, so we do not promise a set result."
    },
    {
      question: "Where can I get Ayurvedic skin treatment in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. Open daily 9am to 10pm, close to JVT, Al Barsha South and Arjan."
    },
    {
      question: "Which skin conditions do you treat with Ayurveda?",
      answer: "Eczema, psoriasis (including scalp psoriasis), acne, pigmentation and melasma, urticaria (hives), vitiligo, rosacea, dandruff and seborrhoeic dermatitis, and chronic itching or very dry skin."
    },
    {
      question: "What is the Ayurvedic treatment for psoriasis?",
      answer: "Usually Panchakarma (often Virechana), sometimes Raktamokshana, prescribed herbs, a strict diet and external applications such as Takradhara for scalp psoriasis. Small studies and case reports are promising, but psoriasis is long-term and needs regular follow-up."
    },
    {
      question: "What is the Ayurvedic treatment for eczema?",
      answer: "Calming the itch and the skin barrier with diet changes, herbs, external pastes and oils, and Panchakarma for long-standing eczema. Stress and sleep are part of the plan."
    },
    {
      question: "What is leech therapy, and is it safe?",
      answer: "Leech therapy (Jalaukavacharana) is a form of Raktamokshana in which medical-grade leeches are applied to an area of skin for a short time. At Vedara Care it is used only after assessment, with single-use leeches and strict hygiene; it is not used if you bleed easily, take blood thinners, are anaemic or pregnant."
    },
    {
      question: "What is Manjistha?",
      answer: "Manjistha (Indian madder) is a classical Ayurvedic herb traditionally used for skin conditions and 'blood purification'. It is prescribed by the doctor when suitable and checked against your other medicines; Vedara does not sell it."
    },
    {
      question: "Can I stop my steroid cream or skin medicine?",
      answer: "Do not stop or change prescribed skin medicines on your own. Stopping strong steroid creams suddenly can cause a flare; discuss any change with the doctor who prescribed them."
    },
    {
      question: "How long does Ayurvedic skin treatment take?",
      answer: "It depends on the condition and how long you have had it. Acne may improve within weeks; psoriasis, vitiligo and long-standing eczema usually need months and regular reviews."
    },
    {
      question: "Is Ayurvedic skin treatment safe?",
      answer: "When prescribed by a qualified doctor, yes in most cases. Some herbs need care — for example Bakuchi can make skin sensitive to sun — and all herbs are checked against your other medicines."
    },
    {
      question: "When should I see a doctor instead?",
      answer: "See a doctor promptly for a changing or bleeding mole, a fast-spreading or painful rash, skin infection with fever, swelling of the lips or face, or difficulty breathing (call 999)."
    },
    {
      question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist, in a private room."
    },
    {
      question: "How much does Ayurvedic skin treatment cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500 and a therapy session around AED 250 to 700; herbs are bought separately. The total depends on your plan. Vedara Care shares exact prices on WhatsApp."
    },
    {
      question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring photos of flares and a list of your skin medicines."
    }
  ]
};

export const skinLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Ayurvedic skin care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Ayurvedic skin treatment at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a skin consultation",
  buttonHref: "/book/"
};

export const skinCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation and your skin history.",
  description: "In 45 to 60 minutes, Dr. Zainab will look at your skin, your triggers and your medicines, and plan Ayurvedic treatment for your condition.",
  button1Text: "Book a skin consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20skin%20treatment.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapist", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const skinRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Panchakarma", description: "Classical cleansing for chronic skin conditions.", href: "/treatments/panchakarma-dubai/" },
    { title: "Ayurveda for hair loss", description: "Scalp and hair-fall care.", href: "/conditions/hair-loss-ayurveda-dubai/" },
    { title: "Ayurveda for PCOS", description: "When acne is hormonal.", href: "/conditions/pcos-ayurveda-dubai/" },
    { title: "Ayurveda for stress", description: "When stress triggers flares.", href: "/conditions/stress-anxiety-ayurveda-dubai/" }
  ]
};
