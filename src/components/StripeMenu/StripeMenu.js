import React from 'react';
import './StripeMenu.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import { AppProvider } from './Context';

export default function StripeMenu() {
    return (
        <AppProvider>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </AppProvider>
    )
}