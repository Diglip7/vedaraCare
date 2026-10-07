import { physioReviewsBlock } from './googleReviews';

export const physiotherapyJvcHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Physiotherapy", active: true },

  ],
  label: "PHYSIOTHERAPY · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Physiotherapy in JVC, Dubai. One-to-one care from a DHA-licensed physiotherapist.",
  description: "Hands-on physiotherapy at our Jumeirah Village Circle (JVC) clinic, walking distance from Circle Mall. Back, neck and joint pain, sports injuries, post-surgery and neurological rehabilitation, pelvic floor care and children's physiotherapy, with Hafsina K K, our female DHA-licensed physiotherapist. Insurance reimbursement with all major insurers.",
  primaryCTA: "Book a Session",
  primaryCTAHref: "/book",
  secondaryCTA: "WhatsApp us",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20physiotherapy%20services%20at%20your%20JVC%20clinic.",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Female physiotherapist",
    "Open daily 9am to 10pm",
    "Walking distance from Circle Mall, JVC"
  ],
  floatingCard: {
    title: "INTEGRATED WITH AYURVEDA — WHEN APPROPRIATE.",
    subtitle: "Standalone physiotherapy for most patients. Integrated Ayurveda + physiotherapy programmes for chronic conditions where combined care produces stronger outcomes."
  },
  image: "/images/physiotherapy-jvc-hero.webp",
  imageWidth: 600,
  imageHeight: 750,
  alt: "Hafsina K K, DHA-licensed physiotherapist, treating a patient at Vedara Care's JVC clinic, Dubai"
};

export const physiotherapyJvcIntro = {
  label: "THE QUICK ANSWER",
  title: "Physiotherapy at our JVC clinic, in one paragraph.",
  blockquote: "Vedara Care Polyclinic offers DHA-licensed physiotherapy at its clinic in Jumeirah Village Circle (JVC), Dubai, a short walk from Circle Mall. Treatment is led by Hafsina K K, a female physiotherapist (Bachelor of Physiotherapy, DHA-P 64812828, 7+ years' experience), and covers back, neck and joint pain, sports injuries, post-surgery rehabilitation, neurological rehabilitation, pelvic floor and pregnancy care, and children's physiotherapy. Every session is one-to-one with the same physiotherapist. Insurance works on reimbursement, with full documents provided. Open daily 9am to 10pm.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026.",
};

export const physiotherapyJvcSpecializations = {
  bgColor: "bg-[#F5F1E8]",
  cardBg: "bg-white",
  label: "SPECIALISED CARE",
  title: "Six physiotherapy specialisations at our JVC clinic.",
  description: "Not all physiotherapy is the same. Each area below uses different techniques and goals. At our JVC clinic, Hafsina K K assesses you, explains what is going on and builds a plan for your condition, then treats you herself at every session.",
  types: [
    {
      number: "01",
      title: "Musculoskeletal Physiotherapy",
      href: "/conditions/back-pain-physiotherapy-jvc/",
      description: "The most-utilised area. Treatment of joint, muscle, and soft tissue conditions — chronic and acute. Includes back pain, neck pain, <a href='/conditions/shoulder-pain-physiotherapy-dubai/' class='text-[#C9A55A] hover:text-[#B8965A] transition-colors'>shoulder conditions</a>, knee problems, hip dysfunction, and joint arthritis. Treatment combines manual therapy techniques (joint mobilisation, soft tissue work, manipulation where appropriate), modalities (ultrasound, IFC, dry needling), and structured exercise prescription tailored to your specific condition and recovery stage.",
      commonConditions: [
        "lower back pain",
        "cervical spondylosis",
        " frozen shoulder",
        "knee osteoarthritis",
        "hip pain",
        "plantar fasciitis"
      ]
    },
    {
      number: "02",
      title: "Sports Physiotherapy",
      href: "/physiotherapy/sports-injury-jvc/",
      description: "For active patients — recreational athletes, weekend warriors, and professional sports. Acute sports injury management (ankle sprains, hamstring strains, ACL injuries, tennis elbow), performance optimisation, biomechanical assessment, return-to-sport protocols. Particularly relevant for Dubai's expat fitness-oriented population — gym injuries, F45 and HIIT-related strain, golf and tennis presentations, running injuries, padel-related issues.",
      commonConditions: [
        " muscle strains",
        "ligament injuries",
        "tendinopathies",
        "sports-related joint injuries",
        "return-to-play assessment"
      ]
    },
    {
      number: "03",
      title: "Post-Surgical Rehabilitation",
      description: "Structured rehabilitation after orthopaedic and other surgeries. <a href='/physiotherapy/post-surgery-rehab-dubai/'>ACL reconstruction recovery, joint replacement rehabilitation</a> (knee, hip, shoulder), spinal surgery recovery, rotator cuff repair, meniscectomy, and other procedures. Protocols are calibrated to your surgeon's specific repair, your recovery stage, and your functional goals. Coordination with your operating surgeon is standard practice.",
      commonConditions: [
        "ACL reconstruction",
        "total knee replacement",
        " total hip replacement",
        " rotator cuff repair",
        "spinal fusion",
        "meniscectomy"
      ],
      href: "/physiotherapy/post-surgery-rehab-dubai/"
    },
    {
      number: "04",
      title: "Neurological Rehabilitation",
      description: "Specialised rehabilitation for neurological conditions. Post-stroke recovery (often combined with our Ayurvedic programmes for integrated care in select cases), Multiple sclerosis support, Parkinson's disease management, traumatic brain injury rehab, spinal cord injury recovery, peripheral neuropathy management, and Bell's palsy. Treatment involves specific neurological techniques including PNF, neurodynamic mobilisation, motor relearning, and constraint-induced therapy.",
      commonConditions: [
        "post-stroke hemiparesis",
        " multiple sclerosis",
        "Parkinson's",
        "traumatic brain injury",
        "peripheral neuropathy",
        "Bell's palsy"
      ],
      href: "/physiotherapy/neurological-dubai/"
    },
    {
      number: "05",
      title: "Women's Health Physiotherapy",
      href: "/conditions/pelvic-floor-physiotherapy-dubai/",
      description: "Specialised area often unavailable elsewhere in JVC. Pelvic floor assessment and rehabilitation (incontinence, prolapse, painful intercourse), pregnancy physiotherapy (back pain, pelvic girdle pain, exercise guidance), postnatal recovery (diastasis recti, pelvic floor restoration, C-section scar work), perimenopausal musculoskeletal changes. Provided by Hafsina K K, our female physiotherapist, who is certified in antenatal and postnatal fitness.",
      commonConditions: [
        " pelvic floor dysfunction",
        "diastasis recti",
        "urinary incontinence",
        " postnatal back pain",
        "pregnancy-related pelvic girdle pain"
      ]
    },
    {
      number: "06",
      title: "Paediatric Physiotherapy",
      href: "/physiotherapy/pediatric-dubai/",
      description: "Physiotherapy for children and teenagers: sports injuries, growth-related knee and heel pain, posture problems and recovery after fractures. Sessions are adapted to the child's age and a parent stays in the room.",
      commonConditions: [
        "developmental coordination delay",
        "sports injuries in adolescents",
        " scoliosis,",
        "cerebral palsy",
        "post-fracture recovery in children"
      ]
    },
  ],

};

export const physiotherapyJvcMechanism = {
  bgColor: "bg-white",
  label: "TECHNIQUES",
  title: "Evidence-based techniques and modalities at our JVC clinic.",
  techniques: [
    {
      title: "<a href='/treatments/manual-therapy-dubai/' class='text-inherit hover:text-[#C9A55A] transition-colors'>Manual Therapy</a>",
      description: "Skilled hands-on treatment including joint mobilisation, soft tissue mobilisation, manipulation, myofascial release, and where appropriate, joint manipulation. The foundational physiotherapy technique that no machine replaces."
    },
    {
      title: "Dry Needling",
      description: "Fine needles placed into trigger points and tight muscle bands to release tension and reduce pain. Performed by Hafsina K K, who is certified in dry needling."
    },
    {
      title: "Electrotherapy and Modalities",
      description: "Advanced electrotherapy and rehabilitation equipment is used where it helps, alongside hands-on treatment and exercise - never on its own."
    },
    {
      title: "Exercise Prescription",
      description: "The most underrated and most important component of physiotherapy. Specific exercises tailored to your condition, your recovery stage, your fitness level, and your goals. Progressive loading principles ensure tissues adapt and strengthen properly. Home exercise programmes are documented in writing with video guidance."
    },
    {
      title: "Neurodynamic Mobilisation",
      description: "Techniques specifically targeting the mobility of nerve tissue — essential for conditions involving nerve compression, sciatica, brachial plexus issues, and certain neurological presentations."
    },
    {
      title: "Sport-Specific Rehabilitation",
      description: "Return-to-sport protocols including sport-specific movement assessment, biomechanical analysis, plyometric progression, and reactive testing. Critical for athletes returning from injury — premature return is the leading cause of re-injury."
    },
    {
      title: "Biomechanical Cupping",
      description: "Cupping used to improve tissue mobility and circulation, usually alongside manual therapy for tightness and restricted movement. Hafsina K K is certified in biomechanical cupping."
    },
    {
      title: "IASTM (Instrument-Assisted Soft Tissue Mobilisation)",
      description: "Handheld instruments used to treat soft-tissue restrictions, scar tissue and chronic tightness. Hafsina K K is certified in IASTM."
    }
  ],
  image: "/images/physiotherapy-treatment-vedara-jvc.webp",
  imageAlt: "Modern physiotherapy treatment techniques at Vedara Care JVC"
};

export const physiotherapyJvcChoosing = {
  label: "CHOOSING A PHYSIOTHERAPIST",
  title: "How to choose a physiotherapist in Dubai.",
  techniques: [
    { title: "Check the DHA licence", description: "Every physiotherapist in Dubai must hold a DHA licence. Search their name or licence number in the DHA Sheryan medical directory." },
    { title: "Ask who will treat you", description: "Some clinics move you between therapists or assistants. At Vedara Care, the same physiotherapist treats you at every session." },
    { title: "Expect one-to-one time", description: "Hands-on treatment and exercise need the physiotherapist's full attention, not a shared session." },
    { title: "Ask for a written plan", description: "A good physiotherapist explains the cause, the plan, how many sessions to expect and what you do at home." },
    { title: "Check insurance before you start", description: "Ask whether the clinic bills your insurer directly or gives you documents to claim. Vedara Care works on reimbursement." }
  ]
};

export const physiotherapyJvcProtocol = {
  bgColor: "bg-[#FAF8F5]",
  label: "WHAT TO EXPECT",
  title: "What happens at your first physiotherapy appointment in JVC?",
  description: "Your first visit is a full assessment and usually your first treatment. Here is how a typical course of physiotherapy runs at our clinic; acute injuries, post-surgery and neurological cases follow their own pace.",
  phases: [
    {
      number: "1",
      phaseName: "Phase 1",
      title: "Initial Assessment",
      duration: "Session 1, 60 minutes",
      items: [
        "Detailed history-taking — onset, mechanism, progression, what you have tried",
        "Comprehensive physical examination — range of motion, strength, special tests, functional assessment",
        "Postural and movement screening",
        "Review of imaging or medical reports if available",
        "Specific physiotherapy diagnosis",
        "Goal-setting in collaboration with you",
        "Treatment plan with realistic timeline",
        "First treatment intervention typically begins same session"
      ],
      expected: "Expected outcome: clear diagnosis, treatment plan documented, initial intervention started"
    },
    {
      number: "2",
      phaseName: "Phase 2",
      title: "Acute Treatment Phase",
      duration: "Sessions 2-6, typically 2-3 weeks",
      items: [
        "Frequency: typically 2-3 sessions per week initially",
        "Hands-on manual therapy each session",
        "Progressive exercise introduction",
        "Modalities as appropriate for your condition",
        "Pain reduction and movement restoration focus",
        "Home exercise programme begins",
        "Functional re-education"
      ],
      expected: "Expected outcome: pain reduction (typically 50%+), restored range of motion, basic functional improvements"
    },
    {
      number: "3",
      phaseName: "Phase 3",
      title: "Progressive Loading",
      duration: "Sessions 7-12, weeks 3-6",
      items: [
        "Frequency reduces: typically 1-2 sessions per week",
        "Strengthening and functional progression",
        "Sport-specific or activity-specific training",
        "Continued manual therapy as needed",
        "Home programme advances",
        "Return to activity protocols"
      ],
      expected: "Expected outcome: strength restoration, functional independence in daily activities, return to most activities"
    },
    {
      number: "4",
      phaseName: "Phase 4",
      title: "Return and Maintenance",
      duration: "Sessions 13+, week 6 onwards",
      items: [
        "Frequency reduces to weekly or bi-weekly",
        "Maintenance of strength and mobility",
        "Prevention-focused care",
        "Self-management strategies",
        "Return to full activity or sport",
        "Check-in sessions as needed for maintenance"
      ],
      expected: "Expected outcome: full function restored, maintenance plan established, reduced risk of recurrence"
    }
  ],
  footer: "This is a representative journey. Total session count varies enormously by condition: acute injuries often resolve in 4-8 sessions; chronic conditions may need 12-20 sessions; post-surgical rehabilitation typically 16-30 sessions over 3-6 months. Your specific plan is documented at the initial assessment."
};

export const physiotherapyJvcTeam = {
  label: "YOUR PHYSIOTHERAPIST",
  title: "Your physiotherapist at our JVC clinic.",
  team: [
    {
      name: "Hafsina K K",
      credentials: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      specialty: "Orthopedic, Neurological, Sports & Women's Health Rehabilitation",
      tags: ["Sports Physiotherapy", "Manual Therapy", "Dry Needling", "Women's Health", "Neurological Rehab", "Paediatric"],
      experience: "7 years experience across orthopedic, neurological, sports, and women's health rehabilitation in India and the UAE.",
      languages: "English, Hindi, Malayalam",
      link: "/doctors/hafsina-kk-physiotherapist/",
      verifyText: "Verify licence on DHA Sheryan",
      verifyHref: "https://services.dha.gov.ae/sheryan/wps/portal/home/medical-directory",
      image: "/images/hafsina-kk-physiotherapist-dubai.webp"
    }
  ]
};

export const physiotherapyJvcImageCards = {
  label: "OUR FACILITY",
  title: "Where physiotherapy happens at Vedara Care JVC.",
  cards: [
    {
      image: "/images/physiotherapy-treatment-vedara-jvc.webp",
      alt: "Modern physiotherapy treatment techniques at Vedara Care JVC",
      title: "Treatment Rooms",
      description: "Modern, private treatment rooms equipped for hands-on physiotherapy."
    },
    {
      image: "/images/physiotherapy-jvc-waiting.jpg",
      alt: "Physiotherapist and Ayurvedic doctor collaborating at Vedara Care JVC",
      title: "Comfortable Environment",
      description: "Welcoming clinic space in the heart of Jumeirah Village Circle."
    }
  ]
};

export const physiotherapyJvcPrograms = {
  label: "TREATMENT PROGRAMMES",
  title: "",
  programs: []
};

export const physiotherapyJvcTherapies = {
  label: "OUR THERAPIES & MODALITIES",
  title: "Techniques used at our JVC physiotherapy clinic.",
  items: [
    {
      title: "Manual Therapy",
      description: "Hands-on treatment for joint mobilization and soft tissue work.",
      category: "Hands-On Technique",
      tags: ["Joint Mobilization", "Soft Tissue"],
      image: "/images/manual-therapy-jvc.webp",
      alt: "Manual therapy treatment at Vedara Care JVC clinic"
    },
    {
      title: "Dry Needling",
      description: "Trigger point dry needling for muscle pain and tightness.",
      category: "Needling Technique",
      tags: ["Trigger Points", "Muscle Tension"],
      image: "/images/dry-needling-jvc.webp",
      alt: "Dry needling treatment at Vedara Care JVC"
    },
    {
      title: "Shockwave Therapy",
      description: "Extracorporeal shockwave therapy for tendinopathies.",
      category: "Electrotherapy",
      tags: ["Plantar Fasciitis", "Tennis Elbow"],
      image: "/images/shockwave-therapy-jvc.webp",
      alt: "Shockwave therapy at our JVC physiotherapy clinic"
    },
    {
      title: "Ultrasound Therapy",
      description: "Therapeutic ultrasound for deep tissue heating.",
      category: "Electrotherapy",
      tags: ["Tendonitis", "Soft Tissue"],
      image: "/images/ultrasound-therapy-jvc.webp",
      alt: "Ultrasound therapy equipment at Vedara Care JVC"
    }
  ]
};

export const physiotherapyJvcHomeHealthcareNew = {
  bgColor: "bg-[#F5F0E8]",
  label: "WHAT MAKES VEDARA CARE DIFFERENT",
  title: "For specific conditions, integrated Ayurveda + physiotherapy produces stronger outcomes.",
  // description: "For patients with mobility limitations or difficulty traveling to our JVC clinic, we provide home physiotherapy across Dubai — particularly useful for post-surgical patients in early recovery, elderly orthopaedic patients, and those with significant mobility restrictions.",
  quote: ["Vedara Care is one of the few DHA-licensed polyclinics in Dubai offering both physiotherapy and Ayurvedic medicine under one license, with both teams sharing clinical notes for joint patients. For the right patient, this integration produces outcomes neither modality achieves alone.",
    "The conditions where integrated Ayurveda + physiotherapy is most valuable include chronic back pain (where physiotherapy addresses biomechanics and Ayurvedic Kati Vasti addresses tissue-level inflammation), arthritis (combining physiotherapy strengthening with Ayurvedic Janu Vasti for knees, Greeva Vasti for cervical), frozen shoulder (physiotherapy mobilisation with Ayurvedic Patra Pinda Sweda), post-stroke neurological rehabilitation, postnatal recovery (pelvic floor physiotherapy with Sutika Paricharya), and chronic sports injuries that have plateaued with physiotherapy alone.",
    "For most patients, however, conventional physiotherapy alone is what they need — acute injuries, post-surgical rehabilitation, paediatric physiotherapy, and women's health are typically physiotherapy-only services. Integration is offered when clinically appropriate, never as a default upsell.",

  ],
  features: [
    "Shared clinical notes between physiotherapy and Ayurveda teams",
    "Joint treatment plans for integrated care patients",
    "Coordinated scheduling across both department",
    "Honest assessment of when integration helps vs. when standalone physio is sufficient",

  ],
  priceText: "Home physiotherapy: coming soon",
  priceNote: "Additional travel charges may apply for distant locations",
  footer: "Home visits are especially valuable for post-ACL repair, post-joint replacement, and neurological rehabilitation patients who find clinic travel challenging.",
  image: "/images/physiotherapy-team-vedara-jvc.webp",
  imageAlt: "Physiotherapist and Ayurvedic doctor collaborating at Vedara Care JVC",
  primaryButtonText: "Notify Me When Home Physiotherapy Launches",
  secondaryButtonText: "Read about Home Healthcare"
};

export const physiotherapyJvcInsurance = {
  bgColor: "bg-[#F5F1E8]",
  label: "INSURANCE",
  title: "Does insurance cover physiotherapy in Dubai?",
  paragraphs: [
    "Most Dubai health insurance plans include physiotherapy when it is medically needed, usually with a yearly session limit and sometimes a doctor's referral.",
    "Vedara Care works on a reimbursement basis with all major insurers: you pay at the clinic and we give you the full documents your insurer needs. WhatsApp a photo of your insurance card before booking and we will help you check your cover."
  ],
  sidebarTitle: "Reimbursement documents provided for:",
  insurers: ["Daman", "AXA", "Allianz", "Oman Insurance", "Now Health", "Bupa", "MetLife"],
  sidebarText: [
    '<a href="https://wa.me/971555736312?text=Hi,%20I%27d%20like%20to%20verify%20my%20insurance%20coverage%20for%20physiotherapy%20at%20JVC" target="_blank" rel="noopener noreferrer" class="hover:underline">WhatsApp your insurance card</a> before booking to confirm exact coverage and out-of-pocket costs.'
  ],
  whatsappNumber: "971555736312"
};


export const physiotherapyJvcReviews = physioReviewsBlock();

export const physiotherapyJvcFaqs = {
  label: "COMMON QUESTIONS",
  sidebarLinks: [{ text: "Read about Ayurveda Clinic in JVC", href: "/ayurveda-clinic-jvc/" }],
  title: "Physiotherapy in JVC and Dubai: your questions answered.",
  description: "Clear answers from Vedara Care Polyclinic, reviewed by Hafsina K K, DHA-licensed physiotherapist.",
  faqs: [
    {
      question: "Do I need a doctor's referral for physiotherapy in Dubai?",
      answer: "No. You can book directly with a DHA-licensed physiotherapist. Some insurance plans ask for a doctor's referral before they reimburse sessions, so check your policy or WhatsApp us a photo of your insurance card."
    },
    {
      question: "How much does physiotherapy cost in Dubai?",
      answer: "It depends on your condition, how long each session is and how many sessions you need. Message us on WhatsApp with your condition and we will reply with the exact cost before you book. If you have insurance, we give you the documents you need to claim."
    },
    {
      question: "Does insurance cover physiotherapy in Dubai?",
      answer: "Most Dubai health insurance plans include physiotherapy when it is medically needed, usually with a yearly session limit and sometimes a doctor's referral. Vedara Care works on reimbursement with all major insurers: you pay at the clinic and we provide full documents for your claim."
    },
    {
      question: "How quickly can I get a physiotherapy appointment in JVC?",
      answer: "Same-day appointments are often available. The clinic is open daily from 9am to 10pm; WhatsApp us to check today's slots."
    },
    {
      question: "Is there a female physiotherapist in JVC?",
      answer: "Yes. Hafsina K K, our DHA-licensed physiotherapist, is female. She treats general musculoskeletal and sports problems as well as pelvic floor, pregnancy and postnatal conditions."
    },
    {
      question: "What happens at my first physiotherapy appointment?",
      answer: "Your physiotherapist asks about your symptoms and history, assesses how you move, explains what is causing the problem and agrees a plan with you. Most people also receive their first treatment and home exercises in the same visit."
    },
    {
      question: "How many physiotherapy sessions will I need?",
      answer: "It depends on the problem. Your physiotherapist gives you an estimate after the first assessment; recent strains usually need fewer sessions than long-standing pain or recovery after surgery, and progress is reviewed as you go."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Any scan, X-ray or MRI reports, surgical notes if you have had an operation, a list of your medicines, your insurance card, and comfortable clothes you can move in."
    },
    {
      question: "What is the difference between physiotherapy and chiropractic care?",
      answer: "Physiotherapy is a DHA-regulated profession that covers assessment, hands-on treatment, exercise and rehabilitation for the whole body, including after surgery and for neurological conditions. Chiropractic care focuses mainly on spinal adjustment."
    },
    {
      question: "Can children have physiotherapy at the JVC clinic?",
      answer: "Yes. Hafsina K K treats children and teenagers, and a parent stays in the room throughout. See our paediatric physiotherapy page for the conditions we treat."
    },
    {
      question: "Do you treat sports injuries from the gym, padel and running?",
      answer: "Yes. Sprains, muscle strains, tendon problems and ligament injuries from gym training, padel, tennis, running and football are treated with hands-on care and a staged return to sport."
    },
    {
      question: "Can I book physiotherapy without seeing an Ayurvedic doctor?",
      answer: "Yes. Most patients see only the physiotherapist. Combined Ayurveda and physiotherapy care is available for some long-term conditions if you want it."
    },
    {
      question: "Do you offer home physiotherapy?",
      answer: "Home physiotherapy is coming soon. Until then, all physiotherapy takes place at our JVC clinic. WhatsApp us to be told when home visits start."
    },
    {
      question: "How can I check that my physiotherapist is licensed?",
      answer: "Search the DHA Sheryan medical directory for Hafsina K K or licence number 64812828. Every physiotherapist practising in Dubai must hold a DHA licence."
    },
    {
      question: "Where is the physiotherapy clinic in JVC?",
      answer: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle, Dubai, walking distance from Circle Mall. There is free and paid parking nearby."
    }
  ]
};

export const physiotherapyJvcAreas = {
  label: "AREAS WE SERVE",
  title: "Physiotherapy near JVC, JVT and Al Barsha South.",
  text: "Our clinic is in Jumeirah Village Circle, next to Circle Mall. Patients come from JVC, Jumeirah Village Triangle (JVT), Al Barsha South, Arjan, Dubai Sports City, Motor City, Al Barsha, Barsha Heights and Dubai Hills, usually within 10 to 20 minutes by car.",
  cta: { text: "Get directions", href: "https://maps.google.com/maps?cid=16711954996415388530" }
};

export const physiotherapyJvcLocation = {
  bgColor: "bg-white",
  label: "VISIT US",
  title: "Where to find our physiotherapy clinic in JVC.",
  address: "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC) Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "+971 55 573 6312",
  whatsappMessage: "Hi, I'd like to book a physiotherapy session at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Mon-Sun - 9:00 AM - 10:00 PM",
  landmarks: [
    "Circle Mall (5 min walking distance)",
    "FIVE Jumeirah Village (3 min)",
    "JSS Private School (8 min)",
    "JVC Districts 10-13",
    "Sheikh Mohammed Bin Zayed Road",
    "Al Khail Road access"
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
  image: "",
  alt: "Vedara Care physiotherapy clinic location JVC Dubai near Circle Mall",
  description: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall. Private treatment rooms with advanced physiotherapy equipment, and the Ayurveda department in the same clinic. Free and paid parking nearby. Open daily 9am to 10pm.",
  buttonText: "Book a Physiotherapy Assessment"
};

export const physiotherapyJvcFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY TO START?",
  title: "Book physiotherapy at our JVC clinic.",
  description: "Whether it is a new injury, long-standing pain or recovery after surgery, the next step is a full assessment with Hafsina K K. Same-day appointments are often available; WhatsApp us to check today's slots.",
  button1Text: "Book a Physiotherapy Assessment",
  button1Href: "/book",
  button2Text: "WhatsApp us",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20physiotherapy%20and%20book%20a%20consultation.",
  footer: "DHA-licensed physiotherapist · Insurance reimbursement with all major insurers · Open daily 9am to 10pm · Near Circle Mall, JVC"
};

export const physiotherapyJvcRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related services and conditions",
  linkText: "Browse all physiotherapy services",
  linkHref: "/physiotherapy-jvc/",
  pages: [
    {
      title: "Meet Hafsina K K",
      description: "DHA-licensed physiotherapist providing one-to-one care at our JVC clinic.",
      href: "/doctors/hafsina-kk-physiotherapist/"
    },
    {
      title: "Ayurveda Clinic in JVC",
      description: "Our DHA-licensed Ayurveda department at the same JVC clinic. For chronic conditions where integrated care produces stronger outcomes.",
      href: "/ayurveda-clinic-jvc/"
    },
    {
      title: "Back Pain Treatment",
      description: "Integrated physiotherapy + Ayurveda for chronic back pain. Most-utilised integrated programme.",
      href: "/conditions/back-pain-ayurveda-dubai/"
    },
    {
      title: "Arthritis Treatment",
      description: "For knee, hip, shoulder, and joint conditions — integrated care combining physiotherapy with Ayurvedic localised therapies.",
      href: "/conditions/arthritis-ayurveda-dubai/"
    },
    {
      title: "Postnatal Care",
      description: "Pelvic floor physiotherapy and 45-day Ayurvedic postnatal programmes for new mothers.",
      href: "/conditions/pelvic-floor-physiotherapy-dubai/"
    },
  ]
};

export const physiotherapyConditions = {
  bgColor: "bg-[#FFFFFF]",
  label: "CONDITIONS",
  title: "Specific conditions treated across Dubai patient populations.",
  conditions: [
    {
      title: "Chronic Lower Back Pain",
      description: "The most-utilised pathway",
      link: "/conditions/back-pain-physiotherapy-jvc/"
    },
    {
      title: "Cervical Spondylosis & Neck Pain",
      description: "Common in Dubai's desk-working population",
      link: "/conditions/neck-pain-physiotherapy-jvc"
    },
    {
      title: "Frozen Shoulder",
      description: "Often more common in diabetic patients (common in Dubai populations)",
      link: "/conditions/frozen-shoulder-dubai"
    },
    {
      title: "Knee Osteoarthritis",
      description: "Hot climate compounds activity limitations",
      link: "/conditions/knee-pain-physiotherapy-dubai"
    },
    {
      title: "Tennis Elbow / Golfer's Elbow",
      description: "Padel and tennis specific",
      link: "/conditions/tennis-elbow-dubai/"
    },
    {
      title: "Plantar Fasciitis",
      description: "Footwear and surface-related"
    },
    {
      title: "Ankle Sprains & Sports Injuries",
      description: "Padel, football, basketball common",
      link: "/physiotherapy/sports-injury-jvc"
    },
    {
      title: "Running Injuries",
      description: "Marathon and recreational running"
    },
    {
      title: "Gym Training Injuries",
      description: "F45, HIIT, weightlifting patterns",
      link: "/physiotherapy/sports-injury-jvc"
    },
    {
      title: "Padel-Specific Injuries",
      description: "Growing Dubai patient cohort",
      link: "/physiotherapy/sports-injury-jvc"
    },
    {
      title: "ACL Reconstruction Recovery",
      description: "Often sports-related",
      link: "/physiotherapy/post-surgery-rehab-dubai"
    },
    {
      title: "Joint Replacement Rehabilitation",
      description: "Older expat populations",
      link: "/physiotherapy/post-surgery-rehab-dubai"
    },
    {
      title: "Post-Stroke Rehabilitation",
      description: "Coordinated with neurology",
      link: "/conditions/stroke-rehab-dubai"
    },
    {
      title: "Pelvic Floor Dysfunction",
      description: "Underserved specialty in Dubai",
      link: "/conditions/pelvic-floor-physiotherapy-dubai"
    },
    {
      title: "Postnatal Recovery",
      description: "Diastasis recti, pelvic floor",
      link: "/conditions/pelvic-floor-physiotherapy-dubai/"
    }
  ],
  footerText: "See all conditions we treat →",
  footerLink: "/conditions"
};

export const physiotherapyTwoImage = {
  bgColor: "bg-white",
  label: "SERVING ALL OF DUBAI",
  title: "Patients travel to our JVC clinic from across Dubai.",
  description1: "While our clinic is located in Jumeirah Village Circle (JVC), our patient base spans the full Dubai geography. Easy access from Sheikh Mohammed Bin Zayed Road and Al Khail Road makes the JVC location reachable from most parts of Dubai in 15-25 minutes.",
  within10Minutes: [
    "Jumeirah Village Circle (JVC)",
    "Jumeirah Village Triangle (JVT)",
    "Al Barsha South",
    "Dubai Sports City",
    "Motor City",
    "Arjan"
  ],
  within1520Minutes: [
    "Dubai Hills Estate",
    "Dubai Marina",
    "Jumeirah Beach Residence (JBR)",
    "Al Furjan",
    "Discovery Gardens"
  ],
  within2030Minutes: [
    "Downtown Dubai",
    "Business Bay",
    "Palm Jumeirah",
    "Mirdif",
    "Damac Hills",
    "Mudon",
    "Town Square"
  ],
  description2: "For patients in areas outside reasonable commute distance, or patients with mobility constraints, our home physiotherapy service operates across Dubai. Home visits are particularly utilised for post-surgical patients in early recovery, elderly orthopaedic patients, and patients with significant mobility limitations.",
  imageAlt: "Vedara Care JVC physiotherapy clinic Dubai serving all neighbourhoods",
  image: "/images/physiotherapy-dubai-clinic-vedara-jvc.webp",
};
