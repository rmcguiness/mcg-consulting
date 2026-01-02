import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mcgconsulting.com";

export const metadata: Metadata = {
  title: {
    default: "MCG Consulting - Web Development & Digital Solutions",
    template: "%s | MCG Consulting",
  },
  description: "Transform your digital presence with modern web development, UI/UX design, and digital strategy solutions. Expert consulting services for businesses looking to excel online.",
  keywords: [
    "web development",
    "web consulting",
    "UI/UX design",
    "digital strategy",
    "web design",
    "performance optimization",
    "web maintenance",
    "custom web applications",
    "modern web solutions",
    "business consulting",
  ],
  authors: [{ name: "MCG Consulting" }],
  creator: "MCG Consulting",
  publisher: "MCG Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "MCG Consulting - Web Development & Digital Solutions",
    description: "Transform your digital presence with modern web development, UI/UX design, and digital strategy solutions. Expert consulting services for businesses looking to excel online.",
    siteName: "MCG Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MCG Consulting - Web Development & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCG Consulting - Web Development & Digital Solutions",
    description: "Transform your digital presence with modern web development, UI/UX design, and digital strategy solutions.",
    images: ["/og-image.jpg"],
    creator: "@mcgconsulting",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a8a",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MCG Consulting",
  description: "Professional web consulting services specializing in web development, UI/UX design, and digital strategy",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: "English",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom web applications built with modern frameworks and best practices",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "Beautiful, intuitive interfaces that users love to interact with",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Strategy",
          description: "Data-driven strategies to grow your online presence and reach your goals",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consulting",
          description: "Expert guidance to help you make the right technology decisions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Optimization",
          description: "Speed up your site and improve user experience with optimized code",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maintenance & Support",
          description: "Ongoing support to keep your digital assets running smoothly",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}

