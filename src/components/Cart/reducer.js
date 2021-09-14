const reducer = (state, action) => {
    switch (action.type) {

        case 'DISPLAY_ITEMS':
            return { ...state, cart: action.payload, loading: false };

        case 'CLEAR_CART':
            return { ...state, cart: [] };

        case 'REMOVE':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

        case 'TOGGLE_AMOUNT':
            let tempCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    if (action.payload.type === 'increment') {
                        return { ...item, amount: item.amount + 1 };
                    }
                    if (action.payload.type === 'decrement') {
                        return { ...item, amount: item.amount - 1 };
                    }
                }
                return item;
            }).filter(item => item.amount !== 0);
            return { ...state, cart: tempCart };

        case 'LOADING':
            return { ...state, loading: true };

        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce((cartTotal, item) => {
                const { price, amount } = item;
                const itemTotal = price * amount;
                
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            }, { total: 0, amount: 0 });

            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };


        default:
            throw new Error("No valid action found!");
    }
}

export default reducer;