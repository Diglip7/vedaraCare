import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { drZainab } from '../../data/doctorData';

const clinicians = [
  {
    name: 'Dr. Sanjida Islam Suchana',
    specialty: 'General Practitioner | Clinical Dermatology',
    focus: 'Skin Health, Primary Care, Women\'s Health & Infertility',
    image: '/images/dr-sanjida-islam-suchana-gp-dubai.webp',
    alt: 'Dr. Sanjida Islam Suchana, DHA-licensed General Practitioner at Vedara Care Polyclinic, JVC Dubai',
    slug: 'dr-sanjida-islam-suchana',
    url: '/doctors/dr-sanjida-islam-suchana'
  },
  {
    name: 'Hafsina K K',
    specialty: 'Physiotherapist',
    focus: 'Neurological Rehabilitation, Musculoskeletal Disorders',
    image: '/images/hafsina-kk-physiotherapist-dubai.webp',
    alt: 'Hafsina K K, DHA-licensed physiotherapist at Vedara Care Polyclinic, JVC Dubai',
    slug: 'hafsina-kk-physiotherapist',
    url: '/doctors/hafsina-kk-physiotherapist'
  },
  {
    name: 'Dr. Zainab Sheikh',
    specialty: 'Ayurveda Practitioner · BAMS',
    focus: 'PCOS, Nadi Pareeksha, Musculoskeletal, Postnatal',
    image: '/images/dr-zainab-ayurveda-jvc.webp',
    alt: drZainab.alt,
    slug: 'dr-zainab-ayurveda',
    url: '/doctors/dr-zainab-ayurveda'
  }
];

const team = [
  {
    name: 'Johanna Bautista',
    specialty: 'Patient Care & Operations Specialist',
    focus: 'Patient Coordination & Front Desk Operations',
    image: '/images/johanna-bautista.jpeg',
    alt: 'Johanna Bautista, Patient Care & Operations Specialist at Vedara Care, JVC',
    slug: 'johanna-bautista',
    url: '/doctors/johanna-bautista'
  },
  {
    name: 'Aesthetician Arfah Owais',
    specialty: 'DHA Licensed Aesthetician',
    focus: 'Advanced Facial Therapy & Skincare',
    image: '/images/arfah-owais-portrait.webp',
    alt: 'Aesthetician Arfah Owais, DHA Licensed Aesthetician at Vedara Care Polyclinic, JVC Dubai',
    slug: 'arfah-owais',
    url: '/doctors/arfah-owais'
  },
  {
    name: 'Emiel Sanchez',
    specialty: 'Clinic Receptionist',
    focus: 'Administrative & Patient Relations',
    image: '/images/emiel-sanchez-receptionist.webp',
    alt: 'Emiel Sanchez, Clinic Receptionist at Vedara Care Polyclinic, JVC Dubai',
    slug: 'emiel-sanchez',
    url: '/doctors/emiel-sanchez'
  }
];

export default function DoctorsPage() {
  return (
    <>
      <Head>
        <title>Our Clinicians & Team | Vedara Care Polyclinic</title>
        <meta name="description" content="Meet our team of DHA-licensed doctors and clinical support staff at Vedara Care Polyclinic in JVC, Dubai." />
      </Head>

      <section className="py-24" style={{ backgroundColor: 'rgb(240, 233, 221)' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              CLINICIANS
            </span>
            <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
              Meet Our Doctors
            </h1>
            <p className="text-[16px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
              DHA-licensed healthcare professionals with years of experience in their specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
            {clinicians.map((doc, index) => (
              <Link
                key={index}
                href={doc.url}
                className="rounded-[8px] overflow-hidden cursor-pointer group"
                style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4 / 5', background: 'rgb(228, 216, 200)' }}>
                  <img
                    src={doc.image}
                    alt={doc.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[16px] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                    {doc.name}
                  </p>
                  <p className="text-[13px] mb-0.5" style={{ color: 'rgb(31, 69, 56)' }}>
                    {doc.specialty}
                  </p>
                  <p className="text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                    {doc.focus}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mb-16">
            <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              OUR TEAM
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
              Clinic Operations & Patient Care
            </h2>
            <p className="text-[16px] font-sans max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
              Our dedicated support team ensuring a smooth and pleasant patient experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, index) => (
              <Link
                key={index}
                href={member.url}
                className="rounded-[8px] overflow-hidden cursor-pointer group"
                style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(229, 223, 211)' }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: '4 / 5', background: 'rgb(228, 216, 200)' }}>
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[16px] mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                    {member.name}
                  </p>
                  <p className="text-[13px] mb-0.5" style={{ color: 'rgb(31, 69, 56)' }}>
                    {member.specialty}
                  </p>
                  <p className="text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                    {member.focus}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
