import type { Metadata } from "next";
import { Roboto, Ubuntu } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.css";
import { baseUrl } from "./robots";

export const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Hello World - The developer's Swiss Army knife",
  description:
    "Hello World is a site that gathers a set of tools to make developers tasks easier!",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: `${baseUrl}/manifest.json`,
  openGraph: {
    title: "Hello World",
    description:
      "Hello World is a site that gathers a set of tools to make developers tasks easier!",
    url: baseUrl,
    siteName: "Hello World",
    images: [
      {
        url: `${baseUrl}/hello-world.png`,
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ubuntu.className} bg-waikawa-gray-50 h-dvh min-h-dvh text-waikawa-gray-950 overflow-x-hidden`}
      >
        <Header />
        <main className="flex flex-col gap-6 py-8 px-8 lg:px-24 max-w-6xl m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
