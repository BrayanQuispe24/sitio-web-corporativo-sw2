import React from 'react';
import { Cpu, ShieldCheck, Heart, ArrowUp, Sparkles, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080c] border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Sutil resplandor de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-neon-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Columna Marca RandomSoft & FitGo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neon-500 p-0.5 flex items-center justify-center shadow-lg shadow-neon-500/20">
                <div className="w-full h-full bg-dark-950 rounded-[9px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-neon-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                Random<span className="text-neon-400">Soft</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Factoría de software e ingeniería aplicada especializada en inteligencia artificial en el borde, arquitecturas Cloud de alta disponibilidad y plataformas SaaS para empresas y centros de fitness de alto rendimiento.
            </p>

            <div className="flex items-center gap-2 text-xs text-neon-400 pt-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-neon-400 animate-pulse"></span>
              <span>RandomSoft AI Engine • Sistemas 99.98% Operativos</span>
            </div>
          </div>

          {/* Columna Identidad Institucional */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Compañía
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#quienes-somos" className="hover:text-neon-400 transition-colors">Quiénes Somos</a>
              </li>
              <li>
                <a href="#mision-vision" className="hover:text-neon-400 transition-colors">Misión & Visión</a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-neon-400 transition-colors">Soluciones Inteligentes</a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-neon-400 transition-colors">Tecnología & Bento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-neon-400 transition-colors">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-neon-400 transition-colors">Contacto & Cotizaciones</a>
              </li>
            </ul>
          </div>

          {/* Columna Soluciones & FitGo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Plataformas & IA
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#fitgo" className="hover:text-neon-400 transition-colors flex items-center gap-1.5">
                  FitGo! (DUBSS-GYM)
                  <span className="text-[10px] bg-neon-500/20 text-neon-300 px-1 rounded font-bold">CORE</span>
                </a>
              </li>
              <li className="text-slate-300">Control QR Dinámico & IoT</li>
              <li className="text-slate-300">MediaPipe Pose Estimator (60 FPS)</li>
              <li className="text-slate-300">Motor Experto ACSM / NSCA</li>
              <li className="text-slate-300">Asistentes Autónomos 24/7</li>
            </ul>
          </div>

          {/* Columna Legal & Cumplimiento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Seguridad & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#contacto" className="hover:text-neon-400 transition-colors">Políticas de Privacidad</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-neon-400 transition-colors">Términos del Servicio SaaS</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-neon-400 transition-colors">Cifrado de Datos AES-256</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-neon-400 transition-colors">Acuerdo de Nivel de Servicio (SLA)</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-neon-400 transition-colors">Reporte de Vulnerabilidad</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © 2026 RandomSoft Inc. - Ingeniería de Software & Creadores de FitGo! (DUBSS-GYM). Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Desarrollado con precisión e inteligencia artificial
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-neon-400 border border-slate-800 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
