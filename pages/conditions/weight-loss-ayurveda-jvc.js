import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import AyurvedicTeam from '../../components/ayurveda/AyurvedicTeam';
import FAQ from '../../components/home/FAQ';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import {
  weightLossJvcHero,
  weightLossJvcIntro,
  weightLossJvcMechanism,
  weightLossJvcConditions,
  weightLossJvcApproaches,
  weightLossTeam,
  weightLossFaqs,
  weightLossJvcLocation,
  weightLossCTA,
  weightLossJvcRelatedPages,
  weightLossJvcRelatedArticles,
  weightLossJvcReviews
} from '../../data/weightLossAyurvedaJvcData';

const WeightLossAyurvedaJvc = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/weight-loss-ayurveda-jvc/#weight-care",
      "name": "Vedara Care Weight Management Ayurvedic Treatment JVC",
      "alternateName": ["Vedara Weight Loss Ayurveda JVC", "Ayurvedic Weight Management JVC Dubai", "Vedara Metabolic Ayurvedic Care"],
      "url": "https://vedaracare.ae/conditions/weight-loss-ayurveda-jvc/",
      "parentOrganization": { "@id": "https://vedaracare.ae/#organization" },
      "description": "Sustainable Ayurvedic weight management at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Female DHA-licensed BAMS-qualified Ayurvedic doctor Dr. Neethu delivering comprehensive metabolic care through Panchakarma, Udvartana, herbal medicines, and constitutional dietary guidance. Coordinated with modern medical care.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 400 - AED 20,000",
      "address": { "@type": "PostalAddress", "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE", "postalCode": "00000" },
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
      "medicalSpecialty": ["Ayurveda", "Weight Management", "Metabolic Medicine", "Integrative Medicine", "Traditional Medicine", "Wellness"],
      "isAcceptingNewPatients": true,
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Ayurvedic Weight Management Consultation" },
        { "@type": "MedicalProcedure", "name": "Panchakarma Metabolic Reset" },
        { "@type": "MedicalProcedure", "name": "Udvartana Weight Therapy" },
        { "@type": "MedicalProcedure", "name": "Abhyanga Oil Massage" },
        { "@type": "MedicalProcedure", "name": "Ayurvedic Metabolic Herbal Medicine Prescription" },
        { "@type": "MedicalProcedure", "name": "Constitutional Assessment" },
        { "@type": "MedicalProcedure", "name": "Nadi Pareeksha" },
        { "@type": "MedicalProcedure", "name": "Post-Pregnancy Weight Management Programme" },
        { "@type": "MedicalProcedure", "name": "PCOS Weight Support Programme" }
      ],
      "memberOf": { "@type": "Organization", "name": "Dubai Health Authority" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "850", "bestRating": "5", "worstRating": "1" },
      "reviewedBy": { "@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician" },
      "lastReviewed": "2026-08-20"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Overweight and Obesity",
      "alternateName": ["Weight Management", "Metabolic Syndrome"],
      "code": { "@type": "MedicalCode", "code": "E66", "codingSystem": "ICD-10" },
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "Ayurvedic Weight Management" },
        { "@type": "MedicalTherapy", "name": "Panchakarma" },
        { "@type": "MedicalTherapy", "name": "Udvartana" },
        { "@type": "MedicalTherapy", "name": "Constitutional Ayurvedic Care" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Udvartana",
      "alternateName": ["Ayurvedic Powder Massage", "Udvartana Weight Therapy"],
      "procedureType": "Ayurvedic Therapeutic Procedure",
      "howPerformed": "Vigorous upward massage with warm herbal powders to stimulate lymphatic circulation and fat metabolism",
      "indication": [
        { "@type": "MedicalCondition", "name": "Overweight and Obesity" },
        { "@type": "MedicalCondition", "name": "Cellulite" },
        { "@type": "MedicalCondition", "name": "Metabolic Sluggishness" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician",
      "name": "Dr. Neethu",
      "url": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/",
      "medicalSpecialty": ["Ayurveda", "Weight Management"],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "BAMS" },
        { "@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor" }
      ],
      "gender": "Female",
      "knowsAbout": [
        "Ayurvedic Weight Management",
        "Panchakarma",
        "Udvartana",
        "PCOS Weight Management",
        "Post-Pregnancy Weight Management",
        "Perimenopausal Weight Changes",
        "Metabolic Syndrome Support",
        "Nadi Pareeksha",
        "Prakriti Assessment"
      ],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
      "worksFor": { "@id": "https://vedaracare.ae/#organization" }
    }
  ];

  return (
    <>
      <Head>
        <title>Weight Loss Ayurveda JVC | Sustainable Approach | Vedara Care Dubai</title>
        <meta name="description" content="Sustainable Ayurvedic weight management at our JVC clinic Dubai. Female DHA-licensed doctor. Panchakarma, Udvartana, constitutional approach. Multi-language. No crash diets." />
        <link rel="canonical" href="https://vedaracare.ae/conditions/weight-loss-ayurveda-jvc/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/weight-loss-ayurveda-jvc/" />
        <link rel="alternate" hreflang="ar-AE" href="https://vedaracare.ae/ar/conditions/weight-loss-ayurveda-jvc/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/weight-loss-ayurveda-jvc/" />

        <meta property="og:title" content="Sustainable Weight Management Through Ayurveda at Our JVC Clinic Dubai | Vedara Care" />
        <meta property="og:description" content="Sustainable Ayurvedic weight management at Vedara Care JVC clinic, walking distance from Circle Mall. Female DHA-licensed BAMS Ayurvedic doctor Dr. Neethu. Panchakarma metabolic reset, Udvartana, herbal medicines, constitutional approach." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/weight-loss-ayurveda-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/weight-loss-ayurveda-jvc/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Weight Loss Ayurveda JVC | Sustainable Approach | Vedara" />
        <meta name="twitter:description" content="DHA-licensed sustainable Ayurvedic weight management at JVC. Female doctor. Panchakarma, Udvartana." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/weight-loss-ayurveda-jvc.jpg" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        <AyurvedaHero {...weightLossJvcHero} />

        <AyurvedaIntro {...weightLossJvcIntro} bgColor="bg-white" />

        <SciaticaTreatment
          data={weightLossJvcMechanism}
          showBorderLeft={false}
          rightContentStyle="checklist"
          bgColor="bg-[#F0EBE3]"
        />

        <SportsInjuryTypes
          bgColor="#FFFFFF"
          cardBgColor="#F5F0E8"
          title={weightLossJvcConditions.title}
          label={weightLossJvcConditions.label}
          description={weightLossJvcConditions.description}
          footer={weightLossJvcConditions.footerNote}
          items={weightLossJvcConditions.items || weightLossJvcConditions.types || []}
          lgColumns={4}
        />

        <ContentWithSidebar {...weightLossJvcApproaches} />

        {/* The Journey Section */}
        <section style={{ background: "rgb(255, 255, 255)", padding: "96px 32px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", fontWeight: 600, marginBottom: "16px" }}>
                YOUR JOURNEY
              </p>
              <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.15, color: "rgb(31, 31, 31)", marginBottom: "20px", letterSpacing: "-0.015em" }}>
                What sustainable Ayurvedic weight management journey looks like at our JVC clinic.
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", color: "rgb(110, 110, 110)", fontSize: "16px", lineHeight: 1.55, marginBottom: "24px" }}>
                Realistic understanding of timeline helps set appropriate expectations for meaningful metabolic outcomes.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px", marginBottom: "48px" }}>
              {[
                { phase: "Phase 1", title: "Assessment & Foundation", time: "Week 1-2", desc: "Comprehensive 90-minute initial consultation with Dr. Neethu identifying your weight history, metabolic patterns, constitutional factors, and treatment goals. Personalised treatment plan design. Foundation dietary recommendations initiated based on constitution. Initial herbal medicines prescribed to support Agni." },
                { phase: "Phase 2", title: "Metabolic Reset & Detox", time: "Weeks 3–6", desc: "Active Panchakarma metabolic reset phase, potentially including Virechana, supported by Udvartana (herbal powder massage) sessions. Deep internal cleansing and preparation of the tissues for sustained metabolic shifts." },
                { phase: "Phase 3", title: "Metabolic Consolidation", time: "Weeks 7–12", desc: "Continued Udvartana or Abhyanga treatments at reducing frequency, herbal medicine maintenance and adjustment, dietary practices becoming sustained habits. Substantial sustained improvements in body composition, energy, and digestion typically apparent." },
                { phase: "Phase 4", title: "Long-Term Sustained Wellness", time: "Month 3+", desc: "Transitioned to sustained lifestyle partnership with periodic check-ins, ongoing lifestyle practices, seasonal detox adjustments as needed. A focus on maintaining a balanced Agni and healthy weight without extreme restriction." }
              ].map((item, idx) => (
                <div key={idx} style={{ background: "rgb(245, 240, 232)", padding: "28px", borderRadius: "8px", borderTop: "4px solid rgb(200, 168, 127)" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", marginBottom: "4px" }}>{item.phase}</p>
                  <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "19px", color: "rgb(31, 31, 31)", marginBottom: "4px" }}>{item.title}</h4>
                  <p style={{ fontSize: "13px", color: "rgb(119, 119, 119)", marginBottom: "16px", fontStyle: "italic" }}>{item.time}</p>
                  <p style={{ fontSize: "15px", color: "rgb(85, 85, 85)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "48px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7, color: "rgb(85, 85, 85)", marginBottom: "32px", textAlign: "left" }}>
                Individual variation is substantial based on metabolic history, constitutional factors, treatment adherence, life circumstances, and personal response. Some patients experience substantial early metabolic shifts; others benefit more from sustained programme continuation.
              </p>

              <div style={{ background: "rgb(240, 235, 227)", borderRadius: "8px", padding: "40px", textAlign: "left" }}>
                <h3 style={{ fontFamily: "Fraunces, serif", fontWeight: 600, fontSize: "22px", color: "rgb(31, 31, 31)", marginBottom: "32px" }}>
                  Honest outcomes framing
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(150, 150, 150)", marginBottom: "20px" }}>
                      WHAT AYURVEDIC APPROACH CAN ACHIEVE
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        "Sustained gradual weight changes reflecting genuine metabolic improvement",
                        "Improved digestive function and energy",
                        "Reduced weight-related joint burden",
                        "Improved metabolic markers",
                        "Better relationship with food",
                        "Sustainable lifestyle patterns",
                        "Effective coordination with modern medical care"
                      ].map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(200, 168, 127)", marginTop: "2px", flexShrink: 0 }}>
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span style={{ fontSize: "14px", color: "rgb(85, 85, 85)", lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(150, 150, 150)", marginBottom: "20px" }}>
                      WHAT AYURVEDIC APPROACH CANNOT ACHIEVE
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        "Rapid weight loss (sustainable change is gradual by definition)",
                        "Guaranteed weight loss amounts (individual variation substantial)",
                        "Substitute for medical treatment of underlying conditions",
                        "Weight loss without patient lifestyle engagement",
                        "Treatment for active eating disorder patterns (these require specialist mental health care)"
                      ].map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "rgb(150, 150, 150)", marginTop: "2px", flexShrink: 0 }}>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                          <span style={{ fontSize: "14px", color: "rgb(85, 85, 85)", lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TreatmentReviews {...weightLossJvcReviews} useKneeStyle={true} />

        <AyurvedicTeam {...weightLossTeam} />

        {/* Pricing Section */}
        <section id="pricing" style={{ background: "rgb(245, 240, 232)", padding: "96px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <p style={{ color: "rgb(200, 168, 127)", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                Transparent Pricing
              </p>
              <h2 style={{ fontFamily: "Fraunces, serif", fontWeight: 500, fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1.2, color: "rgb(31, 31, 31)", letterSpacing: "-0.02em", maxWidth: "640px", margin: "0 auto" }}>
                Weight management Ayurvedic care consultation and treatment pricing at our JVC clinic.
              </h2>
            </div>

            <div style={{ background: "rgb(255, 255, 255)", borderRadius: "8px", overflow: "hidden", boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 24px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgb(240, 235, 227)" }}>
                    {["Service", "Duration", "Price"].map((h) => (
                      <th key={h} style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgb(200, 168, 127)", padding: "18px 24px", textAlign: "left" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Initial weight management consultation (90 min)", duration: "90 min", price: "AED [X]", alt: false },
                    { service: "Follow-up consultation", duration: "30–45 min", price: "AED [X]", alt: true },
                    { service: "Extended follow-up (complex cases)", duration: "60 min", price: "AED [X]", alt: false },
                    { service: "Individual Udvartana session", duration: "60 – 75 min", price: "From AED [X]", alt: true },
                    { service: "Udvartana package (7 sessions)", duration: "3-4 weeks", price: "From AED [X]", alt: true },
                    { service: "Udvartana package (14 sessions)", duration: "6-7 weeks", price: "From AED [X]", alt: false },
                    { service: "Individual Abhyanga session", duration: "75–90 min", price: "From AED [X]", alt: true },
                    { service: "7-day Panchakarma programme", duration: "7 days", price: "AED [X]", alt: false },
                    { service: "14-day Panchakarma programme", duration: "14 days", price: "AED [X]", alt: false },
                    { service: "21-day Panchakarma programme", duration: "21 days", price: "From AED [X]", alt: true },
                    { service: "3-month comprehensive weight management programme", duration: "3 months", price: "From AED [X]", alt: false },
                    { service: "6-month sustainable weight management programme", duration: "6 months", price: "From AED [X]", alt: true },
                    { service: "Post-pregnancy weight management programme", duration: "3-6 months", price: "From AED [X]", alt: false },
                    { service: "PCOS-integrated weight management programme", duration: "3-6 months", price: "From AED [X]", alt: true },
                    { service: "Corporate weight & wellness programme", duration: "Bespoke", price: "Consultation required", alt: false },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < 8 ? "1px solid rgb(240, 235, 227)" : "none", background: row.alt ? "rgba(250, 247, 242, 0.5)" : "rgb(255, 255, 255)" }}>
                      <td style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgb(31, 31, 31)", padding: "16px 24px", lineHeight: 1.5 }}>{row.service}</td>
                      <td style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgb(119, 119, 119)", padding: "16px 24px", whiteSpace: "nowrap" }}>{row.duration}</td>
                      <td style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 500, color: "rgb(200, 168, 127)", padding: "16px 24px", whiteSpace: "nowrap" }}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.75, color: "rgb(119, 119, 119)", maxWidth: "880px", margin: "24px auto 0", textAlign: "center" }}>
              Programme pricing typically includes: initial comprehensive consultation, all therapy sessions specified, follow-up consultations, herbal medicines throughout, ongoing consultation availability. Weight management Ayurvedic treatment typically self-pay as wellness/complementary care; some elements may be covered by insurance with medical justification. Direct-billing with Daman, AXA, Allianz, Oman Insurance, Now Health, Bupa, MetLife for covered elements. Serving patients from across Dubai — Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif, JVC, JVT, and every Dubai community.
            </p>
          </div>
        </section>

        <FAQ {...weightLossFaqs} />

        <TreatmentLocation {...weightLossJvcLocation} />

        <FinalCTA {...weightLossCTA}
          bgColor='#EDE5D9' />

        <RelatedPages {...weightLossJvcRelatedPages} />

        {/* Related Articles Component */}

      </main>
    </>
  );
};

export default WeightLossAyurvedaJvc;
