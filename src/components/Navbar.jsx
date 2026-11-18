import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ activeSection, onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Misión & Visión', href: '#mision-vision' },
    { name: 'Tecnología', href: '#tecnologia' },
    { name: 'Casos', href: '#casos' },
    { name: 'FitGo!', href: '#fitgo' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#05070b]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5' 
          : 'bg-[#05070b]/60 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo Minimalista Tipográfico Puro (Fiel a la imagen de referencia) */}
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0 group">
            <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase group-hover:text-slate-200 transition-colors">
              RANDOMSOFT
            </span>
          </a>

          {/* Menú Desktop Limpio y Monocromático (Sin mezclas de colores) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs tracking-wide whitespace-nowrap transition-colors ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-slate-400 hover:text-white font-medium'
                  }`}
                >
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Botón Móvil */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070a0f]/98 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/5 hover:text-neon-300 transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3.5 px-4 flex items-center justify-center gap-2 font-bold text-slate-950 bg-neon-500 rounded-full shadow-lg shadow-neon-500/25"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Solicitar Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
