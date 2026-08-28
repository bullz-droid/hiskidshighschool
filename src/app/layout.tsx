import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "His Kids High School — Kayunga District, Uganda",
  description: "Mixed day and boarding secondary school in Kayunga District, Uganda. Teaching Uganda's New Lower Secondary Competency-Based Curriculum (CBC), A-Level Arts and Sciences, and certified tertiary hand skills.",
  keywords: [
    "His Kids High School",
    "Kayunga District School",
    "Secondary School Uganda",
    "CBC Curriculum Uganda",
    "Vocational High School",
    "UNEB Examination Center",
    "Boarding School Uganda"
  ],
  authors: [{ name: "His Kids High School" }],
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,500;9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-brand-beige-light text-brand-ink flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
