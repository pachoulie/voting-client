import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hasHistory } from 'react-router';
import App from './App';
import Voting from './components/Voting';
import './index.css';

const routes = <Route component={App}>
    <Route path="/" component={Voting}/>
</Route>;

ReactDOM.render(
   <Router history={hasHistory}>{routes}</Router>,
    document.getElementById('app')
);
