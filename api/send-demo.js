import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ success: false, message: 'Método no permitido. Solo se acepta POST.' }));
  }

  // Obtener y sanitizar credenciales de Gmail
  let rawUser = process.env.GMAIL_USER || process.env.SMTP_USER || '';
  let rawPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || '';

  const cleanUser = rawUser.replace(/^["']|["']$/g, '').trim();
  const cleanPass = rawPass.replace(/^["']|["']$/g, '').replace(/\s+/g, '').trim();

  if (!cleanUser || !cleanPass) {
    console.error('Faltan credenciales de Gmail (GMAIL_USER / GMAIL_APP_PASSWORD).');
    res.statusCode = 500;
    return res.end(JSON.stringify({ 
      success: false, 
      message: 'El servidor de correo no está configurado (Faltan variables GMAIL_USER o GMAIL_APP_PASSWORD).' 
    }));
  }

  const { name, email, phone, gymName, timeSlot } = req.body || {};

  // Validaciones
  if (!email || !name) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ 
      success: false, 
      message: 'Nombre y correo electrónico son requeridos.' 
    }));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ 
      success: false, 
      message: 'El formato de correo electrónico no es válido.' 
    }));
  }

  // Configuración del transporter de Nodemailer con Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: cleanUser,
      pass: cleanPass,
    },
  });

  const demoUrl = (process.env.DEMO_SYSTEM_URL || 'https://gym.bratox.me').replace(/^["']|["']$/g, '').trim();
  const demoUser = (process.env.DEMO_ACCOUNT_EMAIL || 'demo@fitgo.io').replace(/^["']|["']$/g, '').trim();
  const demoPass = (process.env.DEMO_ACCOUNT_PASSWORD || 'FitGoDemo2026!').replace(/^["']|["']$/g, '').trim();
  const senderName = (process.env.SENDER_NAME || 'FitGo! by RandomSoft').replace(/^["']|["']$/g, '').trim();
  
  // Correo del dueño/administrador que recibirá las alertas de leads (IMAGEN 2)
  const ownerEmail = (process.env.SALES_NOTIFICATION_EMAIL || cleanUser).replace(/^["']|["']$/g, '').trim();

  const gymDisplay = gymName ? gymName.trim() : 'tu gimnasio';

  // Plantilla HTML del correo para el cliente
  const clientHtml = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tus Accesos Demo a FitGo!</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #050811; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #050811; padding: 40px 10px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width: 600px; background: linear-gradient(180deg, #0d1527 0%, #080d1a 100%); border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
            
            <!-- Header con Logo y Badge -->
            <tr>
              <td style="padding: 36px 36px 20px 36px; text-align: left; border-bottom: 1px solid #1e293b;">
                <div style="display: inline-block; padding: 4px 12px; background: rgba(34, 211, 238, 0.12); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 9999px; font-size: 11px; font-weight: 700; color: #22d3ee; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                  🚀 Entorno de Prueba FitGo!
                </div>
                <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">
                  FitGo! <span style="color: #22d3ee;">(DUBSS-GYM)</span>
                </h1>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">
                  Plataforma Inteligente de Gestión y Visión Artificial por RandomSoft
                </p>
              </td>
            </tr>

            <!-- Contenido Principal -->
            <tr>
              <td style="padding: 32px 36px;">
                <p style="margin: 0 0 16px 0; font-size: 16px; line-height: 1.6; color: #e2e8f0;">
                  Hola <strong style="color: #ffffff;">${name}</strong>,
                </p>
                <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.6; color: #94a3b8;">
                  Hemos recibido tu solicitud para <strong style="color: #ffffff;">${gymDisplay}</strong>. A continuación te proporcionamos el enlace y las credenciales de acceso a nuestro entorno interactivo de prueba para que explores todas las funcionalidades de FitGo!.
                </p>

                <!-- Tarjeta de Credenciales -->
                <div style="background-color: #0b1120; border: 1px solid #334155; border-radius: 12px; padding: 24px; margin: 24px 0;">
                  <div style="font-size: 12px; font-weight: 700; color: #34d399; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">
                    🔑 Credenciales de Acceso Demo
                  </div>
                  
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size: 14px;">
                    <tr>
                      <td style="padding: 6px 0; color: #94a3b8; width: 35%;">URL del Sistema:</td>
                      <td style="padding: 6px 0; color: #22d3ee; font-weight: 600;">
                        <a href="${demoUrl}" target="_blank" style="color: #22d3ee; text-decoration: none;">${demoUrl}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #94a3b8;">Usuario / Email:</td>
                      <td style="padding: 6px 0; color: #ffffff; font-family: monospace; font-size: 15px; font-weight: bold;">
                        ${demoUser}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 6px 0; color: #94a3b8;">Contraseña:</td>
                      <td style="padding: 6px 0; color: #ffffff; font-family: monospace; font-size: 15px; font-weight: bold;">
                        ${demoPass}
                      </td>
                    </tr>
                  </table>

                  <!-- Botón CTA -->
                  <div style="margin-top: 24px; text-align: center;">
                    <a href="${demoUrl}" target="_blank" style="display: inline-block; width: 100%; box-sizing: border-box; background: linear-gradient(90deg, #22d3ee 0%, #34d399 100%); color: #020617; font-weight: 800; font-size: 15px; text-decoration: none; padding: 14px 24px; border-radius: 8px; text-align: center; letter-spacing: 0.02em;">
                      Ingresar al Sistema Demo →
                    </a>
                  </div>
                </div>

                <!-- Detalles de la Demostración -->
                <div style="border-left: 3px solid #22d3ee; padding-left: 16px; margin: 24px 0;">
                  <h4 style="margin: 0 0 6px 0; font-size: 14px; color: #ffffff;">¿Qué podrás probar en este entorno?</h4>
                  <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #94a3b8; line-height: 1.6;">
                    <li><strong>Módulo de Visión Artificial:</strong> Detección de posturas y repeticiones con IA biomecánica.</li>
                    <li><strong>Control de Acceso QR:</strong> Generación y validación de pases para socios.</li>
                    <li><strong>Gestión de Membresías:</strong> Facturación, reportes y métricas financieras en tiempo real.</li>
                  </ul>
                </div>

                ${timeSlot ? `
                <p style="margin: 20px 0 0 0; font-size: 13px; color: #cbd5e1; background: rgba(51, 65, 85, 0.4); padding: 12px 16px; border-radius: 8px;">
                  📅 <strong>Sesión Guiada 1 a 1:</strong> Registramos tu preferencia en <strong>${timeSlot}</strong>. Uno de nuestros ingenieros te contactará al <strong>${phone || 'tu número registrado'}</strong> para coordinar la videollamada por Google Meet.
                </p>
                ` : ''}

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 24px 36px; background-color: #060a14; border-top: 1px solid #1e293b; text-align: center;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #64748b;">
                  ¿Tienes dudas o necesitas asistencia técnica? Escríbenos directamente a:
                </p>
                <p style="margin: 0 0 16px 0; font-size: 13px; font-weight: 600;">
                  <a href="mailto:soporte@randomsoft.io" style="color: #22d3ee; text-decoration: none;">soporte@randomsoft.io</a>
                  &nbsp;•&nbsp;
                  <a href="mailto:ventas@randomsoft.io" style="color: #34d399; text-decoration: none;">ventas@randomsoft.io</a>
                </p>
                <p style="margin: 0; font-size: 11px; color: #475569;">
                  © ${new Date().getFullYear()} RandomSoft Labs. Todos los derechos reservados.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  // Versión texto plano para evitar que los filtros antispam de Gmail lo desvíen a Spam
  const clientText = `
Hola ${name},

Hemos recibido tu solicitud para ${gymDisplay}. A continuación te proporcionamos el enlace y las credenciales de acceso a nuestro entorno interactivo de prueba para que explores todas las funcionalidades de FitGo!:

--- CREDENCIALES DE ACCESO DEMO ---
URL del Sistema: ${demoUrl}
Usuario / Email: ${demoUser}
Contraseña: ${demoPass}

Enlace directo: ${demoUrl}

¿Qué podrás probar en este entorno?
• Módulo de Visión Artificial: Detección de posturas y repeticiones con IA biomecánica.
• Control de Acceso QR: Generación y validación de pases para socios.
• Gestión de Membresías: Facturación, reportes y métricas financieras en tiempo real.

${timeSlot ? `📅 Sesión Guiada 1 a 1: Registramos tu preferencia en ${timeSlot}. Uno de nuestros ingenieros te contactará al ${phone || 'tu número registrado'} para coordinar la videollamada.` : ''}

¿Tienes dudas o necesitas asistencia técnica?
Soporte: soporte@randomsoft.io • Ventas: ventas@randomsoft.io

© ${new Date().getFullYear()} RandomSoft Labs. Todos los derechos reservados.
`.trim();

  try {
    // 1. ENVIAR CORREO AL CLIENTE (Credenciales de acceso demo - IMAGEN 1)
    const infoClient = await transporter.sendMail({
      from: `"${senderName}" <${cleanUser}>`,
      to: email.trim(),
      replyTo: cleanUser,
      subject: `Tus accesos de prueba a FitGo! - ${gymDisplay}`,
      text: clientText,
      html: clientHtml,
    });
    console.log(`[Email] Correo con credenciales demo enviado al cliente (${email}):`, infoClient.messageId);

    // 2. ENVIAR ALERTA AL DUEÑO / ADMINISTRADOR (Nuevo prospecto registrado - IMAGEN 2)
    if (ownerEmail && ownerEmail.trim() !== '') {
      try {
        const infoOwner = await transporter.sendMail({
          from: `"${senderName}" <${cleanUser}>`,
          to: ownerEmail.trim(),
          replyTo: email.trim(),
          subject: `🔥 [Nuevo Lead Demo] ${gymDisplay} - ${name}`,
          text: `Nuevo Prospecto Registrado en la Web:\nNombre: ${name}\nCorreo: ${email}\nGimnasio: ${gymName || 'No especificado'}\nTeléfono: ${phone || 'No especificado'}\nHorario preferido: ${timeSlot || 'No especificado'}\nFecha: ${new Date().toLocaleString('es-ES', { timeZone: 'America/La_Paz' })}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; background: #0f172a; color: #f8fafc; border-radius: 8px;">
              <h2 style="color: #38bdf8; margin-top: 0;">Nuevo Prospecto de Demo Registrado</h2>
              <p>Un cliente ha solicitado acceso a la demo desde el sitio web:</p>
              <ul style="line-height: 1.8;">
                <li><strong>Nombre:</strong> ${name}</li>
                <li><strong>Correo:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></li>
                <li><strong>Gimnasio:</strong> ${gymName || 'No especificado'}</li>
                <li><strong>Teléfono / WhatsApp:</strong> ${phone || 'No especificado'}</li>
                <li><strong>Horario preferido:</strong> ${timeSlot || 'No especificado'}</li>
                <li><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', { timeZone: 'America/La_Paz' })}</li>
              </ul>
            </div>
          `
        });
        console.log(`[Email] Alerta de nuevo lead enviada al dueño (${ownerEmail}):`, infoOwner.messageId);
      } catch (salesErr) {
        console.warn('Aviso: no se pudo enviar la alerta interna al dueño:', salesErr);
      }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      success: true,
      message: 'Accesos de prueba enviados exitosamente a tu correo electrónico.',
      messageId: infoClient.messageId
    }));

  } catch (error) {
    console.error('Error al enviar correo con Gmail/Nodemailer:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({
      success: false,
      message: error.message || 'Ocurrió un error al enviar el correo. Por favor verifica las credenciales de Gmail.'
    }));
  }
}
