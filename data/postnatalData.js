// data/postnatalData.js
export const postnatalHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Postnatal & Prenatal Ayurveda", active: true }
  ],
  label: "POSTNATAL AYURVEDA · POST NATAL MASSAGE · JVC, DUBAI",
  title: "Postnatal Ayurvedic care and post natal massage in JVC, Dubai — with female therapists, and your baby welcome.",
  description: "Classical Sutika Paricharya adapted to life in Dubai: postnatal Abhyanga, belly binding, perineal care, lactation support and diet, planned by Dr. Zainab Sheikh (BAMS, MD Ayurveda). From about 2 weeks after birth, at our clinic near Circle Mall, JVC. Prenatal massage too.",
  primaryCTA: "Book postnatal care",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20postnatal%20Ayurvedic%20care.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Female therapists, private room", "Bring your baby"],
  floatingCard: { title: "FROM 2 WEEKS AFTER BIRTH", subtitle: "After a C-section, once your obstetrician has cleared you." },
  image: "/images/postnatal-ayurveda-dubai-hero.webp",
  alt: "Postnatal Ayurvedic massage for a new mother at Vedara Care, JVC Dubai"
};

export const postnatalIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Postnatal Ayurveda, in one paragraph.",
  blockquote: "Postnatal Ayurvedic care, called Sutika Paricharya, is the classical way of helping a mother recover after birth: warm oil massage (postnatal Abhyanga), rest, warm and easily digested food, herbs, and practices such as belly binding (Udar Bandhana), traditionally followed for about 42 to 45 days. It aims to ease aches and tiredness, support digestion, sleep and breastfeeding, and give mothers time to recover — research on postpartum massage is still limited, so results vary. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, care is given in the clinic by female therapists, usually from about 2 weeks after a normal delivery or after your obstetrician clears you following a C-section, and you can bring your baby. Each plan starts with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and prenatal Ayurvedic massage is offered from the second trimester. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const postnatalMechanism = {                         // rendered with TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "SUTIKA PARICHARYA",
  title: "Why Ayurveda gives new mothers their own care.",
  content: [
    "In Ayurveda, birth leaves the mother depleted and Vata high: tired, achy, dry, with fragile digestion and broken sleep. Sutika Paricharya counters this with warmth, oil, rest and nourishing food for the first weeks after birth.",
    "In many home cultures, mothers are cared for by family for weeks after birth. Many mothers in Dubai do not have that support; doctor-led postnatal care at a clinic near home can fill part of that gap.",
    "What does the research say? A 2024 randomised trial of 112 women studied early postpartum massage for physical discomfort and mood. Research is still limited, so we focus on comfort, rest and recovery, not promised results."
  ],
  sources: "Source: <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12859971/' target='_blank' rel='noopener'>Yamasaki et al., early postpartum massage randomised controlled trial (PMC)</a>",
  image: "/images/postnatal-care-ayurveda-dubai-sutika-paricharya-vedara-care.webp",
  alt: "Sutika Paricharya postnatal Ayurvedic care at Vedara Care, JVC"
};

export const postnatalServices = {                          // rendered with TreatmentOils
  label: "WHAT POSTNATAL CARE INCLUDES",
  title: "Postnatal Ayurvedic care at our JVC clinic.",
  description: "Chosen for your delivery, recovery and feeding; reviewed as you go.",
  oils: [
    { name: "Postnatal Abhyanga", description: "Post natal massage", content: "Warm medicated oil massage by a female therapist, adapted to your stage of recovery.", indication: "aches, tiredness, tension, sleep" },
    { name: "Udar Bandhana", description: "Belly binding", content: "Supportive wrapping of the abdomen; our therapists show you how. After a C-section, only once the wound has healed and your doctor agrees.", indication: "abdominal support and comfort" },
    { name: "Perineal care", description: "After a vaginal birth", content: "Gentle care with medicated oils, guided by the doctor.", indication: "comfort while healing" },
    { name: "Lactation support", description: "Herbs and diet", content: "Herbs prescribed by the doctor and checked as safe while breastfeeding; bought at a pharmacy.", indication: "milk supply, recovery" },
    { name: "Diet, rest and sleep", description: "Every plan", content: "Warm, easily digested food that changes as you recover; rest around feeds.", indication: "digestion, energy" },
    { name: "Emotional well-being", description: "Calm and support", content: "Calming therapies such as <a href='/treatments/shirodhara-dubai/'>Shirodhara</a> when suitable; <a href='/conditions/stress-anxiety-ayurveda-dubai/'>stress and anxiety support</a> alongside your doctor.", indication: "low mood, anxiety" }
  ],
  footer: "Given in a private room by female therapists. You are welcome to bring your baby."
};

export const postnatalTiming = {                            // rendered with TreatmentProtocol
  label: "WHEN TO START",
  title: "Starting postnatal care: normal birth and C-section.",
  description: "",
  phases: [
    { time: "Normal birth", title: "From about 2 weeks", content: "Most mothers can start in-clinic postnatal care about 2 weeks after a normal delivery." },
    { time: "C-section", title: "Once your obstetrician clears you", content: "Usually from around 6 weeks, after the wound has healed; massage avoids the scar until then." },
    { time: "First visit", title: "Consultation with Dr. Zainab", content: "Your delivery, recovery, feeding and medicines are checked, and the plan is set." },
    { time: "Ongoing", title: "Sessions and reviews", content: "Sessions are planned around feeds and sleep; plan length depends on your needs." }
  ],
  footer: "Started later than 6 weeks? Postnatal care can still help with lingering tiredness, back pain, postpartum hair fall (<a href='/conditions/hair-loss-ayurveda-dubai/'>Ayurveda for hair loss</a>) or digestion."
};

export const postnatalPrenatal = {                          // rendered with TreatmentMechanism
  bgColor: "bg-white",
  label: "PRENATAL (PREGNANCY) MASSAGE",
  title: "Prenatal Ayurvedic massage in JVC, from the second trimester.",
  content: [
    "Pregnancy massage at Vedara Care is offered from the second trimester, after Dr. Zainab has checked that it suits you and your pregnancy.",
    "It uses gentle oils, lighter pressure and comfortable side-lying positions, and avoids areas and techniques that are not suitable in pregnancy. It is given by a female therapist in a private room.",
    "Tell us if you have a high-risk pregnancy, bleeding, high blood pressure or swelling; in those cases we wait for your obstetrician's advice."
  ],
  image: "/images/ayurveda-postnatal-ayurveda-dubai-hero.webp",
  alt: "Prenatal Ayurvedic massage for a pregnant woman at Vedara Care, JVC"
};

export const postnatalBoundaries = {                        // rendered with ClinicalBoundaries
  label: "SAFETY",
  title: "When to see your doctor or go to hospital.",
  leftCard: {
    label: "SEEK MEDICAL CARE NOW",
    title: "Go to your doctor or hospital, or call 999, for:",
    useWarningIcon: true,
    items: ["Heavy bleeding or large clots", "Fever, or a red, painful or leaking C-section wound", "Calf pain or swelling, chest pain or breathlessness", "Severe headache or vision changes", "Thoughts of harming yourself or your baby"]
  },
  rightCard: {
    label: "TALK TO US OR YOUR DOCTOR",
    title: "Also tell us if you:",
    items: [
      { text: "Feel low, anxious or unable to sleep most days", icon: "check" },
      { text: "Have pain that is getting worse, not better", icon: "check" },
      { text: "Have feeding problems (a lactation consultant can help too)", icon: "check" },
      { text: "Take any medicines, including for thyroid or blood pressure", icon: "check" }
    ]
  },
  footer: ""
};

export const postnatalFaqs = {
  bgColor: "bg-[#FFFFFF]",
  label: "POSTNATAL & PRENATAL QUESTIONS",
  sidebarLinks: [
    { text: "Ayurvedic massage", href: "/treatments/ayurvedic-massage-jvc/" },
    { text: "Abhyanga", href: "/treatments/abhyanga-dubai/" },
    { text: "Ayurveda for stress", href: "/conditions/stress-anxiety-ayurveda-dubai/" }
  ],
  title: "Postnatal Ayurveda and post natal massage: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href='/ayurveda-dubai/'>guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20postnatal%20Ayurvedic%20care.",
  faqs: [
    {
      question: "What is postnatal Ayurvedic care?",
      answer: "It is Ayurveda's classical care for mothers after birth, called Sutika Paricharya: warm oil massage, rest, easily digested warm food, herbs and gentle routines to help the body recover. At Vedara Care it is given in our JVC clinic by female therapists, planned by an Ayurvedic doctor."
    },
    {
      question: "Where can I get a post natal massage in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with female therapists in a private room. You can bring your baby. Open daily 9am to 10pm, close to JVT, Al Barsha South and Arjan."
    },
    {
      question: "When can I start postnatal massage after birth?",
      answer: "Usually from about 2 weeks after a normal delivery. After a C-section, we start once your obstetrician has cleared you, usually from around 6 weeks. Dr. Zainab checks you before the first session."
    },
    {
      question: "Can I bring my baby?",
      answer: "Yes. You are welcome to bring your baby to your sessions."
    },
    {
      question: "What is Sutika Paricharya?",
      answer: "Sutika Paricharya is the classical Ayurvedic postnatal regimen, traditionally followed for about 42 to 45 days after birth, focusing on rest, warmth, nourishing food, oil massage and herbs. We adapt it to your delivery, recovery and life in Dubai."
    },
    {
      question: "What does a postnatal Ayurveda plan include?",
      answer: "Postnatal Abhyanga (warm oil massage), Udar Bandhana (belly binding), perineal care with medicated oils after a vaginal birth, lactation support with prescribed herbs, diet and rest guidance. The plan and its length depend on your needs."
    },
    {
      question: "Does postnatal massage help recovery?",
      answer: "Many mothers find it eases aches, tiredness and tension. A 2024 trial studied early postpartum massage for physical discomfort and mood; research is still limited, so we focus on comfort, rest and recovery rather than promised results."
    },
    {
      question: "What is belly binding (Udar Bandhana)?",
      answer: "A traditional way of wrapping the abdomen after birth to give support and comfort as the muscles recover. Our therapists show you how; after a C-section it starts only once your wound has healed and your doctor agrees."
    },
    {
      question: "Can Ayurveda help with breastfeeding?",
      answer: "Ayurveda can support milk supply and recovery with diet and herbs prescribed by the doctor, checked for safety while breastfeeding. For feeding problems, a lactation consultant or your doctor should also be involved."
    },
    {
      question: "Do you offer pregnancy (prenatal) massage?",
      answer: "Yes. Prenatal Ayurvedic massage is offered from the second trimester, after the doctor's assessment, with gentle oils and comfortable positions."
    },
    {
      question: "Do you offer postnatal care at home?",
      answer: "No. Postnatal care at Vedara Care is in our JVC clinic. You can bring your baby, and free and paid parking are nearby."
    },
    {
      question: "When should I see my doctor instead?",
      answer: "Seek medical care straight away for heavy bleeding, fever, a painful or leaking C-section wound, calf pain or swelling, severe headache or breathlessness. If you feel low, anxious or have thoughts of harming yourself or your baby, contact your doctor or call 999."
    },
    {
      question: "How much does postnatal Ayurvedic care cost in Dubai?",
      answer: "Across Dubai, a postnatal massage session commonly costs around AED 250 to 700, depending on the clinic and session length. The total depends on your plan. Vedara Care shares exact prices on WhatsApp."
    },
    {
      question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Tell us your delivery date and type so we can plan your first visit."
    }
  ]
};

export const postnatalLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Postnatal care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about postnatal Ayurvedic care at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Mothers visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City. You are welcome to bring your baby.",
  distances: [],
  buttonText: "Book postnatal care",
  buttonHref: "/book/"
};

export const postnatalFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Tell us your delivery date. We will plan your recovery.",
  description: "Dr. Zainab will check your recovery, feeding and medicines and plan postnatal care that fits around your baby.",
  button1Text: "Book postnatal care",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20postnatal%20care.",
  bullets: ["Prices shared on WhatsApp", "Female therapists", "Bring your baby", "Near Circle Mall, JVC"]
};

export const postnatalRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Ayurvedic massage", description: "All Ayurvedic massages at our JVC clinic.", href: "/treatments/ayurvedic-massage-jvc/" },
    { title: "Njavarakizhi", description: "Nourishing rice-bundle therapy for recovery.", href: "/treatments/njavarakizhi-dubai/" },
    { title: "Ayurveda for stress", description: "Calm and sleep support.", href: "/conditions/stress-anxiety-ayurveda-dubai/" },
    { title: "Pelvic floor physiotherapy", description: "Physiotherapy after birth.", href: "/conditions/pelvic-floor-physiotherapy-dubai/" }
  ]
};
