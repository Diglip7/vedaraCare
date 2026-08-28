import React from 'react';
import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PostnatalJvcClinicLocation from '../../components/ayurveda/PostnatalJvcClinicLocation';
// import PostnatalLocation from '../../components/ayurveda/PostnatalLocation';
import { SciaticaTreatment } from '../../components/ayurveda/SciaticaSections';
import FAQ from '../../components/home/FAQ';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';

import PostnatalComponentsGridImage from '../../components/ayurveda/PostnatalComponentsGridImage';
import PostnatalProgrammeOptionsImage from '../../components/ayurveda/PostnatalProgrammeOptionsImage';
import PostnatalRecoveryJourneyImage from '../../components/ayurveda/PostnatalRecoveryJourneyImage';
import PostnatalCareTeamImage from '../../components/ayurveda/PostnatalCareTeamImage';
import PostnatalPricingTableImage from '../../components/ayurveda/PostnatalPricingTableImage';
import PostnatalReviewsImage from '../../components/ayurveda/PostnatalReviewsImage';

import {
  postnataljvcHero,
  postnataljvcIntro,
  postnataljvcMechanism1,
  postnataljvcReviews,
  postnataljvcFaqs,
  postnataljvcLocation,
  postnataljvcFinalCTA,
  postnataljvcRelatedPages,
  postnataljvcComponentsNew,
  postnataljvcProgrammeOptions,
  postnataljvcRecoveryJourney,
  postnataljvcCareTeam,
  postnataljvcPricingTable,
  postnataljvcReviewsNew
} from '../../data/Postnatal';

const PostnatalAyurvedaJvc = () => {
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
      "@id": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/#postnatal",
      "name": "Vedara Care Postnatal Ayurvedic Care Dubai",
      "alternateName": ["Vedara Sutika Paricharya JVC", "Traditional Postnatal Ayurveda Dubai", "Vedara Postnatal Care Home Visits Dubai"],
      "url": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "Traditional postnatal Ayurvedic care (Sutika Paricharya) at Vedara Care Polyclinic, Jumeirah Village Circle (JVC), Dubai. Female DHA-licensed Ayurvedic doctor delivering authentic 42-day postnatal programmes with home visits across Dubai.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 3,000 - AED 45,000",
      "address": {"@type": "PostalAddress", "streetAddress": "Shop -4, Binghatti Azure", "addressLocality": "Jumeirah Village Circle", "addressRegion": "Dubai", "addressCountry": "AE"},
      "geo": {"@type": "GeoCoordinates", "latitude": "25.068346", "longitude": "55.207223"},
      "openingHoursSpecification": [
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "21:00"},
        {"@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "09:00", "closes": "18:00"}
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Business Bay"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Al Barsha"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Jumeirah Lake Towers"},
        {"@type": "Place", "name": "Emirates Hills"},
        {"@type": "Place", "name": "Arabian Ranches"},
        {"@type": "Place", "name": "Mirdif"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"}
      ],
      "medicalSpecialty": ["Ayurveda", "Postnatal Care", "Women's Health", "Traditional Medicine"],
      "isAcceptingNewPatients": true,
      "availableService": [
        {"@type": "MedicalProcedure", "name": "Traditional Sutika Paricharya"},
        {"@type": "MedicalProcedure", "name": "Postnatal Ayurvedic Abhyanga"},
        {"@type": "MedicalProcedure", "name": "Postnatal Herbal Baths"},
        {"@type": "MedicalProcedure", "name": "Postnatal Steam Therapy"},
        {"@type": "MedicalProcedure", "name": "Belly Binder Wrapping (Udara Bandhana)"},
        {"@type": "MedicalProcedure", "name": "Postnatal Lactation Support"},
        {"@type": "MedicalProcedure", "name": "Postnatal Herbal Medicines"},
        {"@type": "MedicalProcedure", "name": "Postnatal Sitz Baths"},
        {"@type": "MedicalProcedure", "name": "42-Day Traditional Postnatal Programme"},
        {"@type": "MedicalProcedure", "name": "C-Section Recovery Ayurvedic Programme"},
        {"@type": "MedicalProcedure", "name": "Twin Pregnancy Postnatal Ayurvedic Programme"}
      ],
      "memberOf": {"@type": "Organization", "name": "Dubai Health Authority"},
      "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "400", "bestRating": "5", "worstRating": "1"}
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": "Postpartum Recovery",
      "alternateName": ["Postnatal Recovery", "Puerperium"],
      "code": {"@type": "MedicalCode", "code": "Z39.2", "codingSystem": "ICD-10"},
      "possibleTreatment": [{"@type": "MedicalTherapy", "name": "Sutika Paricharya"}, {"@type": "MedicalTherapy", "name": "Postnatal Ayurvedic Care"}]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Sutika Paricharya",
      "alternateName": ["Postnatal Ayurvedic Care Protocol", "Traditional Postnatal Care"],
      "procedureType": "Traditional Postnatal Recovery Protocol",
      "howPerformed": "Comprehensive 40-42 day postnatal care including Abhyanga, herbal baths, steam therapy, belly binder wrapping, dietary support, herbal medicines, lactation support"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Postnatal Abhyanga",
      "procedureType": "Postnatal Oil Massage Therapy"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Udara Bandhana",
      "procedureType": "Traditional Belly Binder Wrapping"
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": "Bashpa Sweda",
      "procedureType": "Postnatal Steam Therapy"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Postnatal Ayurvedic Care Services at JVC Dubai",
      "provider": {"@id": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/#postnatal"},
      "areaServed": [{"@type": "City", "name": "Dubai"}, {"@type": "Place", "name": "Jumeirah Village Circle"}, {"@type": "Place", "name": "United Arab Emirates"}],
      "serviceType": "Traditional Postnatal Ayurvedic Care",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Postnatal Care Programmes",
        "itemListElement": [
          {"@type": "Offer", "name": "Initial Postnatal Consultation with Dr. Neethu", "priceCurrency": "AED", "price": "450"},
          {"@type": "Offer", "name": "Standard 42-Day Traditional Sutika Paricharya Programme", "priceCurrency": "AED", "price": "12500"},
          {"@type": "Offer", "name": "30-Day Accelerated Postnatal Programme", "priceCurrency": "AED", "price": "9000"},
          {"@type": "Offer", "name": "21-Day Acute Recovery Focus Programme", "priceCurrency": "AED", "price": "6500"},
          {"@type": "Offer", "name": "C-Section Recovery Extended Programme", "priceCurrency": "AED", "price": "18500"},
          {"@type": "Offer", "name": "Older Mother Comprehensive Programme", "priceCurrency": "AED", "price": "15500"},
          {"@type": "Offer", "name": "Twin/Multiple Pregnancy Recovery Programme", "priceCurrency": "AED", "price": "18500"},
          {"@type": "Offer", "name": "Individual Postnatal Abhyanga Session (Home Visit)", "priceCurrency": "AED", "price": "450"}
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://vedaracare.ae/conditions/"},
        {"@type": "ListItem", "position": 3, "name": "Postnatal Ayurvedic Care in Dubai (JVC Clinic)", "item": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "What is Sutika Paricharya?", "acceptedAnswer": {"@type": "Answer", "text": "Sutika Paricharya is traditional Ayurvedic postnatal care system developed over thousands of years for maternal recovery after childbirth. Comprehensive 40-42 day protocol including Ayurvedic Abhyanga oil massage, herbal medicated baths, steam therapy, belly binder wrapping, nourishing dietary support, herbal medicines, lactation support, and structured rest."}},
        {"@type": "Question", "name": "When should postnatal Ayurvedic care start?", "acceptedAnswer": {"@type": "Answer", "text": "Ideally programme initiation within first week postpartum. Consultation and programme planning ideally during pregnancy (30+ weeks). Post-hospital-discharge start possible but earlier initiation delivers better outcomes."}},
        {"@type": "Question", "name": "Do you provide home visits across Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — home delivery across Dubai is core service since new mothers cannot easily travel. Home visits to Marina, Downtown, Business Bay, Palm Jumeirah, Al Barsha, Dubai Hills, JLT, Mirdif, and every Dubai community."}},
        {"@type": "Question", "name": "Is my postnatal care provider female?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — female practitioners throughout. Dr. Neethu (female DHA-licensed Ayurvedic doctor) provides consultations. Female therapists deliver home visits. Same-gender care essential for postnatal comfort."}},
        {"@type": "Question", "name": "How long is traditional Sutika Paricharya?", "acceptedAnswer": {"@type": "Answer", "text": "Traditional Sutika Paricharya is 40-42 days. We offer standard 42-day programme (recommended), condensed 30-day and focused 21-day programmes for different situations and constraints."}},
        {"@type": "Question", "name": "Can you accommodate C-section recovery?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — dedicated C-section recovery extended programme accommodating C-section timeline. Extended incision care support, modified early recovery approach, coordination with modern surgical follow-up. Female practitioner particularly important."}},
        {"@type": "Question", "name": "Can you accommodate twin/multiple pregnancy recovery?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — modified programme for twin/multiple pregnancy recovery. Extended duration, adjusted intensity, additional support. Home healthcare team coordination recommended."}},
        {"@type": "Question", "name": "What is Ayurvedic Abhyanga postnatal massage?", "acceptedAnswer": {"@type": "Answer", "text": "Systematic full-body oil massage with traditional postnatal medicated oils. Different from cosmetic massage — specific techniques and oils supporting tissue toning, hormonal balance, muscle recovery. Daily practice throughout Sutika Paricharya."}},
        {"@type": "Question", "name": "What is belly binder wrapping?", "acceptedAnswer": {"@type": "Answer", "text": "Traditional abdominal binding practice supporting abdominal recovery, diastasis recti support, uterine involution, posture support. Traditional multi-layer wrapping with specific techniques. Daily practice throughout programme."}},
        {"@type": "Question", "name": "Does postnatal Ayurveda support lactation?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — traditional Ayurvedic lactation support is core component. Herbal galactagogues supporting milk production, dietary guidance, breast care protocols, troubleshooting breastfeeding challenges."}},
        {"@type": "Question", "name": "What if I have postpartum depression?", "acceptedAnswer": {"@type": "Answer", "text": "Programme includes gentle emotional wellness support and mood monitoring. Severe postpartum depression requires specialist mental health care coordinated with our approach. We help identify concerning symptoms warranting specialist referral."}},
        {"@type": "Question", "name": "Which languages do you speak?", "acceptedAnswer": {"@type": "Answer", "text": "Arabic, English, Hindi, Malayalam (particularly relevant for Kerala Sutika Paricharya tradition), Urdu."}},
        {"@type": "Question", "name": "Where is your clinic in Dubai?", "acceptedAnswer": {"@type": "Answer", "text": "DHA-licensed clinic at Jumeirah Village Circle (JVC), Dubai — walking distance from Circle Mall. Consultations at clinic; postnatal care delivery predominantly through home visits across Dubai."}},
        {"@type": "Question", "name": "What are the programme costs?", "acceptedAnswer": {"@type": "Answer", "text": "Standard 42-day programme from AED 12,500; condensed 30-day from AED 9,000; focused 21-day from AED 6,500; specialised programmes from AED 18,500. Pricing reflects daily home visits, all components, herbal medicines, ongoing consultation."}},
        {"@type": "Question", "name": "Is postnatal Ayurveda covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "Typically self-pay. Some maternity insurance policies may cover elements with medical justification. Direct billing with seven major insurers for covered elements."}},
        {"@type": "Question", "name": "Can I combine with modern postpartum medical care?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — coordination essential. Postpartum check-ups continue. Any concerns receive modern medical attention. Medications coordinated with Ayurvedic care. Complementary integration."}},
        {"@type": "Question", "name": "What if I'm not Indian/South Asian?", "acceptedAnswer": {"@type": "Answer", "text": "Programme welcomes mothers from all cultural backgrounds. Substantial demand from Arab, Filipino, Western, and other expat families discovering traditional postnatal care benefits. Cultural sensitivity throughout."}},
        {"@type": "Question", "name": "Can I do programme with second/third baby?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — subsequent pregnancy postnatal care often more important given accumulated recovery burden. Many mothers request programme for subsequent babies. Adjustments accommodate second-time mother experience."}},
        {"@type": "Question", "name": "Do you coordinate with my obstetrician?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — coordination with existing medical providers when helpful. We support your ongoing modern medical care rather than replacing it. Sharing programme details with your OBGYN as needed."}},
        {"@type": "Question", "name": "How do I book postnatal care consultation?", "acceptedAnswer": {"@type": "Answer", "text": "Three ways: WhatsApp for fastest response; call 9AM-9PM seven days a week; book online. Ideally book during pregnancy (30+ weeks). Please bring: expected/actual delivery date, delivery type, medical history, current medications, breastfeeding intentions, family support situation, cultural preferences, questions and goals."}}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalScholarlyArticle",
      "headline": "Postnatal Ayurvedic Care in Dubai — Traditional Sutika Paricharya Complete Guide",
      "image": "https://vedaracare.ae/images/postnatal-ayurvedic-care-dubai-jvc-hero.jpg",
      "datePublished": "2026-06-03",
      "dateModified": "2026-06-03",
      "author": {"@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician"},
      "publisher": {"@type": "Organization", "name": "Vedara Care Polyclinic", "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"}},
      "about": [
        {"@type": "MedicalCondition", "name": "Postpartum Recovery"},
        {"@type": "MedicalProcedure", "name": "Sutika Paricharya"},
        {"@type": "MedicalSpecialty", "name": "Ayurveda"}
      ],
      "reviewedBy": {"@type": "Physician", "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician"},
      "lastReviewed": "2026-06-03",
      "mainEntityOfPage": "https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/"
    },
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/#physician",
      "name": "Dr. Neethu",
      "url": "https://vedaracare.ae/doctors/dr-neethu-ayurveda/",
      "medicalSpecialty": ["Ayurveda", "Postnatal Care", "Women's Health"],
      "hasCredential": [
        {"@type": "EducationalOccupationalCredential", "name": "BAMS"},
        {"@type": "EducationalOccupationalCredential", "name": "DHA-Licensed Ayurvedic Doctor"}
      ],
      "gender": "Female",
      "knowsAbout": ["Sutika Paricharya", "Postnatal Ayurvedic Care", "Postnatal Abhyanga", "Postnatal Lactation Support"],
      "knowsLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"],
      "worksFor": {"@id": "https://vedaracare.ae/#organization"}
    },
    {
      "@context": "https://schema.org",
      "@id": "https://vedaracare.ae/#organization",
      "@type": ["Organization", "MedicalOrganization"],
      "name": "Vedara Care Polyclinic",
      "url": "https://vedaracare.ae/",
      "logo": {"@type": "ImageObject", "url": "https://vedaracare.ae/logo.png"},
      "sameAs": ["https://www.facebook.com/vedaracare", "https://www.instagram.com/vedaracare", "https://www.linkedin.com/company/vedaracare", "https://www.google.com/maps/place/Vedara+Care"],
      "contactPoint": {"@type": "ContactPoint", "telephone": "+971 55 573 6312", "contactType": "Customer Service", "areaServed": "AE", "availableLanguage": ["English", "Arabic", "Hindi", "Malayalam", "Urdu"]}
    }
  ];

  return (
    <>
      <Head>
        <title>Postnatal Ayurvedic Care Dubai | Sutika Paricharya JVC | Vedara</title>
        <meta name="description" content="Traditional postnatal Ayurvedic care in Dubai at our JVC clinic with home delivery. Female DHA-licensed Ayurvedic doctor. Authentic 42-day Sutika Paricharya. Multi-language." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />

        <meta property="og:title" content="Postnatal Ayurvedic Care in Dubai — Traditional Sutika Paricharya at Our JVC Clinic | Vedara Care" />
        <meta property="og:description" content="Authentic postnatal Ayurvedic care at Vedara Care JVC clinic with home delivery across Dubai. Female DHA-licensed Ayurvedic doctor delivering traditional Sutika Paricharya. Serving Marina, Downtown, Business Bay, all Dubai." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/postnatal-ayurvedic-care-dubai-jvc.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Postnatal Ayurvedic Care Dubai — Sutika Paricharya JVC | Vedara" />
        <meta name="twitter:description" content="Female DHA-licensed Ayurvedic doctor. Traditional 42-day postnatal programme. Home delivery across Dubai." />
        <meta name="twitter:image" content="https://vedaracare.ae/og-images/postnatal-ayurvedic-care-dubai-jvc.jpg" />

        <link rel="canonical" href="https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/" />
        <link rel="alternate" hrefLang="en-AE" href="https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/" />
        <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/conditions/postnatal-care-ayurveda-JVC/" />
        <link rel="alternate" hrefLang="x-default" href="https://vedaracare.ae/conditions/postnatal-care-ayurveda-JVC/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>

      <main>
        {/* Section 1: Hero */}
        <AyurvedaHero {...postnataljvcHero} />

        {/* Section 2: Intro (Quick Answer) */}
        <AyurvedaIntro {...postnataljvcIntro} />

        {/* Section 3: The Classical Framework */}
        <SciaticaTreatment 
          data={postnataljvcMechanism1} 
          rightContentStyle="simpleBox"
          showBorderLeft={false}
        />

        {/* Section 4: Sutika Paricharya Components */}
        <PostnatalComponentsGridImage data={postnataljvcComponentsNew} />

        {/* Section 5: Programme Options */}
        <PostnatalProgrammeOptionsImage data={postnataljvcProgrammeOptions} />

        {/* Section 6: Your Recovery Journey */}
        <PostnatalRecoveryJourneyImage data={postnataljvcRecoveryJourney} />
        {/* Section 7: Real Postpartum Outcomes */}
        <PostnatalReviewsImage data={postnataljvcReviewsNew} />

        {/* Section 8: Care Team */}
        <PostnatalCareTeamImage data={postnataljvcCareTeam} />

        {/* Section 9: Pricing Table */}
        <PostnatalPricingTableImage data={postnataljvcPricingTable} />

        {/* Section 10: FAQ */}
        <FAQ {...postnataljvcFaqs} />

        {/* Section 11: Location */}
        <PostnatalJvcClinicLocation />

        {/* Section 12: Final CTA */}
        <FinalCTA {...postnataljvcFinalCTA} />

        {/* Section 13: Related Pages */}
        <RelatedPages {...postnataljvcRelatedPages}
          bgColor="bg-[#F5F1EB]"

        />
      </main>
    </>
  );
};

export default PostnatalAyurvedaJvc;
