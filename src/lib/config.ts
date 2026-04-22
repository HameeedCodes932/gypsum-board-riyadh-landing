// ──────────────────────────────────────────────────
// Site-wide configuration — edit this file to update
// business info without changing any component code.
// ──────────────────────────────────────────────────

export const siteConfig = {
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'شركة الريادة للجبس بورد',
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+923171297019',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923171297019',
  city: process.env.NEXT_PUBLIC_CITY || 'الرياض، المملكة العربية السعودية',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'الرياض، حي النسيم',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'السلام عليكم، أرغب في الاستفسار عن خدمات الجبس بورد'
)}`;
