import Head from 'next/head';
import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import {
  licensedHomeTherapyHero,
  whyWeAreDifferent,
  homeTherapyServices,
  howItWorks,
  coverageArea,
  dhaLicensing,
  licensedPractitioners,
  patientStories,
  commonQuestions,
  bringLicensedCareHome
} from '../data/licensedHomeTherapyData';

const HeroSection = ({ data }) => {
  return (
    <section className="bg-[#F4F1E8] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#184C3A]/70 uppercase font-semibold">
              {data.eyebrow}
            </span>
            
            <h1 className="font-serif text-[48px] lg:text-[64px] leading-[1.05] text-[#184C3A] font-medium">
              {data.title}
              <br />
              <em className="italic font-serif">{data.titleItalic}</em>
            </h1>
            
            <p className="text-[17px] font-sans leading-relaxed text-[#184C3A]/80 max-w-lg">
              {data.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={data.primaryCTAHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#184C3A] text-white rounded-lg font-sans font-semibold text-[15px] hover:bg-[#123a2c] transition-all"
              >
                {data.primaryCTA}
                <ArrowRight size={18} />
              </a>
              <a
                href={data.secondaryCTAHref}
                className="inline-flex items-center gap-2 px-8 py-4 text-[#184C3A] font-sans font-semibold text-[15px] hover:opacity-70 transition-all"
              >
                {data.secondaryCTA}
                <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {data.badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#184C3A]" />
                  <span className="text-[14px] font-sans font-medium text-[#184C3A]">{badge}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={data.image}
                alt="Licensed Home Therapy"
                className="w-full h-[520px] object-cover"
              />
            </div>
            
            <div className="absolute top-8 right-6 z-20 space-y-3">
              {data.floatingCards.map((card, index) => (
                <div key={index} className="bg-white rounded-xl px-5 py-3 shadow-lg text-right">
                  <p className="font-serif text-[18px] font-semibold text-[#184C3A]">{card.label}</p>
                  <p className="text-[11px] font-sans text-[#184C3A]/60 tracking-wide uppercase">{card.sublabel}</p>
                </div>
              ))}
            </div>
            
            <div className="absolute -bottom-6 -left-2 z-20 bg-white rounded-2xl shadow-2xl p-4 border border-[#B88638] max-w-[300px]">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#184C3A] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-sans tracking-wider text-[#B88638] uppercase font-semibold">DHA Licensed Facility</p>
                  <p className="font-serif text-[15px] font-semibold text-[#0E3A34]">{data.licenseCard.name}</p>
                </div>
              </div>
              <div className="border-t border-[#184C3A]/10 pt-3 mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans text-[#6B7C7A]">License No.</span>
                  <span className="text-[11px] font-sans font-semibold text-[#3F7A5C]">{data.licenseCard.licenseNo}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {data.licenseCard.services.map((service, idx) => (
                  <span key={idx} className="text-[9px] font-sans bg-[#F4F1E8] text-[#184C3A]/80 px-2 py-1 rounded">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyWeAreDifferentSection = ({ data }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'plus':
        return <Plus size={20} className="text-[#184C3A]" strokeWidth={2.5} />;
      case 'check':
        return <CheckCircle2 size={20} className="text-[#184C3A]" />;
      case 'arch':
        return <Building2 size={20} className="text-[#184C3A]" />;
      default:
        return null;
    }
  };

  return (
    <section className={`${data.bgColor} py-20 lg:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B8863A] uppercase font-semibold block mb-5">
            {data.label}
          </span>
          <h2 className="font-serif text-[44px] lg:text-[52px] leading-[1.1] text-white font-medium">
            {data.title}
            <br />
            <em className="italic font-serif">{data.titleItalic}</em>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/[0.04] backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white/15 transition-colors">
                {getIcon(card.icon)}
              </div>
              
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 size={15} className="text-[#3F7A5C]" />
                <span className="text-[10px] font-sans tracking-[0.15em] text-[#3F7A5C] uppercase font-semibold">
                  {card.badge}
                </span>
              </div>
              
              <h3 className="font-serif text-[24px] text-white font-medium mb-4 leading-tight">
                {card.title}
              </h3>
              
              <p className="text-[15px] font-sans leading-relaxed text-white/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ data }) => {
  return (
    <section className={`${data.bgColor} py-20 lg:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-left mb-16">
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block mb-5">
            {data.label}
          </span>
          <h2 className="font-serif text-[40px] lg:text-[48px] leading-[1.1] text-[#184C3A] font-medium">
            {data.title}
            <br />
            <em className="italic font-serif">{data.titleItalic}</em>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {service.comingSoon && (
                  <span
                    className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-white uppercase font-mono font-medium tracking-wider text-[11px]"
                    style={{ background: 'rgb(201, 169, 97)' }}
                  >
                    Coming Soon
                  </span>
                )}
              </div>
              
              <div className="p-7">
                <h3 className="font-serif text-[18px] font-semibold text-[#184C3A] mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[13px] font-sans text-[#184C3A]/65 leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-[13px] font-sans font-semibold text-[#184C3A] hover:gap-2.5 transition-all"
                >
                  Learn more
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = ({ data }) => {
  return (
    <section className={`${data.bgColor} py-20 lg:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block mb-5">
            {data.label}
          </span>
          <h2 className="font-serif text-[40px] lg:text-[48px] leading-[1.1] text-[#184C3A] font-medium">
            {data.title}
            <br />
            <em className="italic font-serif">{data.titleItalic}</em>
          </h2>
        </div>
        
        <div className="relative max-w-[1100px] mx-auto">
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute top-[64px] bottom-0 left-1/4 w-[1px] bg-[#184C3A]/15" />
            <div className="absolute top-[64px] bottom-0 left-1/2 w-[1px] bg-[#184C3A]/15" />
            <div className="absolute top-[64px] bottom-0 left-3/4 w-[1px] bg-[#184C3A]/15" />
            <div className="absolute top-[64px] left-1/4 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#C9A961]" />
            <div className="absolute top-[64px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#C9A961]" />
            <div className="absolute top-[64px] left-3/4 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#C9A961]" />
          
          </div>
          <div className="grid md:grid-cols-4 gap-10 md:gap-0">
            {data.steps.map((step, index) => (
              <div key={index} className="relative md:px-10">
                  <div className="mb-6">
                  <span className="font-serif text-[44px] text-[#184C3A]/25 font-medium leading-none">
                    {step.number}
                 </span>
                </div>
                <h3 className="font-serif text-[17px] font-semibold text-[#184C3A] mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] font-sans text-[#184C3A]/65 leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoverageAreaSection = ({ data }) => {
  const otherAreasRow1 = data.otherAreas.slice(0, 3);
  const otherAreasRow2 = data.otherAreas.slice(3, 8);
  const otherAreasRow3 = data.otherAreas.slice(8, 11);

  return (
    <section className="bg-[#F4F1E8] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block">
              {data.label}
            </span>
            <h2 className="font-serif text-[40px] lg:text-[46px] leading-[1.1] text-[#184C3A] font-medium">
              {data.title}
              <br />
              <em className="italic font-serif">{data.titleItalic}</em>
            </h2>
            <p className="text-[15px] font-sans leading-relaxed text-[#184C3A]/75 max-w-md">
              {data.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 items-center" style={{ gap: '8px' }}>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(237, 238, 233)',
                    background: 'rgb(14, 58, 52)',
                    border: '1px solid rgb(14, 58, 52)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      background: 'rgb(63, 122, 92)',
                      borderRadius: '50%',
                      display: 'inline-block',
                    }}
                  ></span>
                  Jumeirah Village Circle
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    
                  }}
                >
                  Jumeirah
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Dubai Marina
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Business Bay
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    
                    
                  }}
                >
                  Downtown Dubai
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Palm Jumeirah
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Al Barsha
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  DIFC
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Mirdif
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2 items-center" style={{ gap: '8px' }}>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Arabian Ranches
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Dubai Hills
                </a>
                <a
                  href="#register"
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.04em',
                    color: 'rgb(14, 58, 52)',
                    background: 'transparent',
                    border: '1px solid rgba(14, 58, 52, 0.25)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Al Quoz
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#184C3A] rounded-2xl shadow-2xl relative overflow-hidden aspect-[5/4] max-w-[560px] mx-auto">
              <svg
                viewBox="0 0 500 420"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="48%" r="12%">
                    <stop offset="0%" stopColor="#C9A961" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
                  </radialGradient>
                </defs>
                
                <circle cx="250" cy="200" r="180" fill="url(#centerGlow)" />
                
                <path
                  d="M 90 90 Q 80 170 110 240 Q 140 300 200 340 Q 250 360 300 340 Q 360 300 390 240 Q 420 170 410 90 Q 330 55 250 58 Q 170 55 90 90 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.5"
                />
                
                <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" strokeDasharray="4 5" />
                <circle cx="250" cy="200" r="95"  fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" strokeDasharray="4 5" />
                <circle cx="250" cy="200" r="55"  fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2" strokeDasharray="4 5" />
                
                <circle cx="175" cy="160" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="210" cy="130" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="260" cy="115" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="310" cy="140" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="350" cy="180" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="160" cy="220" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="355" cy="245" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="195" cy="280" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="290" cy="285" r="4" fill="rgba(255,255,255,0.38)" />
                <circle cx="330" cy="305" r="4" fill="rgba(255,255,255,0.38)" />
                
                <circle cx="250" cy="200" r="20" fill="#C9A961" fillOpacity="0.25" />
                <circle cx="250" cy="200" r="12" fill="#C9A961" fillOpacity="0.55" />
                <circle cx="250" cy="200" r="7"  fill="#C9A961" />
                
                <text
                  x="250"
                  y="245"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="13"
                  letterSpacing="2"
                  fill="rgba(255,255,255,0.85)"
                >
                  JVC · HOME BASE
                </text>
              </svg>
              
              <div className="absolute left-8 bottom-8 space-y-2 z-10">
                <p className="text-[10px] font-sans tracking-wider text-white/50 uppercase font-semibold">Priority same-day availability</p>
                <p className="font-serif text-[15px] text-[#C9A961] tracking-wide">{data.primaryTag}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DhaLicensingSection = ({ data }) => {
  return (
    <section className="bg-[#F5F5F0] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block mb-5">
            {data.label}
          </span>
          <h2 className="font-serif text-[40px] lg:text-[46px] leading-[1.1] text-[#184C3A] font-medium mb-8">
            {data.title}
            <br />
            <em className="italic font-serif">{data.titleItalic}</em>
          </h2>
          <p className="text-[15px] font-sans leading-relaxed text-[#184C3A]/75">
            {data.description}
          </p>
        </div>
        
        <div
          style={{
            background: 'linear-gradient(135deg, rgb(255, 255, 248) 0%, rgb(248, 245, 236) 100%)',
            border: '1px solid rgb(184, 134, 58)',
            borderRadius: '12px',
            padding: '24px 28px',
            boxShadow: 'rgba(14, 58, 52, 0.12) 0px 4px 24px, rgba(184, 134, 58, 0.2) 0px 1px 4px',
            maxWidth: '400px',
            position: 'relative',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '80px',
              height: '80px',
              border: '2px solid rgba(184, 134, 58, 0.15)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                flexShrink: 0,
                background: 'rgb(63, 122, 92)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.5 9.5L7 13L14.5 5.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.08em',
                  color: 'rgb(184, 134, 58)',
                  textTransform: 'uppercase',
                  marginBottom: '2px',
                }}
              >
                DHA Licensed Facility
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: '19px',
                  color: 'rgb(14, 58, 52)',
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                {data.licenseCard.name}
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: '12px',
              paddingTop: '10px',
              borderTop: '1px solid rgba(184, 134, 58, 0.25)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: '12px',
                  color: 'rgb(107, 124, 122)',
                  letterSpacing: '0.04em',
                }}
              >
                License No.
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  fontSize: '13px',
                  color: 'rgb(14, 58, 52)',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
              >
                {data.licenseCard.licenseNo}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '6px',
                marginTop: '8px',
                flexWrap: 'wrap',
              }}
            >
              {data.licenseCard.services.map((service, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                    fontSize: '9px',
                    color: 'rgb(63, 122, 92)',
                    border: '1px solid rgba(63, 122, 92, 0.3)',
                    borderRadius: '4px',
                    padding: '1px 6px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-[#184C3A]/10 pt-16">
          <div className="text-center mb-12">
            <span className="text-[10px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block">
              {licensedPractitioners.label}
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {licensedPractitioners.practitioners.map((p, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#184C3A]/10 flex items-center justify-center shrink-0">
                    <span className="font-serif text-[13px] font-semibold text-[#184C3A]">
                      {p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-[14px] font-semibold text-[#184C3A] mb-0.5">{p.name}</p>
                    <p className="text-[11px] font-sans text-[#184C3A]/70 font-medium">{p.title}</p>
                    <p className="text-[11px] font-sans text-[#184C3A]/50 mt-0.5">{p.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PatientStoriesSection = ({ data }) => {
  return (
    <section className={`${data.bgColor} py-20 lg:py-28`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block mb-5">
            {data.label}
          </span>
          <h2 className="font-serif text-[36px] lg:text-[42px] leading-[1.1] text-[#184C3A] font-medium">
            {data.title}
          </h2>
        </div>
        
        <div className="max-w-[700px] mx-auto">
          <div className="border-2 border-dashed border-[#184C3A]/25 rounded-2xl p-10 lg:p-14 text-center">
            <p className="text-[11px] font-sans tracking-[0.15em] text-[#184C3A]/50 uppercase mb-4">
              {data.placeholder.header}
            </p>
            <p className="text-[13px] font-sans leading-relaxed text-[#184C3A]/65">
              {data.placeholder.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={`${data.bgColor} py-20 lg:py-28`}>
      <div className="max-w-[780px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#C9A961] uppercase font-semibold block mb-5">
            {data.label}
          </span>
          <h2 className="font-serif text-[36px] lg:text-[42px] leading-[1.1] text-[#184C3A] font-medium">
            <em className="italic font-serif">{data.title}</em>
          </h2>
        </div>
        
        <div className="space-y-1">
          {data.faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-[#184C3A]/12 last:border-b"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center gap-6 py-5 text-left group"
              >
                <span className={`font-sans text-[14px] font-semibold transition-colors ${openIndex === index ? 'text-[#184C3A]' : 'text-[#184C3A]/85 group-hover:text-[#184C3A]'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 transition-colors ${openIndex === index ? 'text-[#184C3A]' : 'text-[#184C3A]/40 group-hover:text-[#184C3A]/70'}`}>
                  {openIndex === index ? <Minus size={18} strokeWidth={2.2} /> : <Plus size={18} strokeWidth={2.2} />}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="font-sans text-[14px] leading-relaxed text-[#184C3A]/70 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BringLicensedCareHomeSection = ({ data }) => {
  return (
    <section className={`${data.bgColor} py-20 lg:py-28 relative overflow-hidden`}>
      <div className="absolute left-0 right-0 bottom-[15%] w-full pointer-events-none">
        <div
          className="relative w-full h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(201, 169, 97, 0.18) 18%, rgba(201, 169, 97, 0.55) 50%, rgba(201, 169, 97, 0.18) 82%, transparent 100%)',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10">
        <h2
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(26px, 4vw, 40px)',
            color: 'rgb(237, 238, 233)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '40px',
          }}
        >
          {data.titleLine1}
          <br />
          {data.titleLine2} <em style={{ fontStyle: 'italic', fontFamily: "'Fraunces', Georgia, serif" }}>{data.titleItalic}</em>
        </h2>

        <div className="mb-10">
          <a
            href={data.buttonLink}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-sans font-semibold text-[17px] transition-all hover:scale-[1.03]"
            style={{
              background: '#C9A961',
              color: '#184C3A',
            }}
          >
            {data.buttonLabel}
            <ArrowRight size={18} />
          </a>
        </div>

        <p
          className="text-[12px] font-mono tracking-[0.18em] uppercase text-white/55"
          style={{ fontFamily: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" }}
        >
          {data.footerText}
        </p>
      </div>
    </section>
  );
};

const LicensedHomeTherapy = () => {
  return (
    <>
      <Head>
        <title>Licensed Home Therapy in JVC & Dubai | DHA-Credentialed Care | Vedara Care</title>
        <meta
          name="description"
          content="DHA-licensed Physiotherapy and Ayurvedic therapy at home in JVC and across Dubai. Clinical-grade care from credentialed practitioners, not gig-economy contractors."
        />
        
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        <meta property="og:title" content="Licensed Home Therapy in JVC & Dubai | DHA-Credentialed Care" />
        <meta property="og:description" content="DHA-licensed home physiotherapy and Ayurvedic therapy in JVC and Dubai. Clinical-grade care from licensed practitioners." />
        <meta property="og:image" content="/images/physiotherapy-at-home-dubai-hero.webp" />
        <meta property="og:url" content="https://vedaracare.ae/licensed-home-therapy" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AE" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Licensed Home Therapy in JVC & Dubai | DHA-Credentialed Care" />
        <meta name="twitter:description" content="DHA-licensed home physiotherapy and Ayurvedic therapy in JVC and Dubai. Clinical-grade care from licensed practitioners." />
        <meta name="twitter:image" content="/images/physiotherapy-at-home-dubai-hero.webp" />
        
        <link rel="canonical" href="https://vedaracare.ae/licensed-home-therapy" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/licensed-home-therapy" />
      </Head>

      <HeroSection data={licensedHomeTherapyHero} />
      <WhyWeAreDifferentSection data={whyWeAreDifferent} />
      <ServicesSection data={homeTherapyServices} />
      <HowItWorksSection data={howItWorks} />
      <CoverageAreaSection data={coverageArea} />
      <DhaLicensingSection data={dhaLicensing} />
      <PatientStoriesSection data={patientStories} />
      <FAQSection data={commonQuestions} />
      <BringLicensedCareHomeSection data={bringLicensedCareHome} />
    </>
  );
};

export default LicensedHomeTherapy; 
