import React from 'react';
import './StripeMenu.scss';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { AppProvider } from './Context';

export default function StripeMenu() {
    return (
        <main id="stripe-menu">
            <AppProvider>
                <Navbar />
                <Sidebar />
                <Hero />
                <Submenu />
            </AppProvider>
        </main>
    )
}