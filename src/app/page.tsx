import Navbar from '@/components/ui/Navbar';
import { FloatingWhatsApp, StickyMobileCTA } from '@/components/ui/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <GallerySection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  );
}
