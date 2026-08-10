import { useEffect, useRef } from "react";
import { SciaticaTypes } from "./SciaticaSections";

const STEPS = [
  { tag: "Before treatment", title: "Skin assessment", body: "Before anything touches your face, our dermatology team looks at your skin type, current concerns and any sensitivities — deciding whether HydraFacial is right for you today, or whether the protocol needs adjusting." },
  { tag: "Prep", title: "Cleansing", body: "Skin is cleaned to remove makeup, sunscreen and surface oil, creating a clean base for every step that follows." },
  { tag: "Resurfacing", title: "Exfoliation", body: "A gentle exfoliating pass lifts dead skin cells from the surface — part of what gives HydraFacial its reputation for leaving skin feeling smoother almost immediately." },
  { tag: "Deep clean", title: "Extraction", body: "Controlled, low-pressure suction draws out debris sitting inside pores — the step most associated with visibly clearer-looking pores after treatment." },
  { tag: "Replenish", title: "Hydration", body: "Serums are applied to replenish moisture, chosen around your specific concern — whether that's dehydration, dullness or general maintenance." },
  { tag: "Tailored", title: "Customised additions", body: "Depending on your skin and the clinic's assessment, additional targeted serums or steps may be layered in for a more personalised result." },
  { tag: "After treatment", title: "Aftercare guidance", body: "You'll leave knowing exactly how to care for your skin over the next day or two, including what to avoid.", final: true },
];

const BENEFITS = [
  { title: "Deeper cleansing", body: "Reaches oil and debris sitting inside pores, rather than just the surface — beyond what a typical at-home routine can do.", icon: <path d="M4 6l4 4M4 6l-1 5 5-1M20 6l-4 4M20 6l1 5-5-1M12 3v6M12 21v-6M4 18l4-4M20 18l-4-4" /> },
  { title: "Gentle exfoliation", body: "Leaves skin noticeably smoother, typically without the redness associated with more aggressive peels.", icon: <><path d="M3 12c3-4 6-6 9-6s6 2 9 6c-3 4-6 6-9 6s-6-2-9-6z" /><circle cx="12" cy="12" r="2.4" /></> },
  { title: "Professional extraction", body: "Done under controlled clinical conditions — far safer than picking or squeezing at home, which risks scarring and irritation.", icon: <path d="M12 3l7 5v6a7 7 0 01-14 0V8l7-5z" /> },
  { title: "Real hydration", body: "Even oily skin can be dehydrated underneath — a distinction that trips a lot of people up. HydraFacial addresses both.", icon: <path d="M12 2.5c3 4 6 8 6 12a6 6 0 01-12 0c0-4 3-8 6-12z" /> },
  { title: "Fresher complexion", body: "A visible short-term refresh, which is why many patients like scheduling it before an event or occasion.", icon: <><path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /><circle cx="12" cy="12" r="3.4" /></> },
  { title: "No real downtime", body: "Most patients go straight back to their day right after the appointment — nothing to plan around.", icon: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></> },
];

const hydrafacialBenefitsData = {
  bgColor: "bg-white",
  cardBg: "bg-[#F8F5F0]",
  label: "WHY PATIENTS CHOOSE IT",
  title: "Benefits of HydraFacial",
  description: "Used appropriately on suitable skin, HydraFacial can offer real short-term benefits — though results vary, and no cosmetic treatment works identically for everyone.",
  types: BENEFITS.map((b, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: b.title,
    description: b.body,
  })),
  footer: "",
};

const FIT_CHIPS = [
  "Oily or combination skin with congestion",
  "Dull-looking or tired skin",
  "Blackheads & clogged pores",
  "Dehydrated skin despite an oily surface",
  "Uneven texture",
  "Mild acne-prone skin",
  "Early, subtle signs of ageing",
];

const VISIT_STEPS = [
  { num: "01", title: "Consultation", body: "The clinician reviews your skin history, current concerns, and any medications or recent procedures that might affect suitability." },
  { num: "02", title: "Treatment", body: "The cleansing, exfoliation, extraction and hydration sequence follows, with serums and intensity adjusted for your skin." },
  { num: "03", title: "Aftercare & next steps", body: "Guidance is given before you leave, and if you have ongoing skin concerns, a follow-up conversation may be recommended." },
];

const AFTERCARE = [
  "Cleanse gently for the first day or two — avoid harsh scrubs or aggressive exfoliants.",
  "Apply a suitable moisturiser to support the skin as it settles.",
  "Use sunscreen, since freshly treated skin can be slightly more sensitive to sun exposure.",
  "Avoid picking at the skin, even if a few areas feel slightly more reactive than usual.",
  "Hold off on strong new actives (retinoids, acids) for a short period, then reintroduce gradually.",
  "Follow any specific instructions your clinician gives you — these can vary by skin and protocol.",
];

const NOT_APPROPRIATE = [
  "Active skin infections",
  "Open wounds or broken skin",
  "Significant current irritation or inflammation",
  "Severe, active inflammatory acne",
  "Recent aggressive procedures (peels, lasers, injectables)",
  "Certain diagnosed dermatological conditions",
];

const CHOOSE_LOOK_FOR = [
  { label: "Qualified professionals", desc: "Is the treatment performed or supervised by trained, licensed staff?" },
  { label: "A real skin assessment", desc: "Does the clinic actually look at your skin and ask about your history, or just book you straight into a treatment slot?" },
  { label: "Customisation", desc: "Is the protocol adjusted to your skin, or is it a one-size-fits-all session?" },
  { label: "Hygiene standards", desc: "Are single-use or properly sterilised tips and tools used?" },
  { label: "Transparent pricing", desc: "Are you given a clear breakdown before you commit, rather than a vague number?" },
  { label: "Aftercare guidance", desc: "Do they explain what to do (and avoid) after treatment?" },
  { label: "Realistic expectations", desc: "Does the clinic explain limitations honestly, or promise results that sound too good to be true?" },
  { label: "A convenient, verified location", desc: "For JVC residents, a clinic within the community can make regular visits more practical." },
];

const RED_FLAGS_TEXT = "Red flags worth watching for: guaranteed or permanent results, claims of \"permanently removing\" pores or pigmentation, no skin assessment before treatment, pressure to buy large treatment packages on the spot, unclear staff qualifications, and heavily edited or misleading before-and-after photos. Any of these should make you pause and ask more questions before booking.";

const AREAS = ["JVC", "Al Barsha South", "Jumeirah Village Triangle (JVT)", "Dubai Sports City", "Motor City", "Dubai Hills"];

const REGULAR_FACIAL_ROWS = [
  ["Cleansing", "Multi-step, device-assisted", "Manual cleansing"],
  ["Exfoliation", "Built into the protocol", "Sometimes included, varies"],
  ["Extraction", "Controlled suction-based", "Often manual, technique varies"],
  ["Hydration", "Targeted serums, dedicated step", "Usually a finishing moisturiser"],
  ["Treatment approach", "Structured, sequential", "Often relaxation-focused"],
  ["Skin assessment", "Typically included beforehand", "Not always formalised"],
];

const CHEMICAL_PEEL_ROWS = [
  ["Approach", "Mechanical exfoliation, extraction, hydration", "Controlled chemical exfoliation"],
  ["Exfoliation", "Gentle, lower intensity", "Ranges from light to deep"],
  ["Extraction", "Included as a dedicated step", "Not typically included"],
  ["Main objective", "Refresh, hydrate, clear congestion", "Resurface skin, target concerns"],
  ["Downtime", "Minimal for most patients", "None to noticeable, by depth"],
];

const OTHER_TREATMENTS = [
  { name: "Microneedling", body: " — controlled micro-injuries to stimulate repair; generally more intensive with more downtime." },
  { name: "Laser treatments", body: " — target specific concerns like pigmentation or vascular issues, with a different risk and downtime profile." },
  { name: "Medical acne treatment", body: " — addresses the underlying causes of active acne, which HydraFacial isn't designed to do." },
  { name: "Skin boosters", body: " — injectable hydration beneath the skin's surface, a different mechanism entirely." },
  { name: "Traditional facials", body: " — generally lower-intensity and more relaxation-oriented." },
];

export default function HydraFacialSection() {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("hf-in"); }),
      { threshold: 0.2 }
    );
    revealRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
        .hf-root{
          --ink:#171717; --ink-soft:#4A4A4A; --mist:#FAF8F5; --surface:#FFFFFF;
          --sage:#184C3A; --sage-deep:#C9A55A; --sage-light:#4A7C59;
          --clay:#C9A961; --clay-soft:#FAF7F2; --clay-deep:#A2754E;
          --water:#5F8A7D; --water-soft:#EBF5F1; --line:#E5DFD3; --radius:18px;
          font-family:'Inter', sans-serif; color:var(--ink); background:var(--mist);
        }
        .hf-root *{box-sizing:border-box;}
        .hf-root img{max-width:100%;display:block;}
        .hf-wrap{max-width:1120px;margin:0 auto;padding:0 32px;}
        .hf-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--sage);}
        .hf-eyebrow::before{content:"";width:22px;height:1px;background:var(--clay);display:inline-block;}
        .hf-root h1,.hf-root h2,.hf-root h3{font-family:'Fraunces', serif;font-weight:500;color:var(--ink);margin:0;line-height:1.15;}
        .hf-root section p{color:var(--ink-soft);}

        .hf-intro{padding:96px 0 0;}
        .hf-intro-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center;}
        .hf-intro h1{font-size:clamp(34px,4.6vw,54px);margin-top:18px;letter-spacing:-.01em;}
        .hf-intro p{font-size:17px;line-height:1.7;margin:0;}
        .hf-intro-media{border-radius:22px;overflow:hidden;aspect-ratio:4/5;background:linear-gradient(160deg,var(--water-soft),var(--clay-soft));position:relative;}
        .hf-intro-media img{width:100%;height:100%;object-fit:cover;}
        .hf-intro-media figcaption{position:absolute;left:18px;bottom:18px;background:rgba(24,76,58,.82);color:#F5F3EC;font-size:12.5px;padding:8px 14px;border-radius:100px;}
        .hf-wave{display:block;width:100%;height:64px;margin-top:56px;}

        .hf-process{background:var(--sage-deep);padding:88px 0 100px;position:relative;overflow:hidden;}
        .hf-process::before{content:"";position:absolute;top:-120px;right:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle at center,rgba(95,138,125,.18),transparent 70%);}
        .hf-process .hf-eyebrow{color:var(--water-soft);}
        .hf-process h2{color:#F5F3EC;font-size:clamp(28px,3.4vw,38px);margin-top:16px;}
        .hf-process-sub{color:#C9D6CD;max-width:520px;margin-top:14px;font-size:16px;line-height:1.65;}
        .hf-rail{position:relative;margin-top:64px;}
        .hf-rail::before{content:"";position:absolute;left:29px;top:8px;bottom:8px;width:1px;background:linear-gradient(to bottom,rgba(255,255,255,.05),rgba(255,255,255,.32) 8%,rgba(255,255,255,.32) 92%,rgba(255,255,255,.05));}
        .hf-step{position:relative;display:grid;grid-template-columns:60px 1fr;gap:28px;padding:26px 0;opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease;}
        .hf-step.hf-in{opacity:1;transform:none;}
        .hf-step-marker{width:60px;height:60px;border-radius:50%;background:var(--sage);border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;font-family:'Fraunces', serif;font-size:18px;color:#F5F3EC;position:relative;z-index:1;}
        .hf-step.hf-final .hf-step-marker{background:var(--clay);}
        .hf-step-body{padding-top:6px;}
        .hf-step-body h3{color:#F5F3EC;font-size:20px;font-weight:500;margin-bottom:8px;}
        .hf-step-body p{color:#C9D6CD;font-size:15.5px;line-height:1.7;margin:0;max-width:640px;}
        .hf-step-tag{display:inline-block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--water-soft);background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);padding:3px 9px;border-radius:100px;margin-bottom:10px;}
        .hf-process-close{margin-top:56px;padding-top:32px;border-top:1px solid rgba(255,255,255,.14);color:#C9D6CD;font-size:15.5px;font-style:italic;max-width:620px;line-height:1.7;}

        .hf-image-band{padding:88px 0;}
        .hf-image-band-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
        .hf-image-tile{border-radius:var(--radius);overflow:hidden;aspect-ratio:5/4;position:relative;background:var(--water-soft);}
        .hf-image-tile img{width:100%;height:100%;object-fit:cover;}
        .hf-image-tile.hf-tall{aspect-ratio:5/6.4;}
        .hf-image-copy p{font-size:16px;line-height:1.75;margin-top:14px;}

        .hf-section-head{max-width:640px;margin-bottom:44px;}
        .hf-section-head h2{font-size:clamp(26px,3.2vw,34px);margin-top:16px;}
        .hf-section-head p{font-size:15.5px;line-height:1.7;margin-top:12px;}

        .hf-benefits{padding:96px 0 60px;}
        .hf-card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
        .hf-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:30px 26px;opacity:0;transform:translateY(14px);transition:opacity .55s ease,transform .55s ease,border-color .25s ease,box-shadow .25s ease;}
        .hf-card.hf-in{opacity:1;transform:none;}
        .hf-card:hover{border-color:var(--sage);box-shadow:0 16px 32px -22px rgba(24,76,58,.15);}
        .hf-card-icon{width:42px;height:42px;border-radius:11px;background:var(--water-soft);display:flex;align-items:center;justify-content:center;margin-bottom:18px;}
        .hf-card-icon svg{width:20px;height:20px;stroke:var(--sage);}
        .hf-card h3{font-size:17px;font-weight:600;font-family:'Inter', sans-serif;margin-bottom:8px;color:var(--ink);}
        .hf-card p{font-size:14.5px;line-height:1.65;margin:0;}
        .hf-disclaimer{margin-top:52px;background:var(--clay-soft);border:1px solid var(--line);border-radius:var(--radius);padding:26px 30px;display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:flex-start;}
        .hf-disclaimer .hf-dot{width:9px;height:9px;border-radius:50%;background:var(--clay);margin-top:8px;}
        .hf-disclaimer p{margin:0;color:var(--ink-soft);font-size:14.5px;line-height:1.7;}
        .hf-disclaimer strong{color:var(--ink);}

        .hf-fit-section{padding:80px 0;}
        .hf-fit-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:56px;align-items:start;}
        .hf-chip-cloud{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;}
        .hf-chip{background:var(--surface);border:1px solid var(--line);padding:10px 16px;border-radius:100px;font-size:14px;color:var(--ink);font-weight:500;}
        .hf-fit-note{margin-top:24px;font-size:14.5px;line-height:1.7;border-left:2px solid var(--clay);padding-left:18px;}

        .hf-visit{background:var(--surface);padding:88px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
        .hf-mini-flow{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px;}
        .hf-mini-card{padding:28px 24px;border:1px solid var(--line);border-radius:var(--radius);background:var(--mist);}
        .hf-mini-num{font-family:'Fraunces', serif;font-size:15px;color:var(--clay);margin-bottom:12px;}
        .hf-mini-card h3{font-size:17px;font-family:'Inter', sans-serif;font-weight:600;margin-bottom:8px;}
        .hf-mini-card p{font-size:14.5px;line-height:1.65;margin:0;}
        .hf-visit-note{margin-top:32px;background:var(--water-soft);border:1px solid var(--line);border-radius:var(--radius);padding:22px 26px;font-size:14.5px;line-height:1.7;color:var(--sage);}

        .hf-results{padding:88px 0;}
        .hf-stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px;}
        .hf-stat-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:28px 26px;}
        .hf-stat-card h3{font-size:16px;font-family:'Inter', sans-serif;font-weight:600;margin-bottom:10px;color:var(--sage);}
        .hf-stat-card p{font-size:14.5px;line-height:1.65;margin:0;}
        .hf-stat-card ul{margin:8px 0 0;padding-left:18px;font-size:14px;line-height:1.75;color:var(--ink-soft);}

        .hf-aftercare{background:var(--surface);padding:88px 0;border-top:1px solid var(--line);}
        .hf-check-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px 32px;margin-top:40px;}
        .hf-check-item{display:flex;gap:14px;align-items:flex-start;}
        .hf-check-ico{width:26px;height:26px;border-radius:50%;background:var(--water-soft);flex:none;display:flex;align-items:center;justify-content:center;margin-top:1px;}
        .hf-check-ico svg{width:13px;height:13px;stroke:var(--sage);}
        .hf-check-item p{margin:0;font-size:14.5px;line-height:1.65;}

        .hf-safety{padding:88px 0;}
        .hf-warn-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:44px;}
        .hf-warn-card{border-radius:var(--radius);padding:30px 28px;border:1px solid var(--line);}
        .hf-warn-card.hf-ok{background:var(--water-soft);border-color:var(--line);}
        .hf-warn-card.hf-stop{background:var(--clay-soft);border-color:var(--line);}
        .hf-warn-card h3{font-size:17px;font-family:'Inter', sans-serif;font-weight:600;margin-bottom:12px;}
        .hf-warn-card.hf-ok h3{color:var(--sage);}
        .hf-warn-card.hf-stop h3{color:var(--clay-deep);}
        .hf-warn-card ul{margin:0;padding-left:18px;font-size:14.5px;line-height:1.8;}
        .hf-warn-card.hf-ok ul{color:var(--ink-soft);}
        .hf-warn-card.hf-stop ul{color:var(--ink-soft);}
        .hf-warn-card p{font-size:14.5px;line-height:1.7;margin:0;}
        .hf-warn-card.hf-ok p{color:var(--ink-soft);}
        .hf-warn-card.hf-stop p{color:var(--ink-soft);}

        .hf-compare{background:var(--surface);padding:88px 0;border-top:1px solid var(--line);}
        .hf-compare-block{margin-top:44px;}
        .hf-compare-block + .hf-compare-block{margin-top:56px;}
        .hf-compare-block h3{font-family:'Inter', sans-serif;font-weight:600;font-size:16px;color:var(--sage);margin-bottom:14px;}
        .hf-compare-table{width:100%;border-collapse:collapse;font-size:14px;}
        .hf-compare-table th,.hf-compare-table td{text-align:left;padding:13px 16px;border-bottom:1px solid var(--line);}
        .hf-compare-table th{font-family:'Inter', sans-serif;font-weight:600;color:var(--ink);background:var(--mist);font-size:12.5px;letter-spacing:.04em;text-transform:uppercase;}
        .hf-compare-table td{color:var(--ink-soft);}
        .hf-compare-table tr td:first-child{color:var(--ink);font-weight:500;}
        .hf-compare-foot{font-size:14px;line-height:1.7;margin-top:16px;color:var(--ink-soft);}
        .hf-other-list{margin-top:32px;}
        .hf-other-list ul{list-style:none;margin:0;padding:0;display:grid;gap:14px;}
        .hf-other-list li{padding:16px 20px;background:var(--mist);border-radius:12px;font-size:14.5px;line-height:1.65;}
        .hf-other-list li strong{color:var(--ink);}

        .hf-cost{padding:72px 0;}
        .hf-cost-note{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:34px 36px;display:grid;grid-template-columns:auto 1fr;gap:22px;align-items:flex-start;}
        .hf-cost-note .hf-badge{width:44px;height:44px;border-radius:12px;background:var(--sage-deep);display:flex;align-items:center;justify-content:center;flex:none;}
        .hf-cost-note .hf-badge svg{width:20px;height:20px;stroke:#F5F3EC;}
        .hf-cost-note p{margin:0;font-size:15px;line-height:1.75;}

        .hf-choose{background:#184C3A;padding:88px 0;}
        .hf-choose .hf-eyebrow{color:var(--clay);}
        .hf-choose h2{color:#F5F3EC;font-size:clamp(26px,3.2vw,34px);margin-top:16px;}
        .hf-choose > .hf-wrap > p{color:#C9D6CD;max-width:600px;margin-top:12px;font-size:15.5px;line-height:1.7;}
        .hf-choose-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px;margin-top:44px;align-items:start;}
        .hf-choose-image{border-radius:var(--radius);overflow:hidden;aspect-ratio:4/5;position:relative;}
        .hf-choose-image img{width:100%;height:100%;object-fit:cover;}
        .hf-choose-list{list-style:none;margin:0;padding:0;display:grid;gap:14px;}
        .hf-choose-list li{display:flex;gap:12px;font-size:14.5px;line-height:1.6;color:#DCE6E0;}
        .hf-choose-list li::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--clay);margin-top:8px;flex:none;}
        .hf-flag-list li::before{background:#E57373;}
        .hf-choose-sub{font-family:'Inter', sans-serif;font-weight:600;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#F5F3EC;margin-bottom:16px;display:block;}

        .hf-info{padding:88px 0;}
        .hf-info-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;}
        .hf-info-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:30px 28px;}
        .hf-info-card h3{font-size:18px;font-weight:500;margin-bottom:10px;}
        .hf-info-card p{font-size:14.5px;line-height:1.7;margin:0;}
        .hf-info-card .hf-tag{display:inline-block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--sage);font-weight:600;margin-bottom:10px;}
        .hf-location-strip{margin-top:24px;display:flex;flex-wrap:wrap;gap:10px;}
        .hf-location-chip{font-size:13px;padding:8px 14px;border-radius:100px;background:var(--mist);border:1px solid var(--line);color:var(--ink-soft);}

        .hf-cta{margin:80px 0 100px;background:var(--surface);border:1px solid var(--line);border-radius:24px;padding:52px 48px;display:grid;grid-template-columns:1.3fr auto;align-items:center;gap:32px;}
        .hf-cta h3{font-size:clamp(22px,2.6vw,28px);max-width:480px;}
        .hf-cta p{color:var(--ink-soft);font-size:15px;margin:10px 0 0;}
        .hf-cta-actions{display:flex;gap:12px;flex-wrap:wrap;}
        .hf-btn{display:inline-flex;align-items:center;gap:8px;padding:14px 24px;border-radius:100px;font-size:14.5px;font-weight:600;text-decoration:none;white-space:nowrap;transition:transform .2s ease,box-shadow .2s ease,background .2s ease;}
        .hf-btn-primary{background:var(--sage-deep);color:#F5F3EC;}
        .hf-btn-primary:hover{background:var(--sage);transform:translateY(-1px);box-shadow:0 10px 22px -12px rgba(24,76,58,.55);}
        .hf-btn-ghost{background:transparent;border:1px solid var(--line);color:var(--ink);}
        .hf-btn-ghost:hover{border-color:var(--sage);transform:translateY(-1px);}

        @media (max-width:900px){
          .hf-intro-grid,.hf-fit-grid,.hf-image-band-grid,.hf-warn-grid,.hf-choose-grid,.hf-info-grid{grid-template-columns:1fr;}
          .hf-mini-flow,.hf-stat-grid,.hf-card-grid{grid-template-columns:repeat(2,1fr);}
          .hf-check-grid{grid-template-columns:1fr;}
          .hf-cta{grid-template-columns:1fr;}
        }
        @media (max-width:620px){
          .hf-wrap{padding:0 20px;}
          .hf-mini-flow,.hf-stat-grid,.hf-card-grid{grid-template-columns:1fr;}
          .hf-step{grid-template-columns:44px 1fr;gap:18px;}
          .hf-step-marker{width:44px;height:44px;font-size:14px;}
          .hf-rail::before{left:21px;}
          .hf-disclaimer{grid-template-columns:1fr;}
        }
      `}</style>


      {/* IMAGE BAND */}


      {/* BENEFITS */}
      <SciaticaTypes
        bgColor={hydrafacialBenefitsData.bgColor}
        cardBg={hydrafacialBenefitsData.cardBg}
        label={hydrafacialBenefitsData.label}
        title={hydrafacialBenefitsData.title}
        description={hydrafacialBenefitsData.description}
        types={hydrafacialBenefitsData.types}
        footer={hydrafacialBenefitsData.footer}
        gridCols="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        typicalSignsLabel="TYPICAL BENEFITS:"
        borderPosition="left"
      />

      {/* WHO MAY BENEFIT */}
      <section className="hf-fit-section">
        <div className="hf-wrap">
          <div className="hf-fit-grid">
            <div>
              <span className="hf-eyebrow">Is it right for you</span>
              <h2 style={{ fontSize: "clamp(26px,3.2vw,34px)", marginTop: 16 }}>Who may benefit from HydraFacial</h2>
              <p className="hf-fit-note">Whether HydraFacial is genuinely the right fit depends on your specific skin, which is why an in-person assessment matters more than a generic recommendation online.</p>
            </div>
            <div>
              <div className="hf-chip-cloud">
                {FIT_CHIPS.map((chip) => (
                  <span key={chip} className="hf-chip">{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="hf-visit">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <span className="hf-eyebrow">Your visit</span>
            <h2>What to expect during HydraFacial in JVC</h2>
            <p>A typical visit starts with a short consultation, moves into the treatment itself, and ends with clear aftercare guidance before you leave.</p>
          </div>
          <div className="hf-mini-flow">
            {VISIT_STEPS.map((s) => (
              <div key={s.num} className="hf-mini-card">
                <div className="hf-mini-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="hf-visit-note">
            If your skin shows signs of active infection, significant irritation, or a flare-up of an
            existing condition, a responsible provider should be willing to postpone or modify the
            treatment rather than proceeding regardless. Appointment length varies by protocol and
            customisation — your consultation is the right place to get an accurate estimate.
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="hf-results">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <span className="hf-eyebrow">Realistic expectations</span>
            <h2>Results, and how long they last</h2>
            <p>These are cosmetic, largely short-to-medium-term effects rather than permanent changes to the skin.</p>
          </div>
          <div className="hf-stat-grid">
            <div className="hf-stat-card">
              <h3>What most patients notice</h3>
              <p>Smoother-textured, more hydrated-looking skin and a temporary sense of brightness shortly after the session. Pores may look cleaner and dullness often looks reduced. How noticeable this is varies from person to person.</p>
            </div>
            <div className="hf-stat-card">
              <h3>How long it lasts</h3>
              <p>Depends on several factors together:</p>
              <ul>
                <li>Your skin type &amp; oil production</li>
                <li>Day-to-day skincare routine</li>
                <li>Sun exposure &amp; hydration habits</li>
                <li>How your skin responds to treatment</li>
              </ul>
            </div>
            <div className="hf-stat-card">
              <h3>How often to book</h3>
              <p>Best decided with your provider rather than a generic rule — it depends on your skin condition, sensitivity, goals, and whether you're combining it with other treatments. Some book ahead of events; others build it into regular maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="hf-aftercare">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <span className="hf-eyebrow">After your session</span>
            <h2>HydraFacial aftercare</h2>
            <p>Simple, but it matters for getting the most out of your treatment.</p>
          </div>
          <div className="hf-check-grid">
            {AFTERCARE.map((item) => (
              <div key={item} className="hf-check-item">
                <span className="hf-check-ico">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="hf-safety">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <span className="hf-eyebrow">Safety &amp; suitability</span>
            <h2>Side effects, and when to pause</h2>
            <p>Most patients tolerate HydraFacial well, but it's worth knowing both sides before you book.</p>
          </div>
          <div className="hf-warn-grid">
            <div className="hf-warn-card hf-ok">
              <h3>Possible, usually mild, side effects</h3>
              <p>Mild redness, a feeling of tightness, or short-lived sensitivity — particularly right after exfoliation and extraction. These usually settle on their own, though already-irritated or sensitised skin may react more noticeably.</p>
            </div>
            <div className="hf-warn-card hf-stop">
              <h3>When HydraFacial may not be appropriate</h3>
              <ul>
                {NOT_APPROPRIATE.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="hf-compare">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <span className="hf-eyebrow">Choosing the right treatment</span>
            <h2>HydraFacial compared</h2>
            <p>Neither option is universally "better" — it comes down to your skin and what you're looking for.</p>
          </div>

          <div className="hf-compare-block">
            <h3>HydraFacial vs Regular Facial</h3>
            <table className="hf-compare-table">
              <thead><tr><th>Feature</th><th>HydraFacial</th><th>Traditional Facial</th></tr></thead>
              <tbody>
                {REGULAR_FACIAL_ROWS.map((row) => (
                  <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="hf-compare-block">
            <h3>HydraFacial vs Chemical Peel</h3>
            <table className="hf-compare-table">
              <thead><tr><th>Feature</th><th>HydraFacial</th><th>Chemical Peel</th></tr></thead>
              <tbody>
                {CHEMICAL_PEEL_ROWS.map((row) => (
                  <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="hf-compare-foot">
              Choosing between the two comes down to your specific skin concerns — a proper consultation
              should walk through this rather than a generic comparison. Our chemical peel page has more
              detail if that's a treatment you're also considering.
            </p>
          </div>

          <div className="hf-other-list">
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, color: "var(--sage-deep)", marginBottom: 14 }}>
              HydraFacial vs other skin treatments
            </h3>
            <ul>
              {OTHER_TREATMENTS.map((t) => (
                <li key={t.name}><strong>{t.name}</strong>{t.body}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="hf-cost">
        <div className="hf-wrap">
          <div className="hf-cost-note">
            <span className="hf-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 12h6M12 9v6" /></svg>
            </span>
            <p>
              <strong style={{ color: "var(--ink)" }}>HydraFacial cost in JVC.</strong> We won't list a
              "starting from" price here, because it wouldn't be accurate. Pricing depends on the
              protocol used, your skin's condition, any additional customised steps, and how many
              sessions your provider recommends. The most reliable way to get an accurate cost is to
              book a consultation, where your clinician outlines the recommended plan and pricing for
              your skin.
            </p>
          </div>
        </div>
      </section>

      {/* CHOOSE A CLINIC */}
      <section className="hf-choose">
        <div className="hf-wrap">
          <span className="hf-eyebrow">Before you book</span>
          <h2>How to choose a HydraFacial clinic in JVC</h2>
          <p>If you're comparing providers in JVC, a few things are worth checking before you book:</p>
          <div className="hf-choose-grid">
            <div style={{ gridColumn: '1 / 3' }}>
              <span className="hf-choose-sub">Look for</span>
              <ul className="hf-choose-list" style={{ gridTemplateColumns: '1fr 1fr', display: 'grid' }}>
                {CHOOSE_LOOK_FOR.map((item) => (
                  <li key={item.label}>
                    <span style={{ lineHeight: '1.5' }}>
                      <strong style={{ color: '#F5F3EC', display: 'block', marginBottom: 2 }}>{item.label}.</strong>
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 32, padding: '20px 24px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, borderLeft: '3px solid #E57373' }}>
                <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#E57373', marginBottom: 10 }}>Red flags</span>
                <p style={{ margin: 0, color: '#C9D6CD', fontSize: 14.5, lineHeight: 1.7 }}>{RED_FLAGS_TEXT}</p>
              </div>
            </div>
            <div className="hf-choose-image">
              <img src="/images/panchakarma-dubai-hero.webp" alt="HydraFacial treatment at Vedara Care clinic in JVC Dubai" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY VEDARA / MEN & WOMEN / EVENTS / LOCATION */}
      <section className="hf-info">
        <div className="hf-wrap">
          <div className="hf-section-head">
            <span className="hf-eyebrow">The Vedara approach</span>
            <h2>Why patients choose Vedara Care for HydraFacial</h2>
            <p>Dermatology is one of our core services alongside physiotherapy, Ayurveda and home healthcare — all under one roof in JVC.</p>
          </div>
          <div className="hf-info-grid">
            <div className="hf-info-card">
              <span className="hf-tag">A clinic, not a salon</span>
              <h3>Treatment inside a healthcare setting</h3>
              <p>Your HydraFacial is delivered within a proper dermatology clinic, with a skin assessment built into the process and the option to raise other skin concerns in the same visit.</p>
            </div>
            <div className="hf-info-card">
              <span className="hf-tag">Your skin, not a generic protocol</span>
              <h3>A plan built around your concerns</h3>
              <p>We start with your skin as it actually is, then build a plan around your goals — occasional maintenance, event preparation, or ongoing management alongside another dermatology treatment.</p>
            </div>
            <div className="hf-info-card">
              <span className="hf-tag">For men &amp; women</span>
              <h3>Concerns we commonly see</h3>
              <p><strong>Men</strong> often come in for oily skin, congestion and shave-related irritation. <strong>Women</strong> often mention combination skin, makeup-related congestion, an oily T-zone and dehydration, with hormonal changes factored into the assessment. Either way, we assess the skin in front of us, not assumptions.</p>
            </div>
            <div className="hf-info-card">
              <span className="hf-tag">Before an event</span>
              <h3>Planning around a wedding, shoot or holiday</h3>
              <p>Book with a little buffer rather than the day before, so you can see how your individual skin responds. We won't promise an instant, guaranteed glow — response genuinely varies — but a well-timed session is a reasonable part of preparation.</p>
            </div>
          </div>
          <div className="hf-location-strip">
            {AREAS.map((area) => <span key={area} className="hf-location-chip">{area}</span>)}
          </div>
        </div>
      </section>

      {/* CANDIDATE / REFERRAL */}
      <section className="hf-safety" style={{ paddingTop: 0 }}>
        <div className="hf-wrap">
          <div className="hf-warn-grid">
            <div className="hf-warn-card hf-ok">
              <h3>Who is a good candidate</h3>
              <p>Generally, adults dealing with dull-looking skin, congested pores, oily or combination skin, dehydration, or uneven texture may be reasonable candidates. "Generally suitable" isn't the same as "suitable for you" — an individual assessment determines the fit.</p>
            </div>
            <div className="hf-warn-card hf-stop">
              <h3>When to see a dermatology professional instead</h3>
              <p>
                HydraFacial is a cosmetic treatment. Persistent or painful acne, cystic acne, significant
                pigmentation changes, sudden unexplained skin changes, persistent redness, severe
                irritation, recurring inflammation or scarring call for a proper medical evaluation first
                — our <a href="https://www.vedaracare.ae/dermatology-clinic-jvc" style={{ color: "var(--clay-deep)" }}>dermatology clinic in JVC</a> is the right next step.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}