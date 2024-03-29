import React from 'react';
import './Cart.scss';
import { useGlobalContext } from './Context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

export default function Cart() {
    const { loading } = useGlobalContext();
    if (loading) {
        return (
            <div className='loading'>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div id="cart">
            <Navbar />
            <CartContainer />
        </div>
    )
}