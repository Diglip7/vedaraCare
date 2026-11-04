// data/weightLossData.js (replace the whole file)
export const weightLossHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Ayurvedic Weight Loss", active: true }
  ],
  label: "AYURVEDIC WEIGHT LOSS · JVC, DUBAI · DHA FACILITY LICENCE 2509266",
  title: "Ayurvedic treatment for weight loss in JVC, Dubai — steady, realistic, doctor-led.",
  description: "No crash diets and no promised numbers. Dr. Zainab Sheikh (BAMS, MD Ayurveda) finds your weight-gain pattern, our GP checks your blood tests, and your plan combines diet, daily routine, prescribed herbs and Udvartana — with Panchakarma when needed. At our clinic near Circle Mall, JVC.",
  primaryCTA: "Book a weight-loss consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20weight%20loss.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "GP blood tests at the same clinic", "Near Circle Mall, JVC"],
  floatingCard: { title: "NO NUMBERS PROMISED", subtitle: "A plan you can keep, built around why you gained weight." },
  image: "/images/weight-loss-ayurveda-dubai-hero.webp",
  alt: "Ayurvedic weight-management consultation at Vedara Care, JVC Dubai"
};

export const weightLossIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurvedic weight loss, in one paragraph.",
  blockquote: "Ayurvedic treatment for weight loss aims for steady, lasting change rather than fast results: it looks for why you gained weight — slow digestion and metabolism, stress and poor sleep, hormonal changes or insulin resistance — and treats that pattern. A plan usually combines a diet and daily routine for your constitution, prescribed herbs such as Triphala or Vyoshadi Guggulu, Udvartana (dry herbal powder massage) and, for some people, Panchakarma or Lekhana Basti. Evidence for Ayurvedic herbs in obesity is promising but limited, and no honest clinic can promise a set number of kilos. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, the plan starts with a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and our GP can arrange blood tests such as thyroid and HbA1c at the same clinic. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const weightLossMechanism = {                         // rendered with TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "WHY THE WEIGHT STAYS",
  title: "Why diets alone often fail, and how Ayurveda looks at weight.",
  content: [
    "Many people in Dubai have tried diets, gyms and meal plans, lost weight, then regained it. Ayurveda starts by asking why the weight came on: slow digestion (weak Agni), a heavy Kapha pattern, stress and poor sleep, hormonal change, or blood-sugar problems.",
    "In Ayurveda, excess weight is called Sthaulya or Medoroga. Treatment lightens and clears (Langhana), strengthens digestion, and changes daily routine so the result lasts.",
    "What does the research say? A recent trial of the Ayurvedic formulas Vyoshadi Guggulu and Vidanga Churna reported improvements in body measurements and symptoms as a complementary therapy, but the same researchers note these formulas are widely used with limited scientific validation. We treat Ayurveda as support for lasting habits, not a quick fix."
  ],
  sources: "Source: <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12231980/' target='_blank' rel='noopener'>Vyoshadi Guggulu and Vidanga Churna in obesity (PMC)</a>",
  image: "/images/weight-loss-consultation-vedara-jvc.webp",
  alt: "Doctor discussing an Ayurvedic weight-loss plan at Vedara Care, JVC"
};

export const weightLossPatterns = {                          // rendered with TreatmentOils
  label: "FIVE WEIGHT-GAIN PATTERNS",
  title: "Which pattern sounds like you?",
  description: "The doctor confirms your pattern at consultation; most people are a mix.",
  oils: [
    { name: "Slow metabolism (Kapha)", description: "Heavy, slow, steady gain", content: "Weight comes on easily, with sluggish digestion and low energy.", indication: "Udvartana, warming herbs, lighter diet" },
    { name: "Blood-sugar pattern", description: "Belly weight, cravings", content: "Weight around the waist, energy dips after meals, sometimes raised sugar or insulin.", indication: "GP blood tests, diet timing, herbs; <a href='/conditions/diabetes-ayurveda-dubai/'>Ayurveda for diabetes</a>" },
    { name: "Stress and sleep pattern", description: "Gain during busy, stressful periods", content: "Late meals, poor sleep, comfort eating.", indication: "Routine, sleep, calming herbs; <a href='/treatments/shirodhara-dubai/'>Shirodhara</a>" },
    { name: "Hormonal pattern", description: "PCOS, thyroid, after childbirth, perimenopause", content: "Weight linked to a hormonal change.", indication: "GP blood tests, <a href='/conditions/pcos-ayurveda-dubai/'>PCOS care</a>, <a href='/conditions/thyroid-ayurveda-dubai/'>thyroid care</a>, <a href='/conditions/postnatal-ayurveda-dubai/'>postnatal care</a>" },
    { name: "Digestive pattern", description: "Bloating, irregular digestion", content: "Weight that fluctuates with digestion problems.", indication: "Agni-building diet and herbs; <a href='/conditions/ibs-ayurveda-dubai/'>Ayurveda for IBS and digestion</a>" }
  ],
  footer: "This list helps you understand the idea; it does not replace a consultation."
};

export const weightLossPlan = {                              // rendered with TreatmentOils
  label: "YOUR AYURVEDIC PLAN",
  title: "What an Ayurvedic weight-loss plan includes.",
  description: "Chosen for your pattern and reviewed as you go.",
  oils: [
    { name: "Diet for your constitution", description: "What and when to eat", content: "Simple, practical changes that fit life in Dubai, including meal timing.", indication: "every plan" },
    { name: "Daily routine (Dinacharya)", description: "Sleep, wake and meal rhythm", content: "Regular timing to support digestion and energy.", indication: "every plan" },
    { name: "Prescribed herbs", description: "Bought at a pharmacy", content: "For example Triphala, Vyoshadi Guggulu or Vidanga, checked against your other medicines.", indication: "most plans" },
    { name: "<a href='/treatments/udvartana-jvc/'>Udvartana</a>", description: "Dry herbal powder massage", content: "Traditionally used to reduce heaviness; given by a same-gender therapist.", indication: "Kapha pattern" },
    { name: "<a href='/treatments/panchakarma-dubai/'>Panchakarma</a> or <a href='/treatments/basti-jvc/'>Lekhana Basti</a>", description: "When needed", content: "Classical cleansing for some patterns.", indication: "selected patients" }
  ],
  footer: "Your plan is Ayurvedic; for other medical treatment, we coordinate with your doctor."
};

export const weightLossProtocol = {                          // rendered with TreatmentProtocol
  label: "HOW IT WORKS",
  title: "Your first weeks at Vedara Care.",
  description: "",
  phases: [
    { time: "Step 1", title: "Consultation", content: "A 45-60 minute consultation with Dr. Zainab: your history, eating, sleep, stress, medicines and goals." },
    { time: "Step 2", title: "Blood tests if needed", content: "Our GP can order tests such as thyroid function, HbA1c, insulin and lipids." },
    { time: "Step 3", title: "Your plan", content: "Diet, routine, herbs and therapies such as Udvartana, written down for you." },
    { time: "Step 4", title: "Regular reviews", content: "Weight, waist, energy and digestion are checked and the plan adjusted. Plan length depends on your needs, usually a few months." }
  ],
  footer: "Herbs are prescribed and bought at a licensed pharmacy."
};

export const weightLossGlp1 = {                              // rendered with TreatmentMechanism
  bgColor: "bg-white",
  label: "AYURVEDA AND GLP-1 MEDICINES",
  title: "Ozempic, Wegovy or Mounjaro? Here is where Ayurveda fits.",
  content: [
    "GLP-1 medicines can be the right choice for some people, especially with significant obesity or type 2 diabetes. They are prescribed by your doctor, and Ayurveda does not replace them.",
    "If you take one, Ayurveda can work alongside it with your doctor's knowledge, focusing on digestion, diet and routine. If you have stopped and regained weight, Ayurveda can help you build habits that support a stable weight.",
    "Dr. Zainab checks any herbs against your medicines before prescribing."
  ],
  image: "/images/ayurveda-weight-management-consultation-jvc-dubai.webp",
  alt: "Ayurvedic weight-management consultation at Vedara Care, JVC"
};

export const weightLossBoundaries = {                        // rendered with ClinicalBoundaries
  label: "SEE A DOCTOR FIRST",
  title: "When weight needs a medical check before Ayurveda.",
  leftCard: {
    label: "GET CHECKED FIRST",
    title: "Talk to our GP or your doctor if you have:",
    useWarningIcon: true,
    items: ["Unexplained weight gain or weight loss", "Known thyroid disease, diabetes or PCOS", "Heart disease or high blood pressure", "An eating disorder now or in the past", "Pregnancy or breastfeeding", "Many regular medicines"]
  },
  rightCard: {
    label: "WHAT WE DO NOT DO",
    title: "At Vedara Care we do not:",
    items: [
      { text: "Promise a number of kilos", icon: "check" },
      { text: "Offer crash diets or 'detox' fasts", icon: "check" },
      { text: "Sell weight-loss products", icon: "check" },
      { text: "Ask you to stop prescribed medicines", icon: "check" }
    ]
  },
  footer: "Blood tests through our GP help make the plan safe and specific."
};

export const weightLossPrograms = {                          // rendered with TreatmentPrograms
  bgColor: "bg-[#F9F6F1]",
  label: "HOW TO START",
  title: "Three ways to start.",
  whatsappNumber: "971555736312",
  programs: [
    { name: "Consultation", price: "Prices shared on WhatsApp", duration: "45-60 minutes",
      features: ["Pattern assessment", "Diet and routine advice", "Prescription if needed", "Advice on blood tests"], bestFor: "Finding out what suits you",
      buttonText: "Book a consultation", whatsappMessage: "Hello Vedara Care, I would like to book an Ayurvedic weight-loss consultation." },
    { name: "Weight-management plan", price: "Prices shared on WhatsApp", duration: "Length set by your doctor", featured: true,
      features: ["Consultation and regular reviews", "GP blood tests if needed", "Udvartana sessions", "Diet, routine and herbs"], bestFor: "Steady, lasting change",
      buttonText: "Ask about the plan", whatsappMessage: "Hello Vedara Care, I would like to ask about an Ayurvedic weight-management plan." },
    { name: "Plan with Panchakarma", price: "Prices shared on WhatsApp", duration: "Length set by your doctor",
      features: ["Everything in the plan", "Panchakarma or Lekhana Basti", "Closer doctor supervision"], bestFor: "Selected patterns, after assessment",
      buttonText: "Ask about Panchakarma", whatsappMessage: "Hello Vedara Care, I would like to ask about Panchakarma for weight management." }
  ],
  footer: "Vedara Care does not bill insurers directly; where treatment is for a diagnosed medical condition, we provide the invoice and report for a reimbursement claim."
};

export const weightLossFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "WEIGHT-LOSS QUESTIONS",
  sidebarLinks: [
    { text: "Udvartana", href: "/treatments/udvartana-jvc/" },
    { text: "Panchakarma", href: "/treatments/panchakarma-dubai/" },
    { text: "Ayurveda for PCOS", href: "/conditions/pcos-ayurveda-dubai/" }
  ],
  title: "Ayurvedic weight loss: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20weight%20loss.",
  faqs: [
    { question: "Does Ayurveda work for weight loss?",
      answer: "Ayurveda can support steady weight loss when it changes daily habits: diet, routine, sleep and stress, with herbal medicines and therapies such as Udvartana. Small studies of Ayurvedic herbal formulas report improvements in body measurements, but evidence is limited, and there is no quick fix." },
    { question: "Where can I get Ayurvedic treatment for weight loss in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. Our GP can arrange blood tests at the same clinic. Open daily 9am to 10pm, close to JVT, Al Barsha South and Arjan." },
    { question: "How much weight can I lose with Ayurveda?",
      answer: "It depends on your body, health, starting point and how closely you follow the plan, so we do not promise a number. A slow, steady loss that you can keep up is the aim; the doctor will set realistic goals with you." },
    { question: "What does an Ayurvedic weight-loss plan include?",
      answer: "A consultation, blood tests if needed, a diet and daily routine for your constitution, prescribed herbs, and therapies such as Udvartana; some people also need Panchakarma or Lekhana Basti. The plan is reviewed as you go." },
    { question: "Does Udvartana burn fat?",
      answer: "No massage burns fat on its own. Udvartana, a dry herbal powder massage, is traditionally used to reduce heaviness and support weight management alongside diet and routine." },
    { question: "Which Ayurvedic medicine is best for weight loss?",
      answer: "There is no single best medicine. Doctors commonly use preparations such as Triphala, Vyoshadi Guggulu or Vidanga, chosen for your pattern and checked against your other medicines. Vedara Care prescribes; you buy them at a licensed pharmacy." },
    { question: "Why do I need blood tests?",
      answer: "Weight gain can come from thyroid problems, insulin resistance, PCOS or medicines. Our GP can order tests such as thyroid function, HbA1c, insulin and lipids so the plan treats the real cause." },
    { question: "Can I use Ayurveda with Ozempic, Wegovy or Mounjaro?",
      answer: "Often, yes, with your prescribing doctor's knowledge. Ayurveda focuses on diet, digestion and routine, which can help you keep weight off; the doctor checks for interactions with any herbs." },
    { question: "I regained weight after stopping a GLP-1 medicine. Can Ayurveda help?",
      answer: "It can help you build the eating and daily habits that support a stable weight. Talk to your prescribing doctor about the medicine itself; we plan the Ayurvedic side around it." },
    { question: "How long does Ayurvedic weight-loss treatment take?",
      answer: "It depends on your needs; most plans run for a few months, with regular reviews. The doctor sets the length at your first consultation." },
    { question: "Who should see a doctor first?",
      answer: "Anyone with unexplained weight gain or loss, a thyroid problem, diabetes, PCOS, heart disease, an eating disorder, or who is pregnant or breastfeeding. Our GP and Dr. Zainab will check this before starting." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist." },
    { question: "How much does Ayurvedic weight-loss treatment cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500 and a therapy session such as Udvartana around AED 250 to 700; herbs are bought separately. The total depends on your plan. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring recent blood test results if you have them." }
  ]
};

export const weightLossTreatmentLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Ayurvedic weight management in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Ayurvedic weight loss at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a consultation",
  buttonHref: "/book/"
};

export const weightLossFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation, not a crash diet.",
  description: "In 45 to 60 minutes, Dr. Zainab will find your weight-gain pattern, advise on blood tests and build a plan you can keep.",
  button1Text: "Book a consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20weight%20loss.",
  bullets: ["Prices shared on WhatsApp", "GP blood tests on site", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const weightLossRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Udvartana", description: "Dry herbal powder massage.", href: "/treatments/udvartana-jvc/" },
    { title: "Panchakarma", description: "Classical cleansing, when needed.", href: "/treatments/panchakarma-dubai/" },
    { title: "Ayurveda for PCOS", description: "When weight is linked to PCOS.", href: "/conditions/pcos-ayurveda-dubai/" },
    { title: "Ayurvedic consultation", description: "Pulse diagnosis and a full assessment.", href: "/treatments/nadi-pareeksha-jvc/" }
  ]
};
