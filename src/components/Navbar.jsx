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
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo Minimalista de Alto Impacto (Fiel a la referencia) */}
          <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-neon-500 flex items-center justify-center shadow-lg shadow-neon-500/20 group-hover:scale-105 transition-transform">
              <span className="text-slate-950 font-black text-sm tracking-tighter">R</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-neon-300 transition-colors uppercase">
                Random<span className="text-neon-400">Soft</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neon-400 animate-pulse"></span>
            </div>
          </a>

          {/* Menú Desktop Limpio y en una sola línea (Sin desbordes ni texto partido) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide whitespace-nowrap rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-neon-400 bg-neon-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && <span className="w-1 h-1 rounded-full bg-neon-400" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Botón CTA Neón (Fiel al botón de la referencia) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-neon-500/25 hover:shadow-neon-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
            >
              <span>Solicitar Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>

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
