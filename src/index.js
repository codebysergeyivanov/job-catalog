import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reduser from './redusers'
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

const store = createStore(connectRouter(history)(reduser), compose( applyMiddleware( routerMiddleware(history), thunk) ) );

ReactDOM.render(
<Provider store={store}> 
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
