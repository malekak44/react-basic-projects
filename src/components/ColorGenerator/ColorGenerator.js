import React, { useState } from 'react';
import Values from 'values.js';
import './ColorGenerator.scss';
import Color from './Color';

export default function ColorGenerator() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#ccc").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const colors = new Values(color).all(10);
            setList(colors);
            setError(false);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }

    return (
        <div id="color-generator">
            <section className="container">
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className={error ? "error" : "normal"} placeholder="#ccc" />
                    <button type='submit' className="btn">Submit</button>
                </form>
            </section>
            <section className="colors">
                {
                    list.map((color, index) => <Color key={index} {...color} index={index} hexColor={color.hex} />)
                }
            </section>
        </div>
    )
}