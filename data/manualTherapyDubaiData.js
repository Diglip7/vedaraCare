import { physioReviewsBlock } from './googleReviews';

export const manualTherapyHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Treatments", href: "/treatments" },
    { label: "Manual Therapy in Dubai", active: true }
  ],
  label: "MANUAL THERAPY · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Manual therapy in JVC, Dubai. Hands-on physiotherapy. Not chiropractic. Not massage.",
  description: "Hands-on physiotherapy at our Jumeirah Village Circle clinic, walking distance from Circle Mall: joint mobilisation and manipulation, soft-tissue and nerve techniques, always combined with exercise, with Hafsina K K, our DHA-licensed physiotherapist.",
  primaryCTA: "Book Manual Therapy Assessment",
  secondaryCTA: "What Manual Therapy Is",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Same-day appointments available",
    "Techniques chosen for your condition",
    "Walking distance from Circle Mall, JVC"
  ],
  floatingCard: {
    title: "MANUAL THERAPY IS NOT CHIROPRACTIC OR MASSAGE.",
    subtitle: "Manual therapy is the hands-on component of evidence-based physiotherapy. Joint mobilisation, soft tissue work, and specific exercise — delivered by a DHA-licensed physiotherapist."
  },
  image: "/images/manual-therapy-dubai-hero.webp",
  alt: "Manual therapy treatment at Vedara Care JVC Dubai clinic with DHA-licensed physiotherapist"
};
export const manualTherapyIntro = {
  label: "THE QUICK ANSWER",
  title: "Manual therapy at Vedara Care, in one paragraph.",
  blockquote: "Manual therapy at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai, near Circle Mall, is the hands-on part of physiotherapy: joint mobilisation and manipulation, mobilisation with movement, soft-tissue and myofascial release, nerve mobilisation, instrument-assisted soft tissue work (IASTM) and biomechanical cupping, always combined with exercise. It is delivered by Hafsina K K, a DHA-licensed physiotherapist (DHA-P 64812828), for back and neck pain, stiff joints, shoulder and frozen shoulder problems, sciatica, sports injuries and stiffness after surgery. It is different from massage and from chiropractic. Same-day appointments are available; insurance works on reimbursement.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026."
};

export const manualTherapyWhatIs = {
  data: {
    treatment: {
      label: "UNDERSTANDING MANUAL THERAPY",
      title: "What manual therapy actually is — and what it is not.",
      intro: "Manual therapy is one of the most misunderstood treatments because patients often conflate it with chiropractic or massage. Understanding what it actually is — and how it differs — guides effective decision-making.",
      steps: [
        {
          title: "",
          description: "Manual therapy is the hands-on component of physiotherapy — a broad category of treatment techniques delivered by physiotherapists with specific training in manual approaches. It encompasses joint mobilisation, soft tissue techniques, and neural mobilisation, all guided by evidence-based clinical reasoning and integrated with the broader physiotherapy plan."
        },
        {
          title: "The specific techniques within manual therapy",
          description: "Manual therapy is not one technique but a family of approaches: Joint mobilisation — graded, oscillatory movements applied to joints to restore range of motion and reduce pain, performed at varying intensities depending on patient response. Mobilisation with movement — combining therapist-applied mobilisation with patient active movement, often producing immediate pain reduction and range improvement. Instrument-assisted soft tissue mobilisation (IASTM) — specialized clinical instruments used to address fascial adhesions and scar tissue. Biomechanical cupping — dynamic decompression improving blood flow, fascial mobility and tissue glide. Specific exercise methods — using repeated movements to assess and treat disc-related and other mechanical spinal conditions. Myofascial release — sustained pressure techniques addressing fascial restrictions and chronic tension patterns. Soft tissue mobilisation — specific work for muscle, tendon, and connective tissue dysfunction. Neural mobilisation — techniques addressing nerve mobility restrictions contributing to pain."
        },
        {
          title: "How manual therapy differs from chiropractic",
          description: "Manual therapy and chiropractic share some superficial similarities but are fundamentally different. Training framework — Manual therapy is delivered by DHA-licensed physiotherapists; chiropractic is delivered by chiropractors with different training pathways. Theoretical basis — Manual therapy is based on Western evidence-based clinical reasoning addressing joint, muscle, and nervous system dysfunctions; chiropractic traditionally emphasises vertebral subluxation theory. Treatment approach — Manual therapy uses primarily graded mobilisation; chiropractic uses primarily high-velocity manipulation as primary technique. Integration — Manual therapy is integrated with exercise prescription, patient education, and broader physiotherapy; both can be valuable for the right patients, they are different approaches with different evidence bases."
        },
        {
          title: "How manual therapy differs from massage therapy",
          description: "Manual therapy and massage therapy share some superficial similarities but are fundamentally different. Training — Manual therapy is delivered by DHA-licensed physiotherapists; massage therapy is delivered by massage therapists with different training. Diagnostic precision — Manual therapy involves specific clinical assessment identifying particular joint, muscle, or neural dysfunctions; massage typically addresses general muscle tension or relaxation. Treatment specificity — Manual therapy uses specific techniques for specific conditions; massage uses general techniques across body areas. Clinical purpose — Manual therapy targets specific musculoskeletal dysfunctions; massage may target relaxation, general muscle tension, or wellness. Both can be valuable; they have different applications."
        },
        {
          title: "How manual therapy differs from osteopathy",
          description: "How it differs from osteopathy: osteopaths are a separate profession using similar hands-on methods; at Vedara Care manual therapy is delivered by a physiotherapist as part of an exercise-based plan."
        },
        {
          title: "The evidence base",
          description: "Manual therapy has strong research evidence for several conditions: neck pain (particularly cervicogenic headaches), low back pain (particularly with mobilisation), frozen shoulder (mobilisation as part of comprehensive treatment), and various other musculoskeletal conditions. Evidence supports manual therapy combined with exercise as more effective than either alone for most conditions. We use techniques with evidence support and integrate them with broader treatment for sustainable outcomes."
        },
        {
          title: "When manual therapy helps most",
          description: "Manual therapy is particularly effective when integrated with exercise and education for: spinal pain with joint restriction component, frozen shoulder and other restricted joint conditions, post-surgical rehabilitation requiring joint mobilisation, headaches with cervical contribution, certain sciatica presentations, and many sports injuries with joint or soft tissue restrictions. Manual therapy alone rarely produces sustainable outcomes — combined with exercise and education, outcomes are typically excellent."
        }
      ],
      footer: "Manual therapy is the hands-on craft of physiotherapy. Skilled application combined with appropriate exercise prescription and patient education produces sustainable outcomes that hands-on treatment alone rarely achieves."
    },
    rightContent: {
      image: "/images/manual-therapy-techniques-illustration.webp",
      alt: "Manual therapy techniques joint mobilisation educational illustration",
      label: "TECHNIQUES IN OUR PRACTICE",
      tags: [
        "Joint Mobilisation",
        "Mobilisation with Movement",
        "IASTM",
        "Biomechanical Cupping",
        "Specific Exercise",
        "Myofascial Release",
        "Neural Mobilisation",
        "Soft Tissue Work"
      ]
    }
  },
  bgColor: "bg-[#EDE8DF]"
};
export const manualTherapyReviews = physioReviewsBlock('What patients say about hands-on physiotherapy with Hafsina K K');

export const manualTherapyFaqs = {
  bgColor: "bg-[#EDE8DF]",
  label: "COMMON QUESTIONS",
  title: "Manual therapy: your questions answered.",
  description: "For broader physiotherapy questions, see our main physiotherapy page.",
  sidebarLinks: [
    {
      text: "Visit physiotherapy main page",
      href: "/physiotherapy-jvc/"
    },
    {
      text: "Dry needling and sports physiotherapy",
      href: "/physiotherapy/sports-injury-jvc/"
    }
  ],
  faqs: [
    { question: "What is manual therapy?", answer: "Manual therapy is the hands-on part of physiotherapy: joint mobilisation and manipulation, soft-tissue and myofascial release, and nerve mobilisation, used to reduce pain and restore movement, always alongside exercise." },
    { question: "Is manual therapy the same as massage?", answer: "No. Massage mainly relaxes muscles; manual therapy uses specific techniques on joints, muscles and nerves, chosen after a physiotherapy assessment to treat the cause of pain and stiffness." },
    { question: "How is manual therapy different from chiropractic or osteopathy?", answer: "They are separate professions that also use hands-on methods. At Vedara Care, manual therapy is delivered by a DHA-licensed physiotherapist as one part of an exercise-based treatment plan." },
    { question: "Does manual therapy hurt?", answer: "It should not be more than mildly uncomfortable. Pressure is adjusted to you, and you can ask to stop at any time. Some people feel slightly sore for a day afterwards." },
    { question: "Do you use spinal manipulation?", answer: "Yes, where suitable and only with your consent, after screening for safety. Many patients are treated with gentler mobilisation instead." },
    { question: "Is manual therapy safe?", answer: "Yes, when performed by a licensed physiotherapist after a proper assessment. We screen for conditions where some techniques are not suitable, such as recent fractures or severe osteoporosis, and adapt treatment." },
    { question: "What conditions does manual therapy help?", answer: "Back and neck pain, stiff joints, shoulder and frozen shoulder problems, sciatica, tennis elbow, sports injuries and stiffness after surgery, usually combined with exercise." },
    { question: "How many sessions will I need?", answer: "Many people notice a change within the first few sessions; most courses are a few weeks long, combined with home exercise. You get an estimate after your assessment." },
    { question: "What should I wear?", answer: "Comfortable clothing that lets us reach the area being treated, such as shorts for knee or hip treatment or a vest top for the shoulder." },
    { question: "Do you offer cupping?", answer: "Yes, biomechanical dry cupping as part of physiotherapy. Vedara Care does not offer hijama (wet cupping)." },
    { question: "Can I exercise after manual therapy?", answer: "Yes. Exercise is part of the plan, and you will usually be given exercises to do the same day." },
    { question: "Can pregnant women have manual therapy?", answer: "Yes, with positions and techniques adapted to pregnancy, by a female physiotherapist." },
    { question: "Is manual therapy suitable for older adults?", answer: "Yes, with gentler techniques where needed, for example with osteoporosis." },
    { question: "Can I get a same-day manual therapy appointment in JVC?", answer: "Yes. Same-day appointments are available at our JVC clinic, open daily 9am to 10pm." },
    { question: "Does insurance cover manual therapy?", answer: "Manual therapy is part of physiotherapy, which most Dubai plans cover when it is medically needed. Vedara Care works on reimbursement and provides the documents your insurer needs." },
    { question: "Where is the clinic?", answer: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai, walking distance from Circle Mall. Open daily 9am to 10pm." }
  ]
};

export const manualTherapyLocation = {
  bgColor: "bg-white",
  label: "VISIT US",
  title: "Where to find our manual therapy clinic in JVC.",
  address: "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC) Dubai",
  phone: "+971 55 573 6312",
  whatsapp: "+971 55 573 6312",
  hours: "9:00 AM to 10:00 PM • 7 days a week",
  landmarks: [
    "Walking distance from Circle Mall",
    "3 minutes from FIVE Jumeirah Village Hotel",
    "5 minutes from JSS Private School",
    "Free patient parking"
  ],
  description: "Manual therapy takes place in a private treatment room at Vedara Care Polyclinic in Jumeirah Village Circle, walking distance from Circle Mall, with a strength and exercise area for the exercise part of your plan. Free and paid parking nearby. Patients come from JVC, JVT, Al Barsha South, Arjan, Dubai Sports City, Motor City and Al Barsha.",
  buttonText: "Book Manual Therapy Assessment",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
  image: "/images/manual-therapy-clinic-jvc.webp",
  alt: "Vedara Care manual therapy clinic in JVC Dubai"
};

export const manualTherapyFinalCTA = {
  bgColor: "bg-[#F5F0E6]",
  label: "READY FOR SKILLED MANUAL THERAPY?",
  title: "Hands-on physiotherapy in JVC, matched to your condition.",
  description: "If you have chronic back or neck pain, frozen shoulder, sciatica, post-surgical rehabilitation needs, headaches with cervical contribution, sports injuries with joint or soft tissue restrictions, or other musculoskeletal conditions — skilled manual therapy may substantially help. The first step is comprehensive assessment determining manual therapy is appropriate for your specific situation and which techniques will be most effective. We are honest about when manual therapy helps and when other treatments are more appropriate. Same-week appointments typically available.",
  button1Text: "Book Manual Therapy Assessment",
  button1Href: "/book",
  button2Text: "WhatsApp us",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20manual%20therapy%20and%20book%20a%20consultation.",
  footer: "DHA-licensed physiotherapist · Same-day appointments · Insurance reimbursement · Open daily 9am to 10pm · Near Circle Mall, JVC"
};

export const manualTherapyConditions = {
  bgColor: "#FFFFFF",
  cardBg: "#F5F0E6",
  label: "CONDITIONS TREATED",
  title: "Conditions where manual therapy is central to our treatment approach.",
  description: "Manual therapy is foundational to physiotherapy for many conditions. These are the most common applications in our practice.",
  items: [
    {
      number: "01",
      title: "Chronic Low Back Pain",
      href: "/conditions/back-pain-physiotherapy-jvc/",
      link: "/conditions/back-pain-physiotherapy-jvc/",
      content: "The most common application. Joint mobilisation and specific exercise methods address spinal joint dysfunction and disc-related conditions. Soft tissue work for associated muscle tension. Combined with exercise prescription for sustainable outcomes.",
      techniques: "Spinal mobilisation, specific exercise methods, soft tissue work"
    },
    {
      number: "02",
      title: "Chronic Neck Pain & Cervicogenic Headaches",
      href: "/conditions/neck-pain-physiotherapy-jvc/",
      link: "/conditions/neck-pain-physiotherapy-jvc/",
      content: "Highly responsive to manual therapy. Cervical joint mobilisation addresses restricted segments. Mobilisation with movement often produces immediate improvement. Suboccipital release for headache patterns. Combined with postural work and exercise. Particularly effective for headaches with cervical contribution.",
      techniques: "Cervical mobilisation, mobilisation with movement, suboccipital release, soft tissue work"
    },
    {
      number: "03",
      title: "Frozen Shoulder (Adhesive Capsulitis)",
      href: "/conditions/frozen-shoulder-dubai/",
      link: "/conditions/frozen-shoulder-dubai/",
      content: "Manual therapy is core treatment. Glenohumeral joint mobilisation in specific directions restores capsular mobility. Mobilisation with movement may produce immediate improvement. Combined with active and assisted range of motion exercises. Treatment progresses through frozen shoulder phases.",
      techniques: "Glenohumeral glides, joint mobilisation, mobilisation with movement, scapular mobilisation"
    },
    {
      number: "04",
      title: "Sciatica & Lumbar Disc Conditions",
      href: "/conditions/sciatica-physiotherapy-dubai/",
      link: "/conditions/sciatica-physiotherapy-dubai/",
      content: "Specific exercise methods are particularly effective. Repeated movements assess directional preference and guide treatment. Neural mobilisation for sciatic nerve involvement. Lumbar mobilisation addressing joint dysfunction. Combined with specific exercises based on directional preference.",
      techniques: "Specific exercise methods, neural mobilisation, lumbar mobilisation, directional preference exercises"
    },
    {
      number: "05",
      title: "Sports Injuries with Joint Restrictions",
      href: "/physiotherapy/sports-injury-jvc/",
      link: "/physiotherapy/sports-injury-jvc/",
      content: "Sport-specific applications. Ankle mobilisation after sprains. Hip mobilisation for restricted hip range. Mobilisation with movement for various joints. Soft tissue work for sport-related muscle dysfunction. Neural mobilisation when relevant. Combined with sport-specific rehabilitation.",
      techniques: "Joint mobilisation (multiple regions), soft tissue work, neural mobilisation, sport-specific application"
    },
    {
      number: "06",
      title: "Post-Surgical Rehabilitation",
      href: "/physiotherapy/post-surgery-rehab-dubai/",
      link: "/physiotherapy/post-surgery-rehab-dubai/",
      content: "After many surgical procedures, joint mobilisation is essential to restore range of motion. Knee mobilisation after ACL reconstruction or knee replacement. Shoulder mobilisation after rotator cuff surgery. Ankle mobilisation after ankle surgery. Specific protocols respecting surgical precautions.",
      techniques: "Surgery-specific joint mobilisation, soft tissue work for scar tissue, neural mobilisation when relevant"
    }
  ],
  footerNote: "Many other conditions benefit from manual therapy — comprehensive assessment identifies whether your specific condition is appropriate →"
};

export const manualTherapySession = {
  bgColor: "bg-[#F5F0E6]",
  label: "WHAT TO EXPECT",
  title: "What a manual therapy session actually involves.",
  subtitle: "Understanding what happens in a manual therapy session helps you engage effectively with treatment.",
  sections: [
    {
      title: "",
      content: "Manual therapy is precise, skilled, hands-on physiotherapy. The session involves specific assessment, targeted treatment techniques, and integration with broader treatment. Understanding the process helps you participate effectively."
    },
    {
      title: "The comprehensive initial assessment",
      content: "The initial assessment includes: thorough history-taking, posture assessment, movement screening, specific joint assessment (range of motion, end-feel, accessory motion), neurological assessment, muscle assessment, palpation findings, and integration of findings into a working diagnosis. The assessment identifies which specific techniques are likely to be most effective for your specific situation."
    },
    {
      title: "The first treatment session",
      content: "Treatment typically begins in the same session as assessment. Specific techniques are chosen based on assessment findings — which joints need mobilisation, which soft tissues need work, which neural structures may be involved, whether manipulation is appropriate. Treatment is graded — meaning the intensity and depth are calibrated to your specific tolerance and response. Pain guides treatment intensity. Wear comfortable clothing that lets us reach the area being treated, such as shorts for knee or hip treatment. Many patients experience immediate improvement after the first session."
    },
    {
      title: "What manual therapy actually feels like",
      content: "Most manual therapy techniques are comfortable to mildly uncomfortable, not painful. Joint mobilisation feels like specific firm pressure or oscillating movements at the joint. Soft tissue work feels like deep pressure or sustained holds. Mobilisation with movement feels like assisted movement with the therapist guiding direction. Neural mobilisation involves specific limb movements that may produce mild nerve symptoms briefly. Manipulation, if used, is always explained first and done only with your consent. Treatment should never be severely painful."
    },

    {
      title: "After the session",
      content: "Common post-treatment experiences: immediate improvement in range of motion or pain (often noticeable), brief sense of relaxation, sometimes mild soreness 24–48 hours after treatment (similar to post-exercise soreness, normal response). Many patients are advised to drink water, avoid heavy exercise for 24 hours, and continue with prescribed home exercises. The combination of manual therapy effects and exercise programme produces lasting improvement."
    },
    {
      title: "How many sessions are needed",
      content: "Variable by condition. Acute conditions sometimes resolve in 2–4 sessions. Subacute conditions typically 4–8 sessions. Chronic conditions often 6–12 sessions integrated with broader treatment. Sessions are typically weekly initially, reducing as treatment progresses. Manual therapy alone rarely produces sustainable outcomes — combined with exercise prescription and education, outcomes are typically excellent."
    }
  ],
  safetyCard: {
    label: "SAFETY STANDARDS",
    safetyStandards: [
      "Comprehensive contraindication screening",
      "Specific informed consent for manipulation (when used)",
      "Graded treatment intensity respecting your tolerance",
      "Continuous communication during treatment",
      "Stopping point you can request anytime",
      "Treatment by Hafsina K K, DHA-licensed physiotherapist, only"
    ],
    contraindications: [
      "Acute fractures",
      "Active inflammatory conditions",
      "Specific neurological conditions (CES screening)",
      "Severe osteoporosis (mobilisation modified)",
      "Recent surgery (treatment adapted)",
      "Pregnancy (techniques adapted)",
      "Specific medical conditions"
    ],
    sideEffects: [
      "Mild post-treatment soreness 24–48 hours (normal)",
      "Brief discomfort during specific techniques",
      "Rare: temporary symptom increase",
      "Very rare: significant adverse events"
    ],
    buttonText: "Book Manual Therapy Assessment",
    buttonHref: "/book"
  }
};

export const manualTherapyTechniques = {
  bgColor: "bg-white",
  label: "TECHNIQUES",
  title: "The specific manual therapy techniques in our clinical practice.",
  subtitle: "Manual therapy is not one technique but a family of approaches. Specific techniques are matched to specific conditions and findings.",
  techniques: [
    {
      name: "Joint Mobilisation",
      developer: "Evidence-based physiotherapy technique",
      description: "Graded oscillatory movements applied to joints to restore range of motion and reduce pain. The technique uses careful assessment of joint movement and treatment guidance based on patient presentation. Particularly evidence-supported for spinal conditions and peripheral joint dysfunction.",
      applications: [
        "Spinal (cervical, thoracic, lumbar)",
        "Peripheral joints",
        "Post-surgical mobilisation"
      ]
    },
    {
      name: "Soft Tissue Mobilisation",
      developer: "Evidence-based physiotherapy technique",
      description: "Specific work for muscle, tendon, and connective tissue dysfunction. Addresses tension, scar tissue, and muscle spasm. Often combined with joint mobilisation for optimal results.",
      applications: [
        "Muscle tension and spasm",
        "Tendon issues",
        "Scar tissue management"
      ]
    },
    {
      name: "Myofascial Release",
      developer: "Multiple developers, mainstream physiotherapy technique",
      description: "Sustained pressure techniques addressing fascial restrictions and chronic tension patterns. Works with the connective tissue system. Particularly useful for patients with multiple musculoskeletal areas. Often combined with other manual therapy techniques.",
      applications: [
        "Chronic pain patterns",
        "Postural dysfunction",
        "Scar tissue restrictions"
      ]
    },
    {
      name: "Neural Mobilisation",
      developer: "Evidence-based physiotherapy technique",
      description: "Specific techniques addressing nerve mobility restrictions. Uses gentle active movements to mobilise neural structures throughout the body. Used for radiculopathies, nerve entrapment conditions, and chronic pain with nerve-related pain. Foundational technique for treating nerve pain.",
      applications: [
        "Sciatica",
        "Carpal tunnel",
        "Cubital tunnel",
        "Nerve-related symptoms"
      ]
    },
    {
      name: "Spinal and Joint Manipulation",
      developer: "Used only where suitable, with your consent",
      description: "A small, quick, controlled movement to a stiff joint, often with a 'click'. Used selectively for spinal and joint stiffness after screening for safety, and always with your consent; many people are treated with mobilisation instead.",
      applications: ["Stiff spinal segments", "Some neck and back pain", "Peripheral joint stiffness"]
    },
    {
      name: "Mobilisation with Movement",
      developer: "Hands-on technique combined with your own movement",
      description: "The physiotherapist holds a joint in a precise position while you move, which often reduces pain straight away and is then turned into a home exercise.",
      applications: ["Shoulder and frozen shoulder", "Tennis elbow", "Ankle and knee stiffness"]
    },
    {
      name: "Instrument-Assisted Soft Tissue Mobilisation (IASTM)",
      developer: "Hand-held instruments",
      description: "Smooth-edged instruments used over tight or thickened soft tissue and scar tissue, alongside exercise.",
      applications: ["Tendon problems", "Scar tissue after surgery", "Chronic muscle tightness"]
    },
    {
      name: "Biomechanical Cupping",
      developer: "Dry cupping used within physiotherapy",
      description: "Light suction cups, often moved during active movement, to ease tight muscles and improve movement. This is dry cupping, not hijama (wet cupping), which Vedara does not offer.",
      applications: ["Back and neck muscle tightness", "Sports recovery", "Shoulder and hip mobility"]
    },
    {
      name: "Manual Trigger Point Release",
      developer: "Hands-on pressure, no injections",
      description: "Sustained pressure on tender knots in muscle to reduce local and referred pain. Dry needling may be used for the same problem where suitable.",
      applications: ["Neck and shoulder knots", "Buttock and piriformis pain", "Headaches from the neck"]
    }
  ],
  footerNote: "Specific technique selection depends on your specific presentation. Comprehensive assessment identifies which techniques are most likely to produce results in your situation. Most patients benefit from combination of techniques rather than single approach."
};

export const manualTherapyTeam = {
  bgColor: "bg-[#EDE8DF]",
  label: "YOUR PHYSIOTHERAPIST",
  title: "Your manual therapy physiotherapist at our JVC clinic.",
  description: "Manual therapy at Vedara Care is delivered by Hafsina K K, our DHA-licensed physiotherapist, who treats every patient herself.",
  members: [
    {
      name: "Hafsina K K",
      qualification: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      specialties: ["Manual Therapy", "Mobilisation with Movement", "Dry Needling", "IASTM and Cupping"],
      experience: "7 years of clinical experience across orthopedic, neurological, sports, and women's health rehabilitation in India and the UAE.",
      languages: ["English", "Hindi", "Malayalam"],
      link: "/doctors/hafsina-kk-physiotherapist/",
      image: "/images/hafsina-kk-physiotherapist-dubai.webp",
      alt: "Hafsina K K physiotherapist Vedara Care JVC Dubai"
    }
  ]
};

export const manualTherapyRelatedPages = {
  bgColor: "bg-[#EDE8DF]",
  label: "EXPLORE FURTHER",
  title: "Related services and conditions",
  linkText: "Browse all treatments →",
  linkHref: "/treatments",
  pages: [
    { title: "Physiotherapy in JVC", href: "/physiotherapy-jvc/", description: "All physiotherapy services at our JVC clinic." },
    { title: "Back Pain Physiotherapy", href: "/conditions/back-pain-physiotherapy-jvc/", description: "The most common use of manual therapy." },
    { title: "Neck Pain Physiotherapy", href: "/conditions/neck-pain-physiotherapy-jvc/", description: "Tech neck, stiff neck and neck-related headaches." },
    { title: "Frozen Shoulder Treatment", href: "/conditions/frozen-shoulder-dubai/", description: "Joint mobilisation and mobilisation with movement." },
    { title: "Sports Injury Physiotherapy", href: "/physiotherapy/sports-injury-jvc/", description: "Dry needling, shockwave and return to sport." }
  ]
};
