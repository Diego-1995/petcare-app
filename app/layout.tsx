import type { Metadata } from "next";
import "./globals.css";
import { playfairDisplay, quattrocento } from "@/config/fonts";
import LayoutWrapper from "./layout-wrapper";

export const metadata: Metadata = {
  title: "La Casa di Oreste - Asilo & Petcare",
  description: "Benvenuto nel nostro centro petcare! Offriamo toelettatura, asilo e trattamenti esclusivi per il benessere e la bellezza del tuo amico a quattro zampe. Presto online con servizi personalizzati!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${quattrocento.variable} antialiased`}
      >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
      </body>
    </html>
  );
}
