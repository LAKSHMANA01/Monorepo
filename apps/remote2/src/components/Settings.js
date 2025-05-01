
// # Create Settings component
// cat > src/components/Settings.js << EOF
import React, { useState } from 'react';
import { Button } from '@cloud-monorepo/ui';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    dataSharing: true
  });

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Notifications</h3>
            <p className="text-sm text-gray-600">Receive alerts about dashboard updates</p>
          </div>
          <div>
            <Button 
              variant={settings.notifications ? "primary" : "secondary"}
              onClick={() => handleToggle('notifications')}
            >
              {settings.notifications ? "Enabled" : "Disabled"}
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Dark Mode</h3>
            <p className="text-sm text-gray-600">Use dark theme for dashboard</p>
          </div>
          <div>
            <Button 
              variant={settings.darkMode ? "primary" : "secondary"}
              onClick={() => handleToggle('darkMode')}
            >
              {settings.darkMode ? "Enabled" : "Disabled"}
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Data Sharing</h3>
            <p className="text-sm text-gray-600">Share anonymous usage data</p>
          </div>
          <div>
            <Button 
              variant={settings.dataSharing ? "primary" : "secondary"}
              onClick={() => handleToggle('dataSharing')}
            >
              {settings.dataSharing ? "Enabled" : "Disabled"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;