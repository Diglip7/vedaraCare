import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import OxyGeneoArfahProfile from '../../components/oxygeneo/OxyGeneoArfahProfile';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import { AestheticianRelatedPages } from '../../components/aesthetician/AestheticianPageTemplate';
import BlogRelatedArticles from '../../components/blog/BlogRelatedArticles';
import FinalCTA from '../../components/ayurveda/FinalCTA';

// Import Oxy-Geneo components
import OxyGeneoShortVersion from '../../components/oxygeneo/OxyGeneoShortVersion';
import OxyGeneoComprehensiveProtocol from '../../components/oxygeneo/OxyGeneoComprehensiveProtocol';
import OxyGeneoJourney from '../../components/oxygeneo/OxyGeneoJourney';
import OxyGeneoFAQ from '../../components/oxygeneo/OxyGeneoFAQ';
import OxyGeneoLocation from '../../components/oxygeneo/OxyGeneoLocation';

// Import data
import {
  oxyGeneoHero,
  oxyGeneoHowItWorks,
  oxyGeneoSkinTypes,
  oxyGeneoPatientVoices,
  oxyGeneoPricing,
  oxyGeneoFAQ,
  oxyGeneoRelatedTreatmentsGrid,
  oxyGeneoArticles
} from '../../data/oxyGeneoData';

const OxyGeneoFacialJVC = () => {
  const router = useRouter();
  const currentUrl = `https://vedaracare.ae${router.asPath}`;

  return (
    <>
      <Head>
        <title>Oxy-Geneo Facial JVC Dubai | CIBTAC-UK Aesthetician | Vedara Care Polyclinic</title>
        <meta name="description" content="Book Oxy-Geneo Facial at Vedara Care JVC — walking distance from Circle Mall. Israeli Pollogen tri-effect technology (exfoliation, Bohr Effect oxygenation, active infusion) with six OxyPod options — NeoBright, NeoRevive, Balance, more. Delivered by Arfah Owais, DHA-licensed aesthetician, CIBTAC-UK diploma, 8+ years experience. No downtime." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <link rel="canonical" href="https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/oxy-geneo-facial-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/" />

        <meta property="og:title" content="Oxy-Geneo Facial at Vedara Care JVC Dubai | Israeli Pollogen Technology | Walking Distance from Circle Mall" />
        <meta property="og:description" content="Oxy-Geneo Facial at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall. Israeli Pollogen tri-effect medical-grade facial technology combining simultaneous exfoliation, physiological oxygenation via the Bohr Effect (CO2 bubbles triggering the body's own oxygen delivery to the skin surface), and active serum infusion. Six OxyPod treatment options: NeoBright (brightening and pigmentation), NeoRevive (anti-aging), Balance (oily and acne-prone), Illuminate (even tone), Retexture (firmness), Hydrate (dehydration). Optional TriPollar RF add-on for integrated skin tightening. Ultrasound and LED light therapy add-ons available. Delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience. Particularly well-tolerated by sensitive skin. Female practitioner. Multi-language (Arabic, English, Hindi, Urdu). No downtime." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/oxy-geneo-facial-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oxy-Geneo Facial JVC Dubai | CIBTAC-UK Aesthetician | Vedara Care" />
        <meta name="twitter:description" content="Tri-effect Pollogen facial with Bohr Effect oxygenation and six OxyPod options at Vedara Care JVC. Delivered by CIBTAC-UK certified aesthetician." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/oxy-geneo-facial-jvc.jpg" />


        <script
          key="0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": "https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/#procedure",
              "name": "Oxy-Geneo Tri-Effect Medical-Grade Facial",
              "alternateName": [
                "Oxy-Geneo Facial",
                "OxyGeneo",
                "Oxygeneo",
                "Super Facial",
                "Pollogen Oxy-Geneo Facial"
              ],
              "procedureType": "Advanced Aesthetic Facial Treatment",
              "howPerformed": "Tri-effect medical-grade facial protocol delivered via Israeli Pollogen technology combining three simultaneous actions during a single 30-45 minute session. Action 1 Exfoliation: abrasive treatment tip combined with OxyPod capsule alpha-hydroxy acid content provides gentle physical and chemical exfoliation. Action 2 Oxygenation: OxyPod-primer chemical reaction produces CO2 bubbles on skin surface triggering the Bohr Effect — localised CO2 rise causes haemoglobin to release oxygen more readily, body sends oxygen-rich blood to treatment area for increased physiological oxygen delivery to skin during session. Action 3 Infusion: OxyPod-specific active ingredients infused into skin — varies by OxyPod type. Six OxyPod treatment options: NeoBright (brightening and pigmentation via kojic acid, retinol, azelaic acid, vitamin C, licorice extract), NeoRevive (anti-aging via retinol, peptides, hyaluronic acid, antioxidants), Balance/Detoxifying (oily and acne-prone via kaolin clay, salicylic acid), Illuminate (even skin tone), Retexture (firmness and texture), Hydrate (deep moisture). Optional add-ons: TriPollar RF (Pollogen tri-polar radiofrequency for surface skin tightening, 15-25 min additional), Ultrasound (deeper serum infusion, 10-15 min additional), LED light therapy (Blue 415nm for acne or Red 630nm for aging, 10-15 min additional). Delivered by DHA-licensed aesthetician with CIBTAC-UK diploma at Vedara Care Polyclinic Jumeirah Village Circle (JVC) Dubai.",
              "preparation": "Arrive with makeup off or time for gentle removal. Avoid retinoids/tretinoin 2-3 days before. Avoid glycolic acid products 24 hours before. Avoid recent significant sun exposure 24-48 hours. Wait 14 days after botox/fillers. Wait 2-4 weeks after chemical peel or laser per practitioner guidance.",
              "followup": "Apply sun protection immediately and continue rigorous sun protection 48+ hours. Avoid intense exercise, sauna, hot yoga, swimming 24 hours. Avoid retinoids/exfoliating acids 48-72 hours. Continue home skincare per practitioner recommendation.",
              "bodyLocation": "Face, neck, décolleté as protocol includes",
              "indication": [
                {
                  "@type": "MedicalCondition",
                  "name": "Sensitive and Reactive Skin"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Pigmentation on Medium-to-Deep Skin Tones (Fitzpatrick IV-VI)"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Early Signs of Aging (Prevention)"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Dehydrated Skin"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Oily and Acne-Prone Skin (Non-Active)"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Pre-Event Skin Refresh"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Post-Sun-Exposure Skin Recovery"
                },
                {
                  "@type": "MedicalCondition",
                  "name": "Skin Tightening Integration Focus (with TriPollar RF add-on)"
                }
              ],
              "contraindication": [
                {
                  "@type": "MedicalContraindication",
                  "name": "Active severe acne flare"
                },
                {
                  "@type": "MedicalContraindication",
                  "name": "Active rosacea flare"
                },
                {
                  "@type": "MedicalContraindication",
                  "name": "Roaccutane use within past 6 months"
                },
                {
                  "@type": "MedicalContraindication",
                  "name": "Pregnancy (NeoBright and NeoRevive OxyPods)"
                },
                {
                  "@type": "MedicalContraindication",
                  "name": "Open skin wounds or active infections in treatment area"
                },
                {
                  "@type": "MedicalContraindication",
                  "name": "Recent significant sunburn"
                },
                {
                  "@type": "MedicalContraindication",
                  "name": "Allergy to listed OxyPod ingredients"
                }
              ],
              "performer": {
                "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"
              }
            })
          }}
        />
        <script
          key="1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": [
                "MedicalBusiness",
                "LocalBusiness",
                "HealthAndBeautyBusiness"
              ],
              "@id": "https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/#business",
              "name": "Vedara Care Oxy-Geneo Facial JVC",
              "alternateName": [
                "Oxy-Geneo Vedara Care JVC",
                "OxyGeneo JVC Dubai",
                "Super Facial JVC Dubai"
              ],
              "url": "https://vedaracare.ae/treatments/oxy-geneo-facial-jvc/",
              "parentOrganization": {
                "@id": "https://vedaracare.ae/#organization"
              },
              "description": "Oxy-Geneo Facial treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Tri-effect medical-grade facial using Israeli Pollogen technology (exfoliation, Bohr Effect oxygenation, active infusion) with six OxyPod treatment options and TriPollar RF, Ultrasound, LED add-ons. Delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience.",
              "telephone": "+971555736312",
              "priceRange": "AED 500 - AED 6,000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
                "addressLocality": "Jumeirah Village Circle",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.0594379",
                "longitude": "55.2013897"
              },
              "hasMap": "https://maps.google.com/?q=Vedara+Care+Polyclinic+JVC",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "Place",
                  "name": "Jumeirah Village Circle"
                },
                {
                  "@type": "Place",
                  "name": "Circle Mall JVC Vicinity"
                },
                {
                  "@type": "City",
                  "name": "Dubai"
                },
                {
                  "@type": "Place",
                  "name": "Jumeirah Village Triangle"
                },
                {
                  "@type": "Place",
                  "name": "Al Barsha"
                },
                {
                  "@type": "Place",
                  "name": "Al Barsha South"
                },
                {
                  "@type": "Place",
                  "name": "Dubai Sports City"
                },
                {
                  "@type": "Place",
                  "name": "Motor City"
                },
                {
                  "@type": "Place",
                  "name": "Arjan"
                }
              ],
              "medicalSpecialty": [
                "Beauty Therapy",
                "Aesthetic Medicine",
                "Advanced Facial Treatment"
              ],
              "isAcceptingNewPatients": true,
              "practitioner": {
                "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person"
              },
              "availableService": [
                {
                  "@type": "Service",
                  "name": "Core Oxy-Geneo (single OxyPod, no add-ons)"
                },
                {
                  "@type": "Service",
                  "name": "Oxy-Geneo with TriPollar RF Add-On"
                },
                {
                  "@type": "Service",
                  "name": "Oxy-Geneo with Ultrasound Add-On"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "480",
                "bestRating": "5",
                "worstRating": "1"
              },
              "lastReviewed": "2026-09-21"
            })
          }}
        />
        <script
          key="2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Oxy-Geneo Facial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oxy-Geneo is a tri-effect medical-grade facial protocol using Israeli Pollogen technology to simultaneously exfoliate the skin surface, trigger physiological oxygenation via the Bohr Effect (CO2 bubbles produced by a capsule-primer reaction cause the body to send oxygen-rich blood to the skin surface), and infuse active serums into the skin — all in a single 30-45 minute session. Six OxyPod treatment options address different skin concerns. No downtime. Particularly well-tolerated by sensitive skin."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Bohr Effect and how does Oxy-Geneo use it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Bohr Effect is a well-established physiological principle first described in 1904 — the presence of CO2 causes haemoglobin to release oxygen more readily, so the body sends more oxygen where CO2 concentrations are higher. Oxy-Geneo uses this deliberately: the OxyPod-primer reaction produces CO2 bubbles on the skin surface, the localised CO2 rise triggers increased oxygen-rich blood delivery to the treatment area during the session. Real physiology, honest framing about clinical significance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Oxy-Geneo different from HydraFacial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Different technology approaches. HydraFacial uses patented vortex-fusion suction-based technology delivering sequential 3-step protocol. Oxy-Geneo uses capsule-based OxyPod technology delivering three actions simultaneously — exfoliation, oxygenation via Bohr Effect, active infusion. HydraFacial suits patients with congested pores wanting visible extraction; Oxy-Geneo suits patients with sensitive skin, pigmentation on medium-to-deep skin tones, or preference for non-suction technology. Both are valid — Arfah delivers both."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are OxyPods and how many options are there?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OxyPods are treatment-specific capsules containing active ingredients targeting different skin concerns. Six main OxyPod options: NeoBright (brightening and pigmentation via kojic acid, retinol, azelaic acid, vitamin C, licorice extract), NeoRevive (anti-aging via retinol, peptides, hyaluronic acid, antioxidants), Balance (oily and acne-prone via kaolin clay, salicylic acid), Illuminate (even skin tone), Retexture (firmness and texture), Hydrate (deep moisture). Arfah selects OxyPod based on skin analysis findings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the NeoBright OxyPod and who is it for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NeoBright is the pigmentation-focused OxyPod containing multi-pathway brightening actives (kojic acid, retinol, azelaic acid, vitamin C, licorice extract). Suits patients with sun damage, post-inflammatory hyperpigmentation, or mild uneven tone. Its multi-pathway approach is safer for medium-to-deep skin tones (Fitzpatrick IV-VI) than aggressive brightening approaches carrying higher post-inflammatory pigmentation risk. Programme approach for sustained improvement over 4-6 months."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the NeoRevive OxyPod and who is it for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NeoRevive is the anti-aging-focused OxyPod containing retinol, peptides, hyaluronic acid, and antioxidants. Suits patients in the 30s-40s prevention phase or older patients wanting anti-aging maintenance without aggressive intervention. Pairs well with TriPollar RF add-on for integrated tightening. Monthly programme recommended for cumulative benefit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Balance OxyPod and does it help with acne?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Balance (also called Detoxifying) OxyPod contains kaolin clay, salicylic acid, and balancing actives targeting oily skin, acne-prone skin, congested pores, and impurity build-up. Suits patients with oily or non-active acne-prone skin. Blue LED add-on supports acne-prone skin management. Not for active severe cystic acne — that needs dermatological medical management first. Arfah coordinates with the on-site dermatologist for acne patients requiring medical care before aesthetic work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Oxy-Geneo good for sensitive skin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Often yes — Oxy-Geneo is generally better tolerated by sensitive skin than HydraFacial due to the absence of suction, gentler controlled exfoliation, and physiological oxygenation approach. Many patients with sensitivity or reactive skin who found HydraFacial uncomfortable tolerate Oxy-Geneo well. Not universally suitable — Arfah assesses individually. For severely compromised skin barrier, skin barrier repair recommended before either treatment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can Oxy-Geneo treat pigmentation and melasma?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oxy-Geneo with NeoBright OxyPod addresses mild-to-moderate pigmentation meaningfully — particularly relevant for medium-to-deep skin tones where its multi-pathway approach is safer than aggressive brightening. For established deep melasma, dedicated Pigmentation and Melasma programme needed typically combining laser, topical, and home-care often with dermatologist coordination. Oxy-Geneo with NeoBright may be integrated as one component of broader Pigmentation programme."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Oxy-Geneo different from a regular facial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular facials rely on manual technique with topical products. Oxy-Geneo uses standardised Pollogen device technology with capsule-based active delivery, triggers physiological oxygenation via the Bohr Effect, and delivers three simultaneous actions (exfoliation, oxygenation, infusion) rather than sequential topical steps. More consistent results, deeper active penetration, no downtime. Regular facials often provide longer relaxation duration and personalised massage technique."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does Oxy-Geneo take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Core Oxy-Geneo with any single OxyPod without add-ons takes 30-45 minutes. Oxy-Geneo with TriPollar RF add-on takes 60-75 minutes. Oxy-Geneo Platinum with Core plus TriPollar RF plus Ultrasound plus LED takes 75-90 minutes. First-visit patients add 30 minutes for comprehensive skin analysis. LED light therapy add-on adds 10-15 minutes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there downtime after Oxy-Geneo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No downtime. Skin looks brighter and feels refreshed immediately post-treatment — the oxygenation glow is often the most distinctive result. Some patients experience mild pink flush for 30-60 minutes which settles quickly. Makeup can be applied 2-3 hours post-treatment. Sun protection essential. Avoid intense exercise, sauna, and hot yoga for 24 hours. Return to work or normal activities immediately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I get Oxy-Geneo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For sustained benefit, monthly programme recommended. Oxy-Geneo benefit peaks around 5-7 days post-treatment and tapers over 3-4 weeks — monthly cadence maintains skin quality. Single-session works well for pre-event refresh 3-7 days before a photographed occasion. Bridal patients typically follow 3-4 session pre-wedding sequence. Membership option available for rolling monthly maintenance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I have Oxy-Geneo during pregnancy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Some OxyPods contain actives not recommended during pregnancy — NeoBright contains retinol and azelaic acid, NeoRevive contains retinol and peptides. Hydrate OxyPod and Balance OxyPod may be considered depending on formulation — Arfah discusses specific ingredients during consultation. Confirm with your obstetrician. LED light therapy typically avoided during pregnancy. TriPollar RF not recommended during pregnancy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is TriPollar RF and should I add it to my Oxy-Geneo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TriPollar RF is Pollogen's proprietary tri-polar radiofrequency technology delivering gentle heat to deeper skin layers, stimulating collagen and providing surface tightening effect. Added at end of Oxy-Geneo protocol. Suits patients wanting integrated tightening benefit in a single visit. Not equivalent to HIFU for deep structural lifting, but valuable for surface-and-mid-depth tightening focus. Arfah recommends based on skin analysis findings and treatment goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can men have Oxy-Geneo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Oxy-Geneo is protocol-neutral to gender. Male skin often thicker with higher sebum production suits Balance OxyPod well for oil balance and pore health. Straightforward booking, 30-45 minute session, back to work immediately. Arfah delivers Oxy-Geneo for male patients regularly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I do before my Oxy-Geneo appointment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arrive with makeup off or with time for gentle removal. Avoid retinoids/tretinoin 2-3 days before if using them. Avoid glycolic acid products 24 hours before. Avoid recent significant sun exposure 24-48 hours. If you have had recent botox or fillers, wait 14 days. If you have had recent chemical peel or laser, wait per practitioner guidance typically 2-4 weeks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I do after Oxy-Geneo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Apply sun protection immediately and continue rigorous sun protection for at least 48 hours. Avoid intense exercise, sauna, hot yoga, and swimming for 24 hours. Avoid retinoids/exfoliating acids for 48-72 hours. Avoid makeup for 2-3 hours if possible. Continue home skincare per practitioner recommendation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who delivers Oxy-Geneo at Vedara Care JVC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arfah Owais — DHA-licensed aesthetician with CIBTAC-UK diploma from the Confederation of International Beauty Therapy and Cosmetology a UK gold-standard awarding body, NCLC certification, PMU certification, and 8+ years of hands-on clinical experience. Oxy-Geneo is one of her signature treatments — delivered across the full OxyPod range with and without add-ons across thousands of sessions. Multi-language Arabic, English, Hindi, Urdu. Female practitioner."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is the clinic and how do I book?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vedara Care Polyclinic is in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Book by phone, WhatsApp, or through the website booking system. First-visit patients book 60-minute slot 30-min analysis plus 30-min Core Oxy-Geneo. Clinic hours:  Monday - Sunday : 9 AM - 10 PM. Beauty Therapy is one of Vedara Care's seven DHA-licensed specialties."
                  }
                }
              ]
            })
          }}
        />
        <script
          key="entity-map"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Semantic Entity Map — Oxy-Geneo Facial JVC",
              "description": "Structured entity graph for AI and search engine comprehension of all key medical, geographic, practitioner, and service entities referenced on this page.",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "item": { "@type": "MedicalProcedure", "name": "Oxy-Geneo Facial", "description": "Primary treatment entity" } },
                { "@type": "ListItem", "position": 2, "item": { "@type": "Organization", "name": "Pollogen Technology", "description": "Israeli manufacturer authority" } },
                { "@type": "ListItem", "position": 3, "item": { "@type": "DefinedTerm", "name": "Bohr Effect", "description": "Core scientific mechanism" } },
                { "@type": "ListItem", "position": 4, "item": { "@type": "DefinedTerm", "name": "OxyPod Capsule System", "description": "Treatment customisation mechanism" } },
                { "@type": "ListItem", "position": 5, "item": { "@type": "DefinedTerm", "name": "Tri-Effect Simultaneous Actions", "description": "Three actions simultaneously" } },
                { "@type": "ListItem", "position": 6, "item": { "@type": "Product", "name": "NeoBright OxyPod", "description": "Pigmentation focus" } },
                { "@type": "ListItem", "position": 7, "item": { "@type": "Product", "name": "NeoRevive OxyPod", "description": "Anti-aging focus" } },
                { "@type": "ListItem", "position": 8, "item": { "@type": "Product", "name": "Balance OxyPod (Detoxifying)", "description": "Oily/acne-prone focus" } },
                { "@type": "ListItem", "position": 9, "item": { "@type": "Product", "name": "Illuminate OxyPod", "description": "Even tone focus" } },
                { "@type": "ListItem", "position": 10, "item": { "@type": "Product", "name": "Retexture OxyPod", "description": "Firmness/texture focus" } },
                { "@type": "ListItem", "position": 11, "item": { "@type": "Product", "name": "Hydrate OxyPod", "description": "Deep moisture focus" } },
                { "@type": "ListItem", "position": 12, "item": { "@type": "DefinedTerm", "name": "Super Facial", "description": "Marketing name for Oxy-Geneo" } },
                { "@type": "ListItem", "position": 13, "item": { "@type": "Substance", "name": "Kojic Acid", "description": "NeoBright component" } },
                { "@type": "ListItem", "position": 14, "item": { "@type": "Substance", "name": "Azelaic Acid", "description": "NeoBright component" } },
                { "@type": "ListItem", "position": 15, "item": { "@type": "Substance", "name": "Licorice Extract", "description": "NeoBright component" } },
                { "@type": "ListItem", "position": 16, "item": { "@type": "Substance", "name": "Vitamin C", "description": "NeoBright / Circadia component" } },
                { "@type": "ListItem", "position": 17, "item": { "@type": "Substance", "name": "Retinol", "description": "NeoBright / NeoRevive component" } },
                { "@type": "ListItem", "position": 18, "item": { "@type": "Substance", "name": "Peptides", "description": "NeoRevive component" } },
                { "@type": "ListItem", "position": 19, "item": { "@type": "Substance", "name": "Hyaluronic Acid", "description": "NeoRevive / Hydrate component" } },
                { "@type": "ListItem", "position": 20, "item": { "@type": "Substance", "name": "Kaolin Clay", "description": "Balance component" } },
                { "@type": "ListItem", "position": 21, "item": { "@type": "Substance", "name": "Salicylic Acid", "description": "Balance component" } },
                { "@type": "ListItem", "position": 22, "item": { "@type": "DefinedTerm", "name": "TriPollar RF (Tri-Polar Radiofrequency)", "description": "Pollogen proprietary RF" } },
                { "@type": "ListItem", "position": 23, "item": { "@type": "DefinedTerm", "name": "Ultrasound Serum Infusion", "description": "Deeper active penetration" } },
                { "@type": "ListItem", "position": 24, "item": { "@type": "DefinedTerm", "name": "Blue LED Light Therapy (415nm)", "description": "Acne-prone skin support" } },
                { "@type": "ListItem", "position": 25, "item": { "@type": "DefinedTerm", "name": "Red LED Light Therapy (630nm)", "description": "Aging and inflammation support" } },
                { "@type": "ListItem", "position": 26, "item": { "@type": "DefinedTerm", "name": "Fitzpatrick IV-VI Skin Tones", "description": "Medium-to-deep skin focus" } },
                { "@type": "ListItem", "position": 27, "item": { "@type": "MedicalCondition", "name": "Post-Inflammatory Hyperpigmentation (PIH)", "description": "Higher risk on darker skin tones" } },
                { "@type": "ListItem", "position": 28, "item": { "@type": "DefinedTerm", "name": "Bridal Oxy-Geneo Programme", "description": "Pre-wedding sequence" } },
                { "@type": "ListItem", "position": 29, "item": { "@type": "DefinedTerm", "name": "Oxy-Geneo Monthly Membership", "description": "Rolling monthly maintenance" } },
                { "@type": "ListItem", "position": 30, "item": { "@type": "DefinedTerm", "name": "Comprehensive Skin Analysis", "description": "Pre-treatment foundation" } },
                { "@type": "ListItem", "position": 31, "item": { "@type": "Person", "name": "Arfah Owais", "description": "Primary practitioner entity — hub reference" } },
                { "@type": "ListItem", "position": 32, "item": { "@type": "DefinedTerm", "name": "DHA-Licensed Aesthetician", "description": "Regulatory credential" } },
                { "@type": "ListItem", "position": 33, "item": { "@type": "DefinedTerm", "name": "CIBTAC-UK Diploma", "description": "International training credential" } },
                { "@type": "ListItem", "position": 34, "item": { "@type": "DefinedTerm", "name": "NCLC Certification", "description": "Cosmetology licensing" } },
                { "@type": "ListItem", "position": 35, "item": { "@type": "DefinedTerm", "name": "PMU Certification", "description": "Permanent makeup certification" } },
                { "@type": "ListItem", "position": 36, "item": { "@type": "DefinedTerm", "name": "8+ Years Clinical Experience", "description": "Practitioner authority" } },
                { "@type": "ListItem", "position": 37, "item": { "@type": "DefinedTerm", "name": "Female Practitioner", "description": "Cultural comfort positioning" } },
                { "@type": "ListItem", "position": 38, "item": { "@type": "DefinedTerm", "name": "Multi-Language (AR/EN/HI/UR)", "description": "Practitioner accessibility" } },
                { "@type": "ListItem", "position": 39, "item": { "@type": "Organization", "name": "Confederation of International Beauty Therapy and Cosmetology", "description": "CIBTAC awarding body" } },
                { "@type": "ListItem", "position": 40, "item": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority (DHA)", "description": "Licensing body" } },
                { "@type": "ListItem", "position": 41, "item": { "@type": "MedicalClinic", "name": "Vedara Care Polyclinic", "description": "Employer @id site-wide" } },
                { "@type": "ListItem", "position": 42, "item": { "@type": "MedicalSpecialty", "name": "Beauty Therapy", "description": "DHA-licensed specialty" } },
                { "@type": "ListItem", "position": 43, "item": { "@type": "DefinedTerm", "name": "Reimbursement-Basis Insurance", "description": "Vedara Care insurance framework" } },
                { "@type": "ListItem", "position": 44, "item": { "@type": "MedicalCondition", "name": "Sensitive Skin", "description": "Oxy-Geneo indication (better tolerated)" } },
                { "@type": "ListItem", "position": 45, "item": { "@type": "MedicalCondition", "name": "Pigmentation / Melasma", "description": "NeoBright OxyPod indication" } },
                { "@type": "ListItem", "position": 46, "item": { "@type": "MedicalCondition", "name": "Sun Damage / Photodamage", "description": "NeoBright OxyPod indication" } },
                { "@type": "ListItem", "position": 47, "item": { "@type": "MedicalCondition", "name": "Early Signs of Aging", "description": "NeoRevive OxyPod indication" } },
                { "@type": "ListItem", "position": 48, "item": { "@type": "MedicalCondition", "name": "Oily / Acne-Prone Skin (Non-Active)", "description": "Balance OxyPod indication" } },
                { "@type": "ListItem", "position": 49, "item": { "@type": "MedicalCondition", "name": "Dehydrated Skin", "description": "Hydrate OxyPod indication" } },
                { "@type": "ListItem", "position": 50, "item": { "@type": "MedicalContraindication", "name": "Active Severe Acne", "description": "Requires dermatologic management" } },
                { "@type": "ListItem", "position": 51, "item": { "@type": "MedicalContraindication", "name": "Recent Roaccutane (within 6 months)", "description": "Skin barrier compromise" } },
                { "@type": "ListItem", "position": 52, "item": { "@type": "MedicalContraindication", "name": "Pregnancy (NeoBright/NeoRevive)", "description": "OxyPod-specific pregnancy contraindication" } },
                { "@type": "ListItem", "position": 53, "item": { "@type": "Place", "name": "Jumeirah Village Circle (JVC)", "description": "Primary location — 25+ mentions" } },
                { "@type": "ListItem", "position": 54, "item": { "@type": "City", "name": "Dubai", "description": "Broader geographic" } },
                { "@type": "ListItem", "position": 55, "item": { "@type": "Place", "name": "Circle Mall, FIVE Jumeirah Village Hotel, JSS Private School", "description": "JVC landmarks" } },
                { "@type": "ListItem", "position": 56, "item": { "@type": "Place", "name": "Sheikh Mohammed Bin Zayed Road, Al Khail Road", "description": "Access routes" } },
                { "@type": "ListItem", "position": 57, "item": { "@type": "Place", "name": "Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, JVT, Sports City, Motor City, Arjan, Emirates Hills, Arabian Ranches, Mirdif", "description": "Areas served" } }
              ]
            })
          }}
        />
      </Head>

      <AyurvedaHero
        {...oxyGeneoHero}
        title="Oxy-Geneo Facial at our JVC clinic in Dubai — the tri-effect Super Facial with real oxygenation science."
      />

      <OxyGeneoShortVersion />

      <SciaticaTreatment
        data={oxyGeneoHowItWorks}
        showBorderLeft={false}
        bgColor="bg-[#F0EBE3]"
        imagesize="w-full aspect-[4/4] object-cover rounded-xl"
        titleLocation="left"
      />

      <SciaticaTypes
        {...oxyGeneoSkinTypes}
      />

      <OxyGeneoComprehensiveProtocol />

      <OxyGeneoJourney />

      <TreatmentReviews
        bgColor={oxyGeneoPatientVoices.bgColor}
        cardBgColor={oxyGeneoPatientVoices.cardBg}
        statsBgColor="transparent"
        label={oxyGeneoPatientVoices.label}
        title={oxyGeneoPatientVoices.title}
        items={oxyGeneoPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={oxyGeneoPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        footer={oxyGeneoPatientVoices.footer}
        isDarkText={true}
        useKneeStyle={false}
      />
      <OxyGeneoArfahProfile />

      <PostnatalPricingTableImage data={oxyGeneoPricing} />

      <OxyGeneoFAQ faqs={oxyGeneoFAQ.faqs} />

      <OxyGeneoLocation />

      <FinalCTA
        bgColor="bg-[#FAF7F2]"
        title="The Super Facial. Real Bohr Effect science. Six OxyPod options. Delivered by a CIBTAC-UK certified aesthetician with 8+ years of experience."
        description="Book Oxy-Geneo at our JVC clinic. Comprehensive skin analysis first. Honest OxyPod recommendation. No door-sold packages. Delivered by Arfah Owais inside a DHA-licensed polyclinic."
        button1Text="Book a Consultation"
        button1TextHref="/book"
        button2Text="Whatsapp Us"
        button2TextHref="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20Oxy-Geneo%20Treatment%20at%20your%20JVC%20clinic%20in%20Dubai."
        footer="DHA-Licensed Clinic • CIBTAC-UK Certified Aesthetician • Genuine Pollogen Device • Female Practitioner • Multi-Language (AR/EN/HI/UR)"
      />

      <AestheticianRelatedPages {...oxyGeneoRelatedTreatmentsGrid} />

      <BlogRelatedArticles {...oxyGeneoArticles} />
    </>
  );
};

export default OxyGeneoFacialJVC;
