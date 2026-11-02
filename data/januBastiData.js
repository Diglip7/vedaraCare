// data/januBastiData.js (replace the whole file)
export const januHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Janu Basti in JVC", active: true }
  ],
  label: "JANU BASTI · JANU VASTI · AYURVEDIC KNEE TREATMENT · JVC, DUBAI",
  title: "Janu Basti (Janu Vasti) in JVC, Dubai — Ayurvedic knee treatment with warm medicated oil.",
  description: "Janu Basti holds warm medicated oil over the knee inside a ring of dough, so the warmth and oil stay on the painful joint. It is used for knee pain, stiffness and osteoarthritis, often alongside knee physiotherapy. At Vedara Care near Circle Mall, JVC, Dr. Zainab Sheikh (BAMS, MD Ayurveda) chooses the oil and course, and a same-gender therapist gives the treatment.",
  primaryCTA: "Book a Janu Basti consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Janu%20Basti.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Knee physiotherapy at the same clinic", "Same-gender therapist"],
  floatingCard: { title: "NOT AN ENEMA", subtitle: "Janu Basti stays on the skin of the knee. Basti, the enema therapy, is different." },
  image: "/images/janu-basti-warm-oil-therapy-knee-ayurveda-jvc.webp",
  alt: "Warm medicated oil held in a dough ring on the knee during Janu Basti at Vedara Care, JVC Dubai"
};

export const januIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Janu Basti, in one paragraph.",
  blockquote: "Janu Basti (also written Janu Vasti) is a classical Ayurvedic therapy in which warm medicated oil is held over the knee inside a ring of dough, then massaged in. It is used mainly for knee pain and stiffness, knee osteoarthritis, recovery after sports strains and rheumatoid arthritis outside a flare, and often works best alongside knee physiotherapy. It eases pain and stiffness but does not reverse joint damage, and it is not Basti: nothing is given internally. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, Janu Basti starts with a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), who chooses the oil and course, and a same-gender therapist gives the treatment. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const januMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "WHAT JANU BASTI IS",
  title: "How Janu Basti works.",
  content: [
    "A ring of dough (usually black gram or wheat flour) is shaped around the knee and sealed to the skin. Warm medicated oil is poured inside and replaced as it cools, so steady warmth and oil stay on the joint.",
    "In Ayurveda, knee osteoarthritis is called Janu Sandhigata Vata — a Vata disorder of the joint. Warm, nourishing oil held in place is the classical way to calm it; the doctor chooses the oil for your knee.",
    "What does the research say? Studies are small and usually combine Janu Basti with other Ayurvedic treatment: in one open study of 30 people with knee osteoarthritis, Janu Basti with Matra Basti for 9 days improved most measures. We use it alongside physiotherapy and medical care."
  ],
  sources: "Sources: <a href='https://www.wisdomlib.org/uploads/journals/iamj/2021-issue-11-november/2684_2691.pdf' target='_blank' rel='noopener'>Janu Basti and Matra Basti in knee osteoarthritis, 30 patients (IAMJ 2021, PDF)</a> · <a href='https://doaj.org/article/25c011fe4caa431abfbcefe4be47c80b' target='_blank' rel='noopener'>Janu Basti for knee osteoarthritis, pilot study (2020)</a>",
  image: "/images/traditional-ayurvedic-warm-oil-preparation-vedara.webp",
  alt: "Medicated oil warmed for Janu Basti at Vedara Care, JVC"
};

export const januProtocol = {
  label: "WHAT HAPPENS",
  title: "What happens at a Janu Basti session.",
  description: "Every session follows the same steps; the oil, length and course are set by your doctor.",
  phases: [
    { time: "Step 1", title: "Check-in", content: "Your first visit is a 45-60 minute consultation with Dr. Zainab. At later visits, a short check of pain, swelling and movement." },
    { time: "Step 2", title: "Dough ring and oil", content: "You lie on your back. A same-gender therapist shapes the dough ring around the knee and fills it with warm oil." },
    { time: "Step 3", title: "Holding the warmth", content: "The oil is replaced as it cools; the therapist checks the temperature throughout." },
    { time: "Step 4", title: "Massage and rest", content: "The ring is removed, the knee is gently massaged, and you rest. Your plan may add knee physiotherapy." }
  ],
  footer: "Session length and the number of sessions depend on your plan."
};

export const januOils = {                                   // rendered with TreatmentOils
  label: "OILS",
  title: "Oils commonly used for Janu Basti.",
  description: "The doctor chooses the oil after your consultation.",
  oils: [
    { name: "Ksheerabala Taila", description: "Nourishing", content: "Sesame oil processed with Bala and milk.", indication: "age-related knee pain, dryness, stiffness" },
    { name: "Mahanarayana Taila", description: "Warming", content: "A classical oil with Bala, Ashwagandha and Dashamoola.", indication: "osteoarthritis, chronic stiffness" },
    { name: "Dhanwantharam Taila", description: "Strengthening", content: "A classical Kerala oil for joints and muscles.", indication: "weak, painful knees" },
    { name: "Sahacharadi Taila", description: "For nerve-related pain", content: "A classical oil with Sahachara (Barleria prionitis).", indication: "knee pain with radiating or nerve-type pain" }
  ],
  footer: "Oils may be changed during a course depending on how you respond."
};

export const januApplications = {
  label: "WHAT JANU BASTI IS USED FOR",
  title: "When Janu Basti may help your knee.",
  description: "The doctor checks the cause first; some knee problems need imaging or an orthopaedic doctor.",
  whereItExcels: [
    { title: "Knee osteoarthritis", subtitle: "Often with knee physiotherapy", href: "/conditions/arthritis-ayurveda-dubai/" },
    { title: "Knee stiffness and age-related knee pain", subtitle: "Usually a course", href: "/conditions/knee-pain-physiotherapy-dubai/" },
    { title: "Recovery after sports strains", subtitle: "Once the acute phase has settled", href: "/conditions/knee-pain-physiotherapy-dubai/" },
    { title: "Rheumatoid arthritis outside a flare", subtitle: "Alongside your rheumatologist", href: "/conditions/arthritis-ayurveda-dubai/" },
    { title: "Part of a wider plan", subtitle: "With Kizhi, Abhyanga or Panchakarma", href: "/treatments/patra-pinda-sweda-jvc/" }
  ]
};

export const januSafety = {                                 // rendered with ClinicalBoundaries
  label: "SAFETY",
  title: "When to see a doctor first, and possible side effects.",
  leftCard: {
    label: "SEE A DOCTOR FIRST",
    title: "Janu Basti is postponed if you have:",
    useWarningIcon: true,
    items: [
      "A hot, red, swollen knee (possible infection or gout flare)",
      "A recent injury with severe swelling or inability to bear weight",
      "Fever or acute illness",
      "Broken skin or infection on the knee",
      "Calf pain or swelling (possible blood clot)",
      "A fresh surgical wound — Vedara does not perform knee surgery; after surgery elsewhere, only with your surgeon's clearance"
    ]
  },
  rightCard: {
    label: "POSSIBLE SIDE EFFECTS",
    title: "Usually mild and short-lived:",
    items: [
      { text: "Warmth or redness of the skin", icon: "check" },
      { text: "Mild stiffness the next day", icon: "check" },
      { text: "Rarely, skin irritation from the oil or dough (tell us about gluten or skin allergies)", icon: "check" }
    ]
  },
  footer: "The therapist checks the oil temperature throughout the session."
};

export const januPrograms = {                               // rendered with TreatmentPrograms
  label: "COURSES",
  title: "Janu Basti courses. Your doctor sets the length.",
  description: "Most people need a course. The doctor recommends the length at your consultation.",
  whatsappNumber: "971555736312",
  programs: [
    { name: "Knee course", price: "Prices shared on WhatsApp", duration: "Length set by your doctor", featured: true,
      features: ["Consultation and oil selection", "A course of Janu Basti sessions", "Doctor reviews during the course", "Home exercise advice"],
      bestFor: "Knee osteoarthritis, chronic stiffness", buttonText: "Ask about the course", whatsappMessage: "Hello Vedara Care, I would like to ask about a Janu Basti course." },
    { name: "Janu Basti with knee physiotherapy", price: "Prices shared on WhatsApp", duration: "Length set by your doctor",
      features: ["Janu Basti course", "Knee physiotherapy sessions", "Plan coordinated at one clinic"],
      bestFor: "Osteoarthritis with weak muscles or poor movement", buttonText: "Ask about the combined plan", whatsappMessage: "Hello Vedara Care, I would like to ask about Janu Basti with knee physiotherapy." }
  ],
  footer: "Vedara Care does not bill insurers directly; where Janu Basti is part of treatment for a medical condition, we provide the invoice and report for a reimbursement claim."
};

export const januFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "JANU BASTI QUESTIONS",
  sidebarLinks: [
    { text: "Knee physiotherapy", href: "/conditions/knee-pain-physiotherapy-dubai/" },
    { text: "Kati Vasti (back)", href: "/treatments/kativasti-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Janu Basti: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Janu%20Basti.",
  faqs: [
    { question: "What is Janu Basti?",
      answer: "Janu Basti (also written Janu Vasti) is a classical Ayurvedic therapy in which warm medicated oil is held over the knee inside a ring of dough. It is used mainly for knee pain, stiffness and osteoarthritis." },
    { question: "Is Janu Basti the same as Basti?",
      answer: "No. Basti is a medicated enema given internally. Janu Basti only pools warm oil on the skin of the knee; nothing is given internally." },
    { question: "Where can I get Janu Basti in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall. It is prescribed by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor, and the clinic is open daily 9am to 10pm. It is close to JVT, Al Barsha South and Arjan." },
    { question: "Is Janu Basti good for knee osteoarthritis?",
      answer: "It can ease pain and stiffness: small studies of Janu Basti, usually combined with other Ayurvedic treatment, report improvement in knee osteoarthritis. It does not reverse joint damage, so we often combine it with knee physiotherapy." },
    { question: "What else is Janu Basti used for?",
      answer: "Knee stiffness and age-related knee pain, recovery after sports strains once the acute phase has settled, and rheumatoid arthritis outside a flare. The doctor checks for warning signs first." },
    { question: "Which oil is used for Janu Basti?",
      answer: "The doctor chooses it for your knee. Common choices include Ksheerabala, Mahanarayana, Dhanwantharam and Sahacharadi Taila; all classical oils are available at Vedara Care." },
    { question: "How long does a session take, and how many do I need?",
      answer: "It depends on your needs. After the consultation, the doctor sets the session length and the course; Janu Basti is usually given as a course over one to a few weeks." },
    { question: "Is Janu Basti painful?",
      answer: "No. You feel steady warmth around the knee. The therapist checks the oil temperature throughout; tell them at once if it feels too hot." },
    { question: "Can I combine Janu Basti with physiotherapy?",
      answer: "Yes, and for knee osteoarthritis it often works best that way: Janu Basti eases pain and stiffness, physiotherapy strengthens the muscles that support the knee. Both are available at our JVC clinic." },
    { question: "Can I have Janu Basti after knee surgery or a knee replacement?",
      answer: "Vedara Care does not perform knee surgery or knee replacement. After surgery elsewhere, Janu Basti can be considered only once the wound has fully healed and your surgeon agrees." },
    { question: "Who should not have Janu Basti?",
      answer: "It is postponed with a hot, red, swollen knee, a recent injury with severe swelling or inability to bear weight, fever, broken skin or infection on the knee, a suspected blood clot in the leg, or a fresh surgical wound. These need medical assessment first." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist." },
    { question: "How much does Janu Basti cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic therapy session such as Janu Basti commonly costs around AED 250 to 700, depending on the clinic and session length. The total depends on how many sessions you need. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book Janu Basti in JVC?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Your first visit is a 45 to 60-minute consultation with Dr. Zainab." }
  ]
};

export const januLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Janu Basti in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Janu Basti at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a Janu Basti consultation",
  buttonHref: "/book/"
};

export const januFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation. The right plan for your knee follows from it.",
  description: "In 45 to 60 minutes, Dr. Zainab will check your knee, whether Janu Basti suits you, and whether to combine it with physiotherapy.",
  button1Text: "Book a Janu Basti consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Janu%20Basti.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapist", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const januRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Knee physiotherapy", description: "Strength and movement for painful knees.", href: "/conditions/knee-pain-physiotherapy-dubai/" },
    { title: "Kati Vasti", description: "The same warm-oil method for the lower back.", href: "/treatments/kativasti-dubai/" },
    { title: "Ayurveda for arthritis", description: "The full Ayurvedic plan for arthritis.", href: "/conditions/arthritis-ayurveda-dubai/" },
    { title: "Kizhi (Elakizhi)", description: "Herbal bundle therapy for stiff joints.", href: "/treatments/patra-pinda-sweda-jvc/" },
    { title: "Ayurvedic massage", description: "Compare all Ayurvedic massages in JVC.", href: "/treatments/ayurvedic-massage-jvc/" }
  ]
};
