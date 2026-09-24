import Head from 'next/head';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Experts from '../components/home/Experts';
import WhyVedara from '../components/home/WhyVedara';
import Reviews from '../components/home/Reviews';
import HomeHealthcare from '../components/home/HomeHealthcare';
import About from '../components/home/About';
import Conditions from '../components/home/Conditions';
import Journal from '../components/home/Journal';
import FAQ from '../components/home/FAQ';
import Location from '../components/home/Location';

import CTA from '../components/home/CTA';
import SEOContent from '../components/home/SEOContent';
import {
  homeFaqs,
  homeJournal,
  homeLocation,
  homeCTA,
  homeHero,
  homeServices,
  homeAbout,
  homeConditions,
  homeExperts,
  homeWhyVedara,
  homeReviews,
  homeHealthcare,

} from '../data/homeData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vedara Care | Holistic Healthcare in JVC, Dubai</title>
        <meta name="description" content="DHA-licensed healthcare clinic in JVC Dubai offering Ayurveda, physiotherapy, dermatology, home healthcare, and wellness treatments." />
        <link rel="canonical" href="https://vedaracare.ae" />
        <meta property="og:title" content="Vedara Care | Holistic Healthcare in JVC, Dubai" />
        <meta property="og:description" content="DHA-licensed healthcare clinic in JVC Dubai offering Ayurveda, physiotherapy, dermatology, home healthcare, and wellness treatments." />
        <meta property="og:image" content="https://vedaracare.ae/og-images/homepage.jpg" />
        <meta property="og:url" content="https://vedaracare.ae" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalClinic", "LocalBusiness"],
              "@id": "https://vedaracare.ae/#organization",
              "name": "Vedara Care Polyclinic",
              "url": "https://vedaracare.ae/",
              "telephone": "+971 55 573 6312",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4, Jumeirah Village Circle (JVC)",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "medicalSpecialty": ["Ayurveda", "Dermatology", "Physiotherapy"],
            })
          }}
        />
      </Head>
      <Hero {...homeHero} />
      <Services {...homeServices} />
      <About {...homeAbout} />
      <Conditions {...homeConditions} />
      <Experts {...homeExperts} />
      <WhyVedara {...homeWhyVedara} />
      <Reviews {...homeReviews} />
      <HomeHealthcare {...homeHealthcare} />
      <Location {...homeLocation} />
      <Journal {...homeJournal} />
      <FAQ {...homeFaqs} />
      <SEOContent />
      <CTA {...homeCTA} />
    </>
  );
}
