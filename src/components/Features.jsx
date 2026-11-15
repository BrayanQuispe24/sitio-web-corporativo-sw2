import React from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Package, 
  Building2, 
  ShieldCheck, 
  Lock, 
  Zap, 
  CheckCircle, 
  Cpu
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Facturación y Pagos QR Integrados',
      tagline: 'Cero fricción en cobranzas',
      description: 'Pasarela de pagos automatizada con cobro recurrente por tarjeta y QR interoperable. Generación de facturación fiscal electrónica y conciliación bancaria automática sin intervención humana.',
      icon: CreditCard,
      badge: 'Fintech Ready',
      highlight: 'Conciliación en 2 min',
      color: 'from-cyan-500/20 to-blue-500/20',
      borderHover: 'group-hover:border-cyan-500/50',
      iconColor: 'text-cyan-400'
    },
    {
      title: 'App Web Progresiva para Socios (PWA)',
      tagline: 'React SPA de carga instantánea',
      description: 'Sin descargas engorrosas de App Store. Los socios acceden a una PWA ultraligera que funciona offline con almacenamiento en caché local, credencial QR siempre disponible y registro de rutinas.',
      icon: Smartphone,
      badge: 'Offline-First',
      highlight: '< 1s tiempo de carga',
      color: 'from-emerald-500/20 to-teal-500/20',
      borderHover: 'group-hover:border-emerald-500/50',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'Arquitectura Cloud AWS & Cifrado AES-256',
      tagline: 'Seguridad de grado bancario',
      description: 'Infraestructura desplegada en AWS con contenedores orquestados, bases de datos PostgreSQL Multi-AZ con réplicas de lectura y cifrado de datos en reposo y en tránsito bajo estándar AES-256.',
      icon: Cloud,
      badge: 'Enterprise Security',
      highlight: 'SLA 99.9% uptime',
      color: 'from-blue-500/20 to-indigo-500/20',
      borderHover: 'group-hover:border-blue-500/50',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Reportes y Analíticas en Tiempo Real',
      tagline: 'Dashboards inspirados en Apache ECharts',
      description: 'Visualización interactiva de KPIs cruciales: retención de socios, horas pico de tráfico, cálculo de Churn Rate proyectado mediante IA y desglose de ingresos por categoría de servicio.',
      icon: BarChart3,
      badge: 'Apache ECharts',
      highlight: 'Modelos predictivos',
      color: 'from-purple-500/20 to-pink-500/20',
      borderHover: 'group-hover:border-purple-500/50',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Inventario Deportivo y Control de Torniquetes',
      tagline: 'Integración hardware IoT',
      description: 'Control de aforo físico en tiempo real mediante torniquetes y molinetes. Trazabilidad de equipamiento, programación de mantenimiento preventivo de máquinas y control de lockers inteligentes.',
      icon: Package,
      badge: 'Hardware IoT',
      highlight: 'Aforo en vivo',
      color: 'from-amber-500/20 to-yellow-500/20',
      borderHover: 'group-hover:border-amber-500/50',
      iconColor: 'text-amber-400'
    },
    {
      title: 'Gestión Centralizada Multi-Sede y Franquicias',
      tagline: 'Escalabilidad sin límites',
      description: 'Supervisa todas tus sucursales desde una consola centralizada. Aplica políticas de precios globales o locales, transfiere membresías entre sedes y audita permisos con roles granulares RBAC.',
      icon: Building2,
      badge: 'Multi-Tenant',
      highlight: 'Sedes ilimitadas',
      color: 'from-rose-500/20 to-red-500/20',
      borderHover: 'group-hover:border-rose-500/50',
      iconColor: 'text-rose-400'
    }
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            Capacidades de Alto Impacto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ingeniería de software robusta para la <span className="gradient-text">máxima rentabilidad</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Cada módulo de FitGo! ha sido construido por RandomSoft con estándares B2B corporativos para eliminar ineficiencias operativas y blindar los ingresos de tu centro deportivo.
          </p>
        </div>

        {/* Grid de 6 Tarjetas con Micro-interacciones Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-950/30 ${feature.borderHover} flex flex-col justify-between`}
              >
                {/* Degradado sutil en esquina */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-tr-xl rounded-bl-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Top Bar: Icono + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-lg bg-dark-950 border border-slate-800 shadow-sm group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Títulos */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mt-1">
                    {feature.tagline}
                  </div>

                  {/* Descripción */}
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Footer de la tarjeta con highlight */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {feature.highlight}
                  </span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Certificación y Seguridad */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-dark-950 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
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
            <span className="text-xs font-mono px-3 py-1.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              ISO/IEC 27001 Ready
            </span>
            <span className="text-xs font-mono px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              AWS Well-Architected
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

