import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import './index.css'; // Import your global styles
import App from './App'; // Import your root component
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
// Render the App component to the DOM using createRoot
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
