import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/config';
import Script from 'next/script';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | أفضل خدمات جبس بورد في الرياض`,
  description:
    'شركة متخصصة في تركيب وتصميم أسقف وجدران الجبس بورد في الرياض. خبرة تتجاوز 10 سنوات، أسعار منافسة، وضمان على جميع أعمالنا. اتصل الآن للحصول على عرض سعر مجاني.',
  keywords: [
    'جبس بورد',
    'جبس بورد الرياض',
    'أسقف جبس',
    'تركيب جبس بورد',
    'ديكورات جبس',
    'فواصل جبس بورد',
    'gypsum board riyadh',
  ],
  openGraph: {
    title: `${siteConfig.businessName} | جبس بورد الرياض`,
    description: 'أفضل خدمات تركيب وتصميم الجبس بورد في الرياض – اتصل الآن!',
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-slate-950 text-white antialiased">
        {children}

        {/* Google Analytics */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
