import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ModalProvider } from "@/context/ModalContext";
import GlobalModal from "@/components/GlobalModal";

export const dynamic = "force-dynamic";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "CRYPTOMINERX",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} light`}>
      <head>
        <link rel="icon" href="/cryptominerx.png" type="image/png" />
        <title>CRYPTOMINERX</title>
      </head>
      <body>
        <ModalProvider>
          <div className="min-h-screen bg-gray-50">
            {children}
          </div>
          <GlobalModal />
          <Toaster />
        </ModalProvider>
        {/* <Providers>{children}</Providers> */}
      </body>
    </html>
  );
}
