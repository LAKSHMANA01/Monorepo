import { createViteConfig } from '../../packages/config/index.js';

export default createViteConfig({
  root: process.cwd(),
  name: 'remote1',
  port: 3001,
  
  exposes: {
    './App': './src/App.jsx' ,
    './UserList': './src/components/UserList.js',
    './UserDetail': './src/components/UserDetail.js',
  },
  remotes: {},
  esbuild: {
    // Treat all .js files in src/ as JSX
    loader: {
      '.js': 'jsx'
    },
    
    include: /src\/.*\.js$/, 
  }

});


