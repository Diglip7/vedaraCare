import React from 'react';

const DetoxCategories = ({
  label = "DETOX CATEGORIES",
  title = "The detox programmes we deliver at our JVC clinic.",
  subtitle = "Different detox needs require different protocols. Comprehensive assessment identifies your specific approach.",
  categories = [],
  footer = "Comprehensive assessment identifies your specific detox approach — no one-size-fits-all protocols →"
}) => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[32px] md:text-[38px] font-serif font-medium text-[#1A1A1A] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Categories Grid (2-column layout) */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="treatment-card"
              style={{
                background: 'rgb(245, 240, 232)',
                borderRadius: '8px',
                padding: '28px',
                borderLeft: '3px solid rgb(200, 168, 127)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: '28px',
                  color: 'rgb(200, 168, 127)',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}>
                  {cat.id || `0${index + 1}`}
                </div>
                <h4 style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  color: 'rgb(31, 31, 31)',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  {cat.title}
                </h4>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgb(85, 85, 85)',
                  lineHeight: '1.7',
                  marginBottom: '16px'
                }}>
                  {cat.description}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(200, 168, 127, 0.15)' }}>
                {cat.duration && (
                  <div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'rgb(200, 168, 127)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '2px'
                    }}>
                      Typical Duration
                    </p>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: 'rgb(31, 31, 31)',
                      fontWeight: 500
                    }}>
                      {cat.duration}
                    </p>
                  </div>
                )}
                {cat.bestFor && (
                  <div>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'rgb(200, 168, 127)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '2px'
                    }}>
                      Best For
                    </p>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: 'rgb(31, 31, 31)',
                      fontWeight: 500
                    }}>
                      {cat.bestFor}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link / Note */}
        {footer && (
          <div className="text-center mt-16">
            <span className="text-[13px] font-sans font-semibold text-[#C9A961] tracking-wider hover:underline cursor-pointer transition-all">
              {footer}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default DetoxCategories;
