import React from 'react';

import App from './components/App/App';
// import Login from './components/Login/Login';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import AuthService from './redux/firebase/authSerive';
// import FbRepository from './redux/firebase/firebaseRepository';
import MockingRepository from "./redux/repository/mockingRepository";

// const authService = new AuthService();
const db = new MockingRepository();

function AppRouter() {
    return (
        <Router>
            <Switch>
                {/*<Route path='/' exact>*/}
                {/*    <Login authService={authService} />*/}
                {/*</Route>*/}
                <Route path='/' exact>
                    <App db={db} />
                </Route>
                <Route path='/id'>todo detail</Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
