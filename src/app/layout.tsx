import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import JoinMovement from '@/components/JoinMovement';
import Footer from '../components/Footer';
// import ImageGallery from "@/components/ImageGallery";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warsame J Warsame - Ontario Liberal Nomination Ottawa West-Nepean",
  description: "Warsame J Warsame for Ottawa West-Nepean Ontario Liberal Nomination",
  openGraph: {
    title: "Warsame J Warsame - Ontario Liberal Nomination Ottawa West-Nepean",
    description: "Join us in building a stronger Ottawa West-Nepean community",
    url: "https://votewarsame.ca",
    siteName: "Warsame J Warsame Campaign",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/warsamecasual.jpeg", 
        width: 1200,
        height: 630,
        alt: "Warsame J Warsame Ontario Liberal Campaign"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        
        <Footer /> */
      </body>
    </html>
  );
}
