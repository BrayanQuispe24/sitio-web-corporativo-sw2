import React from 'react';
import { 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Zap, 
  Activity, 
  QrCode, 
  BrainCircuit, 
  CheckCircle2, 
  Server,
  Users
} from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-6 md:pt-24 md:pb-8 overflow-hidden bg-subtle-grid"
    >
      {/* Luces y efectos de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center my-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Titular Llamativo Compacto y de Alto Impacto */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.14]">
            Transformamos la industria del fitness con{' '}
            <span className="gradient-text block sm:inline">software de alto rendimiento</span>
          </h1>

          {/* Subtítulo enfocado en RandomSoft y FitGo! */}
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            En <strong className="text-white font-semibold">RandomSoft</strong> diseñamos soluciones digitales inteligentes, seguras y escalables para operadores deportivos de alto volumen. Nuestro software insignia <strong className="text-cyan-300 font-semibold">FitGo!</strong> fusiona visión computacional, modelos deterministas y control de accesos IoT en una plataforma unificada.
          </p>

          {/* Botones CTA */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#fitgo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base"
            >
              <span>Explorar FitGo!</span>
              <ArrowRight className="w-4 h-4 text-cyan-200" />
            </a>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold transition-all text-sm sm:text-base backdrop-blur-md hover:border-cyan-500/40"
            >
              <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              <span>Ver Demo Interactiva</span>
            </button>
          </div>

          {/* Garantías rápidas */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Despliegue en 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sin contratos forzosos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Compatible con torniquetes y molinetes
            </span>
          </div>

        </div>

        {/* Tarjetas de Métricas Destacadas dentro del primer viewport */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4.5">
          
          <div className="glass-panel rounded-xl p-3.5 sm:p-4 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Infraestructura AWS</span>
              <Server className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              +99.9%
            </div>
            <p className="mt-1 text-[11px] text-slate-400 leading-snug">
              Disponibilidad continua y redundancia multi-zona.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SLA Empresarial Certificado
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3.5 sm:p-4 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Control de Accesos</span>
              <QrCode className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              +10k
            </div>
            <p className="mt-1 text-[11px] text-slate-400 leading-snug">
              Accesos seguros procesados con código QR dinámico.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-cyan-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Cero fraude por credencial prestada
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3.5 sm:p-4 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Motor Fisiológico</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ACSM & NSCA
            </div>
            <p className="mt-1 text-[11px] text-slate-400 leading-snug">
              Algoritmos deterministas validados para prescripción física.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-amber-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Sobrecarga progresiva científica
            </div>
          </div>

          <div className="glass-panel rounded-xl p-3.5 sm:p-4 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">IA en el Borde</span>
              <BrainCircuit className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              MediaPipe
            </div>
            <p className="mt-1 text-[11px] text-slate-400 leading-snug">
              Visión computacional para análisis postural a 60 FPS.
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-purple-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              33 puntos articulares en tiempo real
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
