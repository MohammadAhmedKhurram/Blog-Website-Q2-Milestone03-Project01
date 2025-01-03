import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Barriecito } from "@next/font/google";

const barriecito = Barriecito({
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${barriecito.className} ${geistMono.variable} bg-gradient-to-br from-teal-500 via-purple-500 to-blue-500 antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}