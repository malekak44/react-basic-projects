import React, { createContext, useContext, useReducer, useEffect } from 'react';
import items from '../../data/phones';
import reducer from './reducer';

const AppContext = createContext();
const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
    loading: false,
    cart: items,
    amount: 0,
    total: 0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    }

    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
    }

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart]);

    return (
        <AppContext.Provider value={{ ...state, clearCart, remove, toggleAmount }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };