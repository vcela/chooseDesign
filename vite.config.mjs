import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

function cleanPathRewrite() {
  const rewrite = (req, _res, next) => {
    if (req.url === '/tech') {
      req.url = '/tech/';
    }
    next();
  };

  return {
    name: 'clean-path-rewrite',
    configureServer(server) {
      server.middlewares.use(rewrite);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite);
    },
  };
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        tech: fileURLToPath(new URL('./tech/index.html', import.meta.url)),
      },
    },
  },
  plugins: [cleanPathRewrite()],
  server: {
    port: 5173,
  },
});