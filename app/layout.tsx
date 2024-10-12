import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "./ui/header";
import { Quicksand } from 'next/font/google';
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Petsy",
  description: "Handmade goods by pets, for pets",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body className={quicksand.className + ` antialiased`}>
				<div className="flex-grow">
					<SiteHeader />
					{children}
				</div>
				<footer className="bg-gray-300 text-gray-600 text-center p-10">
					Database:
					<a className="m-4" target="_blank" href="/database/setup">Setup</a>
					<a className="m-4" target="_blank" href="/database/destroy">Destroy</a>
				</footer>
			</body>
		</html>
	);
}
