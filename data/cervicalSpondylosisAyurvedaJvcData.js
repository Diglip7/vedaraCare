// data/cervicalSpondylosisAyurvedaJvcData.js (replace the whole file)
export const neckHero = {
  breadcrumb: [ { label: "Home", href: "/" }, { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" }, { label: "Neck Pain & Cervical Spondylosis (Ayurveda)", active: true } ],
  label: "AYURVEDA FOR NECK PAIN · CERVICAL SPONDYLOSIS · JVC, DUBAI",
  title: "Ayurvedic treatment for neck pain and cervical spondylosis in JVC, Dubai — with physiotherapy at the same clinic.",
  description: "Greeva Vasti, Nasya, herbal bundles and herbs for stiff, painful necks — from desk-related tech neck to cervical spondylosis — planned by Dr. Zainab Sheikh (BAMS, MD Ayurveda) and combined with physiotherapy when that helps more. Near Circle Mall, JVC.",
  primaryCTA: "Book a neck consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurvedic%20neck%20pain%20treatment.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Ayurveda + physiotherapy, one clinic", "Near Circle Mall, JVC"],
  floatingCard: { title: "WARNING SIGNS FIRST", subtitle: "Arm weakness, balance problems or pain after an accident need a doctor first." },
  image: "/images/cervical-spondylosis-ayurveda-jvc-hero.webp",
  alt: "Ayurvedic Greeva Vasti treatment for neck pain at Vedara Care, JVC Dubai"
};

export const neckIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurveda for neck pain, in one paragraph.",
  blockquote: "Ayurvedic treatment for neck pain and cervical spondylosis aims to ease pain and stiffness and improve movement, mainly with Greeva Vasti (warm medicated oil held on the back of the neck), Nasya (medicated nasal oil), herbal bundles (Kizhi), oil massage with steam and prescribed herbs. In Ayurveda, cervical spondylosis is called Greeva Sandhigata Vata, a Vata disorder of the neck joints; treatment does not reverse wear in the spine but can make day-to-day life easier, and it often works best with physiotherapy. Get a doctor's check first if you have arm weakness or numbness that is getting worse, balance problems, or neck pain after an accident. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, care starts with a 45 to 60 minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and Ayurveda and physiotherapy can be planned together at the same clinic. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const neckMechanism = {                               // TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "UNDERSTANDING NECK PAIN",
  title: "Why necks hurt, and how Ayurveda sees it.",
  content: [
    "Most long-term neck pain comes from posture and strain (hours at a screen, poor pillows, stress) or from wear in the neck joints and discs with age, called cervical spondylosis. Sometimes a disc or worn joint presses on a nerve, causing pain or tingling down the arm.",
    "Ayurveda links this to aggravated Vata in the neck (Greeva Sandhigata Vata). Warmth, oil held on the area, nasal oils and nourishing herbs are the classical way to calm it; posture and daily habits keep it calm.",
    "What does the research say? Studies are small: a randomised trial found Nasya reduced signs and symptoms of cervical spondylosis, and case reports describe Greeva Vasti with Nasya and herbs. We set realistic expectations and combine Ayurveda with physiotherapy when that helps more."
  ],
  sources: "Sources: <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3456869/' target='_blank' rel='noopener'>Nasya in cervical spondylosis, randomised trial (PMC)</a> · <a href='https://archive.cmb.ac.lk/handle/70130/8391' target='_blank' rel='noopener'>Greeva Sandhigata Vata case report (University of Colombo, 2025)</a>",
  image: "/images/tech-neck-forward-head-posture-illustration.webp",
  alt: "Illustration of forward-head posture causing tech neck"
};

export const neckRedFlags = {                                 // ClinicalBoundaries
  label: "WARNING SIGNS",
  title: "When neck pain needs a doctor or hospital first.",
  leftCard: {
    label: "GO TO HOSPITAL OR CALL 999",
    title: "Urgent signs:",
    useWarningIcon: true,
    items: ["Weakness or numbness in both arms or legs, or difficulty walking", "Loss of bladder or bowel control", "Severe neck pain after a fall, accident or blow to the head", "Neck pain with fever and a stiff neck, or a sudden severe headache"]
  },
  rightCard: {
    label: "SEE A DOCTOR SOON",
    title: "Get checked before Ayurvedic treatment if you have:",
    items: [
      { text: "Arm weakness, numbness or tingling that is getting worse", icon: "check" },
      { text: "Dizziness or balance problems with neck movement", icon: "check" },
      { text: "Recent whiplash (treatment starts after the acute phase)", icon: "check" },
      { text: "Unexplained weight loss, night pain or a history of cancer", icon: "check" }
    ]
  },
  footer: "Vedara Care does not do MRI or surgery; the doctor refers when needed."
};

export const neckConditions = {                               // TreatmentOils
  label: "NECK PROBLEMS WE TREAT",
  title: "Which neck problem do you have?",
  description: "Dr. Zainab confirms the cause at your consultation.",
  oils: [
    { name: "Tech neck and desk-related neck pain", description: "Screens and posture", content: "Stiff neck and upper back from long hours at a laptop or phone.", indication: "Abhyanga, Greeva Vasti, posture and screen advice" },
    { name: "Cervical spondylosis", description: "Wear in the neck joints", content: "Stiffness and aching that build up over years.", indication: "Greeva Vasti, Nasya, herbs" },
    { name: "Cervical disc bulge (non-surgical)", description: "Pain or tingling into the arm", content: "When the doctor confirms surgery is not needed.", indication: "Greeva Vasti, herbs, physiotherapy" },
    { name: "Neck-related headaches", description: "Headaches starting in the neck", content: "Often with tight neck and shoulder muscles.", indication: "Nasya, Greeva Vasti, routine; see <a href='/conditions/migraine-ayurveda-dubai/'>migraine</a>" },
    { name: "Frozen shoulder linked to the neck", description: "Shoulder and neck stiffness together", content: "Treated with the neck when both are stiff.", indication: "<a href='/treatments/patra-pinda-sweda-jvc/'>Elakizhi</a>, Abhyanga, physiotherapy" },
    { name: "Whiplash (after the acute phase)", description: "After a car or sports injury", content: "Only once your doctor has checked you.", indication: "gentle therapies, physiotherapy" }
  ],
  footer: ""
};

export const neckTherapies = {                                // TreatmentOils
  label: "HOW AYURVEDA TREATS THE NECK",
  title: "The therapies in an Ayurvedic neck plan.",
  description: "Chosen for the cause and reviewed as you go.",
  oils: [
    { name: "Greeva Vasti", description: "Warm oil on the neck", content: "Medicated oil held on the back of the neck inside a dough ring. Part of the Vasti family with <a href='/treatments/kativasti-dubai/'>Kati Vasti</a>.", indication: "neck stiffness and pain" },
    { name: "<a href='/treatments/nasya-therapy-jvc/'>Nasya</a>", description: "Nasal oil therapy", content: "Medicated oil through the nose after a face and neck massage.", indication: "cervical spondylosis, neck-related headaches" },
    { name: "<a href='/treatments/patra-pinda-sweda-jvc/'>Kizhi (Elakizhi)</a>", description: "Warm herbal bundles", content: "Pressed over the neck, shoulders and upper back.", indication: "muscle spasm, stiffness" },
    { name: "<a href='/treatments/abhyanga-dubai/'>Abhyanga</a> with steam", description: "Oil massage and Swedana", content: "Neck, shoulders and upper back.", indication: "tension, tech neck" },
    { name: "Agnikarma", description: "Controlled therapeutic heat", content: "Brief heat applied to specific points.", indication: "localised, persistent pain" },
    { name: "Prescribed herbs", description: "Bought at a pharmacy", content: "Classical preparations for Vata and nerve pain, checked against your medicines.", indication: "supporting the therapies" }
  ],
  footer: "Given by a same-gender therapist in a private room."
};

export const neckIntegration = {                              // TreatmentIntegration
  bgColor: "bg-[#F5F1E8]",
  label: "AYURVEDA + PHYSIOTHERAPY",
  title: "One plan for your neck, at one clinic in JVC.",
  paragraphs: [
    "Ayurvedic therapies ease pain and stiffness. <a href='/conditions/neck-pain-physiotherapy-jvc/'>Physiotherapy for neck pain</a> restores movement and strength and fixes posture so the pain is less likely to return.",
    "At Vedara Care, Dr. Zainab and our physiotherapist plan both together, so you have one plan and one review."
  ],
  image: "/images/greeva-basti-neck-pain-vedara-jvc.webp",
  alt: "Greeva Vasti and physiotherapy for neck pain at Vedara Care, JVC",
  features: ["Ayurveda and physiotherapy at one clinic", "Sessions planned around each other", "Posture and screen set-up advice", "Home exercises"],
  button1Text: "Book a consultation",
  button1Link: "/book/",
  button2Text: "Physiotherapy for neck pain",
  button2Link: "/conditions/neck-pain-physiotherapy-jvc/"
};

export const neckFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "NECK PAIN QUESTIONS",
  sidebarLinks: [
    { text: "Physiotherapy for neck pain", href: "/conditions/neck-pain-physiotherapy-jvc/" },
    { text: "Nasya", href: "/treatments/nasya-therapy-jvc/" },
    { text: "Kati Vasti", href: "/treatments/kativasti-dubai/" }
  ],
  title: "Ayurveda for neck pain and cervical spondylosis: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href='/ayurveda-dubai/'>guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20neck%20pain%20treatment.",
  faqs: [
    { question: "Can Ayurveda help neck pain and cervical spondylosis?",
      answer: "Ayurveda can help ease neck pain and stiffness for many people, including cervical spondylosis, with Greeva Vasti, Nasya, herbal bundles, oil massage and herbs. It does not reverse wear in the spine, and it often works best alongside physiotherapy." },
    { question: "What is Greeva Vasti?",
      answer: "Greeva Vasti is a classical Ayurvedic therapy in which warm medicated oil is held on the back of the neck inside a ring of dough. It is used for neck stiffness and pain, including cervical spondylosis. It is not an enema." },
    { question: "Where can I get Ayurvedic neck pain treatment in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. Physiotherapy is available at the same clinic. Open daily 9am to 10pm." },
    { question: "Which neck problems do you treat with Ayurveda?",
      answer: "Tech neck and desk-related neck pain, cervical spondylosis, non-surgical cervical disc bulge, neck-related headaches, frozen shoulder linked to the neck, and whiplash after the acute phase with your doctor's clearance." },
    { question: "When should I see a doctor urgently?",
      answer: "Get urgent help for weakness or numbness in an arm or hand that is getting worse, loss of balance or difficulty walking, loss of bladder or bowel control, neck pain after a fall or accident, or neck pain with fever. Go to hospital or call 999 if symptoms are severe." },
    { question: "Can I combine Ayurveda with physiotherapy for neck pain?",
      answer: "Yes. At our JVC clinic, Dr. Zainab and our physiotherapist can plan both together as one plan: Ayurveda eases pain and stiffness, physiotherapy restores strength and posture." },
    { question: "What is tech neck, and can Ayurveda help?",
      answer: "Tech neck is neck and upper-back pain from long hours looking down at screens. Ayurvedic therapies can ease the tension, and posture, screen set-up and exercises stop it coming back." },
    { question: "Does Nasya help neck pain?",
      answer: "It may. A small randomised trial found Nasya reduced signs and symptoms of cervical spondylosis. It is usually combined with Greeva Vasti and other therapies." },
    { question: "Do you do MRI scans?",
      answer: "No. Vedara Care does not do imaging or surgery. Bring any MRI or X-ray reports; the doctor will refer you for imaging or a specialist if needed." },
    { question: "How long does Ayurvedic neck treatment take?",
      answer: "It depends on the cause and how long you have had it. Many plans run for a few weeks with regular reviews." },
    { question: "Is Ayurvedic treatment safe after whiplash?",
      answer: "Only after the acute phase and once your doctor has checked you. Gentle therapies and physiotherapy can then support recovery." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist." },
    { question: "How much does Ayurvedic neck treatment cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500 and a therapy session such as Greeva Vasti around AED 250 to 700. The total depends on your plan. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring any scan reports to your first 45 to 60-minute consultation." }
  ]
};

export const neckLocation = {
  bgColor: "bg-[#F5F1E8]", label: "VISIT US", title: "Neck pain care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312", whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Ayurvedic neck pain treatment at your JVC clinic.",
  email: "booking@vedaracare.ae", hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [], buttonText: "Book a neck consultation", buttonHref: "/book/"
};

export const neckFinalCTA = {
  bgColor: "bg-[#FAF8F5]", label: "READY?",
  title: "Start with a consultation and a warning-sign check.",
  description: "In 45 to 60 minutes, Dr. Zainab will check what is causing your neck pain, rule out warning signs and plan Ayurveda — with physiotherapy if it helps.",
  button1Text: "Book a neck consultation", button1Href: "/book/",
  button2Text: "Chat on WhatsApp", button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20neck%20pain%20treatment.",
  bullets: ["Prices shared on WhatsApp", "Ayurveda + physiotherapy", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const neckRelatedPages = {
  label: "EXPLORE FURTHER", title: "Related pages.", linkText: "See all Ayurvedic treatments", linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Physiotherapy for neck pain", description: "Movement, strength and posture.", href: "/conditions/neck-pain-physiotherapy-jvc/" },
    { title: "Nasya", description: "Nasal oil therapy for the head and neck.", href: "/treatments/nasya-therapy-jvc/" },
    { title: "Kati Vasti", description: "The same warm-oil method for the lower back.", href: "/treatments/kativasti-dubai/" },
    { title: "Ayurveda for sciatica", description: "When pain runs down the leg.", href: "/conditions/sciatica-ayurveda-jvc/" }
  ]
};
