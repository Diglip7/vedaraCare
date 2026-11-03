// data/pcosData.js

export const pcosHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "PCOS (Ayurveda)", active: true }
  ],
  label: "AYURVEDA FOR PCOS & PCOD · JVC, DUBAI · DHA FACILITY LICENCE 2509266",
  title: "Ayurvedic treatment for PCOS and PCOD in JVC, Dubai — with a female Ayurvedic doctor.",
  description: "Support for irregular cycles, weight, skin and energy through diet, routine, prescribed herbs and therapies, planned by Dr. Zainab Sheikh (BAMS, MD Ayurveda) alongside your gynaecologist. Our GP can arrange blood tests and a pelvic ultrasound. Near Circle Mall, JVC.",
  primaryCTA: "Book a PCOS consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20PCOS%20care.",
  trustSignals: ["DHA Facility Licence 2509266", "Female Ayurvedic doctor (BAMS, MD)", "GP blood tests and scan referral", "Near Circle Mall, JVC"],
  floatingCard: { title: "ALONGSIDE YOUR GYNAECOLOGIST", subtitle: "Ayurveda supports your care; it does not replace it." },
  image: "/images/pcos-ayurveda-dubai-hero.webp",
  alt: "Female Ayurvedic doctor consulting a patient about PCOS at Vedara Care, JVC Dubai"
};

export const pcosIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurveda for PCOS, in one paragraph.",
  blockquote: "Ayurvedic care for PCOS (also called PCOD) aims to support more regular cycles, healthier weight and blood sugar, clearer skin and better energy through diet and daily routine, prescribed herbs such as Shatavari or Kanchanara Guggulu, and, where suitable, Panchakarma or Basti. Studies suggest a promising role for Ayurveda in managing PCOS symptoms, but research is still limited, so results vary and it works best alongside your gynaecologist. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, care starts with a 45 to 60 minute consultation with Dr. Zainab Sheikh, a female Ayurvedic doctor (BAMS, MD Ayurveda, DHA-licensed), and our GP can arrange PCOS blood tests and a pelvic ultrasound at the same clinic. Plans are reviewed regularly and their length depends on your needs. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const pcosMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "HOW AYURVEDA SEES PCOS",
  title: "Addressing cycles, metabolism and digestion together.",
  image: "/images/pcos-research-dubai-woman.webp",
  alt: "Ayurvedic consultation for PCOS at Vedara Care, JVC Dubai",
  content: [
    "PCOS affects cycles, hormones and metabolism, and looks different in every woman: some have irregular periods, some weight and insulin resistance, some acne or extra hair growth, many a mix.",
    "Ayurveda links PCOS mainly to Kapha and Vata imbalance and weak digestion (Agni; see <a href='/conditions/ibs-ayurveda-dubai/'>Ayurveda for IBS and digestion</a>), and treats the whole picture: food, routine, sleep, stress and herbs, with cleansing therapies when needed.",
    "What does the research say? A 2023 scoping review found 57 studies of Ayurveda in PCOS, including 13 randomised trials, with a promising role in managing symptoms but clear gaps in the evidence. That is why we work alongside your gynaecologist and track progress with tests."
  ],
  sources: "Source: <a href='https://researchers.westernsydney.edu.au/en/publications/a-scoping-review-of-ayurveda-studies-in-women-with-polycystic-ova/' target='_blank' rel='noopener'>Rao et al. 2023, scoping review of Ayurveda studies in PCOS (J Integr Complement Med)</a>"
};

export const pcosPhenotypes = {
  bgColor: "bg-[#FFFFFF]",
  label: "PRECISION MATTERS",
  title: "There are four distinct types of PCOS. They need different treatment.",
  alt: "Four PCOS phenotypes assessed by Rotterdam criteria at Vedara Care Ayurveda Dubai",
  description: "The Rotterdam criteria define four PCOS phenotypes based on which combination of features you have. Your phenotype determines your treatment priorities — not the other way around.",
  phenotypes: [
    {
      letter: "A",
      title: "Classic PCOS",
      subtitle: "Hyperandrogenism + Ovulatory Dysfunction + Polycystic Ovaries",
      description: "Hyperandrogenism + Ovulatory Dysfunction + Polycystic Ovaries",
      content: "The 'full picture' presentation. Irregular or absent cycles, signs of androgen excess (acne, hirsutism, hair loss), and polycystic appearance on ultrasound. Usually the most insulin-resistant phenotype. Most commonly seen in South Asian and Middle Eastern women in Dubai, often diagnosed in late teens or early 20s.",
      ayurvedicEmphasis: "Diet and metabolic focus, herbs such as Kanchanara Guggulu, Panchakarma if suitable"
    },
    {
      letter: "B",
      title: "Ovulatory PCOS",
      subtitle: "Hyperandrogenism + Polycystic Ovaries (regular cycles)",
      description: "Hyperandrogenism + Polycystic Ovaries (regular cycles)",
      content: "Cycles appear regular on the surface but ovulation may be irregular or absent. Androgen symptoms present. Often misdiagnosed because cycles look normal. Common in women trying to conceive who cannot understand why.",
      ayurvedicEmphasis: "Cycle support, herbs such as Shatavari, diet and routine"
    },
    {
      letter: "C",
      title: "Non-Hyperandrogenic PCOS",
      subtitle: "Ovulatory Dysfunction + Polycystic Ovaries (no androgen excess)",
      description: "Ovulatory Dysfunction + Polycystic Ovaries (no androgen excess)",
      content: "Irregular cycles and polycystic ovaries on ultrasound but no acne, hirsutism, or hair loss. Often the most stress-driven and Vata-dominant phenotype. Frequently seen in athletic, high-achieving women.",
      ayurvedicEmphasis: "Stress and sleep support (Shirodhara, Abhyanga), calming herbs, diet"
    },
    {
      letter: "D",
      title: "Mild PCOS",
      subtitle: "Hyperandrogenism + Ovulatory Dysfunction (no polycystic ovaries on ultrasound)",
      description: "Hyperandrogenism + Ovulatory Dysfunction (no polycystic ovaries on ultrasound)",
      content: "Androgen symptoms and irregular cycles but ultrasound is normal. Often the most controversial phenotype to diagnose. Many women in this category are told they 'don't really have PCOS' — but the metabolic patterns and symptoms are real.",
      ayurvedicEmphasis: "Herbs for your pattern, diet, and GP tests to rule out other causes"
    }
  ],
  footer: "Not sure which phenotype you are? Your initial consultation includes review of your existing diagnoses, ultrasound reports, and hormone panels. Most patients learn at their consultation that they are a different phenotype than they had been treating themselves as."
};

export const pcosBenefits = {
  bgColor: "bg-[#EDE8DE]",
  label: "THE AYURVEDIC APPROACH",
  title: "What Ayurvedic PCOS care includes.",
  benefitGroups: [
    { title: "Diet and routine", description: "Regular, warm, freshly cooked meals, fewer refined carbohydrates and sugary drinks, regular sleep.", benefits: ["Supports weight and blood sugar", "Adapted to your constitution"] },
    { title: "Prescribed herbs", description: "For example Shatavari or Kanchanara Guggulu, chosen for your pattern and checked against your medicines.", benefits: ["Bought at a licensed pharmacy", "Reviewed at follow-ups"] },
    { title: "Therapies", description: "<a href='/treatments/panchakarma-dubai/'>Panchakarma</a> (often Virechana) or <a href='/treatments/basti-jvc/'>Basti</a> when suitable; <a href='/treatments/shirodhara-dubai/'>Shirodhara</a> or Abhyanga for stress.", benefits: ["After assessment", "Female therapists"] },
    { title: "Tests and monitoring", description: "Our GP can arrange hormone tests, insulin or HbA1c and a pelvic ultrasound.", benefits: ["Progress checked, not guessed", "Shared with your gynaecologist if you wish"] }
  ],
  footer: ""
};

export const pcosProtocol = {
  bgColor: "bg-white",
  label: "HOW IT WORKS",
  title: "Your PCOS care at Vedara, step by step.",
  subtitle: "Plan length depends on your needs; most plans run for a few months.",
  steps: [
    { week: "STEP 1", title: "Consultation", items: ["45-60 minute consultation with Dr. Zainab", "Your cycles, symptoms, diet, sleep and medicines", "Constitution and pulse assessment"] },
    { week: "STEP 2", title: "Tests", items: ["Our GP arranges hormone tests, insulin or HbA1c and a pelvic ultrasound if needed", "Or bring recent results"] },
    { week: "STEP 3", title: "Your plan", items: ["Diet and routine", "Prescribed herbs", "Therapies if suitable"] },
    { week: "STEP 4", title: "Reviews", items: ["Regular follow-ups", "Plan adjusted to how you respond", "Repeat tests when useful"] }
  ],
  footer: ""
};

export const pcosSymptoms = {
  bgColor: "bg-[#F7F3EC]",
  label: "WHAT TO EXPECT",
  title: "Symptoms change at different speeds.",
  description: "Everyone responds differently; these are general patterns, not promises.",
  symptoms: [
    { title: "Irregular cycles", content: "Often among the first things to change when diet, routine and herbs settle in.", expected: "" },
    { title: "<a href='/conditions/weight-loss-ayurveda-dubai/'>Weight and insulin resistance</a>", content: "Change is gradual and depends a lot on diet and activity; tests help track it.", expected: "" },
    { title: "<a href='/conditions/skin-ayurveda-dubai/'>Acne and skin</a>", content: "Skin usually improves slowly, over a few months.", expected: "" },
    { title: "Extra hair growth", content: "The slowest to change; Ayurveda can support, but other treatments may also be needed.", expected: "" },
    { title: "<a href='/conditions/hair-loss-ayurveda-dubai/'>Hair thinning</a>", content: "Shedding may settle before new growth is seen.", expected: "" },
    { title: "Mood, energy and sleep", content: "Often helped by routine, sleep and calming therapies; see <a href='/conditions/migraine-ayurveda-dubai/'>Ayurveda for migraine</a> if headaches are linked to cycles.", expected: "" }
  ],
  footer: "We review your progress regularly and adjust the plan."
};

export const pcosFertility = {
  bgColor: "bg-[#2D5F4F]",
  label: "PCOS AND PREGNANCY",
  title: "Trying to conceive with PCOS? Here is where Ayurveda fits.",
  image: "/images/pcos-fertility-ayurveda-dubai.webp",
  imageAlt: "Woman with PCOS discussing pregnancy plans at Vedara Care, JVC Dubai",
  paragraphs: [
    "Many women with PCOS come to Ayurveda while trying to conceive. Ayurveda may help by supporting more regular cycles, weight and stress, but it cannot guarantee pregnancy.",
    "If you are trying to conceive, please also see a gynaecologist or fertility doctor. We work alongside them and never ask you to delay their tests or treatment.",
    "If you become pregnant, tell us straight away: herbs and therapies are reviewed for pregnancy."
  ],
  buttonText: "Book a PCOS consultation"
};

export const pcosBoundaries = {
  bgColor: "bg-[#F5F0E8]",
  label: "SAFETY & INTEGRATION",
  title: "When to see your doctor first, and when we work alongside them.",
  description: "Ayurvedic PCOS care supports your health; it does not replace medical evaluation.",
  columns: [
    {
      label: "GET CHECKED FIRST",
      title: "See your doctor or our GP first if you have:",
      items: [
        "No recent gynaecology check or ultrasound (our GP can arrange tests and a scan)",
        "Very heavy bleeding, or bleeding for more than 14 days",
        "Possible pregnancy",
        "Symptoms that may be another hormonal condition (thyroid, prolactin, adrenal) — our GP can test"
      ]
    },
    {
      label: "BEST ALONGSIDE YOUR DOCTOR",
      title: "Ayurveda works best alongside your care if you are:",
      items: [
        "On metformin, the pill or fertility treatment",
        "Trying to conceive",
        "Living with diabetes or high blood pressure",
        "Experiencing significant depression or anxiety"
      ]
    }
  ],
  footer: "Our GP and Dr. Zainab coordinate care with your gynaecologist or specialist."
};

export const pcosPrograms = {
  bgColor: "bg-white",
  label: "HOW TO START",
  title: "Three ways to start.",
  description: "",
  whatsappNumber: "971555736312",
  programs: [
    { name: "PCOS consultation", price: "Prices shared on WhatsApp", duration: "45-60 minutes",
      features: ["With Dr. Zainab (female Ayurvedic doctor)", "Pattern assessment", "Advice on tests", "Diet and routine plan"], bestFor: "Understanding your options",
      buttonText: "Book a consultation", whatsappMessage: "Hello Vedara Care, I would like to book an Ayurvedic PCOS consultation." },
    { name: "PCOS care plan", price: "Prices shared on WhatsApp", duration: "Length set by your doctor", featured: true,
      features: ["Consultation and regular reviews", "GP tests and ultrasound if needed", "Prescribed herbs", "Diet and routine"], bestFor: "Cycles, weight, skin, energy",
      buttonText: "Ask about the plan", whatsappMessage: "Hello Vedara Care, I would like to ask about an Ayurvedic PCOS care plan." },
    { name: "Plan with Panchakarma", price: "Prices shared on WhatsApp", duration: "Length set by your doctor",
      features: ["Everything in the plan", "Panchakarma or Basti if suitable"], bestFor: "Selected patients, after assessment",
      buttonText: "Ask about Panchakarma", whatsappMessage: "Hello Vedara Care, I would like to ask about Panchakarma for PCOS." }
  ],
  footer: "Vedara Care does not bill insurers directly; where treatment is for a diagnosed condition, we provide the invoice and report for a reimbursement claim."
};

export const pcosFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "PCOS QUESTIONS",
  sidebarLinks: [
    { text: "Ayurvedic weight loss", href: "/conditions/weight-loss-ayurveda-dubai/" },
    { text: "Ayurveda for thyroid", href: "/conditions/thyroid-ayurveda-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Ayurveda for PCOS and PCOD: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href='/ayurveda-dubai/'>guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20PCOS%20care.",
  faqs: [
    { question: "Can Ayurveda help PCOS?",
      answer: "Ayurveda can support women with PCOS through diet and routine, prescribed herbs and therapies such as Panchakarma, aiming at more regular cycles, weight, skin and energy. Research shows a promising role but is still limited, and Ayurveda works alongside your gynaecologist rather than replacing them." },
    { question: "Is PCOS the same as PCOD?",
      answer: "The terms are often used for the same condition. PCOS (polycystic ovary syndrome) is the medical name; PCOD is commonly used in India and the Gulf. Ayurvedic care is the same for both." },
    { question: "Where can I get Ayurvedic PCOS treatment in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a female DHA-licensed Ayurvedic doctor. Our GP can arrange PCOS blood tests and a pelvic ultrasound. Open daily 9am to 10pm." },
    { question: "Which Ayurvedic medicine is used for PCOS?",
      answer: "There is no single medicine. Doctors commonly use herbs such as Shatavari or preparations such as Kanchanara Guggulu, chosen for your pattern and checked against your other medicines. Vedara prescribes; you buy them at a pharmacy." },
    { question: "What is a good PCOS diet?",
      answer: "Regular meals, enough protein and fibre, fewer refined carbohydrates and sugary drinks, and less ultra-processed food suit most women with PCOS. Ayurveda adds warm, freshly cooked food and regular meal times; Dr. Zainab adapts this to you." },
    { question: "Can Ayurveda help me get pregnant with PCOS?",
      answer: "Ayurveda may help by supporting more regular cycles, weight and stress, but it cannot guarantee pregnancy. If you are trying to conceive, we work alongside your gynaecologist or fertility doctor and never ask you to delay their treatment." },
    { question: "Can I take Ayurvedic medicines with metformin or the pill?",
      answer: "Usually yes, with your doctor's knowledge. Do not stop or change prescribed medicines yourself; Dr. Zainab checks herbs against everything you take." },
    { question: "What tests do I need?",
      answer: "Usually hormone tests, insulin or HbA1c, and a pelvic ultrasound. Our GP can arrange these, or you can bring recent results." },
    { question: "Is Panchakarma used for PCOS?",
      answer: "Sometimes. Virechana or Basti may be suggested after assessment; many women do well with diet, routine and herbs alone." },
    { question: "What is Uttara Basti?",
      answer: "A specialised Ayurvedic procedure that the doctor may suggest for some women after a full assessment. It is not needed for most patients and is explained fully before any decision." },
    { question: "How long does Ayurvedic PCOS treatment take?",
      answer: "It depends on your symptoms and goals. Most plans run for a few months with regular reviews; some changes, such as cycle regularity, usually come before others, such as hair growth." },
    { question: "Is the doctor female?",
      answer: "Yes. Dr. Zainab Sheikh is a female Ayurvedic doctor, and women are treated by female therapists." },
    { question: "How much does Ayurvedic PCOS treatment cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500; herbs, tests and therapies are extra and depend on your plan. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring any recent blood tests or scan reports." }
  ]
};

export const pcosTreatmentLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "PCOS care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Ayurvedic PCOS care at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book PCOS consultation",
  buttonHref: "/book/"
};

export const pcosFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "A clear, supportive plan for your PCOS.",
  description: "Dr. Zainab will review your cycles, symptoms, diet and tests and build an Ayurvedic plan that works alongside your doctor.",
  button1Text: "Book a PCOS consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20PCOS%20care.",
  bullets: ["Prices shared on WhatsApp", "Female Ayurvedic doctor", "GP tests on site", "Near Circle Mall, JVC"]
};

export const pcosRelatedPages = {
  bgColor: "bg-[#F5F0E8]",
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    {
      title: "Ayurvedic weight loss",
      description: "When weight resistance is linked to PCOS and metabolism.",
      href: "/conditions/weight-loss-ayurveda-dubai/"
    },
    {
      title: "Ayurveda for thyroid",
      description: "Supportive care for thyroid conditions alongside your medicine.",
      href: "/conditions/thyroid-ayurveda-dubai/"
    },
    {
      title: "Ayurvedic skin treatment",
      description: "Acne, pigmentation and hormonal skin care in JVC.",
      href: "/conditions/skin-ayurveda-dubai/"
    },
    {
      title: "Ayurveda for stress",
      description: "Calming therapies, Shirodhara and routine for nervous system support.",
      href: "/conditions/stress-anxiety-ayurveda-dubai/"
    }
  ]
};
