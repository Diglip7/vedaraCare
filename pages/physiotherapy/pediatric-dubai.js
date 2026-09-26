import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import PediatricAgeGroups from '../../components/ayurveda/PediatricAgeGroups';
import SportsInjuryTypes from '../../components/ayurveda/SportsInjuryTypes';
import PhysiotherapyMechanism from '../../components/ayurveda/PhysiotherapyMechanism';
import PediatricWhatToExpect from '../../components/ayurveda/PediatricWhatToExpect';
import PhysiotherapyInsurance from '../../components/ayurveda/PhysiotherapyInsurance';
import PricingSectionNew from '../../components/ayurveda/PricingSectionNew';
import PediatricPhysiotherapyPricing from '../../components/ayurveda/PediatricPhysiotherapyPricing';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
  pediatricPhysiotherapyHero,
  pediatricPhysiotherapyIntro,
  pediatricPhysiotherapyAgeGroups,
  pediatricPhysiotherapySportsInjuryTypes,
  pediatricPhysiotherapyMechanism,
  pediatricPhysiotherapyInsurance,
  pediatricPhysiotherapyMechanism2,
  pediatricPhysiotherapyWhatToExpect,
  pediatricPhysiotherapyReviews,
  pediatricPhysiotherapyTeam,
  pediatricPhysiotherapyFaqs,
  pediatricPhysiotherapyLocation,
  pediatricPhysiotherapyFinalCTA,
  pediatricPhysiotherapyRelatedPages,
  pediatricPhysiotherapyPricing
} from '../../data/pediatricPhysiotherapyData';

const PediatricDubai = () => {
  const currentDate = new Date().toISOString();
  
  const schemaMarkup = [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness", "PhysicalTherapy"],
      "@id": "https://vedaracare.ae/physiotherapy/pediatric-dubai/#paediatric",
      "name": "Vedara Care Paediatric Physiotherapy",
      "alternateName": ["Vedara Pediatric Physio Dubai", "Vedara Children's Physiotherapy JVC"],
      "url": "https://vedaracare.ae/physiotherapy/pediatric-dubai/",
      "parentOrganization": {"@id": "https://vedaracare.ae/#organization"},
      "description": "DHA-licensed paediatric physiotherapy at Vedara Care Polyclinic, Jumeirah Village Circle, Dubai. Specialised treatment for school-age, and adolescent children. Developmental concerns, sports injuries, and more. Coordination with paediatricians and schools.",
      "telephone": "+971 55 573 6312",
      "priceRange": "AED 350 - AED 3,400",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC)",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.068346",
        "longitude": "55.207223"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "22:00"
        }
      ],
      "areaServed": [
        {"@type": "City", "name": "Dubai"},
        {"@type": "Place", "name": "Jumeirah Village Circle"},
        {"@type": "Place", "name": "Jumeirah Village Triangle"},
        {"@type": "Place", "name": "Al Barsha South"},
        {"@type": "Place", "name": "Dubai Sports City"},
        {"@type": "Place", "name": "Motor City"},
        {"@type": "Place", "name": "Arjan"},
        {"@type": "Place", "name": "Dubai Hills Estate"},
        {"@type": "Place", "name": "Dubai Marina"},
        {"@type": "Place", "name": "Downtown Dubai"},
        {"@type": "Place", "name": "Palm Jumeirah"},
        {"@type": "Place", "name": "Mirdif"}
      ],
      "medicalSpecialty": [
        "Paediatric Physiotherapy",
        "Pediatric Physical Therapy",
        "Developmental Physiotherapy",
        "Adolescent Sports Medicine",
        "School-Age Physiotherapy",
        "Adolescent Physiotherapy"
      ],
      "isAcceptingNewPatients": true,
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 5,
        "suggestedMaxAge": 18
      },
      "availableService": [
        {"@type": "MedicalProcedure", "name": "School-Age Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Adolescent Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"},
        {"@type": "MedicalProcedure", "name": "Adolescent Sports Physiotherapy"}
      ],
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Dubai Health Authority"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "15",
        "bestRating": "5",
        "worstRating": "1"
      },
      "employee": {
        "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician"
      }
    },
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalCondition",
          "name": "Osgood-Schlatter Disease",
          "code": {"@type": "MedicalCode", "code": "M92.5", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Sever's Disease",
          "code": {"@type": "MedicalCode", "code": "M92.6", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Developmental Coordination Disorder",
          "code": {"@type": "MedicalCode", "code": "F82", "codingSystem": "ICD-10"}
        },
        {
          "@type": "MedicalCondition",
          "name": "Toe Walking",
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Gross Motor Delay",
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"},
            {"@type": "MedicalProcedure", "name": "Developmental Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Hypermobility",
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalCondition",
          "name": "Joint Hypermobility Syndrome",
          "code": {"@type": "MedicalCode", "code": "M35.7", "codingSystem": "ICD-10"},
          "possibleTreatment": [
            {"@type": "MedicalProcedure", "name": "Paediatric Physiotherapy"}
          ]
        },
        {
          "@type": "MedicalBusiness",
          "name": "Vedara Care Polyclinic",
          "@id": "https://vedaracare.ae/#organization"
        },
        {
          "@type": "GovernmentOrganization",
          "name": "Dubai Health Authority"
        },
        {
          "@type": "Organization",
          "name": "Daman"
        },
        {
          "@type": "Organization",
          "name": "AXA"
        },
        {
          "@type": "Organization",
          "name": "Allianz"
        },
        {
          "@type": "Organization",
          "name": "Oman Insurance"
        },
        {
          "@type": "Organization",
          "name": "Now Health"
        },
        {
          "@type": "Organization",
          "name": "Bupa"
        },
        {
          "@type": "Organization",
          "name": "MetLife"
        },
        {
          "@type": "Place",
          "name": "Jumeirah Village Circle"
        },
        {
          "@type": "Place",
          "name": "Circle Mall"
        },
        {
          "@type": "Place",
          "name": "FIVE Jumeirah Village"
        },
        {
          "@type": "Organization",
          "name": "JSS Private School"
        },
        {
          "@type": "Organization",
          "name": "Dubai International Academy"
        },
        {
          "@type": "Organization",
          "name": "Repton"
        },
        {
          "@type": "Organization",
          "name": "GEMS schools"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Paediatrician"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Paediatric Orthopaedic Surgeon"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Paediatric Neurologist"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Occupational Therapist"
        },
        {
          "@type": "MedicalSpecialty",
          "name": "Speech Therapist"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Paediatric Physiotherapy Services in Dubai",
      "provider": {"@id": "https://vedaracare.ae/physiotherapy/pediatric-dubai/#paediatric"},
      "areaServed": [
        {"@type": "City", "name": "Dubai"}
      ],
      "audience": {
        "@type": "PeopleAudience",
        "suggestedMinAge": 5,
        "suggestedMaxAge": 18
      },
      "serviceType": "Paediatric Physiotherapy and Children's Physical Therapy",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Paediatric Physiotherapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Initial Paediatric Assessment",
            "priceCurrency": "AED",
            "price": "450",
            "description": "60-75 minute comprehensive paediatric assessment with paediatric-trained physiotherapist"
          },
          {
            "@type": "Offer",
            "name": "Follow-up Paediatric Session",
            "priceCurrency": "AED",
            "price": "350",
            "description": "Age-appropriate follow-up treatment session"
          },
          {
            "@type": "Offer",
            "name": "Scoliosis Programme",
            "priceCurrency": "AED",
            "price": "420",
            "description": "Structured scoliosis assessment and treatment programme"
          },
          {
            "@type": "Offer",
            "name": "Adolescent Sports Injury Package",
            "priceCurrency": "AED",
            "price": "3400",
            "description": "10-session sports injury rehabilitation package for adolescent athletes"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/"},
        {"@type": "ListItem", "position": 2, "name": "Physiotherapy in JVC", "item": "https://vedaracare.ae/physiotherapy-jvc/"},
        {"@type": "ListItem", "position": 3, "name": "Paediatric Physiotherapy", "item": "https://vedaracare.ae/physiotherapy/pediatric-dubai/"}
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pediatricPhysiotherapyFaqs.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Paediatric Physiotherapy in Dubai — Complete Service Guide",
      "image": "https://vedaracare.ae/images/pediatric-physiotherapy-dubai-hero.jpg",
      "datePublished": currentDate,
      "dateModified": currentDate,
      "author": {
        "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist/#physician"
      },
      "publisher": {
        "@type": "MedicalClinic",
        "name": "Vedara Care Polyclinic",
        "@id": "https://vedaracare.ae/#organization"
      },
      "mainEntityOfPage": "https://vedaracare.ae/physiotherapy/pediatric-dubai/"
    }
  ];
  
  return (
    <>
      <Head>
        <title>Pediatric Physiotherapy in JVC, Dubai | Vedara Care</title>
        <meta name="description" content="Pediatric physiotherapy for children and teens at our JVC clinic, near Circle Mall. Developmental and postural concerns, sports injuries. DHA-licensed physiotherapist, family-involved care. Book a same-week assessment." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Paediatric Physiotherapy in Dubai — Specialist Children's Care | Vedara JVC" />
        <meta property="og:description" content="DHA-licensed paediatric physiotherapy at our Jumeirah Village Circle clinic. Specialised care for school-age, and adolescent children. Developmental concerns, sports injuries, and more. Coordination with paediatricians and schools." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/pediatric-physiotherapy-dubai.jpg" />
        <meta property="og:url" content="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AE" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical & Language Tags */}
        <link rel="canonical" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/physiotherapy/pediatric-dubai/" />
        
        {/* Schema Markup */}
        {schemaMarkup.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
          />
        ))}
      </Head>

      <div className="pediatric-physiotherapy-content">
        <AyurvedaHero {...pediatricPhysiotherapyHero} />
        <AyurvedaIntro {...pediatricPhysiotherapyIntro} />
        <PediatricAgeGroups {...pediatricPhysiotherapyAgeGroups} />
             
        <SportsInjuryTypes {...pediatricPhysiotherapySportsInjuryTypes} />
        <PhysiotherapyMechanism{...pediatricPhysiotherapyMechanism2}
        bgColor="bg-[#F8F6F1]" />
        {/* <PhysiotherapyMechanism /> */}
        <PediatricWhatToExpect {...pediatricPhysiotherapyWhatToExpect} />
      <PhysiotherapyInsurance {...pediatricPhysiotherapyInsurance} />
        <PhysiotherapyMechanism {...pediatricPhysiotherapyMechanism} />
   
        {/* <PricingSectionNew {...pediatricPhysiotherapyJvcPricing} /> */}
        <PediatricPhysiotherapyPricing data={pediatricPhysiotherapyPricing} />
        <TreatmentReviews {...pediatricPhysiotherapyReviews} />
        <PhysiotherapyTeam {...pediatricPhysiotherapyTeam} />
        <FAQ {...pediatricPhysiotherapyFaqs} 
        bgColor="bg-[#F5F1E8]"/>
        <TreatmentLocation {...pediatricPhysiotherapyLocation}
        bgColor="bg-[#FFFFFF]"
        buttonColor="bg-[#1A4D2E]" 
        />
        <FinalCTA {...pediatricPhysiotherapyFinalCTA} />
        <RelatedPages {...pediatricPhysiotherapyRelatedPages} />
      </div>
    </>
  );
};

export default PediatricDubai;
