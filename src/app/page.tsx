import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Bankai Technologies — AI Systems Built for African Businesses",
  description:
    "Bankai Technologies builds practical AI systems for Ugandan and African businesses. Pharmacy automation, school management, and consumer advocacy — powered by AI.",
};

export default function HomePage() {
  return <HomeClient />;
}
