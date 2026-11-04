// data/sciaticaAyurvedaJvcData.js (replace the whole file)
export const sciaticaHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Sciatica (Ayurveda) in JVC", active: true }
  ],
  label: "AYURVEDIC TREATMENT FOR SCIATICA · GRIDHRASI · JVC, DUBAI",
  title: "Ayurvedic treatment for sciatica (Gridhrasi) in JVC, Dubai — with physiotherapy at the same clinic.",
  description: "Sciatica is pain that runs from the lower back down one leg. At Vedara Care near Circle Mall, JVC, Dr. Zainab Sheikh (BAMS, MD Ayurveda) checks the cause, screens for warning signs, and plans Kati Vasti, Basti, herbal bundles, Agnikarma and herbs — combined with physiotherapy when that helps more.",
  primaryCTA: "Book a sciatica consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20treatment%20for%20sciatica.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Ayurveda + physiotherapy, one clinic", "Near Circle Mall, JVC"],
  floatingCard: { title: "WARNING SIGNS FIRST", subtitle: "Every plan starts by ruling out problems that need a hospital or surgeon." },
  image: "/images/sciatica-ayurveda-jvc-hero.webp",
  alt: "Ayurvedic treatment for sciatica at Vedara Care, JVC Dubai"
};

export const sciaticaIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurvedic treatment for sciatica, in one paragraph.",
  blockquote: "Sciatica is pain, tingling or numbness that runs from the lower back or buttock down one leg, usually from an irritated sciatic nerve root, for example from a disc bulge; in Ayurveda it is called Gridhrasi and is treated as a Vata disorder. Ayurvedic treatment usually combines Kati Vasti (warm oil held on the lower back), Basti (medicated enema), herbal bundles (Elakizhi), oil massage with steam, Agnikarma (controlled therapeutic heat) and prescribed herbs, and often works best alongside physiotherapy. It is not a substitute for urgent care: loss of bladder or bowel control, groin numbness or weakness in both legs needs a hospital straight away. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, treatment starts with a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and Ayurveda and physiotherapy can be planned together at the same clinic. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const sciaticaMechanism = {                           // rendered with TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "UNDERSTANDING SCIATICA",
  title: "What sciatica is, and how Ayurveda sees it.",
  content: [
    "The sciatic nerve runs from the lower back through the buttock and down each leg. When one of its roots is irritated — most often by a bulging disc, narrowing in the spine or a tight piriformis muscle — pain, tingling or numbness travels down the leg.",
    "Ayurveda calls this Gridhrasi ('vulture-like', after the stiff walk it causes) and links it to aggravated Vata. Treatment aims to calm Vata with warmth, oil and Basti, reduce stiffness and support the nerve to heal, while physiotherapy restores movement and strength.",
    "What does the research say? In an open study of 30 people with sciatica, a protocol of an oral Ayurvedic preparation with Kati Basti and Patra Pinda Sweda showed promising improvement in symptoms and function, with no serious side effects. It was small and uncontrolled, so we set realistic expectations."
  ],
  sources: "Source: <a href='https://www.msjonline.org/index.php/ijrms/article/view/16432' target='_blank' rel='noopener'>Ayurvedic protocol in Gridhrasi (sciatica), open-label study of 30 patients (IJRMS)</a>",
  image: "/images/lumbar-spine-sciatica-anatomy-illustration.webp",
  alt: "Illustration of the lumbar spine and sciatic nerve"
};

export const sciaticaRedFlags = {                           // rendered with ClinicalBoundaries
  label: "WARNING SIGNS",
  title: "When sciatica needs a hospital or a surgeon first.",
  leftCard: {
    label: "GO TO HOSPITAL NOW",
    title: "Emergency signs:",
    useWarningIcon: true,
    items: ["Loss of bladder or bowel control", "Numbness around the groin, genitals or buttocks", "Weakness or numbness in both legs"]
  },
  rightCard: {
    label: "SEE A DOCTOR SOON",
    title: "Get checked before Ayurvedic treatment if you have:",
    items: [
      { text: "One leg getting weaker, or foot drop", icon: "check" },
      { text: "Pain after a fall or accident", icon: "check" },
      { text: "Fever, unexplained weight loss or a history of cancer", icon: "check" },
      { text: "Severe pain at night that does not ease with rest", icon: "check" }
    ]
  },
  footer: "Vedara Care does not do MRI or surgery. Dr. Zainab will refer you for imaging or a surgeon's opinion when needed."
};

export const sciaticaTherapies = {                          // rendered with TreatmentOils
  label: "HOW AYURVEDA TREATS SCIATICA",
  title: "The therapies in an Ayurvedic sciatica plan.",
  description: "The doctor chooses which you need, based on the cause and how long you have had it.",
  oils: [
    { name: "<a href='/treatments/kativasti-dubai/'>Kati Vasti</a>", description: "Warm oil on the lower back", content: "Medicated oil held over the lower spine inside a dough ring.", indication: "lower back pain and stiffness" },
    { name: "<a href='/treatments/basti-jvc/'>Basti</a>", description: "Medicated enema", content: "Matra, Yoga or Kala Basti — the classical main treatment for Vata disorders.", indication: "long-standing sciatica, disc-related pain" },
    { name: "<a href='/treatments/patra-pinda-sweda-jvc/'>Elakizhi</a>", description: "Herbal bundles", content: "Warm leaf bundles pressed over the back, buttock and leg.", indication: "muscle spasm, stiffness" },
    { name: "<a href='/treatments/abhyanga-dubai/'>Abhyanga</a> with steam", description: "Oil massage and Swedana", content: "Prepares the body and eases tension.", indication: "general stiffness" },
    { name: "Agnikarma", description: "Controlled therapeutic heat", content: "A heated metal instrument applied briefly to specific points on the back or leg.", indication: "localised, persistent pain" },
    { name: "Prescribed herbs", description: "Taken at home", content: "Classical preparations for nerve pain and Vata, bought at a licensed pharmacy.", indication: "supporting the therapies" }
  ],
  footer: "Some people need <a href='/treatments/panchakarma-dubai/'>Panchakarma</a>. Sessions are given by a same-gender therapist."
};

export const sciaticaProtocol = {                           // rendered with TreatmentProtocol
  label: "YOUR PLAN",
  title: "How Ayurvedic sciatica treatment works at Vedara.",
  description: "",
  phases: [
    { time: "Step 1", title: "Consultation and screening", content: "A 45-60 minute consultation with Dr. Zainab: your history, warning signs, nerve checks and any MRI or X-ray reports you bring." },
    { time: "Step 2", title: "Your plan", content: "A written plan of therapies, herbs and home advice — and physiotherapy if it will help." },
    { time: "Step 3", title: "Treatment", content: "Kati Vasti, Basti, Elakizhi, Agnikarma or other therapies as prescribed, alongside physiotherapy sessions." },
    { time: "Step 4", title: "Review", content: "Regular reviews; the plan changes as the pain eases, then focuses on preventing it coming back." }
  ],
  footer: "Plan length depends on the cause and how long you have had sciatica."
};

export const sciaticaIntegration = {                        // rendered with TreatmentIntegration
  bgColor: "bg-[#F5F1E8]",
  label: "AYURVEDA + PHYSIOTHERAPY",
  title: "One plan, two approaches, one clinic in JVC.",
  paragraphs: [
    "Ayurvedic therapies ease pain, spasm and stiffness. <a href='/conditions/sciatica-physiotherapy-dubai/'>Physiotherapy for sciatica</a> restores movement, strengthens the back and teaches you how to keep the nerve calm.",
    "At Vedara Care, Dr. Zainab and our physiotherapist plan both together, so sessions fit around each other and you have one plan to follow."
  ],
  image: "/images/basti-sciatica-vedara-jvc.webp",
  alt: "Ayurvedic and physiotherapy care for sciatica at Vedara Care, JVC",
  features: ["Ayurveda and physiotherapy at one clinic", "Sessions planned around each other", "One plan and one review", "Home exercises and daily-routine advice"],
  button1Text: "Book a consultation",
  button1Link: "/book/",
  button2Text: "Physiotherapy for sciatica",
  button2Link: "/conditions/sciatica-physiotherapy-dubai/"
};

export const sciaticaFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "SCIATICA QUESTIONS",
  sidebarLinks: [
    { text: "Physiotherapy for sciatica", href: "/conditions/sciatica-physiotherapy-dubai/" },
    { text: "Kati Vasti", href: "/treatments/kativasti-dubai/" },
    { text: "Ayurvedic back pain treatment", href: "/conditions/back-pain-ayurveda-dubai/" }
  ],
  title: "Ayurvedic treatment for sciatica: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20treatment%20for%20sciatica.",
  faqs: [
    { question: "Can Ayurveda treat sciatica?",
      answer: "Ayurveda can help relieve sciatica pain and stiffness for many people, usually with Kati Vasti, Basti, herbal bundles (Kizhi), oil massage with steam and prescribed herbs. In Ayurveda, sciatica is called Gridhrasi. Results vary, and some causes need a surgeon first." },
    { question: "What is Gridhrasi?",
      answer: "Gridhrasi is the classical Ayurvedic name for sciatica. It means 'vulture-like', describing the stiff, careful walk of someone with pain running from the lower back down the leg." },
    { question: "Where can I get Ayurvedic treatment for sciatica in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. Physiotherapy is available at the same clinic. Open daily 9am to 10pm, close to JVT, Al Barsha South and Arjan." },
    { question: "Which Ayurvedic therapies are used for sciatica?",
      answer: "Kati Vasti (warm oil on the lower back), Basti (medicated enema, often Matra or Kala Basti), Elakizhi (herbal bundles), Abhyanga with steam, Agnikarma (controlled therapeutic heat) and prescribed herbs. Some people need Panchakarma. The doctor chooses what suits your cause." },
    { question: "When should I see a doctor urgently for sciatica?",
      answer: "Go to hospital straight away if you lose bladder or bowel control, have numbness around the groin or buttocks, or weakness in both legs. See a doctor soon if one leg is getting weaker, or pain follows a fall or comes with fever or weight loss." },
    { question: "Can Ayurveda help me avoid back surgery?",
      answer: "Many people with sciatica improve without surgery, whatever treatment they choose. Ayurveda and physiotherapy may help you recover without an operation, but if there is severe nerve compression or worsening weakness, surgery may be the right choice, and we will tell you." },
    { question: "Can I combine Ayurveda with physiotherapy for sciatica?",
      answer: "Yes. At our JVC clinic, Dr. Zainab and our physiotherapist can plan Ayurvedic therapies and physiotherapy together as one plan." },
    { question: "Do you do MRI scans?",
      answer: "No. Vedara Care does not do imaging or surgery. Bring any MRI or X-ray reports you have; if you need imaging or a surgeon's opinion, Dr. Zainab will refer you." },
    { question: "How long does Ayurvedic sciatica treatment take?",
      answer: "It depends on the cause and how long you have had it. Many plans run for a few weeks; the doctor sets yours at consultation and reviews it as you go." },
    { question: "Can I have Ayurvedic treatment after spine surgery?",
      answer: "Only once your surgeon agrees. Gentle therapies and physiotherapy can then support recovery." },
    { question: "Is sciatica in pregnancy or after childbirth treated?",
      answer: "After childbirth, yes, as part of postnatal care. During pregnancy, only gentle, doctor-approved therapies are used." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist." },
    { question: "How much does Ayurvedic treatment for sciatica cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500 and a therapy session around AED 250 to 700. The total depends on your plan. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring any MRI or X-ray reports to your first 45 to 60-minute consultation." }
  ]
};

export const sciaticaLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Sciatica care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Ayurvedic treatment for sciatica at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a sciatica consultation",
  buttonHref: "/book/"
};

export const sciaticaFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation and a warning-sign check.",
  description: "In 45 to 60 minutes, Dr. Zainab will check what is causing your sciatica, rule out warning signs and plan Ayurveda — with physiotherapy if it helps.",
  button1Text: "Book a sciatica consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20sciatica%20treatment.",
  bullets: ["Prices shared on WhatsApp", "Ayurveda + physiotherapy", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const sciaticaRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Physiotherapy for sciatica", description: "Movement and strength for sciatica.", href: "/conditions/sciatica-physiotherapy-dubai/" },
    { title: "Kati Vasti", description: "Warm oil therapy for the lower back.", href: "/treatments/kativasti-dubai/" },
    { title: "Basti", description: "The classical Ayurvedic treatment for Vata disorders.", href: "/treatments/basti-jvc/" },
    { title: "Ayurvedic back pain treatment", description: "When the pain stays in the back.", href: "/conditions/back-pain-ayurveda-dubai/" }
  ]
};
