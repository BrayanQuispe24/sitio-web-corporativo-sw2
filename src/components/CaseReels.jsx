import React from 'react';
import { 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone,
  Flame
} from 'lucide-react';

export default function CaseReels({ onOpenDemo }) {
  const reels = [
    {
      image: '/images/gym-turnstile.jpg',
      tag: 'IoT & ACCESO QR',
      title: 'Control de accesos dinámicos en hora pico',
      client: 'FitZone Multi-Sede',
      views: '14.2k views',
      metric: '0% de accesos fraudulentos',
      duration: '0:45'
    },
    {
      image: '/images/reel-athlete.jpg',
      tag: 'BIOMECÁNICA IA',
      title: 'Corrección postural en sentadilla a 60 FPS',
      client: 'PowerGym Performance',
      views: '28.6k views',
      metric: '+48% retención de socios',
      duration: '1:12'
    },
    {
      image: '/images/reel-reception.jpg',
      tag: 'AUTOMATIZACIÓN',
      title: 'Recepción 100% digital sin colas ni morosos',
      client: 'Club Deportivo Elite',
      views: '19.8k views',
      metric: '-90% tiempo administrativo',
      duration: '0:58'
    }
  ];

  return (
    <section id="casos" className="relative py-28 bg-[#06080d] overflow-hidden border-t border-white/5">
      {/* Luz verde de fondo */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE 1: SECCIÓN HERO DE CASO DESTACADO (Idéntica a la Sección 4 de la Referencia) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ponemos la tecnología en el mundo físico y real.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              No nos limitamos a crear software que vive en pantallas: sincronizamos la nube con molinetes, cámaras de visión artificial y pasarelas de pago instantáneas para una experiencia libre de fricción.
            </p>

            <div className="mt-6 space-y-3.5">
              {[
                'Apertura de molinete en menos de 250ms mediante código QR dinámico.',
                'Detección instantánea de cuotas vencidas y bloqueo amigable con link de pago.',
                'Telemetría en vivo del aforo de cada sede para planificar personal y horarios.',
                'Prescripción inteligente de cargas con algoritmos validados ACSM y NSCA.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-neon-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold text-sm shadow-lg shadow-neon-500/25 transition-all"
              >
                <span>Solicitar Demostración en Vivo</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            {/* Mockup Vertical con Foto Real de Torniquete IoT y Play Button */}
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={onOpenDemo}>
              <img 
                src="/images/gym-turnstile.jpg" 
                alt="Validación de código QR dinámico en torniquete IoT" 
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />

              {/* Botón flotante Play animado en el centro */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-neon-500/90 text-slate-950 flex items-center justify-center shadow-xl shadow-neon-500/40 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-neon-500/20 text-neon-400 border border-neon-500/30 uppercase">
                  DEMO INTERACTIVA
                </span>
                <h4 className="text-xl font-bold text-white mt-2">
                  Ver cómo opera el escaneo dinámico en vivo
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Respuesta en tiempo real garantizada por microcontroladores IoT.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* PARTE 2: REELS / CASOS DE ÉXITO EN FORMATO VERTICAL (Idéntica a la Sección 6 de la Referencia) */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Resultados comprobados que hablan por sí mismos.
            </h3>

            <p className="mt-4 text-base text-slate-400">
              Historias de operadores y equipos que transformaron sus centros deportivos con nuestra tecnología.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reels.map((reel, index) => (
              <div 
                key={index}
                onClick={onOpenDemo}
                className="group relative rounded-3xl overflow-hidden border border-slate-800 hover:border-neon-500/50 transition-all duration-300 shadow-2xl cursor-pointer bg-dark-900 min-h-[460px] flex flex-col justify-end"
              >
                <img 
                  src={reel.image} 
                  alt={reel.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent opacity-95" />

                {/* Badge superior del reel */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-neon-400 border border-white/10 backdrop-blur-md">
                    {reel.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-300 text-[10px] font-mono border border-white/10 backdrop-blur-md">
                    <Eye className="w-3 h-3 text-neon-400" />
                    <span>{reel.views}</span>
                  </div>
                </div>

                {/* Play Icon flotante */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-neon-500/90 text-slate-950 flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-xl shadow-neon-500/30">
                  <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
                </div>

                {/* Contenido inferior */}
                <div className="relative p-6 z-10">
                  <div className="text-xs font-mono font-semibold text-neon-400 mb-1">
                    {reel.client} • {reel.duration}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-neon-300 transition-colors leading-snug">
                    {reel.title}
                  </h4>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="text-slate-400">Impacto medible:</span>
                    <span className="font-bold text-white group-hover:text-neon-400 transition-colors">
                      {reel.metric}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

