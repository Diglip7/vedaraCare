import Script from 'next/script';
import { useEffect } from 'react';
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/500.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/900.css';
import '@fontsource/nunito-sans/400-italic.css';
import '@fontsource-variable/fraunces';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const a = e.target.closest('a, button');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      let event = a.dataset.track || null;
      if (!event) {
        if (href.includes('wa.me') || href.includes('api.whatsapp.com')) event = 'whatsapp_click';
        else if (href.startsWith('tel:')) event = 'phone_click';
        else if (href.startsWith('/book')) event = 'appointment_click';
        else if (href.includes('maps.google') || href.includes('maps.app.goo.gl')) event = 'directions_click';
        else if (href.startsWith('/doctors/')) event = 'practitioner_profile_click';
      }
      if (!event) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        page_path: router.asPath.split('?')[0],
        cta_location: a.dataset.location || 'unknown',
        department: a.dataset.department || undefined,
        link_url: href,
      });
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [router.asPath]);

  return (
    <div className="font-sans antialiased">
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M3JC2THK');`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
