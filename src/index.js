import React from 'react';
import ReactDOM from 'react-dom/client';
import PrintName from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(<PrintName />);
}, 1000);
root.render(<PrintName />);