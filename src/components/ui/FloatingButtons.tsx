'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/config';

// ── Floating WhatsApp button ──────────────────────────────
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر الواتساب"
      className="fixed bottom-24 left-6 z-40 md:bottom-8 md:left-8 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
        <MessageCircle size={28} className="text-white" />
      </span>
    </a>
  );
}

// ── Sticky mobile CTA bar ─────────────────────────────────
export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
      <div className="flex gap-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-l from-yellow-500 to-amber-600 text-slate-950 font-bold text-sm"
        >
          <Phone size={18} />
          اتصل الآن
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-bold text-sm"
        >
          <MessageCircle size={18} />
          واتساب
        </a>
      </div>
    </div>
  );
}
