import React from 'react';
import Head from 'next/head';

const LicensedHomeTherapy = () => {
  return (
    <>
      <Head>
        <title>Licensed Home Therapy in Dubai</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="py-32 text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-serif mb-6 text-[#1A1A1A]">Licensed Home Therapy</h1>
        <p className="mt-4 text-lg text-gray-600 mb-10">Home healthcare is coming soon. Join the waitlist on WhatsApp.</p>
        <a 
          href="https://wa.me/971555736312?text=Hi,%20I'd%20like%20to%20join%20the%20waitlist%20for%20Home%20Therapy." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 text-sm font-semibold hover:bg-[#20b858] transition-colors rounded"
        >
          Join Waitlist on WhatsApp
        </a>
      </div>
    </>
  );
};

export default LicensedHomeTherapy;
