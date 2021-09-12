import React, { useState } from 'react';
import './BirthdayReminder.css';
import birthdays from '../../data/birthdays';
import List from './List';

export default function BirthdayReminder() {
    if (window.location.href.includes("birthday-reminder")) {
        document.title = "Birthday Reminder";
    }
    const [persons, setPersons] = useState(birthdays);

    return (
        <main>
            <div className="container">
                <h3>{persons.length} birthdays today</h3>
                {/* {persons.map(person => <List key={person.id} person={person} />)}
                {persons.length > 0 ? <button onClick={() => setPersons([])}>Clear All</button> : <button onClick={() => setPersons(birthdays)}>Get All</button>} */}
            </div>
        </main>
    )
}