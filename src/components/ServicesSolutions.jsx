import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  Database, 
  Dumbbell, 
  ScanFace, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function ServicesSolutions({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: 'automation',
      title: 'Automatización inteligente de procesos y flujos clave',
      tag: 'Eficiencia Operativa',
      description: 'Digitalizamos y automatizamos flujos manuales repetitivos: cobros recurrentes, alertas por morosidad, facturación electrónica y reconciliación contable sin intervención humana.',
      points: [
        'Eliminación del 90% de tareas administrativas manuales',
        'Notificaciones y cobros automáticos vía WhatsApp y Telegram',
        'Sincronización multi-sede en tiempo real con latencia < 200ms'
      ]
    },
    {
      id: 'fitgo',
      title: 'Plataforma SaaS FitGo! (DUBSS-GYM) para Centros Deportivos',
      tag: 'Producto Insignia',
      description: 'Ecosistema integral diseñado para gimnasios y cadenas de fitness: control de torniquetes IoT, pasarela de pago, PWA para socios y métricas de retención.',
      points: [
        'Control de accesos con código QR dinámico anti-fraude',
        'Prescripción de rutinas con rigor científico ACSM & NSCA',
        'Disponibilidad Cloud 99.98% con arquitectura AWS'
      ]
    },
    {
      id: 'vision',
      title: 'Sistemas de Visión Computacional e Inteligencia en el Borde',
      tag: 'IA Avanzada',
      description: 'Procesamiento en tiempo real de video a 60 FPS con MediaPipe. Detección de 33 puntos biomecánicos para corrección postural y prevención de lesiones.',
      points: [
        'Análisis articular en milisegundos sin requerir GPUs costosas',
        'Auditoría visual de aforo y seguridad física de instalaciones',
        'Compatibilidad con cámaras web y dispositivos móviles estándar'
      ]
    },
    {
      id: 'assistants',
      title: 'Desarrollo de Asistentes IA y Agentes Conversacionales 24/7',
      tag: 'Atención Inteligente',
      description: 'Agentes conversacionales impulsados por modelos de lenguaje adaptados al negocio. Responden dudas, agendan citas y gestionan reservas con lenguaje natural.',
      points: [
        'Atención continua 24 horas los 7 días de la semana',
        'Integración nativa con bases de datos y CRM empresarial',
        'Respuestas precisas sin alucinaciones bajo contexto cerrado'
      ]
    },
    {
      id: 'custom',
      title: 'Integración de Arquitecturas Cloud y Software a Medida',
      tag: 'Ingeniería Factory',
      description: 'Conectamos plataformas legacy con APIs modernas, migramos infraestructuras a contenedores Docker/Kubernetes y desarrollamos módulos específicos según tu necesidad.',
      points: [
        'Cifrado de datos en reposo y en tránsito (AES-256)',
        'Pipelines de CI/CD automatizados para despliegues continuos',
        'Monitoreo continuo de salud del sistema y telemetría'
      ]
    }
  ];

  return (
    <section id="soluciones" className="relative py-24 bg-dark-950 overflow-hidden border-t border-white/5">
      {/* Luz verde de fondo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda (Fiel a la referencia) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Diseñamos sistemas inteligentes{' '}
              <span className="text-neon-400 block sm:inline">a la medida de tu negocio</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Combinamos ingeniería de software de primer nivel, algoritmos de visión y modelos predictivos para resolver los desafíos operativos más exigentes. Desde soluciones completas empaquetadas como FitGo! hasta arquitecturas personalizadas para empresas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold transition-all shadow-lg shadow-neon-500/25 text-sm"
              >
                <span>Agendar Demostración</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#fitgo"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-semibold transition-all"
              >
                <span>Ver FitGo! en Acción</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <p className="text-xs text-slate-400 font-mono">
                "La automatización y la IA no reemplazan a tus equipos: multiplican su capacidad y liberan su talento de tareas rutinarias."
              </p>
              <div className="mt-2 text-xs font-semibold text-neon-400">
                — Equipo de Arquitectura RandomSoft
              </div>
            </div>
          </div>

          {/* Columna Derecha: Stack de Soluciones con Acabado Premium */}
          <div className="lg:col-span-7 space-y-4">
            {solutions.map((item, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-300 border ${
                    isSelected 
                      ? 'bg-gradient-to-br from-slate-900/90 to-dark-900 border-neon-500/60 shadow-xl shadow-neon-500/10 scale-[1.01]' 
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                        isSelected 
                          ? 'bg-neon-500 text-slate-950' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        0{index + 1}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-neon-500/10 text-neon-400 border border-neon-500/20">
                        {item.tag}
                      </span>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? 'rotate-90 text-neon-400' : 'text-slate-500'
                    }`} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mt-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Detalle expandible con puntos clave */}
                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-slate-800 space-y-2 animate-in fade-in duration-300">
                      {item.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

