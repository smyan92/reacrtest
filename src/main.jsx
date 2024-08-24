import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
