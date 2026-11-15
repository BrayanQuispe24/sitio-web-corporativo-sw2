import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';

export default function Navbar({ activeSection, onOpenDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'FitGo!', href: '#fitgo', isSpecial: true },
    { name: 'Características', href: '#caracteristicas' },
    { name: 'Simulador', href: '#simulador', badge: 'En Vivo' },
    { name: 'Precios', href: '#precios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-cyan-950/10 py-2' 
          : 'bg-dark-950/60 backdrop-blur-sm border-b border-white/5 py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Corporativo RandomSoft + Badge FitGo! */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Random<span className="text-cyan-400">Soft</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Labs
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                Creadores de <strong className="text-slate-200 font-semibold">FitGo!</strong>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
            </div>
          </a>

          {/* Enlaces de Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                  {item.badge && (
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-mono">
                      {item.badge}
                    </span>
                  )}
                  {item.isSpecial && (
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.2 rounded font-bold">
                      IA
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Destacado a la Derecha */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 rounded-lg hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Solicitar Demo</span>
            </button>
          </div>

          {/* Botón Móvil */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition-colors"
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  {item.isSpecial && (
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">
                      IA Core
                    </span>
                  )}
                </span>
                {item.badge && (
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Demo o Agendar Llamada</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

