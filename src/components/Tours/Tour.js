import React, { useState } from 'react';

export default function Tour({ tour, removeTour }) {
    const { id, name, info, image, price } = tour;
    const [readMore, setReadMore] = useState(true);

    return (
        <div className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{readMore ? info.substr(0, 200).concat("...") : info}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Read More" : "Show Less"}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
        </div>
    )
}