import React from 'react';
import Head from 'next/head';
import { arfahOwaisPageData } from '../../data/arfahOwaisData';
import AestheticianPageTemplate from '../../components/aesthetician/AestheticianPageTemplate';

// Legacy route — canonical is /team/arfah-owais-aesthetician-jvc/
// Kept for backward compatibility. noindex so Google uses the canonical.
export default function ArfahOwaisLegacyPage() {
  return (
    <>
      <Head>
        <title>Arfah Owais — DHA Licensed Aesthetician JVC | CIBTAC-UK | Vedara Care Dubai</title>
        <meta name="description" content="Meet Arfah Owais, DHA-licensed aesthetician at Vedara Care JVC Dubai. CIBTAC-UK diploma, NCLC & PMU certified, 8+ years experience. HydraFacial, HIFU, Carbon Laser Peel, pigmentation and acne scar treatments." />
        <link rel="canonical" href="https://vedaracare.ae/team/arfah-owais-aesthetician-jvc/" />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <AestheticianPageTemplate data={arfahOwaisPageData} />
    </>
  );
}
