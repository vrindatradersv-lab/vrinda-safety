import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vrindasafetysolutions.com"),
  title: {
    default: "VRINDA SAFETY SOLUTIONS | Industrial PPE & Safety Equipment Manufacturer Delhi NCR",
    template: "%s | VRINDA Safety Solutions",
  },
  description:
    "VRINDA Safety Solutions — Premier manufacturer, wholesaler & bulk supplier of certified Personal Protective Equipment (PPE), Safety Shoes, ISI Safety Helmets, Reflective Jackets, Full Body Fall Protection Harnesses, Road Safety & Lockout/Tagout (LOTO) products in Bawana Industrial Area, Delhi NCR, India.",
  keywords: [
    "VRINDA SAFETY SOLUTIONS",
    "Vrinda Safety",
    "Verinda Tool",
    "Verinda Safety",
    "Varinda Safety",
    "Vrinda Tools",
    "Vrinda Traders",
    "Vrinda Safety Bawana",
    "Vrinda Safety Delhi",
    "PPE manufacturer in Delhi",
    "industrial safety equipment supplier Delhi NCR",
    "safety shoes manufacturer Delhi",
    "safety shoe wholesaler Bawana",
    "safety helmet manufacturer Delhi",
    "ISI safety helmets",
    "reflective safety jacket manufacturer",
    "high visibility vests Delhi",
    "fall protection harness manufacturer Bawana",
    "road safety equipment supplier Delhi",
    "traffic cones manufacturer Delhi",
    "LOTO products supplier Delhi NCR",
    "lockout tagout kit supplier",
    "industrial safety products Bawana Sector 5",
    "safety equipment supplier Kundli",
    "safety products Narela",
    "PPE supplier Okhla",
    "safety equipment Gurgaon",
    "PPE supplier Noida",
    "steel toe safety shoes wholesale",
    "fire extinguisher supplier Delhi",
  ],
  authors: [{ name: "VRINDA SAFETY SOLUTIONS", url: "https://vrindasafetysolutions.com" }],
  creator: "VRINDA SAFETY SOLUTIONS",
  publisher: "VRINDA SAFETY SOLUTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://vrindasafetysolutions.com",
  },
  openGraph: {
    title: "VRINDA SAFETY SOLUTIONS | Certified Industrial PPE & Safety Equipment Delhi NCR",
    description:
      "Premier manufacturer & bulk supplier of certified Safety Shoes, Helmets, High-Vis Vests, Fall Arrest Harnesses, Road Safety & LOTO in Delhi NCR. D-303, Bawana Industrial Area.",
    url: "https://vrindasafetysolutions.com",
    siteName: "VRINDA SAFETY SOLUTIONS",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero/hero-head.jpg",
        width: 1200,
        height: 630,
        alt: "VRINDA Safety Solutions - Complete Industrial PPE Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VRINDA SAFETY SOLUTIONS | Industrial PPE Manufacturer Delhi NCR",
    description:
      "Safety Shoes, ISI Helmets, Fall Arrest Harnesses, Reflective Vests, Road Safety & LOTO equipment. Bawana, Delhi.",
    images: ["/hero/hero-head.jpg"],
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
    google: "J8oEJXRob3_CMb6YMt4IsB4OVzfw5MevJ6BCv_nILVo",
  },
  category: "Industrial Safety Equipment & PPE",
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Bawana, New Delhi",
    "geo.position": "28.7997;77.0422",
    ICBM: "28.7997, 77.0422",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Manufacturer", "WholesaleStore"],
      "@id": "https://vrindasafetysolutions.com/#organization",
      name: "VRINDA SAFETY SOLUTIONS",
      alternateName: [
        "Vrinda Safety",
        "Verinda Tool",
        "Verinda Safety",
        "Varinda Safety",
        "Vrinda Tools",
        "Vrinda Traders",
        "Vrinda Safety Solutions Bawana",
      ],
      url: "https://vrindasafetysolutions.com",
      logo: "https://vrindasafetysolutions.com/icon.svg",
      image: "https://vrindasafetysolutions.com/hero/hero-head.jpg",
      description:
        "Premier manufacturer and wholesale bulk supplier of certified industrial safety products, PPE, safety shoes, ISI helmets, reflective jackets, fall protection harnesses, road safety and LOTO equipment based in Bawana Industrial Area, Delhi NCR.",
      telephone: "+91-9999202008",
      email: "Vrindatraderssv@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "D-303, Bawana Ind. Area Sector-5",
        addressLocality: "Bawana, New Delhi",
        addressRegion: "Delhi",
        postalCode: "110039",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.7997,
        longitude: 77.0422,
      },
      areaServed: [
        "Delhi",
        "Delhi NCR",
        "Bawana",
        "Narela",
        "Kundli",
        "Okhla",
        "Noida",
        "Gurugram",
        "Faridabad",
        "Ghaziabad",
        "Manesar",
        "India",
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://vrindasafetysolutions.com/#website",
      url: "https://vrindasafetysolutions.com",
      name: "VRINDA SAFETY SOLUTIONS",
      alternateName: [
        "Vrinda Safety",
        "Verinda Tool",
        "Vrinda Safety Solutions Delhi",
      ],
      publisher: {
        "@id": "https://vrindasafetysolutions.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sora.variable} h-full bg-white antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZWK8789VX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZWK8789VX');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
