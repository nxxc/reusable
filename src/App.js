import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Facade from './components/Facade/Facade';
import Login from './components/Login/Login';
import AuthService from './redux/firebase/authSerive';
import FbRepository from './redux/firebase/firebaseRepository';

const authService = new AuthService();
const db = new FbRepository();

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Login authService={authService} />
                </Route>
                <Route path='/app' exact>
                    <Facade authService={authService} db={db} />
                </Route>
                <Route path='/id'>todo detail</Route>
            </Switch>
        </Router>
    );
}

export default App;
