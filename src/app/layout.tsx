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
  title: "VRINDA SAFETY SOLUTIONS | Safety Today, Secure Tomorrow",
  description:
    "Manufacturer & supplier of Personal Protective Equipment, Safety Shoes, Road Safety and Lock-Out/Tag-Out products. Bawana Industrial Area, New Delhi.",
  verification: {
    google: "J8oEJXRob3_CMb6YMt4IsB4OVzfw5MevJ6BCv_nILVo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sora.variable} h-full bg-white antialiased`}
    >
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
