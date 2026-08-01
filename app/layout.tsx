import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const display = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Muhib Mirza — Full-Stack & AI Developer",
  description: "Full-stack software developer and AI developer building production web apps, ERP systems, LMS platforms and e-commerce experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${sans.variable} ${display.variable}`}>{children}<Footer /></body></html>;
}
