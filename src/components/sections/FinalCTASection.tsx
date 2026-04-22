'use client';

import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/config';

export default function FinalCTASection() {
  return (
    <section id="cta" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.1)_0%,_transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6">
          <span className="text-white">جاهز لتحويل مساحتك؟</span>
          <br />
          <span className="gold-gradient-text">تواصل معنا الآن!</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
          احصل على استشارة مجانية وعرض سعر خاص – فريقنا جاهز لخدمتك على مدار الساعة.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${siteConfig.phone}`} className="btn-gold text-lg w-full sm:w-auto">
            <Phone size={22} />
            اتصل الآن
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-lg w-full sm:w-auto border-green-500/50 text-green-400 hover:bg-green-500/10"
          >
            <MessageCircle size={22} />
            واتساب
          </a>
        </div>
      </div>

      {/* Back to top */}
      <div className="text-center mt-16">
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-white/30 hover:text-yellow-400 text-sm transition-colors"
        >
          <ArrowUp size={16} />
          العودة للأعلى
        </a>
      </div>
    </section>
  );
}
