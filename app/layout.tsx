import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ModalProvider } from "@/context/ModalContext";
import GlobalModal from "@/components/GlobalModal";
import { Lato } from "next/font/google";
export const dynamic = "force-dynamic";

// const nunito = Nunito({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-nunito",
// });


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // choose what you need
  display: "swap",
  variable: "--font-lato",
});


export const metadata: Metadata = {
  title: "Visara",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} light`}>
      <head>
        <link rel="icon" href="/visara.png" type="image/png" />
        <title>VISARA</title>
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
