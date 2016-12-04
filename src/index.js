///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.html
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
window.Tether = require('tether');
require('bootstrap/dist/js/bootstrap');

/////////////////////////////////////////////////////////////////////////
// browserHistory would be preferred over hashHistory, but browserHistory 
// would require configuring the server. So we will use hashHistory here.
// Please change to browserHistory if you have your own backend server.
// import {browserHistory as history} from 'react-router';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
const history = useRouterHistory(createHashHistory)();
//////////////////////////////////////////////////////////////////////////

import configureStore from './store/configureStore';
import connectToAlerts from './utils/socketUtils';

import App from './containers/app/App';
import './index.css';

const store = configureStore();
connectToAlerts(store);

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('wrapper')
);
