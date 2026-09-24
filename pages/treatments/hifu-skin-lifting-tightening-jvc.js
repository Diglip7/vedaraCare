import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { HifuHero, HifuQuickAnswer, HifuAtAGlance, HifuWhyUs, HifuEvidence, HifuClinicalEducation, HifuPatientSelection, HifuProtocol, HifuPatientJourney, HifuCaseNarratives, HifuTeam, HifuInvestment, HifuAestheticCluster, HifuClinicInfo, HifuFaq, HifuFinalCta, HifuPopup } from '../../components/treatments/HifuComponents';
// Assuming you have standard Footer/Header/CTA components or they are applied via _app.js layout

const HifuJvcDubai = () => {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>HIFU JVC Dubai | Non-Surgical Facelift | Vedara Care Polyclinic</title>
        <meta name="description" content="HIFU skin lifting & tightening in JVC — Medical Director oversight, HIFU-certified operator, from AED 2,400. Honest triage. Book free consultation." />
        <meta name="keywords" content="HIFU JVC, HIFU Dubai, non-surgical facelift Dubai, skin lifting JVC, SMAS lift Dubai, Ultherapy Dubai, HIFU Vedara Care" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="HIFU Skin Lifting & Tightening in JVC — Non-Surgical SMAS Lift | Vedara Care Polyclinic" />
        <meta property="og:description" content="HIFU under Medical Director oversight, delivered by HIFU-certified aesthetician. From AED 2,400 full face + neck. Honest patient triage. Transparent pricing. Book free consultation." />
        <meta property="og:url" content="https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/" />
        <meta property="og:site_name" content="Vedara Care Polyclinic" />
        <meta property="og:image" content="https://vedaracare.ae/images/hifu-jvc-og-social.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vedara Care JVC HIFU treatment room with device prepared for a skin lifting session under Medical Director protocol" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VedaraCare" />
        <meta name="twitter:title" content="HIFU Skin Lifting & Tightening in JVC — Vedara Care Polyclinic" />
        <meta name="twitter:description" content="Non-surgical SMAS lift under Medical Director oversight. HIFU-certified operator. From AED 2,400. Honest triage. Book free consultation at our JVC clinic." />
        <meta name="twitter:image" content="https://vedaracare.ae/images/hifu-jvc-twitter-card.jpg" />
        <meta name="twitter:image:alt" content="Vedara Care JVC HIFU treatment session in progress with vector mapping documentation" />

        <link rel="canonical" href="https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/" />

        {/* Schema 1 - MedicalProcedure */}
        <script
          key="schema-procedure"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#procedure",
              "name": "HIFU Skin Lifting & Tightening",
              "alternateName": ["High-Intensity Focused Ultrasound Skin Lifting", "Non-Surgical SMAS Lift", "Ultrasound Skin Tightening", "HIFU Facial Lifting"],
              "description": "HIFU (High-Intensity Focused Ultrasound) is a non-invasive skin lifting and tightening procedure delivering focused ultrasound energy at 1.5mm, 3.0mm, and 4.5mm depths to trigger collagen remodelling and SMAS-layer lifting. Delivered at Vedara Care Polyclinic JVC by HIFU device-certified DHA-Licensed Aesthetician under Consultant Dermatologist Medical Director oversight.",
              "procedureType": {
                "@type": "MedicalProcedureType",
                "name": "Non-invasive aesthetic device-based procedure"
              },
              "howPerformed": "Ten-step protocol: (1) Medical Director medical clearance verification, (2) informed consent and baseline photography, (3) skin cleansing and preparation, (4) topical anaesthetic application (30-45 min numbing window), (5) treatment vector mapping by device-certified aesthetician, (6) 4.5mm cartridge SMAS-layer delivery, (7) 3.0mm cartridge reticular dermis delivery, (8) 1.5mm cartridge superficial dermis delivery, (9) post-procedure cooling and calming, (10) aftercare briefing and follow-up scheduling. Total session time 75-90 minutes for full face + neck.",
              "preparation": "Patient completes Medical Director consultation and medical clearance prior to session booking. Pre-session preparation includes SPF 50+ sun protection for 2 weeks, discontinuation of active acids and retinols 5-7 days pre-session, avoidance of facial treatments for 2 weeks and injectables for 4 weeks pre-session, adequate hydration, and arrival at clinic with clean face preferred.",
              "followup": "Follow-up structure: optional Day 1-7 check-in call, optional Day 30 early progress assessment, recommended Day 60-90 peak result follow-up with comparison photography, recommended 6-month continued improvement assessment, annual maintenance session scheduling. Second programme course session scheduled 6-9 months post-first session where clinically indicated.",
              "bodyLocation": ["Face", "Neck", "Submental region", "Jawline", "Décolletage", "Lateral brow"],
              "status": "http://schema.org/EventScheduled",
              "performer": [
                {
                  "@type": "Person",
                  "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person",
                  "name": "Arfah Owais",
                  "jobTitle": "DHA-Licensed Aesthetician (HIFU Device-Certified) — Primary HIFU Device Operator"
                },
                {
                  "@type": "Person",
                  "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
                  "name": "[Medical Director Name]",
                  "jobTitle": "DHA-Licensed Consultant Dermatologist — Medical Director, Medical Oversight for HIFU Protocol"
                }
              ],
              "medicineSystem": "http://schema.org/WesternConventional",
              "relevantSpecialty": [
                {
                  "@type": "MedicalSpecialty",
                  "name": "Dermatology"
                },
                {
                  "@type": "MedicalSpecialty",
                  "name": "Aesthetic Medicine"
                }
              ]
            })
          }}
        />

        {/* Schema 2 - MedicalBusiness */}
        <script
          key="schema-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "MedicalClinic"],
              "@id": "https://vedaracare.ae/#organization",
              "name": "Vedara Care Polyclinic",
              "alternateName": "Vedara Care",
              "url": "https://vedaracare.ae/",
              "logo": "https://vedaracare.ae/images/logo.png",
              "image": "https://vedaracare.ae/images/clinic-exterior-jvc.jpg",
              "description": "DHA-Licensed multi-specialty polyclinic in Jumeirah Village Circle (JVC), Dubai. Specialties: Physiotherapy, Physiotherapy and Rehabilitation, Ayurvedic Medicine, Beauty Therapy, Dermatology, General Practice, Nursing. HIFU skin lifting delivered under hybrid protocol (DHA-Licensed Aesthetician primary operator + Consultant Dermatologist Medical Director oversight).",
              "telephone": "[clinic phone]",
              "email": "[clinic email]",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "[clinic street address]",
                "addressLocality": "Jumeirah Village Circle",
                "addressRegion": "Dubai",
                "postalCode": "[postal code]",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[JVC latitude]",
                "longitude": "[JVC longitude]"
              },
              "hasMap": "[Google Maps URL]",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "AED 300 – AED 6,120",
              "paymentAccepted": ["Credit Card", "Debit Card", "Bank Transfer", "Cash"],
              "currenciesAccepted": "AED",
              "medicalSpecialty": ["Dermatology", "Aesthetic Medicine", "Beauty Therapy"],
              "availableService": {
                "@type": "MedicalProcedure",
                "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#procedure"
              },
              "medicalDirector": {
                "@type": "Person",
                "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
                "name": "[Medical Director Name]",
                "jobTitle": "DHA-Licensed Consultant Dermatologist, Medical Director"
              },
              "employee": [
                {
                  "@type": "Person",
                  "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
                  "name": "[Medical Director Name]"
                },
                {
                  "@type": "Person",
                  "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person",
                  "name": "Arfah Owais",
                  "jobTitle": "DHA-Licensed Aesthetician (HIFU Device-Certified)"
                }
              ],
              "reviewedBy": {
                "@type": "Person",
                "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
                "name": "[Medical Director Name]"
              },
              "areaServed": [
                {"@type": "Place", "name": "Jumeirah Village Circle (JVC)"},
                {"@type": "Place", "name": "Jumeirah Village Triangle (JVT)"},
                {"@type": "Place", "name": "Dubai Marina"},
                {"@type": "Place", "name": "Dubai Sports City"},
                {"@type": "Place", "name": "Dubai Studio City"},
                {"@type": "Place", "name": "Dubai Production City"},
                {"@type": "Place", "name": "Motor City"},
                {"@type": "Place", "name": "Al Barsha"},
                {"@type": "Place", "name": "Arjan"},
                {"@type": "Place", "name": "Dubai Hills Estate"},
                {"@type": "Place", "name": "Emirates Hills"},
                {"@type": "Place", "name": "Jumeirah Lakes Towers (JLT)"},
                {"@type": "Place", "name": "Palm Jumeirah"},
                {"@type": "Place", "name": "Business Bay"},
                {"@type": "Place", "name": "Downtown Dubai"},
                {"@type": "Place", "name": "The Springs"},
                {"@type": "Place", "name": "The Meadows"},
                {"@type": "Place", "name": "Dubai overall"}
              ]
            })
          }}
        />

        {/* Schema 3 - Service Entities */}
        <script
          key="schema-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-single-zone",
                  "serviceType": "Single-Zone HIFU Treatment",
                  "name": "Single-Zone HIFU (Jawline, Submental, or Brow)",
                  "description": "Focused ultrasound skin lifting for a single treatment zone — jawline, submental (double chin), or lateral brow. Three-depth cartridge delivery (1.5mm/3.0mm/4.5mm). Delivered by HIFU device-certified DHA-Licensed Aesthetician under Medical Director oversight.",
                  "provider": {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "1200", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-two-zone",
                  "serviceType": "Two-Zone HIFU Treatment",
                  "name": "Two-Zone HIFU (Any Combination)",
                  "description": "Focused ultrasound skin lifting for two combined treatment zones. Three-depth cartridge delivery. Delivered under hybrid protocol.",
                  "provider": {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "1800", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-full-face",
                  "serviceType": "Full Face HIFU Treatment",
                  "name": "Full Face HIFU Skin Lifting",
                  "description": "Complete facial HIFU protocol with three-depth cartridge delivery across all mapped facial vectors — mid-face, jawline, lower face, lateral brow if indicated.",
                  "provider": {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "2000", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-face-neck",
                  "serviceType": "Full Face + Neck HIFU Treatment",
                  "name": "Full Face + Neck HIFU Skin Lifting (Signature Programme)",
                  "description": "Comprehensive facial and neck HIFU protocol — three-depth cartridge delivery across all mapped facial and cervical vectors. Signature Vedara Care JVC programme.",
                  "provider": {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "2400", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-face-neck-decolletage",
                  "serviceType": "Full Face + Neck + Décolletage HIFU Treatment",
                  "name": "Full Face + Neck + Décolletage HIFU",
                  "description": "Extended HIFU protocol including décolletage zone. Three-depth cartridge delivery across facial, cervical, and décolletage vectors.",
                  "provider": {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "3000", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-hifu-mesotherapy-combined",
                  "serviceType": "Combined HIFU + Mesotherapy Session",
                  "name": "Combined HIFU + Mesotherapy (Same-Visit Programme)",
                  "description": "Full face + neck HIFU delivered same visit as mesotherapy hydration injection protocol. Combined structural lift + hydration layer. Dual practitioner delivery — Arfah for HIFU, Medical Director for mesotherapy injections.",
                  "provider": [
                    {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                    {"@id": "https://vedaracare.ae/team/[medical-director-slug]/#person"}
                  ],
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "3200", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-hifu-prp-combined",
                  "serviceType": "Combined HIFU + PRP Session",
                  "name": "Combined HIFU + PRP Facial (Same-Visit Programme)",
                  "description": "Full face + neck HIFU delivered same visit as physician-administered PRP autologous platelet-rich plasma injection. Structural lift + regenerative amplification. Dual practitioner delivery.",
                  "provider": [
                    {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                    {"@id": "https://vedaracare.ae/team/[medical-director-slug]/#person"}
                  ],
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "3600", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-consultation",
                  "serviceType": "HIFU Consultation",
                  "name": "HIFU Consultation (Medical Director)",
                  "description": "Free 30-minute HIFU consultation with DHA-Licensed Consultant Dermatologist Medical Director. Comprehensive skin laxity assessment, medical clearance, contraindication screening, personalized protocol design, transparent pricing review, no same-day booking pressure. Consultation fee AED 300, waived if patient proceeds with treatment within 60 days.",
                  "provider": {"@id": "https://vedaracare.ae/team/[medical-director-slug]/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "price": "300", "priceCurrency": "AED", "priceValidUntil": "2027-12-31"}
                },
                {
                  "@type": "Service",
                  "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#service-annual-maintenance",
                  "serviceType": "Annual HIFU Maintenance",
                  "name": "Annual HIFU Maintenance (Existing Patient)",
                  "description": "Annual HIFU maintenance session for existing Vedara Care JVC HIFU patients. 10% loyalty pricing versus initial session pricing. Vector map on file used for refinement based on 12-month response.",
                  "provider": {"@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"},
                  "areaServed": {"@type": "Place", "name": "Jumeirah Village Circle Dubai"},
                  "offers": {"@type": "Offer", "priceSpecification": {"@type": "PriceSpecification", "description": "10% loyalty discount on standard session pricing", "priceCurrency": "AED"}, "priceValidUntil": "2027-12-31"}
                }
              ]
            })
          }}
        />

        {/* Schema 4 - BreadcrumbList */}
        <script
          key="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://vedaracare.ae/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Treatments",
                  "item": "https://vedaracare.ae/treatments/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Aesthetic Treatments",
                  "item": "https://vedaracare.ae/treatments/aesthetic/"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "HIFU Skin Lifting & Tightening JVC",
                  "item": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/"
                }
              ]
            })
          }}
        />
        {/* Schema 5 — FAQPage */}
        <script
          key="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does HIFU cost at Vedara Care JVC?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU at Vedara Care Polyclinic JVC starts from AED 1,200 for single-zone treatment, from AED 2,000 for full face, from AED 2,400 for full face + neck, and from AED 3,000 for full face + neck + décolletage. Programme course of 2 sessions delivers 15-20% savings. First consultation is AED 300 (waived if you proceed with treatment)."}
                },
                {
                  "@type": "Question",
                  "name": "Is HIFU safe? What are the risks?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU is generally well-tolerated with a favourable safety profile documented in peer-reviewed literature. Common minor effects (typically resolving within 24-72 hours) include mild redness, slight tenderness, temporary tingling. Vedara Care JVC HIFU protocol includes Medical Director medical clearance for every patient and HIFU device-certified operator delivery. Contraindications are screened at consultation."}
                },
                {
                  "@type": "Question",
                  "name": "How many HIFU sessions do I need?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Most patients require either a single session (preventive-oriented or annual maintenance) or a programme course of 2 sessions spaced 6-9 months apart (established laxity). The Medical Director's consultation assessment determines which protocol is appropriate for your specific case — this is not sold as a fixed package."}
                },
                {
                  "@type": "Question",
                  "name": "What is the recovery time from HIFU?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Zero clinical downtime. Patients typically return to normal activity the same day. Mild redness or slight tenderness may be present 24-72 hours post-session. Makeup can be applied the next day. Sun protection SPF 50+ for 2 weeks, gentle skincare for 5-7 days, no vigorous exercise for 24 hours."}
                },
                {
                  "@type": "Question",
                  "name": "Does HIFU hurt?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU sensation varies by depth. The 4.5mm SMAS-targeting cartridge produces the most intense sensation — brief warm or prickling with each ultrasound pulse. At Vedara Care JVC, topical numbing is applied 30-45 minutes before treatment. Most patients describe HIFU as manageable 4-6 out of 10 discomfort for the deepest cartridge."}
                },
                {
                  "@type": "Question",
                  "name": "How does HIFU compare to a surgical facelift?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU targets the same SMAS tissue layer that surgical facelift addresses, but through focused ultrasound rather than surgical incision. HIFU is appropriate for mild-to-moderate laxity in patients with reasonable skin quality; it does not replace surgical facelift for severe laxity. Our Medical Director's consultation includes explicit triage — patients better served by surgical consultation are referred rather than accepted for HIFU."}
                },
                {
                  "@type": "Question",
                  "name": "How does HIFU compare to RF (radiofrequency) skin tightening?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU uses focused ultrasound at fixed depths (1.5mm/3.0mm/4.5mm) with SMAS-layer targeting; RF uses electromagnetic energy that heats the dermis less selectively. HIFU is generally single-session or programme course of 2; RF typically requires a series of 4-6 sessions. HIFU produces more structural lift; RF produces more subtle skin quality firming."}
                },
                {
                  "@type": "Question",
                  "name": "How does HIFU compare to thread lift?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Thread lift is a minimally invasive procedure inserting dissolvable barbed sutures — immediate visible lift, 12-18 month durability, requires local anaesthesia, 3-7 days recovery with possible bruising. HIFU is non-invasive with gradual result over 60-90 days, zero downtime. Different modalities for different patient priorities."}
                },
                {
                  "@type": "Question",
                  "name": "How long do HIFU results last?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Result durability at 12-18 months is typical in appropriate candidates with reasonable aftercare compliance. Individual durability depends on baseline skin quality, age, lifestyle factors, and general aging progression. Annual maintenance sessions are recommended to extend and refine results."}
                },
                {
                  "@type": "Question",
                  "name": "When will I see results from HIFU?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Initial subtle tightening: 2-4 weeks post-session. Peak result: 60-90 days post-session (peak collagen remodelling). Continued improvement to 6 months. This gradual timeline is why we photograph baseline and 90-day — the actual HIFU result is not visible immediately after treatment."}
                },
                {
                  "@type": "Question",
                  "name": "Can I have HIFU if I have dark skin (Fitzpatrick IV-VI)?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes. HIFU does not target melanin (unlike some laser modalities), so there is no increased risk of post-inflammatory hyperpigmentation in darker skin phototypes. The Suh et al. 2011 study specifically documented HIFU efficacy in Asian (Fitzpatrick IV-V) skin. Our Medical Director assesses individual patient factors at consultation."}
                },
                {
                  "@type": "Question",
                  "name": "Can men have HIFU?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes. HIFU is appropriate for male patients addressing jawline definition, submental (double chin) laxity, and general facial skin quality. Male HIFU is a growing demographic in Dubai. Same protocol structure, same Medical Director oversight, same transparent pricing."}
                },
                {
                  "@type": "Question",
                  "name": "Is HIFU safe during pregnancy?",
                  "acceptedAnswer": {"@type": "Answer", "text": "No. Vedara Care JVC does not perform HIFU during pregnancy or breastfeeding. No safety data supports HIFU during pregnancy; theoretical caution applies. Post-pregnancy and post-breastfeeding, HIFU is appropriate once weight has stabilized."}
                },
                {
                  "@type": "Question",
                  "name": "Does insurance cover HIFU in Dubai?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU is typically classified as elective aesthetic and not routinely covered by UAE health insurance. Vedara Care Polyclinic JVC operates on insurance reimbursement basis (not direct billing) for aesthetic procedures. Complimentary documentation supporting reimbursement enquiry is provided on request."}
                },
                {
                  "@type": "Question",
                  "name": "Can HIFU be combined with other treatments (mesotherapy, PRP, filler)?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Yes. HIFU is compatible with mesotherapy, PRP, and dermal filler in combined programme protocols. Spacing and sequencing designed by the Medical Director. Same-visit combined sessions available (HIFU + mesotherapy, HIFU + PRP). HIFU + filler typically sequenced across separate visits."}
                },
                {
                  "@type": "Question",
                  "name": "What age should I start HIFU?",
                  "acceptedAnswer": {"@type": "Answer", "text": "HIFU is rarely appropriate for patients under 25. Preventive-oriented HIFU can begin in the early 30s. Corrective HIFU is most impactful for mid-30s through mid-60s patients. Age over 65 is assessed case-by-case. The Medical Director's consultation assessment determines appropriateness at your specific age."}
                },
                {
                  "@type": "Question",
                  "name": "Where is Vedara Care Polyclinic JVC located?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Vedara Care Polyclinic is in Jumeirah Village Circle, Dubai — walking distance from Circle Mall, 3 minutes from FIVE Jumeirah Village Hotel, 5 minutes from JSS Private School. DHA-licensed multi-specialty facility. Free parking available."}
                },
                {
                  "@type": "Question",
                  "name": "What if I have a bad reaction to HIFU?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Adverse events from HIFU are rare and typically minor. Any adverse event is managed within the Medical Director's clinical governance at Vedara Care JVC. Contact clinic immediately if you experience unusual reactions post-session. Serious complications are managed with appropriate escalation and referral if required."}
                },
                {
                  "@type": "Question",
                  "name": "Is HIFU better than HIFU facial packages offered elsewhere?",
                  "acceptedAnswer": {"@type": "Answer", "text": "The term HIFU facial is used variably in Dubai — sometimes for genuine medical-grade HIFU, sometimes for lower-energy consumer-device treatments. Vedara Care JVC HIFU protocol uses medical-grade device with three-depth cartridge delivery, device-specific operator certification, and Medical Director oversight. Verify what any provider is actually delivering when comparing pricing."}
                },
                {
                  "@type": "Question",
                  "name": "How do I book a HIFU consultation at Vedara Care JVC?",
                  "acceptedAnswer": {"@type": "Answer", "text": "Use the Book HIFU Consultation button on this page, message on WhatsApp, or call the clinic. Free 30-minute consultation with the Medical Director. Consultation slots typically book 2-3 weeks in advance during peak seasons. WhatsApp is the fastest confirmation channel."}
                }
              ]
            })
          }}
        />
        {/* Schema 6 — HowTo */}
        <script
          key="schema-howto"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#howto",
              "name": "Vedara Care JVC HIFU Skin Lifting & Tightening Session Protocol",
              "description": "Ten-step HIFU session protocol delivered at Vedara Care Polyclinic Jumeirah Village Circle Dubai by HIFU device-certified DHA-Licensed Aesthetician under Consultant Dermatologist Medical Director oversight.",
              "totalTime": "PT90M",
              "estimatedCost": {"@type": "MonetaryAmount", "currency": "AED", "value": "2400"},
              "supply": [
                {"@type": "HowToSupply", "name": "HIFU device with 4.5mm cartridge (SMAS-layer targeting)"},
                {"@type": "HowToSupply", "name": "HIFU device 3.0mm cartridge (reticular dermis targeting)"},
                {"@type": "HowToSupply", "name": "HIFU device 1.5mm cartridge (superficial dermis targeting)"},
                {"@type": "HowToSupply", "name": "Ultrasound coupling gel"},
                {"@type": "HowToSupply", "name": "Topical anaesthetic (lidocaine 4-5%)"},
                {"@type": "HowToSupply", "name": "Non-alkaline skin cleanser"},
                {"@type": "HowToSupply", "name": "Cooling gel (post-procedure)"},
                {"@type": "HowToSupply", "name": "Post-procedure calming serum (panthenol, allantoin)"},
                {"@type": "HowToSupply", "name": "Sterile gauze and patient documentation forms"}
              ],
              "tool": [
                {"@type": "HowToTool", "name": "HIFU treatment head with transducer"},
                {"@type": "HowToTool", "name": "Fine marking pencil for vector mapping"},
                {"@type": "HowToTool", "name": "Standardized photography equipment for baseline documentation"},
                {"@type": "HowToTool", "name": "Vector map documentation form"}
              ],
              "step": [
                {"@type": "HowToStep", "position": 1, "name": "Medical Clearance Verification", "text": "Verify Medical Director's medical clearance documentation from earlier consultation. Note any new health changes since consultation. Escalate to Medical Director if material changes occurred.", "timeRequired": "PT5M"},
                {"@type": "HowToStep", "position": 2, "name": "Consent and Photography", "text": "Review and sign session-specific written informed consent. Capture baseline photography under standardized lighting — front, oblique, profile, submental view, décolletage if included.", "timeRequired": "PT5M"},
                {"@type": "HowToStep", "position": 3, "name": "Skin Cleansing and Preparation", "text": "Thoroughly cleanse treatment area with gentle non-alkaline cleanser to remove all makeup, sunscreen, oil. Dry and lightly tone skin for clean ultrasound coupling.", "timeRequired": "PT5M"},
                {"@type": "HowToStep", "position": 4, "name": "Topical Anaesthetic Application", "text": "Apply topical lidocaine 4-5% to treatment areas under occlusion. 30-45 minute numbing window for optimal comfort during 4.5mm cartridge delivery. Offer oral analgesia if requested and appropriate.", "timeRequired": "PT30M"},
                {"@type": "HowToStep", "position": 5, "name": "Vector Mapping", "text": "Arfah maps treatment vectors using fine marking pencil following Medical Director-cleared protocol. Jawline vectors, mid-face vectors, submental focus zones, lateral brow zones (if indicated), décolletage zones (if included) marked systematically. Photograph vector map for documentation.", "timeRequired": "PT10M"},
                {"@type": "HowToStep", "position": 6, "name": "4.5mm SMAS Delivery", "text": "Remove anaesthetic residue, cleanse again, apply ultrasound coupling gel. Load 4.5mm cartridge. Deliver treatment lines along mapped vectors targeting SMAS layer. Systematic delivery across all mapped SMAS zones with continuous patient comfort monitoring.", "timeRequired": "PT18M"},
                {"@type": "HowToStep", "position": 7, "name": "3.0mm Reticular Dermis Delivery", "text": "Load 3.0mm cartridge. Deliver treatment lines targeting reticular dermis at appropriate density per protocol. Sensation typically more comfortable than 4.5mm.", "timeRequired": "PT12M"},
                {"@type": "HowToStep", "position": 8, "name": "1.5mm Superficial Dermis Delivery", "text": "Load 1.5mm cartridge. Deliver treatment lines targeting superficial dermis at appropriate density. Generally the most comfortable depth.", "timeRequired": "PT12M"},
                {"@type": "HowToStep", "position": 9, "name": "Post-Procedure Cooling and Calming", "text": "Clean coupling gel thoroughly. Apply cooling gel to reduce residual thermal sensation. Apply post-procedure calming serum (panthenol, allantoin, anti-inflammatory botanicals). Immediate post-session photography for baseline reference.", "timeRequired": "PT10M"},
                {"@type": "HowToStep", "position": 10, "name": "Aftercare Briefing and Follow-Up Scheduling", "text": "Provide and verbally review written aftercare instructions: SPF 50+ for 2 weeks, gentle skincare for 5-7 days, no facial massage or treatments for 2 weeks, no vigorous exercise for 24 hours. Schedule 90-day follow-up appointment.", "timeRequired": "PT8M"}
              ]
            })
          }}
        />
        {/* Schema 7 — SpeakableSpecification */}
        <script
          key="schema-speakable"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#webpage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [
                  ".speakable-quick-answer",
                  ".speakable-section-answer",
                  ".speakable-faq-priority"
                ]
              }
            })
          }}
        />
        {/* Schema 8 — MedicalWebPage */}
        <script
          key="schema-medical"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#medicalwebpage",
              "url": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/",
              "name": "HIFU Skin Lifting & Tightening in JVC — Non-Surgical SMAS Lift | Vedara Care Polyclinic",
              "description": "HIFU (High-Intensity Focused Ultrasound) at Vedara Care Polyclinic JVC: hybrid protocol with HIFU device-certified DHA-Licensed Aesthetician primary delivery under Consultant Dermatologist Medical Director oversight. Sessions from AED 2,400 full face + neck. Programme course savings. Honest patient triage. Peer-reviewed evidence-based protocol.",
              "inLanguage": "en-AE",
              "isPartOf": {"@id": "https://vedaracare.ae/#website"},
              "about": {"@id": "https://vedaracare.ae/treatments/hifu-skin-lifting-tightening-jvc/#procedure"},
              "mainContentOfPage": {
                "@type": "WebPageElement",
                "cssSelector": "article.hifu-treatment-page"
              },
              "medicalAudience": [
                {"@type": "MedicalAudience", "audienceType": "Patient"},
                {"@type": "MedicalAudience", "audienceType": "Prospective aesthetic patient"}
              ],
              "lastReviewed": "[Publish date]",
              "reviewedBy": {
                "@type": "Person",
                "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
                "name": "[Medical Director Name]",
                "jobTitle": "DHA-Licensed Consultant Dermatologist, Medical Director, Vedara Care Polyclinic JVC"
              },
              "author": [
                {
                  "@type": "Person",
                  "@id": "https://vedaracare.ae/team/[medical-director-slug]/#person",
                  "name": "[Medical Director Name]"
                },
                {
                  "@type": "Person",
                  "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person",
                  "name": "Arfah Owais"
                }
              ],
              "publisher": {"@id": "https://vedaracare.ae/#organization"},
              "citation": [
                {
                  "@type": "ScholarlyArticle",
                  "name": "Ultrasound tightening of facial and neck skin: a rater-blinded prospective cohort study",
                  "author": "Alam M, White LE, Martin N, Witherspoon J, Yoo S, West DP",
                  "isPartOf": {"@type": "Periodical", "name": "Journal of the American Academy of Dermatology"},
                  "datePublished": "2010",
                  "volumeNumber": "62",
                  "pageStart": "262",
                  "pageEnd": "269",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/19926167/"
                },
                {
                  "@type": "ScholarlyArticle",
                  "name": "Intense focused ultrasound tightening in Asian skin: clinical and pathologic results",
                  "author": "Suh DH, Shin MK, Lee SJ, Rho JH, Lee MH, Kim NI, Song KY",
                  "isPartOf": {"@type": "Periodical", "name": "Dermatologic Surgery"},
                  "datePublished": "2011",
                  "volumeNumber": "37",
                  "pageStart": "1595",
                  "pageEnd": "1602",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/21883649/"
                },
                {
                  "@type": "ScholarlyArticle",
                  "name": "Noninvasive skin tightening: focus on new ultrasound techniques",
                  "author": "Fabi SG",
                  "isPartOf": {"@type": "Periodical", "name": "Clinical, Cosmetic and Investigational Dermatology"},
                  "datePublished": "2015",
                  "volumeNumber": "8",
                  "pageStart": "47",
                  "pageEnd": "52",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/25709486/"
                },
                {
                  "@type": "ScholarlyArticle",
                  "name": "Multiple pass ultrasound tightening of skin laxity of the lower face and neck",
                  "author": "Lee HS, Jang WS, Cha YJ, Choi YH, Tak Y, Hwang E, Kim BJ, Kim MN",
                  "isPartOf": {"@type": "Periodical", "name": "Dermatologic Surgery"},
                  "datePublished": "2012",
                  "volumeNumber": "38",
                  "pageStart": "20",
                  "pageEnd": "27",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/22093156/"
                },
                {
                  "@type": "ScholarlyArticle",
                  "name": "Evaluation of a microfocused ultrasound system for improving skin laxity and tightening in the lower face",
                  "author": "Oni G, Hoxworth R, Teotia S, Brown S, Kenkel JM",
                  "isPartOf": {"@type": "Periodical", "name": "Aesthetic Surgery Journal"},
                  "datePublished": "2014",
                  "volumeNumber": "34",
                  "pageStart": "1099",
                  "pageEnd": "1110",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/25028740/"
                },
                {
                  "@type": "ScholarlyArticle",
                  "name": "Long-term efficacy of micro-focused ultrasound with visualization for lifting and tightening lax facial and neck skin using a customized vectoring treatment method",
                  "author": "Werschler WP, Werschler PS",
                  "isPartOf": {"@type": "Periodical", "name": "Journal of Clinical and Aesthetic Dermatology"},
                  "datePublished": "2016",
                  "volumeNumber": "9",
                  "pageStart": "27",
                  "pageEnd": "33",
                  "url": "https://pubmed.ncbi.nlm.nih.gov/26962391/"
                },
                {
                  "@type": "GovernmentService",
                  "name": "FDA Clearance — Ultherapy Non-Invasive Brow, Submental, and Décolletage Lifting",
                  "provider": {"@type": "GovernmentOrganization", "name": "United States Food and Drug Administration"},
                  "datePublished": "2009",
                  "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm"
                },
                {
                  "@type": "MedicalGuideline",
                  "name": "Dubai Health Authority Advertising Guidance for Aesthetic Medical Services",
                  "provider": {"@type": "GovernmentOrganization", "name": "Dubai Health Authority (DHA)"},
                  "url": "https://www.dha.gov.ae/"
                },
                {
                  "@type": "MedicalGuideline",
                  "name": "Ministry of Health and Prevention (MOHAP) Medical Device Registration Guidance UAE",
                  "provider": {"@type": "GovernmentOrganization", "name": "Ministry of Health and Prevention UAE"},
                  "url": "https://www.mohap.gov.ae/"
                },
                {
                  "@type": "CreativeWork",
                  "name": "Vedara Care Polyclinic HIFU Protocol Documentation and Clinical Governance Framework",
                  "author": {"@id": "https://vedaracare.ae/team/[medical-director-slug]/#person"},
                  "publisher": {"@id": "https://vedaracare.ae/#organization"}
                }
              ]
            })
          }}
        />
      </Head>

      <main className="min-h-screen font-sans bg-[#F4F0EA]">
        <HifuHero />
        <HifuQuickAnswer />
        <HifuAtAGlance />
        <HifuWhyUs />
        <HifuEvidence />
        <HifuClinicalEducation />
        <HifuPatientSelection />
        <HifuProtocol />
        <HifuPatientJourney />
        <HifuCaseNarratives />
        <HifuTeam />
        <HifuInvestment />
        <HifuFaq />
        <HifuFinalCta />
        <HifuAestheticCluster />
        <HifuClinicInfo />
        <HifuPopup />
      </main>
    </>
  );
};

export default HifuJvcDubai;
