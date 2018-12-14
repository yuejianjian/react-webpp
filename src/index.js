import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router/router'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import CRM from "./reduce/reduce"

const store = createStore(CRM);
ReactDOM.render(
        <Provider store={store}>
                <div><Router /></div>
        </Provider>
        ,
        document.getElementById('root'));
serviceWorker.unregister();
