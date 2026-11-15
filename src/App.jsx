import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Simulator from './components/Simulator';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Observador de intersección para actualizar la pestaña activa en el Navbar
  useEffect(() => {
    const sections = ['inicio', 'fitgo', 'caracteristicas', 'simulador', 'precios', 'contacto'];
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
    <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 1. Barra de Navegación Fija (Glassmorphism) */}
      <Navbar 
        activeSection={activeSection} 
        onOpenDemo={() => setIsDemoModalOpen(true)} 
      />

      {/* Contenido Principal */}
      <main className="flex-grow">
        {/* 1. HERO / INICIO */}
        <Hero 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 2. SECCIÓN DEL PRODUCTO ("FitGo! - DUBSS-GYM") */}
        <ProductShowcase />

        {/* 3. CARACTERÍSTICAS */}
        <Features />

        {/* 4. SIMULADOR (Calculadora Interactiva de ROI) */}
        <Simulator 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 5. PRECIOS */}
        <Pricing 
          onOpenDemo={() => setIsDemoModalOpen(true)} 
        />

        {/* 6. CONTACTO & RANDOMSOFT HQ */}
        <ContactForm />
      </main>

      {/* 7. FOOTER */}
      <Footer />

      {/* Modal Interactivo de Demostración */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />

    </div>
  );
}

