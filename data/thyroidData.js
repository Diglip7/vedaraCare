// data/thyroidData.js (replace the whole file)
export const thyroidHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Thyroid (Ayurveda)", active: true }
  ],
  label: "AYURVEDA FOR THYROID · JVC, DUBAI · DHA FACILITY LICENCE 2509266",
  title: "Ayurvedic treatment for thyroid in JVC, Dubai — alongside your thyroid medicine, never instead of it.",
  description: "Support for hypothyroidism, Hashimoto's and other thyroid conditions: diet, routine, prescribed herbs and gentle therapies planned by Dr. Zainab Sheikh (BAMS, MD Ayurveda), with our GP testing and treating thyroid conditions at the same clinic near Circle Mall, JVC.",
  primaryCTA: "Book a thyroid consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20thyroid%20care.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "GP tests and treats thyroid on site", "Never replaces thyroid medicine"],
  floatingCard: { title: "YOUR MEDICINE STAYS", subtitle: "Ayurvedic care is planned around your thyroid medicine, never instead of it." },
  image: "/images/thyroid-ayurveda-dubai-hero.webp",
  alt: "Ayurvedic thyroid consultation at Vedara Care, JVC Dubai"
};

export const thyroidIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurveda and thyroid, in one paragraph.",
  blockquote: "Ayurvedic care for thyroid conditions is supportive: it works alongside your thyroid medicine (such as levothyroxine) to help with the symptoms many people still have — tiredness, weight gain, poor digestion, low mood and poor sleep — and it never replaces that medicine. A plan usually combines diet and daily routine for your constitution, prescribed herbs chosen with safety checks, and gentle therapies such as Abhyanga, with Panchakarma only when your levels are stable. There is no good evidence that any Ayurvedic medicine cures Hashimoto's or other thyroid diseases, and overactive thyroid (Graves') is supported only alongside your doctor. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, care starts with a 45 to 60 minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and our GP can test and treat thyroid conditions at the same clinic. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const thyroidNever = {                               // rendered with ClinicalBoundaries
  label: "OUR PROMISE",
  title: "What we will never do, and what we will do.",
  leftCard: {
    label: "WE WILL NEVER",
    title: "At Vedara Care we never:",
    useWarningIcon: true,
    items: ["Ask you to stop or reduce thyroid medicine", "Claim Ayurveda can cure Hashimoto's, Graves' or any thyroid disease", "Promise a set change in your blood results", "Give herbs without checking your thyroid levels and medicines"]
  },
  rightCard: {
    label: "WE WILL",
    title: "We will:",
    items: [
      { text: "Plan Ayurveda around your thyroid medicine", icon: "check" },
      { text: "Check your blood tests regularly through our GP", icon: "check" },
      { text: "Work with your endocrinologist if you have one", icon: "check" },
      { text: "Focus on how you feel: energy, digestion, weight, sleep", icon: "check" }
    ]
  },
  footer: ""
};

export const thyroidTypes = {                               // rendered with TreatmentOils
  label: "THYROID CONDITIONS WE SUPPORT",
  title: "Which thyroid condition do you have?",
  description: "Ayurvedic care differs by condition; your thyroid medicine always comes first.",
  oils: [
    { name: "Hypothyroidism on levothyroxine", description: "Underactive thyroid", content: "Results in range but still tired, gaining weight, hair thinning or feeling low.", indication: "energy, digestion, weight, <a href='/conditions/hair-loss-ayurveda-dubai/'>Ayurveda for hair loss</a>" },
    { name: "Hashimoto's thyroiditis", description: "Autoimmune, underactive", content: "Diet, stress and routine support alongside levothyroxine.", indication: "symptoms and overall well-being" },
    { name: "Subclinical hypothyroidism", description: "Borderline results", content: "Monitored by our GP; Ayurveda supports diet and routine.", indication: "early, mild changes" },
    { name: "After thyroid removal or radioactive iodine", description: "Lifelong levothyroxine", content: "Support for energy and quality of life; the medicine dose is never affected by Ayurveda.", indication: "quality of life" },
    { name: "Postpartum thyroid problems", description: "After childbirth", content: "Part of <a href='/conditions/postnatal-ayurveda-dubai/'>postnatal care</a>, with GP monitoring.", indication: "recovery after birth" },
    { name: "Overactive thyroid (Graves')", description: "Supportive care only", content: "Calming diet and routine alongside the doctor who manages your medicine; no stimulating herbs.", indication: "stress, sleep, heat" }
  ],
  footer: ""
};

export const thyroidPlan = {                                // rendered with TreatmentOils
  label: "YOUR AYURVEDIC PLAN",
  title: "What Ayurvedic thyroid care includes.",
  description: "Chosen for your condition, constitution and medicines, and reviewed with blood tests.",
  oils: [
    { name: "Diet and daily routine", description: "For your constitution", content: "Regular, cooked meals; levothyroxine on an empty stomach, apart from coffee, calcium and iron.", indication: "every plan" },
    { name: "Prescribed herbs", description: "With safety checks", content: "For example Kanchanar Guggulu or Ashwagandha in underactive thyroid only, checked against your levels and medicines. Bought at a pharmacy.", indication: "selected patients" },
    { name: "<a href='/treatments/abhyanga-dubai/'>Abhyanga</a> and <a href='/treatments/shirodhara-dubai/'>Shirodhara</a>", description: "Gentle therapies", content: "For stress, sleep and tiredness.", indication: "symptom support" },
    { name: "<a href='/treatments/panchakarma-dubai/'>Panchakarma</a>", description: "When levels are stable", content: "Planned with careful timing around your thyroid medicine.", indication: "selected patients" }
  ],
  footer: "Ashwagandha is not used in overactive thyroid because it can raise thyroid hormone levels."
};

export const thyroidMechanism = {                           // rendered with TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "AYURVEDA AND YOUR GP, ONE CLINIC",
  title: "Thyroid tests and treatment, with Ayurveda alongside.",
  content: [
    "Our GP can order thyroid blood tests — TSH, free T4, free T3 and thyroid antibodies — and diagnose and treat thyroid conditions, including managing thyroid medicine.",
    "Dr. Zainab plans your Ayurvedic care around that treatment, and both review your progress together, so you have one plan at one clinic in JVC.",
    "What does the research say? Ayurveda is best used alongside standard thyroid treatment; there is limited research on its effect on thyroid disease, and some evidence that Ashwagandha may help underactive thyroid. That is why we pair it with regular blood tests."
  ],
  sources: "Source: <a href='https://www.healthline.com/health/ayurvedic-medicine-for-thyroid' target='_blank' rel='noopener'>Healthline: Ayurvedic medicine for thyroid</a>",
  image: "/images/thyroid-bloodwork-consultation-vedara-jvc.webp",
  alt: "Reviewing thyroid blood test results at Vedara Care, JVC"
};

export const thyroidProtocol = {                            // rendered with TreatmentProtocol
  label: "HOW IT WORKS",
  title: "Your thyroid care at Vedara, step by step.",
  description: "",
  phases: [
    { time: "Step 1", title: "Consultation", content: "A 45-60 minute consultation with Dr. Zainab: your thyroid history, medicines, symptoms and recent results." },
    { time: "Step 2", title: "Blood tests", content: "Our GP orders any tests you need and reviews your thyroid treatment." },
    { time: "Step 3", title: "Your plan", content: "Diet, routine, herbs if suitable, and therapies — written down, planned around your medicine." },
    { time: "Step 4", title: "Review", content: "Regular reviews and repeat blood tests; plan length depends on your needs, usually a few months." }
  ],
  footer: ""
};

export const thyroidFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "THYROID QUESTIONS",
  sidebarLinks: [
    { text: "Ayurvedic weight loss", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { text: "Ayurveda for PCOS", href: "/conditions/pcos-ayurveda-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Ayurveda and thyroid: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20thyroid%20care.",
  faqs: [
    { question: "Can Ayurveda help thyroid problems?",
      answer: "Ayurveda can support people with thyroid conditions — energy, digestion, weight, sleep and stress — alongside their thyroid medicine. It does not replace thyroid medicine, and there is no good evidence that any Ayurvedic medicine cures Hashimoto's or other thyroid diseases." },
    { question: "Can I stop my thyroid medicine if I do Ayurvedic treatment?",
      answer: "No. Never stop or change levothyroxine, carbimazole or any thyroid medicine without your doctor. Ayurvedic care is planned around your medicine, not instead of it." },
    { question: "Where can I get Ayurvedic thyroid care in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. Our GP can test and treat thyroid conditions at the same clinic. Open daily 9am to 10pm, close to JVT, Al Barsha South and Arjan." },
    { question: "Which thyroid conditions do you support?",
      answer: "Hypothyroidism on levothyroxine, Hashimoto's thyroiditis, subclinical hypothyroidism, life after thyroid removal or radioactive iodine, postpartum thyroid problems, and overactive thyroid (Graves') as supportive care only, alongside your doctor." },
    { question: "Why do I still feel tired if my TSH is normal?",
      answer: "Many people on thyroid medicine still feel tired, gain weight or feel low even with normal results. The causes can include sleep, stress, iron or vitamin levels and digestion. Our GP can check these, and Ayurvedic care focuses on energy, digestion and routine." },
    { question: "What is Kanchanar Guggulu?",
      answer: "A classical Ayurvedic preparation traditionally used for thyroid swelling and Kapha conditions. It is prescribed by the doctor only when suitable and checked against your other medicines; Vedara does not sell it." },
    { question: "Is Ashwagandha good for thyroid?",
      answer: "Some studies suggest Ashwagandha may help underactive thyroid, but it can raise thyroid hormone levels, so it is not used in overactive thyroid and is only taken under a doctor's advice with blood tests." },
    { question: "What is a good Hashimoto's or thyroid diet?",
      answer: "Regular, cooked, whole-food meals, enough protein, and limiting ultra-processed food and sugar suit most people. Take levothyroxine on an empty stomach, apart from coffee, calcium and iron. Dr. Zainab adapts the diet to your constitution and digestion." },
    { question: "Do you test thyroid levels?",
      answer: "Yes. Our GP can order thyroid blood tests such as TSH, free T4, free T3 and thyroid antibodies, and review them with you." },
    { question: "Can the GP treat my thyroid condition?",
      answer: "Yes. Our GP can diagnose and treat thyroid conditions, including managing thyroid medicine, and coordinates with Dr. Zainab so your Ayurvedic care fits around it." },
    { question: "Can I have Panchakarma if I have a thyroid condition?",
      answer: "Often, yes, if your thyroid levels are stable. The doctor plans the timing of therapies and your thyroid medicine carefully." },
    { question: "How long does Ayurvedic thyroid care take?",
      answer: "It depends on your condition and goals; most plans run for a few months with regular reviews and blood tests." },
    { question: "How much does Ayurvedic thyroid care cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500; therapies and blood tests are extra and depend on your plan. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring your latest thyroid blood tests and a list of your medicines." }
  ]
};

export const thyroidLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Thyroid care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about thyroid care at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a thyroid consultation",
  buttonHref: "/book/"
};

export const thyroidCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Bring your latest results. We will plan around your medicine.",
  description: "In 45 to 60 minutes, Dr. Zainab will review your thyroid history and plan Ayurvedic care, with our GP for tests and treatment at the same clinic.",
  button1Text: "Book a thyroid consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20thyroid%20care.",
  bullets: ["Prices shared on WhatsApp", "GP tests and treats thyroid", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const thyroidRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Ayurvedic weight loss", description: "When weight is part of the picture.", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { title: "Ayurveda for PCOS", description: "Hormonal care for women.", href: "/conditions/pcos-ayurveda-dubai/" },
    { title: "Ayurveda for diabetes", description: "Metabolic and blood-sugar support alongside medicine.", href: "/conditions/diabetes-ayurveda-dubai/" },
    { title: "Postnatal Ayurveda", description: "Including thyroid problems after birth.", href: "/conditions/postnatal-ayurveda-dubai/" },
    { title: "Ayurvedic consultation", description: "Pulse diagnosis and a full assessment.", href: "/treatments/nadi-pareeksha-jvc/" }
  ]
};
