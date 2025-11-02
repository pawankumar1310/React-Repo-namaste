import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // name of the cart
    name : 'cart',
    // what is the initial value in the cart
    initialState : {
        items : []
    },
    // action and reducers function
    reducers : {
        addItem : (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;