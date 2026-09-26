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
import TeamSectionGrid from '../../components/ayurveda/TeamSectionGrid';

import {
  rasayanaJvcHero,
  rasayanaJvcIntro,
  rasayanaJvcMechanism,
  rasayanaJvcTypes,
  rasayanaJvcApproaches,
  rasayanaJvcJourney,
  rasayanaJvcReviews,
  rasayanaJvcPricing,
  rasayanaJvcFaqs,
  rasayanaJvcLocation,
  rasayanaJvcCTA,
  rasayanaJvcTeam,
  rasayanaJvcRelatedPages
} from '../../data/rasayanaAyurvedaJvcData';

const RasayanaAyurvedaJvc = () => {

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/#rasayana-rejuvenation-care",
      "name": "Vedara Care Rasayana Ayurvedic Rejuvenation JVC",
      "alternateName": ["Vedara Rasayana JVC", "Classical Ayurvedic Rejuvenation JVC Dubai", "Vedara Rasayana Tantra Care"],
      "url": "https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic classical Rasayana Ayurvedic rejuvenation at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Rasayana Tantra — one of eight branches of classical Ashtanga Ayurveda. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Ansiya with Ayurvedic Rejuvenation explicitly documented in her expertise areas. Comprehensive classical Rasayana approach through Vatatapika Rasayana programme design, Medhya Rasayana cognitive rejuvenation, Aachara Rasayana behavioural framework, Chyawanprash and classical Rasayana herbal preparations, Panchakarma preparation coordination when appropriate, sustained wellness practice partnership. Coordinated with modern medical care.",
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
      "medicalSpecialty": ["Ayurveda", "Rasayana", "Ayurvedic Rejuvenation", "Integrative Medicine", "Traditional Medicine", "Preventive Medicine", "Healthy Ageing"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Rasayana Consultation" },
        { "@type": "MedicalProcedure", "name": "Vatatapika Rasayana Programme" },
        { "@type": "MedicalProcedure", "name": "Medhya Rasayana Cognitive Rejuvenation" },
        { "@type": "MedicalProcedure", "name": "Aachara Rasayana Behavioural Framework" },
        { "@type": "MedicalProcedure", "name": "Kamya Rasayana Programme" },
        { "@type": "MedicalProcedure", "name": "Naimittika Rasayana for Post-Illness Recovery" },
        { "@type": "MedicalProcedure", "name": "Chyawanprash Prescription" },
        { "@type": "MedicalProcedure", "name": "Constitutional Rasayana Herbal Programme" },
        { "@type": "MedicalProcedure", "name": "Constitutional Assessment (Prakriti and Vikriti)" },
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
        { "@type": "MedicalProcedure", "name": "Perimenopausal Women's Rasayana Programme" },
        { "@type": "MedicalProcedure", "name": "Sustained Wellness Practice Partnership" },
        { "@type": "MedicalProcedure", "name": "Corporate Wellness Rasayana Programme" },
        { "@type": "MedicalProcedure", "name": "Post-Panchakarma Rasayana Intensification" },
        { "@type": "MedicalProcedure", "name": "Immunity Building Sustained Rasayana Programme" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "800", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-07"
    },
    [
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Fatigue Syndrome", "code": { "@type": "MedicalCode", "code": "R53.82", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Naimittika Rasayana Programme" }, { "@type": "MedicalTherapy", "name": "Constitutional Rasayana Approach" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Burnout State", "code": { "@type": "MedicalCode", "code": "Z73.0", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Aachara Rasayana Framework" }, { "@type": "MedicalTherapy", "name": "Ashwagandha Rasayana" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cognitive Symptoms Age-Related", "code": { "@type": "MedicalCode", "code": "R41.81", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Medhya Rasayana Cognitive Programme" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Sleep Disorder", "code": { "@type": "MedicalCode", "code": "G47.9", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Sleep Restoration Rasayana Programme" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Perimenopausal and Menopausal Disorders", "code": { "@type": "MedicalCode", "code": "N95.9", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Perimenopausal Women's Rasayana with Shatavari" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Convalescence Following Illness", "code": { "@type": "MedicalCode", "code": "Z54.0", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Naimittika Rasayana Programme" }] }
    ],
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Vatatapika Rasayana Programme",
        "alternateName": ["Practical Modern Rasayana", "Outdoor Rasayana"],
        "procedureType": "Ayurvedic Rejuvenation Programme",
        "howPerformed": "Practical modern Rasayana approach delivered in patient's normal environment with sustained herbal programme and lifestyle framework — primary Rasayana approach delivered in contemporary Ayurvedic practice; constitutional-matched programme design integrating herbal preparations, Aachara Rasayana behavioural framework, dietary guidance, sustained practice integration",
        "indication": [
          { "@type": "MedicalCondition", "name": "Sustained Vitality Maintenance" },
          { "@type": "MedicalCondition", "name": "Healthy Ageing" },
          { "@type": "MedicalCondition", "name": "Constitutional Wellness Support" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Medhya Rasayana Cognitive Rejuvenation",
        "alternateName": ["Ayurvedic Cognitive Rejuvenation"],
        "procedureType": "Ayurvedic Rejuvenation Programme",
        "howPerformed": "Dedicated classical Ayurvedic category for cognitive rejuvenation using classical Medhya Rasayana herbal formulations including Brahmi/Bacopa monnieri (primary Medhya herb), Shankhpushpi, Mandukaparni/Gotu Kola, Yashtimadhu supportive, Guduchi — matched to individual constitutional presentation",
        "indication": [
          { "@type": "MedicalCondition", "name": "Cognitive Function Support" },
          { "@type": "MedicalCondition", "name": "Sustained Focus and Memory Support" },
          { "@type": "MedicalCondition", "name": "Age-Related Cognitive Concerns" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Aachara Rasayana Behavioural Framework",
        "alternateName": ["Behavioural Ayurvedic Rejuvenation"],
        "procedureType": "Ayurvedic Rejuvenation Framework",
        "howPerformed": "Classical framework of virtuous conduct, positive relationships, ethical living, sustained wellness practices — foundational for all Rasayana approaches. Includes Dinacharya (daily routine), Ritucharya (seasonal routine), sustained yoga and meditation practice, adequate sleep with sleep hygiene, appropriate diet, sustained learning, sustained physical activity"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Chyawanprash Prescription",
        "alternateName": ["Most Famous Classical Rasayana Preparation"],
        "procedureType": "Ayurvedic Rejuvenation Prescription",
        "howPerformed": "Comprehensive tissue rejuvenation formulation with Amalaki (Emblica officinalis) as primary ingredient combined with numerous traditional herbs prepared according to detailed classical protocols — prescribed matched to constitutional presentation with appropriate variation selection (regular, sugar-free for diabetic patients); requires DHA-approved pharmacy sources given quality variation"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Naimittika Rasayana Programme",
        "alternateName": ["Condition-Specific Ayurvedic Rejuvenation"],
        "procedureType": "Ayurvedic Rejuvenation Programme",
        "howPerformed": "Condition-specific rejuvenation for post-illness recovery, chronic disease management, specific system rejuvenation — matched to specific clinical presentation with coordination with modern medical care"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Kamya Rasayana Programme",
        "alternateName": ["Elective Ayurvedic Rejuvenation"],
        "procedureType": "Ayurvedic Rejuvenation Programme",
        "howPerformed": "Elective rejuvenation for wellbeing including Pranakamya for vitality, Medhakamya for cognition, Srikamya for beauty/complexion — matched to individual rejuvenation goals and constitutional pattern"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Panchakarma Preparation for Rasayana",
        "alternateName": ["Classical Rasayana Sequence Preparation"],
        "procedureType": "Ayurvedic Rejuvenation Programme",
        "howPerformed": "Classical Panchakarma detoxification preparation before intensive Rasayana for maximum benefit — bidirectional coordination with Panchakarma service enabling classical sequence"
      }
    ],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "Rasayana Ayurvedic Rejuvenation at JVC", "item": "https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Rasayana in Ayurveda?", "acceptedAnswer": { "@type": "Answer", "text": "Rasayana is one of the eight branches (Ashtanga) of classical Ayurveda — dedicated science of rejuvenation extensively described in Charaka Samhita and Sushruta Samhita with detailed traditional protocols developed over centuries. This eighth branch classical status confirms Rasayana's substantial classical importance — dedicated branch of medicine specifically for rejuvenation science. Classical texts identify Rasayana's threefold aim: prevention and delay of degenerative changes, restoration of vitality in depleted states, longevity through sustained wellness practice." } },
        { "@type": "Question", "name": "Is Rasayana an anti-ageing treatment?", "acceptedAnswer": { "@type": "Answer", "text": "Realistic framing important: classical Rasayana is fundamentally distinct from Western anti-ageing wellness marketing. Rasayana supports sustained vitality maintenance, cognitive function support, immunity building, and healthy ageing through classical Ayurvedic rejuvenation science. Rasayana does not promise anti-ageing miracle, immortality, or dramatic transformation. Classical Rasayana is sustained wellness practice framework requiring sustained practice for sustained benefit." } },
        { "@type": "Question", "name": "What are the different types of Rasayana?", "acceptedAnswer": { "@type": "Answer", "text": "Classical Ayurvedic texts describe multiple categories: Kutipraveshika Rasayana (indoor intensive rejuvenation of primarily classical historical interest); Vatatapika Rasayana (practical modern Rasayana delivered in patient's normal environment — primary contemporary approach); Aachara Rasayana (behavioural/lifestyle rejuvenation — foundational for all approaches); Naimittika Rasayana (condition-specific rejuvenation); Kamya Rasayana (elective rejuvenation for wellbeing); Medhya Rasayana (dedicated cognitive rejuvenation)." } },
        { "@type": "Question", "name": "What is Chyawanprash and how is it used in Rasayana?", "acceptedAnswer": { "@type": "Answer", "text": "Chyawanprash is the most famous classical Rasayana preparation — comprehensive tissue rejuvenation formulation with Amalaki (Emblica officinalis) as primary ingredient combined with numerous traditional herbs prepared according to detailed classical protocols. Substantial contemporary use for sustained vitality, immunity support, cognitive function. Prescribed matched to constitutional presentation. Requires DHA-approved pharmacy sources given quality variation. Sugar-free variations available for diabetic patients." } },
        { "@type": "Question", "name": "What is Medhya Rasayana for cognitive support?", "acceptedAnswer": { "@type": "Answer", "text": "Medhya Rasayana is dedicated classical Ayurvedic category for cognitive rejuvenation. Classical texts describe specific herbs including Brahmi/Bacopa monnieri (primary Medhya herb), Shankhpushpi, Mandukaparni/Gotu Kola, Yashtimadhu supportive, Guduchi. Particularly relevant for demanding professional demographic seeking sustained cognitive function support. Different formulations for sustained cognitive support, memory support, sustained focus, stress-related cognitive concerns." } },
        { "@type": "Question", "name": "What is Aachara Rasayana?", "acceptedAnswer": { "@type": "Answer", "text": "Aachara Rasayana is classical Ayurvedic framework of behavioural/lifestyle rejuvenation — virtuous conduct, positive relationships, ethical living, and sustained wellness practices as fundamental foundation for all Rasayana approaches. Classical practices include ethical conduct, positive relationships, sustained learning, sustained physical activity, regular routines (Dinacharya daily routine, Ritucharya seasonal routine), sustained yoga and meditation, adequate sleep, appropriate diet. Behavioural foundation makes Rasayana herbal programmes substantially more effective." } },
        { "@type": "Question", "name": "Do I need Panchakarma before Rasayana?", "acceptedAnswer": { "@type": "Answer", "text": "Classical Ayurvedic texts emphasise Panchakarma preparation before intensive Rasayana for maximum benefit. However, not all Rasayana programmes require preceding Panchakarma — practical Vatatapika Rasayana programmes can be delivered without preceding Panchakarma for many patients. Intensive Rasayana programmes benefit substantially from preceding Panchakarma. Consultation identifies whether Panchakarma preparation appropriate." } },
        { "@type": "Question", "name": "How does Rasayana coordinate with modern medications?", "acceptedAnswer": { "@type": "Answer", "text": "Rasayana herbal programmes are pharmacologically active substances requiring appropriate coordination with modern medications particularly for patients with chronic conditions. Comprehensive medication review essential before Rasayana initiation. Coordination with prescribing doctors as appropriate. Sustained monitoring during programme. Some herbs have specific interaction considerations — Ashwagandha with sedatives and thyroid medications, Guduchi with immunosuppressants." } },
        { "@type": "Question", "name": "Is Rasayana appropriate for women during perimenopause?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — perimenopausal and post-menopausal women's Rasayana approach available with Shatavari emphasis (classical women's Rasayana herb) combined with constitutional-matched preparations, comprehensive Aachara Rasayana framework, coordination with women's health approach. Effective classical approach for sustained wellness through perimenopausal transition and beyond." } },
        { "@type": "Question", "name": "Can Rasayana help with chronic fatigue and burnout?", "acceptedAnswer": { "@type": "Answer", "text": "Constitutional restoration through Rasayana for chronic fatigue and burnout particularly prevalent in Dubai's high-performing professional demographic. Vata-Pitta constitutional patterns typical. Naimittika Rasayana approach with Ashwagandha emphasis for Vata-pacifying vitality, Chyawanprash foundation, comprehensive Aachara Rasayana framework. Sustained partnership approach." } },
        { "@type": "Question", "name": "Where in Dubai is your clinic?", "acceptedAnswer": { "@type": "Answer", "text": "DHA-licensed clinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Accessible from Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif." } },
        { "@type": "Question", "name": "Do you have female Ayurvedic doctor for Rasayana?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Dr. Ansiya is female DHA-licensed BAMS-qualified Ayurvedic doctor with Ayurvedic Rejuvenation explicitly documented in her expertise areas. Female practitioner important for cultural preferences." } },
        { "@type": "Question", "name": "Is Rasayana suitable for elderly patients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Rasayana with careful sustained approach appropriate for elderly patients. Comprehensive medication and comorbidity review essential, gentler initial protocols, careful herbal prescription with coordination of prescribing doctors, sustained gentle partnership approach. Older patients frequently benefit substantially from sustained Rasayana practice framework." } },
        { "@type": "Question", "name": "Can Rasayana replace modern medications?", "acceptedAnswer": { "@type": "Answer", "text": "No — Rasayana complements rather than replaces modern medical care. Rasayana provides sustained wellness practice framework supporting vitality and healthy ageing. Established medical conditions requiring modern medical management continue to require modern medical care. Coordination with treating doctors essential." } },
        { "@type": "Question", "name": "How long does a Rasayana programme take?", "acceptedAnswer": { "@type": "Answer", "text": "Rasayana is sustained wellness practice framework requiring sustained practice for sustained benefit. Initial comprehensive programme typically 3-6 months establishing sustained practice framework. Then sustained maintenance partnership indefinitely with periodic reassessment, seasonal adaptations, evolving programme. Long-term partnership approach — Rasayana as lifelong wellness framework." } },
        { "@type": "Question", "name": "What is the difference between authentic classical Rasayana and wellness spa Rasayana?", "acceptedAnswer": { "@type": "Answer", "text": "Authentic classical Rasayana: delivered by DHA-licensed BAMS-qualified Ayurvedic doctors, based on classical texts, includes constitutional assessment, matches classical Rasayana framework, realistic sustained wellness practice framing, coordinated with modern medical care. Commercialised wellness spa Rasayana: typically transformation programme marketing, may lack constitutional matching, may make miraculous claims inappropriate to classical tradition." } },
        { "@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": { "@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Ayurvedic Rasayana tradition), Urdu across our team." } },
        { "@type": "Question", "name": "Is Rasayana covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Rasayana programmes are wellness-focused rather than condition treatment — typically not covered by insurance. May have insurance coverage for related medical conditions with appropriate documentation. Direct billing with seven major insurers for covered elements when applicable." } },
        { "@type": "Question", "name": "Can Rasayana support immunity?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — immunity building sustained Rasayana approach with Guduchi/Amrita emphasis for immunomodulatory Rasayana, Chyawanprash foundation, constitutional matching, comprehensive Aachara Rasayana framework, seasonal Ritucharya adaptations. Sustained approach appropriate for sustained immunity building." } },
        { "@type": "Question", "name": "How do I book Rasayana consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Three ways: WhatsApp specifying Rasayana consultation ideally with Dr. Ansiya; call 9AM-9PM seven days a week; book online. Please bring: description of rejuvenation goals, current medications and medical conditions, any previous Ayurvedic experience, cultural preferences, insurance card if applicable, specific questions and goals." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Rasayana Ayurvedic Rejuvenation at Our JVC Clinic Dubai — Classical Rasayana Tantra Tradition",
      "url": "https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/",
      "about": [
        { "@type": "MedicalProcedure", "name": "Rasayana Ayurvedic Rejuvenation" },
        { "@type": "MedicalProcedure", "name": "Vatatapika Rasayana" },
        { "@type": "MedicalProcedure", "name": "Medhya Rasayana" },
        { "@type": "MedicalProcedure", "name": "Aachara Rasayana" },
        { "@type": "MedicalProcedure", "name": "Chyawanprash Prescription" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-07",
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
      "medicalSpecialty": ["Ayurveda", "Ayurvedic Rejuvenation", "Rasayana", "Integrative Medicine"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Rasayana Ayurvedic Rejuvenation",
        "Rasayana Tantra Classical Ayurveda",
        "Ashtanga Ayurveda Eight Branches",
        "Vatatapika Rasayana Practical Modern Approach",
        "Kutipraveshika Rasayana Classical Understanding",
        "Aachara Rasayana Behavioural Framework",
        "Naimittika Rasayana Condition-Specific Rejuvenation",
        "Kamya Rasayana Elective Rejuvenation",
        "Medhya Rasayana Cognitive Rejuvenation",
        "Pranakamya Rasayana for Vitality",
        "Medhakamya Rasayana for Cognition",
        "Srikamya Rasayana for Beauty and Complexion",
        "Chyawanprash Classical Rasayana Preparation",
        "Amalaki Rasayana",
        "Brahma Rasayana",
        "Ashwagandha Vata-Pacifying Rasayana",
        "Shatavari Women's Rasayana",
        "Guduchi Immunomodulatory Rasayana",
        "Brahmi Bacopa Monnieri Medhya Rasayana",
        "Shankhpushpi Medhya Rasayana",
        "Mandukaparni Gotu Kola Medhya Rasayana",
        "Triphala Foundational Rasayana",
        "Yashtimadhu Licorice Rasayana",
        "Perimenopausal Women's Rasayana",
        "Post-Illness Naimittika Rasayana",
        "Corporate Wellness Rasayana",
        "Dinacharya Daily Routine Framework",
        "Ritucharya Seasonal Routine Framework",
        "Panchakarma Preparation for Rasayana",
        "Nadi Pareeksha",
        "Prakriti and Vikriti Constitutional Assessment",
        "Kerala Ayurvedic Rasayana Tradition"
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
      "sameAs": ["https://www.facebook.com/[handle]", "https://www.instagram.com/[handle]", "https://www.linkedin.com/company/[handle]", "https://www.google.com/maps/place/[place_id]"],
      "contactPoint": { "@type": "ContactPoint", "telephone": "[Phone]", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"] }
    }
  ];

  return (
    <>
      <Head>
        <title>Rasayana Ayurvedic Rejuvenation JVC | Classical Rasayana Tantra | Vedara</title>
        <meta name="description" content="Authentic classical Rasayana Ayurvedic rejuvenation at our JVC clinic Dubai. Rasayana Tantra tradition. Female DHA-licensed doctor. Chyawanprash, Medhya Rasayana, Aachara Rasayana. Multi-language." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Rasayana Ayurvedic Rejuvenation at Our JVC Clinic Dubai — Classical Rasayana Tantra Tradition | Vedara Care" />
        <meta property="og:description" content="Authentic classical Rasayana Ayurvedic rejuvenation at Vedara Care JVC clinic, walking distance from Circle Mall. Rasayana Tantra — one of eight branches of classical Ayurveda. Female DHA-licensed BAMS Ayurvedic doctor Dr. Ansiya with Ayurvedic Rejuvenation expertise. Chyawanprash foundation, Medhya Rasayana cognitive, Aachara Rasayana behavioural framework. Multi-language." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/rasayana-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/rasayana-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rasayana Ayurvedic Rejuvenation JVC | Classical Rasayana Tantra | Vedara" />
        <meta name="twitter:description" content="DHA-licensed classical Rasayana rejuvenation at JVC. Female doctor. Chyawanprash, Medhya Rasayana." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/rasayana-ayurveda-jvc.jpg" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...rasayanaJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...rasayanaJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-[#F0EBE3]"
          data={rasayanaJvcMechanism}
          showscetion={true}
        />

        {/* Section 4: SciaticaTypes — Conditions Addressed */}
        <SciaticaTypes
          {...rasayanaJvcTypes}
          label={rasayanaJvcTypes.label}
          bgColor={rasayanaJvcTypes.bgColor}
          title={rasayanaJvcTypes.title}
          types={rasayanaJvcTypes.types}
          description={rasayanaJvcTypes.description}
          footer={rasayanaJvcTypes.footer}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          typicalSignsLabel="Approach"
        />

        {/* Section 5: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={rasayanaJvcApproaches.bgColor}
          label={rasayanaJvcApproaches.label}
          title={rasayanaJvcApproaches.title}
          description={rasayanaJvcApproaches.intro}
          contentSections={rasayanaJvcApproaches.contentSections}
          sidebar={rasayanaJvcApproaches.sidebar}
        />

        {/* Section 6: Journey / Phases */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 0px" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-xs font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "rgb(200, 168, 127)" }}>Your Journey</div>
              <h2 className="font-display font-medium mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "rgb(31, 31, 31)" }}>What comprehensive Rasayana Ayurvedic rejuvenation looks like at our JVC clinic.</h2>
              <p className="max-w-2xl mx-auto" style={{ color: "rgb(85, 85, 85)" }}>Realistic understanding of Rasayana as sustained wellness practice framework helps set appropriate expectations for meaningful classical rejuvenation.</p>
            </div>
            <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-4 gap-8 visible">
              <div className="p-7 flex flex-col gap-4" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                <div className="text-2xl" style={{ color: "rgb(200, 168, 127)" }}>◎</div>
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase font-medium mb-1" style={{ color: "rgb(200, 168, 127)" }}>Phase 1 · Weeks 1–2</div>
                  <h3 className="font-display font-medium leading-[1.3]" style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }}>Comprehensive Assessment and Foundation</h3>
                </div>
                <p className="text-sm leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>90-minute initial consultation with Dr. Ansiya identifying constitutional pattern, rejuvenation goals, digestive vitality, medications and comorbidities, cognitive and sleep patterns. Realistic Rasayana framing discussion — sustained wellness practice rather than transformation programme. Personalised Rasayana programme design. Foundation Aachara Rasayana practices initiated.</p>
              </div>
              <div className="p-7 flex flex-col gap-4" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                <div className="text-2xl" style={{ color: "rgb(200, 168, 127)" }}>◑</div>
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase font-medium mb-1" style={{ color: "rgb(200, 168, 127)" }}>Phase 2 · Weeks 2–8</div>
                  <h3 className="font-display font-medium leading-[1.3]" style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }}>Rasayana Programme Initiation</h3>
                </div>
                <p className="text-sm leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>Rasayana programme initiation with Chyawanprash foundation, constitutional-matched herbs, Medhya Rasayana when cognitive support relevant, Aachara Rasayana framework, Dinacharya establishment, yoga and meditation integration. Initial improvements often visible — improved vitality, better sleep, improved cognitive clarity.</p>
              </div>
              <div className="p-7 flex flex-col gap-4" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                <div className="text-2xl" style={{ color: "rgb(200, 168, 127)" }}>â—</div>
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase font-medium mb-1" style={{ color: "rgb(200, 168, 127)" }}>Phase 3 · Weeks 8–16</div>
                  <h3 className="font-display font-medium leading-[1.3]" style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }}>Consolidation and Sustained Practice</h3>
                </div>
                <p className="text-sm leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>Continued Rasayana with sustained practice consolidation. Substantial improvement typically apparent — sustained vitality, improved cognitive function, better immunity and resilience, sustained better sleep, Aachara Rasayana practices becoming established habits. Programme adjustments based on response.</p>
              </div>
              <div className="p-7 flex flex-col gap-4" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                <div className="text-2xl" style={{ color: "rgb(200, 168, 127)" }}>✦</div>
                <div>
                  <div className="text-xs tracking-[0.1em] uppercase font-medium mb-1" style={{ color: "rgb(200, 168, 127)" }}>Phase 4 · Month 4+</div>
                  <h3 className="font-display font-medium leading-[1.3]" style={{ fontSize: "20px", color: "rgb(31, 31, 31)" }}>Sustained Rasayana Practice Partnership</h3>
                </div>
                <p className="text-sm leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>Transitioned to sustained wellness practice partnership. Sustained herbal programme adjustments based on constitutional patterns and life circumstances. Seasonal Ritucharya adaptations. Periodic reassessment consultations. Long-term partnership supporting sustained wellness practice — Rasayana as lifelong wellness framework.</p>
              </div>
            </div>
            <div className="mt-16 grid lg:grid-cols-2 gap-8">
              <div className="p-8" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", border: "1px solid rgba(200, 168, 127, 0.2)" }}>
                <div className="text-xs font-medium tracking-[0.1em] uppercase mb-4" style={{ color: "rgb(200, 168, 127)" }}>What classical Rasayana can achieve</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Sustained vitality maintenance for healthy ageing</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Cognitive function support through Medhya Rasayana</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Sustained immunity and resilience building</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Post-illness constitutional recovery (Naimittika Rasayana)</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Perimenopausal and post-menopausal women's rejuvenation</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Sustained stress resilience through Aachara Rasayana</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Sleep quality improvement</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Digestive vitality restoration</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(85, 85, 85)" }}><span className="mt-0.5 flex-shrink-0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#C8A87F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>Sustained wellness practice framework for professionals</div>
                </div>
              </div>
              <div className="p-8" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                <div className="text-xs font-medium tracking-[0.1em] uppercase mb-4" style={{ color: "rgb(119, 119, 119)" }}>What Rasayana does not promise</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}><span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>Anti-ageing miracle claims</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}><span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>Immortality or radical lifespan extension</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}><span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>Dramatic transformation over short timeframes</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}><span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>Reversal of established chronic degenerative conditions</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}><span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>Replacement for modern medical care for established conditions</div>
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgb(119, 119, 119)" }}><span className="flex-shrink-0 text-base leading-none mt-0.5">—</span>Guarantee of specific outcomes given individual variation</div>
                </div>
                <p className="text-sm leading-[1.7] mt-6 pt-5" style={{ color: "rgb(85, 85, 85)", borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>Rasayana is sustained wellness practice framework requiring sustained practice for sustained benefit. Rasayana herbal programmes require coordination with modern medications given pharmacological activity. Realistic framing serves patient wellbeing better than false wellness industry marketing claims.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reviews */}
        <TreatmentReviews {...rasayanaJvcReviews} />

        {/* Section 8: Team */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 0px" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-12">
              <div className="text-xs font-medium tracking-[0.14em] uppercase mb-3" style={{ color: "rgb(200, 168, 127)" }}>The Team</div>
              <h2 className="font-display font-medium mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "rgb(31, 31, 31)" }}>Ayurvedic doctors for Rasayana rejuvenation at our JVC clinic.</h2>
              <p className="max-w-2xl mx-auto leading-[1.7]" style={{ color: "rgb(85, 85, 85)" }}>DHA-licensed BAMS-qualified Ayurvedic doctors. Female practitioner (Dr. Ansiya) available. Multi-language: Arabic, English, Hindi, Malayalam, Urdu. Coordinated with modern medical care.</p>
            </div>
            <div className="fade-in grid lg:grid-cols-2 gap-8 visible">
              <div className="p-8 flex gap-6" style={{ background: "rgb(245, 240, 232)", borderRadius: "8px", border: "1px solid rgba(200, 168, 127, 0.2)" }}>
                <div className="flex-shrink-0">
                  <div className="overflow-hidden" style={{ width: "88px", height: "88px", borderRadius: "50%", background: "rgb(232, 224, 212)" }}>
                    <img alt="Dr. Ansiya, DHA-Licensed Ayurvedic Doctor" className="w-full h-full object-cover" src="/images/dr-ansiya-ayurveda-jvc.webp" loading="lazy" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs tracking-[0.1em] uppercase font-medium" style={{ color: "rgb(200, 168, 127)" }}>Lead Ayurvedic Doctor</div>
                  <h3 className="font-display font-medium text-xl" style={{ color: "rgb(31, 31, 31)" }}>Dr. Ansiya</h3>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>DHA-Licensed BAMS-Qualified Ayurvedic Doctor with Ayurvedic Rejuvenation explicitly documented in her expertise areas. Female practitioner. Kerala Ayurvedic training with classical Rasayana tradition. Chyawanprash, Medhya Rasayana, and Aachara Rasayana framework expertise.</p>
                  <a href="/doctors/dr-ansiya-ayurveda/" className="text-sm font-medium mt-1" style={{ color: "rgb(200, 168, 127)" }}>View Dr. Ansiya's full profile →</a>
                </div>
              </div>
              <div className="grid grid-rows-3 gap-4">
                <div className="p-5" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-sm mb-2" style={{ color: "rgb(31, 31, 31)" }}>Ayurvedic Therapy Team</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Trained therapists supporting Rasayana programmes with Abhyanga and other supportive therapies under doctor supervision. Cultural sensitivity. Multi-language capability.</p>
                </div>
                <div className="p-5" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-sm mb-2" style={{ color: "rgb(31, 31, 31)" }}>Coordination with Modern Medical Care</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>Comprehensive medication review before Rasayana initiation. Coordination with treating doctors for patients on chronic medications. Sustained monitoring during Rasayana programmes.</p>
                </div>
                <div className="p-5" style={{ background: "rgb(250, 247, 242)", borderRadius: "8px", border: "1px solid rgba(0, 0, 0, 0.06)" }}>
                  <h4 className="font-medium text-sm mb-2" style={{ color: "rgb(31, 31, 31)" }}>Multi-Disciplinary Team Integration</h4>
                  <p className="text-sm leading-[1.65]" style={{ color: "rgb(85, 85, 85)" }}>When Rasayana benefits from coordinated women's health, physiotherapy, dermatology, or home healthcare for elderly patients — coordinated multi-disciplinary care available at JVC clinic.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Pricing */}
        <PostnatalPricingTableImage data={rasayanaJvcPricing} />

        {/* Section 10: FAQ */}
        <FAQ
          {...rasayanaJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...rasayanaJvcLocation} />

        {/* Section 12: Final CTA */}
        <FinalCTA
          {...rasayanaJvcCTA}
          bgColor="bg-[white]"
        />

        {/* Section 13: Related Pages */}
        <section id="related" style={{ background: "rgb(245, 240, 232)", padding: "80px 0px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto", padding: "0px 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "16px", textAlign: "left" }}>Explore Further</p>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px" }}>{rasayanaJvcRelatedPages.title}</h2>
              </div>
              <a href={rasayanaJvcRelatedPages.linkHref} style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgb(200, 168, 127)", textDecoration: "none", borderBottom: "1px solid rgb(200, 168, 127)", fontWeight: 500 }}>{rasayanaJvcRelatedPages.linkText} →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
              {rasayanaJvcRelatedPages.pages.map((page, idx) => (
                <a key={idx} href={page.href} style={{ textDecoration: "none", background: "rgb(255, 255, 255)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 200ms, box-shadow 200ms", boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 12px" }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 10px 24px'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.04) 0px 2px 12px'; }}>
                  <div style={{ height: "180px", width: "100%", background: "rgb(232, 224, 212)" }}>
                    {page.image && <img src={page.image} alt={page.title} style={{ width: "100%", height: "110%", objectFit: "cover", objectPosition: "top" }} loading="lazy" />}
                  </div>
                  <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    {page.label && <p style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 8px" }}>{page.label}</p>}
                    <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>{page.title}</h4>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.65, color: "rgb(85, 85, 85)", margin: "0px" }}>{page.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 14: Related Articles */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "80px 0px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto", padding: "0px 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "16px", textAlign: "left" }}>Explore Further</p>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px" }}>Related Rasayana and Ayurvedic wellness content.</h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms", boxShadow: "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Rasayana</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Understanding Chyawanprash: The Most Famous Classical Rasayana Preparation</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>August 2026</p>
              </a>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms", boxShadow: "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Medhya Rasayana</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Medhya Rasayana for Cognitive Support: Classical Ayurvedic Approach for Dubai Professionals</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>July 2026</p>
              </a>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms", boxShadow: "none" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Aachara Rasayana</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Aachara Rasayana Framework: Behavioural Foundation for Sustained Wellness</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>June 2026</p>
              </a>
              <a href="#" style={{ textDecoration: "none", background: "rgb(245, 240, 232)", borderRadius: "8px", padding: "28px", display: "block", transition: "box-shadow 200ms" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", margin: "0px 0px 10px" }}>Classical Ayurveda</p>
                <h4 style={{ fontFamily: "Fraunces, serif", fontSize: "18px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px 0px 12px", lineHeight: 1.3 }}>Classical Rasayana vs Commercial Wellness Spa Rasayana: How to Choose Authentic Tradition</h4>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", margin: "0px" }}>May 2026</p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RasayanaAyurvedaJvc;
