import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import "./globals.css";
import { baseUrl } from "./robots";
import { ubuntu } from "./utils/fonts/fonts";

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
    title: "Hello World - The developer's Swiss Army knife",
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
        <ToastContainer
          style={{ zIndex: "1000" }}
          position="top-left"
          autoClose={3000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
