import React from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Package, 
  Building2, 
  ShieldCheck, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Facturación Automática y Pagos QR',
      tagline: 'Cero fricción en cobranzas',
      description: 'Pasarela de pagos automatizada con cobro recurrente por tarjeta y QR interoperable. Generación de facturación fiscal electrónica y conciliación bancaria automática sin intervención humana.',
      icon: CreditCard,
      badge: 'Fintech Ready',
      highlight: 'Conciliación en 2 min'
    },
    {
      title: 'App Web Progresiva para Socios (PWA)',
      tagline: 'React SPA de carga instantánea',
      description: 'Sin descargas engorrosas de App Store. Los socios acceden a una PWA ultraligera que funciona offline con almacenamiento en caché local, credencial QR siempre disponible y registro de rutinas.',
      icon: Smartphone,
      badge: 'Offline-First',
      highlight: '< 1s tiempo de carga'
    },
    {
      title: 'Arquitectura Cloud AWS & Cifrado AES-256',
      tagline: 'Seguridad de grado bancario',
      description: 'Infraestructura desplegada en AWS con contenedores orquestados, bases de datos PostgreSQL Multi-AZ con réplicas de lectura y cifrado de datos en reposo y en tránsito bajo estándar AES-256.',
      icon: Cloud,
      badge: 'Enterprise Security',
      highlight: 'SLA 99.9% uptime'
    },
    {
      title: 'Reportes y Analíticas en Tiempo Real',
      tagline: 'Dashboards inspirados en Apache ECharts',
      description: 'Visualización interactiva de KPIs cruciales: retención de socios, horas pico de tráfico, cálculo de Churn Rate proyectado mediante IA y desglose de ingresos por categoría de servicio.',
      icon: BarChart3,
      badge: 'Apache ECharts',
      highlight: 'Modelos predictivos'
    },
    {
      title: 'Inventario Deportivo y Control de Torniquetes',
      tagline: 'Integración hardware IoT',
      description: 'Control de aforo físico en tiempo real mediante torniquetes y molinetes. Trazabilidad de equipamiento, programación de mantenimiento preventivo de máquinas y control de lockers inteligentes.',
      icon: Package,
      badge: 'Hardware IoT',
      highlight: 'Aforo en vivo'
    },
    {
      title: 'Gestión Centralizada Multi-Sede y Franquicias',
      tagline: 'Escalabilidad sin límites',
      description: 'Supervisa todas tus sucursales desde una consola centralizada. Aplica políticas de precios globales o locales, transfiere membresías entre sedes y audita permisos con roles granulares RBAC.',
      icon: Building2,
      badge: 'Multi-Tenant',
      highlight: 'Sedes ilimitadas'
    }
  ];

  return (
    <section id="caracteristicas" className="py-28 bg-[#05070b] border-t border-white/5 relative overflow-hidden">
      {/* Glow ambiental verde neón */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-neon-500/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ingeniería de software robusta para la <span className="text-neon-400">máxima rentabilidad</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Cada módulo de FitGo! ha sido construido por RandomSoft con estándares corporativos para eliminar ineficiencias operativas y blindar los ingresos de tu centro deportivo.
          </p>
        </div>

        {/* Grid de 6 Tarjetas con Paleta Disciplinada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-7 bg-[#080d14] border border-slate-800/80 transition-all duration-300 hover:border-neon-500/50 hover:shadow-xl hover:shadow-neon-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icono + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-sm group-hover:scale-105 group-hover:bg-neon-500 group-hover:text-slate-950 transition-all duration-300 text-neon-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#05070b] text-slate-300 border border-slate-800">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Títulos */}
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-300 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="text-xs font-mono text-neon-400/90 mt-1">
                    {feature.tagline}
                  </div>

                  {/* Descripción */}
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Footer de la tarjeta con highlight */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-300 flex items-center gap-1.5 font-mono">
                    <CheckCircle className="w-4 h-4 text-neon-400" />
                    {feature.highlight}
                  </span>
                  <span className="text-neon-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Certificación y Seguridad */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#080d14] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-neon-500/10 border border-neon-500/30 text-neon-400 flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Garantía de Integridad y Privacidad de Datos
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Backups incrementales diarios en S3, aislamiento multi-tenant y estricto apego a normativas de privacidad biométrica.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#05070b] text-slate-300 border border-slate-800">
              ISO/IEC 27001 Ready
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-neon-500/10 text-neon-400 border border-neon-500/30">
              AWS Well-Architected
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
