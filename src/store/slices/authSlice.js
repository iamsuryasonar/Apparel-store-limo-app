import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.services";
import { getToken, saveToken, isValidToken } from "../../utils/tokenUtility";

export const initialiseUser = createAsyncThunk(
    'auth/initialise',
    async (_, thunkAPI) => {
        try {
            const accessToken = await getToken();

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
    isLoggedIn: false,
    accessToken: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(initialiseUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(initialiseUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.accessToken = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.accessToken = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.accessToken = action.payload.accessToken;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.accessToken = null;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.accessToken = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.accessToken = null;
            });
    },
});

const { reducer } = authSlice;
export default reducer;