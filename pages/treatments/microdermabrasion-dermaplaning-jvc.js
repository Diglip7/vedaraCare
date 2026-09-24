import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import { AestheticianRelatedPages } from '../../components/aesthetician/AestheticianPageTemplate';
import BlogRelatedArticles from '../../components/blog/BlogRelatedArticles';
import FinalCTA from '../../components/ayurveda/FinalCTA';

// Import Microdermabrasion components
import MicrodermShortVersion from '../../components/microdermabrasion/MicrodermShortVersion';
import MicrodermHowItWorks from '../../components/microdermabrasion/MicrodermHowItWorks';
import MicrodermSkinTypes from '../../components/microdermabrasion/MicrodermSkinTypes';
import MicrodermComprehensiveProtocol from '../../components/microdermabrasion/MicrodermComprehensiveProtocol';
import MicrodermJourney from '../../components/microdermabrasion/MicrodermJourney';
import MicrodermFAQ from '../../components/microdermabrasion/MicrodermFAQ';
import MicrodermPricing from '../../components/microdermabrasion/MicrodermPricing';
import MicrodermLocation from '../../components/microdermabrasion/MicrodermLocation';
import MicrodermArfahProfile from '../../components/microdermabrasion/MicrodermArfahProfile';

// Import data
import {
  microdermabrasionHero,
  microdermabrasionHowItWorks,
  microdermabrasionSkinTypes,
  microdermabrasionPatientVoices,
  microdermabrasionPricing,
  microdermabrasionFAQ,
  microdermabrasionRelatedTreatmentsGrid,
  microdermabrasionArticles,
  // NEWLY ADDED
  microdermabrasionShortVersion,
  microdermabrasionComprehensiveProtocol,
  microdermabrasionJourney,
  microdermabrasionArfahProfile,
  microdermabrasionLocation
} from '../../data/microdermabrasionData';

const MicrodermabrasionJVC = () => {
  const router = useRouter();
  const currentUrl = `https://vedaracare.ae${router.asPath}`;

  return (
    <>
      <Head>
        <title>Microdermabrasion & Dermaplaning JVC Dubai | CIBTAC-UK Aesthetician | Vedara Care</title>
        <meta name="description" content="Book Microdermabrasion or Dermaplaning at Vedara Care JVC — walking distance from Circle Mall. Diamond-tip & crystal microdermabrasion with vacuum-assisted exfoliation. Sterile-blade dermaplaning with vellus hair (peach fuzz) removal. 20-30 min sessions, no downtime. Delivered by Arfah Owais, DHA-licensed aesthetician, CIBTAC-UK diploma, 8+ years experience." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <link rel="canonical" href="https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/microdermabrasion-dermaplaning-jvc/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/" />

        <meta property="og:title" content="Microdermabrasion & Dermaplaning at Vedara Care JVC Dubai | Diamond-Tip and Sterile-Blade Manual Exfoliation | Walking Distance from Circle Mall" />
        <meta property="og:description" content="Microdermabrasion and Dermaplaning at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall. Two distinct manual exfoliation modalities: Diamond-Tip and Crystal Microdermabrasion with vacuum-assisted mechanical exfoliation for dull skin refresh, congested pore support, and enhanced product penetration; Sterile-Blade Dermaplaning with vellus hair (peach fuzz) removal for pre-event smoothness, better makeup application, and enhanced skincare penetration. Both delivered as 20-30 minute sessions with no downtime by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience. Female practitioner. Multi-language (Arabic, English, Hindi, Urdu). Combined protocols with HydraFacial or Oxy-Geneo available. Monthly programme options for cumulative benefit." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/microdermabrasion-dermaplaning-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microdermabrasion & Dermaplaning JVC Dubai | CIBTAC-UK Aesthetician | Vedara Care" />
        <meta name="twitter:description" content="Diamond-tip microdermabrasion and sterile-blade dermaplaning at Vedara Care JVC. Delivered by CIBTAC-UK certified aesthetician." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/microdermabrasion-dermaplaning-jvc.jpg" />

        <script
          key="0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "@id": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/#procedure",
              "name": "Microdermabrasion and Dermaplaning Manual Exfoliation Treatments",
              "alternateName": ["Microdermabrasion Facial", "Diamond-Tip Microdermabrasion", "Crystal Microdermabrasion", "Dermaplaning Facial", "Peach Fuzz Removal", "Vellus Hair Removal Dermaplaning", "Blade Facial", "Manual Exfoliation Facial"],
              "procedureType": "Manual Aesthetic Exfoliation Treatment",
              "howPerformed": "Two distinct manual exfoliation modalities offered at Vedara Care JVC. Microdermabrasion: mechanical exfoliation of the outermost skin layer (stratum corneum) using either a diamond-encrusted wand held against the skin surface and moved systematically across treatment area (Diamond-Tip Microdermabrasion, preferred for most skin profiles, adjustable intensity via different diamond tip grades from fine to coarse) or fine aluminium oxide crystals sprayed at the skin surface under controlled pressure (Crystal Microdermabrasion, traditional deeper exfoliation option). Vacuum suction integrated with the device simultaneously removes exfoliated debris and stimulates surface microcirculation. Session duration 20-30 minutes. Dermaplaning: manual exfoliation using a sterile single-use surgical-grade blade held at precise 45-degree angle against dry skin surface. Trained aesthetician technique moves blade in short controlled sweeping motions across face — forehead, cheeks, jawline, chin, upper lip area — removing dead surface skin cells and vellus hair (peach fuzz) simultaneously in single sweeping motion. Not shaving; specific technique, angle, and blade type designed for aesthetic exfoliation purpose. Not electrolysis or laser hair removal; vellus hair returns on normal growth cycle at same colour and texture. Session duration 20-30 minutes. Both treatments require no downtime. Combined dermaplaning + microdermabrasion possible in same session when clinically appropriate, otherwise alternating monthly recommended. Dermaplaning integration before HydraFacial or Oxy-Geneo well-established protocol for enhanced facial delivery and active ingredient penetration. Both delivered by DHA-licensed aesthetician with CIBTAC-UK diploma at Vedara Care Polyclinic Jumeirah Village Circle (JVC) Dubai.",
              "preparation": "Arrive with makeup off or time for gentle removal. Avoid retinoids/tretinoin 2-3 days before. Avoid glycolic acid products 24 hours before. Avoid recent significant sun exposure 24-48 hours. Wait 14 days after botox/fillers. Wait 2-4 weeks after chemical peel or laser per practitioner guidance. Do not have waxing, threading, or laser hair removal in treatment area within 5 days before dermaplaning.",
              "followup": "Apply sun protection immediately and continue rigorous sun protection 48+ hours. Avoid intense exercise, sauna, hot yoga 24 hours. Avoid retinoids/exfoliating acids 48-72 hours. Continue home skincare per practitioner recommendation.",
              "bodyLocation": "Face, neck, décolleté as protocol includes (avoiding brow, immediate periocular area, and terminal hair growth areas for dermaplaning)",
              "indication": [
                { "@type": "MedicalCondition", "name": "Dull Skin and Surface Textural Irregularity" },
                { "@type": "MedicalCondition", "name": "Congested Pores (Microdermabrasion)" },
                { "@type": "MedicalCondition", "name": "Vellus Hair (Peach Fuzz) Removal (Dermaplaning)" },
                { "@type": "MedicalCondition", "name": "Pre-Event Skin Smoothness" },
                { "@type": "MedicalCondition", "name": "Enhanced Home Skincare Product Penetration" },
                { "@type": "MedicalCondition", "name": "Mild Uneven Skin Tone (Microdermabrasion)" },
                { "@type": "MedicalCondition", "name": "Pre-HydraFacial or Pre-Oxy-Geneo Integration (Dermaplaning)" },
                { "@type": "MedicalCondition", "name": "Male Grooming Professional Skincare (Microdermabrasion)" }
              ],
              "contraindication": [
                { "@type": "MedicalContraindication", "name": "Active severe acne or cystic acne (both treatments; blade spread risk for dermaplaning)" },
                { "@type": "MedicalContraindication", "name": "Keloid-prone skin (dermaplaning particularly)" },
                { "@type": "MedicalContraindication", "name": "Active rosacea flare" },
                { "@type": "MedicalContraindication", "name": "Roaccutane use within past 6 months" },
                { "@type": "MedicalContraindication", "name": "Significantly sensitive or barrier-compromised skin (may require alternative)" },
                { "@type": "MedicalContraindication", "name": "Active inflammatory skin conditions" },
                { "@type": "MedicalContraindication", "name": "Open skin wounds, active cold sores, recent sunburn" },
                { "@type": "MedicalContraindication", "name": "Aluminium sensitivity (Crystal Microdermabrasion specifically)" },
                { "@type": "MedicalContraindication", "name": "Recent waxing, threading, or laser hair removal within 5 days (dermaplaning)" }
              ],
              "performer": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" }
            })
          }}
        />
        <script
          key="1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalBusiness", "LocalBusiness", "HealthAndBeautyBusiness"],
              "@id": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/#business",
              "name": "Vedara Care Microdermabrasion and Dermaplaning JVC",
              "alternateName": ["Microdermabrasion Vedara Care JVC", "Dermaplaning Vedara Care JVC", "Diamond Microdermabrasion JVC Dubai", "Peach Fuzz Removal JVC Dubai"],
              "url": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/",
              "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
              "description": "Microdermabrasion and Dermaplaning treatments at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Diamond-Tip and Crystal Microdermabrasion with vacuum-assisted mechanical exfoliation, Sterile-Blade Dermaplaning with vellus hair removal. 20-30 min sessions, no downtime. Delivered by Arfah Owais, DHA-licensed aesthetician with CIBTAC-UK diploma and 8+ years of clinical experience.",
              "telephone": "+971555736312",
              "priceRange": "AED 300 - AED 4,000",
              "address": { "@type": "PostalAddress", "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE" },
              "geo": { "@type": "GeoCoordinates", "latitude": "25.0594379", "longitude": "55.2013897" },
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
              "medicalSpecialty": ["Beauty Therapy", "Aesthetic Medicine", "Manual Exfoliation Treatment"],
              "isAcceptingNewPatients": true,
              "practitioner": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
              "availableService": [
                { "@type": "Service", "name": "Diamond-Tip Microdermabrasion" },
                { "@type": "Service", "name": "Crystal Microdermabrasion" },
                { "@type": "Service", "name": "Dermaplaning" },
                { "@type": "Service", "name": "Combined Dermaplaning and Microdermabrasion Session" },
                { "@type": "Service", "name": "Dermaplaning + HydraFacial Combined Protocol" },
                { "@type": "Service", "name": "Dermaplaning + Oxy-Geneo Combined Protocol" },
                { "@type": "Service", "name": "3-Session Microdermabrasion Programme" },
                { "@type": "Service", "name": "3-Session Dermaplaning Programme" },
                { "@type": "Service", "name": "6-Session Microdermabrasion Programme" },
                { "@type": "Service", "name": "6-Session Dermaplaning Programme" },
                { "@type": "Service", "name": "6-Session Alternating Programme (Microdermabrasion and Dermaplaning)" },
                { "@type": "Service", "name": "Bridal Combined Manual Exfoliation Protocol" },
                { "@type": "Service", "name": "Monthly Membership (Single Modality or Alternating)" }
              ],
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "420", "bestRating": "5", "worstRating": "1" },
              "lastReviewed": "2026-09-21"
            })
          }}
        />
        <script
          key="2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Diamond-Tip Microdermabrasion Facial",
                "serviceType": "Manual Aesthetic Exfoliation Treatment",
                "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
                "areaServed": { "@type": "City", "name": "Dubai" },
                "description": "Diamond-Tip Microdermabrasion using diamond-encrusted wand with integrated vacuum suction. Adjustable intensity via different diamond tip grades (fine to coarse) selected based on skin analysis findings. Mechanical exfoliation of outermost skin layer with simultaneous debris removal and microcirculation stimulation. 20-30 minute session. No downtime.",
                "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "300", "availability": "https://schema.org/InStock" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Crystal Microdermabrasion Facial",
                "serviceType": "Manual Aesthetic Exfoliation Treatment",
                "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
                "description": "Crystal Microdermabrasion using fine aluminium oxide crystals sprayed at skin surface under controlled pressure, immediately vacuumed with exfoliated debris. Traditional deeper exfoliation option. 20-30 minute session. Not suitable for patients with aluminium sensitivity or significantly sensitive skin.",
                "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "350", "availability": "https://schema.org/InStock" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Dermaplaning Facial",
                "serviceType": "Manual Aesthetic Exfoliation and Vellus Hair Removal Treatment",
                "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
                "description": "Dermaplaning using sterile single-use surgical-grade blade held at precise 45-degree angle. Trained aesthetician technique removes dead surface skin cells and vellus hair (peach fuzz) simultaneously. Smoother skin surface, enhanced makeup application, better subsequent skincare product penetration. 20-30 minute session. No downtime.",
                "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "400", "availability": "https://schema.org/InStock" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Combined Dermaplaning and Microdermabrasion Session",
                "serviceType": "Manual Aesthetic Exfoliation Combined Protocol",
                "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
                "description": "Combined Dermaplaning and Microdermabrasion in single session for clinically appropriate patients with tolerance-confirmed skin. Sequential delivery — dermaplaning first for vellus hair removal, followed by gentle diamond-tip microdermabrasion for mechanical exfoliation. Requires skin analysis confirmation of tolerance. 45-60 minute session.",
                "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "600", "availability": "https://schema.org/InStock" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Dermaplaning + HydraFacial Combined Protocol",
                "serviceType": "Integrated Aesthetic Facial Protocol",
                "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
                "description": "Dermaplaning as pre-HydraFacial integration step. Vellus hair removal via dermaplaning enables cleaner HydraFacial delivery and enhances active ingredient penetration in vortex-fusion steps. Popular pre-event bridal integration. 75-90 minute combined session.",
                "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "950", "availability": "https://schema.org/InStock" }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Dermaplaning + Oxy-Geneo Combined Protocol",
                "serviceType": "Integrated Aesthetic Facial Protocol",
                "provider": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
                "description": "Dermaplaning as pre-Oxy-Geneo integration step. Vellus hair removal via dermaplaning enables cleaner Oxy-Geneo tri-effect facial delivery and enhances OxyPod active ingredient penetration. 75-90 minute combined session.",
                "offers": { "@type": "Offer", "priceCurrency": "AED", "price": "900", "availability": "https://schema.org/InStock" }
              }
            ])
          }}
        />
        <script
          key="3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
                { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
                { "@type": "ListItem", "position": 3, "name": "Microdermabrasion & Dermaplaning at JVC", "item": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/" }
              ]
            })
          }}
        />
        <script
          key="4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is microdermabrasion?", "acceptedAnswer": { "@type": "Answer", "text": "Microdermabrasion is a mechanical exfoliation treatment that abrades the outermost skin layer (stratum corneum — dead surface skin cells) using either a diamond-encrusted wand (Diamond-Tip Microdermabrasion) or fine aluminium oxide crystals (Crystal Microdermabrasion), combined with vacuum suction that simultaneously removes exfoliated debris and stimulates surface microcirculation. Sessions take 20-30 minutes with no downtime. Suits patients wanting mechanical exfoliation without hair removal — dull skin refresh, congested pore support, mild textural improvement, enhanced product penetration." } },
                { "@type": "Question", "name": "What is dermaplaning?", "acceptedAnswer": { "@type": "Answer", "text": "Dermaplaning is a manual exfoliation technique using a sterile surgical-grade blade held at a precise angle (typically 45 degrees) against dry skin. Trained aesthetician technique moves the blade in short controlled sweeping motions across the face, removing dead surface skin cells and vellus hair (peach fuzz) simultaneously. Not shaving — the technique, angle, and blade type are specific to aesthetic exfoliation. Sessions take 20-30 minutes with no downtime. Suits patients wanting vellus hair removal alongside exfoliation, pre-event smoothness, enhanced makeup application." } },
                { "@type": "Question", "name": "What is the difference between microdermabrasion and dermaplaning?", "acceptedAnswer": { "@type": "Answer", "text": "Both are manual exfoliation treatments but use different techniques. Microdermabrasion uses mechanical abrasion (diamond-tip wand or crystal spray) with vacuum suction — good for congested pores, dull skin, mild texture concerns. Dermaplaning uses a surgical-grade sterile blade — removes vellus hair alongside surface exfoliation, particularly favoured for pre-event smoothness and enhanced makeup application. Different skin profiles suit each — Arfah recommends selection during comprehensive skin analysis." } },
                { "@type": "Question", "name": "Does dermaplaning make hair grow back thicker or darker?", "acceptedAnswer": { "@type": "Answer", "text": "No — this is a persistent common misconception. Vellus hair (the fine peach fuzz dermaplaning removes) is biologically incapable of regrowing as terminal hair (the thicker darker hair type). Vellus hair returns on its normal growth cycle typically 3-4 weeks at the same colour, texture, and thickness as before. The misconception comes from confusion with shaving of terminal hair, where the blunt-cut edge of thicker hair creates a temporary perception of thicker regrowth — this does not apply to vellus facial hair." } },
                { "@type": "Question", "name": "Is microdermabrasion the same as dermabrasion?", "acceptedAnswer": { "@type": "Answer", "text": "No — they are different procedures despite similar names. Microdermabrasion is a superficial mechanical exfoliation of the outermost skin layer performed by trained aestheticians. Dermabrasion is a much deeper surgical resurfacing procedure that removes multiple skin layers, performed by physicians under anaesthesia, with significant downtime and recovery. Vedara Care JVC offers microdermabrasion. Dermabrasion (the deeper procedure) is not offered." } },
                { "@type": "Question", "name": "Can dermaplaning cause acne?", "acceptedAnswer": { "@type": "Answer", "text": "Dermaplaning on skin without active acne does not typically cause new acne — freshly exfoliated skin often shows improved clarity in the days following treatment. However, dermaplaning is contraindicated on skin with active acne — the blade contact risks spreading bacteria across the skin surface, potentially worsening breakouts. Patients with active acne need dermatological acne management first, before considering dermaplaning as maintenance treatment." } },
                { "@type": "Question", "name": "Which is better for congested pores — microdermabrasion or dermaplaning?", "acceptedAnswer": { "@type": "Answer", "text": "Microdermabrasion is more effective for congested pore focus — the vacuum suction combined with mechanical abrasion helps clear pore congestion. Dermaplaning primarily addresses surface exfoliation and vellus hair removal. For deeper pore congestion focus, HydraFacial with vortex-fusion extraction technology is more thorough. Arfah discusses appropriate treatment for congested pores during skin analysis." } },
                { "@type": "Question", "name": "Which is better for peach fuzz removal — microdermabrasion or dermaplaning?", "acceptedAnswer": { "@type": "Answer", "text": "Dermaplaning is the treatment for vellus hair (peach fuzz) removal — microdermabrasion does not remove vellus hair. Dermaplaning uses a sterile surgical-grade blade specifically designed to remove dead surface cells and vellus hair simultaneously in a single treatment. Popular pre-event for enhanced makeup application and cleaner skin surface appearance." } },
                { "@type": "Question", "name": "Is microdermabrasion good for sensitive skin?", "acceptedAnswer": { "@type": "Answer", "text": "Mildly sensitive skin may tolerate gentle diamond-tip microdermabrasion settings. Significantly sensitive, reactive, or barrier-compromised skin typically finds microdermabrasion too aggressive and may benefit more from Oxy-Geneo. Arfah assesses individually during skin analysis. Sensitive skin should never receive Crystal Microdermabrasion — the crystal aerosol and deeper exfoliation contraindicate this modality for reactive skin." } },
                { "@type": "Question", "name": "Is dermaplaning good for sensitive skin?", "acceptedAnswer": { "@type": "Answer", "text": "Dermaplaning on mildly sensitive skin may be tolerated with careful blade technique. Significantly sensitive skin, compromised skin barrier, or reactive skin may find blade contact irritating. Active rosacea, active inflammatory skin conditions, or open wounds contraindicate dermaplaning. Skin analysis determines individual suitability. For reactive skin, Oxy-Geneo may serve as a gentler alternative." } },
                { "@type": "Question", "name": "How often should I get microdermabrasion?", "acceptedAnswer": { "@type": "Answer", "text": "Monthly programme is standard cadence for cumulative benefit. Microdermabrasion benefit peaks in the days immediately post-treatment and tapers over 3-4 weeks — monthly cadence maintains skin quality. Single-session appropriate for occasional refresh. Bridal patients may follow 3-4 session pre-wedding sequence. Membership option available for rolling monthly maintenance." } },
                { "@type": "Question", "name": "How often should I get dermaplaning?", "acceptedAnswer": { "@type": "Answer", "text": "Monthly programme aligns with vellus hair regrowth cycle typically 3-4 weeks. Sustained monthly dermaplaning maintains consistent smoothness and peach fuzz management. Single-session appropriate for pre-event 3-5 days before a photographed occasion. Bridal patients typically follow monthly pre-wedding sequence." } },
                { "@type": "Question", "name": "Is there downtime after either treatment?", "acceptedAnswer": { "@type": "Answer", "text": "No downtime. Skin looks smoother and feels refreshed immediately post-treatment. Mild pink flush possible for 24 hours (more common with microdermabrasion than dermaplaning). Makeup can be applied within 2-3 hours post-microdermabrasion, within a few hours post-dermaplaning. Sun protection essential — freshly exfoliated skin is more sun-sensitive. Avoid intense exercise, sauna, and hot yoga for 24 hours. Avoid retinoids and exfoliating acids for 48-72 hours." } },
                { "@type": "Question", "name": "Can I have microdermabrasion or dermaplaning during pregnancy?", "acceptedAnswer": { "@type": "Answer", "text": "Both are surface treatments without systemic absorption concerns — generally considered acceptable during pregnancy following obstetrician confirmation. Individual assessment during consultation confirms suitability. LED light therapy add-on typically avoided during pregnancy. Skin during pregnancy may be more sensitive — gentler modality settings may be preferable." } },
                { "@type": "Question", "name": "Can these treatments be combined in the same session?", "acceptedAnswer": { "@type": "Answer", "text": "Combining dermaplaning and microdermabrasion in the same session is possible but not always advisable — two aggressive mechanical exfoliation modalities on the same skin surface can compromise the skin barrier. Preferable approaches: alternate monthly, or combine only for specific patient profiles where clinically appropriate. Dermaplaning before HydraFacial or Oxy-Geneo is a well-established integration protocol — different technology combinations rather than two mechanical exfoliations stacked." } },
                { "@type": "Question", "name": "Can dermaplaning be done before HydraFacial or Oxy-Geneo?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — dermaplaning before HydraFacial or Oxy-Geneo is a well-established integration protocol. Dermaplaning as the first step removes vellus hair for cleaner facial delivery and enhances active ingredient penetration in the subsequent facial steps. Popular pre-event bridal choice. Vedara Care offers combined Dermaplaning + HydraFacial and Dermaplaning + Oxy-Geneo protocols priced together for convenience." } },
                { "@type": "Question", "name": "Can men have microdermabrasion or dermaplaning?", "acceptedAnswer": { "@type": "Answer", "text": "Men can absolutely have microdermabrasion — commonly requested for surface exfoliation, congested pore support, dull skin refresh. Dermaplaning is not typically appropriate for male patients in beard-adjacent areas (terminal facial hair does not fit the dermaplaning purpose and blade contact with terminal hair follicles is different from vellus hair removal purpose). Men can have dermaplaning on cleanly shaven skin only, which is uncommon. Microdermabrasion is the standard male grooming option." } },
                { "@type": "Question", "name": "What should I do before my appointment?", "acceptedAnswer": { "@type": "Answer", "text": "Arrive with makeup off or with time for gentle removal. Avoid retinoids/tretinoin 2-3 days before. Avoid glycolic acid products 24 hours before. Avoid recent significant sun exposure 24-48 hours. Wait 14 days after botox/fillers. Wait 2-4 weeks after chemical peel or laser per practitioner guidance. Do not have any waxing, threading, or laser hair removal in treatment area within 5 days before dermaplaning." } },
                { "@type": "Question", "name": "Who delivers these treatments at Vedara Care JVC?", "acceptedAnswer": { "@type": "Answer", "text": "Arfah Owais — DHA-licensed aesthetician with CIBTAC-UK diploma from the Confederation of International Beauty Therapy and Cosmetology a UK gold-standard awarding body, NCLC certification, PMU certification, and 8+ years of hands-on clinical experience. Manual exfoliation technique is fundamental aesthetician skill — Arfah has delivered both microdermabrasion diamond-tip and crystal and dermaplaning across thousands of sessions. Multi-language Arabic, English, Hindi, Urdu. Female practitioner." } },
                { "@type": "Question", "name": "Where is the clinic and how do I book?", "acceptedAnswer": { "@type": "Answer", "text": "Vedara Care Polyclinic is in Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall, three minutes from FIVE Jumeirah Village Hotel, five minutes from JSS Private School. Book by phone, WhatsApp, or through the website booking system. First-visit patients book 60-minute slot 30-min analysis plus 20-30 min treatment. Clinic hours:  Monday - Sunday : 9 AM - 10 PM. Beauty Therapy is one of Vedara Care's seven DHA-licensed specialties." } }
              ]
            })
          }}
        />
        <script
          key="5"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "@id": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/#webpage",
              "name": "Microdermabrasion & Dermaplaning at Vedara Care JVC Dubai — Diamond-Tip and Sterile-Blade Manual Exfoliation",
              "url": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/",
              "about": { "@id": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/#procedure" },
              "mainContentOfPage": { "@type": "WebPageElement", "cssSelector": "main" },
              "reviewedBy": { "@id": "https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/#person" },
              "lastReviewed": "2026-09-21",
              "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
              "medicalAudience": "Patient",
              "specialty": { "@type": "MedicalSpecialty", "name": "Beauty Therapy" },
              "inLanguage": "en-AE"
            })
          }}
        />
        <script
          key="6"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                "Microdermabrasion Diamond-Tip Technique",
                "Microdermabrasion Crystal Technique (Aluminium Oxide)",
                "Sterile-Blade Dermaplaning Technique",
                "Vellus Hair (Peach Fuzz) Removal",
                "Manual Exfoliation Modality Selection",
                "Combined Manual Exfoliation Protocols",
                "Dermaplaning Pre-HydraFacial Integration",
                "Dermaplaning Pre-Oxy-Geneo Integration",
                "Bridal Manual Exfoliation Programme",
                "Male Grooming Microdermabrasion",
                "Sensitive Skin Assessment for Manual Exfoliation",
                "Contraindication Screening (Active Acne, Keloid-Prone Skin, Rosacea)",
                "Comprehensive Skin Analysis and Personalized Treatment Planning",
                "Enhanced Home Skincare Product Penetration",
                "Monthly Manual Exfoliation Programme Management"
              ],
              "knowsLanguage": ["English", "Arabic", "Hindi", "Urdu"],
              "worksFor": { "@id": "https://vedaracare.ae/#organization" }
            })
          }}
        />
        <script
          key="7"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://vedaracare.ae/#organization",
              "@type": ["Organization", "MedicalOrganization"],
              "name": "Vedara Care Polyclinic",
              "url": "https://vedaracare.ae/",
              "logo": { "@type": "ImageObject", "url": "https://vedaracare.ae/logo.png" },
              "sameAs": ["https://www.facebook.com/vedaracare", "https://www.instagram.com/vedaracare"],
              "contactPoint": { "@type": "ContactPoint", "telephone": "+971555736312", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Urdu"] },
              "medicalSpecialty": ["Physiotherapy", "Physiotherapy and Rehabilitation", "Ayurvedic Medicine", "Beauty Therapy", "Dermatology", "General Practice", "Nursing"]
            })
          }}
        />
        <script
          key="8"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": { "@id": "https://vedaracare.ae/treatments/microdermabrasion-dermaplaning-jvc/#procedure" },
              "ratingValue": "4.9",
              "reviewCount": "420",
              "bestRating": "5",
              "worstRating": "1"
            })
          }}
        />


        <script
          key="9"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Semantic Entity Map — Microdermabrasion and Dermaplaning JVC",
              "description": "Structured entity graph for AI and search engine comprehension of all key medical, geographic, practitioner, and service entities referenced on this page.",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "MedicalProcedure",
                    "name": "Microdermabrasion",
                    "description": "Primary treatment entity 1"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "MedicalProcedure",
                    "name": "Dermaplaning",
                    "description": "Primary treatment entity 2"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Diamond-Tip Microdermabrasion",
                    "description": "Preferred microdermabrasion approach"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Crystal Microdermabrasion",
                    "description": "Traditional aluminium oxide crystal approach"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Sterile Surgical-Grade Blade",
                    "description": "Dermaplaning tool authority"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Vellus Hair (Peach Fuzz)",
                    "description": "Dermaplaning target — fine facial hair"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Terminal Hair",
                    "description": "Distinguished from vellus hair for FAQ myth correction"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Stratum Corneum",
                    "description": "Skin layer targeted by both treatments"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 9,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Vacuum Suction Technology",
                    "description": "Microdermabrasion mechanism"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 10,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Aluminium Oxide Crystals",
                    "description": "Crystal Microdermabrasion medium"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 11,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Combined Manual Exfoliation Protocol",
                    "description": "Dermaplaning + Microdermabrasion combined"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 12,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Dermaplaning + HydraFacial Combined",
                    "description": "Pre-HydraFacial integration"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 13,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Dermaplaning + Oxy-Geneo Combined",
                    "description": "Pre-Oxy-Geneo integration"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 14,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Bridal Manual Exfoliation Programme",
                    "description": "Pre-wedding sequence"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 15,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Monthly Manual Exfoliation Programme",
                    "description": "Cumulative benefit maintenance"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 16,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Alternating Monthly Programme (Micro + Derma)",
                    "description": "Complementary rotation approach"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 17,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Enhanced Product Penetration",
                    "description": "Key mechanism both treatments"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 18,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Pre-Event Skin Smoothness",
                    "description": "High-value use case"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 19,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Vellus Hair Regrowth Cycle (3-4 weeks)",
                    "description": "Programme cadence rationale"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 20,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Comprehensive Skin Analysis",
                    "description": "Pre-treatment foundation"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 21,
                  "item": {
                    "@type": "Person",
                    "name": "Arfah Owais",
                    "description": "Primary practitioner entity — hub reference"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 22,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "DHA-Licensed Aesthetician",
                    "description": "Regulatory credential"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 23,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "CIBTAC-UK Diploma",
                    "description": "International training credential"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 24,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "NCLC Certification",
                    "description": "Cosmetology licensing"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 25,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "PMU Certification",
                    "description": "Permanent makeup certification"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 26,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "8+ Years Clinical Experience",
                    "description": "Practitioner authority"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 27,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Manual Exfoliation Technique",
                    "description": "Fundamental aesthetician competency"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 28,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Female Practitioner",
                    "description": "Cultural comfort positioning"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 29,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Multi-Language (AR/EN/HI/UR)",
                    "description": "Practitioner accessibility"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 30,
                  "item": {
                    "@type": "Organization",
                    "name": "Confederation of International Beauty Therapy and Cosmetology",
                    "description": "CIBTAC awarding body"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 31,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Dubai Health Authority (DHA)",
                    "description": "Licensing body"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 32,
                  "item": {
                    "@type": "MedicalClinic",
                    "name": "Vedara Care Polyclinic",
                    "description": "Employer @id site-wide"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 33,
                  "item": {
                    "@type": "MedicalSpecialty",
                    "name": "Beauty Therapy",
                    "description": "DHA-licensed specialty"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 34,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Reimbursement-Basis Insurance",
                    "description": "Vedara Care insurance framework"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 35,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Dull Skin and Surface Textural Irregularity",
                    "description": "Microdermabrasion indication"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 36,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Congested Pores",
                    "description": "Microdermabrasion indication"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 37,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Mild Uneven Skin Tone",
                    "description": "Microdermabrasion indication"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 38,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Pre-Event Skin Preparation",
                    "description": "Dermaplaning indication"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 39,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Enhanced Makeup Application",
                    "description": "Dermaplaning indication"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 40,
                  "item": {
                    "@type": "MedicalContraindication",
                    "name": "Active Severe Acne",
                    "description": "Both treatments (dermaplaning blade spread particularly)"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 41,
                  "item": {
                    "@type": "MedicalContraindication",
                    "name": "Keloid-Prone Skin",
                    "description": "Dermaplaning particularly"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 42,
                  "item": {
                    "@type": "MedicalContraindication",
                    "name": "Active Rosacea Flare",
                    "description": "Both treatments"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 43,
                  "item": {
                    "@type": "MedicalContraindication",
                    "name": "Recent Roaccutane (within 6 months)",
                    "description": "Both treatments"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 44,
                  "item": {
                    "@type": "MedicalContraindication",
                    "name": "Aluminium Sensitivity",
                    "description": "Crystal Microdermabrasion specifically"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 45,
                  "item": {
                    "@type": "MedicalContraindication",
                    "name": "Recent Waxing/Threading/Laser Hair Removal (5 days)",
                    "description": "Dermaplaning"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 46,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Peach Fuzz Regrowth Misconception",
                    "description": "Dedicated FAQ address"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 47,
                  "item": {
                    "@type": "DefinedTerm",
                    "name": "Microdermabrasion vs Dermabrasion Distinction",
                    "description": "Dedicated FAQ address"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 48,
                  "item": {
                    "@type": "Place",
                    "name": "Jumeirah Village Circle (JVC)",
                    "description": "Primary location — 25+ mentions"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 49,
                  "item": {
                    "@type": "City",
                    "name": "Dubai",
                    "description": "Broader geographic"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 50,
                  "item": {
                    "@type": "Place",
                    "name": "Circle Mall, FIVE Jumeirah Village Hotel, JSS Private School",
                    "description": "JVC landmarks"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 51,
                  "item": {
                    "@type": "Place",
                    "name": "Sheikh Mohammed Bin Zayed Road, Al Khail Road",
                    "description": "Access routes"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 52,
                  "item": {
                    "@type": "Place",
                    "name": "Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, JVT, Sports City, Motor City, Arjan, Emirates Hills, Arabian Ranches, Mirdif",
                    "description": "Areas served"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <AyurvedaHero
        {...microdermabrasionHero}
        title="Microdermabrasion & Dermaplaning at our JVC clinic in Dubai — foundational manual exfoliation with immediate results."
      />

      <MicrodermShortVersion data={microdermabrasionShortVersion} />

      <MicrodermHowItWorks data={microdermabrasionHowItWorks} />

      <MicrodermSkinTypes data={microdermabrasionSkinTypes} />

      <MicrodermComprehensiveProtocol data={microdermabrasionComprehensiveProtocol} />

      <MicrodermJourney data={microdermabrasionJourney} />

      <TreatmentReviews
        bgColor={microdermabrasionPatientVoices.bgColor}
        cardBgColor={microdermabrasionPatientVoices.cardBg}
        statsBgColor="transparent"
        label={microdermabrasionPatientVoices.label}
        title={microdermabrasionPatientVoices.title}
        items={microdermabrasionPatientVoices.testimonials.map(t => ({
          quote: t.quote,
          author: t.attribution,
          details: t.treatment,
          details1: t.location
        }))}
        stats={microdermabrasionPatientVoices.stats.map(s => ({
          value: s.value,
          label: s.description
        }))}
        footer={microdermabrasionPatientVoices.footer}
        isDarkText={true}
        useKneeStyle={false}
      />

      <MicrodermArfahProfile data={microdermabrasionArfahProfile} />

      <MicrodermPricing />

      <MicrodermFAQ data={microdermabrasionFAQ} />

      <MicrodermLocation data={microdermabrasionLocation} />

      <FinalCTA
        bgColor="bg-[#FAF7F2]"
        title="Diamond-tip microdermabrasion. Sterile-blade dermaplaning. Delivered by a CIBTAC-UK certified aesthetician with 8+ years of hands-on manual technique experience."
        description="Book microdermabrasion or dermaplaning at our JVC clinic. Comprehensive skin analysis first. Honest modality recommendation. No door-sold packages. Delivered by Arfah Owais inside a DHA-licensed polyclinic."
        button1Text="Book a Consultation"
        button1TextHref="/book"
        button2Text="Whatsapp Us"
        button2TextHref="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20Exfoliation%20Treatments%20at%20your%20JVC%20clinic%20in%20Dubai."
        footer="DHA-Licensed Clinic • CIBTAC-UK Certified Aesthetician • Diamond-Tip & Crystal Options • Sterile-Blade Dermaplaning • Female Practitioner • Multi-Language (AR/EN/HI/UR)"
      />

      <AestheticianRelatedPages {...microdermabrasionRelatedTreatmentsGrid} />

      <BlogRelatedArticles {...microdermabrasionArticles} />
    </>
  );
};

export default MicrodermabrasionJVC;
