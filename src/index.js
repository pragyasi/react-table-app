import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//hooking App to the root element of index.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
