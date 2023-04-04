import type { AppProps } from "next/app";
import "@/styles/globals.css";

import Layout from "@/components/Layout";
import IndexPage from "@/components/IndexPage";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <IndexPage />
      <Component {...pageProps} />
    </Layout>
  );
}
