import React from 'react';
import { Cpu, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Columna Marca RandomSoft & FitGo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                Random<span className="text-cyan-400">Soft</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              RandomSoft es una empresa de software factory e ingeniería aplicada especializada en arquitecturas Cloud de alta disponibilidad, inteligencia artificial en el borde y productos SaaS B2B para centros de fitness y wellness de alta concurrencia.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono">FitGo! Engine v2.4 • Sistemas 99.98% Operativos</span>
            </div>
          </div>

          {/* Columna Navegación Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#fitgo" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  FitGo! (DUBSS-GYM)
                  <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1 rounded">IA</span>
                </a>
              </li>
              <li>
                <a href="#caracteristicas" className="hover:text-cyan-400 transition-colors">Características</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-cyan-400 transition-colors">Simulador ROI</a>
              </li>
              <li>
                <a href="#precios" className="hover:text-cyan-400 transition-colors">Planes y Precios</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto & Demo</a>
              </li>
            </ul>
          </div>

          {/* Columna Módulos Técnicos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Arquitectura FitGo!
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">Control QR Dinámico & IoT</li>
              <li className="text-slate-300">MediaPipe Pose Estimator</li>
              <li className="text-slate-300">Motor Experto ACSM / NSCA</li>
              <li className="text-slate-300">Telegram Bot Webhooks</li>
              <li className="text-slate-300">React PWA Offline-First</li>
              <li className="text-slate-300">Cifrado AES-256 en AWS</li>
            </ul>
          </div>

          {/* Columna Legal & Corporativo */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Legal & Cumplimiento
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Políticas de Privacidad</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Términos del Servicio SaaS</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Seguridad y Protección de Datos</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Acuerdo de Nivel de Servicio (SLA)</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">Reporte de Vulnerabilidad</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Copyright © 2026 RandomSoft Inc. - Creadores de FitGo! (DUBSS-GYM). Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Desarrollado con precisión para gimnasios de alto rendimiento
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
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

