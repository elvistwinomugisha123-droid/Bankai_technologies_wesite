"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Lightbulb, Target } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const founders = [
  {
    name: "Twinomugisha Elvis Paul",
    role: "Co-Founder & Lead Developer",
    image: "/elvis.jpg",
    alt: "Elvis Twinomugisha — Co-Founder Bankai Technologies",
    bio: "Self-taught AI systems developer building intelligent automation for African markets since 2022. Elvis leads all technical development at Bankai Technologies, architecting multi-agent AI systems adapted to African infrastructure constraints. He is an Innovator-in-Residence at the Uganda National ICT Innovation Hub.",
  },
  {
    name: "Mutaruha Jeremy",
    role: "Co-Founder & Head of Growth",
    image: "/jeremy.jpg",
    alt: "Jeremy Mutaruha — Co-Founder Bankai Technologies",
    bio: "Jeremy drives research, marketing, and business development at Bankai Technologies. He manages external relationships, sales, and strategic partnerships — bridging cutting-edge AI technology with the real-world operational needs of Ugandan businesses and institutions.",
  },
];

export default function AboutClient() {
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
            <span className="section-label mb-4 block">About Us</span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6">
              We Build AI That{" "}
              <span className="gradient-text">Works in Africa</span>
            </h1>
            <p className="text-bankai-muted font-body text-lg leading-relaxed">
              Bankai Technologies was founded on one belief: African businesses deserve
              AI systems built for their reality — not retrofitted from Silicon Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-bankai-black">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-3 block">Our Story</span>
              <h2 className="font-display text-4xl font-bold mb-6">
                The Gap We Decided to Fill
              </h2>
              <div className="space-y-4 text-bankai-muted font-body text-sm leading-relaxed">
                <p>
                  Across Uganda, pharmacy owners track stock on paper. School bursars manage
                  fees on WhatsApp threads. Telecom consumers lose money because they don&apos;t
                  know their rights. The tools to fix these problems exist — but they were
                  built for different markets, different infrastructure, different realities.
                </p>
                <p>
                  Bankai Technologies was built to change that. Starting in Kampala, we build
                  multi-agent AI systems that integrate with the tools African businesses
                  already use — WhatsApp, MTN Mobile Money, boda boda logistics — without
                  requiring expensive infrastructure or technical expertise to operate.
                </p>
                <p>
                  Every product we build solves a specific, verified problem with a specific,
                  deployable solution. No theory. No vaporware. Systems that work today.
                </p>
              </div>
            </motion.div>

            {/* Mission & Vision Cards */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-dark p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-bankai-blue/20 rounded-xl flex items-center justify-center border border-bankai-blue/30">
                    <Target size={20} className="text-bankai-accent" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">Our Mission</h3>
                </div>
                <p className="text-bankai-muted font-body text-sm leading-relaxed">
                  &quot;To build practical, affordable AI systems that solve real operational
                  problems for African businesses — starting with Uganda.&quot;
                </p>
              </div>
              <div className="card-dark p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-bankai-blue/20 rounded-xl flex items-center justify-center border border-bankai-blue/30">
                    <Lightbulb size={20} className="text-bankai-accent" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg">Our Vision</h3>
                </div>
                <p className="text-bankai-muted font-body text-sm leading-relaxed">
                  &quot;A future where every African business, from a Kampala pharmacy to a
                  rural school, runs on intelligent automation.&quot;
                </p>
              </div>
              <div className="card-dark p-6 flex items-center gap-4">
                <MapPin size={20} className="text-bankai-accent flex-shrink-0" />
                <div>
                  <p className="font-display font-semibold text-white text-sm">Based in Uganda</p>
                  <p className="text-bankai-muted text-xs font-body">Bukoto, Kampala, Uganda 🇺🇬</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
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
            <span className="section-label mb-3 block">The Team</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Meet the <span className="gradient-text">Founders</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                className="card-dark p-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-bankai-accent/30" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-bankai-accent text-sm font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-bankai-muted font-body text-sm leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NiiH Affiliation */}
      <section className="section-padding bg-bankai-black">
        <div className="container-max">
          <motion.div
            className="card-dark flex flex-col md:flex-row items-center gap-8 p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/niih.jpg"
              alt="Uganda National ICT Innovation Hub — Bankai Technologies"
              width={100}
              height={100}
              className="rounded-xl flex-shrink-0"
            />
            <div>
              <span className="section-label mb-2 block">Official Affiliation</span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Uganda National ICT Innovation Hub (NiiH)
              </h3>
              <p className="text-bankai-muted font-body text-sm leading-relaxed max-w-2xl">
                Bankai Technologies is an active Innovator-in-Residence at the NiiH Ideation Program —
                Uganda&apos;s national technology innovation platform. Our products ATE and UCC-Sentry
                are developed under this program, giving us access to Uganda&apos;s premier innovation
                ecosystem and validating our approach to AI for African markets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
              Want to Work With Us?
            </h2>
            <p className="text-bankai-muted font-body mb-8 max-w-xl mx-auto">
              Whether you&apos;re a business owner, investor, or institution — we&apos;d love to talk.
            </p>
            <Link
              href="https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like to discuss a partnership."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
