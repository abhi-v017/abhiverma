import type { Metadata } from "next";
import { Averia_Serif_Libre, Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import logoImg from "@/assets/logo.png";

const averia = Averia_Serif_Libre({ 
  weight: ['400', '700'], 
  subsets: ["latin"], 
  variable: "--font-averia", 
  display: "swap" 
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600'], 
  subsets: ["latin"], 
  variable: "--font-poppins", 
  display: "swap" 
});

const caveat = Caveat({ 
  weight: ['500', '700'], 
  subsets: ["latin"], 
  variable: "--font-caveat", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Abhishek Verma · Code with Purpose",
  description: "Full stack web developer and AI enthusiast portfolio",
  icons: {
    icon: logoImg.src,
  },
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${averia.variable} ${poppins.variable} ${caveat.variable} font-sans bg-cream text-ink antialiased transition-colors duration-500`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
