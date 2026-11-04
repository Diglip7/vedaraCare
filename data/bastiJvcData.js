// data/bastiJvcData.js
export const bastiHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Basti in JVC", active: true }
  ],
  label: "BASTI · AYURVEDIC THERAPY · JVC, DUBAI",
  title: "Basti treatment in JVC, Dubai — the classical Ayurvedic enema therapy, supervised by a doctor.",
  description: "Basti (also written Vasti) gives medicated oil or herbal decoction as an enema. It is one of the five Panchakarma actions and is traditionally used for chronic back pain, sciatica, joint stiffness and digestive problems. At Vedara Care near Circle Mall, JVC, Dr. Zainab Sheikh (BAMS, MD Ayurveda) prescribes the type and course, and same-gender therapists give it in a private room.",
  primaryCTA: "Book a Basti consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Basti%20treatment.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "All four types of Basti", "Same-gender therapists"],
  floatingCard: { title: "'HALF OF ALL TREATMENT'", subtitle: "Classical texts call Basti half of all Ayurvedic treatment because it is used so widely." },
  image: "/images/basti-ardha-chikitsa.webp",            // replace with a real photo, same name
  alt: "Basti treatment room at Vedara Care Ayurveda clinic, JVC Dubai"
};

export const bastiIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Basti, in one paragraph.",
  blockquote: "Basti (Vasti) is a classical Ayurvedic therapy in which medicated oil or a herbal decoction is given as an enema; it is one of the five actions of Panchakarma and is traditionally called 'half of all treatment'. The main types are Anuvasana (oil), Niruha or Kashaya (herbal decoction), Matra (a small daily dose of oil) and Uttara Basti (a specialised form given into the bladder or uterus). It is used mainly for chronic lower back pain and sciatica, joint stiffness, constipation and IBS, and as support in nerve-related conditions, usually as a course of 8, 16 or 30 days. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, Basti starts with a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), who chooses the type and course; same-gender therapists give it in a private room. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const bastiMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "WHAT BASTI IS",
  title: "Why Ayurveda calls Basti 'half of all treatment'.",
  content: [
    "In Ayurveda, many long-standing problems of the back, joints, nerves and digestion are linked to Vata, the principle of movement, whose main seat is the colon. Basti works directly there, which is why classical texts give it such a central place.",
    "Basti is different from a cleansing enema or colon hydrotherapy. The oil or decoction is chosen for your condition, and an oil Basti is meant to be retained for a time so it can be absorbed.",
    "What does the research say? Basti has been studied mainly in small trials and case series, and good-quality evidence is limited. We use it alongside medical care and physiotherapy, not instead of them."
  ],
  image: "/images/basti-treatment-room-panchakarma-dubai.webp",
  alt: "Private Basti treatment room at Vedara Care, JVC Dubai"
};

export const bastiTypes = {                                 // rendered with TreatmentOils (same cards as Shirodhara oils)
  label: "TYPES OF BASTI",
  title: "Four types of Basti, and when each is used.",
  description: "The doctor chooses the type, the medicine and the course for your condition.",
  oils: [
    { name: "Anuvasana Basti", description: "Medicated oil", content: "A measured amount of warm medicated oil, retained for a time.", indication: "dryness, stiffness, chronic back and joint pain" },
    { name: "Niruha (Kashaya / Asthapana) Basti", description: "Herbal decoction", content: "A larger volume of herbal decoction mixed with honey, salt and oil, expelled after a short time.", indication: "deeper cleansing within a course, digestive problems" },
    { name: "Matra Basti", description: "Small daily oil dose", content: "A small dose of oil that can be given daily, often over a longer period.", indication: "chronic back pain, older patients, long courses" },
    { name: "Uttara Basti", description: "Specialised form", content: "Medicated oil or decoction given into the bladder or uterus. A specialised procedure, done only after a separate assessment.", indication: "selected urinary and gynaecological conditions" }
  ],
  footer: "Basti is not the same as external vasti therapies: see <a href='/treatments/kativasti-dubai/'>Kati Vasti</a> for the lower back, <a href='/treatments/janu-basti-jvc/'>Janu Vasti</a> for the knee, or Greeva Vasti for <a href='/conditions/cervical-spondylosis-ayurveda-jvc/'>neck pain and cervical spondylosis</a>."
};

export const bastiProtocol = {
  label: "WHAT HAPPENS",
  title: "What happens at a Basti session.",
  description: "Every session follows the same steps; the medicine and the course are set by your doctor.",
  phases: [
    { time: "Step 1", title: "Consultation", content: "Your first visit is a 45-60 minute <a href='/treatments/nadi-pareeksha-jvc/' class='text-[#C9A961] hover:underline'>consultation</a> with Dr. Zainab: your health, bowel habits, medicines and any contraindications are checked, and she decides the type and course." },
    { time: "Step 2", title: "Preparation", content: "A short oil massage (Abhyanga) and gentle heat (Swedana) to the abdomen and lower back, usually on the same day." },
    { time: "Step 3", title: "The Basti", content: "Given by a same-gender therapist in a private room while you lie on your left side; it takes only a few minutes." },
    { time: "Step 4", title: "Rest and aftercare", content: "You rest while the medicine is retained or passed, then receive diet and activity advice for the rest of the day." }
  ],
  footer: "How long you stay at the clinic depends on the type of Basti and your plan."
};

export const bastiApplications = {
  label: "WHAT BASTI IS USED FOR",
  title: "When Basti may help.",
  description: "The doctor checks the cause first; some problems need medical care instead.",
  whereItExcels: [
    { title: "Ayurvedic back pain treatment and sciatica", subtitle: "Often Matra or alternating Basti", href: "/conditions/back-pain-ayurveda-dubai/" },
    { title: "Joint stiffness and arthritis-related pain", subtitle: "Usually a course", href: "/conditions/arthritis-ayurveda-dubai/" },
    { title: "Ayurveda for IBS and digestion", subtitle: "Alongside diet changes", href: "/conditions/ibs-ayurveda-dubai/" },
    { title: "Nerve-related conditions", subtitle: "As support, alongside neurology and physiotherapy", href: "/physiotherapy/neurological-dubai/" },
    { title: "Within Panchakarma", subtitle: "One of the five actions", href: "/treatments/panchakarma-dubai/" }
  ]
};

export const bastiSafety = {
  label: "SAFETY",
  title: "Who should not have Basti, and possible side effects.",
  leftCard: {
    label: "NOT SUITABLE (OR NEEDS CLEARANCE FIRST)",
    title: "Your doctor will not give Basti if you have:",
    useWarningIcon: true,
    items: [
      "Active rectal bleeding, or painful piles or fissures",
      "A flare of inflammatory bowel disease, or severe diarrhoea",
      "Fever or acute illness",
      "Recent abdominal or rectal surgery",
      "Suspected bowel obstruction",
      "Pregnancy (for most forms)"
    ]
  },
  rightCard: {
    label: "POSSIBLE SIDE EFFECTS",
    title: "Usually mild and short-lived:",
    items: [
      { text: "A feeling of fullness or mild cramping", icon: "check" },
      { text: "Loose stools for a short time after a decoction Basti", icon: "check" },
      { text: "Tiredness on the day of treatment", icon: "check" },
      { text: "Rarely, local irritation (tell the therapist)", icon: "check" }
    ]
  },
  footer: "Tell the doctor about any bowel condition and all medicines you take before your first session."
};

export const bastiFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "BASTI QUESTIONS",
  sidebarLinks: [
    { text: "Panchakarma", href: "/treatments/panchakarma-dubai/" },
    { text: "Kativasti", href: "/treatments/kativasti-dubai/" },
    { text: "Neck pain & cervical spondylosis", href: "/conditions/cervical-spondylosis-ayurveda-jvc/" },
    { text: "Ayurvedic skin treatment", href: "/conditions/skin-ayurveda-dubai/" },
    { text: "Ayurvedic weight loss", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Basti: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Basti.",
  faqs: [
    {
      question: "What is Basti treatment?",
      answer: "Basti is a classical Ayurvedic therapy in which a medicated oil or herbal decoction is given as an enema. It is one of the five actions of Panchakarma and is traditionally called 'half of all treatment' because it is used for so many long-standing problems, especially of the back, joints, nerves and digestion."
    },
    {
      question: "What are the types of Basti?",
      answer: "Anuvasana Basti uses medicated oil; Niruha (also called Kashaya or Asthapana) Basti uses a herbal decoction; Matra Basti is a small daily dose of oil; Uttara Basti is a specialised form given into the bladder or uterus. All four are available at Vedara Care; the doctor chooses which suits you."
    },
    {
      question: "Where can I get Basti treatment in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall. Basti is prescribed and supervised by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor, and the clinic is open daily 9am to 10pm. It is close to JVT, Al Barsha South and Arjan."
    },
    {
      question: "What is Basti used for?",
      answer: "It is traditionally used for chronic lower back pain and sciatica, joint stiffness, some digestive problems such as constipation and IBS, and as support in nerve-related conditions. The doctor decides after assessment whether Basti suits you."
    },
    {
      question: "Can I have Basti without Panchakarma?",
      answer: "Yes. Basti can be given on its own as a course, for example Matra Basti for back pain, or as part of a full Panchakarma programme."
    },
    {
      question: "How many Basti sessions do I need?",
      answer: "It depends on your needs. Classical courses run for 8, 16 or 30 days (Yoga, Kala and Karma Basti), alternating oil and decoction; the doctor sets your course after consultation."
    },
    {
      question: "Is Basti painful?",
      answer: "It should not be painful. Most people feel fullness and an urge to empty the bowel; mild cramping can happen. The therapist and doctor make sure you are comfortable."
    },
    {
      question: "What is the difference between Basti and Kati Vasti or Janu Vasti?",
      answer: "Basti (Vasti) is an enema. Kati Vasti and Janu Vasti are different therapies with a similar name, in which warm oil is held on the lower back or knee inside a ring of dough; nothing is given internally."
    },
    {
      question: "Who should not have Basti?",
      answer: "Basti is not given, or is postponed, with active rectal bleeding, painful piles or fissures, a flare of inflammatory bowel disease, severe diarrhoea, fever, recent abdominal or rectal surgery, suspected bowel obstruction or, for most forms, pregnancy. The doctor checks this at consultation."
    },
    {
      question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by male therapists and women by female therapists."
    },
    {
      question: "How much does Basti cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic therapy session commonly costs around AED 250 to 700, depending on the clinic and the type of Basti. The total depends on how many sessions you need. Vedara Care shares exact prices on WhatsApp."
    },
    {
      question: "How do I book Basti in JVC?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Your first visit is a 45 to 60-minute consultation with Dr. Zainab."
    }
  ]
};

export const bastiLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Basti in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Basti treatment at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a Basti consultation",
  buttonHref: "/book/"
};

export const bastiFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation. The right Basti follows from it.",
  description: "In 45 to 60 minutes, Dr. Zainab will check whether Basti suits you, which type, and how long your course should be.",
  button1Text: "Book a Basti consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Basti.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapists", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const bastiRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Panchakarma", description: "Basti is one of the five Panchakarma actions.", href: "/treatments/panchakarma-dubai/" },
    { title: "Kativasti", description: "Warm oil held over the lower back (not an enema).", href: "/treatments/kativasti-dubai/" },
    { title: "Janu Basti", description: "Warm oil held over the knee inside a dough ring (not an enema).", href: "/treatments/janu-basti-jvc/" },
    { title: "Udvartana", description: "Herbal powder massage, often in the same plan.", href: "/treatments/udvartana-jvc/" },
    { title: "Nasya", description: "Nasal oil therapy, another Panchakarma action.", href: "/treatments/nasya-therapy-jvc/" }
  ]
};

