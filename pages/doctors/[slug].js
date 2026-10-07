import React from 'react';
import Head from 'next/head';

export default function DoctorSlugPage() {
  return (
    <>
      <Head>
        <title>Doctor Not Found | Vedara Care</title>
      </Head>
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>Doctor Not Found</h1>
        <p>The requested doctor profile could not be found.</p>
      </div>
    </>
  );
}
