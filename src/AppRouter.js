import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PostPage from "./page/PostPage";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <PostPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
