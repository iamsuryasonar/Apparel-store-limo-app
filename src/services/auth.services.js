import axios from "axios";
import { API_URL } from '../utils/constants';
import {  deleteToken } from "../utils/tokenUtility";

const register = (credentials) => {
    return axios.post(API_URL + 'auth/customer_register', credentials)
}

const login = async (credentials) => {
    return axios
        .post(API_URL + "auth/customer_login", credentials)
        .then((response) => {
            return response.data.results;
        });
}

const logout = () => {
    deleteToken();
};

const AuthService = {
    register,
    login,
    logout
}

export default AuthService;