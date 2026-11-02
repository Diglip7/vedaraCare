// data/udvartanaJvcData.js
export const udvartanaHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Udvartana in JVC", active: true }
  ],
  label: "UDVARTANA · UDWARTHANAM · JVC, DUBAI",
  title: "Udvartana (Udwarthanam) in JVC, Dubai — Ayurvedic herbal powder massage, prescribed by a doctor.",
  description: "Udvartana is a firm, upward massage with warm herbal powders, traditionally used for heaviness, sluggish metabolism and as support in weight management. At Vedara Care near Circle Mall, JVC, Dr. Zainab Sheikh (BAMS, MD Ayurveda) chooses dry or oil-based Udvartana and the powder, and same-gender therapists give the treatment.",
  primaryCTA: "Book an Udvartana consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Udvartana.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Dry and oil-based Udvartana", "Same-gender therapists"],
  floatingCard: { title: "STIMULATING, NOT SOOTHING", subtitle: "Firm upward strokes with warm herbal powder — the opposite of a relaxing oil massage." },
  image: "/images/udvartana-herbal-powder-massage-vedara-jvc.webp",   // replace with a real photo, same name
  alt: "Udvartana herbal powder massage at Vedara Care Ayurveda clinic, JVC Dubai"
};

export const udvartanaIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Udvartana, in one paragraph.",
  blockquote: "Udvartana, also written Udwarthanam, is a classical Ayurvedic massage in which warm herbal powders are rubbed firmly upwards over the body, against the direction of hair growth. It comes in two forms: Rukshana (dry powder), the classical choice for heaviness and weight management, and Snigdha (powder mixed with oil), which is gentler on dry or sensitive skin. It is traditionally used for heaviness, sluggish metabolism and as support in weight management alongside diet and activity — it does not burn fat on its own. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, Udvartana starts with a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), who chooses the form and powder, and same-gender therapists give the treatment. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const udvartanaMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "WHAT UDVARTANA IS",
  title: "Why Udvartana is done with powder, upwards.",
  content: [
    "In Ayurveda, heaviness, excess weight and sluggish circulation are linked to Kapha. Dry, warming powders and brisk upward strokes are the classical way to counter it — the opposite of an oil massage, which nourishes.",
    "Udvartana is often part of a wider plan with diet, activity, other therapies such as <a href='/treatments/abhyanga-dubai/'>Abhyanga</a>, and sometimes <a href='/treatments/panchakarma-dubai/'>Panchakarma</a>.",
    "What does the research say? There is very little published research on Udvartana. We present it as support for weight management and well-being, not as a weight-loss treatment by itself."
  ],
  image: "/images/udvartana-rukshana.webp",
  alt: "Herbal powder used for Udvartana at Vedara Care, JVC Dubai"
};

export const udvartanaTypes = {                            // rendered with TreatmentOils
  label: "TYPES OF UDVARTANA",
  title: "Dry or oil-based: two kinds of Udvartana.",
  description: "The doctor chooses the form and the powder for your skin and goal.",
  oils: [
    { name: "Rukshana Udvartana", description: "Dry powder", content: "Warm dry herbal powder with firm upward strokes. The classical form.", indication: "heaviness, sluggish metabolism, weight-management support" },
    { name: "Snigdha Udvartana", description: "Powder with oil", content: "Herbal powder mixed with medicated oil; gentler on the skin.", indication: "drier or more sensitive skin, older patients" }
  ],
  footer: "Common powders include Kolakulathadi Churna and Triphala Churna; the doctor decides which suits you."
};

export const udvartanaProtocol = {
  label: "WHAT HAPPENS",
  title: "What happens at an Udvartana session.",
  description: "Every session follows the same steps; the form, powder and course are set by your doctor.",
  phases: [
    { time: "Step 1", title: "Consultation", content: "Your first visit is a 45-60 minute <a href="/treatments/nadi-pareeksha-jvc/" class="text-[#C9A961] hover:underline">consultation</a> with Dr. Zainab: your health, skin, weight goals and medicines are checked, and she decides whether Udvartana suits you." },
    { time: "Step 2", title: "The massage", content: "A same-gender therapist rubs the warm powder firmly upwards over the body, area by area." },
    { time: "Step 3", title: "Steam (if prescribed)", content: "Some plans add medicated steam (Swedana) afterwards." },
    { time: "Step 4", title: "Shower and advice", content: "You shower to remove the powder and receive diet and activity advice." }
  ],
  footer: "Session length and the number of sessions depend on your plan."
};

export const udvartanaApplications = {
  label: "WHAT UDVARTANA IS USED FOR",
  title: "When Udvartana may help.",
  description: "The doctor checks your health first; weight gain can have medical causes that need other care.",
  whereItExcels: [
    { title: "Support in weight management", subtitle: "With diet and activity", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { title: "Heaviness and low energy", subtitle: "Often in a short course", href: "/treatments/udvartana-jvc/#types" },
    { title: "Sluggish circulation", subtitle: "Brisk upward strokes", href: "/treatments/udvartana-jvc/#types" },
    { title: "Within a wider Ayurvedic plan", subtitle: "With Abhyanga or Panchakarma", href: "/treatments/panchakarma-dubai/" },
    { title: "Metabolic health support", subtitle: "Alongside your doctor (e.g. diabetes, thyroid)", href: "/conditions/diabetes-ayurveda-dubai/" }
  ]
};

export const udvartanaSafety = {
  label: "SAFETY",
  title: "Who should not have Udvartana, and possible side effects.",
  leftCard: {
    label: "NOT SUITABLE (OR NEEDS CLEARANCE FIRST)",
    title: "Your doctor will postpone or change Udvartana if you have:",
    useWarningIcon: true,
    items: [
      "Broken, infected or very sensitive skin",
      "A rash, eczema or psoriasis flare",
      "Fever or acute illness",
      "Pregnancy",
      "Recent surgery",
      "Very low body weight"
    ]
  },
  rightCard: {
    label: "POSSIBLE SIDE EFFECTS",
    title: "Usually mild and short-lived:",
    items: [
      { text: "Skin redness or warmth", icon: "check" },
      { text: "Dry skin (Snigdha Udvartana is gentler)", icon: "check" },
      { text: "Mild soreness after the first sessions", icon: "check" },
      { text: "Rarely, skin irritation from the powder (tell the therapist)", icon: "check" }
    ]
  },
  footer: "Tell the doctor about any skin condition and all medicines you take before your first session."
};

export const udvartanaFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "UDVARTANA QUESTIONS",
  sidebarLinks: [
    { text: "Ayurveda for weight loss", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { text: "Abhyanga", href: "/treatments/abhyanga-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Udvartana: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Udvartana.",
  faqs: [
    {
      question: "What is Udvartana?",
      answer: "Udvartana (also written Udwarthanam) is a classical Ayurvedic massage with warm herbal powders, rubbed upwards against the direction of hair growth with firm strokes. It is traditionally used for heaviness, sluggish metabolism and as support in weight management."
    },
    {
      question: "Where can I get Udvartana in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall. Udvartana is prescribed by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor, and the clinic is open daily 9am to 10pm. It is close to JVT, Al Barsha South and Arjan."
    },
    {
      question: "Does Udvartana help with weight loss?",
      answer: "Udvartana can support weight management alongside diet, activity and other treatment, but it does not burn fat on its own and we do not promise kilograms or inches lost. The doctor will set realistic goals at consultation."
    },
    {
      question: "What are the types of Udvartana?",
      answer: "Rukshana (dry) Udvartana uses dry herbal powder and is the classical form for heaviness and weight management. Snigdha Udvartana mixes the powder with oil and is gentler, for drier or more sensitive skin. Both are available at Vedara Care."
    },
    {
      question: "Which powders are used for Udvartana?",
      answer: "The doctor chooses the powder for you. Common classical choices include Kolakulathadi Churna and Triphala Churna."
    },
    {
      question: "What does Udvartana feel like?",
      answer: "Firm and brisk. The dry powder creates friction and warmth; most people find it invigorating rather than relaxing, and the skin feels smooth afterwards."
    },
    {
      question: "How many Udvartana sessions do I need?",
      answer: "It depends on your needs. It is usually given as a course over several weeks, often with diet changes and other therapies; the doctor sets your plan after consultation."
    },
    {
      question: "What is the difference between Udvartana and Abhyanga?",
      answer: "Abhyanga is a warm oil massage, nourishing and calming. Udvartana uses dry or oil-mixed herbal powder with firm upward strokes, and is stimulating and drying."
    },
    {
      question: "Who should not have Udvartana?",
      answer: "It is postponed or changed with broken, infected or very sensitive skin, a rash or eczema flare, fever, pregnancy, or soon after surgery. The doctor checks this at consultation."
    },
    {
      question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by male therapists and women by female therapists."
    },
    {
      question: "How much does Udvartana cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic therapy session such as Udvartana commonly costs around AED 250 to 700, depending on the clinic and session length. The total depends on how many sessions you need. Vedara Care shares exact prices on WhatsApp."
    },
    {
      question: "How do I book Udvartana in JVC?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Your first visit is a 45 to 60-minute consultation with Dr. Zainab."
    }
  ]
};

export const udvartanaLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Udvartana in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Udvartana at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book an Udvartana consultation",
  buttonHref: "/book/"
};

export const udvartanaFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation. The right plan follows from it.",
  description: "In 45 to 60 minutes, Dr. Zainab will check whether Udvartana suits you, dry or oil-based, and how it fits with diet and activity.",
  button1Text: "Book an Udvartana consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Udvartana.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapists", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const udvartanaRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Ayurveda for weight loss", description: "The full plan for weight management.", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { title: "Abhyanga", description: "Warm oil massage, the nourishing opposite of Udvartana.", href: "/treatments/abhyanga-dubai/" },
    { title: "Ayurvedic massage", description: "Compare all Ayurvedic massages in JVC.", href: "/treatments/ayurvedic-massage-jvc/" },
    { title: "Basti", description: "Classical Ayurvedic enema therapy.", href: "/treatments/basti-jvc/" },
    { title: "Panchakarma", description: "The full five-action programme.", href: "/treatments/panchakarma-dubai/" }
  ]
};

