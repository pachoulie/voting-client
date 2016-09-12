import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map } from 'immutable';
import io from 'socket.io-client';
import reducer from '../reducer';
import { setState } from '../actionCreators';
import removeActionMiddleware from '../remoteAction.middleware';
import { VotingContainer } from '../components/Voting';
import { ResultsContainer } from '../components/Results';
import App from '../App';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
    removeActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer, Map());

socket.on('state', state => {
    store.dispatch(setState(state));
});

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <Route path="/results" component={ResultsContainer}/>
                        <Route path="/" component={VotingContainer}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}