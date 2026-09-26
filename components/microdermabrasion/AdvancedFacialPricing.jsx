import React from 'react';
import Link from 'next/link';

const AdvancedFacialPricing = ({ data, bgColor, cardBgColor }) => {
  const sectionBg = bgColor || 'rgb(245, 240, 232)';
  
  // Use cardBgColor if provided, otherwise alternate between white and a slightly off-white for the rows
  const getRowBg = (idx) => {
    if (cardBgColor) return cardBgColor;
    return idx % 2 === 0 ? 'rgb(255, 255, 255)' : 'rgb(245, 240, 232)';
  };

  const defaultItems = [
    { service: 'Comprehensive Skin Analysis with Arfah (first-visit foundation)', duration: '30 min', price: 'AED [X] (waived with same-day treatment)' },
    { service: 'Diamond-Tip Microdermabrasion (single session)', duration: '20-30 min', price: 'From AED [X]' },
    { service: 'Crystal Microdermabrasion (single session)', duration: '20-30 min', price: 'From AED [X]' },
    { service: 'Dermaplaning (single session)', duration: '20-30 min', price: 'From AED [X]' },
    { service: 'Combined Dermaplaning + Microdermabrasion', duration: '45-60 min', price: 'From AED [X]' },
    { service: 'Dermaplaning + HydraFacial Combined Protocol', duration: '75-90 min', price: 'From AED [X]' },
    { service: 'Dermaplaning + Oxy-Geneo Combined Protocol', duration: '75-90 min', price: 'From AED [X]' },
    { service: 'LED Light Therapy add-on (Blue or Red)', duration: '+15 min', price: 'From AED [X]' },
    { service: '3-Session Microdermabrasion Programme', duration: '3 months', price: 'From AED [X]' },
    { service: '3-Session Dermaplaning Programme', duration: '3 months', price: 'From AED [X]' },
    { service: '6-Session Microdermabrasion Programme', duration: '6 months', price: 'From AED [X]' },
    { service: '6-Session Dermaplaning Programme', duration: '6 months', price: 'From AED [X]' },
    { service: '6-Session Alternating Programme', duration: '6 months', price: 'From AED [X]' },
    { service: 'Bridal Combined Protocol (Dermaplaning + Oxy-Geneo pre-wedding sequence)', duration: 'Bespoke', price: 'Consultation required' },
    { service: 'Monthly Membership (single modality or alternating)', duration: 'Rolling monthly', price: 'From AED [X]/month' },
    { service: 'Follow-up consultation (existing patient, no treatment)', duration: '20 min', price: 'AED [X]' }
  ];

  const items = data?.items || defaultItems;

  return (
    <section style={{ backgroundColor: sectionBg, padding: '96px clamp(24px, 6vw, 120px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', color: 'rgb(200, 168, 127)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {data?.label || "TRANSPARENT PRICING"}
        </p>
        <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '400', color: 'rgb(31, 31, 31)', marginBottom: data?.subtitle ? '32px' : '16px' }}>
          {data?.title || "Individual treatment pricing, combined protocols, and programme options."}
        </h2>
        {data?.subtitle && (
          <div style={{ maxWidth: '800px', margin: '0 auto 32px auto', borderLeft: '3px solid rgb(200, 168, 127)', paddingLeft: '24px', textAlign: 'left' }}>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', lineHeight: '1.7', fontWeight: '500', color: 'rgb(51, 51, 51)' }}>
              {data.subtitle}
            </p>
          </div>
        )}
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', color: 'rgb(119, 119, 119)', maxWidth: '700px', margin: '0px auto' }}>
          {data?.description || "Pricing varies by treatment selection and programme structure. Comprehensive skin analysis determines appropriate modality \u2014 no door-sold packages."}
        </p>
      </div>
      <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(200, 168, 127, 0.3)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgb(255, 255, 255)' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgb(200, 168, 127)' }}>
              <th style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: '600', color: 'rgb(255, 255, 255)', padding: '16px 20px', textAlign: 'left', letterSpacing: '0.05em' }}>Service</th>
              <th style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: '600', color: 'rgb(255, 255, 255)', padding: '16px 20px', textAlign: 'left', whiteSpace: 'nowrap' }}>Duration</th>
              <th style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: '600', color: 'rgb(255, 255, 255)', padding: '16px 20px', textAlign: 'left', whiteSpace: 'nowrap' }}>Starting Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={idx} style={{ backgroundColor: getRowBg(idx), borderBottom: '1px solid rgba(200, 168, 127, 0.15)' }}>
                <td style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: 'rgb(31, 31, 31)', padding: '14px 20px' }}>{row.service}</td>
                <td style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: 'rgb(85, 85, 85)', padding: '14px 20px', whiteSpace: 'nowrap' }}>{row.duration}</td>
                <td style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', fontWeight: '500', color: 'rgb(31, 31, 31)', padding: '14px 20px', whiteSpace: 'nowrap' }}>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: 'rgb(119, 119, 119)', marginTop: '20px', lineHeight: '1.6' }}>
        {data?.footerText || "All prices in AED. VAT included where applicable. Microdermabrasion and dermaplaning delivered for cosmetic purposes are typically not insurance-covered  -  check with your provider before booking."}
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '48px', alignItems: 'center' }}>
        <Link href={data?.bookLink || "/book"} style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: 'rgb(200, 168, 127)', color: 'rgb(255, 255, 255)', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'none', borderRadius: '8px', height: '56px', padding: '0px 32px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif', transition: 'background 0.2s', whiteSpace: 'nowrap' }}>
            {data?.bookText || "Book Treatment at JVC"}
          </button>
        </Link>
        <a href={data?.whatsappLink || "https://wa.me/971555736312"} className="gold-link" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '16px', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
          {data?.whatsappText || "WhatsApp us for programme pricing questions \u2192"}
        </a>
      </div>
    </section>
  );
};

export default AdvancedFacialPricing;
