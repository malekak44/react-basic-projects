import React, { useState } from 'react';
import './BirthdayReminder.scss';
import birthdays from '../../data/birthdays';
import List from './List';

export default function BirthdayReminder() {
    const [persons, setPersons] = useState(birthdays);

    return (
        <main id="birthday">
            <div className="container">
                <h3>{persons.length} birthdays today</h3>
                <List persons={persons} />
                {persons.length > 0 ? <button onClick={() => setPersons([])}>Clear All</button> : <button onClick={() => setPersons(birthdays)}>Get All</button>}
            </div>
        </main>
    )
}