//    # Continue with src/App.js
// cat > src/App.js << EOF
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import { Card } from '@cloud-monorepo/ui';

const App = () => {
  return (
    <div className="p-4">
      <Card title="Remote App 2">
        <p className="mb-4">This is another micro frontend app with dashboard functionality.</p>
        <div className="mb-4">
          <nav className="flex space-x-4">
            <a href="/remote2" className="text-blue-600 hover:text-blue-800">Dashboard</a>
            <a href="/remote2/settings" className="text-blue-600 hover:text-blue-800">Settings</a>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Card>
    </div>
  );
};

export default App;