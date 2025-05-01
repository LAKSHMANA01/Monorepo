
import React from 'react';
import { Card } from '@cloud-monorepo/ui';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to the Host Application</h1>
      <p className="mb-6">This is the container application that loads micro frontends.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="What are Micro Frontends?">
          Micro frontends are an architectural pattern where frontend applications 
          are decomposed into smaller, semi-independent "microapps" working loosely together.
        </Card>
        
        <Card title="Benefits">
          <ul className="list-disc pl-5">
            <li>Independent deployment</li>
            <li>Autonomous teams</li>
            <li>Separate codebases</li>
            <li>Technology agnostic</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;