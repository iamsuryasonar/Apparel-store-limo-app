import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.services";
import { getToken, saveToken, isValidToken } from "../../utils/tokenUtility";

export const initialiseUser = createAsyncThunk(
    'auth/initialise',
    async (_, thunkAPI) => {
        try {
            const accessToken = await getToken();
            console.log(accessToken)

            if (!accessToken) {
                return thunkAPI.rejectWithValue("Access token not available");
            }
            if (!isValidToken(accessToken)) {
                return thunkAPI.rejectWithValue("Invalid token");
            }

            return { accessToken };

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

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = await AuthService.register(credentials);
            return response.data;
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
);

export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const res = await AuthService.login(credentials);
            const data = {
                accessToken: res.token,
            };
            saveToken(data.accessToken)
            return data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue();
        }
    });

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            AuthService.logout();
            return;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue();
        }
    });

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(initialiseUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(initialiseUser.fulfilled, (state, action) => {
                console.log('fullfilled')

                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;
                state.loading = false;
                state.error = null;
            })
            .addCase(initialiseUser.rejected, (state, action) => {
                console.log('errr')
                state.isAuthenticated = false;
                state.accessToken = null;
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(register.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.accessToken = null;
                state.loading = false;
                state.error = action.payload
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.accessToken = null;
                state.loading = false;
                state.error = action.payload
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.accessToken = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.accessToken = null;
            });
    },
});

const { reducer } = authSlice;
export default reducer;