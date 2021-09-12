import React from 'react'

export default function Categories({ categories, filterFoods }) {


    return (
        <div className="btn-container">
            {categories.map((category, index) => <button key={index} type="button" className="filter-btn" onClick={() => filterFoods(category)}>{category}</button>)}
        </div>
    )
}
