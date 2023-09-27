import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';import { Provider } from "react-redux";
import store from "./Store/store";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications-component/dist/theme.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
 </Provider>
);

