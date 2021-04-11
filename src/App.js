import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Facade from './components/Facade/Facade';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Facade />
                </Route>
                <Route path='/id'>todo detail</Route>
            </Switch>
        </Router>
    );
}

export default App;
