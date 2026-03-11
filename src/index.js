import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';
import App from './app/App';
import { HashRouter as Router } from 'react-router-dom';

// Did it this way to try my hand at other ways to acoomplish my goal..
ReactDom.render (
  <Router>
    <App />
  </Router>
,document.getElementById('root'));
