import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap5/src/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Show from './crud/ShowData'
import { Provider } from 'react-redux';
import store from './store'
import Home from './crud/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
    <Show/>
    <Home/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
