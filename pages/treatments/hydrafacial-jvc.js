import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import HydraFacialShortVersion from '../../components/hydrafacial/HydraFacialShortVersion';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import PelvicFloorAssessment from '../../components/ayurveda/PelvicFloorAssessment';
import HydraFacialJourney from '../../components/hydrafacial/HydraFacialJourney';
import HydraFacialComprehensiveProtocol from '../../components/hydrafacial/HydraFacialComprehensiveProtocol';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import ArfahOwaisProfile from '../../components/hydrafacial/ArfahOwaisProfile';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import HydraFacialFAQ from '../../components/hydrafacial/HydraFacialFAQ';
import HydraFacialLocation from '../../components/hydrafacial/HydraFacialLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import { AestheticianRelatedPages } from '../../components/aesthetician/AestheticianPageTemplate';
import BlogRelatedArticles from '../../components/blog/BlogRelatedArticles';

import {
  hydrafacialHero,
  hydrafacialHowItWorks,
  hydrafacialSkinTypes,
  hydrafacialPatientVoices,
  hydrafacialPricing,
  hydrafacialFAQ,
  hydrafacialRelatedTreatmentsGrid,
  hydrafacialArticles
} from '../../data/hydrafacial';

const HydraFacialTreatmentJVC = () => {
  const currentUrl = "https://vedaracare.ae/treatments/hydrafacial-jvc/";

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": "https://vedaracare.ae/treatments/hydrafacial-jvc/#procedure",
      "name": "HydraFacial Multi-Step Medical-Grade Facial",
      "alternateName": ["HydraFacial", "Vortex-Fusion Facial", "HydraFacial Treatment JVC"],
      "procedureType": "Advanced Aesthetic Facial Treatment",
      "howPerformed": "Multi-step medical-grade facial protocol delivered via patented vortex-fusion technology across three core steps. Step 1 Cleanse and Peel: glycolic and salicylic acid solution applied through vortex tip to remove surface dead skin and prepare for extraction, 5-10 minutes. Step 2 Extract and Hydrate: vortex tip switches to extraction mode combining negative pressure suction to lift pore impurities with simultaneous hydrating serum infusion, 15-20 minutes. Step 3 Fuse and Protect: antioxidant, peptide, and hyaluronic acid serums infused into freshly cleansed skin, with optional targeted booster serum integration (Britenol for pigmentation, Dermabuilder for early aging, CTGF for plumping, Age Refinement, Circadia Vitamin C, JLo Beauty Booster), 5-15 minutes. Optional LED light therapy add-on (Blue LED at 415nm for acne-prone skin, Red LED at 630nm for aging and inflammation), 10-15 minutes. Total protocol time 30-60 minutes. Delivered by DHA-licensed aesthetician with CIBTAC-UK diploma at Vedara Care Polyclinic Jumeirah Village Circle (JVC) Dubai.",
      "preparation": "Arrive with makeup off (or time for gentle removal). Avoid retinoids/tretinoin 2-3 days before. Avoid glycolic acid products 24 hours before. Avoid recent significant sun exposure 24-48 hours. Wait 14 days after botox/fillers. Wait 2-4 weeks after chemical peel or laser per practitioner guidance.",
      "followup": "Apply sun protection immediately and continue rigorous sun protection 48+ hours. Avoid intense exercise, sauna, hot yoga, swimming 24 hours. Avoid retinoids/exfoliating acids 48-72 hours. Continue home skincare per practitioner recommendation.",
      "bodyLocation": "Face, neck, décolleté as protocol includes",
      "indication": [
        { "@type": "MedicalCondition", "name": "Congested Pores and Blackheads" },
        { "@type": "MedicalCondition", "name": "Dull Complexion" },
        { "@type": "MedicalCondition", "name": "Mild Uneven Skin Tone" },
        { "@type": "MedicalCondition", "name": "Dehydrated Skin" },
        { "@type": "MedicalCondition", "name": "Early Signs of Aging (Prevention)" },
        { "@type": "MedicalCondition", "name": "Oily Skin (Non-Active Acne)" },
        { "@type": "MedicalCondition", "name": "Pre-Event Skin Refresh" },
        { "@type": "MedicalCondition", "name": "Post-Sun-Exposure Skin Recovery" }
      ],
      "contraindication": [
        { "@type": "MedicalContraindication", "name": "Active severe acne flare" },
        { "@type": "MedicalContraindication", "name": "Active rosacea flare" },
        { "@type": "MedicalContraindication", "name": "Roaccutane use within past 6 months" },
        { "@type": "MedicalContraindication", "name": "Pregnancy (some booster serums)" },
        { "@type": "MedicalContraindication", "name": "Open skin wounds or active infections in treatment area" },
        { "@type": "MedicalContraindication", "name": "Recent significant sunburn" },
        { "@type": "MedicalContraindication", "name": "Allergy to hyaluronic acid or listed serum ingredients" }
      ],
      "performer": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" }
    },
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://vedaracare.ae/treatments/hydrafacial-jvc/#business",
      "name": "Vedara Care HydraFacial JVC",
      "alternateName": ["HydraFacial Vedara Care JVC", "HydraFacial JVC Dubai"],
      "url": "https://vedaracare.ae/treatments/hydrafacial-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "HydraFacial treatment at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Multi-step medical-grade facial using patented vortex-fusion technology delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience. Core, Deluxe, and Platinum protocol tiers with optional booster serums and LED light therapy add-on.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 500 - AED 5,000",
      "address": { "@type": "PostalAddress", "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE" },
      "geo": { "@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.2072235" },
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
      "medicalSpecialty": ["Beauty Therapy", "Aesthetic Medicine", "Advanced Facial Treatment"],
      "isAcceptingNewPatients": true,
      "practitioner": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "availableService": [
        { "@type": "Service", "name": "Core HydraFacial (3-step protocol without boosters)" },
        { "@type": "Service", "name": "Deluxe HydraFacial (3-step protocol + 1 booster)" },
        { "@type": "Service", "name": "Platinum HydraFacial (3-step protocol + 2 boosters + LED)" },
        { "@type": "Service", "name": "HydraFacial with Britenol Booster (pigmentation)" },
        { "@type": "Service", "name": "HydraFacial with Dermabuilder Booster (early aging)" },
        { "@type": "Service", "name": "HydraFacial with CTGF Booster (plumping)" },
        { "@type": "Service", "name": "HydraFacial with LED Light Therapy Add-On" },
        { "@type": "Service", "name": "HydraFacial 3-Session Programme" },
        { "@type": "Service", "name": "HydraFacial 6-Session Programme" },
        { "@type": "Service", "name": "Bridal HydraFacial Programme" },
        { "@type": "Service", "name": "HydraFacial Monthly Membership" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "650", "bestRating": "5", "worstRating": "1" }
    },
    [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Core HydraFacial",
        "serviceType": "Advanced Aesthetic Facial Treatment",
        "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
        "areaServed": { "@type": "City", "name": "Dubai" },
        "description": "3-step HydraFacial protocol without booster serums. Cleanse and Peel (5-10 min), Extract and Hydrate via vortex fusion (15-20 min), Fuse and Protect antioxidant infusion (5-10 min). Total 30-45 minutes. No downtime. Suitable for most skin types.",
        "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "599", "availability": "https://schema.org/InStock" }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Deluxe HydraFacial",
        "serviceType": "Advanced Aesthetic Facial Treatment",
        "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
        "description": "3-step HydraFacial protocol with 1 targeted booster serum selected based on skin analysis. Booster options include Britenol (pigmentation), Dermabuilder (early aging), CTGF (plumping), Age Refinement, Circadia Vitamin C, JLo Beauty Booster. Total 45-60 minutes.",
        "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "799", "availability": "https://schema.org/InStock" }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Platinum HydraFacial",
        "serviceType": "Advanced Aesthetic Facial Treatment",
        "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
        "description": "3-step HydraFacial protocol with 2 targeted booster serums plus LED light therapy add-on (Blue LED for acne-prone skin or Red LED for aging and inflammation). Total 60-75 minutes.",
        "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "999", "availability": "https://schema.org/InStock" }
      }
    ],
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
        { "@type": "ListItem", "position": 3, "name": "HydraFacial at JVC", "item": "https://vedaracare.ae/treatments/hydrafacial-jvc/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "HydraFacial is a multi-step medical-grade facial protocol using patented vortex-fusion technology to cleanse, exfoliate, painlessly extract pore impurities, hydrate, and infuse antioxidant serums in a single 30-60 minute session. The vortex-fusion delivery tip combines negative pressure suction which lifts pore impurities out gently with simultaneous serum infusion. Different from traditional facials which rely on manual extraction and topical product application. No downtime." } },
        { "@type": "Question", "name": "How is HydraFacial different from a regular facial?", "acceptedAnswer": { "@type": "Answer", "text": "HydraFacial uses standardised vortex-fusion technology delivering consistent extraction and simultaneous serum infusion. Regular facials rely on manual extraction with metal tools and topical product application — effective when done well but variable in results and often uncomfortable during extraction. HydraFacial gives more consistent extraction, less discomfort, less risk of post-extraction inflammation, and integrated serum delivery. Regular facials often provide longer relaxation duration and more personalised massage technique." } },
        { "@type": "Question", "name": "What are the 3 steps of HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "Step 1 Cleanse and Peel: glycolic and salicylic acid solution applied via vortex tip removes surface dead skin and dulling debris (5-10 min). Step 2 Extract and Hydrate: vortex tip switches to extraction mode, gently lifting pore impurities out while simultaneously infusing hydrating serum (15-20 min). Step 3 Fuse and Protect: antioxidant, peptide, and hyaluronic acid serums infused into freshly cleansed skin with optional targeted boosters added (5-15 min). Total 30-60 minutes." } },
        { "@type": "Question", "name": "What are HydraFacial boosters?", "acceptedAnswer": { "@type": "Answer", "text": "Boosters are targeted serum concentrates added during Step 3, selected based on skin analysis findings. Common boosters include Britenol (pigmentation and uneven tone), Dermabuilder (fine lines and early aging), CTGF/Growth Factor (plumping and elasticity), Age Refinement (combined fine lines and firmness), Circadia Vitamin C (brightness and antioxidant protection), JLo Beauty Booster (niacinamide-based brightening). Arfah recommends boosters based on skin analysis — not every session needs boosters." } },
        { "@type": "Question", "name": "How long does a HydraFacial take?", "acceptedAnswer": { "@type": "Answer", "text": "Core HydraFacial 3-step protocol without boosters takes 30-45 minutes. Deluxe with 1 booster takes 45-60 minutes. Platinum with 2 boosters and LED add-on takes 60-75 minutes. First-visit patients add 30 minutes for comprehensive skin analysis before treatment. LED light therapy add-on adds 10-15 minutes." } },
        { "@type": "Question", "name": "Is there any downtime after HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "No downtime. Skin looks brighter and feels deeply hydrated immediately post-treatment. Some patients experience mild pink flush for 30-60 minutes which settles quickly. Makeup can be applied 2-3 hours post-treatment. Sun protection essential. Avoid intense exercise, sauna, and hot yoga for 24 hours. You can return to work or normal activities immediately." } },
        { "@type": "Question", "name": "How often should I get HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "For sustained benefit, monthly programme is recommended. HydraFacial benefit peaks around 5-7 days post-treatment and tapers over 3-4 weeks — monthly cadence maintains sustained skin quality. Single-session HydraFacial works well for pre-event refresh 3-7 days before a photographed occasion. Bridal patients typically follow a 3-4 session pre-wedding sequence. Membership option available for rolling monthly maintenance." } },
        { "@type": "Question", "name": "How much does HydraFacial cost at Vedara Care JVC?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing varies by protocol tier. Core HydraFacial without boosters starts from the entry price point. Deluxe with 1 booster higher. Platinum with 2 boosters and LED highest. Booster add-ons priced separately. Programme pricing 3-session, 6-session, and membership provides better per-session value than single sessions. WhatsApp us for current programme pricing." } },
        { "@type": "Question", "name": "Is HydraFacial suitable for sensitive skin?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes, but not always. Sensitive skin patients require assessment during comprehensive skin analysis to determine suitability. Some sensitive skin tolerates HydraFacial well and benefits meaningfully from the gentle exfoliation and hydration. Other sensitive skin needs skin barrier support before HydraFacial. Arfah assesses individually and recommends appropriate protocol adjustments or delay if warranted." } },
        { "@type": "Question", "name": "Can I have HydraFacial during pregnancy?", "acceptedAnswer": { "@type": "Answer", "text": "Core HydraFacial protocol without boosters is generally considered safe during pregnancy, but confirm with your obstetrician. Some booster serums are not recommended during pregnancy including Dermabuilder, CTGF, and some brightening formulations — Arfah adjusts protocol accordingly for pregnant patients. LED light therapy typically avoided during pregnancy." } },
        { "@type": "Question", "name": "Can HydraFacial treat pigmentation and melasma?", "acceptedAnswer": { "@type": "Answer", "text": "HydraFacial with Britenol booster addresses mild pigmentation and uneven skin tone meaningfully — sun damage, mild post-inflammatory hyperpigmentation, mild uneven tone. Not suitable as standalone treatment for deep pigmentation or established melasma — those need dedicated Pigmentation and Melasma programme typically laser plus topical plus home-care combination often with dermatologist coordination. HydraFacial with brightening booster may be integrated as one component of broader Pigmentation programme." } },
        { "@type": "Question", "name": "Can HydraFacial treat acne?", "acceptedAnswer": { "@type": "Answer", "text": "HydraFacial with Blue LED add-on supports acne-prone skin mild to moderate through pore cleansing, gentle exfoliation, and blue LED antimicrobial effect on P. acnes bacteria. Not suitable for active severe cystic acne — that needs dermatological medical management prescription topicals systemic treatment where indicated before HydraFacial. Arfah coordinates with the on-site dermatologist for acne patients requiring medical management before aesthetic work." } },
        { "@type": "Question", "name": "Can HydraFacial treat acne scarring?", "acceptedAnswer": { "@type": "Answer", "text": "No — HydraFacial does not correct acne scarring. Atrophic acne scarring icepick boxcar rolling scars needs dedicated Acne Scar programme typically involving RF Microneedling, laser modalities, and programme-format work over months. HydraFacial may be integrated as one supportive component of broader acne scar programme, but the corrective work happens through the dedicated Acne Scar treatment protocol." } },
        { "@type": "Question", "name": "Can men have HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. HydraFacial is protocol-neutral to gender — same technology, same benefit for male patients. Popular with male professionals in JVC and surrounding communities wanting professional skincare without complex multi-step regimens. Straightforward booking, 30-60 minute session, back to work immediately. Arfah delivers HydraFacial for male patients regularly." } },
        { "@type": "Question", "name": "What should I do before my HydraFacial appointment?", "acceptedAnswer": { "@type": "Answer", "text": "Arrive with makeup off or with time for gentle removal during setup. Avoid retinoids/tretinoin for 2-3 days before if using them. Avoid glycolic acid products for 24 hours before. Avoid recent significant sun exposure 24-48 hours. If you have had recent botox or fillers, wait 14 days before HydraFacial. If you have had recent chemical peel or laser, wait per practitioner guidance typically 2-4 weeks." } },
        { "@type": "Question", "name": "What should I do after HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "Apply sun protection immediately and continue rigorous sun protection for at least 48 hours. Avoid intense exercise, sauna, hot yoga, and swimming for 24 hours. Avoid retinoids/exfoliating acids for 48-72 hours. Avoid makeup for 2-3 hours if possible. Continue home skincare per practitioner recommendation. Report any unusual reactions immediately." } },
        { "@type": "Question", "name": "Who delivers HydraFacial at Vedara Care JVC?", "acceptedAnswer": { "@type": "Answer", "text": "Arfah Owais — DHA-licensed aesthetician with CIBTAC-UK diploma from the Confederation of International Beauty Therapy and Cosmetology a UK gold-standard awarding body, NCLC certification, PMU certification, and 8+ years of hands-on clinical experience. HydraFacial is one of her signature treatments — delivered across thousands of sessions with full range of protocol tiers and boosters. Multi-language Arabic, English, Hindi, Urdu. Female practitioner." } },
        { "@type": "Question", "name": "Where is the clinic?", "acceptedAnswer": { "@type": "Answer", "text": "Vedara Care Polyclinic is in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Accessible from Dubai Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, and Mirdif. Ample parking. Access via Sheikh Mohammed Bin Zayed Road and Al Khail Road. Beauty Therapy is one of Vedara Care's seven DHA-licensed specialties." } },
        { "@type": "Question", "name": "How do I book HydraFacial?", "acceptedAnswer": { "@type": "Answer", "text": "Book by phone, WhatsApp, or through the website booking system. First-visit patients book 60-minute slot 30-min analysis plus 30-min HydraFacial. Return patients on established protocol book protocol-tier appropriate slot. Pre-consultation form provided digitally. Clinic hours:  Monday - Sunday : 9 AM - 10 PM." } },
        { "@type": "Question", "name": "Is HydraFacial covered by insurance?", "acceptedAnswer": { "@type": "Answer", "text": "HydraFacial delivered for cosmetic purposes is typically not covered by health insurance in the UAE. Vedara Care operates on a reimbursement basis rather than direct billing — patients pay at the clinic and can submit for reimbursement through their insurance provider per individual policy terms if their policy covers aesthetic treatments delivered for specific medical indications. Check with your insurance provider before booking if coverage matters. Most HydraFacial bookings at Vedara Care are self-pay." } }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": "https://vedaracare.ae/treatments/hydrafacial-jvc/#webpage",
      "name": "HydraFacial at Vedara Care JVC Dubai — Multi-Step Medical-Grade Facial",
      "url": "https://vedaracare.ae/treatments/hydrafacial-jvc/",
      "about": { "@id": "https://vedaracare.ae/treatments/hydrafacial-jvc/#procedure" },
      "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
      "reviewedBy": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
      "lastReviewed": "2026-09-19",
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "medicalAudience": "Patient",
      "specialty": { "@type": "MedicalSpecialty", "name": "Beauty Therapy" },
      "inLanguage": "en-AE"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person",
      "name": "Arfah Owais",
      "jobTitle": "DHA-Licensed Aesthetician",
      "url": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/",
      "gender": "Female",
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "DHA Licensed Aesthetician" },
        { "@type": "EducationalOccupationalCredential", "name": "CIBTAC-UK Diploma" },
        { "@type": "EducationalOccupationalCredential", "name": "NCLC Certified" },
        { "@type": "EducationalOccupationalCredential", "name": "PMU Certified" }
      ],
      "knowsAbout": [
        "HydraFacial Multi-Step Medical-Grade Facial",
        "Vortex-Fusion Facial Technology",
        "HydraFacial Booster Serums (Britenol, Dermabuilder, CTGF, Age Refinement, Circadia Vitamin C, JLo Beauty Booster)",
        "LED Light Therapy (Blue LED for Acne, Red LED for Aging)",
        "Comprehensive Skin Analysis and Personalized Treatment Planning",
        "Bridal HydraFacial Programme",
        "HydraFacial Monthly Programme and Membership",
        "Advanced Aesthetic Skin Rejuvenation"
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Urdu"],
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
      "contactPoint": { "@type": "ContactPoint", "telephone": "+971 55 573 6312", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"] },
      "medicalSpecialty": ["Physiotherapy", "Physiotherapy and Rehabilitation", "Ayurvedic Medicine", "Beauty Therapy", "Dermatology", "General Practice", "Nursing"]
    },
    {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": { "@id": "https://vedaracare.ae/treatments/hydrafacial-jvc/#procedure" },
      "ratingValue": "4.9",
      "reviewCount": "650",
      "bestRating": "5",
      "worstRating": "1"
    }
  ];

  return (
    <>
      <Head>
        <title>HydraFacial JVC Dubai | CIBTAC-UK Aesthetician | Vedara Care Polyclinic</title>
        <meta name="description" content="Book HydraFacial at Vedara Care JVC — walking distance from Circle Mall. Multi-step medical-grade facial with vortex-fusion technology, delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years experience. Core, Deluxe, Platinum tiers with booster options. No downtime." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <link rel="canonical" href={currentUrl} />
        <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/hydrafacial-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={currentUrl} />

        <meta property="og:title" content="HydraFacial at Vedara Care JVC Dubai | CIBTAC-UK Certified Aesthetician | Walking Distance from Circle Mall" />
        <meta property="og:description" content="HydraFacial at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall. Multi-step medical-grade facial using patented vortex-fusion technology to cleanse, exfoliate, painlessly extract pore impurities, hydrate, and infuse antioxidant serums in a single 30-60 minute session. Core protocol, Deluxe with 1 booster, Platinum with 2 boosters and LED. Optional booster serums (Britenol for pigmentation, Dermabuilder for early aging, CTGF for plumping). LED light therapy add-on (Blue for acne, Red for aging). Delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience. Every treatment starts with comprehensive skin analysis. Female practitioner. Multi-language (Arabic, English, Hindi, Urdu). No downtime." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/hydrafacial-jvc.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HydraFacial JVC Dubai | CIBTAC-UK Aesthetician | Vedara Care" />
        <meta name="twitter:description" content="Multi-step medical-grade facial at Vedara Care JVC. Delivered by DHA-licensed CIBTAC-UK certified aesthetician with 8+ years experience." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/hydrafacial-jvc.jpg" />

        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <AyurvedaHero
        {...hydrafacialHero}
        title="HydraFacial at our JVC clinic in Dubai — the multi-step medical-grade facial, done properly."
      />

      <HydraFacialShortVersion

      />

      <SciaticaTreatment
        data={hydrafacialHowItWorks}
        showBorderLeft={false}
        bgColor="bg-[#F0EBE3]"
        imagesize="w-full aspect-[4/4] object-cover rounded-xl"
        titleLocation="left"
      />

      <SciaticaTypes
        {...hydrafacialSkinTypes}
      />

      <HydraFacialComprehensiveProtocol />

      <HydraFacialJourney />

      <TreatmentReviews
        bgColor={hydrafacialPatientVoices.bgColor}
        cardBgColor={hydrafacialPatientVoices.cardBg}
        statsBgColor="transparent"
        label={hydrafacialPatientVoices.label}
        title={hydrafacialPatientVoices.title}
        items={hydrafacialPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={hydrafacialPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        isDarkText={true}
        useKneeStyle={false}
      />

      <ArfahOwaisProfile />

      <PostnatalPricingTableImage data={hydrafacialPricing} />

      <HydraFacialFAQ faqs={hydrafacialFAQ.faqs} />

      <HydraFacialLocation />

      <FinalCTA
        bgColor="bg-[#FAF7F2]"
        title="Real HydraFacial. Done properly. By an aesthetician with 8+ years of experience and a CIBTAC-UK diploma."
        description="Book HydraFacial at our JVC clinic. Comprehensive skin analysis first. Honest protocol recommendation. No door-sold packages. Delivered by Arfah Owais inside a DHA-licensed polyclinic."
        button1Text="Book a Consultation"
        button1TextHref="/book"
        button2Text="Whatsapp Us"
        button2TextHref="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20Janu%20Basti%20Treatment%20at%20your%20JVC%20clinic%20in%20Dubai."
        footer="DHA-Licensed Clinic · CIBTAC-UK Certified Aesthetician · Female Practitioner · Multi-Language (AR/EN/HI/UR)"
      />

      <AestheticianRelatedPages {...hydrafacialRelatedTreatmentsGrid} />

      <BlogRelatedArticles {...hydrafacialArticles} />
    </>
  );
};

export default HydraFacialTreatmentJVC;
