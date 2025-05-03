import { configureStore } from "@reduxjs/toolkit";
import authReducer, { initialiseUser } from '../store/slices/authSlice';
import cartReducer from '../store/slices/cartSlice';
import productReducer from '../store/slices/productSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        product: productReducer,
    },
});

store.dispatch(initialiseUser());
