import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

import IndexPage from "@/components/IndexPage";
import LoginModal from "@/components/modals/LoginModal";
import Layout from "@/components/Layout";
import RegisterModal from "@/components/modals/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
