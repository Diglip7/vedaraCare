import Head from "next/head";
import AyurvedaHero from "../../components/ayurveda/AyurvedaHero";
import AyurvedaIntro from "../../components/ayurveda/AyurvedaIntro";
import ContentWithSidebar from "../../components/ayurveda/ContentWithSidebar";
import FinalCTA from "../../components/ayurveda/FinalCTA";
import MedicalDisclaimer from "../../components/ayurveda/MedicalDisclaimer";
import FAQ from "../../components/home/FAQ"
import RelatedPages from "@/components/ayurveda/RelatedPages";
import { scarRelatedPages, scarFAQ, laserScarTreatmentLocation } from '../../data/laserScarData'
import TreatmentLocation from "@/components/ayurveda/TreatmentLocation";
const LaserScarRemoval = () => {
  return (
    <>
      <Head>
        <title>Laser Scar Removal in JVC | Vedara Care Dermatology</title>
        <meta name="description" content="Laser scar removal in JVC at Vedara Care. DHA-licensed dermatology team offering personalised scar treatment in Dubai. Book your consultation today." />
        <link rel="canonical" href="https://vedaracare.ae/treatments/laser-scar-removal-jvc" />
        <meta property="og:title" content="Laser Scar Removal in JVC | Vedara Care Dermatology" />
        <meta property="og:description" content="Laser scar removal in JVC at Vedara Care. DHA-licensed dermatology team offering personalised scar treatment in Dubai. Book your consultation today." />
        <meta property="og:url" content="https://vedaracare.ae/treatments/laser-scar-removal-jvc" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Laser Scar Removal in JVC | Vedara Care Dermatology",
              "url": "https://www.vedaracare.com/treatments/laser-scar-removal-jvc/",
              "description": "Laser scar removal in JVC at Vedara Care. DHA-licensed dermatology team offering personalised scar treatment in Dubai.",
              "inLanguage": "en",
              "lastReviewed": "2026-08-21",
              "reviewedBy": {
                "@type": "Person",
                "name": "[VERIFIED DERMATOLOGIST NAME]",
                "jobTitle": "Dermatologist",
                "url": "[VERIFIED DERMATOLOGIST PROFILE URL]"
              },
              "medicalAudience": {
                "@type": "MedicalAudience",
                "audienceType": "Patient"
              },
              "about": {
                "@type": "MedicalProcedure",
                "name": "Laser Scar Removal"
              },
              "publisher": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic",
                "url": "https://www.vedaracare.com"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Laser Scar Removal",
              "alternateName": ["Laser Scar Treatment", "Laser Scar Resurfacing"],
              "description": "A dermatology procedure using controlled laser energy to stimulate collagen remodelling and improve the appearance, texture, and visibility of selected scars, including acne scars, surgical scars, and traumatic scars.",
              "procedureType": "https://schema.org/NoninvasiveProcedure",
              "bodyLocation": "Skin",
              "howPerformed": "Controlled laser energy is applied to the treatment area to stimulate collagen production and skin remodelling, with settings individualised according to scar type, depth, and skin tone.",
              "preparation": "Includes medical history review, scar assessment, skin type evaluation, and pigmentation risk assessment during an in-person dermatology consultation.",
              "followup": "Aftercare guidance including sun protection and skincare instructions, with follow-up assessment to monitor healing and plan any subsequent sessions.",
              "status": "https://schema.org/ActiveActionStatus",
              "recognizingAuthority": {
                "@type": "Organization",
                "name": "Dubai Health Authority",
                "alternateName": "DHA"
              },
              "provider": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic",
                "url": "https://www.vedaracare.com"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.vedaracare.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Treatments",
                  "item": "https://www.vedaracare.com/treatments/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Laser Scar Removal in JVC",
                  "item": "https://www.vedaracare.com/treatments/laser-scar-removal-jvc/"
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Vedara Care Polyclinic",
              "image": "https://www.vedaracare.com/images/vedara-care-jvc-clinic-exterior.webp",
              "url": "https://www.vedaracare.com/",
              "telephone": "+971555736312",
              "priceRange": "[VERIFY PRICE RANGE]",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
                "addressLocality": "Jumeirah Village Circle (JVC)",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "[VERIFY LATITUDE]",
                "longitude": "[VERIFY LONGITUDE]"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
                "opens": "08:30",
                "closes": "23:30"
              },
              "medicalSpecialty": "Dermatology",
              "department": {
                "@type": "MedicalClinic",
                "name": "Dermatology Department, Vedara Care Polyclinic",
                "medicalSpecialty": "Dermatology"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Dubai Health Authority (DHA) License",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Dubai Health Authority"
                }
              },
              "sameAs": [
                "[VERIFIED FACEBOOK URL]",
                "[VERIFIED INSTAGRAM URL]",
                "[VERIFIED GOOGLE BUSINESS PROFILE URL]"
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "[VERIFIED DERMATOLOGIST NAME]",
              "jobTitle": "Dermatologist",
              "worksFor": {
                "@type": "MedicalOrganization",
                "name": "Vedara Care Polyclinic"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "[VERIFIED QUALIFICATION]",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Dubai Health Authority"
                }
              },
              "knowsLanguage": ["[VERIFIED LANGUAGES]"],
              "url": "[VERIFIED DERMATOLOGIST PROFILE URL]"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is laser scar removal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Laser scar removal uses controlled laser energy to stimulate the skin's natural healing process, encouraging collagen remodelling that can improve the texture, colour, or visibility of certain scars over time."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can laser completely remove scars?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No honest provider can promise complete removal. Laser treatment generally aims to improve the appearance of a scar rather than erasing it entirely."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does laser treatment work for acne scars?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many acne scars, particularly shallower atrophic scars, may respond well to laser treatment. Deeper or more tethered scar types, such as rolling or ice pick scars, sometimes need a combination approach to see meaningful improvement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is laser scar treatment painful?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most patients describe sensations ranging from warmth to mild stinging or a rubber-band-like snapping feeling, depending on the laser technology used. Comfort measures are typically used during treatment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many sessions are usually needed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This depends entirely on scar type, depth, and how the skin responds. There is no fixed number that applies to everyone; a dermatologist will discuss an expected range after assessing the scar directly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does recovery take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Recovery varies by laser technology and treatment intensity. Some redness and sensitivity in the days following treatment is common, with skin generally settling over one to two weeks, though this differs from patient to patient."
                  }
                },
                {
                  "@type": "Question",
                  "name": "When will I see results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Initial changes may become noticeable within a few weeks as the skin heals, with continued improvement over the following months as collagen remodelling progresses beneath the surface."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can laser treatment cause pigmentation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Temporary pigmentation changes are a recognised possible side effect, particularly in patients with darker skin tones. This is one of the key reasons skin type is carefully assessed before treatment planning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is laser suitable for darker skin?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It can be, but darker skin types carry a higher risk of pigmentation-related side effects, which means laser selection and settings need to be approached more conservatively. This is assessed individually."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where can I get laser scar treatment in JVC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vedara Care Polyclinic in Jumeirah Village Circle offers dermatology-led laser scar assessments and treatment, with a DHA-licensed team based locally in JVC."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <AyurvedaHero
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/dermatology-clinic-jvc", label: "Dermatology" },
          { label: "Laser Scar Removal in JVC" }
        ]}
        label="DERMATOLOGY - LASER SCAR TREATMENT - DHA-LICENSED-JVC"
        title="Laser Scar Removal in JVC. Personalised care for visible scar improvement."
        description="Scars form differently depending on how the skin was injured, how it healed, and how your body responds to that healing process. Some scars sit below the skin's surface, others sit above it, and some carry pigment changes long after the original wound has closed. Laser scar removal in JVC at Vedara Care Polyclinic is built around this reality — no two scars behave the same way, so no two treatment plans should look identical either.Depending on scar type, depth and skin tone, laser treatment may help improve texture, soften discolouration, reduce visibility, and stimulate collagen remodelling beneath the skin. Selected scars respond well to laser energy, others respond better to a different approach entirely, or to a combination of treatments over time. That is why a professional assessment always comes before any recommendation — not after.Our JVC clinic is located in Al Barsha South Fourth, Binghatti Azure, easily reachable from across Jumeirah Village Circle and surrounding communities. Every treatment plan here starts with a conversation about your scar's history, your skin, and what a realistic outcome looks like for you."
        image="/images/laser-scar-removal-jvc-vedara-care.webp"
        imageAlt="Laser Scar Removal in JVC at Vedara Care"
        floatingCard={{
          title: "Start With a Scar Assessment",
          subtitle: "Every scar has a different structure and healing history. A proper dermatological assessment helps identify the scar type, depth, texture, and pigmentation before selecting the most suitable treatment approach."
        }}
        features={[
          "DHA-licensed dermatology team",
          "Personalised scar assessment",
          "Skin-type-conscious treatment planning",
          "JVC clinic"
        ]}
        primaryCTA="Book a Scar Consultation"
        primaryCTAHref="/book"
        secondaryCTA="WhatsApp Us"
        secondaryCTAHref="https://wa.me/971555736312"
      />

      {/* QUICK ANSWER */}
      <AyurvedaIntro
        label="QUICK ANSWER"
        title="Laser scar treatment at Vedara Care, in one paragraph."
        blockquote="Laser scar treatment at Vedara Care uses controlled laser energy to encourage the skin to remodel itself — softening texture irregularities, reducing redness or pigment changes, and in many cases improving how a scar looks and feels over time. Certain acne scars, some surgical scars, and selected traumatic scars may benefit, while raised or keloid-type scarring often requires a different first-line approach. Suitability is determined during an in-person assessment that looks at scar depth, scar age, skin type, and pigmentation risk, because these factors change which laser settings — or which treatment altogether — make sense. Most patients can expect some redness and sensitivity in the days following treatment, and because scars respond gradually rather than instantly, more than one session is often recommended to reach a meaningful improvement. Results vary from person to person, and the honest goal of laser scar treatment is visible improvement, not complete erasure."
      />

      {/* UNDERSTANDING SCARS */}
      <div className="bg-[#FAF7F2] py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            UNDERSTANDING SCARS
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            Why scar type matters before choosing a laser
          </h2>
          <p className="text-base font-semibold text-[rgb(26,26,26)] mb-4">
            Not all scars are built the same way, which is precisely why they shouldn't all be treated the same way.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-4">
            Depressed (atrophic) scars sit below the surrounding skin because collagen was lost during healing — common after acne. Raised scars sit above the skin surface, where the body has produced excess collagen; this includes hypertrophic scars and keloids, which behave differently from one another and require different management. Pigmented marks aren't technically scars in a structural sense — they're changes in skin colour left behind after inflammation, and they often fade on their own but can be stubborn in darker skin tones. Red scars usually reflect increased blood vessels near the skin's surface and tend to settle as healing matures. Acne scars frequently combine several of these patterns in the same area. Surgical scars and traumatic scars vary enormously depending on wound depth, tension on the skin, and how the area healed.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            This is exactly why a mark that looks similar to another patient's scar on the surface can require a completely different treatment underneath. A laser suited to a depressed acne scar is not automatically suited to a keloid, and applying the wrong energy or depth to the wrong scar type can worsen the outcome rather than improve it. This is the foundation of every assessment we carry out before recommending laser treatment.
          </p>
        </div>
      </div>

      {/* SCAR TYPES WE ASSESS */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            SCAR TYPES WE ASSESS
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[rgb(26,26,26)]">
            The scar types we assess at our JVC dermatology clinic
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">01 - Atrophic Scars</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Depressed scars that sit below the skin's surface</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mb-4">Atrophic scars form when the skin loses collagen and structural support during healing, most commonly after acne. They can appear as shallow depressions or deeper pits depending on how much tissue was affected. Laser treatment may be considered to stimulate collagen remodelling and gradually soften the depth of these scars. Factors such as scar depth, age of the scar, and skin type influence which laser settings are appropriate.</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Realistically, most patients see gradual textural improvement over multiple sessions rather than complete flattening.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">02 - Boxcar Acne Scars</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Scars with sharply defined, box-like edges</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Boxcar scars have distinct, angular borders and a relatively flat base, which differentiates them from softer, sloped scarring. Depending on depth, laser resurfacing may be considered alone or alongside other procedures such as subcision. Shallower boxcar scars tend to respond more predictably than deep ones. Treatment depth and number of sessions are individualised based on how pronounced the edges are.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">03 - Rolling Acne Scars</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Scars that create a wave-like, uneven skin texture</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Rolling scars result from fibrous bands beneath the skin pulling the surface downward, creating a rolling appearance rather than sharp edges. Because the underlying tethering plays a role, laser alone may not fully address rolling scars — combination approaches involving subcision are frequently discussed during assessment. Outcomes depend on how deep the fibrous bands sit and how the skin has aged since scarring occurred.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">04 - Ice Pick Scars</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Narrow, deep, pin-point scars</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Ice pick scars are narrow and can extend quite deep into the skin, which makes them one of the more challenging scar types to treat with laser alone. Depending on depth, a dermatologist may discuss combining laser with other targeted treatments such as TCA CROSS. Expectations here need to be particularly realistic, as very deep ice pick scars often show partial rather than dramatic improvement.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">05 - Post-Acne Texture Changes</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Broader areas of irregular skin texture following acne</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Beyond individual scars, some patients present with widespread textural unevenness across the cheeks or jawline following prolonged acne. Laser resurfacing may be considered to improve overall skin texture and tone across these broader areas. Because this involves treating a wider surface, downtime and number of sessions are usually discussed in more detail during consultation.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">06 - Surgical Scars</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Scars resulting from previous surgical procedures</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Surgical scars vary widely depending on the type of surgery, wound tension, and individual healing. Laser treatment may be considered to improve scar colour, texture, or flatness once the scar has sufficiently matured. Timing matters here — treating a scar too early in its healing process is generally not advisable, and your dermatologist will assess scar maturity before recommending treatment.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">07 - Traumatic or Injury Scars</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Scars resulting from cuts, burns, or accidental injury</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Traumatic scars differ significantly depending on how the original injury occurred and how it was managed at the time. Some respond well to laser resurfacing, particularly where texture or colour is the primary concern. Scar location, depth, and any involvement of underlying tissue all factor into whether laser is an appropriate first step.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DFD3]">
              <h3 className="text-xl font-serif text-[rgb(26,26,26)] mb-2">08 - Raised Scars and Keloid-Type Scarring</h3>
              <p className="text-sm font-medium text-[rgb(160,113,63)] mb-4">Scars that extend above the surrounding skin</p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">Raised and keloid scars behave differently from depressed scars, and laser is often not the first-line treatment for this category. Keloids in particular can respond unpredictably to laser energy and may require specialist assessment, and in some cases treatments such as steroid injections are considered before — or instead of — laser. This is an area where professional evaluation is especially important, and self-directed treatment is not advisable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* THE APPROACH */}
      <div className="bg-[#F5F0E8] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              THE APPROACH
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-[rgb(26,26,26)]">
              How personalised laser scar treatment differs from a standard approach
            </h2>
            <div className="space-y-6">
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Scar classification.</strong> Before any treatment is discussed, the scar itself is classified — depressed, raised, pigmented, or a mix of these. This classification shapes every decision that follows.
              </p>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Skin type assessment.</strong> Skin tone and pigmentation tendency directly affect which laser type and intensity are appropriate. Darker skin types carry a higher risk of post-treatment pigmentation changes, which must be factored into planning rather than treated as an afterthought.
              </p>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Treatment depth and intensity.</strong> Laser settings are not applied uniformly. Depth of penetration and energy intensity are adjusted according to scar type, scar age, and how the skin has responded to any previous treatment.
              </p>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Active acne and inflammation.</strong> If acne is still active, treating scars in isolation rarely makes sense. Ongoing inflammation may need to be brought under control alongside — or before — scar-focused treatment begins.
              </p>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Combination treatment planning.</strong> Certain scars, particularly rolling or ice pick scars, often respond better when laser is paired with another procedure such as subcision or microneedling, rather than relying on laser alone.
              </p>
              <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Realistic expectations.</strong> Every plan is discussed with an honest conversation about what improvement is likely to look like — because the goal of laser scar treatment is visible improvement, not the disappearance of a scar altogether.
              </p>
            </div>
            <div className="mt-8 p-6 bg-white border border-[#E5DFD3] rounded-2xl italic text-[rgb(107,107,107)]">
              "Scar treatment works best when it starts with understanding why a scar looks the way it does — not simply reaching for the same laser setting for every patient who walks through the door."
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E5DFD3]">
            <img
              src="/images/laser-skin-resurfacing-vedara-care.webp"
              alt="Personalised laser scar treatment approach consultation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* HOW LASER SCAR TREATMENT WORKS & LASER TECHNOLOGY */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            HOW LASER SCAR TREATMENT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            How does laser scar treatment work?
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
            Laser scar treatment uses controlled laser energy directed at the treatment area to trigger the skin's natural healing and remodelling response. As the skin responds to this controlled energy, it begins producing new collagen — the structural protein responsible for skin firmness and texture. Over time, this collagen remodelling can soften the appearance of depressions, improve overall texture, and in some cases reduce redness or discolouration associated with the scar.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
            Different laser technologies achieve this in different ways. Some work by removing thin layers of the skin's surface to encourage resurfacing, while others work beneath the surface without disrupting the outer layer as significantly. The choice between these approaches depends heavily on scar type, skin tone, and how much downtime a patient can accommodate.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
            Improvement is gradual rather than immediate. The skin needs time to rebuild collagen after each session, which is why results typically continue to develop over the weeks following treatment rather than appearing right away.
          </p>


          <p className="text-xs mt-9 tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
            LASER TECHNOLOGY
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
            Which laser technology may be used for scars?
          </h2>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
            There is no single laser that suits every scar. Technology selection depends on a combination of factors assessed during consultation, including scar type, scar depth, treatment location, skin tone, any previous treatments, pigmentation tendency, how much downtime is realistic for the patient, and the dermatologist's overall assessment of the skin.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed mb-6">
            Broadly speaking, fractional resurfacing lasers work by treating the skin in a grid-like pattern, leaving surrounding tissue intact to speed healing. Ablative technologies, such as fractional CO2 or Er:YAG systems, remove thin layers of skin and tend to produce more noticeable results per session, generally alongside more downtime. Non-ablative fractional lasers work beneath the surface with less disruption to the outer skin layer, often meaning shorter recovery but potentially requiring more sessions to reach a comparable result.
          </p>
          <p className="text-base text-[rgb(107,107,107)] leading-relaxed">
            Which category — or combination — is appropriate for you will be determined during your consultation based on your scar assessment, not assumed in advance.
          </p>
        </div>
      </div>

      {/* TREATMENT PROCESS */}
      <ContentWithSidebar
        bgColor="bg-[#FAF7F2]"
        label="TREATMENT PROCESS"
        title="What happens during a laser scar treatment session?"
        contentSections={[
          {
            subtitle: "1. Consultation and Assessment",
            description: "Your first visit involves a detailed review of your medical history, the history of your scarring, any previous scar treatments you've had, your current skincare routine, and any medications that could affect healing. Your dermatologist will examine your skin directly, assess pigmentation risk, and determine whether laser treatment — or an alternative — is suitable for your scar type."
          },
          {
            subtitle: "2. Skin Preparation",
            description: "Before treatment, your skin will be prepared according to your dermatologist's guidance. This may include cleansing the treatment area and, depending on the laser technology used, applying appropriate numbing or comfort measures."
          },
          {
            subtitle: "3. Laser Treatment",
            description: "During treatment, you may feel warmth, mild stinging, or a snapping sensation depending on the laser technology and settings used. Your practitioner will monitor your skin's response throughout, adjusting as needed and prioritising your comfort and safety."
          },
          {
            subtitle: "4. Immediate Aftercare",
            description: "Immediately after treatment, some redness, warmth, and sensitivity in the treated area is expected. You'll be given specific skincare instructions to follow, along with guidance on sun protection, which is particularly important in Dubai's climate. You'll also be told what signs would warrant contacting the clinic directly."
          }
        ]}
        sidebar={{
          image: "/images/laser-treatment-setup-dermatology-jvc.webp",
          altText: "Laser device prepared for a dermatology treatment session",
          width: "w-full",
          height: "h-[500px]",
          borderPosition: "right"
        }}
      />

      {/* RECOVERY & RESULTS */}
      <div className="bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#FAF7F2] p-8 md:p-10 rounded-2xl border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              RECOVERY
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              Laser scar treatment recovery: what should you expect?
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">First 24 hours:</strong> The treated area is typically red, warm, and sensitive to the touch, similar to a mild sunburn. Some swelling can occur depending on treatment intensity.
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Days 2-7:</strong> Redness generally begins to settle, though this varies by laser type and individual healing. Depending on the technology used, some peeling or flaking may occur as the skin renews itself.
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Following weeks:</strong> Skin texture continues to settle, and any residual redness typically fades further. Sun protection remains important during this period, as treated skin can be more sensitive to UV exposure.
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                <strong className="text-[rgb(26,26,26)]">Longer term:</strong> Collagen remodelling continues beneath the surface for weeks to months following treatment, which is part of why visible improvement develops gradually rather than all at once.
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed mt-4 italic">
                Recovery time is not fixed — it depends on the laser technology used, treatment intensity, the area treated, your skin type, and your individual healing response. Your dermatologist will give you a more specific expectation based on your particular treatment plan.
              </p>
            </div>
          </div>
          <div className="bg-[#FAF7F2] p-8 md:p-10 rounded-2xl border border-[#E5DFD3]">
            <p className="text-xs tracking-[0.2em] text-[rgb(160,113,63)] font-semibold mb-4 uppercase">
              RESULTS
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-[rgb(26,26,26)]">
              Laser scar treatment results: what can patients realistically expect?
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                Improvement from laser scar treatment tends to build gradually as the skin remodels collagen over time. Many patients notice initial textural changes within the weeks following treatment, with continued improvement over the following months as collagen production continues beneath the surface.
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                The degree of improvement depends on scar type, scar depth, and how the individual skin responds. Shallower, more recently formed scars often show more noticeable change than deep, long-established scarring. Because of this, multiple sessions are frequently recommended to build on the improvement achieved in earlier treatments, and deeper or more complex scars — such as ice pick or rolling scars — may benefit from combination treatment alongside laser rather than laser alone.
              </p>
              <p className="text-sm text-[rgb(107,107,107)] leading-relaxed">
                It's important to set expectations honestly from the outset: laser treatment usually aims to improve the appearance of scars rather than completely erase them. No dermatologist can guarantee a specific outcome, and results vary meaningfully from one patient to another.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <FAQ {...scarFAQ} />

      <MedicalDisclaimer text="This page is for informational purposes only and does not constitute medical advice. All treatments carry risks and benefits that should be discussed with a qualified healthcare professional. Results vary between individuals. Vedara Care Polyclinic is a DHA-licensed facility." />

      {/* FINAL CTA */}
      <FinalCTA
        title="Start with a professional scar assessment"
        description="The most important step in laser scar treatment isn't the laser itself — it's the assessment that comes before it. A proper evaluation looks at your scar's classification, your skin type and pigmentation risk, the treatment options genuinely appropriate for your case, what results you can realistically expect, what recovery might look like for you, the risks involved, and how all of this comes together into a personalised plan built around your skin — not a generic protocol.If you've been considering laser scar treatment in JVC, the next step is simply a conversation with our dermatology team."
        button1Text="Book a Scar Consultation"
        button1TextHref="/book"
        button2Text="WhatsApp Vedara Care"
        button2TextHref="https://wa.me/971555736312"
      />

      {/* LOCATION */}
      <TreatmentLocation{...laserScarTreatmentLocation}
        buttonText="Book a Laser Scar Removal Consultation"
        buttonHref="/book"
      />

      <RelatedPages {...scarRelatedPages} />
    </>
  );
};

export default LaserScarRemoval;
