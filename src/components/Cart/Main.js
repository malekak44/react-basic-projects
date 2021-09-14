import React from 'react';
import Cart from './Cart';
import { AppProvider } from './Context';

export default function Main() {
    return (
        <AppProvider>
            <Cart />
        </AppProvider>
    )
}