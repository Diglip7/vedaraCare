// data/stressAnxietyData.js (replace the whole file)
export const stressAnxietyHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Ayurvedic Treatment in Dubai", href: "/ayurveda-dubai/" },
    { label: "Stress & Anxiety (Ayurveda)", active: true }
  ],
  label: "AYURVEDA FOR STRESS, ANXIETY AND BURNOUT · JVC, DUBAI",
  title: "Ayurvedic treatment for stress, anxiety and burnout in JVC, Dubai — calm, sleep and routine, alongside your doctor.",
  description: "Shirodhara, Abhyanga, prescribed herbs and a daily routine that supports sleep, planned by Dr. Zainab Sheikh (BAMS, MD Ayurveda). Ayurvedic support, not psychiatry — we work alongside your doctor or therapist, and our GP can refer you when needed. Near Circle Mall, JVC.",
  primaryCTA: "Book a consultation",
  primaryCTAHref: "/book/",
  secondaryCTA: "Chat on WhatsApp",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20Ayurveda%20for%20stress%20and%20anxiety.",
  trustSignals: ["DHA Facility Licence 2509266", "BAMS, MD (Ayurveda) doctor", "Works alongside your therapist", "Near Circle Mall, JVC"],
  floatingCard: { title: "IN A CRISIS?", subtitle: "Call 999 or go to the nearest emergency department. Ayurveda is not the first step in a crisis." },
  image: "/images/stress-anxiety-ayurveda-dubai-hero.webp",
  alt: "Calm Ayurvedic consultation for stress and anxiety at Vedara Care, JVC Dubai"
};

export const stressAnxietyIntro = {
  bgColor: "bg-white",
  label: "THE QUICK ANSWER",
  title: "Ayurveda for stress and anxiety, in one paragraph.",
  blockquote: "Ayurvedic treatment for stress, anxiety and burnout aims to calm the nervous system and restore sleep and daily rhythm, using therapies such as Shirodhara (warm oil poured over the forehead) and Abhyanga, prescribed herbs such as Ashwagandha or Brahmi, and changes to routine, diet and sleep. Research on Ashwagandha shows reduced stress and anxiety in trials, though the evidence is still low in quality, so Ayurveda is best seen as support. It is not psychiatry or psychotherapy and does not replace them: it works alongside your doctor, therapist or medicines, and anyone in crisis should call 999 or go to an emergency department. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), near Circle Mall, care starts with a 45 to 60 minute consultation with Dr. Zainab Sheikh (BAMS, MD Ayurveda, DHA-licensed), and our GP can do a basic health check and refer you if you need a psychiatrist or psychologist. The clinic is open daily 9am to 10pm and is close to JVT, Al Barsha South and Arjan.",
  footer: "Medically reviewed by Dr. Zainab Sheikh, BAMS, MD (Ayurveda), DHA licence 20918133. Reviewed November 2026."
};

export const stressAnxietyUrgent = {                       // rendered with ClinicalBoundaries, directly after the intro
  label: "WHEN AYURVEDA IS NOT THE FIRST STEP",
  title: "Get urgent or specialist help first if you have:",
  leftCard: {
    label: "URGENT — CALL 999",
    title: "Go to an emergency department or call 999 for:",
    useWarningIcon: true,
    items: ["Thoughts of suicide or self-harm", "A mental health crisis or feeling unsafe", "Severe panic with chest pain or fainting (rule out a heart problem)"]
  },
  rightCard: {
    label: "SEE A PSYCHIATRIST OR PSYCHOLOGIST",
    title: "Specialist care first (Ayurveda can support alongside) for:",
    items: [
      { text: "Severe depression or anxiety that stops you functioning", icon: "check" },
      { text: "Frequent panic attacks", icon: "check" },
      { text: "Trauma-related symptoms, eating disorders, psychosis or bipolar disorder", icon: "check" },
      { text: "Our GP can do a basic check and refer you", icon: "check" }
    ]
  },
  footer: "Vedara Care does not have a psychiatrist or psychologist; we work alongside yours."
};

export const stressAnxietyMechanism = {                    // rendered with TreatmentMechanism
  bgColor: "bg-[#F9F6F1]",
  label: "HOW AYURVEDA SEES STRESS",
  title: "Stress, anxiety and burnout through an Ayurvedic lens.",
  content: [
    "Ayurveda links racing thoughts, worry and poor sleep mainly to aggravated Vata, and irritability, pressure and burnout to Pitta. Treatment calms and grounds: warmth, oil, regular rhythm and nourishing food.",
    "In practice that means calming therapies, a steady daily routine (Dinacharya), better sleep habits and, where suitable, herbs — fitted around work and family life in Dubai.",
    "What does the research say? A 2022 review of 12 randomised trials with 1,002 people found Ashwagandha reduced anxiety and stress compared with placebo, but rated the evidence as low certainty; a 2024 review found side effects were limited. We use herbs carefully, after checking your medicines."
  ],
  sources: "Sources: <a href='https://pubmed.ncbi.nlm.nih.gov/36017529/' target='_blank' rel='noopener'>Akhgarjand 2022, Ashwagandha for anxiety and stress (PubMed)</a> · <a href='https://pubmed.ncbi.nlm.nih.gov/39348746/' target='_blank' rel='noopener'>Vijayakumar 2024, Ashwagandha meta-analysis (PubMed)</a>",
  image: "/images/anxiety-consultation-vedara-jvc.webp",
  alt: "Ayurvedic consultation for stress at Vedara Care, JVC"
};

export const stressAnxietyPatterns = {                     // rendered with TreatmentOils
  label: "COMMON PATTERNS",
  title: "Which of these sounds like you?",
  description: "Dr. Zainab confirms your pattern at the consultation.",
  oils: [
    { name: "Burnout", description: "Exhausted, flat, running on empty", content: "Long hours, little rest, energy and motivation gone.", indication: "rest, routine, nourishing therapies, Rasayana" },
    { name: "Anxious and restless", description: "Worry, racing thoughts", content: "Hard to switch off, tense body, light sleep.", indication: "Shirodhara, Abhyanga, calming herbs" },
    { name: "Stress and poor sleep", description: "Tired but wired", content: "Trouble falling or staying asleep.", indication: "evening routine, Shirodhara; see <a href='/conditions/insomnia-ayurveda-jvc/'>Ayurveda for insomnia</a>" },
    { name: "Stress with headaches or digestion", description: "Tension in the body", content: "Tension headaches, IBS-type symptoms.", indication: "<a href='/treatments/nasya-therapy-jvc/'>Nasya</a>, diet, <a href='/conditions/migraine-ayurveda-dubai/'>Ayurveda for migraine</a>, <a href='/conditions/ibs-ayurveda-dubai/'>Ayurveda for IBS and digestion</a>" },
    { name: "Life-stage stress", description: "After childbirth, perimenopause, hormonal changes", content: "Hormonal change with low mood or anxiety, including PCOS.", indication: "<a href='/conditions/postnatal-ayurveda-dubai/'>postnatal care</a>, <a href='/conditions/pcos-ayurveda-dubai/'>Ayurveda for PCOS</a>, gentle therapies" }
  ],
  footer: ""
};

export const stressAnxietyPlan = {                         // rendered with TreatmentOils
  label: "YOUR AYURVEDIC PLAN",
  title: "What Ayurvedic stress care includes.",
  description: "Chosen for you and reviewed as you go.",
  oils: [
    { name: "<a href='/treatments/shirodhara-dubai/'>Shirodhara</a>", description: "Warm oil on the forehead", content: "The classic calming therapy, usually as a course.", indication: "anxiety, poor sleep" },
    { name: "<a href='/treatments/abhyanga-dubai/'>Abhyanga</a>", description: "Full-body oil massage", content: "Grounding and relaxing, often with steam.", indication: "tension, restlessness" },
    { name: "<a href='/treatments/nasya-therapy-jvc/'>Nasya</a>", description: "Nasal oil therapy", content: "For tension headaches and a 'heavy' head.", indication: "headaches, poor focus" },
    { name: "Prescribed herbs", description: "Bought at a pharmacy", content: "For example Ashwagandha or Brahmi, checked against your medicines and thyroid health.", indication: "selected patients" },
    { name: "Routine, diet and sleep", description: "Every plan", content: "Regular meals and sleep, less caffeine late in the day, simple evening routine.", indication: "every plan" }
  ],
  footer: "Given by a same-gender therapist in a private room. Some people go on to <a href='/treatments/rasayana-ayurveda-jvc/'>Rasayana</a> to maintain the benefit."
};

export const stressAnxietyProtocol = {                     // rendered with TreatmentProtocol
  label: "HOW IT WORKS",
  title: "Your first weeks.",
  description: "",
  phases: [
    { time: "Step 1", title: "Consultation", content: "A 45-60 minute consultation with Dr. Zainab: what is going on, your sleep, medicines and any current mental-health care." },
    { time: "Step 2", title: "Safety check", content: "If you need psychiatry or psychology first, we tell you; our GP can do a basic check and refer you." },
    { time: "Step 3", title: "Your plan", content: "Therapies, herbs if suitable, and a simple daily routine, written down for you." },
    { time: "Step 4", title: "Review", content: "Regular reviews; plan length depends on your needs, usually a few months." }
  ],
  footer: ""
};

export const stressAnxietyFaqs = {
  bgColor: "bg-[#F9F6F1]",
  label: "STRESS & ANXIETY QUESTIONS",
  sidebarLinks: [
    { text: "Shirodhara", href: "/treatments/shirodhara-dubai/" },
    { text: "Ayurveda for insomnia", href: "/conditions/insomnia-ayurveda-jvc/" },
    { text: "Ayurveda clinic in JVC", href: "/ayurveda-clinic-jvc/" }
  ],
  title: "Ayurveda for stress and anxiety: your questions answered.",
  description: "Answers reviewed by Dr. Zainab Sheikh. For other therapies, see our <a href=\"/ayurveda-dubai/\">guide to Ayurvedic treatment in Dubai</a>.",
  buttonText: "Ask the team on WhatsApp",
  buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20have%20a%20question%20about%20Ayurveda%20for%20stress%20and%20anxiety.",
  faqs: [
    { question: "Can Ayurveda help with stress and anxiety?",
      answer: "Ayurveda can help many people with long-term stress, mild to moderate anxiety and burnout, through calming therapies such as Shirodhara, prescribed herbs such as Ashwagandha, and changes to sleep and daily routine. It supports, but does not replace, psychiatric or psychological care when that is needed." },
    { question: "Is this psychiatry or therapy?",
      answer: "No. Vedara Care offers Ayurvedic care; we do not have a psychiatrist or psychologist. We work alongside yours, and our GP can refer you if you need one." },
    { question: "I am having thoughts of harming myself. What should I do?",
      answer: "Please get help now: call 999 or go to the nearest emergency department. Ayurvedic care is not the right first step in a crisis." },
    { question: "Where can I get Ayurvedic stress treatment in JVC?",
      answer: "At Vedara Care Polyclinic, Shop 4, Binghatti Azure, Jumeirah Village Circle (JVC), near Circle Mall, with Dr. Zainab Sheikh, a DHA-licensed Ayurvedic doctor. Open daily 9am to 10pm, close to JVT, Al Barsha South and Arjan." },
    { question: "Does Ashwagandha help anxiety?",
      answer: "Studies suggest it can: a 2022 review of 12 trials found it reduced anxiety and stress compared with placebo, though the quality of evidence was low. It is prescribed only after checking your other medicines and thyroid health, and is not suitable for everyone." },
    { question: "Can I have Ayurveda while taking antidepressants or anti-anxiety medicine?",
      answer: "Yes, in most cases, with your prescribing doctor's knowledge. Never stop or change psychiatric medicine yourself; Dr. Zainab checks herbs against everything you take." },
    { question: "Can Ayurveda treat depression?",
      answer: "Ayurveda can support people with depression alongside psychiatric care, for example with sleep and routine. Depression itself should be diagnosed and treated by a psychiatrist or doctor." },
    { question: "What is Shirodhara, and does it help anxiety?",
      answer: "Shirodhara is a steady stream of warm oil poured over the forehead. Most people find it deeply calming; small studies suggest it may reduce anxiety and improve sleep." },
    { question: "Can Ayurveda help burnout?",
      answer: "Yes, burnout is one of the most common reasons people come to us. The plan focuses on rest, sleep, daily rhythm and calming therapies, alongside realistic changes to work and routine." },
    { question: "How long does Ayurvedic stress treatment take?",
      answer: "It depends on your needs. Many people feel calmer and sleep better within a few weeks; a full plan usually runs for a few months, reviewed as you go." },
    { question: "Do you see young people?",
      answer: "Yes, teenagers are seen after assessment, with a parent present and alongside their own doctor." },
    { question: "Will a male or female therapist treat me?",
      answer: "A same-gender therapist: men are treated by a male therapist and women by a female therapist, in a private room." },
    { question: "How much does Ayurvedic stress treatment cost in Dubai?",
      answer: "Across Dubai, an Ayurvedic consultation commonly costs around AED 200 to 500 and a therapy session such as Shirodhara around AED 350 to 800. The total depends on your plan. Vedara Care shares exact prices on WhatsApp." },
    { question: "How do I book?",
      answer: "Book online, message us on WhatsApp at +971 55 573 6312, or call the same number. Bring a list of any medicines you take." }
  ]
};

export const stressAnxietyLocation = {
  bgColor: "bg-[#F5F1E8]",
  label: "VISIT US",
  title: "Stress and anxiety care in JVC, near Circle Mall.",
  address: "Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "971555736312",
  whatsappMessage: "Hello Vedara Care, I would like to ask about Ayurveda for stress and anxiety at your JVC clinic.",
  email: "booking@vedaracare.ae",
  hours: "Monday - Sunday - 9:00AM to 10:00PM",
  landmarks: ["Near Circle Mall", "Close to JSS Private School", "Free and paid parking available"],
  description: "Patients visit us from JVC, JVT, Al Barsha South, Arjan, Dubai Production City, Sports City and Motor City.",
  distances: [],
  buttonText: "Book a consultation",
  buttonHref: "/book/"
};

export const stressAnxietyCTA = {
  bgColor: "bg-[#FAF8F5]",
  label: "READY?",
  title: "Start with a calm, unhurried consultation.",
  description: "In 45 to 60 minutes, Dr. Zainab will understand what is going on and plan Ayurvedic support — and tell you honestly if you need a psychiatrist or psychologist first.",
  button1Text: "Book a consultation",
  button1Href: "/book/",
  button2Text: "Chat on WhatsApp",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care%2C%20I%20would%20like%20to%20ask%20about%20stress%20and%20anxiety%20care.",
  bullets: ["Prices shared on WhatsApp", "Same-gender therapist", "Free and paid parking", "Near Circle Mall, JVC"]
};

export const stressAnxietyRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related pages.",
  linkText: "See all Ayurvedic treatments",
  linkHref: "/ayurveda-dubai/",
  pages: [
    { title: "Shirodhara", description: "The classic calming therapy.", href: "/treatments/shirodhara-dubai/" },
    { title: "Ayurveda for insomnia", description: "When sleep is the main problem.", href: "/conditions/insomnia-ayurveda-jvc/" },
    { title: "Rasayana", description: "Rebuilding energy after burnout.", href: "/treatments/rasayana-ayurveda-jvc/" },
    { title: "Panchakarma", description: "For some long-standing patterns.", href: "/treatments/panchakarma-dubai/" }
  ]
};
