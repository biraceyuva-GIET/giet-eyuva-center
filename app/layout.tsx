import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BIRAC E-YUVA Center – GIET University",
  description:
    "Empowering young innovators, researchers, and entrepreneurs through biotechnology innovation, translational research, mentorship, incubation, and funding support.",
  keywords: ["BIRAC", "E-YUVA", "GIET University", "Biotechnology", "Research", "Fellowship"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
