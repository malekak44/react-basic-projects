import React, { useState } from 'react';
import Tour from './Tour';
import './Tours.css';
import data from '../../data/tours';

export default function Tours() {
    const [tours, setTours] = useState(data);

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    return (
        <section className="main">
            <div className="title">
                <h2>our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </section>
    )
}