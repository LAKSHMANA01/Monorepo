
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { Card } from '@cloud-monorepo/ui';


const App = () => {
  return (
    <div className="p-4">
      <Card title="Remote App 1">
        <p className="mb-4">This is a micro frontend app that can run independently or be loaded into the host app.</p>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Card>
    </div>
  );
};

export default App;