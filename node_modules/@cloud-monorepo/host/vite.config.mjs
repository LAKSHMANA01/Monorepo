import { createViteConfig } from '../../packages/config/index.js';
import react from '@vitejs/plugin-react';


export default createViteConfig({
  root: process.cwd(),
  name: 'host',
  port: 3000,
  plugins: [react()],
  remotes: {
    remote1: 'http://localhost:3001/assets/remoteEntry.js',
    remote2: 'http://localhost:3002/assets/remoteEntry.js',
  },
});