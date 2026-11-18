import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import BentoGrid from './components/BentoGrid';
import MissionVision from './components/MissionVision';
import CaseReels from './components/CaseReels';
import AwardAndTestimonial from './components/AwardAndTestimonial';
import ProductShowcase from './components/ProductShowcase';
import TeamSection from './components/TeamSection';
import Pricing from './components/Pricing';
import CtaBanner from './components/CtaBanner';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Observador de intersección para actualizar la pestaña activa en el Navbar
  useEffect(() => {
    const sections = [
      'inicio', 
      'quienes-somos', 
      'tecnologia', 
      'mision-vision', 
      'casos', 
      'fitgo', 
      'precios', 
      'faq', 
      'contacto'
    ];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100 flex flex-col font-sans selection:bg-neon-500 selection:text-slate-950">
      
      {/* 1. Barra de Navegación Fija con Glassmorphism y Acentos Neón */}
      <Navbar 
        activeSection={activeSection} 
        onOpenDemo={() => setIsDemoModalOpen(true)} 
      />

      {/* Contenido Principal */}
      <main className="flex-grow">
        {/* 1. HERO CON FOTOGRAFÍA REAL DE KEYNOTE SPEAKER (Fiel a la referencia) */}
        <Hero 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 2. QUIÉNES SOMOS (Estructura de la Sección 2 de la referencia con tarjetas apiladas) */}
        <AboutUs 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 3. BENTO GRID CON TARJETA VERDE SÓLIDO Y FOTO REAL DEL EQUIPO (Sección 3 de la referencia) */}
        <BentoGrid 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 4. MISIÓN, VISIÓN Y VALORES FUNDAMENTALES */}
        <MissionVision />

        {/* 5. CASOS DE ÉXITO & REELS VERTICALES CON FOTOS REALES (Secciones 4 y 6 de la referencia) */}
        <CaseReels 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 6. GALARDÓN DE EXCELENCIA & TESTIMONIO DE CLIENTE CON FOTOS REALES (Secciones 7 y 11) */}
        <AwardAndTestimonial 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 7. PRODUCT SHOWCASE INTERACTIVO (Dashboard FitGo! DUBSS-GYM) */}
        <ProductShowcase />

        {/* 8. EQUIPO CON MARCA DE AGUA TIPOGRÁFICA MONUMENTAL "RANDOMSOFT" (Sección 10 de referencia) */}
        <TeamSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 10. PLANES Y PRECIOS TRANSPARENTES */}
        <Pricing 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 11. BANNER SPOTLIGHT FINAL "¿LISTO PARA DAR EL SIGUIENTE PASO?" (Sección 13 de referencia) */}
        <CtaBanner 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 12. PREGUNTAS FRECUENTES (FAQ Acordeón) */}
        <FaqSection 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 13. FORMULARIO DE CONTACTO & AGENDAMIENTO */}
        <ContactForm />
      </main>

      {/* 14. FOOTER MULTICOLUMNA PROFESIONAL */}
      <Footer />

      {/* Modal Interactivo de Demostración */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

    </div>
  );
}
