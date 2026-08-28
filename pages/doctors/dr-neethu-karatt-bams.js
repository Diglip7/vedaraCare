import React from 'react';
import Head from 'next/head';
import DoctorPageTemplate from '../../components/doctor/DoctorPageTemplate';
import { drNeethuKarattTemplate } from '../../data/doctorData';

export default function DrNeethuKarattPage() {
  const doctor = {
    name: 'Dr. Neethu Karatt',
    firstName: 'Dr. Neethu',
    title: 'BAMS | Ayurveda Practitioner',
    designation: 'Ayurveda Practitioner',
    bio: 'Dr. Neethu Karatt is a qualified Ayurveda Practitioner with over eight years of clinical experience in Ayurvedic medicine, with clinical experience in India and the UAE. She believes that every patient is unique and takes the time to listen carefully to each patient\'s concerns and understand their health history, lifestyle, dietary habits and individual body constitution (Prakriti) before recommending a treatment approach.',
  };

  return (
    <>
      <Head>
        <title>{doctor.name} — {doctor.designation} in JVC | Vedara Care</title>
        <meta name="description" content={doctor.bio} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Head>
      <DoctorPageTemplate doctor={drNeethuKarattTemplate} />
    </>
  );
}
