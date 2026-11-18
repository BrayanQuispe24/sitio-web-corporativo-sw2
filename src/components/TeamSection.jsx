import React from 'react';
import { Users, Award, ShieldCheck, Sparkles, Code2, ArrowRight } from 'lucide-react';

export default function TeamSection({ onOpenDemo }) {
  const teamRoles = [
    {
      title: 'Arquitectura Cloud & Microservicios',
      tech: 'AWS ECS • PostgreSQL • Docker',
      desc: 'Infraestructura desacoplada con balanceo de carga automático y tolerancia a fallos multi-región.'
    },
    {
      title: 'Laboratorio de Visión Artificial',
      tech: 'MediaPipe • Python • Edge AI',
      desc: 'Optimización de modelos neuronales para inferencia en tiempo real a 60 FPS directamente en el cliente.'
    },
    {
      title: 'Integración Hardware & IoT',
      tech: 'Firmware ESP32 • QR Criptográfico',
      desc: 'Diseño de protocolos de comunicación seguros con relés y torniquetes industriales en milisegundos.'
    }
  ];

  return (
    <section className="relative py-28 bg-[#05070b] overflow-hidden border-t border-white/5">
      
      {/* TIPOGRAFÍA GIGANTE EN EL FONDO (Idéntica al efecto "FERRANTE" de la imagen de referencia) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center opacity-20">
        <span className="text-[13vw] font-black uppercase tracking-widest text-outline-huge leading-none block">
          RANDOMSOFT
        </span>
      </div>

      {/* Resplandor verde ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-neon-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Un equipo apasionado por{' '}
            <span className="text-neon-400">construir software de excelencia.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ingenieros de software, científicos de datos y arquitectos de soluciones que trabajan codo a codo en cada producto.
          </p>
        </div>

        {/* 3 Fotos del equipo trabajando (Fiel al bloque de 3 fotos de la referencia) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group h-[320px]">
            <img 
              src="/images/team-collab.jpg" 
              alt="Equipo de desarrollo en sesión nocturna" 
              className="w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono text-neon-400 font-bold uppercase">Sesión de Arquitectura</span>
              <h4 className="text-base font-bold text-white mt-1">Diseño de Microservicios</h4>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group h-[320px]">
            <img 
              src="/images/hero-speaker.jpg" 
              alt="Liderazgo técnico en conferencia" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono text-neon-400 font-bold uppercase">Liderazgo & Visión</span>
              <h4 className="text-base font-bold text-white mt-1">Keynotes & Divulgación de IA</h4>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group h-[320px]">
            <img 
              src="/images/team-collab.jpg" 
              alt="Optimización de código en vivo" 
              className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[10px] font-mono text-neon-400 font-bold uppercase">Control de Calidad</span>
              <h4 className="text-base font-bold text-white mt-1">Pruebas de Carga 10k Concurrencia</h4>
            </div>
          </div>

        </div>

        {/* 3 Tarjetas de Especialidades Técnicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamRoles.map((role, i) => (
            <div key={i} className="glass-card-neon rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-neon-400 font-bold uppercase">
                  {role.tech}
                </span>
                <h4 className="text-lg font-bold text-white mt-2 mb-2">
                  {role.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
