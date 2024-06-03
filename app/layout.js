import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets:["latin"], style: ["normal"], weight: ['300','400','500','700'] });

export const metadata = {
  title: "Baykar Case",
  description: "Baykar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
