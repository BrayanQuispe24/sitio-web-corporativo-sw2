import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FaqSection({ onOpenDemo }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Qué es RandomSoft y qué soluciones ofrece?',
      a: 'RandomSoft es una empresa de ingeniería de software y desarrollo de soluciones de inteligencia artificial. Desarrollamos software a medida, automatizaciones operativas complejas y somos los creadores de FitGo! (DUBSS-GYM), la plataforma SaaS integral para gestión de gimnasios y centros deportivos con IA en el borde.'
    },
    {
      q: '¿Cómo funciona la integración de FitGo! con torniquetes y molinetes físicos?',
      a: 'FitGo! se conecta de forma directa o mediante microcontroladores IoT a molinetes y torniquetes estándar de la industria. Los socios escanean su código QR dinámico desde su app o PWA y el sistema valida la membresía en menos de 250 milisegundos para ordenar la apertura.'
    },
    {
      q: '¿Por qué el código QR dinámico evita el fraude de accesos?',
      a: 'A diferencia de los códigos QR estáticos o carnets plásticos tradicionales que se pueden compartir por WhatsApp o capturas de pantalla, el código QR de FitGo! utiliza tokens criptográficos temporales que se regeneran automáticamente cada pocos segundos y pierden validez al primer uso.'
    },
    {
      q: '¿Cómo se utiliza la visión computacional en el gimnasio?',
      a: 'A través de MediaPipe Pose Estimator, el sistema rastrea 33 puntos clave del cuerpo humano a 60 FPS mediante la cámara de un teléfono o tablet. Permite evaluar la postura en ejercicios como sentadillas o peso muerto, alertando sobre riesgos de lesión sin requerir sensores corporales costosos.'
    },
    {
      q: '¿En cuánto tiempo se puede implementar la plataforma?',
      a: 'Para la suite estándar de FitGo!, el despliegue inicial y configuración de sedes se realiza en menos de 24 a 48 horas. Para desarrollos e integraciones a medida de software o IA, realizamos entregas continuas en sprints de 2 semanas.'
    },
    {
      q: '¿Cómo protegen la seguridad y privacidad de los datos?',
      a: 'Toda la infraestructura opera sobre centros de datos certificados de AWS con cifrado de extremo a extremo (AES-256 en reposo y TLS 1.3 en tránsito), copias de seguridad automáticas diarias y estricto apego a normativas de protección de datos personales.'
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-dark-950 overflow-hidden border-t border-white/5">
      {/* Luz ambiental */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-neon-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Respuestas claras a tus{' '}
            <span className="text-neon-400">dudas principales.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Todo lo que necesitas saber sobre nuestras soluciones, modelos de implementación y tecnología.
          </p>
        </div>

        {/* Acordeón FAQ */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen 
                    ? 'bg-slate-900/90 border-neon-500/40 shadow-lg' 
                    : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-neon-500/20 text-neon-400' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA debajo del FAQ */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-slate-900/60 via-slate-900 to-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">¿Tienes requerimientos técnicos específicos?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Nuestros ingenieros de arquitectura te brindan asesoría personalizada.</p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold text-xs shadow-lg shadow-neon-500/20 transition-all flex-shrink-0"
          >
            Agendar Consulta Técnica
          </button>
        </div>

      </div>
    </section>
  );
}

