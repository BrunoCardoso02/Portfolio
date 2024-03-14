import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

const interSans = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Bruno - Personal Portfolio",
  description: "Personal portfolio created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">

      <body className={interSans.className}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>

    </html>
  );
}
