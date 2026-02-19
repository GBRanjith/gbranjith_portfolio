import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boopathy Ranjith - Mobile App Developer",
  description:
    "Mobile App Developer & Flutter Specialist with 4.6+ years of experience. Crafting beautiful, scalable cross-platform mobile applications.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "iOS Developer",
    "Android Developer",
    "Boopathy Ranjith",
    "Cross-platform Development",
  ],
  authors: [{ name: "Boopathy Ranjith" }],
  openGraph: {
    title: "Boopathy Ranjith - Mobile App Developer",
    description: "Mobile App Developer & Flutter Specialist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
