import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Altivio — Digital Studio Switzerland",
    template: "%s | Altivio",
  },
  description: "Altivio krijon faqe web, e-commerce, SEO, automatizime dhe zgjidhje digjitale premium për biznese në Zvicër.",
  applicationName: "Altivio",
  keywords: [
    "Altivio",
    "agjenci digjitale Zvicër",
    "création site web Suisse romande",
    "web agency Switzerland",
    "Webdesign Schweiz",
    "e-commerce",
    "SEO",
    "SaaS",
    "AI automation",
  ],
  authors: [{ name: "Altivio" }],
  creator: "Altivio",
  publisher: "Altivio",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    alternateLocale: ["sq_AL", "en_CH", "de_CH"],
    siteName: "Altivio",
    title: "Altivio — Digital Studio Switzerland",
    description: "Web, e-commerce, SEO, SaaS, AI dhe branding për biznese ambicioze në Zvicër.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altivio — Digital Studio Switzerland",
    description: "Premium digital solutions for ambitious businesses in Switzerland.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sq" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
