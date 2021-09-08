import React, { useState } from 'react';
import './Menu.css';
import foods from '../../data/foods';
import Food from './Food';
import Categories from './Categories';
const allCategories = ['all', ...new Set(foods.map(food => food.category))];

export default function Menu() {
    const [foodItems, setFoodItems] = useState(foods);
    const [categories, setCategories] = useState(allCategories);

    const filterFoods = (category) => {
        if (category === 'all') {
            setFoodItems(foods);
            return;
        }
        const newFoods = foods.filter(food => food.category === category);
        setFoodItems(newFoods);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterFoods={filterFoods} />
                <Food foods={foodItems} />
            </section>
        </main>
    )
}