'use client';

import {
  Home,
  Layers,
  Sparkles,
  Wrench,
  Building2,
  Paintbrush,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'أسقف جبس بورد',
    description:
      'نصمم وننفذ أسقف مستعارة بأشكال عصرية وكلاسيكية، مع إضاءة مخفية وتشطيبات فاخرة تناسب جميع الأذواق.',
  },
  {
    icon: Layers,
    title: 'فواصل وجدران',
    description:
      'تقسيم المساحات بجدران جبس بورد عازلة للصوت والحرارة، مع إمكانية إضافة أبواب ونوافذ داخلية.',
  },
  {
    icon: Sparkles,
    title: 'ديكورات داخلية',
    description:
      'تصاميم ديكورية مبتكرة من الجبس بورد تضيف لمسة جمالية فريدة لمنزلك أو مكتبك.',
  },
  {
    icon: Wrench,
    title: 'صيانة وترميم',
    description:
      'خدمات صيانة وترميم احترافية لأعمال الجبس بورد القديمة، مع ضمان إعادتها كالجديدة.',
  },
  {
    icon: Building2,
    title: 'مشاريع تجارية',
    description:
      'تنفيذ مشاريع الجبس بورد للمحلات التجارية والمكاتب والمباني الكبيرة بمعايير احترافية.',
  },
  {
    icon: Paintbrush,
    title: 'دهانات وتشطيبات',
    description:
      'خدمات الدهان والتشطيب النهائي لأعمال الجبس بورد بألوان متنوعة وجودة عالية.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-900/50 relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-4">
            خدماتنا المتميزة
          </span>
          <h2 className="section-heading">
            <span className="gold-gradient-text">خدمات احترافية</span>{' '}
            <span className="text-white">تلبي جميع احتياجاتك</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            نقدم مجموعة شاملة من خدمات الجبس بورد بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 hover:border-yellow-500/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComp size={28} className="text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
