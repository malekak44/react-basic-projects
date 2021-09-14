import React, { useEffect } from 'react';

export default function Alert({ type, msg, removeAlert, list }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }, [list]);
    return <p className={`alert alert-${type}`}>{msg}</p>
}