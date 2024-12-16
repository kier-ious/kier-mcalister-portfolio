import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import App from './App';
import './styles.css';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
