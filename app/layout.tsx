import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });
const display = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "DevSphere — Websites, Mobile Apps & Business Software",
  description: "DevSphere designs and builds premium websites, mobile experiences, POS, ERP and custom business software from Karachi, Pakistan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${sans.variable} ${display.variable}`}>{children}<Footer /></body></html>;
}
