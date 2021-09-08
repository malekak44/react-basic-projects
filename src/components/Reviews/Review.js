import React, { useState } from 'react';
import reviews from '../../data/reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Review() {
    const [index, setIndex] = useState(0);
    const person = reviews[index];
    const { image, name, job, text } = person;

    const checkNumber = (num) => {
        if (num > reviews.length - 1) {
            return num = 0;
        }
        if (num < 0) {
            return num = reviews.length - 1;
        }
        return num;
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
        let randomNum = Math.floor(Math.random() * reviews.length);
        if (randomNum === index) {
            randomNum = index + 1;
        }
        setIndex(checkNumber(randomNum));
    }

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FontAwesomeIcon icon={faQuoteRight} />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>
    )
}