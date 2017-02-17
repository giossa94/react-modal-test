import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <App 
  	count={232}
  	maxSearchResults={5}
   />,
  document.getElementById('root')
);
