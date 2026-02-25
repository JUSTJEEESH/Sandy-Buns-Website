import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import MobileBottomBar from "@/components/MobileBottomBar";
import { RestaurantJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sandy Buns Bakery & Cafe | Best Breakfast in West End, Roatán",
    template: "%s | Sandy Buns Bakery & Cafe",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Sandy Buns Bakery & Cafe | Best Breakfast in West End, Roatán",
    description: siteConfig.description,
    images: [
      {
        url: "/images/sandy-buns-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Sandy Buns Bakery & Cafe - West End, Roatán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandy Buns Bakery & Cafe | Best Breakfast in West End, Roatán",
    description: siteConfig.description,
    images: ["/images/sandy-buns-logo.jpg"],
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <RestaurantJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileBottomBar />
      </body>
    </html>
  );
}
