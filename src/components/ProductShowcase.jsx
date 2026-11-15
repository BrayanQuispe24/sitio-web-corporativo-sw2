import React, { useState } from 'react';
import { 
  QrCode, 
  BrainCircuit, 
  Dumbbell, 
  Apple, 
  Send, 
  Check, 
  ShieldCheck, 
  Activity, 
  Zap, 
  ChevronRight, 
  Layers, 
  MonitorSmartphone, 
  Terminal,
  ScanLine,
  Flame,
  Award
} from 'lucide-react';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('access');

  const pillars = [
    {
      id: 'access',
      title: 'Control de Acceso y Membresías',
      tagline: 'QR Dinámico anti-fraude y Bot de Telegram',
      icon: QrCode,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/40',
      description: 'Generación de credenciales QR efímeras con rotación de tokens cada 15 segundos. Integración directa con torniquetes biométricos y notificaciones instantáneas de llegada, alertas de vencimiento y cobros mediante Telegram Bot automatizado.',
      bullets: [
        'Tokens QR dinámicos no clonables (imposible compartir captura de pantalla)',
        'Notificaciones Push instantáneas vía Telegram Bot para administradores y socios',
        'Validación en menos de 180ms conectada a electroimanes y torniquetes'
      ]
    },
    {
      id: 'biomechanics',
      title: 'Módulo de IA Biomecánica',
      tagline: 'Visión Computacional con MediaPipe Pose',
      icon: BrainCircuit,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/40',
      description: 'Detección en tiempo real de 33 puntos clave esqueléticos para cuantificar ángulos articulares en sentadillas, peso muerto y press militar. Corrige asimetrías y previene lesiones osteoarticulares sin necesidad de sensores externos.',
      bullets: [
        'Análisis cinemático a 60 FPS directo desde la cámara de cualquier smartphone o tablet',
        'Feedback correctivo visual y por voz en español neutro',
        'Cálculo de ROM (Range of Motion) y detección automática de repeticiones efectivas'
      ]
    },
    {
      id: 'acsm',
      title: 'Motor Experto ACSM / NSCA',
      tagline: 'Prescripción Determinista y Periodización',
      icon: Dumbbell,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/40',
      description: 'Reemplaza conjeturas por ciencia deportiva rigurosa. Algoritmos deterministas basados en las guías de la American College of Sports Medicine (ACSM) para calcular volumen, intensidad (% 1RM) y sobrecarga progresiva adaptada al somatotipo del socio.',
      bullets: [
        'Periodización ondulante y lineal automatizada según metas (hipertrofia, fuerza, pérdida de grasa)',
        'Catálogo normalizado con más de 450 ejercicios mapeados por cadenas cinemáticas',
        'Algoritmo determinista: sin alucinaciones de LLM, 100% basado en evidencia'
      ]
    },
    {
      id: 'nutrition',
      title: 'Nutrición Asistida por IA',
      tagline: 'Asistente Alimentario y Balance Calórico',
      icon: Apple,
      color: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-400',
      borderColor: 'border-amber-500/40',
      description: 'Cálculo de Tasa Metabólica Basal (Mifflin-St Jeor / Katch-McArdle) y distribución dinámica de macronutrientes acorde a la intensidad del entrenamiento registrado por FitGo!, logrando una adherencia nutricional un 40% superior.',
      bullets: [
        'Ajuste calórico en días de entrenamiento vs. días de recuperación activa',
        'Generación de planes de equivalencias alimentarias para diferentes dietas',
        'Asistente conversacional para registro fotográfico y textual de comidas'
      ]
    }
  ];

  return (
    <section id="fitgo" className="py-24 bg-dark-900 border-t border-slate-800/80 relative">
      {/* Glow ambiental */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Ecosistema FitGo! (DUBSS-GYM)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            La plataforma integral para gimnasios de <span className="gradient-text">nueva generación</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Diseñado por los ingenieros de <strong className="text-white">RandomSoft</strong> para resolver la fragmentación del software tradicional. FitGo! combina hardware IoT, algoritmos científicos y visión computacional en un sistema modular único.
          </p>
        </div>

        {/* Selector de Pilares + Showcase Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Los 4 Pilares del Software */}
          <div className="lg:col-span-5 space-y-3.5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activeTab === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-200 text-left ${
                    isSelected
                      ? `bg-slate-800/80 ${pillar.borderColor} shadow-lg shadow-cyan-950/40 translate-x-1`
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${pillar.color} text-white shadow-md flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-white truncate">
                          {pillar.title}
                        </h3>
                        {isSelected && (
                          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-950/80 ${pillar.textColor} border border-slate-700`}>
                            Activo
                          </span>
                        )}
                      </div>
                      <p className={`text-xs font-medium mt-0.5 ${pillar.textColor}`}>
                        {pillar.tagline}
                      </p>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-slate-700/50 space-y-1.5 animate-in fade-in duration-200">
                      {pillar.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pillar.textColor}`} />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Columna Derecha: Mockup del Dashboard en Modo Oscuro */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-dark-950 border border-slate-700/80 p-2 sm:p-3 shadow-2xl shadow-cyan-950/30 overflow-hidden">
              
              {/* Barra de Ventana del Dashboard */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 bg-slate-900/60 rounded-t-xl mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono pl-3 border-l border-slate-800">
                    fitgo-dubss.enterprise.internal/admin
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono text-[11px] text-emerald-400 font-medium">Sincronizado AWS</span>
                </div>
              </div>

              {/* Contenido Visual Dinámico según el Pilar Seleccionado */}
              <div className="p-3 sm:p-5 bg-dark-900 rounded-xl border border-slate-800/80 min-h-[460px] flex flex-col justify-between">
                
                {/* 1. Mockup: Control de Acceso y Telegram Bot */}
                {activeTab === 'access' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <ScanLine className="w-4 h-4 text-cyan-400" />
                          Torniquete #01 — Entrada Principal (Sede Central)
                        </h4>
                        <p className="text-xs text-slate-400">Validación biométrica y QR en tiempo real</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                        ESTADO: OPERACIONAL
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Simulación de QR Dinámico */}
                      <div className="p-4 rounded-lg bg-dark-950 border border-cyan-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-2 right-2 text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                          TTL: 11s
                        </div>
                        <div className="w-28 h-28 bg-white p-2 rounded-lg my-2 shadow-inner flex items-center justify-center">
                          <QrCode className="w-24 h-24 text-slate-900" />
                        </div>
                        <p className="text-xs font-semibold text-white">Socio: Carlos Mendoza</p>
                        <p className="text-[11px] text-cyan-400 font-mono">Plan Black VIP • Acceso Permitido</p>
                      </div>

                      {/* Notificación Telegram Bot */}
                      <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 mb-2">
                            <Send className="w-4 h-4" />
                            Telegram Admin Bot (@FitGoAlertsBot)
                          </div>
                          <div className="text-xs bg-slate-900/90 p-2.5 rounded border border-slate-800 text-slate-300 space-y-1 font-mono text-[11px]">
                            <p className="text-emerald-400 font-bold">🔔 Acceso Registrado</p>
                            <p>👤 <b>Carlos M.</b> ingresó a <i>Sede Central</i>.</p>
                            <p>⏰ <b>Hora:</b> 07:15:32 AM</p>
                            <p>🛡️ <b>Torniquete:</b> A-01 desbloqueado (1.2s)</p>
                            <p>📊 <b>Aforo actual:</b> 42/120 socios (35%)</p>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                          <span>Latencia webhook: 142ms</span>
                          <span className="text-emerald-400">Entrega garantizada</span>
                        </div>
                      </div>
                    </div>

                    {/* Registro de Accesos Recientes */}
                    <div className="pt-2">
                      <div className="text-xs font-semibold text-slate-400 mb-2">Historial de validación instantánea</div>
                      <div className="space-y-1.5 font-mono text-xs">
                        <div className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800 text-slate-300">
                          <span className="text-cyan-300">07:15:32 - Carlos Mendoza</span>
                          <span className="text-emerald-400 font-bold">AUTORIZADO (QR #8492)</span>
                          <span className="text-slate-500">Sede Central</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800 text-slate-300">
                          <span className="text-cyan-300">07:14:10 - Valeria Rivas</span>
                          <span className="text-emerald-400 font-bold">AUTORIZADO (QR #8491)</span>
                          <span className="text-slate-500">Sede Central</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-red-950/20 border border-red-800/30 text-slate-300">
                          <span className="text-red-300">07:12:05 - Desconocido</span>
                          <span className="text-red-400 font-bold">DENEGADO (QR Expirado)</span>
                          <span className="text-red-500">Rechazado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Mockup: IA Biomecánica MediaPipe */}
                {activeTab === 'biomechanics' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <BrainCircuit className="w-4 h-4 text-purple-400" />
                          Live Pose Estimation — MediaPipe Computer Vision Engine
                        </h4>
                        <p className="text-xs text-slate-400">Análisis cinemático esquelético en tiempo real</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-mono">
                        60.0 FPS • Latencia: 16ms
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Simulación del feed visual con esqueleto */}
                      <div className="relative rounded-lg bg-slate-950 border border-purple-500/40 p-3 h-52 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-radial-gradient from-purple-950/20 to-transparent pointer-events-none"></div>
                        
                        {/* Indicadores en pantalla */}
                        <div className="flex items-center justify-between relative z-10 text-[11px] font-mono">
                          <span className="text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                            EJERCICIO: BACK SQUAT
                          </span>
                          <span className="text-emerald-400 font-bold">FORMA: 96%</span>
                        </div>

                        {/* Dibujo SVG simulado del esqueleto biomecánico */}
                        <div className="flex items-center justify-center py-2 relative z-10">
                          <svg className="w-28 h-32 text-purple-400" viewBox="0 0 100 120" fill="none" stroke="currentColor">
                            {/* Cabeza */}
                            <circle cx="50" cy="20" r="10" strokeWidth="2.5" className="stroke-cyan-400" />
                            {/* Columna */}
                            <line x1="50" y1="30" x2="50" y2="65" strokeWidth="2.5" className="stroke-purple-400" />
                            {/* Brazos */}
                            <line x1="50" y1="38" x2="25" y2="48" strokeWidth="2.5" className="stroke-emerald-400" />
                            <line x1="25" y1="48" x2="15" y2="35" strokeWidth="2.5" className="stroke-emerald-400" />
                            <line x1="50" y1="38" x2="75" y2="48" strokeWidth="2.5" className="stroke-emerald-400" />
                            <line x1="75" y1="48" x2="85" y2="35" strokeWidth="2.5" className="stroke-emerald-400" />
                            {/* Caderas y piernas */}
                            <line x1="50" y1="65" x2="32" y2="85" strokeWidth="3" className="stroke-cyan-400" />
                            <line x1="32" y1="85" x2="30" y2="110" strokeWidth="3" className="stroke-cyan-400" />
                            <line x1="50" y1="65" x2="68" y2="85" strokeWidth="3" className="stroke-cyan-400" />
                            <line x1="68" y1="85" x2="70" y2="110" strokeWidth="3" className="stroke-cyan-400" />
                            {/* Nodos articulares */}
                            <circle cx="32" cy="85" r="3.5" fill="#10b981" />
                            <circle cx="68" cy="85" r="3.5" fill="#10b981" />
                            <circle cx="50" cy="65" r="3.5" fill="#a855f7" />
                          </svg>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2 py-1 rounded">
                          <span>Profundidad: 92° (Paralela)</span>
                          <span className="text-emerald-400 font-bold">✓ Válida</span>
                        </div>
                      </div>

                      {/* Panel de Telemetría Biomecánica */}
                      <div className="space-y-2.5">
                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400 font-medium">Ángulo Rodilla Izq / Der</div>
                          <div className="flex items-center justify-between text-sm font-bold text-white font-mono mt-1">
                            <span>89.4° / 91.2°</span>
                            <span className="text-xs text-emerald-400 font-normal">Simetría 98%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '98%' }}></div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400 font-medium">Inclinación del Torso (Espina lumbar)</div>
                          <div className="flex items-center justify-between text-sm font-bold text-white font-mono mt-1">
                            <span>18.5° (Rango óptimo)</span>
                            <span className="text-xs text-cyan-400 font-normal">Sin arqueo peligroso</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                            <div className="bg-cyan-400 h-full rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>

                        <div className="p-2 rounded bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 flex items-center gap-2">
                          <Award className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span><b>Feedback en Vivo:</b> Excelente alineación de rodillas con la punta de los pies.</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                      <span>Procesamiento 100% en cliente (Sin subida de video por privacidad RGPD)</span>
                      <span className="text-purple-300 font-mono">MediaPipe BlazePose v0.10</span>
                    </div>
                  </div>
                )}

                {/* 3. Mockup: Motor ACSM / NSCA */}
                {activeTab === 'acsm' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <Dumbbell className="w-4 h-4 text-emerald-400" />
                          Motor de Prescripción Fisiológica ACSM / NSCA
                        </h4>
                        <p className="text-xs text-slate-400">Algoritmo determinista de sobrecarga progresiva</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
                        Modelo: NSCA Hypertrophy-V2
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-[11px] text-slate-400 uppercase font-mono">1RM Calculado (Epley)</span>
                        <div className="text-2xl font-black text-white mt-1">112.5 kg</div>
                        <span className="text-[11px] text-emerald-400 font-semibold">+4.5% vs. mes anterior</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-[11px] text-slate-400 uppercase font-mono">Intensidad Óptima</span>
                        <div className="text-2xl font-black text-cyan-300 mt-1">77.5% 1RM</div>
                        <span className="text-[11px] text-slate-400">RIR: 2 (Reserva)</span>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-[11px] text-slate-400 uppercase font-mono">Volumen Semanal</span>
                        <div className="text-2xl font-black text-purple-300 mt-1">16 Series</div>
                        <span className="text-[11px] text-purple-400">Pectoral & Deltoides</span>
                      </div>
                    </div>

                    {/* Prescripción del día generada */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/30">
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-300 mb-2 font-mono">
                        <span>SESIÓN RECOMENDADA HOY: EMPUJE PESADO (MICRO-CICLO 3)</span>
                        <span>DETERMINISTA • VALIDADO</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                        <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                          <span>1. Press Banca Plano con Barra</span>
                          <span className="text-cyan-300">4 series × 8 reps @ 87.5 kg (Descanso 120s)</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                          <span>2. Press Militar con Mancuernas</span>
                          <span className="text-cyan-300">3 series × 10 reps @ 24 kg c/u (Descanso 90s)</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span>3. Fondos en Paralelas Asistidos</span>
                          <span className="text-cyan-300">3 series × 12 reps @ RPE 8 (Descanso 75s)</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400">
                      El motor analiza los días de recuperación del músculo agonista y antagonista para evitar el sobreentrenamiento del socio.
                    </p>
                  </div>
                )}

                {/* 4. Mockup: Nutrición Asistida */}
                {activeTab === 'nutrition' && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <Apple className="w-4 h-4 text-amber-400" />
                          Nutrición y Balance Energético Inteligente
                        </h4>
                        <p className="text-xs text-slate-400">Fórmula Mifflin-St Jeor sincronizada con el gasto calórico de FitGo!</p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono">
                        Objetivo: Déficit Controlado (-300 kcal)
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 text-center">
                        <span className="text-xs text-slate-400 block font-mono">Calorías Meta</span>
                        <span className="text-xl font-bold text-white mt-1 block">2,350 kcal</span>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 text-center">
                        <span className="text-xs text-cyan-400 block font-mono">Proteína (2.0g/kg)</span>
                        <span className="text-xl font-bold text-cyan-300 mt-1 block">160g</span>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 text-center">
                        <span className="text-xs text-amber-400 block font-mono">Carbohidratos</span>
                        <span className="text-xl font-bold text-amber-300 mt-1 block">250g</span>
                      </div>
                      <div className="p-3 rounded bg-slate-950 border border-slate-800 text-center">
                        <span className="text-xs text-emerald-400 block font-mono">Grasas Saludables</span>
                        <span className="text-xl font-bold text-emerald-300 mt-1 block">65g</span>
                      </div>
                    </div>

                    {/* Sugerencia de Asistente IA */}
                    <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-500/30 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                        <Flame className="w-4 h-4 text-amber-400" />
                        Ajuste Dinámico Post-Entrenamiento
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        "Detectamos una sesión de alta demanda neuromuscular (gasto: 520 kcal). Se habilitó una ventana de 35g adicionales de hidratos de carbono complejos en la cena para maximizar la reposición de glucógeno muscular."
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800 font-mono">
                      <span>Integración MyFitnessPal & Telegram</span>
                      <span className="text-amber-400">Adherencia promedio: 89.2%</span>
                    </div>
                  </div>
                )}

                {/* Footer del Mockup */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>Microservicios Docker & React SPA</span>
                  </div>
                  <div className="text-slate-500 font-mono text-[11px]">
                    Arquitectura RandomSoft v2.4
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

