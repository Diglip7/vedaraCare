// data/nadiPareekshaJvcData.js (replace the whole file)
export const nadiHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Ayurvedic Consultation in JVC", active: true }
  ],
  label: "AYURVEDIC CONSULTATION · NADI PAREEKSHA · JVC, DUBAI",
  title: "Ayurvedic consultation and Nadi Pareeksha (pulse diagnosis) in JVC, Dubai.",
  description: "A 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda): pulse diagnosis, a full Ayurvedic assessment of your constitution and current imbalance, a medicine review and a written plan. At our DHA-licensed clinic near Circle Mall, JVC. You can also book a dosha check on its own.",
  primaryCTA: "Book a consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20consultation.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "45-60 minute first consultation", "Near Circle Mall, JVC"],
  floatingCard: { title: "IN-CLINIC ONLY", subtitle: "The pulse has to be felt in person, so every consultation happens at our JVC clinic." },
  image: "/images/nadi-pareeksha-jvc-hero.webp",
  alt: "Dr. Zainab Sheikh feeling a patient's pulse (Nadi Pareeksha) at Vedara Care, JVC Dubai"
};

export const nadiIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "An Ayurvedic consultation, in one paragraph.",
  blockquote: "An Ayurvedic consultation is a detailed assessment by an Ayurvedic doctor of your constitution (Prakriti), your current imbalance (Vikriti) and your symptoms, used to plan diet, routine, herbs and therapies. At its centre is Nadi Pareeksha (also written Nadi Pariksha), Ayurvedic pulse diagnosis, in which the doctor feels the pulse at the wrist with three fingers to assess Vata, Pitta and Kapha, together with checks of the tongue, eyes, skin and voice and questions about digestion, sleep and energy. It does not replace blood tests or a medical diagnosis; it adds an Ayurvedic view of you as a person. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, the first consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed) takes 45 to 60 minutes, in person only, and ends with a written plan; a dosha check can also be booked on its own. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const nadiMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "WHAT NADI PAREEKSHA IS",
  title: "Pulse diagnosis: what the doctor feels, and what it can and cannot tell.",
  content: [
    "The doctor places three fingers on the radial pulse at the wrist. Classical Ayurveda links the index finger to Vata, the middle finger to Pitta and the ring finger to Kapha, and reads the pulse's speed, strength, rhythm and character at each point.",
    "Nadi Pareeksha is the first of the eight classical examinations (Ashtavidha Pareeksha): pulse, urine, stool, tongue, voice, skin, eyes and general build. In a modern clinic most of these are covered by examination and questions.",
    "What does the research say? In a blinded study, repeated pulse diagnosis by the same expert agreed only moderately, while constitution assessment agreed substantially. That is why we never rely on the pulse alone."
  ],
  sources: "Sources: <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC4890095/' target='_blank' rel='noopener'>Repeatability of Ayurvedic pulse and constitution diagnosis (PMC)</a> · <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC5481710/' target='_blank' rel='noopener'>Reliability of pulse examination with 15 doctors (PMC)</a>",
  image: "/images/dr-zainab-nadi-pareeksha-consultation.webp",
  alt: "Dr. Zainab Sheikh taking a pulse reading at Vedara Care, JVC Dubai"
};

export const nadiChecks = {                                 // rendered with TreatmentOils
  label: "WHAT THE DOCTOR CHECKS",
  title: "Eight things your Ayurvedic doctor looks at.",
  description: "Together they describe your constitution and what is out of balance now.",
  oils: [
    { name: "Pulse (Nadi)", description: "Three-finger reading", content: "Speed, strength and rhythm at the Vata, Pitta and Kapha positions.", indication: "current balance of the doshas" },
    { name: "Tongue (Jihva)", description: "Coating and colour", content: "A coated or dry tongue is read as a sign of digestion and toxins (ama).", indication: "digestion" },
    { name: "Eyes, skin and voice", description: "Observation", content: "Colour, texture, moisture and tone.", indication: "constitution and current imbalance" },
    { name: "Digestion and bowel habits", description: "Questions", content: "Appetite, bloating, regularity — what Ayurveda calls Agni.", indication: "digestive strength" },
    { name: "Sleep, energy and mood", description: "Questions", content: "How you sleep, your energy across the day and your stress.", indication: "Vata and Pitta balance" },
    { name: "Body build", description: "Observation", content: "Frame, weight pattern and how it has changed.", indication: "Prakriti (constitution)" },
    { name: "History and medicines", description: "Review", content: "Your medical history, current medicines and recent test results.", indication: "safety and coordination with your doctors" },
    { name: "Your goals", description: "Discussion", content: "What you want to change and what fits your life.", indication: "a realistic plan" }
  ],
  footer: "You leave with a written summary of your constitution and current imbalance, and a plan."
};

export const nadiProtocol = {
  label: "WHAT HAPPENS",
  title: "Your first consultation, step by step.",
  description: "45 to 60 minutes, in person at our JVC clinic.",
  phases: [
    { time: "Step 1", title: "History", content: "Your symptoms, medical history, medicines and goals." },
    { time: "Step 2", title: "Nadi Pareeksha and examination", content: "Pulse reading, then tongue, eyes, skin and voice." },
    { time: "Step 3", title: "Your constitution", content: "Dr. Zainab explains your Prakriti and current Vikriti in plain words." },
    { time: "Step 4", title: "Your plan", content: "Diet, daily routine and, if needed, prescribed herbs or therapies such as <a href='/treatments/abhyanga-dubai/'>Abhyanga</a>, <a href='/treatments/shirodhara-dubai/'>Shirodhara</a> or <a href='/treatments/panchakarma-dubai/'>Panchakarma</a>. You decide whether to start." }
  ],
  footer: "Follow-ups are shorter; how often depends on your plan. Herbs are prescribed and bought at a licensed pharmacy."
};

export const nadiOptions = {                                // rendered with TreatmentPrograms
  label: "BOOKING OPTIONS",
  title: "Three ways to book.",
  description: "All in person at our JVC clinic with Dr. Zainab.",
  whatsappNumber: "971555736312",
  programs: [
    { name: "Dosha check", price: "Prices shared on WhatsApp", duration: "Shorter than a full consultation",
      features: ["Pulse reading", "Constitution (Prakriti) assessment", "Plain-language summary", "No obligation to start treatment"],
      bestFor: "Curious about your dosha", buttonText: "Ask about a dosha check", whatsappMessage: "Hello Vedara Care, I would like to book a dosha check." },
    { name: "First consultation", price: "Prices shared on WhatsApp", duration: "45-60 minutes", featured: true,
      features: ["Full history and medicine review", "Nadi Pareeksha and examination", "Constitution and current imbalance", "Written plan"],
      bestFor: "A health concern you want help with", buttonText: "Book a consultation", whatsappMessage: "Hello Vedara Care, I would like to book an Ayurvedic consultation." },
    { name: "Follow-up", price: "Prices shared on WhatsApp", duration: "Depends on your plan",
      features: ["Pulse and progress check", "Plan adjusted", "Herbs and therapies reviewed"],
      bestFor: "Patients already on a plan", buttonText: "Book a follow-up", whatsappMessage: "Hello Vedara Care, I would like to book a follow-up consultation." }
  ]
};

export const nadiLimits = {                                 // rendered with ClinicalBoundaries
  label: "WHAT IT CAN AND CANNOT DO",
  title: "An Ayurvedic consultation adds to your medical care. It does not replace it.",
  leftCard: {
    label: "IT CANNOT",
    title: "Nadi Pareeksha does not:",
    useWarningIcon: true,
    items: ["Diagnose diseases such as diabetes, thyroid problems or cancer", "Replace blood tests, scans or your doctor's diagnosis", "Predict future illness", "Work online or over the phone"]
  },
  rightCard: {
    label: "IT CAN",
    title: "It helps the doctor:",
    items: [
      { text: "Understand your constitution and current imbalance", icon: "check" },
      { text: "Choose diet, routine and therapies that suit you", icon: "check" },
      { text: "Track how you respond over follow-ups", icon: "check" },
      { text: "Coordinate with your other doctors", icon: "check" }
    ]
  },
  footer: "If something needs medical tests or another specialist, Dr. Zainab will tell you."
};

export const nadiFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "CONSULTATION QUESTIONS",
  sidebarLinks: [
    { text: "Ayurvedic treatment in Dubai", href: "/ayurveda-dubai/" },
    { text: "Dr. Zainab Sheikh", href: "/doctors/dr-zainab-ayurveda/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Ayurvedic consultation and Nadi Pareeksha: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20an%20Ayurvedic%20consultation.",
  faqs: [
    { question: "What happens at an Ayurvedic consultation?",
      answer: "The doctor takes a full history, feels your pulse (Nadi Pareeksha), looks at your tongue, eyes and skin, asks about digestion, sleep, bowel habits and energy, and reviews your medicines. You leave with a written plan. At Vedara Care the first consultation takes 45 to 60 minutes." },
    { question: "What is Nadi Pareeksha?",
      answer: "Nadi Pareeksha (also written Nadi Pariksha or Nadi Parikshan) is Ayurvedic pulse diagnosis. The doctor feels the pulse at the wrist with three fingers to assess Vata, Pitta and Kapha. It is one part of a full Ayurvedic assessment, not a stand-alone test." },
    { question: "Where can I get an Ayurvedic consultation in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan." },
    { question: "How do I find out my dosha?",
      answer: "Online quizzes give a rough idea, but a doctor's assessment is more reliable: it combines your pulse, body features, digestion, sleep and history to identify your constitution (Prakriti) and current imbalance (Vikriti). You can book a dosha check at Vedara Care without starting treatment." },
    { question: "Is pulse diagnosis accurate?",
      answer: "Studies show it is moderately consistent when the same doctor repeats it, and constitution assessment is more consistent. That is why we never rely on the pulse alone: it is combined with other checks and your medical history." },
    { question: "Can Nadi Pareeksha replace blood tests or a medical diagnosis?",
      answer: "No. It describes your constitution and imbalances in Ayurvedic terms; it does not diagnose diseases. Keep your regular check-ups and bring recent test results to the consultation." },
    { question: "How long does the consultation take?",
      answer: "The first consultation takes 45 to 60 minutes. Follow-ups are shorter; how often you need them depends on your plan." },
    { question: "Do I need to prepare for the consultation?",
      answer: "Avoid a heavy meal, caffeine and hard exercise for a couple of hours before, as they change the pulse. Bring a list of your medicines and any recent test results." },
    { question: "Can I book only a dosha check?",
      answer: "Yes. A dosha and constitution check can be booked on its own, without committing to any treatment." },
    { question: "Do you offer online Ayurvedic consultations?",
      answer: "No. Consultations are in-clinic only, because the pulse has to be felt in person." },
    { question: "Is the consultation suitable for children and older adults?",
      answer: "Yes. The doctor adapts the assessment to the person's age and health." },
    { question: "Is an Ayurvedic consultation covered by insurance?",
      answer: "Some plans reimburse it and many do not. Vedara Care does not bill insurers directly; we provide the invoice and report you need for a reimbursement claim." },
    { question: "How much does an Ayurvedic consultation cost in Dubai?",
      answer: "Across Dubai, a first Ayurvedic consultation commonly costs around AED 200 to 500, depending on the clinic and its length. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Mention if you want a full consultation or a dosha check only." }
  ]
};

export const nadiLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Ayurvedic consultation in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to book an Ayurvedic consultation at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a consultation",
  buttonHref: "/book/"
};

export const nadiFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation. Decide everything else from there.",
  description: "In 45 to 60 minutes you will know your constitution, what is out of balance and what Dr. Zainab recommends. Whether you start treatment is up to you.",
  button1Text: "Book a consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20consultation.",
  bullets: ["Prices shared on WhatsApp", "In-clinic only", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const nadiRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Dr. Zainab Sheikh", description: "BAMS, MD (Ayurveda), DHA-licensed.", href: "/doctors/dr-zainab-ayurveda/" },
    { title: "Panchakarma", description: "Often planned after a consultation.", href: "/treatments/panchakarma-dubai/" },
    { title: "Rasayana", description: "Ayurvedic rejuvenation, planned from your constitution.", href: "/treatments/rasayana-ayurveda-jvc/" },
    { title: "Ayurveda clinic in JVC", description: "All Ayurvedic services near Circle Mall.", href: "/ayurveda-clinic-jvc/" }
  ]
};
