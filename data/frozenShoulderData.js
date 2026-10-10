import { physioReviewsBlock } from './googleReviews';

export const frozenShoulderHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Conditions", href: "/conditions/" },
    { label: "Frozen Shoulder Treatment in JVC" }
  ],
  label: "FROZEN SHOULDER · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Frozen shoulder treatment in Dubai, at our JVC clinic. Phase-based physiotherapy.",
  description: "Physiotherapy for frozen shoulder (adhesive capsulitis) at our Jumeirah Village Circle clinic, walking distance from Circle Mall. Hafsina K K, our DHA-licensed physiotherapist, matches treatment to your phase, and our in-house GP can check blood sugar and refer you for an injection if needed.",
  image: "/images/frozen-shoulder-dubai-hero.webp",
  alt: "Frozen shoulder treatment at Vedara Care JVC Dubai clinic",
  bgColor: "bg-[#F8F4EE]",
  primaryCTA: "Book Frozen Shoulder Assessment",
  secondaryCTA: "Ask a Question on WhatsApp",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Treatment matched to your phase",
    "Shockwave, heat and TENS on site",
    "In-house GP: blood sugar check and referrals"
  ],
  floatingCard: {
    title: "FREEZING · FROZEN · THAWING",
    subtitle: "Frozen shoulder usually lasts one to three years. Physiotherapy reduces pain and helps you regain movement sooner."
  }
};

export const frozenShoulderIntro = {
  label: "THE QUICK ANSWER",
  title: "Frozen shoulder treatment at Vedara Care, in one paragraph.",
  blockquote: "Frozen shoulder (adhesive capsulitis) is a painful stiffening of the shoulder joint capsule that limits movement in every direction and usually passes through three phases: freezing, frozen and thawing. It often lasts one to three years, and physiotherapy reduces pain and helps you regain movement sooner and more fully. At Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai, Hafsina K K, a DHA-licensed physiotherapist (DHA-P 64812828), identifies your phase and treats it with joint mobilisation and mobilisation-with-movement techniques, heat, TENS and electrical stimulation, shockwave, dry needling and a phase-appropriate exercise plan. Our in-house GP can check blood sugar, as frozen shoulder is more common with diabetes, and refer you for an injection or hydrodilatation if needed. Insurance works on reimbursement.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026."
};

export const frozenShoulderSymptoms = {
  id: "is-it-frozen-shoulder",
  label: "SYMPTOMS",
  title: "Is it frozen shoulder? Signs to look for.",
  content: [
    "Frozen shoulder is likely if your shoulder has become steadily more painful and stiff over weeks or months, movement is limited in every direction, and the arm still will not move further when someone else gently lifts it for you. Other common signs: pain at night, especially lying on that side; difficulty reaching behind your back, fastening clothes or reaching overhead.",
    "<strong>It is more likely if</strong><br/>you are aged 40-60, have diabetes or thyroid problems, or your arm was kept still for a while after an injury or operation.",
    "<strong>It may be something else if</strong><br/>only some movements hurt, or the arm moves freely when someone else lifts it: that points more to a rotator cuff or impingement problem. See <a href='/conditions/shoulder-pain-physiotherapy-dubai/'>shoulder pain physiotherapy</a>.",
    "<strong>Do I need an MRI?</strong><br/>Usually not; frozen shoulder is diagnosed by examination. Our in-house GP can arrange tests if something else needs ruling out."
  ],
  image: "/images/shoulder-assessment-vedara-jvc.webp",
  alt: "Frozen shoulder assessment at Vedara Care, JVC, Dubai"
};

export const frozenShoulderMechanism1 = {
  image: "/images/frozen-shoulder-phases-illustration.webp",
  alt: "Frozen shoulder adhesive capsulitis anatomy three-phase progression"
};

export const frozenShoulderPhases = {
  label: "PHASE IDENTIFICATION",
  title: "Identifying which phase of frozen shoulder you are in.",
  description: "Treatment approach differs by phase. Identifying your phase determines the appropriate treatment focus.",
  image: "/images/frozen-shoulder-phases-illustration.webp",
  alt: "Frozen shoulder three phases freezing frozen thawing at Vedara Care",
  items: [
    {
      number: "01",
      title: "The Freezing Phase",
      typicalDuration: "Typical duration: 3–9 months",
      typicalSymptoms: [
        "Increasing shoulder pain, often worse at night",
        "Pain disturbing sleep, especially when lying on affected side",
        "Progressively limited range of motion",
        "Pain with even small movements",
        "Difficulty reaching overhead, behind back, across body",
        "Increasing avoidance of using the shoulder"
      ],
      treatmentFocus: [
        "Pain management as primary goal",
        "Gentle careful movement within tolerance",
        "Avoidance of aggressive stretching (counterproductive in this phase)",
        "Manual therapy for pain modulation",
        "Anti-inflammatory strategies",
        "Sleep position optimization",
        "Heat, TENS and electrical stimulation for pain",
        "Our in-house GP can review pain relief and refer you for an injection if pain is severe"
      ],
      whatToExpect: "Treatment in this phase prioritises symptom management. Aggressive range of motion work is typically not appropriate yet. Patients often feel frustrated by slower progress — this is normal."
    },
    {
      number: "02",
      title: "The Frozen Phase",
      typicalDuration: "Typical duration: 4–12 months",
      typicalSymptoms: [
        "Pain reducing from peak (sometimes substantially)",
        "Stiffness now the dominant symptom",
        "Range of motion substantially restricted but stable",
        "Daily activities significantly affected",
        "Difficulty with dressing, grooming, reaching",
        "Functional limitations consistent rather than worsening"
      ],
      treatmentFocus: [
        "Active range of motion progression",
        "Specific joint mobilisation techniques",
        "Capsular stretching protocols (now appropriate)",
        "Manual therapy for tissue mobility",
        "Dry needling for associated muscle tension",
        "Strengthening of surrounding musculature",
        "Mobilisation with movement",
        "Shockwave where suitable",
        "GP referral for hydrodilatation if progress is slow"
      ],
      whatToExpect: "The phase of most active intervention. Substantial functional gains possible. Some patients benefit from hydrodilatation injection alongside physiotherapy. Recovery progress becomes more measurable."
    },
    {
      number: "03",
      title: "The Thawing Phase",
      typicalDuration: "Typical duration: 5–24 months",
      typicalSymptoms: [
        "Pain minimal or absent",
        "Range of motion gradually returning",
        "Function progressively improving",
        "Daily activities returning to normal",
        "Some residual stiffness common",
        "Occasional discomfort with extreme ranges"
      ],
      treatmentFocus: [
        "Maximising range of motion recovery",
        "Strengthening throughout new range",
        "Functional progression to demanding activities",
        "Long-term prevention strategies",
        "Reducing treatment frequency",
        "Discharge planning"
      ],
      whatToExpect: "Most natural recovery happens in this phase. Physiotherapy accelerates progression. Treatment frequency reduces (often monthly). The phase ending in discharge from active treatment"
    }]
};

export const frozenShoulderExercises = {
  id: "exercises",
  label: "EXERCISES",
  title: "Frozen shoulder exercises: what helps in each phase.",
  content: [
    "The right exercises depend on your phase. In the painful freezing phase, gentle movement within a comfortable range helps; forcing stretches usually makes pain worse. In the frozen and thawing phases, regular stretching and strengthening help you regain movement.",
    "<strong>Gentle (all phases)</strong><br/>Pendulum swings with the arm hanging relaxed; sliding the hand forward on a table; lifting the arm with help from the other hand or a stick, only as far as is comfortable.",
    "<strong>Stretching (frozen and thawing phases)</strong><br/>Turning the arm outwards with a stick, reaching across the body, finger-walking up a wall, and reaching behind the back with a towel, held for a slow count and repeated through the day.",
    "<strong>Strengthening (thawing phase)</strong><br/>Light band exercises for the rotator cuff and shoulder blade once movement is returning.",
    "<strong>Safety</strong><br/>Stop if pain is sharp or lasts more than an hour afterwards. Hafsina K K will show you which exercises suit your phase and how hard to push."
  ],
  image: "/images/frozen-shoulder-exercises.webp",
  alt: "Frozen shoulder exercises by phase, Vedara Care, JVC"
};

export const frozenShoulderTreatmentMechanism = {
  label: "UNDERSTANDING FROZEN SHOULDER",
  title: "What frozen shoulder actually is — and why it confuses everyone.",
  description: "Most patients with frozen shoulder spend months being told they have 'shoulder pain' or 'rotator cuff issues' before correct diagnosis. Here is what is actually happening.",
  keyFact: "Frozen shoulder restricts movement in all directions — both when you move your arm yourself and when a therapist moves it. This is the key clinical sign that distinguishes it from rotator cuff problems.",
  content: [
    "Frozen shoulder, properly called adhesive capsulitis, is a distinct condition affecting the shoulder joint capsule — the strong fibrous tissue that surrounds and contains the shoulder joint. In frozen shoulder, this capsule becomes inflamed, thickened, and progressively contracted, restricting shoulder movement in all directions.",
    "<strong>Why frozen shoulder is different from other shoulder problems</strong><br/>Most shoulder problems involve specific structures — rotator cuff tendons, the labrum, the biceps tendon, the bursa. These typically affect movement in specific directions or with specific activities. Frozen shoulder is different — the joint capsule restricts movement in all directions. The classical sign: you cannot raise your arm overhead, cannot reach behind your back, cannot rotate the arm outward. Passive movement (when someone else moves the arm) is also restricted, distinguishing frozen shoulder from rotator cuff issues where passive movement is typically possible.",
    "<strong>The three phases — predictable and important</strong><br/>Frozen shoulder follows a specific pattern of three phases. Freezing phase (2–9 months): Progressive pain and increasing stiffness, often worse at night. Frozen phase (4–12 months): Pain reducing but stiffness substantial and stable, daily activities significantly affected. Thawing phase (6 months to 2 years): Pain minimal, range of motion gradually returning. Without treatment, total natural course typically takes 2–3 years. With appropriate physiotherapy, recovery typically completes in 6–12 months.",
    "<strong>Why diabetic patients matter particularly</strong><br/>Diabetic patients have substantially higher prevalence of frozen shoulder — research suggests 4–5 times higher rates compared to non-diabetic populations. The link involves glycation of collagen tissues in the joint capsule. Diabetic frozen shoulder also tends to be more severe, last longer, and have higher rates of bilateral involvement. Given Dubai's significant diabetic population, this is an important demographic consideration.",
    "<strong>Why women aged 40-60 are affected disproportionately</strong><br/>Outside of diabetes, the most common demographic for frozen shoulder is women aged 40–60. The reasons are not fully understood but likely involve hormonal factors particularly around perimenopause and menopause. Treatment approach is the same; awareness of the typical pattern helps with diagnosis.Outside of diabetes, the most common demographic for frozen shoulder is women aged 40–60. The reasons are not fully understood but likely involve hormonal factors particularly around perimenopause and menopause. Treatment approach is the same; awareness of the typical pattern helps with diagnosis.",
    "<strong>What causes frozen shoulder</strong><br/>Known associations include: prior shoulder injury or surgery, prolonged immobilisation after fracture or sling use, diabetes (very strong association), thyroid disorders, cardiovascular disease, and certain other systemic conditions. In many cases, no specific trigger is identifiable — the condition appears insidiously. Even without identifying a specific cause, the treatment approach and prognosis remain consistent.",
    "<strong>Why early correct diagnosis matters</strong><br/>Patients diagnosed correctly in early freezing phase have better outcomes than those misdiagnosed for months. Early appropriate treatment during the freezing phase often reduces total recovery time substantially. Frozen shoulder is often misdiagnosed as rotator cuff issues, impingement, or general shoulder pain. Specific assessment for frozen shoulder pattern is essential."
  ],
  quote: "Frozen shoulder is one of the most under-diagnosed conditions in shoulder pain — and one of the most responsive to phase-specific treatment when diagnosed correctly."
};

export const frozenShoulderApproach = {
  label: "OUR TREATMENT APPROACH",
  title: "Phase-specific treatment for frozen shoulder.",
  description: "What you need during the freezing phase is not what you need during the frozen or thawing phase.",
  content: [
    {
      title: "Comprehensive initial assessment",
      description: "Your first session includes a full assessment to confirm the diagnosis and identify your phase; session length depends on your needs."
    },
    {
      title: "Freezing phase treatment",
      description: "Pain management first — gentle manual therapy, pain-relief modalities, gentle range of motion exercises within pain limits. Aggressive stretching makes things worse."
    },
    {
      title: "Frozen phase treatment",
      description: "Active mobilisation and stretching — joint mobilisation and mobilisation-with-movement techniques, capsular stretching and shockwave where suitable. Gradual progressive gains."
    },
    {
      title: "Thawing phase treatment",
      description: "Strengthening and integration — rotator cuff and scapular stabilisation, functional progression to demanding activities, reducing treatment frequency."
    },
    {
      title: "Injection and hydrodilatation referral",
      description: "If pain is severe or progress stalls, our in-house GP can refer you for a corticosteroid injection or hydrodilatation, and physiotherapy continues alongside."
    },
    {
      title: "Diabetic patient considerations",
      description: "Modified treatment protocols, closer monitoring, slower progression expectations, bilateral shoulder screening, and our in-house GP can check your blood sugar control, as frozen shoulder is more common and often slower to settle in people with diabetes."
    },
    {
      title: "Pain-relief and tissue techniques",
      description: "Heat therapy, TENS and electrical stimulation, shockwave, dry needling, cupping and soft-tissue work, chosen to suit your phase and always combined with exercise."
    }
  ],
  quote: "Phase-specific treatment produces meaningfully better outcomes than generic shoulder exercises.",
  image: "/images/frozen-shoulder-treatment-vedara-jvc.webp",
  alt: "Phase-specific frozen shoulder treatment Vedara Care JVC Dubai",
  toolkitItems: [
    "Manual Therapy",
    "Phase-Specific Stretching",
    "Joint Mobilisation",
    "Dry Needling",
    "Hydrodilatation Coordination",
    "Diabetic Frozen Shoulder Care",
    "Patient Education",
    "Scapular Stabilisation"
  ]
};

export const frozenShoulderOutcomes = {
  label: "REALISTIC TIMELINE",
  title: "A realistic recovery timeline for frozen shoulder.",
  description: "Frozen shoulder usually lasts one to three years from the first symptoms, and the phases vary from person to person. Physiotherapy cannot skip the phases, but it reduces pain and helps you regain movement sooner and more fully.",
  image: "/images/frozen-shoulder-phases-illustration.webp",
  alt: "Frozen shoulder recovery timeline month by month",
  items: [
    {
      title: "Factors that affect timeline",
      points: [
        "Phase when treatment begins",
        "Diabetic status",
        "Bilateral involvement",
        "Patient compliance",
        "Underlying causes"
      ]
    },
    {
      title: "What patients typically experience",
      points: [
        "Freezing (painful) phase: often 2 to 9 months",
        "Frozen (stiff) phase: often 4 to 12 months",
        "Thawing (recovery) phase: often 6 months to 2 years",
        "Diabetes and thyroid problems often mean a longer course"
      ]
    },
    {
      title: "Patient frustration is normal — and expected",
      points: [
        "Progress is gradual rather than dramatic",
        "Some weeks feel like no progress",
        "The phase-based nature is consistent",
        "Trust the process — it is genuinely predictable"
      ]
    }
  ],
  timeline: [
    { phase: "Freezing", description: "Pain builds, worse at night; movement starts to reduce. Treatment: pain relief, gentle movement, heat and TENS.", color: "rgb(232, 168, 124)" },
    { phase: "Frozen", description: "Pain eases, stiffness dominates. Treatment: mobilisation and mobilisation with movement, stretching, shockwave where suitable.", color: "rgb(212, 147, 92)" },
    { phase: "Thawing", description: "Movement gradually returns. Treatment: stretching and strengthening, return to full activity.", color: "rgb(184, 151, 90)" },
    { phase: "Recovery", description: "Most people regain most of their movement; some keep mild stiffness. Exercises keep the gains.", color: "rgb(154, 125, 72)" }
  ]
};


export const frozenShoulderMechanism2 = {
  bgColor: "bg-white",
  label: "THE APPROACH",
  title: "Phase-specific treatment for frozen shoulder.",
  // description: "Frozen shoulder is a complex condition that can be challenging to treat. Understanding the mechanism of the condition is key to effective treatment.",
  content: [
    "Effective frozen shoulder treatment is phase-specific. The same techniques that help in the frozen phase can worsen symptoms in the freezing phase. Pattern recognition and phase-appropriate intervention are central to good outcomes.",
    "<strong>Comprehensive initial assessment</strong><br/>Your first session includes a full assessment to confirm the diagnosis and identify your phase; session length depends on your needs.",
    "<strong>Freezing phase treatment</strong><br/>In the freezing phase, the priority is pain management and protecting the shoulder from worsening. We use gentle manual therapy for symptom relief, modalities including heat and IFC for pain modulation, very gentle range of motion within comfortable limits (not pushing into pain), patient education about the condition, sleep positioning guidance, and gentle home programme. We explicitly avoid aggressive stretching that often makes freezing phase symptoms worse.",
    "<strong>Frozen phase treatment</strong><br/>In the frozen phase, more active intervention becomes appropriate. We use joint mobilisation and mobilisation-with-movement techniques, capsular stretching and shockwave where suitable, manual therapy for surrounding muscle tension, dry needling for associated trigger points, range of motion exercises progressed to capacity, strengthening of surrounding musculature, and functional movement progression.",
    "<strong>Thawing phase treatment</strong><br/>In the thawing phase, treatment focuses on maximising range of motion recovery and functional return. Continued mobilisation and stretching, strengthening throughout the recovering range, functional progression to demanding activities, other shoulder protection (preventing recurrence on opposite side), and gradual discharge planning. Treatment frequency reduces as recovery progresses.",
    "<strong>Injection and hydrodilatation referral</strong><br/>If pain is severe or progress stalls, our in-house GP can refer you for a corticosteroid injection or hydrodilatation, and physiotherapy continues alongside.",
    "<strong>Diabetic patient considerations</strong><br/>For diabetic patients with frozen shoulder, we account for the typically more severe and prolonged presentation. Our in-house GP can check your blood sugar control, as frozen shoulder is more common and often slower to settle in people with diabetes. Diabetic frozen shoulder is also more likely to become bilateral — we monitor the unaffected shoulder for early signs and intervene preventively when appropriate."
  ],
  quote: "The treatment that helps in the frozen phase can worsen symptoms in the freezing phase. Phase identification matters more than any specific technique.",
  image: "/images/frozen-shoulder-treatment-vedara-jvc.webp",
  alt: "Phase-specific frozen shoulder treatment Vedara Care JVC Dubai",
};


export const frozenShoulderInjectionsSurgery = {
  label: "ADVANCED OPTIONS",
  title: "When are injections or surgery appropriate for frozen shoulder?",
  description: "Most frozen shoulder settles with physiotherapy and time. If pain is severe or progress stalls, our in-house GP can refer you for an injection or hydrodilatation; manipulation under anaesthesia and surgery are for a small number of people after 9-12 months.",
  items: [
    {
      title: "Corticosteroid injections (cortisone)",
      description: "Corticosteroid injections can provide temporary pain relief, particularly in the freezing phase when pain is severe. The injection does not 'cure' frozen shoulder but can substantially improve quality of life during the painful phase and enable better engagement with physiotherapy. Effects typically last 6–12 weeks. Particularly useful for patients with sleep disruption from severe pain. Vedara Care does not perform injections; our GP can refer you, and physiotherapy continues alongside."
    },
    {
      title: "Hydrodilatation (capsular distension)",
      description: "Hydrodilatation is a procedure where saline (sometimes combined with steroid) is injected into the joint capsule under ultrasound guidance, mechanically distending and stretching the capsule. Performed by rheumatologists or radiologists. Particularly useful in the frozen phase for patients with severe restriction. Combined with intensified physiotherapy after the procedure, hydrodilatation can substantially accelerate recovery. Vedara Care does not perform injections; our GP can refer you, and physiotherapy continues alongside."
    },
    {
      title: "Manipulation under anaesthesia (MUA)",
      description: "MUA involves the orthopaedic surgeon manipulating the shoulder under general anaesthesia to forcibly stretch the contracted capsule. Performed when conservative treatment has not produced adequate progress over 9–12 months. Less commonly used now than historically, partly because hydrodilatation often achieves similar results with less risk."
    },
    {
      title: "Arthroscopic capsular release",
      description: "Surgical release of the contracted capsule through small arthroscopic incisions. Reserved for patients with persistent severe restriction after 12+ months of appropriate conservative care. Rare requirement when frozen shoulder is properly managed conservatively. Followed by intensive post-surgical rehabilitation."
    },
    {
      title: "What is rarely needed",
      description: "For most patients with frozen shoulder, the entire course can be managed with conservative physiotherapy alone. Patients whose physiotherapist immediately recommends surgery or aggressive intervention for frozen shoulder should consider a second opinion — conservative care typically deserves a fair trial first."
    }
  ]
};

export const frozenShoulderReviews = physioReviewsBlock('What patients say about physiotherapy with Hafsina K K');

export const frozenShoulderTeam = {
  bgColor: "bg-[#FAF7F2]",
  label: "YOUR PHYSIOTHERAPIST",
  title: "Your frozen shoulder physiotherapist at our JVC clinic.",
  members: [
    {
      name: "Hafsina K K",
      role: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      specialties: ["Frozen Shoulder", "Mobilisation with Movement", "Shockwave", "Dry Needling"],
      bio: "7 years of clinical experience across orthopedic, neurological, sports, and women's health rehabilitation in India and the UAE. ",
      languages: "English, Hindi, Malayalam",
      image: "/images/hafsina-kk-physiotherapist-dubai.webp",
      alt: "Hafsina K K frozen shoulder specialist Vedara Care JVC Dubai",
      link: "/doctors/hafsina-kk-physiotherapist/"
    }
  ]
};

/*
export const frozenShoulderPricing = {
  label: "TRANSPARENT PRICING",
  bgColor: "bg-white",
  title: "What frozen shoulder treatment at our JVC clinic costs.",
  services: [
    { name: "Initial frozen shoulder assessment (60 minutes)", price: "AED 350" },
    { name: "Follow-up physiotherapy session (45-60 minutes)", price: "AED 350" },
    { name: "Dry needling (add-on per session)", price: "AED 150" },
    { name: "Freezing phase programme (8–12 sessions over 8–12 weeks)", price: "AED 2,800" },
    { name: "Frozen phase programme (16–24 sessions over 4–6 months)", price: "AED 4,900" },
    { name: "Complete frozen shoulder programme (30–40 sessions over 8–12 months)", price: "AED 8,500" },
    { name: "Diabetic frozen shoulder programme (extended timeline)", price: "AED 9,500" },
    { name: "Post-surgical frozen shoulder rehabilitation", price: "AED 3,500" }
  ],
  insurers: ["Daman", "AXA", "Allianz", "Oman Insurance", "Now Health", "Bupa", "MetLife"],
  insuranceText: 'Insurance direct-billing with seven major insurers. Frozen shoulder physiotherapy is well-covered by Dubai insurance plans given the documented disability impact and clear diagnostic criteria. <a href="https://wa.me/971555736312?text=Hi,%20I%27d%20like%20to%20verify%20my%20insurance%20coverage" target="_blank" rel="noopener noreferrer" class="hover:underline">WhatsApp your insurance card</a> before booking for specific coverage confirmation. Pre-authorisation is sometimes needed for extended programmes — we handle this on your behalf.'
};
*/




export const frozenShoulderFaqs = {
  bgColor: "bg-[#F2EDE5]",
  label: "COMMON QUESTIONS",
  title: "Frozen shoulder: your questions answered.",
  description: "Answers reviewed by Hafsina K K, DHA-licensed physiotherapist.",
  sidebarLinks: [

    { text: "physiotherapy main page", href: "/physiotherapy-jvc/" },
    { text: "Other shoulder conditions", href: "/physiotherapy-jvc/" }
  ],
  faqs: [
    { question: "How do I know if I have frozen shoulder?", answer: "The key sign is stiffness in every direction that does not improve when someone else gently lifts your arm, usually with pain that built up over weeks or months and is worse at night." },
    { question: "How long does frozen shoulder last?", answer: "Usually one to three years from the first symptoms. Physiotherapy cannot skip the phases, but it reduces pain and helps you regain movement sooner and more fully." },
    { question: "Will frozen shoulder go away on its own?", answer: "Most cases improve with time, but it can take years and some stiffness may remain. Physiotherapy shortens the painful, restricted period for many people and helps you recover more movement." },
    { question: "What is the best treatment for frozen shoulder?", answer: "Treatment matched to your phase: pain relief and gentle movement while it is painful, then mobilisation, stretching and strengthening as it stiffens and thaws. Some people also benefit from an injection or hydrodilatation." },
    { question: "What exercises help frozen shoulder?", answer: "Gentle pendulum swings and assisted arm lifts in the painful phase; stick-assisted stretches, wall walks and towel stretches once pain eases; light strengthening as movement returns. Stop if pain is sharp or lasts more than an hour." },
    { question: "Does shockwave help frozen shoulder?", answer: "It can be used alongside exercise and mobilisation to reduce pain and help movement in some people; it is not a cure on its own. Your physiotherapist will tell you if it suits your phase." },
    { question: "Is massage good for frozen shoulder?", answer: "Soft-tissue work can ease tight surrounding muscles and make exercises easier, but it does not free the joint capsule by itself, so it is used as part of a full physiotherapy plan." },
    { question: "Why is frozen shoulder worse at night?", answer: "Lying on the shoulder presses on the inflamed capsule, and there are fewer distractions from pain. Sleeping on your back or the other side with a pillow supporting the arm often helps." },
    { question: "Why is frozen shoulder more common with diabetes?", answer: "People with diabetes are several times more likely to get frozen shoulder, and it often lasts longer. Our in-house GP can check your blood sugar control." },
    { question: "Should I have a cortisone injection?", answer: "An injection can reduce severe pain, especially early on, and makes exercise easier. Vedara Care does not perform injections; our GP can refer you if it is appropriate." },
    { question: "What is hydrodilatation?", answer: "A procedure where fluid is injected into the shoulder joint under ultrasound to stretch the tight capsule. Our GP can refer you if progress stalls; physiotherapy continues afterwards." },
    { question: "Is physiotherapy for frozen shoulder painful?", answer: "It should not be. In the painful phase treatment is gentle; later, stretching can feel strong but should not cause sharp or lasting pain." },
    { question: "Do I need an MRI for frozen shoulder?", answer: "Usually not. Frozen shoulder is diagnosed by examination; scans are used only if another problem needs ruling out." },
    { question: "Can frozen shoulder come back or affect the other shoulder?", answer: "It rarely returns in the same shoulder, but the other shoulder can be affected, especially in people with diabetes." },
    { question: "How is frozen shoulder different from a rotator cuff problem?", answer: "Frozen shoulder limits movement in every direction even when someone else moves your arm; rotator cuff problems usually hurt with certain movements but the arm can still be moved by someone else. See our shoulder pain page for rotator cuff care." },
    { question: "Can I treat frozen shoulder at home?", answer: "Home exercises are a key part of recovery, and we teach you a programme for your phase. Home physiotherapy visits are coming soon; until then, sessions are at our JVC clinic." },
    { question: "Does insurance cover frozen shoulder physiotherapy?", answer: "Most Dubai plans cover it when it is medically needed, usually with a yearly session limit. Vedara Care works on reimbursement and provides the documents your insurer needs." },
    { question: "Where is the clinic?", answer: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle, Dubai, walking distance from Circle Mall. Open daily 9am to 10pm." }
  ]
};

export const frozenShoulderLocation = {
  bgColor: "bg-white",
  label: "VISIT US",
  title: "Where to find our frozen shoulder clinic in JVC.",
  address: "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC) Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "+971 55 573 6312",
  email: "booking@vedaracare.ae",
  hours: [
    { day: "Monday – Sunday", time: "9:00AM to 10:00PM" },

  ],
  locationMarkers: [
    { name: "Walking distance from Circle Mall" },
    { name: "3 min from FIVE Jumeirah Village" },
    { name: "5 min from JSS Private School" },
    { name: "Free patient parking" }
  ],
  description: "Frozen shoulder physiotherapy takes place at Vedara Care Polyclinic in JVC, walking distance from Circle Mall: treatment rooms, shockwave, heat and electrical stimulation equipment, and an in-house GP. Free and paid parking nearby. Patients come from JVC, JVT, Al Barsha South, Arjan, Dubai Sports City, Motor City and Al Barsha.",
  buttonText: "Book Frozen Shoulder Assessment",
  buttonLink: "/book",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
};

export const frozenShoulderCTA = {
  bgColor: 'bg-[#FAF7F2]',
  label: 'READY TO ADDRESS YOUR FROZEN SHOULDER?',
  title: ["Frozen shoulder: start with the right treatment for your phase."],
  description: "If your shoulder has become painful and stiff in every direction over weeks or months, book an assessment with Hafsina K K at our JVC clinic. You will know your phase, what to do and what to avoid, and our GP is on site if you need a blood sugar check or a referral.",
  footer: "DHA-licensed physiotherapist · In-house GP · Insurance reimbursement · Open daily 9am to 10pm · Near Circle Mall, JVC",
  button1Text: 'Book Frozen Shoulder Assessment',

  button2Text: 'Chat on WhatsApp',
  bullets: [
    'Initial consultation from AED 350',
    ' Walking distance from Circle Mall, JVC',

    'DHA-licensed physiotherapist',
    'Insurance direct-billing',

  ],
  button1Href: '/book',
  button2Href: 'https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20frozen%20shoulder%20physiotherapy%20and%20book%20a%20consultation.'
};

export const frozenShoulderRelatedPages = {
  bgColor: "bg-[#F2EDE4]",
  label: "EXPLORE FURTHER",
  title: "Related services and conditions",
  linkText: "Browse all physiotherapy services",
  linkHref: "/physiotherapy-jvc/",
  pages: [
    { title: "Shoulder Pain Physiotherapy", href: "/conditions/shoulder-pain-physiotherapy-dubai/", description: "Rotator cuff, impingement and other shoulder pain." },
    { title: "Post-Surgery Physiotherapy", href: "/physiotherapy/post-surgery-rehab-dubai/", description: "Stiffness and rehab after shoulder surgery." },
    { title: "Neck Pain Physiotherapy", href: "/conditions/neck-pain-physiotherapy-jvc/", description: "Neck pain that spreads to the shoulder." },
    { title: "Meet Hafsina K K", href: "/doctors/hafsina-kk-physiotherapist/", description: "Our DHA-licensed physiotherapist." },
    { title: "Ayurvedic Care at Vedara", href: "/ayurveda-clinic-jvc/", description: "An optional Ayurvedic approach for shoulder stiffness, at the same clinic." }
  ]
};
