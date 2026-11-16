import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import handler from './api/send-demo.js';

export default defineConfig(({ mode }) => {
  // Carga variables de .env y .env.local al entorno de ejecución de Node
  const env = loadEnv(mode, process.cwd(), '');
  for (const key in env) {
    process.env[key] = env[key];
  }

  return {
    plugins: [
      react(),
      {
        name: 'vite-plugin-local-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            // Interceptar la llamada a /api/send-demo en modo local (npm run dev)
            const cleanUrl = req.url.split('?')[0];
            if (cleanUrl === '/api/send-demo') {
              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  req.body = JSON.parse(body || '{}');
                } catch {
                  req.body = {};
                }
                try {
                  await handler(req, res);
                } catch (err) {
                  console.error('Error en API local:', err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, message: err.message }));
                }
              });
              return;
            }
            next();
          });
        }
      }
    ],
  };
});
