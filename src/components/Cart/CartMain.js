import React from 'react';
import Cart from './Cart';
import { AppProvider } from './Context';

export default function CartMain() {
    return (
        <AppProvider>
            <Cart />
        </AppProvider>
    )
}