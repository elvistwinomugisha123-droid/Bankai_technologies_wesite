"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const contactOptions = [
  {
    icon: <MessageCircle size={24} className="text-green-400" />,
    title: "WhatsApp",
    value: "+256 788 572959",
    description: "Fastest way to reach us. We respond within hours.",
    href: "https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like to get in touch.",
    action: "Chat on WhatsApp",
    color: "border-green-500/30 hover:border-green-500/60",
  },
  {
    icon: <Mail size={24} className="text-bankai-accent" />,
    title: "Email",
    value: "jeremymutaruha@gmail.com",
    description: "For formal enquiries, partnerships, and detailed proposals.",
    href: "mailto:jeremymutaruha@gmail.com",
    action: "Send Email",
    color: "border-bankai-blue/30 hover:border-bankai-accent/60",
  },
  {
    icon: <MapPin size={24} className="text-bankai-accent" />,
    title: "Location",
    value: "Bukoto, Kampala, Uganda",
    description: "We're based in Kampala and serve the Ugandan market.",
    href: null,
    action: null,
    color: "border-bankai-blue/30",
  },
];

export default function ContactClient() {
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
            <span className="section-label mb-4 block">Contact Us</span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6">
              Let&apos;s{" "}
              <span className="gradient-text">Build Together</span>
            </h1>
            <p className="text-bankai-muted font-body text-lg leading-relaxed">
              Whether you&apos;re a business owner ready to automate, an investor interested
              in what we&apos;re building, or an institution looking for a partner — we want
              to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-bankai-black">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactOptions.map((option, i) => (
              <motion.div
                key={option.title}
                className={`card-dark p-8 ${option.color} transition-all duration-300`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-bankai-blue/20 rounded-xl flex items-center justify-center border border-bankai-blue/30 mb-5">
                  {option.icon}
                </div>
                <h3 className="font-display font-bold text-white mb-1">{option.title}</h3>
                <p className="text-bankai-accent font-body text-sm font-medium mb-3">{option.value}</p>
                <p className="text-bankai-muted font-body text-sm leading-relaxed mb-5">
                  {option.description}
                </p>
                {option.href && option.action && (
                  <Link
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-bankai-accent font-display font-semibold text-sm hover:text-bankai-light transition-colors inline-flex items-center gap-1"
                  >
                    {option.action} <ArrowRight size={14} />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-bankai-navy/20 border-t border-bankai-blue/20">
        <div className="container-max max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label mb-4 block">How We Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              What Happens After You <span className="gradient-text">Reach Out</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "We Assess Your Operations",
                  desc: "We start by understanding your business — what you do, where manual work is costing you time and money, and what your current tools look like.",
                },
                {
                  step: "02",
                  title: "We Propose a Solution",
                  desc: "Based on your specific situation, we identify which product (or combination) fits best — and show you exactly what automation would look like for your workflow.",
                },
                {
                  step: "03",
                  title: "We Deploy and Support",
                  desc: "We handle the setup, staff onboarding, and ongoing support. No technical team required on your side.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="font-display text-3xl font-extrabold text-bankai-blue/40 flex-shrink-0 w-12">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-bankai-muted font-body text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-bankai-black border-t border-bankai-blue/20">
        <div className="container-max text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-bankai-muted font-body mb-8 max-w-lg mx-auto">
              The fastest way to reach us is WhatsApp. We reply fast.
            </p>
            <Link
              href="https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like to discuss AI automation for my business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Open WhatsApp Chat <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
