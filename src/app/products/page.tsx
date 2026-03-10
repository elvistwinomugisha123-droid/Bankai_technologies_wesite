"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    id: "bankairx",
    name: "BankaiRx",
    tagline: "Run your pharmacy smarter. Not harder.",
    status: "Beta — Piloting in Kampala",
    statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
    problem: "Stockouts, missed refills, manual reorders cost Kampala pharmacies real money every day.",
    features: [
      "Automated stock monitoring & reorder alerts",
      "Patient refill reminders via WhatsApp",
      "Supplier communication automation",
      "Boda dispatch coordination (BodaRx agent)",
    ],
    agents: [
      { name: "PharmAssist", desc: "Monitors stock levels and tracks daily consumption patterns" },
      { name: "RefillBot", desc: "Manages patient WhatsApp reminders for prescription refills" },
      { name: "StockLink", desc: "Handles automated supplier communication and reorders" },
      { name: "BodaRx", desc: "Coordinates last-mile delivery via boda boda riders" },
    ],
    cta: "https://wa.me/256788572959?text=Hello, I'm interested in BankaiRx for my pharmacy.",
  },
  {
    id: "ate",
    name: "ATE — Academic Track Engine",
    tagline: "School management built for Uganda.",
    status: "Pilot — Mount of Olives College, Kakiiri",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    problem: "Ugandan schools manage fees, academics, and admin on paper and WhatsApp threads.",
    features: [
      "Student academic performance tracking",
      "Fee collection & MTN Mobile Money integration",
      "Admin & bursar workflow automation",
      "Head Teacher reporting via WhatsApp",
    ],
    agents: [
      { name: "Finance Agent", desc: "Handles fee records, Mobile Money reconciliation, and balance queries" },
      { name: "Admin Agent", desc: "Manages school communications and administrative workflows" },
      { name: "Head Teacher Agent", desc: "Generates academic reports and flags at-risk students" },
    ],
    cta: "https://wa.me/256788572959?text=Hello, I'm interested in ATE for my school.",
  },
  {
    id: "ucc-sentry",
    name: "UCC-Sentry",
    tagline: "Know your telecom rights. In your language.",
    status: "In Development — NiiH Ideation Program",
    statusColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    problem: "Ugandan consumers can't navigate telecom complaints without legal knowledge.",
    features: [
      "Multilingual NLP (English + Luganda)",
      "RAG-grounded legal analysis",
      "WhatsApp complaint interface",
      "NITA-U Cloud hosted (DPPA compliant)",
    ],
    agents: [
      { name: "Legal Agent", desc: "Provides RAG-grounded telecom rights information in English or Luganda" },
      { name: "Complaint Agent", desc: "Guides users through the complaint filing process step by step" },
    ],
    cta: "https://wa.me/256788572959?text=Hello, I'd like to learn more about UCC-Sentry.",
  },
  {
    id: "bodaflow",
    name: "BodaFlow",
    tagline: "Smart dispatch for Kampala's last mile.",
    status: "Coming Soon",
    statusColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    problem: "Tier 1 Kampala merchants lose money to untracked boda deliveries and cash reconciliation gaps.",
    features: [
      "Intelligent dispatch system",
      "Real-time customer notifications",
      "Automated cash reconciliation",
      "Merchant delivery dashboard",
    ],
    agents: [
      { name: "Dispatch Agent", desc: "Assigns and tracks boda riders for optimal delivery routing" },
      { name: "Reconcile Agent", desc: "Automates cash-on-delivery reconciliation for merchants" },
    ],
    cta: "https://wa.me/256788572959?text=Hello, I'd like to learn more about BodaFlow.",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-24 bg-bankai-black min-h-screen">
      {/* Header */}
      <section className="section-padding hero-bg">
        <div className="container-max">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-label mb-4 block">Our Products</span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6">
              AI Systems That{" "}
              <span className="gradient-text">Work in Uganda</span>
            </h1>
            <p className="text-bankai-muted font-body text-lg leading-relaxed">
              Four focused products. Each solving a specific, verified operational problem
              for African businesses — deployed through infrastructure you already use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <div className="section-padding bg-bankai-black">
        <div className="container-max space-y-24">
          {products.map((product, i) => (
            <motion.section
              key={product.id}
              id={product.id}
              className="scroll-mt-28"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              {/* Product Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  {product.name}
                </h2>
                <span className={`text-sm font-display font-semibold px-4 py-1.5 rounded-full border w-fit ${product.statusColor}`}>
                  {product.status}
                </span>
              </div>

              <p className="text-bankai-accent font-body font-medium text-lg mb-4">{product.tagline}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left: Problem + Features */}
                <div>
                  <div className="card-dark p-6 mb-6">
                    <h3 className="font-display font-bold text-white mb-3 text-sm uppercase tracking-wide text-bankai-accent">
                      The Problem
                    </h3>
                    <p className="text-bankai-muted font-body text-sm leading-relaxed">
                      {product.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wide text-bankai-accent">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-bankai-accent flex-shrink-0 mt-0.5" />
                          <span className="text-bankai-muted font-body text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Agents */}
                <div>
                  <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wide text-bankai-accent">
                    AI Agents
                  </h3>
                  <div className="space-y-4">
                    {product.agents.map((agent) => (
                      <div key={agent.name} className="card-dark p-5">
                        <p className="font-display font-bold text-white text-sm mb-1">{agent.name}</p>
                        <p className="text-bankai-muted font-body text-sm">{agent.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={product.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 mt-6"
                  >
                    Enquire About {product.name.split(" ")[0]} <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {i < products.length - 1 && (
                <div className="mt-24 border-b border-bankai-blue/20" />
              )}
            </motion.section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="section-padding bg-bankai-navy/30 border-t border-bankai-blue/20">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Product Fits?
            </h2>
            <p className="text-bankai-muted font-body mb-8 max-w-xl mx-auto">
              Tell us about your business on WhatsApp and we&apos;ll identify the right
              solution for your operational needs.
            </p>
            <Link
              href="https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like help choosing the right product for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Talk to Us on WhatsApp <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
