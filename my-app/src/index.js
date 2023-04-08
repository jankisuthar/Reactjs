import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap5/src/css/bootstrap.min.css'
// import Home from './component/Home'
import reportWebVitals from './reportWebVitals';
// import Home from './component/Home.jsx'
import Header from './component/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
     <Header/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
