import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Full Stack Developer",
  description:
    "Portfolio of Samsul Maarif, Fullstack Developer specializing in scalable web applications, modern UI systems, and performance optimization.",
  icons: {
    icon: "/DCAAF3CE-F8EB-4C78-9508-79E45BDF91D2.jpeg",
  },
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description:
      "Professional portfolio showcasing web development projects and skills",
    images: [],
  },
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
      </body>
    </html>
  );
}
