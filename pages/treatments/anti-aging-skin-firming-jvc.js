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
import MicrodermPatientCases from '../../components/microdermabrasion/MicrodermPatientCases';
import MicrodermFAQ from '../../components/microdermabrasion/MicrodermFAQ';
import AdvancedFacialPricing from '../../components/microdermabrasion/AdvancedFacialPricing';
import MicrodermLocation from '../../components/microdermabrasion/MicrodermLocation';
import MicrodermArfahProfile from '../../components/microdermabrasion/MicrodermArfahProfile';

// Import Data
import {
  antiAgingSEO,
  antiAgingHero,
  antiAgingShortVersion,
  antiAgingHowItWorks,
  antiAgingSkinTypes,
  antiAgingComprehensiveProtocol,
  antiAgingJourney,
  antiAgingPatientCases,
  antiAgingPatientVoices,
  antiAgingArfahProfile,
  antiAgingPricing,
  antiAgingFAQ,
  antiAgingLocation,
  antiAgingFinalCTA,
  antiAgingRelatedTreatmentsGrid,
  antiAgingArticles
} from '../../data/antiAgingData';

const AntiAgingSkinFirmingJVC = () => {
  return (
    <>
      <Head>
        <title>{antiAgingSEO.title}</title>
        <meta name="description" content={antiAgingSEO.description} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={antiAgingSEO.ogTitle} />
        <meta property="og:description" content={antiAgingSEO.ogDescription} />
        <meta property="og:image" content={antiAgingSEO.ogImage} />
        <meta property="og:url" content={antiAgingSEO.ogUrl} />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={antiAgingSEO.twitterTitle} />
        <meta name="twitter:description" content={antiAgingSEO.twitterDescription} />
        <meta name="twitter:image" content={antiAgingSEO.twitterImage} />

        {/* Robots Directives */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />

        {/* Canonical & Language Tags */}
        <link rel="canonical" href={antiAgingSEO.canonicalUrl} />
        <link rel="alternate" hrefLang="en-AE" href={antiAgingSEO.canonicalUrl} />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/anti-aging-skin-firming-jvc/" />
        <link rel="alternate" hrefLang="x-default" href={antiAgingSEO.canonicalUrl} />

        {/* Schema Markup */}
        {antiAgingSEO.schemas.map((schema, index) => (
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
              "name": "Customized Anti-Aging & Skin-Firming Protocol Semantic Entities Map",
              "description": "Comprehensive AEO/GEO entity mapping for non-invasive anti-aging pathway at Vedara Care JVC",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "item": { "@type": "MedicalProcedure", "name": "Customized Anti-Aging & Skin-Firming Protocol", "description": "Primary Entity: Non-invasive, aesthetician-delivered monthly maintenance programme at JVC Dubai." } },
                { "@type": "ListItem", "position": 2, "item": { "@type": "Person", "name": "Arfah Owais", "description": "Practitioner Entity: DHA-Licensed Aesthetician, CIBTAC-UK, NCLC, PMU, Buccal & Kobido trained, 8+ years experience, female practitioner, speaks Arabic/English/Hindi/Urdu." } },
                { "@type": "ListItem", "position": 3, "item": { "@type": "Person", "name": "Medical Director", "description": "Practitioner Entity: DHA-Licensed Consultant Dermatologist providing clinical oversight." } },
                { "@type": "ListItem", "position": 4, "item": { "@type": "MedicalBusiness", "name": "Vedara Care Polyclinic", "description": "Organization Entity: DHA-licensed polyclinic in JVC Dubai (vedaracare.ae)." } },
                { "@type": "ListItem", "position": 5, "item": { "@type": "Place", "name": "Jumeirah Village Circle (JVC)", "description": "Location Entity: Primary neighborhood anchor." } },
                { "@type": "ListItem", "position": 6, "item": { "@type": "City", "name": "Dubai", "description": "Location Entity: Broader emirate framing." } },
                { "@type": "ListItem", "position": 7, "item": { "@type": "MedicalTherapy", "name": "Micro-current Facial Toning", "description": "Modality Entity: Sub-sensory electrical stimulation, muscle re-education." } },
                { "@type": "ListItem", "position": 8, "item": { "@type": "MedicalTherapy", "name": "Peptide Dermal Infusion", "description": "Modality Entity: GHK-Cu copper peptides, Matrixyl palmitoyl peptides, Argireline hexapeptides." } },
                { "@type": "ListItem", "position": 9, "item": { "@type": "MedicalTherapy", "name": "Growth Factor Infusion", "description": "Modality Entity: EGF, FGF, plant-derived growth factors." } },
                { "@type": "ListItem", "position": 10, "item": { "@type": "MedicalTherapy", "name": "Retinol / Bakuchiol Facial Application", "description": "Modality Entity: Aesthetician-grade concentrations." } },
                { "@type": "ListItem", "position": 11, "item": { "@type": "MedicalTherapy", "name": "Antioxidant Infusion", "description": "Modality Entity: Vitamin C, Vitamin E, Ferulic acid, Niacinamide." } },
                { "@type": "ListItem", "position": 12, "item": { "@type": "MedicalTherapy", "name": "Ultrasound Firming", "description": "Modality Entity: Low-frequency skin conductivity, product penetration enhancement." } },
                { "@type": "ListItem", "position": 13, "item": { "@type": "MedicalTherapy", "name": "LED Photobiomodulation", "description": "Modality Entity: Red 630nm collagen stimulation, NIR 830nm deep tissue support." } },
                { "@type": "ListItem", "position": 14, "item": { "@type": "MedicalTherapy", "name": "Face-Lifting Massage", "description": "Modality Entity: Buccal intra-oral, Kobido Japanese, Gua Sha, Facial Cupping." } },
                { "@type": "ListItem", "position": 15, "item": { "@type": "MedicalCondition", "name": "Fine lines and expression lines", "description": "Skin Concern Entity" } },
                { "@type": "ListItem", "position": 16, "item": { "@type": "MedicalCondition", "name": "Loss of skin firmness and elasticity", "description": "Skin Concern Entity" } },
                { "@type": "ListItem", "position": 17, "item": { "@type": "MedicalCondition", "name": "Jawline definition softening", "description": "Skin Concern Entity" } },
                { "@type": "ListItem", "position": 18, "item": { "@type": "MedicalCondition", "name": "Neck and décolleté aging", "description": "Skin Concern Entity" } },
                { "@type": "ListItem", "position": 19, "item": { "@type": "MedicalCondition", "name": "Eye area concerns", "description": "Skin Concern Entity: crow's feet, undereye hollowing" } },
                { "@type": "ListItem", "position": 20, "item": { "@type": "MedicalTherapy", "name": "Anti-Aging Injectables", "description": "Alternative Treatment Entity: Botulinum toxin, Hyaluronic acid dermal fillers." } },
                { "@type": "ListItem", "position": 21, "item": { "@type": "MedicalTherapy", "name": "HIFU", "description": "Alternative Treatment Entity: High-Intensity Focused Ultrasound." } },
                { "@type": "ListItem", "position": 22, "item": { "@type": "MedicalCondition", "name": "Cheek volume descent", "description": "Skin Concern Entity: positional laxity" } },
                { "@type": "ListItem", "position": 23, "item": { "@type": "MedicalCondition", "name": "Dull complexion", "description": "Skin Concern Entity: associated with cellular slowdown" } },
                { "@type": "ListItem", "position": 24, "item": { "@type": "MedicalCondition", "name": "Enlarged pores", "description": "Skin Concern Entity: associated with elasticity loss" } },
                { "@type": "ListItem", "position": 25, "item": { "@type": "MedicalCondition", "name": "Uneven skin tone", "description": "Skin Concern Entity: from cumulative photoaging" } },
                { "@type": "ListItem", "position": 26, "item": { "@type": "MedicalTherapy", "name": "RF Skin Tightening", "description": "Alternative Treatment Entity" } },
                { "@type": "ListItem", "position": 27, "item": { "@type": "MedicalTherapy", "name": "RF Microneedling", "description": "Alternative Treatment Entity" } },
                { "@type": "ListItem", "position": 28, "item": { "@type": "MedicalTherapy", "name": "Non-Ablative Laser Skin Rejuvenation", "description": "Alternative Treatment Entity" } },
                { "@type": "ListItem", "position": 29, "item": { "@type": "MedicalTherapy", "name": "Advanced Facial Rejuvenation", "description": "Alternative Treatment Entity: broader customization pathway" } },
                { "@type": "ListItem", "position": 30, "item": { "@type": "MedicalTherapy", "name": "Oxy-Geneo NeoRevive", "description": "Alternative Treatment Entity: branded anti-aging alternative" } },
                { "@type": "ListItem", "position": 31, "item": { "@type": "MedicalTherapy", "name": "HydraFacial", "description": "Alternative Treatment Entity: branded hydration alternative" } },
                { "@type": "ListItem", "position": 32, "item": { "@type": "Organization", "name": "DHA (Dubai Health Authority)", "description": "Regulatory Entity: Licensing and advertising compliance framework" } },
                { "@type": "ListItem", "position": 33, "item": { "@type": "Organization", "name": "MOHAP (Ministry of Health and Prevention)", "description": "Regulatory Entity: UAE federal complaints authority" } },
                { "@type": "ListItem", "position": 34, "item": { "@type": "Organization", "name": "CIBTAC-UK", "description": "Credential Entity: Confederation of International Beauty Therapy and Cosmetology" } },
                { "@type": "ListItem", "position": 35, "item": { "@type": "Organization", "name": "NCLC", "description": "Credential Entity: National Coalition of Estheticians" } },
                { "@type": "ListItem", "position": 36, "item": { "@type": "Thing", "name": "Speakable Content Blocks", "description": "AEO Enhancement: voice search citation surface" } },
                { "@type": "ListItem", "position": 37, "item": { "@type": "Thing", "name": "HowTo Structured Data", "description": "AEO Enhancement: 12-step protocol AI extraction" } },
                { "@type": "ListItem", "position": 38, "item": { "@type": "Thing", "name": "Peer-Reviewed Peptide Research", "description": "AEO Enhancement: Pickart & Margolina GHK-Cu" } },
                { "@type": "ListItem", "position": 39, "item": { "@type": "Thing", "name": "LED Photobiomodulation Research", "description": "AEO Enhancement: International Journal of Molecular Sciences" } },
                { "@type": "ListItem", "position": 40, "item": { "@type": "Thing", "name": "ISAPS Global Survey 2023", "description": "AEO Enhancement: International Society of Aesthetic Plastic Surgery" } },
                { "@type": "ListItem", "position": 41, "item": { "@type": "Thing", "name": "ASDS Consumer Survey 2024", "description": "AEO Enhancement: American Society for Dermatologic Surgery" } },
                { "@type": "ListItem", "position": 42, "item": { "@type": "Thing", "name": "Medical Director Clinical Oversight", "description": "E-E-A-T Enhancement: Trustworthiness signal" } },
                { "@type": "ListItem", "position": 43, "item": { "@type": "Thing", "name": "First-Person Practitioner Voice", "description": "E-E-A-T Enhancement: Experience signal" } },
                { "@type": "ListItem", "position": 44, "item": { "@type": "Thing", "name": "Proprietary Vedara Care Internal Observations", "description": "GEO Enhancement: distinctive framing signal" } }
              ]
            })
          }}
        />
      </Head>

      <AyurvedaHero
        {...antiAgingHero}
      />

      <section style={{ backgroundColor: "rgb(245, 240, 232)", paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div style={{ borderLeft: "4px solid rgb(200, 168, 127)", paddingLeft: "32px", borderRadius: "8px" }}>
            <p className="font-sans font-semibold italic text-[#C9A961] text-[13px] uppercase tracking-[0.12em] mb-4">At a Glance</p>
            <h2 className="font-serif" style={{ fontSize: "28px", color: "rgb(31, 31, 31)", fontWeight: 400, marginBottom: "24px" }}>Customized Anti-Aging &amp; Skin-Firming Protocol at Vedara Care JVC — the short version.</h2>
            <div className="gold-left-border mb-6">
              <p className="font-sans" style={{ fontWeight: 500, fontSize: "18px", lineHeight: 1.7, color: "rgb(31, 31, 31)" }}>Customized Anti-Aging &amp; Skin-Firming Protocol at Vedara Care JVC is a non-invasive monthly maintenance programme combining micro-current therapy, peptide and growth factor dermal infusion, Red and Near-Infrared LED collagen stimulation, and face-lifting massage techniques, designed session-by-session by DHA-licensed CIBTAC-UK certified aesthetician Arfah Owais. Sessions run 75–120 minutes. No downtime standard. Monthly cadence recommended for cumulative benefit over 6–12 months.</p>
            </div>
            <p className="font-sans" style={{ fontSize: "17px", lineHeight: 1.75, color: "rgb(31, 31, 31)", marginBottom: "28px" }}>The programme is designed for patients wanting sustained non-invasive anti-aging maintenance — as a standalone alternative to injectable and device-based interventions, as maintenance between injectable treatments, as preventive protocol for early-30s patients delaying injectables, or as monthly maintenance following HIFU or laser resurfacing programmes. Modality selection is customized session-by-session based on comprehensive skin analysis findings, with Arfah adjusting protocol depth and modality mix as skin evolves through the programme.</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">75–120 min session</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">No standard downtime</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">Non-invasive protocol</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">Monthly programme cadence</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">Skin-analysis-driven</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">Peptide + growth factor + micro-current + LED</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">Face-lifting massage integrated</span>
              <span className="font-sans inline-block px-4 py-2 rounded-full border border-[#C9A55A] text-[#8A795D] text-sm bg-transparent">Medical Director oversight</span>
            </div>
            <p className="font-sans" style={{ fontSize: "11px", color: "rgb(119, 119, 119)", lineHeight: 1.6 }}>Peptide research references: Pickart &amp; Margolina, 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration', BioMed Research International, 2015. Additional peer-reviewed sources cited throughout page. [Verify URLs before publish.]</p>
          </div>
        </div>
      </section>

      <AdvancedFacialHowItWorks data={antiAgingHowItWorks} />

      <MicrodermSkinTypes data={antiAgingSkinTypes} />

      <MicrodermComprehensiveProtocol data={antiAgingComprehensiveProtocol} />

      <MicrodermJourney data={antiAgingJourney} />

      <MicrodermPatientCases data={antiAgingPatientCases} />



      <MicrodermArfahProfile data={antiAgingArfahProfile}
        bgColor={"#FAF7F2"}
        cardBgColor={"#fff"}
      />
      <AdvancedFacialPricing data={antiAgingPricing} bgColor={"#F0EBE3"} cardBgColor={"#fff"} />

      <MicrodermFAQ data={antiAgingFAQ} bgColor="#F0EBE3" />



      <MicrodermLocation data={antiAgingLocation}
      />

      <FinalCTA
        bgColor="bg-[#FAF7F2]"
        title={antiAgingFinalCTA.title}
        description="Book programme consultation at our JVC clinic. Comprehensive skin analysis first. Custom protocol designed for your skin. Honest positioning versus injectable and device alternatives."
        button1Text="Book Treatment at JVC"
        button1TextHref="/book"
        button2Text="Whatsapp Us"
        button2TextHref="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20Anti-Aging%20Treatment%20at%20your%20JVC%20clinic%20in%20Dubai."
        footer="DHA-Licensed Clinic · CIBTAC-UK Certified Aesthetician · Medical Director Oversight · Non-Invasive Protocol · Female Practitioner · Multi-Language (AR/EN/HI/UR)"
      />

      <AestheticianRelatedPages {...antiAgingRelatedTreatmentsGrid} />

      <BlogRelatedArticles {...antiAgingArticles} />
    </>
  );
};

export default AntiAgingSkinFirmingJVC;
