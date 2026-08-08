import { Outfit, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "Fuad Hasan | Next.js & WordPress Specialist",
  description: "Web developer specializing in Next.js and WordPress websites built for speed and growth.",
  keywords: [
    "Fuad Hasan",
    "Next.js Developer",
    "WordPress Developer",
    "WooCommerce Specialist",
    "Web Developer"
  ],
  authors: [{ name: "Fuad Hasan" }],
  creator: "Fuad Hasan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${bricolage.variable}`}>
      <body className="bg-[#fafafa] text-[#0a0a0a] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
