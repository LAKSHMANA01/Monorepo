import { createViteConfig } from '../../packages/config/index.js';

export default createViteConfig({
  name: 'remote2',
  root: process.cwd(),
  port: 3002,
  exposes: {
    './App': './src/App.js',
    './Dashboard': './src/components/Dashboard.js',
  },
  remotes: {},
  esbuild: {
    // Treat all .js files in src/ as JSX
  
    include: [
      // enable JSX in these files
      'src/**/*.js',
      'node_modules/**/*.js'
    ]
  }
});

