import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'

import notFoundPage from '../components/notFoundPage.js'
import DashboardPage from '../components/dashboardPage.js'
import loginPage from '../components/loginPage'

import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'

import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

// The browserRouter create his own instance of history 
// When we install and use the history library we can  pass and use our own history
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={loginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={DashboardPage} />
                <Route component={notFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter



