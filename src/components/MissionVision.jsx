import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Flame, 
  Award, 
  Compass, 
  CheckCircle2, 
  TrendingUp, 
  Globe2 
} from 'lucide-react';

export default function MissionVision() {
  const values = [
    {
      icon: Zap,
      title: 'Rigor de Ingeniería',
      desc: 'Sin atajos. Diseñamos sistemas con arquitecturas sólidas, limpias y altamente escalables que nunca dejan caer tu operación diaria.'
    },
    {
      icon: Target,
      title: 'Retorno Medible (ROI)',
      desc: 'Medimos nuestro éxito en métricas concretas: horas de trabajo ahorradas, ingresos recuperados y aumento en la retención de usuarios.'
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad y Privacidad',
      desc: 'Cifrado de datos AES-256 en reposo y TLS 1.3 en tránsito, copias de seguridad automáticas y protección estricta de la información.'
    },
    {
      icon: Flame,
      title: 'Innovación Pragmática',
      desc: 'Adoptamos los avances más recientes de inteligencia artificial para resolver problemas reales, no para crear complejidad innecesaria.'
    }
  ];

  return (
    <section id="mision-vision" className="relative py-28 bg-[#070a0f] overflow-hidden border-t border-white/5">
      {/* Resplandores ambientales verdes neón */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-neon-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-neon-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Nuestra Misión, Visión y Valores
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Guiamos cada decisión de arquitectura y desarrollo bajo un propósito claro: construir la tecnología que impulsa a las empresas hacia el siguiente nivel de eficiencia y competitividad.
          </p>
        </div>

        {/* Tarjetas Misión & Visión (Estilo Bento de Alta Gama) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* TARJETA MISIÓN */}
          <div className="relative group rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0a0f17] via-[#080c14] to-[#06090e] border border-slate-800/80 hover:border-neon-500/60 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between">
            {/* Glow superior */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-neon-500/15 blur-3xl rounded-full group-hover:bg-neon-500/25 transition-all" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neon-500/15 border border-neon-500/30 text-neon-400 text-xs font-bold tracking-wider uppercase">
                  <Compass className="w-4 h-4 text-neon-400" />
                  Misión Institucional
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  PROPÓSITO PRESENTE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-5">
                Automatizar y optimizar las operaciones empresariales con software inteligente.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                Impulsar la evolución digital y operativa de empresas y centros deportivos mediante el desarrollo e implementación de software de misión crítica, arquitecturas cloud resilientes e inteligencia artificial práctica. Erradicamos la ineficiencia, protegemos los ingresos contra fraudes y empoderamos a los equipos con decisiones en tiempo real.
              </p>
            </div>

            <div className="space-y-3.5 pt-6 border-t border-slate-800/80">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                <span><strong>Sistemas autónomos:</strong> Eliminación de fricción humana en cobros, control de acceso y analíticas.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                <span><strong>Cero fugas:</strong> Blindaje de ingresos mediante códigos QR dinámicos y telemetría continua.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                <span><strong>Experiencia superior:</strong> Interfaces intuitivas que los usuarios disfrutan utilizar a diario.</span>
              </div>
            </div>
          </div>

          {/* TARJETA VISIÓN */}
          <div className="relative group rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0a0f17] via-[#080c14] to-[#06090e] border border-slate-800/80 hover:border-neon-500/60 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between">
            {/* Glow superior */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-neon-500/15 blur-3xl rounded-full group-hover:bg-neon-500/25 transition-all" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neon-500/15 border border-neon-500/30 text-neon-400 text-xs font-bold tracking-wider uppercase">
                  <Eye className="w-4 h-4 text-neon-400" />
                  Visión Hacia el Futuro
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  HORIZONTE 2030
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-5">
                Ser el referente tecnológico en Latinoamérica en software de alto impacto e IA aplicada.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                Consolidarnos como la empresa líder y referente en la región en desarrollo de software de ingeniería avanzada y productos SaaS de clase mundial —encabezados por FitGo!—. Aspiramos a redefinir la intersección entre la inteligencia artificial en el borde, la biomecánica computacional y los sistemas de alta concurrencia.
              </p>
            </div>

            <div className="space-y-3.5 pt-6 border-t border-slate-800/80">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                <span><strong>Expansión internacional:</strong> Llevar FitGo! y nuestras soluciones de software a más de 5 países.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                <span><strong>Innovación Edge AI:</strong> Procesamiento de visión computacional y modelos locales sin latencias externas.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                <span><strong>Ecosistema integral:</strong> Conexión fluida de hardware IoT, apps móviles y dashboards en una sola suite.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sección de Valores Corporativos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Los 4 Pilares que Rigen Nuestro Trabajo
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Principios inquebrantables aplicados en cada arquitectura, sprint y entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  className="p-7 rounded-2xl bg-[#090d14]/80 border border-slate-800/80 hover:border-neon-500/40 transition-all group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-500/10 border border-neon-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-neon-500/20 transition-all">
                    <Icon className="w-6 h-6 text-neon-400" />
                  </div>
                  <h5 className="text-base font-bold text-white mb-2 group-hover:text-neon-300 transition-colors">
                    {v.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
