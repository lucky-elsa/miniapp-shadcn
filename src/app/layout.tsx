"use client";

import {
  SDKProvider,
  retrieveLaunchParams,
  useBackButton,
  useMiniApp,
  useThemeParams,
  useViewport,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  isSSR,
} from "@tma.js/sdk-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FC, useEffect, useMemo } from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
// import { useRouter } from "next/router";
import { useRouter, usePathname  } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const manifestUrl = useMemo(() => {
    return isSSR()
      ? ""
      : new URL("tonconnect-manifest.json", window.location.href).toString();
  }, []);
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname === '/') {
  //     router.replace('/feed');
  //   }
  // }, [pathname]);

  return (
    <html lang="en">
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <SDKProvider>
          <body className={inter.className}>{children}</body>
        </SDKProvider>
      </TonConnectUIProvider>
    </html>
  );
}
