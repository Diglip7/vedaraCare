// data/nasyaTherapyData.js (replace the whole file)
export const nasyaHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Nasya in JVC", active: true }
  ],
  label: "NASYA · NASYAM · JVC, DUBAI",
  title: "Nasya (Nasyam) therapy in JVC, Dubai — Ayurvedic nasal oil treatment, prescribed by a doctor.",
  description: "Nasya gives a medicated oil, herbal juice or powder through the nose after a gentle face massage and steam. It is used mainly for sinus, headache, neck and hair problems. At Vedara Care near Circle Mall, JVC, Dr. Zainab Sheikh (BAMS, MD Ayurveda) chooses the type and oil, such as Anu Thailam, and a same-gender therapist gives it in the clinic.",
  primaryCTA: "Book a Nasya consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Nasya.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "All four types of Nasya", "Same-gender therapist"],
  floatingCard: { title: "'THE DOORWAY TO THE HEAD'", subtitle: "Classical texts describe the nose as the route to treat the head, sinuses and neck." },
  image: "/images/nasya-therapy-jvc.webp",
  alt: "Nasya (Nasyam) nasal oil therapy at Vedara Care Ayurveda clinic, JVC Dubai"
};

export const nasyaIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Nasya, in one paragraph.",
  blockquote: "Nasya (also called Nasyam or Nasya Karma) is a classical Ayurvedic therapy in which a medicated oil, herbal juice or powder is given through the nose, after a gentle face and neck massage and steam; it is one of the five actions of Panchakarma. It is used mainly for chronic sinusitis and allergic rhinitis, migraine and headaches, neck stiffness and cervical spondylosis, hair fall and early greying, and poor sleep, alongside usual medical care. The best-known oil is Anu Thailam, but the doctor chooses the type and medicine for each person, and Nasya is usually given as a short course. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, Nasya starts with a 45 to 60-minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed) and is given in the clinic by a same-gender therapist, for adults and children aged 7 and over. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const nasyaMechanism = {
  bgColor: "bg-[#F9F6F1]",
  label: "WHAT NASYA IS",
  title: "Why Ayurveda treats the head through the nose.",
  content: [
    "Classical Ayurveda describes the nose as 'the doorway to the head' (Nasa hi shiraso dvaram). Medicine given through the nose is meant to act on the sinuses, head, neck and senses.",
    "Before Nasya, the face, forehead and neck are massaged with oil and warmed with gentle steam to open the passages. After it, the area is massaged again and you may be asked to gargle with warm water.",
    "What does the research say? Studies are small: a randomized trial found Nasya reduced signs and symptoms of cervical spondylosis, and in chronic sinusitis Anu Taila Nasya after steam was well tolerated. We use Nasya alongside medical care, not instead of it."
  ],
  sources: "Sources: <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3456869/' target='_blank' rel='noopener'>Nasya in cervical spondylosis, randomized trial (PMC)</a> · <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC3335227/' target='_blank' rel='noopener'>Ayurvedic treatment incl. Anu Taila Nasya in chronic sinusitis (PMC)</a>",
  image: "/images/nasya-procedure-jvc-ayurveda.webp",
  alt: "Nasya oil being given at Vedara Care, JVC Dubai"
};

export const nasyaTypes = {                                // rendered with TreatmentOils
  label: "TYPES OF NASYA",
  title: "Four types of Nasya, chosen for your condition.",
  description: "The doctor chooses the type, the medicine and the dose.",
  oils: [
    { name: "Marsha Nasya", description: "Larger dose of oil", content: "A measured, larger dose of medicated oil, given as a course.", indication: "neck stiffness, headaches, hair fall" },
    { name: "Pratimarsha Nasya", description: "Small dose of oil", content: "A very small dose, gentle enough for longer courses and older patients.", indication: "maintenance, dryness, mild symptoms" },
    { name: "Pradhamana Nasya", description: "Herbal powder", content: "A fine herbal powder blown gently into the nose.", indication: "heavy congestion, chronic sinusitis" },
    { name: "Navana / Avapeeda Nasya", description: "Oil or fresh herbal juice", content: "Medicated oil or juice squeezed from fresh herbs.", indication: "headaches, sinus congestion" }
  ],
  footer: "Common oils include Anu Thailam, Ksheerabala Thailam and Shadbindu Thailam. Nasya is given in the clinic only."
};

export const nasyaProtocol = {
  label: "WHAT HAPPENS",
  title: "What happens at a Nasya session.",
  description: "Every session follows the same steps; the type, medicine and course are set by your doctor.",
  phases: [
    { time: "Step 1", title: "Consultation", content: "Your first visit is a 45-60 minute consultation with Dr. Zainab: your symptoms, history and medicines are checked, and she chooses the type and oil." },
    { time: "Step 2", title: "Face and neck massage, then steam", content: "A same-gender therapist massages your face, forehead and neck with oil, then applies gentle steam." },
    { time: "Step 3", title: "Nasya", content: "You lie with your head tilted back; the medicine is given into each nostril and you breathe it in gently." },
    { time: "Step 4", title: "Afterwards", content: "A short massage, rest, and a warm-water gargle. Avoid cold air, cold drinks and a head bath for the rest of the day." }
  ],
  footer: "Session length and the number of sessions depend on your plan."
};

export const nasyaApplications = {
  label: "WHAT NASYA IS USED FOR",
  title: "When Nasya may help.",
  description: "The doctor checks the cause first; some problems need an ENT doctor or neurologist instead.",
  whereItExcels: [
    { title: "Chronic sinusitis and allergic rhinitis", subtitle: "Alongside your ENT or GP", href: "/ayurveda-dubai/#conditions" },
    { title: "Migraine and headaches", subtitle: "Between attacks, as part of a plan", href: "/conditions/migraine-ayurveda-dubai/" },
    { title: "Neck stiffness and cervical spondylosis", subtitle: "Often with physiotherapy", href: "/conditions/cervical-spondylosis-ayurveda-jvc/" },
    { title: "Hair fall and early greying", subtitle: "Part of a wider plan", href: "/conditions/hair-loss-ayurveda-dubai/" },
    { title: "Poor sleep", subtitle: "Often with Shirodhara", href: "/treatments/shirodhara-dubai/" }
  ]
};

export const nasyaSafety = {
  label: "SAFETY",
  title: "Who should not have Nasya, and possible side effects.",
  leftCard: {
    label: "NOT SUITABLE (OR NEEDS CLEARANCE FIRST)",
    title: "Your doctor will postpone or change Nasya if you have:",
    useWarningIcon: true,
    items: [
      "Fever, a fresh cold or an acute infection",
      "Just eaten a meal or had a bath",
      "Pregnancy",
      "Menstruation (for some types)",
      "Recent nose or sinus surgery, or frequent nosebleeds",
      "Children under 7"
    ]
  },
  rightCard: {
    label: "POSSIBLE SIDE EFFECTS",
    title: "Usually mild and short-lived:",
    items: [
      { text: "Sneezing, a runny nose or watery eyes", icon: "check" },
      { text: "A strong taste at the back of the throat", icon: "check" },
      { text: "A mild headache on the first day", icon: "check" },
      { text: "Rarely, irritation in the nose (tell the therapist)", icon: "check" }
    ]
  },
  footer: "Tell the doctor about any nose or sinus problems and all medicines you take before your first session."
};

export const nasyaFaqs = {
  bgColor: "bg-[#FFFFFF]",
  label: "NASYA QUESTIONS",
  sidebarLinks: [
    { text: "Panchakarma", href: "/treatments/panchakarma-dubai/" },
    { text: "Ayurveda for migraine", href: "/conditions/migraine-ayurveda-dubai/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Nasya: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Nasya.",
  faqs: [
    {
      question: "What is Nasya?",
      answer: "Nasya is a classical Ayurvedic therapy in which a medicated oil, herbal juice or powder is given through the nose, after a gentle face and neck massage and steam. Classical texts call the nose 'the doorway to the head', so it is used mainly for sinus, head and neck problems."
    },
    {
      question: "Is Nasyam the same as Nasya?",
      answer: "Yes. Nasyam is the Malayalam name for Nasya; Nasya Karma is the classical name. They all describe the same therapy."
    },
    {
      question: "What is Anu Thailam?",
      answer: "Anu Thailam (Anu Taila) is the best-known classical oil for Nasya, made from many herbs in sesame oil and goat's milk. At Vedara Care the doctor chooses the oil for you and Nasya is given in the clinic."
    },
    {
      question: "Where can I get Nasya in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall. Nasya is prescribed by Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor, and the clinic is open daily 9am to 10pm. It is close to JVT, Al Barsha South and Arjan."
    },
    {
      question: "What is Nasya used for?",
      answer: "It is used for chronic sinusitis and allergic rhinitis, migraine and headaches, neck stiffness and cervical spondylosis, hair fall and early greying, and poor sleep — as support alongside your usual medical care."
    },
    {
      question: "Does Nasya work for sinusitis?",
      answer: "Small studies suggest it can help: in one, Anu Taila Nasya after steam inhalation was well tolerated in chronic sinusitis. Evidence is limited, so we use it alongside medical care, and see an ENT doctor if symptoms are severe."
    },
    {
      question: "What are the types of Nasya?",
      answer: "Marsha uses a larger dose of oil; Pratimarsha a small dose; Pradhamana a fine herbal powder blown into the nose; Navana or Avapeeda an oil or fresh herbal juice. All are available at Vedara Care; the doctor chooses which suits you."
    },
    {
      question: "Does Nasya hurt?",
      answer: "No. You may feel a strong taste at the back of the throat, a brief urge to sneeze or watery eyes, and the nose may run as it clears. These pass quickly."
    },
    {
      question: "Can I do Nasya at home?",
      answer: "Nasya at Vedara Care is given in the clinic only, after a consultation. We do not offer home Nasya."
    },
    {
      question: "How many Nasya sessions do I need?",
      answer: "It depends on your needs. Classical courses often run for 7 to 14 days; the doctor sets your course after the consultation."
    },
    {
      question: "Who should not have Nasya?",
      answer: "It is postponed with fever, a fresh cold or acute infection, right after a meal or a bath, during menstruation for some types, or during pregnancy, and is given only to children aged 7 and over. The doctor checks this at consultation."
    },
    {
      question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist."
    },
    {
      question: "How much does Nasya cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic therapy session such as Nasya commonly costs around AED 250 to 700, depending on the clinic and session. The total depends on how many sessions you need. Vedara Care shares exact prices on WhatsApp."
    },
    {
      question: "How do I book Nasya in JVC?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Your first visit is a 45 to 60-minute consultation with Dr. Zainab."
    }
  ]
};

export const nasyaLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Nasya in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Nasya at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a Nasya consultation",
  buttonHref: "/book/"
};

export const nasyaFinalCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a consultation. The right Nasya follows from it.",
  description: "In 45 to 60 minutes, Dr. Zainab will check whether Nasya suits you, which type and oil, and how many sessions to expect.",
  button1Text: "Book a Nasya consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Nasya.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapist", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const nasyaRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Panchakarma", description: "Nasya is one of the five Panchakarma actions.", href: "/treatments/panchakarma-dubai/" },
    { title: "Shirodhara", description: "Warm-oil therapy for stress, sleep and headaches.", href: "/treatments/shirodhara-dubai/" },
    { title: "Ayurveda for migraine", description: "How migraine is treated with Ayurveda.", href: "/conditions/migraine-ayurveda-dubai/" },
    { title: "Ayurvedic consultation", description: "Pulse diagnosis and a full assessment.", href: "/treatments/nadi-pareeksha-jvc/" }
  ]
};
