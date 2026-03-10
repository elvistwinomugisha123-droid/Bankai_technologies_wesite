import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { href: "/about",    label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/blog",     label: "Blog" },
    { href: "/contact",  label: "Contact" },
  ],
  Products: [
    { href: "/products#bankairx",    label: "BankaiRx" },
    { href: "/products#ate",         label: "ATE" },
    { href: "/products#ucc-sentry",  label: "UCC-Sentry" },
    { href: "/products#bodaflow",    label: "BodaFlow" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bankai-black border-t border-bankai-blue/20">
      <div className="container-max section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Bankai Technologies"
                width={160}
                height={48}
                className="h-10 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-bankai-muted font-body text-sm leading-relaxed max-w-xs">
              Building practical AI systems for African businesses. 
              Starting in Uganda. Scaling across the continent.
            </p>
            <div className="flex items-center gap-2 mt-4 text-bankai-muted text-sm">
              <MapPin size={14} className="text-bankai-accent" />
              <span>Bukoto, Kampala, Uganda 🇺🇬</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-bankai-muted text-sm">
              <Mail size={14} className="text-bankai-accent" />
              <a
                href="mailto:jeremymutaruha@gmail.com"
                className="hover:text-bankai-accent transition-colors"
              >
                jeremymutaruha@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-bankai-muted hover:text-bankai-accent text-sm font-body transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* NiiH Badge + Copyright */}
        <div className="border-t border-bankai-blue/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/niih.jpg"
              alt="National ICT Innovation Hub"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <p className="text-xs text-bankai-muted font-body">Supported by</p>
              <p className="text-xs text-white font-display font-semibold">
                Uganda National ICT Innovation Hub
              </p>
            </div>
          </div>
          <p className="text-bankai-muted text-xs font-body">
            © {new Date().getFullYear()} Bankai Technologies. All rights reserved. Bukoto, Kampala, Uganda.
          </p>
        </div>
      </div>
    </footer>
  );
}
