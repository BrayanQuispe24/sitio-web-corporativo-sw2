import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  Building, 
  Globe, 
  Share2,
  ExternalLink,
  AlertCircle 
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    location: '',
    message: '',
    branchesCount: '1-2'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'El nombre completo es requerido';
    if (!formData.company.trim()) errs.company = 'El nombre de la empresa o gimnasio es requerido';
    
    if (!formData.email.trim()) {
      errs.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ingresa un formato de correo corporativo válido';
    }

    if (!formData.location.trim()) errs.location = 'La ciudad y país son requeridos';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'El mensaje debe tener al menos 10 caracteres describiendo tus necesidades';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulación de envío de formulario B2B a RandomSoft
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section id="contacto" className="py-28 bg-[#05070b] border-t border-white/5 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-neon-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Agenda una sesión técnica con el equipo de <span className="text-neon-400">RandomSoft</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            ¿Listo para implementar FitGo! en tu gimnasio o necesitas una arquitectura a medida? Nuestros ingenieros y especialistas de producto te responderán en menos de 2 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Información Institucional de RandomSoft (5 cols) */}
          <div className="lg:col-span-5 bg-dark-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-8">
            
            <div>
              <span className="text-xs uppercase font-mono font-bold text-neon-400 tracking-wider">
                RandomSoft Software Factory
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Innovación tecnológica aplicada al fitness
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Desarrollamos soluciones de software empresarial de alto rendimiento con foco en visión computacional, IoT y microservicios escalables.
              </p>
            </div>

            {/* Puntos de contacto */}
            <div className="space-y-4">
              
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-neon-500/10 text-neon-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Consultas Comerciales & Demos</div>
                  <a href="mailto:ventas@randomsoft.io" className="text-sm font-bold text-white hover:text-neon-400 transition-colors">
                    ventas@randomsoft.io
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Atención B2B y cotizaciones personalizadas</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-neon-500/10 text-neon-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Soporte Técnico y SLA</div>
                  <a href="mailto:soporte@randomsoft.io" className="text-sm font-bold text-white hover:text-neon-400 transition-colors">
                    soporte@randomsoft.io
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Monitoreo 24/7 para clientes Enterprise</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="p-2.5 rounded-lg bg-neon-500/10 text-neon-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Sede Principal & Labs</div>
                  <div className="text-sm font-bold text-white">
                    RandomSoft Tech Park, Edificio Silicon
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Operaciones para Latinoamérica y EE.UU.</p>
                </div>
              </div>

            </div>

            {/* SLA Badge */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-neon-500/30 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></div>
              <span className="text-xs text-slate-300">
                <strong className="text-white">Compromiso RandomSoft:</strong> Respuesta garantizada por un ingeniero especialista en menos de 120 minutos.
              </span>
            </div>

            {/* Redes Profesionales */}
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-3">
                Conéctate con nuestra factoría de software:
              </span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-neon-400 border border-slate-800 transition-colors text-xs font-semibold"
                  aria-label="LinkedIn RandomSoft"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-neon-400 border border-slate-800 transition-colors text-xs font-semibold"
                  aria-label="GitHub RandomSoft"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-neon-400 border border-slate-800 transition-colors text-xs font-semibold"
                  aria-label="X RandomSoft"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span>X / Twitter</span>
                </a>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario con Validación (7 cols) */}
          <div className="lg:col-span-7 bg-dark-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-neon-500/20 text-neon-400 rounded-full flex items-center justify-center mx-auto border border-neon-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Gracias por contactar a <strong>RandomSoft</strong>. Uno de nuestros consultores técnicos de <strong>FitGo!</strong> revisará tus requerimientos y te contactará a <span className="text-neon-400 font-mono">{formData.email}</span> en breve.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        location: '',
                        message: '',
                        branchesCount: '1-2'
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nombre */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ej. Rodrigo Santoro"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Empresa / Gimnasio */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Empresa o Gimnasio *
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Ej. IronGym Crossfit Club"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.company ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.company && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Corporativo */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="rodrigo@irongym.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Ciudad / País */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Ciudad y País *
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Ej. Lima, Perú / CDMX"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.location ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.location && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Número de sedes actuales */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ¿Cuántas sedes opera tu organización actualmente?
                  </label>
                  <select
                    name="branchesCount"
                    value={formData.branchesCount}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="1">1 Sede (Boutique o Estudio)</option>
                    <option value="2-3">2 a 3 Sedes (En expansión)</option>
                    <option value="4-10">4 a 10 Sedes (Cadena mediana)</option>
                    <option value="10+">Más de 10 Sedes (Franquicia nacional)</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    ¿Qué desafíos buscas resolver con FitGo!? *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Cuéntanos sobre tu infraestructura actual (torniquetes, software legado, volumen de socios o requerimientos de IA)..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Botón de Enviar */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl font-bold text-slate-950 bg-neon-500 hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25 transition-all flex items-center justify-center gap-2 text-base disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitiendo a RandomSoft...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitud y Agendar Llamada</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Respetamos tu privacidad. Tus datos corporativos están protegidos bajo cifrado AES-256 y nunca se comparten con terceros.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
