import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function Question({ question }) {
    const { title, info } = question;
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <FaMinus /> : <FaPlus />}
                </button>
            </header>
            <p>{showInfo && info}</p>
        </article>
    )
}