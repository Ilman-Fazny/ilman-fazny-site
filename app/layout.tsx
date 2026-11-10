import type { Metadata } from "next";
import { Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilman Fazny | Software Engineer",
  description: "I build backend and full-stack systems for real businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${schibsted.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-background text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
