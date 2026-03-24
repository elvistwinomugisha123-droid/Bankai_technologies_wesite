import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Bankai Technologies | Bukoto, Kampala",
  description:
    "Get in touch with Bankai Technologies. WhatsApp us or email us to discuss AI automation for your business. Based in Bukoto, Kampala, Uganda.",
};

export default function ContactPage() {
  return <ContactClient />;
}
