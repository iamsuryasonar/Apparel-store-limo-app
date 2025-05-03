import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartServices from "../../services/cart.services";

export const get_all_cart_items = createAsyncThunk(
    'cart/get_all_cart_items',
    async (_, thunkAPI) => {
        try {
            let response = await CartServices.getAllCartItems();
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            console.log(error.response)
            return thunkAPI.rejectWithValue();
        }
    }
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (data, thunkAPI) => {
        try {
            let response = await CartServices.addToCart(data);
            thunkAPI.dispatch(get_all_cart_items());
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue();
        }
    }
)

export const updateItemQuantity = createAsyncThunk(
    'cart/update_item_quantity',
    async (data, thunkAPI) => {
        try {
            let response = await CartServices.updateItemQuantity(data);
            thunkAPI.dispatch(get_all_cart_items());
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue();
        }
    }
)

export const remove_item_from_cart = createAsyncThunk(
    'cart/remove_item_from_cart',
    async (data, thunkAPI) => {
        try {
            let response = await CartServices.removeItemFromCart(data);
            thunkAPI.dispatch(get_all_cart_items());
            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue();
        }
    }
)

const initialState = {
    cart: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementQuantity: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                state.cart[index].quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload);
            if (index !== -1) {
                state.cart[index].quantity -= 1;
            }
        },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(get_all_cart_items.fulfilled, (state, action) => {
                    state.cart = action.payload;
                }).addCase(get_all_cart_items.rejected, (state, action) => {
                })
        },
})

const { reducer, actions } = cartSlice;
export const { incrementQuantity, decrementQuantity } = actions
export default reducer;