'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/lib/config';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrors([]);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormState('success');
        setFormData({ name: '', phone: '', message: '' });

        // Track conversion if gtag available
        type GTagWindow = Window & { gtag: (...args: unknown[]) => void };
        if (typeof window !== 'undefined' && typeof (window as unknown as GTagWindow).gtag === 'function') {
          (window as unknown as GTagWindow).gtag('event', 'conversion', {
            send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
          });
        }
      } else {
        setFormState('error');
        setErrors(data.errors || ['حدث خطأ غير متوقع']);
      }
    } catch {
      setFormState('error');
      setErrors(['تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً.']);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-4">
            تواصل معنا
          </span>
          <h2 className="section-heading">
            <span className="gold-gradient-text">تواصل معنا الآن</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            احصل على استشارة مجانية وعرض سعر خلال 24 ساعة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-white mb-6">أرسل استفسارك</h3>

            {formState === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">تم الإرسال بنجاح!</h4>
                <p className="text-white/50">سنتواصل معك في أقرب وقت ممكن.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-6 text-yellow-400 hover:text-yellow-300 text-sm"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    الاسم الكريم
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 transition-all"
                    placeholder="أدخل اسمك"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-white/60 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 transition-all"
                    placeholder="05XXXXXXXX"
                    required
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                    الرسالة (اختياري)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 transition-all resize-none"
                    placeholder="اكتب تفاصيل طلبك..."
                  />
                </div>

                {formState === 'error' && errors.length > 0 && (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertCircle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="text-red-300 text-sm">
                      {errors.map((err, i) => (
                        <p key={i}>{err}</p>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      جارٍ الإرسال...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      أرسل الآن
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">أو تواصل مباشرة</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">اتصل بنا</div>
                    <div className="text-white font-bold" dir="ltr">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">واتساب</div>
                    <div className="text-white font-bold" dir="ltr">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Working hours */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-bold text-white mb-4">ساعات العمل</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/60">
                  <span>السبت - الخميس</span>
                  <span className="text-yellow-400">8:00 ص - 10:00 م</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>الجمعة</span>
                  <span className="text-yellow-400">4:00 م - 10:00 م</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
