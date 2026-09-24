import React from 'react';
import Head from 'next/head';

import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import { AestheticianRelatedPages } from '../../components/aesthetician/AestheticianPageTemplate';
import BlogRelatedArticles from '../../components/blog/BlogRelatedArticles';
import FinalCTA from '../../components/ayurveda/FinalCTA';

import MicrodermShortVersion from '../../components/microdermabrasion/MicrodermShortVersion';
import AdvancedFacialHowItWorks from '../../components/microdermabrasion/AdvancedFacialHowItWorks';
import MicrodermSkinTypes from '../../components/microdermabrasion/MicrodermSkinTypes';
import MicrodermComprehensiveProtocol from '../../components/microdermabrasion/MicrodermComprehensiveProtocol';
import MicrodermJourney from '../../components/microdermabrasion/MicrodermJourney';
import MicrodermFAQ from '../../components/microdermabrasion/MicrodermFAQ';
import AdvancedFacialPricing from '../../components/microdermabrasion/AdvancedFacialPricing';
import MicrodermLocation from '../../components/microdermabrasion/MicrodermLocation';
import MicrodermArfahProfile from '../../components/microdermabrasion/MicrodermArfahProfile';

// Import Data
import {
  advancedFacialSEO,
  advancedFacialHero,
  advancedFacialShortVersion,
  advancedFacialHowItWorks,
  advancedFacialSkinTypes,
  advancedFacialComprehensiveProtocol,
  advancedFacialJourney,
  advancedFacialPatientVoices,
  advancedFacialArfahProfile,
  advancedFacialPricing,
  advancedFacialFAQ,
  advancedFacialLocation,
  advancedFacialFinalCTA,
  advancedFacialRelatedTreatmentsGrid,
  advancedFacialArticles
} from '../../data/advancedFacialData';

const AdvancedFacialRejuvenationJVC = () => {
  return (
    <>
      <Head>
        <title>{advancedFacialSEO.title}</title>
        <meta name="description" content={advancedFacialSEO.description} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={advancedFacialSEO.ogTitle} />
        <meta property="og:description" content={advancedFacialSEO.ogDescription} />
        <meta property="og:image" content={advancedFacialSEO.ogImage} />
        <meta property="og:url" content={advancedFacialSEO.ogUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={advancedFacialSEO.twitterTitle} />
        <meta name="twitter:description" content={advancedFacialSEO.twitterDescription} />
        <meta name="twitter:image" content={advancedFacialSEO.twitterImage} />

        {/* Robots Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href={advancedFacialSEO.canonicalUrl} />
        <link rel="alternate" hrefLang="en-AE" href={advancedFacialSEO.canonicalUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/advanced-facial-rejuvenation-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={advancedFacialSEO.canonicalUrl} />

        {/* Schema Markup */}
        {advancedFacialSEO.schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          key="entity-map"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Advanced Facial Rejuvenation Semantic Entities Map",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "item": { "@type": "MedicalProcedure", "name": "Advanced Facial Rejuvenation", "description": "Primary treatment entity — brand-neutral custom protocol" } },
                { "@type": "ListItem", "position": 2, "item": { "@type": "DefinedTerm", "name": "Skin Renewal Treatment", "description": "Sister keyword cluster" } },
                { "@type": "ListItem", "position": 3, "item": { "@type": "DefinedTerm", "name": "Custom Facial Protocol", "description": "Positioning against branded systems" } },
                { "@type": "ListItem", "position": 4, "item": { "@type": "DefinedTerm", "name": "European Facial Tradition", "description": "Comprehensive multi-modality tradition anchor" } },
                { "@type": "ListItem", "position": 5, "item": { "@type": "DefinedTerm", "name": "Multi-Modality Facial Approach", "description": "Method positioning" } },
                { "@type": "ListItem", "position": 6, "item": { "@type": "DefinedTerm", "name": "Bespoke Facial", "description": "Customization emphasis" } },
                { "@type": "ListItem", "position": 7, "item": { "@type": "MedicalTherapy", "name": "Enzyme Exfoliation (Bromelain, Papain, Pumpkin)", "description": "Gentle exfoliation option" } },
                { "@type": "ListItem", "position": 8, "item": { "@type": "MedicalTherapy", "name": "Glycolic Acid Peel", "description": "Surface renewal peel most common" } },
                { "@type": "ListItem", "position": 9, "item": { "@type": "MedicalTherapy", "name": "Lactic Acid Peel", "description": "Hydrating peel option" } },
                { "@type": "ListItem", "position": 10, "item": { "@type": "MedicalTherapy", "name": "Mandelic Acid Peel", "description": "Larger molecule gentler penetration for Fitzpatrick IV-VI" } },
                { "@type": "ListItem", "position": 11, "item": { "@type": "MedicalTherapy", "name": "Salicylic Acid Peel", "description": "Oil-soluble pore-penetrating for oily/acne-prone" } },
                { "@type": "ListItem", "position": 12, "item": { "@type": "MedicalTherapy", "name": "Dermal Infusion", "description": "Active ingredient delivery" } },
                { "@type": "ListItem", "position": 13, "item": { "@type": "MedicalTherapy", "name": "Ultrasound Infusion", "description": "Enhanced product penetration" } },
                { "@type": "ListItem", "position": 14, "item": { "@type": "MedicalTherapy", "name": "Cryotherapy Application", "description": "Pore refinement, redness reduction, lymphatic stimulation" } },
                { "@type": "ListItem", "position": 15, "item": { "@type": "MedicalTherapy", "name": "Multi-Mask Therapy", "description": "Zone-specific simultaneous mask application" } },
                { "@type": "ListItem", "position": 16, "item": { "@type": "MedicalTherapy", "name": "Facial and Lymphatic Drainage Massage", "description": "Circulation and lymphatic support" } },
                { "@type": "ListItem", "position": 17, "item": { "@type": "MedicalTherapy", "name": "High-Frequency Treatment", "description": "Acne-focused variant" } },
                { "@type": "ListItem", "position": 18, "item": { "@type": "MedicalTherapy", "name": "Galvanic Current", "description": "Desincrustation and iontophoresis" } },
                { "@type": "ListItem", "position": 19, "item": { "@type": "MedicalTherapy", "name": "LED Light Therapy (Blue 415nm / Red 630nm / Yellow 590nm)", "description": "Wavelength-specific concern targeting" } },
                { "@type": "ListItem", "position": 20, "item": { "@type": "Substance", "name": "Hyaluronic Acid Dermal Infusion", "description": "Hydration" } },
                { "@type": "ListItem", "position": 21, "item": { "@type": "Substance", "name": "Peptide Complex Infusion", "description": "Collagen support" } },
                { "@type": "ListItem", "position": 22, "item": { "@type": "Substance", "name": "Growth Factor Infusion", "description": "Regeneration support" } },
                { "@type": "ListItem", "position": 23, "item": { "@type": "Substance", "name": "Brightening Serum Complex (Vitamin C, Tranexamic Acid, Kojic Acid, Arbutin)", "description": "Pigmentation focus" } },
                { "@type": "ListItem", "position": 24, "item": { "@type": "Substance", "name": "Niacinamide Infusion", "description": "Calming, barrier support" } },
                { "@type": "ListItem", "position": 25, "item": { "@type": "DefinedTerm", "name": "Custom Protocol Session-by-Session Design", "description": "Value proposition" } },
                { "@type": "ListItem", "position": 26, "item": { "@type": "DefinedTerm", "name": "Skin-Analysis-Driven Modality Selection", "description": "Selection driver" } },
                { "@type": "ListItem", "position": 27, "item": { "@type": "DefinedTerm", "name": "Bridal Custom Multi-Modality Programme", "description": "6-month pre-wedding progression" } },
                { "@type": "ListItem", "position": 28, "item": { "@type": "DefinedTerm", "name": "Combination Skin Zone-by-Zone Protocol", "description": "Multi-mask therapy application" } },
                { "@type": "ListItem", "position": 29, "item": { "@type": "DefinedTerm", "name": "Mature Skin Multi-Modality Protocol", "description": "Peptide + growth factor + Red LED focus" } },
                { "@type": "ListItem", "position": 30, "item": { "@type": "DefinedTerm", "name": "Acne-Focused Multi-Modality Protocol", "description": "Salicylic + extractions + high-frequency + galvanic + Blue LED" } },
                { "@type": "ListItem", "position": 31, "item": { "@type": "DefinedTerm", "name": "Sensitive Skin Multi-Modality Protocol", "description": "Enzyme + calming + cryo + Yellow LED without peel intensity" } },
                { "@type": "ListItem", "position": 32, "item": { "@type": "DefinedTerm", "name": "Brightening Multi-Modality Protocol", "description": "Mandelic + brightening infusion + Yellow LED for Fitzpatrick I-III" } },
                { "@type": "ListItem", "position": 33, "item": { "@type": "DefinedTerm", "name": "Intensive Hydration Multi-Modality Protocol", "description": "Enzyme + lactic + HA + ultrasound + hydrating mask" } },
                { "@type": "ListItem", "position": 34, "item": { "@type": "MedicalProcedure", "name": "Comprehensive Skin Analysis", "description": "Pre-treatment foundation" } },
                { "@type": "ListItem", "position": 35, "item": { "@type": "Person", "name": "Arfah Owais", "description": "Primary practitioner entity — hub reference" } },
                { "@type": "ListItem", "position": 36, "item": { "@type": "DefinedTerm", "name": "DHA-Licensed Aesthetician", "description": "Regulatory credential" } },
                { "@type": "ListItem", "position": 37, "item": { "@type": "DefinedTerm", "name": "CIBTAC-UK Diploma", "description": "International training credential — comprehensive multi-modality training emphasis" } },
                { "@type": "ListItem", "position": 38, "item": { "@type": "DefinedTerm", "name": "NCLC Certification", "description": "Cosmetology licensing" } },
                { "@type": "ListItem", "position": 39, "item": { "@type": "DefinedTerm", "name": "PMU Certification", "description": "Permanent makeup certification" } },
                { "@type": "ListItem", "position": 40, "item": { "@type": "DefinedTerm", "name": "8+ Years Clinical Experience", "description": "Practitioner authority" } },
                { "@type": "ListItem", "position": 41, "item": { "@type": "DefinedTerm", "name": "Multi-Modality Aesthetician Skill Set", "description": "Custom protocol delivery competency" } },
                { "@type": "ListItem", "position": 42, "item": { "@type": "DefinedTerm", "name": "Female Practitioner", "description": "Cultural comfort positioning" } },
                { "@type": "ListItem", "position": 43, "item": { "@type": "DefinedTerm", "name": "Multi-Language (AR/EN/HI/UR)", "description": "Practitioner accessibility" } },
                { "@type": "ListItem", "position": 44, "item": { "@type": "Organization", "name": "Confederation of International Beauty Therapy and Cosmetology", "description": "CIBTAC awarding body" } },
                { "@type": "ListItem", "position": 45, "item": { "@type": "GovernmentOrganization", "name": "Dubai Health Authority (DHA)", "description": "Licensing body" } },
                { "@type": "ListItem", "position": 46, "item": { "@type": "MedicalClinic", "name": "Vedara Care Polyclinic", "description": "Employer @id site-wide" } },
                { "@type": "ListItem", "position": 47, "item": { "@type": "MedicalSpecialty", "name": "Beauty Therapy", "description": "DHA-licensed specialty" } },
                { "@type": "ListItem", "position": 48, "item": { "@type": "DefinedTerm", "name": "Reimbursement-Basis Insurance", "description": "Vedara Care insurance framework" } },
                { "@type": "ListItem", "position": 49, "item": { "@type": "MedicalProcedure", "name": "HydraFacial (Comparison Reference)", "description": "Branded system comparison" } },
                { "@type": "ListItem", "position": 50, "item": { "@type": "MedicalProcedure", "name": "Oxy-Geneo Facial (Comparison Reference)", "description": "Branded system comparison" } },
                { "@type": "ListItem", "position": 51, "item": { "@type": "MedicalProcedure", "name": "Microdermabrasion & Dermaplaning (Related Reference)", "description": "Foundational manual exfoliation alternative" } },
                { "@type": "ListItem", "position": 52, "item": { "@type": "MedicalCondition", "name": "Multiple Concurrent Skin Concerns", "description": "Custom protocol indication" } },
                { "@type": "ListItem", "position": 53, "item": { "@type": "MedicalCondition", "name": "Combination Skin Zone Variation", "description": "Multi-mask therapy indication" } },
                { "@type": "ListItem", "position": 54, "item": { "@type": "MedicalCondition", "name": "Dehydrated Skin (Dubai Climate)", "description": "Intensive hydration protocol indication" } },
                { "@type": "ListItem", "position": 55, "item": { "@type": "MedicalCondition", "name": "Mild-to-Moderate Acne-Prone Skin", "description": "Acne-focused variant indication" } },
                { "@type": "ListItem", "position": 56, "item": { "@type": "MedicalContraindication", "name": "Active Severe Acne or Cystic Acne", "description": "Dermatological management first" } },
                { "@type": "ListItem", "position": 57, "item": { "@type": "MedicalContraindication", "name": "Active Rosacea Flare", "description": "Protocol contraindicated" } },
                { "@type": "ListItem", "position": 58, "item": { "@type": "MedicalContraindication", "name": "Recent Roaccutane (within 6 months)", "description": "Protocol contraindicated" } },
                { "@type": "ListItem", "position": 59, "item": { "@type": "MedicalContraindication", "name": "Barrier-Compromised Skin", "description": "Gentler alternative preferable" } },
                { "@type": "ListItem", "position": 60, "item": { "@type": "DefinedTerm", "name": "Pregnancy", "description": "Peel and LED avoided, other modalities adjusted" } },
                { "@type": "ListItem", "position": 61, "item": { "@type": "DefinedTerm", "name": "Fitzpatrick IV-VI Skin Tones", "description": "Mandelic/lactic peels preferable, or Oxy-Geneo alternative" } },
                { "@type": "ListItem", "position": 62, "item": { "@type": "Place", "name": "Jumeirah Village Circle (JVC)", "description": "Primary location — 25+ mentions" } },
                { "@type": "ListItem", "position": 63, "item": { "@type": "City", "name": "Dubai", "description": "Broader geographic" } },
                { "@type": "ListItem", "position": 64, "item": { "@type": "Place", "name": "Circle Mall, FIVE Jumeirah Village Hotel, JSS Private School", "description": "JVC landmarks" } },
                { "@type": "ListItem", "position": 65, "item": { "@type": "Place", "name": "Sheikh Mohammed Bin Zayed Road, Al Khail Road", "description": "Access routes" } },
                { "@type": "ListItem", "position": 66, "item": { "@type": "Place", "name": "Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, JVT, Sports City, Motor City, Arjan, Emirates Hills, Arabian Ranches, Mirdif", "description": "Areas served" } }
              ]
            })
          }}
        />
      </Head>

      <AyurvedaHero
        {...advancedFacialHero}
      />

      <MicrodermShortVersion data={advancedFacialShortVersion} />

      <AdvancedFacialHowItWorks data={advancedFacialHowItWorks} />

      <MicrodermSkinTypes data={advancedFacialSkinTypes} />

      <MicrodermComprehensiveProtocol data={advancedFacialComprehensiveProtocol} />

      <MicrodermJourney data={advancedFacialJourney} />

      <TreatmentReviews
        bgColor={advancedFacialPatientVoices.bgColor || '#F0EBE3'}
        cardBgColor={advancedFacialPatientVoices.cardBgColor}
        statsBgColor="transparent"
        label="REVIEWS"
        title={advancedFacialPatientVoices.title}
        items={advancedFacialPatientVoices.reviews.map(t => ({
          quote: t.text,
          author: t.author,
          details: t.treatment,
          details1: 'JVC, Dubai'
        }))}
        stats={[]}
        footer={advancedFacialPatientVoices.footer}
        isDarkText={true}
        useKneeStyle={false}
      />

      <MicrodermArfahProfile data={advancedFacialArfahProfile}
        bgColor={"#F0EBE3"}
        cardBgColor={"#fff"}
      />

      <AdvancedFacialPricing data={advancedFacialPricing} bgColor={"#F0EBE3"} cardBgColor={"#fff"} />

      <MicrodermFAQ data={advancedFacialFAQ} />

      <MicrodermLocation data={advancedFacialLocation} />

      <FinalCTA
        bgColor="bg-[#FAF7F2]"
        title={advancedFacialFinalCTA.title}
        description="Book Advanced Facial Rejuvenation at our JVC clinic. Comprehensive skin analysis first. Custom protocol designed session-by-session. No door-sold packages. Delivered by Arfah Owais inside a DHA-licensed polyclinic."
        button1Text="Book Treatment at JVC"
        button1TextHref="/book"
        button2Text="Whatsapp Us"
        button2TextHref="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20Advanced%20Facial%20Rejuvenation%20at%20your%20JVC%20clinic%20in%20Dubai."
        footer="DHA-Licensed Clinic • CIBTAC-UK Certified Aesthetician • Custom Multi-Modality Protocol • 60-90 Min Session • Female Practitioner • Multi-Language (AR/EN/HI/UR)"
      />

      <AestheticianRelatedPages {...advancedFacialRelatedTreatmentsGrid} />

      <BlogRelatedArticles {...advancedFacialArticles} />
    </>
  );
};

export default AdvancedFacialRejuvenationJVC;
