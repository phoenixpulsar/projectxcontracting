import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initAnalytics, initClarity } from './lib/integrations.js';

createRoot(document.getElementById('root')).render(<App />);
// Load third parties after first paint, never blocking render.
window.addEventListener('load', () => { initAnalytics(); initClarity(); });
