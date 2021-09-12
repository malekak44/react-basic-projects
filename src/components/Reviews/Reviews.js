import React, { useState } from 'react';
import data from '../../data/reviews';
import Review from './Review';
import './Reviews.css';

export default function Reviews() {
    const [reviews, setReviews] = useState(data);
    const [index, setIndex] = useState(0);

    const checkNumber = (number) => {
        let lastIndex = reviews.length - 1;
        if (number < 0) {
            return lastIndex;
        }
        if (number > lastIndex) {
            return 0;
        }
        return number;
    }

    const prevPerson = () => {
        let newIndex = index - 1;
        setIndex(checkNumber(newIndex));
    }

    const nextPerson = () => {
        let newIndex = index + 1;
        setIndex(checkNumber(newIndex));
    }

    const randomPerson = () => {
        let randomNum = Math.floor(Math.random() * reviews.length - 1);
        if (randomNum === index) {
            randomNum = index + 1;
        }
        setIndex(checkNumber(randomNum));
    }

    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Reviews</h2>
                    <div className="underline"></div>
                </div>
                <Review review={reviews[index]} prevPerson={prevPerson} nextPerson={nextPerson} randomPerson={randomPerson} />
            </section>
        </main>
    )
}