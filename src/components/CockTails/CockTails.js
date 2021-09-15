import React from 'react';
import './CockTails.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from './Context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';

export default function CockTails() {
    return (
        <AppProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cocktail/:id">
                        <SingleCocktail />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </AppProvider>
    )
}