import Head from 'next/head';
import AyurvedaHero from '../../components/ayurveda/AyurvedaHero';
import AyurvedaIntro from '../../components/ayurveda/AyurvedaIntro';
import ContentWithSidebar from '../../components/ayurveda/ContentWithSidebar';
import { SciaticaTreatment, SciaticaTypes } from '../../components/ayurveda/SciaticaSections';
import TreatmentReviews from '../../components/ayurveda/TreatmentReviews';
import PhysiotherapyTeam from '../../components/ayurveda/PhysiotherapyTeam';
import FAQ from '../../components/home/FAQ';
import TreatmentLocation from '../../components/ayurveda/TreatmentLocation';
import FinalCTA from '../../components/ayurveda/FinalCTA';
import MedicalDisclaimer from '../../components/ayurveda/MedicalDisclaimer';
import RelatedPages from '../../components/ayurveda/RelatedPages';
import {
    profhiloHero,
    profhiloLaserPeelIntro as profhiloIntro,
    profhiloLaserPeelHowItWorks as profhiloHowItWorks,
    profhiloLaserPeelSelection as profhiloSelection,
    profhiloLaserPeelSkinTypes as profhiloSkinTypes,
    profhiloLaserPeelRealisticExpectations as profhiloRealisticExpectations,
    profhiloLaserPeelAftercareAndSafety as profhiloAftercareAndSafety,
    profhiloLaserPeelPatientVoices as profhiloPatientVoices,
    profhiloLaserPeelTeam as profhiloTeam,
    profhiloLaserPeelProviderChoice as profhiloProviderChoice,
    profhiloLaserPeelPricing as profhiloPricing,
    profhiloFAQ,
    profhiloLaserPeelLocation as profhiloLocation,
    profhiloCTA,
    profhiloLaserPeelRelatedPages as profhiloRelatedPages,
} from "../../data/profhilo";

const ProfhiloTreatment = () => {
    const currentUrl = "https://vedaracare.ae/treatments/profhilo-treatment-jvc/";
    const publishedDate = "2026-08-10T08:00:00+04:00";
    const modifiedDate = new Date().toISOString();

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": "Profhilo Treatment in JVC",
            "url": "https://vedaracare.ae/treatments/profhilo-treatment-jvc/",
            "description": "Profhilo Treatment in JVC at Vedara Care Polyclinic is an injectable skin-quality treatment generally associated with hydration and bio-remodelling. Suitability, treatment areas and results are determined through individual assessment.",
            "provider": {
                "@type": "MedicalClinic",
                "name": "Vedara Care Polyclinic",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
                    "addressLocality": "Jumeirah Village Circle (JVC)",
                    "addressRegion": "Dubai",
                    "addressCountry": "AE"
                },
                "url": "https://vedaracare.ae"
            },
            "areaServed": {
                "@type": "Place",
                "name": "Jumeirah Village Circle, Dubai, UAE"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://vedaracare.ae/treatments/profhilo-treatment-jvc",
            "url": "https://vedaracare.ae/treatments/profhilo-treatment-jvc",
            "name": "Profhilo Treatment in JVC | Vedara Care Polyclinic",
            "description": "Considering Profhilo Treatment in JVC? Learn how this injectable skin-quality treatment works, who it may suit, and book a consultation at Vedara Care.",
            "inLanguage": "en",
            "isPartOf": {
                "@type": "WebSite",
                "url": "https://vedaracare.ae",
                "name": "Vedara Care"
            },
            "mainEntityOfPage": "https://vedaracare.ae/treatments/profhilo-treatment-jvc",
            "about": {
                "@type": "MedicalProcedure",
                "name": "Profhilo Treatment",
                "procedureType": "https://schema.org/NoninvasiveProcedure",
                "bodyLocation": "Face"
            },
            "provider": {
                "@id": "https://vedaracare.ae/treatments/profhilo-treatment-jvc#clinic"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Profhilo Treatment",
            "serviceType": "Injectable bio-remodelling skin-quality treatment",
            "areaServed": {
                "@type": "Place",
                "name": "Jumeirah Village Circle (JVC), Dubai"
            },
            "provider": {
                "@id": "https://vedaracare.ae/treatments/profhilo-treatment-jvc#clinic"
            },
            "url": "https://vedaracare.ae/treatments/profhilo-treatment-jvc",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Profhilo Treatment Services",
                "itemListElement": profhiloPricing.services.map((service) => ({
                    "@type": "Offer",
                    "name": service.name,
                    "priceCurrency": "AED"
                }))
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": "https://vedaracare.ae/treatments/profhilo-treatment-jvc#clinic",
            "name": "Vedara Care Polyclinic",
            "url": "https://vedaracare.ae/treatments/profhilo-treatment-jvc",
            "medicalSpecialty": "Dermatology",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Barsha South Fourth, Binghatti Azure, Shop -4",
                "addressLocality": "Jumeirah Village Circle (JVC)",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
            },
            "areaServed": [
                "Jumeirah Village Circle",
                "Al Barsha South",
                "Jumeirah Village Triangle",
                "Dubai Sports City",
                "Motor City"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": `${currentUrl}#breadcrumb`,
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vedaracare.ae/" },
                { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://vedaracare.ae/treatments/" },
                { "@type": "ListItem", "position": 3, "name": "Profhilo Treatment in JVC", "item": "https://vedaracare.ae/treatments/profhilo-treatment-jvc/" }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": profhiloFAQ.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        },
        {
            "@context": "https://schema.org",
            "@type": "MedicalScholarlyArticle",
            "headline": "Profhilo Treatment in JVC Dubai — Injectable Bio-Remodelling, Skin Quality & Hydration Guide",
            "image": "https://vedaracare.ae/images/profhilo-consultation-vedara-care-jvc.jpg",
            "datePublished": publishedDate,
            "dateModified": modifiedDate,
            "author": {
                "@type": "Physician",
                "name": "Consultant Dermatologist"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Vedara Care Polyclinic"
            },
            "about": [
                { "@type": "MedicalProcedure", "name": "Profhilo Treatment" },
                { "@type": "MedicalProcedure", "name": "Injectable Skin Bio-Remodelling" }
            ],
            "mainEntityOfPage": currentUrl
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://vedaracare.ae/#organization",
            "name": "Vedara Care Polyclinic"
        }
    ];

    return (
        <>
            <Head>
                <title>Profhilo Treatment in JVC | Vedara Care Polyclinic</title>
                <meta name="description" content="Considering Profhilo Treatment in JVC? Learn how this injectable skin-quality treatment works, who it may suit, and book a consultation at Vedara Care." />
                <link rel="canonical" href={currentUrl} />
                <link rel="alternate" hrefLang="en-AE" href={currentUrl} />
                <link rel="alternate" hrefLang="ar-AE" href="https://vedaracare.ae/ar/treatments/profhilo-treatment-jvc/" />
                <link rel="alternate" hrefLang="x-default" href={currentUrl} />
                <meta property="og:title" content="Profhilo Treatment in JVC | Vedara Care Polyclinic" />
                <meta property="og:description" content="Considering Profhilo Treatment in JVC? Learn how this injectable skin-quality treatment works, who it may suit, and book a consultation at Vedara Care. DHA-licensed dermatology team. Individual skin assessment before treatment." />
                <meta property="og:image" content="https://vedaracare.ae/og-images/profhilo-treatment-jvc-dubai.jpg" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="business.business" />
                <meta property="og:locale" content="en_AE" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Profhilo Treatment in JVC | Vedara Care Polyclinic" />
                <meta name="twitter:description" content="Considering Profhilo Treatment in JVC? Learn how this injectable skin-quality treatment works, who it may suit, and book a consultation at Vedara Care. DHA-licensed dermatology team." />
                <meta name="twitter:image" content="https://vedaracare.ae/og-images/profhilo-treatment-jvc-dubai.jpg" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow, max-image-preview:large" />
                <meta name="bingbot" content="index, follow" />
                {schemas.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
            </Head>

            <AyurvedaHero {...profhiloHero} />

            <AyurvedaIntro {...profhiloIntro} />

            <SciaticaTreatment
                data={profhiloHowItWorks}
                showBorderLeft={false}
                rightContentStyle="peelDepthAndFitzpatrick"
                bgColor="bg-[#FAF7F2]"
            />


            <ContentWithSidebar
                bgColor={profhiloSelection.bgColor}
                label={profhiloSelection.label}
                title={profhiloSelection.title}
                description={profhiloSelection.description}
                contentSections={profhiloSelection.contentSections}
                sidebar={profhiloSelection.sidebar}
            />

            <SciaticaTypes {...profhiloSkinTypes} />

            <ContentWithSidebar
                bgColor={profhiloRealisticExpectations.bgColor}
                cardBg={profhiloRealisticExpectations.cardBg}
                label={profhiloRealisticExpectations.label}
                title={profhiloRealisticExpectations.title}
                intro={profhiloRealisticExpectations.intro}
                phases={profhiloRealisticExpectations.phases}
                footerNote={profhiloRealisticExpectations.footerNote}
                bottomContent={profhiloRealisticExpectations.bottomContent}
            />

            <ContentWithSidebar
                bgColor={profhiloAftercareAndSafety.bgColor}
                label={profhiloAftercareAndSafety.label}
                title={profhiloAftercareAndSafety.title}
                contentSections={profhiloAftercareAndSafety.contentSections}
                sidebar={profhiloAftercareAndSafety.sidebar}
            />

            <TreatmentReviews
                bgColor={profhiloPatientVoices.bgColor}
                cardBgColor={profhiloPatientVoices.cardBg}
                statsBgColor="transparent"
                label={profhiloPatientVoices.label}
                title={profhiloPatientVoices.title}
                items={profhiloPatientVoices.testimonials.map(t => ({
                    quote: t.quote,
                    author: t.attribution,
                    details: t.treatment,
                    details1: t.location
                }))}
                stats={profhiloPatientVoices.stats.map(s => ({
                    value: s.value,
                    label: s.label
                }))}
                isDarkText={true}
                useKneeStyle={false}
            />

            <PhysiotherapyTeam
                bgColor={profhiloTeam.bgColor}
                label={profhiloTeam.label}
                title={profhiloTeam.title}
                description={profhiloTeam.description}
                team={profhiloTeam.team}
                gridColumns={profhiloTeam.gridColumns}
            />

            <ContentWithSidebar
                bgColor={profhiloProviderChoice.bgColor}
                label={profhiloProviderChoice.label}
                title={profhiloProviderChoice.title}
                contentSections={profhiloProviderChoice.contentSections}
                sidebar={profhiloProviderChoice.sidebar}
            />

            <ContentWithSidebar
                bgColor={profhiloPricing.bgColor}
                label={profhiloPricing.label}
                title={profhiloPricing.title}
                services={profhiloPricing.services}
                insuranceText={profhiloPricing.insuranceText}
                insurances={profhiloPricing.insurances}
            />

            <FAQ
                bgColor={profhiloFAQ.bgColor}
                label={profhiloFAQ.label}
                title={profhiloFAQ.title}
                description={profhiloFAQ.description}
                faqs={profhiloFAQ.faqs}
                buttonText={profhiloFAQ.buttonText}
                buttonHref={profhiloFAQ.buttonHref}
                sidebarLinks={profhiloFAQ.sidebarLinks}
            />

            <TreatmentLocation
                bgColor={profhiloLocation.bgColor}
                label={profhiloLocation.label}
                title={profhiloLocation.title}
                address={profhiloLocation.address}
                phone={profhiloLocation.phone}
                email={profhiloLocation.email}
                whatsapp={profhiloLocation.whatsapp}
                whatsappMessage={profhiloLocation.whatsappMessage}
                hours={profhiloLocation.hours}
                landmarks={profhiloLocation.landmarks}
                description={profhiloLocation.description}
                buttonText={profhiloLocation.buttonText}
            />

            <MedicalDisclaimer text={profhiloCTA.disclaimer} />

            <FinalCTA {...profhiloCTA} />

            <RelatedPages {...profhiloRelatedPages} />
        </>
    );
};

export default ProfhiloTreatment;