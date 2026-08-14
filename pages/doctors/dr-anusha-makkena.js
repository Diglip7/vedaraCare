import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function DrAnushaMakkenaPage() {
  const doctor = {
    name: 'Dr. Anusha Makkena',
    firstName: 'Dr. Anusha',
    title: 'MBBS, MS ENT | General Practitioner | Aesthetic Medicine Physician | American board certified Advanced Injector',
    designation: 'General Practitioner | Aesthetic Medicine Physician',
    bio: 'Dr. Anusha Makkena, MBBS, MS ENT, is a General Practitioner and Aesthetic Medicine Physician with specialized training in aesthetic medicine. She focuses on personalized, safe and natural-looking aesthetic treatments, including injectables, skin rejuvenation, chemical peels and laser-based treatments. Her approach combines medical expertise with an understanding of facial aesthetics to create individualized treatment plans tailored to each patient’s needs and goals.',
    image: '/images/default-avatar.png',
    heroBadge: 'GENERAL PRACTITIONER • AESTHETIC MEDICINE PHYSICIAN',
    heroStats: 'General Practice • Aesthetic Medicine • Skin Rejuvenation • Anti aging procedures',
    features: [
      'MBBS, MS ENT',
      'American board certified Advanced Injector',
      'Speaks English, Telugu, Hindi, Arabic',
    ],
    about: 'Dr. Anusha Makkena is a General Practitioner with a background in ENT and specialized training in Aesthetic Medicine. She is passionate about providing safe, evidence-based and individualized medical and aesthetic care, with a focus on natural-looking results and patient satisfaction.<br/><br/>Her approach combines medical expertise with an understanding of facial aesthetics and skin health. She takes time to understand each patient’s concerns, assess their individual needs and develop personalized treatment plans with an emphasis on safety, appropriate patient selection and realistic expectations.<br/><br/>Dr. Anusha has a particular interest in non-surgical facial rejuvenation, skin quality improvement and minimally invasive aesthetic procedures. She continues to develop her expertise through advanced training and professional education in aesthetic medicine.',
    qualifications: [
      'MBBS – Katuri Medical College',
      'MS ENT – NTR University of Health Sciences',
      'Fellowship in Facial Aesthetics from IATAM , INDIA.',
      'Masterclass in Aesthetic Medicine – University of Sharjah',
      'A4M Advanced Injector Certification',
      'MOH Licensed General Practitioner'
    ],
    expertiseCategories: [
      {
        title: 'General Medicine',
        items: [
          'General medical consultations',
          'Preventive healthcare',
          'Common acute and chronic medical conditions',
          'Health assessment and counselling'
        ]
      },
      {
        title: 'Aesthetic Medicine',
        items: [
          'Botulinum toxin treatments',
          'Dermal fillers',
          'Skin boosters and mesotherapy',
          'Biostimulatory treatments',
          'PRP/GFC-based skin rejuvenation',
          'Chemical peels',
          'Laser-based skin rejuvenation',
          'Acne and post-acne scar management',
          'Pigmentation management',
          'Skin rejuvenation and improvement of skin quality',
          'Non-surgical facial rejuvenation',
          'Anti-ageing treatments',
          'Individualized aesthetic treatment planning'
        ]
      }
    ],
    treatmentPhilosophy: 'Dr. Anusha believes that aesthetic medicine should enhance an individual’s natural features rather than change their identity. Her treatment philosophy is centered around safety, subtlety, balance and natural-looking results.<br/><br/>Each patient receives an individualized assessment and treatment plan based on their anatomy, skin condition, concerns and aesthetic goals.',
    languages: ['English', 'Telugu', 'Hindi', 'Arabic'],
    professionalInterests: 'Dr. Anusha has a special interest in aesthetic injectables, skin rejuvenation, facial harmonization and combination aesthetic treatments. She is committed to continuous learning and staying updated with evolving techniques, technologies and evidence in aesthetic medicine.'
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
            <div className="max-w-[1280px] mx-auto px-6 h-12 flex items-center gap-2 " style={{ fontSize: '13px', color: 'rgb(107, 107, 107)' }}>
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
                  About {doctor.name}
                </h2>
              </div>

              <div className="border-l-2 border-[#C9A961] pl-8">
                <p
                  className="text-[16px] font-sans text-[#4A4A4A] leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: doctor.about }}
                />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Education / Qualifications */}
              <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}>
                <div className="w-12 h-12 rounded-[8px] flex items-center justify-center mb-6" style={{ backgroundColor: 'rgb(250, 246, 239)' }} role="img" aria-label="Education credentials icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '18px', fontWeight: '500', color: 'rgb(26, 26, 26)', marginBottom: '24px' }}>Qualifications</h3>
                <ul className="space-y-4">
                  {doctor.qualifications.map((item, index) => (
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

        {/* Specialties / Areas of Expertise */}
        <section className="bg-white py-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
                CLINICAL FOCUS
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '42px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
                Areas of Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctor.expertiseCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-8 rounded-[8px] border"
                  style={{ backgroundColor: 'rgb(250, 246, 239)', border: '1px solid rgb(229, 223, 211)' }}
                >
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '16px' }}>{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: 'rgb(201, 169, 97)' }}>●</span>
                        <p className="text-[14px] font-sans" style={{ color: 'rgb(74, 74, 74)' }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Philosophy */}
        <section className="bg-white pb-24">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-4xl mx-auto rounded-[8px] p-8 border" style={{ backgroundColor: 'rgb(250, 246, 239)', border: '1px solid rgb(229, 223, 211)' }}>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '16px' }}>Treatment Philosophy</h3>
              <p
                className="text-[14px] font-sans leading-relaxed"
                style={{ color: 'rgb(74, 74, 74)' }}
                dangerouslySetInnerHTML={{ __html: doctor.treatmentPhilosophy }}
              />
            </div>
          </div>
        </section>

        {/* Languages & Professional Interests */}
        <section className="bg-white py-24 border-t" style={{ borderColor: 'rgb(229, 223, 211)' }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Languages */}
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

              {/* Professional Interests */}
              <div>
                <p className="text-[13px] font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
                  CONTINUOUS CARE
                </p>
                <h3 className="mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', fontWeight: '500', color: 'rgb(26, 26, 26)' }}>
                  Professional Interests
                </h3>
                <p className="text-[15px] leading-[1.78]" style={{ color: 'rgb(107, 107, 107)' }}>
                  {doctor.professionalInterests}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  );
}
