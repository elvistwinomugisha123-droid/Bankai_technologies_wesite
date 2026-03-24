import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us — Bankai Technologies | AI Company in Kampala, Uganda",
  description:
    "Learn about Bankai Technologies, a Kampala-based AI company building intelligent systems for African businesses. Meet our founders and learn our mission.",
};

export default function AboutPage() {
  return <AboutClient />;
}
