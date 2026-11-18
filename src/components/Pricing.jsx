import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Building, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  const plans = [
    {
      id: 'start',
      name: 'Plan Start / Piloto',
      badge: 'Gimnasios Boutique',
      target: 'Diseñado para centros deportivos independientes de 1 sede que buscan modernizar su control de accesos.',
      priceMonthly: 49,
      priceAnnual: 39,
      popular: false,
      ctaText: 'Iniciar Piloto de 14 Días',
      features: [
        '1 Sede física incluida',
        'Hasta 300 socios activos',
        'Control de accesos con Códigos QR dinámicos',
        'App Web Progresiva (PWA) para socios',
        'Facturación y cobros recurrentes básicos',
        'Reportes operativos en Excel y PDF',
        'Soporte estándar por ticket (tiempo de respuesta < 24h)',
        'Cifrado AES-256 y backups diarios'
      ],
      notIncluded: [
        'Módulo de IA Biomecánica (MediaPipe)',
        'Motor Experto ACSM / NSCA',
        'Notificaciones automatizadas por Telegram Bot',
        'VPC dedicada en AWS'
      ]
    },
    {
      id: 'pro',
      name: 'Plan Pro / Multi-Sede',
      badge: 'El Más Popular',
      target: 'La solución estándar para gimnasios de alto rendimiento y cadenas en expansión que buscan diferenciación tecnológica.',
      priceMonthly: 129,
      priceAnnual: 99,
      popular: true,
      ctaText: 'Solicitar Demo del Plan Pro',
      features: [
        'Hasta 3 Sedes físicas conectadas',
        'Hasta 1,500 socios activos en la red',
        'Control de accesos QR Dinámico + Control de Torniquetes IoT',
        'Módulo de IA Biomecánica (MediaPipe Pose a 60 FPS)',
        'Motor Experto ACSM / NSCA para prescripción de rutinas',
        'Integración completa con Telegram Bot (alertas instantáneas)',
        'App Web Progresiva (PWA) de marca blanca personalizable',
        'Reportes y analíticas en tiempo real (Apache ECharts)',
        'Soporte prioritario por WhatsApp y Telegram (< 2h)'
      ],
      notIncluded: [
        'Infraestructura Single-Tenant en AWS VPC',
        'SLA 99.9% firmado con penalización económica'
      ]
    },
    {
      id: 'enterprise',
      name: 'Plan Enterprise / Franquicias',
      badge: 'Cadenas y Franquicias',
      target: 'Para grandes operadores de fitness que demandan infraestructura dedicada, integraciones ERP a medida y SLA estricto.',
      priceMonthly: 299,
      priceAnnual: 239,
      popular: false,
      ctaText: 'Hablar con un Arquitecto de Soluciones',
      features: [
        'Sedes físicas ilimitadas',
        'Socios activos ilimitados',
        'Todo lo del Plan Pro incluido',
        'Nutrición Asistida por IA con balance calórico dinámico',
        'Despliegue en AWS VPC dedicada (Single-Tenant)',
        'Firmware personalizado para torniquetes y molinetes biométricos',
        'API GraphQL y Webhooks para integración con SAP / Salesforce',
        'SLA del 99.9% garantizado contractualmente',
        'Gerente de cuenta técnico dedicado y soporte 24/7'
      ],
      notIncluded: []
    }
  ];

  return (
    <section id="precios" className="py-28 bg-[#070a0f] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-neon-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Inversión clara diseñada para maximizar tu <span className="text-neon-400">margen neto</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Sin costes ocultos por usuario adicional. Elige el nivel de capacidad que tu centro deportivo necesita hoy y escala sin fricciones.
          </p>

          {/* Selector de Ciclo Mensual / Anual */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-dark-950 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                billingCycle === 'annual'
                  ? 'bg-neon-500 text-slate-950 font-bold shadow-md shadow-neon-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Facturación Anual</span>
              <span className="text-[11px] bg-slate-950 text-neon-400 font-mono px-2 py-0.5 rounded-full border border-neon-500/30">
                Ahorra 20%
              </span>
            </button>
          </div>
        </div>

        {/* Grid de 3 Planes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#0d131f] border-2 border-neon-500 shadow-2xl shadow-neon-500/20 lg:-translate-y-3'
                    : 'bg-[#080d14] border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge "Más Popular" */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Título y Target */}
                  <div className="mb-4">
                    <span className="text-xs uppercase font-mono font-semibold text-slate-400 block mb-1">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[38px]">
                      {plan.target}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="my-6 pb-6 border-b border-slate-800 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      ${price}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400">USD / mes</span>
                      <span className="text-[10px] text-slate-500">
                        {billingCycle === 'annual' ? 'Facturado anualmente' : 'Sin compromiso anual'}
                      </span>
                    </div>
                  </div>

                  {/* Lista de Features */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Incluye:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-50">
                        {plan.notIncluded.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500 line-through">
                            <span className="w-4 text-center text-slate-600 font-mono">—</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Botón CTA */}
                <div>
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-neon-500 hover:bg-neon-400 text-slate-950 hover:shadow-lg hover:shadow-neon-500/25'
                        : 'bg-[#05070b] hover:bg-slate-800 text-white border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2.5">
                    14 días de prueba gratuita • Sin tarjeta requerida
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Garantías Corporativas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-400 text-xs">
          <div className="p-5 rounded-2xl bg-[#080d14] border border-slate-800">
            <ShieldCheck className="w-5 h-5 text-neon-400 mx-auto mb-2" />
            <h4 className="font-bold text-white mb-1">Garantía de Satisfacción 30 Días</h4>
            <p>Si FitGo! no reduce tus fugas de acceso en el primer mes, cancelas sin penalizaciones.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#080d14] border border-slate-800">
            <Zap className="w-5 h-5 text-neon-400 mx-auto mb-2" />
            <h4 className="font-bold text-white mb-1">Migración de Datos Asistida</h4>
            <p>Importamos tu base de socios existente desde Excel, GymSoft o cualquier software legado.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#080d14] border border-slate-800">
            <Building className="w-5 h-5 text-neon-400 mx-auto mb-2" />
            <h4 className="font-bold text-white mb-1">Compatibilidad con Hardware</h4>
            <p>Se conecta a tus torniquetes y lectores QR existentes mediante relay IP o USB HID.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

