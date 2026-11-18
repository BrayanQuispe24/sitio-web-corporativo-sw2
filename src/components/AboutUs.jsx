import React from 'react';
import { 
  Users, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Code2, 
  Layers, 
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export default function AboutUs({ onOpenDemo }) {
  const points = [
    {
      num: '01',
      title: 'Automatización inteligente de procesos críticos',
      desc: 'Eliminamos el error humano en cobros recurrentes, conciliación de caja y gestión administrativa con flujos 100% automáticos.'
    },
    {
      num: '02',
      title: 'Desarrollo de agentes y asistentes conversacionales 24/7',
      desc: 'Asistentes que responden preguntas frecuentes, procesan reservas y atienden dudas de clientes en lenguaje natural sin alucinaciones.'
    },
    {
      num: '03',
      title: 'FitGo! (DUBSS-GYM): Plataforma integral SaaS para fitness',
      desc: 'Nuestra solución insignia que combina control de torniquetes IoT, código QR dinámico anti-fraude y motor experto biomecánico.'
    },
    {
      num: '04',
      title: 'Visión computacional y procesamiento predictivo a 60 FPS',
      desc: 'Análisis articular mediante MediaPipe Pose Estimator para prevenir lesiones y supervisar la técnica en tiempo real sin latencia.'
    }
  ];

  return (
    <section id="quienes-somos" className="relative py-28 bg-[#070a0f] overflow-hidden border-t border-white/5">
      {/* Resplandor verde de fondo */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-neon-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LAYOUT SPLIT FIEL A LA SECCIÓN 2 DE LA IMAGEN DE REFERENCIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Identidad y Quiénes Somos */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Líderes en automatización e{' '}
              <span className="text-neon-400 block sm:inline">ingeniería de software</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              En <strong className="text-white font-semibold">RandomSoft</strong> somos un equipo de ingenieros de software, arquitectos en la nube y científicos de datos apasionados por construir sistemas que resuelven problemas reales.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              Nacimos para cerrar la brecha entre la inteligencia artificial avanzada y la operación diaria de las organizaciones. No entregamos código desechable: construimos arquitecturas de alta concurrencia que garantizan disponibilidad del 99.9% y retorno financiero medible.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold text-sm shadow-lg shadow-neon-500/25 transition-all"
              >
                <span>Conoce nuestras soluciones</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 flex items-center gap-6 text-xs text-slate-400">
              <div>
                <span className="block text-2xl font-bold font-mono text-white">+5 Años</span>
                <span>En el mercado tech</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="block text-2xl font-bold font-mono text-neon-400">100%</span>
                <span>Código en producción</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjetas Apiladas (Idéntico a la referencia) */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((item, index) => (
              <div 
                key={index}
                className="glass-card-neon rounded-2xl p-7 border border-slate-800/90 hover:border-neon-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-mono font-bold text-neon-400 px-2.5 py-1 rounded-lg bg-neon-500/10 border border-neon-500/20">
                    {item.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-neon-400 group-hover:bg-neon-500/10 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-neon-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
