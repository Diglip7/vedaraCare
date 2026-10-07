import { SITE } from '../lib/site';

export const homeHero = {
  eyebrow: 'Binghatti Azure · Jumeirah Village Circle',
  title: 'Your Polyclinic in Jumeirah Village Circle (JVC), Dubai',
  description:
    'GP consultations, physiotherapy, Ayurveda, dermatology and aesthetic care under one roof. DHA-licensed clinicians, open every day from 9am to 10pm.',
  primaryCta: { label: 'WhatsApp us', href: SITE.whatsapp, track: 'whatsapp_click' },
  secondaryCta: { label: 'Book appointment', href: '/book', track: 'appointment_click' },
  callCta: { label: `Call ${SITE.phoneDisplay}`, href: `tel:${SITE.phone}`, track: 'phone_click' },
  microLine: 'Most patients hear back on WhatsApp within minutes during clinic hours.',
  trust: [
    { type: 'shield', label: `DHA-licensed facility · Licence ${SITE.facilityLicence}` },
    { type: 'star', label: 'GOOGLE_RATING' }, // replaced in Hero with "4.7 on Google · 21 reviews" (live, Step 9)
    { type: 'clock', label: 'Open daily, 9am–10pm' },
    { type: 'pin', label: 'Binghatti Azure, JVC · near Circle Mall' },
  ],
  image: '/images/home.jpg',
  imageAlt: 'Reception at Vedara Care Polyclinic, Binghatti Azure, Jumeirah Village Circle, Dubai',
};

export const homeServices = {
  eyebrow: 'Our departments',
  title: 'Six departments, one clinic in JVC',
  intro: 'See the right specialist without crossing the city. Choose a department to see its treatments and clinicians.',
  items: [
    { title: 'General Practice', text: 'Same-clinic GP consultations for everyday illness, check-ups and referrals.', chips: ['GP consultation', 'Health check', 'Referral to physiotherapy'], href: '/doctors/dr-sanjida-islam-suchana', dept: 'general_practice', alt: 'GP consultation room at Vedara Care Polyclinic in JVC' },
    { title: 'Physiotherapy', text: 'One-to-one physiotherapy for pain, injury and recovery after surgery.', chips: ['Back & neck pain', 'Sports injury', 'Pelvic floor'], href: '/physiotherapy-jvc/', dept: 'physiotherapy', alt: 'Physiotherapy session at Vedara Care Polyclinic in JVC' },
    { title: 'Ayurveda', text: 'Classical Ayurvedic consultations and therapies with a DHA-licensed Ayurvedic doctor.', chips: ['Panchakarma', 'Abhyanga', 'Shirodhara'], href: '/ayurveda-clinic-jvc', dept: 'ayurveda', alt: 'Ayurvedic therapy room at Vedara Care Polyclinic in JVC' },
    { title: 'Dermatology', text: 'Medical assessment and treatment for skin, hair and scalp conditions.', chips: ['Acne', 'Eczema & psoriasis', 'Hair loss'], href: '/dermatology-clinic-jvc', dept: 'dermatology', alt: 'Skin assessment at Vedara Care Polyclinic in JVC' },
    { title: 'Aesthetic Treatments', text: 'Doctor-led, non-surgical treatments for skin quality and facial ageing.', chips: ['Skin boosters', 'Profhilo', 'PRP facial'], href: '/skin-clinic-jvc', dept: 'aesthetics', alt: 'Aesthetic treatment room at Vedara Care Polyclinic in JVC' },
    { title: 'Beauty & Wellness', text: 'Facials and relaxing therapies by trained aestheticians and therapists.', chips: ['HydraFacial', 'OxyGeneo', 'Ayurvedic massage'], href: '/wellness-clinic-jvc', dept: 'wellness', alt: 'Facial treatment at Vedara Care Polyclinic in JVC' },
  ],
};

export const homeConditions = {
  eyebrow: 'Common reasons for a visit',
  title: 'What patients in JVC come to us for',
  items: [
    { title: 'Back pain', text: 'Assessment and a hands-on treatment plan.', tag: 'Physiotherapy', href: '/conditions/back-pain-physiotherapy-jvc' },
    { title: 'Neck pain', text: 'Relief for stiffness from desk work and screens.', tag: 'Physiotherapy', href: '/conditions/neck-pain-physiotherapy-jvc' },
    { title: 'Sports injuries', text: 'Rehab from first session to return to play.', tag: 'Physiotherapy', href: '/physiotherapy/sports-injury-jvc' },
    { title: 'Pelvic floor & postnatal recovery', text: 'Private assessment and guided rehab.', tag: 'Physiotherapy', href: '/conditions/pelvic-floor-physiotherapy-dubai' },
    { title: 'Acne', text: 'Medical treatment plans matched to your skin.', tag: 'Dermatology', href: '/conditions/acne-treatment-jvc' },
    { title: 'Hair loss', text: 'Find the cause, then plan treatment.', tag: 'Dermatology', href: '/conditions/hair-loss-treatment-jvc' },
    { title: 'PCOS', text: 'Ayurvedic care alongside your medical treatment.', tag: 'Ayurveda', href: '/conditions/pcos-ayurveda-dubai' },
    { title: 'Stress & poor sleep', text: 'Ayurvedic therapies such as Shirodhara.', tag: 'Ayurveda', href: '/conditions/stress-anxiety-ayurveda-dubai' },
  ],
};

export const homeExperts = {
  eyebrow: 'DHA-licensed clinicians',
  title: 'Meet the clinicians you will see',
  intro: "Every clinician's DHA licence number is shown on their profile.",
  items: [
    { name: 'Dr. Sanjida Islam Suchana', role: 'General Practitioner', qualification: 'MBBS · Professional Diploma in Dermatology (RCPI)', licence: 'DHA licence 33436347', image: '/images/dr-sanjida-islam-suchana-gp-dubai.webp', href: '/doctors/dr-sanjida-islam-suchana' },
    { name: 'Hafsina K K', role: 'Physiotherapist', qualification: "Bachelor of Physiotherapy · 7 years' experience", licence: 'DHA-P 64812828', image: '/images/hafsina-kk-physiotherapist-dubai.webp', href: '/doctors/hafsina-kk-physiotherapist' },
    { name: 'Dr. Zainab Sheikh', role: 'Ayurveda Practitioner', qualification: "DHA Licensed Ayurveda Practitioner · 4.5 years' experience", licence: 'DHA licence 20918133', image: '/images/dr-zainab-ayurveda-jvc.webp', href: '/doctors/dr-zainab-ayurveda' },
    // Show when her DHA licence at Vedara is issued: set hidden:false and fill licence
    { name: 'Dr. Anusha Makkena', role: 'General Practitioner & Aesthetic Medicine Physician', qualification: 'MBBS, MS ENT · MOH Licensed ', licence: 'DHA-P ', image: '/images/dr-anusha-makkena.webp', href: '/doctors/dr-anusha-makkena', hidden: true },
  ],
  allLink: { label: 'See all clinicians', href: '/doctors' },
};

export const homeWhyVedara = {
  eyebrow: 'Why Vedara',
  title: 'One clinic, one plan, one team',
  items: [
    { n: '01', title: 'The right clinician first', text: 'Not sure where to start? A GP or department lead assesses you and points you to the right treatment, in the same building.' },
    { n: '02', title: 'Clinicians who share your plan', text: 'Your physiotherapist, Ayurvedic doctor and GP can see one treatment plan, so care for long-term pain or skin conditions stays joined up.' },
    { n: '03', title: 'Time for a real consultation', text: 'First Ayurvedic consultations run 45 to 60 minutes. Physiotherapy sessions are one-to-one.' },
  ],
  cta: { label: 'Book a consultation', href: '/book' },
};

export const homeLocation = {
  eyebrow: 'Find us in JVC',
  title: 'Find us in Binghatti Azure, JVC',
  text: 'Vedara Care Polyclinic is in Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle — a short drive from Circle Mall and FIVE Jumeirah Village.',
  address: SITE.address.full,
  hours: 'Monday to Sunday, 9:00am – 10:00pm',
  contact: `${SITE.phoneDisplay} (phone and WhatsApp) · ${SITE.email}`,
  parking: SITE.parking,
  directions: { label: 'Get directions', href: SITE.mapsUrl },
  imageAlt: 'Binghatti Azure building entrance, Jumeirah Village Circle, Dubai',
};

export const homeReviews = {
  eyebrow: 'Google reviews',
  title: 'What patients say on Google',
  allLink: { label: 'Read all reviews on Google', href: SITE.mapsUrl },
  // rating, count and review cards come from getStaticProps (Step 9) — nothing hard-coded
};

export const homeFaqs = {
  eyebrow: 'Questions',
  title: 'Questions before your first visit',
  intro: `Can't find your answer? WhatsApp us on ${SITE.phoneDisplay}.`,
  items: [
    { q: 'Where is Vedara Care Polyclinic located?', a: 'We are at Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai — a short drive from Circle Mall. We are open every day from 9am to 10pm.' },
    { q: 'What services does Vedara Care offer?', a: 'We offer GP consultations, physiotherapy, Ayurveda, dermatology, doctor-led aesthetic treatments and beauty and wellness treatments, all in one clinic in JVC.' },
    { q: 'Is Vedara Care licensed by the Dubai Health Authority?', a: "Yes. Vedara Care Polyclinic is a DHA-licensed facility (licence 2509266). Each clinician's DHA licence number is listed on their profile page." },
    { q: 'Do you accept health insurance?', a: 'We support reimbursement claims with all major UAE insurers. We do not bill insurers directly; we provide the supporting documents you need to claim. Send your insurance card on WhatsApp if you have questions.' },
    { q: 'Do I need a referral for physiotherapy?', a: "No, you can book physiotherapy directly. If you want insurance to cover it, many UAE plans ask for a doctor's referral — our GPs can assess you first." },
    { q: 'How do I book an appointment?', a: `Message us on WhatsApp or call ${SITE.phoneDisplay}, or book online. We will offer the earliest available time with the right clinician.` },
  ],
};

export const homeCTA = {
  title: 'Book your visit in JVC',
  text: 'Tell us what you need on WhatsApp and we will match you with the right clinician and the next available time.',
  smallLine: 'Shop 4, Binghatti Azure, JVC, Dubai · Open daily 9am–10pm',
};
