import React, { useState } from "react";
import Link from "next/link";
import { Star, ChevronDown, ChevronUp } from "lucide-react";
import AyurvedaHero from "../ayurveda/AyurvedaHero";
import TreatmentLocation from "../ayurveda/TreatmentLocation";
import FinalCTA from "../ayurveda/FinalCTA";
import RelatedPages from "../ayurveda/RelatedPages";
import { SciaticaTreatment } from "../ayurveda/SciaticaSections";

// ---- HERO  -  uses the same AyurvedaHero component as DoctorPageTemplate ----

// ---- QUICK ANSWER (Arfah-specific: blockquote + chips, no footer) ----
const QuickAnswerSection = ({ data }) => (
  <section className="bg-white py-24 px-6 relative overflow-hidden">
    <div className="max-w-[1280px] mx-auto">
      <div className="max-w-[1100px] mx-auto text-center">
        <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
          THE QUICK ANSWER
        </p>
        <h2 className="mt-4 mb-10 text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mx-auto">
          {data.whoIsH2 || `About ${data.firstName || data.name}, in one paragraph.`}
        </h2>
        <blockquote
          className="text-[18px] leading-[1.8] text-gray-700 text-left border-l-[3px] border-[#C5A572] pl-[28px] mb-8"
          dangerouslySetInnerHTML={{ __html: data.whoIsContent }}
        />
        {data.whoIsChips && data.whoIsChips.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {data.whoIsChips.map((chip, i) => (
              <span
                key={i}
                className="text-[13px] px-5 py-2.5 rounded-full border transition-colors hover:bg-[#FAF6EF]"
                style={{ borderColor: "rgb(201,169,97)", color: "rgb(74,74,74)" }}
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);



// ---- TREATMENT CATEGORIES ----
const TreatmentCategoriesSection = ({ data }) => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "rgb(201,169,97)", fontFamily: "Inter, sans-serif" }}>{data.treatmentsLabel}</span>
        <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: "500", color: "rgb(26,26,26)", lineHeight: "1.15", marginBottom: "16px" }}>{data.treatmentsH2}</h2>
        {data.treatmentsSubtitle && (
          <p className="text-[16px]" style={{ color: "rgb(107,107,107)", fontFamily: "Inter, sans-serif" }}>
            {data.treatmentsSubtitle}
          </p>
        )}
      </div>
      <div className="space-y-10">
        {(data.treatmentCategories || []).map((cat, i) => (
          <div
            key={i}
            className="rounded-[8px] p-8 lg:p-12"
            style={{ backgroundColor: "rgb(240,235,227)", border: "1px solid rgb(201,169,97)" }}
          >
            <h3
              style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "500", color: "rgb(26,26,26)", fontSize: "28px", marginBottom: "12px" }}
            >
              {cat.h3}
            </h3>
            <p
              className="text-[16px] leading-[1.7] mb-8"
              style={{ color: "rgb(107,107,107)", fontFamily: "Inter, sans-serif" }}
            >
              {cat.description}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(cat.treatments || []).map((tr, j) => (
                <div key={j} className="bg-white rounded-[8px] p-5 flex flex-col">
                  <h4
                    className="mb-2"
                    style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "500", fontSize: "18px", color: "rgb(26,26,26)" }}
                  >
                    {tr.name}
                  </h4>
                  <p
                    className="text-[14px] leading-[1.6] mb-3 flex-1"
                    style={{ color: "rgb(107,107,107)", fontFamily: "Inter, sans-serif" }}
                  >
                    {tr.description}
                  </p>
                  {tr.href && tr.href !== "#" ? (
                    <Link
                      href={tr.href}
                      className="text-[13px] font-medium underline transition-colors"
                      style={{ color: "rgb(201,169,97)", fontFamily: "Inter, sans-serif", textDecorationColor: "rgb(201,169,97)" }}
                    >
                      Learn more →
                    </Link>
                  ) : (
                    <span
                      className="text-[13px] font-medium underline"
                      style={{ color: "rgb(201,169,97)", fontFamily: "Inter, sans-serif", textDecorationColor: "rgb(201,169,97)", opacity: 0.5 }}
                    >
                      Learn more →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


// ---- TOP BOOKED TREATMENTS ----
const TopTreatmentsSection = ({ data }) => (
  <section className="py-20 md:py-28" style={{ backgroundColor: "rgb(250,246,239)" }}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "rgb(201,169,97)" }}>{data.topTreatmentsLabel}</span>
        <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: "500", color: "rgb(26,26,26)", lineHeight: "1.15", marginBottom: "16px" }}>{data.topTreatmentsH2}</h2>
        {data.topTreatmentsSubtitle && <p className="text-[16px]" style={{ color: "rgb(107,107,107)" }}>{data.topTreatmentsSubtitle}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data.topTreatments || []).map((tr, i) => (
          <div key={i} className="rounded-[10px] flex flex-col overflow-hidden border" style={{ backgroundColor: "white", borderColor: "rgb(229,223,211)" }}>
            {tr.image && (
              <div className="h-[220px] w-full relative bg-gray-200">
                <img src={tr.image} alt={tr.alt} loading="lazy" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8 flex flex-col gap-4 flex-1">
              <div style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "36px", fontWeight: "500", color: "rgb(201,169,97)", lineHeight: "1" }}>{tr.number}</div>
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "19px", fontWeight: "500", color: "rgb(26,26,26)" }}>{tr.h3}</h3>
              <p className="text-[14px] leading-[1.75] flex-1" style={{ color: "rgb(107,107,107)" }}>{tr.description}</p>
              <div className="flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: "rgb(229,223,211)" }}>
                {tr.sessionCount && <span className="text-[12px] px-3 py-1 rounded-full" style={{ backgroundColor: "rgb(245,241,232)", color: "rgb(107,107,107)" }}>{tr.sessionCount}</span>}
                {tr.duration && <span className="text-[12px] px-3 py-1 rounded-full" style={{ backgroundColor: "rgb(245,241,232)", color: "rgb(107,107,107)" }}>{tr.duration}</span>}
                {tr.downtime && <span className="text-[12px] px-3 py-1 rounded-full" style={{ backgroundColor: "rgb(245,241,232)", color: "rgb(107,107,107)" }}>{tr.downtime}</span>}
              </div>
              {tr.href && tr.href !== "#" && (
                <Link href={tr.href} className="text-[13px] font-medium hover:opacity-70 transition-opacity" style={{ color: "rgb(201,169,97)" }}>View treatment →</Link>
              )}
            </div>
          </div>
        ))}
      </div>
      {data.topTreatmentsButtonText && data.topTreatmentsButtonHref && (
        <div className="mt-12 text-center">
          <Link href={data.topTreatmentsButtonHref} className="inline-flex items-center justify-center px-8 py-4 rounded-[6px] text-[14px] font-semibold tracking-wider uppercase transition-colors" style={{ backgroundColor: "rgb(26,26,26)", color: "white", fontFamily: "Inter, sans-serif" }}>
            {data.topTreatmentsButtonText}
          </Link>
        </div>
      )}
    </div>
  </section>
);

// ---- CREDENTIALS ----
const CredentialsSection = ({ data }) => (
  <section className="py-20 md:py-28" style={{ backgroundColor: "rgb(245,241,232)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "rgb(201,169,97)" }}>{data.credentialsLabel}</span>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: "500", color: "rgb(26,26,26)", lineHeight: "1.15", marginBottom: "20px" }}>{data.credentialsH2}</h2>
          <p className="text-[15px] leading-[1.8]" style={{ color: "rgb(74,74,74)" }}>{data.credentialsSubtitle}</p>
        </div>
        <div className="space-y-5">
          {(data.credentials || []).map((cred, i) => (
            <div key={i} className="p-7 rounded-[8px]" style={{ backgroundColor: "white" }}>
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "18px", fontWeight: "500", color: "rgb(26,26,26)", marginBottom: "6px" }}>{cred.h3}</h3>
              <p className="text-[12px] font-semibold tracking-wide uppercase mb-4" style={{ color: "rgb(201,169,97)" }}>{cred.issuedBy}</p>
              <p className="text-[14px] leading-[1.75]" style={{ color: "rgb(74,74,74)" }}>{cred.description}</p>
            </div>
          ))}
        </div>
      </div>
      {data.credentialsFooter && (
        <div className="mt-10 p-5 rounded-[8px]" style={{ backgroundColor: "white", borderTop: "2px solid rgb(201,169,97)" }}>
          <p className="text-[13px] leading-[1.7]" style={{ color: "rgb(107,107,107)" }}>
            <span className="font-semibold" style={{ color: "rgb(201,169,97)" }}>Verification: </span>
            {data.credentialsFooter.replace('Verification:  ', '').replace('Verification: ', '')}
          </p>
        </div>
      )}
    </div>
  </section>
);


// ---- BOOKING STEPS ----
const BookingStepsSection = ({ data }) => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "rgb(201,169,97)" }}>{data.bookingLabel}</span>
        <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: "500", color: "rgb(26,26,26)", lineHeight: "1.15", marginBottom: "16px" }}>{data.bookingH2}</h2>
        {data.bookingDescription && <p className="text-[16px]" style={{ color: "rgb(107,107,107)" }}>{data.bookingDescription}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {(data.bookingSteps || []).map((step, i) => (
          <div key={i} className="p-7 rounded-[8px] border-t-4 flex flex-col gap-3" style={{ backgroundColor: "rgb(250,246,239)", borderTopColor: "rgb(201,169,97)" }}>
            <div style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "26px", fontWeight: "500", color: "rgb(201,169,97)" }}>{step.step}</div>
            <h3 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "16px", fontWeight: "500", color: "rgb(26,26,26)" }}>{step.h3}</h3>
            <p className="text-[13.5px] leading-[1.75]" style={{ color: "rgb(74,74,74)" }}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---- REVIEWS ----
const ReviewsSection = ({ reviews }) => {
  if (!reviews) return null;
  return (
    <section style={{ backgroundColor: reviews.bgColor === "bg-[#FFFFF]" ? "rgb(240,235,227)" : "rgb(250,246,239)" }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-[13px] font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: "rgb(201,169,97)" }}>{reviews.label}</span>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: "500", color: "rgb(26,26,26)", lineHeight: "1.15", marginBottom: "16px" }}>{reviews.title}</h2>
          {reviews.description && <p className="text-[16px]" style={{ color: "rgb(107,107,107)" }}>{reviews.description}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {(reviews.items || []).map((r, i) => (
            <div key={i} className="p-8 rounded-tr-[32px] rounded-[8px] shadow-md border flex flex-col" style={{ backgroundColor: "white", borderColor: "rgb(229,223,211)" }}>
              <div className="flex items-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="rgb(201,169,97)" color="rgb(201,169,97)" />)}
              </div>
              <p className="text-[16px] font-medium leading-relaxed mb-6 flex-1" style={{ color: "rgb(26,26,26)" }}>"{r.quote}"</p>
              <div className="pt-4 border-t" style={{ borderColor: "rgb(229,223,211)" }}>
                <p className="text-[14px] font-semibold" style={{ color: "rgb(26,26,26)" }}>{r.author}</p>
                {r.details && <p className="text-[12.5px] mt-1" style={{ color: "rgb(107,107,107)" }}>{r.details}</p>}
              </div>
            </div>
          ))}
        </div>
        {reviews.stats && (
          <div className="flex items-center justify-center gap-10 flex-wrap mb-8">
            {reviews.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: "40px", fontWeight: "500", color: "rgb(201,169,97)" }}>{s.value}</div>
                <p className="text-[13px] mt-2" style={{ color: "rgb(107,107,107)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        )}
        {reviews.buttonText && (
          <div className="text-center">
            <a href={reviews.buttonHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[6px] border font-medium text-[15px]" style={{ borderColor: "rgb(31,69,56)", color: "rgb(31,69,56)" }}>
              {reviews.buttonText}
            </a>
          </div>
        )}
        {reviews.disclaimer && (
          <p className="text-center text-[12px] leading-[1.7] mt-8 max-w-3xl mx-auto" style={{ color: "rgb(140,130,115)", fontStyle: "italic" }}>
            {reviews.disclaimer}
          </p>
        )}
      </div>
    </section>
  );
};

// ---- PRICING ----
const PricingSection = ({ pricing }) => {
  if (!pricing) return null;
  return (
    <section className="py-[64px] lg:py-[96px]" style={{ backgroundColor: "rgb(240,235,227)" }}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[12px] uppercase tracking-widest mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", fontStyle: "italic", color: "rgb(201,169,97)" }}>
            {pricing.label}
          </p>
          <h2 className="text-[36px] lg:text-[44px] mb-4" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", color: "rgb(26,26,26)" }}>
            {pricing.title}
          </h2>
          {pricing.subtitle && (
            <p className="text-[17px] max-w-[700px] mx-auto" style={{ fontFamily: "Inter, sans-serif", color: "rgb(107,107,107)" }}>
              {pricing.subtitle}
            </p>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-[8px] overflow-hidden shadow-sm mb-6">
          {/* Header row */}
          <div className="grid px-6 py-4 gap-4" style={{ gridTemplateColumns: "1fr auto auto", backgroundColor: "rgb(201,169,97)" }}>
            <span className="text-[13px] uppercase tracking-wide font-semibold" style={{ fontFamily: "Inter, sans-serif", color: "white" }}>Service</span>
            <span className="text-[13px] uppercase tracking-wide font-semibold w-28 text-center" style={{ fontFamily: "Inter, sans-serif", color: "white" }}>Duration</span>
            <span className="text-[13px] uppercase tracking-wide font-semibold w-40 text-right" style={{ fontFamily: "Inter, sans-serif", color: "white" }}>Starting Price</span>
          </div>
          {/* Data rows */}
          {(pricing.consultationRows || []).map((row, i) => (
            <div
              key={i}
              className="grid px-6 py-4 gap-4 items-center border-b"
              style={{
                gridTemplateColumns: "1fr auto auto",
                backgroundColor: i % 2 === 0 ? "white" : "rgb(251,247,241)",
                borderColor: "rgb(229,223,211)",
              }}
            >
              <span className="text-[14px] leading-snug" style={{ fontFamily: "Inter, sans-serif", color: "rgb(26,26,26)" }}>{row.type}</span>
              <span className="text-[13px] w-28 text-center" style={{ fontFamily: "Inter, sans-serif", color: "rgb(107,107,107)" }}>{row.duration}</span>
              <span className="text-[14px] font-medium w-40 text-right" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)" }}>{row.price}</span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        {pricing.footerNote && (
          <p className="text-[13px] leading-[1.7] mt-6 max-w-[900px] mx-auto text-center" style={{ fontFamily: "Inter, sans-serif", color: "rgb(140,130,115)" }}>
            {pricing.footerNote}
          </p>
        )}

        {/* CTAs */}
        {(pricing.ctaText || pricing.whatsappText) && (
          <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {pricing.ctaText && (
              <a
                href={pricing.ctaHref || '/book'}
                className="font-medium px-8 py-4 rounded-full transition-colors"
                style={{ backgroundColor: "rgb(201,169,97)", color: "white", fontFamily: "Inter, sans-serif" }}
              >
                {pricing.ctaText}
              </a>
            )}
            {pricing.whatsappText && (
              <a
                href={pricing.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[15px] underline transition-colors"
                style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", textDecorationColor: "rgb(201,169,97)" }}
              >
                {pricing.whatsappText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};


// ---- FAQ ----
const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  if (!faqs) return null;
  return (
    <section className="py-[64px] lg:py-[96px] bg-[#FAF6EF]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Title & Description */}
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase tracking-widest mb-4 block" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", fontWeight: "600" }}>
              {faqs.label}
            </span>
            <h2 className="text-[36px] lg:text-[44px] mb-6 leading-[1.1]" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", color: "rgb(26,26,26)" }}>
              {faqs.title}
            </h2>
            {faqs.description && (
              <p className="text-[17px] mb-10 leading-[1.6]" style={{ fontFamily: "Inter, sans-serif", color: "rgb(107,107,107)" }}>
                {faqs.description}
              </p>
            )}
            {faqs.buttonText && (
              <div>
                <a
                  href={faqs.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[6px] text-[15px] font-medium transition-colors"
                  style={{ backgroundColor: "rgb(48,87,70)", color: "white", fontFamily: "Inter, sans-serif" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  {faqs.buttonText}
                </a>
              </div>
            )}
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {(faqs.faqs || []).map((faq, i) => (
                <div key={i} className="border-b" style={{ borderColor: "rgb(229,223,211)" }}>
                  <button
                    className="w-full flex items-center justify-between py-6 text-left transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    id={`faq-${i}`}
                  >
                    <span className="text-[16px] font-medium pr-6" style={{ fontFamily: "Inter, sans-serif", color: "rgb(26,26,26)" }}>
                      {faq.question}
                    </span>
                    <span style={{ color: "rgb(201,169,97)", fontSize: "20px", fontWeight: "300" }}>
                      {openIndex === i ? '−' : '+'}
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="pb-6">
                      <p className="text-[15px] leading-[1.7]" style={{ fontFamily: "Inter, sans-serif", color: "rgb(107,107,107)" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ---- RELATED PAGES (IMAGE GRID) ----
export const AestheticianRelatedPages = ({ bgColor, label, title, description, linkText, linkHref, pages }) => {
  if (!pages || pages.length === 0) return null;
  return (
    <section className={`py-[64px] lg:py-[96px] ${bgColor || 'bg-white'}`}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-2xl">
            <span className="text-[12px] uppercase tracking-widest mb-4 block" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", fontWeight: "600" }}>
              {label}
            </span>
            <h2 className="text-[36px] lg:text-[44px] leading-[1.1] mb-2" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", color: "rgb(26,26,26)" }}>
              {title}
            </h2>
          </div>
          {linkText && (
            <Link href={linkHref} className="text-[14px] font-medium underline mt-4 md:mt-0" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", textDecorationColor: "rgb(201,169,97)" }}>
              {linkText}
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page, i) => (
            <Link href={page.href || '#'} key={i} className="flex flex-col rounded-[8px] overflow-hidden hover:opacity-90 transition-opacity" style={{ backgroundColor: "rgb(250,246,239)" }}>
              <div className="h-[200px] w-full bg-gray-200 relative">
                <img src={page.image || '/images/placeholder.jpg'} alt={page.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                {page.category && (
                  <span className="text-[10px] uppercase tracking-wider mb-2" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", fontWeight: "600" }}>
                    {page.category}
                  </span>
                )}
                <h3 className="text-[18px] mb-3 leading-snug" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "500", color: "rgb(26,26,26)" }}>
                  {page.title}
                </h3>
                <p className="text-[14px] leading-[1.6] mb-6 flex-1" style={{ fontFamily: "Inter, sans-serif", color: "rgb(107,107,107)" }}>
                  {page.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---- READING / BLOG (IMAGE GRID) ----
export const ReadingSection = ({ data }) => {
  if (!data.reading || data.reading.length === 0) return null;
  return (
    <section className="py-[64px] lg:py-[96px] bg-[#FAF6EF]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <span className="text-[12px] uppercase tracking-widest mb-4 block" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", fontWeight: "600" }}>
          {data.readingLabel}
        </span>
        <h2 className="text-[36px] lg:text-[44px] mb-10 leading-[1.1]" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "400", color: "rgb(26,26,26)" }}>
          {data.readingH2}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.reading.map((item, i) => (
            <div key={i} className="flex flex-col bg-white rounded-[8px] overflow-hidden shadow-sm">
              <div className="h-[240px] w-full bg-gray-200 relative">
                <img src={item.image || '/images/placeholder.jpg'} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[20px] mb-3 leading-snug" style={{ fontFamily: "Fraunces, Georgia, serif", fontWeight: "500", color: "rgb(26,26,26)" }}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[15px] leading-[1.6] mb-6 flex-1" style={{ fontFamily: "Inter, sans-serif", color: "rgb(107,107,107)" }}>
                    {item.description}
                  </p>
                )}
                <Link href={item.href || '#'} className="text-[13px] font-medium mt-auto underline" style={{ fontFamily: "Inter, sans-serif", color: "rgb(201,169,97)", textDecorationColor: "rgb(201,169,97)" }}>
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---- MAIN TEMPLATE ----
const AestheticianPageTemplate = ({ data }) => {
  return (
    <>
      {/* Hero  -  identical layout to DoctorPageTemplate, Figma-matched */}
      <AyurvedaHero
        bgColor="bg-[#FAF6EF]"
        breadcrumb={data.breadcrumb || []}
        label={data.heroBadge}
        title={data.h1}
        description={data.heroDescription}
        image={data.image}
        alt={data.alt}
        primaryCTA={data.primaryCtaText}
        secondaryCTA={data.secondaryCtaText}
        primaryCTAHref={data.primaryCtaHref || '/book'}
        secondaryCTAHref={data.secondaryCtaHref}
        trustSignals={data.trustSignals || []}
        floatingCard={data.floatingCard || {}}
      />
      <QuickAnswerSection data={data} />
      <SciaticaTreatment
        showBorderLeft={false}
        rightContentStyle="tags"
        bgColor="bg-[#F0EBE3]"
        data={{
          treatment: {
            label: `ABOUT ${(data.name || '').toUpperCase()}`,
            title: data.philosophyH2 || 'Clinical philosophy and practice.',
            intro: null,
            steps: (data.philosophySections || []).map((sec) => ({
              title: sec.h3,
              description: sec.content,
            })),
            footer: data.philosophyQuote || null,
          },
          rightContent: {
            image: data.secondaryImage || data.image,
            alt: data.secondaryAlt || data.alt || `${data.name} at Vedara Care JVC Dubai`,
          },
        }}
      />
      <TreatmentCategoriesSection data={data} />
      <TopTreatmentsSection data={data} />
      <CredentialsSection data={data} />
      <BookingStepsSection data={data} />
      <ReviewsSection reviews={data.reviews} />
      <PricingSection pricing={data.pricing} />
      <FAQSection faqs={data.faqs} />
      {data.location && <TreatmentLocation {...data.location} />}
      {data.cta && <FinalCTA {...data.cta} />}
      {data.relatedPages && <AestheticianRelatedPages {...data.relatedPages} />}
      <ReadingSection data={data} />
    </>
  );
};

export default AestheticianPageTemplate;
