import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from '../../services/product.services';

export const get_products = createAsyncThunk(
    'product/get_products',
    async (data, thunkAPI) => {
        try {
            thunkAPI.dispatch(clearProducts());
            let response = await productsService.getProducts(data);
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

export const get_more_products = createAsyncThunk(
    'product/get_more_products',
    async (data, thunkAPI) => {
        try {
            let response = await productsService.getProducts(data);
            console.log(response)
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

const initialState = {
    products: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_products.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(get_products.rejected, (state, action) => {
                state.products = null;
            }).addCase(get_more_products.fulfilled, (state, action) => {
                state.products.products.push(...action.payload.products)
                state.products.pagination = action.payload.pagination;
            })
            .addCase(get_more_products.rejected, (state, action) => {
            })
    },
});

const { reducer, actions } = productsSlice;
export const { clearProducts } = actions;
export default reducer;