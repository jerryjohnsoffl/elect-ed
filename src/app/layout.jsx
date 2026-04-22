import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/**
 * @fileoverview Root layout for ElectEd — civic education app
 * Configures Google Fonts, Analytics, and shared metadata
 */

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "600"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata = {
  title: "ElectEd — Your Interactive Election Guide",
  description:
    "Your interactive guide to the democratic process. Learn about elections, voter registration, how to vote, and test your civics knowledge with AI-powered assistance.",
  keywords: "elections, voting, civic education, democracy, voter registration, ballot",
  openGraph: {
    title: "ElectEd — Your Interactive Election Guide",
    description: "Learn about elections, voting, and democracy with AI-powered civic education.",
    type: "website",
  },
};

/**
 * Root layout component — wraps all pages with fonts, scripts, and metadata
 * @param {{ children: React.ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen font-serif">{children}</body>
    </html>
  );
}
