import React from 'react';

const MicrodermComprehensiveProtocol = ({ data }) => {
  if (!data) return null;
  return (
    <section style={{ backgroundColor: 'rgb(245, 240, 232)', padding: '96px clamp(24px, 6vw, 120px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: 'rgb(200, 168, 127)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {data.label}
        </p>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '400', color: 'rgb(31, 31, 31)', marginBottom: '24px' }}>
          {data.title}
        </h2>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', color: 'rgb(31, 31, 31)', maxWidth: '700px', margin: '0px auto', lineHeight: '1.6' }}>
          {data.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {data.steps.map((item, idx) => (
          <div key={idx} style={{ backgroundColor: 'rgb(255, 255, 255)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '20px', color: 'rgb(200, 168, 127)', fontWeight: '400' }}>
                {item.num}
              </div>
              {item.chip && (
                <div style={{ border: '1px solid rgb(200, 168, 127)', borderRadius: '16px', padding: '4px 10px', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: 'rgb(200, 168, 127)', fontWeight: '600' }}>
                  {item.chip}
                </div>
              )}
            </div>

            <h4 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '16px', fontWeight: '500', color: 'rgb(31, 31, 31)', marginBottom: '12px', lineHeight: '1.35' }}>
              {item.title}
            </h4>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: 'rgb(85, 85, 85)', lineHeight: '1.65' }} dangerouslySetInnerHTML={{ __html: item.desc }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MicrodermComprehensiveProtocol;
