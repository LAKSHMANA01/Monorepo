// packages/config/index.js
import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname workaround in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createViteConfig(options) {
  const { name, port, exposes, remotes } = options;

  return defineConfig({
    plugins: [
      // 🔧 Transform .js files as JSX
      {
        name: 'treat-js-as-jsx',
        async transform(code, id) {
          if (!/\.js$/.test(id)) return null;
          return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
        }
      },
      react(),
      federation({
        name,
        filename: 'remoteEntry.js',
        exposes,
        remotes,
        shared: ['react', 'react-dom'],
        dev: true,
      })
    ],
    server: {
      port,
      cors: true,

    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx'
        }
      }
    }
  });
}
