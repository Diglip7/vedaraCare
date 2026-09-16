import { useEffect } from 'react';
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'click_whatsapp',
          page_path: router.pathname
        });
      } else if (href.startsWith('tel:')) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'click_call',
          page_path: router.pathname
        });
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [router.pathname]);

  return (
    <div style={{ fontFamily: '"Nunito Sans", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
