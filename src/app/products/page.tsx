import { Metadata } from "next";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Our Products — BankaiRx, ATE, UCC-Sentry | Bankai Technologies",
  description:
    "Explore Bankai Technologies AI products: BankaiRx for pharmacy automation, ATE for school management, and UCC-Sentry for telecom consumer advocacy in Uganda.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
