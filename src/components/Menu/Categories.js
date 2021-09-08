import React from 'react';

export default function Categories({ categories, filterFoods }) {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterFoods(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}