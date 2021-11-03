import React from 'react';
import ReactDOM from 'react-dom';
import Desktop from './pages/Desktop';
import reportWebVitals from './reportWebVitals';
import "./assets/styles/_main.scss"

ReactDOM.render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
