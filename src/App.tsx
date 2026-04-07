import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import PropertiesSection from './sections/PropertiesSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <PropertiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
