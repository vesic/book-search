import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, hashHistory } from 'react-router'
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('root')
);
