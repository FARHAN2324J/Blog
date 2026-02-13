import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nuntioFont = localFont({
  src: [
    {
      path: "./fonts/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--nuntio-font",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog"
  },
  description: "Hey, Welcome to my Blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nuntioFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-(--background-color)`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
