import { physioReviewsBlock } from './googleReviews';

export const postSurgeryRehabHero = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Physiotherapy in JVC", href: "/physiotherapy-jvc" },
    { label: "Post-Surgery Rehabilitation in Dubai", active: true }
  ],
  label: "POST-SURGERY PHYSIOTHERAPY · DHA-LICENSED CLINIC IN JVC, DUBAI",
  title: "Post-surgery physiotherapy in Dubai, at our JVC clinic. Guided by your surgeon's plan.",
  description: "Rehabilitation before and after surgery at our Jumeirah Village Circle clinic: knee and hip replacement, ACL, shoulder, spine, fractures and more. Hafsina K K, our DHA-licensed physiotherapist, works from your surgical report, with prehab, return-to-sport testing and an in-house GP at the same clinic.",
  primaryCTA: "Book a Post-Surgery Consultation",
  secondaryCTA: "WhatsApp us",
  primaryCTAHref: "/book",
  secondaryCTAHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20post-surgery%20rehabilitation%20services.",
  trustSignals: [
    "DHA-licensed physiotherapist (DHA-P 64812828)",
    "Works from your surgeon's protocol",
    "In-house GP for wound and medicine checks",
    "Shockwave, strength area and wheelchair on site"
  ],
  floatingCard: {
    title: "WE WORK FROM YOUR SURGEON'S PLAN",
    subtitle: "Wherever your operation took place, bring your surgical report and your surgeon's instructions and we follow them."
  },
  image: "/images/post-surgery-rehabilitation-dubai-hero.webp",
  alt: "Hafsina K K, DHA-licensed physiotherapist, guiding post-surgery rehabilitation at Vedara Care, JVC, Dubai"
};

export const postSurgeryRehabIntro = {
  bgColor: "bg-[#FFFFFF]",
  label: "THE QUICK ANSWER",
  title: "Post-surgery rehabilitation at Vedara Care, in one paragraph.",
  blockquote: "Post-surgery physiotherapy at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai helps you recover after knee and hip replacement, ACL reconstruction, meniscus, rotator cuff and shoulder surgery, spinal surgery, hip arthroscopy, fracture fixation, foot, ankle, hand and wrist surgery, and after mastectomy, bariatric or cosmetic surgery. Hafsina K K, a DHA-licensed physiotherapist (DHA-P 64812828), works from your surgical report and your surgeon's protocol, and also offers prehab before surgery and return-to-sport testing. Our in-house GP can check wounds and review medicines. Sessions are at our JVC clinic, which has a strength and exercise area, shockwave and electrical stimulation, and a wheelchair; home visits are coming soon. Insurance works on reimbursement.",
  footer: "Medically reviewed by Hafsina K K, DHA-Licensed Physiotherapist (DHA-P 64812828). Reviewed October 2026."
};

export const postSurgeryRehabMechanism = {
  bgColor: "bg-white",
  label: "SURGEON COORDINATION",
  title: "How we work from your surgeon's plan.",
  content: [
    "Rehabilitation after surgery must follow the operating surgeon's protocol: what you may do, when, and how fast to progress. Different surgeons and different operations have different rules.",
    "<strong>Wherever your surgery took place</strong><br/>In Dubai or abroad, bring your operation note and your surgeon's rehabilitation instructions. If you do not have a written protocol, we follow standard evidence-based guidelines for your operation and check anything unclear with you and, with your consent, your surgeon.",
    "<strong>Progress updates</strong><br/>On request, we write a short progress summary you can share with your surgeon at your follow-up appointment.",
    "<strong>Medical checks</strong><br/>Our in-house GP can check your wound and review your medicines at the same clinic if anything concerns you or us."
  ],
  quote: "Your surgeon performed the technical procedure. Your rehabilitation determines whether that procedure delivers the outcome it was designed for. Both teams need to work together.",
  image: "/images/surgeon-coordination-post-surgery.webp",
  alt: "Physiotherapist coordinating with surgeon at Vedara Care JVC post-surgery rehabilitation"
};

export const postSurgeryRehabFinalCTA = {
  bgColor: "bg-[#FFFFFF]",
  label: "READY TO START RECOVERY?",
  title: "Book your post-surgery or prehab assessment in JVC.",
  description: "Bring your surgical report and your surgeon's instructions. Hafsina K K assesses you, explains the plan and the milestones, and starts treatment. Our GP is on site if you need a wound or medicine check.",
  button1Text: "Book a Post-Surgery Consultation",
  button2Text: "WhatsApp us Your Surgical Report",
  button1Href: "/book",
  button2Href: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%27d%20like%20to%20share%20my%20surgical%20report%20for%20post-surgery%20rehabilitation.",
  button1BgColor: "#1F4538",
  button1TextColor: "#FFFFFF",
  button2BorderColor: "#25D366",
  button2TextColor: "#25D366",
  bullets: [
    "DHA-licensed physiotherapist",
    "Works from your surgeon's protocol",
    "Insurance reimbursement documents",
    "Open daily 9am to 10pm"
  ]
};

export const postSurgeryRehabRelatedPages = {
  label: "EXPLORE FURTHER",
  title: "Related services and resources",
  linkText: "Browse all physiotherapy services",
  linkHref: "/physiotherapy-jvc/",
  pages: [
    { title: "Knee Pain Physiotherapy", description: "Knee injuries and ligament problems treated without surgery.", href: "/conditions/knee-pain-physiotherapy-dubai/" },
    { title: "Shoulder Pain Physiotherapy", description: "Shoulder problems before or instead of surgery.", href: "/conditions/shoulder-pain-physiotherapy-dubai/" },
    { title: "Sports Injury Physiotherapy", description: "Sports injuries in adults that do not need surgery.", href: "/physiotherapy/sports-injury-jvc/" },
    { title: "Paediatric Physiotherapy", description: "Rehabilitation after surgery for children and teenagers.", href: "/physiotherapy/pediatric-dubai/" },
    { title: "Meet Hafsina K K", description: "Our DHA-licensed physiotherapist.", href: "/doctors/hafsina-kk-physiotherapist/" }
  ]
};

export const postSurgeryRehabReviews = physioReviewsBlock('What patients say about physiotherapy with Hafsina K K');

export const homePhysiotherapyData = {
  label: "HOME PHYSIOTHERAPY (COMING SOON)",
  title: "Home physiotherapy after surgery is coming soon.",
  content: [
    "The first weeks after surgery can make travel difficult. Home visits from Vedara Care are coming soon.",
    "Until then, all sessions take place at our JVC clinic, near Circle Mall. A wheelchair is available at the clinic; tell us when you book if you need help getting in."
  ],
  sidebar: {
    label: "JOIN THE WAITLIST",
    useCases: ["First weeks after surgery", "Elderly patients", "No transport support"],
    booking: "WhatsApp us to be told when home visits start",
    buttonText: "Notify me",
    buttonLink: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20please%20notify%20me%20when%20home%20visits%20start."
  }
};

export const transparentPricingData = {
  label: "TRANSPARENT PRICING",
  title: "What post-surgery rehabilitation at our JVC clinic costs.",
  subtitle: "Comprehensive rehabilitation packages reflect the long-term commitment that post-surgical care requires. Single-session pricing is also available for patients who prefer pay-as-you-go.",
  sections: [
    {
      title: "Initial Assessment",
      hasDuration: false,
      items: [
        { name: "Post-surgery initial assessment (60 minutes, clinic)", price: "AED 350" },
        { name: "Post-surgery initial assessment (60 minutes, home)", price: "AED 450" },
        { name: "Surgeon coordination & protocol review", price: "Included in initial" }
      ]
    },
    {
      title: "Single Sessions",
      hasDuration: false,
      items: [
        { name: "Single post-surgery physiotherapy session (clinic, 45-60 min)", price: "AED 300" },
        { name: "Single home physiotherapy session", price: "AED 450" },
        { name: "Specialist modality add-on (shockwave, dry needling)", price: "AED 150" }
      ]
    },
    {
      title: "Structured Programmes",
      hasDuration: true,
      items: [
        { name: "Total Knee Replacement programme (30 sessions)", price: "AED 8,500", duration: "4-6 months" },
        { name: "Total Hip Replacement programme (24 sessions)", price: "AED 6,800", duration: "3-4 months" },
        { name: "ACL Reconstruction programme (40-60 sessions)", price: "AED 13,500", duration: "9-12 months" },
        { name: "Rotator Cuff Repair programme (24-40 sessions)", price: "AED 8,200", duration: "4-6 months" },
        { name: "Spinal Surgery programme (20-30 sessions)", price: "AED 7,500", duration: "3-6 months" },
        { name: "Meniscectomy programme (8-12 sessions)", price: "AED 2,800", duration: "6-12 weeks" },
        { name: "Meniscus Repair programme (16-24 sessions)", price: "AED 5,500", duration: "12-24 weeks" },
        { name: "Hip Arthroscopy programme (20-30 sessions)", price: "AED 7,200", duration: "4-6 months" },
        { name: "Custom procedure programme", price: "Contact us", duration: "Variable" }
      ]
    }
  ],
  footer: 'Insurance coverage for post-surgery rehabilitation is typically substantial — most plans cover physiotherapy with documented surgical procedure. Direct-billing with Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, and MetLife. <a href="https://wa.me/971555736312?text=Hi,%20I%27d%20like%20to%20verify%20my%20insurance%20coverage%20and%20share%20my%20surgical%20report%20for%20post-surgery%20rehab." target="_blank" rel="noopener noreferrer" class="hover:underline">WhatsApp your insurance card and surgical report to +971 55 573 6312</a> before booking for specific coverage confirmation.'
};

export const postSurgeryTeamData = {
  label: "YOUR PHYSIOTHERAPIST",
  title: "Your post-surgery physiotherapist at our JVC clinic.",
  members: [
    {
      name: "Hafsina K K",
      credentials: "Bachelor of Physiotherapy · DHA-P 64812828 · 7+ years' experience",
      tags: ["Post-Surgery Rehab", "Prehab", "Return-to-Sport Testing", "Orthopaedic Rehab"],
      description: "Hafsina K K treats every post-surgery patient herself, from the first assessment to return to work or sport.",
      languages: "Languages spoken: English, Hindi, Malayalam",
      link: "/doctors/hafsina-kk-physiotherapist/",
      image: "/images/hafsina-kk-physiotherapist-dubai.webp",
      alt: "Hafsina K K physiotherapy specialist Vedara Care JVC Dubai"
    }
  ]
};

export const insuranceCoverageData = {
  label: "INSURANCE COVERAGE",
  title: "Does insurance cover physiotherapy after surgery in Dubai?",
  content: [
    { text: "Most Dubai insurance plans cover physiotherapy after surgery when it is medically needed, usually with a yearly session limit; longer programmes often need pre-approval from your insurer." },
    { title: "What is typically covered well:", text: "physiotherapy following major orthopaedic procedures (joint replacements, ACL reconstruction, spinal surgery), rehabilitation following any procedure with clear medical justification, home physiotherapy for patients with documented mobility limitations, and extended programmes for procedures that genuinely require them (ACL, spinal procedures, complex joint replacements)." },
    { title: "What may have limits:", text: "prolonged rehabilitation beyond expected timelines, multiple modality sessions per visit, certain specialised techniques." },
    { title: "What is rarely covered:", text: "maintenance physiotherapy after the surgical recovery is complete, performance optimisation beyond functional recovery." },
    { title: "How Vedara Care helps:", text: "We work on reimbursement: you pay at the clinic and we give you the surgical-rehab reports and progress notes your insurer asks for, including for pre-approval." },
    { title: "For international surgery patients:", text: 'insurance coverage in Dubai often extends to rehabilitation regardless of where surgery occurred, provided the surgery itself was medically necessary and properly documented. Bring or send: full surgical report, post-operative imaging, surgeon\'s rehabilitation prescription, insurance card. <a href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20have%20had%20surgery%20abroad%20and%20would%20like%20to%20confirm%20my%20rehab%20insurance%20coverage." target="_blank" rel="noopener noreferrer" class="underline hover:opacity-80">WhatsApp these to +971 55 573 6312</a> before booking and we will confirm exact coverage.' }
  ],
  sidebar: {
    label: "REIMBURSEMENT DOCUMENTS FOR ALL MAJOR INSURERS",
    insurers: ["Daman", "AXA", "Allianz", "Oman Insurance", "Now Health", "Bupa", "MetLife"],
    text: 'WhatsApp your insurance card and surgical report to <a href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%27d%20like%20to%20share%20my%20insurance%20card%20and%20surgical%20report%20to%20confirm%20my%20post-surgery%20rehab%20coverage." target="_blank" rel="noopener noreferrer" class="underline hover:opacity-85">+971 55 573 6312</a> before booking to confirm specific coverage and pre-authorisation needs.',
    buttonText: "WhatsApp us Your Surgical Report",
    buttonHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%27d%20like%20to%20share%20my%20insurance%20card%20and%20surgical%20report."
  }
};

export const whereWeWorkData = {
  label: "WHERE WE WORK",
  title: "Where to find our post-surgery physiotherapy clinic in JVC.",
  description: "All post-surgery physiotherapy takes place at Vedara Care Polyclinic in Jumeirah Village Circle, walking distance from Circle Mall. Home visits are coming soon.",
  details: {
    address: "Al Barsha South Fourth, Binghatti Azure, Shop -4, <br/>Jumeirah Village Circle (JVC) Dubai",
    hours: "Monday - Sunday : 9:00AM to 10:00PM",
    phone: "+971 55 573 6312",
    email: "booking@vedaracare.ae"
  },
  footer: "The clinic has a strength and exercise area, shockwave and electrical stimulation equipment, a wheelchair for patients who need it, and an in-house GP. Free and paid parking nearby. Patients come from JVC, JVT, Al Barsha South, Arjan, Dubai Sports City, Motor City and Al Barsha.",
  buttons: {
    primary: "Book a Post-Surgery Consultation",
    secondary: "Book Home Physiotherapy",
    primaryHref: "https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20book%20a%20post-surgery%20consultation.%20Please%20assist%20me.",
    secondaryHref: "/home-healthcare-jvc"
  }
};

export const surgicalProceduresData = {
  bgColor: "bg-[#F8F6F0]",
  label: "PROCEDURE-SPECIFIC REHABILITATION",
  title: "Operations we rehabilitate at our JVC clinic.",
  alt: "Post-surgical physiotherapy at Vedara Care JVC",
  description: "Every operation has its own restrictions, timeline and milestones. Hafsina K K follows your surgeon's protocol from your surgical report and adjusts the plan as you progress.",
  types: [
    {
      category: "JOINT REPLACEMENT",
      title: "Total Knee Replacement",
      description: "Comprehensive rehabilitation for primary or revision total knee arthroplasty. Focuses on early-phase mobility, pain management, progressive range of motion, strength restoration, gait re-education, and functional return. Home physiotherapy available for early recovery when clinic travel is difficult or painful.",
      timeline: "Typical timeline: 3-6 months; your surgeon's protocol decides."
    },
    {
      category: "JOINT REPLACEMENT",
      title: "Total Hip Replacement",
      description: "Rehabilitation following posterior, anterolateral, or anterior approach hip replacement. Includes hip precautions education, structured mobility progression, strengthening, gait normalisation, and functional rehabilitation. Your surgeon's specific approach determines which movements are restricted in the early phase.",
      timeline: "Typical timeline: about 3-4 months; your surgeon's protocol decides."
    },
    {
      category: "KNEE LIGAMENT",
      title: "ACL Reconstruction (including revision, and ACL with meniscus or MCL repair)",
      description: "Structured rehabilitation following anterior cruciate ligament reconstruction. Different protocols for hamstring tendon, patellar tendon, or quadriceps tendon grafts. Emphasises neuromuscular control, progressive strengthening, and criterion-based return to sport. Re-injury rates are substantially lower with structured rehabilitation than self-managed returns. Includes prehab before surgery and return-to-sport testing before you go back to cutting and pivoting sports.",
      timeline: "Typical timeline: 9-12 months to return to cutting and pivoting sports."
    },
    {
      category: "SHOULDER",
      title: "Rotator Cuff Repair and Shoulder Replacement",
      description: "Comprehensive rehabilitation for arthroscopic or open rotator cuff repair. Starts with early-phase protection (sling protocols), progresses through passive then active motion, strengthening, and functional return. Specific protocol depends on tear size, repair technique, and tissue quality.",
      timeline: "Typical timeline: 4-6 months."
    },
    {
      category: "SPINE",
      title: "Spinal Surgery (discectomy, laminectomy, fusion)",
      description: "Rehabilitation following discectomy, laminectomy, foraminotomy, single-level or multi-level fusion, and other spinal procedures. Protocol based on procedure type, levels involved, and surgical approach. Focuses on early mobilisation, core stability, postural re-education, and pain management strategies. Coordination with your spine surgeon is essential throughout.",
      timeline: "Typical timeline: 3–6 months depending on procedure complexity."
    },
    {
      category: "KNEE",
      title: "Meniscus Surgery",
      description: "Different rehabilitation pathways for meniscectomy (partial meniscus removal) versus meniscus repair (longer, more protective recovery). Includes weight-bearing restrictions, structured return to activity, sport-specific progression for athletes, and long-term joint protection strategies.",
      timeline: "Typical timeline: 6–12 weeks for meniscectomy; 12–24 weeks for repair."
    },
    {
      category: "HIP",
      title: "Hip Arthroscopy and Labral Repair",
      description: "Rehabilitation following hip arthroscopy for labral tears, femoroacetabular impingement (FAI), and related conditions. Focuses on weight-bearing progression, sport-specific rehabilitation, progressive strengthening, and functional return. Increasingly common procedure for active patients with hip pain.",
      timeline: "Typical timeline: 4–6 months with structured phases."
    },
    {
      category: "TRAUMA",
      title: "Fracture Fixation, Foot and Ankle, Hand and Wrist Surgery",
      description: "Rehabilitation after plates, screws or pins, after cast or boot removal, and after foot, ankle, hand and wrist operations: restoring movement, strength, grip and walking.",
      timeline: "Typical timeline: varies with the bone and the fixation."
    },
    {
      category: "SPECIALISED",
      title: "After Mastectomy, Bariatric or Cosmetic Surgery",
      description: "Shoulder movement, lymphoedema management and scar care after breast surgery; graded exercise after bariatric surgery; lymphatic drainage and scar management after liposuction and other cosmetic procedures, within your surgeon's instructions.",
      timeline: "Typical timeline: varies by procedure."
    }
  ],
  footer: "Not sure if we can help with your operation? WhatsApp us your surgical report. Physiotherapy after heart surgery (cardiac rehabilitation) is not offered."
};

export const postSurgeryAclSection = {
  id: "acl",
  label: "ACL SURGERY",
  title: "ACL rehabilitation in Dubai: before surgery, after surgery and back to sport.",
  content: [
    "Physiotherapy is used at every stage of an ACL injury. Before surgery, prehab reduces swelling, restores movement and builds strength, which helps recovery afterwards. After surgery, rehabilitation follows your surgeon's protocol for your graft and any meniscus or MCL repair.",
    "<strong>Return to sport is based on tests, not just time</strong><br/>Before you return to football, padel or other cutting and pivoting sports, Hafsina K K checks strength, hopping, balance and movement control against agreed targets. Return to these sports usually takes 9-12 months.",
    "<strong>Revision and combined surgery</strong><br/>Rehabilitation after a second ACL operation, or ACL surgery combined with meniscus or MCL repair, is usually slower and more protective; the plan follows your surgeon's instructions.",
    "<strong>No surgery?</strong><br/>If your ACL is being treated without an operation, see our knee pain physiotherapy page."
  ],
  image: "/images/post-surgery-rehabilitation-dubai.webp",
  alt: "ACL rehabilitation and return-to-sport testing at Vedara Care, JVC, Dubai"
};

export const postSurgeryPrehabSection = {
  bgColor: "bg-white",
  id: "prehab",
  label: "BEFORE SURGERY",
  title: "Prehab: physiotherapy before your operation.",
  content: [
    "Prehab is physiotherapy in the weeks before planned surgery. It reduces swelling, keeps the joint moving and strengthens the muscles around it, and it lets you practise the exercises and walking aids you will use after the operation.",
    "<strong>Who it helps</strong><br/>People waiting for knee or hip replacement, ACL reconstruction, shoulder or spinal surgery, or any planned orthopaedic operation.",
    "<strong>How to start</strong><br/>Book an assessment and bring any scans and your surgeon's notes. If you are not sure whether you need surgery, our in-house GP can review you, and on request we can suggest orthopaedic surgeons for a second opinion."
  ],
  image: "/images/surgeon-coordination-vedara-dubai.webp",
  alt: "Prehab physiotherapy before surgery at Vedara Care, JVC, Dubai"
};

export const postSurgeryChecklist = {
  id: "what-to-bring",
  label: "YOUR FIRST VISIT",
  title: "What to bring to your first post-surgery physiotherapy appointment.",
  content: [
    "Bring your discharge summary or operation note, your surgeon's rehabilitation protocol or instructions (weight-bearing, brace, movement limits), any scans or X-rays, your medication list, your brace, crutches or sling if you have them, your insurance card, and loose clothing that lets us see the operated area.",
    "<strong>When to start</strong><br/>As soon as your surgeon allows; for many operations this is within the first days or weeks. Follow your surgeon's instructions on timing.",
    "<strong>Get medical help quickly if</strong><br/>you have fever, increasing redness, discharge or bleeding from the wound, calf pain or swelling, or sudden shortness of breath. Our in-house GP can check wounds and review medicines at the same clinic; for emergencies call 999."
  ],
  image: "/images/post-surgery-rehabilitation-dubai-appointment.webp",
  alt: "Post-surgery physiotherapy first visit at Vedara Care, JVC, Dubai"
};

export const rehabilitationPhasesData = {
  bgColor: "bg-[#F8F6F0]",
  label: "THE REHABILITATION JOURNEY",
  title: "The five phases of post-surgical rehabilitation.",
  subtitle: "A typical progression after orthopaedic surgery. Your surgeon's protocol sets the exact timing for your operation.",
  steps: [
    {
      week: "Phase 1 — Weeks 0–2 post-surgery",
      title: "Early Protection",
      items: [
        "Surgeon-directed restrictions strictly followed (weight-bearing, range of motion, brace use, medications)",
        "Active physiotherapy, often gentle at this stage",
        "Pain management and swelling control",
        "Wound care monitoring, visible signs of complications",
        "Patient education on what to expect, what to watch for"
      ],
      expected: "End of Phase 1: Pain levels declining, wound healing well, early-phase movement established."
    },
    {
      week: "Phase 2 — Weeks 2–8",
      title: "Active Recovery",
      items: [
        "Transition from passive to active physiotherapy for most patients",
        "Frequency typically 2–3 sessions per week",
        "Progressive range of motion restoration",
        "Early strengthening within surgeon-approved limits",
        "Gait or movement pattern re-education"
      ],
      expected: "End of Phase 2: Substantial range of motion restored, basic strength returning, functional daily activities improving."
    },
    {
      week: "Phase 3 — Weeks 8–16",
      title: "Strengthening & Progression",
      items: [
        "Frequency reduces to 1–2 sessions per week",
        "Progressive resistance training",
        "Functional movement patterns deepened",
        "Sport or activity-specific progression begins (for athletes)",
        "Progress summary for your surgeon's follow-up, on request"
      ],
      expected: "End of Phase 3: Strength substantially restored, functional independence in most activities, beginning return to higher-level activities."
    },
    {
      week: "Phase 4 — Months 4–6",
      title: "Return to Activity",
      items: [
        "Sessions reduce to weekly or bi-weekly",
        "Activity-specific protocols for return to work, sport, daily life",
        "Objective testing where appropriate (strength, flexibility, functional performance)",
        "For complex procedures (ACL, multi-level spinal fusion): extended Phase 4 (6–12 months)"
      ],
      expected: "End of Phase 4: Full return to most pre-surgical activities, strength typically 80–90% of unaffected side."
    },
    {
      week: "Phase 5 — Months 6+",
      title: "Maintenance & Long-Term Outcome",
      items: [
        "Reduced frequency (monthly or as needed)",
        "Long-term home programme maintained",
        "Periodic measurement and outcome tracking",
        "For some procedures (joint replacements): annual review recommended"
      ],
      expected: "End of Phase 5: Full return to desired activities, strength normalised, long-term joint protection or movement strategies in place."
    }
  ],
  footer: "Phases are illustrative. Actual timelines vary based on individual factors, procedure complexity, and surgeon-specific protocols."
};

export const postSurgeryFAQData = {
  bgColor: "bg-[#F8F6F0]",
  label: "COMMON QUESTIONS",
  title: "Physiotherapy before and after surgery: your questions answered.",
  description: "Answers reviewed by Hafsina K K, DHA-licensed physiotherapist.",
  buttonText: "Ask us on WhatsApp",
  sidebarLinks: [
    { text: "Physiotherapy in JVC", href: "/physiotherapy-jvc/" },
    { text: "Knee pain physiotherapy", href: "/conditions/knee-pain-physiotherapy-dubai/" }
  ],
  faqs: [
    { question: "When should I start physiotherapy after surgery?", answer: "As soon as your surgeon allows. For many orthopaedic operations this is within the first days or weeks; your surgeon's instructions decide the exact timing." },
    { question: "Do I need to bring my surgical report?", answer: "Yes, please bring your operation note or discharge summary and any rehabilitation instructions from your surgeon. If you do not have a written protocol, we follow standard guidelines for your operation." },
    { question: "What is prehab and should I do it?", answer: "Prehab is physiotherapy before planned surgery to reduce swelling, keep the joint moving and build strength. It helps recovery afterwards, especially before knee or hip replacement and ACL reconstruction." },
    { question: "How long is rehabilitation after knee replacement?", answer: "Usually about 3 to 6 months, with the most sessions in the first weeks; some people keep improving for up to a year. Your surgeon's protocol and your progress decide the plan." },
    { question: "How long is rehabilitation after hip replacement?", answer: "Usually about 3 to 4 months, following your surgeon's precautions for your surgical approach." },
    { question: "When can I return to sport after ACL surgery?", answer: "Usually 9 to 12 months for cutting and pivoting sports such as football or padel, and only after you pass return-to-sport tests of strength, hopping, balance and movement control." },
    { question: "Do you do return-to-sport testing?", answer: "Yes. Before you return to sport, Hafsina K K tests strength, hopping, balance and movement control against agreed targets." },
    { question: "Can you help after a mastectomy?", answer: "Yes. Physiotherapy after breast surgery restores shoulder movement and includes lymphoedema management and scar care, within your surgeon's instructions." },
    { question: "Do you offer lymphatic drainage after liposuction or cosmetic surgery?", answer: "Yes. We provide lymphatic drainage and scar management after cosmetic procedures, following your surgeon's instructions on timing." },
    { question: "Can you help after bariatric surgery?", answer: "Yes. We provide graded exercise programmes after bariatric surgery to build strength and fitness safely as your weight changes." },
    { question: "Do you treat patients after heart surgery?", answer: "No. Cardiac rehabilitation is not offered at Vedara Care; ask your cardiac team about a cardiac rehabilitation programme." },
    { question: "Can your GP check my wound?", answer: "Yes. Our in-house GP can check your wound and review your medicines at the same clinic. For emergencies, call 999." },
    { question: "Can you suggest a surgeon for a second opinion?", answer: "On request, we can suggest orthopaedic surgeons in Dubai for a second opinion. We have no referral arrangements with any surgeon or hospital." },
    { question: "Do you offer home physiotherapy after surgery?", answer: "Home visits are coming soon. Until then, all sessions take place at our JVC clinic, and a wheelchair is available if you need it." },
    { question: "Does insurance cover physiotherapy after surgery?", answer: "Most Dubai plans cover it when it is medically needed, usually with a yearly session limit and sometimes pre-approval. Vedara Care works on reimbursement and provides the reports your insurer needs." },
    { question: "Where is the clinic?", answer: "Vedara Care Polyclinic, Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle, Dubai, walking distance from Circle Mall. Open daily 9am to 10pm." }
  ]
};
