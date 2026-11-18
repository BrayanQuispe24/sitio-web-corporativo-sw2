import React, { useState, useId } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  ShieldAlert, 
  Sparkles, 
  Users, 
  Building, 
  CheckCircle2, 
  ArrowRight,
  Percent,
  HelpCircle
} from 'lucide-react';

export default function Simulator({ onSelectPlan, onOpenDemo }) {
  const [membersPerBranch, setMembersPerBranch] = useState(450);
  const [branches, setBranches] = useState(2);
  const [membershipPrice, setMembershipPrice] = useState(45);
  const [leakageRate, setLeakageRate] = useState(12);

  const totalMembers = membersPerBranch * branches;
  const grossMonthlyRevenue = totalMembers * membershipPrice;
  const grossAnnualRevenue = grossMonthlyRevenue * 12;

  const monthlyLeakageSaved = Math.round(grossMonthlyRevenue * (leakageRate / 100));
  const annualLeakageSaved = monthlyLeakageSaved * 12;
  const annualRetentionBonus = Math.round(grossAnnualRevenue * 0.08);

  let recommendedPlan = {
    name: 'Plan Start / Piloto',
    priceMonthly: 49,
    description: 'Perfecto para centros boutique de una sola sede con control de acceso ágil.',
    badge: 'Ideal para inicio'
  };

  if (branches >= 5 || totalMembers > 2000) {
    recommendedPlan = {
      name: 'Plan Enterprise',
      priceMonthly: 299,
      description: 'Infraestructura dedicada, sedes ilimitadas y soporte técnico 24/7.',
      badge: 'Escala Masiva'
    };
  } else if (branches > 1 || totalMembers > 400) {
    recommendedPlan = {
      name: 'Plan Pro / Multi-Sede',
      priceMonthly: 129,
      description: 'Incluye microservicio de IA Biomecánica, Bot de Telegram y Analíticas ECharts.',
      badge: 'Más Recomendado'
    };
  }

  const annualSoftwareCost = recommendedPlan.priceMonthly * 12;
  const totalAnnualBenefit = annualLeakageSaved + annualRetentionBonus;
  const netAnnualBenefit = totalAnnualBenefit - annualSoftwareCost;
  const projectedROI = Math.round((totalAnnualBenefit / annualSoftwareCost) * 100);

  return (
    <section id="simulador" className="py-28 bg-[#05070b] border-t border-white/5 relative overflow-hidden">
      {/* Background glow verde neón */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-neon-500/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simula tu Retorno de Inversión <span className="text-neon-400">(ROI)</span> con FitGo!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Ajusta los parámetros de tu gimnasio y visualiza el impacto financiero directo al eliminar fugas de ingresos por accesos compartidos y automatizar tu retención con IA.
          </p>
        </div>

        {/* Contenedor del Simulador */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Columna de Sliders de Control (7 cols) */}
          <div className="lg:col-span-7 bg-[#080d14] p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon-400"></span>
                  Parámetros Operativos
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Sedes: {branches} | Socios: {totalMembers.toLocaleString()}
                </span>
              </div>

              <div className="space-y-6">
                
                {/* Slider 1: Socios por Sede */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <Users className="w-4 h-4 text-neon-400" />
                      Número de Socios Activos por Sede
                    </label>
                    <span className="text-sm font-mono font-bold text-white bg-[#05070b] px-3 py-1 rounded-lg border border-slate-800">
                      {membersPerBranch.toLocaleString()} socios
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={membersPerBranch}
                    onChange={(e) => setMembersPerBranch(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-neon-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>100 (Boutique)</span>
                    <span>1,500</span>
                    <span>3,000+ (Alto Aforo)</span>
                  </div>
                </div>

                {/* Slider 2: Número de Sedes */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <Building className="w-4 h-4 text-neon-400" />
                      Número de Sedes / Sucursales
                    </label>
                    <span className="text-sm font-mono font-bold text-white bg-[#05070b] px-3 py-1 rounded-lg border border-slate-800">
                      {branches} {branches === 1 ? 'Sede' : 'Sedes'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={branches}
                    onChange={(e) => setBranches(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-neon-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>1 Sede</span>
                    <span>5 Sedes</span>
                    <span>10 Sedes</span>
                  </div>
                </div>

                {/* Slider 3: Precio Promedio de Membresía */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-neon-400" />
                      Precio Promedio de Membresía Mensual (USD)
                    </label>
                    <span className="text-sm font-mono font-bold text-white bg-[#05070b] px-3 py-1 rounded-lg border border-slate-800">
                      ${membershipPrice} USD/mes
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={membershipPrice}
                    onChange={(e) => setMembershipPrice(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-neon-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>$15 USD</span>
                    <span>$75 USD</span>
                    <span>$150 USD</span>
                  </div>
                </div>

                {/* Slider 4: Tasa de Fuga Estimada */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-neon-400" />
                      Fuga Estimada por Accesos Compartidos / No Autorizados
                    </label>
                    <span className="text-sm font-mono font-bold text-neon-400 bg-[#05070b] px-3 py-1 rounded-lg border border-slate-800">
                      {leakageRate}% de ingresos
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="1"
                    value={leakageRate}
                    onChange={(e) => setLeakageRate(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-neon-500"
                  />
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    * El promedio de la industria sufre entre un 10% y 18% de ingresos perdidos por préstamos de tarjetas magnéticas y falta de validación biométrica/QR.
                  </p>
                </div>

              </div>
            </div>

            {/* Facturación mensual actual proyectada */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Ingresos Brutos Estimados de tu Red:</span>
              <span className="text-base font-bold font-mono text-white">
                ${grossMonthlyRevenue.toLocaleString()} USD/mes
              </span>
            </div>

          </div>

          {/* Columna de Resultados / ROI y Plan Recomendado (5 cols) */}
          <div className="lg:col-span-5 bg-[#080d14] p-6 sm:p-8 rounded-3xl border border-neon-500/40 shadow-2xl shadow-neon-500/10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase font-mono font-bold text-neon-400 tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Impacto Financiero Proyectado
              </span>
              <span className="text-[11px] bg-neon-500/10 text-neon-400 px-2.5 py-0.5 rounded-full border border-neon-500/30 font-semibold font-mono">
                Algoritmo RandomSoft
              </span>
            </div>

            {/* Gran Métrica de ROI */}
            <div className="my-6">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                Retorno sobre la Inversión (ROI) Estimado:
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                <span className="text-neon-400">+{projectedROI}%</span>
                <span className="text-sm font-semibold text-neon-400 font-sans">al año</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Por cada $1 USD invertido en FitGo!, recuperas aproximadamente ${(projectedROI / 100).toFixed(1)} USD en ingresos directos.
              </p>
            </div>

            {/* Tarjetas de Desglose de Ganancias */}
            <div className="space-y-3">
              
              {/* Ahorro por Fuga */}
              <div className="p-4 rounded-xl bg-[#05070b] border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-neon-400" />
                    Fugas Erradicadas (QR Dinámico)
                  </div>
                  <span className="text-[11px] text-slate-500">Cero carnets prestados</span>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-neon-400 font-mono">
                    +${annualLeakageSaved.toLocaleString()} USD
                  </div>
                  <span className="text-[10px] text-slate-400">/ año</span>
                </div>
              </div>

              {/* Ganancia por Retención con IA */}
              <div className="p-4 rounded-xl bg-[#05070b] border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-neon-400" />
                    Retención con IA y Biomecánica
                  </div>
                  <span className="text-[11px] text-slate-500">+15% fidelización de socios</span>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold text-white font-mono">
                    +${annualRetentionBonus.toLocaleString()} USD
                  </div>
                  <span className="text-[10px] text-slate-400">/ año</span>
                </div>
              </div>

              {/* Beneficio Neto Anual */}
              <div className="p-4 rounded-xl bg-neon-500/10 border border-neon-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neon-400">
                    Beneficio Neto Anual Proyectado
                  </div>
                  <span className="text-[10px] text-slate-400">Descontando el costo de FitGo!</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-black text-neon-400 font-mono">
                    ${netAnnualBenefit.toLocaleString()} USD
                  </div>
                  <span className="text-[10px] text-slate-300 font-semibold">Ganancia Neta</span>
                </div>
              </div>

            </div>

            {/* Plan Recomendado */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-400 font-medium">Plan FitGo! Sugerido:</span>
                <span className="text-xs font-bold text-neon-400 font-mono">
                  {recommendedPlan.badge}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#05070b] border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-white">
                    {recommendedPlan.name}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {recommendedPlan.description}
                  </p>
                </div>
                <div className="text-right flex-shrink-0 pl-3">
                  <div className="text-lg font-black text-white font-mono">
                    ${recommendedPlan.priceMonthly}
                  </div>
                  <span className="text-[10px] text-slate-400">USD/mes</span>
                </div>
              </div>

              {/* Botón de acción directo */}
              <button
                onClick={onOpenDemo}
                className="mt-4 w-full py-3.5 px-4 rounded-xl font-bold text-slate-950 bg-neon-500 hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <span>Solicitar Demo con esta Simulación</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
