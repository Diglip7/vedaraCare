// data/ayurvedicMassageJvcData.js (replace the whole file)
export const massageHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Ayurvedic Massage in JVC", active: true }
  ],
  label: "AYURVEDIC MASSAGE · JVC, DUBAI · DHA FACILITY LICENCE 2509266",
  title: "Ayurvedic massage in JVC, Dubai — chosen by a doctor, given by a same-gender therapist.",
  description: "Abhyanga, Shirodhara, Kizhi, Pizhichil, head and foot massage and more: classical Ayurvedic body therapies with medicated oils chosen for you. At Vedara Care near Circle Mall, JVC, every first visit includes a consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda), and a same-gender therapist gives the massage in a private room.",
  primaryCTA: "Book an Ayurvedic massage",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20massage%20in%20JVC.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Same-gender therapist, private rooms", "Near Circle Mall, JVC"],
  floatingCard: { title: "NOT A SPA MASSAGE", subtitle: "Medicated oils and a plan chosen by a doctor, not one oil for everyone." },
  image: "/images/ayurvedic-massage-jvc-hero.webp",
  alt: "Ayurvedic massage with warm medicated oil at Vedara Care, JVC Dubai"
};

export const massageIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurvedic massage, in one paragraph.",
  blockquote: "Ayurvedic massage is a group of classical Indian body therapies that use warm medicated oils, herbal powders or herbal bundles chosen for your constitution and condition; the best known is Abhyanga, a full-body warm oil massage. Others include Shirodhara (oil poured on the forehead), Kizhi (warm herbal bundles), Pizhichil (warm oil poured over the body), Kati, Janu and Greeva Vasti (oil held on the back, knee or neck), Udvartana (herbal powder), and Ayurvedic head and foot massage. Unlike a spa massage, it starts with a consultation and follows a plan, and it is used for relaxation, sleep, stiffness, back and neck pain and recovery. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, every first visit includes a consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and a same-gender therapist gives the massage in a private room; prenatal and postnatal massage are also offered. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const massageTypes = {                                // rendered with TreatmentOils
  label: "TYPES OF AYURVEDIC MASSAGE",
  title: "Which Ayurvedic massage is right for you?",
  description: "A guide to the main types. At your consultation, Dr. Zainab confirms the right one or suggests another.",
  oils: [
    { name: "<a href='/treatments/abhyanga-dubai/'>Abhyanga</a>", description: "Full-body warm oil massage", content: "The classic Ayurvedic massage with medicated oil chosen for you.", indication: "stress, sleep, stiffness, general well-being" },
    { name: "Shiro Abhyanga", description: "Head, neck and shoulder massage", content: "Warm oil massaged into the scalp, neck and shoulders.", indication: "tension headaches, stress, dry scalp" },
    { name: "Padabhyanga", description: "Foot massage", content: "Warm oil massage of the feet and lower legs.", indication: "tired feet, poor sleep, relaxation" },
    { name: "<a href='/treatments/shirodhara-dubai/'>Shirodhara</a>", description: "Oil stream on the forehead", content: "A steady stream of warm oil over the forehead.", indication: "anxiety, insomnia, migraine" },
    { name: "<a href='/treatments/patra-pinda-sweda-jvc/'>Kizhi (potli massage)</a>", description: "Warm herbal bundles", content: "Elakizhi, Podikizhi and other bundles pressed over stiff areas.", indication: "joint and muscle stiffness, back and neck pain" },
    { name: "<a href='/treatments/njavarakizhi-dubai/'>Njavarakizhi</a>", description: "Medicated rice bundles", content: "Rice cooked in milk and herbs; nourishing.", indication: "weakness, recovery, older age" },
    { name: "<a href='/treatments/pizhichil-jvc/'>Pizhichil</a>", description: "Oil poured over the body", content: "Warm oil poured in a stream while it is massaged in.", indication: "stiffness, recovery, deep relaxation" },
    { name: "<a href='/treatments/kativasti-dubai/'>Kati</a>, <a href='/treatments/janu-basti-jvc/'>Janu</a> and Greeva Vasti", description: "Oil held on one area", content: "Warm oil held on the lower back, knee or neck inside a dough ring.", indication: "back pain, knee pain, neck stiffness" },
    { name: "<a href='/treatments/udvartana-jvc/'>Udvartana</a>", description: "Herbal powder massage", content: "Firm upward strokes with warm herbal powder.", indication: "heaviness, weight-management support" },
    { name: "Prenatal and <a href='/conditions/postnatal-ayurveda-dubai/'>postnatal</a> massage", description: "For mothers", content: "Gentle oils and positions; prenatal from the second trimester after the doctor's assessment.", indication: "pregnancy aches, recovery after birth" }
  ],
  footer: "Every massage is given by one same-gender therapist in a private room."
};

export const massageVsSpa = {                                // rendered with ClinicalBoundaries
  label: "AYURVEDIC MASSAGE VS SPA MASSAGE",
  title: "What makes a clinic Ayurvedic massage different.",
  leftCard: {
    label: "A TYPICAL SPA MASSAGE",
    title: "Usually:",
    useWarningIcon: false,
    items: ["No health assessment before the massage", "The same oil for everyone", "Chosen from a menu", "Aimed at relaxation only"]
  },
  rightCard: {
    label: "AYURVEDIC MASSAGE AT VEDARA CARE",
    title: "At our JVC clinic:",
    items: [
      { text: "A consultation with a DHA-licensed doctor on your first visit", icon: "check" },
      { text: "Medicated oils chosen for your constitution and condition", icon: "check" },
      { text: "A plan with a goal, and follow-up", icon: "check" },
      { text: "One same-gender therapist, private room", icon: "check" }
    ]
  },
  footer: "Both can be relaxing; the difference is the assessment and the plan."
};

export const massageBenefits = {                             // rendered with TreatmentBenefits
  label: "BENEFITS",
  title: "What people use Ayurvedic massage for.",
  benefitGroups: [
    { title: "Relaxation and sleep", description: "Deep calm and better sleep, especially with Abhyanga, Shirodhara and head massage.", benefits: ["Stress and burnout", "Poor sleep", "Tension headaches"] },
    { title: "Pain and stiffness", description: "Warmth and oils for muscles and joints, often with physiotherapy.", benefits: ["Lower back and neck pain", "Knee and joint stiffness", "Desk-work tension"] },
    { title: "Recovery", description: "Nourishing therapies to rebuild strength.", benefits: ["After illness", "Older age", "After childbirth"] }
  ],
  footer: "Results build over a course and differ from person to person."
};

export const massageProtocol = {                             // rendered with TreatmentProtocol
  label: "YOUR FIRST VISIT",
  title: "How your first Ayurvedic massage works.",
  description: "Your first visit includes a consultation so the massage suits you.",
  phases: [
    { time: "Step 1", title: "Consultation", content: "Dr. Zainab checks your health, medicines and goals, and chooses the massage and oil." },
    { time: "Step 2", title: "The massage", content: "A same-gender therapist gives the massage in a private room, checking pressure and warmth with you." },
    { time: "Step 3", title: "Rest and advice", content: "Time to rest, then simple advice for the rest of the day (warm shower later, light food, no cold drinks)." },
    { time: "Next visits", title: "Your plan", content: "If a course is recommended, the length is set by your needs." }
  ],
  footer: ""
};

export const massageSafety = {                               // rendered with ClinicalBoundaries
  label: "SAFETY",
  title: "When a massage is postponed.",
  leftCard: {
    label: "TELL US FIRST",
    title: "The doctor will postpone or change the massage if you have:",
    useWarningIcon: true,
    items: ["Fever or an acute illness", "Broken skin, a rash or skin infection", "A recent injury with swelling, or a suspected blood clot", "First trimester of pregnancy", "Uncontrolled blood pressure or a heart condition", "Just eaten a heavy meal"]
  },
  rightCard: {
    label: "POSSIBLE SIDE EFFECTS",
    title: "Usually mild:",
    items: [
      { text: "Feeling sleepy or slow afterwards", icon: "check" },
      { text: "Oily skin and hair until you shower", icon: "check" },
      { text: "Rarely, skin irritation from an oil (tell the therapist)", icon: "check" }
    ]
  },
  footer: "Tell us about allergies and all medicines you take."
};

export const massageFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "AYURVEDIC MASSAGE QUESTIONS",
  sidebarLinks: [
    { text: "Abhyanga", href: "/treatments/abhyanga-dubai/" },
    { text: "Shirodhara", href: "/treatments/shirodhara-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Ayurvedic massage: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurvedic%20massage.",
  faqs: [
    { question: "What is Ayurvedic massage?",
      answer: "Ayurvedic massage is a group of classical Indian body therapies using warm medicated oils, herbal powders or herbal bundles, chosen for your constitution and condition. The best known is Abhyanga, a full-body warm oil massage; others include Shirodhara, Kizhi, Pizhichil and Udvartana." },
    { question: "Where can I get an Ayurvedic massage in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, open daily 9am to 10pm. Every massage is prescribed by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. It is close to JVT, Al Barsha South and Arjan." },
    { question: "What are the types of Ayurvedic massage?",
      answer: "Abhyanga (full body), Shiro Abhyanga (head), Padabhyanga (foot), Shirodhara (oil stream on the forehead), Kizhi (warm herbal bundles), Pizhichil (warm oil poured over the body), Kati, Janu and Greeva Vasti (oil held on the back, knee or neck) and Udvartana (herbal powder). The doctor chooses which suits you." },
    { question: "How is Ayurvedic massage different from a spa massage?",
      answer: "An Ayurvedic massage at a clinic starts with a doctor's consultation, uses medicated oils chosen for you, and follows a plan with a goal and follow-up. A spa massage is mainly for relaxation, with the same oil for everyone." },
    { question: "Do I need a consultation before an Ayurvedic massage?",
      answer: "Yes. Your first visit includes a consultation with the doctor, so the massage, oil and pressure suit your health. It also checks for anything that makes a massage unsafe." },
    { question: "What are the benefits of Ayurvedic massage?",
      answer: "People use it to relax deeply, sleep better, ease muscle and joint stiffness and back or neck tension, and recover after illness. Results build over a course; the doctor sets realistic goals at consultation." },
    { question: "Which Ayurvedic massage is best for back pain?",
      answer: "Usually Kati Vasti for the lower back, often with Elakizhi or Abhyanga and physiotherapy. The doctor confirms after checking the cause." },
    { question: "Which is best for stress and sleep?",
      answer: "Shirodhara and Abhyanga are the most used, sometimes with a head massage (Shiro Abhyanga)." },
    { question: "Do you offer head and foot massage?",
      answer: "Yes. Shiro Abhyanga (Ayurvedic head massage) and Padabhyanga (Ayurvedic foot massage) are available, on their own or with other therapies." },
    { question: "Can I have an Ayurvedic massage during pregnancy?",
      answer: "Yes, prenatal Ayurvedic massage is offered from the second trimester after the doctor's assessment, with gentle oils and positions. Postnatal massage is also available as part of postnatal care." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist, in a private room." },
    { question: "Do you offer Ayurvedic massage at home?",
      answer: "No. All massages are given at our JVC clinic." },
    { question: "How much does an Ayurvedic massage cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic massage session commonly costs around AED 250 to 700, depending on the clinic, the type and session length. Vedara Care shares exact prices on WhatsApp." },
    { question: "Is Ayurvedic massage covered by insurance?",
      answer: "Usually not when it is for relaxation. Vedara Care does not bill insurers directly; where a massage is part of treatment for a medical condition, we provide the invoice and report for a reimbursement claim." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number." }
  ]
};

export const massageLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Ayurvedic massage in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to book an Ayurvedic massage at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book an Ayurvedic massage",
  buttonHref: "/book/"
};

export const massageFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Book your first Ayurvedic massage in JVC.",
  description: "Your first visit includes a consultation, so the massage and oil are right for you.",
  button1Text: "Book an Ayurvedic massage",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20massage.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapist", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const massageRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Abhyanga", description: "The full-body warm oil massage.", href: "/treatments/abhyanga-dubai/" },
    { title: "Shirodhara", description: "Warm oil stream for stress and sleep.", href: "/treatments/shirodhara-dubai/" },
    { title: "Kizhi (potli massage)", description: "Herbal bundles for stiff joints.", href: "/treatments/patra-pinda-sweda-jvc/" },
    { title: "Postnatal Ayurveda", description: "Massage and care after childbirth.", href: "/conditions/postnatal-ayurveda-dubai/" }
  ]
};
