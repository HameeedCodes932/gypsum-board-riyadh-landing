'use client';

import { Phone, MessageCircle, Star } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/config';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.15)_0%,_transparent_60%)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-8 animate-fade-in-up">
          <Star size={14} className="fill-yellow-400" />
          <span>أكثر من 10 سنوات من الخبرة في الرياض</span>
          <Star size={14} className="fill-yellow-400" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
          <span className="text-white">أفضل خدمات</span>
          <br />
          <span className="gold-gradient-text text-shadow-gold">الجبس بورد في الرياض</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          نحوّل مساحاتك إلى تحفة فنية بأيدي فريق محترف. أسقف مستعارة، فواصل،
          ديكورات – بأعلى جودة وأسعار منافسة مع ضمان شامل.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up">
          <a href={`tel:${siteConfig.phone}`} className="btn-gold text-lg w-full sm:w-auto">
            <Phone size={20} />
            اتصل الآن مجاناً
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-lg w-full sm:w-auto border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
          >
            <MessageCircle size={20} />
            راسلنا واتساب
          </a>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up">
          {[
            { num: '+500', label: 'مشروع منجز' },
            { num: '+10', label: 'سنوات خبرة' },
            { num: '100%', label: 'رضا العملاء' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gold-gradient-text">{stat.num}</div>
              <div className="text-xs text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
