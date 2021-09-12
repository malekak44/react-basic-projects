import React, { useState } from 'react';
import Categories from './Categories';
import data from '../../data/foods';
import Food from './Food';
import './Menu.css';
const categories = ["all", ...new Set(data.map(data => data.category))];

export default function Menu() {
    const [foods, setFoods] = useState(data);

    const filterFoods = (category) => {
        if (category === "all") {
            setFoods(data);
        } else {
            setFoods(data.filter(food => food.category === category));
        }
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterFoods={filterFoods} />
                <div className="section-center">
                    {foods.map(food => <Food key={food.id} food={food} />)}
                </div>
            </section>
        </main>
    )
}