import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import io from 'socket.io-client';
import reducer from './reducer';
import { setState } from './actionCreators';
import removeActionMiddleware from './remoteAction.middleware';
import App from './App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';
import './index.css';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
    store.dispatch(setState(state));
});

const createStoreWithMiddleware = applyMiddleware(
    removeActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer, Map());

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer}/>
    <Route path="/" component={VotingContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
