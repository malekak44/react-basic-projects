import React, { useState } from 'react';
import './BirthdayReminder.css';
import { birthdays } from '../../data/birthdays';
import List from './List';

export default function BirthdayReminder() {
    if (window.location.href.includes("birthday-reminder")) {
        document.title = "Birthday Reminder";
    }
    const [persons, setPersons] = useState(birthdays);
    const [clearBtnDisplay, setClearBtnDisplay] = useState('show');
    const [getBtnDisplay, setGetBtnDisplay] = useState('hide');

    return (
        <main>
            <section className='container'>
                <h3>{persons.length} birthdays today</h3>
                <List persons={persons} />
                <button className={clearBtnDisplay} onClick={() => { setPersons([]); setClearBtnDisplay('hide'); setGetBtnDisplay('show'); }}>clear all</button>
                <button className={getBtnDisplay} onClick={() => { setPersons(birthdays); setGetBtnDisplay('hide'); setClearBtnDisplay('show') }}>get all</button>
            </section>
        </main>
    )
}