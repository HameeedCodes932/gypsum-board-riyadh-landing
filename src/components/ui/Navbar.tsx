'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'أعمالنا', href: '#gallery' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold gold-gradient-text">
          {siteConfig.businessName}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-yellow-500/50 transition-all"
          >
            <Phone size={14} />
            اتصل الآن
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-500 transition-all"
          >
            <MessageCircle size={14} />
            واتساب
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/80 p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-lg border-t border-white/5 px-4 py-6 space-y-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-yellow-400 py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-yellow-500 text-slate-950 font-bold"
            >
              <Phone size={16} />
              اتصل
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-green-600 text-white font-bold"
            >
              <MessageCircle size={16} />
              واتساب
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
