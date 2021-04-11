import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Routine from './components/Routine/Routine';
import RoutineForm from './components/RoutineForm/RoutineForm';
function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Routine />
                </Route>
                <Route path='/add'>
                    <RoutineForm />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
