import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="relative py-28 bg-[#05070b] overflow-hidden border-t border-white/5">
      {/* Halo de luz verde central idéntico al banner final de la referencia */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-neon-500/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
          ¿Listo para dar el siguiente paso?{' '}
          <span className="text-white block mt-2">
            Automatizamos y digitalizamos tus operaciones con IA.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Diseñamos una prueba de concepto o demostración personalizada para tu modelo de negocio en menos de 24 horas. Sin compromisos forzosos.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl neon-btn text-base font-bold shadow-2xl shadow-neon-500/30 transition-all"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Solicitar Demo</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-neon-400" />
            Demostración 1-a-1 con un Ingeniero
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-neon-400" />
            Estimación de ROI sin costo
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-neon-400" />
            Despliegue ágil en nube AWS
          </span>
        </div>

      </div>
    </section>
  );
}

