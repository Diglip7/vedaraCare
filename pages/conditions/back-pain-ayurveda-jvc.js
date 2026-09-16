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
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TeamSectionGrid from '../../components/ayurveda/TeamSectionGrid';
import { Check, X } from 'lucide-react';
import {
  backPainJvcHero,
  backPainJvcIntro,
  backPainJvcMechanism,
  backPainJvcTypes,
  backPainJvcApproaches,
  backPainJvcReviews,
  backPainJvcPricing,
  backPainJvcFaqs,
  backPainJvcLocation,
  backPainJvcCTA,
  backPainJvcTeam,
  backPainJvcRelatedPages,
  backPainJvcRelatedArticles
} from '../../data/backPainAyurvedaJvcData';

const BackPainAyurvedaJvc = () => {

  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/#back-pain-ayurveda-care",
      "name": "Vedara Care Back Pain Ayurvedic Treatment JVC",
      "alternateName": ["Vedara Back Pain Ayurveda JVC", "Ayurvedic Back Pain Care JVC Dubai", "Vedara Kativasti Treatment"],
      "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Authentic Ayurvedic back pain management at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Ansiya delivering constitutional approach through Kativasti flagship back therapy, Panchakarma programmes, Abhyanga, Elakizhi, Pizhichil, herbal medicines, and lifestyle counselling. Coordinated with modern medical care and physiotherapy.",
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
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "09:00", "closes": "22:00" }
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
      "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Back Pain Treatment", "Integrative Medicine", "Traditional Medicine", "Pain Management"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Ayurvedic Back Pain Consultation" },
        { "@type": "MedicalProcedure", "name": "Kativasti Traditional Back Therapy" },
        { "@type": "MedicalProcedure", "name": "Panchakarma for Back Pain" },
        { "@type": "MedicalProcedure", "name": "Basti Medicated Enema Therapy" },
        { "@type": "MedicalProcedure", "name": "Abhyanga Oil Massage" },
        { "@type": "MedicalProcedure", "name": "Elakizhi Herbal Leaf Pouch Therapy" },
        { "@type": "MedicalProcedure", "name": "Pizhichil Oil Pouring Therapy" },
        { "@type": "MedicalProcedure", "name": "Ayurvedic Musculoskeletal Herbal Medicine" },
        { "@type": "MedicalProcedure", "name": "Constitutional Assessment (Prakriti and Vikriti)" },
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
        { "@type": "MedicalProcedure", "name": "Comprehensive Back Pain Management Programme" },
        { "@type": "MedicalProcedure", "name": "Pregnancy-Safe Back Pain Support" },
        { "@type": "MedicalProcedure", "name": "Post-Surgical Supportive Care" },
        { "@type": "MedicalProcedure", "name": "Combined Ayurvedic-Physiotherapy Back Pain Programme" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1400", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-08-21"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Low Back Pain",
      "alternateName": ["Lumbago", "Lower Back Pain"],
      "code": { "@type": "MedicalCode", "code": "M54.5", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ayurvedic Back Pain Management" },
        { "@type": "MedicalTherapy", "name": "Kativasti" },
        { "@type": "MedicalTherapy", "name": "Constitutional Ayurvedic Care" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Lumbar Spondylosis",
      "alternateName": ["Lumbar Degenerative Disc Disease", "Lumbar Spinal Osteoarthritis"],
      "code": { "@type": "MedicalCode", "code": "M47.816", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Comprehensive Ayurvedic Musculoskeletal Care" },
        { "@type": "MedicalTherapy", "name": "Kativasti Series" },
        { "@type": "MedicalTherapy", "name": "Panchakarma with Basti Emphasis" },
        { "@type": "MedicalTherapy", "name": "Guggul Preparations" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Lumbar Intervertebral Disc Displacement",
      "alternateName": ["Lumbar Disc Herniation", "Lumbar Disc Prolapse"],
      "code": { "@type": "MedicalCode", "code": "M51.26", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Coordinated Ayurvedic Supportive Care" },
        { "@type": "MedicalTherapy", "name": "Careful Kativasti Application" }
      ]
    },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Chronic Low Back Pain", "code": { "@type": "MedicalCode", "code": "M54.50", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Sciatica", "code": { "@type": "MedicalCode", "code": "M54.30", "codingSystem": "ICD-10" } },
    { "@context": "https://schema.org", "@type": "MedicalCondition", "name": "Pregnancy-Related Back Pain", "code": { "@type": "MedicalCode", "code": "O26.72", "codingSystem": "ICD-10" } },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Kativasti",
      "alternateName": ["Ayurvedic Back Pain Therapy", "Kati Basti", "Lumbar Oil Retention Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Warm medicated oil retained on lower back within a dough dam (typically black gram flour or wheat flour) for 30–45 minutes providing sustained localised therapeutic contact allowing deep tissue penetration of medicated oils",
      "bodyLocation": { "@type": "AnatomicalStructure", "name": "Lower Back" },
      "preparation": "Constitutional assessment identifies appropriate oil selection — Ksheerabala for Vata, Mahanarayana for chronic musculoskeletal conditions",
      "indication": [
        { "@type": "MedicalCondition", "name": "Low Back Pain" },
        { "@type": "MedicalCondition", "name": "Chronic Low Back Pain" },
        { "@type": "MedicalCondition", "name": "Lumbar Spondylosis" },
        { "@type": "MedicalCondition", "name": "Sciatica" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/" },
        { "@type": "ListItem", "position": 3, "name": "Back Pain Ayurvedic Treatment at JVC", "item": "https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": backPainJvcFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/#webpage",
      "name": "Back Pain Ayurvedic Treatment at Our JVC Clinic Dubai",
      "url": "https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/",
      "about": [
        { "@type": "MedicalCondition", "name": "Low Back Pain" },
        { "@type": "MedicalCondition", "name": "Chronic Low Back Pain" },
        { "@type": "MedicalCondition", "name": "Lumbar Spondylosis" },
        { "@type": "MedicalCondition", "name": "Lumbar Disc Concerns" }
      ],
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-ansiya-ayurveda/#physician" },
      "lastReviewed": "2026-08-21",
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
      "medicalSpecialty": ["Ayurveda", "Musculoskeletal Medicine", "Back Pain Treatment"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Back Pain Ayurvedic Treatment",
        "Chronic Low Back Pain",
        "Lumbar Spondylosis",
        "Sciatica",
        "Cervical Spondylosis",
        "Kativasti Therapy",
        "Panchakarma for Musculoskeletal Conditions",
        "Basti Medicated Enema",
        "Abhyanga",
        "Elakizhi Herbal Leaf Pouch Therapy",
        "Pizhichil",
        "Ayurvedic Musculoskeletal Herbal Medicine",
        "Rasnasaptakam Kwatham",
        "Guggul Preparations",
        "Pregnancy-Safe Back Pain Care",
        "Post-Surgical Ayurvedic Supportive Care",
        "Ergonomic Counselling",
        "Nadi Pareeksha",
        "Prakriti Assessment",
        "Red Flag Symptom Recognition"
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
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Semantic Entity Map — Back Pain Ayurvedic Treatment JVC",
      "description": "Structured entity graph for AI and search engine comprehension of all key medical, geographic, practitioner, and service entities referenced on this page.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "MedicalCondition", "name": "Low Back Pain", "alternateName": ["Lumbago", "Lower Back Pain"], "code": { "@type": "MedicalCode", "code": "M54.5", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "MedicalCondition", "name": "Lumbar Spondylosis", "alternateName": ["Lumbar Degenerative Disc Disease", "Lumbar Spinal Osteoarthritis"], "code": { "@type": "MedicalCode", "code": "M47.816", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 3, "item": { "@type": "MedicalCondition", "name": "Lumbar Intervertebral Disc Displacement", "alternateName": ["Lumbar Disc Herniation", "Lumbar Disc Prolapse"], "code": { "@type": "MedicalCode", "code": "M51.26", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 4, "item": { "@type": "MedicalCondition", "name": "Chronic Low Back Pain", "code": { "@type": "MedicalCode", "code": "M54.50", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 5, "item": { "@type": "MedicalCondition", "name": "Acute Lumbar Strain", "code": { "@type": "MedicalCode", "code": "S39.012A", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 6, "item": { "@type": "MedicalCondition", "name": "Sciatica", "code": { "@type": "MedicalCode", "code": "M54.30", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 7, "item": { "@type": "MedicalCondition", "name": "Pregnancy-Related Back Pain", "code": { "@type": "MedicalCode", "code": "O26.72", "codingSystem": "ICD-10" } } },
        { "@type": "ListItem", "position": 8, "item": { "@type": "MedicalProcedure", "name": "Kativasti", "alternateName": ["Kati Basti", "Lumbar Oil Retention Therapy", "Ayurvedic Back Pain Therapy"], "procedureType": "Ayurvedic Therapeutic Procedure", "description": "Flagship Ayurvedic back-focused therapy — warm medicated oil retained on lower back within dough dam for 30–45 minutes" } },
        { "@type": "ListItem", "position": 9, "item": { "@type": "MedicalProcedure", "name": "Panchakarma for Back Pain", "alternateName": ["Ayurvedic Detoxification for Musculoskeletal Conditions"], "procedureType": "Ayurvedic Therapeutic Procedure", "description": "Traditional five-action Ayurvedic detoxification with Basti emphasis for musculoskeletal Vata conditions" } },
        { "@type": "ListItem", "position": 10, "item": { "@type": "MedicalProcedure", "name": "Basti", "alternateName": ["Medicated Enema Therapy", "Ayurvedic Basti"], "procedureType": "Ayurvedic Therapeutic Procedure", "description": "Medicated enema therapy traditionally emphasised for musculoskeletal Vata-related conditions within Panchakarma" } },
        { "@type": "ListItem", "position": 11, "item": { "@type": "MedicalProcedure", "name": "Elakizhi", "alternateName": ["Herbal Leaf Pouch Therapy", "Ela Kizhi"], "procedureType": "Ayurvedic Therapeutic Procedure", "description": "Warm herbal poultices applied to affected areas providing localised therapeutic warmth and herbal delivery" } },
        { "@type": "ListItem", "position": 12, "item": { "@type": "MedicalProcedure", "name": "Pizhichil", "alternateName": ["Ayurvedic Oil Pouring Therapy"], "procedureType": "Ayurvedic Therapeutic Procedure", "description": "Continuous stream of warm medicated oil poured across body during massage for chronic musculoskeletal conditions" } },
        { "@type": "ListItem", "position": 13, "item": { "@type": "MedicalProcedure", "name": "Abhyanga", "alternateName": ["Ayurvedic Oil Massage"], "procedureType": "Ayurvedic Therapeutic Procedure", "description": "Systematic full-body medicated oil massage supporting muscular relaxation and tissue nourishment" } },
        { "@type": "ListItem", "position": 14, "item": { "@type": "MedicalProcedure", "name": "Nadi Pareeksha", "alternateName": ["Ayurvedic Pulse Diagnosis"], "procedureType": "Ayurvedic Diagnostic Method", "description": "Traditional Ayurvedic pulse examination used in constitutional assessment" } },
        { "@type": "ListItem", "position": 15, "item": { "@type": "DefinedTerm", "name": "Prakriti", "description": "Ayurvedic constitutional type — the individual's baseline physical and mental constitution", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 16, "item": { "@type": "DefinedTerm", "name": "Vikriti", "description": "Ayurvedic concept of current imbalance state relative to baseline Prakriti constitution", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 17, "item": { "@type": "DefinedTerm", "name": "Vata Dosha", "description": "Primary Ayurvedic constitutional factor governing movement and nervous system — primary driver in back pain and musculoskeletal conditions", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 18, "item": { "@type": "DefinedTerm", "name": "Kerala Ayurveda Tradition", "description": "Classical South Indian Ayurvedic tradition known for authentic Panchakarma protocols and Kativasti therapy", "inDefinedTermSet": "Ayurvedic Medicine" } },
        { "@type": "ListItem", "position": 19, "item": { "@type": "Drug", "name": "Ksheerabala Oil", "description": "Ayurvedic medicated oil used in Kativasti for Vata-predominant back pain", "nonProprietaryName": "Ksheerabala Taila" } },
        { "@type": "ListItem", "position": 20, "item": { "@type": "Drug", "name": "Mahanarayana Oil", "description": "Ayurvedic medicated oil used in Kativasti for chronic musculoskeletal conditions", "nonProprietaryName": "Mahanarayana Taila" } },
        { "@type": "ListItem", "position": 21, "item": { "@type": "Drug", "name": "Rasnasaptakam Kwatham", "description": "Ayurvedic compound preparation for musculoskeletal conditions" } },
        { "@type": "ListItem", "position": 22, "item": { "@type": "Drug", "name": "Yogaraj Guggulu", "description": "Ayurvedic Guggul preparation for musculoskeletal support and inflammation" } },
        { "@type": "ListItem", "position": 23, "item": { "@type": "Drug", "name": "Mahayogaraj Guggulu", "description": "Ayurvedic Guggul preparation for chronic musculoskeletal and neurological conditions" } },
        { "@type": "ListItem", "position": 24, "item": { "@type": "Drug", "name": "Trayodashang Guggulu", "description": "Ayurvedic Guggul preparation for Vata-related musculoskeletal conditions" } },
        { "@type": "ListItem", "position": 25, "item": { "@type": "Drug", "name": "Ashtavargam Kwatham", "description": "Ayurvedic compound preparation for Vata-related musculoskeletal and back conditions" } },
        { "@type": "ListItem", "position": 26, "item": { "@type": "Drug", "name": "Balaristam", "description": "Ayurvedic fermented preparation for musculoskeletal support and tissue nourishment" } },
        { "@type": "ListItem", "position": 27, "item": { "@type": "Drug", "name": "Dhanwantharam Capsules", "description": "Ayurvedic preparation for chronic musculoskeletal conditions and joint health" } },
        { "@type": "ListItem", "position": 28, "item": { "@type": "EducationalOccupationalCredential", "name": "BAMS", "description": "Bachelor of Ayurvedic Medicine and Surgery — foundational qualification for Ayurvedic practitioners" } },
        { "@type": "ListItem", "position": 29, "item": { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor", "description": "Dubai Health Authority license — mandatory regulatory credential for practising Ayurvedic medicine in Dubai" } },
        { "@type": "ListItem", "position": 30, "item": { "@type": "DefinedTerm", "name": "Red Flag Symptoms", "description": "Back pain symptoms requiring immediate specialist evaluation: loss of bladder/bowel control, saddle anaesthesia, progressive neurological weakness, unexplained weight loss, fever, history of cancer" } },
        { "@type": "ListItem", "position": 31, "item": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority", "alternateName": "DHA", "url": "https://www.dha.gov.ae/" } },
        { "@type": "ListItem", "position": 32, "item": { "@type": "Organization", "name": "Daman", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 33, "item": { "@type": "Organization", "name": "AXA Insurance", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 34, "item": { "@type": "Organization", "name": "Allianz Care", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 35, "item": { "@type": "Organization", "name": "Oman Insurance", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 36, "item": { "@type": "Organization", "name": "Now Health International", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 37, "item": { "@type": "Organization", "name": "Bupa Global", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 38, "item": { "@type": "Organization", "name": "MetLife", "description": "Direct-billing insurance partner" } },
        { "@type": "ListItem", "position": 39, "item": { "@type": "Place", "name": "Jumeirah Village Circle", "alternateName": "JVC", "description": "Primary clinic location — Vedara Care Polyclinic JVC, Dubai", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 40, "item": { "@type": "Place", "name": "Circle Mall", "description": "JVC landmark — walking distance from Vedara Care Polyclinic" } },
        { "@type": "ListItem", "position": 41, "item": { "@type": "Place", "name": "FIVE Jumeirah Village Hotel", "description": "JVC landmark — 3 minutes from Vedara Care Polyclinic" } },
        { "@type": "ListItem", "position": 42, "item": { "@type": "Place", "name": "JSS Private School", "description": "JVC landmark — 5 minutes from Vedara Care Polyclinic" } },
        { "@type": "ListItem", "position": 43, "item": { "@type": "Place", "name": "Sheikh Mohammed Bin Zayed Road", "description": "Primary access route to Vedara Care JVC clinic" } },
        { "@type": "ListItem", "position": 44, "item": { "@type": "Place", "name": "Al Khail Road", "description": "Primary access route to Vedara Care JVC clinic" } },
        { "@type": "ListItem", "position": 45, "item": { "@type": "Place", "name": "Dubai Marina", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 46, "item": { "@type": "Place", "name": "Downtown Dubai", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 47, "item": { "@type": "Place", "name": "Business Bay", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 48, "item": { "@type": "Place", "name": "Palm Jumeirah", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 49, "item": { "@type": "Place", "name": "Al Barsha", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 50, "item": { "@type": "Place", "name": "Dubai Hills Estate", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 51, "item": { "@type": "Place", "name": "Jumeirah Lake Towers", "alternateName": "JLT", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 52, "item": { "@type": "Place", "name": "Emirates Hills", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 53, "item": { "@type": "Place", "name": "Arabian Ranches", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 54, "item": { "@type": "Place", "name": "Mirdif", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 55, "item": { "@type": "Place", "name": "Jumeirah Village Triangle", "alternateName": "JVT", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 56, "item": { "@type": "Place", "name": "Dubai Sports City", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 57, "item": { "@type": "Place", "name": "Motor City", "containedInPlace": { "@type": "City", "name": "Dubai" } } },
        { "@type": "ListItem", "position": 58, "item": { "@type": "Place", "name": "Arjan", "containedInPlace": { "@type": "City", "name": "Dubai" } } }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Back Pain Ayurveda JVC | Kativasti | Female Doctor | Vedara Care Dubai</title>
        <meta name="description" content="Authentic Ayurvedic back pain treatment at our JVC clinic Dubai. Female DHA-licensed doctor. Kativasti, Panchakarma, herbal medicines. Multi-language. Coordinated with modern medical care." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/" />
        <meta property="og:title" content="Back Pain Ayurvedic Treatment at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Authentic Ayurvedic back pain management at Vedara Care JVC clinic, walking distance from Circle Mall. Female DHA-licensed BAMS Ayurvedic doctor Dr. Ansiya. Kativasti flagship therapy, Panchakarma, Abhyanga, Elakizhi, herbal medicines. Multi-language. Coordinated with modern medical care." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/back-pain-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/back-pain-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Back Pain Ayurveda JVC | Kativasti | Vedara" />
        <meta name="twitter:description" content="DHA-licensed authentic Ayurvedic back pain care at JVC. Female doctor. Kativasti, Panchakarma." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/back-pain-ayurveda-jvc.jpg" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...backPainJvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...backPainJvcIntro} bgColor="bg-white" />

        {/* Section 3: SciaticaTreatment — The Mechanism / Ayurvedic Approach */}
        <SciaticaTreatment
          showBorderLeft={false}
          rightContentStyle="simpleBox"
          bgColor="bg-white"
          data={backPainJvcMechanism}
        />

        {/* Section 4: SciaticaTypes — Back Pain Conditions Addressed */}
        <SciaticaTypes
          label={backPainJvcTypes.label}
          bgColor={backPainJvcTypes.bgColor}
          title={backPainJvcTypes.title}
          types={backPainJvcTypes.types}
          description={backPainJvcTypes.description}
          footer={backPainJvcTypes.footer}
          row1Columns={4}
          row2Columns={4}
          row1Count={8}
        />

        {/* Section 5: ContentWithSidebar — Treatment Components */}
        <ContentWithSidebar
          bgColor={backPainJvcApproaches.bgColor}
          label={backPainJvcApproaches.label}
          title={backPainJvcApproaches.title}
          contentSections={backPainJvcApproaches.contentSections}
          sidebar={backPainJvcApproaches.sidebar}
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
              What comprehensive Ayurvedic back pain care journey looks like at our JVC clinic.
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
              Realistic understanding of the timeline helps set appropriate expectations for meaningful outcomes.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "56px"
            }}>
              {[
                {
                  phase: "Phase 1 · Week 1",
                  title: "Assessment & Foundation",
                  body: "Comprehensive 90-minute initial consultation with Dr. Ansiya identifying back pain pattern, constitutional factors, functional impact, previous treatments, current medications, and treatment goals. Red flag symptom screening. Personalised treatment plan design. First Kativasti session may begin. Foundation lifestyle recommendations initiated. Initial herbal medicines prescribed if appropriate."
                },
                {
                  phase: "Phase 2 · Weeks 2–4",
                  title: "Active Treatment Intensive",
                  body: "Regular treatment sessions building sustained back pain improvement. Kativasti series (twice weekly typical for acute presentations, weekly for chronic patterns), possible Abhyanga integration, Elakizhi when appropriate, herbal medicine adjustments based on response, ergonomic and lifestyle implementation. Initial improvements often visible — reduced pain intensity, improved function, better sleep."
                },
                {
                  phase: "Phase 3 · Weeks 4–8",
                  title: "Sustained Improvement & Integration",
                  body: "Continued treatments at reducing frequency. Substantial improvement typically apparent — sustained pain reduction, improved functional capacity, better postural patterns, lifestyle changes becoming habits. For chronic conditions, Panchakarma programme may be initiated for constitutional reset. Sustained herbal medicine as appropriate."
                },
                {
                  phase: "Phase 4 · Month 2+",
                  title: "Long-Term Management Partnership",
                  body: "Transitioned to sustained wellness partnership with periodic Kativasti maintenance, ongoing lifestyle practices, seasonal adjustments as needed. Chronic conditions benefit from sustained partnership with periodic intensification. Some patients continue monthly maintenance Kativasti; others transition to quarterly programme."
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
                  <h4 style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "rgb(31, 31, 31)",
                    marginBottom: "12px"
                  }}>{item.title}</h4>
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
                Individual variation is substantial based on back pain severity and duration, constitutional factors, adherence to lifestyle recommendations, structural factors, and personal response. Acute back pain typically improves faster than chronic degenerative conditions.
              </p>
              <div style={{
                background: "rgb(240, 235, 227)",
                borderRadius: "8px",
                padding: "28px",
                borderLeft: "3px solid rgb(200, 168, 127)"
              }}>
                <p style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "12px",
                  color: "rgb(200, 168, 127)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px"
                }}>Honest limits of Ayurvedic back pain care</p>
                <p style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "14px",
                  color: "rgb(85, 85, 85)",
                  lineHeight: 1.75
                }}>
                  <strong style={{ color: "rgb(31, 31, 31)" }}>What Ayurvedic back pain care can achieve:</strong> Substantial reduction in pain intensity and frequency; improved functional capacity; better sleep quality; reduced dependence on pain medications with appropriate medical coordination; sustained management of chronic conditions; improved postural patterns and lifestyle sustainability.
                  <br /><br />
                  <strong style={{ color: "rgb(31, 31, 31)" }}>What Ayurvedic approach cannot achieve:</strong> Reversal of structural degenerative changes; substitute for surgical assessment in patients with red flag symptoms or severe structural conditions; guarantee of pain-free outcomes. <strong style={{ color: "rgb(192, 57, 43)" }}>Red flag symptoms (loss of bladder/bowel control, saddle anaesthesia, progressive weakness) require immediate specialist evaluation — Ayurvedic treatment is not appropriate as primary approach for these presentations.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Reviews */}
        <TreatmentReviews
          details1={backPainJvcReviews.details1}
          {...backPainJvcReviews} />

        {/* Section 8: Team */}
        <TeamSectionGrid {...backPainJvcTeam} />

        {/* Section 9: Pricing */}
        <PostnatalPricingTableImage data={backPainJvcPricing} />

        {/* Section 10: FAQ */}
        <FAQ
          {...backPainJvcFaqs}
          bgColor="bg-[#EAE3D5]"
        />

        {/* Section 11: Location */}
        <TreatmentLocation {...backPainJvcLocation} />



        {/* Section 13: Final CTA */}
        <FinalCTA
          {...backPainJvcCTA}
          bgColor="bg-[#F6F1E9]"
        />

        {/* Section 14: Related Pages */}
        <RelatedPages {...backPainJvcRelatedPages} />

        {/* Section 15: Related Articles */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: 'rgb(184, 145, 90)' }}>
                {backPainJvcRelatedArticles.label}
              </p>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontWeight: 500 }}>
                {backPainJvcRelatedArticles.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {backPainJvcRelatedArticles.articles.map((article, index) => (
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
                    <div className="pt-6 mt-auto">
                      <Link href={article.href} className="text-xs font-semibold uppercase tracking-[0.1em] hover:underline inline-flex items-center gap-1" style={{ color: 'rgb(184, 145, 90)' }}>
                        Learn more →
                      </Link>
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

export default BackPainAyurvedaJvc;
