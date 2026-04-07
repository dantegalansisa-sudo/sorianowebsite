import { Routes, Route } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import PropertiesSection from './sections/PropertiesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';
import PropertyDetail from './pages/PropertyDetail';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
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
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/propiedad/:id" element={<PropertyDetail />} />
      </Routes>
    </>
  );
}
