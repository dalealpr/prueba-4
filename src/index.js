import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Firebase
import './firebase/Firebase'
//Main CSS de SASS
import './css/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

