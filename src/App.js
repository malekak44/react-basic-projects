import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Error from './components/Home/Error';
import Home from './components/Home/Home';
import Project from './components/Home/Project';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/:title">
                    <Project />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}