import { configureStore } from "@reduxjs/toolkit";
import authReducer, { initialiseUser } from '../store/slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

store.dispatch(initialiseUser());
