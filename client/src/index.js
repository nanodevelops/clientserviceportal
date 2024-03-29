import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.scss';
import App from './App';
import { ColorContextProvider } from './ColorContext/darkContext'; 
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorContextProvider>
        <App />
      </ColorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


