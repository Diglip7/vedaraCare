// data/ayurvedaClinicJvcData.js
export const jvcHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Ayurveda Clinic in JVC", active: true }
  ],
  label: "AYURVEDA CLINIC · JUMEIRAH VILLAGE CIRCLE (JVC) · DHA FACILITY LICENCE 2509266",
  title: "Ayurvedic clinic in JVC, Dubai — near Circle Mall, open daily 9am to 10pm.",
  description: "Consultations with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), classical therapies given by same-gender therapists in private rooms, and a GP and physiotherapists under the same roof. Shop 4, Binghatti Azure, JVC.",
  primaryCTA: "Book a consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20at%20your%20Ayurveda%20clinic%20in%20JVC.",
  trustSignals: ["DHA Facility Licence 2509266", "Dr. Zainab Sheikh, BAMS, MD (Ayurveda)", "Same-gender therapists", "Free and paid parking"],
  floatingCard: { title: "NEAR CIRCLE MALL", subtitle: "Shop 4, Binghatti Azure, Al Barsha South Fourth, JVC." },
  image: "/images/ayurveda-clinic-jvc-hero.webp",
  alt: "Vedara Care Ayurveda clinic in Jumeirah Village Circle (JVC), Dubai"
};

export const jvcIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurveda in JVC, in one paragraph.",
  blockquote: "Vedara Care Polyclinic runs a DHA-licensed Ayurveda clinic in Jumeirah Village Circle (JVC), Dubai, at Shop 4, Binghatti Azure, Al Barsha South Fourth, near Circle Mall, open daily from 9am to 10pm with free and paid parking. Care is led by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor (BAMS, MD Ayurveda), and every plan starts with a 45 to 60-minute consultation with pulse diagnosis. Classical therapies — Abhyanga, Shirodhara, Kizhi, Pizhichil, Kati and Janu Vasti, Nasya, Basti, Udvartana and Panchakarma — are given by same-gender therapists in private rooms, and medicines are prescribed, not sold. A GP and physiotherapists work at the same clinic, so tests and physiotherapy can be planned alongside Ayurveda. Most patients come from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const jvcFirstVisit = {                                 // TreatmentProtocol
  label: "YOUR FIRST VISIT",
  title: "What happens when you come to our JVC clinic.",
  description: "",
  phases: [
    { time: "Before", title: "Book", content: "Online, on WhatsApp or by phone. Bring a list of your medicines and any recent reports." },
    { time: "Step 1", title: "Consultation (45-60 minutes)", content: "Dr. Zainab takes your history, reviews your medicines and reads your pulse (<a href='/treatments/nadi-pareeksha-jvc/'>Nadi Pareeksha</a>)." },
    { time: "Step 2", title: "Your written plan", content: "Diet, routine, prescribed herbs and any therapies, explained in plain words. You decide whether to start." },
    { time: "Step 3", title: "Therapies and reviews", content: "Therapies by a same-gender therapist in a private room; follow-ups as your plan needs." }
  ],
  footer: "If you need a GP, blood tests or physiotherapy, they are at the same clinic."
};

export const jvcTherapies = {                                  // TreatmentOils (short cards, each linking to its page)
  label: "TREATMENTS AT OUR JVC CLINIC",
  title: "Classical Ayurvedic therapies, chosen by the doctor.",
  description: "Each card links to a full page about that therapy.",
  oils: [
    { name: "<a href='/treatments/nadi-pareeksha-jvc/'>Ayurvedic consultation</a>", description: "Nadi Pareeksha", content: "Pulse diagnosis and a written plan.", indication: "every new patient" },
    { name: "<a href='/treatments/ayurvedic-massage-jvc/'>Ayurvedic massage</a>", description: "Abhyanga, head and foot", content: "Warm medicated oils chosen for you.", indication: "stress, stiffness, well-being" },
    { name: "<a href='/treatments/shirodhara-dubai/'>Shirodhara</a>", description: "Oil stream on the forehead", content: "Classic calming therapy.", indication: "stress, sleep, headaches" },
    { name: "<a href='/treatments/patra-pinda-sweda-jvc/'>Kizhi</a> and <a href='/treatments/njavarakizhi-dubai/'>Njavarakizhi</a>", description: "Herbal bundles", content: "Leaf, powder or rice bundles.", indication: "pain, stiffness, recovery" },
    { name: "<a href='/treatments/pizhichil-jvc/'>Pizhichil</a>", description: "Oil bath", content: "Warm oil poured and massaged in.", indication: "stiffness, recovery" },
    { name: "<a href='/treatments/kativasti-dubai/'>Kati</a>, <a href='/treatments/janu-basti-jvc/'>Janu</a> and Greeva Vasti", description: "Oil held on one area", content: "Lower back, knee or neck.", indication: "back, knee and neck pain" },
    { name: "<a href='/treatments/nasya-therapy-jvc/'>Nasya</a> · <a href='/treatments/basti-jvc/'>Basti</a> · <a href='/treatments/udvartana-jvc/'>Udvartana</a>", description: "Classical therapies", content: "Nasal oil, medicated enema, herbal powder massage.", indication: "as prescribed" },
    { name: "<a href='/treatments/panchakarma-dubai/'>Panchakarma</a> and <a href='/treatments/rasayana-ayurveda-jvc/'>Rasayana</a>", description: "Programmes", content: "7, 14 and 21-day cleansing; rejuvenation plans.", indication: "long-standing conditions, recovery" }
  ],
  footer: "Pre- and postnatal Ayurvedic care: see <a href='/conditions/postnatal-ayurveda-dubai/'>postnatal Ayurveda</a>."
};

export const jvcConditions = {                                 // TreatmentOils
  label: "WHAT PEOPLE COME TO US FOR",
  title: "Common reasons patients visit our JVC Ayurveda clinic.",
  description: "Each links to a page explaining the Ayurvedic approach.",
  oils: [
    { name: "<a href='/conditions/back-pain-ayurveda-dubai/'>Back pain</a>, <a href='/conditions/sciatica-ayurveda-jvc/'>sciatica</a> and <a href='/conditions/cervical-spondylosis-ayurveda-jvc/'>neck pain</a>", description: "Spine", content: "With physiotherapy at the same clinic.", indication: "" },
    { name: "<a href='/conditions/arthritis-ayurveda-dubai/'>Arthritis and joint pain</a>", description: "Joints", content: "Alongside your rheumatologist.", indication: "" },
    { name: "<a href='/conditions/stress-anxiety-ayurveda-dubai/'>Stress, anxiety and burnout</a>", description: "Mind", content: "Alongside your doctor or therapist.", indication: "" },
    { name: "<a href='/conditions/ibs-ayurveda-dubai/'>IBS and digestion</a> · <a href='/conditions/weight-loss-ayurveda-dubai/'>weight</a>", description: "Digestion and metabolism", content: "With GP tests on site.", indication: "" },
    { name: "<a href='/conditions/thyroid-ayurveda-dubai/'>Thyroid</a> · <a href='/conditions/diabetes-ayurveda-dubai/'>diabetes</a> · <a href='/conditions/pcos-ayurveda-dubai/'>PCOS</a>", description: "Hormones", content: "Alongside your medicines, never instead.", indication: "" },
    { name: "<a href='/conditions/skin-ayurveda-dubai/'>Skin</a> · <a href='/conditions/hair-loss-ayurveda-dubai/'>hair loss</a> · <a href='/conditions/migraine-ayurveda-dubai/'>migraine</a>", description: "Skin, hair, head", content: "Ayurvedic plans with GP tests where needed.", indication: "" }
  ],
  footer: ""
};

export const jvcWhy = {                                        // ClinicalBoundaries (two columns of plain facts)
  label: "WHY PATIENTS CHOOSE VEDARA CARE",
  title: "What you can expect at our JVC clinic.",
  leftCard: {
    label: "MEDICAL STANDARDS",
    title: "Ayurveda as medicine:",
    useWarningIcon: false,
    items: [
      "DHA-licensed facility (2509266) and doctor (20918133)",
      "Every plan starts with a 45-60 minute consultation",
      "Medicines prescribed, never sold",
      "No outcome promises — honest expectations"
    ]
  },
  rightCard: {
    label: "PRACTICAL",
    title: "Under one roof in JVC:",
    items: [
      { text: "Same-gender therapists, private rooms", icon: "check" },
      { text: "GP and physiotherapists at the same clinic", icon: "check" },
      { text: "Open daily 9am to 10pm, near Circle Mall", icon: "check" },
      { text: "Free and paid parking", icon: "check" }
    ]
  },
  footer: ""
};

export const jvcFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "JVC CLINIC QUESTIONS",
  sidebarLinks: [
    { text: "Ayurvedic treatment in Dubai (guide)", href: "/ayurveda-dubai/" },
    { text: "Dr. Zainab Sheikh", href: "/doctors/dr-zainab-ayurveda/" },
    { text: "Ayurvedic consultation", href: "/treatments/nadi-pareeksha-jvc/" }
  ],
  title: "Our Ayurveda clinic in JVC: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20your%20Ayurveda%20clinic%20in%20JVC.",
  faqs: [
    {
      question: "Is there an Ayurvedic clinic in JVC?",
      answer: "Yes. Vedara Care Polyclinic has an Ayurveda department at Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), near Circle Mall, open daily 9am to 10pm."
    },
    {
      question: "Who is the Ayurvedic doctor at Vedara Care?",
      answer: "Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor (licence 20918133) with a BAMS and an MD in Ayurveda. She speaks English, Malayalam and Hindi."
    },
    {
      question: "What happens at my first visit?",
      answer: "A 45 to 60-minute consultation: your history and medicines, pulse diagnosis (Nadi Pareeksha), and a written plan. You decide whether to start any treatment."
    },
    {
      question: "What treatments do you offer in JVC?",
      answer: "Ayurvedic consultations, Abhyanga, Shirodhara, Kizhi, Njavarakizhi, Pizhichil, Kati, Janu and Greeva Vasti, Nasya, Basti, Udvartana, Panchakarma, Rasayana, and pre- and postnatal care."
    },
    {
      question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by male therapists and women by female therapists, in private rooms."
    },
    {
      question: "Is there parking?",
      answer: "Yes. Free and paid parking are available near the clinic."
    },
    {
      question: "Which areas do your patients come from?",
      answer: "Mostly JVC and nearby JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City."
    },
    {
      question: "Is Ayurveda licensed in Dubai?",
      answer: "Yes. The Dubai Health Authority (DHA) licenses Ayurvedic clinics and doctors. Vedara Care's facility licence is 2509266 and Dr. Zainab's professional licence is 20918133."
    },
    {
      question: "Do you sell Ayurvedic medicines?",
      answer: "No. Dr. Zainab prescribes what you need; you buy it at a licensed pharmacy."
    },
    {
      question: "Can I see a GP or physiotherapist at the same clinic?",
      answer: "Yes. Our GP and physiotherapists work at the same clinic, so blood tests, medical care and physiotherapy can be planned alongside Ayurveda."
    },
    {
      question: "Do you offer home visits?",
      answer: "No. All Ayurvedic care is at our JVC clinic."
    },
    {
      question: "Is Ayurveda covered by insurance?",
      answer: "Some plans reimburse it and many do not. Vedara Care does not bill insurers directly; we provide the invoice and report you need for a reimbursement claim."
    },
    {
      question: "How much does an Ayurvedic consultation cost in Dubai?",
      answer: "Across Dubai, a first Ayurvedic consultation commonly costs around AED 200 to 500. Vedara Care shares exact prices on WhatsApp."
    },
    {
      question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number."
    }
  ]
};

export const jvcLocation = {                                   // TreatmentLocation
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "How to find our Ayurveda clinic in JVC.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like directions to your Ayurveda clinic in JVC.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Easy to reach from JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Get directions",
  buttonHref: "https://www.google.com/maps/search/?api=1&query=Vedara%20Care%20Polyclinic%20JVC%20Dubai"
};

export const jvcFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Book your Ayurvedic consultation in JVC.",
  description: "45 to 60 minutes with Dr. Zainab, a written plan, and no obligation to start treatment.",
  button1Text: "Book a consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20book%20an%20Ayurvedic%20consultation%20in%20JVC.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapists", "Free and paid parking", "Open daily 9am-10pm"]
};

export const jvcRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "Read our guide to Ayurveda in Dubai",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Ayurvedic treatment in Dubai", description: "The full guide: therapies, conditions, cost.", href: "/ayurveda-dubai/" },
    { title: "Dr. Zainab Sheikh", description: "BAMS, MD (Ayurveda), DHA-licensed.", href: "/doctors/dr-zainab-ayurveda/" },
    { title: "Ayurvedic massage", description: "All massages at our JVC clinic.", href: "/treatments/ayurvedic-massage-jvc/" },
    { title: "Panchakarma", description: "7, 14 and 21-day programmes.", href: "/treatments/panchakarma-dubai/" }
  ]
};

