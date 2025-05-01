const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const federation = require('@originjs/vite-plugin-federation');
import createViteConfig from ".../packages/config/index.js";


function createViteConfig(options) {
  const { name, port, exposes, remotes } = options;
  
  return defineConfig({
    plugins: [
      react(),
      federation({
        name,
        filename: 'remoteEntry.js',
        exposes,
        remotes,
        shared: ['react', 'react-dom']
      })
    ],
    server: {
      port
    },
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    },
    
    esbuild: {
      // Treat all .js files in src/ as JSX
      loader: {
        '.js': 'jsx'
      },
      include: [
        // enable JSX in these files
        'src/**/*.js',
        'node_modules/**/*.js'
      ]
    }
  });
}

module.exports = { createViteConfig };
