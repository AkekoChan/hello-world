import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Hello World - The developer's Swiss Army knife",
  description:
    "Hello World is a site that gathers a set of tools to make developers' tasks easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${ubuntu.className} bg-waikawa-gray-50 h-dvh min-h-dvh text-waikawa-gray-950`}
      >
        <Header />
        <main className="py-8 px-8 lg:px-24">{children}</main>
      </body>
    </html>
  );
}
