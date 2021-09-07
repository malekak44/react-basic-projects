import React, { useState } from 'react';
import './BirthdayReminder.css';
import { birthdays } from '../../data/birthdays';
import List from './List';

export default function BirthdayReminder() {
    if (window.location.href.includes("birthday-reminder")) {
        document.title = "Birthday Reminder";
    }
    const [persons, setPersons] = useState(birthdays);

    const handleClick = () => {
        const btn = document.getElementById("btn");
        btn.innerText = "clear all" ? "get all" : "clear all";
        if (setPersons(birthdays)) {
            setPersons([]);
        } else {
            setPersons(birthdays);
        }
    }
    return (
        <main>
            <section className='container'>
                <h3>{persons.length} birthdays today</h3>
                {persons.map(person => <List key={person.id} person={person}></List>)}
                <button id="btn" type="button" onClick={handleClick}>clear all</button>
            </section>
        </main>
    )
}