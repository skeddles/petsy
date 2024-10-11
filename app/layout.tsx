import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./ui/header";
import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Petsy",
  description: "Handmade goods by pets, for pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={quicksand.className+` antialiased`}
      >
		<SiteHeader />
        {children}
      </body>
    </html>
  );
}
