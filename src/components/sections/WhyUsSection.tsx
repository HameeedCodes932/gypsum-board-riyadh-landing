'use client';

import { Award, Clock, Banknote, ThumbsUp, Shield, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'خبرة تتجاوز 10 سنوات',
    description:
      'نمتلك خبرة واسعة في تنفيذ مئات المشاريع السكنية والتجارية في الرياض.',
  },
  {
    icon: Clock,
    title: 'التزام بالمواعيد',
    description:
      'نلتزم بتسليم مشاريعنا في الوقت المحدد دون أي تأخير أو تنازل عن الجودة.',
  },
  {
    icon: Banknote,
    title: 'أسعار منافسة',
    description:
      'نقدم أفضل الأسعار في السوق مع الحفاظ على أعلى معايير الجودة والإتقان.',
  },
  {
    icon: ThumbsUp,
    title: 'رضا العملاء 100%',
    description:
      'سجل حافل بالعملاء الراضين – مراجعاتنا تتحدث عن جودة عملنا.',
  },
  {
    icon: Shield,
    title: 'ضمان شامل',
    description:
      'نقدم ضمان شامل على جميع أعمالنا لراحة بالك وثقتك الكاملة.',
  },
  {
    icon: CheckCircle2,
    title: 'مواد عالية الجودة',
    description:
      'نستخدم أفضل أنواع ألواح الجبس بورد المعتمدة والمقاومة للرطوبة والحريق.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-4">
            لماذا تختارنا
          </span>
          <h2 className="section-heading">
            <span className="text-white">نتميز عن غيرنا</span>{' '}
            <span className="gold-gradient-text">بالجودة والإتقان</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const IconComp = reason.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 text-center hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <IconComp size={30} className="text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '+500', label: 'مشروع منجز' },
            { value: '+1000', label: 'عميل سعيد' },
            { value: '+10', label: 'سنوات خبرة' },
            { value: '24/7', label: 'دعم فني' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-black gold-gradient-text">{stat.value}</div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
