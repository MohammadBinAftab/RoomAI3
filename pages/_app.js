// pages/_app.js
"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";

const GlobalSessionContext = createContext();

function GlobalSessionProvider({ children }) {
  const sessionData = useSession(); // Call useSession globally here
  return (
    <GlobalSessionContext.Provider value={sessionData}>
      {children}
    </GlobalSessionContext.Provider>
  );
}

export function useGlobalSession() {
  return useContext(GlobalSessionContext); // Access useSession anywhere
}

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthSessionProvider session={pageProps.session}>
      <GlobalSessionProvider>
        <Component {...pageProps} />
      </GlobalSessionProvider>
    </NextAuthSessionProvider>
  );
}

export default MyApp;
