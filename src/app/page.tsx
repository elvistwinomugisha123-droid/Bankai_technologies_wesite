"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    id: "bankairx",
    name: "BankaiRx",
    tagline: "Run your pharmacy smarter. Not harder.",
    description: "Automated stock monitoring, patient refill reminders, and supplier communication for Kampala pharmacies.",
    status: "Beta",
    statusColor: "bg-green-500/20 text-green-400 border-green-500/30",
    agents: ["PharmAssist", "RefillBot", "StockLink", "BodaRx"],
    href: "/products#bankairx",
  },
  {
    id: "ate",
    name: "ATE",
    tagline: "School management built for Uganda.",
    description: "Academic tracking, fee collection with Mobile Money, and admin automation for Ugandan schools.",
    status: "Pilot",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    agents: ["Finance Agent", "Admin Agent", "Head Teacher Agent"],
    href: "/products#ate",
  },
  {
    id: "ucc-sentry",
    name: "UCC-Sentry",
    tagline: "Know your telecom rights. In your language.",
    description: "Multilingual AI for telecom consumer rights — English and Luganda, WhatsApp-native, legally grounded.",
    status: "In Development",
    statusColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    agents: ["Legal Agent", "Complaint Agent"],
    href: "/products#ucc-sentry",
  },
  {
    id: "bodaflow",
    name: "BodaFlow",
    tagline: "Smart dispatch for Kampala's last mile.",
    description: "Intelligent boda dispatch, real-time notifications, and cash reconciliation for Kampala merchants.",
    status: "Coming Soon",
    statusColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    agents: ["Dispatch Agent", "Reconcile Agent"],
    href: "/products#bodaflow",
  },
];

const whyBankai = [
  {
    icon: <Zap size={24} className="text-bankai-accent" />,
    title: "Built for African Infrastructure",
    description: "WhatsApp-native, Mobile Money integrated, designed for variable connectivity. Not retrofitted from Silicon Valley.",
  },
  {
    icon: <Shield size={24} className="text-bankai-accent" />,
    title: "Verified Real Problems",
    description: "Every product we build solves a specific, documented problem in the Ugandan market. No vaporware, no theory.",
  },
  {
    icon: <Globe size={24} className="text-bankai-accent" />,
    title: "Uganda-First, Africa-Bound",
    description: "We start in Kampala because we understand Kampala. Then we scale the proven model across the continent.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-bankai-black min-h-screen">
      {/* Hero */}
      <section className="hero-bg min-h-screen flex items-center section-padding pt-32">
        <div className="container-max w-full">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-6 block">
                AI Systems Built for Africa
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Intelligent{" "}
              <span className="gradient-text">Automation</span>
              <br />
              for African
              <br />
              Business
            </motion.h1>

            <motion.p
              className="text-bankai-muted font-body text-xl leading-relaxed max-w-2xl mb-10"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Bankai Technologies builds practical, affordable AI systems for
              African businesses — starting with Uganda. From pharmacy automation
              to school management, we build AI that works inside your infrastructure.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link href="/products" className="btn-primary inline-flex items-center gap-2 justify-center">
                See Our Products <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like to learn more."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 justify-center"
              >
                Talk to Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-bankai-blue/20 max-w-lg"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[
                { value: "4", label: "AI Products" },
                { value: "2", label: "Live Pilots" },
                { value: "NiiH", label: "Innovation Hub" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-extrabold text-bankai-accent">{stat.value}</p>
                  <p className="text-bankai-muted text-sm font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Snapshot */}
      <section className="section-padding bg-bankai-black border-t border-bankai-blue/20">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-3 block">Our Products</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              AI Systems That <span className="gradient-text">Work Today</span>
            </h2>
            <p className="text-bankai-muted font-body mt-4 max-w-xl mx-auto">
              Four focused products. Each solving a verified operational problem
              in the Ugandan market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                className="card-dark group cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={product.href} className="block p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-bankai-accent transition-colors">
                      {product.name}
                    </h3>
                    <span className={`text-xs font-display font-semibold px-3 py-1 rounded-full border ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-bankai-accent font-body text-sm font-medium mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-bankai-muted font-body text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.agents.map((agent) => (
                      <span
                        key={agent}
                        className="text-xs text-bankai-muted border border-bankai-blue/30 rounded-full px-3 py-1 font-body"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Link href="/products" className="btn-outline inline-flex items-center gap-2">
              View All Products <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Bankai */}
      <section className="section-padding bg-bankai-navy/20 border-t border-bankai-blue/20">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-3 block">Why Bankai</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              AI Built for <span className="gradient-text">Your Reality</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBankai.map((item, i) => (
              <motion.div
                key={item.title}
                className="card-dark p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-12 h-12 bg-bankai-blue/20 rounded-xl flex items-center justify-center border border-bankai-blue/30 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-bankai-muted font-body text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NiiH Badge */}
      <section className="section-padding bg-bankai-black border-t border-bankai-blue/20">
        <div className="container-max">
          <motion.div
            className="card-dark flex flex-col md:flex-row items-center gap-8 p-10 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/niih.jpg"
              alt="National ICT Innovation Hub"
              width={90}
              height={90}
              className="rounded-xl flex-shrink-0"
            />
            <div className="text-center md:text-left">
              <span className="section-label mb-2 block">Official Affiliation</span>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Uganda National ICT Innovation Hub
              </h3>
              <p className="text-bankai-muted font-body text-sm leading-relaxed">
                Bankai Technologies is an active Innovator-in-Residence at the NiiH
                Ideation Program — Uganda&apos;s national technology innovation platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-bg border-t border-bankai-blue/20">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Automate Your{" "}
              <span className="gradient-text">Operations?</span>
            </h2>
            <p className="text-bankai-muted font-body text-lg mb-10 max-w-xl mx-auto">
              Talk to us on WhatsApp. We&apos;ll assess your business and show you
              exactly what intelligent automation would look like for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like to automate my business operations."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                Start on WhatsApp <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-outline inline-flex items-center gap-2 justify-center">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
