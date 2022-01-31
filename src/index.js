import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {DailyFitness} from './Components/DailyFitness.js';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DailyFitness />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();