import React from 'react';

import App from './component/App/App';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <App />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
