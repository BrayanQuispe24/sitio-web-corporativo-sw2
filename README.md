# RandomSoft - FitGo! (DUBSS-GYM) Web Platform

Aplicación web moderna B2B SaaS desarrollada para **RandomSoft**, empresa innovadora de desarrollo de software y factoría tecnológica, presentando su producto insignia **FitGo! (DUBSS-GYM)**.

## 🚀 Tecnologías y Stack
- **React 18** (SPA reactiva de alto rendimiento)
- **Tailwind CSS 3** (Paleta Dark Mode Slate/Zinc con acentos Cyan, Esmeralda y Crimson)
- **Lucide Icons**
- **Vite 6** (Empaquetado ultrarrápido y Hot Module Replacement)
- **Tipografías**: Plus Jakarta Sans, Inter y JetBrains Mono

## 📂 Estructura de Componentes
- `src/components/Navbar.jsx`: Header fijo sticky glassmorphism con pestañas corporativas ("Inicio", "FitGo!", "Características", "Simulador", "Precios", "Contacto") y CTA "Solicitar Demo".
- `src/components/Hero.jsx`: Titular de alto impacto, métricas clave (+99.9% uptime, +10k accesos, ACSM/NSCA, MediaPipe Pose) y llamadas a la acción.
- `src/components/ProductShowcase.jsx`: Los 4 pilares tecnológicos de FitGo! con un mockup interactivo del Dashboard en modo oscuro.
- `src/components/Features.jsx`: Grid de capacidades (Facturación QR, PWA para socios, Cloud AWS con AES-256, Apache ECharts, torniquetes IoT y multi-sede).
- `src/components/Simulator.jsx`: Calculadora de ROI en vivo con sliders interactivos de socios, sedes, precio de cuota y estimación de fugas erradicadas.
- `src/components/Pricing.jsx`: 3 niveles de suscripción (Start, Pro, Enterprise) con alternancia mensual/anual (-20%).
- `src/components/ContactForm.jsx`: Formulario con validación reactiva y datos institucionales (`ventas@randomsoft.io`, soporte y redes).
- `src/components/Footer.jsx`: Enlaces de navegación, políticas, términos y estado operativo del sistema.
- `src/components/DemoModal.jsx`: Modal de reservación 1-a-1 de demostración en vivo.

## 💻 Ejecución local
```bash
# Instalar dependencias (ya instaladas)
npm install

# Iniciar servidor de desarrollo en http://localhost:5173
npm run dev

# Compilar para producción
npm run build
```

