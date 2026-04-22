'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: '/images/gallery-1.png',
    alt: 'تركيب سقف جبس بورد احترافي – الرياض',
    label: 'سقف مستعار',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'سقف جبس مزخرف بإضاءة مخفية',
    label: 'إضاءة مخفية',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'تركيب فواصل وحواجز جبس بورد',
    label: 'حواجز وفواصل',
  },
  {
    src: '/images/gallery-4.png',
    alt: 'سقف غرفة معيشة بإضاءة LED',
    label: 'غرفة معيشة',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'أسقف جبس بورد حديثة',
    label: 'سقف حديث',
  },
  {
    src: '/images/gallery-6.png',
    alt: 'تشطيبات فاخرة',
    label: 'تشطيب فاخر',
  },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-4">
            معرض أعمالنا
          </span>
          <h2 className="section-heading">
            <span className="gold-gradient-text">أعمالنا</span>{' '}
            <span className="text-white">تتحدث عن جودتنا</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            شاهد نماذج من مشاريعنا المنجزة في الرياض – كل عمل يعكس التزامنا بالجودة والإتقان.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(item)}
              className={`relative overflow-hidden rounded-2xl aspect-square group border border-white/5 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 ${
                idx === 0 ? 'col-span-2 sm:col-span-1 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white text-sm font-medium">{item.label}</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-bold">{selected.label}</h3>
              <p className="text-white/60 text-sm">{selected.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
