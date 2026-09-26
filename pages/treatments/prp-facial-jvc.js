import React from 'react';
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { FastFacts, WhyChoosePrp, UnderstandingPrp, TwelvePatientPopulations, TwelveStepProtocol, PatientJourney, DocumentedPatientJourneys, PrpPractitioners, PrpPricing } from '../../components/treatments/PrpComponents';
import { TreatmentClusterGrid, ClinicLocation } from '../../components/treatments/SharedTreatmentComponents';
// Importing generic/reusable components based on project structure
import PricingSection from '../../components/ayurveda/PricingSection';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import FAQ from '../../components/home/FAQ';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';

const PrpFacialJvc = () => {
  const schema1 = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#procedure",
    "name": "PRP Facial Treatment (Platelet-Rich Plasma)",
    "alternateName": ["PRP Facial", "Platelet-Rich Plasma Facial", "PRP Skin Rejuvenation", "Vampire Facial (market term)", "Autologous Growth Factor Injection", "PRP with Microneedling"],
    "description": "Physician-delivered autologous regenerative aesthetic protocol using Platelet-Rich Plasma (PRP) prepared from the patient's own blood via FDA-cleared double-spin centrifugation. Delivered by DHA-Licensed Consultant Dermatologist at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai — via microdroplet mesotherapy injection, cannula technique for periorbital and neck areas, or microneedling adjunct for atrophic acne scar and surface texture indications. Blood draw and sterile PRP preparation delivered by DHA-Licensed Nursing under physician oversight. Adjunct aesthetician support from Arfah Owais (DHA-Licensed) for skin analysis and post-procedure care.",
    "procedureType": "https://schema.org/TherapeuticProcedure",
    "bodyLocation": ["Face", "Periorbital area", "Neck", "Décolleté", "Scalp (separate hair restoration indication — see cross-linked page if published)"],
    "howPerformed": "The Vedara Care JVC PRP Facial protocol runs across 12 defined steps: (1) Consultation confirmation and consent review 5-10 min; (2) Medical history and anticoagulant screening 5 min; (3) Blood draw by DHA-Licensed Nursing 5-10 min (10-30 mL into specialized PRP tube with ACD-A anticoagulant); (4) Double-spin centrifugation and PRP preparation using FDA-cleared kit 15-25 min; (5) Treatment area preparation and cleansing 5 min; (6) Topical anaesthetic application with 20-30 min onset; (7) Anaesthetic removal and re-cleanse 5 min; (8) PRP delivery by Medical Director via microdroplet mesotherapy, cannula, or microneedling adjunct technique 15-40 min; (9) Immediate post-procedure assessment and cold compress 5-10 min; (10) Cool-down and barrier support application 5-10 min; (11) Post-treatment care briefing 5-10 min; (12) Next session scheduling 5 min. Total 60-90 min standalone / 90-120 min with microneedling adjunct.",
    "preparation": "Medical Director consultation required before first session. Medical history and anticoagulant screening. Discontinue blood-thinning supplements (fish oil, high-dose vitamin E, ginkgo, garlic) for 3-5 days pre-procedure where medically appropriate. Discontinue retinoids and acids 5-7 days pre-treatment. Well-hydrated day of procedure. Sun protection SPF 50+ zinc-based pre and post treatment. Written informed consent.",
    "followup": "Post-treatment care includes cold compress cadence, strict SPF 50+ for 7-14 days, retinoid/acid avoidance 5-7 days, vigorous exercise avoidance 24-48 hours, alcohol avoidance 24-48 hours, blood-thinning supplement avoidance 3-5 days, gentle cleansing and ceramide barrier support products. Course of 3 sessions at 4-6 week intervals for standard indications; extended 6-session course for post-acne scar remodeling. Maintenance every 6-12 months. 24/7 contact protocol for post-treatment concerns.",
    "status": "https://schema.org/EnrollingByInvitation",
    "performer": [
      { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
      { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" }
    ],
    "isPartOf": { "@id": "https://vedaracare.ae/#organization" },
    "location": { "@id": "https://vedaracare.ae/#medicalbusiness" },
    "url": "https://vedaracare.ae/treatments/prp-facial-jvc/",
    "dateModified": "2024-10-01"
  };

  const schema2 = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://vedaracare.ae/#medicalbusiness",
    "name": "Vedara Care Polyclinic",
    "url": "https://vedaracare.ae",
    "logo": "https://vedaracare.ae/images/vedara-logo.png",
    "image": "https://vedaracare.ae/images/vedara-clinic-jvc.webp",
    "telephone": "+971555736312",
    "priceRange": "AED",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jumeirah Village Circle",
      "addressLocality": "Jumeirah Village Circle (JVC)",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0624",
      "longitude": "55.2003"
    },
    "areaServed": [
      { "@type": "Place", "name": "Jumeirah Village Circle (JVC)" },
      { "@type": "Place", "name": "Dubai Marina" }
    ],
    "medicalSpecialty": ["Dermatology", "Beauty Therapy", "General Practice", "Nursing"],
    "medicalDirector": { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
    "reviewedBy": { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "09:00", "closes": "21:00" }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "AED"
  };

  const schema3 = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#service-microdroplet",
      "name": "PRP Facial — Microdroplet Mesotherapy Technique",
      "description": "Physician-delivered PRP via microdroplet mesotherapy injection technique across full face — multiple small-volume injections at 1-2mm dermal depth for surface skin quality and dermal thickness indications.",
      "serviceType": "Aesthetic Regenerative Medical Procedure",
      "provider": { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
      "areaServed": { "@type": "Place", "name": "Jumeirah Village Circle (JVC), Dubai" }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#service-microneedling-adjunct",
      "name": "PRP with Physician-Scope Microneedling Adjunct",
      "description": "Physician-scope microneedling combined with PRP application during microchannel window and mesotherapy injection immediately post-microneedling. Optimized for atrophic acne scar remodeling and comprehensive surface texture indications.",
      "serviceType": "Aesthetic Regenerative Medical Procedure — Combined",
      "provider": { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
      "areaServed": { "@type": "Place", "name": "Jumeirah Village Circle (JVC), Dubai" }
    }
  ];

  const schema4 = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
      { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
      { "@type": "ListItem", "position": 3, "name": "PRP Facial Treatment JVC", "item": "https://vedaracare.ae/treatments/prp-facial-jvc/" }
    ]
  };

  const schema5 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#faqpage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a PRP facial?", "acceptedAnswer": { "@type": "Answer", "text": "A PRP (Platelet-Rich Plasma) facial is a physician-delivered autologous regenerative treatment. Your own blood is drawn, centrifuged to concentrate platelets that carry growth factor cargo, and re-injected into skin by our Medical Director. At Vedara Care Polyclinic in JVC Dubai, PRP is delivered by our DHA-Licensed Consultant Dermatologist with support from DHA-Licensed Nursing." } },
      { "@type": "Question", "name": "How much does a PRP facial cost in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "PRP facial pricing at Vedara Care JVC ranges from AED [X] for standalone single-session microdroplet mesotherapy to AED [X] for PRP with microneedling adjunct. The standard 3-session course offers discount pricing vs single-session sum. Consultation with Medical Director is a separate appointment." } },
      { "@type": "Question", "name": "Is PRP facial safe?", "acceptedAnswer": { "@type": "Answer", "text": "PRP facial at Vedara Care JVC is delivered by our Medical Director (DHA-Licensed Consultant Dermatologist) using FDA-cleared preparation devices and double-spin protocol. Because PRP uses your own blood, it is autologous and generally well-tolerated. Contraindications including bleeding disorders and anticoagulant therapy are reviewed at consultation." } },
      { "@type": "Question", "name": "What is the difference between PRP and vampire facial?", "acceptedAnswer": { "@type": "Answer", "text": "Vampire facial is a marketing term for PRP paired with microneedling — the same PRP protocol layered onto skin during and after a microneedling procedure. Vedara Care JVC uses accurate terminology (PRP with microneedling adjunct) rather than the vampire facial branding." } },
      { "@type": "Question", "name": "How is PRP different from exosome facial?", "acceptedAnswer": { "@type": "Answer", "text": "PRP uses your own blood — autologous, injected by our Medical Director, extensive peer-reviewed evidence base. Exosome facial uses exogenous product (plant-derived, platelet-vendor-derived, or MSC-derived), typically applied topically after microneedling. PRP is physician-scope injection; topical exosome is aesthetician-scope. Both have valid roles." } },
      { "@type": "Question", "name": "How many PRP sessions do I need?", "acceptedAnswer": { "@type": "Answer", "text": "Standard PRP programme at Vedara Care JVC is 3 sessions at 4-6 week intervals for anti-aging and skin quality indications. Extended 6-session course is designed for post-acne atrophic scar remodeling. Maintenance is typically every 6-12 months. Medical Director confirms course length at consultation." } },
      { "@type": "Question", "name": "What is the recovery time after PRP facial?", "acceptedAnswer": { "@type": "Answer", "text": "PRP downtime is 24-72 hours — mild swelling, small injection marks visible for 24-48 hours, occasional pinpoint bruising resolving within 5-7 days. Recovery is more visible when microneedling adjunct is added. Vedara Care JVC provides written post-procedure care briefing at every session." } },
      { "@type": "Question", "name": "Does PRP facial hurt?", "acceptedAnswer": { "@type": "Answer", "text": "Topical anaesthetic is applied to the treatment area for 20-30 minutes before PRP injection, which reduces sensation to mild pressure or occasional pinpoint sharpness. Blood draw sensation is typical venipuncture. Cannula technique for periorbital and neck areas is generally reported as less uncomfortable than needle injection." } },
      { "@type": "Question", "name": "What growth factors are in PRP?", "acceptedAnswer": { "@type": "Answer", "text": "PRP contains multiple growth factors released from activated platelets — PDGF (Platelet-Derived Growth Factor), VEGF (Vascular Endothelial Growth Factor), TGF-Î² (Transforming Growth Factor Beta), EGF (Epidermal Growth Factor), IGF (Insulin-like Growth Factor), and FGF (Fibroblast Growth Factor)." } },
      { "@type": "Question", "name": "Can PRP help with acne scars?", "acceptedAnswer": { "@type": "Answer", "text": "PRP paired with physician-scope microneedling is used at Vedara Care JVC for post-acne atrophic scar remodeling. Response is typically better for shallower boxcar and rolling scars; icepick scars respond less and generally require additional modalities. Programme is typically extended course of 6 sessions." } },
      { "@type": "Question", "name": "Can PRP help with dark circles?", "acceptedAnswer": { "@type": "Answer", "text": "PRP delivered via cannula technique is used at Vedara Care JVC for periorbital rejuvenation including dark circle indication. Response depends on dark circle etiology — dermal thinning and shadowing generally respond better than genuine pigmentation, which may require additional protocols under Medical Director oversight." } },
      { "@type": "Question", "name": "Can I have PRP while taking blood thinners?", "acceptedAnswer": { "@type": "Answer", "text": "Anticoagulant therapy is a significant consideration for PRP. Medical Director reviews anticoagulant management at consultation — some patients proceed with modified protocol, some require coordination with prescribing physician, some are not suitable candidates. This is one of the reasons PRP requires physician consultation." } },
      { "@type": "Question", "name": "Is PRP safe during pregnancy or breastfeeding?", "acceptedAnswer": { "@type": "Answer", "text": "Vedara Care JVC takes a precautionary approach to PRP during pregnancy and lactation — typically deferred until post-lactation. Medical Director reviews individually. The autologous nature reduces regulatory concern, but precautionary standard aligns with general aesthetic procedure guidance during pregnancy." } },
      { "@type": "Question", "name": "How long does it take to see results?", "acceptedAnswer": { "@type": "Answer", "text": "Subjective response is often reported within 3-4 weeks post-session. Measurable cumulative response builds across the 3-session course, with effects continuing to develop for 8-12 weeks post-final session as collagen matures. Individual response varies; results are not guaranteed." } },
      { "@type": "Question", "name": "Can I combine PRP with Botox or fillers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — PRP addresses dermal quality, anti-wrinkle injection addresses dynamic wrinkles, filler addresses volume. These are complementary. Medical Director coordinates timing — typically PRP sessions scheduled 2 weeks before or after other injectable appointments." } },
      { "@type": "Question", "name": "Where in JVC is Vedara Care Polyclinic located?", "acceptedAnswer": { "@type": "Answer", "text": "Vedara Care Polyclinic is in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School." } },
      { "@type": "Question", "name": "Does insurance cover PRP facial in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Aesthetic PRP protocols are typically not covered by health insurance in the UAE. Vedara Care JVC operates insurance on a reimbursement basis, not direct billing — clients pay at time of service and may submit reimbursement claims with their insurer per their policy terms." } },
      { "@type": "Question", "name": "Do you deliver PRP facial to men?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — PRP is not gender-specific and is delivered to male clients at Vedara Care JVC. Male aesthetic patients particularly seek PRP for skin quality, periorbital rejuvenation, and preventive regenerative programmes." } },
      { "@type": "Question", "name": "What if I have a reaction after the treatment?", "acceptedAnswer": { "@type": "Answer", "text": "Vedara Care JVC provides a 24/7 contact protocol for post-treatment concerns. Any adverse reaction is reviewed by the Medical Director. Because PRP is autologous, allergic reactions to the platelet concentrate itself are essentially eliminated." } },
      { "@type": "Question", "name": "How do I book a PRP consultation at JVC?", "acceptedAnswer": { "@type": "Answer", "text": "Book Medical Director consultation via the primary CTA on this page, via WhatsApp, or by calling Vedara Care JVC directly. Consultation is a standalone appointment — no treatment same-day — typically 45-60 minutes." } }
    ]
  };

  const schema6 = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#howto",
    "name": "Vedara Care JVC PRP Facial Treatment Protocol — 12 Steps",
    "description": "The physician-delivered protocol for PRP Facial Treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai — autologous blood-derived regenerative protocol via microdroplet mesotherapy, cannula, or microneedling adjunct technique.",
    "totalTime": "PT120M",
    "supply": [
      { "@type": "HowToSupply", "name": "Specialized PRP collection tube with ACD-A anticoagulant" },
      { "@type": "HowToSupply", "name": "Sterile PRP preparation kit (FDA-cleared)" },
      { "@type": "HowToSupply", "name": "Compounded topical anaesthetic (lidocaine-based)" },
      { "@type": "HowToSupply", "name": "Medical-grade antiseptic" },
      { "@type": "HowToSupply", "name": "Sterile syringes and needles for injection delivery" },
      { "@type": "HowToSupply", "name": "Blunt-tipped cannula (periorbital and neck indications)" },
      { "@type": "HowToSupply", "name": "Sterile microneedling cartridges (when adjunct-paired)" },
      { "@type": "HowToSupply", "name": "Sterile hyaluronic acid post-procedure serum" },
      { "@type": "HowToSupply", "name": "Ceramide barrier support cream" },
      { "@type": "HowToSupply", "name": "SPF 50+ zinc-based sunscreen for post-treatment" },
      { "@type": "HowToSupply", "name": "Medical-grade gloves and sterile drapes" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "FDA-cleared centrifugation device (double-spin protocol)" },
      { "@type": "HowToTool", "name": "Motorized physician-scope microneedling device (when adjunct-paired)" },
      { "@type": "HowToTool", "name": "Skin analysis device (baseline reference)" },
      { "@type": "HowToTool", "name": "Cold compress / cooling globes" },
      { "@type": "HowToTool", "name": "Photography setup for documentation" }
    ],
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Consultation confirmation and consent review", "text": "Medical Director reviews consultation record, updated medical history, informed consent confirmation.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 2, "name": "Medical history and anticoagulant screening", "text": "Anticoagulant medication review, recent illness screening, allergy verification (ACD-A in PRP tube).", "timeRequired": "PT5M" },
      { "@type": "HowToStep", "position": 3, "name": "Blood draw by DHA-Licensed Nursing", "text": "10-30 mL blood drawn by DHA-Licensed Nursing under physician oversight into specialized PRP collection tube with anticoagulant.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 4, "name": "Double-spin centrifugation and PRP preparation", "text": "Blood processed via double-spin centrifugation protocol using FDA-cleared preparation kit. First spin separates RBCs; second spin concentrates platelets.", "timeRequired": "PT25M" },
      { "@type": "HowToStep", "position": 5, "name": "Treatment area preparation and cleansing", "text": "Treatment area cleansed with medical-grade antiseptic. Sterile field established.", "timeRequired": "PT5M" },
      { "@type": "HowToStep", "position": 6, "name": "Topical anaesthetic application", "text": "Compounded topical anaesthetic applied, occlusion where appropriate, onset time 20-30 minutes.", "timeRequired": "PT30M" },
      { "@type": "HowToStep", "position": 7, "name": "Anaesthetic removal and re-cleanse", "text": "Anaesthetic removed, area re-cleansed with antiseptic to maintain sterile field.", "timeRequired": "PT5M" },
      { "@type": "HowToStep", "position": 8, "name": "PRP delivery by Medical Director", "text": "Microdroplet mesotherapy injection, cannula technique for periorbital or neck, or microneedling adjunct for scar remodeling or texture indications.", "timeRequired": "PT40M" },
      { "@type": "HowToStep", "position": 9, "name": "Immediate post-procedure assessment and cold compress", "text": "Treatment area assessed, cold compress applied to reduce immediate swelling and bruising risk.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 10, "name": "Cool-down and barrier support application", "text": "Sterile hyaluronic acid or ceramide barrier support applied. Cool globes or cooling mask as needed.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 11, "name": "Post-treatment care briefing", "text": "Verbal and written instruction on cold compress cadence, exercise/alcohol avoidance 24-48h, SPF 50+ zinc for 7-14 days, retinoid/acid pause 5-7 days, blood-thinning supplement avoidance 3-5 days.", "timeRequired": "PT10M" },
      { "@type": "HowToStep", "position": 12, "name": "Next session scheduling and documentation", "text": "Cadence confirmed at 4-6 weeks between sessions across 3-session course. Photography with consent added to record.", "timeRequired": "PT5M" }
    ]
  };

  const schema7 = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#webpage",
    "url": "https://vedaracare.ae/treatments/prp-facial-jvc/",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable-quick-answer", ".speakable-section-answer", ".speakable-faq-priority"]
    }
  };

  const schema8a = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#medicalwebpage",
    "url": "https://vedaracare.ae/treatments/prp-facial-jvc/",
    "name": "PRP Facial Treatment in JVC Dubai — Vedara Care Polyclinic",
    "description": "Physician-delivered autologous PRP protocol by DHA-Licensed Consultant Dermatologist in Jumeirah Village Circle (JVC), Dubai — FDA-cleared preparation, integrated aesthetic team support.",
    "inLanguage": "en-AE",
    "isPartOf": { "@id": "https://vedaracare.ae/#website" },
    "about": { "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#procedure" },
    "mainEntityOfPage": { "@id": "https://vedaracare.ae/treatments/prp-facial-jvc/#webpage" },
    "audience": { "@type": "MedicalAudience", "audienceType": "https://schema.org/Patient" },
    "medicalAudience": [{ "@type": "MedicalAudience", "audienceType": "https://schema.org/Patient" }],
    "reviewedBy": { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
    "lastReviewed": "2024-05-15",
    "dateModified": "2024-05-15",
    "citation": [
      { "@type": "CreativeWork", "name": "Alves R, Grimalt R. A Review of Platelet-Rich Plasma: History, Biology, Mechanism of Action, and Classification. Skin Appendage Disorders, 2018.", "url": "https://doi.org/10.1159/000477353" },
      { "@type": "CreativeWork", "name": "Cameli N et al. Autologous Pure Platelet-Rich Plasma Dermal Injections for Facial Skin Rejuvenation. Dermatologic Surgery, 2017.", "url": "https://doi.org/10.1097/DSS.0000000000001083" },
      { "@type": "CreativeWork", "name": "Everts P et al. Platelet-Rich Plasma: New Performance Understandings and Therapeutic Considerations in 2020. International Journal of Molecular Sciences, 2020.", "url": "https://doi.org/10.3390/ijms21207794" }
    ]
  };

  const schema8b = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
    "name": "Medical Director",
    "jobTitle": "Medical Director, DHA-Licensed Consultant Dermatologist",
    "worksFor": { "@id": "https://vedaracare.ae/#organization" },
    "workLocation": { "@id": "https://vedaracare.ae/#medicalbusiness" },
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional License", "name": "DHA (Dubai Health Authority) Consultant Dermatologist License" }
    ],
    "knowsAbout": [
      "Dermatology", "Aesthetic Medicine", "Platelet-Rich Plasma (PRP)", "PRP Preparation Protocols", "PRP Injection Techniques (Microdroplet Mesotherapy, Cannula, Microneedling Adjunct)", "Autologous Regenerative Aesthetics", "Physician-Scope Microneedling", "Anti-Wrinkle Injections", "Dermal Fillers", "Mesotherapy", "Laser Aesthetic Procedures", "Exosome Injectable Scope", "Skin Analysis", "Contraindication Review", "DHA Advertising Compliance", "Post-Acne Atrophic Scar Remodeling", "Periorbital Rejuvenation"
    ],
    "url": "https://vedaracare.ae/team/[medical-director-slug]/"
  };

  const schema8c = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person",
    "name": "Arfah Owais",
    "jobTitle": "DHA-Licensed Aesthetician",
    "worksFor": { "@id": "https://vedaracare.ae/#organization" },
    "workLocation": { "@id": "https://vedaracare.ae/#medicalbusiness" },
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professional License", "name": "DHA (Dubai Health Authority) Aesthetician License" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Diploma", "name": "CIBTAC-UK Diploma" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "NCLC Certification" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Certification", "name": "PMU Certification" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Specialized Training", "name": "Buccal Massage Trained" },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "Specialized Training", "name": "Kobido Japanese Lifting Massage Trained" }
    ],
    "knowsAbout": [
      "Aesthetic Skin Analysis", "Post-Procedure Care Coordination", "Anti-Aging Protocol Integration", "PRP Programme Support (Aesthetician-Scope)", "HydraFacial", "Oxy-Geneo Facial", "Microdermabrasion", "Dermaplaning", "Advanced Facial Rejuvenation", "Customized Anti-Aging Protocols", "Peptide Infusion", "Growth Factor Infusion", "LED Photobiomodulation", "Buccal Massage", "Kobido Lifting Massage", "Sensitive Skin Protocol Design", "Fitzpatrick IV-VI Aesthetic Delivery"
    ],
    "knowsLanguage": ["Arabic", "English", "Hindi", "Urdu"],
    "gender": "Female",
    "url": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/"
  };

  const schema8d = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vedaracare.ae/#organization",
    "name": "Vedara Care Polyclinic",
    "url": "https://vedaracare.ae",
    "logo": "https://vedaracare.ae/images/vedara-logo.png",
    "medicalSpecialty": ["Physiotherapy", "Physiotherapy and Rehabilitation", "Ayurvedic Medicine", "Beauty Therapy", "Dermatology", "General Practice", "Nursing"],
    "employee": [
      { "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person" },
      { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" }
    ]
  };

  const prpFAQData = { faqs: schema5.mainEntity.map(e => ({ question: e.name, answer: e.acceptedAnswer.text })) };

  return (
    <>
      <Head>
        <title>PRP Facial JVC Dubai | Medical Director | Vedara Care</title>
        <meta name="description" content="Physician-delivered PRP facial in JVC Dubai by DHA-Licensed Consultant Dermatologist. FDA-cleared preparation, autologous regenerative protocol. 3-session course." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/prp-facial-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/treatments/prp-facial-jvc/" />
        
        {/* Robots and Crawl Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />


        {/* Open Graph */}
        <meta property="og:title" content="PRP Facial Treatment in JVC, Dubai — Vedara Care Polyclinic" />
        <meta property="og:description" content="Physician-delivered autologous Platelet-Rich Plasma protocol by DHA-Licensed Consultant Dermatologist in Jumeirah Village Circle, Dubai." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://vedaracare.ae/images/prp-facial-jvc-og.webp" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/prp-facial-jvc/" />
        <meta property="og:site_name" content="Vedara Care Polyclinic" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRP Facial JVC Dubai — Vedara Care" />
        <meta name="twitter:description" content="Physician-delivered autologous PRP by DHA-Licensed Consultant Dermatologist in JVC, Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/prp-facial-jvc-og.webp" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema1) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema2) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema3) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema4) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema5) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema6) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema7) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8a) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8b) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8c) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema8d) }} />
      </Head>

      {/* Section 1 - Hero */}
      <AyurvedaHero
        bgColor='white'
        label="PHYSICIAN-DELIVERED ”¢ DHA-LICENSED"
        title={"PRP Facial Treatment\nin Jumeirah Village\nCircle (JVC), Dubai"}
        description="Physician-delivered autologous Platelet-Rich Plasma protocol at Vedara Care JVC — blood-derived regenerative therapy by our DHA-Licensed Consultant Dermatologist, with integrated pre and post care from our aesthetic team.<br/><br/>PRP is derived from your own blood, centrifuged to concentrate platelets carrying growth factor cargo (PDGF, VEGF, TGF-Î², EGF, IGF), and re-delivered via injection or microneedling adjunct by our Medical Director. This is a medical procedure with a clear physician-scope delivery framework."
        image="prp-facial-jvc-hero.webp"
        alt="PRP facial treatment physician-delivered JVC Dubai Vedara Care Polyclinic"
        primaryCTA="Book PRP Consultation"
        secondaryCTA="WhatsApp for Availability"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: "PRP Facial JVC", href: null }
        ]}
        floatingCard={{
          title: "Vedara Care Polyclinic, JVC",
          subtitle: "Medical Director (DHA Consultant Dermatologist)<br/>Arfah Owais — Aesthetician<br/>60-120 min per session<br/>Arabic ”¢ English ”¢ Hindi ”¢ Urdu"
        }}
      />

      {/* Section 2 - Speakable Quick Answer */}
      <section className="bg-[#FAF6EF] py-12 px-6 border-b border-[#E8E0CD]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
          <div>
            <p className="text-[11px] font-sans font-bold tracking-[0.1em] text-[#C9A961] uppercase mb-1">QUICK ANSWER</p>
            <p className="text-[10px] font-sans text-[#A69B8D] uppercase tracking-wider">VOICE SEARCH &<br />AI EXTRACTION PRIORITY</p>
          </div>
          <div className="speakable-quick-answer border-l-2 border-[#C9A961] pl-6 py-1">
            <h2 className="sr-only">Quick Answer</h2>
            <p className="text-[16px] md:text-[18px] font-sans text-[#1A1A1A] leading-[1.8]">
              PRP Facial at Vedara Care Polyclinic in Jumeirah Village Circle (JVC), Dubai is a <strong>physician-delivered autologous regenerative treatment</strong>. Your own blood is drawn, centrifuged to concentrate platelets carrying growth factor cargo, and re-injected by our DHA-Licensed Consultant Dermatologist. Sessions run <strong>60 to 120 minutes</strong> with 3 sessions across the initial course, typically at 4 to 6 week intervals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - At a Glance */}
      <FastFacts />

      {/* Section 4 - Why Choose Vedara Care */}
      <WhyChoosePrp />



      {/* Section 6 - Understanding PRP Facial Treatment */}
      <UnderstandingPrp />

      {/* Section 7 - Who PRP Facial Treatment Is Designed For */}
      <TwelvePatientPopulations />

      {/* Section 8 - Protocol Steps */}
      <TwelveStepProtocol />

      {/* Section 9 - Patient Journey */}
      <PatientJourney />

      {/* Sections 10 - Documented Patient Journeys */}
      <DocumentedPatientJourneys />

      {/* Section 11 - Team */}
      <PrpPractitioners />

      {/* Section 12 - Pricing */}
      <PrpPricing />

      {/* Section 13 - FAQ */}
      <FAQ 
        faqs={prpFAQData.faqs} 
        bgColor="bg-white"
        title="Patient Inquiries & Clinical Clarifications"
        description="Detailed answers to the most common questions regarding PRP Facial Therapy at Vedara Care JVC."
      />

      <FinalCTA
        bgColor="bg-[#F5F0E8]"
        title="Book Your PRP Consultation with Medical Director at Vedara Care JVC"
        description="A 45–60 minute Medical Director consultation with medical history review, skin analysis, indication assessment, protocol design, and honest alternative pathway discussion — no treatment same-day. This is a medical procedure that deserves consideration."
        button1Text="Book Consultation"
        button1TextHref="/book"
        button2Text="WhatsApp"
        button2TextHref="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20PRP%20Facial%20Treatment%20at%20your%20JVC%20clinic%20in%20Dubai."
        footer="Consultation is a standalone appointment. Vedara Care JVC does not sell same-day PRP treatment on first visit."
      />
      {/* Section 14 - Location */}
      <ClinicLocation />



      {/* Section 15 - Related Treatments */}
      <TreatmentClusterGrid />
    </>
  );
};

export default PrpFacialJvc;
