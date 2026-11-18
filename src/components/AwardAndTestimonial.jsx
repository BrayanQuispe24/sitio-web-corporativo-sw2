import React from 'react';
import { Award, Star, Quote, ShieldCheck, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function AwardAndTestimonial({ onOpenDemo }) {
  return (
    <section className="relative py-28 bg-[#05070b] overflow-hidden border-t border-white/5">
      {/* Luz verde de fondo */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* PARTE 1: SECCIÓN DE RECONOCIMIENTO & PREMIO (Fiel a la Sección 7 de la Imagen de Referencia) */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#0a0f17] to-slate-950 border border-slate-800/90 p-8 sm:p-12 overflow-hidden relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Foto Real de Trofeo / Galardón Acrílico */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="/images/award-trophy.jpg" 
                  alt="Galardón de Excelencia en Innovación y Software" 
                  className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-neon-400">
                    EXCELLENCE IN TECH 2026
                  </span>
                  <Award className="w-4 h-4 text-neon-400" />
                </div>
              </div>
            </div>

            {/* Texto y Métricas del Galardón */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Reconocidos por la excelencia e innovación en{' '}
                <span className="text-neon-400">ingeniería de software y SaaS.</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Nuestras plataformas operativas son diseñadas bajo estrictos protocolos de resiliencia y auditoría en la nube. Con una tasa de fallos inferior al 0.02%, garantizamos que tu negocio opere sin interrupciones los 365 días del año.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-dark-950/90 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neon-400">
                    +10,000
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    Usuarios Activos Diarios
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Sin caídas de servicio
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-dark-950/90 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neon-400">
                    99.98%
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    SLA de Disponibilidad
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Infraestructura AWS Multi-AZ
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* PARTE 2: TESTIMONIO DE CLIENTE CON FOTOGRAFÍA REAL (Fiel a la Sección 11 de la Referencia) */}
        <div className="rounded-3xl bg-[#080d14] border border-slate-800/90 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Foto del Cliente / Operador */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="/images/client-founder.jpg" 
                  alt="Director de Operaciones de Red de Gimnasios" 
                  className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-lg font-bold text-white">Carlos Mendoza</div>
                  <div className="text-xs font-mono text-neon-400">Director General • Red FitClub & Wellness</div>
                </div>
              </div>
            </div>

            {/* Cita del Testimonio */}
            <div className="lg:col-span-7">
              <Quote className="w-12 h-12 text-neon-400/40 mb-4" />

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                "Antes de implementar FitGo! y el software de RandomSoft, perdíamos cerca de un 18% mensual en carnets prestados y cobranzas manuales. Hoy operamos 4 sedes de manera 100% automatizada con cero fraudes."
              </blockquote>

              <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                El soporte técnico y la estabilidad de la plataforma cambiaron radicalmente la relación con nuestros clientes y la rentabilidad de las franquicias.
              </p>

              {/* 3 Métricas de Impacto con Iconos Verdes */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-neon-400">+35%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Ingresos Recuperados</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-neon-400">0%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Fraude de Acceso QR</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-neon-400">3 Meses</div>
                  <div className="text-xs text-slate-300 mt-0.5">Retorno de Inversión (ROI)</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

