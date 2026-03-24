import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
// import { GoogleAnalytics } from "@next/third-parties/google";
// Add GA4: npm install @next/third-parties, then uncomment and replace G-XXXXXXXXXX with your Measurement ID

export const metadata: Metadata = {
  title: {
    default: "Bankai Technologies — AI Systems Built for Africa",
    template: "%s | Bankai Technologies",
  },
  description:
    "Bankai Technologies builds practical, affordable AI systems for African businesses. From pharmacy automation to school management — intelligent systems designed for Uganda.",
  keywords: [
    "AI Uganda",
    "Africa AI",
    "pharmacy AI Kampala",
    "school management AI Uganda",
    "Bankai Technologies",
    "BankaiRx",
    "ATE academic track engine",
  ],
  metadataBase: new URL("https://bankaitech.com"),
  authors: [{ name: "Bankai Technologies" }],
  creator: "Bankai Technologies",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://bankaitech.com",
    siteName: "Bankai Technologies",
    title: "Bankai Technologies — AI Systems Built for Africa",
    description:
      "Practical AI systems for Ugandan businesses. Pharmacy automation, school management, consumer advocacy — built for African infrastructure.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Bankai Technologies — AI company Kampala Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bankai Technologies — AI Systems Built for Africa",
    description:
      "Practical AI systems for Ugandan businesses. Built in Kampala, scaling across Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bankai-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd />
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  );
}
