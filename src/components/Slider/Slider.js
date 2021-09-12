import React, { useEffect, useState } from 'react';
import data from '../../data/people';
import './Slider.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export default function Slider() {
    const [people, setPeople] = useState(data);
    const [index, setindex] = useState(0);

    const checkNumber = (number) => {
        let lastIndex = data.length - 1;
        if (number < 0) {
            return lastIndex;
        }
        if (number > lastIndex) {
            return 0;
        }
        return number;
    }

    useEffect(() => {
        checkNumber(index);
    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setindex(checkNumber(index + 1));
        }, 3000);

        return () => {
            clearInterval(slider);
        }
    }, [index]);

    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>Reviews</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let slide = "nextSlide";

                    if (personIndex === index) {
                        slide = "activeSlide";
                    }

                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        slide = "lastSlide"
                    }

                    return (
                        <article key={id} className={slide}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    )
                })}
                <button className="prev" onClick={() => setindex(checkNumber(index - 1))}><FaChevronLeft /></button>
                <button className="next" onClick={() => setindex(checkNumber(index + 1))}><FaChevronRight /></button>
            </div>
        </section>
    )
}