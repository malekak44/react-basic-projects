import React from 'react';

export default function Food({ food }) {
    const { title, price, img, desc } = food;

    return (
        <article className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </article>
    )
}