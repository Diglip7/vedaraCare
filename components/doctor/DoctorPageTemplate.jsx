import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Diamond } from 'lucide-react';
import FAQ from '../home/FAQ';
import TreatmentLocation from '../ayurveda/TreatmentLocation';
import FinalCTA from '../ayurveda/FinalCTA';
import RelatedPages from '../ayurveda/RelatedPages';
import AyurvedaIntro from '../ayurveda/AyurvedaIntro';
import AyurvedaHero from '../ayurveda/AyurvedaHero';
import { SciaticaTreatment } from '../ayurveda/SciaticaSections';
import PostnatalComponents from '../ayurveda/PostnatalComponents';
const DoctorPageTemplate = ({ doctor }) => {
  return (
    <>
      {/* ================= SECTION 1: HERO (Image Right, Content Left) ================= */}
      <AyurvedaHero
        label={doctor.heroBadge || 'AYURVEDA PRACTITIONER • BAMS'}
        title={`${doctor.firstName || doctor.name} — ${doctor.pageTitle || 'Ayurvedic Doctor at our JVC clinic, Dubai.'}`}
        description={`<span style="font-size: 15px; color: #6B6B6B; font-weight: 600; display: block; margin-bottom: 16px;">${doctor.subtitle || doctor.heroStats || 'BAMS · DHA-Licensed Ayurvedic Doctor · Personalised Holistic Care'}</span>${doctor.bio}`}
        primaryCTA={doctor.primaryCtaText || `Book Consultation with ${doctor.firstName || doctor.name}`}
        secondaryCTA={doctor.secondaryCtaText || 'Chat on WhatsApp'}
        primaryCTAHref={doctor.primaryCtaHref || '/book'}
        secondaryCTAHref={doctor.secondaryCtaHref || 'https://wa.me/971555736312'}
        trustSignals={doctor.trustSignals || [
          "DHA-Licensed BAMS Ayurvedic Doctor",
          "11 Documented Expertise Areas",
          "Female Doctor Available",
          "Walking Distance from Circle Mall, JVC"
        ]}
        image={doctor.image}
        alt={doctor.alt}
        floatingCard={doctor.floatingCard || {
          title: doctor.floatingCardTitle || 'PERSONALISED HOLISTIC AYURVEDA',
          subtitle: doctor.floatingCardSubtitle || `${doctor.firstName || doctor.name}'s consultation begins with genuine listening — understanding your health concerns, constitution, lifestyle, and history. Patient-centred care addressing your specific needs.`
        }}
        breadcrumb={doctor.breadcrumb || [
          { label: "Home", href: "/" },
          { label: "Doctors & Team", href: "/doctors/" },
          { label: `${doctor.firstName || doctor.name}` }
        ]}
      />
      {/* ================= SECTION 2: QUICK ANSWER ================= */}
      <AyurvedaIntro
        label={doctor.aboutLabel || "THE QUICK ANSWER"}
        title={
          doctor.aboutH2 ||
          `About ${doctor.firstName || doctor.name}, in one paragraph.`
        }
        blockquote={doctor.about}
        footer={
          doctor.aboutFooter ||
          doctor.heroStats ||
          "PROFILE VERIFIED BY VEDARA CARE MEDICAL TEAM · DHA LICENSED"
        }
      />
      {/* ================= SECTION 3: DOCTOR'S CLINICAL APPROACH ================= */}
      <SciaticaTreatment
        showBorderLeft={false}

        rightContentStyle="tags"
        bgColor="bg-white"
        data={{
          treatment: {
            label: doctor.aboutLabel || doctor.summaryLabel || "PROFILE SUMMARY",
            title:
              doctor.summaryTitle ||
              "Personalised care — clinical approach.",
            intro: doctor.specialtiesSubtitle,
            steps: [
              {
                title: "",
                description: doctor.summaryParagraph1 || ""
              },
              ...(doctor.description || []).map((item) => ({
                title: item.title,
                description: item.description
              })),
              ...(doctor.summaryParagraph2
                ? [
                  {
                    textcolor: "#C8A87F",
                    title: "",
                    description: doctor.summaryParagraph2
                  }
                ]
                : []),
              ...(doctor.summaryParagraph3
                ? [
                  {
                    title: doctor.summaryParagraph3Title || "",
                    description: doctor.summaryParagraph3
                  }
                ]
                : [])
            ],
            footer:
              doctor.quote ||
              (doctor.approach && doctor.approach.length > 0
                ? `"${doctor.approach[0].description}"`
                : null)
          },
          rightContent: {
            image: doctor.image,
            alt:
              doctor.alt ||
              `${doctor.firstName || doctor.name} at Vedara Care JVC Dubai`
          }
        }}
      />


      {/* ================= SECTION 4: EXPERTISE AREAS GRID (7+ cards) ================= */}
      {doctor.specialtiesList && doctor.specialtiesList.length > 0 && (
        <PostnatalComponents
          bgColor={doctor.specialtiesBgColor || "#FFFFFF"}
          cardBg={doctor.specialtiesCardBg || "#FBF7F1"}
          label={doctor.specialtiesLabel || "AREAS OF EXPERTISE"}
          title={doctor.specialtiesTitle || `${doctor.firstName || doctor.name}'s documented areas of expertise at our JVC clinic.`}
          description={doctor.specialtiesSubtitle || ""}
          footerNote={doctor.specialtiesFooter || ""}
          row1Columns="lg:grid-cols-4"
          row2Columns="lg:grid-cols-4"
          row1Count={4}
          items={doctor.specialtiesList.map((s) => ({
            number: s.number,
            title: s.title,
            content: s.description,
            techniques: s.related
          }))}
          techniquesLabel="CORE STRENGTH:"
        />
      )}



      {/* ================= SECTION 5: QUALIFICATIONS / CREDENTIALS (TABLE STYLE) ================= */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: '#C9A55B' }}>
              BACKGROUND & EDUCATION
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '44px', fontWeight: '500', color: '#1A1A1A', lineHeight: '1.2', marginBottom: '24px' }}>
              {doctor.credentialsTitle || `${doctor.firstName || doctor.name}'s qualifications, credentials, and professional background.`}
            </h2>
            {doctor.credentialsSubtitle && (
              <p className="text-[17px] max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
                {doctor.credentialsSubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
            <div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', fontWeight: '500', color: '#1A1A1A', marginBottom: '28px' }}>
                Formal Qualifications
              </h3>
              <table className="w-full">
                <tbody>
                  {(doctor.education || []).map((edu, i) => {
                    if (edu === '') return null;
                    const [label, value] = edu.split('—').map(s => s ? s.trim() : '');
                    if (!value || label === 'Education' || label === 'Licenses' || label === 'Certifications' || label === 'Languages') {
                      return (
                        <tr key={i} style={{ borderBottom: 'none' }}>
                          <td colSpan="2" className="pt-6 pb-2 text-[13px] font-bold tracking-[0.1em] uppercase" style={{ color: '#C9A55B' }}>{edu}</td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={i} className="border-b" style={{ borderColor: '#E5DFD3' }}>
                        <td className="py-4 pr-4 align-top text-[13px] font-semibold w-1/3" style={{ color: '#1A1A1A' }}>{label}</td>
                        <td className="py-4 align-top text-[13.5px]" style={{ color: '#4A4A4A' }}>{value || edu}</td>
                      </tr>
                    );
                  }).filter(Boolean)}
                </tbody>
              </table>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', fontWeight: '500', color: '#1A1A1A', marginBottom: '28px' }}>
                Certifications & Languages
              </h3>

              {doctor.certifications && doctor.certifications.length > 0 && (
                <div className="mb-8">
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: '#C9A55B' }}>CERTIFICATIONS</p>
                  <ul className="space-y-3">
                    {doctor.certifications.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: '#4A4A4A' }}>
                        <Diamond size={12} className="mt-1 flex-shrink-0" color="#C9A55B" fill="#C9A55B" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {doctor.languagesSpoken && doctor.languagesSpoken.length > 0 && (
                <div className="mb-8">
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: '#C9A55B' }}>LANGUAGES SPOKEN</p>
                  <ul className="space-y-3">
                    {doctor.languagesSpoken.map((lang, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: '#4A4A4A' }}>
                        <Diamond size={12} className="mt-1 flex-shrink-0" color="#C9A55B" fill="#C9A55B" />
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {doctor.professionalMemberships && doctor.professionalMemberships.length > 0 && (
                <div className="mb-8">
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: '#C9A55B' }}>PROFESSIONAL MEMBERSHIPS</p>
                  <ul className="space-y-3">
                    {doctor.professionalMemberships.map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: '#4A4A4A' }}>
                        <Diamond size={12} className="mt-1 flex-shrink-0" color="#C9A55B" fill="#C9A55B" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {doctor.continuingEducation && (
                <div>
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: '#C9A55B' }}>CONTINUING EDUCATION</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#4A4A4A' }}>{doctor.continuingEducation}</p>
                </div>
              )}
            </div>
          </div>

          {doctor.credentialsFooter && (
            <p className="text-center text-[13px] max-w-3xl mx-auto" style={{ color: '#6B6B6B' }}>
              {doctor.credentialsFooter}
            </p>
          )}
        </div>
      </section>

      {/* ================= SECTION 5: CONDITIONS TREATED ================= */}
      {doctor.conditionsTreated && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: '#C9A55B' }}>
                CONDITIONS TREATED
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '44px', fontWeight: '500', color: '#1A1A1A', lineHeight: '1.2', marginBottom: '24px' }}>
                {doctor.conditionsTitle || `Conditions ${doctor.firstName || doctor.name} treats at our JVC clinic serving Dubai.`}
              </h2>
              {doctor.conditionsTreated.subtitle && (
                <p className="text-[16px]" style={{ color: '#6B6B6B' }}>
                  {doctor.conditionsTreated.subtitle}
                </p>
              )}
            </div>

            <div className="space-y-12">
              {(doctor.conditionsTreated.categories || []).map((cat, catIdx) => (
                <div key={catIdx}>
                  <h3 className="mb-5 pb-2 border-l-4 pl-4" style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '22px', fontWeight: '500', color: '#1A1A1A', borderLeftColor: '#C9A55B' }}>
                    {cat.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {(cat.conditions || []).map((cond, cIdx) => (
                      <div key={cIdx} className="p-6 rounded-[8px] border" style={{ backgroundColor: '#FBF7F1', borderColor: '#E5DFD3' }}>
                        <p className="condition-title text-[14px] font-semibold mb-3" style={{ color: '#1A1A1A' }} dangerouslySetInnerHTML={{ __html: cond.title }} />
                        <p className="text-[12.5px] leading-relaxed" style={{ color: '#6B6B6B' }} dangerouslySetInnerHTML={{ __html: cond.description }} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>


            {doctor.conditionsTreated.footer && (
              <p className="text-center mt-14 text-[14px] font-medium" style={{ color: '#6B6B6B' }}>
                <u>{doctor.conditionsTreated.footer}</u>
              </p>
            )}
          </div>
        </section>
      )}

      {/* ================= SECTION 6: REVIEWS ================= */}
      {doctor.reviews && (
        <section style={{ backgroundColor: doctor.reviews.bgColor || '#FAF6EF' }} className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: '#C9A55B' }}>
                {doctor.reviews.label}
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '44px', fontWeight: '500', color: '#1A1A1A', lineHeight: '1.2', marginBottom: '24px' }}>
                {doctor.reviews.title}
              </h2>
              {doctor.reviews.description && <p className="text-[16px]" style={{ color: '#6B6B6B' }}>{doctor.reviews.description}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {(doctor.reviews.items || []).map((r, i) => (
                <div
                  key={i}
                  className="relative p-8 rounded-tr-[32px] rounded-[8px] shadow-md border"
                  style={{ backgroundColor: doctor.reviews.cardBgColor || 'white', borderColor: '#E5DFD3' }}
                >
                  <div className="flex items-center gap-1 mb-5">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} size={16} fill="#C9A55B" color="#C9A55B" />
                    ))}
                  </div>
                  <p className="text-[16px] font-medium leading-relaxed mb-6" style={{ color: '#1A1A1A' }}>
                    "{r.quote}"
                  </p>
                  <div>
                    <p className="text-[14px] font-semibold" style={{ color: '#1A1A1A' }}>{r.author}</p>
                    {r.details && <p className="text-[12.5px] mt-1" style={{ color: '#6B6B6B' }}>{r.details}</p>}
                  </div>
                </div>
              ))}
            </div>

            {doctor.reviews.stats && doctor.reviews.stats.length > 0 && (
              <div className="flex items-center justify-center gap-10 flex-wrap mb-10">
                {doctor.reviews.stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '40px', fontWeight: '500', color: '#C9A55B' }}>{s.value}</div>
                    <p className="text-[13px] mt-2" style={{ color: '#6B6B6B' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {doctor.reviews.buttonText && (
              <div className="text-center">
                <a href={doctor.reviews.buttonHref || '#'} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[6px] border font-medium text-[15px]" style={{ borderColor: '#1F4538', color: '#1F4538' }}>
                  {doctor.reviews.buttonText}
                </a>
              </div>
            )}
          </div>
        </section>
      )}
      {/* ================= SECTION 2: QUICK ANSWER / ABOUT DOCTOR ================= */}

      {/* ================= SECTION 7: CONSULTATION 4-PHASE + BRING BOX ================= */}
      {doctor.consultation && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: '#C9A55B' }}>
                {doctor.consultation.label || 'YOUR CONSULTATION'}
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '44px', fontWeight: '500', color: '#1A1A1A', lineHeight: '1.2', marginBottom: '24px' }}>
                {doctor.consultation.title || `What to expect at your consultation with ${doctor.firstName || doctor.name}.`}
              </h2>
              {doctor.consultation.description && (
                <p className="text-[16px] max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>{doctor.consultation.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
              {(doctor.consultation.phases || []).map((ph, i) => (
                <div
                  key={i}
                  className="p-7 rounded-[8px] border-t-4"
                  style={{ backgroundColor: '#FBF7F1', borderTopColor: '#C9A55B' }}
                >
                  {ph.phase && (
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '28px', fontWeight: '500', color: '#C9A55B', marginBottom: '10px' }}>
                      {ph.phase}
                    </div>
                  )}
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '17px', fontWeight: '500', color: '#1A1A1A', marginBottom: '8px' }}>
                    {ph.title}
                  </h3>
                  {ph.time && <p className="text-[12px] font-semibold tracking-wide uppercase mb-4" style={{ color: '#C9A55B' }}>{ph.time}</p>}
                  <p className="text-[14px] leading-relaxed" style={{ color: '#4A4A4A' }}>{ph.description}</p>
                </div>
              ))}
            </div>

            {doctor.consultation.bringBox && (
              <div className="max-w-3xl mx-auto p-8 rounded-[8px]" style={{ backgroundColor: '#FAF6EF' }}>
                <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: '#C9A55B' }}>
                  {doctor.consultation.bringBox.label}
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: '#4A4A4A' }}>
                  {(doctor.consultation.bringBox.items || []).join(' · ')}.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= SECTION 8: PRICING & INSURANCE TABLE ================= */}
      {doctor.pricing && (
        <section className="py-20 md:py-28" style={{ backgroundColor: '#FAF6EF' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: '#C9A55B' }}>
                {doctor.pricing.label || 'TRANSPARENT PRICING'}
              </span>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '44px', fontWeight: '500', color: '#1A1A1A', lineHeight: '1.2' }}>
                {doctor.pricing.title || `Consultation with ${doctor.firstName || doctor.name} — pricing and insurance.`}
              </h2>
            </div>

            {doctor.pricing.consultationRows && doctor.pricing.consultationRows.length > 0 && (
              <div className="rounded-[10px] overflow-hidden shadow-lg mb-10">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#1A1A1A', color: 'white' }}>
                      <th className="text-left p-5 text-[14px] font-semibold">Consultation Type</th>
                      <th className="text-left p-5 text-[14px] font-semibold w-40">Duration</th>
                      <th className="text-right p-5 text-[14px] font-semibold w-36">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctor.pricing.consultationRows.map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#FBF7F1', borderBottom: '1px solid #E5DFD3' }}>
                        <td className="p-5 text-[14.5px]" style={{ color: '#1A1A1A' }}>{row.type}</td>
                        <td className="p-5 text-[14px]" style={{ color: '#4A4A4A' }}>{row.duration}</td>
                        <td className="p-5 text-right text-[14.5px] font-medium" style={{ color: '#C9A55B' }}>{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {doctor.pricing.insurance && (
                <div className="p-8 rounded-[8px] bg-white shadow-sm border border-[#E5DFD3]">
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', marginBottom: '16px' }}>
                    {doctor.pricing.insurance.title}
                  </h3>
                  {doctor.pricing.insurance.paragraph1 && <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: '#4A4A4A' }}>{doctor.pricing.insurance.paragraph1}</p>}
                  {doctor.pricing.insurance.paragraph2 && <p className="text-[14.5px] leading-relaxed" style={{ color: '#4A4A4A' }}>{doctor.pricing.insurance.paragraph2}</p>}
                </div>
              )}
              {doctor.pricing.treatmentCosts && (
                <div className="p-8 rounded-[8px] bg-white shadow-sm border border-[#E5DFD3]">
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '24px', fontWeight: '500', color: '#1A1A1A', marginBottom: '16px' }}>
                    {doctor.pricing.treatmentCosts.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: '#4A4A4A' }}>{doctor.pricing.treatmentCosts.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 9: FAQ ================= */}
      {doctor.faqs && <FAQ {...doctor.faqs} />}

      {/* ================= SECTION 10: LOCATION ================= */}
      {doctor.location && <TreatmentLocation {...doctor.location} />}

      {/* ================= SECTION 11: FINAL CTA ================= */}
      {doctor.cta && <FinalCTA {...doctor.cta} />}

      {/* ================= SECTION 12: RELATED PAGES ================= */}
      {doctor.relatedPages && <RelatedPages {...doctor.relatedPages} />}
    </>
  );
};

export default DoctorPageTemplate;
