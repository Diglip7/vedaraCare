import React from 'react';
import Head from 'next/head';
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
  nasyaBastiUdvartanaJvcHero,
  nasyaBastiUdvartanaJvcIntro,
  nasyaBastiUdvartanaJvcMechanism,
  nasyaBastiUdvartanaJvcTypes,
  nasyaBastiUdvartanaJvcApproaches,
  nasyaBastiUdvartanaJvcJourney,
  nasyaBastiUdvartanaJvcReviews,
  nasyaBastiUdvartanaJvcPricing,
  nasyaBastiUdvartanaJvcFaqs,
  nasyaBastiUdvartanaJvcLocation,
  nasyaBastiUdvartanaJvcCTA,
  nasyaBastiUdvartanaJvcTeam,
  nasyaBastiUdvartanaJvcRelatedPages
} from '../../data/nasyaBastiUdvartanaJvcData';

const NasyaBastiUdvartanaJvc = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/#specialty-therapy-care",
      "name": "Vedara Care Nasya Basti Udvartana Specialty Therapies JVC",
      "alternateName": ["Vedara Specialty Ayurvedic Therapies JVC", "Classical Ayurvedic Therapies JVC Dubai"],
      "url": "https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic classical Nasya, Basti, and Udvartana Ayurvedic specialty therapies at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. All six classical Nasya types, all classical Basti types and Yoga/Kala/Karma Basti sequences, all classical Udvartana variations. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Ansiya with Panchakarma & Ayurvedic Therapies as her #2 explicitly documented area of expertise. Bidirectional coordination with Panchakarma programme and Nadi Pareeksha foundation diagnostic. Kerala Ayurvedic classical tradition. Coordinated with modern medical care. Dedicated Panchakarma treatment facilities enabling authentic classical delivery.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 400 - AED 25,000",
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
      "medicalSpecialty": ["Ayurveda", "Panchakarma", "Ayurvedic Therapies", "Nasya Therapy", "Basti Therapy", "Udvartana Therapy", "Integrative Medicine"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Specialty Therapy Consultation" },
        { "@type": "MedicalProcedure", "name": "Nasya Therapy (All Six Classical Types)" },
        { "@type": "MedicalProcedure", "name": "Basti Therapy (All Classical Types)" },
        { "@type": "MedicalProcedure", "name": "Yoga Basti 8-Day Sequence" },
        { "@type": "MedicalProcedure", "name": "Kala Basti 16-Day Sequence" },
        { "@type": "MedicalProcedure", "name": "Karma Basti 30-Day Intensive Sequence" },
        { "@type": "MedicalProcedure", "name": "Uttar Basti Specialty Urogenital" },
        { "@type": "MedicalProcedure", "name": "Udvartana Ruksha Herbal Powder Massage" },
        { "@type": "MedicalProcedure", "name": "Udvartana Snigdha Powder-Oil Massage" },
        { "@type": "MedicalProcedure", "name": "Medhya Nasya Cognitive Rejuvenation" },
        { "@type": "MedicalProcedure", "name": "Weight Management Udvartana Programme" },
        { "@type": "MedicalProcedure", "name": "Pratimarsha Nasya Sustained Daily Practice" },
        { "@type": "MedicalProcedure", "name": "Matra Basti Sustained Practice" },
        { "@type": "MedicalProcedure", "name": "Panchakarma Programme Component Coordination" },
        { "@type": "MedicalProcedure", "name": "Combined Specialty Therapy Package" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1200", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-14"
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Nasya Ayurvedic Nasal Administration Therapy",
        "alternateName": ["Ayurvedic Nasya", "Classical Nasya Therapy", "Panchakarma Nasya Karma"],
        "procedureType": "Ayurvedic Specialty Therapy",
        "howPerformed": "Classical Ayurvedic nasal administration therapy — one of five Panchakarma Shodhana therapies extensively described in Charaka Samhita and Sushruta Samhita — following classical principle 'Nasa hi shirasa dwaram' (nose is doorway to head) providing direct therapeutic access to head and upper body structures; delivered with classical Purvakarma preparation (local Snehana with facial Abhyanga and Swedana), procedural administration with specific positioning and technique, and Paschat Karma post-procedure care (Gandusha, appropriate follow-up protocols)",
        "indication": [
          { "@type": "MedicalCondition", "name": "Cervical Spondylosis" },
          { "@type": "MedicalCondition", "name": "Chronic Sinusitis" },
          { "@type": "MedicalCondition", "name": "Chronic Headache and Migraine" },
          { "@type": "MedicalCondition", "name": "Cognitive Concerns (Medhya Component)" },
          { "@type": "MedicalCondition", "name": "Hair and Scalp Disorders" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Virechana Nasya (Shodhana Nasya)",
        "alternateName": ["Cleansing Nasya"],
        "procedureType": "Nasya Type",
        "howPerformed": "Cleansing/eliminative Nasya using stronger preparations for morbidity elimination from head region — for chronic sinusitis, chronic cough with head involvement, chronic head congestion"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Bruhana Nasya",
        "alternateName": ["Nourishing Nasya"],
        "procedureType": "Nasya Type",
        "howPerformed": "Nourishing Nasya using ghee-based and nourishing preparations for depleted states — for chronic depletion, post-illness recovery involving head region, Vata-related cognitive concerns"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Shamana Nasya",
        "alternateName": ["Pacifying Nasya"],
        "procedureType": "Nasya Type",
        "howPerformed": "Pacifying/palliative Nasya using milder preparations for dosha balancing without cleansing intensity — for chronic conditions requiring sustained gentle approach"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Pratimarsha Nasya",
        "alternateName": ["Daily Sustained Nasya Practice"],
        "procedureType": "Nasya Volume Distinction",
        "howPerformed": "Smaller daily volume Nasya (typically 2 drops per nostril) appropriate for sustained daily practice within Dinacharya framework — classically emphasised for sustained head-neck wellness"
      }
    ],
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Basti Ayurvedic Medicated Enema Therapy",
        "alternateName": ["Ayurvedic Basti", "Classical Basti Therapy", "Panchakarma Basti Karma", "Ardha Chikitsa"],
        "procedureType": "Ayurvedic Specialty Therapy",
        "howPerformed": "Classical Ayurvedic medicated enema therapy — one of five Panchakarma Shodhana therapies and considered THE most important classical therapy per Charaka Samhita's description as 'Ardha Chikitsa' (half of all treatment) — particularly essential for Vata disorders given direct therapeutic access to colon (primary Vata seat per classical framework); delivered with classical Purvakarma preparation (Snehana with medicated oil and Swedana), structured procedural administration with specific positioning, volume, temperature, and retention time matched to Basti type, and Paschat Karma post-procedure care",
        "indication": [
          { "@type": "MedicalCondition", "name": "Sciatica" },
          { "@type": "MedicalCondition", "name": "Lumbar Spondylosis" },
          { "@type": "MedicalCondition", "name": "Joint Disorders and Osteoarthritis" },
          { "@type": "MedicalCondition", "name": "Chronic Constipation" },
          { "@type": "MedicalCondition", "name": "Menstrual Disorders" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Anuvasana Basti",
        "alternateName": ["Oil-Based Nourishing Basti"],
        "procedureType": "Basti Type",
        "howPerformed": "Oil-based nourishing basti — typically smaller volume 60-90ml classical range, retained longer, providing nourishing action — for Vata-related depletion, chronic Vata disorders, sustained Vata rebalancing"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Niruha Basti (Asthapana Basti)",
        "alternateName": ["Decoction-Based Cleansing Basti", "Asthapana Basti"],
        "procedureType": "Basti Type",
        "howPerformed": "Decoction-based cleansing basti — typically larger volume 300-500ml classical range, shorter retention, providing cleansing action — for morbidity elimination, chronic Vata disorders with Ama involvement, comprehensive Vata rebalancing"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Uttar Basti",
        "alternateName": ["Urogenital Specialty Basti"],
        "procedureType": "Basti Type",
        "howPerformed": "Specialty basti administered via urogenital route for specific urogenital and gynaecological presentations — dedicated specialty procedure requiring specific practitioner expertise; female practitioner and therapist essential for female patients"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Yoga Basti 8-Day Classical Sequence",
        "alternateName": ["Yoga Basti Sequence"],
        "procedureType": "Basti Sequence",
        "howPerformed": "Classical 8-day Basti sequence combining Anuvasana and Niruha Basti in specific classical ratios — appropriate for many Vata presentations with moderate intensity"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Kala Basti 16-Day Classical Sequence",
        "alternateName": ["Kala Basti Sequence"],
        "procedureType": "Basti Sequence",
        "howPerformed": "Classical 16-day extended Basti sequence with more comprehensive coverage — for more chronic or complex Vata presentations"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Karma Basti 30-Day Intensive Sequence",
        "alternateName": ["Karma Basti Sequence"],
        "procedureType": "Basti Sequence",
        "howPerformed": "Classical 30-day intensive Basti sequence — most comprehensive Basti programme for chronic difficult presentations requiring intensive intervention"
      }
    ],
    [
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Udvartana Classical Herbal Powder Massage",
        "alternateName": ["Ayurvedic Udvartana", "Classical Rukshana Therapy", "Herbal Powder Massage"],
        "procedureType": "Ayurvedic Specialty Therapy",
        "howPerformed": "Classical Ayurvedic herbal powder massage for Rukshana (drying/lightening) therapy — distinct classical specialty therapy not part of five Panchakarma karmas but described in classical texts as important therapeutic procedure; Udvartana literally means 'upward stroke' (massage performed against hair growth direction); uses herbal powders providing drying effect on Kapha, mobilisation of stagnation, stimulation of subcutaneous tissues, lymphatic drainage promotion — distinct from Abhyanga oil massage; 45-60 minute typical session duration often followed by warm water bath",
        "indication": [
          { "@type": "MedicalCondition", "name": "Weight Management" },
          { "@type": "MedicalCondition", "name": "Kapha-Predominant Conditions" },
          { "@type": "MedicalCondition", "name": "Cellulite and Lymphatic Sluggishness" },
          { "@type": "MedicalCondition", "name": "PCOS Support (Weight Management Component)" },
          { "@type": "MedicalCondition", "name": "Kapha-Related Metabolic Presentations" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Ruksha Udvartana",
        "alternateName": ["Dry Powder Udvartana"],
        "procedureType": "Udvartana Type",
        "howPerformed": "Dry herbal powder massage — primary Udvartana form for Kapha reduction, weight management, cellulite reduction, lymphatic support"
      },
      {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Snigdha Udvartana",
        "alternateName": ["Powder-Oil Udvartana"],
        "procedureType": "Udvartana Type",
        "howPerformed": "Herbal powder mixed with small quantity of oil — milder effect appropriate for specific conditions and Vata-Kapha constitutional patterns where pure Ruksha inappropriate"
      }
    ],
    [
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Cervical Spondylosis", "code": { "@type": "MedicalCode", "code": "M47.812", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Nasya Therapy" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Sciatica", "code": { "@type": "MedicalCode", "code": "M54.30", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Basti Therapy including Kala Basti Sequence" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Sinusitis", "code": { "@type": "MedicalCode", "code": "J32.9", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Virechana Nasya" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Obesity Overweight for Weight Management", "code": { "@type": "MedicalCode", "code": "E66.9", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Ruksha Udvartana Programme" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Constipation", "code": { "@type": "MedicalCode", "code": "K59.00", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Basti Therapy" }] },
      { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Migraine", "code": { "@type": "MedicalCode", "code": "G43.909", "codingSystem": "ICD-10" }, "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Nasya Therapy" }] }
    ],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "Nasya, Basti, Udvartana Specialty Therapies at JVC", "item": "https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Nasya?", "acceptedAnswer": { "@type": "Answer", "text": "Nasya is classical Ayurvedic nasal administration therapy — one of the five classical Panchakarma Shodhana therapies extensively described in Charaka Samhita and Sushruta Samhita. Classical principle: 'Nasa hi shirasa dwaram' (the nose is the doorway to the head). Six classical Nasya types: Virechana/Shodhana (cleansing), Bruhana (nourishing), Shamana (pacifying), Navana (liquid), Avapida (juice/paste), Dhmana/Pradhamana (powder). Volume distinction: Marsha (larger volume courses) and Pratimarsha (smaller daily volume for sustained practice)." } },
        { "@type": "Question", "name": "What conditions does Nasya address?", "acceptedAnswer": { "@type": "Answer", "text": "Classical Nasya applications include cervical spondylosis and cervical presentations (Nasya classically emphasised), chronic sinusitis and nasal presentations, chronic headache and migraine, cognitive concerns as Medhya Rasayana component (Brahmi, Shankhpushpi, Mandukaparni formulations), hair and scalp disorders, mental-emotional presentations, specific eye and ENT presentations. Nasya course typically 3-7 consecutive days with Purvakarma preparation and Paschat Karma follow-up." } },
        { "@type": "Question", "name": "What is Basti?", "acceptedAnswer": { "@type": "Answer", "text": "Basti is classical Ayurvedic medicated enema therapy — one of the five classical Panchakarma Shodhana therapies and often considered THE most important classical Ayurvedic therapy per Charaka Samhita's description as 'Ardha Chikitsa' (half of all treatment) — particularly essential for Vata disorders (Vata is primary etiological factor in most disease per classical framework). Basti provides direct therapeutic access to colon which classical framework identifies as primary Vata seat." } },
        { "@type": "Question", "name": "What are the different types of Basti?", "acceptedAnswer": { "@type": "Answer", "text": "Classical Basti types: Anuvasana Basti (oil-based nourishing basti, smaller volume 60-90ml, retained longer); Niruha Basti/Asthapana Basti (decoction-based cleansing basti, larger volume 300-500ml, shorter retention); Uttar Basti (specialty urogenital basti); Matra Basti (small volume oil basti for sustained daily practice). Classical Basti sequences: Yoga Basti (8-day), Kala Basti (16-day), Karma Basti (30-day intensive)." } },
        { "@type": "Question", "name": "What conditions does Basti address?", "acceptedAnswer": { "@type": "Answer", "text": "Classical Basti applications: sciatica and lumbar spondylosis (Basti classically most emphasised), joint disorders and musculoskeletal Vata presentations, chronic constipation and digestive Vata presentations, menstrual disorders and gynaecological presentations (specialty Uttar Basti applications), chronic fatigue with Vata depletion, neurological presentations, hemorrhoids. Female practitioner and therapist essential for female patients." } },
        { "@type": "Question", "name": "What is Udvartana?", "acceptedAnswer": { "@type": "Answer", "text": "Udvartana is classical Ayurvedic herbal powder massage for Rukshana (drying/lightening therapy) — distinct classical specialty therapy not part of five Panchakarma karmas but described in classical texts as important therapeutic procedure. Classical meaning: Udvartana literally means 'upward stroke' (massage against hair growth direction). Distinct from Abhyanga oil massage — uses herbal powders providing different therapeutic effect. Primary application: Kapha reduction, weight management, cellulite, lymphatic support." } },
        { "@type": "Question", "name": "What is the difference between Udvartana and Abhyanga?", "acceptedAnswer": { "@type": "Answer", "text": "Udvartana uses herbal powders providing Rukshana (drying/lightening) effect — primarily for Kapha reduction and weight management. Abhyanga uses medicated oils providing Snehana (oleation/nourishing) effect — primarily for Vata pacification and general nourishing. Fundamentally different therapeutic effects for different clinical applications. Selection based on constitutional presentation and clinical goals — Udvartana for Kapha-predominant presentations, Abhyanga for Vata-predominant presentations." } },
        { "@type": "Question", "name": "What herbal powders are used in Udvartana?", "acceptedAnswer": { "@type": "Answer", "text": "Common classical Udvartana herbal powders: Triphala Choornam (foundational tridoshic powder), Kolakulathadi Choornam (classical formulation for Vata-Kapha presentations with musculoskeletal involvement), Nagaramotha Choornam (Cyperus rotundus — classical for Kapha reduction and weight management), Vacha Choornam (Acorus calamus — specific applications). Constitutional matching essential for appropriate herbal powder selection." } },
        { "@type": "Question", "name": "How long does each therapy course take?", "acceptedAnswer": { "@type": "Answer", "text": "Nasya course typically 3-7 consecutive days. Basti course varies by classical sequence: Yoga Basti 8 days, Kala Basti 16 days, Karma Basti 30 days intensive. Udvartana course typically 14-21 sessions delivered daily or alternate days. Extended courses possible for chronic complex presentations. Panchakarma programme coordination provides comprehensive framework when appropriate." } },
        { "@type": "Question", "name": "Do I need Nadi Pareeksha before specialty therapy?", "acceptedAnswer": { "@type": "Answer", "text": "Nadi Pareeksha foundation diagnostic strongly recommended — bidirectional coordination with Nadi Pareeksha service. Different constitutional patterns and current Vikriti states benefit from different specialty therapies and different variations within each therapy. Generic therapy selection without constitutional matching produces limited results. Comprehensive Nadi Pareeksha consultation substantially improves outcomes." } },
        { "@type": "Question", "name": "Are these therapies part of Panchakarma?", "acceptedAnswer": { "@type": "Answer", "text": "Nasya and Basti are two of five classical Panchakarma Shodhana therapies. Udvartana is a distinct classical specialty therapy not part of five Panchakarma karmas but often integrated into Panchakarma programmes as Rukshana component. Bidirectional relationship — these therapies delivered either as standalone specialty offerings or as Panchakarma programme components." } },
        { "@type": "Question", "name": "Where in Dubai is your clinic?", "acceptedAnswer": { "@type": "Answer", "text": "DHA-licensed clinic in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Dedicated Panchakarma treatment facilities enabling authentic classical specialty therapy delivery." } },
        { "@type": "Question", "name": "Do you have female Ayurvedic doctor and therapist?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Dr. Ansiya is female DHA-licensed BAMS-qualified Ayurvedic doctor with Panchakarma & Ayurvedic Therapies as her #2 explicitly documented area of expertise. Female therapist team available for female patients — culturally essential for Basti (particularly Uttar Basti) and typically preferred for Udvartana." } },
        { "@type": "Question", "name": "Are these therapies suitable for elderly patients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — specialty therapies with careful sustained approach appropriate for elderly patients. Comprehensive medication and comorbidity review essential, gentler initial protocols, careful therapy selection, coordination with treating doctors. Nasya and Basti can be particularly valuable for elderly patients with cervical/lumbar Vata presentations. Udvartana with gentler Snigdha variation when appropriate." } },
        { "@type": "Question", "name": "Can these therapies coordinate with modern medications?", "acceptedAnswer": { "@type": "Answer", "text": "Specialty therapies coordinate with modern medical care throughout — comprehensive medication review essential before therapy initiation. Some herbal preparations used in therapies have specific interaction considerations requiring careful clinical judgement. Coordination with prescribing doctors as appropriate. Sustained monitoring during therapy courses." } },
        { "@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": { "@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Ayurvedic specialty therapy tradition), Urdu across our team." } },
        { "@type": "Question", "name": "Are these therapies covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Some Ayurvedic specialty therapy coverage varies by insurance plan when medically indicated. Direct billing with seven major insurers for covered elements when applicable. Weight management Udvartana typically wellness-focused not insurance covered. Please bring insurance card for verification." } },
        { "@type": "Question", "name": "What distinguishes authentic classical delivery from wellness spa versions?", "acceptedAnswer": { "@type": "Answer", "text": "Authentic classical delivery: DHA-licensed BAMS-qualified Ayurvedic doctors, classical text-based protocols, comprehensive constitutional assessment, all classical variations available, Purvakarma-Paschat Karma framework, coordinated with modern medical care, dedicated treatment facilities. Commercialised wellness spa versions: may lack medical qualifications, may skip Purvakarma preparation, may use generic protocols without constitutional matching." } },
        { "@type": "Question", "name": "Can I do sustained daily Nasya or Basti practice?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Pratimarsha Nasya (small volume daily Nasya) appropriate for sustained daily practice within Dinacharya framework — particularly beneficial for cervical presentations and cognitive support. Matra Basti (small volume oil basti) appropriate for sustained practice consideration with periodic clinical reassessment for appropriate patients. Sustained daily specialty therapy practice classically emphasised within comprehensive wellness framework." } },
        { "@type": "Question", "name": "How do I book specialty therapy consultation?", "acceptedAnswer": { "@type": "Answer", "text": "Three ways: WhatsApp specifying specialty therapy consultation ideally with Dr. Ansiya; call 9AM-9PM seven days a week; book online. Please bring: description of specific therapy goals, current medications and medical conditions, any relevant medical reports, any previous Ayurvedic experience, cultural preferences, insurance card if applicable, specific questions." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Nasya, Basti, Udvartana Classical Ayurvedic Specialty Therapies at Our JVC Clinic Dubai",
      "url": "https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/",
      "about": [
        { "@type": "MedicalProcedure", "name": "Nasya Ayurvedic Nasal Administration Therapy" },
        { "@type": "MedicalProcedure", "name": "Basti Ayurvedic Medicated Enema Therapy" },
        { "@type": "MedicalProcedure", "name": "Udvartana Classical Herbal Powder Massage" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-09-14",
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "specialty": { "@type": "MedicalSpecialty", "name": "Ayurveda" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician",
      "name": "Dr. Ansiya",
      "url": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/",
      "medicalSpecialty": ["Ayurveda", "Panchakarma", "Ayurvedic Therapies", "Nasya", "Basti", "Udvartana", "Integrative Medicine"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Panchakarma & Ayurvedic Therapies (Documented #2 Expertise Area)",
        "Nasya Ayurvedic Nasal Administration Therapy",
        "All Six Classical Nasya Types",
        "Virechana Nasya Shodhana Nasya Cleansing",
        "Bruhana Nasya Nourishing",
        "Shamana Nasya Pacifying",
        "Navana Nasya Liquid Preparations",
        "Avapida Nasya Juice Paste",
        "Dhmana Nasya Pradhamana Nasya Powder",
        "Marsha Nasya Larger Volume Classical Courses",
        "Pratimarsha Nasya Sustained Daily Practice",
        "Anu Taila Classical Nasya Formulation",
        "Basti Ayurvedic Medicated Enema Ardha Chikitsa",
        "Anuvasana Basti Oil-Based Nourishing",
        "Niruha Basti Asthapana Basti Decoction-Based Cleansing",
        "Uttar Basti Specialty Urogenital",
        "Matra Basti Sustained Practice",
        "Yoga Basti 8-Day Classical Sequence",
        "Kala Basti 16-Day Extended Sequence",
        "Karma Basti 30-Day Intensive Sequence",
        "Dashamula Taila Classical Basti Formulation",
        "Erandmuladi Kwatha Classical Basti Formulation",
        "Udvartana Classical Herbal Powder Massage",
        "Ruksha Udvartana Dry Powder Rukshana",
        "Snigdha Udvartana Powder-Oil",
        "Vishesha Udvartana Specific Formulations",
        "Triphala Choornam Foundational Udvartana Powder",
        "Kolakulathadi Choornam Classical Vata-Kapha Formulation",
        "Nagaramotha Choornam Kapha Weight Management",
        "Vacha Choornam Specific Applications",
        "Purvakarma Snehana Swedana Preparation Framework",
        "Paschat Karma Post-Procedure Framework",
        "Rukshana Drying Lightening Therapy Principle",
        "Kerala Ayurvedic Classical Specialty Therapy Tradition"
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    }
  ];
  return (
    <>
      <Head>
        <title>Nasya Basti Udvartana Ayurvedic Specialty Therapies JVC | Vedara Dubai</title>
        <meta name="description" content="Authentic classical Nasya, Basti, Udvartana Ayurvedic specialty therapies at our JVC clinic Dubai. All classical types. Female DHA-licensed BAMS doctor Dr. Ansiya #2 Panchakarma expertise. Multi-language." />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/nasya-basti-udvartana-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/" />

        {/* Open Graph & Twitter Tags */}
        <meta property="og:title" content="Nasya, Basti, Udvartana Classical Ayurvedic Specialty Therapies at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Authentic classical Nasya (nasal therapy), Basti (medicated enema), Udvartana (herbal powder massage) specialty therapies at Vedara Care JVC clinic, walking distance from Circle Mall. All classical Nasya types, Basti sequences, Udvartana variations. Female DHA-licensed BAMS Ayurvedic doctor Dr. Ansiya with Panchakarma & Ayurvedic Therapies as #2 documented expertise. Kerala Ayurvedic classical tradition. Multi-language." />
        <meta property="og:image" content="https://vedaracare.ae/images/nasya-basti-udvartana-jvc-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/nasya-basti-udvartana-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nasya Basti Udvartana Specialty Therapies JVC | Vedara Dubai" />
        <meta name="twitter:description" content="DHA-licensed classical Nasya, Basti, Udvartana at JVC. Female doctor. Kerala Ayurvedic tradition." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/nasya-basti-udvartana-jvc-hero.webp" />

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
        <AyurvedaHero {...nasyaBastiUdvartanaJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...nasyaBastiUdvartanaJvcIntro} bgColor="bg-white" />

        {/* Section 3: The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-[#F0EBE3]"
          data={nasyaBastiUdvartanaJvcMechanism}
          showscetion={true}
        />

        {/* Section 4: Conditions Addressed */}
        <SciaticaTypes
          {...nasyaBastiUdvartanaJvcTypes}
          label={nasyaBastiUdvartanaJvcTypes.label}
          bgColor={nasyaBastiUdvartanaJvcTypes.bgColor}
          title={nasyaBastiUdvartanaJvcTypes.title}
          types={nasyaBastiUdvartanaJvcTypes.types}
          description={nasyaBastiUdvartanaJvcTypes.description}
          footer={nasyaBastiUdvartanaJvcTypes.footer}
          gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          typicalSignsLabel="Typical focus :"
        />

        {/* Section 5: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={nasyaBastiUdvartanaJvcApproaches.bgColor}
          label={nasyaBastiUdvartanaJvcApproaches.label}
          title={nasyaBastiUdvartanaJvcApproaches.title}
          description={nasyaBastiUdvartanaJvcApproaches.description}
          contentSections={nasyaBastiUdvartanaJvcApproaches.contentSections}
          sidebar={nasyaBastiUdvartanaJvcApproaches.sidebar}
        />

        {/* Section 6: Journey / Phases */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C8A87F] text-[13px] font-medium tracking-[0.1em] uppercase mb-4 text-center">YOUR JOURNEY</p>
              <h2 className="font-display font-medium text-[#1F1F1F] mb-5 leading-tight" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>
                What comprehensive Nasya, Basti, Udvartana specialty therapy delivery looks like at our JVC clinic.
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.7] max-w-[680px] mx-auto">
                Realistic understanding of specialty therapy delivery helps set appropriate expectations for meaningful classical therapeutic benefit.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-[#FAF7F2] rounded-[8px] p-7 border-t-[4px] border-[#C8A87F] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
                <p className="text-[12px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-1">Phase 1</p>
                <p className="text-[12px] text-[#777777] mb-4">Week 1</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-4 leading-snug" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Comprehensive Assessment &amp; Therapy Selection</h3>
                <p className="text-[14px] text-[#555555] leading-[1.7]">
                  Comprehensive 90-minute initial consultation with Dr. Ansiya identifying constitutional pattern (Prakriti and Vikriti), specialty therapy goals, current medications and comorbidities, therapy appropriateness screening, contraindication assessment. Appropriate therapy selection — Nasya, Basti, Udvartana or combination — with specific variation identification, course structure design, Panchakarma programme consideration, and realistic outcome framing. Nadi Pareeksha foundation diagnostic providing accurate constitutional matching.
                </p>
              </div>
              <div className="bg-[#FAF7F2] rounded-[8px] p-7 border-t-[4px] border-[#C8A87F] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
                <p className="text-[12px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-1">Phase 2</p>
                <p className="text-[12px] text-[#777777] mb-4">Weeks 1–2</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-4 leading-snug" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Purvakarma Preparation &amp; Therapy Initiation</h3>
                <p className="text-[14px] text-[#555555] leading-[1.7]">
                  Classical Purvakarma preparation appropriate for selected therapy: for Nasya, local Snehana with facial Abhyanga and Swedana; for Basti, appropriate Snehana with medicated oil and Swedana; for Udvartana, appropriate preparation. Selected therapy course initiation with classical procedural framework. Sustained monitoring during therapy delivery. Constitutional herbal prescription coordinated with therapy goals.
                </p>
              </div>
              <div className="bg-[#FAF7F2] rounded-[8px] p-7 border-t-[4px] border-[#C8A87F] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
                <p className="text-[12px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-1">Phase 3</p>
                <p className="text-[12px] text-[#777777] mb-4">Weeks 2–4</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-4 leading-snug" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Therapy Course Completion &amp; Paschat Karma</h3>
                <p className="text-[14px] text-[#555555] leading-[1.7]">
                  Completion of selected therapy course — 3–7 days for Nasya, 8–30 days for Basti sequences, 14–21 sessions for Udvartana. Classical Paschat Karma post-procedure care including specific post-procedure dietary and lifestyle guidance, appropriate rest, sustained protocol continuity. Assessment of therapy response and outcomes with follow-up consultation.
                </p>
              </div>
              <div className="bg-[#FAF7F2] rounded-[8px] p-7 border-t-[4px] border-[#C8A87F] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow">
                <p className="text-[12px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-1">Phase 4</p>
                <p className="text-[12px] text-[#777777] mb-4">Ongoing</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-4 leading-snug" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Transition to Sustained Approach or Progression</h3>
                <p className="text-[14px] text-[#555555] leading-[1.7]">
                  Transition to sustained approach appropriate for individual outcomes. Options: sustained maintenance with Pratimarsha Nasya daily practice or Matra Basti sustained practice; progression to comprehensive Panchakarma programme for patients requiring more comprehensive intervention (bidirectional coordination); sustained follow-up with periodic reassessment; Rasayana consideration for appropriate patients; coordination with sustained condition-specific treatment plans; sustained wellness partnership approach.
                </p>
              </div>
            </div>

            <div className="max-w-[720px] mx-auto">
              <p className="text-[19px] text-[#555555] leading-[1.7] mb-6">
                Realistic outcome framing essential for authentic specialty therapy delivery — meaningful therapeutic benefit for appropriate applications with classical evidence base; not miracle cures. Individual variation substantial based on constitutional pattern, therapy course completion, adherence to Paschat Karma protocols, and personal response.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#FAF7F2] rounded-[8px] p-6 border-l-[3px] border-[#C8A87F]">
                  <p className="text-[13px] tracking-[0.06em] uppercase text-[#C8A87F] font-medium mb-3">What specialty therapies can achieve</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8A87F] text-[#C8A87F] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">✓</span>
                      <span className="text-[13px] text-[#555555]">Meaningful symptomatic improvement for appropriate applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8A87F] text-[#C8A87F] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">✓</span>
                      <span className="text-[13px] text-[#555555]">Classical Ayurvedic therapeutic mechanisms with substantial evidence base</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8A87F] text-[#C8A87F] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">✓</span>
                      <span className="text-[13px] text-[#555555]">Effective coordination with modern medical care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8A87F] text-[#C8A87F] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">✓</span>
                      <span className="text-[13px] text-[#555555]">Sustained wellness support through protocol continuity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8A87F] text-[#C8A87F] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">✓</span>
                      <span className="text-[13px] text-[#555555]">Authentic classical therapy alternative to commercialised spa treatments</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FAF7F2] rounded-[8px] p-6 border-l-[3px] border-[#E8E0D4]">
                  <p className="text-[13px] tracking-[0.06em] uppercase text-[#777777] font-medium mb-3">What specialty therapies do not promise</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8D0C8] text-[#999] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">–</span>
                      <span className="text-[13px] text-[#777777]">Miracle cures or instant transformation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8D0C8] text-[#999] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">–</span>
                      <span className="text-[13px] text-[#777777]">Replacement for modern medical care for established medical conditions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8D0C8] text-[#999] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">–</span>
                      <span className="text-[13px] text-[#777777]">Guarantee of specific outcomes given individual variation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8D0C8] text-[#999] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">–</span>
                      <span className="text-[13px] text-[#777777]">Sustained benefit without appropriate protocol adherence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full border border-[#C8D0C8] text-[#999] flex items-center justify-center mr-2 flex-shrink-0 text-xs font-bold">–</span>
                      <span className="text-[13px] text-[#777777]">Benefit inappropriate to therapy indications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reviews */}
        <TreatmentReviews {...nasyaBastiUdvartanaJvcReviews} />

        {/* Section 8: Team */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C8A87F] text-[13px] font-medium tracking-[0.1em] uppercase mb-4 text-center">THE TEAM</p>
              <h2 className="font-display font-medium text-[#1F1F1F] mb-5 leading-tight" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>
                Ayurvedic doctors and therapists for specialty therapy delivery at our JVC clinic serving Dubai.
              </h2>
              <p className="text-[16px] text-[#555555] leading-[1.7] max-w-[720px] mx-auto">
                Specialty therapy delivery requires appropriate practitioner and therapist expertise for authentic classical delivery. Female practitioner (Dr. Ansiya) and female therapist team available. Multi-language: Arabic, English, Hindi, Malayalam, Urdu.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#FAF7F2] rounded-[8px] p-8 border-l-[3px] border-[#C8A87F]">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-full bg-[#F0EBE3] flex items-center justify-center flex-shrink-0 text-3xl overflow-hidden">
                    <img src="/images/dr-ansiya-ayurveda-jvc.webp" alt="Dr Ansiya BAMS Ayurvedic Doctor JVC Dubai" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-1">Lead Ayurvedic Doctor</p>
                    <h3 className="font-display font-medium text-[#1F1F1F] text-[24px] mb-1" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Dr. Ansiya</h3>
                    <p className="text-[13px] text-[#777777] mb-3">BAMS, DHA-Licensed Ayurvedic Doctor</p>
                    <p className="text-[14px] text-[#555555] leading-[1.7]">
                      Panchakarma &amp; Ayurvedic Therapies is Dr. Ansiya's #2 explicitly documented area of expertise. Female practitioner providing comprehensive specialty therapy consultation, Nadi Pareeksha foundation diagnostic, therapy selection and design, protocol supervision, and sustained follow-up. Kerala Ayurvedic training background with classical specialty therapy tradition. Expertise across all classical Nasya types, Basti types and sequences, and Udvartana variations. Cultural competence across Dubai's diverse community including Malayalam-speaking patients.
                    </p>
                    <a href="/doctors/dr-ansiya-ayurveda" className="inline-block mt-4 text-[13px] text-[#C8A87F] underline underline-offset-4 hover:text-[#B69769] transition-colors">
                      View Dr. Ansiya's full profile →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF7F2] rounded-[8px] p-8 border-l-[3px] border-[#C8A87F]">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-full bg-[#F0EBE3] flex items-center justify-center flex-shrink-0 text-3xl overflow-hidden">
                    <img src="/images/therapist.webp" alt="Kerala trained Ayurvedic therapist team JVC Dubai" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[12px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-1">Ayurvedic Therapist Team</p>
                    <h3 className="font-display font-medium text-[#1F1F1F] text-[24px] mb-1" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Classical Therapy Team</h3>
                    <p className="text-[13px] text-[#777777] mb-3">Kerala-trained, DHA-supervised Ayurvedic therapists</p>
                    <p className="text-[14px] text-[#555555] leading-[1.7]">
                      Trained Ayurvedic therapists delivering therapies under doctor supervision with appropriate technique and classical protocol adherence. Kerala Ayurvedic therapist training background. Female therapist team available for female patients — culturally essential for Basti (particularly Uttar Basti gynaecological applications) and typically preferred for Udvartana. Multi-language capability. Sustained learning and technique refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#F5F0E8] rounded-[8px] p-6">
                <span className="text-2xl mb-3 block">🏥</span>
                <h4 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-2" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Modern Medical Care Coordination</h4>
                <p className="text-[14px] text-[#555555] leading-[1.7]">
                  Coordination pathways with treating doctors for patients on chronic medications and with medical conditions. Comprehensive medication review before therapy initiation. Sustained monitoring during therapy courses. Coordination with treating specialists as appropriate.
                </p>
              </div>
              <div className="bg-[#F5F0E8] rounded-[8px] p-6">
                <span className="text-2xl mb-3 block">🤝</span>
                <h4 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-2" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Multi-Disciplinary Team Integration</h4>
                <p className="text-[14px] text-[#555555] leading-[1.7]">
                  When specialty therapies benefit from coordinated physiotherapy (particularly for sciatica Basti and cervical spondylosis Nasya), women's health for gynaecological Basti, dermatology for skin Udvartana, or home healthcare for elderly patients — coordinated multi-disciplinary care available at same JVC clinic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Pricing */}
        <PostnatalPricingTableImage data={nasyaBastiUdvartanaJvcPricing} />

        {/* Section 10: FAQ */}
        <FAQ
          {...nasyaBastiUdvartanaJvcFaqs}
          bgColor="bg-white"
          sidebarLinks={[
            { text: "Ansiya's profile", href: "/doctors/dr-ansiya-ayurveda/" },
            { text: "Ayurveda clinic pillar", href: "/ayurveda-clinic-jvc/" },
            { text: "Nadi Pareeksha assessment", href: "/treatments/nadi-pareeksha-jvc/" },
            { text: "Panchakarma Treatment in Dubai", href: "/treatments/panchakarma-dubai/" },


          ]}
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...nasyaBastiUdvartanaJvcLocation} />

        {/* Section 12: Final CTA */}
        <FinalCTA
          {...nasyaBastiUdvartanaJvcCTA}
          bgColor="bg-[white]"
        />

        {/* Section 13: Related Pages */}
        <section className="bg-[#F5F0E8] py-20 px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="text-[#C8A87F] text-[13px] font-medium tracking-[0.1em] uppercase mb-4 font-body">EXPLORE FURTHER</p>
                <h2 className="font-display font-medium text-[#1F1F1F] text-[32px] leading-tight" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Related pages for Ayurvedic wellness.</h2>
              </div>
              <a href="/treatments/" className="font-body text-[14px] text-[#C8A87F] underline underline-offset-4 hover:text-[#B69769] transition-colors">Browse all treatments →</a>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/doctors/dr-ansiya-ayurveda/" className="bg-white rounded-[8px] p-6 border border-[#F0EBE3] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-[#C8A87F] transition-all group">
                <p className="font-body text-[11px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-3">DOCTOR PROFILE</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-3 leading-snug group-hover:text-[#C8A87F] transition-colors" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Dr. Ansiya — Ayurvedic Doctor</h3>
                <p className="font-body text-[13px] text-[#555555] leading-[1.6]">Meet your Ayurvedic doctor. Female DHA-licensed BAMS practitioner with Panchakarma &amp; Ayurvedic Therapies as her #2 documented expertise.</p>
                <span className="inline-block mt-4 font-body text-[13px] text-[#C8A87F]">Learn more →</span>
              </a>
              <a href="/treatments/panchakarma-dubai/" className="bg-white rounded-[8px] p-6 border border-[#F0EBE3] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-[#C8A87F] transition-all group">
                <p className="font-body text-[11px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-3">TREATMENT</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-3 leading-snug group-hover:text-[#C8A87F] transition-colors" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Panchakarma Detoxification Dubai</h3>
                <p className="font-body text-[13px] text-[#555555] leading-[1.6]">Comprehensive Panchakarma detoxification programme — Nasya and Basti featured as Panchakarma karmas, Udvartana as Panchakarma Rukshana component. Bidirectional relationship.</p>
                <span className="inline-block mt-4 font-body text-[13px] text-[#C8A87F]">Learn more →</span>
              </a>
              <a href="/treatments/nadi-pareeksha-jvc/" className="bg-white rounded-[8px] p-6 border border-[#F0EBE3] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-[#C8A87F] transition-all group">
                <p className="font-body text-[11px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-3">DIAGNOSTIC</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-3 leading-snug group-hover:text-[#C8A87F] transition-colors" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Nadi Pareeksha Ayurvedic Assessment</h3>
                <p className="font-body text-[13px] text-[#555555] leading-[1.6]">Foundation diagnostic recommended for specialty therapy selection. Comprehensive constitutional matching for accurate Prakriti and Vikriti assessment.</p>
                <span className="inline-block mt-4 font-body text-[13px] text-[#C8A87F]">Learn more →</span>
              </a>
              <a href="/ayurveda-clinic-jvc/" className="bg-white rounded-[8px] p-6 border border-[#F0EBE3] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:border-[#C8A87F] transition-all group">
                <p className="font-body text-[11px] tracking-[0.08em] uppercase text-[#C8A87F] font-medium mb-3">PILLAR PAGE</p>
                <h3 className="font-display font-medium text-[#1F1F1F] text-[18px] mb-3 leading-snug group-hover:text-[#C8A87F] transition-colors" style={{ fontFamily: "var(--font-display, Fraunces, Georgia, serif)" }}>Ayurveda Clinic JVC</h3>
                <p className="font-body text-[13px] text-[#555555] leading-[1.6]">Broader Ayurveda pillar page. Comprehensive Ayurvedic services across all specialties at our Jumeirah Village Circle clinic.</p>
                <span className="inline-block mt-4 font-body text-[13px] text-[#C8A87F]">Learn more →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 14: Dynamic Related Content */}
        <section id="related-dynamic" style={{ background: "white", padding: "80px 0px" }}>
          <div style={{ maxWidth: "1280px", margin: "0px auto", padding: "0px 40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "16px", textAlign: "left" }}>Explore Further</p>
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "32px", fontWeight: 500, color: "rgb(31, 31, 31)", margin: "0px" }}>{nasyaBastiUdvartanaJvcRelatedPages.title}</h2>
              </div>
              <a href={nasyaBastiUdvartanaJvcRelatedPages.linkHref} style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgb(200, 168, 127)", textDecoration: "none", borderBottom: "1px solid rgb(200, 168, 127)", fontWeight: 500 }}>{nasyaBastiUdvartanaJvcRelatedPages.linkText} →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
              {nasyaBastiUdvartanaJvcRelatedPages.pages.map((page, idx) => (
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
      </main>
    </>
  );
};

export default NasyaBastiUdvartanaJvc;
