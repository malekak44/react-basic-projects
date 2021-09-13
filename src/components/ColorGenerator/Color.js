import React, { useState, useEffect } from 'react';

export default function Color({ index, weight, rgb, hexColor }) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');

    const copy = () => {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexColor}`);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, [alert]);

    return (
        <article onClick={copy} className={`color ${index > 10 && "color-light"}`} style={{ backgroundColor: `rgb(${bcg})` }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hexColor}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    )
}