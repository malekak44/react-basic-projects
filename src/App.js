import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Project from './pages/Project';
import Error from './pages/Error';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/:project" component={Project}/>
                <Route path="*" component={Error}/>
            </Switch>
        </Router>
    )
}