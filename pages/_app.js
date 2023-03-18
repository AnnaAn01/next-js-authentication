import RootLayout from "@/layout/layout";
import "@/styles/globals.css";
import "../pages/components/Navbar.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Component {...pageProps} />;
      </RootLayout>
    </SessionProvider>
  );
}
