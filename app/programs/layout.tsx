import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — BIRAC E-YUVA Center, GIET University",
  description: "Explore events, workshops, conferences, and outreach programs organized by BIRAC E-YUVA Center at GIET University.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
