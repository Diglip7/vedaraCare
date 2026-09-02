import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ fontFamily: '"Nunito Sans", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
