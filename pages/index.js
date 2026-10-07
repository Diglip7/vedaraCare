import Head from 'next/head';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Experts from '../components/home/Experts';
import WhyVedara from '../components/home/WhyVedara';
import Reviews from '../components/home/Reviews';
import Conditions from '../components/home/Conditions';
import FAQ from '../components/home/FAQ';
import Location from '../components/home/Location';
import InsuranceBand from '../components/home/InsuranceBand';
import CTA from '../components/home/CTA';

import {
  homeFaqs,
  homeLocation,
  homeCTA,
  homeHero,
  homeServices,
  homeConditions,
  homeExperts,
  homeWhyVedara,
  homeReviews,
} from '../data/homeData';
import { SITE } from '../lib/site';

export async function getStaticProps() {
  let google = { rating: SITE.googleRating.value, count: SITE.googleRating.count, reviews: [] };
  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${SITE.placeId}`, {
      headers: {
        'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      },
    });
    if (res.ok) {
      const d = await res.json();
      google = {
        rating: d.rating ?? google.rating,
        count: d.userRatingCount ?? google.count,
        reviews: (d.reviews || [])
          .sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime))
          .slice(0, 3)
          .map((r) => ({
            author: (r.authorAttribution?.displayName || '').split(' ')[0],
            date: r.publishTime,
            rating: r.rating,
            text: r.originalText?.text || r.text?.text || '', // unedited
          })),
      };
    }
  } catch (e) { /* keep fallback; review cards hidden */ }
  return { props: { google }, revalidate: 86400 };
}

export default function Home({ google }) {
  return (
    <>
      <Head>
        <title>Vedara Care Polyclinic JVC | GP, Physiotherapy, Ayurveda & Skin Clinic Dubai</title>
        <meta name="description" content="DHA-licensed polyclinic in Jumeirah Village Circle (JVC), Dubai. GP consultations, physiotherapy, Ayurveda, dermatology and aesthetic care in Binghatti Azure. Open daily 9am–10pm. Book or WhatsApp." />
        <link rel="canonical" href="https://vedaracare.ae/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vedara Care Polyclinic" />
        <meta property="og:title" content="Vedara Care Polyclinic — Your clinic in JVC, Dubai" />
        <meta property="og:description" content="GP, physiotherapy, Ayurveda, dermatology and aesthetic care in Binghatti Azure, JVC. Open daily 9am–10pm." />
        <meta property="og:url" content="https://vedaracare.ae/" />
        <meta property="og:image" content="https://vedaracare.ae/og-images/homepage.jpg" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                { "@type": "WebSite", "@id": "https://vedaracare.ae/#website", "url": "https://vedaracare.ae/", "name": "Vedara Care Polyclinic", "publisher": { "@id": "https://vedaracare.ae/#organization" }, "inLanguage": "en-AE" },
                {
                  "@type": ["MedicalClinic", "LocalBusiness"],
                  "@id": "https://vedaracare.ae/#organization",
                  "name": "Vedara Care Polyclinic",
                  "legalName": "Vedara Care Polyclinic FZE",
                  "url": "https://vedaracare.ae/",
                  "telephone": "+971555736312",
                  "email": "booking@vedaracare.ae",
                  "logo": "https://vedaracare.ae/images/logo.png",
                  "image": "https://vedaracare.ae/og-images/homepage.jpg",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Binghatti Azure, Shop 4, Al Barsha South Fourth, Jumeirah Village Circle (JVC)",
                    "addressLocality": "Dubai",
                    "addressRegion": "Dubai",
                    "addressCountry": "AE"
                  },
                  "geo": { "@type": "GeoCoordinates", "latitude": 25.0683417, "longitude": 55.2120945 },
                  "hasMap": "https://maps.google.com/maps?cid=16711954996415388530",
                  "sameAs": ["https://maps.google.com/maps?cid=16711954996415388530"],
                  "openingHoursSpecification": [{
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    "opens": "09:00",
                    "closes": "22:00"
                  }],
                  "areaServed": ["Jumeirah Village Circle", "Jumeirah Village Triangle", "Al Barsha South", "Arjan", "Dubai Sports City", "Motor City"],
                  "medicalSpecialty": ["PrimaryCare", "Physiotherapy", "Dermatology", "Ayurveda"],
                  "isAcceptingNewPatients": true,
                  "availableService": [
                    { "@type": "MedicalProcedure", "name": "GP consultation", "url": "https://vedaracare.ae/doctors/dr-sanjida-islam-suchana/" },
                    { "@type": "MedicalTherapy", "name": "Physiotherapy", "url": "https://vedaracare.ae/physiotherapy-jvc/" },
                    { "@type": "MedicalTherapy", "name": "Ayurveda", "url": "https://vedaracare.ae/ayurveda-clinic-jvc/" },
                    { "@type": "MedicalProcedure", "name": "Dermatology consultation", "url": "https://vedaracare.ae/dermatology-clinic-jvc/" },
                    { "@type": "MedicalProcedure", "name": "Aesthetic treatments", "url": "https://vedaracare.ae/skin-clinic-jvc/" },
                    { "@type": "MedicalTherapy", "name": "Beauty and wellness treatments", "url": "https://vedaracare.ae/wellness-clinic-jvc/" }
                  ],
                  "employee": [
                    { "@id": "https://vedaracare.ae/doctors/dr-sanjida-islam-suchana#person" },
                    { "@id": "https://vedaracare.ae/doctors/hafsina-kk-physiotherapist#person" },
                    { "@id": "https://vedaracare.ae/doctors/dr-zainab-ayurveda#person" }
                  ],
                  "paymentAccepted": "Cash, Credit Card, Debit Card",
                  "currenciesAccepted": "AED",
                  "isAcceptingNewPatients": true,
                  "sameAs": [
                    "https://maps.google.com/maps?cid=16711954996415388530",
                    "https://www.instagram.com/vedaracare/",
                    "https://www.facebook.com/VedaraCare",
                    "https://www.youtube.com/@VedaraCare",
                    "https://www.tiktok.com/@vedaracare"
                  ]
                },
                { "@type": "WebPage", "@id": "https://vedaracare.ae/#webpage", "url": "https://vedaracare.ae/", "name": "Vedara Care Polyclinic JVC | GP, Physiotherapy, Ayurveda & Skin Clinic Dubai", "isPartOf": { "@id": "https://vedaracare.ae/#website" }, "about": { "@id": "https://vedaracare.ae/#organization" }, "inLanguage": "en-AE" },
                {
                  "@type": "FAQPage",
                  "@id": "https://vedaracare.ae/#faq",
                  "mainEntity": [
                    { "@type": "Question", "name": "Where is Vedara Care Polyclinic located?", "acceptedAnswer": { "@type": "Answer", "text": "We are at Shop 4, Binghatti Azure, Al Barsha South Fourth, Jumeirah Village Circle (JVC), Dubai — a short drive from Circle Mall. We are open every day from 9am to 10pm." } },
                    { "@type": "Question", "name": "What services does Vedara Care offer?", "acceptedAnswer": { "@type": "Answer", "text": "We offer GP consultations, physiotherapy, Ayurveda, dermatology, doctor-led aesthetic treatments and beauty and wellness treatments, all in one clinic in JVC." } },
                    { "@type": "Question", "name": "Is Vedara Care licensed by the Dubai Health Authority?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Vedara Care Polyclinic is a DHA-licensed facility (licence 2509266). Each clinician's DHA licence number is listed on their profile page." } },
                    { "@type": "Question", "name": "Do you accept health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "We support reimbursement claims with all major UAE insurers. We do not bill insurers directly; we provide the supporting documents you need to claim. Send your insurance card on WhatsApp if you have questions." } },
                    { "@type": "Question", "name": "Do I need a referral for physiotherapy?", "acceptedAnswer": { "@type": "Answer", "text": "No, you can book physiotherapy directly. If you want insurance to cover it, many UAE plans ask for a doctor's referral — our GPs can assess you first." } },
                    { "@type": "Question", "name": "How do I book an appointment?", "acceptedAnswer": { "@type": "Answer", "text": "Message us on WhatsApp or call +971 55 573 6312, or book online. We will offer the earliest available time with the right clinician." } }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <Hero {...homeHero} />
      <Services {...homeServices} />
      <Conditions {...homeConditions} />
      <Experts {...homeExperts} />
      <WhyVedara {...homeWhyVedara} />
      <Location {...homeLocation} />
      <InsuranceBand />
      <Reviews {...homeReviews} google={google} />
      <FAQ {...homeFaqs} />
      <CTA {...homeCTA} />
    </>
  );
}
