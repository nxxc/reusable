import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PostList from "./page/PostList";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <PostList />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
