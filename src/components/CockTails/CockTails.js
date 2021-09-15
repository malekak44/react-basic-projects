import React from 'react';
import './CockTails.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from './Context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';

export default function CockTails() {
    return (
        <main id="cocktails">
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
        </main>
    )
}