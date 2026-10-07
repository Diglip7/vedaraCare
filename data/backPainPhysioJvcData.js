import { physioGoogleReviews, GOOGLE_PROFILE_URL, physioReviewsBlock } from './googleReviews';

export const backPainPhysioHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Conditions", href: "/conditions/" },
    { label: "Back Pain Physiotherapy in JVC", active: true }
  ],
  label: "BACK PAIN PHYSIOTHERAPY · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Back pain physiotherapy in JVC, Dubai. Treat the cause, not just the pain.",
  description: "Physiotherapy for lower back pain, upper back pain, slipped discs and desk-related back pain at our Jumeirah Village Circle clinic, walking distance from Circle Mall. Hafsina K K, our DHA-licensed physiotherapist, uses hands-on treatment and targeted exercise, with same-day appointments for severe pain.",
  primaryCTA: "Book Back Pain Assessment",
  primaryCTATrackingEvent: "click_book_back_pain",
  primaryCTAHref: "/book",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTATrackingEvent: "click_whatsapp_back_pain",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20back%20pain%20physiotherapy%20and%20book%20a%20consultation.",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Same-day appointments for severe back pain",
    "Most back pain improves without scans or surgery",
    "In-house GP at the same clinic"
  ],
  floatingCard: {
    title: "PHYSIOTHERAPY FOR BACK PAIN",
    subtitle: "Prefer an Ayurvedic approach? See <a href='/conditions/back-pain-ayurveda-dubai/'>Ayurvedic back pain treatment</a>."
  },
  image: "/images/back-pain-physiotherapy-jvc-hero.webp",
  imageWidth: 1080,
  imageHeight: 1080,
  alt: "Physiotherapist treating back pain patient at Vedara Care JVC Dubai clinic"
};

export const backPainPhysioIntro = {
  label: "THE QUICK ANSWER",
  title: "Back pain physiotherapy at our JVC clinic, in one paragraph.",
  blockquote: "Back pain physiotherapy at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai treats lower and upper back pain, slipped or bulging discs, facet joint pain, stiffness and back pain from desk work, lifting or sport. Hafsina K K, a DHA-licensed physiotherapist (DHA-P 64812828), finds the cause and treats it with spinal mobilisation and manipulation, directional preference exercises, dry needling, shockwave where suitable and a home exercise programme, plus posture and desk-setup advice. Most back pain improves without scans or surgery. Same-day appointments are available for severe pain, and our in-house GP can see you if a medical check is needed. Open daily 9am to 10pm near Circle Mall. Insurance works on reimbursement.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026."
};

export const backPainPhysioConditions = {
  bgColor: "bg-[#F2EDE5]",
  label: "SPECIFIC BACK PAIN TYPES",
  title: "Back pain conditions we treat at our JVC clinic.",
  description: "Different back pain types require different physiotherapy protocols. Accurate diagnosis at assessment determines the specific treatment approach for your situation.",
  types: [
    {
      number: "01",
      title: "Acute Mechanical Lower Back Pain",
      description: "Recent onset back pain, typically related to lifting, sudden movement, or sitting, most resolve within 4-8 weeks. Our approach: accurate diagnosis, gentle mobilisation, structured return to activity, education about avoiding bed rest, and specific exercises for faster recovery. Same-week appointments for acute presentations; approximately 35% of our back pain patients are acute cases."
    },
    {
      number: "02",
      title: "Chronic Lower Back Pain (>3 months)",
      description: "Long-standing back pain that has persisted beyond the normal healing timeframe. Structured comprehensive rehabilitation programme, pain neuroscience education, addressing contributing factors (posture, fitness, stress), patient-specific exercises, and graduated return to activity. 3-9 month plans. Some patients with chronic pain benefit from longer-term care packages."
    },
    {
      number: "03",
      title: "Sciatica and Leg Pain",
      description: "Back pain with pain, tingling or numbness down the leg. Treated with directional preference exercises, nerve mobilisation and strengthening. <a href='/conditions/sciatica-physiotherapy-dubai/'>Read about sciatica physiotherapy</a>."
    },
    {
      number: "04",
      title: "Slipped, Bulging or Herniated Disc",
      description: "Back pain associated with imaging findings (disc bulges, herniations, or degeneration). Importantly, most disc changes alone do not cause symptoms; treatment focuses on movement and activity, not addressing the imaging findings. Physiotherapy addresses actual movement dysfunctions and bio-mechanical issues, often very successful even with significant imaging findings. <a href='#slipped-disc'>Can physiotherapy help a slipped disc?</a>"
    },
    {
      number: "05",
      title: "Upper Back and Thoracic Pain",
      description: "Pain in the mid-back, often related to desk work, overhead movements, or thoracic mobility limitations. Common in Dubai's office workers. Manual therapy targeting the thoracic spine, specific exercise prescription, postural correction, and addressing contributing patterns (shoulder, scapular dysfunction)."
    },
    {
      number: "06",
      title: "Desk-Work and Postural Back Pain",
      description: "Back pain from long hours sitting, laptops, driving or standing. Posture and desk-setup assessment at the clinic plus targeted exercise. <a href='#desk-work'>More about desk-work back pain</a>."
    },
    {
      number: "07",
      title: "After Spinal Surgery",
      description: "Rehabilitation after discectomy, laminectomy or fusion, following your surgeon's protocol. <a href='/physiotherapy/post-surgery-rehab-dubai/'>See post-surgery physiotherapy</a>."
    },
    {
      number: "08",
      title: "Sports-Related Back Pain",
      description: "Back pain from padel, running, golf and gym training. <a href='/physiotherapy/sports-injury-jvc/'>See sports injury physiotherapy</a>."
    },
    {
      number: "09",
      title: "Facet Joint Pain, Stiffness and Lumbar Spondylosis",
      description: "Age-related changes and stiff spinal joints that cause aching and morning stiffness. Spinal mobilisation, strengthening and activity advice."
    },
    {
      number: "10",
      title: "Back Pain in Pregnancy",
      description: "Lower back and pelvic girdle pain during and after pregnancy, with a female physiotherapist. <a href='/conditions/pelvic-floor-physiotherapy-dubai/'>See women's health physiotherapy</a>."
    }
  ],
  footer: "Did not find your specific back pain type? Contact us — we treat the full range of back pain conditions →"
};

export const backPainSlippedDisc = {
  id: "slipped-disc",
  label: "SLIPPED DISC",
  title: "Slipped disc: can physiotherapy help?",
  content: [
    "Yes. Most slipped (herniated or bulging) discs in the lower back improve without surgery, and physiotherapy is a first-line treatment. It eases pain, restores movement and builds strength while the disc settles, usually over weeks to a few months.",
    "<strong>What treatment includes</strong><br/>Directional preference exercises (movements that ease your leg or back pain), spinal mobilisation or manipulation where suitable, nerve-gliding exercises, gradual strengthening, and advice on sitting, lifting and sleep.",
    "<strong>Do I need an MRI?</strong><br/>Usually not at first. Disc bulges are common in people without any pain, so a scan is mainly useful when symptoms are severe, getting worse, or not improving. Our in-house GP can advise.",
    "<strong>Leg pain?</strong><br/>If the pain travels down your leg, see our <a href='/conditions/sciatica-physiotherapy-dubai/'>sciatica physiotherapy</a> page."
  ],
  image: "/images/back-pain-physio-vedara.webp",
  alt: "Slipped disc physiotherapy at Vedara Care, JVC, Dubai"
};

export const backPainDeskWork = {
  id: "desk-work",
  label: "DESK AND POSTURE",
  title: "Back pain from desk work: posture and desk-setup assessment.",
  content: [
    "Long hours at a desk, on a laptop or in the car are a common cause of lower and upper back pain in Dubai. Hafsina K K assesses how you sit and move at the clinic, treats the painful areas, and gives you a desk setup and movement plan for work.",
    "<strong>What you get</strong><br/>A posture and movement assessment, advice on chair, screen and laptop position (bring photos of your workstation if you can), short exercises to do during the workday, and a strength programme for your back and hips.",
    "<strong>Clinic only</strong><br/>Assessments take place at our JVC clinic; we do not visit workplaces."
  ],
  image: "/images/back-pain-prevention-dubai.webp",
  alt: "Posture and desk-setup assessment for back pain at Vedara Care, JVC"
};


export const backPainPhysioMechanism = {
  bgColor: "bg-white",
  label: "THE APPROACH",
  title: "Evidence-based back pain physiotherapy — what actually works.",
  content: [
    "Back pain physiotherapy has evolved substantially over the past two decades.Many older approaches — extended bed rest, generic core strengthening, traction therapy, ultrasound as a primary treatment — have been discarded because research evidence does not support them. Modern back pain physiotherapy is built on robust science, and produces meaningfully better outcomes than older approaches.",
    "<strong>Accurate assessment guides treatment</strong><br />Effective back pain treatment starts with accurate assessment. Our initial assessment includes detailed history, movement screening, neurological examination where appropriate (reflexes, strength testing for sciatica patients), specific orthopaedic tests, and identifying all the dominant pain drivers in your pain. Not all back pain is the same — and treating all back pain the same way produces mediocre outcomes.",
    "<strong>Manual therapy when indicated</strong><br />Spinal mobilisation and, where suitable, spinal manipulation, combined with exercise.",
    "<strong>Specific exercise prescription</strong><br />The most evidence-supported intervention for back pain is structured exercise — but not generic 'back exercises.' Specific exercise prescription matched to your assessment findings, pain patterns. For some patients: directional preference exercises. For some: deep stabilisers, posture and gait retraining. For others: progressive loading and strengthening matters. Others: graded activity and pacing. The right exercise for your specific pattern matters.",
    "<strong>Dry needling for chronic muscle patterns</strong><br />For patients with chronic muscle tension patterns contributing to back pain, dry needling can be highly effective. The technique releases trigger points and tight muscle bands using fine needles. Particularly useful for chronic lumbar fasciitis, piriformis-related sciatica patients, and patients guarding, that limits movement.",
    "<strong>Modalities where evidence supports</strong><br />Electrical stimulation and shockwave where evidence supports them, never as the main treatment.",
    "<strong>Patient education and self-management</strong><br />Patients who understand their back pain — what it is, what it's not, what makes it better, what makes it worse — recover faster and have less recurrence. Evidence-based education, ergonomic advice, activity modification guidance, and explicit return-to-activity protocols are integral to our approach."
  ],
  quote: "Back pain physiotherapy that works in 2026 looks meaningfully different from back pain physiotherapy of 20 years ago. Evidence has evolved. Approach has evolved. Outcomes have evolved.",
  image: "/images/back-pain-physio-vedara-jvc.webp",
  imageWidth: 1080,
  imageHeight: 1080,
  alt: "Evidence-based back pain physiotherapy at Vedara Care JVC Dubai"
};

export const backPainPhysioModalities = {
  label: "TECHNIQUES & MODALITIES",
  title: "Evidence-based physiotherapy techniques for back pain.",
  modalities: [
    {
      number: "01",
      title: "<a href='/treatments/manual-therapy-dubai/' class='text-inherit hover:text-[#C9A55A] transition-colors'>Manual Therapy</a>",
      description: "Spinal mobilisation (graded oscillatory movements to restore joint motion), spinal manipulation where appropriate (high-velocity thrust techniques in carefully selected patients), soft tissue mobilisation, myofascial release, and manual stretching. Evidence-based for acute and chronic back pain. Performed by DPT-qualified physiotherapists trained in manual therapy techniques."
    },
    {
      number: "02",
      title: "Directional Preference Exercises",
      description: "Repeated movements in the direction that eases your pain, especially useful for disc-related back pain and sciatica. You learn exactly which movements help and which to avoid for now."
    },
    {
      number: "03",
      title: "Motor Control and Stabilisation Training",
      description: "Specific exercise prescription targeting deep spinal stabilisers (transverse abdominis, multifidus, pelvic floor). Modern motor control training is meaningfully different from generic 'core strengthening' — calibrated to your specific dysfunction patterns. Particularly effective for chronic mechanical back pain and post-acute presentations."
    },
    {
      number: "04",
      title: "Dry Needling",
      description: "Fine needles inserted into trigger points and tight muscle bands to release tension and reduce pain. Particularly effective for chronic muscle patterns contributing to back pain, piriformis syndrome (often causing sciatica-like symptoms), and persistent muscle guarding. Performed by physiotherapists with specific dry needling certification."
    },
    {
      number: "05",
      title: "Shockwave Therapy",
      description: "Shockwave therapy for specific chronic patterns — chronic myofascial pain, certain enthesopathies, and select chronic conditions. Not first-line treatment but useful for specific persistent presentations. Typically 3-6 sessions weekly. Performed in clinic with specialised equipment."
    },
    {
      number: "06",
      title: "Pain Neuroscience Education",
      description: "Modern understanding of pain has transformed chronic pain treatment. Structured education about how pain works, why chronic pain persists, and how the nervous system contributes to ongoing pain. Particularly important for chronic back pain patients. Evidence shows pain education alone produces meaningful improvements in chronic pain outcomes."
    },
    {
      number: "07",
      title: "Posture and Desk-Setup Assessment",
      description: "At the clinic, a review of how you sit, stand and lift, with advice on chair, screen and laptop setup and short exercises for the workday."
    },
    {
      number: "08",
      title: "Cupping and IASTM",
      description: "Biomechanical cupping and instrument-assisted soft tissue work for tight back muscles, alongside exercise."
    }
  ]
};

export const backPainPhysioIntegratedCare = {
  bgColor: "bg-[#FAF8F5]",
  label: "ANOTHER OPTION",
  title: "Prefer an Ayurvedic approach to back pain?",
  paragraph1: "Most back pain responds well to physiotherapy alone. Some patients with long-standing back pain also choose Ayurvedic treatment at our clinic, either on its own or alongside physiotherapy.",
  paragraph2: "",
  noteTitle: "Optional, never required.",
  noteDescription: "Your physiotherapy plan does not depend on it.",
  linkText: "Read about Ayurvedic back pain treatment →"
};

export const backPainPhysioReviews = physioReviewsBlock('What patients say about physiotherapy with Hafsina K K');

export const backPainPhysioTeam = {
  label: "YOUR PHYSIOTHERAPIST",
  title: "Your back pain physiotherapist at our JVC clinic.",
  team: [
    {
      name: "Hafsina K K",
      qualification: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      specialties: ["Back Pain", "Slipped Disc", "Posture and Desk Setup", "Spinal Mobilisation and Manipulation"],
      languages: ["English", "Hindi", "Malayalam"],
      image: "/images/hafsina-kk-physiotherapist-dubai.webp",
      imageWidth: 1086,
      imageHeight: 1448,
      alt: "Hafsina K K back pain physiotherapist Vedara Care JVC Dubai",
      link: "/doctors/hafsina-kk-physiotherapist/"
    }
  ]
};

export const backPainPhysioFaqs = {
  bgColor: "bg-[#F2EDE5]",
  label: "FAQS",
  title: "Back pain physiotherapy: your questions answered.",
  description: "Answers reviewed by Hafsina K K, DHA-licensed physiotherapist.",
  sidebarLinks: [
    { text: "Physiotherapy main page", href: "/physiotherapy-jvc/" },
    { text: "Integrated Ayurveda + physiotherapy back pain care", href: "/conditions/back-pain-ayurveda-dubai/" }
  ],
  faqs: [
    { question: "Can I get a same-day appointment for severe back pain?", answer: "Yes. Same-day appointments are available for severe back pain at our JVC clinic, open daily from 9am to 10pm. WhatsApp us to book." },
    { question: "When should I see a doctor instead of a physiotherapist for back pain?", answer: "Go to A&E straight away if you have bladder or bowel changes, numbness around the groin, or quickly worsening leg weakness. See a doctor first if back pain follows a fall or accident, comes with fever or unexplained weight loss, or you have a history of cancer. Our in-house GP can see you at the same clinic." },
    { question: "Do I need an MRI or X-ray before physiotherapy for back pain?", answer: "Usually not. Most back pain does not need a scan; it is mainly useful when symptoms are severe, getting worse or not improving, or when a doctor suspects a serious cause." },
    { question: "Can physiotherapy help a slipped disc?", answer: "Yes. Most slipped or bulging discs in the lower back improve without surgery, and physiotherapy helps with pain, movement and strength while the disc settles over weeks to a few months." },
    { question: "How long does back pain take to improve with physiotherapy?", answer: "Recent back pain often improves within a few weeks. Long-standing back pain usually needs a longer programme of exercise and treatment over a few months. You get a personal estimate after the first assessment." },
    { question: "What are directional preference exercises?", answer: "Repeated movements in the direction that eases your pain, often bending backwards or sideways. They are especially useful for disc-related back pain and sciatica." },
    { question: "Do you do spinal manipulation?", answer: "Yes, where suitable. Hafsina K K uses spinal mobilisation and, when appropriate and safe, spinal manipulation, always combined with exercise." },
    { question: "Is dry needling safe for back pain?", answer: "Yes, when performed by a trained physiotherapist. It is used for tight back muscles and trigger points as part of a full treatment plan." },
    { question: "Is rest or exercise better for back pain?", answer: "For most back pain, staying gently active is better than bed rest. Your physiotherapist shows you which movements are safe and which to avoid for now." },
    { question: "Can my desk job cause back pain?", answer: "Yes. Long hours sitting, laptops and driving are common causes. We offer a posture and desk-setup assessment at the clinic with exercises for your workday; we do not visit workplaces." },
    { question: "Can pregnant women have physiotherapy for back pain?", answer: "Yes. Back and pelvic pain in pregnancy is treated with adapted positions and exercises by a female physiotherapist." },
    { question: "Is the physiotherapist female?", answer: "Yes. Hafsina K K, our DHA-licensed physiotherapist, is female." },
    { question: "Do you offer Ayurvedic treatment for back pain?", answer: "Yes, as a separate, optional service at the same clinic. See our Ayurvedic back pain treatment page." },
    { question: "Do you offer home physiotherapy for back pain?", answer: "Home visits are coming soon. Until then, all sessions take place at our JVC clinic." },
    { question: "Does insurance cover back pain physiotherapy?", answer: "Most Dubai plans cover it when it is medically needed, usually with a yearly session limit. Vedara Care works on reimbursement and provides the documents your insurer needs." },
    { question: "Where is the clinic?", answer: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle, Dubai, walking distance from Circle Mall. Open daily 9am to 10pm." }
  ]
};

export const backPainPhysioLocation = {
  bgColor: "bg-white",
  label: "VISIT US",
  title: "Where to find our back pain physiotherapy clinic in JVC.",
  address: "Al Barsha South Fourth, Binghatti Azure, Shop -4,Jumeirah Village Circle (JVC) Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "+971 55 573 6312",
  whatsappMessage: "Hello Vedara Care, I would like to inquire about back pain physiotherapy and book a consultation.",
  email: "booking@vedaracare.ae",
  hours: "Mon-Sun - 9:00 AM - 10:00 PM",
  landmarks: [
    "Walking distance from Circle Mall",
    "3 min from FIVE Jumeirah Village",
    "5 min from JSS Private School",
    "Free patient parking"
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
  image: "",
  alt: "Vedara Care back pain physiotherapy clinic JVC Dubai",
  description: "Back pain physiotherapy takes place at Vedara Care Polyclinic in JVC, walking distance from Circle Mall: treatment rooms, a strength and exercise area, shockwave and electrical stimulation equipment, and an in-house GP. Free and paid parking nearby. Patients come from JVC, JVT, Al Barsha South, Arjan, Dubai Sports City, Motor City and Al Barsha.",
  buttonText: "Book Back Pain Assessment"
};

export const backPainPhysioCTA = {
  bgColor: "white",
  label: "Ready to Address Your Back Pain?",
  title: "Back pain physiotherapy in JVC. Same-day appointments for severe pain.",
  description: "Whether your back pain is new, long-standing or keeps coming back, the first step is an assessment with Hafsina K K at our JVC clinic.",
  button1Text: "Book Back Pain Assessment",
  primaryCTATrackingEvent: "click_book_back_pain",
  button1Href: "/book",
  button2Text: "Chat on WhatsApp",
  secondaryCTATrackingEvent: "click_whatsapp_back_pain",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20back%20pain%20physiotherapy%20and%20book%20a%20consultation.",
  footer: "DHA-licensed physiotherapist · Same-day appointments for severe pain · Insurance reimbursement · Open daily 9am to 10pm · Near Circle Mall, JVC"
};

export const backPainPhysioRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related services and conditions",
  linkText: 'Browse all physiotherapy services →',
  linkHref: '/physiotherapy-jvc/',
  pages: [
    { title: "Sciatica Physiotherapy", href: "/conditions/sciatica-physiotherapy-dubai/", description: "Leg pain, tingling or numbness that starts in the back." },
    { title: "Neck Pain Physiotherapy", href: "/conditions/neck-pain-physiotherapy-jvc/", description: "Neck pain, stiffness and desk-related neck pain." },
    { title: "Post-Surgery Physiotherapy", href: "/physiotherapy/post-surgery-rehab-dubai/", description: "Rehabilitation after spinal surgery." },
    { title: "Sports Injury Physiotherapy", href: "/physiotherapy/sports-injury-jvc/", description: "Back pain from padel, running and gym training." },
    { title: "Ayurvedic Back Pain Treatment", href: "/conditions/back-pain-ayurveda-dubai/", description: "An optional Ayurvedic approach at the same clinic." }
  ]
};

export const backPainPhysioPhases = {
  bgColor: "bg-[#F8F5EE]",
  label: "TREATMENT PHASES",
  title: "The four phases of back pain physiotherapy.",
  description: "A representative progression. Acute, subacute, and chronic back pain follow somewhat different patterns. Your specific timeline is calibrated to your presentation.",
  phases: [
    {
      number: "01",
      phaseName: "Acute",
      title: "Phase 01 — Acute Management",
      duration: "Weeks 1–2",
      items: [
        "Same-day appointment for severe pain",
        "Comprehensive assessment to identify pain pattern",
        "Initial manual therapy for pain modulation",
        "Gentle mobilisation within tolerance",
        "Activity modification guidance — what to do and avoid",
        "Education about acute back pain (most resolves, movement is medicine, bed rest harms)",
        "Pain management strategies",
        "Frequency: typically 2–3 sessions per week"
      ],
      expected: "Pain levels reducing, basic movement restored, understanding of condition established"
    },
    {
      number: "02",
      phaseName: "Subacute",
      title: "Phase 02 — Active Recovery",
      duration: "Weeks 3–6",
      items: [
        "Manual therapy continuing as needed",
        "Structured exercise programme tailored to your specific pattern",
        "Ergonomic advice (desk, driving, sleep setup)",
        "Posture and desk-setup advice for work",
        "Core and posterior chain activation work",
        "Gradual reintroduction of normal activities",
        "Home exercise programme with progression built in",
        "Frequency: typically 1–2 sessions per week"
      ],
      expected: "Pain <3/10 most days, returning to 80% of normal activities, independent with exercises"
    },
    {
      number: "03",
      phaseName: "Rehabilitation",
      title: "Phase 03 — Strengthening & Progression",
      duration: "Weeks 7–12",
      items: [
        "Loading the spine appropriately to build resilience",
        "Strength training for specific weaknesses identified",
        "Functional movement retraining (bending, lifting, twisting)",
        "Return-to-work planning if needed",
        "Sport-specific rehabilitation if required",
        "Addressing fear-avoidance beliefs if present",
        "Frequency: typically 1 session per week"
      ],
      expected: "Full or near-full pain resolution, normal activities resumed, confident managing any future episodes"
    },
    {
      number: "04",
      phaseName: "Maintenance",
      title: "Phase 04 — Maintenance & Prevention",
      duration: "Optional, ongoing",
      items: [
        "Check-in appointments as needed (not required for all)",
        "Booster sessions with home programme review",
        "Maintenance strength programme",
        "Recurrence prevention strategies",
        "Education on self-management for any future flare-ups",
        "Access to WhatsApp support for questions"
      ],
      expected: "Long-term resilience, low recurrence risk, independent self-management capability"
    }
  ],
  footer: "This is a representative timeline — not a fixed plan. Your actual programme is individualised to your specific back pain pattern, recovery rate, and goals. Acute pain programmes are shorter; chronic pain programmes longer."
};

export const backPainPhysioAcuteAndPricing = {
  acute: {
    label: "SEVERE BACK PAIN",
    title: "Same-day appointments for severe back pain.",
    description1: "Severe acute back pain — the kind that arrives suddenly and makes normal activity impossible — is one of the most distressing experiences. Early appropriate treatment substantially improves recovery time.",
    description2: "Same-day appointments are available for severe back pain at our JVC clinic, open daily 9am to 10pm. WhatsApp us to book.",
    description3: "What we provide for severe acute back pain: immediate assessment to identify pattern and rule out red flags, initial manual therapy for pain modulation, education about acute back pain recovery, activity modification guidance, pain management strategies, scheduling for the structured recovery programme.",
    redFlagsTitle: "WHEN TO SEE A DOCTOR FIRST",
    redFlagsDescription: "Go to A&E straight away if you have bladder or bowel changes, numbness around the groin or saddle area, or quickly worsening leg weakness. See a doctor before physiotherapy (our in-house GP can see you) if you have:",
    redFlags: [
      "Bladder or bowel control changes",
      "Saddle area numbness",
      "Progressive leg weakness",
      "New back pain with cancer history",
      "Significant recent trauma",
      "Fever with back pain",
      "Severe night pain unrelieved by position"
    ],
    nonRedFlagsTitle: "For severe acute pain without red flags:",
    nonRedFlagsPoints: [
      '<a href="https://wa.me/971555736312" target="_blank" rel="noopener noreferrer" class="hover:underline">WhatsApp +971 55 573 6312</a>',
      "Same-day appointments available",
      "Call +971 55 573 6312"
    ],
    buttonText: "WhatsApp for Same-Day"
  }
};
