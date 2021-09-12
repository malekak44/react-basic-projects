import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './AllTours.css';

export default function AllTours() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const url = 'https://course-api.com/react-tours-project';

    const fetchTours = async () => {
        setLoading(true);
        try {
            let response = await fetch(url);
            let data = await response.json();
            setLoading(false);
            setTours(data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
            <main>
                <section>
                    <Loading />
                </section>
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No Tours Left</h2>
                    <button className="btn" onClick={fetchTours}>Refresh</button>
                </div>
            </main>
        )
    }

    const removeTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    }

    return (
        <main>
            <section>
                <div className="title">
                    <h2>Our Tours</h2>
                    <div className="underline"></div>
                </div>
                <Tours tours={tours} removeTour={removeTour} />
            </section>
        </main>
    )
}