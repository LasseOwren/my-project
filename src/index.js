import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CabinProvider } from './components/CabinContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CabinProvider>
      <App />
    </CabinProvider>
  </React.StrictMode>
);
