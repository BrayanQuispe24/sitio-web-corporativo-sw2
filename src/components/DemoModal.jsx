import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Calendar, Clock, Video, Send } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    date: '',
    timeSlot: '10:00 AM'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-dark-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              ¡Demostración Agendada!
            </h3>
            <p className="text-sm text-slate-300">
              Te hemos enviado la invitación de Google Meet y los accesos de prueba de <strong>FitGo! (DUBSS-GYM)</strong> a tu correo corporativo.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm"
              >
                Entendido
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              Sesión 1 a 1 con un Ingeniero de RandomSoft
            </div>
            <h3 className="text-2xl font-black text-white">
              Solicitar Demo en Vivo de FitGo!
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
              Descubre en 25 minutos cómo la IA biomecánica y el control de accesos QR optimizan la rentabilidad de tu gimnasio.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Martín Carrión"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="martin@fitclub.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+54 9 11 4050 2000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nombre de tu Gimnasio o Centro Deportivo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Olympia Performance Center"
                  value={formData.gymName}
                  onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferencia de Horario
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="10:00 AM">Mañana (10:00 AM - 12:00 PM)</option>
                    <option value="03:00 PM">Tarde (02:00 PM - 05:00 PM)</option>
                    <option value="06:00 PM">Noche (06:00 PM - 08:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Modalidad
                  </label>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                    <Video className="w-4 h-4 text-cyan-400" />
                    <span>Videollamada Google Meet</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-4 rounded-lg font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirmar y Reservar Horario</span>
              </button>

              <div className="text-[11px] text-center text-slate-500">
                Respuesta garantizada por RandomSoft Labs en horario laboral.
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

