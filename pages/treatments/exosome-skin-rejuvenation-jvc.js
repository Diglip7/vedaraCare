import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  ChevronRight, Calendar, MessageCircle, MapPin, CheckCircle2,
  HelpCircle, User, Activity, ArrowRight, ShieldCheck, Clock
} from 'lucide-react';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FAQ from '../../components/home/FAQ';

const GOLD = '#C9A55A';
const INK = 'rgb(26,26,26)';
const STONE = 'rgb(107,107,107)';
const SAGE = '#F0EBE3';
const CARD_BG = '#FFFFFF';
const BORDER = '#E5DFD3';
const BG_LIGHT = '#FAF6EF';

const ExosomeSkinRejuvenationJVC = () => {
  const [activeCase, setActiveCase] = useState('case01');

  const schema1 = {
    "@context": "https://schema.org", "@type": "MedicalProcedure", "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#procedure", "name": "Exosome Skin Rejuvenation", "alternateName": ["Exosome Facial", "Topical Exosome Infusion", "Exosome Therapy", "Post-Microneedling Exosome Protocol"], "description": "Topical regenerative skin protocol using nano-sized extracellular vesicles that carry cellular signaling cargo (growth factors, proteins, mRNA, miRNA). Delivered by DHA-Licensed Aesthetician under Medical Director oversight at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Typically applied as post-procedure adjunct after microneedling, laser, or RF microneedling, or as standalone topical infusion for sensitive skin and barrier support indications.", "procedureType": "https://schema.org/TherapeuticProcedure", "bodyLocation": ["Face", "Neck", "Décolleté", "Scalp (post-procedure adjunct scope)"], "howPerformed": "The Vedara Care JVC exosome protocol runs across 10 defined steps: (1) Consultation confirmation and consent 5-10 min; (2) Cleanse and prep 5-10 min; (3) Skin analysis update 5 min; (4) Barrier disruption modality 20-40 min when adjunct-paired (microneedling 0.5-1.5mm depth, RF microneedling, laser, or HydraFacial); (5) Exosome serum application 5-10 min; (6) Absorption window 20-30 min; (7) LED photobiomodulation add-on 10-20 min (Red 630nm, NIR 830nm); (8) Cool-down and barrier support 5-10 min; (9) Post-treatment care briefing 5-10 min; (10) Next session scheduling 5 min. Total 45-75 min standalone / 90-120 min adjunct-paired.", "preparation": "Consultation and skin analysis required before first session. Patch test recommended for first-time exosome clients. Discontinue retinoids and acids 5-7 days pre-treatment. Sun protection SPF 50+ zinc-based pre and post treatment.", "followup": "Post-treatment care includes strict SPF 50+ for 7-14 days (adjunct-paired), retinoid/acid avoidance 5-7 days, gentle cleansing and ceramide barrier support products, exercise avoidance 24 hours (adjunct-paired). Course of 3-6 sessions at 2-4 week intervals followed by maintenance at 8-12 week intervals.", "status": "https://schema.org/EnrollingByInvitation", "performer": {
      "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"
    }, "isPartOf": {
      "@id": "https://vedaracare.ae/#organization"
    }, "location": {
      "@id": "https://vedaracare.ae/#medicalbusiness"
    }, "url": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/", "dateModified": "2024-03-24"
  };

  const schema2 = {
    "@context": "https://schema.org", "@type": "MedicalBusiness", "@id": "https://vedaracare.ae/#medicalbusiness", "name": "Vedara Care Polyclinic", "url": "https://vedaracare.ae", "logo": "https://vedaracare.ae/images/vedara-logo.png", "image": "https://vedaracare.ae/images/vedara-clinic-jvc.webp", "telephone": "+971555736312", "priceRange": "AED", "address": {
      "@type": "PostalAddress", "streetAddress": "Jumeirah Village Circle", "addressLocality": "Jumeirah Village Circle (JVC)", "addressRegion": "Dubai", "postalCode": "00000", "addressCountry": "AE"
    }, "geo": {
      "@type": "GeoCoordinates", "latitude": "25.0648", "longitude": "55.2016"
    }, "areaServed": [
      { "@type": "Place", "name": "Jumeirah Village Circle (JVC)" },
      { "@type": "Place", "name": "Dubai Marina" }
    ], "medicalSpecialty": ["Beauty Therapy", "Dermatology"], "medicalDirector": {
      "@id": "https://vedaracare.ae/team/medical-director/#person"
    }, "reviewedBy": {
      "@id": "https://vedaracare.ae/team/medical-director/#person"
    }, "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "09:00", "closes": "21:00" }
    ], "paymentAccepted": ["Cash", "Credit Card", "Debit Card"], "currenciesAccepted": "AED"
  };

  const schema3 = [
    {
      "@context": "https://schema.org", "@type": "Service", "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#service-standalone", "name": "Standalone Topical Exosome Infusion", "description": "Aesthetician-delivered topical exosome application without barrier-disruption adjunct — for sensitive skin, post-inflammatory hyperpigmentation recovery, and clients preferring non-invasive delivery.", "serviceType": "Aesthetic Regenerative Skincare", "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" }, "areaServed": { "@type": "Place", "name": "Jumeirah Village Circle (JVC), Dubai" }
    }
  ];

  const schema4 = {
    "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
      { "@type": "ListItem", "position": 3, "name": "Exosome Skin Rejuvenation JVC", "item": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/" }
    ]
  };

  const [activeTab, setActiveTab] = useState("What They Are");

  const tabs = ["What They Are", "Source Categories", "Delivery Method", "Mechanism Chain", "Adjunct Modalities", "Comparisons"
  ];

  const faqsList = [
    {
      question: "What is exosome skin rejuvenation?",
      answer: "Exosome skin rejuvenation is a topical regenerative protocol using nano-sized extracellular vesicles that carry cellular signaling cargo including growth factors, proteins, mRNA, and miRNA. At Vedara Care Polyclinic in JVC Dubai, the protocol is delivered by DHA-Licensed Aesthetician Arfah Owais under Medical Director oversight, typically as an adjunct to microneedling, laser, or RF microneedling."
    },
    {
      question: "How much does exosome facial cost in Dubai?",
      answer: "Exosome facial pricing at Vedara Care JVC ranges from AED [X] for standalone topical infusion to AED [X] for adjunct-paired sessions with microneedling or RF microneedling. Programme courses of 3-6 sessions offer discount pricing vs single-session sum. Consultation is confirmed at booking."
    },
    {
      question: "Is exosome facial safe?",
      answer: "Exosome facial at Vedara Care JVC is delivered as topical post-procedure application within DHA Beauty Therapy scope under Medical Director oversight. The FDA has issued safety communications regarding unapproved injectable exosome products — Vedara Care JVC does not use injectable exosome protocols outside physician-scope indication with Medical Director approval. Contraindications are reviewed at consultation."
    },
    {
      question: "What is the difference between exosomes and stem cells?",
      answer: "Exosomes are not stem cells. Exosomes are small extracellular vesicles (30-150 nanometers) that cells including stem cells release as part of cell-to-cell communication. Exosomes carry cellular signaling cargo but are not themselves capable of dividing or differentiating. Marketing that describes exosome protocols as 'stem cell facials' is technically inaccurate."
    },
    {
      question: "How is exosome facial different from PRP?",
      answer: "PRP uses your own blood, centrifuged to concentrate platelet-derived growth factors, then injected. Exosome protocols at Vedara Care JVC use topical application of exosome serums (plant-derived, platelet-derived from your blood via medical procedure, or MSC-derived), typically layered onto skin after microneedling or laser. PRP is physician-scope injection; topical exosome application is aesthetician-scope."
    },
    {
      question: "How often should I get exosome facial?",
      answer: "Typical Vedara Care JVC exosome programme cadence is 2-4 weeks between sessions across a course of 3-6 sessions, then transition to maintenance at 8-12 week intervals. Specific cadence depends on indication — post-microneedling adjunct clients follow the microneedling schedule, sensitive skin standalone infusion is typically 2-3 weeks, anti-aging complement 4 weeks."
    },
    {
      question: "What is the recovery time after exosome facial?",
      answer: "Standalone topical exosome infusion has minimal to no recovery. When exosome is adjunct-paired with microneedling, laser, or RF microneedling, downtime is 24-72 hours consistent with the barrier-disruption modality. Erythema typically resolves within 12-24 hours with the exosome + LED protocol."
    },
    {
      question: "Are exosomes FDA approved?",
      answer: "The FDA has not approved exosome products for the injectable aesthetic indications marketed by some providers. FDA has issued consumer safety communications regarding unapproved injectable exosome products. Topical exosome products used at Vedara Care JVC are applied within DHA advertising and Beauty Therapy scope framework and manufacturer-labeled topical application scope. This is an evolving regulatory space globally."
    },
    {
      question: "What sources of exosomes do you use at Vedara Care JVC?",
      answer: "Vedara Care JVC uses three exosome source categories: plant-derived (rose stem cell, edelweiss, ginseng), platelet-derived (from your own blood via medical procedure under Medical Director scope), and MSC-derived (from cultured mesenchymal stem cell lines, topical application within manufacturer-labeled scope). Source is disclosed at consultation."
    },
    {
      question: "Can I have exosome facial if I have sensitive or rosacea-prone skin?",
      answer: "Yes — sensitive and rosacea-adjacent skin is one of the primary indications for standalone topical exosome infusion at Vedara Care JVC. Plant-derived exosomes with anti-inflammatory cargo profile are typically selected. Standalone protocol avoids barrier disruption. Medical Director consultation is recommended for active rosacea."
    },
    {
      question: "Can exosome facial help with pigmentation?",
      answer: "Exosome protocols are used at Vedara Care JVC as part of post-inflammatory hyperpigmentation recovery programmes, particularly for Fitzpatrick III-VI skin tones. Exosome application supports barrier restoration and anti-inflammatory response, integrated with pigment-targeting protocols under Medical Director oversight."
    },
    {
      question: "Is exosome facial safe during pregnancy?",
      answer: "Vedara Care JVC takes a precautionary approach during pregnancy and lactation. Some exosome sources and adjunct protocols may proceed with Medical Director approval; others are deferred. Every pregnant or lactating client is reviewed individually at consultation. Microneedling adjunct is typically deferred during pregnancy."
    },
    {
      question: "How long does it take to see results?",
      answer: "Subjective response is often reported within 1-2 sessions. Measurable cumulative response typically builds across 3-6 sessions. Post-procedure recovery acceleration is observable within the first session — reduced erythema resolution time. Individual response varies; results are not guaranteed."
    },
    {
      question: "Can I combine exosome facial with Botox or fillers?",
      answer: "Yes — exosome protocols address skin quality and surface texture while injectables address dynamic wrinkles and volume. Vedara Care JVC coordinates exosome sessions between injectable appointments, typically 2 weeks before or after injectable appointments under Medical Director coordination."
    },
    {
      question: "Where in JVC is Vedara Care Polyclinic located?",
      answer: "Vedara Care Polyclinic is in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Contact us for exact building address and parking guidance."
    },
    {
      question: "Does insurance cover exosome facial in Dubai?",
      answer: "Exosome aesthetic protocols are typically not covered by health insurance in the UAE. Vedara Care JVC operates insurance on a reimbursement basis, not direct billing — clients pay at time of service and may submit reimbursement claims with their insurer per their policy terms."
    },
    {
      question: "Do you deliver exosome facial to men?",
      answer: "Yes — the exosome protocol is not gender-specific and is delivered to male clients at Vedara Care JVC. Male clients particularly seek exosome adjunct for post-procedure recovery and preventive skin quality maintenance protocols."
    },
    {
      question: "What languages does the practitioner speak?",
      answer: "Arfah Owais delivers protocols in Arabic, English, Hindi, and Urdu. Clinic reception provides support in these languages. Malayalam is available for Ayurvedic consultations with Dr. Neethu (separate vertical)."
    },
    {
      question: "What if I have a reaction after the treatment?",
      answer: "Vedara Care JVC provides a 24/7 contact protocol for post-treatment concerns. Any adverse reaction is reviewed by the Medical Director. Post-treatment care instructions include specific guidance on when to contact the clinic. Patch testing is available for first-time exosome clients."
    },
    {
      question: "How do I book an exosome consultation at JVC?",
      answer: "You can book consultation via the primary CTA on this page, via WhatsApp, or by calling the Vedara Care JVC clinic directly. Consultation is a standalone appointment — no treatment same-day — and is typically 45-60 minutes."
    }
  ];

  const schema5 = {
    "@context": "https://schema.org", "@type": "FAQPage", "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#faqpage", "mainEntity": faqsList.map(faq => ({
      "@type": "Question", "name": faq.question, "acceptedAnswer": {
        "@type": "Answer", "text": faq.answer
      }
    }))
  };

  const schema6 = {
    "@context": "https://schema.org", "@type": "HowTo", "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#howto", "name": "Vedara Care JVC Exosome Skin Rejuvenation Protocol — 10 Steps", "description": "The step-by-step protocol for delivering exosome skin rejuvenation at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai — as standalone topical infusion or paired with microneedling, laser, or RF microneedling adjunct.", "totalTime": "PT120M", "supply": [
      { "@type": "HowToSupply", "name": "Exosome serum (plant-derived, platelet-derived, or MSC-derived — source-disclosed at consultation)" },
      { "@type": "HowToSupply", "name": "Gentle enzymatic cleanser" },
      { "@type": "HowToSupply", "name": "Hyaluronic acid barrier support serum" },
      { "@type": "HowToSupply", "name": "Ceramide barrier support cream" },
      { "@type": "HowToSupply", "name": "SPF 50+ zinc-based sunscreen for post-treatment" },
      { "@type": "HowToSupply", "name": "Sterile microneedling cartridges (when adjunct-paired)" },
      { "@type": "HowToSupply", "name": "Medical-grade gloves" },
      { "@type": "HowToSupply", "name": "Cooling globes / cooling mask" }
    ], "tool": [
      { "@type": "HowToTool", "name": "Motorized microneedling device (when adjunct-paired)" },
      { "@type": "HowToTool", "name": "RF Microneedling device (when adjunct-paired)" },
      { "@type": "HowToTool", "name": "LED photobiomodulation panel (Red 630nm, NIR 830nm)" },
      { "@type": "HowToTool", "name": "Skin analysis device (baseline reference)" },
      { "@type": "HowToTool", "name": "Photography setup for documentation" }
    ], "step": [
      { "@type": "HowToStep", "position": 1, "name": "Consultation confirmation and consent", "text": "Review consultation record, updated medical history check, exosome source category disclosure, informed consent confirmation. Patch test verification if first session.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 2, "name": "Cleanse and prep", "text": "Gentle enzymatic cleanse to remove surface debris, oils, and residual products. Skin patted dry; treatment area defined.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 3, "name": "Skin analysis update", "text": "Rapid re-analysis using consultation reference points — hydration, erythema, texture — compared to baseline.", "timeRequired": "PT5M" },
      { "@type": "HowToStep", "position": 4, "name": "Barrier disruption modality (when adjunct-paired)", "text": "Microneedling at 0.5-1.5mm depth, RF Microneedling, or laser resurfacing. Standalone infusion protocol skips this step.", "timeRequired": "PT40M" },
      { "@type": "HowToStep", "position": 5, "name": "Exosome serum application", "text": "Exosome product applied to treated area in defined pattern per manufacturer protocol.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 6, "name": "Absorption window", "text": "Serum allowed to sit during transient microchannel window (adjunct-paired) or on intact skin (standalone).", "timeRequired": "PT30M" },
      { "@type": "HowToStep", "position": 7, "name": "LED photobiomodulation add-on", "text": "Red LED 630nm and Near-Infrared LED 830nm applied over treated area to support cellular response.", "timeRequired": "PT20M" },
      { "@type": "HowToStep", "position": 8, "name": "Cool-down and barrier support application", "text": "Hyaluronic acid or ceramide barrier support applied. Cooling globes for any erythema.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 9, "name": "Post-treatment care briefing", "text": "Verbal and written instruction on SPF 50+ zinc for 7-14 days, retinoid/acid avoidance 5-7 days, exercise avoidance 24 hours when adjunct-paired.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 10, "name": "Next session scheduling and documentation", "text": "Cadence confirmed at 2-4 weeks between sessions. Photo documentation with consent added to patient record.", "timeRequired": "PT5M" }
    ]
  };

  const schema7 = {
    "@context": "https://schema.org", "@type": "WebPage", "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#webpage", "url": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/", "speakable": {
      "@type": "SpeakableSpecification", "cssSelector": [".speakable-quick-answer", ".speakable-section-answer", ".speakable-faq-priority"]
    }
  };

  const schema8_medicalWebPage = {
    "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#medicalwebpage", "url": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/", "name": "Exosome Skin Rejuvenation in JVC Dubai — Vedara Care Polyclinic", "description": "DHA-Licensed aesthetician-delivered topical exosome protocol under Medical Director oversight in Jumeirah Village Circle (JVC), Dubai.", "inLanguage": "en-AE", "isPartOf": { "@id": "https://vedaracare.ae/#website" }, "about": { "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#procedure" }, "mainEntityOfPage": { "@id": "https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/#webpage" }, "audience": {
      "@type": "MedicalAudience", "audienceType": "https://schema.org/Patient"
    }, "medicalAudience": [
      { "@type": "MedicalAudience", "audienceType": "https://schema.org/Patient" }
    ], "reviewedBy": { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" }, "lastReviewed": "[PUBLISH DATE]", "dateModified": "[PUBLISH DATE]", "citation": [
      { "@type": "CreativeWork", "name": "Kim YJ et al. Exosomes derived from human umbilical cord blood mesenchymal stem cells stimulate rejuvenation of human skin. Biochemical and Biophysical Research Communications, 2017. [OPERATIONAL: verify DOI/URL]", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "Cho BS et al. Exosomes derived from human adipose tissue-derived mesenchymal stem cells alleviate atopic dermatitis. Stem Cell Research & Therapy, 2018. [OPERATIONAL: verify DOI/URL]", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "Zhang Y et al. Exosome: classification, isolation, storage, diagnostic and targeted therapy applications. International Journal of Nanomedicine, 2020. [OPERATIONAL: verify DOI/URL]", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "FDA Consumer Safety Communication on Exosome Products [OPERATIONAL: verify current URL]", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "ISCT Position Statement on Extracellular Vesicles [OPERATIONAL: verify URL]", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "ISAPS Global Survey on Aesthetic/Cosmetic Procedures 2023", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "ASDS Consumer Survey on Cosmetic Dermatologic Procedures 2024", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "Dubai Health Authority Advertising and Health Marketing Framework", "url": "[TO BE CONFIRMED]" },
      { "@type": "CreativeWork", "name": "CIBTAC-UK Beauty Therapy Curriculum Standards", "url": "[TO BE CONFIRMED]" }
    ]
  };

  const schema8_person1 = {
    "@context": "https://schema.org", "@type": "Person", "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person", "name": "Arfah Owais", "jobTitle": "DHA-Licensed Aesthetician", "worksFor": { "@id": "https://vedaracare.ae/#organization" }, "workLocation": { "@id": "https://vedaracare.ae/#medicalbusiness" }, "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional License", "name": "DHA (Dubai Health Authority) Aesthetician License" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Diploma", "name": "CIBTAC-UK Diploma (Confederation of International Beauty Therapy and Cosmetology, United Kingdom)" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "NCLC Certification" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "PMU Certification" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Specialized Training", "name": "Buccal Massage Trained" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Specialized Training", "name": "Kobido Japanese Lifting Massage Trained" }
    ], "knowsAbout": ["Exosome Topical Application", "Post-Procedure Recovery Protocols", "Microneedling", "HydraFacial", "Oxy-Geneo Facial", "Microdermabrasion", "Dermaplaning", "Advanced Facial Rejuvenation", "Customized Anti-Aging Protocols", "Peptide Infusion", "Growth Factor Infusion", "LED Photobiomodulation", "Buccal Massage", "Kobido Lifting Massage", "Gua Sha", "Facial Cupping", "Sensitive Skin Protocol Design", "Fitzpatrick IV-VI Aesthetic Delivery", "Post-Inflammatory Hyperpigmentation Recovery"
    ], "knowsLanguage": ["Arabic", "English", "Hindi", "Urdu"], "gender": "Female", "url": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/"
  };

  const schema8_person2 = {
    "@context": "https://schema.org", "@type": "Person", "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person", "name": "[Medical Director Name — OPERATIONAL: confirm]", "jobTitle": "Medical Director, DHA-Licensed Consultant Dermatologist", "worksFor": { "@id": "https://vedaracare.ae/#organization" }, "workLocation": { "@id": "https://vedaracare.ae/#medicalbusiness" }, "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional License", "name": "DHA (Dubai Health Authority) Consultant Dermatologist License" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Board Certification", "name": "[Board — OPERATIONAL: confirm]" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Postgraduate", "name": "[MBBS/MD/other — OPERATIONAL: confirm]" }
    ], "knowsAbout": ["Dermatology", "Aesthetic Medicine", "Regenerative Aesthetic Protocol Oversight", "Injectable Aesthetic Procedures", "Laser Aesthetic Procedures", "Exosome Injectable Scope", "Skin Analysis", "Contraindication Review", "DHA Advertising Compliance"
    ], "url": "https://vedaracare.ae/team/[medical-director-slug]/"
  };

  const schema8_org = {
    "@context": "https://schema.org", "@type": "Organization", "@id": "https://vedaracare.ae/#organization", "name": "Vedara Care Polyclinic", "url": "https://vedaracare.ae", "logo": "https://vedaracare.ae/images/vedara-logo.png", "sameAs": ["[Facebook URL]", "[Instagram URL]", "[LinkedIn URL]", "[GBP URL]"
    ], "medicalSpecialty": ["Physiotherapy", "Physiotherapy and Rehabilitation", "Ayurvedic Medicine", "Beauty Therapy", "Dermatology", "General Practice", "Nursing"], "employee": [
      { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" }
    ]
  };

  return (
    <div className="bg-[#FAF6EF] min-h-screen" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>
      <Head>
        <title>Exosome Skin Rejuvenation JVC Dubai | Vedara Care</title>
        <meta name="description" content="Topical exosome facial in JVC Dubai by DHA-Licensed aesthetician Arfah Owais under Medical Director oversight. Post-microneedling adjunct + standalone infusion." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />

        <meta property="og:title" content="Exosome Skin Rejuvenation in JVC, Dubai — Vedara Care Polyclinic" />
        <meta property="og:description" content="DHA-Licensed aesthetician-delivered topical exosome protocol under Medical Director oversight. Post-microneedling adjunct + standalone infusion in Jumeirah Village Circle." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/exosome-skin-rejuvenation-jvc-og.webp" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/exosome-skin-rejuvenation-jvc/" />
        <meta property="og:site_name" content="Vedara Care Polyclinic" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exosome Skin Rejuvenation JVC Dubai — Vedara Care" />
        <meta name="twitter:description" content="Topical exosome facial post-microneedling in JVC, Dubai. DHA-Licensed aesthetician under Medical Director oversight." />
        <meta name="twitter:image" content="/images/exosome-skin-rejuvenation-jvc-og.webp" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema6) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema7) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8_medicalWebPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8_person1) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8_person2) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8_org) }} />
      </Head>

      {/* Section 1: Hero */}
      <AyurvedaHero
        bgColor="bg-[#FAF6EF]"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Treatments', href: '/treatments' }, { label: 'Exosome Skin Rejuvenation', href: '/treatments/exosome-skin-rejuvenation-jvc' }]}
        label="Topical Post-Procedure & Standalone Infusion."
        title="Aesthetician-led topical exosome treatment under Medical Director supervision."
        description="Exosome Skin Rejuvenation at Vedara Care JVC is a topical regenerative protocol delivered by DHA-Licensed Aesthetician Arfah Owais (CIBTAC-UK, 8+ years) under clinical oversight from our Medical Director. Exosomes are nano-sized extracellular vesicles that carry cellular signaling cargo — growth factors, peptides, mRNA, and miRNA. We apply exosome serums topically after microneedling, laser, or RF microneedling procedures, or as a standalone infusion, within a clinically justified framework aligned with DHA and international regulatory guidance."
        image="/images/exosome-skin-rejuvenation-jvc-hero.webp"
        alt="Exosome skin rejuvenation topical serum application post-microneedling Vedara Care JVC Dubai"
        floatingCard={{ title: "Exosome facial protocol JVC aesthetician-delivered Medical Director oversight", description: "" }}
        primaryCTA="Book Consultation"
        primaryCTAHref="/book"
        secondaryCTA="WhatsApp Us"
        secondaryCTAHref="https://wa.me/971555736312"
        trustSignals={["DHA-Licensed Practitioner", "Medical Director Oversight", "JVC Clinic Location", "Languages: Arabic, English, Hindi, Urdu"]}
      />

      {/* Section 2: Speakable Quick Answer */}
      <section className="speakable-quick-answer" style={{ background: 'rgb(31, 31, 31)', padding: 'clamp(3rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0px auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>
            Voice Search &amp; AI Answer Engine
          </p>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', color: 'rgb(250, 247, 242)', lineHeight: 1.6, fontWeight: 300 }}>
            Exosome Skin Rejuvenation at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai is a topical regenerative protocol using nano-vesicles that carry cellular signaling cargo. Delivered by DHA-Licensed Aesthetician Arfah Owais under Medical Director oversight, sessions run 45 to 120 minutes and are typically paired with microneedling, laser, or RF microneedling for enhanced absorption.
          </p>
        </div>
      </section>



      {/* Section 3: At a Glance */}
      <section style={{ background: 'rgb(240, 235, 227)', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>At a Glance</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '1rem' }}>Fast Facts</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0px' }}>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ marginTop: '2rem' }}>
            <div style={{ background: 'rgb(250, 247, 242)', borderRadius: '8px', padding: '1.5rem', borderWidth: '3px 1px 1px', borderStyle: 'solid', borderColor: 'rgb(200, 168, 127) rgb(232, 224, 212) rgb(232, 224, 212)', borderImage: 'none' }}>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>What It Is</p>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(31, 31, 31)', lineHeight: 1.6, margin: '0px' }}>Topical exosome infusion — cellular signaling nano-vesicles</p>
            </div>
            <div style={{ background: 'rgb(250, 247, 242)', borderRadius: '8px', padding: '1.5rem', borderWidth: '3px 1px 1px', borderStyle: 'solid', borderColor: 'rgb(200, 168, 127) rgb(232, 224, 212) rgb(232, 224, 212)', borderImage: 'none' }}>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Practitioner</p>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(31, 31, 31)', lineHeight: 1.6, margin: '0px' }}>Arfah Owais, DHA-Licensed Aesthetician, CIBTAC-UK</p>
            </div>
            <div style={{ background: 'rgb(250, 247, 242)', borderRadius: '8px', padding: '1.5rem', borderWidth: '3px 1px 1px', borderStyle: 'solid', borderColor: 'rgb(200, 168, 127) rgb(232, 224, 212) rgb(232, 224, 212)', borderImage: 'none' }}>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Oversight</p>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(31, 31, 31)', lineHeight: 1.6, margin: '0px' }}>Medical Director, DHA-Licensed Consultant Dermatologist</p>
            </div>
            <div style={{ background: 'rgb(250, 247, 242)', borderRadius: '8px', padding: '1.5rem', borderWidth: '3px 1px 1px', borderStyle: 'solid', borderColor: 'rgb(200, 168, 127) rgb(232, 224, 212) rgb(232, 224, 212)', borderImage: 'none' }}>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Duration</p>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(31, 31, 31)', lineHeight: 1.6, margin: '0px' }}>45–75 min standalone / 90–120 min adjunct to microneedling/laser/RF</p>
            </div>
            <div style={{ background: 'rgb(250, 247, 242)', borderRadius: '8px', padding: '1.5rem', borderWidth: '3px 1px 1px', borderStyle: 'solid', borderColor: 'rgb(200, 168, 127) rgb(232, 224, 212) rgb(232, 224, 212)', borderImage: 'none' }}>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Downtime</p>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(31, 31, 31)', lineHeight: 1.6, margin: '0px' }}>Minimal (topical) / 24–72h (when paired with barrier-disrupting procedure)</p>
            </div>
            <div style={{ background: 'rgb(250, 247, 242)', borderRadius: '8px', padding: '1.5rem', borderWidth: '3px 1px 1px', borderStyle: 'solid', borderColor: 'rgb(200, 168, 127) rgb(232, 224, 212) rgb(232, 224, 212)', borderImage: 'none' }}>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Cadence</p>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(31, 31, 31)', lineHeight: 1.6, margin: '0px' }}>Every 2–4 weeks (course of 3–6 sessions typical)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Vedara Care */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-[11px]  font-bold tracking-[0.2em] text-[#C9A961] uppercase mb-4 block" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>WHY VEDARA CARE JVC</span>
            <h2 className="text-[clamp(2rem,3vw,3rem)]  text-[#1A1A1A] leading-[1.1] mb-6" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
              Six Reasons Patients Choose Our Exosome Protocol
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed  text-[15px] mb-8 pr-4" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>
              Vedara Care JVC combines DHA-Licensed aesthetician delivery, Medical Director clinical oversight, transparent source-category positioning without brand hype, and honest regulatory framing aligned with FDA and ISCT guidance.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src="/images/exosome-vials-application.webp" alt="Exosome vials serum topical application microchannel window absorption Vedara Care" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-2/3 space-y-12">
            {[
              { num: "01", title: "DHA-Licensed Practitioner & Medical Director Oversight", desc: "Every protocol is designed under dual-professional governance — aesthetician-delivered topical application within Beauty Therapy scope, physician-scope where indicated." },
              { num: "02", title: "Honesty-First Positioning", desc: "We do not market exosomes as \"stem cell facials\" or claim standalone rejuvenation properties beyond what mechanism supports. Our language reflects DHA advertising compliance and current international regulatory guidance." },
              { num: "03", title: "Adjunct Integration Expertise", desc: "Exosome topical application is most effective when the skin barrier has been transiently disrupted. Vedara Care JVC's protocol design coordinates timing precisely with microneedling, laser, and RF microneedling." },
              { num: "04", title: "Source Transparency", desc: "We disclose the exosome source category (plant-derived, platelet-derived, or MSC-derived) in every consultation. Source affects both mechanism and regulatory profile." },
              { num: "05", title: "JVC Location Convenience", desc: "Walking distance to Circle Mall, three minutes from FIVE Jumeirah Village Hotel — accessible to Dubai Marina, JLT, Al Barsha, Motor City, Sports City, and broader Dubai catchment." },
              { num: "06", title: "Female Practitioner & Multilingual Delivery", desc: "Arfah delivers protocols in Arabic, English, Hindi, and Urdu — a culturally comfortable environment for female clients across the JVC and Dubai demographic." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 border-t border-[#E5DFD3] pt-6 group">
                <span className="text-2xl  text-[#C9A961] italic" style={{ fontFamily: "Fraunces, Georgia, serif" }}>{item.num}</span>
                <div>
                  <h3 className="text-xl  text-[#1A1A1A] mb-3 group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "Fraunces, Georgia, serif" }}>{item.title}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed  text-[15px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="speakable-section-answer" style={{ background: 'rgb(240, 235, 227)', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>Science Foundation</p>
          <div className="gold-border-left" style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'rgb(31, 31, 31)', lineHeight: 1.65 }}>
              Exosomes are extracellular vesicles measuring 30–150 nanometres that carry cellular signaling cargo including proteins, lipids, mRNA, and miRNA. In aesthetic dermatology, they are applied topically — most commonly after skin barrier disruption via microneedling, laser, or RF microneedling — to deliver regenerative signals to viable tissue and support wound healing, collagen synthesis, and anti-inflammatory response.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0px' }}>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
          </div>
          <div style={{ marginTop: '1.75rem', display: 'grid', gap: '1rem' }}>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500 }}>External Authority References</p>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, paddingLeft: '1rem', borderLeft: '1px solid rgb(232, 224, 212)', margin: '0px' }}>
              Kim YJ et al."Exosomes derived from human umbilical cord blood mesenchymal stem cells stimulate rejuvenation of human skin." Biochemical and Biophysical Research Communications, 2017.
            </p>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, paddingLeft: '1rem', borderLeft: '1px solid rgb(232, 224, 212)', margin: '0px' }}>
              Cho BS et al."Exosomes derived from human adipose tissue-derived mesenchymal stem cells alleviate atopic dermatitis." Stem Cell Research &amp; Therapy, 2018.
            </p>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, paddingLeft: '1rem', borderLeft: '1px solid rgb(232, 224, 212)', margin: '0px' }}>
              Zhang Y et al."Exosome: a review of its classification, isolation techniques, storage, diagnostic and targeted therapy applications." International Journal of Nanomedicine, 2020.
            </p>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.75rem', color: 'rgb(119, 119, 119)', fontStyle: 'italic', marginTop: '0.25rem' }}>
              The FDA has issued consumer safety communications regarding unapproved injectable exosome products. Vedara Care JVC's protocols are topical post-procedure application within DHA advertising and Beauty Therapy scope.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Science & Mechanism */}
      <section id="science" style={{ background: 'rgb(250, 247, 242)', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>Understanding the Treatment</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '1rem' }}>Exosome Skin Rejuvenation — Science &amp; Mechanism</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0px' }}>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', marginTop: '2rem', marginBottom: '2rem', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '0.375rem' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: "\"Nunito Sans\", Inter, sans-serif", padding: '0.5rem 1rem',
                  fontSize: '0.775rem',
                  fontWeight: 500,
                  borderWidth: 'medium',
                  borderStyle: 'none',
                  borderColor: 'currentcolor',
                  borderImage: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: '0.2s',
                  background: activeTab === tab ? 'rgb(200, 168, 127)' : 'transparent',
                  color: activeTab === tab ? 'rgb(255, 255, 255)' : 'rgb(85, 85, 85)'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ minHeight: '320px' }}>
            {activeTab === "What They Are" && (
              <div className="animate-fade-in">
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '1.25rem' }}>What Exosomes Actually Are</h3>
                <div>
                  <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '1rem' }}>Exosomes are a subclass of extracellular vesicles measuring 30–150 nanometres in diameter. They are released by nearly all mammalian cells as part of normal cell-to-cell communication. Their cargo — a mix of proteins, lipids, mRNA, and microRNA (miRNA) — represents the parent cell's signaling state at the moment of exosome release.</p>
                  <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '1rem' }}>In aesthetic dermatology, exosomes are of interest because their cargo includes signals relevant to skin regeneration — specifically growth factors that fibroblasts respond to (leading to collagen and elastin production), and anti-inflammatory mediators that support post-procedure recovery.</p>
                  <div style={{ background: 'rgb(240, 235, 227)', borderRadius: '8px', padding: '1.25rem', borderLeft: '3px solid rgb(200, 168, 127)' }}>
                    <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8375rem', color: 'rgb(31, 31, 31)', lineHeight: 1.7, margin: '0px' }}><strong>Important distinction:</strong> Exosomes are not stem cells. A"stem cell facial" claim is factually inaccurate — exosomes are the signaling messengers that stem cells produce, not the cells themselves.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Source Categories" && (
              <div className="animate-fade-in flex flex-col gap-4">
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '0.5rem' }}>Exosome Source Categories</h3>
                <div className="bg-[#FAF6EF] rounded-lg p-5 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h4 className="font-bold text-[#1A1A1A] text-[15px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Plant-Derived</h4>
                  </div>
                  <p className="italic text-[#C9A961] text-[13px] mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Rose stem cell, edelweiss, ginseng, aloe vera</p>
                  <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Derived from plant callus cultures. Contain plant-specific signaling molecules and antioxidant cargo. Regulatory profile: generally acceptable as topical cosmetic ingredients in most jurisdictions including UAE.</p>
                </div>
                <div className="bg-[#FAF6EF] rounded-lg p-5 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h4 className="font-bold text-[#1A1A1A] text-[15px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Platelet-Derived</h4>
                  </div>
                  <p className="italic text-[#C9A961] text-[13px] mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>From autologous platelet-rich plasma</p>
                  <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Derived from the patient's own blood after centrifugation. Contains growth factor cargo characteristic of platelet activation (PDGF, VEGF, TGF-Î²). Requires blood-draw medical procedure — physician scope at Vedara Care JVC.</p>
                </div>
                <div className="bg-[#FAF6EF] rounded-lg p-5 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h4 className="font-bold text-[#1A1A1A] text-[15px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>MSC-Derived</h4>
                  </div>
                  <p className="italic text-[#C9A961] text-[13px] mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>From mesenchymal stem cell cultures</p>
                  <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Derived from cultured stem cell lines, isolated via ultracentrifugation. Contains the broadest range of signaling cargo. Most sensitive regulatory profile — FDA has issued warnings regarding injectable MSC-derived exosome products; topical application remains an evolving space.</p>
                </div>
              </div>
            )}

            {activeTab === "Delivery Method" && (
              <div className="animate-fade-in">
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '1.25rem' }}>The Delivery Question — Why Topical, Post-Procedure</h3>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '1.5rem' }}>Intact skin barrier limits the penetration of large molecules like exosome vesicles. Direct topical application to intact skin produces minimal penetration beyond the stratum corneum. This is why aesthetic exosome protocols are typically paired with a barrier-disruption modality.</p>
                <div style={{ background: 'rgb(240, 235, 227)', borderRadius: '8px', padding: '1.5rem', borderLeft: '3px solid rgb(200, 168, 127)', marginBottom: '1.5rem' }}>
                  <p className="text-[11px]  font-bold tracking-[0.15em] text-[#C9A961] uppercase mb-3" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>ARFAH OWAIS, DHA-LICENSED AESTHETICIAN</p>
                  <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.7, margin: '0px' }}>"When a client asks for exosome facial alone, I'm honest with them — topical exosome on intact skin has limited penetration. If they want the mechanism to actually engage, we pair it with microneedling or an RF microneedling session, or we do it right after their laser. Standalone exosome infusion still has a role — mostly for barrier support in sensitive or post-inflammatory skin — but the two protocols do different things and I explain that upfront."</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-[#E5DFD3] rounded-lg p-4 bg-white">
                    <h5 className="font-bold text-[#1A1A1A] text-[14px] mb-1" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Microneedling</h5>
                    <p className="text-[#858585] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>0.5-2.5mm transient microchannels</p>
                  </div>
                  <div className="border border-[#E5DFD3] rounded-lg p-4 bg-white">
                    <h5 className="font-bold text-[#1A1A1A] text-[14px] mb-1" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Laser Resurfacing</h5>
                    <p className="text-[#858585] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Thermal microchannels</p>
                  </div>
                  <div className="border border-[#E5DFD3] rounded-lg p-4 bg-white">
                    <h5 className="font-bold text-[#1A1A1A] text-[14px] mb-1" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>RF Microneedling</h5>
                    <p className="text-[#858585] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Combined mechanical + thermal disruption</p>
                  </div>
                  <div className="border border-[#E5DFD3] rounded-lg p-4 bg-white">
                    <h5 className="font-bold text-[#1A1A1A] text-[14px] mb-1" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>HydraFacial</h5>
                    <p className="text-[#858585] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Gentler adjunct option</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Mechanism Chain" && (
              <div className="animate-fade-in">
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '1.5rem' }}>The Mechanism Chain</h3>
                <div className="space-y-4">
                  {["Barrier disruption modality (microneedling, laser, RF microneedling) creates transient microchannels", "Exosome serum applied to the treated area, allowed to sit and absorb over 20-40 minutes", "Exosomes carry cargo through the microchannel window to viable epidermal and superficial dermal tissue", "Cargo is delivered to fibroblasts, keratinocytes, and immune cells in the recipient tissue", "Fibroblasts respond to growth factor cargo — increased collagen and elastin synthesis over subsequent weeks", "Immune cells respond to anti-inflammatory cargo — reduced post-procedure erythema and edema, faster recovery", "Cumulative effect across a course of 3-6 sessions (spaced 2-4 weeks apart)"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#C9A961] text-white flex items-center justify-center  font-bold text-[13px] mt-0.5" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>{idx + 1}</div>
                      <p className="text-[#6B6B6B] text-[14px] leading-relaxed pt-1" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Adjunct Modalities" && (
              <div className="animate-fade-in flex flex-col gap-4">
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '0.5rem' }}>Adjunct Modalities We Layer With Exosomes</h3>
                <div className="bg-[#FAF6EF] rounded-lg p-4 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h5 className="font-bold text-[#1A1A1A] text-[14px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Microneedling (Mechanical)</h5>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Most common adjunct. 0.5-1.5mm depth for exosome delivery focus.</p>
                </div>
                <div className="bg-[#FAF6EF] rounded-lg p-4 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h5 className="font-bold text-[#1A1A1A] text-[14px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>RF Microneedling</h5>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Enhanced adjunct. Combines mechanical microchannel with thermal collagen stimulation.</p>
                </div>
                <div className="bg-[#FAF6EF] rounded-lg p-4 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h5 className="font-bold text-[#1A1A1A] text-[14px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Non-Ablative Laser Resurfacing</h5>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Thermal adjunct. Fractional laser creates thermal microchannels for exosome absorption.</p>
                </div>
                <div className="bg-[#FAF6EF] rounded-lg p-4 border border-[#E5DFD3]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h5 className="font-bold text-[#1A1A1A] text-[14px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>HydraFacial with Exosome Booster Module</h5>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Gentle adjunct for clients preferring non-invasive delivery; penetration is lower but barrier support is meaningful.</p>
                </div>
                <div className="bg-[#FAF6EF] rounded-lg p-4 border border-[#E5DFD3] mb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></div>
                    <h5 className="font-bold text-[#1A1A1A] text-[14px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>LED Photobiomodulation (Red 630nm, NIR 830nm)</h5>
                  </div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Post-application enhancement. Applied after exosome absorption to support cellular response.</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-sm h-[180px]">
                  <img src="/images/exosome-vials-application.webp" alt="Exosome vials serum topical application microchannel window absorption Vedara Care" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {activeTab === "Comparisons" && (
              <div className="animate-fade-in">
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '1.5rem' }}>Honest Comparison to Alternative Modalities</h3>
                <div className="space-y-6">
                  <div className="border-b border-[#E5DFD3] pb-6">
                    <h5 className="font-bold text-[#C9A961] text-[13px] uppercase tracking-wide mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>vs PRP (Platelet-Rich Plasma)</h5>
                    <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>PRP uses your own blood — more autologous, more regulatory clarity, growth factor cargo characteristic of platelets. Exosomes offer broader cargo diversity (especially MSC-derived) but with more regulatory sensitivity.</p>
                  </div>
                  <div className="border-b border-[#E5DFD3] pb-6">
                    <h5 className="font-bold text-[#C9A961] text-[13px] uppercase tracking-wide mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>vs Mesotherapy</h5>
                    <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Mesotherapy is an injection technique for delivering serums into the dermis. Exosomes can be part of mesotherapy formulations (physician-delivered) but topical exosome + microneedling is more common at Vedara Care JVC.</p>
                  </div>
                  <div className="border-b border-[#E5DFD3] pb-6">
                    <h5 className="font-bold text-[#C9A961] text-[13px] uppercase tracking-wide mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>vs Growth Factor Serums</h5>
                    <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Standalone growth factor serums (EGF, FGF) are simpler formulations. Exosomes are the biological vehicle that carries growth factors along with additional signaling cargo.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#C9A961] text-[13px] uppercase tracking-wide mb-2" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>vs Peptide Infusion (GHK-Cu, Matrixyl)</h5>
                    <p className="text-[#6B6B6B] text-[14px] leading-relaxed" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>Peptides are single molecules with defined mechanisms. Exosomes are multi-cargo vesicles with more complex signaling. Both have roles in a rejuvenation programme — they are not substitutes.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 7: Who Exosome Skin Rejuvenation Is Designed For */}
      <section className="py-24 px-6 bg-[#FAF6EF] border-t border-[#E5DFD3]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[11px]  font-bold tracking-[0.2em] text-[#C9A961] uppercase mb-4 block" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>INDICATIONS & PATIENT POPULATIONS</span>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)]  text-[#1A1A1A] leading-[1.1] mb-6" style={{ fontFamily: "Fraunces, Georgia, serif" }}>Who Exosome Skin Rejuvenation Is Designed For</h2>
            <p className="text-[#6B6B6B] leading-relaxed text-lg">
              Exosome skin rejuvenation at Vedara Care JVC serves twelve primary populations spanning post-procedure recovery timelines, sensitive skin patients, mature skin, PIH clients, wedding preparation programmes, and preventive maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 speakable-section-answer">
            {[
              { age: "AGE 25–65+", title: "Post-Microneedling Recovery Booster", desc: "The single most common indication. Exosome application is layered onto the treated area during and immediately after microneedling. Objective: enhance regenerative signaling while the transient microchannel window, accelerate erythema resolution, support collagen response." },
              { age: "AGE 30–65+", title: "Post-Laser Recovery", desc: "Following non-ablative fractional laser or ablative resurfacing treatment. Exosome topical application supports thermal injury recovery, reduces post-procedure downtime, and leverages the thermal disruption to enhance penetration." },
              { age: "AGE 35–65+", title: "Post-RF Microneedling Enhancement", desc: "RF microneedling creates combined mechanical and thermal disruption. Exosome application during the immediate post-procedure window layers regenerative signaling into the treated tissue." },
              { age: "AGE 18–60", title: "Sensitive Skin Regenerative Support", desc: "For reactive, easily irritated, or rosacea-adjacent skin where standard retinoid or acid protocols cause irritation. Standalone topical exosome infusion provides barrier support and anti-inflammatory signaling." },
              { age: "AGE 20–60, FITZPATRICK III–VI", title: "Post-Inflammatory Hyperpigmentation Recovery", desc: "Following acne resolution or procedure-induced inflammation. Exosome application supports barrier restoration and anti-inflammatory response during PIH recovery phase." },
              { age: "AGE 40–65+", title: "Mature Skin Cellular Signaling Boost", desc: <>Adjunct within a broader <Link href="/treatments/anti-aging-skin-firming-jvc/" className="text-current hover:text-[#C9A961] underline">Customized Anti-Aging Protocol</Link>. Exosomes deliver pro-collagen signaling cargo directly to the dermal-epidermal junction when paired with microneedling, supporting structural integrity and firmness.</> },
              { age: "AGE 25–50", title: "Post-Weight-Loss / Post-Pregnancy Skin Recovery", desc: "Barrier compromise following significant physiological changes. Exosome application supports gentle regenerative signaling without the intensity of clinical protocols contraindicated during lactation phases." },
              { age: "AGE 25–45", title: "Wedding Preparation Programme", desc: "Integrated within a 3–6 month bridal preparation timeline. Exosome protocol is scheduled at strategic points — typically post-microneedling adjunct 4–8 weeks pre-event, standalone barrier support 2–3 weeks pre-event." },
              { age: "AGE 20–40", title: "Post-Acne Recovery / Early Scar Remodelling", desc: "Following acne resolution during scar remodeling phase. Exosome application paired with microneedling supports collagen remodeling within acne scar tissue. Medical Director scope confirmation required for active acne cases." },
              { age: "AGE 25–60", title: "Fitzpatrick IV–VI Regenerative Protocols", desc: "For darker skin tones seeking regenerative modalities where aggressive resurfacing carries elevated PIH risk. Exosome-paired lower-depth microneedling protocols provide a lower-risk pathway. Delivery in Arabic, Hindi, Urdu, English." },
              { age: "AGE 30–45", title: "Preventive Regenerative Maintenance", desc: "Clients using exosome protocols as part of preventive skin quality maintenance rather than corrective indication. Typically 3–4 sessions annually, paired with lighter microneedling depth." },
              { age: "AGE 35–65+", title: "Post-Injectable Complement Programme", desc: "Clients already using neurotoxin or dermal filler protocols who want a skin quality complement layer. Exosome skincare sessions scheduled between injectable appointments under Medical Director oversight." }
            ].map((item, idx) => (
              <div key={idx} aria-label={`Exosome protocol for ${item.title} JVC Vedara Care`} className="bg-white p-8 rounded-2xl border border-[#E5DFD3] hover:border-[#C9A961] transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px]  font-bold tracking-[0.15em] text-[#A3A3A3] uppercase group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>{item.age}</span>
                  <span className="text-xl  text-[#C9A961] opacity-50" style={{ fontFamily: "Fraunces, Georgia, serif" }}>{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="text-xl  text-[#1A1A1A] mb-4 group-hover:text-[#C9A961] transition-colors" style={{ fontFamily: "Fraunces, Georgia, serif" }}>{item.title}</h4>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl border border-[#E5DFD3] shadow-sm">
            <h4 className="text-[12px]  font-bold tracking-[0.15em] text-[#1A1A1A] uppercase mb-6" style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif" }}>IMPORTANT SAFETY DISCLOSURE — CONTRAINDICATIONS</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm text-[#6B6B6B]">
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Active skin infection in treatment area</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Pregnancy and lactation (Medical Director review required)</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Active or history of cutaneous malignancy</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Keloid tendency in Fitzpatrick IV-VI</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Active herpes simplex outbreak</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Active autoimmune disease with skin manifestations</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Bleeding disorders with microneedling adjunct planned</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Age under 18</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Known hypersensitivity to exosome product ingredients</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Immunosuppressive therapy</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Recent isotretinoin therapy (6-month washout)</p></div>
              <div className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5"></div><p>Unrealistic outcome expectations</p></div>
            </div>
            <p className="mt-8 text-xs text-[#A3A3A3] italic">All contraindication decisions are made in consultation with our <Link href="/departments/dermatology-jvc/" className="text-current hover:text-[#C9A961] underline">Dermatology page</Link> guidelines and Medical Director.</p>
          </div>
        </div>
      </section>

      {/* Section 8: Protocol Steps */}
      <section id="protocol" style={{ background: 'white', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>The 10-Step Protocol</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '1rem' }}>How a Session at Vedara Care JVC Works</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0px' }}>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
          </div>

          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '2.5rem' }}>Total session time: <strong>45–75 min</strong> (standalone infusion) / <strong>90–120 min</strong> (with barrier-disruption adjunct).</p>

          <div style={{ display: 'grid', gap: '0.875rem' }}>
            {[
              { num: '01', title: 'Consultation Confirmation and Consent', desc: 'Review of consultation record, updated medical history check, exosome source category disclosure, informed consent confirmation. Patch test verification if first session.', time: '5–10 min' },
              { num: '02', title: 'Cleanse and Prep', desc: 'Gentle enzymatic cleanse to remove surface debris, oils, and residual products. Skin is patted dry; treatment area is defined and marked.', time: '5–10 min' },
              { num: '03', title: 'Skin Analysis Update', desc: 'Rapid re-analysis using consultation reference points — hydration, erythema, texture. Compared to baseline to inform any protocol adjustment.', time: '5 min' },
              { num: '04', title: 'Barrier Disruption Modality', desc: 'When adjunct-paired: Microneedling (0.5–1.5mm), RF Microneedling, Laser resurfacing, or HydraFacial with exosome booster module. Standalone infusion skips this step.', time: '20–40 min' },
              { num: '05', title: 'Exosome Serum Application', desc: 'Exosome product applied to treated area in defined pattern. Volume, application technique, and layering follow manufacturer protocol and Vedara Care JVC clinical governance.', time: '5–10 min' },
              { num: '06', title: 'Absorption Window', desc: 'Serum allowed to sit on skin during the transient microchannel window (adjunct-paired) or on intact skin (standalone). Gentle facial massage may be integrated to support product distribution.', time: '20–30 min' },
              { num: '07', title: 'LED Photobiomodulation Add-On', desc: 'Red LED 630nm and Near-Infrared LED 830nm applied over the treated area to support cellular response. Standard in Vedara Care JVC exosome protocols.', time: '10–20 min' },
              { num: '08', title: 'Cool-Down and Barrier Support Application', desc: 'Hyaluronic acid or ceramide barrier support product applied. Cooling globes or cooling mask if any erythema is present.', time: '5–10 min' },
              { num: '09', title: 'Post-Treatment Care Briefing', desc: 'Verbal and written instruction — SPF 50+ zinc-preferred for 7–14 days, avoidance of retinoids and acids for 5–7 days, no vigorous exercise for 24 hours (adjunct-paired), next session scheduling.', time: '5–10 min' },
              { num: '10', title: 'Next Session Scheduling and Documentation', desc: 'Cadence confirmed (typically 2–4 weeks), photo documentation added to patient record, treatment note completed.', time: '5 min' }
            ].map(item => (
              <div key={item.num} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr auto', gap: '1.25rem', alignItems: 'start', background: 'rgb(240, 235, 227)', borderRadius: '8px', padding: '1.25rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1.625rem', color: 'rgb(200, 168, 127)', margin: '0px', lineHeight: 1 }}>{item.num}</p>
                <div>
                  <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1rem', color: 'rgb(31, 31, 31)', marginBottom: '0.375rem' }}>{item.title}</h3>
                  <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', color: 'rgb(85, 85, 85)', lineHeight: 1.65, margin: '0px' }}>{item.desc}</p>
                </div>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.7rem', color: 'rgb(119, 119, 119)', whiteSpace: 'nowrap', margin: '0.2rem 0px 0px', background: 'rgb(250, 247, 242)', borderRadius: '4px', padding: '0.25rem 0.625rem', border: '1px solid rgb(232, 224, 212)' }}>{item.time}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>Treatment Comparison</p>
            <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.375rem', color: 'rgb(31, 31, 31)', marginBottom: '1.25rem' }}>Exosome vs Alternative Regenerative Modalities</h3>
            <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgb(232, 224, 212)' }}>
              <table className="comparison-table w-full border-collapse min-w-[700px]">
                <caption style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", captionSide: 'bottom', fontSize: '0.7rem', color: 'rgb(119, 119, 119)', padding: '0.75rem', textAlign: 'left', fontStyle: 'italic' }}>
                  Cost ranges are directional Dubai market context. Vedara Care JVC pricing confirmed at consultation. Table is honest neutral comparison — selection depends on clinical indication, practitioner scope, and Medical Director assessment.
                </caption>
                <thead>
                  <tr className="bg-[#FAF6EF]">
                    <th scope="col" className="p-4 text-left border border-[#E5DFD3]  font-medium text-[#1A1A1A]" style={{ fontFamily: "Fraunces, Georgia, serif" }}>Attribute</th>
                    <th scope="col" className="p-4 text-left border border-[#E5DFD3]  font-medium text-[#1A1A1A]" style={{ fontFamily: "Fraunces, Georgia, serif" }}>Exosome (Topical + Microneedling)</th>
                    <th scope="col" className="p-4 text-left border border-[#E5DFD3]  font-medium text-[#1A1A1A]" style={{ fontFamily: "Fraunces, Georgia, serif" }}>PRP Facial</th>
                    <th scope="col" className="p-4 text-left border border-[#E5DFD3]  font-medium text-[#1A1A1A]" style={{ fontFamily: "Fraunces, Georgia, serif" }}>Mesotherapy</th>
                    <th scope="col" className="p-4 text-left border border-[#E5DFD3]  font-medium text-[#1A1A1A]" style={{ fontFamily: "Fraunces, Georgia, serif" }}>Growth Factor Serum</th>
                    <th scope="col" className="p-4 text-left border border-[#E5DFD3]  font-medium text-[#1A1A1A]" style={{ fontFamily: "Fraunces, Georgia, serif" }}>Peptide Infusion</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-[#6B6B6B]">
                  <tr>
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Delivery method</th>
                    <td className="p-4 border border-[#E5DFD3]">Topical + microchannel window</td>
                    <td className="p-4 border border-[#E5DFD3]">Injection (autologous)</td>
                    <td className="p-4 border border-[#E5DFD3]">Injection (dermal)</td>
                    <td className="p-4 border border-[#E5DFD3]">Topical (variable penetration)</td>
                    <td className="p-4 border border-[#E5DFD3]">Topical + optional microneedling</td>
                  </tr>
                  <tr className="bg-[#FAF6EF]/50">
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Practitioner scope</th>
                    <td className="p-4 border border-[#E5DFD3]">Aesthetician (topical) + physician (invasive)</td>
                    <td className="p-4 border border-[#E5DFD3]">Physician / dermatologist</td>
                    <td className="p-4 border border-[#E5DFD3]">Physician / dermatologist</td>
                    <td className="p-4 border border-[#E5DFD3]">Aesthetician</td>
                    <td className="p-4 border border-[#E5DFD3]">Aesthetician</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Session duration</th>
                    <td className="p-4 border border-[#E5DFD3]">45–120 min</td>
                    <td className="p-4 border border-[#E5DFD3]">60–90 min</td>
                    <td className="p-4 border border-[#E5DFD3]">30–60 min</td>
                    <td className="p-4 border border-[#E5DFD3]">30–45 min</td>
                    <td className="p-4 border border-[#E5DFD3]">45–75 min</td>
                  </tr>
                  <tr className="bg-[#FAF6EF]/50">
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Downtime</th>
                    <td className="p-4 border border-[#E5DFD3]">Minimal (standalone) / 24–72h (adjunct)</td>
                    <td className="p-4 border border-[#E5DFD3]">24–72h</td>
                    <td className="p-4 border border-[#E5DFD3]">24–48h</td>
                    <td className="p-4 border border-[#E5DFD3]">None</td>
                    <td className="p-4 border border-[#E5DFD3]">Minimal</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Cargo diversity</th>
                    <td className="p-4 border border-[#E5DFD3]">Broad (multi-signal)</td>
                    <td className="p-4 border border-[#E5DFD3]">Growth factors (platelet)</td>
                    <td className="p-4 border border-[#E5DFD3]">Custom formulation</td>
                    <td className="p-4 border border-[#E5DFD3]">Specific growth factors</td>
                    <td className="p-4 border border-[#E5DFD3]">Defined peptide</td>
                  </tr>
                  <tr className="bg-[#FAF6EF]/50">
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Regulatory profile</th>
                    <td className="p-4 border border-[#E5DFD3]">Source-dependent</td>
                    <td className="p-4 border border-[#E5DFD3]">Clear (autologous)</td>
                    <td className="p-4 border border-[#E5DFD3]">Clear (injection framework)</td>
                    <td className="p-4 border border-[#E5DFD3]">Clear (cosmetic)</td>
                    <td className="p-4 border border-[#E5DFD3]">Clear (cosmetic)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 text-left border border-[#E5DFD3] font-medium text-[#1A1A1A]">Cadence</th>
                    <td className="p-4 border border-[#E5DFD3]">2–4 weeks × 3–6 sessions</td>
                    <td className="p-4 border border-[#E5DFD3]">4–6 weeks × 3–4 sessions</td>
                    <td className="p-4 border border-[#E5DFD3]">2–4 weeks × 4–8 sessions</td>
                    <td className="p-4 border border-[#E5DFD3]">Ongoing / monthly</td>
                    <td className="p-4 border border-[#E5DFD3]">Monthly × 6–12 sessions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey & Cadence */}
      <section style={{ background: 'rgb(240, 235, 227)', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem', textAlign: 'center' }}>Patient Journey &amp; Cadence</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '3rem', textAlign: 'center' }}>Your Programme from Consultation to Maintenance</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '1.5rem', top: '2rem', bottom: '2rem', width: '1px', background: 'rgb(200, 168, 127)', opacity: 0.3 }}></div>

            {[
              { id: '0', title: 'Phase 1 — Consultation & Skin Analysis', desc: 'Standalone consultation, no treatment same-day. Duration 45-60 min. Skin analysis, medical history, exosome source category disclosure, protocol design proposal, cost and cadence briefing. Written treatment plan provided.' },
              { id: '1', title: 'Phase 2 — Initial Session', desc: 'Typically adjunct-paired with microneedling (unless standalone infusion is clinically indicated). Duration 90-120 min. Post-treatment photography with consent. Recovery briefing.' },
              { id: '2-6', title: 'Phase 3 — Course of 3–6 Sessions', desc: 'Cadence depends on indication: Post-microneedling adjunct: every 3-4 weeks. Sensitive skin standalone: every 2-3 weeks. PIH programme: every 2-4 weeks under Medical Director coordination. Anti-aging complement: every 4 weeks.' },
              { id: '✓', title: 'Phase 4 — Transition Review', desc: 'At Session 6, Arfah conducts a transition review — assessing cumulative response, discussing whether course extension is indicated, and designing the maintenance cadence.' },
              { id: 'âˆž', title: 'Phase 5 — Long-Term Maintenance', desc: 'Every 8-12 weeks for stable indications. Anti-aging complement clients may continue quarterly. Post-procedure recovery clients typically graduate to as-needed booking coordinated with future microneedling or laser sessions.' }
            ].map(phase => (
              <div key={phase.id} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ fontFamily: "Fraunces, Georgia, serif", zIndex: 1, width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgb(250, 247, 242)', border: '1px solid rgb(200, 168, 127)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(200, 168, 127)', fontSize: '0.9rem', fontStyle: 'italic', flexShrink: 0 }}>
                  {phase.id}
                </div>
                <div style={{ background: 'rgb(250, 247, 242)', padding: '1.5rem 2rem', borderRadius: '8px', border: '1px solid rgb(232, 224, 212)', flex: 1 }}>
                  <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.125rem', color: 'rgb(31, 31, 31)', marginBottom: '0.5rem' }}>{phase.title}</h3>
                  <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.65, margin: 0 }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DHA-Compliant Case Narratives */}
      <section style={{ background: 'rgb(250, 247, 242)', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>Documented Patient Journeys</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '1rem' }}>DHA-Compliant Case Narratives</h2>
          <p style={{ fontSize: '0.75rem', color: 'rgb(119, 119, 119)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.7 }}>
            Individual results vary. Case narratives below are documented Vedara Care JVC client journeys shared with informed written consent; identifying detail has been altered for privacy. These are illustrative and not predictive of outcomes for any specific individual.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button onClick={() => setActiveCase('case01')} style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", padding: '0.5rem 1.25rem', fontSize: '0.775rem', fontWeight: 500, borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', background: activeCase === 'case01' ? 'rgb(31, 31, 31)' : 'rgb(240, 235, 227)', color: activeCase === 'case01' ? 'rgb(255, 255, 255)' : 'rgb(85, 85, 85)' }}>Case 01</button>
            <button onClick={() => setActiveCase('case02')} style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", padding: '0.5rem 1.25rem', fontSize: '0.775rem', fontWeight: 500, borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', background: activeCase === 'case02' ? 'rgb(31, 31, 31)' : 'rgb(240, 235, 227)', color: activeCase === 'case02' ? 'rgb(255, 255, 255)' : 'rgb(85, 85, 85)' }}>Case 02</button>
            <button onClick={() => setActiveCase('case03')} style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", padding: '0.5rem 1.25rem', fontSize: '0.775rem', fontWeight: 500, borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', background: activeCase === 'case03' ? 'rgb(31, 31, 31)' : 'rgb(240, 235, 227)', color: activeCase === 'case03' ? 'rgb(255, 255, 255)' : 'rgb(85, 85, 85)' }}>Case 03</button>
          </div>

          <div style={{ background: 'rgb(240, 235, 227)', borderRadius: '8px', padding: '2rem 2.5rem', borderWidth: '1px 1px 1px 3px', borderStyle: 'solid', borderColor: 'rgb(232, 224, 212) rgb(232, 224, 212) rgb(232, 224, 212) rgb(200, 168, 127)', borderImage: 'none' }}>
            {activeCase === 'case01' && (
              <>
                <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Case 01</p>
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.25rem', color: 'rgb(31, 31, 31)', marginBottom: '0.375rem' }}>Post-Microneedling Recovery Optimization</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgb(119, 119, 119)', fontStyle: 'italic', marginBottom: '1.25rem' }}>Fitzpatrick IV, Age 34 — Dubai-based marketing professional, JVC resident</p>
                <p style={{ fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                  Client presented with residual post-inflammatory hyperpigmentation from adolescent acne and shallow atrophic acne scarring across cheeks and jawline. Arfah designed an exosome-adjunct microneedling programme — six sessions at 4-week intervals, microneedling at 1.0mm depth with physician oversight for depth calibration in Fitzpatrick IV, MSC-derived exosome topical application during the microchannel window, LED Red 630nm add-on immediately post-application.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                  Post-session erythema resolved within 12–24 hours across the programme (client’s baseline erythema resolution had run 48–72 hours in earlier microneedling attempts elsewhere). At 6-session review, client reported skin texture perception improvement and reduced awareness of scar depth. Client transitioned to quarterly maintenance.
                </p>
              </>
            )}

            {activeCase === 'case02' && (
              <>
                <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Case 02</p>
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.25rem', color: 'rgb(31, 31, 31)', marginBottom: '0.375rem' }}>Sensitive Rosacea-Adjacent Skin Standalone Infusion</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgb(119, 119, 119)', fontStyle: 'italic', marginBottom: '1.25rem' }}>Fitzpatrick II, Age 41 — British expat, Dubai Marina</p>
                <p style={{ fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                  Client presented with rosacea-adjacent reactive skin — background erythema, occasional flare episodes, poor tolerance to retinoids and glycolic acid. Medical Director conducted initial consultation to confirm rosacea assessment and exclude other differential diagnoses.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                  Standalone topical exosome infusion protocol was designed — no microneedling adjunct given barrier reactivity. Plant-derived exosome source selected for its anti-inflammatory cargo profile. Course of eight sessions at 2-week intervals, each session paired with red LED 630nm and cooling globe application. Client reported subjective improvement in reactivity threshold across the course — fewer flare episodes. Medical Director confirmed measurable erythema reduction at session 8.
                </p>
              </>
            )}

            {activeCase === 'case03' && (
              <>
                <p style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', fontWeight: 500, marginBottom: '0.5rem' }}>Case 03</p>
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.25rem', color: 'rgb(31, 31, 31)', marginBottom: '0.375rem' }}>Wedding Preparation Programme</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgb(119, 119, 119)', fontStyle: 'italic', marginBottom: '1.25rem' }}>Fitzpatrick III, Age 38 — Emirati bride, Al Barsha</p>
                <p style={{ fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                  Client presented six months before her wedding wanting a preparation programme that would improve overall skin quality without introducing injectable modalities before the event. Consultation with Arfah and Medical Director resulted in a combined programme: monthly <Link href="/treatments/anti-aging-skin-firming-jvc/" className="text-current hover:text-[#C9A961] underline">Anti-Aging Protocol</Link> sessions with exosome adjunct integration at strategic points — one post-microneedling exosome session at 8 weeks pre-event and one standalone exosome infusion session at 3 weeks pre-event.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.8, marginBottom: '0.875rem' }}>
                  The 3-week pre-event standalone infusion was scheduled to provide barrier support and cellular signaling without any procedural downtime. Client continues maintenance programme post-event on quarterly cadence.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Practitioner Profile & Medical Director */}
      <section style={{ background: 'rgb(240, 235, 227)', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>Your Care Team</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '1rem' }}>Practitioner Profile &amp; Medical Director Attribution</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0px 3rem' }}>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <img src="/images/arfah-owais-portrait.webp" alt="Arfah Owais DHA licensed aesthetician CIBTAC-UK Vedara Care JVC portrait" style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem', objectFit: 'cover', aspectRatio: '3/4' }} />
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: '1.5rem', color: 'rgb(31, 31, 31)', marginBottom: '0.25rem' }}><Link href="/team/arfah-owais-aesthetician-jvc/" className="text-current hover:text-[#C9A961] transition-colors underline">Arfah Owais</Link></h3>
              <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '1rem' }}>DHA-Licensed Aesthetician</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1rem', color: 'rgb(85, 85, 85)' }}>
                <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', marginBottom: '0.5rem' }}>CIBTAC-UK Diploma (Beauty Therapy & Cosmetology)</li>
                <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', marginBottom: '0.5rem' }}>NCLC Certified</li>
                <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', marginBottom: '0.5rem' }}>PMU Certified</li>
                <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', marginBottom: '0.5rem' }}>Buccal Massage Specialist</li>
                <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', marginBottom: '0.5rem' }}>Kobido Japanese Lifting Massage</li>
                <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem' }}>8+ years clinical experience</li>
              </ul>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgb(250, 247, 242)', padding: '2rem', borderRadius: '8px', border: '1px solid rgb(232, 224, 212)' }}>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '1rem' }}>Arfah on Exosome Practice</p>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.7, marginBottom: '1rem' }}>"When I trained in exosome protocols, the first thing I noticed was how much of the market conversation was driven by brand marketing rather than mechanism. I made a decision early on that in my practice, I would only describe what the mechanism actually supports."</p>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.7, marginBottom: '1rem' }}>"I don't call exosome protocols 'stem cell facials' — because they're not, exosomes are cellular messengers, not the cells themselves. I always disclose the exosome source category — plant-derived, platelet-derived from your own blood, or MSC-derived — because source matters both for mechanism and for regulatory profile."</p>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.9rem', color: 'rgb(85, 85, 85)', lineHeight: 1.7, margin: 0 }}>"The single most important thing I do differently is I refuse to schedule exosome protocols on the same day as consultation. Clients come in, we do skin analysis, we discuss the delivery pathway, I show them the product labeling, and they take time to decide. This isn't a walk-in facial."</p>
              </div>
              <div style={{ background: 'rgb(250, 247, 242)', padding: '2rem', borderRadius: '8px', border: '1px solid rgb(232, 224, 212)' }}>
                {/* <img src="/images/medical-director-portrait.webp" alt="Medical Director dermatologist clinical oversight Vedara Care JVC" style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '1rem', objectFit: 'cover' }} /> */}
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '1rem' }}><Link href="/team/[medical-director-slug]/" className="text-current hover:text-[#C9A961] transition-colors underline">Medical Director</Link> — Clinical Oversight</p>
                <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.875rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, marginBottom: '1rem' }}>Our DHA-Licensed Consultant Dermatologist provides clinical oversight for the exosome vertical at Vedara Care JVC. Medical Director scope includes:</p>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'rgb(200, 168, 127)' }}>—</span> Protocol governance — approval of exosome source categories in use</li>
                  <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'rgb(200, 168, 127)' }}>—</span> Physician-scope delivery where invasive delivery is clinically indicated</li>
                  <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'rgb(200, 168, 127)' }}>—</span> Contraindication review for sensitive medical history cases</li>
                  <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span style={{ color: 'rgb(200, 168, 127)' }}>—</span> Adverse event management and continuing education oversight</li>
                  <li style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.8125rem', color: 'rgb(85, 85, 85)', lineHeight: 1.6, display: 'flex', gap: '0.5rem' }}><span style={{ color: 'rgb(200, 168, 127)' }}>—</span> DHA advertising compliance review for all patient-facing materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing at Vedara Care JVC */}
      <section id="pricing" style={{ background: 'rgb(250, 247, 242)', padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0px auto' }}>
          <p style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgb(200, 168, 127)', marginBottom: '0.75rem' }}>Session Options &amp; Investment</p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: 400, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: 'rgb(31, 31, 31)', marginBottom: '1rem' }}>Pricing at Vedara Care JVC</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0px' }}>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgb(200, 168, 127)' }}></div>
            <div style={{ flex: '1 1 0%', height: '1px', background: 'rgb(232, 224, 212)' }}></div>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'rgb(119, 119, 119)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '680px' }}>
            Pricing is indicative and confirmed at consultation. All values in AED, VAT inclusive per UAE regulation. Insurance is on a reimbursement basis, not direct billing. Vedara Care JVC does not offer discount pricing on regenerative protocols outside structured courses — the pricing reflects product cost and Medical Director oversight.
          </p>

          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Consultation (Session 0)</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Skin analysis, exosome consultation, protocol design <span style={{ color: 'rgb(119, 119, 119)' }}>· 45–60 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Standalone Topical Exosome — Single Session</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Aesthetician-delivered topical, LED add-on <span style={{ color: 'rgb(119, 119, 119)' }}>· 45–75 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Standalone Course (×4)</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Discount vs single-session sum <span style={{ color: 'rgb(119, 119, 119)' }}>· Each 45–75 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X] course</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Standalone Course (×6)</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Discount vs single-session sum <span style={{ color: 'rgb(119, 119, 119)' }}>· Each 45–75 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X] course</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Exosome + Microneedling Adjunct — Single</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Microneedling + exosome + LED <span style={{ color: 'rgb(119, 119, 119)' }}>· 90–120 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Exosome + Microneedling Course (×3)</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Discount vs single-session sum <span style={{ color: 'rgb(119, 119, 119)' }}>· Each 90–120 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X] course</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Exosome + Microneedling Course (×6)</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Discount vs single-session sum <span style={{ color: 'rgb(119, 119, 119)' }}>· Each 90–120 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X] course</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Exosome + RF Microneedling Adjunct</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>RF microneedling + exosome + LED (Medical Director oversight) <span style={{ color: 'rgb(119, 119, 119)' }}>· 90–120 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Exosome + Laser Adjunct</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Laser resurfacing + exosome + LED (physician-scope) <span style={{ color: 'rgb(119, 119, 119)' }}>· 90–150 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Wedding Preparation — 6 Month</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Integrated with Anti-Aging Protocol, strategic exosome sessions <span style={{ color: 'rgb(119, 119, 119)' }}>· Variable</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X] programme</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Post-Procedure Booster</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Standalone infusion post-procedure done at another clinic <span style={{ color: 'rgb(119, 119, 119)' }}>· 45–60 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'rgb(240, 235, 227)', borderRadius: '6px', padding: '1rem 1.5rem', border: '1px solid rgb(232, 224, 212)' }}>
              <div>
                <h3 style={{ fontFamily: "\"Nunito Sans\", Inter, sans-serif", fontWeight: 500, fontSize: '0.875rem', color: 'rgb(31, 31, 31)', marginBottom: '0.2rem' }}>Maintenance Session</h3>
                <p style={{ fontSize: '0.775rem', color: 'rgb(85, 85, 85)', margin: '0px' }}>Individual maintenance after completing programme <span style={{ color: 'rgb(119, 119, 119)' }}>· 45–75 min</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgb(200, 168, 127)', margin: '0px' }}>AED [X]</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.25rem', padding: '1rem 1.5rem', background: 'rgb(255, 248, 240)', borderRadius: '6px', border: '1px solid rgb(240, 213, 168)', fontSize: '0.775rem', color: 'rgb(85, 85, 85)', lineHeight: 1.65 }}>
            <strong>Cancellation Policy:</strong> 24 hours notice required; late cancellation charged 50%. · <strong>Patient Record Export:</strong> Complimentary upon request.
          </div>
        </div>
      </section>

      <FAQ faqs={faqsList} bgColor="bg-white" label="Patient Knowledge Base" title="Frequently Asked Questions" description="Common questions about our Exosome Skin Rejuvenation protocol." />

      <TreatmentLocation image="/images/vedara-jvc-exosome-clinic.webp" imageAlt="Vedara Care JVC polyclinic exosome skin rejuvenation Dubai" />


      <RelatedPages
        pages={[
          { title: 'Comprehensive Skin Analysis', href: '/treatments/comprehensive-skin-analysis-jvc/', description: 'The diagnostic starting point that informs whether exosome protocol is the right pathway.' },
          { title: 'RF Microneedling JVC', href: '/treatments/rf-microneedling-jvc/', description: 'Combined mechanical + thermal barrier disruption; commonly paired with exosome adjunct.' },
          { title: 'PRP Facial JVC', href: '/treatments/prp-facial-jvc/', description: 'Autologous platelet-rich plasma alternative regenerative pathway.' },
          { title: 'Mesotherapy JVC', href: '/treatments/mesotherapy-jvc/', description: 'Injection-based delivery of custom formulations; physician scope.' },
          { title: 'Customized Anti-Aging Protocol', href: '/treatments/anti-aging-skin-firming-jvc/', description: 'Broader non-invasive anti-aging programme within which exosome can be integrated as adjunct.' },
          { title: 'Arfah Owais — DHA-Licensed Aesthetician', href: '/team/arfah-owais-aesthetician-jvc/', description: 'Full practitioner profile, credentials, and treatment vertical map.' },


        ]}
      />

    </div >
  );
};

export default ExosomeSkinRejuvenationJVC;
