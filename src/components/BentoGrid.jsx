import React from 'react';
import { 
  Zap, 
  Cpu, 
  QrCode, 
  BrainCircuit, 
  ShieldCheck, 
  TrendingUp, 
  Server, 
  Smartphone,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function BentoGrid({ onOpenDemo }) {
  return (
    <section id="tecnologia" className="relative py-28 bg-[#05070b] overflow-hidden border-t border-white/5">
      {/* Resplandor verde de fondo */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neon-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tecnología e innovación que{' '}
            <span className="text-neon-400">impulsa resultados.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Arquitecturas desacopladas, inteligencia artificial en el borde y hardware conectado para resolver cuellos de botella con velocidad quirúrgica.
          </p>
        </div>

        {/* BENTO GRID (Fiel al bloque de la imagen de referencia con fotografía real y tarjeta verde sólido) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* 1. TARJETA NEÓN LIME DESTACADA (Exacto a la imagen de referencia) */}
          <div className="md:col-span-2 lg:col-span-2 bg-[#22c55e] text-slate-950 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-neon-500/20 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black tracking-widest uppercase bg-slate-950/15 px-3.5 py-1 rounded-full">
                MÉTRICA DE IMPACTO
              </span>
              <div className="w-10 h-10 rounded-full bg-slate-950/15 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5 text-slate-950" />
              </div>
            </div>

            <div className="my-8">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-4">
                10x
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                Más rapidez en respuesta operativa y toma de decisiones.
              </h3>
              <p className="mt-3 text-sm sm:text-base font-semibold text-slate-950/80 leading-relaxed">
                Automatizamos desde la detección de accesos no autorizados hasta la conciliación de cuotas y reportes financieros sin demoras humanas.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-950/15 flex items-center justify-between text-xs font-bold font-mono">
              <span>RandomSoft AI Engine v2.4</span>
              <span>Tiempo real • Cero latencia</span>
            </div>
          </div>

          {/* 2. Tarjeta con FOTOGRAFÍA REAL: Equipo de Ingeniería en la noche */}
          <div className="md:col-span-1 lg:col-span-2 rounded-3xl border border-slate-800 overflow-hidden relative group min-h-[340px]">
            <img 
              src="/images/team-collab.jpg" 
              alt="Equipo de Ingenieros de Software RandomSoft colaborando" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-neon-500/20 text-neon-400 border border-neon-500/30">
                LABORATORIO DE SOFTWARE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-snug">
                Ingenieros dedicados a optimizar tu negocio
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Desarrollo continuo, pipelines CI/CD y despliegue ágil en infraestructura de nube.
              </p>
            </div>
          </div>

          {/* 3. Tarjeta Visión Computacional MediaPipe */}
          <div className="md:col-span-1 lg:col-span-2 glass-card-neon rounded-3xl p-7 border border-slate-800 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-500/10 border border-neon-500/20 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-neon-400" />
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-neon-500/10 text-neon-400 border border-neon-500/25">
                60 FPS Edge AI
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-400 transition-colors">
                Análisis Postural & Visión Computacional
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rastreo de 33 puntos esqueléticos mediante MediaPipe. Corrección de rangos de movimiento (ROM), prevención de sobrecargas y auditoría biomecánica directa desde cualquier dispositivo.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-neon-400 font-semibold">MediaPipe Pose Estimator</span>
              <span>Sin latencia externa</span>
            </div>
          </div>

          {/* 4. Tarjeta Control QR Dinámico Anti-Fraude */}
          <div className="md:col-span-1 lg:col-span-2 glass-card-neon rounded-3xl p-7 border border-slate-800 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-500/10 border border-neon-500/20 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-neon-400" />
              </div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-neon-500/10 text-neon-400 border border-neon-500/25">
                IoT & Hardware
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-400 transition-colors">
                Control de Accesos QR Dinámico
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Tokens criptográficos que rotan en la app del socio. Conexión directa con torniquetes y molinetes físicos: imposible de compartir por captura de pantalla o WhatsApp.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-neon-400 font-mono">
              <span>0% Fraude por pase de tarjeta</span>
              <span>Apertura en &lt; 250ms</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
