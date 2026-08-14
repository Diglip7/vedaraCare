import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function HafsinaKKPage() {
  const doctor = {
    name: 'Hafsina K K',
    firstName: 'Hafsina',
    title: 'DHA Licensed Physiotherapist',
    designation: 'Physiotherapist',
    bio: 'DHA Licensed Physiotherapist with 7+ years in orthopedic, neurological, sports, and women\'s health rehab across India and the UAE.',
    image: '/images/default-avatar.png',
    heroBadge: 'DHA LICENSED PHYSIOTHERAPIST',
    heroStats: '7+ Years Experience',
    features: [
      'Bachelor of Physiotherapy',
      'DHA Licensed',
      'Speaks English, Malayalam, and Hindi',
    ],
    experience: '7+ years in orthopedic, neurological, sports, and women\'s health rehab across India and the UAE.',
    education: [
      'Bachelor of Physiotherapy (2010–2015)'
    ],
    certifications: [
      'Dry Needling',
      'Biomechanical Cupping',
      'IASTM',
      'Antenatal/Postnatal Fitness',
      'AHA BLS'
    ],
    languages: ['English', 'Malayalam', 'Hindi']
  };

  return (
    <>
      <Head>
        <title>{doctor.name} — {doctor.designation} in JVC | Vedara Care</title>
        <meta name="description" content={doctor.bio} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Head>



      <main className="pt-9">
        {/* Hero Section */}
        <section className="py-0" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
          <div className="bg-white border-b" style={{ borderColor: 'rgb(229, 223, 211)' }}>
            <div className="max-w-[1280px] mx-auto px-6 h-8 flex items-center gap-2">
              <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
              <span className="opacity-35">/</span>
              <Link href="/doctors" className="hover:opacity-70 transition-opacity">Doctors</Link>
              <span className="opacity-35">/</span>
              <span style={{ color: 'rgb(26, 26, 26)' }}>{doctor.name}</span>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 py-8 m-21">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
              <div className="w-full md:w-[45%] flex-shrink-0">
                <div className="relative rounded-[8px] overflow-hidden" style={{ aspectRatio: '4 / 5', backgroundColor: 'rgb(228, 216, 200)' }}>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 m-4 p-4 rounded-[8px]" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.13) 0px 4px 28px' }}>
                    <p className="text-[11px] font-bold tracking-[0.13em] uppercase mb-1" style={{ color: 'rgb(201, 169, 97)' }}>
                      {doctor.heroBadge}
                    </p>
                    <p className="text-[13px]" style={{ color: 'rgb(26, 26, 26)' }}>
                      {doctor.heroStats}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-[55%] flex flex-col gap-6">
                <div>
                  <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
                    {doctor.designation.toUpperCase()} AT VEDARA CARE POLYCLINIC, JVC
                  </p>
                  <h1 className="mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(42px, 5vw, 60px)', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.05' }}>
                    {doctor.name}
                  </h1>
                  <p className="mb-5" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '21px', fontStyle: 'italic', color: 'rgb(201, 169, 97)', fontWeight: '400' }}>
                    {doctor.title}
                  </p>
                  <p className="leading-[1.8]" style={{ fontSize: '17px', color: 'rgb(107, 107, 107)', maxWidth: '480px' }}>
                    {doctor.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                    style={{ background: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    Book a Consultation
                  </Link>
                  <a
                    href="https://wa.me/971555736312?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20your%20treatments%20and%20book%20a%20consultation."
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
                    style={{ background: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t" style={{ borderColor: 'rgb(229, 223, 211)' }}>
                  {doctor.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Summary */}
        <section className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
                  PROFILE SUMMARY
                </span>
                <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                  Experience
                </h2>
              </div>

              <div className="border-l-2 border-[#C9A961] pl-8">
                <p
                  className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed mb-6"
                >
                  {doctor.experience}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-24" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
                QUALIFICATIONS & LICENSES
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
                Credentials, in full.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}>
                <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '24px' }}>Education</h3>
                <ul className="space-y-4">
                  {doctor.education.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                      <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}>
                <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '24px' }}>Certifications</h3>
                <ul className="space-y-4">
                  {doctor.certifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'rgb(201, 169, 97)' }}></div>
                      <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <span className="text-[13px] font-semibold tracking-[0.14em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
                  ACCESSIBLE CARE
                </span>
                <h2 className="mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
                  {doctor.firstName} consults in {doctor.languages.length} languages.
                </h2>

                <div className="flex flex-wrap gap-3 mb-6">
                  {doctor.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-5 py-2.5 rounded-[8px] text-[15px]"
                      style={{ backgroundColor: 'rgb(240, 233, 221)', color: 'rgb(26, 26, 26)' }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
