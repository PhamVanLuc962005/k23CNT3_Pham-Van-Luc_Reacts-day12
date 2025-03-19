
 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
 import reportWebVitals from './reportWebVitals';
 import PvlApp from './PvlApp';
 
 const PvlRoot = ReactDOM.createRoot(document.getElementById('PvlRoot'));
 PvlRoot.render(
   <React.StrictMode>
     <PvlApp />
   </React.StrictMode>
 );
 
 // If you want to start measuring performance in your app, pass a function
 // to log results (for example: reportWebVitals(console.log))
 // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
