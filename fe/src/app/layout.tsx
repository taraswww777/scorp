import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PropsWithChildren } from "react";
import { LOCALES, SITE_NAME } from "src/constants/common";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const interFont = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  robots: {
    index: false,
  },
  icons: ["/assets/favicon.ico"],
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang={LOCALES.ruRU}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
