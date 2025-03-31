import { Italianno, Playfair_Display, Quattrocento } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"], // Regular and bold weights for headings
});

export const quattrocento = Quattrocento({
  subsets: ["latin"],
  variable: "--font-quattrocento",
  weight: ["400", "700"], // Regular to bold weights for flexibility
});

export const italianno = Italianno({
  subsets: ["latin"],
  variable: "--font-italianno",
  weight: ["400"], // Regular to bold weights for flexibility
});
