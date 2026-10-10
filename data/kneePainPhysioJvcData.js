import { physioReviewsBlock } from './googleReviews';

export const kneePainPhysioHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Conditions", href: "/conditions/" },
    { label: "Knee Pain Physiotherapy in Dubai", active: true }
  ],
  label: "KNEE PAIN PHYSIOTHERAPY · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Knee pain physiotherapy and treatment in Dubai, at our JVC clinic.",
  description: "Physiotherapy for runner's knee, meniscus tears, ligament injuries and knee arthritis at our Jumeirah Village Circle clinic, walking distance from Circle Mall. Hafsina K K, our DHA-licensed physiotherapist, treats the cause, and most knee pain improves without surgery.",
  primaryCTA: "Book Knee Pain Assessment",
  secondaryCTA: "Ask a Question on WhatsApp",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Same-day appointments for new knee injuries",
    "Most knee pain improves without surgery",
    "In-house GP: weight support and referrals"
  ],
  floatingCard: {
    title: "Most knee pain does not need surgery.",
    subtitle: "Research consistently shows most knee pain — including many cases with concerning imaging — responds excellently to physiotherapy."
  },
  image: "/images/knee-pain-physiotherapy-dubai-hero.webp",
  alt: "Knee pain assessment at Vedara Care JVC Dubai physiotherapy clinic"
};

export const kneePainPhysioIntro = {
  label: "THE QUICK ANSWER",
  title: "Knee pain physiotherapy at Vedara Care, in one paragraph.",
  blockquote: "Knee pain physiotherapy at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai treats runner's knee, meniscus tears, ACL and MCL injuries that do not need surgery, knee osteoarthritis, patellar tendinopathy, IT band pain and other knee problems. Hafsina K K, a DHA-licensed physiotherapist (DHA-P 64812828), finds the cause and treats it with targeted strengthening, manual therapy, dry needling, shockwave and electrical stimulation where suitable, and video gait analysis for runners. Most knee pain improves without surgery. Our in-house GP can help with weight management for knee arthritis and refer you for injections if needed. Same-day appointments are available for new injuries. Open daily 9am to 10pm near Circle Mall. Insurance works on reimbursement.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026."
};

export const kneePainMechanism1 = {
  bgColor: "bg-[#F0EAE0]",
  label: "UNDERSTANDING KNEE PAIN",
  title: "Why knee pain is so common — and so often misunderstood",
  description: "Knee pain has many distinct causes that look similar at first but require different treatment. Understanding what is actually happening matters enormously.",
  image: "/images/knee-anatomy-illustration.webp",
  alt: "Knee joint anatomy menisci ligaments educational illustration",
  imageLeft: false,
  showStats: false,
  blockquote: "Knee pain is a complex condition that can have many distinct causes. Understanding what is actually happening matters enormously.",
  content: [
    "The knee is one of the most complex joints in the body — bearing weight, allowing both stability and substantial range of motion, integrating ligaments, tendons, cartilage, menisci, and bone structures that must work together precisely. When something disrupts this complex system, pain results. But the cause of that disruption varies enormously between patients with seemingly similar symptoms.",
    "Dubai's active lifestyle — padel, running, gym training, desert adventures — puts significant stress on knees. Add to that long hours sitting at desks (weakening the glutes and quadriceps that support knees) and you have a perfect recipe for knee pain.",
    "<strong>The most common knee pain patterns</strong><br/>Patellofemoral pain (runner's knee), IT band friction syndrome, meniscus tears, ACL/ligament injuries, osteoarthritis, tendinopathies (patellar, quadriceps), and post-surgical stiffness.",
    "<strong>The good news</strong><br/>Most knee pain responds extremely well to physiotherapy. Even degenerative changes like osteoarthritis can be managed effectively with the right exercise programme and activity modification."
  ],
  quote: "Knee pain rarely has a single cause. It's almost always a combination of factors — anatomy, movement patterns, muscle imbalances, and load."
};



export const kneePainOutcomes = {
  bgColor: "bg-[#F5F1EB]",
  headerBgColor: "bg-[#184C3A]",
  headerTextColor: "text-white",
  label: "Realistic Recovery",
  title: "Recovery timelines by knee condition.",
  description: "Different knee conditions have different recovery timelines. Honest expectations help you stay engaged with treatment.",
  tableHeaders: [
    "Condition",
    "Acute Phase",
    "Full Recovery",
    "Risk Factor"
  ],
  tableRows: [
    {
      subtype: "Patellofemoral Pain Syndrome",
      days: "4-8 weeks",
      severity: "8–16 weeks",
      medication: "Hip strength compliance"
    },
    {
      subtype: "Meniscus injury (non-surgical)",
      days: "6-12 weeks",
      severity: "12–24 weeks",
      medication: "Activity modification compliance"
    },
    {
      subtype: "MCL Grade 1–2 strain",
      days: "4–8 weeks",
      severity: "8–16 weeks",
      medication: "Return to sport timing"
    },
    {
      subtype: "IT band syndrome",
      days: "6–10 weeks",
      severity: "10–16 weeks",
      medication: "Hip strength + training load"
    },
    {
      subtype: "Patellar Tendinopathy",
      days: "8–12 weeks",
      severity: "12–24 weeks",
      medication: "Loading progression discipline"
    },
    {
      subtype: "Knee Osteoarthritis",
      days: "8–12 weeks initial",
      severity: "Ongoing management",
      medication: "Exercise compliance, weight"
    },

    {
      subtype: "Osgood-Schlatter disease",
      days: "4–8 weeks",
      severity: "Ongoing through growth",
      medication: "Sport modification compliance"
    },
    {
      subtype: "Quadriceps/Hamstring tendinopathy",
      days: "6–12 weeks",
      severity: "12–20 weeks",
      medication: "Loading progression"
    },
    {
      subtype: "Post-meniscectomy",
      days: "4–8 weeks",
      severity: "12–16 weeks",
      medication: "Activity progression"
    },
    {
      subtype: "Post-meniscus repair",
      days: "8–16 weeks",
      severity: "6–9 months",
      medication: "Restrictions adherence"
    },
    {
      subtype: "Pes anserine bursitis",
      days: "4–8 weeks",
      severity: "8–12 weeks",
      medication: "Biomechanical correction"
    }

  ],
  footer: "These timelines represent typical patterns. Your specific timeline depends on condition severity, when treatment starts, compliance with home programmes, return-to-activity goals, age and overall health, and underlying contributing factors. At initial assessment, you receive a specific timeline estimate for your situation."
};

export const kneePainReviews = physioReviewsBlock('What patients say about physiotherapy with Hafsina K K');

export const kneePainTeam = {
  bgColor: "bg-[#F8F4EE]",
  cardColor: "bg-white",
  label: "THE TEAM",
  title: "Your knee physiotherapist at our JVC clinic.",
  members: [
    {
      name: "Hafsina K K",
      qualification: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      specialties: ["Knee Pain", "Sports Knee Injuries", "Knee Arthritis", "Gait Analysis"],
      experience: "7 years of clinical experience across orthopedic, neurological, sports, and women's health rehabilitation in India and the UAE.",
      languages: ["English", "Hindi", "Malayalam"],
      image: "/images/hafsina-kk-physiotherapist-dubai.webp",
      alt: "Hafsina K K knee pain physiotherapist Vedara Care JVC Dubai",
      link: "/doctors/hafsina-kk-physiotherapist/"
    }
  ]
};



export const kneePainFaqs = {
  bgColor: "bg-[#F2EDE5]",
  label: "COMMON QUESTIONS",
  sidebarLinks: [
    { text: "Visit physiotherapy main page", href: "/physiotherapy-jvc/" },
    { text: "Sports injury physiotherapy", href: "/physiotherapy/sports-injury-jvc/" }
  ],
  title: "Knee pain physiotherapy: your questions answered.",
  description: "Answers reviewed by Hafsina K K, DHA-licensed physiotherapist.",
  faqs: [
    { question: "Do I need surgery for my knee pain?", answer: "Most knee pain does not need surgery. For runner's knee, knee arthritis, many meniscus tears and most ligament sprains, physiotherapy is the first-line treatment and often works as well as an operation." },
    { question: "When should I see a doctor instead of a physiotherapist for knee pain?", answer: "See a doctor first if your knee swelled quickly after a twist, you cannot put weight on it, it locks or keeps giving way, it is hot and red, or you have a fever. Our in-house GP can see you; go to A&E for severe injuries." },
    { question: "What is causing my knee pain?", answer: "Common causes are runner's knee, meniscus tears, ligament sprains, IT band pain, patellar tendinopathy and osteoarthritis. An assessment of how your knee moves and takes load usually identifies the cause." },
    { question: "My MRI shows a meniscus tear. Do I need surgery?", answer: "Not necessarily. Many meniscus tears, especially wear-related ones, improve with physiotherapy, and tears are common in people with no knee pain. Surgery is considered if the knee keeps locking or does not improve with good rehabilitation." },
    { question: "Do I need a scan before physiotherapy for knee pain?", answer: "Usually not. Most knee problems are diagnosed by examination; a scan is useful if the knee locks, gives way, or does not improve." },
    { question: "Can physiotherapy help knee arthritis?", answer: "Yes. Exercise is the most effective treatment for knee osteoarthritis: strengthening, low-impact activity and weight management reduce pain and improve walking." },
    { question: "Does losing weight help knee pain?", answer: "Yes. Even a small weight loss reduces the load on the knee and can reduce arthritis pain. Our in-house GP can support weight management alongside physiotherapy." },
    { question: "Do you give knee injections?", answer: "No. If pain stays severe despite exercise, our GP can refer you to a specialist to discuss steroid or other injections." },
    { question: "What is runner's knee and how is it treated?", answer: "Pain around or behind the kneecap, often with running, stairs or long sitting. Treatment strengthens the hip and thigh, adjusts training load, and checks running technique with video gait analysis." },
    { question: "Why does my knee hurt going down stairs?", answer: "Going downstairs puts high load through the kneecap, so it is a typical sign of runner's knee or arthritis. Strengthening the thigh and hip usually helps." },
    { question: "Can I keep running or going to the gym with knee pain?", answer: "Often yes, with changes. Your physiotherapist tells you which exercises and distances to keep, reduce or pause while the knee recovers." },
    { question: "Can I get a same-day appointment for a knee injury?", answer: "Yes. Same-day appointments are available for new knee injuries at our JVC clinic, open daily 9am to 10pm." },
    { question: "Do you treat ACL injuries?", answer: "Yes, without surgery here. After ACL reconstruction, see our post-surgery physiotherapy page, which covers return-to-sport testing." },
    { question: "Do you treat knee pain in children?", answer: "Yes. Knee pain in under-18s, including Osgood-Schlatter, is covered on our paediatric physiotherapy page." },
    { question: "Can pregnant women have physiotherapy for knee pain?", answer: "Yes, with exercises and positions adapted to pregnancy, by a female physiotherapist." },
    { question: "Does insurance cover knee physiotherapy?", answer: "Most Dubai plans cover it when it is medically needed, usually with a yearly session limit. Vedara Care works on reimbursement and provides the documents your insurer needs." },
    { question: "Where is the clinic?", answer: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle, Dubai, walking distance from Circle Mall. Open daily 9am to 10pm." }
  ]
};

export const kneePainLocation = {
  bgColor: "bg-white",
  label: "VISIT US",
  title: "Where to find our knee physiotherapy clinic in JVC.",
  address: "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC), Dubai, UAE",
  phone: "+971 55 573 6312",
  whatsapp: "+971 55 573 6312",
  email: "booking@vedaracare.ae",
  hours: "Mon-Sun - 9:00 AM - 10:00 PM",
  landmarks: [
    "Walking distance from Circle Mall",
    "3 minutes from FIVE Jumeirah Village Hotel",
    "5 minutes from JSS Private School",
    "Free patient parking available",
    "Easy access from Sheikh Mohammed Bin Zayed Road and Al Khail Road",
    "Patients travel from JVT, Al Barsha South, Sports City, Motor City, Arjan, Dubai Hills"
  ],
  description: "Knee physiotherapy takes place at Vedara Care Polyclinic in JVC, walking distance from Circle Mall: treatment rooms, a strength and exercise area, shockwave and electrical stimulation equipment, video gait analysis and an in-house GP. Free and paid parking nearby. Patients come from JVC, JVT, Al Barsha South, Arjan, Dubai Sports City, Motor City and Al Barsha.",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
  image: "/images/vedara-care-jvc-clinic.jpg",
  alt: "Vedara Care JVC clinic",
  buttonText: "Book Knee Pain Assessment",
  buttonLink: "/book"
};

export const kneePainCTA = {
  bgColor: "bg-[#F5F1E8]",
  label: "Ready to Address Your Knee Pain?",
  title: "Knee pain? Start with an assessment, not a scan.",
  description: "Whether it is a new injury, long-standing pain or arthritis, the first step is an assessment with Hafsina K K at our JVC clinic. Same-day appointments are available for new knee injuries.",
  button1Text: "Book Knee Pain Assessment",
  button1Href: "/book",
  button2Text: "WhatsApp us",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20knee%20pain%20physiotherapy%20and%20book%20a%20consultation.",
  footer: "DHA-licensed physiotherapist · In-house GP · Insurance reimbursement · Open daily 9am to 10pm · Near Circle Mall, JVC"
};

export const kneePainInjuryTypes = {
  label: "SPECIFIC KNEE CONDITIONS",
  title: "The different knee conditions we treat at our JVC clinic.",
  description: "Accurate diagnosis is the foundation of effective treatment. These are the most common knee conditions we see at our clinic.",
  items: [
    {
      number: "01",
      title: 'Patellofemoral Pain Syndrome (Runner\'s Knee)',
      description: 'Pain at the front of the knee, particularly with stairs, squatting, prolonged sitting, or after running. The most common knee pain presentation we see at the clinic. Responds to specific exercise protocols addressing hip strength, foot mechanics, and movement patterns.',
      typicalPatient: 'Runner, recreational athlete, or active person'
    },
    {
      number: "02",
      title: "Meniscus Injuries",
      description: 'Damage to the meniscus cartilage — degenerative tears in older patients, traumatic tears in younger patients. Many meniscus tears do not require surgery as effective as surgery for many tear types.',
      typicalPatient: 'Athletic injury (younger) or gradual onset (older)'
    },
    {
      number: "03",
      title: "ACL Injuries (without surgery)",
      description: "Partial ACL tears, and complete tears in people who choose rehabilitation without reconstruction: strength, balance and movement control. After ACL surgery, see <a href='/physiotherapy/post-surgery-rehab-dubai/#acl'>ACL rehabilitation</a>.",
      typicalPatient: 'Sport-related injury, padel, football, basketball, skiing'
    },
    {
      number: "04",
      title: 'MCL & LCL Ligament Injuries',
      description: 'Collateral ligament injuries on the inside (MCL) or outside (LCL) of the knee. Most heal without surgery through appropriate conservative management — bracing during early healing, progressive rehabilitation, gradual return to activity.',
      typicalPatient: 'Contact sport injury, padel, football, gym injuries'
    },
    {
      number: "05",
      title: 'IT Band Syndrome',
      description: 'Lateral knee pain in runners and cyclists. Treatment addresses the underlying hip and core factors driving the IT band tension, not just the IT band itself. Foam rolling alone rarely resolves IT band syndrome.',
      typicalPatient: ' Runner, cyclist, walking enthusiast, gym training'
    },
    {
      number: "06",
      title: 'Patellar Tendinopathy (Jumper\'s Knee)',
      description: 'Pain at the patellar tendon below the kneecap. Common in jumping sports, padel, and gym training. Eccentric loading protocols are evidence-based first-line treatment. Shockwave therapy when appropriate',
      typicalPatient: 'Jumping sport athlete, padel player, gym enthusiast'
    },
    {
      number: "07",
      title: 'Knee Osteoarthritis',
      description: 'Degenerative changes in the knee joint affecting articular cartilage. Physiotherapy is the evidence-based first-line treatment. Strength training, weight management, and activity modification often substantially reduce symptoms.',
      typicalPatient: ' Middle-aged or older patient, gradual onset, worse with activity'
    },
    {
      number: "08",
      title: 'Quadriceps & Hamstring Tendinopathies',
      description: 'Pain at the muscle-tendon junctions around the knee. Both respond to progressive loading protocols. Common in older athletes and after periods of training intensification.',
      typicalPatient: 'Active patient with overuse pattern, sports return after time off'
    },
    {
      number: "09",
      title: 'Pes Anserine Bursitis',
      description: 'Pain on the inside of the knee below the joint line — often confused with meniscus issues. Treatment combines manual therapy, addressing biomechanical contributors, and progressive loading.',
      typicalPatient: 'Runner, swimmer, gym training, sometimes diabetic patients'
    },
    {
      number: "10",
      title: "Knee Pain in Children and Teenagers",
      description: "Osgood-Schlatter and other growth-related knee pain. See <a href='/physiotherapy/pediatric-dubai/#growth-pain'>paediatric physiotherapy</a>.",
      typicalPatient: ' Adolescent athlete, often in football, basketball, padel academies'
    },
    {
      number: "11",
      title: "After Knee Surgery",
      description: "Knee replacement, ACL reconstruction and meniscus surgery rehabilitation. See <a href='/physiotherapy/post-surgery-rehab-dubai/'>post-surgery physiotherapy</a>.",
      typicalPatient: ' Post-surgical patient, often coordinated with international surgeons'
    },
    {
      number: "12",
      title: 'Other Knee Conditions',
      description: 'Including: knee bursitis, fat pad irritation, plica syndrome, patellar instability and dislocation, post-traumatic conditions. Less common but important conditions requiring specific approaches.',
      typicalPatient: 'specific assessment required'
    }
  ],
  footer: 'Not sure which condition applies? <a href="/book" class="text-[#C9A55A] hover:underline">Book an assessment for accurate diagnosis →</a>'
};

export const kneePainActivityTypes = {
  bgColor: "bg-[#F8F4EE]",
  label: "KNEE PAIN BY SPORT",
  title: "Common knee pain patterns in Dubai's active population.",
  description: "Different sports produce different knee pain patterns. Understanding the sport-specific pattern guides effective treatment.",
  items: [
    {
      title: 'Running',
      description: 'Patellofemoral pain syndrome, IT band syndrome, patellar tendinopathy, runner\'s knee. Often related to training load increases, surface changes, footwear factors, or biomechanical patterns. Gait analysis is part of our assessment.',
      typicalRecovery: '6–12 weeks with appropriate treatment'
    },
    {
      title: 'Gym Training (F45, CrossFit, HIIT)',
      description: 'Patellar tendinopathy, patellofemoral pain, meniscus injuries, ACL injuries from jumping/landing, quadriceps tendinopathy. Often related to training intensity progressions, technique issues, or movement pattern factors.',
      typicalRecovery: '4–12 weeks for most overuse; longer for acute injuries'
    },
    {
      title: 'Padel',
      description: 'Meniscus injuries, MCL strains, lateral movement patterns producing patellofemoral pain, sudden direction changes producing ACL stress. Padel\'s specific lateral movement pattern produces distinctive knee injury patterns.',
      typicalRecovery: '4–12 weeks for most padel injuries'
    },
    {
      title: 'Football & Futsal',
      description: 'ACL injuries, meniscus injuries, MCL strains, contact-related contusions, sudden cutting injuries. Higher acute injury rates than non-contact sports. Sport-specific rehabilitation includes change-of-direction training.',
      typicalRecovery: '4–8 weeks for soft tissue; 9–12 months for ACL'
    },
    {
      title: 'Cycling',
      description: "Patellofemoral pain, IT band syndrome and front-of-knee pain from riding volume and position. We treat the knee and the strength and movement factors; a professional bike setup from a cycle shop can help too.",
      typicalRecovery: "4-8 weeks with treatment and load changes"
    },
    {
      title: 'Recreational Sports & Activity',
      description: 'Tennis, volleyball, basketball — jumping-related patellar issues; hiking, walking — patellofemoral pain, IT band syndrome. Treatment approach calibrated to specific sport demands and return-to-activity goals.',
      typicalRecovery: 'Varies by sport and injury'
    }
  ],
  footer: 'For comprehensive sports injury treatment, see our <a href="/physiotherapy/sports-injury-jvc/" style="color: rgb(184, 150, 90); text-decoration: underline;">sports physiotherapy page</a> →'
};

export const kneePainRelatedPages = {
  bgColor: "bg-[#EDE8DE]",
  label: "EXPLORE FURTHER",
  title: "Related services and conditions",
  linkText: "Browse all physiotherapy services",
  linkHref: "/physiotherapy-jvc/",
  pages: [
    { title: "Post-Surgery Physiotherapy", href: "/physiotherapy/post-surgery-rehab-dubai/", description: "Knee replacement, ACL reconstruction and meniscus surgery rehab, plus prehab." },
    { title: "Sports Injury Physiotherapy", href: "/physiotherapy/sports-injury-jvc/", description: "Padel, running, gym and football injuries." },
    { title: "Paediatric Physiotherapy", href: "/physiotherapy/pediatric-dubai/", description: "Knee pain in children and teenagers." },
    { title: "Back Pain Physiotherapy", href: "/conditions/back-pain-physiotherapy-jvc/", description: "Lower back pain that can affect the knee." },
    { title: "Ayurvedic Arthritis Treatment", href: "/conditions/arthritis-ayurveda-dubai/", description: "An optional Ayurvedic approach to arthritis at the same clinic." }
  ]
};

export const kneePainTreatmentApproach = {
  label: "THE APPROACH",
  title: "How we actually treat knee pain at our JVC clinic.",
  description: "Effective knee pain treatment starts with accurate diagnosis. Generic \"knee exercises\" rarely resolve knee pain because the underlying cause varies enormously between patients. Our approach starts with identifying what is actually happening, then applying treatment matched to your specific condition.",
  content: [
    {
      title: "Comprehensive initial assessment",
      description: "Your first session includes a full assessment and usually your first treatment; session length depends on your needs."
    },
    {
      title: "Manual therapy when indicated",
      description: "Hands-on manual therapy — joint mobilisation, soft tissue work, manual stretching, manipulation where appropriate — provides effective symptom relief and addresses restricted areas. Manual therapy creates a window for active rehabilitation to be more effective."
    },
    {
      title: "Condition-specific exercise prescription",
      description: "The most evidence-supported intervention for knee pain is structured exercise — but specific exercise for your condition, not generic 'knee exercises.' Patellofemoral pain responds to hip strengthening. Tendinopathies require eccentric loading protocols. Each condition has its own evidence-based exercise approach."
    },
    {
      title: "Biomechanical analysis and movement assessment",
      description: "Many chronic knee conditions have underlying biomechanical contributors — hip weakness driving knee valgus, foot pronation affecting alignment, gait patterns producing repetitive stress. Our assessment includes biomechanical analysis appropriate to your activity demands, including video gait analysis for runners."
    },
    {
      title: "Dry needling for chronic muscle patterns",
      description: "For chronic muscle tension patterns — particularly chronic quadriceps tension, IT band-related muscle patterns, calf tension affecting knee mechanics — dry needling is effective at releasing trigger points and reducing protective muscle guarding."
    },
    {
      title: "Modalities where evidence supports",
      description: "Shockwave for long-standing patellar tendinopathy; heat, TENS and electrical stimulation for pain; never as the main treatment."
    },
    {
      title: "Patient education and self-management",
      description: "Understanding your knee condition substantially improves outcomes. We explain what is happening, why specific treatments work, expected recovery timeline, what activities are safe, what to avoid, and how to prevent recurrence."
    }
  ],
  quote: "Generic knee exercises produce generic outcomes. Treatment matched to your specific condition produces meaningfully better results.",
  image: "/images/knee-pain-assessment-vedara-jvc.webp",
  alt: "Evidence-based knee pain treatment at Vedara Care JVC Dubai",
  toolkitItems: [
    "Manual Therapy",
    "Exercise Prescription",
    "Gait Analysis",
    "Dry Needling",
    "Shockwave Therapy",
    "Biomechanical Assessment",
    "Patient Education",
    "Sports Rehab"
  ]
};

export const kneePainWithoutSurgery = {
  id: "without-surgery",
  label: "WITHOUT SURGERY",
  title: "Knee pain treatment without surgery: when physiotherapy is enough.",
  content: [
    "Most knee pain improves without surgery. For runner's knee, knee osteoarthritis, patellar tendinopathy, many meniscus tears and most MCL injuries, physiotherapy is the first-line treatment, and for degenerative meniscus tears and knee arthritis it often works as well as an operation.",
    "<strong>A scan is not the whole story</strong><br/>MRI changes such as meniscus tears and cartilage wear are common in people with no knee pain at all. How your knee moves and how strong it is usually matter more than the scan.",
    "<strong>When surgery is more likely to be needed</strong><br/>A knee that keeps locking or giving way, a complete ACL tear in someone returning to cutting sports, or severe arthritis that still limits daily life after good rehabilitation. If you do have surgery, see our <a href='/physiotherapy/post-surgery-rehab-dubai/'>post-surgery physiotherapy</a> page.",
    "<strong>See a doctor first if</strong><br/>your knee swelled up quickly after a twist, you cannot put weight on it, it is hot and red or you have a fever, or it looks deformed. Our in-house GP can see you at the same clinic; go to A&E for severe injuries."
  ],
  image: "/images/knee-pain-assessment-vedara-jvc.webp",
  alt: "Knee pain assessment at Vedara Care, JVC, Dubai"
};

export const kneePainArthritis = {
  id: "knee-arthritis",
  label: "KNEE ARTHRITIS",
  title: "Knee arthritis (osteoarthritis): what helps.",
  content: [
    "Exercise is the most effective treatment for knee osteoarthritis. Strengthening the thigh and hip muscles, staying active with low-impact exercise such as walking, cycling or swimming, and losing a little weight if needed can reduce pain and improve walking, even though the joint changes themselves do not reverse.",
    "<strong>What physiotherapy includes</strong><br/>A strength and balance programme, manual therapy, heat, TENS or electrical stimulation for pain, advice on pacing activity, and a plan you can continue at home or in the gym.",
    "<strong>Weight management</strong><br/>Each kilogram lost reduces the load through the knee. Our in-house GP can support weight management alongside your physiotherapy.",
    "<strong>Injections</strong><br/>Vedara Care does not give knee injections. If pain stays severe despite exercise, our GP can refer you to a specialist to discuss steroid or other injections.",
    "<strong>Ayurvedic option</strong><br/>Some patients also choose Ayurvedic care for arthritis at our clinic; see <a href='/conditions/arthritis-ayurveda-dubai/'>Ayurvedic arthritis treatment</a>."
  ],
  image: "/images/knee-anatomy-illustration.webp",
  alt: "Knee osteoarthritis physiotherapy at Vedara Care, JVC, Dubai"
};
