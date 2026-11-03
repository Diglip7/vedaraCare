// data/abhyangaData.js (replace the whole file)
export const abhyangaHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Abhyanga in JVC", active: true }
  ],
  label: "ABHYANGA · ABHYANGAM · JVC, DUBAI",
  title: "Abhyanga (Abhyangam) massage in JVC, Dubai — warm medicated oil, chosen for you.",
  description: "Abhyanga is the classical Ayurvedic full-body oil massage. Dr. Zainab Sheikh (BAMS, MD Ayurveda) chooses the oil for your constitution, a same-gender therapist gives the massage in a private room, and medicated steam often follows. At our DHA-licensed clinic near Circle Mall, JVC.",
  primaryCTA: "Book Abhyanga",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20Abhyanga%20in%20JVC.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Same-gender therapist, private room", "Near Circle Mall, JVC"],
  floatingCard: { title: "THE OIL IS THE MEDICINE", subtitle: "Chosen for your dosha by the doctor — not one oil for everyone." },
  image: "/images/abhyanga-dubai-hero.webp",
  alt: "Abhyanga full-body warm oil massage at Vedara Care Ayurveda clinic, JVC Dubai"
};

export const abhyangaIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Abhyanga, in one paragraph.",
  blockquote: "Abhyanga (Abhyangam in Malayalam) is the classical Ayurvedic full-body massage with warm medicated oil, chosen for your constitution (dosha); it is the most common Ayurvedic massage and is often followed by medicated steam (Swedana). It is used for stress, poor sleep, muscle and joint stiffness, dry skin and general well-being, and as preparation in Panchakarma. A small 2011 pilot study found a single Abhyanga lowered reported stress and heart rate, though larger studies are needed. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, your first visit includes a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), who chooses the oil, and a same-gender therapist gives the massage in a private room; she can also teach you a simple daily self-Abhyanga routine for home. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const abhyangaMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "WHAT ABHYANGA IS",
  title: "A full-body warm oil massage, with the oil as the medicine.",
  content: [
    "In Ayurveda, daily oiling of the body is part of healthy routine (Dinacharya), like brushing your teeth. Clinical Abhyanga adds three things: a medicated oil chosen for you, a trained therapist, and a doctor's plan.",
    "The therapist uses long strokes on the limbs and circular strokes on the joints, warming the oil and working from head to feet. Steam (Swedana) afterwards helps the oil work, then you rest before showering.",
    "What does the research say? In a 2011 pilot study of 20 healthy adults, a one-hour Abhyanga reduced reported stress and heart rate, and lowered blood pressure in those with prehypertension. It was small, so we present Abhyanga as relaxation and well-being support, not a cure."
  ],
  sources: "Source: <a href='https://pubmed.ncbi.nlm.nih.gov/21568717/' target='_blank' rel='noopener'>Basler 2011, Abhyanga massage and subjective stress, J Altern Complement Med (PubMed)</a>",
  image: "/images/abhyanga-medicated-oil-brass-bowl-jvc.webp",
  alt: "Warm medicated Abhyanga oil in a brass bowl at Vedara Care, JVC"
};

export const abhyangaProtocol = {
  bgColor: "bg-white",
  label: "WHAT HAPPENS",
  title: "What happens at an Abhyanga session.",
  description: "Every session follows the same steps; the oil, length and course are set by your doctor.",
  phases: [
    { time: "Step 1", title: "Consultation", content: "Your first visit includes a 45-60 minute consultation with Dr. Zainab, who chooses the oil for your dosha and checks you are fit for massage." },
    { time: "Step 2", title: "Head and face", content: "A same-gender therapist starts with warm oil on the scalp, face and neck." },
    { time: "Step 3", title: "Full-body massage", content: "Long strokes on the arms and legs, circular strokes on the joints, then the back and front of the body." },
    { time: "Step 4", title: "Steam (Swedana)", content: "Medicated steam, if prescribed, while the oil is still on the skin." },
    { time: "Step 5", title: "Rest and shower", content: "A short rest, then a warm shower; light food and no cold drinks afterwards." }
  ],
  footer: "Session length and the number of sessions depend on your plan."
};

export const abhyangaOils = {
  bgColor: "bg-[#FAF6EF]",
  label: "OILS FOR YOUR DOSHA",
  title: "Different people, different oils.",
  description: "The oil in Abhyanga is a classical medicated preparation chosen for your constitution and current imbalance.",
  oils: [
    { name: "Vata", description: "Cold, dry, irregular", content: "Warming, heavier oils on a sesame base, such as Ksheerabala or Dhanwantharam Taila.", indication: "<a href='/conditions/stress-anxiety-ayurveda-dubai/'>anxiety</a>, <a href='/conditions/insomnia-ayurveda-jvc/'>poor sleep</a>, joint stiffness, dry skin" },
    { name: "Pitta", description: "Hot, sharp, intense", content: "Cooling oils, often coconut-based preparations.", indication: "heat sensitivity, irritability, some skin problems" },
    { name: "Kapha", description: "Heavy, slow, congested", content: "Lighter, warming oils used more briskly.", indication: "sluggishness, heaviness, congestion" }
  ],
  footer: "Most people are a mix of doshas; the doctor prescribes a blend or changes the oil during a course."
};

export const abhyangaBenefits = {                           // rendered with TreatmentBenefits
  label: "ABHYANGA BENEFITS",
  title: "What people use Abhyanga for.",
  benefitGroups: [
    { title: "Stress and sleep", description: "The most common reason people book Abhyanga.", benefits: ["Calmer mind after the session", "Better sleep, especially with a course", "Often combined with <a href='/treatments/shirodhara-dubai/'>Shirodhara</a>"] },
    { title: "Stiffness and tension", description: "Warm oil and steam for tight muscles and stiff joints.", benefits: ["Desk-work neck and shoulder tension", "Morning stiffness", "Often combined with <a href='/treatments/patra-pinda-sweda-jvc/'>Kizhi</a> or physiotherapy"] },
    { title: "Skin and well-being", description: "Daily oiling is a classical part of healthy routine.", benefits: ["Dry skin", "Recovery after illness or childbirth", "Preparation for <a href='/treatments/panchakarma-dubai/'>Panchakarma</a>"] }
  ],
  footer: "Results differ from person to person."
};

export const abhyangaVariants = {                           // NEW — rendered with TreatmentOils
  label: "HEAD, FOOT AND AT HOME",
  title: "Other ways to have Abhyanga.",
  description: "All available at our JVC clinic, plus a routine you can do yourself.",
  oils: [
    { name: "Shiro Abhyanga", description: "Head, neck and shoulders", content: "Warm oil massaged into the scalp, neck and shoulders.", indication: "tension headaches, stress, dry scalp" },
    { name: "Padabhyanga", description: "Feet and lower legs", content: "Warm oil massage of the feet and lower legs.", indication: "tired feet, poor sleep" },
    { name: "Self-Abhyanga at home", description: "Daily self-care", content: "Dr. Zainab can teach you a simple daily routine: warm a small amount of the oil she recommends (bought at a pharmacy), massage head to feet for a few minutes, rest, then shower.", indication: "keeping the benefit between sessions" }
  ],
  footer: "Vedara Care does not offer home massage; self-Abhyanga is advice for your own routine. Compare all types on our <a href='/treatments/ayurvedic-massage-jvc/'>Ayurvedic massage</a> page."
};

export const abhyangaSafety = {                             // rendered with ClinicalBoundaries
  label: "SAFETY",
  title: "When Abhyanga is postponed, and possible side effects.",
  leftCard: {
    label: "NOT TODAY IF YOU HAVE",
    title: "The doctor will postpone or change Abhyanga if you have:",
    useWarningIcon: true,
    items: ["Fever, a cold or acute illness", "Indigestion, or have just eaten a heavy meal", "Broken skin, a rash or skin infection", "A recent injury with swelling, or calf pain or swelling", "First trimester of pregnancy", "Uncontrolled blood pressure or a heart condition (steam is adjusted)"]
  },
  rightCard: {
    label: "POSSIBLE SIDE EFFECTS",
    title: "Usually mild:",
    items: [
      { text: "Feeling sleepy or slow afterwards", icon: "check" },
      { text: "Oily hair and skin until you shower", icon: "check" },
      { text: "Feeling light-headed after steam (rest and drink water)", icon: "check" },
      { text: "Rarely, skin irritation from an oil (tell the therapist)", icon: "check" }
    ]
  },
  footer: "Prenatal Abhyanga from the second trimester and <a href='/conditions/postnatal-ayurveda-dubai/' className='underline hover:text-[#B8915A]'>postnatal Abhyanga</a> are available after the doctor's assessment."
};

export const abhyangaPrograms = {                           // rendered with TreatmentPrograms
  bgColor: "bg-[#F9F6F1]",
  label: "SESSIONS AND COURSES",
  title: "A single session or a course. Your doctor recommends which.",
  whatsappNumber: "971555736312",
  programs: [
    { name: "Single Abhyanga", price: "Prices shared on WhatsApp", duration: "Length set at consultation",
      features: ["Consultation on your first visit", "Oil chosen for your dosha", "Steam (Swedana) if prescribed", "Same-gender therapist"], bestFor: "Stress relief, a reset",
      buttonText: "Ask about a session", whatsappMessage: "Hello Vedara Care, I would like to ask about an Abhyanga session." },
    { name: "Abhyanga course", price: "Prices shared on WhatsApp", duration: "Length set by your doctor", featured: true,
      features: ["Consultation and oil selection", "A course of Abhyanga with steam", "Doctor review during the course", "A self-Abhyanga routine for home"], bestFor: "Poor sleep, long-term stress, stiffness",
      buttonText: "Ask about a course", whatsappMessage: "Hello Vedara Care, I would like to ask about an Abhyanga course." },
    { name: "Abhyanga with Shirodhara", price: "Prices shared on WhatsApp", duration: "Length set by your doctor",
      features: ["Abhyanga and Shirodhara in one plan", "Oils chosen for you", "Doctor review"], bestFor: "Anxiety, insomnia, burnout",
      buttonText: "Ask about the combined plan", whatsappMessage: "Hello Vedara Care, I would like to ask about Abhyanga with Shirodhara." }
  ],
  footer: "Vedara Care does not bill insurers directly; where Abhyanga is part of treatment for a medical condition, we provide the invoice and report for a reimbursement claim."
};

export const abhyangaFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "ABHYANGA QUESTIONS",
  sidebarLinks: [
    { text: "Ayurvedic massage (all types)", href: "/treatments/ayurvedic-massage-jvc/" },
    { text: "Shirodhara", href: "/treatments/shirodhara-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Abhyanga: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Abhyanga.",
  faqs: [
    { question: "What is Abhyanga?",
      answer: "Abhyanga is the classical Ayurvedic full-body massage with warm medicated oil chosen for your constitution (dosha). It is used for stress, sleep, stiffness and general well-being, and is often followed by medicated steam (Swedana)." },
    { question: "Is Abhyangam the same as Abhyanga?",
      answer: "Yes. Abhyangam is the Malayalam name used in Kerala; Abhyanga is the Sanskrit name. They are the same full-body oil massage." },
    { question: "Where can I get Abhyanga in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall. Abhyanga is prescribed by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor, and the clinic is open daily 9am to 10pm. It is close to JVT, Al Barsha South and Arjan." },
    { question: "What are the benefits of Abhyanga?",
      answer: "People use it to relax, sleep better, ease muscle and joint stiffness and improve dry skin. A small 2011 pilot study found a single Abhyanga lowered reported stress and heart rate, and blood pressure in people with slightly raised blood pressure; larger studies are still needed." },
    { question: "Which oil is used for Abhyanga?",
      answer: "The doctor chooses it for your dosha: warming oils such as sesame-based Ksheerabala or Dhanwantharam for Vata, cooling oils such as coconut-based preparations for Pitta, and lighter, warming oils for Kapha. Most people get a blend." },
    { question: "How long does Abhyanga take, and how many sessions do I need?",
      answer: "It depends on your needs. After the consultation, the doctor sets the session length and whether you need a single session or a course." },
    { question: "Is steam part of Abhyanga?",
      answer: "Usually, yes. Medicated steam (Swedana) often follows Abhyanga to help the oil work; the doctor decides whether it suits you." },
    { question: "Can I do Abhyanga at home?",
      answer: "Yes, as self-care. Dr. Zainab can teach you a simple daily self-Abhyanga routine with an oil you buy at a pharmacy. Vedara Care does not offer home massage." },
    { question: "Do you offer head and foot Abhyanga?",
      answer: "Yes. Shiro Abhyanga (head, neck and shoulders) and Padabhyanga (feet and lower legs) are available on their own or with a full-body Abhyanga." },
    { question: "How is Abhyanga different from a spa oil massage?",
      answer: "Abhyanga starts with a doctor's consultation, uses medicated oils chosen for you, and follows a plan; a spa massage usually uses one oil for everyone and is mainly for relaxation." },
    { question: "Who should not have Abhyanga?",
      answer: "It is postponed with fever or acute illness, indigestion or right after a heavy meal, broken skin or a skin infection, a recent injury with swelling, and in the first trimester of pregnancy. The doctor checks this at consultation." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist, in a private room." },
    { question: "How much does Abhyanga cost in Dubai?",
      answer: "Across Dubai, an Abhyanga session commonly costs around AED 250 to 700, depending on the clinic, session length and whether steam is included. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book Abhyanga in JVC?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Your first visit includes a 45 to 60-minute consultation with Dr. Zainab." }
  ]
};

export const abhyangaTreatmentLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Abhyanga in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to book Abhyanga at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book Abhyanga",
  buttonHref: "/book/"
};

export const abhyangaFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Book your Abhyanga in JVC.",
  description: "Your first visit includes a consultation, so the oil and the plan are right for you.",
  button1Text: "Book Abhyanga",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20Abhyanga.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapist", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const abhyangaRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic massages",
  linkHref: "/treatments/ayurvedic-massage-jvc/",
  pages: [
    { title: "Shirodhara", description: "Most often combined with Abhyanga.", href: "/treatments/shirodhara-dubai/" },
    { title: "Pizhichil", description: "Warm oil poured over the body while it is massaged.", href: "/treatments/pizhichil-jvc/" },
    { title: "Kizhi (Elakizhi)", description: "Herbal bundles for stiff joints.", href: "/treatments/patra-pinda-sweda-jvc/" },
    { title: "Udvartana", description: "Herbal powder massage, the drying opposite of Abhyanga.", href: "/treatments/udvartana-jvc/" },
    { title: "Ayurveda for stress and anxiety", description: "Abhyanga and Shirodhara for stress, anxiety and burnout.", href: "/conditions/stress-anxiety-ayurveda-dubai/" }
  ]
};
