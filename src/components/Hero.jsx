import React from 'react';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  ShieldCheck,
  Server,
  CheckCircle2,
  ChevronRight,
  Play
} from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  const stats = [
    {
      value: '+85%',
      label: 'Eficiencia Operativa',
      subtext: 'Automatización de flujos repetitivos'
    },
    {
      value: '3x',
      label: 'Velocidad de Respuesta',
      subtext: 'Procesamiento en tiempo real'
    },
    {
      value: '24/7',
      label: 'Operaciones Autónomas',
      subtext: 'Accesos y cobros sin pausas'
    },
    {
      value: '+99.9%',
      label: 'Disponibilidad Cloud',
      subtext: 'Infraestructura redundante AWS'
    }
  ];

  const techPartners = [
    { name: 'Amazon Web Services', tag: 'AWS Cloud' },
    { name: 'OpenAI', tag: 'LLM Models' },
    { name: 'Google MediaPipe', tag: 'Computer Vision' },
    { name: 'React 18', tag: 'Frontend PWA' },
    { name: 'PostgreSQL', tag: 'Database' },
    { name: 'Docker', tag: 'Microservices' },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-[#05070b]"
    >
      {/* Resplandores ambientales verdes neón (Fiel a la referencia) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-neon-500/12 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[450px] bg-neon-500/15 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">

        {/* LAYOUT SPLIT DE 2 COLUMNAS (Exacto a la imagen de referencia) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Columna Izquierda: Copy, CTA y Métricas */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

            {/* Titular Principal Minimalista en Blanco Sólido (Fiel a la imagen elegida) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight text-white leading-[1.07]">
              Automatizamos y digitalizamos tu empresa con inteligencia artificial.
            </h1>

            {/* Subtítulo enfocado en RandomSoft y FitGo! */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Automatizamos procesos clave, reducimos costos operativos y multiplicamos el impacto de tus equipos mediante sistemas inteligentes adaptados a tu negocio. Creadores del ecosistema líder <strong className="text-white font-semibold">FitGo! (DUBSS-GYM)</strong>.
            </p>

            {/* Botones de Acción */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl neon-btn text-base font-bold transition-all shadow-xl shadow-neon-500/25"
              >
                <span>Solicitar Demo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href="#casos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold transition-all text-sm sm:text-base backdrop-blur-md hover:border-neon-500/40"
              >
                <span>Ver casos de éxito</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Garantías rápidas */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> Despliegue en 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> Sin contratos forzosos
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> Hardware IoT & Cloud AWS
              </span>
            </div>

          </div>

          {/* Columna Derecha: Fotografía Real del Keynote Speaker (Exacto a la imagen de referencia) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            {/* Halo de luz neón detrás de la foto */}
            <div className="absolute inset-0 bg-neon-500/20 blur-[90px] rounded-3xl -z-10" />

            <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/images/hero-speaker.jpg"
                alt="Conferencia Keynote de Inteligencia Artificial y Software"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Degradado inferior y lateral para fundir con el fondo negro (efecto editorial) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#05070b]/60 via-transparent to-transparent" />

              {/* Tag flotante estilo conferencia en la esquina */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dark-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      RandomSoft Keynote 2026
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    "Arquitecturas de IA y Software en Producción Real"
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 text-slate-300" />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Fila de Métricas Clave (Números en Blanco Sólido, sin sobrecarga de colores) */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Barra de Logos / Aliados Tecnológicos (Monocromáticos elegantes) */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
          {techPartners.map((tech, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors">
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
