import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';
import io from 'socket.io-client';
import reducer from './reducer';
import App from './App';
import { VotingContainer } from './components/Voting';
import { Results } from './components/Results';
import './index.css';

const store = createStore(reducer, Map());

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
    store.dispatch({type: 'SET_STATE', state});
});

const routes = <Route component={App}>
    <Route path="/results" component={Results}/>
    <Route path="/" component={VotingContainer}/>
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
