
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@cloud-monorepo/ui';
import Errors from "../../../errors"

// Lazy load microfrontend components
const Remote1App = lazy(() => import('remote1/App'));
const Remote2App = lazy(() => import('remote2/App'));

// Local components
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-blue-600 hover:text-blue-800">Products</Link>
              </li>
              <li>
                <Link to="/remote1" className="text-blue-600 hover:text-blue-800">Remote App 1</Link>
              </li>
              <li>
                <Link to="/remote2" className="text-blue-600 hover:text-blue-800">Remote App 2</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
       <Errors  fallback={<div>Failed to load remote app.</div>}>  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/remote1/*" element={<Remote1App />} />
              <Route path="/remote2/*" element={<Remote2App />} />
            </Routes>
            </Errors>
          </Suspense>
        </main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>© 2025 My Monorepo Application</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;