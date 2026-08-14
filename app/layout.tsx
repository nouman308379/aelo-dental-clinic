import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aelo Dental Clinic",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/*
          Aelo widget — the snippet a real clinic pastes on their site.
          data-clinic-id is Oddysey Clinic (PORTAL adapter, Oryx vendor).
          widget.js must load from the Aelo app host: the loader reads its own
          script origin to find the config API + /embed iframes. That host also
          has to list this site's origin in Clinic.embedOrigins — proxy.ts sets
          per-clinic frame-ancestors on /embed/* and fails closed.
        */}
        <Script
          src="https://dev.aelovoice.com/widget.js"
          data-clinic-id="cmsfy3slk0bjzhfp53hdcji89"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
