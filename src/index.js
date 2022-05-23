import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Hierarchy/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './Hierarchy/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);
reportWebVitals();
