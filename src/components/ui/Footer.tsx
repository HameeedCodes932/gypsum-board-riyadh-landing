'use client';

import { siteConfig } from '@/lib/config';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gold-gradient-text mb-4">
              {siteConfig.businessName}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              شركة متخصصة في تصميم وتنفيذ أعمال الجبس بورد بأعلى معايير الجودة في الرياض.
              نقدم حلولاً إبداعية للأسقف والجدران والديكورات الداخلية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: 'الرئيسية', href: '#hero' },
                { label: 'خدماتنا', href: '#services' },
                { label: 'أعمالنا', href: '#gallery' },
                { label: 'تواصل معنا', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 hover:text-yellow-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-white/50 hover:text-yellow-400 text-sm transition-colors"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-green-400 text-sm transition-colors"
              >
                <MessageCircle size={16} />
                واتساب: {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={16} />
                {siteConfig.address}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-white/30 text-xs">
            © {year} {siteConfig.businessName}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
