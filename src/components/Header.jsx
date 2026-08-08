"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Stats", href: "#stats" },
    { name: "Specialization", href: "#specialization" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-5 py-3.5 bg-white border-2 border-black rounded-2xl transition-all duration-300 ${
            scrolled ? "shadow-outline" : "shadow-outline-sm"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group font-bold tracking-tight text-lg"
          >
            <span className="w-9 h-9 bg-black text-white rounded-xl flex items-center justify-center font-mono font-extrabold text-sm border-2 border-black transition-transform group-hover:-rotate-6">
              FH
            </span>
            <span className="font-extrabold text-xl leading-none text-black tracking-tight">
              FUAD HASAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-black hover:bg-neutral-100 transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-semibold text-sm rounded-xl border-2 border-black shadow-outline-hover transition-all"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black bg-neutral-100 border-2 border-black rounded-xl"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 p-5 bg-white border-2 border-black rounded-2xl shadow-outline space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 hover:bg-neutral-100 rounded-xl transition-colors text-black border border-transparent hover:border-black"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t-2 border-black">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white font-bold rounded-xl border-2 border-black shadow-outline"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
