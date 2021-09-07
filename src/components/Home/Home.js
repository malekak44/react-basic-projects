import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import BirthdayReminder from "../BirthdayReminder/BirthdayReminder";

export default function Home() {
    return (
        <Router>
            <Switch>
                <Route path="/birthday-reminder">
                    <BirthdayReminder />
                </Route>
                <Route path="/users">
                </Route>
                <Route path="/">
                </Route>
            </Switch>
        </Router>
    );
}