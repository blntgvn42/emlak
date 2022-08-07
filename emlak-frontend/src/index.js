import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./store";
import {Provider} from "react-redux"
import App from "./App";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            <ToastContainer autoClose={1500} />
        </Provider>
    </BrowserRouter>
);