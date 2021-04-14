import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
    useHistory,
} from 'react-router-dom';
import Facade from './components/Facade/Facade';
import Login from './components/Login/Login';
import AuthService from './redux/firebase/authSerive';
import FbRepository from './redux/firebase/firebaseRepository';

const authService = new AuthService();
const db = new FbRepository();

function App() {
    const [user, setUser] = useState({});
    const history = useHistory();
    useEffect(() => {
        authService.onAuthChange((user) => {
            if (user) {
                setUser(user);
            } else {
            }
        });
    }, [authService, history]);
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Login authService={authService} user={user} />
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
