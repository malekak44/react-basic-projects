import React from 'react';
import './CockTails.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from './Context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';

export default function CockTails() {
    return (
        <main id="cocktails">
            <AppProvider>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/Cocktails">
                            <Home />
                        </Route>
                        <Route path="/Cocktails/cocktail/:id">
                            <SingleCocktail />
                        </Route>
                        <Route path="/Cocktails/about">
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </AppProvider>
        </main>
    )
}