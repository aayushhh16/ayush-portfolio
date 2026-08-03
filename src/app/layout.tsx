import type { Metadata, Viewport } from "next";
import { Inter, Syne, Geist_Mono } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { siteContent } from "@/content/site-content";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const { meta } = siteContent;

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: `%s | ${meta.title.split("—")[0]?.trim() ?? "Ayush Suman"}`,
  },
  description: meta.description || undefined,
  metadataBase: meta.url ? new URL(meta.url) : undefined,
  openGraph: {
    title: meta.title,
    description: meta.description || undefined,
    type: "website",
    locale: "en_US",
    siteName: "Ayush Suman",
    images: meta.ogImage ? [{ url: meta.ogImage }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description || undefined,
    images: meta.ogImage ? [meta.ogImage] : undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Ayush Suman" }],
  creator: "Ayush Suman",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush Suman",
    jobTitle: "Graphic Designer",
    url: meta.url || undefined,
    description: meta.description || undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
