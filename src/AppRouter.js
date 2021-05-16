import React, {useEffect} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PostPage from "./page/PostPage";
import {useDispatch} from "react-redux";
import {getPostsEvent} from "./redux/slices/postSlice";
import {getStocksEvent} from "./redux/slices/stockSlice";

function AppRouter() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsEvent());
        dispatch(getStocksEvent());
    }, [dispatch]);

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
