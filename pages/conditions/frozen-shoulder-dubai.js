import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism';
import FrozenShoulderPhases from '../../components/ayurveda/FrozenShoulderPhases';
import KneeTreatmentApproach from '../../components/ayurveda/KneeTreatmentApproach';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
// import TreatmentMechanism from '../../components/ayurveda/TreatmentMechanism'
import FAQ from '../../components/home/FAQ';
// import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocationCustom';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import { PostSurgeryTeam } from '../../components/ayurveda/PostSurgeryComponents';
import { physioReviewsBlock } from '../../data/googleReviews';
import {
  frozenShoulderHero,
  frozenShoulderIntro,
  frozenShoulderMechanism1,
  frozenShoulderOutcomes,
  frozenShoulderPhases,
  frozenShoulderTreatmentMechanism,
  frozenShoulderMechanism2,
  frozenShoulderApproach,
  frozenShoulderInjectionsSurgery,
  frozenShoulderReviews,
  frozenShoulderTeam,
  // frozenShoulderPricing,
  frozenShoulderFaqs,
  frozenShoulderLocation,
  frozenShoulderCTA,
  frozenShoulderRelatedPages,
  frozenShoulderSymptoms,
  frozenShoulderExercises
} from '../../data/frozenShoulderData';

const FrozenShoulderDubai = () => {


  // First, let's create the injections/surgery section component structure
  const InjectionsSurgerySection = () => (
    <section className="bg-[#F2EDE4] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B8975A] tracking-[0.18em] text-xs mb-4 font-sans font-medium">
            {frozenShoulderInjectionsSurgery.label}
          </p>
          <h2 className="text-[#1C1612] mb-5 font-serif font-medium text-3xl md:text-4xl">
            {frozenShoulderInjectionsSurgery.title}
          </h2>
          <p className="text-[#7A6E62] max-w-[720px] mx-auto leading-[1.75] font-sans text-base">
            {frozenShoulderInjectionsSurgery.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start">
          <div className="space-y-8">
            <p className="text-[#2C2419] leading-[1.8] font-sans text-base">
              Conservative physiotherapy is the appropriate first-line treatment for nearly all frozen shoulder. However, some patients benefit from additional medical interventions during their recovery.
            </p>
            {frozenShoulderInjectionsSurgery.items.map((item, index) => (
              <div key={index}>
                <h3 className="text-[#1C1612] mb-3 font-serif font-medium text-xl">
                  {item.title}
                </h3>
                <p className="text-[#4A4239] leading-[1.8] font-sans text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="sticky top-24">
            <div className="rounded-[10px] p-8 bg-white border-2 border-[#B8975A]">
              <p className="text-[#B8975A] tracking-[0.14em] text-xs mb-6 font-sans font-semibold">
                TYPICAL TREATMENT HIERARCHY
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-[6px] bg-[#B8975A]/10">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#B8975A] font-sans font-bold text-xs">
                    1
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Conservative physiotherapy
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      First-line for nearly all patients
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    2
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Corticosteroid injection
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Optional addition during freezing phase for pain control
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    3
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Hydrodilatation
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Optional addition during frozen phase if progress is slow
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    4
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Manipulation under anaesthesia
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Considered after 9–12 months if conservative care inadequate
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-[6px] bg-transparent">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white bg-[#D4C4A8] font-sans font-bold text-xs">
                    5
                  </span>
                  <div>
                    <p className="text-[#1C1612] font-sans font-medium text-sm">
                      Surgical capsular release
                    </p>
                    <p className="text-[#7A6E62] font-sans text-xs">
                      Reserved for persistent cases after extended conservative care
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-[#B8975A] mt-6 text-center font-serif italic text-sm">
                Most patients only need step 1.
              </p>
            </div>
            <a
              href="/book"
              className="inline-block text-center w-full mt-6 px-6 py-3.5 border border-[#1C1612] text-[#1C1612] rounded-sm hover:bg-[#1C1612] hover:text-white transition-colors font-sans font-medium"
            >
              Book Assessment to Discuss Options
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  // Timeline component
  const TimelineSection = () => (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#B8975A] tracking-[0.18em] text-xs mb-4 font-sans font-medium">
            {frozenShoulderOutcomes.label}
          </p>
          <h2 className="text-[#1C1612] mb-5 font-serif font-medium text-3xl md:text-4xl">
            {frozenShoulderOutcomes.title}
          </h2>
          <p className="text-[#7A6E62] max-w-[720px] mx-auto leading-[1.75] font-sans text-base">
            {frozenShoulderOutcomes.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="absolute left-5 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#E8A87C] via-[#B8975A] to-[#5A8A6A]"></div>
            <div className="space-y-0">
              {frozenShoulderOutcomes.timeline.map((item, index) => {
                const colors = ["rgb(232, 168, 124)", "rgb(212, 147, 92)", "rgb(184, 151, 90)", "rgb(154, 125, 72)"];
                const color = item.color || colors[index % colors.length];
                const isLast = index === frozenShoulderOutcomes.timeline.length - 1;
                return (
                  <div key={index} className="flex gap-6 relative pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 shrink-0" style={{ backgroundColor: color }}>
                        <span className="text-white font-sans font-semibold text-xs">{index + 1}</span>
                      </div>
                      {!isLast && (
                        <div className="w-[2px] flex-1 min-h-[48px]" style={{ backgroundColor: `${color}25` }}></div>
                      )}
                    </div>
                    <div className="pb-8 pt-1.5">
                      <p className="text-[#B8975A] text-xs tracking-[0.14em] mb-0.5 font-sans font-semibold">{item.phase}</p>
                      <p className="text-[#4A4239] font-sans text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-[#2C2419] leading-[1.8] font-sans text-base">
              Frozen shoulder recovery timelines vary significantly between patients. The numbers below represent typical patterns based on research and our clinical experience treating frozen shoulder patients. Your specific timeline depends on several factors:
            </p>
            <div>
              <h3 className="text-[#1C1612] mb-5 font-serif font-medium text-2xl">Factors that affect timeline</h3>
              <div className="space-y-3">
                {[
                  { title: "Phase when treatment begins", description: "Earlier intervention often shortens total course" },
                  { title: "Diabetic status", description: "Diabetic patients often have longer recovery and more severe presentation" },
                  { title: "Bilateral involvement", description: "Patients with both shoulders affected often have more complex recovery" },
                  { title: "Patient compliance", description: "Daily home programme adherence substantially affects outcomes" },
                  { title: "Underlying causes", description: "Post-surgical or post-injury frozen shoulder may have different patterns" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-[8px] border border-[#1C1612]/[0.08]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B8975A] mt-2 shrink-0"></div>
                    <div>
                      <p className="text-[#1C1612] font-sans font-medium text-sm">{item.title}</p>
                      <p className="text-[#7A6E62] font-sans text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#1C1612] mb-3 font-serif font-medium text-2xl">What patients typically experience</h3>
              <p className="text-[#4A4239] leading-[1.8] font-sans text-sm">
                Most patients who start treatment during the freezing phase complete recovery in 8–12 months total. Patients who present already in established frozen phase typically take 6–10 months from start of treatment to substantial recovery. Untreated frozen shoulder typically resolves naturally in 18–30 months — the treatment difference is substantial.
              </p>
            </div>
            <div className="bg-[#F2EDE4] rounded-[8px] p-6">
              <h3 className="text-[#1C1612] mb-3 font-serif font-medium text-lg">Patient frustration is normal — and expected</h3>
              <p className="text-[#4A4239] leading-[1.8] font-sans text-sm">
                Frozen shoulder recovery often feels frustrating. Progress is gradual rather than dramatic. The patients who do best understand the phase-based nature of the condition and trust the process. This is genuinely a marathon, not a sprint — but it is a marathon with a known finish line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const PAGE = {
    path: '/conditions/frozen-shoulder-dubai/',
    title: "Frozen Shoulder Treatment in Dubai | Physiotherapy in JVC | Vedara",
    description: "Frozen shoulder (adhesive capsulitis) physiotherapy at our JVC clinic, Dubai: phase-based care, shockwave, exercises and GP support for diabetes.",
  };

  const SITE = 'https://vedaracare.ae';
  const URL = `${SITE}/conditions/frozen-shoulder-dubai/`;
  const ORG_ID = `${SITE}/#organization`;
  const HAFSINA_ID = `${SITE}/doctors/hafsina-kk-physiotherapist/#physician`;
  const REVIEWED = '2026-10-15';   // change only when Hafsina actually reviews the page
  const strip = (s) => String(s).replace(/<[^>]+>/g, '');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage', '@id': `${URL}#webpage`, url: URL, name: PAGE.title, description: PAGE.description,
        inLanguage: 'en-AE', isPartOf: { '@id': `${SITE}/#website` }, publisher: { '@id': ORG_ID },
        about: {
          '@type': 'MedicalCondition', name: 'Frozen shoulder', alternateName: ['Adhesive capsulitis'],
          riskFactor: [{ '@type': 'MedicalRiskFactor', name: 'Diabetes' }, { '@type': 'MedicalRiskFactor', name: 'Thyroid disease' }],
          possibleTreatment: [
            { '@type': 'MedicalTherapy', name: 'Physiotherapy' },
            { '@type': 'MedicalTherapy', name: 'Shockwave therapy' },
            { '@type': 'MedicalProcedure', name: 'Corticosteroid injection' },
            { '@type': 'MedicalProcedure', name: 'Hydrodilatation' }]
        },
        mainEntity: { '@id': `${URL}#service` },
        reviewedBy: { '@id': HAFSINA_ID }, lastReviewed: REVIEWED, dateModified: REVIEWED,
        breadcrumb: { '@id': `${URL}#breadcrumb` }
      },
      {
        '@type': 'Service', '@id': `${URL}#service`, name: 'Frozen shoulder physiotherapy', serviceType: 'Physiotherapy',
        provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'Place', name: 'Jumeirah Village Circle (JVC), Dubai' }, { '@type': 'City', name: 'Dubai' }],
        availableChannel: {
          '@type': 'ServiceChannel', serviceUrl: `${SITE}/book/`,
          servicePhone: { '@type': 'ContactPoint', telephone: '+971555736312', contactType: 'appointments' }
        }
      },
      {
        '@type': 'Person', '@id': HAFSINA_ID, name: 'Hafsina K K', jobTitle: 'Physiotherapist',
        url: `${SITE}/doctors/hafsina-kk-physiotherapist/`, worksFor: { '@id': ORG_ID },
        knowsAbout: ['Frozen shoulder', 'Mobilisation with movement', 'Shockwave therapy', 'Dry needling'],
        knowsLanguage: ['English', 'Hindi', 'Malayalam'],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Bachelor of Physiotherapy' },
          {
            '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'DHA Physiotherapist Licence',
            identifier: '64812828', recognizedBy: { '@type': 'GovernmentOrganization', name: 'Dubai Health Authority' }
          }]
      },
      {
        '@type': 'BreadcrumbList', '@id': `${URL}#breadcrumb`, itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Physiotherapy', item: `${SITE}/physiotherapy-jvc/` },
          { '@type': 'ListItem', position: 3, name: 'Frozen Shoulder', item: URL }]
      },
      {
        '@type': 'FAQPage', '@id': `${URL}#faq`,
        mainEntity: frozenShoulderFaqs.faqs.map((f) => ({
          '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: strip(f.answer) }
        }))
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{PAGE.title}</title>
        <meta name="description" content={PAGE.description} />
        <link rel="canonical" href="https://vedaracare.ae/conditions/frozen-shoulder-dubai/" />
        <link rel="alternate" hreflang="en-AE" href="https://vedaracare.ae/conditions/frozen-shoulder-dubai/" />
        <link rel="alternate" hreflang="x-default" href="https://vedaracare.ae/conditions/frozen-shoulder-dubai/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={PAGE.title} />
        <meta property="og:description" content={PAGE.description} />
        <meta property="og:url" content="https://vedaracare.ae/conditions/frozen-shoulder-dubai/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vedaracare.ae/images/frozen-shoulder-treatment-vedara-jvc.webp" />
        <meta property="og:locale" content="en_AE" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <AyurvedaHero
        {...frozenShoulderHero}
      />

      <AyurvedaIntro
        {...frozenShoulderIntro}
      />

      <div id="is-it-frozen-shoulder">
        <TreatmentMechanism
          bgColor="bg-white"
          label={frozenShoulderSymptoms.label}
          title={frozenShoulderSymptoms.title}
          content={frozenShoulderSymptoms.content}
          image={frozenShoulderSymptoms.image}
          alt={frozenShoulderSymptoms.alt}
          imageLeft={true}
          showStats={false}
        />
      </div>

      <TreatmentMechanism
        bgColor="bg-[#F8F4EE]"
        label={frozenShoulderTreatmentMechanism.label}
        title={frozenShoulderTreatmentMechanism.title}
        description={frozenShoulderTreatmentMechanism.description}
        keyFact={frozenShoulderTreatmentMechanism.keyFact}
        content={frozenShoulderTreatmentMechanism.content}
        quote={frozenShoulderTreatmentMechanism.quote}
        image={frozenShoulderMechanism1.image}
        alt={frozenShoulderMechanism1.alt}
        imageLeft={false}
        showStats={false}
      />

      <FrozenShoulderPhases
        {...frozenShoulderPhases}
      />

      <div id="exercises">
        <TreatmentMechanism
          bgColor="bg-white"
          label={frozenShoulderExercises.label}
          title={frozenShoulderExercises.title}
          content={frozenShoulderExercises.content}
          image={frozenShoulderExercises.image}
          alt={frozenShoulderExercises.alt}
          imageLeft={false}
          showStats={false}
        />
      </div>

      <TimelineSection />

      <TreatmentMechanism {...frozenShoulderMechanism2} />

      <InjectionsSurgerySection />

      <TreatmentReviews {...physioReviewsBlock()} />

      <PostSurgeryTeam
        bgColor={frozenShoulderTeam.bgColor}
        data={{
          ...frozenShoulderTeam,
          members: frozenShoulderTeam.members.map(member => ({
            ...member,
            credentials: member.role,
            tags: member.specialties,
            description: member.bio,
            languages: member.languages
          }))
        }}
      />

      {/* 
      <div className={`bg-white py-24 px-6 ${frozenShoulderPricing.bgColor}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4 font-sans font-medium" style={{ color: '#C9A84C' }}>
              {frozenShoulderPricing.label}
            </div>
            <h2 className="text-4xl font-serif" style={{ color: 'rgb(26, 26, 26)' }}>
              {frozenShoulderPricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {frozenShoulderPricing.services.map((service, index) => (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
                <p className="text-sm font-sans" style={{ color: 'rgb(26, 26, 26)' }}>
                  {service.name}
                </p>
                <p className="font-serif" style={{ color: 'rgb(201, 168, 76)' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-6 text-center font-sans text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }} dangerouslySetInnerHTML={{ __html: frozenShoulderPricing.insuranceText }} />

            <div className="flex flex-wrap justify-center gap-3">
              {frozenShoulderPricing.insurers.map((insurer, index) => (
                <span key={index} className="px-4 py-2 rounded-lg bg-[#FAF6EF] border border-[#E5DFD3] text-sm text-[#6B6B6B] font-sans font-medium">
                  {insurer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      */}

      <FAQ {...frozenShoulderFaqs} />

      <section className={`${frozenShoulderLocation.bgColor} py-24 px-6`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Map */}
            <div className="bg-[#F5F3EE] rounded-xl overflow-hidden aspect-square">
              {frozenShoulderLocation.mapEmbed ? (
                <iframe
                  src={frozenShoulderLocation.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vedara Care Clinic Location Map"
                ></iframe>
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-sm text-gray-500">Map coming soon</p>
                </div>
              )}
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
                {frozenShoulderLocation.label}
              </p>
              <h2 className="text-4xl mb-8 font-serif" style={{ color: 'rgb(26, 26, 26)' }}>
                {frozenShoulderLocation.title}
              </h2>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">Address</span>
                  <span className="text-sm font-sans text-[#262626]">{frozenShoulderLocation.address}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">Phone</span>
                  <span className="text-sm font-sans text-[#262626]">
                    <a href={`tel:${frozenShoulderLocation.phone.replace(/\s+/g, '')}`} className="hover:underline hover:text-[#C9A84C] transition-colors">
                      {frozenShoulderLocation.phone}
                    </a>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">WhatsApp</span>
                  <span className="text-sm font-sans text-[#262626]">
                    <a href={`https://wa.me/${frozenShoulderLocation.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20frozen%20shoulder%20treatment.`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#C9A84C] transition-colors font-medium">
                      {frozenShoulderLocation.whatsapp}
                    </a>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-medium font-sans text-[#6B6B6B] min-w-[80px]">Email</span>
                  <span className="text-sm font-sans text-[#262626]">
                    <a href={`mailto:${frozenShoulderLocation.email}`} className="hover:underline hover:text-[#C9A84C] transition-colors">
                      {frozenShoulderLocation.email}
                    </a>
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="border border-[#E5DFD3] rounded-lg overflow-hidden mb-8">
                <div className="bg-[#FAF8F5] px-6 py-3 border-b border-[#E5DFD3]">
                  <p className="text-xs font-semibold uppercase tracking-wider font-sans text-[#6B6B6B]">Day</p>
                </div>
                {frozenShoulderLocation.hours.map((hour, index) => (
                  <div key={index} className="flex justify-between px-6 py-3 border-b border-[#E5DFD3] last:border-b-0">
                    <span className="text-sm font-sans text-[#262626]">{hour.day}</span>
                    <span className="text-sm font-sans text-[#262626]">{hour.time}</span>
                  </div>
                ))}
              </div>

              {/* Location Markers */}
              <div className="flex flex-wrap gap-2 mb-8">
                {frozenShoulderLocation.locationMarkers.map((marker, index) => (
                  <span key={index} className="px-3 py-2 bg-[#FAF8F5] rounded-lg text-xs text-[#6B6B6B] font-sans font-medium">
                    {marker.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm mb-8 leading-relaxed font-sans text-[#6B6B6B]">
                {frozenShoulderLocation.description}
              </p>

              {/* Button */}
              <a
                href={frozenShoulderLocation.buttonLink}
                className="inline-block px-6 py-3 bg-[#1A1A1A] text-white text-sm font-sans font-medium rounded-md hover:bg-[#333] transition-colors"
              >
                {frozenShoulderLocation.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        {...frozenShoulderCTA}
      />

      <RelatedPages {...frozenShoulderRelatedPages} />
    </>
  );
};

export default FrozenShoulderDubai;
