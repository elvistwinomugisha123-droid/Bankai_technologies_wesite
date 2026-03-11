"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about",    label: "About" },
  { href: "/blog",     label: "Blog" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bankai-black/90 backdrop-blur-md border-b border-bankai-blue/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-max px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Bankai Technologies"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-bankai-muted hover:text-white font-body text-sm font-medium transition-colors duration-200 hover:text-bankai-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={`https://wa.me/256788572959?text=Hello Bankai Technologies, I'd like to learn more about your AI systems.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Talk to Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bankai-black/95 backdrop-blur-md border-t border-bankai-blue/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-bankai-muted hover:text-bankai-accent font-body text-base font-medium transition-colors py-2 border-b border-bankai-blue/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`https://wa.me/256788572959`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
          >
            Talk to Us
          </Link>
        </div>
      )}
    </header>
  );
}
