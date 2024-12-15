import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { Raleway } from "@next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
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
  title: "Project Lab",
  description: "Law Assignments,Dissertations, Website development",
  icons: [{ rel: "icon", url: "./icon/icon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-center" reverseOrder={false} />
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
