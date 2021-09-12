import React, { useState } from 'react';
import data from './data';
import Review from './Review';

export default function Reviews() {
    const [reviews, setReviews] = useState(data);

    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline"></div>
                </div>
                <Review reviews={reviews} />
            </section>
        </main>
    )
}