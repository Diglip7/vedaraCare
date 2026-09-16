import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import PhysiotherapySpecializations from '../../components/ayurveda/PhysiotherapySpecializations';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  neckPainJvcHero,
  neckPainJvcIntro,
  neckPainJvcMechanism,
  neckPainJvcApproaches,
  neckPainJvcReviews,
  neckPainJvcPricing,
  neckPainJvcFaqs,
  neckPainJvcLocation,
  neckPainJvcCTA,
  neckPainJvcTeam,
  neckPainJvcRelatedPages,
  neckPainJvcRelatedArticles
} from '../../data/neckPainAyurvedaJvcData';

const NeckPainAyurvedaJvc = () => {

  // ─── Schema 1: MedicalBusiness ─────────────────────────────────────────────
  const schema1 = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
    "@id": "https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/#neck-pain-ayurveda-care",
    "name": "Vedara Care Neck Pain Ayurvedic Treatment JVC",
    "alternateName": ["Vedara Neck Pain Ayurveda JVC", "Ayurvedic Neck Pain Care JVC Dubai", "Vedara Griva Basti Treatment"],
    "url": "https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/",
    "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
    "description": "Authentic Ayurvedic neck pain management at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Ansiya delivering constitutional approach through Griva Basti flagship cervical therapy, Nasya nasal medication, Shiroabhyanga head massage, Panchakarma programmes, Abhyanga, Elakizhi, herbal medicines, and ergonomic lifestyle counselling. Coordinated with modern medical care and physiotherapy.",
    "telephone": "+971 55 573 6312",
    "priceRange": "AED 400 - AED 35,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
      "addressLocality": "Jumeirah Village Circle",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.207223" },
    "hasMap": "https://maps.google.com/?q=Vedara+Care+Polyclinic+JVC",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "09:00", "closes": "21:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "18:00" }
    ],
    "areaServed": [
      { "@type": "Place", "name": "Jumeirah Village Circle" },
      { "@type": "Place", "name": "Circle Mall JVC Vicinity" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "Place", "name": "Jumeirah Village Triangle" },
      { "@type": "Place", "name": "Al Barsha" },
      { "@type": "Place", "name": "Al Barsha South" },
      { "@type": "Place", "name": "Dubai Sports City" },
      { "@type": "Place", "name": "Motor City" },
      { "@type": "Place", "name": "Arjan" },
      { "@type": "Place", "name": "Dubai Hills Estate" },
      { "@type": "Place", "name": "Dubai Marina" },
      { "@type": "Place", "name": "Downtown Dubai" },
      { "@type": "Place", "name": "Business Bay" },
      { "@type": "Place", "name": "Palm Jumeirah" },
      { "@type": "Place", "name": "Jumeirah Lake Towers" },
      { "@type": "Place", "name": "Emirates Hills" },
      { "@type": "Place", "name": "Arabian Ranches" },
      { "@type": "Place", "name": "Mirdif" }
    ],
    "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Cervical Care", "Integrative Medicine", "Traditional Medicine", "Pain Management"],
    "isAcceptingNewPatients": true,
    "availableService": [
      { "@type": "MedicalProcedure", "name": "Ayurvedic Neck Pain Consultation" },
      { "@type": "MedicalProcedure", "name": "Griva Basti Traditional Cervical Therapy" },
      { "@type": "MedicalProcedure", "name": "Nasya Nasal Medication" },
      { "@type": "MedicalProcedure", "name": "Shiroabhyanga Head Massage" },
      { "@type": "MedicalProcedure", "name": "Panchakarma for Neck Pain" },
      { "@type": "MedicalProcedure", "name": "Abhyanga Oil Massage" },
      { "@type": "MedicalProcedure", "name": "Elakizhi Herbal Leaf Pouch Therapy" },
      { "@type": "MedicalProcedure", "name": "Ayurvedic Cervical Herbal Medicine" },
      { "@type": "MedicalProcedure", "name": "Constitutional Assessment (Prakriti and Vikriti)" },
      { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
      { "@type": "MedicalProcedure", "name": "Comprehensive Neck Pain Management Programme" },
      { "@type": "MedicalProcedure", "name": "Tech Neck Professional Programme" },
      { "@type": "MedicalProcedure", "name": "Cervical Spondylosis Management Programme" },
      { "@type": "MedicalProcedure", "name": "Cervicogenic Headache Programme" },
      { "@type": "MedicalProcedure", "name": "Post-Whiplash Supportive Care" }
    ],
    "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1100", "bestRating": "5", "worstRating": "1" },
    "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
    "lastReviewed": "2026-09-01"
  };

  // ─── Schema 2: MedicalCondition Entities with ICD-10 ──────────────────────
  const schema2 = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Cervicalgia",
      "alternateName": ["Neck Pain", "Cervical Pain"],
      "code": { "@type": "MedicalCode", "code": "M54.2", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ayurvedic Neck Pain Management" },
        { "@type": "MedicalTherapy", "name": "Griva Basti" },
        { "@type": "MedicalTherapy", "name": "Nasya" },
        { "@type": "MedicalTherapy", "name": "Constitutional Ayurvedic Care" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Cervical Spondylosis",
      "alternateName": ["Cervical Osteoarthritis", "Cervical Degenerative Disc Disease"],
      "code": { "@type": "MedicalCode", "code": "M47.812", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Comprehensive Ayurvedic Cervical Care" },
        { "@type": "MedicalTherapy", "name": "Griva Basti Series" },
        { "@type": "MedicalTherapy", "name": "Panchakarma with Nasya Integration" },
        { "@type": "MedicalTherapy", "name": "Trayodashang Guggulu" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Cervical Intervertebral Disc Displacement",
      "alternateName": ["Cervical Disc Herniation", "Cervical Disc Prolapse"],
      "code": { "@type": "MedicalCode", "code": "M50.20", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Coordinated Ayurvedic Supportive Care" },
        { "@type": "MedicalTherapy", "name": "Careful Griva Basti Application" }
      ]
    },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervical Radiculopathy", "code": { "@type": "MedicalCode", "code": "M54.12", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Whiplash Injury", "code": { "@type": "MedicalCode", "code": "S13.4XXA", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervicogenic Headache", "code": { "@type": "MedicalCode", "code": "G44.86", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervical Strain", "code": { "@type": "MedicalCode", "code": "S16.1XXA", "codingSystem": "ICD-10" } }
  ];

  // ─── Schema 3: MedicalProcedure Entities ──────────────────────────────────
  const schema3 = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Griva Basti",
      "alternateName": ["Ayurvedic Neck Pain Therapy", "Griva Vasti", "Cervical Oil Retention Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Warm medicated oil retained on cervical region (back of neck) within a dough dam (typically black gram flour or wheat flour) for 25-40 minutes providing sustained localised therapeutic contact allowing deep tissue penetration of medicated oils into cervical region",
      "bodyLocation": { "@type": "AnatomicalStructure", "name": "Cervical Region" },
      "preparation": "Constitutional assessment identifies appropriate oil selection — Ksheerabala for Vata, Mahanarayana for chronic musculoskeletal conditions",
      "indication": [
        { "@type": "MedicalCondition", "name": "Cervicalgia" },
        { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
        { "@type": "MedicalCondition", "name": "Chronic Neck Pain" },
        { "@type": "MedicalCondition", "name": "Cervicogenic Headache" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Nasya",
      "alternateName": ["Ayurvedic Nasal Medication", "Nasal Administration Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Medicated oils or preparations administered through nostrils under trained supervision providing therapeutic effect on cervical and head region through classical nasal pathway — traditionally emphasised for head and neck region conditions",
      "bodyLocation": { "@type": "AnatomicalStructure", "name": "Head and Neck Region" },
      "indication": [
        { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
        { "@type": "MedicalCondition", "name": "Cervicogenic Headache" },
        { "@type": "MedicalCondition", "name": "Chronic Neck Pain" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Shiroabhyanga",
      "alternateName": ["Ayurvedic Head Massage", "Shiro Abhyanga"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Traditional Ayurvedic head massage with medicated oils supporting cervical presentations through head-neck connection — particularly valuable for tension neck pain and cervicogenic headache",
      "bodyLocation": { "@type": "AnatomicalStructure", "name": "Head and Scalp" },
      "indication": [
        { "@type": "MedicalCondition", "name": "Tension-Type Neck Pain" },
        { "@type": "MedicalCondition", "name": "Cervicogenic Headache" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Panchakarma for Neck Pain",
      "alternateName": ["Ayurvedic Detoxification for Cervical Conditions"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Traditional five-action Ayurvedic detoxification with particular emphasis on Nasya integration for cervical region — multi-phase authentic protocol",
      "indication": [
        { "@type": "MedicalCondition", "name": "Chronic Neck Pain" },
        { "@type": "MedicalCondition", "name": "Cervical Spondylosis" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Elakizhi for Cervical Region",
      "alternateName": ["Herbal Leaf Pouch Therapy for Neck"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Warm herbal poultices applied to cervical and shoulder region providing localised therapeutic warmth and herbal delivery"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Abhyanga",
      "alternateName": ["Ayurvedic Oil Massage"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Systematic full-body oil massage supporting muscular relaxation and tissue nourishment"
    }
  ];

  // ─── Schema 4: BreadcrumbList ──────────────────────────────────────────────
  const schema4 = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
      { "@type": "ListItem", "position": 3, "name": "Neck Pain Ayurvedic Treatment at JVC", "item": "https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/" }
    ]
  };

  // ─── Schema 5: FAQPage — 20 FAQs (AI GEO surface) ─────────────────────────
  const schema5 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can Ayurveda help with neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Ayurveda has addressed neck pain and cervical conditions for over three thousand years, developing sophisticated approach including flagship Griva Basti therapy, Nasya nasal medication (classically emphasised for head/neck region), Shiroabhyanga head massage, Panchakarma for chronic patterns, herbal medicines for cervical support, and ergonomic lifestyle counselling. Effective for tech neck, chronic neck pain, cervical spondylosis, cervicogenic headache. Coordinated with modern medical care for cervical red flag presentations." } },
      { "@type": "Question", "name": "What is Griva Basti and how does it help neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Griva Basti is traditional Ayurvedic therapy developed specifically for neck pain. Warm medicated oil retained on cervical region within a dough dam (typically black gram flour) for 25-40 minutes providing sustained localised therapeutic contact. Documented efficacy for chronic neck pain, cervical spondylosis, tension neck patterns. Series of 7-14 sessions typical." } },
      { "@type": "Question", "name": "What is Nasya and why is it used for neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Nasya is nasal medication administration classically emphasised in Ayurveda for head and neck region conditions. Medicated oils or preparations administered through nostrils under trained supervision providing therapeutic effect on cervical and head region through classical nasal pathway. Particularly valuable for chronic neck pain with head involvement, cervicogenic headache, cervical spondylosis with head symptoms." } },
      { "@type": "Question", "name": "What are cervical red flag symptoms requiring immediate medical attention?", "acceptedAnswer": { "@type": "Answer", "text": "Cervical red flag symptoms requiring immediate orthopaedic or neurosurgical evaluation: progressive neurological weakness in arms, bilateral arm symptoms (potential cervical myelopathy), hand clumsiness or dexterity loss, gait disturbance with neck pain, bladder or bowel dysfunction with cervical pain, unexplained weight loss with neck pain, fever with neck pain, history of cancer with new neck pain, significant trauma history. Cervical myelopathy is progressive condition requiring urgent assessment to prevent permanent neurological damage." } },
      { "@type": "Question", "name": "Can Ayurveda help tech neck?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — tech neck responds well to Ayurvedic approach combining Griva Basti therapy series for cervical relief, Shiroabhyanga for tension patterns, comprehensive ergonomic counselling addressing laptop, monitor, mobile device setup and usage patterns, sustainable movement integration for screen breaks. Particularly relevant approach for Dubai's tech-heavy professional demographic." } },
      { "@type": "Question", "name": "How is Ayurvedic neck pain care different from physiotherapy?", "acceptedAnswer": { "@type": "Answer", "text": "Complementary rather than competing approaches. Ayurvedic approach: constitutional assessment, traditional therapies particularly Griva Basti and Nasya, herbal medicines, comprehensive lifestyle patterns. Physiotherapy approach: movement rehabilitation, manual therapy, targeted exercise protocols. Many patients benefit from combined approach. Our JVC clinic houses both approaches enabling integrated care." } },
      { "@type": "Question", "name": "What Ayurvedic herbs help with neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Common Ayurvedic herbs for neck pain include Rasnasaptakam Kwatham, Guggul preparations particularly Trayodashang Guggulu emphasised for cervical conditions, Ashtavargam Kwatham for Vata-related conditions, Balaristam, Dhanwantharam capsules for chronic conditions. Prescribed by qualified Ayurvedic doctors matched to individual constitutional presentation." } },
      { "@type": "Question", "name": "Can Ayurveda replace pain medication?", "acceptedAnswer": { "@type": "Answer", "text": "Depends on situation and clinical judgement. Many patients successfully reduce pain medication dependence with sustained Ayurvedic approach and appropriate medical coordination. Severe pain requiring strong medications may require sustained coordinated approach. Discussion with prescribing doctor essential before medication changes." } },
      { "@type": "Question", "name": "What is Panchakarma and how does it help neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Panchakarma is traditional five-action Ayurvedic detoxification approach substantially valuable for chronic neck pain patterns. Multi-phase authentic protocol with Nasya integration particularly emphasised for cervical region. Programme provides comprehensive constitutional reset supporting sustained neck pain management. Duration typically 7-21 days." } },
      { "@type": "Question", "name": "Can Ayurveda help cervicogenic headache?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — cervicogenic headache (headache originating from cervical spine) responds well to Ayurvedic approach addressing cervical origin. Griva Basti for cervical foundation, Shiroabhyanga for head-neck connection particularly valuable, Nasya integration for classical head/neck pathway. Comprehensive assessment distinguishes cervicogenic headache from primary headache disorders for appropriate treatment." } },
      { "@type": "Question", "name": "Where in Dubai is your clinic?", "acceptedAnswer": { "@type": "Answer", "text": "DHA-licensed clinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Accessible from Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif." } },
      { "@type": "Question", "name": "Do you have female Ayurvedic doctor for neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Dr. Ansiya is female DHA-licensed BAMS-qualified Ayurvedic doctor with substantial musculoskeletal expertise. Female practitioner important for cultural preferences and for female patients preferring same-gender practitioner for therapeutic procedures." } },
      { "@type": "Question", "name": "What about post-whiplash neck pain?", "acceptedAnswer": { "@type": "Answer", "text": "Post-whiplash supportive Ayurvedic care available. Requires appropriate medical assessment for cervical structural concerns before Ayurvedic treatment initiation. Coordinated with modern medical assessment throughout. Imaging review and specialist coordination when appropriate." } },
      { "@type": "Question", "name": "What about cervical spondylosis?", "acceptedAnswer": { "@type": "Answer", "text": "Cervical spondylosis responds well to sustained Ayurvedic management. Griva Basti series, Panchakarma with Nasya integration, Trayodashang Guggulu herbal medicine, sustained partnership approach with periodic maintenance. Progressive condition requiring sustained management rather than time-limited treatment." } },
      { "@type": "Question", "name": "How long does Ayurvedic neck pain treatment take?", "acceptedAnswer": { "@type": "Answer", "text": "Timeline varies by presentation. Acute neck pain typically improves within 2-4 weeks of active treatment. Chronic neck pain requires sustained approach — meaningful improvement typically 6-12 weeks. Long-term chronic conditions benefit from sustained partnership approach with periodic maintenance." } },
      { "@type": "Question", "name": "What ergonomic guidance do you provide for tech neck?", "acceptedAnswer": { "@type": "Answer", "text": "Comprehensive ergonomic counselling for Dubai's tech-heavy professional environment: laptop use (external monitor at eye level, laptop stand with external keyboard), mobile device usage patterns (raising phone to eye level), monitor positioning (top of screen at eye level), break patterns during sustained screen work, driving ergonomics, sleep posture and pillow guidance, travel ergonomics." } },
      { "@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": { "@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Ayurvedic tradition), Urdu across our team." } },
      { "@type": "Question", "name": "Is Ayurvedic neck pain treatment covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "May be covered with medical justification particularly for chronic diagnosed conditions (cervical spondylosis, cervical disc conditions, coordinated care with modern medical management). Direct billing with seven major insurers for covered elements." } },
      { "@type": "Question", "name": "Can I combine Ayurvedic and physiotherapy neck pain treatment?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — many patients benefit from combined approach. Our JVC clinic houses both approaches enabling coordinated care. Combined programme available with treatment planning between Ayurvedic and physiotherapy teams." } },
      { "@type": "Question", "name": "How do I book neck pain consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Three ways: WhatsApp specifying neck pain consultation ideally with Dr. Ansiya; call 9AM-9PM seven days a week; book online. Please bring: description of neck pain history and current pattern, screen use patterns and typical work setup, any imaging reports and images, current medications, previous treatments, insurance card if applicable, specific questions and goals." } }
    ]
  };

  // ─── Schema 6: MedicalWebPage ──────────────────────────────────────────────
  const schema6 = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/#webpage",
    "name": "Neck Pain Ayurvedic Treatment at Our JVC Clinic Dubai",
    "url": "https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/",
    "about": [
      { "@type": "MedicalCondition", "name": "Cervicalgia" },
      { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
      { "@type": "MedicalCondition", "name": "Cervicogenic Headache" },
      { "@type": "MedicalCondition", "name": "Cervical Disc Concerns" }
    ],
    "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
    "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
    "lastReviewed": "2026-09-01",
    "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    "medicalAudience": "Patient",
    "specialty": { "@type": "MedicalSpecialty", "name": "Ayurveda" }
  };

  // ─── Schema 7: Physician (Dr. Ansiya Entity Graph) ─────────────────────────
  const schema7 = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician",
    "name": "Dr. Ansiya",
    "url": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/",
    "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Cervical Care"],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
      { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
    ],
    "gender": "Female",
    "knowsAbout": [
      "Neck Pain Ayurvedic Treatment",
      "Chronic Neck Pain",
      "Cervical Spondylosis",
      "Cervicogenic Headache",
      "Tech Neck",
      "Cervical Radiculopathy",
      "Post-Whiplash Care",
      "Griva Basti Therapy",
      "Nasya Nasal Medication",
      "Shiroabhyanga Head Massage",
      "Panchakarma for Cervical Conditions",
      "Abhyanga",
      "Elakizhi Herbal Leaf Pouch Therapy",
      "Ayurvedic Cervical Herbal Medicine",
      "Rasnasaptakam Kwatham",
      "Trayodashang Guggulu",
      "Guggul Preparations for Cervical",
      "Ergonomic Counselling for Screen Work",
      "Nadi Pareeksha",
      "Prakriti Assessment",
      "Cervical Red Flag Recognition",
      "Cervical Myelopathy Screening"
    ],
    "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
    "worksFor": { "@id": "https://vedaracare.ae/#organization" }
  };

  // ─── Schema 8: Organization ───────────────────────────────────────────────
  const schema8 = {
    "@context": "https://schema.org",
    "@id": "https://vedaracare.ae/#organization",
    "@type": ["Organization", "MedicalOrganization"],
    "name": "Vedara Care Polyclinic",
    "url": "https://vedaracare.ae/",
    "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
    "sameAs": [
      "https://www.facebook.com/vedaracare",
      "https://www.instagram.com/vedaracare",
      "https://www.linkedin.com/company/vedaracare",
      "https://www.google.com/maps/place/Vedara+Care+Polyclinic"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971 55 573 6312",
      "contactType": "Customer Service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"]
    }
  };

  const schemaMarkup = [schema1, ...schema2, ...schema3, schema4, schema5, schema6, schema7, schema8];

  return (
    <>
      <Head>
        <title>Neck Pain Ayurveda JVC | Griva Basti Treatment | Vedara Care Dubai</title>
        <meta name="description" content="Authentic Ayurvedic neck pain treatment at our JVC clinic Dubai. Female DHA-licensed doctor. Griva Basti, Nasya, Shiroabhyanga, herbal medicines. Tech neck expertise. Multi-language." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/" />
        <meta property="og:title" content="Neck Pain Ayurvedic Treatment at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurvedic neck pain management at Vedara Care JVC clinic, walking distance from Circle Mall. Female DHA-licensed BAMS Ayurvedic doctor Dr. Ansiya. Griva Basti flagship therapy, Nasya nasal medication, Shiroabhyanga, Panchakarma, herbal medicines. Tech neck expertise. Multi-language." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/neck-pain-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/neck-pain-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neck Pain Ayurveda JVC | Griva Basti | Vedara" />
        <meta name="twitter:description" content="DHA-licensed authentic Ayurvedic neck pain care at JVC. Female doctor. Griva Basti, Nasya." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/neck-pain-ayurveda-jvc.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...neckPainJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...neckPainJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-white"
          data={neckPainJvcMechanism}
        />

        {/* Section 4: SciaticaTypes — Neck Pain Conditions Addressed */}


        {/* Section 5: PhysiotherapySpecializations — Cervical Care Components */}
        <PhysiotherapySpecializations
          bgColor="bg-[#F5F0E8]"
          cardBg="bg-white"
          cardBorder="border-t-4 border-[#C9A55A]"
          label="Neck Pain Conditions We Address"
          title="The neck pain types and cervical conditions we address with Ayurvedic care at our JVC clinic serving Dubai."
          description="Comprehensive Ayurvedic approach across cervical spectrum with realistic outcome framing and appropriate medical coordination for each presentation."
          types={[
            {
              number: "01",
              title: "Acute Neck Pain",
              description: "Sudden onset neck pain typically from muscular strain, postural strain, or specific incident. Duration less than 6 weeks. Ayurvedic approach provides prompt therapeutic support supporting recovery while assessing for concerning patterns.",
              typicalSigns: "Constitutional assessment · Cervical red flag screening · Griva Basti series · Shiroabhyanga · Herbal medicines",
              alt: "Acute neck pain Ayurvedic treatment Vedara Care JVC"
            },
            {
              number: "02",
              title: "Chronic Neck Pain",
              description: "Persistent neck pain lasting three or more months. Substantial burden affecting daily function. Ayurvedic approach addresses constitutional factors and provides sustained management approach.",
              typicalSigns: "Comprehensive assessment · Panchakarma programme · Griva Basti series · Nasya integration · Sustained herbal medicines",
              alt: "Chronic neck pain Ayurvedic care Vedara Care JVC"
            },
            {
              number: "03",
              title: "Tech Neck / Text Neck",
              description: "Screen-related cervical strain patterns from Dubai's tech-heavy professional lifestyle. Sustained forward-head posture from laptops, mobile devices, and screens. Highly prevalent among Dubai professional demographic.",
              typicalSigns: "Griva Basti for cervical relief · Shiroabhyanga · Comprehensive ergonomic counselling for screen setup",
              alt: "Tech neck text neck Ayurveda Vedara Care Dubai"
            },
            {
              number: "04",
              title: "Postural Neck Pain from Sedentary Work",
              description: "Neck pain patterns from Dubai's sedentary professional lifestyle — sustained sitting, screen exposure, forward-head posture. Common across Dubai's professional demographic.",
              typicalSigns: "Griva Basti for cervical muscular relaxation · Abhyanga series · Comprehensive ergonomic and postural counselling",
              alt: "Postural sedentary neck pain Ayurveda Vedara Care"
            },
            {
              number: "05",
              title: "Tension-Type Neck Pain",
              description: "Stress-related cervical tension patterns from Dubai's high-pressure professional environment. Bidirectional connection with stress — cervical tension worsens stress, stress worsens cervical tension.",
              typicalSigns: "Integrated stress management approach · Shiroabhyanga particularly valuable · Griva Basti series",
              alt: "Tension-type neck pain Ayurveda Vedara Care"
            },
            {
              number: "06",
              title: "Post-Whiplash Neck Pain",
              description: "Neck pain following whiplash injury typically from motor vehicle incident. Requires appropriate medical assessment for cervical structural concerns. Ayurvedic approach supports tissue recovery alongside modern medical assessment.",
              typicalSigns: "Coordinated with modern medical assessment · Appropriate Griva Basti timing · Shiroabhyanga · Herbal medicines",
              alt: "Post-whiplash neck pain Ayurveda Vedara Care"
            },
            {
              number: "07",
              title: "Cervical Spondylosis",
              description: "Age-related degenerative changes in cervical spine producing neck pain patterns. Progressive condition requiring sustained management. Ayurvedic approach addresses symptomatic burden and supports functional maintenance.",
              typicalSigns: "Panchakarma with Nasya integration · Sustained Griva Basti · Guggul preparations · Sustained partnership",
              alt: "Cervical spondylosis Ayurvedic care Vedara Care JVC"
            },
            {
              number: "08",
              title: "Cervical Disc Concerns",
              description: "Disc-related cervical pain conditions requiring imaging and specialist coordination. Ayurvedic approach supports symptomatic management alongside modern medical assessment; not appropriate as primary treatment for severe disc pathology.",
              typicalSigns: "Imaging review · Coordination with orthopaedic or neurosurgical care · Appropriate Griva Basti · Panchakarma",
              alt: "Cervical disc concerns coordinated Ayurvedic care Vedara Care"
            },
            {
              number: "09",
              title: "Cervical Radiculopathy",
              description: "Nerve root compression producing radiating pain into arm, sensory changes, or weakness. Requires neurological assessment. Ayurvedic approach supports symptomatic care alongside modern medical assessment.",
              typicalSigns: "Coordinated with neurological assessment · Careful Griva Basti · Nasya integration · Nerve support herbs",
              alt: "Cervical radiculopathy Ayurveda Vedara Care"
            },
            {
              number: "10",
              title: "Cervicogenic Headache",
              description: "Headache originating from cervical spine — distinct from primary headache disorders. Ayurvedic approach addresses cervical origin producing headache relief through cervical treatment.",
              typicalSigns: "Griva Basti · Shiroabhyanga particularly valuable · Nasya integration · Cervical-focused approach",
              alt: "Cervicogenic headache Ayurveda Vedara Care"
            },
            {
              number: "11",
              title: "Post-Surgical Cervical Supportive Care",
              description: "Supportive Ayurvedic care after cervical surgery for patients wanting comprehensive recovery support. Always coordinated with treating surgeon. Not replacement for surgical follow-up care.",
              typicalSigns: "Coordinated with treating surgeon · Appropriate timing after clearance · Gentle Griva Basti · Shiroabhyanga",
              alt: "Post-surgical cervical Ayurvedic supportive care Vedara Care"
            },
            {
              number: "12",
              title: "Sleep Posture-Related Neck Pain",
              description: "Neck pain patterns from sleep posture, inappropriate pillow support, or sleeping on aeroplanes and in hotels common for Dubai's frequently-travelling demographic.",
              typicalSigns: "Griva Basti for symptom relief · Comprehensive sleep posture and pillow counselling · Travel neck care",
              alt: "Sleep posture neck pain Ayurveda Vedara Care"
            }
          ]}
          footer="<a href='/book'>Comprehensive consultation identifies your specific neck pain pattern and appropriate approach →</a>"
        />

        {/* Section 6: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={neckPainJvcApproaches.bgColor}
          label={neckPainJvcApproaches.label}
          title={neckPainJvcApproaches.title}
          contentSections={neckPainJvcApproaches.contentSections}
          sidebar={neckPainJvcApproaches.sidebar}
          description={neckPainJvcApproaches.description}
        />

        {/* Section 7: Journey / Phases */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgb(200, 168, 127)",
              fontWeight: 600,
              marginBottom: "16px",
              textAlign: "center"
            }}>
              Your Journey
            </p>
            <h2 style={{
              fontFamily: "Fraunces, serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "rgb(31, 31, 31)",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
              textAlign: "center"
            }}>
              What comprehensive Ayurvedic neck pain care journey looks like at our JVC clinic.
            </h2>
            <p style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "16px",
              color: "rgb(85, 85, 85)",
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 56px",
              lineHeight: 1.7
            }}>
              Realistic understanding of timeline helps set appropriate expectations for meaningful outcomes.


            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "56px"
            }}>
              {[
                {
                  phase: "Phase 1",
                  title: "Phase 1 — Assessment and Foundation",
                  body: "Comprehensive 90-minute initial consultation with Dr. Ansiya identifying neck pain pattern, constitutional factors, screen use patterns, functional impact, previous treatments, current medications, and treatment goals. Cervical red flag symptom screening including neurological screening for myelopathy. Personalised treatment plan design. First Griva Basti session may begin. Foundation ergonomic recommendations initiated."
                },
                {
                  phase: "Phase 2 ",
                  title: "Phase 2 — Active Treatment Intensive",
                  body: "Regular treatment sessions building sustained neck pain improvement. Griva Basti series (twice weekly typical for acute presentations, weekly for chronic patterns), Shiroabhyanga integration for tension patterns, Nasya integration when clinically appropriate, Abhyanga integration, herbal medicine adjustments based on response, ergonomic and lifestyle implementation."
                },
                {
                  phase: "Phase 3 ",
                  title: "Phase 3 — Sustained Improvement and Integration",
                  body: "Continued treatments at reducing frequency. Substantial improvement typically apparent — sustained pain reduction, improved functional capacity, better postural patterns, sustained ergonomic changes becoming habits. For chronic conditions, Panchakarma programme with Nasya integration may be initiated for constitutional reset."
                },
                {
                  phase: "Phase 4 ",
                  title: "Phase 4 — Long-Term Management Partnership",
                  body: "Transitioned to sustained wellness partnership with periodic Griva Basti maintenance, ongoing ergonomic practices, seasonal adjustments as needed. Chronic conditions benefit from sustained partnership approach with periodic intensification. Some patients continue monthly maintenance Griva Basti; others transition to quarterly programme."
                },

              ].map((item, i) => (
                <div key={i} style={{
                  background: "rgb(245, 240, 232)",
                  borderRadius: "8px",
                  padding: "28px",
                  borderTop: "4px solid rgb(200, 168, 127)",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 24px"
                }}>
                  <p style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "11px",
                    color: "rgb(200, 168, 127)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "4px"
                  }}>{item.phase}</p>
                  <h3 style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(31, 31, 31)",
                    marginBottom: "12px"
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.75,
                    color: "rgb(85, 85, 85)",
                    textAlign: "left"
                  }}>{item.body}</p>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: "720px", margin: "0 auto" }}>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "18px",
                lineHeight: 1.75,
                color: "rgb(85, 85, 85)",
                textAlign: "center",
                marginBottom: "24px"
              }}>
                Individual variation substantial based on neck pain severity and duration, constitutional factors, adherence to ergonomic recommendations, structural factors, and personal response. Acute neck pain typically improves faster than chronic degenerative conditions.
              </p>
              <div style={{
                background: "rgb(240, 235, 227)",
                borderRadius: "8px",
                padding: "28px",
                borderLeft: "3px solid rgb(200, 168, 127)"
              }}>
                <p style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "14px",
                  color: "rgb(85, 85, 85)",
                  lineHeight: 1.75
                }}>
                  <strong style={{ color: "rgb(31, 31, 31)" }}>What Ayurvedic neck pain care can achieve:</strong> Substantial reduction in pain intensity and frequency; improved cervical range of motion; improved functional capacity; better sleep quality; reduced dependence on pain medications with appropriate coordination; sustained management of chronic conditions; improved postural and ergonomic patterns; effective coordination with modern medical care.<br />
                  <br />
                  <strong style={{ color: "rgb(31, 31, 31)" }}>What Ayurvedic approach cannot achieve:</strong> Reversal of structural degenerative changes; substitute for surgical assessment in patients with cervical red flag symptoms or cervical myelopathy; guarantee of pain-free outcomes; rapid resolution of chronic long-duration neck pain.<strong style={{ color: "rgba(19, 18, 18, 1)" }}>Cervical red flag symptoms require immediate specialist evaluation — Ayurvedic treatment inappropriate as primary approach for these presentations.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Reviews */}
        <TreatmentReviews
          details1={neckPainJvcReviews.details1}
          {...neckPainJvcReviews} />

        {/* Section 9: Team */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 0px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto", padding: "0px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p className="text-[13px] font-[600] tracking-[0.08em] uppercase mb-4 text-center" style={{ color: "rgb(200, 168, 127)", fontFamily: "Inter, sans-serif" }}>The Team</p>
              <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(28px, 3.5vw, 44px)", color: "rgb(31, 31, 31)", marginBottom: "16px", lineHeight: 1.2 }}>Ayurvedic doctors for neck pain care at our JVC clinic serving Dubai.</h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "17px", color: "rgb(85, 85, 85)", maxWidth: "720px", margin: "0px auto", lineHeight: 1.7 }}>DHA-licensed BAMS-qualified Ayurvedic doctors with substantial musculoskeletal expertise. Female practitioner available. Multi-language including Arabic, English, Hindi, Malayalam, Urdu. Multi-disciplinary integration with physiotherapy at same JVC clinic.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              <div style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", padding: "28px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgb(232, 224, 213)", marginBottom: "20px", overflow: "hidden" }}>
                  <img alt="Dr Ansiya Ayurvedic neck pain team Vedara Care JVC" src="/images/dr-ansiya-ayurveda-jvc.webp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "20px", color: "rgb(31, 31, 31)", marginBottom: "8px" }}>Dr. Ansiya</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgb(200, 168, 127)", letterSpacing: "0.04em", marginBottom: "12px" }}>Lead Musculoskeletal Ayurvedic Doctor</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: "rgb(85, 85, 85)", marginBottom: "16px" }}>DHA-Licensed BAMS-Qualified Ayurvedic Doctor with substantial musculoskeletal expertise across back pain, neck pain, joint disorders, cervical spondylosis, and lumbar spondylosis. Female practitioner providing comprehensive assessment and sustained partnership approach. Griva Basti and Nasya expertise for cervical-focused traditional therapies.</p>
                <a href="/doctors/dr-ansiya-ayurveda" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgb(200, 168, 127)", textDecoration: "none", borderBottom: "1px solid rgb(200, 168, 127)" }}>View Dr. Ansiya&apos;s full profile</a>
              </div>
              <div style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", padding: "28px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "20px", color: "rgb(31, 31, 31)", marginBottom: "8px" }}>Ayurvedic Therapy Team</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgb(200, 168, 127)", letterSpacing: "0.04em", marginBottom: "12px" }}>Trained Therapists</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: "rgb(85, 85, 85)", marginBottom: "0px" }}>Trained female and male therapists delivering Griva Basti, Nasya, Shiroabhyanga, Panchakarma protocols, Abhyanga, Elakizhi under doctor supervision. Griva Basti and Nasya require specific training for authentic protocol delivery. Cultural sensitivity and multi-language capability.</p>
              </div>
              <div style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", padding: "28px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "20px", color: "rgb(31, 31, 31)", marginBottom: "8px" }}>Physiotherapy Team Integration</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgb(200, 168, 127)", letterSpacing: "0.04em", marginBottom: "12px" }}>Multi-Disciplinary Integration</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: "rgb(85, 85, 85)", marginBottom: "0px" }}>Our JVC clinic houses physiotherapy alongside Ayurvedic neck pain care. Many patients benefit from combined approach. Physiotherapy team available for coordinated care. Combined Ayurvedic and physiotherapy neck pain programmes available.</p>
              </div>
              <div style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", padding: "28px" }}>
                <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "20px", color: "rgb(31, 31, 31)", marginBottom: "8px" }}>Modern Medical Coordination</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600, color: "rgb(200, 168, 127)", letterSpacing: "0.04em", marginBottom: "12px" }}>Specialist Referral Network</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: "rgb(85, 85, 85)", marginBottom: "0px" }}>Referral pathways to orthopaedic specialists, neurosurgeons, neurologists, pain management specialists when clinical situation warrants. Cervical red flag symptoms including cervical myelopathy signs actively screened during consultation with immediate referral when indicated.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Pricing */}
        <PostnatalPricingTableImage data={neckPainJvcPricing} />

        {/* Section 11: FAQ */}
        <FAQ
          {...neckPainJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 12: Location */}
        <TreatmentLocation {...neckPainJvcLocation} />

        {/* Section 13: Final CTA */}
        <FinalCTA
          {...neckPainJvcCTA}
          bgColor="bg-[#F6F1E9]"
        />

        {/* Section 14: Related Pages */}
        <RelatedPages {...neckPainJvcRelatedPages} />

        {/* Section 15: Related Articles */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-10">
              <p
                className="text-[13px] font-semibold tracking-[0.08em] uppercase mb-4"
                style={{
                  color: "rgb(200, 168, 127)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {neckPainJvcRelatedArticles.label}
              </p>

              <h2
                className="text-3xl md:text-4xl"
                style={{
                  fontFamily: "Fraunces, serif",
                  fontWeight: 500,
                  color: "rgb(31, 31, 31)",
                  margin: 0,
                }}
              >
                {neckPainJvcRelatedArticles.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {neckPainJvcRelatedArticles.articles.map((article, index) => (
                <div
                  key={index}
                  className="border-t-[3px] pt-5"
                  style={{
                    borderTopColor: "rgb(200, 168, 127)",
                  }}
                >
                  {/* Category + Date */}
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className="text-xs font-semibold tracking-[0.05em] uppercase"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgb(200, 168, 127)",
                      }}
                    >
                      {article.category}
                    </span>

                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgb(119, 119, 119)",
                      }}
                    >
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="text-[18px] mb-2.5 leading-[1.3]"
                    style={{
                      fontFamily: "Fraunces, serif",
                      fontWeight: 500,
                      color: "rgb(31, 31, 31)",
                    }}
                  >
                    {article.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="text-sm leading-[1.65] mb-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgb(85, 85, 85)",
                    }}
                  >
                    {article.description}
                  </p>

                  {/* Read More */}
                  <Link
                    href={article.href}
                    className="text-[13px] font-semibold no-underline hover:underline"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgb(200, 168, 127)",
                    }}
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NeckPainAyurvedaJvc;
