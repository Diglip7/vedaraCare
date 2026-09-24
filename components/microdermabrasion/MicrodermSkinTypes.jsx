import React from 'react';
import Link from 'next/link';

const MicrodermSkinTypes = ({ data }) => {
  return (
    <section style={{ backgroundColor: 'rgb(255, 255, 255)', padding: '96px clamp(24px, 6vw, 120px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: 'rgb(200, 168, 127)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {data.label || "WHO BENEFITS"}
        </p>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '400', color: 'rgb(31, 31, 31)', marginBottom: '24px' }}>
          {data.title}
        </h2>
        {data.description && (
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', color: 'rgb(31, 31, 31)', maxWidth: '700px', margin: '0px auto 24px auto', lineHeight: '1.6' }}>
            {data.description}
          </p>
        )}
        {data.subtitle && (
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: 'rgb(85, 85, 85)', maxWidth: '700px', margin: '0px auto' }}>
            {data.subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mb-[48px]">
        {data.types && data.types.map((type, idx) => (
          <div key={idx} style={{ backgroundColor: '#F5F1EA', borderRadius: '8px', borderLeft: '3px solid rgb(200, 168, 127)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', color: 'rgb(200, 168, 127)', marginBottom: '12px', fontWeight: '400' }}>
              {type.number}
            </div>
            <h4 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '17px', fontWeight: '500', color: 'rgb(31, 31, 31)', marginBottom: '12px', lineHeight: '1.4' }}>
              {type.title}
            </h4>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: 'rgb(85, 85, 85)', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }} dangerouslySetInnerHTML={{ __html: type.description }} />
            
            {(type.focus || type.recommended) && (
              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: 'rgb(119, 119, 119)', lineHeight: '1.5' }}>
                <strong style={{ color: 'rgb(200, 168, 127)', fontWeight: '500' }}>{type.focus ? "Programme focus: " : "Recommended: "}</strong> 
                <span style={{ color: 'rgb(119, 119, 119)' }}>{type.focus || type.recommended}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link href="/book" className="gold-link text-[#C9A961] hover:text-[#B8963E] transition-colors border-b border-[#C9A961] hover:border-[#B8963E] pb-0.5 inline-block" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '500' }}>
          {data.actionLink || "Not sure which treatment suits your skin? Book comprehensive skin analysis with Arfah first →"}
        </Link>
      </p>

      {data.contraindications && (
        <div style={{ backgroundColor: 'rgb(245, 240, 232)', borderRadius: '8px', padding: '32px', marginTop: '16px', maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', fontWeight: '600', color: 'rgb(31, 31, 31)', marginBottom: '12px' }}>
            {data.contraindications.title}
          </p>
          {data.contraindications.text ? (
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: 'rgb(85, 85, 85)', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: data.contraindications.text }} />
          ) : (
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: 'rgb(85, 85, 85)', lineHeight: '1.7' }}>
              <strong style={{ color: 'rgb(31, 31, 31)' }}>Dermaplaning contraindications:</strong> {data.contraindications.dermaplaning}<br /><br />
              <strong style={{ color: 'rgb(31, 31, 31)' }}>Microdermabrasion contraindications:</strong> {data.contraindications.microdermabrasion}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default MicrodermSkinTypes;
