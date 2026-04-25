"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">A</span>
            </div>
            <span
              className={`font-display font-bold text-lg transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Accredian{" "}
              <span className={scrolled ? "text-blue-600" : "text-cyan-400"}>
                Enterprise
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-blue-600" : "text-white/80 hover:text-white"
              }`}
            >
              Login
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 font-medium py-2 border-b border-gray-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a href="#contact" className="block text-center py-2 text-gray-600 font-medium">
                Login
              </a>
              <a
                href="#contact"
                className="block text-center py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
