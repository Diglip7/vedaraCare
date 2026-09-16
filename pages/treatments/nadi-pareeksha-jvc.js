import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TeamSectionGrid from '../../components/ayurveda/TeamSectionGrid';

import {
  nadiPareekshaHero,
  nadiPareekshaIntro,
  nadiPareekshaMechanism,
  nadiPareekshaTypes,
  nadiPareekshaApproaches,
  nadiPareekshaReviews,
  nadiPareekshaTeam,
  nadiPareekshaPricing,
  nadiPareekshaFaqs,
  nadiPareekshaLocation,
  nadiPareekshaCTA,
  nadiPareekshaRelatedPages,
  nadiPareekshaRelatedArticles
} from '../../data/nadiPareekshaJvcData';

const NadiPareekshaJvc = () => {

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/treatments/nadi-pareeksha-jvc/#nadi-pareeksha-care",
      "name": "Vedara Care Nadi Pareeksha Ayurvedic Assessment JVC",
      "alternateName": ["Vedara Nadi Pareeksha JVC", "Classical Ayurvedic Assessment JVC Dubai", "Vedara Ashtavidha Pareeksha Care"],
      "url": "https://vedaracare.ae/treatments/nadi-pareeksha-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic classical Nadi Pareeksha Ayurvedic pulse-based diagnostic assessment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Flagship component of Ashtavidha Pareeksha classical eightfold examination. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Ansiya with Nadi Pareeksha & Ayurvedic Assessment as her #1 explicitly documented area of expertise. Three doshic pulse position assessment framework — Vata pulse at index finger with Sarpa gati, Pitta pulse at middle finger with Manduka gati, Kapha pulse at ring finger with Hansa gati. Prakriti and Vikriti assessment, Dhatu-Agni-Ojas-Manas-Srotas assessment. Foundation diagnostic guiding all Ayurvedic treatment planning. Kerala Ayurvedic classical tradition. Coordinated with modern medical care.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 400 - AED 45,000",
      "address": { "@type": "PostalAddress", "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE", "postalCode": "" },
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
      "medicalSpecialty": ["Ayurveda", "Nadi Pareeksha", "Ayurvedic Diagnostic Assessment", "Constitutional Assessment", "Integrative Medicine", "Traditional Medicine", "Preventive Medicine"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha Consultation" },
        { "@type": "MedicalProcedure", "name": "Ashtavidha Pareeksha Eightfold Examination" },
        { "@type": "MedicalProcedure", "name": "Prakriti Constitutional Assessment" },
        { "@type": "MedicalProcedure", "name": "Vikriti Current State Assessment" },
        { "@type": "MedicalProcedure", "name": "Dhatu Tissue Status Assessment" },
        { "@type": "MedicalProcedure", "name": "Agni Digestive Vitality Assessment" },
        { "@type": "MedicalProcedure", "name": "Ojas Vitality Reserve Assessment" },
        { "@type": "MedicalProcedure", "name": "Manas Mental-Emotional Pattern Assessment" },
        { "@type": "MedicalProcedure", "name": "Srotas Channel Patency Assessment" },
        { "@type": "MedicalProcedure", "name": "Comprehensive Ayurvedic Consultation" },
        { "@type": "MedicalProcedure", "name": "Foundation Diagnostic for Rasayana Programme" },
        { "@type": "MedicalProcedure", "name": "Foundation Diagnostic for Panchakarma Programme" },
        { "@type": "MedicalProcedure", "name": "Foundation Diagnostic for Condition-Specific Treatment" },
        { "@type": "MedicalProcedure", "name": "Family Nadi Pareeksha Consultation" },
        { "@type": "MedicalProcedure", "name": "Corporate Wellness Nadi Pareeksha Programme" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1500", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-12"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Nadi Pareeksha Ayurvedic Pulse Assessment",
      "alternateName": ["Ayurvedic Pulse Diagnosis", "Nadi Vigyan Pulse Examination", "Classical Ayurvedic Pulse Reading"],
      "procedureType": "Ayurvedic Diagnostic Assessment",
      "howPerformed": "Skilled Ayurvedic practitioner assesses patient's pulse at three specific finger positions on the wrist corresponding to three doshas — index finger position for Vata pulse (Sarpa gati snake-like movement pattern classically described in Nadi Vigyan textual tradition), middle finger position for Pitta pulse (Manduka gati frog-like leaping movement), ring finger position for Kapha pulse (Hansa gati swan-like flowing movement) — with three primary characteristics assessed (Gati movement pattern, Vega speed and rhythm, Sthana position and depth); typically integrated with broader Ashtavidha Pareeksha eightfold clinical examination for comprehensive Ayurvedic diagnostic assessment guiding treatment planning",
      "preparation": "No specific preparation required; morning consultations typically preferred for clearer pulse assessment; patients advised to avoid heavy exercise, heavy meals, or extreme emotional states immediately before consultation",
      "followup": "Comprehensive assessment summary provided; integrated treatment planning discussion; personalised Ayurvedic treatment recommendations across relevant specialties",
      "indication": [
        { "@type": "MedicalCondition", "name": "Constitutional Assessment for Ayurvedic Treatment Planning" },
        { "@type": "MedicalCondition", "name": "Ayurvedic Wellness Framework Entry" },
        { "@type": "MedicalCondition", "name": "Foundation Diagnostic for Rasayana Rejuvenation" },
        { "@type": "MedicalCondition", "name": "Foundation Diagnostic for Panchakarma Programme" },
        { "@type": "MedicalCondition", "name": "Constitutional Context for Chronic Presentations" }
      ]
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Ashtavidha Pareeksha Eightfold Clinical Examination",
        "alternateName": ["Classical Ayurvedic Eightfold Examination"],
        "procedureType": "Ayurvedic Diagnostic Framework",
        "howPerformed": "Classical Ayurvedic eightfold clinical examination framework comprising eight distinct assessment components: Nadi (pulse examination — flagship diagnostic entry point), Mutra (urine examination), Mala (stool examination), Jihva (tongue examination), Shabda (voice/speech examination), Sparsha (touch/temperature examination), Drik (eye/vision examination), Akriti (form/general appearance examination) — providing comprehensive classical Ayurvedic clinical assessment"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Prakriti Fundamental Constitutional Assessment",
        "alternateName": ["Ayurvedic Constitutional Type Assessment"],
        "procedureType": "Ayurvedic Diagnostic Assessment",
        "howPerformed": "Comprehensive assessment identifying individual Prakriti pattern established at conception — Ekadoshaja Prakriti (single-dosha predominant: Vata, Pitta, or Kapha), Dvidoshaja Prakriti (dual-dosha combinations), or Tridoshaja Prakriti (relatively balanced three-dosha) — with subdoshic considerations. Fundamental to Ayurvedic treatment planning."
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Vikriti Current Imbalance Assessment",
        "alternateName": ["Ayurvedic Current State Assessment"],
        "procedureType": "Ayurvedic Diagnostic Assessment",
        "howPerformed": "Assessment identifying current doshic imbalance patterns requiring rebalancing — which doshas currently aggravated, which subdoshas involved, severity, chronicity, associated Dhatu tissue involvement — guiding current treatment recommendations while respecting fundamental Prakriti"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Agni Digestive Vitality Assessment",
        "alternateName": ["Ayurvedic Digestive Fire Assessment"],
        "procedureType": "Ayurvedic Diagnostic Assessment",
        "howPerformed": "Assessment of Agni (digestive fire/vitality) across four classical states: Sama Agni (balanced healthy), Vishama Agni (variable typically with Vata aggravation), Tikshna Agni (sharp typically with Pitta aggravation), Manda Agni (weak sluggish typically with Kapha aggravation) — foundational for treatment planning given Agni restoration typically precedes intensive Ayurvedic interventions"
      }
    ],
    [
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Constitutional Assessment Requirement", "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Nadi Pareeksha Assessment" }, { "@type": "MedicalTherapy", "name": "Ashtavidha Pareeksha Framework" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Ayurvedic Wellness Programme Planning", "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Comprehensive Nadi Pareeksha Consultation" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Symptom Constitutional Context", "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Nadi Pareeksha Assessment Coordinated with Modern Medical Care" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Rasayana Rejuvenation Constitutional Matching", "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Nadi Pareeksha Foundation Diagnostic" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Panchakarma Protocol Design", "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Nadi Pareeksha Doshic Assessment for Panchakarma" }] }
    ],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "Nadi Pareeksha Ayurvedic Assessment at JVC", "item": "https://vedaracare.ae/treatments/nadi-pareeksha-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Nadi Pareeksha?", "acceptedAnswer": { "@type": "Answer", "text": "Nadi Pareeksha is the classical Ayurvedic pulse examination — flagship component of Ashtavidha Pareeksha (the classical Ayurvedic eightfold clinical examination) providing skilled Ayurvedic practitioners access to comprehensive constitutional and clinical information through pulse assessment. Classical Nadi Vigyan textual tradition describes detailed pulse assessment methodology including three doshic pulse positions (Vata at index finger, Pitta at middle finger, Kapha at ring finger) and three primary characteristics (Gati movement pattern, Vega speed and rhythm, Sthana position and depth)." } },
        { "@type": "Question", "name": "What is Ashtavidha Pareeksha?", "acceptedAnswer": { "@type": "Answer", "text": "Ashtavidha Pareeksha is the classical Ayurvedic eightfold clinical examination framework comprising: Nadi (pulse), Mutra (urine), Mala (stool), Jihva (tongue), Shabda (voice/speech), Sparsha (touch/temperature), Drik (eye/vision), Akriti (form/general appearance). Nadi Pareeksha is typically the flagship diagnostic entry point given the extraordinary diagnostic information accessible through pulse examination, with comprehensive Ayurvedic consultation integrating multiple Ashtavidha components as appropriate." } },
        { "@type": "Question", "name": "What are the three doshic pulse positions?", "acceptedAnswer": { "@type": "Answer", "text": "Classical Nadi Pareeksha assesses pulse at three finger positions on the wrist: Index finger position (proximal) assesses Vata pulse with Sarpa gati (snake-like movement pattern), rapid variable rhythm, thin cool quality. Middle finger position assesses Pitta pulse with Manduka gati (frog-like leaping movement), strong regular rhythm, warm forceful quality. Ring finger position (distal) assesses Kapha pulse with Hansa gati (swan-like flowing movement), slow steady rhythm, deep sustained quality." } },
        { "@type": "Question", "name": "What is Nadi Vigyan?", "acceptedAnswer": { "@type": "Answer", "text": "Nadi Vigyan (Nadi Vijnana) is the classical Ayurvedic textual tradition specifically dedicated to Nadi Pareeksha pulse diagnosis, attributed to Basavaraja and preserved through classical Ayurvedic lineages. Classical Nadi Vigyan describes detailed pulse assessment methodology, three doshic pulse characteristics and gati (movement patterns), subdoshic pulse variations, disease pattern pulse indicators, and clinical interpretation frameworks. Kerala Ayurvedic tradition has particularly preserved classical Nadi Vigyan practice." } },
        { "@type": "Question", "name": "What is Prakriti and Vikriti?", "acceptedAnswer": { "@type": "Answer", "text": "Prakriti is the fundamental constitutional pattern established at conception and remaining relatively stable throughout life — Ekadoshaja (single-dosha predominant), Dvidoshaja (dual-dosha combinations), or Tridoshaja (relatively balanced). Vikriti is the current doshic imbalance state — the doshic patterns currently disturbed requiring rebalancing. Nadi Pareeksha assessment identifies both Prakriti (fundamental) and Vikriti (current state) fundamental to Ayurvedic treatment planning." } },
        { "@type": "Question", "name": "Can Nadi Pareeksha replace modern medical diagnosis?", "acceptedAnswer": { "@type": "Answer", "text": "No — realistic diagnostic framing important. Nadi Pareeksha provides comprehensive classical Ayurvedic diagnostic assessment guiding Ayurvedic treatment recommendations. Nadi Pareeksha does NOT replace modern medical diagnostic testing for medical conditions requiring modern diagnostic assessment (blood tests, imaging, specialist medical assessments). For patients with established medical conditions or requiring modern diagnostic workup, Ayurvedic assessment coordinates with modern medical care rather than replacing it." } },
        { "@type": "Question", "name": "How does Nadi Pareeksha guide Rasayana rejuvenation?", "acceptedAnswer": { "@type": "Answer", "text": "Nadi Pareeksha is foundation diagnostic for Rasayana constitutional matching — bidirectional relationship with our Rasayana service. Constitutional-matched Rasayana approach substantially more effective than generic Rasayana. Nadi Pareeksha assessment identifies Prakriti, current Vikriti, Ojas (vitality reserve), Agni status — all guiding personalised Rasayana programme design including Vatatapika Rasayana approach, Medhya Rasayana cognitive component, Aachara Rasayana behavioural framework, appropriate herbal selection." } },
        { "@type": "Question", "name": "How does Nadi Pareeksha guide Panchakarma?", "acceptedAnswer": { "@type": "Answer", "text": "Nadi Pareeksha guides Panchakarma protocol selection — bidirectional relationship with our Panchakarma service. Different doshic imbalances require different Panchakarma protocols. Nadi Pareeksha assessment provides accurate doshic Vikriti identification guiding specific Panchakarma therapy selection (Vamana, Virechana, Basti, Nasya, Raktamokshana), programme intensity appropriate for patient strength, and preparatory Purvakarma protocols." } },
        { "@type": "Question", "name": "What is Agni and why is it assessed?", "acceptedAnswer": { "@type": "Answer", "text": "Agni (digestive fire/vitality) is foundational classical Ayurvedic consideration — sustained wellness requires functional Agni given Agni transforms food into Dhatus (tissues) and eliminates waste appropriately. Four Agni states classically described: Sama Agni (balanced healthy), Vishama Agni (variable typically with Vata aggravation), Tikshna Agni (sharp typically with Pitta aggravation), Manda Agni (weak sluggish typically with Kapha aggravation). Nadi Pareeksha combined with digestive symptom review identifies Agni state — foundational for treatment planning." } },
        { "@type": "Question", "name": "How long does Nadi Pareeksha consultation take?", "acceptedAnswer": { "@type": "Answer", "text": "Comprehensive initial Nadi Pareeksha consultation is 90 minutes including comprehensive Nadi Pareeksha (pulse examination through three doshic positions), broader Ashtavidha Pareeksha components as appropriate, Prakriti and Vikriti assessment, Dhatu-Agni-Ojas-Manas-Srotas assessment, detailed history-taking, comprehensive medication review, integrated treatment planning discussion, personalised Ayurvedic recommendations, written assessment summary. Follow-up consultations 30-60 minutes." } },
        { "@type": "Question", "name": "Do I need to prepare for Nadi Pareeksha?", "acceptedAnswer": { "@type": "Answer", "text": "Minimal preparation. Morning consultations preferred for clearer pulse assessment. Avoid heavy exercise, heavy meals, or extreme emotional states immediately before consultation. Please bring: current medication list, any relevant medical reports or investigations, description of current symptoms or wellness goals, cultural and language preferences. First-time consultations do not require any prior Ayurvedic knowledge." } },
        { "@type": "Question", "name": "Where in Dubai is your clinic?", "acceptedAnswer": { "@type": "Answer", "text": "DHA-licensed clinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Accessible from Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif." } },
        { "@type": "Question", "name": "Do you have female Ayurvedic doctor for Nadi Pareeksha?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Dr. Ansiya is female DHA-licensed BAMS-qualified Ayurvedic doctor with Nadi Pareeksha & Ayurvedic Assessment as her #1 explicitly documented area of expertise. Female practitioner important for cultural preferences, particularly for women's health assessment and Muslim patients preferring female practitioner." } },
        { "@type": "Question", "name": "Is Nadi Pareeksha suitable for children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Nadi Pareeksha adapted for paediatric patients provides constitutional assessment appropriate for children. Family Nadi Pareeksha consultations available for multiple family members single visit. Paediatric Ayurvedic assessment focuses on constitutional pattern identification guiding constitutional dietary and lifestyle framework appropriate for developmental stage." } },
        { "@type": "Question", "name": "Is Nadi Pareeksha suitable for elderly patients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Nadi Pareeksha with comprehensive assessment particularly valuable for elderly Dubai patients seeking classical Ayurvedic constitutional assessment for sustained wellness through healthy ageing. Comprehensive medication and comorbidity review essential. Gentle intervention framework appropriate for age. Sustained partnership approach typical." } },
        { "@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": { "@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Ayurvedic Nadi Pareeksha tradition), Urdu across our team." } },
        { "@type": "Question", "name": "Is Nadi Pareeksha covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Ayurvedic consultation coverage varies by insurance plan. Some insurance plans cover Ayurvedic consultation when medically indicated. Direct billing with Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, MetLife for covered elements when applicable. Please bring insurance card for verification. Consultation appropriate as private wellness assessment when insurance coverage unavailable." } },
        { "@type": "Question", "name": "What is the difference between authentic Nadi Pareeksha and commercialised wellness pulse assessments?", "acceptedAnswer": { "@type": "Answer", "text": "Authentic classical Nadi Pareeksha: delivered by DHA-licensed BAMS-qualified Ayurvedic doctors with substantial classical training, based on classical texts (Nadi Vigyan), includes three doshic pulse position framework with classical gati interpretation, integrated with broader Ashtavidha Pareeksha, comprehensive Prakriti-Vikriti assessment, realistic diagnostic framing, coordinated with modern medical care. Commercialised wellness pulse assessments: may lack classical training foundation, may make diagnostic claims inappropriate to classical Ayurvedic framework, may lack medical coordination." } },
        { "@type": "Question", "name": "How often should I have Nadi Pareeksha reassessment?", "acceptedAnswer": { "@type": "Answer", "text": "Assessment frequency depends on individual circumstances. Initial Nadi Pareeksha establishes foundation. During active treatment programmes, follow-up assessments typically at defined programme intervals. Sustained wellness maintenance patients typically benefit from periodic reassessment (quarterly or bi-annually) for Vikriti changes with life circumstances. Seasonal reassessment appropriate for patients following Ritucharya framework. Reassessment particularly valuable during significant life transitions, illness recovery, or wellness goal changes." } },
        { "@type": "Question", "name": "How do I book Nadi Pareeksha consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Three ways: WhatsApp specifying Nadi Pareeksha consultation ideally with Dr. Ansiya; call 9AM-9PM seven days a week; book online. Please bring: current medication list, any relevant medical reports or investigations, description of current symptoms or wellness goals, cultural and language preferences, insurance card if applicable, specific questions and goals." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Nadi Pareeksha Ayurvedic Assessment at Our JVC Clinic Dubai — Classical Ashtavidha Pareeksha Tradition",
      "url": "https://vedaracare.ae/treatments/nadi-pareeksha-jvc/",
      "about": [
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha Ayurvedic Pulse Assessment" },
        { "@type": "MedicalProcedure", "name": "Ashtavidha Pareeksha" },
        { "@type": "MedicalProcedure", "name": "Prakriti Constitutional Assessment" },
        { "@type": "MedicalProcedure", "name": "Vikriti Current State Assessment" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-12",
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "medicalAudience": "Patient",
      "specialty": { "@type": "MedicalSpecialty", "name": "Ayurveda" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician",
      "name": "Dr. Ansiya",
      "url": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/",
      "medicalSpecialty": ["Ayurveda", "Nadi Pareeksha", "Ayurvedic Diagnostic Assessment", "Constitutional Assessment", "Integrative Medicine"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Nadi Pareeksha Ayurvedic Pulse Assessment (Primary Documented Expertise)",
        "Ashtavidha Pareeksha Classical Eightfold Examination",
        "Nadi Vigyan Nadi Vijnana Classical Textual Tradition",
        "Basavaraja Nadi Vigyan Tradition",
        "Three Doshic Pulse Position Framework",
        "Vata Pulse at Index Finger Position with Sarpa Gati",
        "Pitta Pulse at Middle Finger Position with Manduka Gati",
        "Kapha Pulse at Ring Finger Position with Hansa Gati",
        "Gati Vega Sthana Three Primary Pulse Characteristics",
        "Subdoshic Pulse Assessment",
        "Mutra Pareeksha Urine Examination",
        "Mala Pareeksha Stool Examination",
        "Jihva Pareeksha Tongue Examination",
        "Shabda Pareeksha Voice Examination",
        "Sparsha Pareeksha Touch Examination",
        "Drik Pareeksha Eye Examination",
        "Akriti Pareeksha Form Examination",
        "Prakriti Fundamental Constitutional Assessment",
        "Ekadoshaja Dvidoshaja Tridoshaja Prakriti Classification",
        "Vikriti Current Imbalance Assessment",
        "Dhatu Seven Tissue Status Assessment",
        "Rasa Rakta Mamsa Meda Asthi Majja Shukra Dhatu Assessment",
        "Agni Four States Digestive Vitality Assessment",
        "Sama Vishama Tikshna Manda Agni Classification",
        "Ojas Vitality Reserve Assessment",
        "Manas Mental-Emotional Pattern Assessment",
        "Srotas Channel Patency Assessment Across Fifteen Channels",
        "Ayurvedic Rejuvenation and Rasayana Constitutional Matching",
        "Panchakarma Programme Design",
        "Condition-Specific Ayurvedic Treatment Planning",
        "Constitutional Herbal Prescription",
        "Constitutional Dietary Framework",
        "Dinacharya Ritucharya Lifestyle Guidance",
        "Kerala Ayurvedic Nadi Pareeksha Tradition"
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
      "sameAs": ["https://www.facebook.com/vedaracare", "https://www.instagram.com/vedaracare", "https://www.linkedin.com/company/vedaracare", "https://www.google.com/maps/place/Vedara+Care+Polyclinic"],
      "contactPoint": { "@type": "ContactPoint", "telephone": "+971 55 573 6312", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"] }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Semantic Entity Map — Nadi Pareeksha Ayurvedic Assessment JVC",
      "description": "Structured entity graph for AI and search engine comprehension of all key medical, geographic, practitioner, and service entities referenced on this page.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "MedicalProcedure", "name": "Nadi Pareeksha", "description": "Primary topic — flagship classical diagnostic" } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "MedicalProcedure", "name": "Ayurvedic Pulse Assessment / Diagnosis", "description": "Primary topic" } },
        { "@type": "ListItem", "position": 3, "item": { "@type": "DefinedTerm", "name": "Ashtavidha Pareeksha", "description": "Primary classical framework — eightfold examination", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 4, "item": { "@type": "DefinedTerm", "name": "Nadi, Mutra, Mala, Jihva, Shabda, Sparsha, Drik, Akriti", "description": "All 8 Ashtavidha Pareeksha components", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 5, "item": { "@type": "Book", "name": "Nadi Vigyan / Nadi Vijnana", "description": "Classical Nadi Pareeksha textual tradition authority" } },
        { "@type": "ListItem", "position": 6, "item": { "@type": "Person", "name": "Basavaraja", "description": "Nadi Vigyan textual tradition attribution" } },
        { "@type": "ListItem", "position": 7, "item": { "@type": "DefinedTerm", "name": "Vata Pulse — Index Finger Position — Sarpa Gati", "description": "Doshic pulse position 1", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 8, "item": { "@type": "DefinedTerm", "name": "Pitta Pulse — Middle Finger Position — Manduka Gati", "description": "Doshic pulse position 2", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 9, "item": { "@type": "DefinedTerm", "name": "Kapha Pulse — Ring Finger Position — Hansa Gati", "description": "Doshic pulse position 3", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 10, "item": { "@type": "DefinedTerm", "name": "Gati, Vega, Sthana", "description": "Three primary pulse characteristics", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 11, "item": { "@type": "DefinedTerm", "name": "Prakriti", "description": "Fundamental constitutional pattern", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 12, "item": { "@type": "DefinedTerm", "name": "Ekadoshaja, Dvidoshaja, Tridoshaja Prakriti", "description": "Prakriti classifications", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 13, "item": { "@type": "DefinedTerm", "name": "Vikriti", "description": "Current imbalance state", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 14, "item": { "@type": "DefinedTerm", "name": "Dhatu", "description": "Seven tissues classification", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 15, "item": { "@type": "DefinedTerm", "name": "Rasa, Rakta, Mamsa, Meda, Asthi, Majja, Shukra Dhatu", "description": "Seven Dhatus", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 16, "item": { "@type": "DefinedTerm", "name": "Agni", "description": "Digestive fire/vitality", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 17, "item": { "@type": "DefinedTerm", "name": "Sama, Vishama, Tikshna, Manda Agni", "description": "Four Agni states", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 18, "item": { "@type": "DefinedTerm", "name": "Ojas", "description": "Vitality reserve", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 19, "item": { "@type": "DefinedTerm", "name": "Manas", "description": "Mental-emotional pattern", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 20, "item": { "@type": "DefinedTerm", "name": "Srotas", "description": "Channels of movement", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 21, "item": { "@type": "DefinedTerm", "name": "Fifteen Srotas", "description": "Complete channel framework", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 22, "item": { "@type": "MedicalSpecialty", "name": "Ayurveda", "description": "Primary specialty" } },
        { "@type": "ListItem", "position": 23, "item": { "@type": "MedicalSpecialty", "name": "Nadi Pareeksha, Ayurvedic Diagnostic Assessment, Constitutional Assessment, Integrative Medicine", "description": "Related specialties" } },
        { "@type": "ListItem", "position": 24, "item": { "@type": "MedicalProcedure", "name": "Rasayana Rejuvenation", "description": "Cross-referenced service" } },
        { "@type": "ListItem", "position": 25, "item": { "@type": "MedicalProcedure", "name": "Panchakarma", "description": "Cross-referenced service" } },
        { "@type": "ListItem", "position": 26, "item": { "@type": "Book", "name": "Charaka Samhita, Sushruta Samhita", "description": "Classical Ayurvedic authority" } },
        { "@type": "ListItem", "position": 27, "item": { "@type": "EducationalOccupationalCredential", "name": "BAMS, DHA-Licensed", "description": "Practitioner qualifications" } },
        { "@type": "ListItem", "position": 28, "item": { "@type": "Physician", "name": "Dr. Ansiya", "description": "Primary practitioner with exceptional authority anchor" } },
        { "@type": "ListItem", "position": 29, "item": { "@type": "DefinedTerm", "name": "Kerala Ayurvedic Nadi Vigyan Tradition", "description": "Cultural authenticity", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 30, "item": { "@type": "DefinedTerm", "name": "Ayurvedic Constitutional Diagnostic Framework", "description": "Foundation diagnostic positioning", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 31, "item": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority (DHA)", "description": "Licensing body" } },
        { "@type": "ListItem", "position": 32, "item": { "@type": "MedicalClinic", "name": "Vedara Care Polyclinic", "description": "site-wide" } },
        { "@type": "ListItem", "position": 33, "item": { "@type": "Organization", "name": "Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, MetLife", "description": "Direct-billing partners" } },
        { "@type": "ListItem", "position": 34, "item": { "@type": "Place", "name": "Jumeirah Village Circle (JVC)", "description": "Primary location" } },
        { "@type": "ListItem", "position": 35, "item": { "@type": "City", "name": "Dubai", "description": "Broader geographic" } },
        { "@type": "ListItem", "position": 36, "item": { "@type": "Place", "name": "Circle Mall, FIVE Jumeirah Village, JSS Private School", "description": "JVC landmarks" } },
        { "@type": "ListItem", "position": 37, "item": { "@type": "Place", "name": "Sheikh Mohammed Bin Zayed Road, Al Khail Road", "description": "Access routes" } },
        { "@type": "ListItem", "position": 38, "item": { "@type": "Place", "name": "Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills Estate, JLT, Emirates Hills, Arabian Ranches, Mirdif, JVT, Sports City, Motor City, Arjan", "description": "Areas served" } }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Nadi Pareeksha Ayurvedic Assessment JVC | Classical Ashtavidha Pareeksha | Vedara Dubai</title>
        <meta name="description" content="Authentic classical Nadi Pareeksha Ayurvedic pulse assessment at our JVC clinic Dubai. Ashtavidha Pareeksha eightfold examination. Dr. Ansiya's #1 documented expertise. Female DHA-licensed doctor. Multi-language including Malayalam." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/nadi-pareeksha-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/treatments/nadi-pareeksha-jvc/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/nadi-pareeksha-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/treatments/nadi-pareeksha-jvc/" />
        <meta property="og:title" content="Nadi Pareeksha Ayurvedic Assessment at Our JVC Clinic Dubai — Classical Ashtavidha Pareeksha Tradition | Vedara Care" />
        <meta property="og:description" content="Authentic classical Nadi Pareeksha Ayurvedic pulse-based diagnostic assessment at Vedara Care JVC clinic, walking distance from Circle Mall. Ashtavidha Pareeksha eightfold examination flagship component. Dr. Ansiya — Nadi Pareeksha & Ayurvedic Assessment is her #1 documented expertise area. Female DHA-licensed BAMS Ayurvedic doctor. Kerala Ayurvedic classical tradition. Multi-language including Malayalam." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/nadi-pareeksha-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/nadi-pareeksha-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nadi Pareeksha Ayurvedic Assessment JVC | Ashtavidha Pareeksha | Vedara" />
        <meta name="twitter:description" content="DHA-licensed classical Nadi Pareeksha at JVC. Dr Ansiya #1 documented expertise. Female doctor." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/nadi-pareeksha-jvc.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...nadiPareekshaHero} />

        {/* Section 2: Intro */}
        <AyurvedaIntro {...nadiPareekshaIntro} bgColor="bg-white" />

        {/* Section 3: Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment

          showBorderLeft={false}
          rightContentStyle="keyAnatomy"
          height="1000px"
          bgColor="bg-white"
          data={nadiPareekshaMechanism}
        />

        {/* Section 4: Clinical Applications */}
        <SciaticaTypes

          {...nadiPareekshaTypes}
          label={nadiPareekshaTypes.label}
          bgColor={nadiPareekshaTypes.bgColor}
          title={nadiPareekshaTypes.title}
          types={nadiPareekshaTypes.types}
          description={nadiPareekshaTypes.description}
          footer={nadiPareekshaTypes.footer}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          typicalSignsLabel="Typical assessment approach:"
        />

        {/* Section 5: ContentWithSidebar — Assessment Components */}
        <ContentWithSidebar
          bgColor={nadiPareekshaApproaches.bgColor}
          label={nadiPareekshaApproaches.label}
          title={nadiPareekshaApproaches.title}
          description={nadiPareekshaApproaches.intro}
          contentSections={nadiPareekshaApproaches.contentSections}
          sidebar={nadiPareekshaApproaches.sidebar}
        />

        {/* Section 6: Journey / Phases */}
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
              What comprehensive Nadi Pareeksha Ayurvedic assessment looks like at our JVC clinic.
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
              Understanding the consultation flow helps you prepare for meaningful classical Ayurvedic diagnostic experience.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "56px"
            }}>
              {[
                {
                  phase: "PHASE 1",
                  subtitle: "Before Visit",
                  title: "Pre-Consultation Preparation",
                  points: [
                    "Light meal 2-3 hours before (not fasting, not heavy)",
                    "Avoid caffeine 2-3 hours before consultation",
                    "Avoid strenuous exercise immediately before",
                    "Arrive in a relaxed, unhurried state",
                    "Bring current medication list",
                    "Bring recent medical reports if available",
                    "Bring list of chronic conditions and past history",
                    "Note specific questions and concerns"
                  ]
                },
                {
                  phase: "PHASE 2",
                  subtitle: "At Our JVC Clinic",
                  title: "Comprehensive 90-Minute Consultation",
                  points: [
                    "Introduction and rapport-building with Dr. Ansiya",
                    "Comprehensive history-taking and symptom review",
                    "Nadi Pareeksha: three doshic pulse positions — index (Vata/Sarpa), middle (Pitta/Manduka), ring (Kapha/Hansa)",
                    "Gati, Vega, Sthana characteristics assessed on both wrists",
                    "Jihva (tongue), Sparsha (touch), Drik (eye), Akriti (form) examinations",
                    "Discussion of assessment findings throughout"
                  ]
                },
                {
                  phase: "PHASE 3",
                  subtitle: "Same Consultation",
                  title: "Assessment Discussion & Treatment Planning",
                  points: [
                    "Comprehensive discussion: Prakriti, Vikriti, Dhatu, Agni, Ojas findings",
                    "Explanation of constitutional pattern implications",
                    "Discussion of appropriate Ayurvedic treatment approach",
                    "Rasayana, Panchakarma, condition-specific options",
                    "Herbal prescription, dietary, Dinacharya recommendations",
                    "Coordination with modern medical care for patients with existing conditions",
                    "Realistic outcome framing throughout"
                  ]
                },
                {
                  phase: "PHASE 4",
                  subtitle: "Post-Consultation",
                  title: "Written Summary & Follow-Up Planning",
                  points: [
                    "Written summary of assessment findings and recommendations",
                    "Follow-up consultation planning based on approach selected",
                    "Rasayana, Panchakarma, or condition-specific programme initiation",
                    "Ongoing coordination with modern medical care as appropriate",
                    "Long-term partnership approach — foundation for sustained Ayurvedic care"
                  ]
                }
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
                  <p style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "12px",
                    color: "rgb(85, 85, 85)",
                    marginBottom: "16px"
                  }}>{item.subtitle}</p>
                  <h4 style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(31, 31, 31)",
                    marginBottom: "20px"
                  }}>{item.title}</h4>
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {item.points.map((pt, ptIdx) => (
                      <li key={ptIdx} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        marginBottom: "12px",
                        fontFamily: "var(--font-sans), sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgb(85, 85, 85)",
                      }}>
                        <span style={{ color: "rgb(200, 168, 127)", fontSize: "10px", marginTop: "4px" }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <p style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "16px",
                lineHeight: 1.75,
                color: "rgb(85, 85, 85)",
                textAlign: "center",
                marginBottom: "40px"
              }}>
                Nadi Pareeksha consultation is a foundation Ayurvedic diagnostic experience — comprehensive classical assessment providing constitutional and clinical framework for sustained Ayurvedic care. Realistic framing throughout: Nadi Pareeksha provides comprehensive Ayurvedic diagnostic assessment guiding Ayurvedic treatment; it complements rather than replaces modern medical diagnostics for conditions requiring modern diagnostic testing.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                <div style={{
                  background: "rgb(245, 240, 232)",
                  borderRadius: "8px",
                  padding: "32px",
                }}>
                  <h4 style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(31, 31, 31)",
                    marginBottom: "24px"
                  }}>What Nadi Pareeksha can achieve</h4>
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {[
                      "Comprehensive classical Ayurvedic constitutional assessment (Prakriti and Vikriti)",
                      "Foundation diagnostic guiding all subsequent Ayurvedic treatment",
                      <>Constitutional matching for <a href="/treatments/rasayana-ayurveda-jvc/" className="hover:underline" style={{ color: "rgb(200, 168, 127)" }}>Rasayana</a>, <a href="/treatments/panchakarma-dubai/" className="hover:underline" style={{ color: "rgb(200, 168, 127)" }}>Panchakarma</a>, condition-specific planning</>,
                      "Identification of Dhatu status, Agni state, Ojas status",
                      "Identification of doshic imbalances requiring rebalancing",
                      "Foundation for personalised Ayurvedic wellness framework"
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: "16px",
                        fontFamily: "var(--font-sans), sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgb(85, 85, 85)",
                      }}>
                        <span style={{ color: "rgb(42, 122, 74)", fontWeight: "bold" }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{
                  background: "rgb(245, 240, 232)",
                  borderRadius: "8px",
                  padding: "32px",
                }}>
                  <h4 style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(31, 31, 31)",
                    marginBottom: "24px"
                  }}>What Nadi Pareeksha does not promise</h4>
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {[
                      "Replacement for modern medical diagnostic testing",
                      "Specific medical diagnosis of established medical conditions requiring modern modalities",
                      "Guarantee of specific findings given individual variation",
                      "Instant transformation",
                      "Replacement for modern medical management of established conditions"
                    ].map((item, i) => (
                      <li key={i} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        marginBottom: "16px",
                        fontFamily: "var(--font-sans), sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgb(85, 85, 85)",
                      }}>
                        <span style={{ color: "rgb(212, 24, 61)", fontWeight: "bold" }}>−</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reviews */}
        <TreatmentReviews {...nadiPareekshaReviews} />

        {/* Section 8: Team */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 0px" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-xs font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "rgb(200, 168, 127)" }}>The Team</div>
              <h2 className="font-display font-medium mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "rgb(31, 31, 31)" }}>Ayurvedic doctors for Nadi Pareeksha assessment at our JVC clinic serving Dubai.</h2>
              <p className="max-w-2xl mx-auto leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>DHA-licensed BAMS-qualified Ayurvedic doctors with substantial classical Ayurvedic training including comprehensive Nadi Pareeksha expertise. Female practitioner Dr. Ansiya available. Multi-language: Arabic, English, Hindi, Malayalam, Urdu.</p>
            </div>
            <div className="fade-in grid lg:grid-cols-2 gap-8 visible">
              <div className="flex overflow-hidden" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", border: "1px solid rgba(200, 168, 127, 0.2)" }}>
                <div className="flex-shrink-0 w-1/3 min-h-full">
                  <img alt="Dr Ansiya Nadi Pareeksha Ayurvedic team Vedara Care JVC" className="w-full h-full object-cover" src="/images/dr-ansiya-ayurveda-jvc.webp" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col justify-center w-2/3">
                  <div className="text-xs tracking-[0.1em] uppercase font-medium mb-1" style={{ color: "rgb(200, 168, 127)" }}>Lead Ayurvedic Doctor</div>
                  <h3 className="font-display font-medium text-2xl mb-1" style={{ color: "rgb(31, 31, 31)" }}>Dr. Ansiya</h3>
                  <p className="text-sm mb-4" style={{ color: "rgb(85, 85, 85)" }}>BAMS · DHA-Licensed Ayurvedic Doctor</p>

                  <div className="mb-4">
                    <span className="inline-block text-xs font-medium px-2 py-1 rounded" style={{ background: "rgb(200, 168, 127)", color: "white" }}>
                      #1 Expertise: Nadi Pareeksha & Ayurvedic Assessment
                    </span>
                  </div>

                  <p className="text-sm leading-[1.65] mb-6" style={{ color: "rgb(85, 85, 85)" }}>
                    Kerala Ayurvedic training background with classical Nadi Vigyan tradition. Substantial clinical experience across constitutional assessment, Rasayana rejuvenation planning, Panchakarma protocol design, and condition-specific treatment planning. Multi-language including Malayalam for classical Nadi Vigyan discussion.
                  </p>

                  <ul className="flex flex-col gap-2 mb-6">
                    {[
                      "DHA-licensed BAMS-qualified",
                      "Kerala Ayurvedic Nadi Vigyan lineage",
                      "Female practitioner for cultural preferences",
                      "Multi-language: Arabic, English, Hindi, Malayalam, Urdu"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}>
                        <span style={{ color: "rgb(200, 168, 127)" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href="/doctors/dr-ansiya-ayurveda/" className="text-sm font-medium mt-auto hover:underline" style={{ color: "rgb(200, 168, 127)" }}>View Dr. Ansiya's full profile →</a>
                </div>
              </div>
              <div className="grid grid-rows-3 gap-4">
                <div className="p-6 flex flex-col justify-center" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-base mb-2" style={{ color: "rgb(31, 31, 31)" }}>Other DHA-Licensed BAMS Ayurvedic Doctors</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Additional DHA-licensed BAMS-qualified Ayurvedic doctors providing Nadi Pareeksha assessment as appropriate. Comprehensive classical Ayurvedic training with Nadi Pareeksha expertise.</p>
                </div>
                <div className="p-6 flex flex-col justify-center" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-base mb-2" style={{ color: "rgb(31, 31, 31)" }}>Coordination with Modern Medical Care</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Coordination pathways with treating doctors for patients with established medical conditions or requiring modern medical diagnostic workup. Realistic framing — Ayurvedic assessment coordinates with rather than replaces modern medical diagnostics.</p>
                </div>
                <div className="p-6 flex flex-col justify-center" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-base mb-2" style={{ color: "rgb(31, 31, 31)" }}>Multi-Disciplinary Team Integration</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Nadi Pareeksha as foundation diagnostic enables integrated care planning across Rasayana rejuvenation, Panchakarma detoxification, condition-specific treatments, and coordination with physiotherapy, dermatology, and home healthcare.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Section 9: Pricing */}
        <PostnatalPricingTableImage data={nadiPareekshaPricing} />

        {/* Section 10: FAQ */}
        <FAQ
          {...nadiPareekshaFaqs}
          bgColor="bg-[#EAE3D5]"
          sidebarLinks={[
            { text: "Ansiya's profile", href: "/doctors/dr-ansiya-ayurveda/" },
            { text: "Rasayana treatment", href: "/treatments/rasayana-ayurveda-jvc/" },
            { text: "Panchakarma Treatment in Dubai", href: "/treatments/panchakarma-dubai/" },
            { text: "Ayurveda clinic pillar", href: "/ayurveda-clinic-jvc/" }

          ]}
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...nadiPareekshaLocation} />

        {/* Section 12: Final CTA */}
        <FinalCTA
          {...nadiPareekshaCTA}
          bgColor="bg-white"
        />

        {/* Section 13: Related Pages */}
        <RelatedPages {...nadiPareekshaRelatedPages}
          label={nadiPareekshaRelatedPages.label}
          title={nadiPareekshaRelatedPages.title}
          description={nadiPareekshaRelatedPages.description}
          linkText={nadiPareekshaRelatedPages.linkText}
          linkHref={nadiPareekshaRelatedPages.linkHref}
          pages={nadiPareekshaRelatedPages.pages}
          columns={nadiPareekshaRelatedPages.columns}
        />

        {/* Section 14: Related Articles */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgb(184, 145, 90)' }}>
                {nadiPareekshaRelatedArticles.label}
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontWeight: 500 }}>
                {nadiPareekshaRelatedArticles.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nadiPareekshaRelatedArticles.articles.map((article, index) => (
                <div key={index} className="flex flex-col rounded-xl overflow-hidden border border-[#E5DFD3]/40 hover:shadow-md transition-all duration-300">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow bg-[#FAF8F5]">
                    <div className="space-y-3">
                      <h3 className="text-[16px] font-serif text-[#1A1A1A] leading-snug" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500 }}>
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">
                        {article.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default NadiPareekshaJvc;
