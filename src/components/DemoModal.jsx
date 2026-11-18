import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, Video, Send, Loader2, AlertCircle, MailCheck } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
    timeSlot: '10:00 AM'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const response = await fetch('/api/send-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Error al procesar la solicitud. Por favor verifica tus datos.');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error al solicitar demo:', err);
      setErrorMessage(err.message || 'No se pudo enviar el correo en este momento. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-dark-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 max-h-[90vh] overflow-y-auto">
        
        {/* Botón Cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Cerrar modal"
          disabled={loading}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-neon-500/20 text-neon-400 rounded-full flex items-center justify-center mx-auto border border-neon-500/40">
              <MailCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              ¡Accesos y Demo Enviados!
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Hemos enviado la <strong>URL del sistema</strong> y las <strong>credenciales de prueba</strong> de <strong className="text-neon-400">FitGo!</strong> al correo:
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-neon-400 font-mono text-sm">
              {formData.email}
            </div>
            <p className="text-xs text-slate-400">
              Por favor revisa tu bandeja de entrada (y la carpeta de spam o promociones si no lo ves en unos segundos).
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg bg-neon-500 hover:bg-neon-400 text-slate-950 font-bold text-sm transition-all"
              >
                Entendido, iré a revisar mi correo
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-neon-400 uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              Acceso Inmediato a FitGo! Sandbox
            </div>
            <h3 className="text-2xl font-black text-white">
              Solicitar Demo en Vivo
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-5">
              Ingresa tus datos para recibir en tu correo las credenciales del sistema y explorar la plataforma en tiempo real.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="Ej. Martín Carrión"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
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
                    disabled={loading}
                    placeholder="martin@fitclub.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    disabled={loading}
                    placeholder="+54 9 11 4050 2000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
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
                  disabled={loading}
                  placeholder="Ej. Olympia Performance Center"
                  value={formData.gymName}
                  onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferencia de Horario
                  </label>
                  <select
                    disabled={loading}
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50"
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
                    <Video className="w-4 h-4 text-neon-400" />
                    <span>Videollamada Google Meet</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 py-3.5 px-4 rounded-xl font-bold text-slate-950 bg-neon-500 hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando accesos a tu correo...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Accesos y Reservar Demo</span>
                  </>
                )}
              </button>

              <div className="text-[11px] text-center text-slate-500">
                🔒 Tus datos están protegidos. Recibirás inmediatamente las credenciales en tu email.
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
